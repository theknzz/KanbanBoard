import React, { useState } from 'react';
import './App.css';
import initialData from "./initial-data";
import Column from './components/Column.jsx'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

function App() {
  const [state, setState] = useState(initialData);

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

      if (!destination) {
          return;
      }

      if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
      ) {
          return;
      }

      const srcColumn = state.columns[source.droppableId];
      const srcTaskList = Array.from(srcColumn.taskIds);

      const destColumn = state.columns[destination.droppableId];
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

      const newState = {
          ...state,
          columns: {
              ...state.columns,
              [source.droppableId]: newSourceColumn,
              [destination.droppableId]: newDestColumn,
          }
      }

      setState(newState)
      console.log('STATE', newState);
  }

  return (
      <DragDropContext
        onDragEnd={onDragEnd}
        // onDragStart={onDragStart}
        // onDragUpdate={onDragUpdate}
      >
          <Container>
              {state.columnOrder.map( columnId => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map( taskId => state.tasks[taskId]);

                return <Column key={column.id} column={column} tasks={tasks} />
              })}
          </Container>
      </DragDropContext>
  );
}

export default App;
