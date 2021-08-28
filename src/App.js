import { useEffect } from "react";
import Localization from "./localization";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// Theme
import { theme } from "./theme/theme";

function App() {
  useEffect(() => Localization.setLanguage("fa"), []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>{Localization.login_page_title_1}</div>;
    </ThemeProvider>
  );
}

export default App;
