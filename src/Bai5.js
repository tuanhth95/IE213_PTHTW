import React from "react";
import './Bai5.css';

class Bai05 extends React.Component{
    state = {
        "hoten": "",
        "agerange": "",
        "sex": "",
        "address": "",
        "numparti": "",
        "date": "",
        "typeparti": "",
        "place": "",
        "knowfrom": "",
        "datereceived": "",
        "attachedorder": "",
        'showPopup' : false,
    }
    handleClick = () => {
        this.state.hoten = document.querySelector("input[id='guest-name']").value;
        let temp = document.getElementById("age").value;
        this.state.agerange = (temp === "bw19_34")? "Từ 19 đến 34 tuổi": (temp === "u19")? "Dưới 19 tuổi": "Trên 34 tuổi";
        this.state.sex = document.querySelector("input[name='sex']").value;
        this.state.address = document.getElementById("contact-address").value;
        this.state.numparti = document.getElementById("num-join").value;
        let dat = document.getElementById("order-date").value.split('-');
        this.state.date = dat[2] + '/' + dat[1] + '/' + dat[0];
        let typeparti = []
        document.querySelectorAll("div:has(>input[name='typeparty']:checked) label").forEach((item) => typeparti.push(item.innerHTML));
        this.state.typeparti = typeparti.join(' - ');
        this.state.place = document.querySelector("input[name='place']:checked").value;
        let knowfrom = []
        document.querySelectorAll("#know-from option:checked").forEach((item) => knowfrom.push(item.innerHTML));
        this.state.knowfrom = knowfrom.join(', ');
        let dr = new Date();
        this.state.datereceived = dr.getHours() + ':' + dr.getMinutes() + ':' + dr.getSeconds() + ' - ' + dr.getDate() + '/' + dr.getMonth() + '/' + dr.getFullYear();
        this.state.attachedorder = document.getElementById("attached-order").value;
        console.log(this.state.attachedorder);
        this.setState({
            'showPopup': true,
        });
    }
    hidePopup = () => {
        this.setState({
            'showPopup': false,
        });
    }
    render(){
        window.addEventListener('load',() => {
            let currdate = document.querySelector("#date input");
            console.log("current date: ",currdate.value);
            currdate.value = new Date().toISOString().split('T')[0];
        });
        return (
            <div id="general">
                <div id="form">
                    <div id="title">
                        <span>THÔNG TIN ĐẶT CHỖ</span>
                    </div>
                    <div id="content">
                        <div class="row">
                            <div id="num-participate">
                                <label for="num-join">
                                    Số khách tham gia bữa tiệc của quý khách:
                                </label>
                                <input type="input" id="num-join"/>
                            </div>
                            <div id="date">
                                <label>
                                    Ngày:
                                </label>
                                <input type="date" id="order-date"/>
                            </div>
                        </div>
                        <div class="row">
                            <div>Loại tiệc: </div>
                            <div id="morning-party" class="right_10px">
                                <input type="checkbox" name="typeparty"/>
                                <label >
                                    Tiệc sáng
                                </label>
                            </div>
                            <div id="noon-party" class="right_10px">
                                <input type="checkbox" name="typeparty"/>
                                <label>
                                    Tiệc trưa
                                </label>
                            </div>
                            <div id="evening-party" class="right_10px">
                                <input type="checkbox" name="typeparty"/>
                                <label>
                                    Tiệc tối
                                </label>
                            </div>
                        </div> 
                        <div class="row">
                            <div>Địa điểm: </div>
                            <div class="right_10px">
                                <input type="radio" id="inside" name="place" value="Trong nhà" checked/>
                                <label for="inside">
                                    Trong nhà
                                </label>
                            </div>
                            <div class="right_10px">
                                <input type="radio" id="outside" name="place" value="Ngoài trời"/>
                                <label for="outside">
                                    Ngoài trời
                                </label>
                            </div>                       
                        </div>
                        <div class="row">
                            <div id="guest-name">
                                <div>
                                    Tên quý khách: 
                                </div>
                                <input type="input" id="guest-name"/>
                            </div>
                            <div id="address">
                                <div>
                                    Địa chỉ liên lạc: 
                                </div>
                                <input type="input" id="contact-address"/>
                            </div>                        
                        </div>
                        <div class="row">
                            <div id="age-range">
                                <div>
                                    Độ tuổi:
                                </div>
                                <select name="age" id="age">
                                    <option value="bw19_34">Từ 19 đến 34 tuổi</option>
                                    <option value="u19">Dưới 19 tuổi</option>
                                    <option value="a34">Trên 34 tuổi</option>
                                </select>
                            </div>
                            <div id="sex">
                                <label>
                                    Giới tính: 
                                </label>
                                <input name="sex" type="radio" value="Nam" checked/>
                                <label> Nam</label>
                                <input name="sex" type="radio" value="Nu"/>
                                <label> Nữ</label>
                            </div>                        
                        </div>
                    
                        <div class="row">
                            <div id="request">
                                <div>
                                Quý khách biết đến nhà hàng của chúng tôi qua: 
                                </div>
                                <select name="know-from" id="know-from" multiple>
                                    <option value="news">Báo chí</option>
                                    <option value="radio">Đài phát thanh</option>
                                    <option value="tv">Tivi</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <label>
                                Các yêu cầu khác của quý khách.
                            </label>
                        </div>
                        <textarea id="attached-order">

                        </textarea>  
                        <div class="row center">
                            <input type="submit" value="Đặt chỗ" onClick={() => this.handleClick()}/>
                        </div>                      
                    </div>
                </div>
                <div id="popup" style={{visibility:this.state.showPopup? 'visible': 'hidden'}} onClick={() => this.hidePopup()}>
                    <div id="title">
                        <span>THÔNG TIN ĐẶT CHỖ</span>
                    </div>
                    <div id="popup-content">
                        <p id="guest-info">
                            <strong>Thông tin khách hàng: </strong><br/>
                            <span> Họ tên: {this.state.hoten} - Độ tuổi: {this.state.agerange} / Giới tính: {this.state.sex}</span><br/>
                            <span> Địa chỉ: {this.state.address}</span>
                        </p>
                        <p id="order-info">
                            <strong> Thông tin đặt chỗ</strong><br/>
                            <span>Số khách tham gia bữa tiệc: {this.state.numparti} - Ngày đặt tiệc: {this.state.date} </span><br/>
                            <span>Loại tiệc: {this.state.typeparti} / Địa điểm: {this.state.place}</span>
                        </p>
                        <p id="attached-order">
                            <strong> Các yêu cầu kèm theo</strong><br/>
                            <p style={{whiteSpace:"pre-line"}}>{this.state.attachedorder}</p>
                        </p>

                        <div id="popup-know-from">
                            <i>Quý khách biết đến nhà hàng của chúng tôi qua: {this.state.knowfrom}</i>
                        </div>
                        <p id="received">
                            Chúng tôi đã nhận được thông tin đặt chỗ của quý khách vào lúc: {this.state.datereceived}
                        </p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Bai05;