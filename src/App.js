import { Container } from "./components/styles/Container.styled";
import { Flex } from "./components/styles/Flex.styled";
import { Button } from "./components/styles/Button.styled";
import { StyledHeader, Image, Logo } from "./components/styles/Header.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

const theme = {
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
        <Container>
          <StyledHeader>
            <Image src=".\images\undraw_trip_re_f724.svg" alt="" />
          </StyledHeader>
          <Flex>
            <Logo src=".\images\Pathfinder-1.png" alt="" />
            <div>
              <p>Discover | Explore | Wander</p>
              <p>Find your next journey</p>
              <Button bg={theme.colors.accent} color="#fff" border="none">
                CREATE ACCOUNT
              </Button>
              <Button>LOG IN</Button>
            </div>
          </Flex>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
