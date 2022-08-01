import { Parallax } from 'react-parallax';
import spaceStation from '../img/spaceStation.jpeg'

const ImageOne = () => (
    <Parallax className='image' bgImage={spaceStation} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne