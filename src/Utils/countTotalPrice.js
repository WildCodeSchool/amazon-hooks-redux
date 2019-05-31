export const countTotalPrice = (articles) => {
  let totalPrice = 0;
  articles.map(article => {
    return totalPrice += article.price;
  })
  return totalPrice.toFixed(2);
}