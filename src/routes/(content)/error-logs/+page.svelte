<script lang="ts">
	import { isAutUpdActive } from "$lib/storage";
	import { aiApi } from "../../../api";
	import Table from "../../../components/table/table.svelte";

	export let data;

	$: tableData = data.apiInfo;

	let autoUpdateInterval: NodeJS.Timeout;

	const startAutoUpdate = async () => {
		tableData = await aiApi.getUpdates4Log(data.token);
		autoUpdateInterval = setInterval(async () => {
			tableData = await aiApi.getUpdates4Log(data.token);
		}, 5000);
	};

	const stopAutoUpdate = () => {
		clearInterval(autoUpdateInterval);
	};

	$: {
		if ($isAutUpdActive) {
			startAutoUpdate();
		} else {
			tableData = data.apiInfo;
			stopAutoUpdate();
		}
	}
</script>

<div class="cardContent">
	<Table
		tableName="ErrorLogs"
		data={tableData}
		headers={["Tag", "Includes", "Time"]}
	/>
</div>

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

	.cardContent {
		color: #ffffff;
		padding: 6px 20px 0px 20px;
		margin-bottom: 20px;
	}

	@media (max-width: 1100px) {
		.cardContent {
			padding: 24px;
		}
	}
</style>
