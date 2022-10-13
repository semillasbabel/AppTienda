import { onSnapshot } from "firebase/firestore";
import { getProducts } from "../../../data/searches/getReportProducts"

export const search = async (setProductos, reportId) => {
  const query = getProducts(reportId);
  const unsuscribe = onSnapshot(query, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
        id: x.id,
        category: x.data().category,
        description: x.data().description,
        imageurl: x.data().imageurl,
        name: x.data().name,
        offert: x.data().offert,
        amount: x.data().amount,
        price: x.data().price,
        quantity: x.data().quantity,
      }))
    );
  });

  return unsuscribe;
};

// export async function search(reportId){
//   const query = getProducts(reportId);
//   return onSnapshot(query, (querySnapshot) => {
//     set(
//       querySnapshot.docs.map((x) => ({
//         id: x.id,
//         category: x.data().category,
//         description: x.data().description,
//         imageurl: x.data().imageurl,
//         name: x.data().name,
//         offert: x.data().offert,
//         amount: x.data().amount,
//         price: x.data().price,
//         quantity: x.data().quantity,
//       }))
//     );
//   });
// }

