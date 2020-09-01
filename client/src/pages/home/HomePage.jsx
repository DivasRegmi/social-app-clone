import React, { lazy, Suspense } from "react";

import "./home.scss";

const HomeWelcomeSection = lazy(() =>
  import("../../components/homeSections/homeWelcomeSection/HomeWelcomeSection")
);
const HomeSections = lazy(() =>
  import("../../components/homeSections/HomeSections")
);

function HomePage() {
  return (
    <div className="homecontainer">
      <Suspense fallback={<div></div>}>
        <HomeWelcomeSection />
        <HomeSections />
      </Suspense>
    </div>
  );
}

export default HomePage;
