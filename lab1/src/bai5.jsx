import React, { useState } from "react";
import classes from "./bai5.css";

const Bai5 = () => {
    const [soKhach, setSoKhach] = useState('');
    const [ngayDat, setNgayDat] = useState(new Date().toISOString().slice(0, 10));
    const [loaiTiec, setLoaiTiec] = useState([]);
    const [diaDiem, setDiaDiem] = useState('');
    const [tenKH, setTenKH] = useState('');
    const [diaChi, setDiaChi] = useState('');
    const [doTuoi, setDoTuoi] = useState('');
    const [gioiTinh, setGioiTinh] = useState('');
    const [PTTT, setPTTT] = useState([]);
    const [yCau, setYCau] = useState('');
    const [time, setTime] = useState('');

    const handleLoaiTiec = (e) => {
        if (loaiTiec.includes(e.target.value)) {
            setLoaiTiec(loaiTiec.filter(item => item !== e.target.value));
        } else {
            setLoaiTiec([...loaiTiec, e.target.value]);
        }
    }

    const handlePTTT = (e) => {
        if (PTTT.includes(e.target.value)) {
            setPTTT(PTTT.filter(item => item !== e.target.value));
        } else {
            setPTTT([...PTTT, e.target.value]);
        }
    }

    const changeDoTuoi = (obj) => {
        setDoTuoi(obj.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let result = document.querySelector(`.${classes.result}`);
        result.style.display = "block";

        let form = document.querySelector(`.${classes.form}`);
        form.style.display = "none";

        let date = new Date();
        setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    };

    return (
        <div className={classes.container}>
            <h1>THÔNG TIN ĐẶT CHỖ</h1>
            <form action="/" className={classes.form} onSubmit={(e) => handleFormSubmit(e)}>
                <div className={classes.row}>
                    <div>
                        <label htmlFor="soKhach" style={{ color: "darkred", fontWeight: "bold" }}>Số khách tham dự bữa tiệc của quý khách: </label>
                        <input type="text" id="soKhach" className={classes.marginItem} style={{ width: "50px" }} value={soKhach} onChange={(e) => setSoKhach(e.target.value)} required/>
                    </div>

                    <div className={classes.marginItem}>
                        <label htmlFor="ngayDat" style={{ color: "darkred", fontWeight: "bold" }}>Ngày: </label>
                        <input type="date" id="ngayDat" className={classes.marginItem} value={ngayDat} onChange={(e) => setNgayDat(e.target.value)} required/>
                    </div>
                </div>

                <div className={classes.row}>
                    <label>
                        <label htmlFor="loaiTiec">Loại tiệc: </label>
                        <label htmlFor="tiecSang">
                            <input type="checkbox" name="tiecSang" id="loaiTiec" className={classes.marginItem} value={"Tiệc sáng"} onChange={(e) => handleLoaiTiec(e)} />
                            Tiệc sáng
                        </label>
                        <label htmlFor="tiecTrua">
                            <input type="checkbox" name="tiecTrua" id="loaiTiec" className={classes.marginItem} value={"Tiệc trưa"} onChange={(e) => handleLoaiTiec(e)} />
                            Tiệc trưa
                        </label>
                        <label htmlFor="tiecToi">
                            <input type="checkbox" name="tiecToi" id="loaiTiec" className={classes.marginItem} value={"Tiệc tối"} onChange={(e) => handleLoaiTiec(e)} />
                            Tiệc tối
                        </label>
                    </label>
                </div>

                <div className={classes.row}>
                    <label>
                        <label htmlFor="diaDiem">Địa điểm: </label>
                        <label htmlFor="trongNha">
                            <input type="radio" id="trongNha" className={classes.marginItem} value={'Trong nhà'} checked={diaDiem === 'Trong nhà'} onChange={(e) => setDiaDiem(e.target.value)} />
                            Trong nhà
                        </label>

                        <label htmlFor="ngoaiTroi">
                            <input type="radio" id="ngoaiTroi" className={classes.marginItem} value={'Ngoài trời'} checked={diaDiem === 'Ngoài trời'} onChange={(e) => setDiaDiem(e.target.value)} />
                            Ngoài trời
                        </label>
                    </label>
                </div>

                <div className={classes.row}>
                    <div>
                        <label htmlFor="tenKH">
                            Tên quý khách:
                            <input type="text" id="tenKH" name="tenKH" className={classes.marginItem} value={tenKH} onChange={(e) => setTenKH(e.target.value)} required/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="diaChi">
                            Địa chỉ liên lạc:
                            <input type="text" id="diaChi" name="diaChi" className={classes.marginItem} value={diaChi} onChange={(e) => setDiaChi(e.target.value)} required/>
                        </label>
                    </div>
                </div>

                <div className={classes.row}>
                    <div>
                        <label htmlFor="doTuoi">
                            Độ tuổi của khách hàng:
                            <select name="doTuoi" id="doTuoi" className={classes.marginItem} onChange={(e) => changeDoTuoi(e)}>
                                <option value="Dưới 15">Dưới 15</option>
                                <option value="15-30">15-30</option>
                                <option value="30-50">30-50</option>
                                <option value="Trên 50">Trên 50</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="gioiTinh">Giới tính: </label>
                        <label htmlFor="nam">
                            <input type="radio" name="nam" id="gioiTinh" className={classes.marginItem} value={'Nam'} checked={gioiTinh === 'Nam'} onChange={(e) => setGioiTinh(e.target.value)} />
                            Nam
                        </label>
                        <label htmlFor="nu">
                            <input type="radio" name="nu" id="gioiTinh" className={classes.marginItem} value={'Nữ'} checked={gioiTinh === 'Nữ'} onChange={(e) => setGioiTinh(e.target.value)} />
                            Nữ
                        </label>
                    </div>
                </div>

                <div className={classes.row}>
                    <label htmlFor="PTTT">
                        Quý khách biết đến nhà hàng chúng tôi qua:
                        <label htmlFor="baoChi">
                            <input type="checkbox" name="baoChi" id="baoChi" className={classes.marginItem} value={"Báo chí"} onChange={(e) => handlePTTT(e)} />
                            Báo chí
                        </label>
                        <label htmlFor="daiPT">
                            <input type="checkbox" name="daiPT" id="daiPT" className={classes.marginItem} value={"Đài phát thanh"} onChange={(e) => handlePTTT(e)} />
                            Đài Phát Thanh
                        </label>
                        <label htmlFor="tv">
                            <input type="checkbox" name="tv" id="tv" className={classes.marginItem} value={"TV"} onChange={(e) => handlePTTT(e)} />
                            TV
                        </label>
                    </label>
                </div>

                <div>
                    <div style={{ flexDirection: "column", padding: "0 30px" }}>
                        <label htmlFor="yCau">
                            Các yêu cầu khác của quý khách:
                        </label>
                        <input style={{ height: "70px", width: "100%" }} type="text" id="yCau" name="yCau" value={yCau} onChange={(e) => setYCau(e.target.value)} />
                    </div>
                </div>

                <div className={classes.row} style={{ justifyContent: "center" }}>
                    <input type="submit" value="Đặt chỗ" />
                </div>
            </form>

            <div className={classes.result}>
                <div style={{marginBottom: "8px"}}>
                    <p><b>Thông tin khách hàng</b></p>
                    <p>Họ tên: {tenKH} - Độ tuổi: {doTuoi} / Giới tính: {gioiTinh}</p>
                    <p>Địa chỉ: {diaChi}</p>
                </div>

                <div style={{marginBottom: "8px"}}>
                    <p><b>Thông tin đặt chỗ</b></p>
                    <p>Số khách tham gia bữa tiệc: {soKhach} - Ngày đặt tiệc</p>
                    <p>Loại tiệc: {loaiTiec.toString()} / Địa điểm: {diaDiem}</p>
                </div>

                <div style={{marginBottom: "8px"}}>
                    <p><b>Các yêu cầu kèm theo</b></p>
                    <p>{yCau}</p>
                </div>

                <div>
                    <p style={{textAlign: "center"}}><i>Quý khách biết đến nhà hàng chúng tôi qua: </i>{PTTT.toString()}</p>
                </div>

                <div>
                    <p>Chúng tôi đã nhận được thông tin đặt chỗ của quý khách vào lúc: <b>{time}</b></p>
                </div>
            </div>
        </div>
    );
};

export default Bai5;