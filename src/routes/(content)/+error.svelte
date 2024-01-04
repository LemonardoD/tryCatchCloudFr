<script lang="ts">
	import { page } from "$app/stores";
</script>

<div id="page">
	{#if $page.error}
		<h1>{$page.error.message}</h1>
		<h2>{$page.status}</h2>
	{/if}
</div>

<style>
	#page {
		font-family: "Lato", sans-serif;
		color: #888;
		margin: 0;
		display: flex;
		text-align: center;
		align-items: center;
		height: 80%;
		justify-content: center;
	}

	h1 {
		font-size: 50px;
		display: inline-block;
		padding-right: 12px;
		animation: type 0.5s alternate infinite;
	}
	h2 {
		font-size: 40px;
		display: inline-block;
		padding-left: 12px;
	}
</style>
