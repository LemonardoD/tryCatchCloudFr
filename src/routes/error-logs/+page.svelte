<script lang="ts">
	import Table from '../../components/table/table.svelte';
    export let data;

</script>

    
<Table tblName="Errors"  data={data.message}/>
