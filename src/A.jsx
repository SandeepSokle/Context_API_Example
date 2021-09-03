




import B from "./B";

import { createContext } from "react";


let  userContext = createContext();

let A = ()=> {
    
    return (
      <div>
        <userContext.Provider value={`Hello`}>
          <B/>
        </userContext.Provider>
      </div>
    );
}
export default A;
export {userContext};