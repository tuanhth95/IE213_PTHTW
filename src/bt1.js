import './bt1.css';
import React from 'react';


class Bt1 extends React.Component {
    state = {
      dhk1: 0,
      dhk2: 0,
    };
    render() {
      this.handleOnclick = (event) => {
        let hk1 = document.getElementById("hk1").value;
        let hk2 = document.getElementById("hk2").value;
        if(isNaN(hk1) || isNaN(hk2)) {
          console.log('giá tri nhập vào không hợp lệ');
        }
        else {
          let dtb = (Number(hk1) + Number(hk2)*2)/3;
          document.getElementById("dtb").value = dtb;
          document.getElementById("kq").value = (dtb >=5)? "Được lên lớp" : "Ở lại lớp";
          document.getElementById("hl").value = (dtb >=8)? "Giỏi" : (dtb >= 6.5)? "Khá": (dtb >= 5)? "Trung bình": "Yếu";
        };
      }
      return (
      <div className='form1'>
        <div className='title'>
        <p> kết quả học tập</p>
        </div >
        <div className='content'>
        <div className='row-field'>
        <label>
        Điểm HK1:
        </label>
        <input type="text" name="name" id="hk1" />
        </div>
        <br></br>
        <div className='row-field'>
        <label>
        Điểm HK2:
        </label>
        <input type="text" name="name" id="hk2" />
        </div>
        <br></br>
        <div className='row-field'>
        <label>
        Điểm trung bình:
        </label>
        <input type="text" name="name" disabled id="dtb"/>
        </div>
        <br></br>
        <div className='row-field'>
        <label>
        Kết quả:
        </label>
        <input type="text" name="name" disabled id="kq"/>
        </div>
        <br></br>
        <div className='row-field'>
        <label>
        Xếp loại học lực:
        </label>
        <input type="text" name="name" disabled id="hl"/>
        </div>
        <br></br>
        <input type="submit" value="Xem kết quả" onClick={(event) => this.handleOnclick(event)}  />
        </div>
      </div>
      );
    }
}
export default Bt1;