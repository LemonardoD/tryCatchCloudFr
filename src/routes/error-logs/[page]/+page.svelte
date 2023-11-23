<script lang="ts">
	import Table from '../../../components/table/table.svelte';
    import NavSideBar from '../../../components/navBar.svelte';
    export let data
    let page = data.page ? Number(data.page) : 1
</script>

<NavSideBar />
<Table tblName="Errors"  data={data.tableData} cookie={data.token} currentPage={page}/>