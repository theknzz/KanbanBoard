import React from 'react'
import styled from 'styled-components'
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 9px;
    display: flex;
    margin-bottom: 8px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.isDragging ? 'lightgreen': 'white'};
`;

const TaskButton = styled.button`
    height: 0%;
    margin-left: 20px;
    height: 30px;
    width: 30px;
    display: flex;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: #9cc5a1;
`

const TaskButtonIcon = styled.i`
    text-align: center;
    vertical-align: center;
`


const Task = (props) => {

    return (
        <>
            <Draggable
                draggableId={props.task.id}
                index={props.index}
            >
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {props.task.content}
                        <TaskButton onClick={props.onClick} className={'waves-effect btn waves-light'}>
                            <TaskButtonIcon className={'material-icons'}>
                                check
                            </TaskButtonIcon>
                        </TaskButton>
                    </Container>
                )}
            </Draggable>
        </>
    );
}

export default Task