import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '../firebaseConfig';

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
