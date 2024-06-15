import { z } from 'zod';

export const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Id is required.' }).email(),
    password: z.string({ required_error: 'Password is required' }),
  }),
});
