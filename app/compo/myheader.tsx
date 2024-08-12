'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiMenuFold2Fill } from "react-icons/ri";
import { motion } from "framer-motion"
export default function MyHeaderComponent(){
    const pathname = usePathname();
    const isActive = (link: string) => link === pathname;

    const list = [
        {id: 1, name: 'Home', link:'/'},
        {id: 2, name: 'Services', link:'/pages/services'},
        {id: 2, name: 'Team', link:'/pages/team'},
        {id: 3, name: 'Awards', link:'/pages/awards'},
        {id: 4, name: 'Gallery', link:'/pages/gallery'},
        {id: 5, name: 'About', link:'/pages/about'},
        {id: 6, name: 'Events', link:'/pages/events'},
    ]
    const [menuOpen, setMenuOpen] = useState(false);
    const handlerNav =()=>{
        setMenuOpen(!menuOpen);
    }
    return(
        <motion.header layout layoutRoot style={{ position: "sticky" }}
            className={'flex flex-row justify-between p-2 lg:p-6 text-xs bg-indigo-950'}>
            <div className={'flex flex-col gap-2 sm:grid-cols-1 md:grid-cols-1 w-full text-white'}>
                <motion.p initial={{opacity:0, y:15}} animate={{opacity:1, y:0}} transition={{delay:0.75, duration:0.25}} className={'text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase font-bold'}>mike litman</motion.p>
                <motion.p initial={{opacity: 0, x: 15}} animate={{opacity: 1, x: 0}}
                          transition={{delay: 0.75, duration: 0.25}}
                          className={'flex items-center text-xs sm:text-xs md:text-md uppercase gap-1'}>
                    global thought leader
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>

                </motion.p>
            </div>
            <motion.div layout className={'hidden sm:flex items-center justify-center gap-2 p-1 sm:text-sm lg:text-base'}>
                {list.map((link) => {
                    return (
                        <Link key={link.id}
                              href={link.link}
                              className={`${isActive(link.link) ? 'underline underline-offset-4' : 'no-underline'} text-white hover:underline hover:underline-offset-4 hover:decoration-white uppercase font-bold`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </motion.div>
            <div onClick={handlerNav} className={'text-gray-50 sm:hidden cursor-pointer '}>
                <div className={''}>
                    <RiMenuUnfold2Fill  size={35} />
                </div>
            </div>
            <div
                className={menuOpen ? 'fixed right-0 z-10 sm:hidden h-auto bg-red-900 p-4 ease-in duration-500' : 'fixed left-[100%] top-0 ease-in duration-500'}>
                <div className={'flex items-center justify-end w-full'}>
                    <div onClick={handlerNav} className={'flex items-start cursor-pointer justify-between gap-8'}>

                        <div className={'grid grid-cols-1 gap-4 sm:text-sm lg:text-base'}>
                            {list.map((link) => {
                                return (
                                    <Link key={link.id}
                                          href={link.link}
                                          className={`${isActive(link.link) ? 'underline ' : 'no-underline'} 
                                          transition duration-300 ease-in-out
                                          text-xs text-white hover:underline hover:underline-offset-4 hover:decoration-white uppercase font-bold`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className={'text-gray-50'}>
                            <RiMenuFold2Fill   size={35}/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}