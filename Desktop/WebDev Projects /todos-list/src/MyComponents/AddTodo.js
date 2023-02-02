import React, {useState} from 'react'

function AddTodo(props) {
    const [title, settitle] = useState("");
    const [des, setdes] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !des){
            alert("Title or Description cannot be blank!");
        }
        else{
            props.addTodo(title,des);
            props.settitle("");
            props.setdes("");
        }
    }
    return (
        <div className="container" style={{marginTop:"20px"}}>
            <h3>Add a To-Do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To-do Title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">To-Do Description</label>
                    <input type="text" value={des} onChange={(e)=>{setdes(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
export default AddTodo;