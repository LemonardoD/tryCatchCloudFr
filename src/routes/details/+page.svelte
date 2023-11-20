<script lang="ts">
    import { goto } from '$app/navigation';

    export let data;
    let errorObject = data.table[0]

</script>

<div class="dashBoard">
    <div class="content">
        <div class="gridColumns">
            <div class="column">
                {#each Object.entries(errorObject) as [key, value]}
                    {#if key !== "stack"}
                        <p class="titleWord">{key}: </p><p class="text">{value}</p>
                    {/if}
                {/each}
            </div> 
            <div class="column">
                <p class="titleWord">Stack: </p><p class="textStack">{errorObject.stack}</p>
            </div>
        </div>
    </div>
    <button  class="btn" on:click= {() =>{goto(`/specific-errors?errTag=${errorObject.Url}`)}}>Errors with this url</button>
    <button  class="btn" on:click= {() =>{goto("/specific-errors?errTag=all")}}>All errors</button>
</div>

<style>
    .btn {
        cursor: pointer;
        font-family: inherit;
        display: inline-block;
        background: #16263e;
        padding: 8px 32px;
        color: white;
        border-radius: 5px;
        margin-right: 4px;
        margin-left: 4px;
        &:hover {
           background-color: black;
        }
        &:active {
            background: #111010; 
            box-shadow: inset 0px 1px 1px fadeout(black, 90%); 
        }
        &:focus {
            outline: none;
        }
    }
    .textStack{
        word-break:break-word;
        font-size: 16px;
        color: #1F2937;
        padding-left: 6px;
    }
    .text{
        font-size: 14px;
        color: #1F2937;
        line-height: 20px;
        padding-left: 12px;
        padding-top: 7px;
        padding-bottom: 12px;
    }
    .titleWord{
        font-weight: 600;
        line-height: 28px;
        font-size: 20px;
    }
    @media (max-width: 1023px) {
        .gridColumns{
            display: grid;
            gap: 12px;
        }
    }

    @media (min-width: 1023px) {
        .gridColumns{
            grid-template-columns: 40% 60%;
            display: grid;
            gap: 12px;
        }   
    }
    
    p{
        margin: 0;
    }
    .content{
        padding: 24px;
    }
    .dashBoard{
        padding: 24px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>