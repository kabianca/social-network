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
  deleteDoc,
} from '../../src/lib/exports.js';

import {
  createPost,
  likeRecipe,
  deslikeRecipe,
  deleteRecipe,
  editPost,
} from '../../src/lib/firestore.js';

// import recipe from '../../src/pages/timeline/recipe.js';

// const awaitPromises = () => new Promise(process.nextTick);

jest.mock('../../src/lib/exports.js');

describe('Should be print post on timeline', () => {
  it('Add new data to collection', async () => {
    createPost();
    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledTimes(1);
  });
});

describe('Should be like/deslike only one recipe', () => {
  it('Like a single recipe', async () => {
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
    updateDoc.mockClear();
  });
});

describe('function of delete should been called once', () => {
  it('delete post', async () => {
    deleteRecipe();
    expect(deleteDoc).toHaveBeenCalledTimes(1);
  });
});

describe('function of edit shold been called once', () => {
  it('edit post', async () => {
    editPost();
    expect(updateDoc).toHaveBeenCalledTimes(1);
  });
});
