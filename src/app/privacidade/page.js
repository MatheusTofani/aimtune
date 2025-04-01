"use client";

import { Container } from "../components/container/style";
import Footer from "../containers/footer/page";
import Header from "../containers/header/page";

export default function PoliticasDePrivacidade() {
  return (
    <>
      <Header />
      <section className="text-center my-12 md:my-20 md:mx-0 mx-2">
        <Container>
          <h1 className="text-2xl md:text-3xl font-semibold my-8 md:my-10 text-center md:text-left">
            Políticas de Privacidade do Aim Tune
          </h1>
          <div className="flex flex-col gap-15">
            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                1. Introdução
              </h2>
              <p className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                Esta Política de Privacidade descreve como coletamos, usamos e
                protegemos suas informações ao usar o Aim Tune.
              </p>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                2. Informações Coletadas
              </h2>
              <ul className="list-disc flex flex-col gap-5">
                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  2.1. Podemos coletar informações fornecidas por você, como
                  nome e e-mail, ao utilizar nossos serviços.
                </li>
                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  2.2. Também coletamos dados automaticamente, como endereço IP,
                  tipo de dispositivo e padrões de uso do site.
                </li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                3. Uso das Informações
              </h2>
              <ul className="list-disc flex flex-col gap-5">
                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  3.1. Utilizamos suas informações para fornecer e melhorar
                  nossos serviços, personalizar sua experiência e garantir a
                  segurança da plataforma.
                </li>
                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  3.2. Não compartilhamos suas informações com terceiros sem seu
                  consentimento, exceto conforme exigido por lei.
                </li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                4. Segurança dos Dados
              </h2>
              <p className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                Adotamos medidas de segurança para proteger suas informações
                contra acessos não autorizados e vazamentos de dados.
              </p>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                5. Cookies e Tecnologias de Rastreamento
              </h2>
              <p className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                Nosso site pode usar cookies para melhorar sua experiência. Você
                pode configurar seu navegador para recusar cookies se preferir.
              </p>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                6. Alterações na Política de Privacidade
              </h2>
              <p className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                Podemos modificar esta Política de Privacidade a qualquer
                momento. Notificaremos os usuários sobre mudanças relevantes.
              </p>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                7. Contato
              </h2>
              <p className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                Caso tenha dúvidas sobre esta Política de Privacidade, entre em
                contato conosco através dos canais disponíveis no site.
              </p>
            </article>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
