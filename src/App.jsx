import { createContext, useContext } from "react";
import Child from "./component/Child";

export const MyContext = createContext();

const App = () => {
  const contextValue = "Hello from App!";

  return (
    <MyContext.Provider value={contextValue}>
      <div className="app">
        <h1>App Component</h1>
        <Child />
      </div>
    </MyContext.Provider>
  );
};

export default App;
