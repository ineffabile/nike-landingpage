import { NextComponentType } from "next"
import Link from "next/link"
import Image from "next/image"

const Navbar: NextComponentType = () => {
    return (
        <nav className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between p-5 md:py-16 md:px-40 w-full font-Poppins font-bold">
            <div className="mb-2 sm:mb-0">
                <Link href="/">
                    <Image
                        src="nike-logo.png"
                        width="96px"
                        height="96px"
                        className="scale-90 md:scale-100"
                    />
                </Link>
            </div>
            <div className="flex flex-row space-x-5 md:space-x-20 mt-2 md:mt-0 place-self-center tracking-tight">
                <Link href="/">
                    <a className="text-sm md:text-lg font-semibold bg-Main text-white px-5 md:px-7 py-2 drop-shadow-lg rounded-md">HOME</a>
                </Link>

                <Link href="/">
                    <a className="text-sm md:text-lg px-5 md:px-7 py-2 hover:bg-Main hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-500 rounded-md">ABOUT US</a>
                </Link>

                <Link href="/">
                    <a className="text-sm md:text-lg px-5 md:px-7 py-2 hover:bg-Main hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-500 rounded-md">CONTACT</a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar