import React from "react";

import HomeWelcomeSection from '../../components/homeSections/homeWelcomeSection/HomeWelcomeSection'
import HomeSections from '../../components/homeSections/HomeSections';



import "./home.scss";

function HomePage() {

  return (
    <div className="homecontainer">
     <HomeWelcomeSection />
     <HomeSections />
     </div>
  );
}

export default HomePage;
