export const addArticle = article => ({
  type: 'ADD_ARTICLE',
  payload: article
});

export const removeArticle = id => ({
  type: 'REMOVE_ARTICLE',
  payload: id
});