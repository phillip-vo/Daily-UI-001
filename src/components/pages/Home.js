import { theme } from "../../App";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { Image, Logo, StyledHeader } from "../styles/Header.styled";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <StyledHeader>
        <Image src=".\images\undraw_trip_re_f724.svg" alt="" />
      </StyledHeader>
      <Flex>
        <Logo src=".\images\Pathfinder-1.png" alt="" />
        <div>
          <p>Discover | Explore | Wander</p>
          <p>Find your next journey</p>
          <Link to="/signup">
            <Button bg={theme.colors.accent} color="#fff" border="none">
              CREATE ACCOUNT
            </Button>
          </Link>
          <Button>LOG IN</Button>
        </div>
      </Flex>
    </Container>
  );
}
