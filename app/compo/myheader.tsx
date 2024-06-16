import Link from "next/link";
export default function MyHeaderComponent(){
    const list = [
        {id: 1, name: 'Home', link:'/'},
        {id: 2, name: 'Services', link:'/pages/services'},
        {id: 3, name: 'Awards', link:'/pages/awards'},
        {id: 4, name: 'Gallery', link:'/pages/gallery'},
        {id: 5, name: 'About', link:'/pages/about'},
        {id: 6, name: 'Events', link:'/pages/events'},
    ]
    return(
        <div className={'grid sm:grid-cols-2 md:grid-rows-1 sm:h-auto md:h-24 sm:px-1 md:px-6 items-center w-full bg-indigo-800'}>
            <div className={'grid sm:grid-cols-1 md:grid-cols-1 w-full text-white'}>
                <h1 className={'sm:text-2xl md:text-3xl uppercase font-bold'}>mike litman</h1>
                <p className={'sm:text-xs md:text-md uppercase'}>global thought leader</p>
            </div>
            <div className={'flex flex-row justify-end sm:text-sm lg:text-base'}>
                    {list.map((link) => {
                        return (
                            <Link key={link.id}
                                  href={link.link}
                                  className={'text-white hover:underline hover:underline-offset-4 hover:decoration-white px-2 uppercase font-bold'}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
}