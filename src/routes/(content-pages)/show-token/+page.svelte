<script lang="ts">
	import { onMount } from 'svelte';
    import copyIcon from "../../../lib/icons/copy.png";
    import Loader from "../../../components/loader.svelte";
    import Header from '../../../components/header.svelte';
   

    

    
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
    <Header backButton={true} header="Your API Key"/>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="token-container" >
            <p class="token">{data.usageToken}</p>
            <button class="copy" on:click={copyToClipboard}>
                <img  class="copyIcon"src={copyIcon} alt="Copy"/>
            </button>
        </div>
{/if}

<style>
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
        margin: 24px;
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
    .token{
        justify-content: flex-start;
        display: flex;
        padding: 8px;
        color: #949494;
        font-family: inherit;
        font-size: 20   px;
        margin: 0;
        font-weight: 300;
    }
    
</style>