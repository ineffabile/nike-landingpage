import { NextComponentType } from "next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import Image from "next/image"

const Content: NextComponentType = () => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center md:pt-0">
            <div className="flex flex-col justify-center text-center md:text-left space-y-16 pt-36 bg-cover bg-[url('/nike-vapormax-background.png')] bg-no-repeat md:bg-none">
                <div className="flex flex-col space-y-5">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        NIKE AIR
                        <br/>
                        VAPORMAX
                    </h1>

                    <span className="font-bold md:font-semibold opacity-75 md:opacity-60">
                        Inspiring the world&apos;s athletes.
                        <br/>
                        Great shoes for a great run.
                    </span>
                </div>

                <button className="ring-4 ring-white ring-opacity-75 drop-shadow-xl w-1/2 self-center md:w-auto md:self-auto text-md md:text-lg font-semibold bg-Main hover:bg-MainDark text-white py-4 border-[3px] border-MainDark md:border-none rounded-md hover:scale-105 hover:font-bold ease-in-out transition-all duration-300">
                    BUY NOW
                </button>
            </div>

            <div className="flex flex-col">
                <span className="hidden md:block">
                    <Image 
                        src="nike-vapormax.png"
                        width="1000px"
                        height="580px"
                        className="-rotate-[17.5deg] drop-shadow-[0_12.5px_10px_rgba(0,0,0,0.45)]"
                    />
                </span>
                <div className="flex flex-row-reverse self-center md:self-auto pt-5 md:pt-0">
                    <Link href="/">
                        <a className="scale-75 md:scale-100 px-1 text-2xl opacity-50 md:opacity-75 hover:opacity-100 transition-opacity duration-200 ease-in">
                            <FontAwesomeIcon icon={faTwitterSquare} className="text-MainDark hover:scale-105 transition-transform duration-300 ease-in-out"/>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="scale-75 md:scale-100 px-1 text-2xl opacity-50 md:opacity-75 hover:opacity-100 transition-opacity duration-200 ease-in">
                            <FontAwesomeIcon icon={faInstagramSquare} className="text-MainDark hover:scale-105 transition-transform duration-300 ease-in-out"/>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="scale-75 md:scale-100 px-1 text-2xl opacity-50 md:opacity-75 hover:opacity-100 transition-opacity duration-200 ease-in">
                            <FontAwesomeIcon icon={faFacebookSquare} className="text-MainDark hover:scale-105 transition-transform duration-300 ease-in-out"/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Content