import { writable } from "svelte/store";
const { VITE_BASE_URL } = import.meta.env;

export const loading = writable(false);

export const fromUrl = writable(`${VITE_BASE_URL}error-logs?project=latest`);

export const isAutUpdActive = writable(false);
