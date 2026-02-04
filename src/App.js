
import './App.css';
import FunctionComp from './component/FunctionComp';
import ClassComp from './component/ClassComp';
import StateComp from './component/StateComp';
import EventComp from './component/EventComp';
import ParentComp from './component/ParentComp';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

      </header> 
      <h1>Welcome You all in react app</h1>
      <FunctionComp uname = "Laith Kishore" upost="Scientist"/>
      <ClassComp ename= "Saran" epost="Engineer"/>
      <StateComp/>
      <EventComp/>*/}
      <ParentComp/>
      
    </div>

  );
}

export default App;

