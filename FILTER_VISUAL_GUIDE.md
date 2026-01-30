# Filter & Bibliothèque - Visual Debug Guide

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        App.tsx                                   │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                        ┌──────▼──────┐
                        │  Home.tsx   │
                        │ (Main Page) │
                        └──────┬──────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
   ┌────▼────┐          ┌──────▼──────┐         ┌────▼────┐
   │ Navbar  │          │ Category    │         │ Explore │
   │ (Search)│          │ Cards (10)  │         │ Section │
   └─────────┘          └─────────────┘         └────┬────┘
                                                     │
                          ┌──────────────────────────┼──────────────────┐
                          │                          │                  │
                     ┌────▼─────┐            ┌──────▼──────┐    ┌──────▼────┐
                     │FilterPanel│            │Bibliothèque │    │No Results │
                     │ (Filters) │            │  (Library)  │    │  Message  │
                     └───────────┘            └──────┬──────┘    └───────────┘
                                                     │
                                            ┌────────▼─────────┐
                                            │ AircraftCard     │
                                            │ Grid (630 cards) │
                                            └──────────────────┘
```

## Filter State Update Flow

```
User Interaction
        │
        ├─ Click Category Card → setSelectedCategory()
        ├─ Click Engine Button  → setSelectedEngine()
        ├─ Select Country       → setSelectedCountry()
        ├─ Click Engine Count   → setSelectedEnginesCount()
        ├─ Select Sort          → setSortBy()
        └─ Type Search          → (from Navbar)
        │
        ▼
Home.tsx State Update
        │
        ├─ selectedCategory: AircraftCategory | 'All'
        ├─ selectedEngine: EngineType | 'All'
        ├─ selectedCountry: string
        ├─ selectedEnginesCount: number | 'All'
        ├─ sortBy: 'name' | 'manufacturer'
        └─ searchQuery: string
        │
        ▼
useMemo() Triggers
        │
        ├─ Filter array: AIRCRAFT_DATA
        ├─ Apply Search Filter AND
        ├─ Apply Category Filter AND
        ├─ Apply Engine Type Filter AND
        ├─ Apply Country Filter AND
        ├─ Apply Engines Count Filter
        │
        ▼
Sort Results
        │
        ├─ By Name (A→Z) OR
        └─ By Manufacturer (A→Z)
        │
        ▼
filteredAircraft = [matched & sorted aircraft]
        │
        ├──────────────────────────────┬────────────────────────┐
        │                              │                        │
        ▼                              ▼                        ▼
    Bibliothèque            AircraftCard Grid         No Results?
    Count Badge          (shows filtered results)    (if count = 0)
    (filteredAircraft         (maps each card)        (shows message)
     .length)
```

## Filter Dependency Chain

```
Filter Change Event
        │
        ├─ searchQuery changed
        ├─ selectedCategory changed
        ├─ selectedEngine changed ◄─── ENGINE TYPE (JUST FIXED)
        ├─ selectedCountry changed
        ├─ selectedEnginesCount changed
        └─ sortBy changed
        │
        ▼
useMemo Dependency Array Triggers Re-calculation:
        │
        [searchQuery, selectedCategory, selectedEngine, 
         selectedCountry, selectedEnginesCount, sortBy]
        │
        ▼
filteredAircraft Recalculated
        │
        ▼
Components Re-render:
        ├─ Bibliothèque count updates ✅
        ├─ AircraftCard Grid updates ✅
        ├─ FilterPanel buttons highlight ✅
        └─ No results message shows/hides ✅
```

## Filter Logic (AND Operation)

```
Selection:
├─ Category: "Combat Aircraft" (104 aircraft)
├─ Engine: "Jet" (222 aircraft)
└─ Country: "États-Unis" (multiple countries)

Logic Applied:
    category === 'Combat Aircraft' 
    AND engineType === 'Jet'
    AND country === 'États-Unis'

Result:
    Only show aircraft that match ALL THREE conditions
    Count = 104 ∩ 222 ∩ (US aircraft in Combat+Jet)
    Result < 104 and < 222 (the intersection)
```

## Component Props Flow

```
Home.tsx
    │
    ├─ Props to FilterPanel:
    │  ├─ selectedCategory + setSelectedCategory
    │  ├─ selectedEngine + setSelectedEngine
    │  ├─ selectedCountry + setSelectedCountry
    │  ├─ selectedEnginesCount + setSelectedEnginesCount
    │  ├─ sortBy + setSortBy
    │  └─ onReset = resetFilters
    │
    └─ Props to AircraftCard (Grid):
       └─ aircraft from filteredAircraft array
```

## Database Structure

```
AIRCRAFT_DATA Array (630 items)
    │
    ├─ Aircraft Object
    │  ├─ id: string
    │  ├─ name: string
    │  ├─ category: AircraftCategory ◄─ 10 categories
    │  ├─ engineType: EngineType ◄─ 6+ engine types
    │  ├─ country: string ◄─ 50+ countries
    │  ├─ enginesCount: number ◄─ 1, 2, 3, 4+
    │  └─ ... other properties
    │
    └─ Repeat 630 times

Categories (10):
├─ Civil Jet Airliners (39)
├─ Combat Aircraft (104)
├─ Combat Support Aircraft (64)
├─ Combat Training Aircraft (24)
├─ Civil Turboprop Airliners (29)
├─ Civil Utility (30)
├─ Helicopters (140)
├─ Private Executive Aircraft (68)
├─ Private Light Aircraft (130)
└─ UAVs (2)

Engine Types (6):
├─ Jet (222)
├─ Turboprop (104)
├─ Piston (164)
├─ Radial (8)
├─ Propfan (1)
└─ Ducted Fan (1)
```

## Testing Checklist

```
Filter Application:
  ☐ Category filter works
  ☐ Engine type filter works ◄─── FIXED
  ☐ Country filter works
  ☐ Engines count filter works
  ☐ Sort by name works
  ☐ Sort by manufacturer works

Bibliothèque Updates:
  ☐ Count badge updates on filter change
  ☐ Aircraft grid updates on filter change
  ☐ Card count matches displayed cards
  ☐ No results message shows when count = 0

Combined Filters:
  ☐ Multiple filters use AND logic
  ☐ Count reflects intersection
  ☐ Display matches filters

Reset:
  ☐ Reset button clears all filters
  ☐ Count returns to 630
  ☐ All buttons deselected

Search:
  ☐ Search + filter work together
  ☐ Uses AND logic (both must match)

Mobile:
  ☐ Category buttons appear on mobile
  ☐ Filter buttons responsive
  ☐ Bibliothèque shows correctly
```

## Performance Metrics

```
Component Renders:
├─ Home.tsx: Re-renders only when filter state changes ✅
├─ FilterPanel: Re-renders when props change ✅
├─ AircraftCard: Re-renders only when item changes ✅
└─ Memoization: useMemo prevents unnecessary calculations ✅

Memory Usage:
├─ AIRCRAFT_DATA: Loaded once (630 items)
├─ filteredAircraft: Recalculated only on filter change
├─ No duplicate data copies
└─ Efficient rendering with React.memo on cards
```

---

**Key Insight**: The Bibliothèque count badge and aircraft grid are both derived from the same `filteredAircraft` array, so they always stay in sync! ✅
