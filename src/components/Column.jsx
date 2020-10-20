import React, { useState } from 'react'
import styled from 'styled-components'
import Task from './Task.jsx'
import { Droppable } from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import { createTask } from "../store/actions/taskActions";

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: #9CC5A1;
`;

const Title = styled.h3`
    padding: 8px;
    text-align: center;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${ props => props.isDraggingOver ? 'skyblue' : 'white'};
    flex-grow: 1;
`;

const CreateTask = styled.div`
    padding: 8px;
`


const Column = (props) => {

    const [state, setState] = useState({
        columnId: props.column.id,
        task: '',
        title: props.column.title,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitTask(state);
        // console.log(state)
        setState({
            ...state,
            task: ''
        })
    }

    const handleChange = (e) => {
        const name = e.target.value;
        const newState = {
            ...state,
            task: name,
            title: props.column.title,
        }
        setState(newState);
    }

    return (
        <>
            <Container>
                <Title>{ props.column.title }</Title>
                <Droppable
                    droppableId={props.column.id}
                >
                    {(provided,snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {props.tasks && props.tasks.map( (task, index) =>
                                <Task key={task.id} task={task} index={index}/>)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
                <CreateTask>
                    <form onSubmit={handleSubmit}>
                        <input value={state.task} onChange={handleChange} type={'text'}/>
                    </form>
                </CreateTask>
            </Container>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitTask: (task) => dispatch(createTask(task))
    }
}


export default connect(null, mapDispatchToProps)(Column)