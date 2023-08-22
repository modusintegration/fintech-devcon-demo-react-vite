import { useState } from "react";

import Home from "./pages/Home";
import { Loader } from "@mantine/core";
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  if (!auth.isAuthenticated) auth.signinRedirect();

  if (isLoading) return <Loader />;

  return <Home />;
}

export default App;
