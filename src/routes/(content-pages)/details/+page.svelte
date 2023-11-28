<script>
    import { JsonView } from '@zerodevx/svelte-json-view'
    import Header from '../../../components/header.svelte'

    export let data;
    const {stack, context, ...metaData} = data
    
</script>
    <Header backButton={true} header={"Specific Error"} />
    <div class="content">
        <div class="column">
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
        margin-top: 12px;
        margin-bottom: 70px;
        padding: 0 24px;
    }
    
</style>