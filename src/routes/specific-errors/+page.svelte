<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
	import Cookies from 'js-cookie';
    import Table from '../../components/table/table.svelte';

    export let data;

    let selectedTimeRange = data.range
    let errorTag = data.tag

    onMount(() => {
        const dropdownItems = document.querySelectorAll('.dropdown-content p');
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => handleDropdownItemClick(item.textContent));
        });
        if(!Cookies.get("jwt")){
            goto(`/login`);
        }
    });

    async function handleDropdownItemClick(range: string | null) {
        selectedTimeRange = range as string;
        await goto(`/specific-errors?errTag=${errorTag}&range=${encodeURIComponent(selectedTimeRange)}`);
        location.reload()
    }
</script>

<Table tblName="Errors Logs" clustered={false} range={selectedTimeRange} data={data.errors} errorTag={errorTag}/>
