import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBwswQjqxGI6K4WEBT-pE7iVzpOgrQeKQM",
    authDomain: "expensify-8f52c.firebaseapp.com",
    databaseURL: "https://expensify-8f52c.firebaseio.com",
    projectId: "expensify-8f52c",
    storageBucket: "expensify-8f52c.appspot.com",
    messagingSenderId: "211129831230"
  };
firebase.initializeApp(config);
const database=firebase.database()
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
export{firebase,googleAuthProvider,database as default};

















































// const descriptions=['Rent','Water bill','Gas bil'];
// const amount=[124,300,500];
// const note=['','Some notes',''];
// const createdAt=[24,300,3004];


// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// })
// //child_removed
// //child_changed
// //child_added

// // database.ref('expenses').on('value',(snapshot)=>{
// //     const expenses=[];
// //    snapshot.forEach((childSnapshot)=>{
// //        expenses.push({
// //            id:childSnapshot.key,
// //            ...childSnapshot.val()
// //        })
// //    })
// //    console.log(expenses)
// // })

// // for(let i=0;i<descriptions.length;i++){
// //     database.ref('expenses').push({
// //         descriptions:descriptions[i],
// //         amount:amount[i],
// //         note:note[i],
// //         createdAt:createdAt[i]

    
// //     })
// // }



// //Setup "expenses" with three itmes(description,note,amount,creastedAt)


// // database.ref('notes/-LFbYLu-qQ5i7dKMsgUV').remove()



// // database.ref('notes').push({
// //     title:'Course practice',
// //     body:'React native,Angular,Python'
// // })



// // const firebaseNotes={
// //     notes:{
// //         sakjdlfkjsdf:{
// //             title:'First note !',
// //             body:'This is my note'
// //         },
// //         asdlkjlkjsdf:{
// //             title:'Second note',
// //             body:'This is my second note'
// //         }
// //     }
// // }

// // const notes=[{
// //     id:'12',
// //     body:"This is my note",
// //     title:"First note"
// // },{
// //     id:'761ase',
// //     body:"This is my note",
// //     title:"First note"
// // }]

// // database.ref('notes').set(notes);





// // database.ref().on('value',(snapshot)=>{
// //     console.log(snapshot.val());
// // })





// // database.ref('location')
// // .once('value')
// // .then((snapshot)=>{
// //  const val=snapshot.val();
// //  console.log(val);
// // })
// // .catch((e)=>{
// //     console.log("Error fetching data",e);
// // })



















// // database.ref().set({
// //     name:'Andrei Moiceanu',
// //     age:17,
// //     stressLevel:6,
// //     location:{
// //         city:'Philadelphia',
// //         country:'United States'
// //     },
// //     job:{
// //         title:"Software developer",
// //         company:"Google"
// //     }
    
// // }).then(()=>{
// //     console.log('Data is saved');
// // }).catch((err)=>{
// //   console.log('This failed',err);
// // })
// // // database.ref('age').set(18);
// // // database.ref('location/city').set('Mioveni');


// // database.ref().update({
// //   stressLevel:9,
// //   'job/company':"Amazon",
// //   'location/city':'Seattle'
// // })


// // database.ref('attributes').set({
// //     height:172,
// //     weight:71
// // }).then(()=>{
// //     console.log('Data added')
// // }).catch((err)=>{
// //     console.log('Ceva nu a mers',err)
// // })
// // database.ref().remove().then(()=>{
// //     console.log('A functionat')
// // }).catch((err)=>{
// //   console.log('Eroare',err)
// // })