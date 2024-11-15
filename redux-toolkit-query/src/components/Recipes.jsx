import { useGetAllRecipesQuery, useGetRecipeQuery } from "../features/apiSlice"
import Recipe from "./Recipe"

const Recipes = () => {
    const { data, error, isError, isLoading } = useGetAllRecipesQuery()
    // const { data: recipeData } = useGetRecipeQuery('1')
    console.log("data:", data)

    return (
        <div>
            <p>Recipes List</p>
            <div className="recipes">
                {
                    isLoading ? (<p>Loading..</p>) : (
                        data.recipes.map((recipe) => <Recipe recipe={recipe} />)
                    )
                }
            </div>
        </div>
    )
}

export default Recipes