import { theme } from "../../App";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { Form } from "../styles/Form.styled";
import { Logo } from "../styles/Header.styled";
import { Link } from "react-router-dom";
import {
  FlexFooter,
  FooterBackground,
  SignUpImage,
  SignUpImageTwo,
  FlexForm,
} from "../styles/Footer.styled";

export default function SignUp() {
  return (
    <Container>
      <Flex>
        <Link to="/">
          <Logo
            src=".\images\Pathfinder-1.png"
            alt=""
            width="150px"
            margin="10px 0 0 0"
            position="relative"
            left="80px"
          />
        </Link>
        <Form>
          <label for="name">Full Name</label>
          <input type="text" name="name" />
          <label for="email">Email</label>
          <input type="email" name="email" />
          <label for="password">Password</label>
          <input type="password" name="password" />
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />
          <Button bg={theme.colors.accent} color="#fff" border="none">
            SIGN UP
          </Button>
        </Form>
      </Flex>
      <FlexFooter>
        <SignUpImage src=".\images\undraw_moonlight_-5-ksn.svg" alt="" />
        <FooterBackground />
        <SignUpImageTwo src=".\images\undraw_camping_noc8.svg" alt="" />
      </FlexFooter>
    </Container>
  );
}
