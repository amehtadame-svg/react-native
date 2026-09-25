export interface Item { id: string | number; name: string; description: string; mission: string; category: string; city: string; impact: string; } export type CreateItemPayload = Omit<Item, 'id'>;
