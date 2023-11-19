<script lang="ts">
	import Table from '../../components/table/table.svelte';
    export let data;

</script>

    
<Table tblName="Clustered Errors" clustered={true} range='' data={data.errors} errorTag={''}/>
