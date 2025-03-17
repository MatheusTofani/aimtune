import { Container } from "../../components/container/style";
import { HeaderBranding, HeaderContainer } from "./style";

export default function Header() {
  return (
    <HeaderContainer className="shadow-md">
      <Container className="h-full flex justify-between items-center">
        <HeaderBranding>Aim Tune</HeaderBranding>
      </Container>
    </HeaderContainer>
  );
}
