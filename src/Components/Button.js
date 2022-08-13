const Button = ({ title, switchImage }) => {
  return (
    <div>
      <img
        src={`./icon-${title}.svg`}
        onClick={() => switchImage({ type: title })}
      />
    </div>
  );
};

export default Button;
