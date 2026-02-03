import React, { useState } from 'react';
import { Lock } from 'lucide-react';

/**
 * FALLBACK LOGIN COMPONENT
 * 
 * Use this if AnimatedLogin has issues or you need a non-animated version.
 * Same props, zero animations.
 * Useful for accessibility or performance-constrained environments.
 */

interface FallbackLoginProps {
  password: string;
  accessKey: string;
  onSuccess: () => void;
}

export const FallbackLogin: React.FC<FallbackLoginProps> = ({
  password,
  accessKey,
  onSuccess
}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate auth delay
    setTimeout(() => {
      if (value === password) {
        sessionStorage.setItem(accessKey, 'true');
        setIsLoading(false);
        onSuccess();
      } else {
        setError('Mot de passe incorrect');
        setIsLoading(false);
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur border border-slate-200 rounded-3xl shadow-[0_20px_60px_-30px_rgba(15,23,42,0.4)] p-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-slate-900 flex items-center justify-center shadow-md">
            <Lock size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Accès protégé</h1>
            <p className="text-sm text-slate-500">Entrez le mot de passe pour continuer</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
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
              <p className="mt-2 text-sm text-red-600 font-medium">
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
          Conseil : le mot de passe est sensible à la casse.
        </p>
      </div>
    </div>
  );
};

export default FallbackLogin;

/**
 * USAGE:
 * 
 * If AnimatedLogin doesn't work, use this instead:
 * 
 * import FallbackLogin from './components/AnimatedLogin/FallbackLogin';
 * 
 * <FallbackLogin
 *   password="your-password"
 *   accessKey="auth-key"
 *   onSuccess={onSuccess}
 * />
 */
