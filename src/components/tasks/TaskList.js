import React from 'react'
import TaskSummary from "./TaskSummary";
import CreateTask from "./CreateTask";
import { connect } from 'react-redux'

const TaskList = (props) => {
    const { list } = props;
    const content = list && list.map( item => {
       return (
           <div key={item.id}>
               <TaskSummary title={item.title}/>
           </div>
       )
    });

    return (
        <div className="section">
            {content}
            <CreateTask type={props.type} onClick={props.onClick}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(TaskList)