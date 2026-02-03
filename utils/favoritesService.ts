import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface FavoritesData {
  favoriteIds: string[];
  lastUpdated: number;
}

const COLLECTION_NAME = 'favorites';
const USER_ID = 'default-user';

export const saveFavorites = async (favoriteIds: string[]): Promise<void> => {
  try {
    const favoritesData: FavoritesData = {
      favoriteIds,
      lastUpdated: Date.now()
    };
    
    await setDoc(doc(db, COLLECTION_NAME, USER_ID), favoritesData);
    console.log('❤️ Favorites saved to Firebase:', favoritesData);
  } catch (error) {
    console.error('Error saving favorites:', error);
    // Fallback to localStorage
    localStorage.setItem('favorites', JSON.stringify(favoriteIds));
  }
};

export const loadFavorites = async (): Promise<string[]> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, USER_ID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log('❤️ Favorites loaded from Firebase:', docSnap.data());
      return (docSnap.data() as FavoritesData).favoriteIds || [];
    }
    
    // Try to load from localStorage as fallback
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }
    
    return [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    // Fallback to localStorage
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  }
};

export const toggleFavorite = async (favoriteIds: string[], aircraftId: string): Promise<string[]> => {
  const isFavorited = favoriteIds.includes(aircraftId);
  const updatedIds = isFavorited
    ? favoriteIds.filter((id) => id !== aircraftId)
    : [...favoriteIds, aircraftId];
  
  await saveFavorites(updatedIds);
  return updatedIds;
};
