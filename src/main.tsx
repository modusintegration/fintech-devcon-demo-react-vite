import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Container, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { AuthProvider } from "react-oidc-context";
import { oidcConfig } from "../keycloak";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ fontFamily: `"fira sans", "sans-serif"` }}
      >
        <Notifications />
        <Container mt={75} size="500px">
          <App />
        </Container>
      </MantineProvider>
    </AuthProvider>
  </React.StrictMode>
);
