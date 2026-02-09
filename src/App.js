
import './App.css';
import FunctionComp from './component/FunctionComp';
import ClassComp from './component/ClassComp';
import StateComp from './component/StateComp';
import EventComp from './component/EventComp';
import ParentComp from './component/ParentComp';
import MyImagesComp from './component/MyImagesComp';
import HoverCounterComp from './component/HoverCounterComp';
import ClickCounterComp from './component/ClickCounterComp';
//import ChangeImageComp from './task/ChangeImageComp';
//import CounterComp from './task/CounterComp';
//import FriendComp from './task/FriendComp';
//import SaranComp from './task/SaranComp';
//import ToggleImage from './task/ToggleImage';
function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header> 
      <h1>Welcome You all in react app</h1>
      <FunctionComp uname = "Laith Kishore" upost="Scientist"/>
      <ClassComp ename= "Saran" epost="Engineer"/>
      <StateComp/>
      <EventComp/>
      <ParentComp/>
      <MyImagesComp/>
      <HoverCounterComp/>
      <ClickCounterComp/>
      {/*<ChangeImageComp/>
      <CounterComp/>
      <SaranComp fname="Saran" lname="Sivakumar" email="saran@gmail.com" contact={9087685650} city="Chennai"/><hr></hr>
      <FriendComp fname="Raj" lname="Kumar" email="raj@gmail.com" contact={9087685651} city="Bangalore"/><hr></hr>
      <ToggleImage/>
      */}
    </div>
  );
}


export default App
