import { Layout, Form, Input, Button } from 'antd';
import GooglePlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import CodeIcon from './components/CodeIcon';
import { Link } from 'react-router-dom';
import thisGuyGIF from './assets/office-me.gif';

function App() {
  const { Header, Footer, Content, Sider } = Layout;
  const {TextArea } = Input;

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
          <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            width: '100%',


          }}>
            <Form
              layout='vertical'
              size='large'
              wrapperCol={{ span: 30 }}
              >
                <Form.Item label="Name Of Place" required>
                  <Input label="Eg: Technology Tower" />
                </Form.Item>
                <Form.Item label="Say Something About it" required>
                <TextArea rows={4} placeholder='place has good cuisines for eg...' />
                </Form.Item>
                <Form.Item label='Enter the location' required>
                    <GooglePlacesAutoComplete 
                        apiKey="AIzaSyDZeTDL4gyHOzvU0L3rPwnJ2xr2Ez7j4Lo"    
                    />
                </Form.Item> 
                <Button 
                      style={{
                        backgroundColor: '#3B44F6',
                        color: 'white',
                        borderColor: '#3B44F6',
                        fontWeight: 600,
                        display: 'flex',
                        alignSelf: 'center',
                        marginLeft: '3rem'
                        
                    }}
                >
                  Submit
                </Button>         


            </Form>
          </div>


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
