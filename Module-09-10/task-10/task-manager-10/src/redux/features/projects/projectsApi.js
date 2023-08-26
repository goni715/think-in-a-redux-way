import {apiSlice} from "../api/apiSlice.js";
import {SetProjects} from "./projectsSlice.js";
import {SetTags} from "../task/taskSlice.js";


export const projectsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => ({
                url: "/projects",
                method: "GET",
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const res = await queryFulfilled;
                    const projects = res?.data;
                    const tags = [];
                    await projects.forEach((element)=>{
                        tags.push(element?.projectName);
                    })
                    dispatch(SetProjects(projects));
                    dispatch(SetTags(tags))
                } catch (err) {
                    //do nothing
                    console.log(err);
                }
            },
        }),

    })
})



export const {useGetProjectsQuery} = projectsApi;
