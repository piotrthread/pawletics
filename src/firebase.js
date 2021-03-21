import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8P7RD2qIk--RHuZAjPKG18qIfRHc63aw",
  authDomain: "training-calendar-877ba.firebaseapp.com",
  projectId: "training-calendar-877ba",
};

export const auth = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
