import { Parallax } from 'react-parallax';
import Bitcoin_1 from '../img/bitcoin1.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={Bitcoin_1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Bitcoin</span>
        </div>
    </Parallax>
);

export default ImageOne