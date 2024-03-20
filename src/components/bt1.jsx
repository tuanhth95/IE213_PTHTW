import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function Bt1() {
    const [hk1, setHk1] = useState('');
    const [hk2, setHk2] = useState('');
    const [diemTb, setDiemTb] = useState('');
    const [kq, setKq] = useState('');
    const [loai, setLoai] = useState('');

    function ketqua() {
        const diemtb = (parseFloat(hk1) + parseFloat(hk2) * 2) / 3;
        setDiemTb(diemtb.toFixed(2));

        if (diemtb >= 5) {
            setKq("Được lên lớp");
        } else {
            setKq("Không được lên lớp");
        }

        if (diemtb >= 8) {
            setLoai("Giỏi");
        } else if (diemtb >= 6.5 && diemtb < 8) {
            setLoai("Khá");
        } else if (diemtb >= 5 && diemtb < 6.5) {
            setLoai("Trung bình");
        } else {
            setLoai("Yếu");
        }
    }

    return (
        <form id="form" method="post" action="" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <table style={{ backgroundColor: '#db95b9', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto' }}>
                <tr>
                    <th colSpan="2" style={{ height: '50px', backgroundColor: '#cc3467', textAlign: 'center', fontSize: '20px' }} onClick={ketqua}>KẾT QUẢ HỌC TẬP</th>
                </tr>
                <tr>
                    <th style={{ width: '150px', padding: '10px' }}>Điểm HK1:</th>
                    <th style={{ width: '200px' }}>
                    <TextField type="number" inputProps={{ min: 0, max: 10, step: 0.5 }} value={hk1} onChange={(e) => setHk1(e.target.value)} style={{width: '200px'}}/>
                    </th>
                </tr>
                <tr>
                    <th style={{ padding: '10px' }}>Điểm HK2:</th>
                    <th>
                        <TextField type="number" inputProps={{ min: 0, max: 10, step: 0.5 }} value={hk2} onChange={(e) => setHk2(e.target.value)} style={{width: '200px'}}/>
                    </th>
                </tr>
                <tr>
                    <th style={{ padding: '10px' }}>Điểm trung bình:</th>
                    <th>
                        <TextField type="text" value={diemTb} readOnly style={{ backgroundColor: '#fffdcd' }} disabled />
                    </th>
                </tr>
                <tr>
                    <th style={{ padding: '10px' }}>Kết quả:</th>
                    <th>
                        <TextField type="text" value={kq} readOnly style={{ backgroundColor: '#fffdcd' }} disabled/>
                    </th>
                </tr>
                <tr>
                    <th style={{ padding: '10px' }}>Xếp loại học lực:</th>
                    <th>
                        <TextField type="text" value={loai} readOnly style={{ backgroundColor: '#fffdcd' }} disabled/>
                    </th>
                </tr>
                <tr>
                    <th colSpan="2" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', padding: '10px' }}>
                        <button className="submit-btn" type="button" onClick={ketqua} 
                        style={{color: 'black', backgroundColor: 'gray',textAlign:'center', padding: '10px', border:'none'}}>
                            Xem kết quả
                        </button>
                    </th>
                </tr>
            </table>
        </form>
    );
}
