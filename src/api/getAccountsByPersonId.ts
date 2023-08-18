import { PersonAccounts } from "../types/personAccount";
import { getAccessToken } from "../utils/getAccessToken";
import { baseURL } from "./constants";
import { account } from "./mocks";

function getAccountsByPersonId(
  servicerId: "csi" | "mambu",
  personId: string
): Promise<PersonAccounts | void> {
  const myHeaders = new Headers();
  myHeaders.append("servicerId", servicerId);
  myHeaders.append("Authorization", `Bearer ${getAccessToken()}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  if (servicerId === "csi")
    return Promise.resolve({ personId, personName: "", accounts: [account] });
  return fetch(`${baseURL}/persons/${personId}/accounts`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
}

export default getAccountsByPersonId;
