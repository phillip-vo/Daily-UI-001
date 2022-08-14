import { ThemeProvider } from "styled-components";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import GlobalStyles from "./components/styles/Global";
import { Routes, Route } from "react-router-dom";

export const theme = {
  colors: {
    body: "#F2F2F2",
    dark: "#3F3D56",
    accent: "#FF6884",
    light: "#F6DBBE",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
