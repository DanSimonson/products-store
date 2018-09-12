import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";
import { firebaseMutations } from "vuexfire";
import { firebaseAction } from "vuexfire";

Vue.use(Vuex);

export default new Vuex.Store({
  //mutations: { ...firebaseMutations },
  state: {
    /*forSale: [
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
    ]*/
    forSale: [],
    shoppingCart: []
  },
  getters: {
    forSale: state => state.forSale,
    shoppingCart: state => state.shoppingCart
  },
  mutations: {
    ...firebaseMutations,

    addingToCart(state, invId) {
      state.shoppingCart.push(invId);
    },
    removingFromCart(state, index) {
      state.shoppingCart.splice(index, 1);
    },
    createProduct(state, payload) {
      console.log(payload);
      const randomNumber = Math.floor(Math.random() * 500);
      /*for (var i = 0; i < state.forSale.length; i++) {
        if (randomNumber !== state.forsale[i].invId) {
          payload.invId = randomNumber;
          break;
        }
      }*/
      state.forSale.forEach(product => {
        //product.price -= payload
        if (randomNumber !== product.invId) {
          payload.invId = randomNumber;
        } else {
          //randomNumber already used-- try again
          payload.invId = Math.floor(Math.random() * 500);
        }
      });
      //payload.invId = randomNumber;
      state.forSale.push(payload);
    }
  },
  actions: {
    addToCart(context, invId) {
      context.commit("addingToCart", invId);
    },
    removeFromCart(context, index) {
      context.commit("removingFromCart", index);
    },
    createProduct({ commit }, payload) {
      const product = {
        name: payload.name,
        image: payload.image,
        price: payload.price
      };
      //next reach out to firebase, get id, store values
      firebase
        .database()
        .ref("products")
        .push(product)
        .then(data => {
          //console.log(data);
          const key = data.key;
          commit("createProduct", {
            ...product,
            id: key
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    setProductsRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
      bindFirebaseRef("forSale", ref);
    })
  }
});
