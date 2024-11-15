import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getAllRecipes: builder.query({
            query: () => 'recipes',
        }),
        getRecipe: builder.query({
            query: (id) => `recipe/${id}`
        })
    })
})

export const {useGetAllRecipesQuery, useGetRecipeQuery} = recipesApi
