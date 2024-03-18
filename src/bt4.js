import React from "react";
import './bt4.css';

class Bt4 extends React.Component{
    state = {
        "tenhs": "",
        "tengv": "",
        "lop": "",
        "ngay": "",
        "undone_task": "",
        "method_1": "",
        "method_2": "",
        "visible": false,
    }
    handleClick = () => {
        console.log(document.getElementById("tenhs").value);
        this.setState({
            "tenhs": document.getElementById("tenhs").value,
            "tengv": document.getElementById("tengv").value,
            "lop": document.getElementById("lop").value,
            "ngay": document.getElementById("date").value,
            "undone_task": document.getElementById("undone_task").value,
            "method_1": document.querySelector("#method-1:checked")==null?false:true,
            "method_2": document.querySelector("#method-2:checked")==null?false:true,
            "visible": true,
        })
    }
    turnOffPopup = () =>{
        this.setState({
            "visible": false
        })
    }
    render(){
        return(
            <div id="general">
            <div id="form1">
                <div id="title">
                    <span>THEO DÕI HỌC TẬP</span>
                </div>
                <div id="content">
                    <img src="../bt4.png" alt="text"/>
                    <div id="field-area">
                        <div class="student-field row">
                            <label>
                                Họ tên học sinh: 
                            </label>
                            <input type="text" name="name" id="tenhs" />
                        </div>
                        <div class="teacher-field row">
                            <label>
                                Giáo viên phụ trách: 
                            </label>
                            <input type="text" name="name" id="tengv" />
                        </div>
                        <div class="row">
                            <div class="class-field">
                                <label>
                                    Lớp:
                                </label>
                                <input type="text" name="name" id="lop" />
                            </div>
                            <div class="date-field">
                                <label>
                                    Ngày: 
                                </label>
                                <input type="text" name="name" id="date" />
                            </div>
                        </div>
                        <div class="undone-task-field row">
                            <div class="column">
                                <label>
                                    Những việc phân công chưa làm: 
                                </label>
                                <textarea id="undone_task">

                                </textarea>
                            </div>
                        </div>
                        <div class="done-method-field column">
                            <label>
                                chọn hình thức hoàn thành: 
                            </label>
                            <div class="method-1">
                                <input type="checkbox" name="name" id="method-1" />
                                <label>
                                    Những việc chưa làm sẽ được hoàn thành ngay tại lớp
                                </label>
                            </div>
                        </div>
                    </div>
                            <div class="method-2">
                                <input type="checkbox" name="name" id="method-2" />
                                <label>
                                    Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau
                                </label>
                            </div>
                    <div class="submit">
                        <input type="submit" name="name" id="tenhs" value="Ghi nhận" onClick={() => this.handleClick()}/>
                    </div>
                </div>
            </div>
            <div id="popup" class="column" style={{visibility:this.state.visible == true? "visible":"hidden"}} onClick={() => this.turnOffPopup()}>
                <div id="popup-title">
                    Thông tin phiếu theo dõi
                </div>
                <div> Tên học sinh: {this.state.tenhs} - Lớp: {this.state.lop}</div>
                <div> Ngày đăng ký: {this.state.ngay} - Giáo viên phụ trách: {this.state.tengv}</div>
                <div> Những công việc đã được phân công nhưng chưa hoàn thành: {this.state.undone_task}</div>
                <div> Cam kết sẽ hoàn thành tại: {this.state.method_1 == true ? "Tại lớp": "" }{this.state.method_2 == true? " - Tại nhà":""}</div>

            </div>
            </div>
        );
    }
}
export default Bt4;