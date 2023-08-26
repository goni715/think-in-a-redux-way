import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    taskList: [],
    tasks:[],
    tags:[]
}


const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        SetTasks: (state, action)=> {
            state.taskList = action.payload;
            state.tasks = action.payload;
        },
        SetTags : (state, action)=> {
            state.tags=action.payload;
        },
        FilterTasks: (state, action)=>{
            if(state.tags.includes(action.payload)){
                const index = state.tags.findIndex(cv => cv=== action.payload);
                state.tags.splice(index, 1);
                let data = [];
                for(let i=0; i < state.tags.length; i++){
                  const result = state.tasks.filter(({project})=>project.projectName === state.tags[i]);
                    data = [...data, ...result]
                }
                state.taskList = data;
            }else{
                state.tags = [action.payload, ...state.tags];
                let data = [];
                for(let i=0; i < state.tags.length; i++){
                    const result = state.tasks.filter(({project})=>project.projectName === state.tags[i]);
                    data = [...data, ...result]
                }
                state.taskList = data;
            }
        },
        AddNewTask: (state, action)=>{
            state.tasks.push(action.payload);
            state.taskList.push(action.payload);
        },
        DeleteTodo: (state, action)=> {
            state.tasks = state.tasks.filter((cv) => cv.id !== action.payload);
            state.taskList = state.taskList.filter((cv) => cv.id !== action.payload);
        },
        EditStatus: (state, action)=>{
            const {id, status} = action.payload;
            const index1 = state.tasks.findIndex(cv => cv.id=== id);
            const index2 = state.taskList.findIndex(cv => cv.id=== id);
            state.tasks[index1].status=status;
            state.taskList[index2].status=status;
        },
        EditTask: (state, action)=> {
            const {id, data} = action.payload;
            const index1 = state.tasks.findIndex(cv => cv.id=== id);
            const index2 = state.taskList.findIndex(cv => cv.id=== id);
            state.tasks[index1].taskName=data?.taskName;
            state.taskList[index2].taskName=data?.taskName;
            state.tasks[index1].deadline=data?.deadline;
            state.taskList[index2].deadline=data?.deadline;
            state.tasks[index1].project.projectName=data?.project.projectName;
            state.taskList[index2].project.projectName=data?.project.projectName;
            state.tasks[index1].project.colorClass=data?.project.colorClass;
            state.taskList[index2].project.colorClass=data?.project.colorClass;
            state.tasks[index1].teamMember.name=data?.teamMember.name;
            state.taskList[index2].teamMember.name=data?.teamMember.name;
        }
    }
})



export const {SetTasks, SetTags, FilterTasks, AddNewTask, DeleteTodo, EditStatus, EditTask} = taskSlice.actions;
const taskSliceReducer = taskSlice.reducer;
export default taskSliceReducer;
