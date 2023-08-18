import { Person } from "../types/person";
import { getAccessToken } from "../utils/getAccessToken";
import { baseURL } from "./constants";

function getPersonByName(
  servicerId: "csi" | "mambu",
  name: string
): Promise<Person[] | void> {
  const myHeaders = new Headers();
  myHeaders.append("servicerId", servicerId);
  myHeaders.append("Authorization", `Bearer ${getAccessToken()}`);

  const arrayNames = name.split(" ");
  const firstName = arrayNames[0];
  const lastName = arrayNames[arrayNames.length - 1];

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `${baseURL}/persons?firstName.eq=${firstName}&lastName.eq=${lastName}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result);
}

export default getPersonByName;
