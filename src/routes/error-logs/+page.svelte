<script lang="ts">
	import { goto } from '$app/navigation';
	import Table from '../../components/table/table.svelte';
    export let data;

</script>

    
<Table tblName="Errors"  data={data.message}/>
<button  class="btn" on:click= {() =>{goto("/stream-logs")}}>To Logs Stream</button>


<style>
    .btn {
        margin-left: 36px;
        background-color: #6fa8dc;
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
</style>