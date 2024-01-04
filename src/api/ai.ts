import HttpClient from "../api/httpClient";
import type { ErrorLogDetail, ErrorLogs } from "../types/types";

class Ai extends HttpClient {
	private static instanceCached: Ai;

	private constructor() {
		super("https://trycatchcloud.fly.dev/api/");
	}

	static getInstance = () => {
		if (!Ai.instanceCached) {
			Ai.instanceCached = new Ai();
		}
		return Ai.instanceCached;
	};

	public getAllProjects = (token: string) => {
		this.instance.interceptors.request.use(config => {
			config.headers.Authorization = `Bearer ${token}`;
			return config;
		});
		return this.instance.get<any, { projectName: string }[]>("projects/all");
	};

	public getUserApiKey = (token: string) => {
		this.instance.interceptors.request.use(config => {
			config.headers.Authorization = `Bearer ${token}`;
			return config;
		});
		return this.instance.get<any, { usageToken: string }>("user/api-token");
	};

	public getGitHubInfo = (code: string) => {
		return this.instance.get<any, { token: string }>(`user/github-info?code=${code}`);
	};

	public getErrLogById = (token: string, errId: string) => {
		this.instance.interceptors.request.use(config => {
			config.headers.Authorization = `Bearer ${token}`;
			return config;
		});
		return this.instance.get<any, ErrorLogDetail[]>(`err-log/by-id/${errId}`);
	};

	public getAllErrLog = (token: string) => {
		this.instance.interceptors.request.use(config => {
			config.headers.Authorization = `Bearer ${token}`;
			return config;
		});
		return this.instance.get<any, ErrorLogDetail[]>(`err-log/all`);
	};

	public getErrLogByProject = (token: string, project: string) => {
		this.instance.interceptors.request.use(config => {
			config.headers.Authorization = `Bearer ${token}`;
			return config;
		});
		return this.instance.get<any, ErrorLogs[]>(`err-log/by-project/${project}`);
	};

	public getUpdates4Log = (token: string) => {
		this.instance.interceptors.request.use(config => {
			config.headers.Authorization = `Bearer ${token}`;
			return config;
		});
		return this.instance.get<any, ErrorLogs[]>(`err-log/live-update`);
	};
}

export default Ai;
