import { getTimeStamp } from "$lib";
import type { DateRange, ErrorLogs } from "../../types/types";
import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

const { VITE_API_URL } = import.meta.env;

export const load: PageServerLoad = ({ fetch, url, cookies }) => {
	let token = cookies.get("jwt");
	if (!token) {
		throw redirect(302, "/");
	}
	const range = url.searchParams.get("range") || "For all time";
	const tag = url.searchParams.get("errTag") || "all";
	const fetchApi = async () => {
		if (tag && tag !== "all") {
			let reqUrl = `${VITE_API_URL}/api/err-log/by-tag?tag=${tag}`;
			if (range !== "For all time") {
				const timeStamp = getTimeStamp(range as DateRange);
				reqUrl = `${VITE_API_URL}/api/err-log/by-tag?tag=${tag}&time=${timeStamp}`;
			}
			const apiResponse = await fetch(reqUrl, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				redirect: "error",
				referrerPolicy: "no-referrer",
			});

			const data: { message: ErrorLogs[] } = await apiResponse.json();
			const table = data.message.map(el => {
				return {
					"Event Tag": el.url,
					"Event Method": el.method,
					"Error Name": el.errorName,
					"Error Message": el.errorMessage,
					"Event Time": el.timeStamp,
					errId: el.errLogId,
				};
			});
			return { errors: table, range: range, tag: tag };
		}
		if (tag === "all" && range !== "For all time") {
			const timeStamp = getTimeStamp(range as DateRange);
			const apiResponse = await fetch(`${VITE_API_URL}/api/err-log/by-time/${timeStamp}`, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				redirect: "error",
				referrerPolicy: "no-referrer",
			});
			const data: { message: ErrorLogs[] } = await apiResponse.json();
			const table = data.message.map(el => {
				return {
					"Event Tag": el.url,
					"Event Method": el.method,
					"Error Name": el.errorName,
					"Error Message": el.errorMessage,
					"Event Time": el.timeStamp,
					errId: el.errLogId,
				};
			});

			return { errors: table, range: range, tag: tag };
		} else {
			const apiResponse = await fetch(`${VITE_API_URL}/api/err-log/all`, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				redirect: "error",
				referrerPolicy: "no-referrer",
			});

			const data: { message: ErrorLogs[] } = await apiResponse.json();
			const table = data.message.map(el => {
				return {
					"Event Tag": el.url,
					"Event Method": el.method,
					"Error Name": el.errorName,
					"Error Message": el.errorMessage,
					"Event Time": el.timeStamp,
					errId: el.errLogId,
				};
			});
			return { errors: table, range: range, tag: tag };
		}
	};

	return fetchApi();
};
