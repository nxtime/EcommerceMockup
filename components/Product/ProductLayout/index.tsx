import Image from "next/image";
import { Heart, ShoppingCartSimple } from "phosphor-react";
interface productProps {
    description: string;
    name: string;
    price: {
        raw: number;
    };
    inventory: {
        available: number;
    };
    sku: string | null;
    assets: {
        url: string;
    }[];
}

function ProductLayout({
    image = "undefined",
    product,
}: {
    image: string;
    product: productProps;
}) {
    return (
        <div className="max-w-4xl mx-auto grid grid-cols-2 mt-8 items-center">
            <div className="w-full">
                <img
                    className="w-full aspect-square"
                    src={product.assets[0].url}
                    width="100%"
                    height="100%"
                    draggable="false"
                />
            </div>
            <div className="w-full flex flex-col gap-4">
                <header>
                    <h2 className="text-4xl font-bold">{product.name}</h2>
                    <h4 className="text-2xl">R${product.price.raw.toString().replace('.', ',')}</h4>
                    <p
                        className="text-md leading-relaxed text-justify mt-4"
                        dangerouslySetInnerHTML={{
                            __html:
                                product.description.substring(0, 402) + "...",
                        }}
                    />
                </header>
                <div className="flex items-center gap-2">
                    <button className="btn w-64 gap-2">
                        Adicionar <ShoppingCartSimple size={16} />
                    </button>
                    <Heart
                        size={32}
                        className="cursor-pointer hover:scale-110 transition-all"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductLayout;
