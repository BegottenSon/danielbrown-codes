import { writable } from "svelte/store";

export const income = writable(0);
export const expenses = writable(0);
export const free = writable(0);