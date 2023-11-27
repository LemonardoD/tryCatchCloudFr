<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { error } from "@sveltejs/kit";
    import Loader from "../../components/loader.svelte";
	import { changeDate, generatePageArray } from "./error-log";
	import { onMount } from "svelte";

    let loaded: boolean;
    export let data

    let checked = false
    $: pageNumber = Number($page.url.searchParams.get('page')) ||1
    $: tableData = data.apiInfo.result
    $: pageList = generatePageArray(pageNumber, Number(data.apiInfo.rowCount))
    
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
            tableData = data.apiInfo.result
            stopAutoUpdate();
        }
    }
</script>

{#if !loaded}
    <Loader/>
{:else}
    <div class="page">
        <div class="content">
            <header class="cardHeader">
                <p class="cardHeaderTitle">Errors</p>
                <p class="switchLabel">Auto update</p>
                <div class="switch">
                    <label>
                    <input type="checkbox" bind:checked />
                    <span class="slider"></span>
                    </label>
                </div>
            </header>
                {#if !tableData || (tableData && !tableData.length)}
                    <div class="cardContent">
                        <p class="noData">
                            No data
                        </p>
                    </div>
                {:else}
                    <div class="cardContent">
                        <table>
                            <thead>
                                <th>Tag</th>
                                <th>Includes</th>
                                <th>Time</th>
                            </thead>
                            <tbody>
                                {#each tableData  as item}
                                    <tr class="haveRef" on:click={() => {goto(`/details?errId=${item.errorLogId}`)}}>
                                        <td data-label="Tag"><pre>{item.errorMethod.length === 3? item.errorMethod.padEnd(4, " ")+` ${item.errorTag}`: item.errorMethod +` ${item.errorTag}`}</pre></td>
                                        {#if item.context && item.stack}
                                            <td data-label="Includes">metadata, stack, context</td>
                                        {:else if item.context && !item.stack}
                                            <td data-label="Includes">metadata, context</td>
                                        {:else if !item.context && item.stack}
                                            <td data-label="Includes">metadata, stack</td>
                                        {:else}
                                            <td data-label="Includes">metadata</td>
                                        {/if}
                                            <td data-label="Time">{changeDate(item.errorTime)}</td>
                                    </tr>
                                    {/each}
                            </tbody>
                        </table>
                        {#if !checked}
                            {#if pageList.length === 1}
                            <div class="tablePaginationOnePage">
                                <small class="onePageLabel">Page 1 of 1</small>
                            </div>
                            {:else}
                                <div class="tablePagination">
                                    {#each pageList as numPage}
                                        <button  on:click ={() => {goto(`/error-logs?page=${numPage}`)}} class="pages {numPage === pageNumber ? 'active' : ''}">
                                            {numPage} 
                                        </button>
                                    {/each}
                                    <small class="pageLabel">Page {pageNumber} of {pageList[pageList.length -1 ]}</small>
                                </div>
                            {/if}
                        {/if}
                    </div>
                {/if}
        </div>
    </div>
{/if}



<style>
    button.pages.active {
        border: 1px solid #424242
    }

    button.pages:hover{
        border: 1px solid #a7a7a7;
    }

    button.pages{
        cursor: pointer;
        color: #fff;
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        border-radius: 4px;
        border: 1px solid #f9fafb;
        padding: 8px 16px;
        text-align: center;
        margin: 0px 4px;
        background: none;
        -webkit-tap-highlight-color: transparent;
    }
    .onePageLabel{
        margin: 0;
        padding: 0;
        font-size: 13px;
        float: left;
    }
    .pageLabel{
        padding-top: 10px;
        font-size: 13px;
        float: right;
    }
    .tablePaginationOnePage{
        display: flex;
        border-top: 1px solid #a7a7a7;
        padding: 21px 24px;
        align-items: center;
    }
    .tablePagination{
        border-top: 1px solid #a7a7a7;
        padding: 10px 24px;
    }
    ::-webkit-scrollbar {
        width: 12px;
		position: absolute;
		right: 0px;
	}
	::-webkit-scrollbar-track {
		background: #f9fafb;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
    .haveRef{
        cursor: pointer;
    }
   
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
    pre{
        font-family: 'JetBrains Mono', monospace;
        margin: 0;
    }
    .page{
        
        left: 50%;
        transform: translate(-50%);
        position: relative;
        padding: 0 20px;
        font-family: 'JetBrains Mono', monospace;
    }

    td::before {
        content: attr(data-label);
        text-align: left;
        font-weight: 600;
    }

    tr {
        position: relative;
        display: block;
        border-bottom: 2px solid #fff;
    }

    td{ 
        display: flex;
        justify-content: space-between;
        padding: 9px;
        text-align: right;
        vertical-align: top;
    }

    table {
        margin: 0;
        width: 100%;
        border-collapse: collapse;
    }

    .cardContent{
        background-color: #191919;
        margin-top: 8px;
        color: #ffffff;
        padding: 20px;
        padding-bottom: 8px;
        border-radius: 20px;
        border: 0.5px solid #2a2929;
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

    .cardHeaderTitle{
        font-family: sans-serif, "Open Sans";
        color: #949494;;
        margin-left: 22px;
        margin-top: 0;
        margin-bottom: 0;
        flex-grow: 1;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding:  16px;
    }

    .cardHeader{
        background-color: #191919;
        height: 48px;
        display: flex;
        align-items: stretch;
        border-radius: 20px;
        font-family: sans-serif, "Open Sans";
        border: 0.5px solid #2a2929;
    }

    @media (max-width: 1100px) {
        thead {
            display: none;
        }
        .cardContent{
            padding: 24px;
        }
        
    }

    @media (min-width: 1099px) {
        
        .page{
            width: 65%;
        }

        th{
            padding: 8px 12px;
            text-align: left;
            font-size: 16px;
        }
        tr {
            display: table-row;
            border-bottom-width: 0
        }
        td::before {
            display: none;
        }
        td{
            display: table-cell;
            border-bottom-width: 0px;
            text-align: left;
            vertical-align: middle;
        }
        tr:hover td{
            background-color: #222
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