// import { likeRecipe, deslikeRecipe } from '../../lib/firestore.js';

export function printRecipes(recipes) {
  let templateComplete = '';
  recipes.forEach((recipe) => {
    // let countLikes = recipe.likes.length;
    let countLikes = 2;
    const templateRecipe = document.createElement('div');
    templateRecipe.innerHTML = `
      <div id="user-info">
        <p id="user">${recipe.author} - ${recipe.id}</p>
      </div>
      <div id="message-recipe">
        <h6>${recipe.title}</h6>
        <p>${recipe.difficult}  -  ${recipe.time}</p>
        <h7>Ingredientes:</h7>
        <p>${recipe.ingredients}</p>
        <h7>Modo de Preparo:</h7>
        <p>${recipe.prepare}</p>
      </div>
      `;
    
    templateComplete += templateRecipe;
  });
  console.log(templateComplete);
    return templateComplete;
  }
