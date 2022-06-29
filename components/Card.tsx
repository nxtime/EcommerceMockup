import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    price: string;
    image: string;
    link: string;
}
export const Card = ({ title, price, image, link }: Props) => {
    return (
        <div className="flex flex-col flex-1 max-sm:w-3/4 max-sm:max-w-sm">
            <div className="card-image max-w-2xl mx-auto z-10">
                <Link href={link}>
                    <Image
                        className="select-none hover:scale-110 transition-all duration-300 cursor-pointer"
                        src={image}
                        width={200}
                        height={250}
                        draggable="false"
                    />
                </Link>
            </div>
            <div className="card bg-base-100 shadow-xl py-6 h-40 mt-[-15%]">
                <div className="card-body">
                    <h2 className="card-title mx-auto z-10 mb-0 h-fit hover:text-zinc-600 cursor-pointer transition-text duration-300">
                        {title}
                    </h2>
                    <h3 className="mx-auto z-10 mb-0 h-fit">R${price}</h3>
                </div>
            </div>
        </div>
    );
};
