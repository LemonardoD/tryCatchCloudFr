import type { DateRange } from "../types/types";

export const getTimeStamp = (str: DateRange) => {
	let timeStamp;
	let date = new Date();
	switch (str) {
		case "Last Hour":
			timeStamp = new Date(date.setHours(date.getHours() - 1));
			break;
		case "Last 24 Hours":
			timeStamp = new Date(date.setHours(date.getHours() - 24));
			break;
		case "Last 7 Days":
			timeStamp = new Date(date.setDate(date.getDate() - 7));
			break;
		case "Last 14 Days":
			timeStamp = new Date(date.setDate(date.getDate() - 14));
			break;
	}
	return timeStamp.toISOString();
};
