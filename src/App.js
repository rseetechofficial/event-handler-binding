import './App.css';
import ClassClick from './Component/ClassClick';
import FunctionClick from './Component/FunctionClick';
//import Greet from './Component/Greet';
//import Welcome from './Component/Welcome';

function App() {
  return (
    <div className="App">
     {/*  <Greet name="RseeTech" classes="Tech" />
      <Welcome name="RseeTech" classes="Tech" /> */}

      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
