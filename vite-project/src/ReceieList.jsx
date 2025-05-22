import { recipes } from './data.js';

function Receipe({name, ingredients})
{
    return (
        <div>
          <h2>{name}</h2>
          <ul>
            {ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>

    )
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Receipe key={recipe.id} name={recipe.name} ingredients={recipe.ingredients} />
      )}
    </div>
  );
}
