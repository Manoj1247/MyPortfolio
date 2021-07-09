import { Steps, Divider } from "antd";
import image1 from "../../assets/images/modern-design.jpg";
import image2 from "../../assets/images/clean-design.jpg";
import image3 from "../../assets/images/great-support.jpg";
import image4 from "../../assets/images/easy-customise.jpg";
import image5 from "../../assets/images/unlimited-features.jpg";
import image6 from "../../assets/images/advanced-option.jpg";

import { Row, Col } from "antd";
import { Card } from "antd";
const { Step } = Steps;
const { Meta } = Card;
function Resume() {
  return (
    <div className="ResumeBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Education</h2>
        </div>
        <Divider />
        <Steps progressDot current={4} direction="vertical">
          <Step
            title="HighSchool(2008-2016)"
            description="My schooling was really routine and enjoyable; I made a lot of friends, sharpened my talents, studied diligently, and passed with flying colours."
          />
          <Step
            title="PreEngineering(2016-2018)"
            description="It was both enjoyable and worrisome at the end, due to the more obvious reasons of exams as well as the anxiety of leaving school and missing all of the naughty and wicked activities that were a part of my school life."
          />

          <Step
            title="UnderGraduation(2018-Present)"
            description="A major breakthrough! College life begins, Sophmore year was majorly getting used to the campus, meeting people,playing sports,taking part in hacks, joining clubs, adjusting to classes. Now it's all about Winning"
          />
        </Steps>
      </div>
      <div className="container-fluid Experience">
        <div className="titleHolder">
          <h2>Experience</h2>
        </div>
        <Divider />
        <Steps progressDot current={4} direction="vertical">
          <Step
            title="Mask Detection"
            description="I created a Face Mask Detection System that uses the CNN algorithm to determine whether or not a person standing outside the door is wearing a mask. It feeds the real-time image of the people captured by a camera.according to the algorithm The data is sent to our phone via the algorithm, and the plot was made in ThingSpeak."
          />
          <Step
            title="Smart Ring"
            description="Headphones & earphones have become part and parcel of our everyday lives, especially if you want to avoid the outside world, do away with the noise around you. We have incorporated the basic need of the above in our product – the Smart Ring. The assistance of people with hearing disabilities is a factor that is primarily taken into account."
          />

          <Step
            title="IOT BASED MONITORING SYSTEM"
            description="We use an LM-35 temperature sensor to detect body temperature and a pulse sensor to measure pulse rate in this project, and I display the results on a 16X2 LCD. The ESP8266 Wi-Fi module is used to link the project to a Wi-Fi network and transfer data to an IoT server. And I made a couple of apps to keep track of it."
          />
        </Steps>
      </div>
      <div id="feature" className="block featureBlock bgGray">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>I Enjoy</h2>
          </div>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card hoverable cover={<img alt="Modern Design" src={image1} />}>
                <Meta title="Gaming" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card hoverable cover={<img alt="Test" src={image2} />}>
                <Meta title="Reading" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card hoverable cover={<img alt="Test" src={image3} />}>
                <Meta title="Football" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card hoverable cover={<img alt="Test" src={image4} />}>
                <Meta title="Formula 1" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card hoverable cover={<img alt="Test" src={image5} />}>
                <Meta title="Music" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card hoverable cover={<img alt="Test" src={image6} />}>
                <Meta title="Math" />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Resume;
