import React, { useEffect, useState } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Modal, TextField, Typography } from '@mui/material';
import { Button } from '@mui/base';
// import background from "./images/pen.png";


function Bt4() {
  const [ten, setTen] = useState('');
  const [gv, setGv] = useState('');
  const [lop, setLop] = useState('');
  const [cv, setCv] = useState('');
  const [ngay, setNgay] = useState('');
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const ngayDoi = new Date(ngay).toLocaleDateString('en-GB');
  const ThongTin={
    hoten: ten,
    giaovien: gv,
    lop: lop,
    congviec: cv,
    ngay: ngayDoi,
    check1: check1,
    check2: check2
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
    <div id='form'  action=''
    style={{backgroundColor: '#eaf1f9', textAlign:'left', marginLeft:'auto', marginRight: 'auto', width:'50%',}}>
            <h2 style={{backgroundColor: '#6784a5', color: 'white', textAlign:'center'}}>THEO DÕI HỌC TẬP</h2>
            <div style={{backgroundImage: `url(/images/pen.png)`, paddingLeft:'10px'}}>
              <table>
                <tr>
                  <td style={{width:'250px'}}>Họ tên học sinh:</td>
                  <td>
                    <input type="text" name="hoten" value={ten} onChange={(e) => setTen(e.target.value)}/>
                  </td>     
                </tr>
                <tr>
                  <td>Giáo viên phụ trách:</td>
                  <td>
                    <input type="text" name="gv" value={gv} onChange={(e) => setGv(e.target.value)}/>
                  </td>     
                </tr>
              </table>
              <div>
                <p>Lớp: <input type="text" name="lop" value={lop} onChange={(e) => setLop(e.target.value)}/> 
                Ngày: <input type="date" name="date" value={ngay} onChange={(e) => setNgay(e.target.value)} /> </p>
              </div>
              <div>
                <p>Những việc phân công chưa làm: </p> 
                <textarea name="cv" cols="55" rows="4" value={cv} onChange={(e) => setCv(e.target.value)}></textarea> 
              </div>
              <div>
                <p>Chọn hình thức hoàn thành</p>
                <p><input type="checkbox" name="check1" onChange={(e) => setCheck1(!check1)}/>Những việc chưa làm sẽ được hoàn thành ngay tại lớp</p>
                <p><input type="checkbox" name="check2" onChange={(e) => setCheck2(!check2)}/>Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau</p>
              </div>
            </div>
            
            
            <button name="btn" type="submit"  
            onClick={ () => {
              openInfoPopup();
            }}  
            style={{textAlign: 'center', padding: '5px', marginLeft: '45%', marginBottom: '5px', backgroundColor: 'lightgray', border: 'none'}}>Ghi nhận</button>
             <Dialog
              open={infoPopup}
              onClose={closeInfoPopup}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              {/* <DialogTitle id="alert-dialog-title">
                Thông tin phiếu theo dõi
              </DialogTitle> */}
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Info info={ThongTin}/>
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
export default Bt4


export const Info = ({ info}) => {
  return (
    <div className="customer-info" style={{backgroundColor: '#6784a5', color:'white', width: '500px'}}>
      <h2 style={{textAlign: 'center'}}>Thông tin phiếu theo dõi</h2>
      <div style={{fontSize:'15px', paddingLeft: '10px'}}>
              <p>
                <span>Tên học sinh:  {info.hoten} </span> 
                <span> - Lớp:  {info.lop}</span>
              </p>
              <p>
                Ngày đăng ký: {info.ngay}- Giáo viên phụ trách: {info.giaovien}
              </p>
              <p>
                <p>Những công việc đã phân công nhưng chưa hoàn thành:</p>
                <p>
                  {info.congviec}
                </p>
              </p>
        <p>
          Cam kết sẽ hoàn thành tại: 
              {info.check1 && info.check2 ? ' Tại lớp - Tại nhà' : ''}
              {info.check1 && !info.check2? ' Tại lớp' : ''}
              {!info.check1 && info.check2 ? ' Tại nhà' : ''}
        </p> 
      </div>
    </div>
  );
};

