import './BT1.css';
import React, { useState } from 'react';

function BT1() {
    const [diemHK1, setDiemHK1] = useState(0);
    const [diemHK2, setDiemHK2] = useState(0);
    const [diemTB, setDiemTB] = useState(0);
    const [ketQua, setKetQua] = useState('');
    const [hocLuc, setHocLuc] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const dtb = (parseFloat(diemHK1) + parseFloat(diemHK2) * 2) / 3;
        setDiemTB(dtb);

        if (dtb >= 8) {
            setHocLuc('Giỏi');
        } else if (dtb >= 6.5) {
            setHocLuc('Khá');
        } else if (dtb >= 5) {
            setHocLuc('Trung bình');
        } else {
            setHocLuc('Yếu');
        }

        if (dtb >= 5) {
            setKetQua('Được lên lớp');
        } else {
            setKetQua('Ở lại lớp');
        }
    };

    return (
        <form className="bai1" onSubmit={handleClick} method="POST" action={window.location.pathname}>
            <div className="title">
                <text>Kết quả học tập</text>
            </div>
            <div style={{ padding: '20px' }}>
                <div className="content">
                    <label>Điểm HK1:</label>
                    <input value={diemHK1} onChange={(e) => setDiemHK1(e.target.value)}
                        className="Input" type="number" name="diemHK1"
                        min="0" max="10" step="0.1"
                        required disabled={ketQua !== ''}/>
                </div>
                <div className="content">
                    <label>Điểm HK2:</label>
                    <input value={diemHK2} onChange={(e) => setDiemHK2(e.target.value)}
                        className="Input" type="number" name="diemHK2"
                        min="0" max="10" step="0.1"
                        required disabled={ketQua !== ''}/>
                </div>
                <div className="content">
                    <label>Điểm trung bình:</label>
                    <input value={diemTB.toFixed(2)} className="Input"
                        type="text" name="diemTB"
                        readOnly disabled/>
                </div>
                <div className="content">
                    <label>Kết quả:</label>
                    <input value={ketQua} className="Input"
                        type="text" name="ketQua"
                        readOnly disabled/>
                </div>
                <div className="content">
                    <label>Xếp loại học lực:</label>
                    <input value={hocLuc} className="Input" type="text"
                        name="xepLoai" readOnly disabled />
                </div>
            </div>
            <div className='result'>
                <input className="Submit" type="submit" value="Xem Kết quả" disabled={ketQua !== ''}/>
            </div>
        </form>
    );
}

export default BT1;