 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
    
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAi4c25ccxyd2oMAPA1QSUSO9fvI7anLNc",
   authDomain: "pongalong-2a3e5.firebaseapp.com",
   databaseURL: "https://pongalong-2a3e5-default-rtdb.firebaseio.com",
   projectId: "pongalong-2a3e5",
   storageBucket: "pongalong-2a3e5.appspot.com",
   messagingSenderId: "766662733653",
   appId: "1:766662733653:web:a4b195f9f1e9c0e5a109dc"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
import { 
    getFirestore, doc, getDoc,getDocs, setDoc, collection, addDoc, updateDoc, 
    deleteDoc, deleteField, serverTimestamp, onSnapshot, query, orderBy, limit, where} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

    const db = getFirestore();



    loadMessages()
   getLatestItem ()

   






//--------------- References ------------------------

var namebox = document.getElementById("namen1"); 
var boxnumber = document.getElementById("namen2");

var buttonTest = document.getElementById("button1");
buttonTest.addEventListener('click', insertData);
buttonTest.addEventListener('click', buttonReset);

var buttonTest2 = document.getElementById("button2");
buttonTest2.addEventListener('click', deleteDocument);

var thingsRef;
var unsubscribe;


//--------------- Insert Data ------------------------

async function insertData(){

thingsRef = collection(db,"Reihenfolge")

const docRef = await addDoc(
thingsRef, {
    Name: namebox.value,
    Number: boxnumber.value,
    timestamp: serverTimestamp()
    
}

)
//location.reload()

}






/* ----------------- Get function -----------------
async function getData(){


const docSnap = await getDocs(collection(db, "Reihenfolge"));

docSnap.forEach((doc)=> {
    console.log(`${doc.id} => ${doc.data().Name} => ${doc.data().Number}`);
})






}
*/

var documentId
var text
var name1 = document.createElement("ul");

// Loads chat messages history and listens for upcoming ones.
async function loadMessages() {
  
const q = query(collection(db, "Reihenfolge"), orderBy('timestamp', 'asc'));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
const cities = [];
querySnapshot.forEach((doc) => {
  cities.push("-" + doc.data().Name + " / " + doc.data().Number);
   
});



var platzhalter = cities.join(", ")
  var name2 = platzhalter.replace(/-/g,"<li>");
    name1.innerHTML = name2.replace(/,/g,"</li>") ;
  
  document.getElementById("li").appendChild(name1);
});


}



function getLatestItem (){
  
const recentMessagesQuery = query(collection(getFirestore(), 'Reihenfolge'), orderBy('timestamp', 'asc'),limit(1));
onSnapshot(recentMessagesQuery, function(snapshot) {
snapshot.docChanges().forEach(function(change) {

    

    documentId = change.doc.id

  

 


//console.log(documentId)

});
});
}




async function deleteDocument(){
  
var docRef = doc(db, "Reihenfolge", documentId)

await deleteDoc(docRef)


//location.reload()
}





function buttonReset(){

document.getElementById("namen1").value='';
document.getElementById("namen2").value='';


}


