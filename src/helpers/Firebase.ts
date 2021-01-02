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

    isInitialized() {
        return this.auth.onAuthStateChanged()
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

    getAllOrders() {
        let ordersList: any = [];
        this.firestore.collection("/orders")
            .onSnapshot((snapshot: any) => {
                const listItems = snapshot.docs.map((doc: any) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            });
        console.log('----orders', ordersList);
    }

    async generateUserDocument(user: any) {
        if (!user) return;
        console.log('---user', user);
        const userRef = this.firestore.doc(`users/${user.uid}`);
        console.log('---->', userRef);
        const snapshot = await userRef.get();
        console.log('---snapshoot', snapshot.exists)
        if (!snapshot.exists) {
            const { email, name, phone } = user;
            console.log('---user details', email, name, phone);
            // try {
            //     await userRef.set({
            //         name,
            //         email,
            //         phone
            //     })
            // } catch (error) {
            //     console.error("Error creating user document", error);
            // }
        }
        return this.getUserDocument(user.uid);
    }
}

export default new Firebase();
