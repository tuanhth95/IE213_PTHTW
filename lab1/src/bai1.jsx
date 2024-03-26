
import './bai1.css';
import { useState } from 'react';


function Bai1() {
  let [diemhk1, setDiemHk1] = useState(0);
  let [diemhk2, setDiemHk2] = useState(0);
  let [diemtb, setDiemTB] = useState(0);
  let [ketqua, setKQ] = useState('');
  let [hocluc, setHocLuc] = useState('');

  const getValueHk1 = (event) => {
    setDiemHk1(event.target.value);
  }
  const getValueHk2 = (event) => {
    setDiemHk2(event.target.value);
  }

  const CheckKetQua = (event) => {
    let a = (parseFloat(diemhk1) + parseFloat(diemhk2) * 2) / 3;
    setDiemTB(a);
    if (a >= 8) {
      setKQ("Được lên lớp");
      setHocLuc("Giỏi");
    }
    if (a >= 6.5 && a < 8) {
      setKQ("Được lên lớp");
      setHocLuc("Khá");
    }
    if (a >= 5 && a < 6.5) {
      setKQ("Được lên lớp");
      setHocLuc("Trung bình");
    }
    if (a < 5) {
      setKQ("Ở lại lớp");
      setHocLuc("Yếu");
    }

    event.preventDefault();
  }


  return (
    <div className="App">
      <form>
        <p>
          <label for="DiemHk1">Điểm HK1:</label>
          <input type="number" id="DiemHk1" value={diemhk1} onChange={(event) => getValueHk1(event)}></input>
        </p>
        <p>
          <label for="DiemHk2">Điểm HK2:</label>
          <input type="number" id="DiemHk2" value={diemhk2} onChange={(event) => getValueHk2(event)}></input>
        </p>
        <p>
          <label for="DiemTB">Điểm trung bình:</label>
          <input type="number" id="DiemTB" value={diemtb}></input>
        </p>
        <p>
          <label for="KQ">Kết quả</label>
          <input type="text" id="KQ" value={ketqua}></input>
        </p>
        <p>
          <label for="HocLuc">Xếp loại học lực</label>
          <input type="Text" id="HocLuc" value={hocluc}></input>
        </p>
        <p>
          <button type="submit" value="Xem kết quả" onClick={(event) => CheckKetQua(event)}>
            Xem kết quả
          </button>
        </p>
      </form>
    </div>
  );
}

export default Bai1;