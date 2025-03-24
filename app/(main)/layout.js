import React from "react";

const MainLayout = ({ children }) => {
  // TODO: IF ONBOARDING PROCESS ALREADY COMPLETED THEN REDIRECT

  return <div className="container mx-auto mt-24 mb-20">{children}</div>;
};
export default MainLayout;
