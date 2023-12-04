<script lang="ts">
	import Table from '../../../components/table/table.svelte';

    export let data
    const {apiInfo} = data
    
</script>

<div class="cardContent">
    <Table tableName="usProjects" data={apiInfo} headers={["Name"]}/>
</div>


<style>

    .cardContent{
        color: #ffffff;
        padding:6px 20px 0px 20px;
        margin-bottom: 20px;
    }
    
    @media (max-width: 1100px) {
        .cardContent{
            padding: 24px;
        }  
    }
    
</style>