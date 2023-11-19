import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ cookies }) => {
	let token = cookies.get("jwt");
	return { token };
};
