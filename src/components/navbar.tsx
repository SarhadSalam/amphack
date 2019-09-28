import { Form, Layout } from "antd";
import {css} from 'emotion';
import React from "react";
const { Header } = Layout;
import logo from './picture.png';


export default class Navbar extends React.Component<{}, {}> {
render(){
return(
    <Form>
  <Layout className="layout">
    <Header
    className={
        css`
        padding: 0px 0px 20px 10px;
        background:#ffdf01;
        `
    }>
      <div className="logo" />
      
     <img src={logo} className={
          css`
            height: 55px;
            width: 55px;
           // transform: scale(0.6);
          `
      } alt="Logo" />
     
    </Header>
  </Layout>
 </Form>
    );
    
  }
}
