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
      console.log(result)
      const { destination, source, draggableId } = result;

      // if user is trying to drop a draggable out of a droppable
      if (!destination) {
          return;
      }

      // if the user try to move the card into the same position nothing changes
      if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
      ) {
          return;
      }

      // get the column and the tasks from the origin/source column
      const srcColumn = props.cols[source.droppableId];
      const srcTaskList = Array.from(srcColumn.taskIds);

      // get the column and the tasks from the destination column
      const destColumn = props.cols[destination.droppableId];
      const destTaskList = Array.from(destColumn.taskIds);

      // remove the tasks from the original position
      srcTaskList.splice(source.index, 1);

      console.log('track', srcTaskList)

      const inSameColumn = source.droppableId === destination.droppableId;

      if (inSameColumn)
          srcTaskList.splice(destination.index, 0, draggableId);

      // add the tasks at the final position
      destTaskList.splice(destination.index, 0, draggableId);

      // update the source column
      const newSourceColumn = {
          ...srcColumn,
          taskIds: srcTaskList,
      }

      // update the destination column
      const newDestColumn = {
          ...destColumn,
          taskIds: inSameColumn ? srcTaskList : destTaskList,
      }

      // update the board
      const board = {
          tasks: props.tasks,
          columnOrder: props.columnOrder,
          columns: {
              ...props.cols,
              [source.droppableId]: newSourceColumn,
              [destination.droppableId]: newDestColumn,
          }
      }

      // call an action to update the board
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
