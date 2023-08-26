import {apiSlice} from "../api/apiSlice.js";
import {AddNewTask, DeleteTodo, EditStatus, EditTask, SetTasks} from "./taskSlice.js";


export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({
                url: "/tasks",
                method: "GET",
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const res = await queryFulfilled;
                    dispatch(SetTasks(res?.data));
                } catch (err) {
                    //do nothing
                    console.log(err);
                }
            },
        }),
        addTask: builder.mutation({
            query: (data) => ({
                url: "/tasks",
                method: "POST",
                body:data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const res = await queryFulfilled;
                    dispatch(AddNewTask(res?.data));
                } catch (err) {
                    //do nothing
                    console.log(err);
                }
            },
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    dispatch(DeleteTodo(arg));
                }catch(err) {
                    console.log(err);
                }
            },
        }),
        editStatus: builder.mutation({
            query: ({id, data}) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    dispatch(EditStatus({id:arg.id, status:arg?.data?.status}));
                }catch(err) {
                    console.log(err);
                }
            },
        }),
        getTask: builder.query({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, arg) => [
                {type: "Task", id:arg}, //Dynamic Tag
            ],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    console.log(err);
                }
            },
        }),
        updateTask: builder.mutation({
            query: ({id, data}) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body:data
            }),
            invalidatesTags: (result, error, arg) => [
                {type: "Task", id:arg.id}, //Dynamic Tag
            ],
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const res = await queryFulfilled;
                    console.log(arg)
                    //alert("Update success");
                    dispatch(EditTask(arg));

                    //dispatch(AddNewTask(res?.data));
                } catch (err) {
                    //do nothing
                    console.log(err);
                }
            },
        }),
    })
})



export const {useGetTasksQuery, useGetTaskQuery, useAddTaskMutation, useDeleteTaskMutation, useEditStatusMutation, useUpdateTaskMutation} = taskApi;
