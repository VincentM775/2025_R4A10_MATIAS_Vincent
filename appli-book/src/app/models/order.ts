export type CreateOrder = {
  pizza: string;
  size: 'Medium' | 'Large' | 'XL';
  email: string;
  paymentMethod: 'Espèces' | 'Carte bancaire' | 'Bitcoin'| 'PayPal' | 'ApplePay' | 'GooglePay' | 'AmazonPay';
};

export type Order = CreateOrder & { id: string };
