import type { ErrorLogDetail } from "../../types/types";
import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = ({ fetch, url, cookies }) => {
	let token = cookies.get("jwt");
	if (!token) {
		throw redirect(302, "/");
	}
	const errId = url.searchParams.get("errId");
	const fetchApi = async () => {
		const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/err-log/by-id/${errId}`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "error",
			referrerPolicy: "no-referrer",
		});

		const data: {
			message: ErrorLogDetail[];
		} = await apiResponse.json();
		const logObj = data.message[0];
		const errLog = {
			method: logObj.method,
			url: logObj.url,
			query: logObj.query,
			params: logObj.params,
			reqBody: logObj.method,
			errorMessage: logObj.errorMessage,
			axiosDetails: logObj.axiosDetails,
			stack: logObj.stack,
			context: logObj.context,
		};

		return errLog;
	};

	return fetchApi();
};
