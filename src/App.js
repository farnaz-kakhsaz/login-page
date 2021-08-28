import { useEffect } from "react";
import Localization from "./localization";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// Component
import Login from "./components/pages/login/login";
// Theme
import { theme } from "./theme/theme";

function App() {
  useEffect(() => Localization.setLanguage("fa"), []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
}

export default App;
