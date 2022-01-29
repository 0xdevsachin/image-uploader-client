import { useContext } from 'react';
import './App.css'
import Container from './components/Container/Container';
import Loader from './components/Loader/loader';
import ContextState from './Context/ContextApi';

const App = () =>{
  const { loader, setLoader} = useContext(ContextState)
  return (
    <div className='App'>
      {
        loader ?
        <Loader />
        :
      <Container />
      }
    </div>
  )
}



export default App;