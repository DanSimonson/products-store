import Firebase from "firebase";

var config = {
  apiKey: "AIzaSyCI3-_hQnrc-iCvFJJkpZh1OX7kI1Mhluk",
  authDomain: "vue-blog-ed03b.firebaseapp.com",
  databaseURL: "https://vue-blog-ed03b.firebaseio.com",
  projectId: "vue-blog-ed03b",
  storageBucket: "vue-blog-ed03b.appspot.com",
  messagingSenderId: "726358966528"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbProductsRef = db.ref("products");
//export const dbOrdersRef = db.ref('orders')
