import { AuthProviderProps } from 'react-oidc-context';

const onSigninCallback = (): void => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

export const oidcConfig: AuthProviderProps = {
  authority: 'fintech-devcon-demo-react-vite.dev.pre.demobank.tenants.portx.io',
  client_id: 'fintech-devcon-demo-react-vite',
  redirect_uri: window.location.href,
  onSigninCallback,
};
