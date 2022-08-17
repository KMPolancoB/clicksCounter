import { useState } from 'react';
import Boton from '../src/components/Boton'
import './App.css';
import Counter from './components/Counter';


export default function App() {

  const [clicks, setClicks] = useState(0);

  const clickStart = () => {
    setClicks(clicks + 1);
  }

  const clickRestart = () => {
    setClicks(0);
  }

  return (

    <div className='container-2xl text-center bg-black bg-cover	h-[100vh] flex items-center'>

      <div className='container border-8 mb-24 py-7 border-blue-300 mx-auto max-w-md max-h-96 '>

        <Counter 
        clicks={clicks}
        
        />
        <Boton 
        text='CLICK'
        clickButton={true}
        handleClick={clickStart}
        />

        <Boton 
        text='RESTART'
        clickButton={false}
        handleClick={clickRestart}
        />

      </div>

    </div>
    
  )
}