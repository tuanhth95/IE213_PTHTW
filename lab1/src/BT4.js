import React, { useState, createContext, useContext } from 'react';
import './BT4.css';

const FormDataContext = createContext();

const GhiNhanNoiDung = () =>{
    const {formData} = useContext(FormDataContext);
    const {tenHS, tenGV, lop, ngay, hinhThuc, phanCong} = formData;
    const formatDate = new Date(ngay).toLocaleDateString('en-GB');
    const hinhThucText = Object.entries(formData.hinhThuc)
    .filter(([key, value]) => value)
    .map(([key]) => {
        if (key === 'taiLop') return 'Tại lớp';
        if (key === 'taiNha') return 'Tại nhà';
            return key; 
    })
    .join(' - ');

    return (
        <div className="submitContent">
            <h2>Thông tin phiếu theo dõi</h2>
            <div>
                <p>Tên học sinh: {tenHS} - Lớp: {lop}</p>
                <p>Ngày đăng ký: {formatDate} - Giáo viên phụ trách: {tenGV}</p>
                <p>Những công việc đã được phân công nhưng chưa hoàn thành: </p>
                <p className='task'>{phanCong}</p>
                <p>Cam kết sẽ hoàn thành tại: {hinhThucText}</p>
            </div>
        </div>
    );
};

const BT4 = () =>
{
    const [tenHS, setTenHS] = useState('');
    const [tenGV, setTenGV] = useState('');
    const [lop, setLop] = useState('');
    const [ngay, setNgay] = useState('');
    const [phanCong, setPhanCong] = useState('');
    const [hinhThuc, setHinhThuc] = useState({ taiLop: false, taiNha: false });
    const [ghiNhan, setGhiNhan] = useState(false);

    const handleClick = (e) =>
    {
        e.preventDefault();
        setGhiNhan(true);
    }

    const handleCheckboxChange = (name) => {
        setHinhThuc((prevHinhThuc) => ({
          ...prevHinhThuc,
          [name]: !prevHinhThuc[name],
        }));
      };
      

    return(
        <FormDataContext.Provider value={{ formData: { tenHS, tenGV, lop, ngay, phanCong, hinhThuc } }}>
        <div>
            {!ghiNhan ? (
                <form className="bai4" onSubmit={handleClick} method="POST" action={window.location.pathname}>
                <div className="title4">
                    <text>THEO DÕI HỌC TẬP</text>
                </div>
                <div style={{ padding: '40px' }}>
                <div className="content4 row">
                    <label>Họ tên học sinh:</label>
                    <input className='Input4' onChange={(e) => setTenHS(e.target.value)}
                        name = "tenHS" type='text' value={tenHS} required disabled={ghiNhan}/>
                </div>
                <div className="content4 row">
                    <label>Giáo viên phụ trách:</label>
                    <input className='Input4' onChange={(e) => setTenGV(e.target.value)}
                        name="tenGV" type='text' value={tenGV} required disabled={ghiNhan}/>
                </div>
                <div className='row'>
                <div className="content4 row-2">
                    <label>Lớp:</label>
                    <input className='Input4' onChange={(e) => setLop(e.target.value)}
                        name="lop" type='text' value={lop} required disabled={ghiNhan}/>
                </div>
                <div className="content4 row-2">
                    <label>Ngày:</label>
                    <input className='Input4' onChange={(e) => setNgay(e.target.value)}
                        name="ngay" type='date' value={ngay} required disabled={ghiNhan}/>
                </div>
                </div>
                <div className="content4 col">
                <label>Những việc phân công chưa làm:</label>
                    <textarea className='Input4' onChange={(e) => setPhanCong(e.target.value)}
                        name="phanCong" type='text' value={phanCong} 
                        style={{height: '80px'}}required disabled={ghiNhan}/>
                </div>
                <label>Chọn hình thức hoàn thành:</label>
                <div className="content_check">
                    <input className='InputCheck' onChange={() => handleCheckboxChange('taiLop')}
                        name="taiLop" type='checkbox' disabled={ghiNhan}/>
                                <label>Những việc chưa làm sẽ được hoàn thành ngay tại lớp</label>
                </div>
                <div className="content_check">
                    <input className='InputCheck' onChange={() => handleCheckboxChange('taiNha')}
                        name="taiNha" type='checkbox' disabled={ghiNhan}/>
                    <label>Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau</label>
                </div>

                </div>
                <div className='ghiNhan'>
                        <input className="Submit" type="submit" value="Ghi nhận" disabled={ghiNhan}/>
                </div>
                </form>) : (<GhiNhanNoiDung/>)
            }
        </div>
    </FormDataContext.Provider>
        
    );
};

export default BT4;