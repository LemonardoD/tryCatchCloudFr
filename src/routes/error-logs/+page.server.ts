import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { ErrorLogs } from "../../types/types";

export const load: PageServerLoad = ({ fetch, cookies }) => {
	let token = cookies.get("jwt");
	if (!token) {
		throw redirect(302, "/");
	}
	const fetchApi = async () => {
		const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/err-log/all`, {
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

		return data;
	};
	return fetchApi();
};
