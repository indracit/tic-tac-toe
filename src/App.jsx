import { useEffect, useState } from 'react';
import './App.css';
import Square from './Square';

function App() {
  
  const [value,setValue] = useState(Array(9).fill(null));
  const [status,setStatus] = useState('');
  const [winner,setWinner] = useState(false);
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    if(value[i] && winner) return ;
    const temparr = value.slice();
    temparr[i] = isX ? 'X' : 'O'
    setValue(temparr)
    setIsX(!isX);
  }

  const handleReset = ()=>{
    setValue(Array(9).fill(null));
    setStatus('');
    setWinner(false)
  }

  const checkWinner = () =>{
    let sequence = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

    sequence.forEach((seq)=>{
      const [a,b,c] = seq;
      if(value[a] && value[a]==value[b] && value[a]==value[c]){
        setStatus(`${value[a]} is Winner`)
        setWinner(true)
      }
    })
  }

  useEffect(()=>{
    checkWinner();
    
  },[value])
  return (
    
    <div className='app'>
    <div>
      <h4> { winner ? '' : isX ? 'Next Player : X' : 'Next Player : O'}</h4>
      <h4>{status}</h4>
    </div>

    <div className='board-row'>

    <div className='board'>
    <Square value={value[0]} onHandleClick={handleClick} index={0}/>
    <Square value={value[1]} onHandleClick={handleClick} index={1}/>
    <Square value={value[2]} onHandleClick={handleClick} index={2}/>
    </div>

    <div className='board'>
    <Square value={value[3]} onHandleClick={handleClick} index={3}/>
    <Square value={value[4]} onHandleClick={handleClick} index={4}/>
    <Square value={value[5]} onHandleClick={handleClick} index={5}/>
    </div>

    <div className='board'>
    <Square value={value[6]} onHandleClick={handleClick} index={6}/>
    <Square value={value[7]} onHandleClick={handleClick} index={7}/>
    <Square value={value[8]} onHandleClick={handleClick} index={8}/>
    </div>

    </div>

    <div>
      <button className="reset-button" onClick={()=> handleReset()}>Reset</button>
    </div>
    </div>
  )
}

export default App
