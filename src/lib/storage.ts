import { writable } from "svelte/store";

export const loading = writable(false);

export const fromUrl = writable("http://localhost:5173/error-logs?project=latest");

export const isAutUpdActive = writable(false);
