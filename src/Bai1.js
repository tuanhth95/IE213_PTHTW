import React, {useState} from "react"; 
import './Bai1.css';
function Bai01(){
    const [diemHK1, setDHK1] = useState(0);
    const [diemHK2, setDHK2] = useState(0);
    const [diemTB, setDTB] = useState(0);
    const [ketQua, setKQ] = useState('');
    const [hocLuc, setHL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const diemTrungBinh = (parseFloat(diemHK1) + parseFloat(diemHK2) * 2) / 3;
        setDTB(diemTrungBinh);

        if (diemTrungBinh >= 8) {
            setHL('Giỏi');
        } else if (diemTrungBinh >= 6.5) {
            setHL('Khá');
        } else if (diemTrungBinh >= 5) {
            setHL('Trung bình');
        } else {
            setHL('Yếu');
        }

        if (diemTrungBinh >= 5) {
            setKQ('Được lên lớp');
        } else {
            setKQ('Ở lại lớp');
        }
    };


    return (
        <form className="Bai1" onSubmit={handleSubmit}>
            <div className="TitleKQ">
                <text>KẾT QUẢ HỌC TẬP</text>
            </div>
            <div style={{ padding: '20px' }}>
                <div className="ContentKQ">
                    <label>Điểm HK1:</label>
                    <input
                        value={diemHK1}
                        onChange={(e) => setDHK1(e.target.value)}
                        className="InputKQ"
                        type="number"
                        name="diemHK1"
                        min="0"
                        max="10"
                        step="0.1"
                        required
                        disabled={ketQua !== ''}
                    />
                </div>
                <div className="ContentKQ">
                    <label>Điểm HK2:</label>
                    <input
                        value={diemHK2}
                        onChange={(e) => setDHK2(e.target.value)}
                        className="InputKQ"
                        type="number"
                        name="diemHK2"
                        min="0"
                        max="10"
                        step="0.1"
                        required
                        disabled={ketQua !== ''}
                    />
                </div>
                <div className="ContentKQ">
                    <label>Điểm TB:</label>
                    <input
                        value={diemTB.toFixed(2)}
                        className="InputDTB"
                        type="text"
                        name="diemTB"
                        readOnly
                        disabled
                    />
                </div>
                <div className="ContentKQ">
                    <label>Kết quả:</label>
                    <input
                        value={ketQua}
                        className="InputDTB"
                        type="text"
                        name="ketQua"
                        readOnly
                        disabled
                    />
                </div>
                <div className="ContentKQ">
                    <label>Xếp loại học lực:</label>
                    <input
                        value={hocLuc}
                        className="InputDTB"
                        type="text"
                        name="xepLoai"
                        readOnly
                        disabled
                    />
                </div>
            </div>
            <div className='XemKetQua'>
                <input
                    className="SubmitKQ"
                    type="submit"
                    value="Xem Kết quả"
                    disabled={ketQua !== ''}
                />
            </div>
        </form>
    );
}

export default Bai01;
