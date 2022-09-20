import {
  loginUserEmail,
  // signinUserEmail,
  // signinGoogle,
  // statusUser,
  // logout,
} from '../src/lib/auth.js';

describe('should be a function', () => {
  it('firebaseFunctions is a object', () => {
    expect(typeof loginUserEmail).toBe('function');
  });
});
