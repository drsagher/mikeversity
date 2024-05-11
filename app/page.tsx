import Image from "next/image";
import Logo from '@/public/resources/logo.jpg';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Image src={Logo} alt="logo" height={200} width={200}/>
        <h1 className={'text-3xl py-10'}>Launching Soon...</h1>
    </main>
  );
}
