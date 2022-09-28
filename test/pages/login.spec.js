/**
 * @jest-environment jsdom
 */

import { login } from '../../src/pages/login/login.js';
import { signinGoogle } from '../../src/lib/auth.js';
import { redirect } from '../../src/redirect.js';

jest.mock('../../src/lib/auth.js');
jest.mock('../../src/lib/exports.js');
jest.mock('../../src/redirect.js');

const esperaPromisesRodarem = () => new Promise(process.nextTick);

describe('function should redirect user', () => {
  it('login using google redirect to timeline', async () => {
    signinGoogle.mockResolvedValue();

    const container = login();

    const btnGoogle = container.querySelector('#btn-google');
    btnGoogle.click();

    await esperaPromisesRodarem();

    expect(signinGoogle).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith('#timeline');
  });
});

// Para usar na função email e senha se quiser
// const inputEmail = container.querySelector('#email');
// const email = 'abobrinha@frita.com';
// inputEmail.value = email;

// const inputPassword = container.querySelector('#password');
// const password = 'abobrinha123';
// inputPassword.value = password;
