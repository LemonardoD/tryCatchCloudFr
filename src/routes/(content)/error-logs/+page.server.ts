import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../../$types";
import { aiApi } from "../../../api";

export const load: PageServerLoad = async ({ url, cookies }) => {
	let token = cookies.get("jwt");
	if (!token) {
		throw redirect(302, "/");
	}
	const project = url.searchParams.get("project");
	if (project) {
		const apiInfo = await aiApi.getErrLogByProject(token, project);
		if (apiInfo.length) {
			return { apiInfo, token };
		}
		return { apiInfo: "No Data", token };
	}
	const apiInfo = await aiApi.getAllErrLog(token);
	if (apiInfo.length) {
		return { apiInfo, token };
	}
	return { apiInfo: "No Data", token };

	// const getProjectErrLogs = async () => {
	// 	const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/err-log/by-project/${project}`, {
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
	// 	const apiInfo: ErrorLogs[] = await apiResponse.json();
	// 	if (apiInfo.length) {
	// 		return { apiInfo, token, tblHead: project };
	// 	}
	// 	return { apiInfo: "No Data", token, tblHead: project };
	// };

	// return await getProjectErrLogs();
	// const getErrorLogs = async () => {
	// 	const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/err-log/all`, {
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
	// 	const apiInfo: ErrorLogs[] = await apiResponse.json();
	// 	if (apiInfo.length) {
	// 		return { apiInfo, token, tblHead: `All errors` };
	// 	}
	// 	return { apiInfo: "No Data", token, tblHead: `All errors` };
	// };

	// return await getErrorLogs();
};
