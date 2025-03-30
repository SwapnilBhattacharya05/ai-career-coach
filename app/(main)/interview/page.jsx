import {getAssessments} from "@/actions/interview";
import StatsCards from "@/app/(main)/interview/_components/StatsCards";
import PerformanceChart from "@/app/(main)/interview/_components/PerformanceChart";
import QuizList from "@/app/(main)/interview/_components/QuizList";

const InterviewPage = async() => {
    const assessments = await getAssessments();
  return (
    <div>
      <div>
        <h1 className="text-6xl font-bold gradient-title mb-5">
          Interview Preparation
        </h1>
          <div className="space-y-6">
              <StatsCards assessments={assessments} />
              <PerformanceChart assessments={assessments} />
              <QuizList assessments={assessments} />
          </div>
      </div>
    </div>
  );
};
export default InterviewPage;
