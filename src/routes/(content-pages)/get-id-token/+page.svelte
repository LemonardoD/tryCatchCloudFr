<script lang="ts">
    import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import Loader from "../../../components/loader.svelte";

    onMount(()=>{
        goto("/user-projects")
    })
</script>

<Loader/>
