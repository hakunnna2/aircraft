import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface BookmarkData {
  bookmarkedId: string | null;
  orderIds: string[];
  lastUpdated: number;
}

const COLLECTION_NAME = 'bookmarks';
const USER_ID = 'default-user'; // Single user ID

export const saveBookmark = async (bookmarkedId: string | null, orderIds: string[]): Promise<void> => {
  try {
    const bookmarkData: BookmarkData = {
      bookmarkedId,
      orderIds,
      lastUpdated: Date.now()
    };
    
    await setDoc(doc(db, COLLECTION_NAME, USER_ID), bookmarkData);
    console.log('✅ Bookmark saved to Firebase:', bookmarkData);
  } catch (error) {
    console.error('❌ Error saving bookmark to Firebase:', error);
  }
};

export const loadBookmark = async (): Promise<BookmarkData | null> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, USER_ID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log('✅ Bookmark loaded from Firebase:', docSnap.data());
      return docSnap.data() as BookmarkData;
    }
    
    return null;
  } catch (error) {
    console.error('❌ Error loading bookmark from Firebase:', error);
    return null;
  }
};
