// MSSV: 21521374 - Họ tên: Phạm Như Quỳnh
import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {format} from 'date-fns'

function App() {
  // MSSV: 21521374 - Họ tên: Phạm Như Quỳnh

  const modes = [
    {
      id: 0,
      name: 'Tại lớp'
    },
    {
      id: 1,
      name: 'Tại nhà'
    }
  ]

  const [studentName, setStudentName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [formDate, setFormDate] = useState(null);
  const [tasks, setTasks] = useState('');
  const [finModes, setFinModes] = useState([])
  const finModesIDs = [];
  const [hide, setHide] = useState(1);

  const handleRemoveArrayElement = (arr, x) => {
    const index = arr.indexOf(x);
    if (index !== -1) {
    arr.splice(index, 1);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinModes(Array.from(finModesIDs, x => {
      if (modes.some(obj => obj.id == x)) return modes[x].name;
    }))
    setHide(0);
    console.log(finModesIDs);
    console.log(finModes);
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>THEO DÕI HỌC TẬP</h1>
        </div>
        <form className="study-tracking-form" action="Theo_doi_hoc_tap" method = 'post'
        onSubmit = {(event) => {
          handleSubmit(event);
        }}
        >
          <div className="name">
            <label htmlFor="student-name">Họ tên học sinh: </label>
            <input type="text" id="student-name"
              value = {studentName}
              onChange={(event) => {setStudentName(event.target.value)}}
            />
          </div>

          <div className="name">
            <label htmlFor="teacher-name">Giáo viên phụ trách: </label>
            <input type="text" id="teacher-name"
              value = {teacherName}
              onChange={(event) => {setTeacherName(event.target.value)}}
            />
          </div>

          <div className="group-date">
            <div className="group">
              <label htmlFor="group">Lớp: </label>
              <input type="text" id="group"
                value = {groupName}
                onChange = {(event) => {setGroupName(event.target.value)}}
              />
            </div>
            <div  className="date">
              <label htmlFor="date">Ngày: </label>
              <DatePicker
                id = "date"
                selected = {formDate}
                dateFormat = 'dd/MM/yyyy'
                onChange = {(date) => setFormDate(date)}
              ></DatePicker>
            </div>
          </div>

          <div className="unfinished-tasks">
            <label htmlFor="tasks">
              Những việc phân công chưa làm: 
            </label>
            <textarea name="" id="tasks" cols="30" rows="5"
              value = {tasks}
              onChange = {(event) => setTasks(event.target.value)}
            ></textarea>
          </div>

          <div className="finish-modes" id="finish-modes">
            <p>Chọn hình thức hoàn thành</p>
            {
              modes.map(type =>(
                <div key = {type.id}>
                  <input type="checkbox" 
                    id = {'mode' + type.id}
                    name = 'finish-mode'
                    value = {type.id}
                    onChange={(event) =>{
                      const isChecked = event.target.checked;
                      const value = event.target.value;
                      if (!isChecked && finModesIDs.includes(value)) handleRemoveArrayElement(finModesIDs, event.target.value);
                      else if (isChecked && !finModesIDs.includes(value))finModesIDs.push(event.target.value);
                      // console.log(finModesIDs);
                    }}
                  />
                  <label htmlFor={'mode' + type.id}>
                    {
                      (type.id == 0) ? ("Những việc chưa làm sẽ được hoàn thành ngay tại lớp") 
                      : ("Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau")
                    }
                  </label>
                </div>
              ))
            }
          </div>

          <div className="submitBtn">
            <button type='submit'>
              Ghi nhận
            </button>
          </div>
        </form>

        {
          (hide == 1) ? (null) : (
            <div className="result">
              <div>
                <h2>
                  Thông tin phiếu theo dõi
                </h2>
              </div>

              <div>
                <p>
                  Tên học sinh: {studentName} - Lớp: {groupName}
                </p>
                <p>
                  Ngày đăng ký: {format(formDate, 'dd/MM/yyyy')} - Giáo viên phụ trách: {teacherName}
                </p>
                <p>
                  Những công việc đã được phân công nhưng chưa hoàn thành: <br />
                  {tasks}
                </p>
                <p>
                  Cam kết sẽ hoàn thành tại: {finModes.join(' - ')}
                </p>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default App;
