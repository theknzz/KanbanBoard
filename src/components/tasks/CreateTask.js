import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addDoneTask, addTodoTask, addProgressTask } from "../../store/actions/taskActions";

const CreateTask = (props) => {

    const [title, setTitle] = useState('new task');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('type' ,props.type)
        switch (props.type) {
            case 't':
                props.addTodoTask(title);
                break;
            case 'p':
                props.addProgressTask(title);
                break;
            case 'd':
                props.addDoneTask(title);
                break;
            default:
                console.error('something went wrong m8!');
        }
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    return(

        <div className="card task-summary">
            <form onSubmit={handleSubmit}>
                <div className="card-content black-text text-darken-3">
                    <label htmlFor={'title'}>Title</label>
                    <input type={'text'} name={'title'} onChange={handleChange}/>
                    <button className={'btn btn-small waves-effect waves-light'}>Add task</button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoTask: (newTask) => dispatch(addTodoTask(newTask)),
        addProgressTask: (newTask) => dispatch(addProgressTask(newTask)),
        addDoneTask: (newTask) => dispatch(addDoneTask(newTask))
    }
}

export default connect(null, mapDispatchToProps)(CreateTask)