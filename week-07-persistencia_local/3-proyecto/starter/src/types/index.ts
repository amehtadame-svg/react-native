export interface Item { id: number; title: string; body: string; userId: number; category?: string; city?: string; } export interface ItemsWithSource { items: Item[]; source: 'network' | 'cache'; }
