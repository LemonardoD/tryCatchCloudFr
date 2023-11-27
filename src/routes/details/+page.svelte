<script>
	import { goto } from '$app/navigation';
    import { JsonView } from '@zerodevx/svelte-json-view'

    export let data;
    const {stack, context, ...metaData} = data
    
</script>

<div class="page">
    <div class="content">
        <div class="column">
            <!-- <JSONTree value={metaData} /> -->
            <p class="titleWord">Metadata</p>
            <div class=" jsonTable wrapMetaData">
                <JsonView  json={metaData} />
            </div>
        </div>
        {#if context}
            <div class="column">
                <p class="titleWord">Context</p>
                <div class=" jsonTable wrapContext">
                    <JsonView  json={context}/>
                </div>
            </div>
        {/if}
        <div class="column">
            <p class="titleWord">Stack Trace</p>
            <p class="text">{stack}</p>
        </div>
        <button  class="btn" on:click= {() =>{goto("/error-logs?page=1")}}>Back to Errors</button>
    </div>
</div>

<style>
    .jsonTable{
        font-family: 'JetBrains Mono', monospace;
        font-size: 14px;
        --jsonPaddingLeft:	18px;
        --jsonBorderLeft:	1px solid #737373;
        --jsonBracketColor:	#FFA500;	
        --jsonBracketHoverBackground:	#737373;	
        --jsonSeparatorColor:	#ffffff;	
        --jsonKeyColor:	#E5BDE2;
        --jsonValStringColor:	#73BA7E;
        --jsonValNumberColor:	#6fa8dc;
        background-color: #231F1E;
        overflow: auto;
        padding: 24px;
        border-radius: 5px;
        word-break: break-word;
    }
    .wrapMetaData{
        height: 340px;
    }
    .wrapContext {
        height: 200px;
    }
   
    .text{
        font-size: 14px;
        color: #949494;
        line-height: 20px;
        padding-left: 12px;
        padding-top: 12px;
        padding-bottom: 24px;
    }

    .titleWord{
        margin-left: 4px;
        color: #949494;
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
        left: 50%;
        transform: translate(-50%);
        border-radius: 40px;
        position: relative;
        width: 60%;
        font-family: sans-serif, "Open Sans";
        @media(max-width: 1023px){
            width: 90%;
            position: relative;
            margin: 2.5% auto 0 auto;
            left: 0%;
            transform: translate(0%,0%);
        }
    }
    .btn {
        background-color: #0070E8;
        color: #e6f2ff;
        padding: 12px 28px;
        border: none;
        border-radius: 18px;
        cursor: pointer;
        font-family: inherit;
        font-size: 15px;
            &:hover {
            opacity: 0.5;
        }
    }
    
  
</style>