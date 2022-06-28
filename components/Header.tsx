import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
const NavItem = ({ children = "Indefinido", link = "#" }) => (
    <li className="flex max-sm:h-16 items-center justify-center">
        <a
            href={link}
            className="h-full hover:border-b-2 flex items-center hover:border-zinc-900"
        >
            {children}
        </a>
    </li>
);

const Navbar = ({ open = false, setOpen }: { open: boolean; setOpen: any }) => {
    return (
        <nav className="w-full max-w-4xl flex items-center mx-auto z-30">
            <h2 className="text-2xl">
                <a href="#">Logo</a>
            </h2>
            <div className="w-full flex justify-end items-center">
                <div
                    className="absolute right-0"
                    onClick={() => setOpen((prev: boolean) => !prev)}
                >
                    <ul
                        className={`flex items-center ml-auto text-zinc-700 w-fit flex-col cursor-pointer sm:hidden`}
                    >
                        <li className="h-1 w-8 bg-slate-600 rounded-full m-1 ">
                            <span className="block"></span>
                        </li>
                        <li className="h-1 w-5 bg-slate-600 rounded-full m-1">
                            <span className="block"></span>
                        </li>
                    </ul>
                </div>
                <div className="max-sm:w-1/2 max-sm:min-w-[200px] max-sm:absolute right-0 max-sm:min-h-screen max-sm:top-16">
                    <ul
                        className={`w-full flex flex-1 items-center ml-auto text-zinc-700 max-sm:flex-col max-sm:border-l border-zinc-200 bg-white sm:gap-4 ${
                            !open && "max-sm:hidden"
                        }`}
                    >
                        <NavItem>Home</NavItem>
                        <NavItem>Categorias</NavItem>
                        <NavItem>Produtos</NavItem>
                        <NavItem>Loja</NavItem>
                        <MagnifyingGlass size={20} className="my-4 cursor-pointer"/>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="w-full border-b flex bg-white items-center border-l-zinc-900 h-16 px-4 sticky top-0 z-40">
            <Navbar open={open} setOpen={setOpen}></Navbar>
        </header>
    );
};
