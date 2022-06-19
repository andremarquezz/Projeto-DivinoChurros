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
import ItemCard from './Components/ItemCard';
import {
  churrosDoceDeLeite,
  imageChurrosBanner,
  imageChurrosGourmet,
  imageChurrosTradicional,
} from './Components/Data';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <div className="mainContainer">
            <div className="banner">
              <BannerName name={'Jey'} discount="1 Gratis" link="#" />
              <img src={imageChurrosBanner} alt="Banner Divino Churros" className="deliveryPic" />
            </div>
            <div className="dishContainer">
              <div className="menuCard">
                <SubMenuContainer name={'Categorias'} />
              </div>
              <div className="rowContainer">
                <div>
                  <MenuCard imgSrc={imageChurrosGourmet} name={'Churros Gourmet'} link="/" />
                </div>
                <div>
                  <MenuCard
                    imgSrc={imageChurrosTradicional}
                    name={'Churros Tradicional'}
                    link="/2"
                  />
                </div>
              </div>
              <div className="dishItemContainer">
                <ItemCard
                  imgSrc={churrosDoceDeLeite}
                  name="Doce de Leite"
                  ratings="5"
                  price="4,00"
                />
                <ItemCard
                  imgSrc={churrosDoceDeLeite}
                  name="Chocolate"
                  ratings="5"
                  price="5,00"
                />
              </div>
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
