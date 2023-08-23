import Home from "./pages/Home";
import { Loader } from "@mantine/core";
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  if (auth.isLoading) return <Loader />;

  if (!auth.isAuthenticated) auth.signinRedirect();

  return <Home />;
}

export default App;
