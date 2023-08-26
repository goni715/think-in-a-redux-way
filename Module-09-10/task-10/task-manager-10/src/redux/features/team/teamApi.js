import {apiSlice} from "../api/apiSlice.js";


export const teamApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeam: builder.query({
            query: () => ({
                url: "/team",
                method: "GET",
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const res = await queryFulfilled;
                } catch (err) {
                    //do nothing
                    console.log(err);
                }
            },
        }),

    })
})



export const {useGetTeamQuery} = teamApi;
