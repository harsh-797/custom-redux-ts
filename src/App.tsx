import "./App.css";
import Counter from "./components/Counter";
import Theme from "./components/Theme";

import Status from "./components/Status";
import Provider from "./redux/Provider";

function App() {
  return (
    <div className='App'>
      <Provider>
        <Counter />
        <Theme />
        <Status />
      </Provider>
    </div>
  );
}

export default App;
