<script lang="ts">
	import Table from '../../components/table/table.svelte';
    import NavSideBar from '../../components/navBar/navBar.svelte';
    export let data;
</script>

<NavSideBar />
<Table tblName="Errors"  data={data.tableData} cookie={data.token}/>