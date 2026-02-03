import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AIRCRAFT_DATA } from '../data/aircraft.ts';
import { Map, MapPin } from 'lucide-react';

const geoUrl = 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson';

const countryNameMap: Record<string, string> = {
  'USA': 'United States of America',
  'Royaume-Uni': 'United Kingdom',
  'Allemagne': 'Germany',
  'Russie': 'Russia',
  'Chine': 'China',
  'Japon': 'Japan',
  'Italie': 'Italy',
  'Canada': 'Canada',
  'Suède': 'Sweden',
  'Pays-Bas': 'Netherlands',
  'Espagne': 'Spain',
  'Suisse': 'Switzerland',
  'Autriche': 'Austria',
  'Brésil': 'Brazil',
  'Argentine': 'Argentina',
  'Australie': 'Australia',
  'Inde': 'India',
  'Israël': 'Israel',
  'Afrique du Sud': 'South Africa',
  'Corée du Sud': 'South Korea',
  'Pologne': 'Poland',
  'République Tchèque': 'Czechia',
  'République tchèque': 'Czechia',
  'Roumanie': 'Romania',
  'Ukraine': 'Ukraine',
  'Yougoslavie': 'Serbia',
  'Indonésie': 'Indonesia',
  'Pakistan': 'Pakistan',
  'Turquie': 'Turkey',
  'Émirats arabes unis': 'United Arab Emirates',
  'USA / Royaume-Uni': 'United States of America',
  'Finlande': 'Finland',
  'Nouvelle-Zélande': 'New Zealand',
  'Chili': 'Chile',
  'Colombie': 'Colombia',
  'Iran': 'Iran',
  'Taïwan': 'Taiwan',
  'Islande': 'Iceland',
  'Belgique': 'Belgium',
  'Danemark': 'Denmark',
  'Hongrie': 'Hungary',
  'Norvège': 'Norway',
  'Bulgarie': 'Bulgaria',
  'Croatie': 'Croatia',
  'Slovénie': 'Slovenia',
  'Bosnie-Herzégovine': 'Bosnia and Herzegovina',
  'Monténégro': 'Montenegro',
  'Macedoine': 'North Macedonia',
  'Serbie': 'Serbia'
};

const countryCodeMap: Record<string, string> = {
  // GeoJSON English names (for map display)
  'United States of America': 'us',
  'United Kingdom': 'gb',
  'Germany': 'de',
  'Russia': 'ru',
  'China': 'cn',
  'Japan': 'jp',
  'Italy': 'it',
  'Canada': 'ca',
  'Sweden': 'se',
  'Netherlands': 'nl',
  'Spain': 'es',
  'Switzerland': 'ch',
  'Austria': 'at',
  'Brazil': 'br',
  'Argentina': 'ar',
  'Australia': 'au',
  'India': 'in',
  'Israel': 'il',
  'South Africa': 'za',
  'South Korea': 'kr',
  'Poland': 'pl',
  'Czechia': 'cz',
  'Romania': 'ro',
  'Ukraine': 'ua',
  'Serbia': 'rs',
  'Indonesia': 'id',
  'Pakistan': 'pk',
  'Turkey': 'tr',
  'United Arab Emirates': 'ae',
  'France': 'fr',
  'New Zealand': 'nz',
  'Chile': 'cl',
  'Colombia': 'co',
  'Iran': 'ir',
  'Finland': 'fi',
  'Iceland': 'is',
  'Belgium': 'be',
  'Denmark': 'dk',
  'Hungary': 'hu',
  'Norway': 'no',
  'Bulgaria': 'bg',
  'Croatia': 'hr',
  'Slovenia': 'si',
  'Bosnia and Herzegovina': 'ba',
  'Montenegro': 'me',
  'North Macedonia': 'mk',
  'Taiwan': 'tw',
  
  // French names (from aircraft data)
  'USA': 'us',
  'Royaume-Uni': 'gb',
  'Allemagne': 'de',
  'Russie': 'ru',
  'Chine': 'cn',
  'Japon': 'jp',
  'Italie': 'it',
  'Suède': 'se',
  'Pays-Bas': 'nl',
  'Espagne': 'es',
  'Suisse': 'ch',
  'Autriche': 'at',
  'Brésil': 'br',
  'Argentine': 'ar',
  'Australie': 'au',
  'Inde': 'in',
  'Israël': 'il',
  'Afrique du Sud': 'za',
  'Corée du Sud': 'kr',
  'Pologne': 'pl',
  'République tchèque': 'cz',
  'Roumanie': 'ro',
  'Yougoslavie': 'rs',
  'Indonésie': 'id',
  'Turquie': 'tr',
  'Émirats arabes unis': 'ae',
  'Nouvelle-Zélande': 'nz',
  'Chili': 'cl',
  'Colombie': 'co',
  'Finlande': 'fi',
  'UK': 'gb',
  'Taïwan': 'tw',
  'Islande': 'is',
  'Belgique': 'be',
  'Danemark': 'dk',
  'Hongrie': 'hu',
  'Norvège': 'no',
  'Bulgarie': 'bg',
  'Croatie': 'hr',
  'Slovénie': 'si',
  'Bosnie-Herzégovine': 'ba',
  'Monténégro': 'me',
  'Macedoine': 'mk',
  'Serbie': 'rs',
  
  // Multi-country (use first country flag)
  'Allemagne / Italie / Espagne / UK': 'de',
  'Allemagne / Italie / UK': 'de',
  'Canada / Europe': 'ca',
  'Chine / Pakistan': 'cn',
  'Espagne / Indonésie': 'es',
  'Europe': 'eu',
  'France / Allemagne': 'fr',
  'France / Italie': 'fr',
  'France / UK': 'fr',
  'Italie / Brésil': 'it',
  'Italie / Finlande': 'it',
  'Italie / UK': 'it',
  'Italie / USA': 'it',
  'Japon / USA': 'jp',
  'Pakistan / Chine': 'pk',
  'Royaume-Uni / USA': 'gb',
  'Russie / Italie': 'ru',
  'Russie / Pologne': 'ru',
  'Ukraine / Russie': 'ua',
  'USA / Royaume-Uni': 'us',
  'USA / UK': 'us',
  'UK/USA': 'gb'
};

const getCountryCode = (selectedCountry: string | null): string | null => {
  if (!selectedCountry) return null;
  // Try direct mapping first (for GeoJSON names like "Russia")
  if (countryCodeMap[selectedCountry]) {
    return countryCodeMap[selectedCountry];
  }
  // Then try French name translation
  const geoName = countryNameMap[selectedCountry];
  if (!geoName) return null;
  return countryCodeMap[geoName] || null;
};

const getFlagUrl = (countryCode: string | null) => {
  if (!countryCode) return null;
  return `https://flagcdn.com/w160/${countryCode}.webp`;
};

type GeoFeature = {
  type: 'Feature';
  properties: { name?: string };
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: number[][][] | number[][][][];
  };
};

type GeoJSON = {
  type: 'FeatureCollection';
  features: GeoFeature[];
};

const MapView: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [geoData, setGeoData] = useState<GeoJSON | null>(null);
  const [geoError, setGeoError] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Dynamically build countries from AIRCRAFT_DATA
  const allCountries = useMemo(() => {
    const countries = new Set<string>();
    AIRCRAFT_DATA.forEach((aircraft) => {
      countries.add(aircraft.country);
    });
    return Array.from(countries).sort();
  }, []);

  const byMapName = useMemo(() => {
    const map: Record<string, { displayName: string; count: number; aircraft: Array<(typeof AIRCRAFT_DATA)[number]> }> = {};

    AIRCRAFT_DATA.forEach((aircraft) => {
      const mapName = countryNameMap[aircraft.country] ?? aircraft.country;
      // Use the mapped GeoJSON name as the key for countries on the map
      if (!map[mapName]) {
        map[mapName] = { displayName: aircraft.country, count: 0, aircraft: [] };
      }
      map[mapName].count += 1;
      map[mapName].aircraft.push(aircraft);
    });

    return map;
  }, []);

  const maxCount = useMemo(() => {
    const counts = Object.values(byMapName).map((c) => c.count);
    return Math.max(1, ...counts);
  }, [byMapName]);

  // Create a map from aircraft country names to data
  const byAircraftCountry = useMemo(() => {
    const map: Record<string, { displayName: string; count: number; aircraft: Array<(typeof AIRCRAFT_DATA)[number]> }> = {};
    AIRCRAFT_DATA.forEach((aircraft) => {
      const countryName = aircraft.country;
      if (!map[countryName]) {
        map[countryName] = { displayName: aircraft.country, count: 0, aircraft: [] };
      }
      map[countryName].count += 1;
      map[countryName].aircraft.push(aircraft);
    });
    return map;
  }, []);

  const getFill = (name: string) => {
    const count = byMapName[name]?.count ?? 0;
    if (!count) return '#CBD5E1';
    const lightness = 70 - Math.round((count / maxCount) * 30);
    return `hsl(45, 95%, ${lightness}%)`;
  };

  // Get selected data from either map name or aircraft country name
  const selectedData = selectedCountry 
    ? (byMapName[selectedCountry] || byAircraftCountry[selectedCountry])
    : null;

  const countriesOnMap = useMemo(() => {
    if (!geoData) return new Set<string>();
    return new Set(geoData.features.map((feature) => feature.properties?.name ?? ''));
  }, [geoData]);

  useEffect(() => {
    let mounted = true;
    fetch(geoUrl)
      .then((res) => res.json())
      .then((data: GeoJSON) => {
        if (mounted) setGeoData(data);
      })
      .catch(() => {
        if (mounted) setGeoError(true);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const width = 1000;
  const height = 500;

  const project = ([lon, lat]: [number, number]) => {
    const x = ((lon + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return [x, y] as const;
  };

  const polygonToPath = (coords: number[][][]) => {
    return coords
      .map((ring) => {
        return ring
          .map(([lon, lat], index) => {
            const [x, y] = project([lon, lat]);
            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
          })
          .join(' ') + ' Z';
      })
      .join(' ');
  };

  const geometryToPath = (geometry: GeoFeature['geometry']) => {
    if (geometry.type === 'Polygon') {
      return polygonToPath(geometry.coordinates as number[][][]);
    }
    if (geometry.type === 'MultiPolygon') {
      return (geometry.coordinates as number[][][][])
        .map((polygon) => polygonToPath(polygon))
        .join(' ');
    }
    return '';
  };

  const getBounds = (geometry: GeoFeature['geometry']) => {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    const pushCoord = (coord: number[]) => {
      const [x, y] = project([coord[0], coord[1]] as [number, number]);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    };

    if (geometry.type === 'Polygon') {
      (geometry.coordinates as number[][][]).forEach((ring) => ring.forEach(pushCoord));
    } else if (geometry.type === 'MultiPolygon') {
      (geometry.coordinates as number[][][][]).forEach((polygon) => polygon.forEach((ring) => ring.forEach(pushCoord)));
    }

    return { minX, minY, maxX, maxY };
  };


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-yellow-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6 text-slate-900">
          <Map size={16} className="mr-2" />
          Map View
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Carte Interactive
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Cliquez sur un pays pour découvrir les aéronefs associés.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
        <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg border border-slate-200 h-fit">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-slate-500">
              {hovered ? (
                <span>
                  <span className="font-semibold text-slate-900">{hovered}</span>
                  {byMapName[hovered] ? ` • ${byMapName[hovered].count} avions` : ''}
                </span>
              ) : (
                'Survolez un pays'
              )}
            </div>
            <div className="flex items-center text-xs text-slate-500">
              <span className="mr-2">0</span>
              <div className="h-2 w-24 rounded-full bg-gradient-to-r from-slate-200 via-yellow-200 to-yellow-400" />
              <span className="ml-2">{maxCount}</span>
            </div>
          </div>

          <div
            className="w-full aspect-[16/9] md:aspect-[16/10] relative rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-b from-[#5fa7e8] via-[#3a86c6] to-[#2b5f8f]"
            onMouseMove={(e) => {
              const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            {geoError && (
              <div className="h-full flex items-center justify-center text-sm text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                Impossible de charger la carte.
              </div>
            )}
            {!geoError && !geoData && (
              <div className="h-full flex items-center justify-center text-sm text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                Chargement de la carte…
              </div>
            )}
            {!geoError && geoData && (
              <svg
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-full"
                role="img"
                aria-label="Carte interactive du monde"
              >
                {geoData.features.map((feature, idx) => {
                  const name = feature.properties?.name ?? `country-${idx}`;
                  const isSelected = selectedCountry === name;
                  const d = geometryToPath(feature.geometry);
                  if (!d) return null;
                  return (
                    <path
                      key={name}
                      d={d}
                      fill={isSelected ? '#FBBF24' : getFill(name)}
                      stroke={isSelected ? '#F59E0B' : '#1F2937'}
                      strokeWidth={isSelected ? 0.9 : 0.4}
                      onMouseEnter={() => {
                        setHovered(name);
                      }}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => {
                        if (byMapName[name]) {
                          setSelectedCountry(name);
                        }
                      }}
                      className="transition-colors cursor-pointer"
                    />
                  );
                })}
              </svg>
            )}

            {hovered && (
              <div
                className="pointer-events-none absolute z-10 rounded-xl bg-white/95 shadow-lg border border-slate-200 px-3 py-2 text-xs text-slate-700"
                style={{ left: mousePos.x + 12, top: mousePos.y + 12 }}
              >
                <div className="font-semibold text-slate-900">{hovered}</div>
                <div className="text-slate-500">
                  {byMapName[hovered] ? `${byMapName[hovered].count} avions` : 'Aucun appareil'}
                </div>
              </div>
            )}
          </div>

          {/* Countries not on map */}
          {(() => {
            const countriesNotOnMap = allCountries.filter((country) => {
              const mappedName = countryNameMap[country] ?? country;
              return !countriesOnMap.has(mappedName);
            });
            return countriesNotOnMap.length > 0 ? (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-600 mb-3">Pays non cartographiés ({countriesNotOnMap.length})</h3>
                <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                  {countriesNotOnMap.map((country) => {
                    const mappedName = countryNameMap[country] ?? country;
                    return (
                      <button
                        key={country}
                        onClick={() => setSelectedCountry(country)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                          selectedCountry === country
                            ? 'bg-yellow-400 text-slate-900'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {country}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null;
          })()}
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 h-fit">
          <div className="flex items-center mb-4 justify-between">
            <div className="flex items-center">
            {selectedCountry && !selectedCountry.includes('/') && getCountryCode(selectedCountry) && (
              <img 
                src={getFlagUrl(getCountryCode(selectedCountry))!} 
                alt={selectedCountry}
                className="w-12 h-8 rounded-lg mr-3 border border-slate-200 object-cover"
              />
            )}
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {selectedData?.displayName ?? selectedCountry ?? 'Sélectionnez un pays'}
              </h2>
              <p className="text-sm text-slate-500">
                {selectedData ? `${selectedData.count} avions` : 'Cliquez sur la carte pour voir les appareils'}
              </p>
            </div>
            </div>
            {selectedCountry && (
              <button
                onClick={() => setSelectedCountry(null)}
                className="text-xs font-semibold text-slate-600 hover:text-yellow-700 bg-slate-100 hover:bg-yellow-50 border border-slate-200 rounded-full px-3 py-1 transition-colors"
              >
                Réinitialiser
              </button>
            )}
          </div>

          {selectedData ? (
            <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
              {selectedData.aircraft.map((aircraft) => (
                <button
                  key={aircraft.id}
                  onClick={() => navigate(`/aircraft/${aircraft.id}`)}
                  className="w-full text-left flex items-center gap-3 p-3 rounded-2xl border border-slate-200 hover:border-yellow-300 hover:shadow-md transition-all bg-slate-50"
                >
                  <div className="w-14 h-10 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                    <img src={aircraft.image} alt={aircraft.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{aircraft.name}</p>
                    <p className="text-xs text-slate-500 truncate">{aircraft.manufacturer}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-sm text-slate-500 bg-slate-50 rounded-2xl p-4 border border-slate-200">
              Aucun pays sélectionné.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapView;
