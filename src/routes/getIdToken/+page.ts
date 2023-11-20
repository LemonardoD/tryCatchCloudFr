import Cookies from "js-cookie";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ fetch, url }) => {
	const code = url.searchParams.get("code");
	const fetchApi = async () => {
		const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/login/getUserinfo?code=${code}`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "error",
			referrerPolicy: "no-referrer",
		});
		const data = await apiResponse.json();
		Cookies.set("jwt", data.token);
		return data;
	};
	return fetchApi();
};
