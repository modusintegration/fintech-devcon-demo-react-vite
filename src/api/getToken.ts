function getToken(): Promise<string> {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", "wires-client:dev");
  urlencoded.append("client_secret", "EPq2ZCsmqzYF3mKePAmGs5DWtIdNLOB7");
  urlencoded.append("scope", "kevin-test2-wires-api:dev");

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
    mode: "cors",
  };

  return fetch(
    "https://keycloak.dev.pre.piam.psps.tenants.portx.io/realms/kevin-test2/protocol/openid-connect/token",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result.access_token)
    .catch((error) => console.log("error", error));
}

export default getToken;
