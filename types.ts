
export type EngineType = 'Jet' | 'Turboprop' | 'Turbofan' | 'Turbofan (Poussée vectorielle)' | 'Propfan' | 'Piston' | 'Radial' | 'Ducted Fan' | 'Piston / Turboprop' | 'Radial / Turboprop' | 'Turboprop / Jet' | 'Turbine';
export type AircraftCategory = 'Civil Jet Airliners' | 'Civil Turboprop Airliners' | 'Civil Utility' | 'Combat Aircraft' | 'Combat Support Aircraft' | 'Combat Training Aircraft' | 'Helicopters' | 'Private Executive Aircraft' | 'Private Light Aircraft' | 'Unmanned Aerial Vehicle (UAV)';

export interface Aircraft {
  id: string;
  name: string;
  category: AircraftCategory;
  role: string;
  manufacturer: string;
  country: string;
  engineType: EngineType;
  enginesCount: number;
  recognitionTips: string[];
  image: string;
  imageExt?: string;
  description: string;
  specs: {
    wingspan: string;
    length: string;
    height: string;
    payload: string;
  };
}

export interface CategoryInfo {
  id: AircraftCategory;
  title: string;
  description: string;
  icon: string;
  image: string;
}
