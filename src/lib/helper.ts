export const copyToClipboard = async (info: string) => {
	await navigator.clipboard.writeText(info);
};
