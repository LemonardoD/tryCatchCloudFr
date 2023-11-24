import type { DetailsObj, ErrorLogDetail } from "../../types/types";
import type { PageServerLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";

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
		if (apiResponse.status === 401) {
			cookies.delete("jwt");
			throw error(401, "Unauthorized");
		}
		const data: {
			message: ErrorLogDetail[];
		} = await apiResponse.json();
		const logObj = data.message[0];
		const errLog: DetailsObj = {
			method: logObj.method,
			url: logObj.url,
			errorMessage: logObj.errorMessage,
			stack: logObj.stack,
			context: logObj.context,
		};
		if (logObj.query) {
			errLog.query = logObj.query;
		}
		if (logObj.requestBody) {
			errLog.body = logObj.requestBody;
		}
		if (logObj.error) {
			errLog.error = logObj.error;
		}

		return errLog;
	};

	return fetchApi();
};
