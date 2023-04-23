import React, { useState } from 'react';

const BoxForm = () => {
    const [boxArray, setBoxArray] = useState({
        boxColor: "",
        boxSize: 50
    })

    const [allBoxes,setAllBoxes] =useState([]);

    const changeHandler = (e) => {
        setBoxArray({
            ...boxArray,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        //don't forget the e or it won't add!
        e.preventDefault()
        // prevent function from running automatically 
        setAllBoxes([...allBoxes, boxArray]);
        setBoxArray({
            color:'',
            size:''
        })
        // make sure to include []
        console.log(boxArray)
    }

return (
    <div className='bg-warning'>
        <div className='row'>
            <form onSubmit={submitHandler} className="col-md-3 offset-4 mt-5 pt-3 pb-3 bg-success text-white">
            <div className=''>
                <h1>Box Generator</h1>
                <div className='form-row'>
                    <div className='col-6'>
                        <label>Color:</label>
                        <input className="form-control" type="text" name="color" value={boxArray.color} onChange={changeHandler}/>
                    </div>
                </div>
                <div className='form-row pb-4'>
                    <div className='col-6'>
                        <label htmlFor="size">Size:</label>
                        <input className="form-control" type="number" name="size" value={boxArray.size} onChange={changeHandler}/>
                    </div>
                </div>
                <button type="submit" class="btn btn-light">Submit</button>
            </div>
            </form>
        </div>
        <div className='row'>
            <div className='form-group col-md-4 offset-4 mt-5 d-inline-flex p-2'>
                {
                    allBoxes.map((item,index) => 
                    <div key={index} style={{backgroundColor:item.color,height:`${item.size}px`, width:`${item.size}px`, margin:`${20}px`}}></div>)
                }
            </div>
        </div>
    </div>
  )
}

export default BoxForm