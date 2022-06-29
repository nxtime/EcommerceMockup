import type {
    GetStaticPathsContext,
    GetStaticPropsContext,
    InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";
import Commerce from "@chec/commerce.js";
import { Layout } from "../components/Layout";
import ProductLayout from "../components/Product/ProductLayout";
import ProductsGrid from "../components/ProductsGrid";

export async function getStaticProps({
    params,
    locale,
    locales,
    preview,
}: GetStaticPropsContext<{ permaLink: string }>) {
    const commerce = new Commerce(
        "pk_test_44575d98dd77f4fa780040e1e8fd9fb1eaa3fcd25a8f9"
    );
    
    const productsList = await commerce.products.list()

    if (!productsList) {
        throw new Error(`Product with slug '${params!.permaLink}' not found`);
    }

    return {
        props: {
            productsList,
        },
        revalidate: 200,
    };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: "blocking", //indicates the type of fallback
    };
}

export default function products({
    productsList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    
    return router.isFallback ? (
        <h1>Loading...</h1>
    ) : (
        <Layout title="EzmindCommerce - Poltrona Lid Preta">
            <ProductsGrid products={productsList} />
        </Layout>
    );
}
