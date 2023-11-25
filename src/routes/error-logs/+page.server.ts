import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import type { ErrorLogs } from "../../types/types";

export const load: PageServerLoad = async ({ fetch, url, cookies }) => {
	let token = cookies.get("jwt");
	if (!token) {
		throw redirect(302, "/");
	}
	const page = url.searchParams.get("page") ? url.searchParams.get("page") : 1;
	const getErrorLogs = async () => {
		const apiResponse = await fetch(`https://trycatchcloud.fly.dev/api/err-log/page/${page}`, {
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
		const apiInfo: { result: ErrorLogs[]; rowCount: string } = await apiResponse.json();

		return { apiInfo, token };
	};

	return await getErrorLogs();
};
