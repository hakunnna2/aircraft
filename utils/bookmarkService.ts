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
    console.error('Error saving bookmark:', error);
    // Fallback to localStorage
    localStorage.setItem('bookview-bookmark', bookmarkedId || '');
    localStorage.setItem('bookview-order', JSON.stringify(orderIds));
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
    
    // Try to load from localStorage as fallback
    const bookmarkedId = localStorage.getItem('bookview-bookmark');
    const orderIds = JSON.parse(localStorage.getItem('bookview-order') || '[]');
    
    if (bookmarkedId || orderIds.length > 0) {
      return {
        bookmarkedId,
        orderIds,
        lastUpdated: Date.now()
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error loading bookmark:', error);
    // Fallback to localStorage
    const bookmarkedId = localStorage.getItem('bookview-bookmark');
    const orderIds = JSON.parse(localStorage.getItem('bookview-order') || '[]');
    
    return {
      bookmarkedId,
      orderIds,
      lastUpdated: Date.now()
    };
  }
};
