// MSSV: 21521374 - Họ tên: Phạm Như Quỳnh
import './App.css';
import React, {useState} from 'react'

function App() {
  
// MSSV: 21521374 - Họ tên: Phạm Như Quỳnh

const [hk1, setHk1] = useState(null);
const [hk2, setHk2] = useState(null);
const [diemTB, setDiemTB] = useState(null);
const [ketQua, setKetQua] = useState(null);
const [xepLoai, setXepLoai] = useState(null);

const handleXemKetQua = () => {
  if(hk1 != null && hk2 != null)
  {
    const dtb =  ((hk1 + hk2*2) / 3).toFixed(1);
    setDiemTB(dtb);

    if (dtb >= 5) setKetQua("Được lên lớp");
    else setKetQua("Ở lại lớp");

    if (dtb >= 8) setXepLoai("Giỏi");
    else if (dtb > 6.5 && dtb < 8) setXepLoai("Khá");
    else if (dtb >= 5 && dtb < 6.5) setXepLoai("Trung Bình");
    else setXepLoai("Yếu");
  }
}

  return (
    <div className="container">
      <div className="header">
        <h1>KẾT QUẢ HỌC TẬP</h1>
      </div>
      <form className="eduction-form" action="eduction-performance" method="post" 
        onSubmit={(event) => {event.preventDefault()}}
      >
        <div>
          <label htmlFor="hk1">Điểm HK1: </label>
          <input type="number" id="hk1" 
            step = '0.1'
            min = '0'
            max = '10'
            required
            value = {hk1}
            onChange = {event => {setHk1(parseFloat(event.target.value))}}
          />
        </div>

        <div>
          <label htmlFor="hk2">Điểm HK2: </label>
          <input type="number" id="hk2"
            step = '0.1'
            min = '0'
            max = '10'
            required
            value = {hk2}
            onChange = {event => {setHk2(parseFloat(event.target.value))}}
          />
        </div>
        
        <div>
          <label htmlFor="dtb">Điểm trung bình: </label>
          <input type="text" id="dtb" readonly 
            value = {diemTB}
          />
        </div>
        
        <div>
          <label htmlFor="kq">Kết quả: </label>
          <input type="text" id="kq" readonly 
            value = {ketQua}
          />
        </div>
        
        <div>
          <label htmlFor="xl">Xếp loại học lực: </label>
          <input type="text" id="xl" readonly 
            value = {xepLoai}
          />
        </div>

        <div className="Btn">
          <button
          onClick = {(event) =>{
            handleXemKetQua();
          }}
          >
            Xem kết quả
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
