import Link from "next/link"

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 w-full">
            <section className="w-full px-8 py-6 lg:px-16 flex justify-between items-center">
                <h1><Link href="/"><a className="font-bold text-2xl transition-all hover lg:hover:bg-dark/50 bg-dark px-3 py-2 rounded-full text-light">M</a></Link></h1>
                <nav>
                    <button className="px-5 pb-1 border-b-4 text-lg border-dark/50 text-dark/50 font-semibold transition-all hover lg:hover:border-dark/30 lg:hover:text-dark/30">Menu</button>
                </nav>
            </section>
        </header>
    )
}
export default Header;