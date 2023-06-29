import { useState } from "react";
import { FaBitbucket } from "react-icons/fa";

function List(){

    const [task,setTask]=useState();
    const [list,setList]=useState([]);
    const [check,setCheck]=useState(false);

    function hanleChange(e){
        console.log(e.target.value)
        setTask(e.target.value);
    }

    function addTask(){
        setList([...list,task]);
        console.log(list)
    }

    function handleDelete(x){
        console.log("deleted")
        // setList(list.indexOf(x).splice(x,1))
    }

    function isCheck(){
        setCheck(true);
    }
    // if(check===true){
    //     task
    // }

    return(
        <>
            <div className="todo">
                <h4>Add Your Task</h4>
                <input onChange={hanleChange} type="text"  placeholder="Enter Your Task"/>
                <button onClick={addTask} className="btns">Add</button>

                <div className="list">
                    {list.map((x,index)=>{
                        return(
                            <div className="task" key={index}>
                                <div className="content">                                          
                                <input className="check" onClick={isCheck} type="checkbox" />
                                    {/* {check ? <p style={{textDecoration:"line-through"}}>{x}</p>:<b><p style={{textDecoration:"underline"}}>{x}</p></b> } */}
                                    <b><p>{x}</p></b>
                                </div>
                                <button onClick={handleDelete} className="del"> <FaBitbucket /> </button>

                            </div>
                        )})}
                </div>
            </div>
        </>
    )
}

export default List;