<script lang="ts">
	import { goto } from '$app/navigation';


    export let data;
    const {stack, context, ...metaData} = data
</script>

<div class="dashBoard">
    <div class="content">
        <div class="column">
            <p class="titleWord">Metadata</p>
            <pre>{JSON.stringify(metaData, null, 2)}</pre>
        </div>
        {#if context}
            <div class="column">
                <p class="titleWord">Context</p>
                <pre>{JSON.stringify(context, null, 4)}</pre>
            </div>
        {/if}
        <div class="column">
            <p class="titleWord">Stack Trace</p>
            <p class="text">{stack}</p>
        </div>
        <button  class="btn" on:click= {() =>{goto("/error-logs")}}>Back to Errors</button>
            <!-- <div class="column">
                {#each Object.entries(errorObject) as [key, value]}
                    {#if key !== "stack" && key !== "Context"}
                        <p class="titleWord">{key}: </p><p class="text">{value}</p>
                    {/if}
                {/each}
            </div>
            {#if errorObject.Context}
                <div class="column">
                    <p class="titleWord">Stack: </p><p class="textStack">{errorObject.stack}</p>
                </div>
                <div class="column">
                    <p class="titleWord">Context: </p><p class="textStack">{errorObject.Context}</p>
                </div>
            {:else}
                <div class="column">
                    <p class="titleWord">Stack: </p><p class="textStack">{errorObject.stack}</p>
                </div>
            {/if} -->
    </div>
</div>

<style>
    pre {
        font-family: inherit;
        padding: 18px;
        border-radius: 5px;
        overflow: auto;
        word-break: break-word;
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
    
    p{
        
        word-break:break-word;
        margin: 0;
    }
    .content{
        padding: 24px;
    }
    .dashBoard{
        padding: 24px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
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
</style>