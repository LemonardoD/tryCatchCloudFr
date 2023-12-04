<script lang="ts">
	import { error } from "@sveltejs/kit";
    import Table from "../../components/table/table.svelte";
    import Header from "../../components/header.svelte";

    export let data

    let checked = false
    $: tableData = data.apiInfo
    
    
    let autoUpdateInterval: NodeJS.Timeout;

    const fetchData = async () => {
        try {
            const response = await fetch(`https://trycatchcloud.fly.dev/api/err-log/live-update`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${data.token}`,
                },
                redirect: "error",
                referrerPolicy: "no-referrer",
            });
            if (response.status !== 200) {
                throw error(response.status, "Something went wrong");
            }
            const newData = await response.json();
            tableData = newData
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const startAutoUpdate = () => {
        fetchData()
        autoUpdateInterval = setInterval(() => {
            fetchData();
        }, 5000);
        
    }

    const stopAutoUpdate = () => {
        clearInterval(autoUpdateInterval);
    }

    $: {
        if (checked) {
            startAutoUpdate();
        } else {
            tableData = data.apiInfo
            stopAutoUpdate();
        }
    }
</script>

<Header header="Projects" hrefSettings="/settings-menu" hrefActive={true}>
    <div class="autoUpd">
        <p class="switchLabel">Auto update</p>
        <div class="switch">
            <label>
            <input type="checkbox" bind:checked />
            <span class="slider"></span>
            </label>
        </div>
    </div>
</Header>
<div class="page">
    <div class="cardContent">
        <Table tableName="ErrorLogs" data={tableData} headers={["Tag", "Includes", "Time"]}/>
    </div>
</div>
<style>

::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-track {
		background-color: #424242;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #737373;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #949494;
	}
     .page{
        height: 600px;
        width: 800px;
        top: 10%;
        overflow-y: auto;
        background-color: #191919;
        border: 1px solid #2a2929;
        left: 50%;
        border-radius: 8px;
        transform: translate(-50%, 25%);
        position: relative;
        padding: 0;
        margin-right: 0;
        font-family: "JetBrains Mono", monospace;
    }

    @media (max-width: 900px) {
        .page{
            width: 90%;
        }
    }
    .autoUpd{
        padding-right: 20px;
        width: 600px;
        margin: 0px auto;
        justify-content: right;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .cardContent{
        color: #ffffff;
        padding:6px 20px 0px 20px;
        margin-bottom: 20px;
    }
    .switchLabel{
        padding-right: 10px;
        color: #949494;
        font-family: inherit;
        font-size: 16px;
        display: flex;
        align-items: center;
        margin: 0;
    }

    @media (max-width: 1100px) {
        .cardContent{
            padding: 24px;
        }  
    }
    
    .switch {
        position: relative;
        display: inline-block;
        width: 35px;
        height: 10px;
    }
              
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #424242;
        transition: .4s;
        border-radius: 34px;
    }
              
    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: -1px;
        top: -5px;
        background-color: #737373;
        outline: none;
        transition: .4s;
        border-radius: 50%;
    }

    input{
        opacity: 0;
    }
    
    input:checked + .slider {
        background-color: #73DC8C;
    }
                
    input:checked + .slider:before {
        transform: translateX(17px);
    }            
</style>