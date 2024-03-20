import React, { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TextField } from '@mui/material';

export default function Bt2() {
    const [am, setAm] = useState('');
    const [duong, setDuong] = useState('');
    const [anh, setAnh] = useState('');
    function ketqua(){
        const thiencan = [ "Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ" ];
        const diachi = [ "Thân", "Dậu", "Tuấn", "Hợi", "Tý", "Sửu", "Dần", "Mẹo", "Thìn", "Tỵ", "Ngọ", "Mùi" ];

        const nam = parseInt(duong);;
        const namamlich = thiencan[ nam % 10 ] + " " + diachi[ nam % 12 ];
        setAm(namamlich);
        switch(diachi[nam % 12]){
            case 'Tý' :{
                setAnh("https://th.bing.com/th/id/OIP.gczK07qtQ41YOY0RRgu2NwAAAA?pid=ImgDet&rs=1");
                break;
            }
            case 'Sửu':{
                setAnh("https://image.freepik.com/free-vector/cute-african-cape-buffalo-animal-cartoon_146562-20.jpg");
                break;
            }
            case 'Dần':{
                setAnh("https://scr.vn/wp-content/uploads/2020/09/Anh-con-ho-hoat-hinh-300x225.jpg");
                break;
            }
            case 'Mẹo':{
                setAnh("https://stockdep.net/files/images/20332081.jpg");
                break;
            }
            case 'Thìn':{
                setAnh("https://ringgitplus.com/img/wysiwyg/dragon-chinese-myth.84769016.jpg?is-pending-load=1");
                break;
            }
            case 'Tỵ':{
                setAnh("https://vẽ.vn/wp-content/uploads/2020/04/1587623021_385_Lam-the-nao-de-ve-mot-con-ran-hoat-hinh.png");
                break;
            }
            case 'Ngọ':{
                setAnh("https://thuthuatnhanh.com/wp-content/uploads/2022/04/Hinh-anh-con-Ngua-cute.jpg");
                break;
            }
            case 'Mùi':{
                setAnh("https://anhdep123.com/wp-content/uploads/2020/05/anh-hoat-hinh-con-de-cho-thieu-nhi.png");
                break;
            }
            case 'Thân':{
                setAnh("https://www.pngkey.com/png/detail/70-708409_cartoon-monkey-image-0002-600600-pixels-monkey-drawing.png");
                break;
            }
            case 'Dậu':{
                setAnh("https://th.bing.com/th/id/R.519d88d189a8dae30fa0d1e1ccbc6985?rik=B4uP3CiN15Sv6A&riu=http%3a%2f%2fnhandaovadoisong.com.vn%2fwp-content%2fuploads%2f2019%2f05%2fhinh-anh-con-ga-trong-2.jpg&ehk=y4SMGD7usRkH4OfWS1kI0OQ6onHrluh0YqATsYA3sPM%3d&risl=&pid=ImgRaw&r=0");
                break;
            }
            case 'Tuất':{
                setAnh("https://png.pngtree.com/png_detail/18/09/10/pngtree-cartoon-dog-png-clipart_797537.jpg");
                break;
            }
            case 'Hợi':{
                setAnh("https://clipartmag.com/images/cartoon-piggy-pictures-45.jpg");
                break;
            }
            default:
                setAnh("");
        }
    }
  return (
    <form id="form" method="post" action="" >
        <table style={{backgroundColor: '#aee4ff',  textAlign:'left', marginLeft: 'auto', marginRight: 'auto'}}>
            <tr>
                <th colspan="3" style={{height: '50px', backgroundColor:  '#005cb9',  textAlign: 'center', fontSize: '20px'}}>TÍNH NĂM DƯƠNG LỊCH</th>
            </tr>
            <tr>
                <th>Năm dương lịch</th>
                <th>&nbsp;</th>
                <th>Năm âm lịch</th>
            </tr>
            <tr>
                <th> 
                    <TextField type="number" inputProps={{ min: 0, max: 10, step: 1 }} value={duong} onChange={(e) => setDuong(e.target.value)} style={{width: '200px'}}/>
                </th>
                <th>
                    <button class="submit-btn" type="button" onClick={ketqua}
                    >
                        <ArrowRightAltIcon/>
                    </button>
                </th>
                <th>
                    <TextField type="text" value={am} readOnly style={{ backgroundColor: '#fffdcd' }}/>
                </th>
            </tr>
            <tr>
                <th colspan="3" style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                    <img height="100px" width="150px" src={anh} alt="animal"/>
                </th>
            </tr>
        </table>
    </form>
  )
}
