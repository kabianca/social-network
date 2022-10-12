import {
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from '../src/lib/exports.js';

import {
  createPost,
  likePost,
  deslikePost,
  deletePost,
  editPost,
} from '../src/lib/firestore.js';

jest.mock('../src/lib/exports.js');

describe('Should be create a post on database', () => {
  it('Add new data to collection', async () => {
    const post = {
      title: 'salad',
      time: '5',
      difficult: 'easy',
      ingredients: 'onion, tomato',
      prepare: 'cut and mix the ingredients',
    };

    const now = Date.now;
    Date.now = function date() {
      return 1523456745362;
    };

    await createPost(post);

    Date.now = now;

    expect(addDoc).toHaveBeenCalledTimes(1);
  });
});

describe('Should be like/deslike only one recipe', () => {
  beforeEach(() => {
    doc.mockClear();
  });
  it('Like a single recipe', async () => {
    likePost();
    expect(doc).toHaveBeenCalledTimes(1);
  });

  it('Deslike a single recipe', () => {
    deslikePost();
    expect(doc).toHaveBeenCalledTimes(1);
  });
});

describe('function of delete/edit should been called once', () => {
  beforeEach(() => {
    updateDoc.mockClear();
  });

  it('delete post', async () => {
    deletePost();
    expect(deleteDoc).toHaveBeenCalledTimes(1);
  });

  it('edit post', async () => {
    editPost();
    expect(updateDoc).toHaveBeenCalledTimes(1);
  });
});
