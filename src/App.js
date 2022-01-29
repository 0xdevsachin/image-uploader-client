import './App.css'
import Container from './components/Container/Container';
import Loader from './components/Loader/loader';

const App = () =>{
  return (
    <div className='App'>
      <Loader />
      <Container />
    </div>
  )
}



export default App;