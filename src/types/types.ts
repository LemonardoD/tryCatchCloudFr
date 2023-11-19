export type ErrorLogs = {
	errLogId: string;
	user: string;
	errorName: string;
	errorMessage: string;
	timeStamp: string;
	method: string;
	url: string;
};

export type DateRange = "Last Hour" | "Last 24 Hours" | "Last 7 Days" | "Last 14 Days";

export type GroupedErrorLogs = {
	req_url: string;
	count: string;
};

export type DBErrorLogs = {
	"Event Tag": string;
	"Event Method": string;
	"Error Name": string;
	"Error Message": string;
	"Event Time": string;
};

export type ErrObjForTables = {
	"Event Tag": string;
	"Event Method"?: string;
	"Error Name"?: string;
	"Error Message"?: string;
	"Event Time"?: string;
	Count?: string;
};
