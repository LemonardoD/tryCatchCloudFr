export const changeDate = (inputDateStr: string) => {
	const inputDate = new Date(inputDateStr);
	return `${(inputDate.getMonth() + 1).toString().padStart(2, "0")}/${inputDate
		.getDate()
		.toString()
		.padStart(2, "0")} ${inputDate.toLocaleTimeString()}`;
};

// export const generatePageArray = (currentPage: number, totalUnits: number) => {
// 	const totalPages = Math.ceil(totalUnits / 20);
// 	const pageArray = [1, currentPage, totalPages];
// 	const pgsBeforeCurr = Math.min(3, currentPage - 1);
// 	const pgsAfterCurr = Math.min(5, totalPages - currentPage);
// 	for (let i = currentPage - pgsBeforeCurr; i < currentPage; i++) {
// 		if (i > 0 && i < totalPages) {
// 			pageArray.push(i);
// 		}
// 	}

// 	for (let i = currentPage + 1; i <= currentPage + pgsAfterCurr; i++) {
// 		if (i < totalPages) {
// 			pageArray.push(i);
// 		}
// 	}

// 	return [...new Set(pageArray)]
// 		.filter(a => a != undefined)
// 		.sort((a, b) => {
// 			return a - b;
// 		});
// };
