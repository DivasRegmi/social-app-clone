import React, { lazy, Suspense } from "react";

const FirstSection = lazy(() =>
  import("../../components/mainPageSections/FirstSection")
);

const SecondSection = lazy(() =>
  import("../../components/mainPageSections/SecondSection")
);

function Main() {
  return (
    <div className="home-main-front">
      <Suspense fallback={<div> </div>}>
        <FirstSection />
        <SecondSection />
      </Suspense>
    </div>
  );
}

export default Main;
