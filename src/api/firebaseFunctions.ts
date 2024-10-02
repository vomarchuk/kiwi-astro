import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { firestore } from "./firebaseConfig"

export const fetchItem = async<T>(firestoreCollections: string, itemId: string) => {
  try {
    const itemRef = doc(firestore, firestoreCollections, itemId)
    const itemData = (await getDoc(itemRef)).data() as T
    return itemData
  } catch (error) {
    console.error(`Error fetching  ${firestoreCollections} item : ${error}`)
    throw error
  }
}

export const fetchItems = async<T>(firestoreCollections: string) => {
  try {
    const q = query(collection(firestore, firestoreCollections))
    const querySnapshot = await getDocs(q)
    const allItems: T[] = []
    querySnapshot.forEach((doc) => {
      const item = { ...doc.data() as T, id: doc.id }
      allItems.push(item as T)
    })
    return allItems

  } catch (error) {
    console.error(`Error fetching ${firestoreCollections}: ${error}`)
    throw error
  }
}

export const fetchItemsById = async<T>(firestoreCollections: string, itemId: string | null) => {
  try {
    const q = query(collection(firestore, firestoreCollections), where('categoryId', '==', itemId))
    const querySnapshot = await getDocs(q)
    const allItems: T[] = []
    querySnapshot.forEach((doc) => {
      const item = { ...doc.data() as T, id: doc.id }
      allItems.push(item as T)
    })
    return allItems
  } catch (error) {
    console.error(`Error fetching ${firestoreCollections}: ${error}`)

  }
}