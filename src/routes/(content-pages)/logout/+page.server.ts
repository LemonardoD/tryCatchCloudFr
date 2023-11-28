import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ cookies }) => {
	cookies.delete("jwt");
};
