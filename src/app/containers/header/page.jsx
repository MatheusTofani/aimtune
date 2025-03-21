import { Container } from "../../components/container/style";
import { HeaderBranding, HeaderContainer } from "./style";

export default function Header() {
  return (
    <HeaderContainer className="shadow-xl
    ">
      <Container className="h-full flex justify-between items-center">
        <HeaderBranding>Aim Tune</HeaderBranding>
        <nav>
          <ul className="flex gap-5">
            <li>
              <a href="#" className="text-[#FEF6EC]" >Conversor de Sensibilidade</a>
            </li>
            <li>
              <a href="#" className="text-[#FEF6EC]">Calculadora eDPI</a>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderContainer>
  );
}
