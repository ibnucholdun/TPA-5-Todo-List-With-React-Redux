import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Completed = () => {
  const [checked, setChecked] = useState(true);
  const {data} = useSelector((state) => state.todo);
  const completed = data.filter((item) => item.completed === true);
  console.log(completed);

  const handleUnchecked = (id) => {
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
  return (
    <>
      <ul>
        {
          completed.map((item) => (
            <li key={item.id} className="container-list">
              <div className="container-checkbox">
                {
                  item.completed ? (
                    <>
                      <input type="checkbox" className='checkbox' checked onChange={() => handleUnchecked(item.id)} />
                      <span className='text-completed'>{item.item}</span>
                    </>
                  ) : (
                    <>
                      <input type="checkbox" className='checkbox' onChange={() => handleUnchecked(item.id)} />
                      <span>{item.item}</span>
                    </>
                  )
                }
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Completed