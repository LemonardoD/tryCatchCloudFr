import Cookies from "js-cookie";
import type { PageLoad } from "./$types";

const { VITE_API_URL } = import.meta.env;

export const load: PageLoad = ({ fetch, url }) => {
	const code = url.searchParams.get("code");
	const fetchApi = async () => {
		const apiResponse = await fetch(`https://${VITE_API_URL}/api/login/getUserinfo?code=${code}`, {
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
