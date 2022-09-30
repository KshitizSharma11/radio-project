
import './App.css';
import "./components/style.css";
import Player from './components/player';

function App() {
  return (
    <div className="App  h-max" id='main' class="example">
     
     
      <h1 className="text-9xl font-size  font-serif text-red text-center pt-20">Welcome </h1>
      <h1 className="text-9xl  font-serif text-red text-center pt-5">To </h1>
      <h1 className="text-9xl  font-serif text-red text-center pt-5 pb-10">Radio-CU</h1>
      <marquee className="text-4xl  font-serif text- text-center mb-9 ">Made And Designed By Cuians</marquee>
    
      
      <Player></Player>
      
    </div>
   
  );
}

export default App;
