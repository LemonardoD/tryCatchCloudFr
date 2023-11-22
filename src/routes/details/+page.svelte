<script lang="ts">
	import { goto } from '$app/navigation';
    import JSONTree from 'svelte-json-tree';
    
    export let data;
    const {stack, context, ...metaData} = data
    

</script>

<div class="page">
    <div class="content">
        <div class="column">
            <p class="titleWord">Metadata</p>
            <div class="jsonTable"><JSONTree value={metaData} /></div>
        </div>
        {#if context}
            <div class="column">
                <p class="titleWord">Context</p>
                <div class="jsonTableContext"><JSONTree value={context} /></div>
            </div>
        {/if}
        <div class="column">
            <p class="titleWord">Stack Trace</p>
            <p class="text">{stack}</p>
        </div>
        <button  class="btn" on:click= {() =>{goto("/error-logs")}}>Back to Errors</button>
    </div>
</div>

<style>
    .jsonTableContext{
        --json-tree-string-color: #73BA7E;
        --json-tree-boolean-color: #112aa7;
        --json-tree-number-color: #6fa8dc;
        --json-tree-label-color: #FFA500;
        --json-tree-arrow-color: #727272;
        --json-tree-property-color: #E5BDE2;
        --json-tree-undefined-color: #871d8f;
        /* position */
        --json-tree-li-indentation: 16px;
        --json-tree-li-line-height: 28px;
        /* font */
        --json-tree-font-size: 14px;
        --json-tree-font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #231F1E;
        overflow: auto;
        height: 200px;
        font-family: inherit;
        padding: 24px;
        border-radius: 5px;
        word-break: break-word;
    }
    .jsonTable {
        --json-tree-string-color: #73BA7E;
        --json-tree-boolean-color: #112aa7;
        --json-tree-number-color: #6fa8dc;
        --json-tree-label-color: #FFA500;
        --json-tree-arrow-color: #727272;
        --json-tree-property-color: #E5BDE2;
        --json-tree-undefined-color: #871d8f;
        /* position */
        --json-tree-li-indentation: 16px;
        --json-tree-li-line-height: 28px;
        /* font */
        --json-tree-font-size: 14px;
        --json-tree-font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #231F1E;
        overflow: auto;
        height: 340px;
        font-family: inherit;
        padding: 24px;
        border-radius: 5px;
        word-break: break-word;
    }
   
    .text{
        font-size: 14px;
        color: #fff;
        line-height: 20px;
        padding-left: 12px;
        padding-top: 12px;
        padding-bottom: 24px;
    }

    .titleWord{
        margin-left: 4px;
        color: #fff;
        font-weight: 600;
        line-height: 28px;
        font-size: 20px;
    }
    
    p{
        word-break:break-word;
        margin-top: 12px;
    }
    .content{
        padding: 0 24px;
    }
    .page{
        padding: 24px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .btn {
        background-color: #4bb74a;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 45px;
        cursor: pointer;
        font-family: inherit;
        font-size: 16px;
            &:hover {
            opacity: 0.5;
            }
    }
    
  
</style>