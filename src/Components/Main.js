import Button from "./Button";
import Image from "./Image";
import ImageCon from "./ImageCon";
import Rightside from "./Rightside";

function Main({ image, switchImage }) {
  return (
    <main>
      <div className="first">
        <ImageCon>
          <div className="img-btn">
            <Button title="prev" switchImage={switchImage} />
            <Button title="next" switchImage={switchImage} />
          </div>
          <div className="tab-content-con">
            <img src={`./image-product-${image}.jpg`} alt="logo" />
          </div>
          <div className="tab-con">
            <Image img={1} active={image} switchImage={switchImage} />
            <Image img={2} active={image} switchImage={switchImage} />
            <Image img={3} active={image} switchImage={switchImage} />
            <Image img={4} active={image} switchImage={switchImage} />
          </div>
        </ImageCon>
      </div>
      <div className="sec">
        <Rightside />
      </div>
    </main>
  );
}

export default Main;
