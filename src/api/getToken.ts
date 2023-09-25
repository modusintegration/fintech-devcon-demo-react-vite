function getToken(): Promise<string> {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", "447f2a9f-6d42-4e7d-806b-fe5fe130a080");
  urlencoded.append("client_secret", "Zds4sn7jfRpBznsk4Dz8dwNhaqnpWCQf");
  urlencoded.append("scope", "demobank:operator");

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
    mode: "cors",
  };

  return fetch(
    "https://keycloak.dev.piam.psps.tenants.portx.io/realms/demobank/protocol/openid-connect/token",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result.access_token)
    .catch((error) => console.log("error", error));
}

export default getToken;
