import { createSlice } from '@reduxjs/toolkit'




export const TodoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos:[{'id':Date.now(),task:'Work on React Redux'}]
  },
  reducers: {
  AddTask:  (state, action) => {
       const addtask={id:Date.now(),task:action.payload.text}
       state.todos.push(addtask)
       },
       RemoveTask: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
      },
       
    EditTask: (state, action) => {
     console.log("Edit Task")
     const  data = state.todos.find(todo => todo.id === action.payload.id);
     console.log(data.task)
     const value=prompt("Edit your value",data.task)
     data.task = value; 
    },
   
  }
})

export const { AddTask, RemoveTask, EditTask} = TodoSlice.actions

export default TodoSlice.reducer