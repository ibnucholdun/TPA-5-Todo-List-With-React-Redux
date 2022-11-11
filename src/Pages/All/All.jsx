import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updatedTodo } from '../../Redux/Actions/todoActions';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai';
import { FaSave } from 'react-icons/fa';
import './All.css'

const All = () => {
  const {data} = useSelector((state) => state.todo);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    setEdit(!edit);
    const newData = data.map((item) => {
      if (item.id === id) {
        item.edit = !item.edit;
      }
      return item;
    });
    return{
      data: newData
    }
  }

  const handleChanges = (id, event) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.item = event.target.value;
      }
      return item;
    });
    return{
      data: newData
    }
  }

  return (
      <ul>
        {
          data.map((item) => (
              <li key={item.id} className="container-list">
                <div className="container-checkbox">
                {
                    item.edit ? (
                          <input type="text" value={item.item} onChange={(event) => dispatch(updatedTodo(handleChanges(item.id, event)))} className='input-group w-75'/>
                    ) : (
                        <span>{item.item}</span>
                    )
                  }
                </div>
                <div className="container-button">
                {
                  item.edit ? (
                    <button className="btn btn-success" onClick={() => dispatch(updatedTodo(handleEdit(item.id)))}><FaSave/></button>
                  ) : (
                    <button className="btn btn-warning" onClick={() => dispatch(updatedTodo(handleEdit(item.id)))}><AiFillEdit style={{fontSize: '1.5rem'}}/></button>
                  )
                }
                  <button className="btn btn-danger mx-2" onClick={() => dispatch(deleteTodo(item.id))}><RiDeleteBin2Fill style={{fontSize: '1.5rem'}}/></button>
                </div>
              </li>
          ))
        }
      </ul>
  );
}

export default All