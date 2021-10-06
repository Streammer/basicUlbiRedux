import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App() {
const dispatch = useDispatch()
const cash = useSelector(state => state.cash.cash)

const addCash = (cash) => {
  dispatch({type:'ADD_CASH', payload: cash})  
}
const getCash = (cash) => {
  dispatch({type:'GET_CASH', payload: cash})  

}

  return (
    <div className="App">
      <div style={{display:'flex'}}>
        <button onClick={()=> addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={()=> getCash(Number(prompt()))}>Снять со счета</button>
        <div style={{fontSize: '3rem'}}>{cash}</div>
      </div>
    </div>
  );
}

export default App;
