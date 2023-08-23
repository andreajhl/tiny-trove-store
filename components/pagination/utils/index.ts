import { LIMIT_ITEMS } from "@/constants/client";

export const calculateInitialPage = (offset: string) => Math.round(Number(offset) / LIMIT_ITEMS) || 0;
