<script lang="ts">
	import { goto } from "$app/navigation";
	import { changeDate } from "./table";

	export let headers: string[];
	export let data: any;
	export let tableName: string;
</script>

<table>
	{#if typeof data === "string"}
		<p class="noData">No data</p>
	{:else}
		<thead>
			{#each headers as el}
				<th>{el}</th>
			{/each}
		</thead>
		<tbody>
			{#if tableName === "ErrorLogs"}
				{#each data as item}
					<tr
						class="haveRef"
						on:click={() => {
							goto(`/details?errId=${item.errorLogId}`);
						}}
					>
						<td data-label="Tag"
							><pre>{item.errorMethod.length === 3
									? item.errorMethod.padEnd(4, " ") + ` ${item.errorTag}`
									: item.errorMethod + ` ${item.errorTag}`}</pre></td
						>
						{#if item.context && item.stack}
							<td data-label="Includes">metadata, stack, context</td>
						{:else if item.context && !item.stack}
							<td data-label="Includes">metadata, context</td>
						{:else if !item.context && item.stack}
							<td data-label="Includes">metadata, stack</td>
						{:else}
							<td data-label="Includes">metadata</td>
						{/if}
						<td data-label="Time">{changeDate(item.errorTime)}</td>
					</tr>
				{/each}
			{:else if tableName === "usProjects"}
				{#each data as item}
					<tr
						class="haveRef"
						on:click={() => {
							goto(`/error-logs?project=${item.projectName}`);
						}}
					>
						<td data-label="Project Name">{item.projectName}</td>
					</tr>
				{/each}
				<!-- {:else if tableName === "GroupedLogs"}
				{#each data.apiData as item}
					<tr
						class="haveRef"
						on:click={() => {
							goto(`/error-logs?project=${item.project_name}&tag=${item.req_url}`);
						}}
					>
						<td data-label="Project">{item.project_name}</td>
						<td data-label="Tag">{item.req_url}</td>
						<td data-label="Count">{item.count}</td>
					</tr>
				{/each} -->
			{/if}
		</tbody>
	{/if}
</table>

<style>
	.noData {
		text-align: center;
		color: #ffffff;
		font-family: inherit;
		font-size: 20px;
		display: block;
		text-transform: uppercase;
		margin: 0;
		font-weight: 300;
		padding: 24px;
	}
	pre {
		font-family: "JetBrains Mono", monospace;
		margin: 0;
	}

	td::before {
		content: attr(data-label);
		text-align: left;
		font-weight: 600;
	}

	tr {
		cursor: pointer;
		position: relative;
		display: block;
		border-bottom: 2px solid #fff;
	}

	td {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		text-align: right;
		vertical-align: top;
	}

	table {
		margin: 0;
		width: 100%;
		border-collapse: collapse;
	}

	@media (max-width: 1100px) {
		thead {
			display: none;
		}
	}

	@media (min-width: 1099px) {
		th {
			padding: 8px 12px;
			text-align: left;
			font-size: 16px;
		}
		tr {
			display: table-row;
			border-bottom-width: 0;
		}
		td::before {
			display: none;
		}
		td {
			display: table-cell;
			border-bottom-width: 0px;
			text-align: left;
			vertical-align: middle;
		}

		tr:nth-child(odd) td {
			background-color: #222;
		}
		tr:hover td {
			background-color: #424242;
		}
	}
</style>
