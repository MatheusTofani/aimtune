"use client";

import { Provider } from "react-redux";
import { Container } from "./components/container/style";
import Header from "./containers/header/page";
import { store } from "./store/store";
import Calculadora from "./components/calculadora/page";
import { TitleSensiCalculator } from "./style";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <TitleSensiCalculator className="text-4xl font-semibold my-10">Conversor de Sensibilidade</TitleSensiCalculator>
      <Container>
        <Calculadora />
      </Container>
    </Provider>
  );
}
