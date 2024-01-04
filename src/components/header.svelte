<script lang="ts">
	import settIcon from "../lib/icons/settings.png";

	export let header: string;
	export let hrefSettings = "/settings-menu";
	export let hrefActive: boolean;
</script>

<div class="cardHeader">
	{#if hrefActive}
		{#if header}
			<a
				class="headerButtons"
				href="/user-projects"
			>
				<p>{header}</p>
			</a>
		{/if}
	{:else}
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="headerButtons inactive">
			<p>{header}</p>
		</a>
	{/if}
	<slot />
	<a
		class="headerButtons"
		href={hrefSettings}
	>
		<img
			class="subIcon"
			src={settIcon}
			alt="Settings"
		/>
	</a>
</div>

<style>
	.inactive {
		cursor: auto;
	}
	a.headerButtons.inactive:hover {
		opacity: 1;
	}
	a.headerButtons:hover {
		opacity: 0.5;
	}
	.subIcon {
		height: 20px;
		width: 20px;
	}

	.headerButtons {
		display: flex;
		align-items: center;
		text-decoration: none;
		justify-content: center;
		border: 1px solid #2a2929;
		border-radius: 8px;
		height: 38px;
		background-color: #111;
		padding: 0 16px;
	}

	p {
		font-family: inherit;
		color: #949494;
		margin: 0;
		flex-grow: 1;
		font-weight: 700;
		font-size: 16px;
		padding: 0 16px;
	}

	.cardHeader {
		align-items: center;
		transform: translate(0%, 320%);
		width: 800px;
		margin: 0px auto;
		-webkit-box-align: center;
		-webkit-box-pack: justify;
		justify-content: space-between;
		display: flex;
		font-family: sans-serif, "Open Sans";
	}

	@media (max-width: 1100px) {
		.cardHeader {
			width: 100%;
		}
	}
</style>
