import { Row, Col } from "antd";
import { Button } from "antd";
const items = [
  {
    key: "1",
    icon: <i class="fas fa-mask"></i>,
    title: "Mask Detection",
    content:
      "I created a Face Mask Detection System that uses the CNN algorithm to determine whether or not a person standing outside the door is wearing a mask. It feeds the real-time image of the people captured by a camera.according to the algorithm The data is sent to our phone via the algorithm, and the plot was made in ThingSpeak.",
  },
  {
    key: "2",
    icon: <i class="fas fa-ring"></i>,
    title: "Smart Ring",
    content:
      "Headphones & earphones have become part and parcel of our everyday lives, especially if you want to avoid the outside world, do away with the noise around you. We have incorporated the basic need of the above in our product – the Smart Ring. The assistance of people with hearing disabilities is a factor that is primarily taken into account.",
  },
  {
    key: "3",
    icon: <i className="fas fa-desktop"></i>,
    title: "IOT BASED MONITORING SYSTEM",
    content:
      "We use an LM-35 temperature sensor to detect body temperature and a pulse sensor to measure pulse rate in this project, and I display the results on a 16X2 LCD. The ESP8266 Wi-Fi module is used to link the project to a Wi-Fi network and transfer data to an IoT server. And I made a couple of apps to keep track of it.",
  },
];

function About() {
  console.log("About");
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Hii! This is me</h2>
        </div>
        <div className="contentHolder">
          <p>
            I am Manoj Kalaganti, your friendly neighbour! except that i am not
            your neighbour. I am a student at Vellore Institute of Technology,
            Vellore, pursuing BTech in Electronics and Comminication Engineering
            with specialisation in Internet Of Things and Sensors. Phew! thats a
            mouthful. I Develop web applications Web platforms, Check out the
            projects section below to know more. Though i am majoring in ECE, My
            work tends more towards Computer Science and IoT. I believe very
            much in a Hollistic approach to living. In addition to development,
            I play Basketball and Football and have also been playing a lot of
            Cricket off late. I enjoy Debating.If you are a fellow developer,
            you are more than welcome to contribute, like , watch my Github or
            If you just want to get in touch with me, Just ping me on Gmail.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default About;
