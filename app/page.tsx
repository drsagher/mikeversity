import NavComponent from "@/app/compo/nav";
import HeroComponent from "@/app/compo/hero";
import FooterComponent from "@/app/compo/footer";

export default function Home() {
  return (
    <main >
        <NavComponent/>
        <HeroComponent />
        <FooterComponent/>
    </main>
  );
}
