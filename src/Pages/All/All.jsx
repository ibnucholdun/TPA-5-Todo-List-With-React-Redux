import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../../Redux/Actions/todoActions';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai';
import './All.css'

const All = () => {
  const {data} = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
      <ul>
        {
          data.map((item) => (
              <li key={item.id} className="container-list">
                <div className="container-checkbox">
                  <span>{item.item}</span>
                </div>
                <div className="container-button">
                  <button className="btn btn-warning"><AiFillEdit style={{fontSize: '1.5rem'}}/></button>
                  <button className="btn btn-danger mx-2" onClick={() => dispatch(deleteTodo(item.id))}><RiDeleteBin2Fill style={{fontSize: '1.5rem'}}/></button>
                </div>
              </li>
          ))
        }
      </ul>
  );
}

export default All