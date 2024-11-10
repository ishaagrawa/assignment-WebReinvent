import { login } from '../services/apiService';

test('login function works correctly', async () => {
  const data = await login('eve.holt@reqres.in', 'cityslicka');
  expect(data).toHaveProperty('token');
});
