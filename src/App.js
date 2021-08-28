import { useEffect } from "react";
import Localization from "./localization";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// Component
import Login from "./components/pages/login/login.component";
// Theme
import { theme } from "./theme/theme";
import RTL from "./theme/right-to-left";

function App() {
  useEffect(() => Localization.setLanguage("fa"), []);
  return (
    <ThemeProvider theme={theme}>
      <RTL>
        <CssBaseline />
        <Login />
      </RTL>
    </ThemeProvider>
  );
}

export default App;
