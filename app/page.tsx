import NavComponent from "@/app/compo/nav";
import HeroComponent from "@/app/compo/hero";
import FooterComponent from "@/app/compo/footer";
import TopCoursesComponent from "@/app/compo/topcourses";
import SummaryComponent from "@/app/compo/summary";
import SoftSkillsComponent from "@/app/compo/softskills";

export default function Home() {
  return (
    <main >
        <NavComponent/>
        <HeroComponent />
        <TopCoursesComponent/>
        <SummaryComponent/>
        <SoftSkillsComponent/>
        <FooterComponent/>

    </main>
  );
}
