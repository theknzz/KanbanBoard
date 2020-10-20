import React from 'react'
import styled from 'styled-components'
import Task from './Task.jsx'
import { Droppable } from 'react-beautiful-dnd'


const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    padding: 8px;
    text-align: center;
`;
const TaskList = styled.div`
    padding: 8px;
    display: block;
    transition: background-color 0.2s ease;
    background-color: ${ props => props.isDraggingOver ? 'skyblue' : 'white'};
    flex-grow: 1;
    min-height: 100%;
`;

const Column = (props) => {

    return (
        <Container>
            <Title>{ props.column.title}</Title>
            <Droppable
                droppableId={props.column.id}
            >
                {(provided,snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {props.tasks.map( (task, index) => <Task key={task.id} task={task} index={index}/>)}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    );
}

export default Column