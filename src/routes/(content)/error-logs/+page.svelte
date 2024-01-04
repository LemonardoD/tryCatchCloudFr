<script lang="ts">
	import { error } from "@sveltejs/kit";
	import Table from "../../../components/table/table.svelte";

	export let data;

	let checked = false;
	$: tableData = data.apiInfo;

	let autoUpdateInterval: NodeJS.Timeout;

	const fetchData = async () => {
		try {
			const response = await fetch(`https://trycatchcloud.fly.dev/api/err-log/live-update`, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${data.token}`,
				},
				redirect: "error",
				referrerPolicy: "no-referrer",
			});
			if (response.status !== 200) {
				throw error(response.status, "Something went wrong");
			}
			const newData = await response.json();
			tableData = newData;
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const startAutoUpdate = () => {
		fetchData();
		autoUpdateInterval = setInterval(() => {
			fetchData();
		}, 5000);
	};

	const stopAutoUpdate = () => {
		clearInterval(autoUpdateInterval);
	};

	$: {
		if (checked) {
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
