import { useContext } from "react";
import { MyContext } from "../App";

const Child = () => {
  const receivedValue = useContext(MyContext);

  return (
    <div className="child">
      <h2>Child Component</h2>
      <p>Received Value: {receivedValue}</p>
    </div>
  );
};

export default Child;
