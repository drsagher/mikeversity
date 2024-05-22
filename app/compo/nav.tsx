import Link from "next/link";
export default function NavComponent() {
    const brandName = 'Mike Litman';
    const list = [
        {id: 1, name: 'Home'},
        {id: 2, name: 'About'},
        {id: 3, name: 'Services'},
        {id: 4, name: 'Resources'},
        {id: 5, name: 'Testimonials'},
        {id: 6, name: 'Contact'},
        {id: 7, name: 'Events'},
    ]
    return (
        <div
            className={"flex items-start justify-center w-full bg-fixed bg-no-repeat z-20 bg-cover h-screen bg-[url('../public/hero.jpeg')]"}>
            <div className={'flex fixed z-10 text-lg h-14 bg-gradient-to-r from-white to-gray-100 w-full'}>
                {list.map((link) => {
                    return (
                        <Link key={link.id}
                              href={'#'}
                              className={`flex items-center justify-center hover:underline hover:text-indigo-800 px-4 font-bold`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}