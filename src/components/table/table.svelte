<script lang="ts">
	import { goto } from "$app/navigation";
	import type { ErrorLogs } from "../../types/types";
	import { changeDate } from "./table";
   
    export let tblName: string
    export let data: ErrorLogs[] | undefined
    export let cookie: string | undefined

    let checked = false;
    let intervalId: NodeJS.Timeout
    let tableData = data
    function ChangeLive() {
        checked =!checked
    }
    $: if (checked) {
        
        intervalId = setInterval(async () =>{
            if(cookie){const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/err-log/all`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookie}`,
            },
            redirect: "error",
            referrerPolicy: "no-referrer",
        });
        const data: { message: ErrorLogs[] } = await apiResponse.json();
        tableData = data.message
        }
        }, 5000);
    } else {
       
        clearInterval(intervalId);
    }
    
</script>


<div class="page">
    <div class="content">
        <header class="cardHeader">
            <p class="cardHeaderTitle">{tblName}</p>
            <p class="switchLabel">Auto update</p>
            <div class="switch">
                <label>
                  <input type="checkbox" bind:checked on:click={() =>{ChangeLive()}} />
                  <span class="slider"></span>
                </label>
              </div>
        </header>
            {#if !tableData}
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
                                    <td data-label="Tag">{item.errorMethod +" "+ item.errorTag}</td>
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
                </div>
                <div class="paginationContent">
                    <ul class="pagination">
                        <li>
                          <a href="#">Prev</a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li class="active">
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#">Next</a>
                        </li>
                      </ul>
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
    .switchLabel{
        right: 20px;
    }
    
    .page{
        left: 50%;
        transform: translate(-50%);
        position: relative;
        padding: 0 20px;
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
        padding: 9px;
        text-align: right;
        vertical-align: top;
    }

    table {
        margin: 0;
        width: 100%;
        border-collapse: collapse;
    }
    .paginationContent{
        background-color: #27282c;
        margin-top: 8px;
        color: #ffffff;
        padding-left: 36px;
        border-radius: 30px;
    }

    .cardContent{
        background-color: #27282c;
        margin-top: 8px;
        color: #ffffff;
        padding-left: 25px;
        padding-top: 12px;
        padding-bottom: 8px;
        border-radius: 30px;
    }

    .switchLabel{
        color: #ffffff;
        font-family: inherit;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding: 12px 16px 16px;
        margin: 0;
    }

    .cardHeaderTitle{
        font-family: inherit;
        color: #ffffff;
        margin-left: 22px;
        margin-top: 0;
        margin-bottom: 0;
        flex-grow: 1;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding:  12px 16px 16px;
    }

    .cardHeader{
        background-color: #27282c;
        height: 48px;
        display: flex;
        align-items: stretch;
        border-radius: 30px;
    }

    @media (max-width: 1100px) {
        thead {
            display: none;
        }
        .paginationContent{
            display: none   ;
        }
        .cardContent{
            padding: 24px;
        }
        
    }

    @media (min-width: 1099px) {
        
        .page{
            width: 65%;
        }

        .pagination {
            margin: 0;
            position: relative;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(3px);
            border-radius: 40px;
        }
        .pagination li {
            list-style-type: none;
            display: inline-block;
        }
        .pagination li a {
            position: relative;
            padding: 9.5px 25px;
            font-size: 16px;
            border-radius: 35px;
            text-decoration: none;
            color: #fff;
            font-weight: 500;
        }
        .pagination li a:hover,
        .pagination li.active a {
            background: #1d1d21
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
            background-color: #1d1d21
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
        background-color: #800000;
        transition: .4s;
        border-radius: 34px;
    }
              
    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 0;
        top: -5px;
        background-color: #484848;
        outline: none;
        transition: .4s;
        border-radius: 50%;
    }

    input{
        opacity: 0;
    }
    
    input:checked + .slider {
        background-color: #008000;
    }
                
    input:checked + .slider:before {
        transform: translateX(16px);
    }            
</style>