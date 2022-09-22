
import './App.css';
import Player from './components/player';

function App() {
  return (
    <div className="App  h-max">
      <div className=" bg-red-200">
      <h1 className="text-9xl font-size font-bold font-serif text-white text-center pt-20">Welcome </h1>
      <h1 className="text-9xl font-bold font-serif text-white text-center pt-5">To </h1>
      <h1 className="text-9xl font-bold font-serif text-white text-center pt-5 pb-10">Radio-CU</h1>
      <marquee className="text-4xl font-bold font-serif text-white text-center mb-9 ">Made And Designed By Cuians</marquee>
      </div>
      <div>
      <Player></Player>
      </div>
    </div>
  );
}

export default App;
