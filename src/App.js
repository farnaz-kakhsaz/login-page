import { useEffect } from "react";
import Localization from "./localization";
import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// Component
import Login from "./components/pages/login/login.component";
// Theme
import { theme } from "./theme/theme";
import RTL from "./theme/right-to-left";

let responsiveTheme = responsiveFontSizes(theme);

function App() {
  useEffect(() => Localization.setLanguage("fa"), []);
  return (
    <ThemeProvider theme={responsiveTheme}>
      <RTL>
        <CssBaseline />
        <Login />
      </RTL>
    </ThemeProvider>
  );
}

export default App;
