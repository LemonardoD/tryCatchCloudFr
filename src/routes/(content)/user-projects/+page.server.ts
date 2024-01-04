import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { aiApi } from "../../../api";

export const load: PageServerLoad = async ({ cookies }) => {
	let token = cookies.get("jwt");
	if (!token) {
		throw redirect(302, "/");
	}
	const apiInfo = await aiApi.getAllProjects(token);
	if (apiInfo.length) {
		return { apiInfo };
	}
	return { apiInfo: "No Data" };
};
