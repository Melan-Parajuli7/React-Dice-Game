import { useState } from 'react';
import StartGame from './components/StartGame';
import GamePlay from './components/gameplay';

function App() {  
  const [isGameStarted , setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {  
    setIsGameStarted((prev) => !prev);
};

  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame  toggle = {toggleGamePlay}/>}
    </>
  );
}

export default App;