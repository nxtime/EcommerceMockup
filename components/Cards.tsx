import { Card } from "./Card";
import { CaretDoubleRight } from "phosphor-react";

export const Cards = ({ className }: { className: string }) => {
    return (
            <div className={`w-full max-w-4xl flex max-sm:p-4 max-sm:flex-col max-sm:-mt-32 items-center justify-center mx-auto gap-4 relative ${className}`}>
            {/* <div className="flex w-full "> */}
            <div className="w-fit">
                <h2
                    className="text-4xl w-fit sm:[writing-mode:vertical-lr] sm:rotate-180"
                >
                    Em alta
                </h2>
            </div>
            <Card title="Cadeira de Bar" price="128,22" image="bar-chair.png" />
            <Card title="Mesa de Estar" price="230,54" image="table.png" />
            <div className="w-fit">
                <CaretDoubleRight
                    size={64}
                    className="hover:translate-x-2 transition-all cursor-pointer"
                />
            </div>
            {/* </div> */}
        </div>
    );
};
