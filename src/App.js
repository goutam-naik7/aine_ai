import HeaderComponent from "./Components/Header/HeaderComponent.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import BodyContainer from "./Components/BodyComponent/BodyContainer.js";
import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Raleway, Arial",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HeaderComponent />
        <BodyContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
