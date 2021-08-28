import { useEffect } from "react";
import Localization from "./localization";
function App() {
  useEffect(() => Localization.setLanguage("fa"), []);
  return <div>{Localization.login_page_title_1}</div>;
}

export default App;
