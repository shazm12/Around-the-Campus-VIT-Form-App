import { Layout, Form, Input, Button, message, Dropdown, Select } from 'antd';
import GooglePlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import CodeIcon from '../../components/CodeIcon';
import { Link } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import {Places, Type} from '../../models';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VITForm = () => {
  const {TextArea } = Input;
  const { Option } = Select;
  const [name, setName ] = useState();
  const [description, setDescription] = useState();
  const [type,setType] = useState();
  const [address,setAddress] = useState();
  const [coords, setCoords] = useState(null);
  const navigate = useNavigate();
  const getAddressLatLng = async(address) => {
    setAddress(address);
    const gcode = await geocodeByAddress(address.label);
    const latlng = await getLatLng(gcode[0]);
    setCoords(latlng);
  }

  const selectType = (type) => {
    setType(type);
  }

  


  const OnFormSubmit = async() => {
    console.log(coords);
    const newPlace= DataStore.save(new Places({
      name: name,
      description: description,
      type: type,
      lat: coords?.lat,
      lng: coords?.lng
    }))

    if(newPlace) {
      console.log(newPlace);
      navigate('/thankyou');
    }
    else {
      message.error('There was some problem while submitting');
    }    
  }

  return (
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
        onFinish={() => OnFormSubmit()}
        >
          <Form.Item label="Name Of Place" required>
            <Input value={name} onChange={(e) => setName(e.target.value)} label="Eg: Technology Tower" />
          </Form.Item>
          <Form.Item label="Say Something About it" required>
          <TextArea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder='place has good cuisines for eg...' />
          </Form.Item>
          <Form.Item>
          <Select size="large" defaultValue="Select type" style={{ width: 120 }} onChange={selectType}>
              {Object.entries(Type).map(item =>  (
                <Option key={item[0]} value={item[1]}>{item[1]}</Option>
              ))
              }
            </Select>
          </Form.Item>
          
          <Form.Item label='Enter the location' required>
              <GooglePlacesAutoComplete 
                  apiKey="AIzaSyDZeTDL4gyHOzvU0L3rPwnJ2xr2Ez7j4Lo"    
                  selectProps={{
                    value: address,
                    onChange:  getAddressLatLng
                }}  
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
              htmlType="submit"
          >
            Submit
          </Button>         


      </Form>
    </div>

  );
}

export default VITForm;