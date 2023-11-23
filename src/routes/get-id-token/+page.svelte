<script lang="ts">
    import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import Loader from "../../components/loader.svelte";

    onMount(()=>{
        goto("/error-logs?page=1")
    })
</script>

<Loader/>