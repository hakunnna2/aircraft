
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AIRCRAFT_DATA } from '../data/aircraft.ts';
import { 
  ChevronLeft, 
  MapPin, 
  Settings, 
  Eye, 
  Maximize, 
  Activity, 
  Wind, 
  ArrowUpRight,
  Heart,
  Search
} from 'lucide-react';

const AircraftDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const aircraft = AIRCRAFT_DATA.find((a) => a.id === id);
  const [heroImageError, setHeroImageError] = useState(false);

  // Get related aircraft (same category or manufacturer, excluding current)
  const relatedAircraft = AIRCRAFT_DATA
    .filter(a => 
      a.id !== id && 
      (a.category === aircraft?.category || a.manufacturer === aircraft?.manufacturer)
    )
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  // Country code mapping for flags
  const countryCodeMap: Record<string, string> = {
    'USA': 'us',
    'France': 'fr',
    'Royaume-Uni': 'gb',
    'Allemagne': 'de',
    'Russie': 'ru',
    'Chine': 'cn',
    'Japon': 'jp',
    'Italie': 'it',
    'Canada': 'ca',
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
    'Ukraine': 'ua',
    'Yougoslavie': 'rs',
    'Indonésie': 'id',
    'Pakistan': 'pk',
    'Turquie': 'tr',
    'Émirats arabes unis': 'ae',
    'Taiwan': 'tw',
    'Taïwan': 'tw',
    'Chili': 'cl',
    'Nouvelle-Zélande': 'nz',
    'Iran': 'ir',
    'Finlande': 'fi',
    'UK': 'gb',
    // Multi-country entries (using first country's flag)
    'USA / Royaume-Uni': 'us',
    'USA / UK': 'us',
    'UK/USA': 'gb',
    'Royaume-Uni / USA': 'gb',
    'France / Allemagne': 'fr',
    'France / UK': 'fr',
    'France / Italie': 'fr',
    'Allemagne / Italie / UK': 'de',
    'Allemagne / Italie / Espagne / UK': 'de',
    'Italie / Brésil': 'it',
    'Italie / Finlande': 'it',
    'Italie / UK': 'it',
    'Italie / USA': 'it',
    'Chine / Pakistan': 'cn',
    'Pakistan / Chine': 'pk',
    'Japon / USA': 'jp',
    'Russie / Italie': 'ru',
    'Russie / Pologne': 'ru',
    'Ukraine / Russie': 'ua',
    'Espagne / Indonésie': 'es',
    'Canada / Europe': 'ca',
    'Europe': 'eu'
  };

  // Engine type descriptions
  const engineDescriptions: Record<string, string> = {
    'Jet': 'Moteurs à réaction utilisant un compresseur et une chambre de combustion pour créer une poussée. Utilisés pour les avions de combat et les gros porteurs civils.',
    'Turboprop': 'Combinaison d\'une turbine et d\'une hélice. Plus efficace que les réacteurs à basse vitesse, utilisé pour les avions régionaux et de transport.',
    'Piston': 'Moteurs à pistons classiques alimentant une hélice. Utilisés pour les petits avions de loisir et les avions légers.',
    'Propfan': 'Turbine haute vitesse entrainant une hélice non carénée. Combinaison d\'efficacité du turbopropulseur et vitesse du réacteur.',
    'Radial': 'Ancien type de moteur à pistons avec cylindres arrangés en cercle. Historiquement utilisé sur les anciens avions militaires et civils.',
    'Ducted Fan': 'Ventilateur enfermé dans une conduite. Utilisé sur les drones et certains petits aéronefs pour la sécurité et l\'efficacité.',
    'Piston / Turboprop': 'Avions équipés à la fois de moteurs à pistons et de turbopropulseurs.',
    'Radial / Turboprop': 'Avions ayant à la fois des moteurs radiaux et des turbopropulseurs.',
    'Turboprop / Jet': 'Avions hybrides combinant turbopropulseurs et réacteurs.',
    'Turbine': 'Moteurs à turbine générique utilisés sur certains hélicoptères et convertibles.'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handlePDFExport = () => {
    if (!aircraft) return;
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { alpha: false, willReadFrequently: false });
      if (!ctx) {
        throw new Error('Could not get 2D context from canvas');
      }
      
      // High resolution 4K canvas for better quality
      canvas.width = 2160;  // 2x increase
      canvas.height = 2700; // 2x increase
      
      // Enable image smoothing for better quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = aircraft.image;
      
      img.onload = () => {
        try {
          const margin = 120;  // 2x for higher resolution
          
          // Draw aircraft image (centered, taking most of the space)
          const imgHeight = 1800;  // 2x for higher resolution
          const imgY = 160;  // 2x for higher resolution
          
          ctx.save();
          const imgAspect = img.width / img.height;
          const boxWidth = canvas.width - 2 * margin;
          const boxAspect = boxWidth / imgHeight;
          
          let drawWidth, drawHeight, drawX, drawY;
          
          if (imgAspect > boxAspect) {
            drawWidth = boxWidth;
            drawHeight = drawWidth / imgAspect;
            drawX = margin;
            drawY = imgY + (imgHeight - drawHeight) / 2;
          } else {
            drawHeight = imgHeight;
            drawWidth = drawHeight * imgAspect;
            drawX = margin + (boxWidth - drawWidth) / 2;
            drawY = imgY;
          }
          
          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          ctx.restore();
          
          // Aircraft name (below image)
          const nameY = imgY + imgHeight + 160;  // 2x for higher resolution
          ctx.fillStyle = '#0f172a';
          ctx.font = 'bold 112px Inter, sans-serif';  // 2x for higher resolution
          ctx.textAlign = 'center';
          ctx.fillText(aircraft.name, canvas.width / 2, nameY);
          
          // Footer text - "made with love for jojo"
          const footerY = canvas.height - 160;  // 2x for higher resolution
          ctx.fillStyle = '#64748b';
          ctx.font = '56px Inter, sans-serif';  // 2x for higher resolution
          ctx.textAlign = 'center';
          ctx.fillText('Made with love for JoJo', canvas.width / 2, footerY);
          
          // Optional: Add a small heart emoji
          ctx.font = '64px Arial';  // 2x for higher resolution
          ctx.fillText('❤️', canvas.width / 2 - 440, footerY);  // 2x for higher resolution
          
          // Convert to blob and download (PNG for maximum quality, no compression)
          canvas.toBlob((blob) => {
            if (!blob) {
              throw new Error('Failed to create image blob');
            }
            
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${aircraft.id}-for-jojo-hq.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }, 'image/png', 1.0);
        } catch (error) {
          console.error('Error processing image:', error);
          alert('Erreur lors de la génération de l\'image. Veuillez réessayer.');
        }
      };
      
      img.onerror = () => {
        console.error('Failed to load aircraft image for export');
        alert('Erreur lors du chargement de l\'image. Veuillez réessayer.');
      };
    } catch (error) {
      console.error('Export error:', error);
      alert('Erreur lors de l\'export. Veuillez réessayer.');
    }
  };

  const handleGoogleDiagramSearch = () => {
    if (!aircraft) return;
    const query = `${aircraft.name}  layout`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank', 'noopener,noreferrer');
  };

  if (!aircraft) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex p-4 bg-slate-100 rounded-full text-slate-400 mb-6">
          <Activity size={48} />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-slate-900">Aéronef introuvable</h1>
        <p className="text-slate-500 mb-8">Cet appareil n'est pas encore répertorié dans notre base.</p>
        <Link to="/" className="px-8 py-3 bg-yellow-400 text-slate-900 font-bold rounded-xl shadow-lg hover:bg-yellow-500 transition-all">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 page-transition">
      <button 
        onClick={() => navigate(`/?category=${encodeURIComponent(aircraft.category)}`)}
        className="inline-flex items-center text-xs md:text-sm font-bold text-slate-500 hover:text-yellow-600 mb-6 md:mb-10 group bg-white md:bg-transparent px-3 py-2 md:px-0 rounded-lg shadow-sm md:shadow-none border border-slate-200 md:border-none"
      >
        <ChevronLeft size={18} className="mr-1 group-hover:-translate-x-1 transition-transform" />
        Retour à la galerie
      </button>

      <div className="lg:hidden mb-6">
        <h1 className="text-3xl font-black text-slate-900 mb-2">{aircraft.name}</h1>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{aircraft.role}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-8 space-y-8 md:space-y-12">
          <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl md:shadow-2xl bg-slate-200">
            {!heroImageError ? (
              <img 
                src={aircraft.image} 
                alt={aircraft.name} 
                className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/10]"
                loading="eager"
                onError={() => setHeroImageError(true)}
              />
            ) : (
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400 text-slate-500">
                <span className="text-sm font-semibold">Image non disponible</span>
              </div>
            )}
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold text-white border border-white/20">
                {aircraft.category === 'Combat Aircraft' || 
                 aircraft.category === 'Combat Support Aircraft' ||
                 aircraft.category === 'Combat Training Aircraft' ? 'MILITAIRE' : 'CIVIL'}
              </span>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 px-1 md:px-0">
            <div className="flex items-center space-x-3 text-yellow-600">
              <Activity size={20} className="md:w-6 md:h-6" />
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Présentation</h2>
            </div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
              {aircraft.description}
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-5 hidden md:block">
              <Eye size={200} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6 md:mb-8">
                <div className="p-2 bg-yellow-400 rounded-lg text-slate-900">
                  <Eye size={20} className="md:w-6 md:h-6" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold">Identification Visuelle</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {aircraft.recognitionTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start p-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-colors">
                    <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-yellow-400/30 text-yellow-400 rounded-full font-bold text-[10px] md:text-xs mr-3 md:mr-4 mt-1">
                      {idx + 1}
                    </span>
                    <span className="text-sm md:text-base text-slate-200 leading-snug">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6 md:space-y-8">
          <div className="hidden lg:block bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h1 className="text-4xl font-black text-slate-900 mb-2 leading-tight tracking-tight">{aircraft.name}</h1>
            <p className="text-slate-500 font-medium mb-8 text-sm uppercase tracking-widest">{aircraft.role}</p>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between py-3.5 border-b border-slate-50">
                <div className="flex items-center text-slate-400">
                  <Settings size={18} className="mr-3" />
                  <span className="text-sm font-semibold">Constructeur</span>
                </div>
                <span className="text-sm font-bold text-slate-900">{aircraft.manufacturer}</span>
              </div>
              <div className="flex items-center justify-between py-3.5 border-b border-slate-50">
                <div className="flex items-center text-slate-400">
                  <MapPin size={18} className="mr-3" />
                  <span className="text-sm font-semibold">Origine</span>
                </div>
                <div className="flex items-center gap-2">
                  {!aircraft.country.includes('/') && countryCodeMap[aircraft.country] && (
                    <img 
                      src={`https://flagcdn.com/w80/${countryCodeMap[aircraft.country]}.png`}
                      srcSet={`https://flagcdn.com/w160/${countryCodeMap[aircraft.country]}.png 2x`}
                      width="24"
                      height="18"
                      alt={aircraft.country}
                      className="rounded-sm shadow-sm object-cover"
                      loading="lazy"
                    />
                  )}
                  <span className="text-sm font-bold text-slate-900">{aircraft.country}</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-3.5">
                <div className="flex items-center text-slate-400">
                  <Wind size={18} className="mr-3" />
                  <span className="text-sm font-semibold">Propulsion</span>
                </div>
                <span className="text-sm font-bold text-slate-900 text-right">
                  {aircraft.enginesCount}x {aircraft.engineType === 'Jet' ? 'Réacteur' : 'Hélice'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleDiagramSearch}
              className="mt-6 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center text-sm font-bold transition-all active:scale-95"
            >
              Viens regarder le schéma de l'avion.

              <Search size={16} className="ml-2" />
            </button>
          </div>

          <div className="lg:hidden grid grid-cols-2 gap-3">
             <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Constructeur</span>
                <p className="text-sm font-bold text-slate-900">{aircraft.manufacturer}</p>
             </div>
             <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Origine</span>
                <div className="flex items-center gap-2 mt-1">
                  {!aircraft.country.includes('/') && countryCodeMap[aircraft.country] && (
                    <img 
                      src={`https://flagcdn.com/w80/${countryCodeMap[aircraft.country]}.png`}
                      srcSet={`https://flagcdn.com/w160/${countryCodeMap[aircraft.country]}.png 2x`}
                      width="20"
                      height="15"
                      alt={aircraft.country}
                      className="rounded-sm shadow-sm object-cover"
                      loading="lazy"
                    />
                  )}
                  <p className="text-sm font-bold text-slate-900">{aircraft.country}</p>
                </div>
             </div>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={handleGoogleDiagramSearch}
              className="mt-3 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center text-sm font-bold transition-all active:scale-95"
            >
              Viens regarder le schéma de l'avion.
              <Search size={16} className="ml-2" />
            </button>
          </div>

          <div className="bg-yellow-400 p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] text-slate-900 shadow-xl shadow-yellow-200/50">
            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 flex items-center">
              <Maximize size={22} className="mr-3" />
              Spécifications
            </h3>
            
            <div className="grid grid-cols-2 gap-y-6 md:gap-y-8 gap-x-4">
              <div>
                <p className="text-yellow-800 text-[10px] font-bold uppercase tracking-widest mb-1">Envergure</p>
                <p className="text-lg md:text-xl font-mono-custom font-bold">{aircraft.specs.wingspan}</p>
              </div>
              <div>
                <p className="text-yellow-800 text-[10px] font-bold uppercase tracking-widest mb-1">Longueur</p>
                <p className="text-lg md:text-xl font-mono-custom font-bold">{aircraft.specs.length}</p>
              </div>
              <div>
                <p className="text-yellow-800 text-[10px] font-bold uppercase tracking-widest mb-1">Hauteur</p>
                <p className="text-lg md:text-xl font-mono-custom font-bold">{aircraft.specs.height}</p>
              </div>
              <div>
                <p className="text-yellow-800 text-[10px] font-bold uppercase tracking-widest mb-1">Charge Utile</p>
                <p className="text-lg md:text-xl font-mono-custom font-bold">{aircraft.specs.payload}</p>
              </div>
            </div>
            
            <button className="mt-8 md:mt-10 w-full py-3.5 bg-black/10 hover:bg-black/20 border border-black/10 rounded-xl md:rounded-2xl flex items-center justify-center text-sm font-bold transition-all group active:scale-95" onClick={handlePDFExport}>
              Télécharger la fiche (PNG)
              <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          

          {/* Engine Type Explanation */}
          {aircraft && engineDescriptions[aircraft.engineType] && (
            <div className="p-5 md:p-6 border-2 border-blue-200 rounded-2xl md:rounded-[2rem] bg-blue-50">
              <div className="flex items-center mb-4">
                <Wind size={20} className="text-blue-600 mr-3" />
                <h3 className="text-sm md:text-base font-bold text-blue-900">Type de moteur: {aircraft.engineType}</h3>
              </div>
              
              {/* Engine Image */}
              <div className="mb-4 rounded-xl overflow-hidden bg-black">
                <img
                  src={`/images/engines/${aircraft.engineType.toLowerCase().replace(/\s+\//g, '').replace(/\s+/g, '-')}.png`}
                  alt={`Animation moteur ${aircraft.engineType}`}
                  className="w-full h-auto max-h-80 object-cover"
                  loading="lazy"
                />
              </div>
              
              <p className="text-sm text-blue-800 leading-relaxed">
                {engineDescriptions[aircraft.engineType]}
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Related Aircraft Section */}
      {relatedAircraft.length > 0 && (
        <div className="mt-8 md:mt-12 p-5 md:p-8 border border-slate-200 rounded-2xl md:rounded-[2.5rem] bg-white text-slate-900">
          <div className="flex items-center mb-4 md:mb-6">
            <Heart size={24} className="text-red-500 mr-3 fill-red-500" />
            <h3 className="text-lg md:text-xl font-black text-slate-900">
              Vous pourriez aussi aimer
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {relatedAircraft.map((related) => (
              <Link
                key={related.id}
                to={`/aircraft/${related.id}`}
                className="group bg-white rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 hover:border-yellow-400 hover:shadow-xl transition-all active:scale-95"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img 
                    src={related.image} 
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs md:text-sm font-bold text-slate-900 whitespace-normal break-words leading-snug group-hover:text-yellow-600 transition-colors">
                    {related.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-slate-500 whitespace-normal break-words leading-snug">
                    {related.manufacturer}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AircraftDetail;
