
import { onSnapshot } from "firebase/firestore";
import { getToFirebase } from "../../../../Data/Services/ApiFirebase/Read/read";
import { getKeys } from "../../../Keys/keys";

export async function getShoppingCar(setProductos){

  const q = await getToFirebase("shoppingCar");
  return onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
          id: x.id,
          listProduct: x.data().listProduct,
      }))
    );
  });
};

export async function getCases(setProductos){

  const q = await getToFirebase(getKeys.BDNameCases);
  return onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
          id: x.id,
          name: x.data().name,
          imageurl: x.data().imageurl,
          description: x.data().description,
      }))
    );
  });
};

export async function getMotherboards(setProductos){

  const q = await getToFirebase(getKeys.BDNameMotherboards);
  return onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
          id: x.id,
          name: x.data().name,
          imageurl: x.data().imageurl,
          description: x.data().description,
          
      }))
    );
  });
};

export async function getpower(setProductos){

  const q = await getToFirebase(getKeys.BDNamePower);
  return onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
          id: x.id,
          name: x.data().name,
          imageurl: x.data().imageurl,
          description: x.data().description,
      }))
    );
  });
};

export async function getProcessors(setProductos){

  const q = await getToFirebase(getKeys.BDNameProcessors);
  return onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
          id: x.id,
          name: x.data().name,
          imageurl: x.data().imageurl,
          description: x.data().description,
      }))
    );
  });
};

export async function getRam(setProductos){

  const q = await getToFirebase(getKeys.BDNameRam);
  return onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
          id: x.id,
          name: x.data().name,
          imageurl: x.data().imageurl,
          description: x.data().description,
      }))
    );
  });
};

export async function getStorage(setProductos){

  const q = await getToFirebase(getKeys.BDNameStorage);
  return onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
          id: x.id,
          name: x.data().name,
          imageurl: x.data().imageurl,
          description: x.data().description,
      }))
    );
  });
};

export async function getVideo(setProductos){

  const q = await getToFirebase(getKeys.BDNameVideo);
  return onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
          id: x.id,
          name: x.data().name,
          imageurl: x.data().imageurl,
          description: x.data().description,
      }))
    );
  });
};
