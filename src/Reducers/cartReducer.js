import { getCart } from '../Utils/storageCart';

// REDUCER
const cartReducer = (state = getCart(), action) => {
  switch(action.type) {
    case 'REMOVE_ARTICLE':
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload+ 1)
      ];
    case 'ADD_ARTICLE':
      return [
        ...state, action.payload
      ];
    default:
      return state;
  }
}

export default cartReducer;

/**
 * La fonction cardReducer prend deux params
 *  - le state (valeur par défault)
 *  - l'action entrante
 *  dans le cas ou le type de l'action passer en param est 
 *  - ADD_ARTICLE 
 *    nous remplaçons la valeur du state par ça copie avec l'ajout du
 *    contenu de l'action (le nouvelle article)
 *  - REMOVE_ARTICLE
 *    nous remplaçons la valeur du state par ça copie à l'quel nous avons supprimer 
 *    l'article passer en payload de l'action
 */