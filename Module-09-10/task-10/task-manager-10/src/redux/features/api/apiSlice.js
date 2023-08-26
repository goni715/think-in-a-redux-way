import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:9000",
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: ["Task"], //TagS WhiteLists
    endpoints: (builder) => ({}),
})


