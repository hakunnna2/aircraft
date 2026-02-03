import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface PasswordGateProps {
  password: string;
  accessKey: string;
  onSuccess: () => void;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ password, accessKey, onSuccess }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (value === password) {
      sessionStorage.setItem(accessKey, 'true');
      onSuccess();
    } else {
      setError('Mot de passe incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-200/40 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full" />

      <div className="w-full max-w-md bg-white/90 backdrop-blur border border-slate-200 rounded-3xl shadow-[0_20px_60px_-30px_rgba(15,23,42,0.4)] p-8 relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-slate-900 flex items-center justify-center shadow-md">
            <Lock size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Accès protégé</h1>
            <p className="text-sm text-slate-500">Entrez le mot de passe pour continuer</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Mot de passe</label>
            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  if (error) setError('');
                }}
                className="w-full px-4 py-3 pr-16 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white shadow-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-700 font-medium"
              >
                {show ? 'Masquer' : 'Afficher'}
              </button>
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold rounded-xl transition shadow-md active:scale-[0.99]"
          >
            Entrer
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-400 text-center">
          Conseil : le mot de passe est sensible à la casse.
        </p>
      </div>
    </div>
  );
};

export default PasswordGate;
