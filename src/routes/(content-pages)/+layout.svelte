<script lang="ts">
	import { page } from "$app/stores";
	import { onDestroy, onMount } from "svelte";
    import Header from "../../components/header.svelte";
    import Loader from "../../components/loader.svelte";

    let loaded: boolean;
    let headerHrefActive: boolean
    let headerHrefSettings: string;
    
    const unsubscribe = page.subscribe((el) => {
        let path = el.url.pathname
        if (path === "/user-projects") {
            headerHrefActive = false
            headerHrefSettings ="/settings-menu"
        }
        if (path === "/settings-menu") {
            headerHrefActive = true
            headerHrefSettings ="/error-logs?project=latest"
        }
        if (path.includes("/error-logs")) {
            headerHrefActive = true
            headerHrefSettings ="/settings-menu"
        }
        if (path.includes("/details")) {
            headerHrefActive = true
            headerHrefSettings ="/settings-menu"
        }
        
    });

    onDestroy(() => {
        unsubscribe();
    });
    onMount(() => {
        loaded = true
    });
</script>

{#if !loaded}
    <Loader/>
{:else} 
    <Header header="Projects" hrefActive={headerHrefActive} hrefSettings={headerHrefSettings}/>
    <div class="page">
        <slot></slot>
    </div>
{/if}


<style>
    ::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-track {
		background-color: #424242;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #737373;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #949494;
	}
     .page{
        height: 600px;
        width: 800px;
        top: 10%;
        overflow-y: auto;
        background-color: #191919;
        border: 1px solid #2a2929;
        left: 50%;
        border-radius: 8px;
        transform: translate(-50%, 25%);
        position: relative;
        padding: 0;
        margin-right: 0;
        font-family: "JetBrains Mono", monospace;
    }

    @media (max-width: 900px) {
        .page{
            width: 90%;
        }
    }
</style>