<script lang="ts">
	import { page } from "$app/stores";
	import Header from "../../components/header.svelte";
	import Loader from "../../components/loader.svelte";
	import { navigating } from "$app/stores";
	import { loading } from "$lib/storage";

	let headerHrefActive: boolean;
	let headerHrefSettings: string;

	$: {
		let pathName = $page.url.pathname;
		if (pathName === "/user-projects") {
			headerHrefActive = false;
			headerHrefSettings = "/settings-menu";
		} else if (pathName === "/settings-menu") {
			headerHrefActive = true;
			headerHrefSettings = "/error-logs?project=latest";
		} else {
			headerHrefActive = true;
			headerHrefSettings = "/settings-menu";
		}
		$loading = !!$navigating;
	}
</script>

{#if $loading}
	<Header
		header="Projects"
		hrefActive={headerHrefActive}
		hrefSettings={headerHrefSettings}
	/>
	<div class="page">
		<Loader />
	</div>
{:else}
	<Header
		header="Projects"
		hrefActive={headerHrefActive}
		hrefSettings={headerHrefSettings}
		>{#if $page.url.pathname === "/error-logs"}<div class="autoUpd">
				<p class="switchLabel">Auto update</p>
				<div class="switch">
					<label>
						<input type="checkbox" />
						<span class="slider"></span>
					</label>
				</div>
			</div>
		{/if}</Header
	>
	<div class="page">
		<slot />
	</div>
{/if}

<style>
	::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-track {
		background-color: #424242;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #737373;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #949494;
	}
	.page {
		height: 600px;
		width: 800px;
		top: 10%;
		overflow-y: auto;
		background-color: #191919;
		border: 1px solid #2a2929;
		left: 50%;
		border-radius: 8px;
		transform: translate(-50%, 25%);
		position: relative;
		padding: 0;
		margin-right: 0;
		font-family: "JetBrains Mono", monospace;
	}

	@media (max-width: 900px) {
		.page {
			width: 90%;
		}
	}
	.autoUpd {
		padding-right: 20px;
		width: 600px;
		margin: 0px auto;
		justify-content: right;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.switchLabel {
		padding-right: 10px;
		color: #949494;
		font-family: inherit;
		font-size: 16px;
		display: flex;
		align-items: center;
		margin: 0;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 35px;
		height: 10px;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #424242;
		transition: 0.4s;
		border-radius: 34px;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 20px;
		width: 20px;
		left: -1px;
		top: -5px;
		background-color: #737373;
		outline: none;
		transition: 0.4s;
		border-radius: 50%;
	}

	input {
		opacity: 0;
	}

	input:checked + .slider {
		background-color: #73dc8c;
	}

	input:checked + .slider:before {
		transform: translateX(17px);
	}
</style>
