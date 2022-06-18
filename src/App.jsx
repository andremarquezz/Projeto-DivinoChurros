import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import BannerName from './Components/BannerName';
import MenuContainer from './Components/MenuContainer';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <div className="mainContainer">
            <div className="banner">
              <BannerName />
            </div>
          </div>
          <div className="rightMenu"></div>
        </main>

        <div className="leftMenu">
          <ul id="menu">
            <MenuContainer link="/" icon={<HomeRoundedIcon />} />
            <MenuContainer link="/2" icon={<ChatRoundedIcon />} />
            <MenuContainer link="/3" icon={<AccountBalanceWalletRoundedIcon />} />
            <MenuContainer link="/4" icon={<FavoriteRoundedIcon />} />
            <MenuContainer link="/5" icon={<SummarizeRoundedIcon />} />
            <MenuContainer link="/6" icon={<SettingsIcon />} />
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
