import { goto } from "$app/navigation";

export async function handleTagClick(event: { currentTarget: { getAttribute: (arg0: string) => any } }) {
	const href = event.currentTarget.getAttribute("href");
	await goto(href);
	location.reload();
}

export async function handleViewClick(event: { currentTarget: { getAttribute: (arg0: string) => any } }) {
	const href = event.currentTarget.getAttribute("href");
	await goto(href);
	location.reload();
}

export async function handleClusteredClick() {
	await goto(`/grouped-errors`);
	location.reload();
}

export async function handleShowAllClick(range?: string) {
	if (!range) {
		await goto(`/specific-errors?errTag=all`);
	}
	await goto(`/specific-errors?errTag=all&range=${range}`);
	location.reload();
}

export const getDate = (strDate: string) => {
	const date = new Date(strDate);
	return date.toLocaleString();
};

export function handleRowClick(item: string) {
	goto(`/specific-errors?errTag=${item}`);
}

export const getTitles = (data: object[] | undefined) => {
	if (data && data.length) {
		return Object.keys(data[0]);
	}
	return [];
};
