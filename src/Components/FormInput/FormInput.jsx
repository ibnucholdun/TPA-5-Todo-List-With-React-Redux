import React from 'react'

const FormInput = () => {
  return (
    <form>
        <div className="input-group my-5 w-50 mx-auto">
        <input type="text" className="form-control" placeholder="What to do" />
        <button className="btn btn-primary" type="submit" id="button-addon2">Add</button>
        </div>
    </form>
  )
}

export default FormInput