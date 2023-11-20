import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { GroupedErrorLogs } from "../../types/types";

export const load: PageServerLoad = ({ fetch, cookies }) => {
	let token = cookies.get("jwt");
	if (!token) {
		throw redirect(302, "/");
	}
	const fetchApi = async () => {
		const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/err-log/grouped`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "error",
			referrerPolicy: "no-referrer",
		});
		const data: { message: GroupedErrorLogs[] } = await apiResponse.json();
		const table = data.message.map(el => {
			return {
				"Event Tag": el.req_url,
				Count: el.count,
			};
		});

		return { errors: table };
	};
	return fetchApi();
};
