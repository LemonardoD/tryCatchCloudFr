export type ErrorLogs = {
	errorLogId: string;
	errorTag: string;
	errorTime: string;
};

export type ErrorLogDetail = {
	errLogId: string;
	user: string;
	errorName: string;
	errorMessage: string;
	timeStamp: string;
	method: string;
	url: string;
	query: object;
	params: object;
	requestBody: object;
	axiosDetails: object | null;
	context: object | null;
	stack: string;
};

// export type DateRange = "Last Hour" | "Last 24 Hours" | "Last 7 Days" | "Last 14 Days";
