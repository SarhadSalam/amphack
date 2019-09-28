import { Layout, Typography } from "antd";
import {css} from 'emotion';
import React from "react";
const { Header, Footer } = Layout;
import logo from '../img/picture.png';

const {Title } = Typography;

export default class Navbar extends React.Component<{}, {}> {
render(){
return(
    
  <Layout className={css`margin-bottom: 40px`}>
    <Header
    className={
        css`
        padding: 0px 0px 20px 60px;
        background:#ffdf01;
        height: 70px;

        `
    }>
      <div className={css`display:inline-block;`}>
          <a href="/"><img src={logo} className={
          css`
            width: 48px;
            height: 55px;
            display:inline-block;
           // transform: scale(0.6);
          `
      } alt="Logo" /></a> </div>
      <div className={css`display:inline-block;`}>
      <a href="/"><Title className={css `display:inline-block; font-family: Garamond`}> RBC | Housing</Title></a>
      </div>
     
     
    </Header>

  </Layout>
    );
    
  }
}
