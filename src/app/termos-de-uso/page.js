"use client";

import { Container } from "../components/container/style";
import Footer from "../containers/footer/page";
import Header from "../containers/header/page";

export default function TermosDeUso() {
  return (
    <>
      <Header />
      <section className="text-center my-12 md:mx-0 mx-2 md:my-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-semibold my-8 md:my-10 text-center md:text-left">
            Termos de Uso do Aim Tune
          </h1>
          <div className="flex flex-col gap-15">
            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                1. Introdução
              </h2>
              <p className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                Bem-vindo ao Aim Tune! Estes Termos de Uso regulam o uso do
                nosso site e serviços. Ao acessar ou utilizar o Aim Tune, você
                concorda com estes termos. Caso não concorde, não utilize nossos
                serviços.
              </p>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                2. Uso do Site
              </h2>
              <ul className="list-disc flex flex-col gap-5">
                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  2.1. O Aim Tune é um site destinado à conversão de
                  sensibilidade entre jogos, oferecendo ferramentas para
                  facilitar a experiência dos usuários.
                </li>

                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  2.2. Você concorda em utilizar o site de maneira lícita e em
                  conformidade com as leis aplicáveis.
                </li>

                <li className="text-lg md:text-xl font-semibold text-[#696969]  text-center md:text-left">
                  2.3. É proibido o uso do Aim Tune para qualquer finalidade
                  ilegal, abusiva ou que possa comprometer a integridade do
                  serviço.
                </li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                3. Propriedade Intelectual
              </h2>
              <ul className="list-disc flex flex-col gap-5">
                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  3.1. Todos os direitos sobre os conteúdos, marcas e
                  funcionalidades do Aim Tune pertencem aos seus proprietários.
                </li>

                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  3.2. Você não pode copiar, distribuir ou modificar qualquer
                  parte do site sem autorização prévia.
                </li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                4. Limitação de Responsabilidade
              </h2>
              <ul className="list-disc flex flex-col gap-5">
                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  4.1. O Aim Tune não se responsabiliza por danos decorrentes
                  do uso das informações e ferramentas disponibilizadas.
                </li>

                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  4.2. O site pode conter links para terceiros, não sendo o Aim
                  Tune responsável pelo conteúdo ou segurança desses sites.
                </li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                5. Modificações nos Termos
              </h2>
              <ul className="list-disc flex flex-col gap-5">
                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  5.1. O Aim Tune pode alterar estes Termos de Uso a qualquer
                  momento, notificando os usuários por meio do site.
                </li>

                <li className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                  5.2. O uso contínuo do serviço após alterações indica sua
                  concordância com os novos termos.
                </li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e90c2a] text-center md:text-left mb-5">
                7. Contato
              </h2>
              <p className="text-lg md:text-xl font-semibold text-[#696969] text-center md:text-left">
                Caso tenha dúvidas sobre estes Termos de Uso, entre em contato
                conosco através dos canais disponíveis no site.
              </p>
            </article>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
