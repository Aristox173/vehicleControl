import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

export const eliminarMovimiento = async (id) => {
  await deleteDoc(doc(db, "movimientos", id));
};
