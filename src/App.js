import { useContext } from 'react';
import './App.css'
import Container from './components/Container/Container';
import ImagePreviewer from './components/ImagePreviewer/ImagePreviewer';
import Loader from './components/Loader/loader';
import ContextState from './Context/ContextApi';

const App = () =>{
  const { loader, url} = useContext(ContextState)
  return (
    <div className='App'>
      {
        loader ?
        <Loader />
        :
      <>
        {
          url ?
          <ImagePreviewer />
          :
          <Container />
        }
      </>
      }
    </div>
  )
}



export default App;