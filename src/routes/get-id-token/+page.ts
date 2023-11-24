import Cookies from "js-cookie";
import type { PageLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";

export const load: PageLoad = ({ fetch, url }) => {
	const code = url.searchParams.get("code");
	const fetchApi = async () => {
		const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/user/github-info?code=${code}`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "error",
			referrerPolicy: "no-referrer",
		});
		if (apiResponse.status === 401) {
			throw error(401, "Unauthorized");
		}
		const data = await apiResponse.json();
		if (!data.token) {
			throw redirect(302, "/");
		}
		if (data.token !== undefined) {
			Cookies.set("jwt", data.token);
		}
		return data;
	};
	return fetchApi();
};
