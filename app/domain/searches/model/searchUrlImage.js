import { getDownloadURL, ref} from "firebase/storage"
import { storage } from "../../../data/firebaseConfig/config"

const defaultImage = "https://www.coopaca.com/uploads/no-imagen.png"

export async function searchUriImage(imageName){
    console.log("holaa");
    const reference = ref(storage, `Productos/${imageName}`);
    return getDownloadURL(reference)
    .then((x)=>{return x;})
    .catch(()=>{return defaultImage;})
}