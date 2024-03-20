import React, { useEffect, useState } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Modal, Select, TextField, Typography } from '@mui/material';
import { Button } from '@mui/base';
function useRadioButtons(name) {
    const [value, setState] = useState(null);
  
    const handleChange = e => {
      setState(e.target.value);
    };
  
    const inputProps = {
      name,
      type: "radio",
      onChange: handleChange
    };
  
    return [value, inputProps];
}
function useCheckedButtons(name) {
    const [value, setValue] = useState(null);

    const handleChange = e => {
        setValue(e.target.value);
    };

    const inputProps = {
        name,
        type: "checkbox",
        onChange: handleChange
    };

    return [value, inputProps];
}
export default function Bt5() {
    const [soLuong, setSoLuong] = useState('');
    const [ngay, setNgay] = useState('');
    const [diaDiem, setDiaDiem] = useState('');
    const [placeValue, placeInputProps] = useRadioButtons("dd");
    const [loai, setLoai] = useState('');
    const [loaiTiec, setLoaiTiec] = useState('');
    const [loaiTiecValue, loaiTiecInputProps] = useCheckedButtons("loaiTiec");
    const [gioiTinh, setGioiTinh] = useState('');
    const [genderValue, genderInputProps] = useRadioButtons("gender");
    const [ten, setTen] = useState('');
    const [diaChi, setDiaChi] = useState('');
    const [age, setAge] = useState('Từ 19 đến 34 tuổi');
    const [yc, setYc] = useState('');
    const [selectedPhuongThucOptions, setSelectedPhuongThucOptions] = useState([]);
    const [timeSubmit, setTimeSubmit] = useState('');

    const handleCheckboxChange = (e) => {
        const { name } = e.target;
        setLoai(name); 
        if (name === 'c1') {
            setLoaiTiec('Tiệc sáng');
        } else if (name === 'c2') {
            setLoaiTiec('Tiệc trưa');
        } else if (name === 'c3') {
            setLoaiTiec('Tiệc tối');
        }
    };
    // function handleRadioChange(event) {
    //     const selectedValue = event.target.value;
    //     setDiaDiem(selectedValue);
    // }
    
    const handleGtinh = (e) => {
        const { value } = e.target;
        setGioiTinh(value);
    };
    const handleAgeChange = (e) => {
        // const selectedOption = e.target.value;
        setAge(e.target.value);
    };
    
    const handleSelectPhuongThucChange = (e) => {
        const options = Array.from(e.target.options)
            .filter(option => option.selected)
            .map(option => option.value);
        
        const newOptions = options.filter(option => !selectedPhuongThucOptions.includes(option));
    
        setSelectedPhuongThucOptions(prevOptions => prevOptions.concat(newOptions));
    }
    const ngayDoi = new Date(ngay).toLocaleDateString('en-GB');
    const ThongTin={
     soLuong: soLuong,
     ngay: ngayDoi,
     loai: loaiTiecValue,
     diaDiem: placeValue,
     ten: ten,
     diaChi: diaChi,
     doTuoi: age,
     gioiTinh: genderValue,
     phuongThuc: selectedPhuongThucOptions,
     yeuCau: yc,
     timeSubmit: timeSubmit
    }
   
    
  
    const [infoPopup, setInfoPopup] = useState(false);
    const [info, setInfo] = useState([]);
    const openInfoPopup = () => {
      setInfoPopup(true); 
      // const timer = setTimeout(() => setInfoPopup(false), 1000000);
      // return () => clearTimeout(timer); 
    }
    const closeInfoPopup = () => {setInfoPopup(false);}
    
    return (
        <div id='form' action='' style={{ backgroundColor: 'oldlace', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
        <h1 style={{ backgroundColor: 'red', textAlign: 'center', color: 'yellow' }}>THÔNG TIN ĐẶT CHỖ</h1>
        <div style={{ backgroundImage: `url()`, paddingLeft: '10px' }}>
            <div>
                <label>Số khách tham dự bữa tiệc của quý khách: </label>
                <input type="number" min= {0} step={1} name="soluong" value={soLuong} onChange={(e) => setSoLuong(e.target.value)} />
                <label>Ngày: </label>
                <input type="date" name="date" value={ngay} onChange={(e) => setNgay(e.target.value)} />
            </div>
            <div>
                <label>Loại tiệc: </label>
                {/* <input type="checkbox" name="c1" value="Tiệc sáng" checked={loai === 'c1'} onChange={handleCheckboxChange} /><label htmlFor="c1">Tiệc sáng</label>
                <input type="checkbox" name="c2" value="Tiệc trưa" checked={loai === 'c2'} onChange={handleCheckboxChange} /><label htmlFor="c2">Tiệc trưa</label>
                <input type="checkbox" name="c3" value="Tiệc tối" checked={loai === 'c3'} onChange={handleCheckboxChange} /><label htmlFor="c3">Tiệc tối</label> */}
                <input
                    value="Tiệc sáng"
                    checked={loaiTiecValue === "Tiệc sáng"}
                    {...loaiTiecInputProps}
                />
                Tiệc sáng
                <input
                    value="Tiệc trưa"
                    checked={loaiTiecValue === "Tiệc trưa"}
                    {...loaiTiecInputProps}
                />
                Tiệc trưa
                <input
                    value="Tiệc tối"
                    checked={loaiTiecValue === "Tiệc tối"}
                    {...loaiTiecInputProps}
                />
                Tiệc tối
            </div>
            <div>
                <label>Địa điểm: </label>
                {/* <div onChange={this.setDiaDiem.bind(this)}>
                    <input type="radio" name="dd" id="dd1" value="Trong nhà" checked={this.state.dd === 'Trong nhà'} onChange={handleRadioChange} /><label for="dd1">Trong nhà</label>
                    <input type="radio" name="dd" id="dd2" value="Ngoài trời" checked={this.state.dd === 'Ngoài trời'} onChange={handleRadioChange} /><label for="dd2">Ngoài trời</label>
                </div> */}
                 <input
                    value="Trong nhà"
                    checked={placeValue === "Trong nhà"}
                    {...placeInputProps}
                />
                Trong nhà
                <input
                    value="Ngoài trời"
                    checked={placeValue === "Ngoài trời"}
                    {...placeInputProps}
                />
                Ngoài trời
            </div>
            <div>
                <label>Tên quý khách: </label>
                <input type="text" name="ten" value={ten} onChange={(e) => setTen(e.target.value)}></input>
                <label>Địa chỉ liên lạc: </label>
                <input type="text" name="dc" value={diaChi} onChange={(e) => setDiaChi(e.target.value)}></input>
            </div>
            <div>
                <label>Độ tuổi: </label>
                <select name="tuoi" onChange={(e) => handleAgeChange(e)}>
                    <option value="Từ 19 đến 34 tuổi" >Từ 19 đến 34 tuổi</option>
                    <option value="Trên 34 tuổi">Trên 34 tuổi</option>
                </select>
                <label>Giới tính: </label>
                {/* <input type="radio" name="gender" value="Name" onChange={handleGtinh}/>Nam
                <input type="radio" name="gender" value="Nữ" checked onChange={handleGtinh}/>Nữ */}
                 <input
                    value="Nam"
                    checked={genderValue === "Nam"}
                    {...genderInputProps}
                />
                Nam
                <input
                    value="Nữ"
                    checked={genderValue === "Nữ"}
                    {...genderInputProps}
                />
                Nữ
            </div>
            <div>
                <label>Quý khách biết nhà chúng tôi qua:</label>
                <select multiple value={selectedPhuongThucOptions} onChange={handleSelectPhuongThucChange}>
                    <option value="Báo chí">Báo chí</option>
                    <option value="Đài phát thanh">Đài phát thanh</option>
                    <option value="Tivi">Tivi</option>
                </select>
            </div>
            <div>
                <p>Các yêu cầu của quý khách: </p>
                <textarea name="yc" cols="55" rows="4" value={yc} onChange={(e) => setYc(e.target.value)}></textarea>
            </div>
        </div>

        <button name="btn" type="submit"
              onClick={(e) => {
                openInfoPopup();
                const submissionTime = new Date().toLocaleTimeString('en-GB') + ' - ' + new Date().toLocaleDateString('en-GB');
                setTimeSubmit(submissionTime);
            }}
            style={{ textAlign: 'center', padding: '5px', marginLeft: '45%', marginBottom: '5px', backgroundColor: 'lightgray', border: 'none' }}>Ghi nhận</button>
        <Dialog
            open={infoPopup}
            onClose={closeInfoPopup}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Info info={ThongTin} />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeInfoPopup} autoFocus>
                    Đóng
                </Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
export const Info = ({ info}) => {
    return (
      <div className="customer-info" style={{backgroundColor: ' oldlace', color:'black', width: '500px'}}>
        <h2 style={{backgroundColor: 'red', color:'yellow',textAlign: 'center'}}>THÔNG TIN ĐẶT CHỖ</h2>
        <div style={{fontSize:'15px', paddingLeft: '10px'}}>
            <p>
                <p><b>Thông tin khách hàng</b></p>
                <p>
                    <span>Họ tên: {info.ten} - Độ tuổi: {info.doTuoi} / Giới tính: {info.gioiTinh}</span>
                </p>
                <p>Địa chỉ: {info.diaChi}</p>
            </p>
            <p>
                <p><b>Thông tin đặt chỗ</b></p>
                <p>
                    <span>Số khách tham gia bữa tiệc: {info.soLuong} - Ngày đặt tiệc: {info.ngay}</span>
                </p>
                <p>
                    <span>Loại tiệc: {info.loai} - Địa điểm: {info.diaDiem}</span>
                </p>
            </p>
            <p>
                <p><b>Các yêu cầu kèm theo:</b></p>
                <p style={{whiteSpace:"pre-line"}}>{info.yeuCau}</p>
            </p> 
            <p style={{textAlign:'center'}}>
                <i>Quý khách biết nhà hàng của chúng tối qua: </i> 
                {info.phuongThuc.length > 0 ? info.phuongThuc.join(', ') : ''}
            </p> 
            <p>Chúng tôi đã nhận được thông tin đặt chỗ của quý khách lúc: {info.timeSubmit}</p>
        </div>
      </div>
    );
  };
  
  