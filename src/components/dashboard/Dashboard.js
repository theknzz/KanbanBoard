import React, { useState } from 'react'
import TaskList from "../tasks/TaskList";
import { connect } from 'react-redux'

const Dashboard = (props) => {

    // const [ todo, setTodo ] = useState([{title: 'make bed'}, {title: 'walk the dog'}]);
    // const [ progress, setProgress ] = useState([{title: 'abc'}, {title: 'cbd'}]);
    // const [ done, setDone ] = useState([{title: 'thc'}, {title: 'weed'}]);
    //
    //
    // const handleTodo = (newTask) => {
    //     setTodo([
    //         ...todo,
    //         {title: newTask.title}
    //     ])
    // }
    //
    // const handleProgress = (newTask) => {
    //     setProgress([
    //         ...progress,
    //         {title: newTask.title}
    //     ])
    // }
    //
    // const handleDone = (newTask) => {
    //     setDone([
    //         ...done,
    //         {title: newTask.title}
    //     ])
    // }

    const { todos, progress, done } = props;
    return (
        <div className="container dashboard">
            <div className="row">
                <div className="col s7 m3 offset-m1">
                    <h5>todo</h5>
                    <TaskList type='t' list={todos}/>
                </div>
                <div className="col s7 m3 offset-m1">
                    <h5>in progress</h5>
                    <TaskList type='p' list={progress}/>
                </div>
                <div className="col s7 m3 offset-m1">
                    <h5>done</h5>
                    <TaskList type='d' list={done}/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state.todos)
    return {
        todos: state.todos,
        progress: state.progress,
        done: state.done,
    }
}

export default connect(mapStateToProps)(Dashboard)