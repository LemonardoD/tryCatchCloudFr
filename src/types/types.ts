export type ErrorLogs = {
	user: string;
	errorMethod: string;
	errorLogId: string;
	errorTag: string;
	errorTime: string;
	stack: string | null;
	context: object | null;
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
	requestBody: object;
	error: object | null;
	context: object | null;
	stack: string;
};

export type DetailsObj = {
	method: string;
	url: string;
	errorMessage: string;
	stack: string;
	context: object | null;
	query?: object | null;
	body?: object | null;
	error?: object | null;
};

// export type DateRange = "Last Hour" | "Last 24 Hours" | "Last 7 Days" | "Last 14 Days";
