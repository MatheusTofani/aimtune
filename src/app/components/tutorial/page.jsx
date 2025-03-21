import { TutorialVideo } from "./style";

export default function TutorialConverter() {
    return (
        <section className="my-10">
            <h1 className="text-2xl font-semibold my-10">Como converter sua sensibilidade ?</h1>
            <div className="flex  items-center justify-between"> 
            <ul className="flex flex-col gap-10">
                <li>
                    <h3 className="text-lg font-semibold text-[#e90c2a]">Passo 1</h3>
                    <h2 className="text-xl font-semibold text-[#696969]">Escolha o jogo de origem e o jogo de destino</h2>
                </li>

                <li>
                    <h3 className="text-lg font-semibold text-[#e90c2a]">Passo 2</h3>
                    <h2 className="text-xl font-semibold text-[#696969]">Adicione a sua sensibilidade do jogo de origem</h2>
                </li>

                <li>
                    <h3 className="text-lg font-semibold text-[#e90c2a]">Passo 3</h3>
                    <h2 className="text-xl font-semibold text-[#696969]">Escolha o seu DPI e para qual você deseja converter</h2>
                </li>
            </ul>

            <TutorialVideo src="/tutorial.mp4" muted autoPlay loop playsInline className=""></TutorialVideo> 
            </div>
        </section>
    );
}
