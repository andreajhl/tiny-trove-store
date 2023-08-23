export const calculateAvailableQuantity = (initialQuantity: number, soldQuantity: number) => {
  const unitAvailable = initialQuantity - soldQuantity;

  return unitAvailable > 0 ? unitAvailable : 0;
}

export const normalizeProductList = (productList: any[]) => (
  productList.map(item => ({
    id: item.id,
    title: item.title,
    thumbnail: item.thumbnail,
    price: item.price,
    originalPrice: item.original_price,
    availableQuantity: item.available_quantity,
  }))
);

export const normalizeProduct = (item: any) => ({
  id: item.id,
  title: item.title,
  price: item.price,
  thumbnail: item.thumbnail,
  originalPrice: item.original_price,
  availableQuantity: calculateAvailableQuantity(item.initial_quantity, item.sold_quantity),
  pictures: item.pictures.map((pic: Record<string, string>) => ({ id: pic.id , url: pic.url})),
});
