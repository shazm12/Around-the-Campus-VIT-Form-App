import { Layout, Form, Input, Button, message, Dropdown, Select } from 'antd';
import CodeIcon from './components/CodeIcon';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import VITForm from './modules/VITForm';
import ThankYou from './modules/Thank you';
import {Amplify} from 'aws-amplify';
import awsconfig from '../src/aws-exports.js';
Amplify.configure(awsconfig);
const App = () => {
  const { Header, Footer, Content, Sider } = Layout;
  const navigate = useNavigate();

  return (
    <Layout style={{ height: '55rem'}}>

      <Layout>
        <Header style={{
          backgroundColor: '#F9F2ED',
          height: '15rem',
          display: 'flex',
          justifyContent:'center',
          alignItems:'center'

        }}>
          <div>
            <h1 style={{
              fontFamily: 'Consolas',
              fontSize: '2rem',
              textAlign: 'center',
              fontWeight: 'bolder',
              letterSpacing: 3,
              textShadow: '-1px 4px 8px #aaa'
            }}>Place Recommender For VIT App</h1>
          </div>
        </Header>

        <Content      
        >
          <Routes>
            <Route path="/" element={<VITForm />} />
            <Route path='/thankyou' element={<ThankYou />} />
          </Routes>

        </Content>
        <Footer style={{
          height: '6rem',
          display:'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#CDF0EA'

        }}>
          <h1 style={{
            fontSize: '1.1rem',
            letterSpacing: 1,
            fontWeight: 'bold',
            marginRight: '0.8rem'
          }}> Created By
          </h1>
          <a  
            style={{
              textDecoration:'underline',
              textUnderlinePosition: 'under',
              color: 'black',
              fontSize: '1.1rem',
              letterSpacing: 4,
              fontWeight: '600',
              marginTop: '-0.6rem',
              marginRight: '0.8rem',

            }}
            href='https://github.com/shazm12'>
            Shamik
          </a>
          <CodeIcon />
        </Footer>
      </Layout>
    </Layout>

  );
}

export default App;
