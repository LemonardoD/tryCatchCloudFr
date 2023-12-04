<script lang="ts">
    import copyIcon from "../../../lib/icons/copy.png";
   
    export let data
    
    const copyToClipboard = async () => {
        await navigator.clipboard.writeText( data.usageToken);
    };

</script>

    <div class="contentWrap" >
        <div class="configTabs">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="configTab">Api key</a>
        </div>
        <div class="configContent">
            <div class="token-container" >
                <p class="token">{data.usageToken}</p>
                <button class="copy" on:click={copyToClipboard}>
                    <img  class="copyIcon"src={copyIcon} alt="Copy"/>
                </button>
            </div>
        </div>
    </div>





<style>
    button{
        background-color: #1a1a1a;
    }
    .configTab{
        display: flex;
        align-items: center;
        text-decoration: none;
        justify-content: left;
        border: 1px solid #a3a19b;
        border-radius: 4px;
        background-color: #111;
        width: 160px;
        padding: 8px 10px;
        font-family: inherit;
        font-size: 24;
        color: #949494;
    }
    .configContent{
        width: 100%;
        margin: 20px;
        border-radius: 8px;
        background-color: #111;
        border: 1px solid #2a2929;
    }
    .configTabs{
        padding: 24px;
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        gap: 4px;
    }
   
    .contentWrap{
        height: 100%;
        position: relative;
        display: flex;
        width: 100%;
    }
    .copy:hover{
        border-radius: 4px;
        padding: 6.5px 13px;
        border: 1px solid #a3a19b;
    }
    .copyIcon{
        height: 24px;
        width: 24px;
    }

    .token-container {
        
        align-items: center;
        height: 40px;
        margin: 24px;
        border-radius: 4px;
        background-color: #191919;
        display: flex;
        justify-content: space-between;
    }
    .copy:active {
        background-color: #737373;
    }
    
    .copy{
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
        margin-left: 8px;
        padding: 8.5px 14px;
    }
    .token{
        justify-content: flex-start;
        display: flex;
        padding: 10.5px;
        color: #949494;
        font-family: inherit;
        font-size: 16px;
        margin: 0;
        font-weight: 300;
    }
    
</style>