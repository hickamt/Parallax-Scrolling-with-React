import { Parallax } from "react-parallax";
import Bitcoin_2 from "../img/bitcoin2.jpg";
const ImageThree = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={Bitcoin_2}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">Bitcoin 2</span>
    </div>
  </Parallax>
);

export default ImageThree;
