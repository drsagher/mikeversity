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
            className={"flex flex-row items-start justify-start w-full bg-fixed bg-no-repeat z-20 bg-cover h-screen bg-[url('../public/hero.png')]"}>
            <div className={'flex fixed z-10 text-lg h-14 bg-red-600 w-full'}>
                {list.map((link) => {
                    return (
                        <Link key={link.id}
                              href={'#'}
                              className={`flex items-center justify-center text-gray-50 hover:underline hover:text-amber-200 px-4 font-bold uppercase`}
                        >
                            {link.name}
                        </Link>
                    );
                })}

            </div>
            {/*<div className={'flex items-center justify-center mt-96 ml-48 p-4 '}>*/}
            {/*    <p className={'text-3xl'}>*/}
            {/*        Empowering individuals and organizations to reach <br/>their full potential through transformative coaching <br/> and training, fostering a culture of growth,<br/> resilience,and excellence*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    )
}