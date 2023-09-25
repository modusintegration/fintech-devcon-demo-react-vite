export function getAccessToken() {
    const stringSession = sessionStorage.getItem('oidc.user:https://keycloak.dev.piam.psps.tenants.portx.io/realms/demobank:fintech-devcon-demo-react-vite');
    return JSON.parse(stringSession!).access_token;
}