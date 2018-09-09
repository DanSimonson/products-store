import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      {
        invId: 1,
        name: "Computer Geek Wisdom T-Shirt",
        image:
          "https://res.cloudinary.com/dmglopmul/image/upload/v1536206690/product-store/offOn.jpg",
        price: 599
      },
      {
        invId: 2,
        name: "Web Development Computer Chair",
        image:
          "https://res.cloudinary.com/dmglopmul/image/upload/v1536206688/product-store/computerchair.jpg",
        price: 30099
      },
      {
        invId: 3,
        name: "Mario Brothers Themed Lego Lamp",
        image:
          "https://res.cloudinary.com/dmglopmul/image/upload/v1536206693/product-store/legoLamp.jpg",
        price: 1099
      },
      {
        invId: 4,
        name: "Silicon Chip Tie",
        image:
          "https://res.cloudinary.com/dmglopmul/image/upload/v1536206695/product-store/tie.jpg",
        price: 299
      }
    ],
    shoppingCart: []
  },
  getters: {
    forSale: state => state.forSale,
    shoppingCart: state => state.shoppingCart
  },
  mutations: {
    addingToCart(state, invId) {
      state.shoppingCart.push(invId);
    },
    removingFromCart(state, index) {
      state.shoppingCart.splice(index, 1);
    }
  },
  actions: {
    addToCart(context, invId) {
      context.commit("addingToCart", invId);
    },
    removeFromCart(context, index) {
      context.commit("removingFromCart", index);
    }
  }
});
