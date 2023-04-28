import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getFirestore,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {addLightBox} from './main.js'

const firebaseConfig = {
  apiKey: "AIzaSyB6jgXH1iR2LAJiMDx7j2EnU2JXVdLgFE4",
  authDomain: "oliverlico.firebaseapp.com",
  projectId: "oliverlico",
  storageBucket: "oliverlico.appspot.com",
  messagingSenderId: "175407850508",
  appId: "1:175407850508:web:48115b6c0883bb2d86ba29",
  measurementId: "G-WNVYCP1F12",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

async function getDocument(){
  var ref = doc(db,"Artwork","artworks");
  const docSnap = await getDoc(ref);
  let items = docSnap.data().artworkcollection;

  const gallery = document.querySelector(".gallery");

  items.forEach((artwork,index)=>{
    const item = document.createElement('div');
    item.classList.add("item");
    item.title = "Click to view!";

    const itemImage = document.createElement("img");
    itemImage.src = artwork;
    itemImage.alt = `Artwork ${index}`;

    addLightBox(item);

    item.appendChild(itemImage);
    gallery.appendChild(item);
  });

  const masonry = new Masonry(gallery, {
    itemSelector: '.item',
    gutter: 5,
    // // originLeft: false,
    // originTop: true,
    itemSelector: ".item",
    columnWidth: ".item",
    percentPosition: true,
  });
  
  imagesLoaded(gallery).on('progress', function() {
    masonry.layout();
  });
}

export default getDocument;