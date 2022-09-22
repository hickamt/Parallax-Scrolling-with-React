import { Parallax } from "react-parallax";
import Ethereum from "../img/ethereum1.jpg";

const ImageTwo = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={Ethereum}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">Ethereum</span>
    </div>
  </Parallax>
);

export default ImageTwo;
