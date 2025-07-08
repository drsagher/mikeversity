import TopCoursesComponent from "@/app/compo/topcourses";
import SoftSkillsComponent from "@/app/compo/softskills";
import TrainingDomainsComponent from "@/app/compo/trainingdomains";
import CommunityComponent from "@/app/compo/community";
import ImpactsComponent from "@/app/compo/impacts";
import VisionComponent from "@/app/compo/vision";
import ClientFeedbackComponent from "@/app/compo/client-feedback";
import TraineesCommentsComponent from "@/app/compo/student-feedback";
import FounderMessage from "@/app/compo/founder";
import WhyMikeversity from "@/app/compo/why";
export default function Home() {
  return (
    <main >
        <FounderMessage />
        <VisionComponent/>
        <WhyMikeversity/>
        <TopCoursesComponent/>
        <TrainingDomainsComponent/>
        <SoftSkillsComponent/>
    </main>
  );
}
