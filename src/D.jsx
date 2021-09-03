




import { useContext } from "react";
import { userContext } from "./A";

let D = () => {
  let val = useContext(userContext);

  return (
    <div>{val}</div>
  );
};

export default D;
