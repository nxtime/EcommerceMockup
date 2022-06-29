import { Card } from "./Card";
import { CaretDoubleRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Commerce from "@chec/commerce.js";
import { Product } from "@chec/commerce.js/types/product";

let firstTime = true;
export const Cards = ({ className }: { className: string }) => {
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const commerce = new Commerce(
                "pk_test_44575d98dd77f4fa780040e1e8fd9fb1eaa3fcd25a8f9"
            );

            const productList = await commerce.products.list({
                limit: 2,
            });

            setProducts(productList.data);
        };
        if (firstTime) fetchData();
    }, []);

    if (products === null) return <h2>Loading...</h2>;
    console.log(products);
    return (
        <div
            className={`w-full max-w-4xl flex max-sm:p-4 max-sm:flex-col max-sm:-mt-32 items-center justify-center mx-auto gap-4 relative ${className}`}
        >
            <div className="w-fit">
                <h2 className="text-4xl w-fit sm:[writing-mode:vertical-lr] sm:rotate-180">
                    Em alta
                </h2>
            </div>
            {products.map((product) => (
                <Card
                    title={product.name}
                    price={product.price.raw.toString()}
                    image={product.assets[0].url}
                    link={`/product/${product.permalink}`}
                />
            ))}
            <div className="w-fit">
                <CaretDoubleRight
                    size={64}
                    className="hover:translate-x-2 transition-all cursor-pointer"
                />
            </div>
        </div>
    );
};
