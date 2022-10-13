import { storage } from "../../firebaseConfig/config"
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { database } from "../../firebaseConfig/config";

export async function createProductServiceData (data) {
  let image = data.image;
  const response = await fetch(image.uri)
  const blob = await response.blob();
  const filename = image.uri.substring(image.uri.lastIndexOf("/")+1);

  const storageRef = ref(storage,`Productos/${filename}`);

  return uploadBytes(storageRef, blob)
  .then(async (snapshot) => {
    const reference = ref(storage, `Productos/${filename}`);
    let imageurl = await getDownloadURL(reference)
    .then((x)=>{return x;})
    .catch((e)=>{console.log(e);})

    await addDoc (collection(database, "product"),{
      amount: data.amount,
      category: data.category,
      description: data.description,
      imageurl: imageurl,
      name: data.name,
      offert: data.offert,
      price: data.price,
      quantity: 0,
    })
    return true

  })
  .catch((e)=>{
    console.log(e);
    return false
  });

}