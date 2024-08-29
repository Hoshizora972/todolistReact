import { createSlice } from "@reduxjs/toolkit";

// Initialisation du state de mon todo

const initialState = [
    {id: 1 , task: "faire la vaisselle", completed:false , isEditing:true},
    {id: 2 , task: "faire a manger", completed:false , isEditing:false}
]

// Création de mon reducers et de ses actions 

export const todoSlice = createSlice({ 
    name: "todo",
    initialState,
    reducers: {
        addTask: (state,action) => {
            console.log("addTask", action.payload);
        },
        deleteTask: (state,action) => {
            console.log("deleteTask", action.payload);
        },
        completedTask : (state,action) => {
            console.log("completedTask", action.payload);
        },
    }
})

// Action creators

export const {addTask, deleteTask, completedTask} = todoSlice.actions;

export default todoSlice.reducer;