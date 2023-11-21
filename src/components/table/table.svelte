<script lang="ts">
	import { goto } from "$app/navigation";
	import type { ErrorLogs } from "../../types/types";
    const changeDate =(inputDateStr: string) =>{
        const inputDate = new Date(inputDateStr)
        return `${(inputDate.getMonth() + 1).toString().padStart(2, '0')}/${inputDate.getDate().toString().padStart(2, '0')} ${inputDate.toLocaleTimeString()}`;
    } 


    export let tblName: string
    
    export let data: ErrorLogs[] | undefined
  
    
</script>

<div class="Page">
    <div class="content">
        <header class="cardHeader">
            <p class="cardHeaderTitle">{tblName}</p>
        </header>
            {#if !data}
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
                            {#each data  as item}
                                <tr class="haveRef" on:click={() => {goto(`/details?errId=${item.errorLogId}`)}}>
                                    <td data-label="Event Tag">{item.errorMethod +" "+ item.errorTag}</td>
                                    {#if item.context && item.stack}
                                        <td data-label="Includes">metadata, stack, context</td>
                                    {:else if item.context && !item.stack}
                                        <td data-label="Includes">metadata, context</td>
                                    {:else if !item.context && item.stack}
                                        <td data-label="Includes">metadata, stack</td>
                                    {:else}
                                        <td data-label="Includes">metadata</td>
                                    {/if}
                                        <td data-label="Event Time">{changeDate(item.errorTime)}</td>
                                    <!-- {#each Object.entries(item) as [key, value]}
                                    <td data-label="Event Time">{changeDate(item.errorTime)}</td>
                                        {#if key === 'errorTime'}
                                            <td data-label="Event Time">{changeDate(item.errorTime)}</td>
                                        {:else if key === "errorTag"}
                                            <td data-label={key}>{item.errorMethod +" "+  value}</td>
                                        {:else if key === "errorTag"}
                                            <td data-label={key}>{item.errorMethod +" "+  value}</td>
                                        {/if}
                                    {/each} -->
                                </tr>
                                {/each}
                        </tbody>
                    </table>
                </div>
            {/if}
    </div>
</div>


<style>
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
        background-color: #27282c;
        text-align: center;
        color: #ffffff;
        font-family: inherit;
        font-size: 20px;
        display: block;
        text-transform: uppercase;
        box-shadow:inset 0px 1px 1px fadeout(#231F1E, 95%);
        border: 1px solid darken(#231F1E, 5%);
        margin: 0;
        font-weight: 300;
    }
   
    p{  
        color: #ffffff;
        padding: 24px;
        margin: 0;
    }
    
    .Page{
        background-color: #27282c;
        padding: 24px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    td::before {
        content: attr(data-label);
        text-align: left;
        font-weight: 600;
    }

    tr {
        position: relative;
        display: block;
        max-width: 100%;
        border-bottom: 2px solid #fff;
    }

    td{ 
        display: flex;
        justify-content: space-between;
        padding: 9.4px 12px;
        text-align: right;
        vertical-align: top;
    }

    table {
        margin: 0;
        width: 100%;
        border-collapse: collapse;
    }

    .cardContent{
        margin-top: 12px;
        color: #ffffff;
        padding:24px;
        background-color:  #231F1E;
        border-radius: 30px;
    }

    .cardHeaderTitle{
        margin-left: 22px;
        flex-grow: 1;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding: 10px 16px 12px;
    }

    .cardHeader{
        background-color:  #231F1E;
        height: 48px;
        display: flex;
        align-items: stretch;
        border-radius: 30px;
    }

    @media (max-width: 1023px) {
        thead {
            display: none;
        }
        
    }

    @media (min-width: 1023px) {
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
            background-color: #1d1d21
        }
    }
</style>