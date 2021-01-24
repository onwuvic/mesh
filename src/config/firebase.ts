import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
    auth: any;
    firestore: any;

    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }

    logIn(email: any, password: any) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logOut() {
        return this.auth.signOut()
    }

    async getUserDocument(user: any) {
        if (!user) return null;
        try {
          const userDocument = await this.firestore.doc(`users/${user.uid}`).get();
          return {
            uid: user.uid,
            ...userDocument.data()
          };
        } catch (error) {
          console.error("Error fetching user", error);
        }
    }

    async getOrderById(id: number | string) {
        const doc = await this.firestore.doc(`orders/${id}`).get();
        if (doc.exists) {
            return {
                ...doc.data()
            };
        } else {
            return null;
        }
    }
}

export default new Firebase();
