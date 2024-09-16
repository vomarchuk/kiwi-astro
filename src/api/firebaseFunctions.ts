import { collection, getDocs, query } from "firebase/firestore"
import { firestore } from "./firebaseConfig"

export const fetchItems = async<T>(firestoreCollections: string) => {
  try {
    const q = query(collection(firestore, firestoreCollections))
    const querySnapshot = await getDocs(q)
    const allItems: T[] = []
    querySnapshot.forEach((doc) => {
      const item = { ...doc.data() as T, id: doc.id }
      allItems.push(item as T)
      console.log(allItems);

    })
    return allItems

  } catch (error) {
    console.error(`Error fetching ${firestoreCollections}: ${error}`)
    throw error
  }
}