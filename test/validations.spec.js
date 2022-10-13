import {
  validateLogin,
  validateRegister,
  validatePost,
  errorsFirebase,
} from '../src/validations';

describe('should be a function', () => {
  it('Validate is a function', () => {
    expect(typeof validateLogin).toBe('function');
    expect(typeof validateRegister).toBe('function');
    expect(typeof validatePost).toBe('function');
  });
});

describe('should be a validate input', () => {
  const name = 'acelga';
  const email = '';
  const emailValid = 'teste@teste.com';
  const wrongEmail = 'teste@12teste.net';
  const firebaseWrongEmail = 'auth/invalid-email';
  const password = '123456';
  const passwordRepeat = '123456';
  const inputsLogin = validateLogin(email, password);
  const wrongInputs = validateLogin(wrongEmail, password);
  const errorExpected = 'Preencha o campo de e-mail!';
  const inputsRegister = validateRegister(name, email, password, passwordRepeat);
  const wrongInputsRegister = validateRegister(name, wrongEmail, password, passwordRepeat);
  const validInputsRegister = validateRegister(name, emailValid, password, passwordRepeat);
  const invalidEmail = errorsFirebase(firebaseWrongEmail);
  const invalidEmailMessage = 'Ops, e-mail inserido não é válido!';

  it('there will be login only with the correct inputs', () => {
    expect(inputsLogin).toBe(errorExpected);
    expect(wrongInputs).toBe('');
  });

  it('there will be register only with the correct inputs', () => {
    expect(inputsRegister).toBe(errorExpected);
    expect(wrongInputsRegister).toBe('Insira um e-mail válido (ex: nome@email.com)');
    expect(validInputsRegister).toBe('');
    expect(invalidEmail).toBe(invalidEmailMessage);
  });

  it('the post will be created if there is no error message', () => {
    const title = 'salad';
    const emptyTitle = '';
    const time = '5';
    const ingredients = 'tomato';
    const prepare = 'cut';
    const difficult = 'easy';
    const postValidate = validatePost(title, time, ingredients, prepare, difficult);
    const postValidateError = validatePost(emptyTitle, time, ingredients, prepare, difficult);
    const errorPostMessage = 'Preencha o título da receita!';

    expect(postValidate).toBe('');
    expect(postValidateError).toBe(errorPostMessage);
  });
});
