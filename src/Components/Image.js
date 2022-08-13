const Image = ({ img, active, switchImage }) => {
  return (
    <div id="tab">
      <img
        onClick={()=>switchImage({ value: img })}
        className={active === img ? "active-image-tab" : ""}
        src={`/image-product-${img}-thumbnail.jpg`}
        alt="logo"
      />
    </div>
  );
};

export default Image;
