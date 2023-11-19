<script lang="ts">
	import type { ErrObjForTables } from "../../types/types";
	import { getDate, getTitles, handleClusteredClick, handleRowClick, handleShowAllClick, handleTagClick } from "./table";


    export let tblName: string
    export let clustered: boolean
    export let range: string | undefined
    export let data: ErrObjForTables[] | undefined
    export let errorTag: string | undefined
    
    let headTitles = getTitles(data);

    $: {
        headTitles = getTitles(data);
    }
    
</script>

<div class="Page">
    <div class="content">
        <header class="cardHeader">
            <p class="cardHeaderTitle">{tblName}</p>
            {#if clustered}
                <div class="buttons" >
                    <button on:click={() =>{handleShowAllClick(range)}} class="btn">
                        All Errors
                    </button>
                </div>
            {:else}
                <div class="buttons" >
                    <button on:click={() =>{handleClusteredClick()}} class="btn">
                        Clustered
                    </button>
                </div>
                <div class="buttons" >
                    <button on:click={() =>{handleShowAllClick(range)}} class="btn">
                        All Errors
                    </button>
                </div>
                <div class="buttons" >
                    <button class="btn" id="dropdownButton">
                        {range}
                    </button>
                    <div class="dropdown-content">
                        <p>For all time</p>
                        <p>Last Hour</p>
                        <p>Last 24 Hours</p>
                        <p>Last 7 Days</p>
                        <p>Last 14 Days</p>
                    </div>
                </div>
            {/if}
        </header>
            {#if !headTitles.length}
                <div class="cardContent">
                    <p class="noData">
                        No data
                    </p>
                </div>
            {:else}
                <div class="cardContent">
                    <table>
                        <thead>
                            {#each headTitles as title}
                                <th>{title}</th>
                            {/each}
                            {#if !clustered}
                                <th>Details</th>      
                            {/if}
                        </thead>
                        <tbody>
                            {#if data}
                                {#each data  as item}
                                    {#if clustered}
                                        <tr class="haveRef" on:click={() => handleRowClick(item["Event Tag"])}>
                                            {#each Object.entries(item) as [key, value]}
                                                <td data-label={key}>{value}</td>
                                            {/each}
                                        </tr>
                                    {:else}
                                        <tr>
                                            {#each Object.entries(item) as [key, value]}
                                                {#if key === "Event Time"}
                                                    <td data-label={key}>{getDate(`${value}`)}</td>
                                                {:else if errorTag ==="all" && key === "Event Tag"}
                                                    <td data-label={key}><a href={`/specific-errors?errTag=${value}&range=${range}`} on:click={handleTagClick}>{value}</a></td>
                                                {:else }
                                                    <td data-label={key}>{value}</td>
                                                {/if}
                                            {/each}
                                            <td data-label="Details"><a href={`/`} on:click={handleTagClick}>View</a></td>
                                        </tr>
                                    {/if}
                                {/each}
                            {/if}
                        </tbody>
                    </table>
                </div>
            {/if}
    </div>
</div>


<style>
    .haveRef{
        cursor: pointer;
    }
    a{  
        cursor: pointer;
        color: #2563EB;
        text-decoration: inherit;
        font-family: inherit;
    }
    .noData{
        text-align: center;
        color: lighten(#2a2a2a, 20%);
        font-family: inherit;
        font-size: 20px;
        display: block;
        text-transform: uppercase;
        box-shadow:inset 0px 1px 1px fadeout(white, 95%);
        border: 1px solid darken(#2a2a2a, 5%);
        margin: 0;
        font-weight: 300;
    }
    .btn {
        width: 140px;
        background-color: #16263e;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }

    .buttons {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px #000000;
        z-index: 1;
    }
    
    p{  
        padding: 24px;
        margin: 0;
    }

    .dropdown-content p {
        cursor: pointer;
        color: #000000;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content p:hover {
        background-color: #0c1727;
        color: #ffffff;
    }

    .buttons:hover .dropdown-content {
        display: block;
    }

    .buttons:hover .btn {
        background-color: #000000;
    }
    
    .Page{
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
    }

    td{ 
        display: flex;
        justify-content: space-between;
        padding: 9.4px 12px;
        text-align: right;
        vertical-align: top;
        border-bottom: 1px solid #f3f4f6;
    }

    table {
        margin: 0;
        width: 100%;
        border-collapse: collapse;
    }

    .cardContent{
        padding:24px;
    }

    .cardHeaderTitle{
        margin: 0;
        flex-grow: 1;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding: 10px 16px 12px;
    }

    .cardHeader{
        height: 48px;
        display: flex;
        align-items: stretch;
        border-bottom: 1px solid #f3f4f6;
    }

    .content{
        border: 1px solid #f3f4f6;
        background-color:#ffffff;
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
            line-height: 24px;
        }
        tr {
            display: table-row;
            border-bottom-width: 0px;
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
            background-color: #f3f4f6;
        }
    }
</style>