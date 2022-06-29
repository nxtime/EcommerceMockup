import React from "react";
import { Header } from "../Header";
import Head from "next/head";

export const Layout = ({
    children,
    title = "Ezmind - Ecommerce",
}: {
    children: React.ReactNode;
    title: string;
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
        </>
    );
};
