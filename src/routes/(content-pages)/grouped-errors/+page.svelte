<script lang="ts">
	import { onMount } from 'svelte';
    import Loader from "../../../components/loader.svelte";
    import Header from '../../../components/header.svelte';
    import Table from "../../../components/table/table.svelte";

    export let data
    let loaded: boolean;
    
    onMount(()=>{
        loaded = true
    })
</script>

{#if !loaded}
    <Loader/>
{:else}
    <Header backButton={true} header="Grouped Errors"/>
    {#if !data || (data && !data.apiData.length)}
    <div class="cardContent">
        <p class="noData">
            No data
        </p>
    </div>
    {:else}
        <div class="cardContent">
            <Table tableName="GroupedLogs" data={data} headers={["Project", "Tag", "Count"]}/>
        </div>
    {/if}
{/if}

<style>
    .noData{
        text-align: center;
        color: #ffffff;
        font-family: inherit;
        font-size: 20px;
        display: block;
        text-transform: uppercase;
        margin: 0;
        font-weight: 300;
        padding: 24px;
    }

    .cardContent{
        color: #ffffff;
        padding:6px 20px 0px 20px;
        margin-bottom: 60px;
    }

    @media (max-width: 1100px) {
        .cardContent{
            padding: 24px;
        }  
    }
    
</style>