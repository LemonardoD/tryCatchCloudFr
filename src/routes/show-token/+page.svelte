<script lang="ts">
	import { goto } from '$app/navigation';
    import copyIcon from "../../lib/icons/copy.png"

    export let data
    
    const copyToClipboard = async () => {
        await navigator.clipboard.writeText( data.usageToken);
    };
</script>

<div class="page">
    <div class="header">
        <p class="info">Your API Key</p> 
    </div>
    <div class="content">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="token-container" >
            <p class="token">{data.usageToken}</p>
            <button class="copy" on:click={copyToClipboard}>
                <img  class="copyIcon"src={copyIcon} alt="Copy"/>
            </button>
        </div>
    </div>
    <button  class="btn" on:click= {() =>{goto("/error-logs?page=1")}}>Back to Errors</button>
</div>


<style>
    
    .copy:hover{
        border-radius: 10px;
        background-color: #140e20;
    }
    .copyIcon{
        height: 24px;
        width: 24px;
        padding-top: 8px;
        padding-bottom: 4px;
    }
    .token-container {
        padding-left: 8px;
        display: flex;
        align-items: center;
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
    }
    .btn {
        background-color: #140e20;
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
    .token{
        justify-content: flex-start;
        display: flex;
        color: #fff;
        font-family: inherit;
        font-size: 18px;
        margin: 0;
        font-weight: 300;
    }
    .header{
        border-bottom: solid #a7a7a7;
        border-width: thin
    }
    .content{
        padding-left: 8px;
        padding-top: 14px;
        padding-bottom: 34px;
        position: relative;
        border-radius: 40px;
        text-align: center;
        background-color: #27282c;
    }
    .page{
        background-color: #27282c;
        border-radius: 40px;
        padding: 12px;
        text-align: center;
        width: 25%;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        @media(max-width: 1100px){
            width: 80%;
            position: relative;
            margin: 2.5% auto 0 auto;
            left: 0%;
            transform: translate(0%,0%);
        }
    }
    
    .info{
        padding: 8px 0 10px 14px;
        justify-content: flex-start;
        display: flex;
        color: #fff;
        font-family: inherit;
        font-size: 18px;
        margin: 0;
        font-weight: 300;
    }
    
</style>