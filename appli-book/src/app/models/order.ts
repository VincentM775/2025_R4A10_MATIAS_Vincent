export type CreateOrder = {
  pizza: string;
  size: 'Medium' | 'Large' | 'XL';
  email: string;
  paymentMethod: 'Cash' | 'Card' | 'Bitcoin';
};

export type Order = CreateOrder & { id: string };
