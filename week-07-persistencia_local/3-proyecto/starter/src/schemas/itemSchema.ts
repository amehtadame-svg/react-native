import { z } from 'zod';
export const itemSchema = z.object({ title: z.string({ message: 'El nombre es requerido' }).min(1, 'El nombre no puede estar vacío').max(80, 'Máximo 80 caracteres'), body: z.string().max(500, 'Máximo 500 caracteres').optional().or(z.literal('')) });
export type ItemFormData = z.infer<typeof itemSchema>;
