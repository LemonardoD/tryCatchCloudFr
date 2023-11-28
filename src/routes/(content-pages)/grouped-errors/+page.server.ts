import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../../$types";
import type { GroupedErrors } from "../../../types/types";

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	let token = cookies.get("jwt");
	if (!token) {
		throw redirect(302, "/");
	}
	const getErrorLogs = async () => {
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
		if (apiResponse.status === 401) {
			cookies.delete("jwt");
			throw error(401, "Unauthorized");
		}
		const apiData: GroupedErrors[] = await apiResponse.json();

		return { apiData };
	};

	return await getErrorLogs();
};
