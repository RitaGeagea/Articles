//http
import React from 'react';
import { login } from '../http';

test('login withe right crendentials', async () => {
    const token = await login('candidate','P@ssw0rd');
    expect(token).toBeDefined();
  });
 