import HeroComponent from "@/app/compo/hero";
import TopCoursesComponent from "@/app/compo/topcourses";
import SoftSkillsComponent from "@/app/compo/softskills";
import TrainingDomainsComponent from "@/app/compo/trainingdomains";
import MissionComponent from "@/app/compo/mission";
import CommunityComponent from "@/app/compo/community";
import ExpertiseComponent from "@/app/compo/expertise";
import TestimonialsComponent from "@/app/compo/testemonials";
import ImpactsComponent from "@/app/compo/impacts";
import VisionComponent from "@/app/compo/vision";

export default function Home() {
  return (
    <main >
        <MissionComponent/>
        <VisionComponent/>
        <HeroComponent />
        <TopCoursesComponent/>
        <TrainingDomainsComponent/>
        <SoftSkillsComponent/>
        <ExpertiseComponent />
        <ImpactsComponent/>
        <TestimonialsComponent />
        <CommunityComponent/>
    </main>
  );
}
