import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const [visibility, setVisibility] = useState(false);
  const [image, setImage] = useState(1);

  const showMenu = () => {
    setVisibility(!visibility);
  };

  const switchImage = (data) => {
    switch (data.type) {
      case "next":
        if (image === 4) {
          setImage(1);
        } else {
          setImage(image + 1);
        }
        break;
      case "prev":
        if (image === 1) {
          setImage(4);
        } else {
          setImage(image - 1);
        }
        break;
      default:
        setImage(data.value);
    }
  };

  return (
    <>
      <Header title="sneakers" showMenu={showMenu} visibility={visibility} />
      <Main switchImage={(data) => switchImage(data)} image={image} />
    </>
  );
}

export default App;
