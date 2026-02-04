import React, { useState } from 'react';
import { Lock, Plane } from 'lucide-react';
import { AircraftMascot } from './AircraftMascot';

interface AnimatedLoginProps {
  password: string;
  accessKey: string;
  onSuccess: () => void;
}

type AnimationState = 'idle' | 'typing' | 'success' | 'error' | 'flyaway';

export const AnimatedLogin: React.FC<AnimatedLoginProps> = ({
  password,
  accessKey,
  onSuccess
}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) setError('');
    setAnimationState(e.target.value ? 'typing' : 'idle');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setAnimationState('typing');

    // Simulate auth delay (optional)
    setTimeout(() => {
      if (value === password) {
        sessionStorage.setItem(accessKey, 'true');
        setAnimationState('success');
        setIsLoading(false);
        
        // Trigger fly away animation
        setTimeout(() => {
          setAnimationState('flyaway');
          // Navigate after plane flies away
          setTimeout(() => {
            onSuccess();
          }, 2500);
        }, 600);
      } else {
        setAnimationState('error');
        setError('Mot de passe incorrect');
        setIsLoading(false);
        
        // Reset animation after error
        setTimeout(() => {
          setAnimationState('idle');
        }, 600);
      }
    }, 300);
  };

  return (
    <div className="min-h-[100svh] bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-3 sm:p-4 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-200/40 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full" />

      {/* Main card */}
      <div className={`w-full max-w-md bg-white/90 backdrop-blur border border-slate-200 rounded-3xl shadow-[0_20px_60px_-30px_rgba(15,23,42,0.4)] p-5 sm:p-6 relative z-10 ${animationState === 'flyaway' ? 'animate-box-fade' : ''}`}>
        
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
          <div className="p-2 bg-yellow-400 rounded-lg text-slate-900">
            <Plane size={24} />
          </div>
          <h2 className="text-xl font-black tracking-tighter text-slate-900">Just Plane</h2>
        </div>

        {/* Aircraft Mascot */}
        <div className="flex justify-center mb-4 sm:mb-6 scale-90 sm:scale-100">
          <AircraftMascot animationState={animationState} />
        </div>

        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Accès protégé</h1>
          <p className="text-sm text-slate-500">Juste pour ma petite JoJo 💛</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                value={value}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 pr-16 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white shadow-sm transition disabled:opacity-50"
                placeholder="••••••••"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                disabled={isLoading}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-700 font-medium disabled:opacity-50"
              >
                {show ? 'Masquer' : 'Afficher'}
              </button>
            </div>
            
            {/* Error message */}
            {error && (
              <p className="mt-2 text-sm text-red-600 font-medium animate-pulse">
                {error}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading || !value}
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 text-slate-900 font-semibold rounded-xl transition shadow-md active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                Vérification...
              </>
            ) : (
              <>
                <Lock size={18} />
                Entrer
              </>
            )}
          </button>
        </form>

        {/* Footer hint */}
        <p className="mt-6 text-xs text-slate-400 text-center">
          « Conseil : le mot de passe est un mot qui me plaît 🤭 »
        </p>
      </div>
    </div>
  );
};

export default AnimatedLogin;
