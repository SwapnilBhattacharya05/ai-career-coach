import React from "react";
import { industries } from "@/data/industries";
import OnboardingForm from "@/app/(main)/onboarding/_components/OnboardingForm";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const OnboardingPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) redirect("/dashboard"); // IF USER IS ALREADY ONBOARDED
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};
export default OnboardingPage;
