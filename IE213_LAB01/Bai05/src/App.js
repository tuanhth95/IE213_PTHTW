// import logo from './logo.svg';
import './App.css';
import { partyTypes, locations, ages, genders, options } from './data';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {format} from 'date-fns';

function App() {
  const [numOfGuest, setNumOfGuest] = useState(null);
  const [partyDate, setPartyDate] = useState(new Date());
  const [partyType, setPartyType] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(undefined);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherRequest, setOtherRequest] = useState(null);

  const [time, setTime] = useState('');
  const [hide, setHide] = useState(1);

  const handleOptionChange = (event) => {
    const selected = Array.from(event.target.selectedOptions).map(option => option.value);
    setSelectedOptions(selected);
  }

  const capitalizeFirstLetters = str => {
    if (!str) {
      return str;
    }
    
    const words = str.split(' ');
  
    const capitalizedWords = words.map(word => {
      if (word.length > 0) {
        const firstLetter = word.charAt(0).toUpperCase();
        const remainingLetters = word.slice(1).toLowerCase();
        return firstLetter + remainingLetters;
      }
      return word;
    });
  
    return capitalizedWords.join(' ');
  }

  return (
    <>
      <div className='container'>
        <form method='post' action='booking-form' className='form'
          onSubmit = {event => {
            event.preventDefault();
            setHide(0);
            setTime(format(new Date().toLocaleString(), 'HH:mm:ss - dd/MM/yyyy'));
          }}
        >
          <div className="header">
            <h1>THÔNG TIN ĐẶT CHỖ</h1>
          </div>
          <div className='form-body'>
            <div className='form-body-head'>
              <div>
                <label htmlFor='amount'>
                  Số khách tham dự bữa tiệc của quý khách: 
                </label>
                <input
                  type='text' id='amount' 
                  value = {numOfGuest}
                  onChange = {(event) => setNumOfGuest(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor='date'>Ngày: </label>
                <DatePicker 
                id='date' 
                selected = {partyDate}
                dateFormat = 'dd/MM/yyyy'
                onChange = {(date) => setPartyDate(date)}
                />
              </div>
            </div>

            <div className='party-type'>
              <span>Loại tiệc: </span>
              {
                // array.map(function(currentValue, index, array))
                partyTypes.map(type => (
                  <div key={type.id}>
                    <input
                      // key = {type.id}
                      type = 'checkbox'
                      id = {'party' + type.id}
                      name = 'party type'
                      checked = {type.id == partyType}
                      value = {type.id}
                      onChange = {event => {
                        if (event.target.value == partyType) 
                          setPartyType(null);
                        else
                          setPartyType(event.target.value);
                      }
                      }
                    />
                    <label htmlFor={'party' + type.id}>{type.name}</label>
                  </div>
                ))
              }
            </div>

            <div className='location-type'>
              <span>Địa điểm: </span>
              {
                locations.map(type => (
                  <div key={type.id}>
                    <input type="radio"
                      id = {'location' + type.id}
                      name = 'location type'
                      value = {type.id}
                      checked = {type.id == location}
                      onChange = {event => {
                        setLocation(event.target.value);
                      }
                      }
                    />
                    <label htmlFor={'location' + type.id}>{type.name}</label>
                  </div>
                ))
              }
            </div>

            <div className='name-address'>
              <div>
                <label htmlFor='name'>Tên quý khách: </label>
                <input type="text" 
                  id = 'name'
                  // value = {name}
                  onChange = {event => {
                    setName(capitalizeFirstLetters(event.target.value));
                    // console.log(name);
                  }}
                />
              </div>

              <div>
                <label htmlFor="address">Địa chỉ liên lạc: </label>
                <input type="text" 
                  id = 'address'
                  onChange = {event => {
                    setAddress(capitalizeFirstLetters(event.target.value));
                  }}
                />
              </div>
            </div>

            <div className='age-gender'>
              <div>
                <label htmlFor="age">Độ tuổi: </label>
                <select name="" id="age"
                  value = {age}
                  onChange = {event => {setAge(event.target.value);}}
                >
                  {
                    ages.map(type => (
                      <option key={type.id} value={type.id} >
                        {type.name}
                      </option>
                    ))
                  }
                </select>
              </div>

              <div>
                <span>Giới tính: </span>
                {
                  genders.map(type => (
                    <div key={type.id}>
                      <input type="radio" 
                        id = {'gender' + type.id}
                        value = {type.id}
                        checked = {type.id == gender}
                        name = "gender"
                        onChange = {event =>{
                          setGender(event.target.value);
                        }}
                      />
                      <label htmlFor={'gender' + type.id}>{type.name}</label>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="know-via">
              <label htmlFor="sources">
                Quý khách biết đến nhà hàng của chúng tôi qua: 
              </label>
              <select name="" id="sources" multiple 
                onChange = {handleOptionChange}
                >
                {
                  options.map((option, index) => (
                    <option key={index} value={option} >
                      {option}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="otherReq" id="otherReq">
              <label htmlFor="other-request">
                Các yêu cầu khác của quý khách: 
              </label>
              <textarea name="" id="other-request" cols="30" rows="10"
                value = {otherRequest}
                onChange = {event => {
                  setOtherRequest(event.target.value);
                }}
              ></textarea>
            </div>

            <div className="submitBtn">
              <button type="submit" className="submit-button">
                Đặt chỗ
              </button>
            </div>
          </div>
        </form>
        
        {/* {(hide == 0)? (<p>Thành công</p>): (<p>Thất bại</p>)} */}
        {
          (hide == 0) ? (
            <div className="result">
              <div className="header">
                <h1>
                  THÔNG TIN ĐẶT CHỖ
                </h1>
              </div>
              <div className="result-body">
                <div>
                  <h3>Thông tin khách hàng</h3>
                  <p>
                    Họ tên: {name} - Độ tuổi: {ages[age].name} - Giới tính: {genders[gender].name}
                  </p>
                  <p>
                    Địa chỉ: {address}
                  </p>
                </div>
                <div>
                  <h3>Thông tin đặt chỗ</h3>
                  <p>
                    Số khách tham gia bữa tiệc: {numOfGuest} - Ngày đặt tiệc: {format(partyDate, 'dd/MM/yyyy')}
                  </p>
                  <p>
                    Loại tiêc: {partyTypes[partyType].name} - Địa điểm: {locations[location].name} 
                  </p>
                </div>
                <div>
                  <h3>Các yêu cầu kèm theo: </h3>
                  <pre style={{ fontSize : '1rem' }}>{otherRequest}</pre>
                </div>
                <div>
                  <p style={{ textAlign: 'center' }}>
                    <i>Quý khách biết đến nhà hàng của chúng tôi qua: </i> {selectedOptions.join(', ')}
                  </p>
                </div>
                <div>
                  <p>
                    Chúng tôi nhận được thông tin đặt chỗ của quý khách vào lúc: <span style={{color: "green"}}>{time}</span>
                  </p>
                </div>
              </div>
            </div> 
          ) : (null)}

      </div>
    </>
  );
}

export default App;
