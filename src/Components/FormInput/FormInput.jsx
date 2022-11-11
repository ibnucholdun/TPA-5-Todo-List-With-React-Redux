import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../../Redux/Actions/todoActions'
import {IoIosAddCircle} from 'react-icons/io'

const FormInput = () => {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputText === "") {
        alert("Input is Empty");
      } else {
        dispatch(addTodo({
          id: Math.floor(Math.random() * 1000),
          item: inputText,
          completed: false,
          edit: false
        }))
        setInputText("");
      }
    };
  
    const handleChange = (event) => {
      setInputText(event.target.value);
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group my-5 w-50 mx-auto">
            <input type="text" className="form-control" placeholder="What to do" value={inputText} onChange={handleChange}/>
            <button className="btn btn-primary" type="submit" id="button-addon2"><IoIosAddCircle style={{fontSize: "1.5rem", fontWeight: "bold"}}/></button>
            </div>
        </form>
    )
}

export default FormInput