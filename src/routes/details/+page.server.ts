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
		const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/err-log/details/${errId}`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "error",
			referrerPolicy: "no-referrer",
		});

		const data: { message: ErrorLogDetail[] } = await apiResponse.json();
		const table = data.message.map(el => {
			return {
				Url: el.url,
				Method: el.method,
				Params: JSON.stringify(el.params),
				Query: JSON.stringify(el.query),
				stack: el.stack,
			};
		});
		return { table };
	};

	return fetchApi();
};
