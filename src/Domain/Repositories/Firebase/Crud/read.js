
import { onSnapshot } from "firebase/firestore";
import { getToFirebase } from "../../../../Data/Services/ApiFirebase/Read/read";
import { getKeys } from "../../../Keys/keys";

export async function getCases(setProductos){

  const q = await getToFirebase(getKeys.BDNameCases);
  return onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
          id: x.id,
          name: x.data().name,
          imageurl: x.data().imageurl,
          size: x.data().size,
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
          platform: x.data().platform,
          socket: x.data().socket
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
          power: x.data().power,
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
          core: x.data().core,
          frecuency: x.data().frecuency,
          threads: x.data().threads,
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
          capacity: x.data().capacity,
          speed: x.data().speed,
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
          capacity: x.data().capacity,
          speed: x.data().speed,
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
          gpu: x.data().gpu,
          memory: x.data().memory,
          producer: x.data().producer,
      }))
    );
  });
};
