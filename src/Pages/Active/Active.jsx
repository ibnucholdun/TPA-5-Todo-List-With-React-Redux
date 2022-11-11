import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updatedTodo } from '../../Redux/Actions/todoActions';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai';
import { FaSave } from 'react-icons/fa';

const Active = () => {
  const [checked, setChecked] = useState(false);
  const {data} = useSelector((state) => state.todo);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const active = data.filter((item) => item.completed === false);

  const handleChecked = (id) => {
    setChecked(!checked);

    const newData = data.map((item) => {
        if (item.id === id) {
            item.completed = !item.completed;
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

  return (
      <>
        <ul>
          {
            active.map((item) => (
              <li key={item.id} className="container-list">
                <div className="container-checkbox">
                  {
                    item.edit ? (
                      <>
                        <input type="checkbox" className='checkbox' checked onChange={() => handleChecked(item.id)}/>
                        <input type="text" value={item.item} onChange={(event) => dispatch(updatedTodo(handleChanges(item.id, event)))} className='input-group w-75'/>
                      </>
                    ) : (
                      <>
                        <input type="checkbox" className='checkbox' checked={item.completed} onChange={() => dispatch(updatedTodo(handleChecked(item.id)))} />
                        <span className={item.completed ? "text-completed" : ""}>{item.item}</span>
                      </>
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
      </>
  )
}

export default Active