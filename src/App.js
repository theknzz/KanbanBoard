import React, { useState, useEffect } from 'react';
import './App.css';
import initialData from "./initial-data";
import Column from './components/Column.jsx'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Navbar from "./components/Navbar";
import { connect } from 'react-redux'
import {updateBoard} from "./store/actions/taskActions";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

function App(props) {

  // const onDragStart = (result) => {
  //   document.body.style.color = 'orange';
  // }
  //
  // const onDragUpdate = (result) => {
  //     document.body.style.color = 'red';
  // }

  const onDragEnd = (result) => {
      // document.body.style.color = 'inherit';
      const { destination, source, draggableId } = result;

      if (!destination) {
          return;
      }

      if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
      ) {
          return;
      }

      const srcColumn = props.cols[source.droppableId];
      const srcTaskList = Array.from(srcColumn.taskIds);

      const destColumn = props.cols[destination.droppableId];
      const destTaskList = Array.from(destColumn.taskIds);

      srcTaskList.splice(source.index, 1);

      if (source.droppableId === destination.droppableId)
        srcTaskList.splice(destination.index, 0, draggableId);

      destTaskList.splice(destination.index, 0, draggableId);

      const newSourceColumn = {
          ...srcColumn,
          taskIds: srcTaskList,
      }

      const newDestColumn = {
          ...destColumn,
          taskIds: destTaskList,
      }


      const board = {
          tasks: props.tasks,
          columnOrder: props.columnOrder,
          columns: {
              ...props.cols,
              [source.droppableId]: newSourceColumn,
              [destination.droppableId]: newDestColumn,
          }
      }

      props.updateBoard(board)
  }

  return (
      <>
          <Navbar />
          <DragDropContext
            onDragEnd={onDragEnd}
            // onDragStart={onDragStart}
            // onDragUpdate={onDragUpdate}
          >
              <Container>
                  {props.columnOrder && props.columnOrder.map( columnId => {
                      const column = props.cols[columnId];
                      const tasks = column.taskIds && column.taskIds.map( taskId => props.tasks[taskId]);
                      console.log('dbg:', column)
                      return <Column key={column.id} column={column} tasks={tasks} />
                  })}
              </Container>
          </DragDropContext>
      </>
  );
}

const mapStateToProps = (state) => {
    return {
        columnOrder: state.columnOrder,
        cols: state.columns,
        tasks: state.tasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBoard: (board) => dispatch(updateBoard(board)),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
