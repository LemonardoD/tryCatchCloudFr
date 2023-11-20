export type ErrorLogs = {
	errLogId: string;
	user: string;
	errorName: string;
	errorMessage: string;
	timeStamp: string;
	method: string;
	url: string;
};

export type ErrorLogDetail = {
	method: string;
	url: string;
	query: string;
	params: string;
	stCode: string;
	stack: string;
};

export type DateRange = "Last Hour" | "Last 24 Hours" | "Last 7 Days" | "Last 14 Days";

export type GroupedErrorLogs = {
	req_url: string;
	count: string;
};

export type ErrObjForTables = {
	errId?: string;
	"Event Tag": string;
	"Event Method"?: string;
	"Error Name"?: string;
	"Error Message"?: string;
	"Event Time"?: string;
	Count?: string;
};
