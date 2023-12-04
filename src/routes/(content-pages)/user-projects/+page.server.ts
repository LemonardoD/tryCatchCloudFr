import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../user-projects/$types";

export const load: PageServerLoad = ({ cookies }) => {
	let token = cookies.get("jwt");
	if (!token) {
		throw redirect(302, "/");
	}
	const fetchApi = async () => {
		const apiAllPr = await fetch(`https://trycatchcloud.fly.dev/api/projects/all`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "error",
			referrerPolicy: "no-referrer",
		});
		if (apiAllPr.status === 401) {
			cookies.delete("jwt");
			throw error(401, "Unauthorized");
		}
		const apiInfo: { projectName: string }[] = await apiAllPr.json();
		if (apiInfo.length) {
			return { apiInfo };
		}
		return { apiInfo: "No Data" };
	};
	return fetchApi();
};
