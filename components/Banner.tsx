import Image from "next/image";
import { CaretRight } from "phosphor-react";

export const Banner = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] w-full max-w-4xl flex max-sm:p-4 max-sm:flex-col items-center mx-auto">
            <div className="sm:w-1/2">
                <h2 className="text-6xl font-Trebuchet font-bold text-zinc-800">
                    Os melhores móveis.
                </h2>
                <h3 className="text-xl mt-4 font-Trebuchet text-zinc-700">
                    Escolha entre uma vasta variedade de produtos premium.
                </h3>
                <button className="btn btn-primary mt-8">
                    Explore
                    <CaretRight size={16} />
                </button>
            </div>
            <div className="sm:w-1/2">
                <Image
                    className="select-none"
                    src="/moveis/chair.webp"
                    alt="Imagem de uma poltrona"
                    width={500}
                    height={500}
                    draggable="false"
                />
            </div>
        </div>
    );
};
