import React from "react";

import { Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "I'M MANOJ",
    content: "DEVELOPER.STUDENT.",
  },
  {
    key: "2",
    title: "Work better together. Schedule meetings",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "3",
    title: "The best app to increase your productivity",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
];

function AppHero() {
  console.log("Hii");
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        <div className="container-fluid">
          <div className="content">
            <h3>HI, I'M MANOJ.</h3>
            <p>I design and build user interfaces</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default AppHero;
