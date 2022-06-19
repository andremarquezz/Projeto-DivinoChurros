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
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <div className="mainContainer">
            <div className="banner">
              <BannerName name={'Jey'} discount="1 Gratis" link="#" />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/divino-churros.appspot.com/o/churros-gourmet.png?alt=media&token=dfcf1dee-10f8-4a12-bdd6-e893cb662b3f"
                alt="Banner Divino Churros"
                className="deliveryPic"
              />
            </div>
            <div className="dishContainer">
              <div className="menuCard">
                <SubMenuContainer name={'Categorias'} />
              </div>
              <div className="rowContainer">
                <div>
                  <MenuCard
                    imgSrc={
                      'https://firebasestorage.googleapis.com/v0/b/divino-churros.appspot.com/o/menuGourmet.png?alt=media&token=0e77dede-3fc9-47aa-9f92-591f5485964a'
                    }
                    name={'Churros Gourmet'}
                    link="/"
                  />
                </div>
                <div>
                  <MenuCard
                    imgSrc={
                      'https://firebasestorage.googleapis.com/v0/b/divino-churros.appspot.com/o/menuTradicional.png?alt=media&token=d809f747-825b-40d1-a935-f10441949667'
                    }
                    name={'Churros Tradicional'}
                    link="/2"
                  />
                </div>
              </div>
              <div className="dishItemContainer"></div>
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
