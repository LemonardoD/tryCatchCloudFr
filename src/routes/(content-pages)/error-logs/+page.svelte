<script lang="ts">
	import { error } from "@sveltejs/kit";
    import Loader from "../../../components/loader.svelte";
    import Header from "../../../components/header.svelte";
    import Table from "../../../components/table/table.svelte";
	import { onMount } from "svelte";


    let loaded: boolean;
    export let data

    let checked = false
    $: tableData = data.apiInfo

    // $: pageNumber = Number($page.url.searchParams.get('page')) ||1
    // $: pageList = generatePageArray(pageNumber, Number(data.apiInfo.rowCount))
    
    onMount(()=>{
        loaded = true
    })
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

{#if !loaded}
    <Loader/>
{:else}
    <div class="content">
        <Header backButton={false} header={data.tblHead}>
            <p class="switchLabel">Auto update</p>
            <div class="switch">
                <label>
                <input type="checkbox" bind:checked />
                <span class="slider"></span>
                </label>
            </div>
        </Header>
        {#if !tableData || (tableData && !tableData.length)}
            <div class="cardContent">
                <p class="noData">
                    No data
                </p>
            </div>
        {:else}
            <div class="cardContent">
                <Table headers={["Tag", "Includes", "Time"]} tableName="ErrorLogs" data={tableData}/>
            </div>
        {/if}
    </div>
{/if}



<style>
    
    .noData{
        text-align: center;
        color: #ffffff;
        font-family: inherit;
        font-size: 20px;
        display: block;
        text-transform: uppercase;
        margin: 0;
        font-weight: 300;
        padding: 24px;
    }
    .cardContent{
        color: #ffffff;
        padding:6px 20px 0px 20px;
        margin-bottom: 70px;
    }
    .switchLabel{
        right: 20px;
        color: #949494;
        font-family: inherit;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding: 16px;
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
        top: 20px;
        right: 10px;
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