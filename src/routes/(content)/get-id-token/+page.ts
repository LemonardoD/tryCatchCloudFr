import Cookies from "js-cookie";
import type { PageLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";
import { aiApi } from "../../../api";

export const load: PageLoad = async ({ url }) => {
	const code = url.searchParams.get("code");
	// const fetchApi = async () => {
	// 	const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/user/github-info?code=${code}`, {
	// 		method: "GET",
	// 		mode: "cors",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		redirect: "error",
	// 		referrerPolicy: "no-referrer",
	// 	});
	// 	if (apiResponse.status === 401) {
	// 		throw error(401, "Unauthorized");
	// 	}
	// 	const data = await apiResponse.json();
	// 	if (!data.token) {
	// 		throw redirect(302, "/");
	// 	}
	// 	if (data.token !== undefined) {
	// 		Cookies.set("jwt", data.token);
	// 	}
	// 	return data;
	// };
	// return fetchApi();
	if (!code) {
		throw error(400, "Wrong GitHub code.");
	}
	const data = await aiApi.getGitHubInfo(code);
	if (!data.token) {
		throw redirect(302, "/");
	}
	if (data.token !== undefined) {
		Cookies.set("jwt", data.token);
	}
	return data;
};
