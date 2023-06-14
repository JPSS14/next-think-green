import Image from "next/image";

export function Intro() {
  return (
    <div className="mx-5 h-auto bg-greenTheme-600 px-4 md:h-[calc(100vh-56px)]  md:w-1/2">
      <div className="h-auto py-4 max-sm:h-auto md:w-[calc(100%-40px)] lg:absolute">
        <div className="left-[30%] mb-2 rounded-2xl bg-greenTheme-600 shadow-lg sm:w-full md:absolute md:top-28  md:w-[550px] md:p-2 lg:relative lg:top-20 lg:w-[650px]">
          <Image
            src="/Tiger-02.webp"
            alt="Tigre"
            width="1920"
            height="1272"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="sm:revert left-[8%] top-60 z-10 mb-2 rounded-2xl bg-white p-4 md:absolute md:w-[300px] md:border-4 md:border-greenTheme-600 lg:w-[500px]">
          <h1 className="text-2xl font-bold text-greenTheme-600">
            A natureza te observa
          </h1>
          <p>
            Somos parte integrante desse sistema interconectado e que nossas
            ações têm um impacto direto sobre as espécies que compartilham
            conosco o planeta. É um chamado para que assumamos a
            responsabilidade de proteger e conservar a diversidade da vida que
            nos cerca.
          </p>
        </div>
        <div className="sm:revert z-10 rounded-2xl bg-white p-4 sm:left-[55%] sm:top-[58%] md:absolute md:w-[300px] md:border-4 md:border-greenTheme-600 lg:left-[49%] lg:top-[98%] lg:w-[500px]">
          <h1 className="text-2xl font-bold text-greenTheme-600">
            É nossa responsabilidade
          </h1>
          <p>
            Cada extinção de uma espécie é uma perda irreparável para a riqueza
            e complexidade do mundo natural. Ao valorizar a natureza e agir em
            prol da sua preservação, estamos honrando o nosso papel como seres
            conscientes, e assegurando um futuro saudável e próspero para as
            gerações vindouras.
          </p>
        </div>
      </div>
    </div>
  );
}
