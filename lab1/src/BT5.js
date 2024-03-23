import React, { useState, createContext, useContext } from 'react';
import './BT5.css';

const FormDataContext5 = createContext();

const DatCho = () => {
    const {formData5} = useContext(FormDataContext5);
    const {khach, ngay, tiec, diaDiem, ten, diaChi, tuoi, gioiTinh, thongTin, yeuCau} = formData5;
    const formatDate = new Date(ngay).toLocaleDateString('en-GB');
    const currentTime = new Date().toLocaleString();
    const capitalizeWords = (str) => {
        return str.replace(/\b\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    return(
        <div className='submitDatCho'>
            <div className='title5'>
                    <text>THÔNG TIN ĐẶT CHỖ</text>
            </div>
            <div style={{padding: '40px'}}>
                <h4>Thông tin khách hàng</h4>
                <p>Họ tên:  {capitalizeWords(ten)}  - Độ tuổi: {tuoi} / Giới tính: {gioiTinh}</p>
                <p>Địa chỉ:  {capitalizeWords(diaChi)} </p>
                <h4>Thông tin đặt chỗ</h4>
                <p>Số khách tham gia bữa tiệc: {khach} - Ngày đặt tiệc: {formatDate}</p>
                <p>Loại tiệc: {tiec} / Địa điểm: {diaDiem}</p>
                <h4>Các yêu cầu kèm theo: </h4>
                <p style={{whiteSpace: 'pre-line' }}>{yeuCau}</p>
                <p style={{textAlign: 'center', fontStyle: 'italic', marginBottom: '12px'}}>
                    Quý khách biết đến nhà hàng của chúng tôi qua: {thongTin.join(', ')}
                </p>
                <p>Chúng tôi đã nhận được thông tin đặt chỗ của quý khách vào lúc: {currentTime}</p>
            </div>
        </div>
    );
} 

const BT5 = () => {
    const [khach, setKhach] = useState(0);
    const [ngay, setNgay] = useState('');
    const [tiec, setTiec] = useState('');
    const [diaDiem, setDiaDiem] = useState('');
    const [ten, setTen] = useState('');
    const [diaChi, setDiaChi] = useState('');
    const [tuoi, setTuoi] = useState('');
    const [gioiTinh, setGioiTinh] = useState('');
    const [thongTin, setThongTin] = useState('');
    const [yeuCau, setYeuCau] = useState('');
    const [datCho, setDatCho] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDatCho(true);
    }
    
    return(
        <FormDataContext5.Provider value={{ formData5: { khach, ngay, tiec,diaDiem, ten, diaChi, tuoi, gioiTinh, thongTin, yeuCau } }}>
        <div>
            {!datCho ? (
                <form className="bai5" onSubmit={handleClick} method="POST" action={window.location.pathname}>
                    <div className='title5'>
                        <text>THÔNG TIN ĐẶT CHỖ</text>
                    </div>
                    <div style={{padding: '20px'}}>
                        <div className='contentB5'>
                            <label>Số khách tham dự bữa tiệc của quý khách: </label>
                            <input className='InputB5' onChange={(e) => setKhach(e.target.value)}
                            name = "khach" type = "number" min="0" value = {khach} required disabled={datCho}/>
                            <label>Ngày:</label>
                            <input className='InputB5' onChange={(e) => setNgay(e.target.value)}
                            name="ngay" type='date' value={ngay} required disabled={datCho}/>
                        </div>
                        <div className='contentB5'>
                            <label>Loại tiệc: </label>
                            <input className='InputB5' checked = {tiec === 'Tiệc sáng'} onChange={(e) => setTiec('Tiệc sáng')}
                            name = "tiec" type = "checkbox" value={tiec} disabled={datCho}/>
                            <label>Tiệc sáng</label>
                            <input className='InputB5' checked = {tiec === 'Tiệc trưa'} onChange={(e) => setTiec('Tiệc trưa')}
                            name = "tiec" type = "checkbox" value={tiec}  disabled={datCho}/>
                            <label>Tiệc trưa</label>
                            <input className='InputB5' checked = {tiec === 'Tiệc tối'} onChange={(e) => setTiec('Tiệc tối')}
                            name = "tiec" type = "checkbox" value={tiec} disabled={datCho}/>
                            <label>Tiệc tối</label>
                        </div>
                        <div className='contentB5'>
                            <label>Địa điểm: </label>
                            <input className='InputB5_location' checked = {diaDiem === 'Trong nhà'} onChange={(e) => setDiaDiem('Trong nhà')}
                            name = "diaDiem" type = "checkbox" value={diaDiem} disabled={datCho}/>
                            <label>Trong nhà</label>
                            <input className='InputB5_location' checked = {diaDiem === 'Ngoài trời'} onChange={(e) => setDiaDiem('Ngoài trời')}
                            name = "diaDiem" type = "checkbox" value={diaDiem} disabled={datCho}/>
                            <label>Ngoài trời</label>
                        </div>
                        <div className='contentB5'>
                            <label>Tên quý khách: </label>
                            <input className='InputB5' onChange={(e) => setTen(e.target.value)}
                            name="ten" type="text" value={ten} required disabled={datCho}/>
                            <label>Địa chỉ liên lạc: </label>
                            <input className='InputB5' onChange={(e)=> setDiaChi(e.target.value)}
                            name="diaChi" type="text" value={diaChi} required disabled={datCho}/>
                        </div>
                        <div className='contentB5'>
                            <label>Độ tuổi:</label>
                            <select className='InputB5' onChange={(e)=> setTuoi(e.target.value)}
                            name ="tuoi" value={tuoi} required disabled={datCho}>
                                <option value="">Độ tuổi</option>
                                <option value="Dưới 19 tuổi">Dưới 19 tuổi</option>
                                <option value="Từ 19 đến 34 tuổi">Từ 19 đến 34 tuổi</option>
                                <option value="Từ 34 đến 60 tuổi">Từ 34 đến 60 tuổi</option>
                                <option value="Trên 60 tuổi">Trên 60 tuổi</option>
                            </select>
                            <label>Giới tính: </label>
                            <input className='InputB5' checked = {gioiTinh === 'Nam'} onChange={(e) => setGioiTinh('Nam')}
                            name = "gioiTinh" type = "checkbox" value={gioiTinh}  disabled={datCho}/>
                            <label>Nam</label>
                            <input className='InputB5' checked = {gioiTinh === 'Nữ'} onChange={(e) => setGioiTinh('Nữ')}
                            name = "gioiTinh" type = "checkbox" value={gioiTinh}  disabled={datCho}/>
                            <label>Nữ</label>
                            <div className='contentB5_Info'>
                                <label >Quý khách biết đến nhà hàng chúng tôi qua: </label>
                                <select className='InputB5' onChange={(e) => {const selectedOption = e.target.value;
                                if (thongTin.includes(selectedOption)) {
                                // Nếu option đã được chọn, loại bỏ nó khỏi mảng thongTin
                                setThongTin(thongTin.filter(option => option !== selectedOption));
                                } else {
                                // Nếu option chưa được chọn, thêm nó vào mảng thongTin
                                setThongTin([...thongTin, selectedOption]);}}}
                                name="thongTin" value={thongTin} multiple size={3}>
                                    <option value="Báo chí">Báo chí</option>
                                    <option value="Đài phát thanh">Đài phát thanh</option>
                                    <option value="Tivi">Tivi</option>
                                </select>
                            </div>
                            <label style={{marginBottom: '12px'}}>Các yêu cầu khác của quý khách:</label>
                            <div className='contentB5'>
                                <textarea className='InputB5' onChange={(e)=>setYeuCau(e.target.value)}
                                name="yeuCau" value={yeuCau} style={{height: '80px', width: '100%'}} required disabled={datCho}/>
                            </div>
                        </div>
                    </div>
                    <div className='DatCho'>
                        <button className='submitB5' type="submit" disabled={datCho}>
                            Đặt chỗ
                        </button>
                    </div>
                </form>
                    ) : (< DatCho/>)
            }
        </div>
        </FormDataContext5.Provider>
    );
}

export default BT5;