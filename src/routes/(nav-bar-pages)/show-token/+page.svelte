<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    import copyIcon from "../../../lib/icons/copy.png"
    import Loader from "../../../components/loader.svelte";

    export let data
    let loaded: boolean;

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText( data.usageToken);
    };
    
    onMount(()=>{
        loaded = true
    })
</script>

{#if !loaded}
    <Loader/>
{:else}
    <div class="page">
        <div class="header"> 
        </div>
        <header class="header">
            <p class="info">Your API Key</p> 
        </header>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="token-container" >
            <p class="token">{data.usageToken}</p>
            <button class="copy" on:click={copyToClipboard}>
                <img  class="copyIcon"src={copyIcon} alt="Copy"/>
            </button>
        </div>
        <div class="button">
            <button  class="btn" on:click= {() =>{goto("/error-logs?page=1")}}>Back to Errors</button>
        </div>
        
    </div>
{/if}

<style>
    header{
        border-bottom: 0.5px solid #2a2929;
        padding: 4px;
    }
    .button{
        padding: 16px 12px;
    }
    .copy:hover{
        border-radius: 20px;
        background-color: #111111;
    }
    .copyIcon{
        height: 24px;
        width: 24px;
        padding: 8px 10px 4px 10px
    }
    .token-container {
        margin: 12px;
        border-radius: 20px;
        background-color: #363636;
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
        background-color: #0070E8;
        color: #e6f2ff;
        padding: 12px 28px;
        border: none;
        border-radius: 18px;
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
            &:hover {
            opacity: 0.5;
            }
    }
    .token{
        justify-content: flex-start;
        display: flex;
        padding: 8px;
        color: #949494;
        font-family: inherit;
        font-size: 18px;
        margin: 0;
        font-weight: 300;
    }
    .page{
        border: 0.5px solid #2a2929;
        background-color: #191919;
        border-radius: 20px;
        text-align: center;
        width: 25%;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-family: sans-serif, "Open Sans";
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
        color: #949494;
        font-family: inherit;
        font-size: 18px;
        margin: 0;
        font-weight: 700;
    }
    
</style>