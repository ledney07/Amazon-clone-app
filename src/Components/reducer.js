export const initialState = {
  basket: [],
  user: null,
};
//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product ${action.id}, as it is not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    // Only if items have different id you can code this
    // return {
    //   ...state,
    //    basket: state.basket.filter((item) => item.id !== action.id),
    // }
    default:
      return state;
  }
};

//state of the application
// action is what do you want to do, do you want to add or want del from the basket
