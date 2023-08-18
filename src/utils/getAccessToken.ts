import { getCookie } from "./getCookie";

export function getAccessToken() {
    return getCookie('access_token');
}