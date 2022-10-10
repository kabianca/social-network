/**
 * @jest-environment jsdom
 */
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from '../../src/lib/exports.js';

import {
  createPost,
  likeRecipe,
  deslikeRecipe,
} from '../../src/lib/firestore.js';

import recipe from '../../src/pages/timeline/recipe.js';

// const awaitPromises = () => new Promise(process.nextTick);

jest.mock('../../src/lib/exports.js');

describe('Should be print post on timeline', () => {
  const modal = recipe();
  // const btnPublish = modal.querySelector('#btn-publish');
  const titleInput = modal.querySelector('#inputTitle');
  const inputTime = modal.querySelector('#inputTime');
  const inputDifficult = modal.querySelector('#inputDifficult');
  const ingredientsInput = modal.querySelector('#inputIngredients');
  const prepareInput = modal.querySelector('#inputPrepare');

  titleInput.value = 'salad';
  inputTime.value = '5';
  inputDifficult.value = 'easy';
  ingredientsInput.value = 'onion, tomato';
  prepareInput.value = 'cut and mix the ingredients';

  // const user = {
  //   displayName: 'Acelga',
  //   uid: '34iEW7ldSKatNMNs4Z7YIoQXQGJ2',
  // };

  it('Add new data to collection', async () => {
    createPost();
    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledTimes(1);
    // expect(createPost).toMatchObject([{
    //   title: 'salad',
    //   time: '5',
    //   difficult: 'easy',
    //   ingredients: 'onion, tomato',
    //   prepare: 'cut and mix the ingredients',
    //   date: new Date(),
    //   author: user.displayName,
    //   userUid: user.uid,
    //   likes: [],
    // }]);
  });
});

describe('Should be like/deslike only one recipe', () => {
  it('Like a single recipe', async () => {
    //     const container = await timeline();
    //     const sectionPosts = container.querySelector('#timeline-post');
    //     const page = printTimeline(printPostagem(), sectionPosts, user.uid);
    //     const btnLike = page.querySelector('.btn-like');
    //     const countLikes = mockRecipes[0].data.likes.length;

    //     likeRecipe.mockResolvedValueOnce();
    //     btnLike.click();

    //     await awaitPromises();

    //     const expected = 1;
    likeRecipe();
    expect(doc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(arrayUnion).toHaveBeenCalledTimes(1);
    doc.mockClear();
    updateDoc.mockClear();
    arrayUnion.mockClear();
  });

  it('Deslike a single recipe', () => {
    deslikeRecipe();
    expect(doc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(arrayRemove).toHaveBeenCalledTimes(1);
  });
});
