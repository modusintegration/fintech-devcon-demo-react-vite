import { useEffect, useState } from "react";

import Home from "./pages/Home";
import { Loader } from "@mantine/core";
import getToken from "./api/getToken";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  getToken().then((token) => {
    setIsLoading(false);
    document.cookie = `access_token=${token}`;
  });

  if (isLoading) return <Loader />;

  return <Home />;
}

export default App;
