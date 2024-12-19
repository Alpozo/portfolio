import './App.css';
import {Header} from './components/Header/Header';
import {Content} from './screens/Content/Content';
import {Tabs} from './components/Tabs/Tabs';
import {ImageBackground} from './screens/VideoBackground/VideoBackground';

export const App = () => {
  return (
    <div className='body-wrapper'>
      <div className='main-wrapper'>
        <Header/>
        <Tabs/>
        <Content/>
      </div>
      <div className='background-wrapper'>
      <ImageBackground/>
      </div>
    </div>
    
  );
}


