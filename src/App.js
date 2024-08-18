import logo from './logo.svg';
import './App.css';
import BasicExample from './TestPage';
import GridExample from './Components/Practise';
import ContainerFluidBreakpointExample from './Components/Practise';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Practise from './Components/Practise';

function App() {
  return (
    <div className="App">
      <BasicExample />
      {/* <GridExample /> */}
      {/* <ContainerFluidBreakpointExample /> */}
    </div>
  );
}

export default App;
