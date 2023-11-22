import { goto } from "$app/navigation";
import type { ErrorLogs } from "../../types/types";

export const changeDate = (inputDateStr: string) => {
	const inputDate = new Date(inputDateStr);
	return `${(inputDate.getMonth() + 1).toString().padStart(2, "0")}/${inputDate
		.getDate()
		.toString()
		.padStart(2, "0")} ${inputDate.toLocaleTimeString()}`;
};

export const getDate = (strDate: string) => {
	const date = new Date(strDate);
	return date.toLocaleString();
};

export const handleRowClick = (item: string) => {
	goto(`/specific-errors?errTag=${item}`);
};
