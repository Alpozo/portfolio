import './App.css';
import {useState} from 'react';
import {Header} from './components/Header/Header';
import {Content} from './screens/Content/Content';
import {Tabs} from './components/Tabs/Tabs';
import {ImageBackground} from './screens/VideoBackground/VideoBackground';

export const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='body-wrapper'>
      <div className='main-wrapper'>
        <Header/>
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <Content activeTab={activeTab} />
      </div>
      <div className='background-wrapper'>
      <ImageBackground/>
      </div>
    </div>
    
  );
}


