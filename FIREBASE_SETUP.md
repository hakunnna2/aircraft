# Firebase Integration

## Overview
Firebase is now integrated to store **ONLY** bookmarks and game progress. Aircraft data is loaded from local files for instant performance.

## What's Stored in Firebase

### 1. Bookmarks (BookView.tsx)
**Collection:** `bookmarks`
**Document ID:** User ID (auto-generated and stored in localStorage)

**Data Structure:**
```typescript
{
  bookmarkedId: string | null,  // Current bookmark position
  orderIds: string[],           // Custom reading order
  lastUpdated: number           // Timestamp
}
```

**Features:**
- Saves your current reading position
- Syncs your custom aircraft order
- Automatic fallback to localStorage if Firebase fails

### 2. Game Progress (All Quiz Pages)
**Collection:** `gameProgress`
**Document ID:** User ID (auto-generated and stored in localStorage)

**Data Structure:**
```typescript
{
  quickFire: {
    bestScore: number,
    totalGames: number,
    lastPlayed: number,
    scores: GameScore[]  // Last 10 scores
  },
  quiz: { ... },
  multipleChoice: { ... },
  quickChoice: { ... },
  specsChallenge: { ... }
}
```

**Tracked for each game:**
- Best score
- Total games played
- Last played timestamp
- History of last 10 scores with accuracy percentages

### 3. Favorites (AircraftDetail.tsx)
**Collection:** `favorites`
**Document ID:** User ID (auto-generated and stored in localStorage)

**Data Structure:**
```typescript
{
  favoriteIds: string[],  // Array of favorited aircraft IDs
  lastUpdated: number     // Timestamp
}
```

**Features:**
- Save your favorite aircraft
- Love button (❤️) on aircraft detail page
- Heart fills red when favorited
- Persists across sessions in Firebase
- Automatic fallback to localStorage if Firebase fails

**How to Use:**
1. Open any aircraft detail page
2. Click the heart button (❤️) in the sidebar or mobile view
3. Heart turns red and saves to Firebase
4. Close and reopen → favorites persist

## Files Modified

### Core Firebase Files
- `utils/firebase.ts` - Firebase initialization
- `utils/bookmarkService.ts` - Bookmark save/load functions
- `utils/gameProgressService.ts` - Game progress tracking
- `utils/favoritesService.ts` - Favorites save/load/toggle functions

### Updated Pages
- `pages/BookView.tsx` - Uses Firebase for bookmarks
- `pages/AircraftDetail.tsx` - Heart button to save/load favorites
- `pages/QuickChoice.tsx` - Saves scores to Firebase

## User ID Management
Each user gets a unique ID stored in localStorage:
```
userId: user_[timestamp]_[random]
```

This allows progress tracking without requiring authentication. Users can later migrate to Firebase Auth if needed.

## Error Handling
All Firebase operations include fallback to localStorage if:
- Firebase is unavailable
- Network is down
- Rate limits are reached

## Future Enhancements
- Add Firebase Authentication for user accounts
- Sync across devices with same login
- Leaderboards for high scores
- Social features (share scores, challenges)
