import { Person } from "../types/person";
import { getAccessToken } from "../utils/getAccessToken";
import { baseURL } from "./constants";

function getAllPersons(): Promise<Person[] | void> {
  const myHeaders = new Headers();
  myHeaders.append("servicerId", "mambu");
  myHeaders.append("Authorization", `Bearer ${getAccessToken()}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseURL}/persons?townName.inc=Lab`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
}

export default getAllPersons;
