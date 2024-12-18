import './App.css';
import {Header} from './components/Header/Header';
import {Content} from './screens/Content/Content';



export const App = () => {
  return (
    <div className='main-wrapper'>
    <Header/>
    <Content/>
    </div>
   
  );
}


