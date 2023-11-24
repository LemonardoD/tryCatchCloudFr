import type { HandleServerError } from "@sveltejs/kit";

export const handleError: HandleServerError = ({ error, event }) => {
	return {
		message: "Something went wrong",
		code: 500,
	};
};
