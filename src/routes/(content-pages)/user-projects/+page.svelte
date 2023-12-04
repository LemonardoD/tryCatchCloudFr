<script lang="ts">
	import { onMount } from 'svelte';
	import Table from '../../../components/table/table.svelte';

    export let data
    const {projects} = data
    
</script>


    <!-- <Headers header={"All Projects"} href={""} hrefActive={false}/> -->
    <!-- <div class="page"> -->
        <div class="cardContent">
            <Table tableName="usProjects" data={projects} headers={["Name"]}/>
        </div>
    <!-- </div> -->


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