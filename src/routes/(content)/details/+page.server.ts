import type { DetailsObj } from "../../../types/types";
import type { PageServerLoad } from "../../$types";
import { error, redirect } from "@sveltejs/kit";
import { aiApi } from "../../../api";

export const load: PageServerLoad = async ({ url, cookies }) => {
	let token = cookies.get("jwt");
	if (!token) {
		throw redirect(302, "/");
	}
	const errId = url.searchParams.get("errId");
	// const fetchApi = async () => {
	// 	const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/err-log/by-id/${errId}`, {
	// 		method: "GET",
	// 		mode: "cors",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 		redirect: "error",
	// 		referrerPolicy: "no-referrer",
	// 	});
	// 	if (apiResponse.status === 401) {
	// 		cookies.delete("jwt");
	// 		throw error(401, "Unauthorized");
	// 	}
	// 	const data: ErrorLogDetail[] = await apiResponse.json();
	// const errLog: DetailsObj = {
	// 	method: data[0].method,
	// 	url: data[0].url,
	// 	errorMessage: data[0].errorMessage,
	// 	stack: data[0].stack,
	// 	context: data[0].context,
	// };
	// if (data[0].query) {
	// 	errLog.query = data[0].query;
	// }
	// if (data[0].requestBody) {
	// 	errLog.body = data[0].requestBody;
	// }
	// if (data[0].error) {
	// 	errLog.error = data[0].error;
	// }
	// 	return errLog;
	// };

	// return fetchApi();
	if (!errId) {
		throw error(404, "There is no Error log with that id.");
	}
	const data = await aiApi.getErrLogById(token, errId);
	const errLog: DetailsObj = {
		method: data[0].method,
		url: data[0].url,
		errorMessage: data[0].errorMessage,
		stack: data[0].stack,
		context: data[0].context,
	};
	if (data[0].query) {
		errLog.query = data[0].query;
	}
	if (data[0].requestBody) {
		errLog.body = data[0].requestBody;
	}
	if (data[0].error) {
		errLog.error = data[0].error;
	}
	return errLog;
};
