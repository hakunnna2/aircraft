
import React, { useEffect } from 'react';
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
  ArrowUpRight 
} from 'lucide-react';

const AircraftDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const aircraft = AIRCRAFT_DATA.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handlePDFExport = () => {
    try {
      // Create a simple canvas with image and name
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Could not get 2D context from canvas');
      }
      
      // Set canvas size (square format for simplicity)
      canvas.width = 1080;
      canvas.height = 1350;
      
      // White background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Load aircraft image
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = aircraft.image;
      
      img.onload = () => {
        try {
          const margin = 60;
          
          // Draw aircraft image (centered, taking most of the space)
          const imgHeight = 900;
          const imgY = 80;
          
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
          const nameY = imgY + imgHeight + 80;
          ctx.fillStyle = '#0f172a';
          ctx.font = 'bold 56px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(aircraft.name, canvas.width / 2, nameY);
          
          // Footer text - "made with love for jojo"
          const footerY = canvas.height - 80;
          ctx.fillStyle = '#64748b';
          ctx.font = '28px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('Made with love for JoJo', canvas.width / 2, footerY);
          
          // Optional: Add a small heart emoji
          ctx.font = '32px Arial';
          ctx.fillText('❤️', canvas.width / 2 - 220, footerY);
          
          // Convert to blob and download
          canvas.toBlob((blob) => {
            if (!blob) {
              throw new Error('Failed to create image blob');
            }
            
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${aircraft.id}-for-jojo.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }, 'image/png');
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
        onClick={() => navigate(-1)}
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
            <img 
              src={aircraft.image} 
              alt={aircraft.name} 
              className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/10]"
            />
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
                <span className="text-sm font-bold text-slate-900">{aircraft.country}</span>
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
          </div>

          <div className="lg:hidden grid grid-cols-2 gap-3">
             <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Constructeur</span>
                <p className="text-sm font-bold text-slate-900">{aircraft.manufacturer}</p>
             </div>
             <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Origine</span>
                <p className="text-sm font-bold text-slate-900">{aircraft.country}</p>
             </div>
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

          <div className="p-5 md:p-6 border border-slate-200 rounded-2xl md:rounded-[2rem] bg-slate-50">
            <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed italic text-center md:text-left">
              * Les informations de reconnaissance sont fournies à titre indicatif pour les passionnés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AircraftDetail;
