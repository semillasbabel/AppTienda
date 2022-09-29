import { onSnapshot } from "firebase/firestore";
import { getToFirebase } from "../../../../Data/Services/ApiFirebase/Read/read";
import { getKeys } from "../../../Keys/keys";

class SearchManager{

  constructor(){this._search = null;}

  set setSearch(search){this._search = search;}

  get getSearch(){return this._search;} 

  doAction(){this._search.doAction();}

}

class SearchOffert {
  doAction(){

  }
}

class SearchCases {
  doAction(){
    
  }
}

class SearchMemoryRam {
  doAction(){
    
  }
}

class SearchMotherboards {
  doAction(){
    
  }
}

class SearchPowerSupply {
  doAction(){
    
  }
}

class SearchProcessors {
  doAction(){
    
  }
}

class SearchStorage {
  doAction(){
    
  }
}

class SearchVideoCards {
  doAction(){
    
  }
}













export async function getOffers(setProductos){

  const q = getToFirebase("offert",true);
  return onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
        id: x.id,
        category: x.data().category,
        description: x.data().description,
        imageurl: x.data().imageurl,
        name: x.data().name,
        offert: x.data().offert,
      }))
    );
  });
};



// export async function getCases(setProductos){

//   const q = await getToFirebase(getKeys.BDNameCases);
//   return onSnapshot(q, (querySnapshot) => {
//     setProductos(
//       querySnapshot.docs.map((x) => ({
//           id: x.id,
//           name: x.data().name,
//           imageurl: x.data().imageurl,
//           description: x.data().description,
//       }))
//     );
//   });
// };

// export async function getMotherboards(setProductos){

//   const q = await getToFirebase(getKeys.BDNameMotherboards);
//   return onSnapshot(q, (querySnapshot) => {
//     setProductos(
//       querySnapshot.docs.map((x) => ({
//           id: x.id,
//           name: x.data().name,
//           imageurl: x.data().imageurl,
//           description: x.data().description,
          
//       }))
//     );
//   });
// };

// export async function getpower(setProductos){

//   const q = await getToFirebase(getKeys.BDNamePower);
//   return onSnapshot(q, (querySnapshot) => {
//     setProductos(
//       querySnapshot.docs.map((x) => ({
//           id: x.id,
//           name: x.data().name,
//           imageurl: x.data().imageurl,
//           description: x.data().description,
//       }))
//     );
//   });
// };

// export async function getProcessors(setProductos){

//   const q = await getToFirebase(getKeys.BDNameProcessors);
//   return onSnapshot(q, (querySnapshot) => {
//     setProductos(
//       querySnapshot.docs.map((x) => ({
//           id: x.id,
//           name: x.data().name,
//           imageurl: x.data().imageurl,
//           description: x.data().description,
//       }))
//     );
//   });
// };

// export async function getRam(setProductos){

//   const q = await getToFirebase(getKeys.BDNameRam);
//   return onSnapshot(q, (querySnapshot) => {
//     setProductos(
//       querySnapshot.docs.map((x) => ({
//           id: x.id,
//           name: x.data().name,
//           imageurl: x.data().imageurl,
//           description: x.data().description,
//       }))
//     );
//   });
// };

// export async function getStorage(setProductos){

//   const q = await getToFirebase(getKeys.BDNameStorage);
//   return onSnapshot(q, (querySnapshot) => {
//     setProductos(
//       querySnapshot.docs.map((x) => ({
//           id: x.id,
//           name: x.data().name,
//           imageurl: x.data().imageurl,
//           description: x.data().description,
//       }))
//     );
//   });
// };

// export async function getVideo(setProductos){

//   const q = await getToFirebase(getKeys.BDNameVideo);
//   return onSnapshot(q, (querySnapshot) => {
//     setProductos(
//       querySnapshot.docs.map((x) => ({
//           id: x.id,
//           name: x.data().name,
//           imageurl: x.data().imageurl,
//           description: x.data().description,
//       }))
//     );
//   });
// };
