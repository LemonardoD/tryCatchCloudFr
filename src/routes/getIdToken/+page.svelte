<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

   onMount(()=>{
    goto("/showToken")
   })
</script>

<div class="Page">
    <p class="info">
        Loader
    </p>         
</div>


<style>
    .Page{
        margin-top: 100px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border: 1px solid #f3f4f6;
        background-color:#ffffff;
        padding: 24px;
    }
    .info{
        padding: 24px;
        text-align: center;
        color: lighten(#2a2a2a, 20%);
        font-family: inherit;
        font-size: 20px;
        display: block;
        box-shadow:inset 0px 1px 1px fadeout(white, 95%);
        border: 1px solid darken(#2a2a2a, 5%);
        margin: 0;
        font-weight: 300;
    }
</style>