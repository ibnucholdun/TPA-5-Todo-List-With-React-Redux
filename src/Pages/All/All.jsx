import React from 'react'
import { useSelector } from 'react-redux';
import './All.css'

const All = () => {
  const {data} = useSelector((state) => state.todo);
  return (
      <ul>
        {
          data.map((item) => (
              <li key={item.id} className="container-list">
                <div className="container-checkbox">
                  <span>{item.item}</span>
                </div>
                <div className="container-button">
                    <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger mx-2">Delete</button>
                </div>
              </li>
          ))
        }
      </ul>
  );
}

export default All