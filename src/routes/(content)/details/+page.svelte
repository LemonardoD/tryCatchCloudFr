<script lang="ts">
	import { fromUrl } from "$lib/storage.js";
	import { JsonView } from "@zerodevx/svelte-json-view";

	export let data;
	const { stack, context, ...metaData } = data;
</script>

<div class="content">
	<div class="column">
		<p class="titleWord">Metadata</p>
		<div class=" jsonTable wrapMetaData">
			<JsonView json={metaData} />
		</div>
	</div>
	{#if context}
		<div class="column">
			<p class="titleWord">Context</p>
			<div class=" jsonTable wrapContext">
				<JsonView json={context} />
			</div>
		</div>
	{/if}
	<div class="column">
		<p class="titleWord">Stack Trace</p>
		<p class="text">{stack}</p>
	</div>
	<a
		class="backButtons"
		href={$fromUrl.includes("/settings-menu") ? "/error-logs?project=latest" : $fromUrl}
	>
		<p class="buttonTitle">Go Back</p>
	</a>
</div>

<style>
	.backButtons:hover {
		opacity: 0.5;
	}
	.buttonTitle {
		font-family: inherit;
		color: #949494;
		margin: 0;
		flex-grow: 1;
		font-weight: 700;
		font-size: 16px;
	}
	.backButtons {
		display: flex;
		align-items: center;
		width: 110px;
		text-align: center;
		text-decoration: none;
		justify-content: center;
		border: 1px solid #2a2929;
		border-radius: 8px;
		height: 38px;
		background-color: #111;
		padding: 0 16px;
	}

	.jsonTable {
		font-family: "JetBrains Mono", monospace;
		font-size: 14px;
		--jsonPaddingLeft: 18px;
		--jsonBorderLeft: 1px solid #737373;
		--jsonBracketColor: #ffa500;
		--jsonBracketHoverBackground: #737373;
		--jsonSeparatorColor: #ffffff;
		--jsonKeyColor: #e5bde2;
		--jsonValStringColor: #73ba7e;
		--jsonValNumberColor: #6fa8dc;
		background-color: #231f1e;
		overflow: auto;
		padding: 24px;
		border-radius: 5px;
		word-break: break-word;
	}
	.wrapMetaData {
		height: 250px;
	}
	.wrapContext {
		height: 200px;
	}
	.text {
		font-size: 14px;
		color: #949494;
		line-height: 20px;
		padding-left: 12px;
		padding-bottom: 12px;
	}

	.titleWord {
		margin-left: 4px;
		color: #949494;
		font-weight: 600;
		line-height: 28px;
		font-size: 20px;
	}

	p {
		word-break: break-word;
	}
	.content {
		padding: 6px 20px 20px 20px;
	}
</style>
