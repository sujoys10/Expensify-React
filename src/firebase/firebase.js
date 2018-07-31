import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: "AIzaSyDSCTarjYKYlFBIZvA8anOsY7tW31_wyjI",
    authDomain: "expensify-fd182.firebaseapp.com",
    databaseURL: "https://expensify-fd182.firebaseio.com",
    projectId: "expensify-fd182",
    storageBucket: "expensify-fd182.appspot.com",
    messagingSenderId: "496651390797"
  };

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider, database as default};

/* database.ref().on('child_removed', (snapshot) =>{
  console.log(snapshot.key, snapshot.val());
}); */

//child_changed
//child_added
//child_moved

/* database.ref('expenses').push({
  description: 'paper',
  amount: 25,
  note: 'likhunga',
  createdAt: moment().format('DD MMM')
}); */

/* database.ref('expenses')
   .once('value')
   .then((snapshot) =>{
       const expenses = [];
       snapshot.forEach((childSnapshot) => {
         expenses.push({
           id: childSnapshot.key,
           ...childSnapshot.val()
         });
       });
       console.log(expenses);
   }); */

/* database.ref('expenses')
    .on('value', (snapshot) =>{
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot
        });
      });
      console.log(expenses);
    })   
 */
/* database.ref('expenses').push({
  description: 'pen',
  amount: 7,
  note: '',
  createdAt: moment().format('DD MMM')
}); */


/* database.ref().on('value', (snapshot) =>{
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title}`);
}); */

/* database.ref().set({
        name: 'Sujoy Saha',
        age: 21,
        stressLevel: 6,
        job:{
          title: 'Software developer',
           company: 'Google'
        }
}).then(() =>{
  console.log("data successfully saved");
}).catch((error) =>{
  console.log(error);
});



 database.ref('age').remove()
   .then(() =>{
     console.log("deleted");
   }).catch((error) =>{
     console.log('d' + error);
   });
 
   database.ref().update({
     stressLevel: 9,
     'job/company': 'Amazon'
   }); */

