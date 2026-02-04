
import { Aircraft, CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'Civil Jet Airliners',
    title: 'Avions de Ligne',
    description: 'Aéronefs à réaction et turbopropulseurs conçus pour le transport de passagers et de fret.',
    icon: 'PlaneLanding',
    image: '/images/categories/Avions de Ligne.jpg'
  },
  {
    id: 'Combat Aircraft',
    title: 'Avions de Combat',
    description: 'Chasseurs, bombardiers et avions d\'attaque au sol pour la défense et la supériorité aérienne.',
    icon: 'Shield',
    image: '/images/categories/Avions de Combat.webp'
  },  
  {
    id: 'Combat Support Aircraft',
    title: 'Avions de Soutien',
    description: 'Avions de transport militaire, de ravitaillement en vol, de guerre électronique et de reconnaissance.',
    icon: 'Truck',
    image: '/images/categories/Combat Support Aircraft.jpg'
  },
  {
    id: 'Combat Training Aircraft',
    title: 'Avions d\'Entraînement',
    description: 'Avions destinés à la formation des pilotes militaires et à l\'entraînement opérationnel.',
    icon: 'GraduationCap',
    image: '/images/categories/Combat Training Aircraft.jpg'
  },
  {
    id: 'Civil Turboprop Airliners',
    title: 'Avions de Ligne Turbopropulsés',
    description: 'Avions de ligne à turbopropulseurs pour le transport régional et les liaisons courtes distances.',
    icon: 'Wind',
    image: '/images/categories/Avions de Ligne Turbopropulsés.jpg'
  },
  {
    id: 'Civil Utility',
    title: 'Avions de Rôle Spécialisé',
    description: 'Avions civils pour des missions spécialisées : secours, recherche, surveillance, extinction d\'incendie.',
    icon: 'AlertCircle',
    image: '/images/categories/Avions de Rôle Spécialisé.jpg'
  },
  {
    id: 'Private Executive Aircraft',
    title: 'Avions d\'Affaires',
    description: 'Avions d\'affaires et jets privés pour le transport de cadres et de personnalités.',
    icon: 'Crown',
    image: '/images/categories/Avions d\'Affaires.avif'
  },
  {
    id: 'Private Light Aircraft',
    title: 'Avions Légers Privés',
    description: 'Petits avions monomoteurs et bimoteurs pour les vols privés et l\'aviation de loisir.',
    icon: 'Feather',
    image: '/images/categories/Avions Légers Privés.jpg'
  },
  {
    id: 'Helicopters',
    title: 'Hélicoptères',
    description: 'Aéronefs à rotor principal pour le transport, le sauvetage et les missions spécialisées.',
    icon: 'Zap',
    image: '/images/categories/Hélicoptères.jpg'
  },
  {
    id: 'Unmanned Aerial Vehicle (UAV)',
    title: 'Drones & UAV',
    description: 'Aéronefs sans pilote télécommandés pour la surveillance, la reconnaissance et les opérations de combat.',
    icon: 'Radar',
    image: '/images/categories/Drones & UAV.jpg'
  }
];

const AIRCRAFT_DATA_RAW: Omit<Aircraft, 'image'>[] = [
  {
    id: 'mb326',
    name: 'Aermacchi MB-326',
      category: 'Combat Aircraft',
    role: 'Avion d\'entraînement opérationnel et d\'attaque au sol',
    manufacturer: 'Aermacchi',
    country: 'Italie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoréacteur",
      "Réservoirs de carburant fixes en bout d'aile (wingtip tanks)"
    ],
    description: 'Ayant effectué son premier vol en 1957, le MB-326 a été exporté dans douze pays. Il a été construit sous licence en Afrique du Sud (Atlas Impala) et au Brésil (Embraer Xavante). La version MB-326K est un développement monoplace équipé d\'un canon interne.',
      specs: {
        wingspan: '10,8 m',
        length: '10,7 m',
        height: '3,7 m',
        payload: '1 814 kg'
      }
    },
  {
    id: 's211',
    name: 'Aermacchi (SIAI-Marchetti) S.211',
    category: 'Combat Aircraft',
    role: "Avion d'entraînement opérationnel / d'attaque au sol",
    manufacturer: 'Aermacchi (SIAI-Marchetti)',
    country: 'Italie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute et en flèche",
      "Monoréacteur",
      "Deux sièges en tandem",
      "Fuselage arrière et tuyère allongés"
    ],
    description: "Aermacchi a acquis SIAI-Marchetti en 1997 et continue de promouvoir le S.211 malgré sa concurrence directe avec le MB-339. Très similaire en apparence à l'IA-63 Pampa, le S.211 se distingue par son aile en flèche et sa queue plus longue.",
    specs: {
      wingspan: '8,4 m',
      length: '9,5 m',
      height: '3,8 m',
      payload: '660 kg'
    }
  },
    {
      id: 'mb339c',
      name: 'Aermacchi MB-339C',
    category: 'Combat Aircraft',
    role: 'Avion d\'entraînement opérationnel et d\'attaque au sol',
    manufacturer: 'Aermacchi',
    country: 'Italie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoréacteur",
      "Nez pointu et effilé",
      "Siège arrière surélevé par rapport au pilote"
    ],
    description: 'Basé sur le MB-326, le MB-339 se distingue par un fuselage avant redessiné, un nez plus pointu et un siège arrière surélevé. Il dispose d\'un moteur plus puissant et de commandes de vol améliorées pour simuler des chasseurs modernes.',
    specs: {
      wingspan: '11,2 m',
      length: '11,2 m',
      height: '4 m',
      payload: '1 814 kg'
    }
  },
  {
    id: 'l29-delfin',
    name: 'Aero Vodochody L-29 Delfin',
    category: 'Combat Aircraft',
    role: 'Avion d\'entraînement opérationnel',
    manufacturer: 'Aero Vodochody',
    country: 'République tchèque',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile droite en position médiane",
      "Monoréacteur",
      "Empennage en T"
    ],
    description: 'Le prototype du L-29 a volé en 1959. Cet appareil a été utilisé de manière intensive par les pays de l\'ancien bloc soviétique (3 665 exemplaires construits). Bien que datant des années 60, environ 1 000 exemplaires restaient en service à la fin des années 90, principalement en Russie.',
    specs: {
      wingspan: '10,3 m',
      length: '10,8 m',
      height: '3,1 m',
      payload: '200 kg'
    }
},
{
    id: 'l39-albatros',
    name: 'Aero Vodochody L-39 Albatros',
    category: 'Combat Aircraft',
    role: 'Avion d\'entraînement opérationnel et d\'attaque au sol',
    manufacturer: 'Aero Vodochody',
    country: 'République tchèque',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoréacteur",
      "Entrées d'air à l'emplanture des ailes (shoulder intakes)",
      "Nez allongé sur la version L-59"
    ],
    description: 'Depuis son premier vol en 1968, la cellule de base du L-39 a été redessinée pour intégrer des équipements et moteurs occidentaux. Les modèles L-39ZO et ZA disposent de capacités d\'attaque au sol améliorées. Le L-59 est une version plus puissante avec un fuselage renforcé.',
    specs: {
      wingspan: '9,5 m',
      length: '12,1 m',
      height: '4,8 m',
      payload: '1 000 kg'
    }
},
{
    id: 'cm170-magister',
    name: 'Aerospatiale (Fouga) CM 170 Magister',
    category: 'Combat Aircraft',
    role: 'Avion d\'entraînement opérationnel et d\'attaque au sol',
    manufacturer: 'Aerospatiale (Fouga)',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile droite en position médiane",
      "Biréacteur",
      "Empennage papillon (en V) caractéristique"
    ],
    description: 'En service depuis près d\'un demi-siècle lors de la publication, le Magister a volé pour la première fois en 1951. Une version navalisée (le Zephyr) a été créée. Il a été construit sous licence en Finlande, en Israël et en Allemagne pour un total de 921 exemplaires.',
    specs: {
      wingspan: '11,4 m',
      length: '10 m',
      height: '2,8 m',
      payload: '100 kg'
    }
},
{
    id: 'at3',
    name: 'AIDC AT-3',
    category: 'Combat Aircraft',
    role: 'Avion d\'entraînement opérationnel et d\'attaque au sol',
    manufacturer: 'AIDC',
    country: 'Taïwan',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Biréacteur",
      "Entrées d'air carrées"
    ],
    description: 'Après avoir construit des F-5 sous licence, AIDC a conçu l\'AT-3, qui a volé pour la première fois en 1980. 60 exemplaires ont été produits pour l\'armée de l\'air taïwanaise. Il existe une version monoplace d\'attaque (AT-3A) et une version de soutien rapproché (AT-3B).',
    specs: {
      wingspan: '10,5 m',
      length: '12,9 m',
      height: '4,4 m',
      payload: '2 721 kg'
    }
},
{
    id: 'ching-kuo',
    name: 'AIDC Ching Kuo',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'AIDC',
    country: 'Taïwan',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane et en flèche",
      "Biréacteur (deux moteurs)",
      "Entrées d'air ovales",
      "Forte ressemblance avec le F-16"
    ],
    description: "Développé à partir de 1982 après le refus des États-Unis de vendre des chasseurs à Taïwan, le Ching Kuo a volé pour la première fois en 1989. Bien qu'il ressemble au F-16, il s'en distingue par ses deux moteurs et la forme de ses entrées d'air.",
    specs: {
      wingspan: '8,5 m',
      length: '13,2 m',
      height: '4,6 m',
      payload: '3 901 kg'
    }
},
{
    id: 'amx',
    name: 'AMX',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque au sol',
    manufacturer: 'Alenia / Aermacchi / Embraer',
    country: 'Italie / Brésil',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute et en flèche",
      "Monoréacteur",
      "Entrées d'air situées à hauteur d'épaule (shoulder intakes)"
    ],
    description: "Développé par Alenia et Aermacchi (Italie) et Embraer (Brésil), l'AMX remplace les G91 et F-104 en Italie ainsi que le MB-326 Xavante au Brésil. C'est un appareil spécialisé dans l'attaque au sol avec une capacité secondaire de défense aérienne.",
    specs: {
      wingspan: '9,9 m',
      length: '12,5 m',
      height: '4,5 m',
      payload: '3 800 kg'
    }
},
  {
    id: 'iar99-soim',
    name: 'Avioane IAR-99 Soim',
    category: 'Combat Aircraft',
    role: 'Avion d\'entraînement opérationnel / d\'attaque au sol',
    manufacturer: 'Avioane',
    country: 'Roumanie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoréacteur",
      "Dérive avec un décrochement (cranked fin)"
    ],
    description: 'Révélé au Salon du Bourget en 1983, le Soim a volé pour la première fois en 1985. Une version améliorée, l\'IAR-109, a volé en 1992, mais aucune commande n\'a été reçue et la production semble s\'être arrêtée.',
    specs: {
      wingspan: '9,8 m',
      length: '11 m',
      height: '3,9 m',
      payload: '1 000 kg'
    }
  },
  {
    id: 'canberra',
    name: 'BAe (English Electric) Canberra',
    category: 'Combat Aircraft',
    role: 'Bombardier et avion multirôle',
    manufacturer: 'British Aerospace (English Electric)',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile droite en position médiane",
      "Moteurs montés au milieu des ailes",
      "Plan fixe horizontal de la queue avec un dièdre positif (orienté vers le haut)"
    ],
    description: 'Le plus ancien avion de combat opérationnel en service lors de la publication, le Canberra a volé pour la première fois en 1949. C\'est le seul avion de combat possédant des pièces en bois : l\'avant de la dérive est en contreplaqué.',
    specs: {
      wingspan: '20,6 m',
      length: '20,3 m',
      height: '4,7 m',
      payload: '2 722 kg'
    }
  },
  {
    id: 'harrier-gr7',
    name: 'BAe/Boeing GR. Mk7 Harrier',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque au sol STOVL (décollage/atterrissage court ou vertical)',
    manufacturer: 'BAe / Boeing',
    country: 'Royaume-Uni / USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute avec une flèche accentuée",
      "Fort angle anèdre des ailes (pointent vers le bas)",
      "Grandes entrées d'air semi-circulaires"
    ],
    description: 'Les anciens modèles GR.5 ont tous été mis à jour vers le standard GR.7. Les Harrier de la Royal Air Force sont désormais régulièrement déployés à bord des porte-avions de la Royal Navy.',
    specs: {
      wingspan: '9,2 m',
      length: '14,4 m',
      height: '3,5 m',
      payload: '4 899 kg'
    }
  },
  {
    id: 't45a-goshawk',
    name: 'BAe/Boeing T-45A Goshawk',
    category: 'Combat Aircraft',
    role: 'Avion d\'entraînement pour porte-avions',
    manufacturer: 'BAe / Boeing',
    country: 'Royaume-Uni / USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse en flèche",
      "Aérofreins montés sur les côtés",
      "Crosse d'appontage pour les opérations sur porte-avions"
    ],
    description: 'Développé à partir de la série BAe Hawk, le Goshawk possède un fuselage et un train d\'atterrissage renforcés pour les besoins de l\'US Navy.',
    specs: {
      wingspan: '9,4 m',
      length: '10,9 m',
      height: '4,1 m',
      payload: 'Non spécifié (entraînement)'
    }
  },
  {
    id: 'hawk-100',
    name: 'BAe Hawk 50/60/100',
    category: 'Combat Aircraft',
    role: 'Avion d\'entraînement opérationnel / d\'attaque au sol',
    manufacturer: 'British Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse en flèche",
      "Monoréacteur",
      "Cockpit en tandem",
      "Nez allongé sur la série 100 pour l'électronique"
    ],
    description: 'La famille Hawk a connu un immense succès à l\'exportation. Le Hawk 100 est la version la plus récente avec un nez allongé intégrant des capteurs infrarouges (FLIR) et des pylônes en bout d\'aile pour missiles air-air.',
    specs: {
      wingspan: '9,4 m',
      length: '12,4 m',
      height: '3,4 m',
      payload: '3 000 kg'
    }
  },
  {
    id: 'hawk-200',
    name: 'BAe Hawk 200',
    category: 'Combat Aircraft',
    role: 'Chasseur léger multirôle',
    manufacturer: 'British Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse en flèche",
      "Monoréacteur",
      "Cockpit monoplace"
    ],
    description: 'Développé sur fonds privés à partir de la version biplace, le Hawk 200 utilise l\'espace libéré dans le nez pour loger un radar AN/APG-66H tout en gardant 80% de points communs avec le Hawk original.',
    specs: {
      wingspan: '9,4 m',
      length: '10,9 m',
      height: '4,1 m',
      payload: '3 000 kg'
    }
  },
  {
    id: 'sea-harrier-fa2',
    name: 'BAe Sea Harrier F/A.Mk2',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle VSTOL embarqué',
    manufacturer: 'British Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute en flèche",
      "Angle anèdre prononcé des ailes",
      "Radôme de nez arrondi"
    ],
    description: 'La Royal Navy a remplacé ses FRS.1 par cette version améliorée. La différence majeure réside dans le système de navigation et d\'attaque basé sur le radar Blue Vixen.',
    specs: {
      wingspan: '7,7 m',
      length: '14,2 m',
      height: '3,7 m',
      payload: '3 630 kg'
    }
  },
  {
    id: 'sea-harrier-frs51',
    name: 'BAe Sea Harrier FRS.Mk51',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle VSTOL embarqué',
    manufacturer: 'British Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute en flèche",
      "Angle anèdre prononcé des ailes",
      "Nez très pointu (contenant le radar Blue Fox)"
    ],
    description: 'Utilisé à l\'origine par la Royal Navy durant la guerre des Malouines, le Sea Harrier original n\'est plus utilisé que par la marine indienne. Son nez pointu le distingue de la version FA.Mk2.',
    specs: {
      wingspan: '7,7 m',
      length: '14,5 m',
      height: '3,7 m',
      payload: '3 630 kg'
    }
  },
  {
    id: 'strikemaster',
    name: 'BAe (BAC) Strikemaster',
    category: 'Combat Aircraft',
    role: 'Avion d\'entraînement opérationnel / d\'attaque au sol légère',
    manufacturer: 'British Aerospace (BAC)',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Cockpit avec sièges côte à côte",
      "Réservoirs en bout d'aile (wingtip tanks)"
    ],
    description: 'Développé en 1967 à partir du Jet Provost, le Strikemaster possède un moteur plus puissant lui permettant de transporter une charge d\'armement utile.',
    specs: {
      wingspan: '11,2 m',
      length: '10,3 m',
      height: '3,3 m',
      payload: '1 360 kg'
    }
  },
  {
    id: 'b52h-stratofortress',
    name: 'Boeing B-52H Stratofortress',
    category: 'Combat Aircraft',
    role: 'Bombardier stratégique',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 8,
    recognitionTips: [
      "Aile haute en flèche",
      "Huit moteurs (montés par paires dans 4 nacelles)",
      "Train d'atterrissage de type 'bicyclette'"
    ],
    description: 'Le B-52 vole depuis la moitié de l\'histoire de l\'aviation et ne semble pas près de disparaître. Le canon de 20 mm dans la queue est en cours de retrait sur les versions H.',
    specs: {
      wingspan: '56,4 m',
      length: '49 m',
      height: '12,4 m',
      payload: '24 750 kg'
    }
  
  },
  {
    id: 'av8b-harrier-ii',
    name: 'Boeing/BAe AV-8B Harrier II',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle VSTOL embarqué',
    manufacturer: 'Boeing / BAe',
    country: 'USA / Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute en flèche",
      "Aile à fort angle anèdre (pointant vers le bas)",
      "Radôme radar arrondi"
    ],
    description: "Le Harrier II Plus est une initiative privée visant à installer le radar AN/APG-65 sur un AV-8B. Malgré ses capacités multirôles, il ne possède pas la désignation 'F' (fighter) de l'armée américaine.",
    specs: {
      wingspan: '9,2 m',
      length: '14,5 m',
      height: '3,5 m',
      payload: '4 899 kg'
    }
  },
  {
    id: 'a4-skyhawk',
    name: 'Boeing (Douglas) A-4 Skyhawk',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque au sol',
    manufacturer: 'Boeing (Douglas)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Petite aile delta avec empennage classique",
      "Bosse dorsale (hump) caractéristique",
      "Monoréacteur compact"
    ],
    description: "L'A-4 a été conçu comme l'avion d'attaque embarqué le plus léger capable de transporter une arme nucléaire B57. Israël, Singapour et la Nouvelle-Zélande ont effectué d'importantes modifications sur leurs appareils.",
    specs: {
      wingspan: '8,4 m',
      length: '12,3 m',
      height: '4,6 m',
      payload: '3 175 kg'
    }
  },
  {
    id: 'f4-phantom-ii',
    name: 'Boeing (McDonnell Douglas) F-4 Phantom II',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Boeing (McDonnell Douglas)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Extrémités d'ailes avec un dièdre positif (pointent vers le haut)",
      "Empennage horizontal avec un fort angle anèdre (pointe vers le bas)"
    ],
    description: "Conçu à l'origine comme intercepteur embarqué, le Phantom II a rempli de nombreux rôles durant quatre décennies. Environ 830 exemplaires sur les 5 000 construits restaient en service lors de la publication.",
    specs: {
      wingspan: '11,8 m',
      length: '19,2 m',
      height: '5 m',
      payload: '7 250 kg'
    }
  },
  {
    id: 'f15-eagle',
    name: 'Boeing (McDonnell Douglas) F-15 Eagle',
    category: 'Combat Aircraft',
    role: 'Chasseur de supériorité aérienne',
    manufacturer: 'Boeing (McDonnell Douglas)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Double dérive (twin tails)",
      "Deux moteurs côte à côte"
    ],
    description: "Depuis 1972, le F-15 reste le principal chasseur de supériorité aérienne de l'USAF. Il sera remplacé par le F-22 Raptor à partir de 2004. Il peut être équipé de réservoirs conformes pour augmenter sa capacité d'emport.",
    specs: {
      wingspan: '13 m',
      length: '19,4 m',
      height: '5,6 m',
      payload: '10 705 kg'
    }
  },
  {
    id: 'f15e-strike-eagle',
    name: 'Boeing (McDonnell Douglas) F-15E Strike Eagle',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Boeing (McDonnell Douglas)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Double dérive",
      "Configuration biplace en tandem"
    ],
    description: "Version d'attaque au sol du F-15, lancée en 1982. Il inclut de nombreuses améliorations comme les réservoirs conformes de série, de nouveaux moteurs et des pods de navigation/attaque.",
    specs: {
      wingspan: '13 m',
      length: '19,4 m',
      height: '5,6 m',
      payload: '11 113 kg'
    }
  },
  {
    id: 'f18-hornet',
    name: 'Boeing (McDonnell Douglas) F/A-18 Hornet',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle embarqué',
    manufacturer: 'Boeing (McDonnell Douglas)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute/droite",
      "Longues extensions de bord d'attaque (LERX)",
      "Double dérive inclinée vers l'extérieur"
    ],
    description: "Issu du Northrop YF-17, le Hornet a été développé par McDonnell Douglas pour l'US Navy. C'est l'un des rares avions de combat utilisés à la fois depuis des porte-avions et des bases terrestres.",
    specs: {
      wingspan: '11,4 m',
      length: '17 m',
      height: '4,7 m',
      payload: '7 031 kg'
    }
  },
  {
    id: 'f18ef-super-hornet',
    name: 'Boeing (McDonnell Douglas) F/A-18E/F Super Hornet',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle embarqué',
    manufacturer: 'Boeing (McDonnell Douglas)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute/droite avec décrochement (dogtooth)",
      "Entrées d'air de forme carrée",
      "Fuselage plus long que le Hornet classique"
    ],
    description: "Version agrandie et plus furtive du Hornet pour remplacer l'A-6. Il possède des panneaux en dents de scie et une surface alaire augmentée pour une meilleure autonomie.",
    specs: {
      wingspan: '13,6 m',
      length: '18,3 m',
      height: '4,8 m',
      payload: '4 082 kg'
    }
  },
  {
    id: 'b1b-lancer',
    name: 'Boeing (Rockwell) B-1B Lancer',
    category: 'Combat Aircraft',
    role: 'Bombardier stratégique',
    manufacturer: 'Boeing (Rockwell)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile à géométrie variable (médiane)",
      "Petites moustaches (canards) sur le nez",
      "Nacelles moteurs situées sous le fuselage"
    ],
    description: "Le dernier B-1B a été livré en 1988. Malgré une signature radar de seulement 1% de celle du B-52, l'USAF a déjà envisagé de retirer les premiers exemplaires du service.",
    specs: {
      wingspan: '41 m (déployée)',
      length: '44,8 m',
      height: '10,4 m',
      payload: '60 781 kg'
    }
  },
  {
    id: 'ov10-bronco',
    name: 'Boeing (Rockwell) OV-10 Bronco',
    category: 'Combat Aircraft',
    role: 'Avion de lutte anti-guérilla (COIN)',
    manufacturer: 'Boeing (Rockwell)',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Fuselage à double poutre (twin boom)",
      "Deux turbopropulseurs"
    ],
    description: "Gagnant de la compétition de 1964 pour un avion de reconnaissance armé léger, le Bronco peut transporter cinq parachutistes ou deux civières dans sa section arrière.",
    specs: {
      wingspan: '12,2 m',
      length: '12,6 m',
      height: '4,6 m',
      payload: '1 633 kg'
    }
  },
  {
    id: 't2b-buckeye',
    name: 'Boeing (Rockwell) T-2B Buckeye',
    category: 'Combat Aircraft',
    role: 'Avion d\'entraînement embarqué / d\'attaque légère',
    manufacturer: 'Boeing (Rockwell)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile droite en position médiane",
      "Entrées d'air situées sur les côtés du fuselage (cheek intakes)",
      "Biréacteur"
    ],
    description: "Conception de 1956, le Buckeye est progressivement remplacé par le T-45 Goshawk. Les modèles grecs possèdent des points d'emport supplémentaires pour un rôle d'attaque au sol.",
    specs: {
      wingspan: '11,5 m',
      length: '11,7 m',
      height: '4,5 m',
      payload: '1 588 kg'
    }
  },
  {
    id: 'cac-f7',
    name: 'CAC F-7',
    category: 'Combat Aircraft',
    role: 'Intercepteur / attaque au sol',
    manufacturer: 'CAC',
    country: 'Chine',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta en position médiane",
      "Entrée d'air frontale (nez)",
      "Empennage horizontal en flèche"
    ],
    description: "Version construite sous licence du MiG-21, le J-7 a été constamment amélioré depuis 1966. La version J-7E dispose d'une aile à double flèche et d'une envergure accrue. Le FT-7 est la version d'entraînement biplace.",
    specs: {
      wingspan: '7,1 m',
      length: '13,9 m',
      height: '4,1 m',
      payload: 'Non spécifié (5 points d\'emport)'
    }
  },
  {
    id: 'cl41-tutor',
    name: 'Canadair CL-41 Tutor',
    category: 'Combat Aircraft',
    role: 'Entraînement opérationnel / attaque légère',
    manufacturer: 'Canadair',
    country: 'Canada',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage en T",
      "Cockpit avec sièges côte à côte"
    ],
    description: "Lancé sur fonds privés, le Tutor a volé en 1960. La version CL-41G d'anti-guérilla a été livrée à la Malaisie. Les appareils canadiens sont uniquement utilisés pour l'entraînement aux armes.",
    specs: {
      wingspan: '11,1 m',
      length: '9,7 m',
      height: '2,8 m',
      payload: '1 590 kg'
    }
  },
  {
    id: 'c101-aviojet',
    name: 'CASA C-101 Aviojet',
    category: 'Combat Aircraft',
    role: 'Entraînement opérationnel / attaque au sol',
    manufacturer: 'CASA',
    country: 'Espagne',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Tuyère arrière très courte",
      "Monoréacteur"
    ],
    description: "Premier vol en 1977. Très similaire à l'IA-63 Pampa argentin, l'Aviojet s'en distingue par son aile basse. ENAER (Chili) le construit sous licence sous le nom de A/T-36 Halcon.",
    specs: {
      wingspan: '10,6 m',
      length: '12,5 m',
      height: '4,3 m',
      payload: '2 250 kg'
    }
  },
  {
    id: 'a37-dragonfly',
    name: 'Cessna A-37 Dragonfly',
    category: 'Combat Aircraft',
    role: 'Entraînement de base / anti-guérilla',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile droite en position médiane",
      "Fuselage large (sièges côte à côte)",
      "Tuyères intégrées à l'emplanture du bord de fuite de l'aile"
    ],
    description: "Premier avion à réaction conçu par Cessna pour l'entraînement (T-37), il a été développé en avion d'attaque au sol (A-37) pour la lutte anti-guérilla et le contrôle aérien avancé.",
    specs: {
      wingspan: '10,9 m',
      length: '8,6 m',
      height: '2,7 m',
      payload: '2 574 kg'
    }
  },
  {
    id: 'cheetah',
    name: 'Denel (Atlas) Cheetah',
    category: 'Combat Aircraft',
    role: 'Intercepteur et reconnaissance',
    manufacturer: 'Denel (Atlas)',
    country: 'Afrique du Sud',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta sans empennage",
      "Nez tombant (droop nose)",
      "Plans canards"
    ],
    description: "Version reconstruite du Mirage III avec l'aide d'IAI (Israël). Il présente des similitudes frappantes avec le Kfir israélien. Produit en version monoplace (C et E) et biplace (D).",
    specs: {
      wingspan: '8,2 m',
      length: '15,5 m',
      height: '4,5 m',
      payload: '6 000 kg'
    }
  },
  {
    id: 'alpha-jet',
    name: 'Dassault/Dornier Alpha Jet',
    category: 'Combat Aircraft',
    role: 'Entraînement opérationnel / attaque au sol',
    manufacturer: 'Dassault / Dornier',
    country: 'France / Allemagne',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Décrochement sur le bord d'attaque de l'aile (dogtooth)",
      "Biréacteur"
    ],
    description: "Projet franco-allemand qui a remplacé le programme Jaguar. L'Allemagne souhaitait un avion de guerre opérationnel, faisant de l'Alpha Jet l'un des entraîneurs les plus lourdement armés.",
    specs: {
      wingspan: '9,1 m',
      length: '11,7 m',
      height: '4,2 m',
      payload: '2 500 kg'
    }
  },
  {
    id: 'mirage-iii',
    name: 'Dassault Mirage III',
    category: 'Combat Aircraft',
    role: 'Intercepteur / attaque au sol',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta sans empennage horizontal",
      "Radôme large",
      "Entrées d'air avec souris mobiles"
    ],
    description: "Premier vol en 1956. Malgré son âge, il reste en service dans de nombreuses forces aériennes. Le Cheetah sud-africain est une version reconstruite du Mirage III.",
    specs: {
      wingspan: '8,2 m',
      length: '15 m',
      height: '4,5 m',
      payload: '4 000 kg'
    }
  },
  {
    id: 'mirage-iv',
    name: 'Dassault Mirage IV',
    category: 'Combat Aircraft',
    role: 'Avion de reconnaissance stratégique',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile delta sans empennage",
      "Biréacteur",
      "Deux membres d'équipage"
    ],
    description: "Basé sur le design du Mirage III mais agrandi pour transporter une arme nucléaire sur de longues distances. Depuis 1996, ils sont uniquement utilisés pour la reconnaissance stratégique.",
    specs: {
      wingspan: '11,8 m',
      length: '23,5 m',
      height: '5,6 m',
      payload: 'Aucun armement transporté (version IVP)'
    }
  },
  {
    id: 'mirage-v-50',
    name: 'Dassault Mirage V/50',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque au sol',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta sans empennage",
      "Nez allongé",
      "Petit radôme radar"
    ],
    description: "Développé à partir du Mirage III, le Mirage V est optimisé pour l'attaque au sol par temps clair. Israël en a reçu un certain nombre pour créer le Nesher/Dagger puis le Kfir.",
    specs: {
      wingspan: '8,2 m',
      length: '15,5 m',
      height: '4,5 m',
      payload: '4 000 kg'
    }
  },
  {
    id: 'mirage-f1c',
    name: 'Dassault Mirage F 1C',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute en flèche",
      "Monoréacteur",
      "Perche de ravitaillement fixe"
    ],
    description: "À la différence des autres Mirage, le F 1 possède une aile conventionnelle offrant un meilleur contrôle à basse altitude. L'Afrique du Sud a étudié l'installation d'un moteur russe sur ses exemplaires.",
    specs: {
      wingspan: '8,4 m',
      length: '15,2 m',
      height: '4,5 m',
      payload: '4 000 kg'
    }
  },
  {
    id: 'mirage-2000',
    name: 'Dassault Mirage 2000',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta sans empennage horizontal",
      "Petites moustaches (canards) fixes sur les entrées d'air",
      "Perche de ravitaillement fixe"
    ],
    description: "Entré en service en 1982 pour remplacer les Mirage III et V. Il a été exporté avec succès vers de nombreux clients. Ses entrées d'air sont plus courtes et plus longues que celles des anciens modèles Mirage.",
    specs: {
      wingspan: '9 m',
      length: '14,4 m',
      height: '5,2 m',
      payload: '6 300 kg'
    }
  },
  {
    id: 'mirage-2000dn',
    name: 'Dassault Mirage 2000D/N',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque (Strike fighter)',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta sans empennage",
      "Deux membres d'équipage (tandem)",
      "Fuselage plus long que la version monoplace"
    ],
    description: "Développé à partir du Mirage 2000, le modèle D est spécialisé dans l'attaque conventionnelle de précision, tandis que le modèle N est équipé pour transporter le missile nucléaire ASMP.",
    specs: {
      wingspan: '9,1 m',
      length: '14,6 m',
      height: '5,1 m',
      payload: '6 300 kg'
    }
  },
  {
    id: 'rafale',
    name: 'Dassault Rafale',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle terrestre et embarqué',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile delta avec de grands plans canards mobiles",
      "Biréacteur",
      "Train d'atterrissage renforcé pour la version marine (Rafale M)"
    ],
    description: "Le chasseur de nouvelle génération de la France. La version Rafale M est navalisée avec une crosse d'appontage et un train avant spécifique. Une version biplace d'entraînement (Rafale D) est aussi produite.",
    specs: {
      wingspan: '10,9 m',
      length: '15,3 m',
      height: '5,3 m',
      payload: '6 000 kg'
    }
  },
  {
    id: 'super-etendard',
    name: 'Dassault Super Etendard',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque embarqué',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile en flèche en position médiane",
      "Monoréacteur",
      "Empennage horizontal monté haut sur la dérive"
    ],
    description: "Développé à partir de l'Etendard IV, il conserve 90% de points communs avec l'original mais possède un moteur plus puissant et une avionique moderne. Célèbre pour son rôle avec le missile Exocet.",
    specs: {
      wingspan: '9,6 m',
      length: '14,3 m',
      height: '3,9 m',
      payload: '2 100 kg'
    }
  },
  {
    id: 'eurofighter-2000',
    name: 'Eurofighter 2000 Typhoon',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Eurofighter GmbH',
    country: 'Allemagne / Italie / Espagne / UK',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile delta sans empennage",
      "Plans canards mobiles à l'avant",
      "Entrées d'air carrées sous le fuselage (ventrales)"
    ],
    description: "Programme européen majeur impliquant quatre pays. Bien que le développement ait été long et complexe, il représente le fer de lance de la défense aérienne européenne du début du XXIe siècle.",
    specs: {
      wingspan: '10,5 m',
      length: '14,5 m',
      height: '4 m',
      payload: '6 500 kg'
    }
  },
  {
    id: 'hjt16-kiran',
    name: 'HAL HJT-16 Kiran',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel / attaque au sol',
    manufacturer: 'HAL',
    country: 'Inde',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Entrées d'air proéminentes",
      "Cockpit avec sièges côte à côte"
    ],
    description: "Le Kiran Mk I était dépourvu d'armement, mais les versions suivantes Mk IA et Mk II (avec moteur Rolls Royce Orpheus) ont été équipées de points d'emport pour la lutte anti-guérilla.",
    specs: {
      wingspan: '10,7 m',
      length: '10,6 m',
      height: '3,6 m',
      payload: '454 kg'
    }
  },
  {
    id: 'iai-kfir',
    name: 'IAI Kfir',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'IAI',
    country: 'Israël',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta sans empennage",
      "Plans canards en flèche",
      "Petit décrochement (notch) sur la dérive"
    ],
    description: "Développé par Israël après l'embargo de 1967, le Kfir est une version améliorée du Mirage V français équipée d'un moteur américain J79.",
    specs: {
      wingspan: '8,2 m',
      length: '15,6 m',
      height: '4,5 m',
      payload: '6 085 kg'
    }
  },
  {
    id: 'kawasaki-t4',
    name: 'Kawasaki T-4',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel',
    manufacturer: 'Kawasaki',
    country: 'Japon',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et en flèche",
      "Biréacteur",
      "Nez très arrondi"
    ],
    description: "Conçu pour remplacer le T-33 et le Fuji T-1. Bien que non armé, il possède des points d'emport pour des pods de contre-mesures électroniques ou de remorquage de cibles.",
    specs: {
      wingspan: '9,9 m',
      length: '13 m',
      height: '4,6 m',
      payload: '0 kg'
    }
  },
  {
    id: 'ia58-pucara',
    name: 'Lockheed Martin (FMA) IA-58 Pucará',
    category: 'Combat Aircraft',
    role: 'Avion anti-guérilla (COIN)',
    manufacturer: 'Lockheed Martin / FMA',
    country: 'Argentine',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Empennage en T"
    ],
    description: "Le Pucará est entré en service en 1976. C'est un appareil robuste conçu pour l'attaque légère et la reconnaissance. Une version monoplace a été étudiée mais abandonnée.",
    specs: {
      wingspan: '14,5 m',
      length: '14,2 m',
      height: '5,4 m',
      payload: '1 500 kg'
    }
  },
  {
    id: 'ia63-pampa',
    name: 'Lockheed Martin (FMA) IA-63 Pampa',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel / attaque au sol',
    manufacturer: 'Lockheed Martin / FMA',
    country: 'Argentine',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute et droite",
      "Monoréacteur",
      "Tuyère arrière très courte"
    ],
    description: "Premier avion à réaction conçu en Argentine, le Pampa a volé en 1987. Très similaire au Dornier Alpha Jet en apparence, il se distingue par son aile haute et son monoréacteur.",
    specs: {
      wingspan: '9,7 m',
      length: '10,9 m',
      height: '4,3 m',
      payload: '1 160 kg'
    }
  },
  {
    id: 'ac130u',
    name: 'Lockheed Martin AC-130U Spectre',
    category: 'Combat Aircraft',
    role: 'Canonnière aérienne (Aerial Gunship)',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute et droite",
      "Quatre turbopropulseurs",
      "Canons dépassant du côté bâbord (gauche) uniquement"
    ],
    description: "Développement ultime du Hercules de combat, l'AC-130U a été amélioré par Boeing. Son centre de gestion de combat lui permet de coordonner des missions allant de l'escorte au sauvetage au combat.",
    specs: { wingspan: '40,4 m', length: '29,8 m', height: '11,7 m', payload: 'Non spécifié (Armement lourd interne)' }
  },
  {
    id: 'f16',
    name: 'Lockheed Martin F-16 Fighting Falcon',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile en flèche moyenne avec corps fusionné (blended body)",
      "Entrée d'air ventrale unique",
      "Dérive unique"
    ],
    description: "Gagnant de la compétition de chasseur léger de l'USAF en 1972, plus de 4 000 exemplaires ont été construits. Il affiche un score impressionnant en combat aérien de 69 victoires pour 0 défaite.",
    specs: { wingspan: '9,4 m', length: '15 m', height: '5,1 m', payload: '4 320 kg' }
  },
  {
    id: 'f22',
    name: 'Lockheed Martin/Boeing F-22 Raptor',
    category: 'Combat Aircraft',
    role: 'Chasseur furtif de supériorité aérienne',
    manufacturer: 'Lockheed Martin / Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile en diamant",
      "Double dérive inclinée",
      "Formes anguleuses pour la furtivité"
    ],
    description: "Vainqueur du programme ATF, le F-22 est le premier chasseur de cinquième génération. Il dispose de trois soutes à armement internes pour maintenir sa signature radar minimale.",
    specs: { wingspan: '13,6 m', length: '18,9 m', height: '5 m', payload: 'Soutes internes' }
  },
  {
    id: 'f104',
    name: 'Lockheed Martin F-104 Starfighter',
    category: 'Combat Aircraft',
    role: 'Intercepteur / attaque au sol',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile droite et très courte",
      "Fuselage très étroit et allongé",
      "Empennage en T"
    ],
    description: "Conçu pour grimper rapidement et intercepter des bombardiers, le F-104 a été basé sur l'expérience de la guerre de Corée. Surnommé 'le missile avec un homme dedans'.",
    specs: { wingspan: '6,7 m', length: '16,7 m', height: '4,1 m', payload: '3 402 kg' }
  },
  {
    id: 'f111',
    name: 'Lockheed Martin (General Dynamics) F-111 Aardvark',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque (Strike fighter)',
    manufacturer: 'General Dynamics',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile à géométrie variable (médiane)",
      "Dérive unique large",
      "Cockpit avec sièges côte à côte"
    ],
    description: "Remplacé dans l'USAF par le F-15E, le F-111 a continué sa carrière en Australie. Il excelle dans les missions de bombardement à basse altitude.",
    specs: { wingspan: '19,2 m (déployée)', length: '22,4 m', height: '5,2 m', payload: '13 610 kg' }
  },
  {
    id: 'f117a',
    name: 'Lockheed Martin F-117A Stealth Fighter',
    category: 'Combat Aircraft',
    role: 'Bombardier furtif',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile en flèche prononcée",
      "Empennage papillon (V-tail)",
      "Surfaces planes facettées"
    ],
    description: "Révélé au public en 1988 après avoir volé secrètement dès 1982. C'est le premier avion opérationnel conçu entièrement autour de la furtivité radar.",
    specs: { wingspan: '13,2 m', length: '20,1 m', height: '3,8 m', payload: '1 814 kg' }
  },
  {
    id: 't33',
    name: 'Lockheed Martin T-33 Shooting Star',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Réservoirs en bout d'aile (wingtip tanks)",
      "Entrées d'air sur les côtés du fuselage"
    ],
    description: "Le plus ancien appareil de cette section, dérivé du P-80. Connu sous le nom de 'T-Bird', il est resté en service dans de nombreuses forces aériennes pour l'entraînement et l'attaque légère.",
    specs: { wingspan: '11,8 m', length: '11,5 m', height: '3,5 m', payload: 'Armement léger possible' }
  },
  {
    id: 'mig-at',
    name: 'MiG-MAPO Advanced Trainer (MiG-AT)',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel / attaque au sol',
    manufacturer: 'MiG-MAPO',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Deux moteurs au-dessus de l'aile",
      "Bord d'attaque de l'aile avec décrochement (cranked leading edge)"
    ],
    description: "Conçu pour remplacer les L-29 et L-39 dans l'armée russe. Il est en compétition directe avec le Yakovlev Yak-130.",
    specs: { wingspan: '10 m', length: '11,3 m', height: '4,4 m', payload: '2 000 kg' }
  },
  {
    id: 'mig15',
    name: 'MiG-MAPO (Mikoyan) MiG-15 Fagot',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel / chasseur d\'attaque',
    manufacturer: 'Mikoyan-Gurevich',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile médiane en flèche",
      "Entrée d'air frontale (nez)",
      "Dérive haute et imposante"
    ],
    description: "Apparu en 1947, il combinait l'aérodynamique allemande et la technologie des moteurs britanniques. Très utilisé en version biplace d'entraînement (UTI).",
    specs: { wingspan: '10,1 m', length: '11,1 m', height: '3,4 m', payload: 'Canons internes' }
  },
  {
    id: 'mig17',
    name: 'MiG-MAPO (Mikoyan) MiG-17 Fresco',
    category: 'Combat Aircraft',
    role: 'Intercepteur / attaque au sol',
    manufacturer: 'Mikoyan-Gurevich',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile médiane en flèche",
      "Entrée d'air frontale",
      "Petit radôme dans l'entrée d'air pour certaines versions"
    ],
    description: "Construit autour d'un moteur plus puissant que celui du MiG-15, il était plus grand et capable d'atteindre Mach 1.",
    specs: { wingspan: '9,7 m', length: '11,4 m', height: '3,8 m', payload: '500 kg' }
  },
  {
    id: 'mig21',
    name: 'MiG-MAPO (Mikoyan) MiG-21 Fishbed',
    category: 'Combat Aircraft',
    role: 'Intercepteur / attaque au sol',
    manufacturer: 'Mikoyan-Gurevich',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta médiane",
      "Empennage horizontal en flèche",
      "Entrée d'air frontale avec cône central"
    ],
    description: "A volé pour la première fois en 1957. C'est l'un des avions de combat les plus produits au monde, avec de nombreuses versions comme le 'Fishbed J' et le 'Mongol' (biplace).",
    specs: { wingspan: '7,2 m', length: '15,7 m', height: '4,1 m', payload: 'Canons et missiles' }
  },
  {
    id: 'mig23',
    name: 'MiG-MAPO (Mikoyan) MiG-23 Flogger',
    category: 'Combat Aircraft',
    role: 'Intercepteur / attaque au sol',
    manufacturer: 'Mikoyan-Gurevich',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute à géométrie variable",
      "Monoréacteur",
      "Entrées d'air latérales rectangulaires"
    ],
    description: "Entré en service en 1970 pour remplacer le MiG-21. Il dispose d'un radar puissant et a été largement exporté.",
    specs: { wingspan: '13,9 m (déployée)', length: '15,6 m', height: '4,8 m', payload: '3 000 kg' }
  },
  {
    id: 'mig25',
    name: 'MiG-MAPO MiG-25 Foxbat',
    category: 'Combat Aircraft',
    role: 'Intercepteur / reconnaissance',
    manufacturer: 'Mikoyan-Gurevich',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Double dérive",
      "Deux moteurs massifs avec de grandes entrées d'air rectangulaires"
    ],
    description: "Conçu pour contrer les bombardiers américains supersoniques Mach 3. C'est l'un des avions de combat les plus rapides jamais construits.",
    specs: { wingspan: '14 m', length: '23,8 m', height: '6,1 m', payload: 'Missiles lourds' }
  },
  {
    id: 'mig27',
    name: 'MiG-MAPO (Mikoyan) MiG-27 Flogger',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque au sol',
    manufacturer: 'Mikoyan-Gurevich',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute à géométrie variable",
      "Nez plat et pointu (contenant un désignateur laser)",
      "Pas de radar de nez contrairement au MiG-23"
    ],
    description: "Développement du MiG-23 optimisé pour l'attaque au sol avec un moteur plus puissant et un nez redessiné.",
    specs: { wingspan: '13,9 m (déployée)', length: '17,1 m', height: '4,8 m', payload: '4 000 kg' }
  },
  {
    id: 'mig29',
    name: 'MiG-MAPO MiG-29 Fulcrum',
    category: 'Combat Aircraft',
    role: 'Intercepteur / attaque au sol',
    manufacturer: 'MiG-MAPO',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane en flèche",
      "Double dérive",
      "Entrées d'air ventrales"
    ],
    description: "Apparu dans la presse occidentale en 1986, le MiG-29 a remplacé de nombreux types de chasseurs russes lors de son entrée en service en 1983.",
    specs: { wingspan: '11,4 m', length: '14,9 m', height: '4,7 m', payload: '3 000 kg' }
  },
  {
    id: 'mig31',
    name: 'MiG-MAPO MiG-31 Foxhound',
    category: 'Combat Aircraft',
    role: 'Intercepteur stratégique',
    manufacturer: 'MiG-MAPO',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Double dérive",
      "Petites verrières de cockpit"
    ],
    description: "Amélioration majeure du MiG-25. Il est doté du premier radar à balayage électronique au monde et peut intercepter des missiles de croisière.",
    specs: { wingspan: '13,5 m', length: '22,7 m', height: '6,2 m', payload: 'Missiles air-air longue portée' }
  },
  {
    id: 'mitsubishi-t2f1',
    name: 'Mitsubishi T2/F1',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel / attaque au sol',
    manufacturer: 'Mitsubishi',
    country: 'Japon',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Double moteur",
      "Bosse dorsale (hump) derrière le cockpit"
    ],
    description: "Le biplace T2 fut le premier avion supersonique japonais. Le monoplace F1 en fut dérivé pour l'appui aérien rapproché. Souvent confondu avec le Jaguar.",
    specs: { wingspan: '7,9 m', length: '17,3 m', height: '4,5 m', payload: '2 721 kg' }
  },
  {
    id: 'mitsubishi-f2',
    name: 'Mitsubishi F2',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Mitsubishi',
    country: 'Japon',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile médiane / delta",
      "Verrière en trois parties",
      "Entrée d'air sous le fuselage"
    ],
    description: "Version largement modifiée du F-16C américain. Il possède une envergure plus grande et davantage de points d'emport.",
    specs: { wingspan: '11,1 m', length: '15,5 m', height: '4,9 m', payload: '6 500 kg' }
  },
  {
    id: 'q5-fantan',
    name: 'NAMC Q-5 Fantan',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque au sol',
    manufacturer: 'NAMC',
    country: 'Chine',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane en flèche",
      "Nez pointu",
      "Deux moteurs"
    ],
    description: "Développé à partir du MiG-19, le Q-5 possède un fuselage avant totalement redessiné avec des entrées d'air latérales.",
    specs: { wingspan: '9,7 m', length: '15,4 m', height: '4,5 m', payload: '2 000 kg' }
  },
  {
    id: 'a7-corsair',
    name: 'Northrop Grumman (Vought) A-7 Corsair',
    category: 'Combat Aircraft',
    role: 'Avion d\'attaque au sol',
    manufacturer: 'Vought',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute en flèche",
      "Monoréacteur",
      "Entrée d'air nasale (chin intake)"
    ],
    description: "Livré à l'US Navy en 1966. Bien que retiré du service américain, de nombreux exemplaires ont été transférés à des alliés de l'OTAN.",
    specs: { wingspan: '11,8 m', length: '14,1 m', height: '4,9 m', payload: '6 805 kg' }
  },
  {
    id: 'a10-thunderbolt',
    name: 'Northrop Grumman (Fairchild) A-10 Thunderbolt',
    category: 'Combat Aircraft',
    role: 'Avion d\'appui rapproché',
    manufacturer: 'Fairchild',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Moteurs montés dans des nacelles à l'arrière du fuselage",
      "Double dérive"
    ],
    description: "Conçu pour la survie sur le champ de bataille, il dispose d'un blindage en titane capable de résister à des tirs de 23 mm.",
    specs: { wingspan: '17,5 m', length: '16,3 m', height: '4,5 m', payload: '7 257 kg' }
  },
  {
    id: 'b2-spirit',
    name: 'Northrop Grumman B-2 Spirit',
    category: 'Combat Aircraft',
    role: 'Bombardier furtif stratégique',
    manufacturer: 'Northrop Grumman',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile volante sans empennage",
      "Bord de fuite en double W",
      "Design ultra-lisse pour la furtivité"
    ],
    description: "L'avion le plus cher jamais construit lors de sa sortie. Sa capacité de frappe conventionnelle est améliorée avec la technologie GPS.",
    specs: { wingspan: '52,4 m', length: '21 m', height: '5,2 m', payload: '22 680 kg' }
  },
  {
    id: 'ea6b-prowler',
    name: 'Northrop Grumman EA-6B Prowler',
    category: 'Combat Aircraft',
    role: 'Guerre électronique embarquée',
    manufacturer: 'Grumman',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane en flèche",
      "Quatre membres d'équipage",
      "Carénage (pod) volumineux au sommet de la dérive"
    ],
    description: "Dérivé de l'A-6 Intruder, il est spécialisé dans le brouillage des radars ennemis et la destruction des sites de missiles.",
    specs: { wingspan: '15,9 m', length: '18,1 m', height: '5 m', payload: '4 547 kg' }
  },
  {
    id: 'f5-tiger',
    name: 'Northrop Grumman F-5 Tiger',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle léger',
    manufacturer: 'Northrop',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux moteurs",
      "Dérive unique"
    ],
    description: "Chasseur supersonique simple et efficace qui a connu un immense succès à l'exportation vers les pays de l'OTAN et les alliés des USA.",
    specs: { wingspan: '8 m', length: '14,5 m', height: '4,1 m', payload: '3 175 kg' }
  },
  {
    id: 'f8-crusader',
    name: 'Northrop Grumman (Vought) F-8 Crusader',
    category: 'Combat Aircraft',
    role: 'Intercepteur embarqué',
    manufacturer: 'Vought',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute en flèche à incidence variable",
      "Entrée d'air nasale",
      "Dérive imposante"
    ],
    description: "Premier chasseur supersonique de l'US Navy. Il se distingue par son aile qui peut se relever pour faciliter les décollages et appontages.",
    specs: { wingspan: '10,1 m', length: '16,6 m', height: '5 m', payload: 'Canons et missiles' }
  },
  {
    id: 'f14-tomcat',
    name: 'Northrop Grumman F-14 Tomcat',
    category: 'Combat Aircraft',
    role: 'Intercepteur embarqué',
    manufacturer: 'Grumman',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute à géométrie variable",
      "Double dérive",
      "Deux moteurs séparés par un large tunnel"
    ],
    description: "Célèbre intercepteur doté du missile longue portée Phoenix. Il est capable d'engager simultanément plusieurs cibles à très longue distance.",
    specs: { wingspan: '19,5 m (déployée)', length: '19,1 m', height: '4,8 m', payload: '6 577 kg' }
  },
  {
    id: 't38-talon',
    name: 'Northrop Grumman T-38 Talon',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel',
    manufacturer: 'Northrop',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux moteurs",
      "Deux sièges en tandem"
    ],
    description: "Conçu pour simuler les caractéristiques des chasseurs supersoniques. Utilisé par l'USAF et la NASA pour maintenir l'entraînement des pilotes et des astronautes.",
    specs: { wingspan: '7,7 m', length: '14,1 m', height: '3,9 m', payload: 'Aucun standard' }
  },
  {
    id: 'k8-karakorum',
    name: 'PAC K-8 Karakorum 8',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel / attaque au sol',
    manufacturer: 'PAC / NAMC',
    country: 'Chine / Pakistan',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoréacteur",
      "Dérive avec décrochement (cranked fin)"
    ],
    description: "Programme conjoint entre la Chine et le Pakistan. Tous les appareils sont construits en Chine.",
    specs: { wingspan: '9,6 m', length: '11,6 m', height: '4,2 m', payload: '943 kg' }
  },
  {
    id: 'tornado-ids',
    name: 'Panavia Tornado IDS',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Panavia',
    country: 'Allemagne / Italie / UK',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute à géométrie variable",
      "Grande dérive unique",
      "Deux moteurs"
    ],
    description: "Optimisé pour la pénétration à basse altitude. Utilisé également pour la guerre électronique (ECR) et la reconnaissance.",
    specs: { wingspan: '13,9 m (déployée)', length: '15,7 m', height: '5,9 m', payload: '9 000 kg' }
  },
  {
    id: 'tornado-adv',
    name: 'Panavia Tornado ADV',
    category: 'Combat Aircraft',
    role: 'Intercepteur',
    manufacturer: 'Panavia',
    country: 'Allemagne / Italie / UK',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute à géométrie variable",
      "Grande dérive unique",
      "Fuselage plus long que la version IDS"
    ],
    description: "Version de défense aérienne développée par le Royaume-Uni avec un fuselage allongé pour loger le radar Foxhunter.",
    specs: { wingspan: '13,9 m (déployée)', length: '18,7 m', height: '5,6 m', payload: '8 500 kg' }
  },
  {
    id: 'draken',
    name: 'Saab Draken',
    category: 'Combat Aircraft',
    role: 'Intercepteur / reconnaissance',
    manufacturer: 'Saab',
    country: 'Suède',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile en double delta médiane",
      "Dérive unique",
      "Monoréacteur"
    ],
    description: "Premier chasseur supersonique d'Europe de l'Ouest, entré en service en 1955. Il commence à être remplacé par le Gripen.",
    specs: { wingspan: '9,4 m', length: '15,4 m', height: '3,9 m', payload: 'Armement interne et externe' }
  },
  {
    id: 'viggen',
    name: 'Saab Viggen',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Saab',
    country: 'Suède',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile en double delta tandem",
      "Monoréacteur",
      "Bosse dorsale (hump)"
    ],
    description: "Conçu pour opérer depuis des routes et des pistes courtes. Sa configuration en tandem delta était révolutionnaire lors de son apparition en 1967.",
    specs: { wingspan: '10,6 m', length: '15,6 m', height: '5,9 m', payload: 'Charge militaire lourde' }
  },
  {
    id: 'gripen',
    name: 'Saab Gripen',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Saab',
    country: 'Suède',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta médiane / arrière",
      "Plans canards mobiles à l'avant",
      "Monoréacteur"
    ],
    description: "Premier chasseur européen de cinquième génération à entrer en service. Il est très compact et agile.",
    specs: { wingspan: '8,4 m', length: '14,1 m', height: '4,5 m', payload: '4 500 kg' }
  },
  {
    id: 'saab105',
    name: 'Saab 105',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel / attaque au sol',
    manufacturer: 'Saab',
    country: 'Suède',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et en flèche",
      "Empennage en T",
      "Cockpit avec sièges côte à côte"
    ],
    description: "Unique par son utilisation à tous les stades de l'entraînement, du primaire au tactique, avec un rôle secondaire d'attaque au sol.",
    specs: { wingspan: '9,5 m', length: '10,8 m', height: '2,7 m', payload: '6 points d\'emport' }
  },
  {
    id: 'j8-finback',
    name: 'SAIG J-8 Finback',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'SAIG',
    country: 'Chine',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile delta médiane",
      "Empennage horizontal en flèche",
      "Deux moteurs"
    ],
    description: "Bien qu'influencé par les designs russes, le J-8 est une conception chinoise originale. Le J-8II possède un nez plein avec radar.",
    specs: { wingspan: '10 m', length: '19 m', height: '5,2 m', payload: '7 points d\'emport' }
  },
  {
    id: 'jaguar',
    name: 'SEPECAT Jaguar',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque au sol',
    manufacturer: 'SEPECAT',
    country: 'France / UK',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Deux moteurs",
      "Dérive unique"
    ],
    description: "Lancé en 1965 comme entraîneur, il a évolué en un redoutable avion d'attaque au sol. Certaines versions indiennes ont un rôle anti-navire.",
    specs: { wingspan: '8,7 m', length: '15,5 m', height: '4,9 m', payload: '4 763 kg' }
  },
  {
    id: 'galeb-g2',
    name: 'SOKO G-2 Galeb',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel / attaque au sol',
    manufacturer: 'SOKO',
    country: 'Yougoslavie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Réservoirs en bout d'aile",
      "Monoréacteur"
    ],
    description: "Le premier jet conçu par SOKO. Plusieurs exemplaires ont été utilisés lors des conflits civils en ex-Yougoslavie.",
    specs: { wingspan: '10,5 m', length: '10,3 m', height: '3,3 m', payload: '300 kg' }
  },
  {
    id: 'super-galeb-g4',
    name: 'SOKO G-4 Super Galeb',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel / attaque au sol',
    manufacturer: 'SOKO',
    country: 'Yougoslavie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse en flèche",
      "Dérive ventrale (ventral fin)",
      "Monoréacteur"
    ],
    description: "Sa production a cessé en 1992 après le démantèlement de l'usine lors de la guerre.",
    specs: { wingspan: '9,9 m', length: '12,5 m', height: '4,3 m', payload: '2 053 kg' }
  },
  {
    id: 'su7-fitter',
    name: 'Sukhoi Su-7 Fitter A',
    category: 'Combat Aircraft',
    role: 'Chasseur d\'attaque au sol',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile médiane en flèche",
      "Entrée d'air frontale",
      "Monoréacteur"
    ],
    description: "Conçu comme intercepteur, il a été principalement utilisé pour l'attaque au sol grâce à sa robustesse.",
    specs: { wingspan: '8,8 m', length: '16,8 m', height: '4,8 m', payload: '1 000 kg' }
  },
  {
    id: 'su17-22-fitter',
    name: 'Sukhoi Su-17/22 Fitter D/K',
    category: 'Combat Aircraft',
    role: 'Avion d\'attaque au sol',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse à géométrie variable",
      "Entrée d'air frontale",
      "Monoréacteur"
    ],
    description: "Conversion du Su-7 avec des ailes à géométrie variable pour améliorer les performances au décollage et à basse altitude.",
    specs: { wingspan: '13,8 m (déployée)', length: '18,7 m', height: '5 m', payload: '3 175 kg' }
  }
,
  {
    id: 'su24-fencer',
    name: 'Sukhoi Su-24 Fencer',
    category: 'Combat Aircraft',
    role: 'Bombardier tactique / reconnaissance',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute à géométrie variable",
      "Entrées d'air carrées",
      "Cockpit avec sièges côte à côte"
    ],
    description: "Le Su-24 a été conçu pour remplacer les jets auxiliaires par une aile à géométrie variable en 1970. L'Iran a hérité de Su-24 irakiens pendant la guerre du Golfe de 1991.",
    specs: { wingspan: '17,6 m (déployée)', length: '24,5 m', height: '4,9 m', payload: '8 000 kg' }
  },
  {
    id: 'su25-frogfoot',
    name: 'Sukhoi Su-25 Frogfoot',
    category: 'Combat Aircraft',
    role: 'Avion d\'attaque au sol',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Deux moteurs de chaque côté du fuselage",
      "Dérive unique"
    ],
    description: "Engagé intensivement durant la guerre en Afghanistan, le Su-25 a subi de nombreuses modifications, notamment le Su-25T avec une bosse dorsale plus large pour plus de carburant.",
    specs: { wingspan: '14,4 m', length: '15,5 m', height: '4,8 m', payload: '4 400 kg' }
  },
  {
    id: 'su27-flanker',
    name: 'Sukhoi Su-27 Flanker',
    category: 'Combat Aircraft',
    role: 'Intercepteur / chasseur d\'attaque',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane en flèche",
      "Double dérive",
      "Entrées d'air ventrales"
    ],
    description: "Connu sous le nom de Flanker par l'OTAN, le Su-27 a eu un impact majeur sur les observateurs occidentaux. La version Su-27S a été développée pour l'aviation frontale russe.",
    specs: { wingspan: '14,7 m', length: '21,9 m', height: '5,9 m', payload: '4 000 kg' }
  },
  {
    id: 'su30-flanker',
    name: 'Sukhoi Su-30 Flanker',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane en flèche",
      "Double dérive",
      "Version biplace (deux sièges)"
    ],
    description: "Conserve les capacités air-air du Su-27 mais optimisé pour des missions longues de 10 heures. L'Inde a commandé des modèles avec tuyères à poussée vectorielle.",
    specs: { wingspan: '14,7 m', length: '21,9 m', height: '5,9 m', payload: '8 000 kg' }
  },
  {
    id: 'su33-35-37-flanker',
    name: 'Sukhoi Su-33/35/37 Flanker',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle / embarqué',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane en flèche",
      "Plans canards à l'avant",
      "Double dérive"
    ],
    description: "Le Su-33 a été conçu pour opérer depuis le porte-avions Kuznetsov. Le Su-37 est une version avancée avec poussée vectorielle.",
    specs: { wingspan: '15,2 m', length: '22,2 m', height: '6,4 m', payload: '8 000 kg' }
  },
  {
    id: 'su34-flanker',
    name: 'Sukhoi Su-34 Flanker',
    category: 'Combat Aircraft',
    role: 'Bombardier d\'attaque',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Nez plat 'en bec de canard'",
      "Cockpit biplace côte à côte",
      "Double dérive"
    ],
    description: "Développement radical du Su-27, il dispose d'une avionique d'attaque avancée et même d'un office et de toilettes pour les missions longues.",
    specs: { wingspan: '14,7 m', length: '25,5 m', height: '6,2 m', payload: '8 000 kg' }
  },
  {
    id: 'tu16-badger',
    name: 'Tupolev Tu-16 Badger',
    category: 'Combat Aircraft',
    role: 'Attaque maritime / guerre électronique',
    manufacturer: 'Tupolev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane en flèche",
      "Nez vitré",
      "Moteurs intégrés à l'emplanture des ailes"
    ],
    description: "Premier vol en 1952. La Chine en construit une copie exacte sous le nom de H-6. Utilisé pour la reconnaissance et la guerre électronique en Ukraine.",
    specs: { wingspan: '32,9 m', length: '34,8 m', height: '10,4 m', payload: '9 000 kg' }
  },
  {
    id: 'tu22-blinder',
    name: 'Tupolev Tu-22 Blinder',
    category: 'Combat Aircraft',
    role: 'Bombardier stratégique / attaque maritime',
    manufacturer: 'Tupolev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux moteurs montés sur la queue de chaque côté de la dérive",
      "Carénages sur les ailes"
    ],
    description: "Développé en 1956 comme porteur de missiles supersoniques. Utilisé par l'Irak, la Libye et l'Ukraine.",
    specs: { wingspan: '23,5 m', length: '42,6 m', height: '10 m', payload: '12 000 kg' }
  },
  {
    id: 'tu22m-backfire',
    name: 'Tupolev Tu-22M Backfire',
    category: 'Combat Aircraft',
    role: 'Bombardier stratégique / attaque maritime',
    manufacturer: 'Tupolev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse à géométrie variable",
      "Deux moteurs internes",
      "Grandes entrées d'air latérales"
    ],
    description: "Observé pour la première fois en 1970, il constitue l'épine dorsale de la force de bombardement stratégique russe.",
    specs: { wingspan: '34,3 m (déployée)', length: '42,4 m', height: '11,1 m', payload: '24 000 kg' }
  },
  {
    id: 'tu95-bear',
    name: 'Tupolev Tu-95/142 Bear',
    category: 'Combat Aircraft',
    role: 'Bombardier stratégique / reconnaissance',
    manufacturer: 'Tupolev',
    country: 'Russie',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile médiane en flèche",
      "Quatre turbopropulseurs avec hélices contrarotatives",
      "Nez vitré ou plein selon la version"
    ],
    description: "Surnommé 'Bear' par l'OTAN, cet avion est emblématique de la guerre froide. La version Tu-142 est dédiée à la lutte anti-sous-marine.",
    specs: { wingspan: '51,1 m', length: '49,5 m', height: '12,1 m', payload: '11 340 kg' }
  },
  {
    id: 'tu160-blackjack',
    name: 'Tupolev Tu-160 Blackjack',
    category: 'Combat Aircraft',
    role: 'Bombardier stratégique',
    manufacturer: 'Tupolev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse à géométrie variable",
      "Fuselage fusionné (blended fuselage)",
      "Moteurs sous les ailes"
    ],
    description: "Plus grand que le B-1B américain, c'est le bombardier stratégique le plus avancé de Russie. Seuls 36 exemplaires ont été construits.",
    specs: { wingspan: '55,7 m (déployée)', length: '54,1 m', height: '13,1 m', payload: '16 300 kg' }
  },
  {
    id: 'yak130',
    name: 'Yakovlev/Aermacchi Yak-130',
    category: 'Combat Aircraft',
    role: 'Entraîneur opérationnel / attaque au sol',
    manufacturer: 'Yakovlev / Aermacchi',
    country: 'Russie / Italie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane en flèche",
      "Winglets en bout d'aile",
      "Deux moteurs"
    ],
    description: "Développé en partenariat avec l'Italie pour la compétition du nouvel entraîneur russe face au MiG-AT.",
    specs: { wingspan: '10,6 m', length: '11,9 m', height: '4,7 m', payload: '3 000 kg' }
  },
  {
    id: 'n262-fregate',
    name: 'Aérospatiale (Nord) N262 Frégate',
    category: 'Combat Support Aircraft',
    role: 'Transport léger',
    manufacturer: 'Aérospatiale (Nord)',
    country: 'France',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Plan fixe horizontal de la queue positionné bas"
    ],
    description: "Utilisé principalement par l'armée de l'air française, cet avion n'a pas connu de succès majeur à l'exportation. La version 262E sert à l'entraînement à la navigation.",
    specs: { wingspan: '22,6 m', length: '19,3 m', height: '6,2 m', payload: '3 075 kg' }
  },
  {
    id: 'cn235m',
    name: 'Airtech/CASA CN-235M',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique léger / patrouille maritime',
    manufacturer: 'CASA / IPTN',
    country: 'Espagne / Indonésie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et en flèche",
      "Bimoteur turbopropulsé",
      "Rampe de chargement arrière"
    ],
    description: "Projet conjoint entre l'Espagne et l'Indonésie. Très réussi sur les marchés civils et militaires. La version de patrouille maritime possède un large radar ventral.",
    specs: { wingspan: '25,8 m', length: '21,4 m', height: '8,2 m', payload: '6 000 kg' }
  },
  {
    id: 'g222',
    name: 'Alenia G222',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique léger',
    manufacturer: 'Alenia',
    country: 'Italie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Fuselage court et trapu"
    ],
    description: "Conçu à l'origine par Fiat/Aeritalia. Il existe des versions spécialisées dans la guerre électronique (222VS) et la lutte contre les incendies.",
    specs: { wingspan: '28,7 m', length: '22,7 m', height: '9,8 m', payload: '9 000 kg' }
  },
  {
    id: 'an12-cub',
    name: 'Antonov An-12 Cub',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique moyen',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute et droite",
      "Quatre turbopropulseurs",
      "Nez vitré"
    ],
    description: "Dérivé de l'avion de ligne civil An-10. La version chinoise construite sous licence est le Y-8. Il dispose d'un poste de tir dans la queue.",
    specs: { wingspan: '38 m', length: '33,1 m', height: '10,5 m', payload: '20 000 kg' }
  },
  {
    id: 'an22-antheus',
    name: 'Antonov An-22 Antheus',
    category: 'Combat Support Aircraft',
    role: 'Transport stratégique lourd',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute et droite",
      "Quatre turbopropulseurs massifs",
      "Double dérive"
    ],
    description: "Apparu en 1965, cet avion géant est capable de transporter des charges énormes. Environ 45 exemplaires restaient en service lors de la parution.",
    specs: { wingspan: '64,4 m', length: '57,9 m', height: '12,5 m', payload: '80 000 kg' }
  },
  {
    id: 'an24-coke',
    name: 'Antonov An-24 Coke',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique léger',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Dérive avec un décrochement (cranked tailfin)"
    ],
    description: "Conçu initialement pour les lignes intérieures soviétiques, il a été facilement adapté aux besoins militaires pour opérer sur des pistes rudimentaires.",
    specs: { wingspan: '29,9 m', length: '23,8 m', height: '8,5 m', payload: '5 500 kg' }
  },
  {
    id: 'an26-curl',
    name: 'Antonov An-26 Curl',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique léger',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Rampe de chargement arrière"
    ],
    description: "Évolution de l'An-24 avec une unité de queue redessinée pour intégrer une rampe de chargement et un bulbe d'observation sur le côté gauche.",
    specs: { wingspan: '29,5 m', length: '23,8 m', height: '8,5 m', payload: '5 500 kg' }
  },
  {
    id: 'an32-cline',
    name: 'Antonov An-32 Cline',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique léger',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute",
      "Moteurs montés au-dessus de l'aile (overwing)",
      "Rampe de chargement arrière"
    ],
    description: "Version surmotorisée de l'An-26 conçue pour opérer dans des conditions de chaleur et de haute altitude, les moteurs surélevés évitant l'ingestion de débris.",
    specs: { wingspan: '29,2 m', length: '23,6 m', height: '8,7 m', payload: '6 700 kg' }
  },
  {
    id: 'an70',
    name: 'Antonov An-70',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique moyen',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Propfan',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute en flèche",
      "Quatre moteurs à hélices propfan",
      "Plan fixe horizontal de la queue bas"
    ],
    description: "Conçu pour remplacer l'An-12. C'est le premier avion de transport à utiliser des moteurs propfan pour une meilleure efficacité.",
    specs: { wingspan: '44,1 m', length: '40,7 m', height: '16,4 m', payload: '47 000 kg' }
  },
  {
    id: 'an72-74-coaler',
    name: 'Antonov An-72/74 Coaler',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique léger',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Moteurs montés au-dessus de l'aile pour l'effet Coanda (STOL)",
      "Empennage en T"
    ],
    description: "Conçu pour des décollages et atterrissages courts (STOL). L'An-72 est la désignation militaire et l'An-74 la version civile.",
    specs: { wingspan: '31,9 m', length: '28,1 m', height: '8,7 m', payload: '10 000 kg' }
  },
  {
    id: 'an124-condor',
    name: 'Antonov An-124 Condor',
    category: 'Combat Support Aircraft',
    role: 'Transport stratégique lourd',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute en flèche",
      "Quatre turboréacteurs",
      "Radar de nez (chin radar)"
    ],
    description: "Détenteur de 20 records du monde, c'est l'un des plus grands avions de transport en production. Il peut charger depuis le nez ou l'arrière.",
    specs: { wingspan: '73,3 m', length: '69,1 m', height: '21,1 m', payload: '150 000 kg' }
  },
  {
    id: 'an225-mriya',
    name: 'Antonov An-225 Mriya',
    category: 'Combat Support Aircraft',
    role: 'Transport stratégique super-lourd',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Jet',
    enginesCount: 6,
    recognitionTips: [
      "Aile haute en flèche",
      "Six turboréacteurs",
      "Double dérive"
    ],
    description: "Le plus grand avion du monde. Un seul exemplaire a été construit pour transporter la navette spatiale soviétique Bourane.",
    specs: { wingspan: '88,4 m', length: '84 m', height: '18,2 m', payload: '250 000 kg' }
  },
  {
    id: 'nimrod',
    name: 'BAe (HS) Nimrod',
    category: 'Combat Support Aircraft',
    role: 'Patrouille maritime',
    manufacturer: 'British Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile médiane en flèche",
      "Moteurs intégrés à l'emplanture des ailes",
      "Fuselage en 'double bulle'"
    ],
    description: "Issu du premier jet de ligne Comet. En service pour la patrouille maritime (MR2) et la reconnaissance électronique (R1).",
    specs: { wingspan: '35 m', length: '39,3 m', height: '9,1 m', payload: '6 120 kg' }
  },
  {
    id: 'vc10',
    name: 'BAe (BAC/Vickers) VC10',
    category: 'Combat Support Aircraft',
    role: 'Ravitailleur en vol / transport',
    manufacturer: 'British Aerospace / Vickers',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre moteurs montés à l'arrière du fuselage",
      "Empennage en T"
    ],
    description: "Ancien avion de ligne converti en ravitailleur pour la RAF. Très robuste, il est idéal pour opérer sous des climats tropicaux.",
    specs: { wingspan: '44,5 m', length: '48,4 m', height: '12 m', payload: '18 039 kg' }
  },
  {
    id: 'be12-chaika',
    name: 'Beriev Be-12 Chaika',
    category: 'Combat Support Aircraft',
    role: 'Amphibie de patrouille maritime',
    manufacturer: 'Beriev',
    country: 'Russie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute 'en mouette' (cranked wing)",
      "Double dérive",
      "Nez vitré"
    ],
    description: "Conçu pour remplacer le Be-6. Il utilise des turbopropulseurs mais conserve la coque à redan unique de son prédécesseur.",
    specs: { wingspan: '29,8 m', length: '30,2 m', height: '7 m', payload: 'Interne (Torpilles, mines)' }
  },
  {
    id: 'a40-albatross',
    name: 'Beriev A-40 Albatross',
    category: 'Combat Support Aircraft',
    role: 'Amphibie de patrouille maritime',
    manufacturer: 'Beriev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Moteurs montés sur le dessus du fuselage arrière",
      "Empennage en T"
    ],
    description: "Le plus grand amphibie à réaction au monde. Il a établi de nombreux records mondiaux dans sa catégorie.",
    specs: { wingspan: '41,6 m', length: '43,8 m', height: '11,1 m', payload: '6 500 kg' }
  },
  {
    id: 'e3-sentry',
    name: 'Boeing E-3 Sentry',
    category: 'Combat Support Aircraft',
    role: 'Système de détection et de commandement aéroporté (AWACS)',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre turboréacteurs",
      "Dôme radar rotatif (rotodome) sur le fuselage"
    ],
    description: "L'avion AWACS le plus utilisé au monde. Basé sur la cellule du Boeing 707, il sert dans cinq forces aériennes différentes.",
    specs: { wingspan: '44,4 m', length: '46,6 m', height: '12,7 m', payload: 'Radar AN/APY-1/2' }
  },
  {
    id: 'e4b',
    name: 'Boeing E-4B',
    category: 'Combat Support Aircraft',
    role: 'Poste de commandement d\'urgence national',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Basé sur le Boeing 747-200",
      "Bosse dorsale derrière le cockpit (contenant les équipements satellite)",
      "Configuration à double pont partiel"
    ],
    description: "Permet au Président des USA de rester en contact avec toutes les branches du gouvernement en cas de destruction des installations au sol.",
    specs: { wingspan: '59,6 m', length: '70,5 m', height: '19,3 m', payload: 'Systèmes comms avancés' }
  },
  {
    id: 'e767-awacs',
    name: 'Boeing E-767 AWACS',
    category: 'Combat Support Aircraft',
    role: 'Système de détection et de commandement aéroporté (AWACS)',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs",
      "Dôme radar rotatif sur le fuselage"
    ],
    description: "Successeur du E-3 Sentry, basé sur la cellule du Boeing 767. Pour l'instant, seul le Japon l'utilise.",
    specs: { wingspan: '47,6 m', length: '48,5 m', height: '15,8 m', payload: 'Radar AN/APY-2' }
  },
  {
    id: 'kc135-stratotanker',
    name: 'Boeing KC-135 Stratotanker',
    category: 'Combat Support Aircraft',
    role: 'Ravitailleur en vol / transport',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre turboréacteurs",
      "Perche de ravitaillement extensible sous la queue"
    ],
    description: "Le pilier du ravitaillement en vol de l'USAF depuis 1957. Plus de 750 exemplaires ont été construits.",
    specs: { wingspan: '39,9 m', length: '41,5 m', height: '11,7 m', payload: '92 210 kg de carburant' }
  },
  {
    id: 'rc135s-cobra-ball',
    name: 'Boeing RC-135S Cobra Ball',
    category: 'Combat Support Aircraft',
    role: 'Reconnaissance de missiles balistiques',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre turboréacteurs",
      "Larges fenêtres circulaires sur le fuselage"
    ],
    description: "Utilisé pour suivre les tests de missiles balistiques. Une aile est peinte en noir pour réduire les reflets lors des observations.",
    specs: { wingspan: '44,4 m', length: '49,9 m', height: '12,9 m', payload: 'Équipement d\'imagerie puissant' }
  },
  {
    id: 'rc135u-combat-sent',
    name: 'Boeing RC-135U Combat Sent',
    category: 'Combat Support Aircraft',
    role: 'Avion de renseignement électronique (SIGINT)',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre turboréacteurs",
      "Entrée d'air sous le nez (chin intake)"
    ],
    description: "Collecte des émissions électroniques fines provenant des sites de missiles sol-air et des radars ennemis.",
    specs: { wingspan: '44,4 m', length: '46,6 m', height: '12,9 m', payload: 'Systèmes SIGINT classifiés' }
  },
  {
    id: 'rc135v-rivet-joint',
    name: 'Boeing RC-135V Rivet Joint',
    category: 'Combat Support Aircraft',
    role: 'Avion de renseignement électronique (SIGINT)',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre turboréacteurs",
      "Grands carénages latéraux (joues) sur le fuselage"
    ],
    description: "Le cheval de bataille de la flotte SIGINT de l'USAF, utilisé pour collecter des informations sur les systèmes de défense aérienne.",
    specs: { wingspan: '44,4 m', length: '49,9 m', height: '12,9 m', payload: 'Systèmes SIGINT classifiés' }
  },
  {
    id: 'c17-globemaster-iii',
    name: 'Boeing C-17 Globemaster III',
    category: 'Combat Support Aircraft',
    role: 'Transport lourd stratégique',
    manufacturer: 'Boeing (McDonnell Douglas)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute en flèche",
      "Quatre turboréacteurs",
      "Winglets en bout d'aile"
    ],
    description: "Seul avion capable de parachuter des véhicules blindés lourds comme le M2 Bradley. Il peut également transporter un char M1 Abrams.",
    specs: { wingspan: '51,7 m', length: '53 m', height: '16,8 m', payload: '77 290 kg' }
  },
  {
    id: 'kc10-extender',
    name: 'Boeing (McDonnell Douglas) KC-10 Extender',
    category: 'Combat Support Aircraft',
    role: 'Ravitailleur en vol / transport',
    manufacturer: 'Boeing (McDonnell Douglas)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 3,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux moteurs sous les ailes, un moteur dans la dérive",
      "Perche de ravitaillement extensible dans la queue"
    ],
    description: "Développé à partir du DC-10 civil. Il peut transporter une charge substantielle de fret en plus de sa mission de ravitaillement.",
    specs: { wingspan: '50,4 m', length: '55,3 m', height: '17,7 m', payload: '158 291 kg (carburant)' }
  },
  {
    id: 'c212-aviocar',
    name: 'CASA C-212 Aviocar',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique léger',
    manufacturer: 'CASA',
    country: 'Espagne',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Fuselage de forme carrée"
    ],
    description: "Conçu pour remplacer le Junkers Ju-52. Succès majeur à l'exportation comme avion utilitaire polyvalent.",
    specs: { wingspan: '19 m', length: '15,1 m', height: '6,3 m', payload: '2 700 kg' }
  },
  {
    id: 'o2-skymaster',
    name: 'Cessna O-2 Skymaster',
    category: 'Combat Support Aircraft',
    role: 'Observation légère',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Moteurs en configuration 'Push-Pull' (un devant, un derrière)",
      "Double poutre de queue (twin boom)"
    ],
    description: "Utilisé comme avion de contrôle aérien avancé (FAC). Les 195 premiers exemplaires avaient un train fixe, les suivants escamotable.",
    specs: { wingspan: '11,6 m', length: '9,1 m', height: '2,8 m', payload: 'Pods de roquettes/mitrailleuses' }
  },
  {
    id: 'alize',
    name: 'Dassault (Breguet) Alizé',
    category: 'Combat Support Aircraft',
    role: 'Lutte anti-sous-marine embarquée',
    manufacturer: 'Dassault (Breguet)',
    country: 'France',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoturbopropulseur",
      "Carénages de roues imposants dans les ailes"
    ],
    description: "Premier vol en 1956. Utilisé sur les porte-avions français. Le dôme radar dans le fuselage arrière peut être abaissé en vol.",
    specs: { wingspan: '15,6 m', length: '13,8 m', height: '5 m', payload: 'Interne (Soute à bombes)' }
  }
,
  {
    id: 'atlantic',
    name: 'Dassault (Breguet) Atlantic',
    category: 'Combat Support Aircraft',
    role: 'Patrouille maritime',
    manufacturer: 'Dassault (Breguet)',
    country: 'France',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Nez vitré",
      "Pas de dôme sur la dérive pour l'Atlantique 2"
    ],
    description: "L'Atlantic peut transporter un équipage de 12 personnes pour des patrouilles de 18 heures sans ravitaillement. L'Atlantique 2 dispose de quatre points d'emport sous les ailes pour des missiles anti-navires.",
    specs: { wingspan: '36,3 m', length: '33,6 m', height: '11,3 m', payload: '18 551 kg' }
  },
  {
    id: 'dhc4a-caribou',
    name: 'de Havilland Canada DHC-4A Caribou',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique léger STOL',
    manufacturer: 'de Havilland Canada',
    country: 'Canada',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur à pistons",
      "Bord de fuite de la dérive en flèche"
    ],
    description: "Conçu pour des décollages et atterrissages courts (STOL). Certains exemplaires anciens de l'USAF ont été revendus à des opérateurs civils. La version DHC-4T est équipée de turbopropulseurs.",
    specs: { wingspan: '28,9 m', length: '22,1 m', height: '9,7 m', payload: '12 928 kg' }
  },
  {
    id: 'dhc5-buffalo',
    name: 'de Havilland Canada DHC-5 Buffalo',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique léger STOL',
    manufacturer: 'de Havilland Canada',
    country: 'Canada',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Empennage en T"
    ],
    description: "Développé à partir du Caribou, le Buffalo a été financé conjointement par les gouvernements américain et canadien. La production a cessé en 1986.",
    specs: { wingspan: '29,3 m', length: '24,1 m', height: '8,7 m', payload: '8 164 kg' }
  },
  {
    id: 'dc3',
    name: 'Douglas DC-3',
    category: 'Combat Support Aircraft',
    role: 'Transport léger',
    manufacturer: 'Douglas',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Bimoteur à pistons",
      "Train d'atterrissage classique (roulette de queue) semi-escamotable"
    ],
    description: "Le DC-3 a volé pour la première fois en 1935 et restait en service 63 ans plus tard. L'Afrique du Sud a modernisé les siens avec des turbopropulseurs jumelés.",
    specs: { wingspan: '28,9 m', length: '19,6 m', height: '5,2 m', payload: '3 784 kg' }
  },
  {
    id: 'do228-asw',
    name: 'Dornier Do-228 ASW',
    category: 'Combat Support Aircraft',
    role: 'Patrouille maritime',
    manufacturer: 'Dornier',
    country: 'Allemagne',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Extrémités d'ailes en flèche (swept wing tips)"
    ],
    description: "Initialement conçu par Dornier, les versions militaires ont été impulsées par l'Inde. Utilisé pour la surveillance de la pollution et la protection des pêches.",
    specs: { wingspan: '16,9 m', length: '15 m', height: '4,8 m', payload: '2 201 kg' }
  },
  {
    id: 'f27-f50-maritime',
    name: 'Fokker F27/F50 Maritime',
    category: 'Combat Support Aircraft',
    role: 'Patrouille maritime',
    manufacturer: 'Fokker',
    country: 'Pays-Bas',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Radar ventral"
    ],
    description: "Versions militaires des avions de ligne F27 et F50. Incluent des modèles pour la surveillance côtière non armée et des versions armées pour la lutte anti-sous-marine (Maritime Enforcer).",
    specs: { wingspan: '29 m', length: '25,2 m', height: '8,3 m', payload: '8 200 kg' }
  },
  {
    id: 'sh5',
    name: 'HAMC SH-5',
    category: 'Combat Support Aircraft',
    role: 'Amphibie de patrouille maritime',
    manufacturer: 'HAMC',
    country: 'Chine',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute et droite",
      "Quatre turbopropulseurs",
      "Double dérive"
    ],
    description: "Le design a débuté en 1970 mais a été retardé par la révolution culturelle. Utilisé pour la lutte anti-sous-marine, le sauvetage et comme bombardier d'eau.",
    specs: { wingspan: '36 m', length: '38,9 m', height: '9,8 m', payload: '6 000 kg' }
  },
  {
    id: 'arava',
    name: 'IAI Arava',
    category: 'Combat Support Aircraft',
    role: 'Transport léger STOL',
    manufacturer: 'IAI',
    country: 'Israël',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Double poutre de queue",
      "Fuselage en forme de pod"
    ],
    description: "Certifié à l'origine comme avion civil, il a trouvé son succès comme avion de transport militaire spécialisé. Le cône de queue peut être détaché pour charger une Jeep.",
    specs: { wingspan: '20,9 m', length: '13,5 m', height: '5,2 m', payload: '2 494 kg' }
  },
  {
    id: 'phalcon',
    name: 'IAI Phalcon',
    category: 'Combat Support Aircraft',
    role: 'Avion d\'alerte précoce (AEW)',
    manufacturer: 'IAI',
    country: 'Israël',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Basé sur le Boeing 707",
      "Large radôme de nez proéminent",
      "Radars montés sur les côtés du fuselage"
    ],
    description: "Conversion d'un Boeing 707 standard, le Phalcon utilise un système de radar modulaire qui peut être adapté à d'autres plateformes comme l'Airbus A310 ou le Boeing 767.",
    specs: { wingspan: '44,4 m', length: '46,6 m', height: '12,9 m', payload: 'Systèmes radar Elta' }
  },
  {
    id: 'il20-coot',
    name: 'Ilyushin Il-20 Coot',
    category: 'Combat Support Aircraft',
    role: 'Avion de renseignement électronique (ELINT)',
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse et droite",
      "Quatre turbopropulseurs",
      "Large carénage ventral (canoë)"
    ],
    description: "Développé à partir de l'avion de ligne Il-18. Il transporte un radar à balayage latéral dans le carénage ventral et divers capteurs de signaux électroniques.",
    specs: { wingspan: '37,4 m', length: '24 m', height: '10,2 m', payload: 'Équipement ELINT' }
  },
  {
    id: 'il38-may',
    name: 'Ilyushin Il-38 May',
    category: 'Combat Support Aircraft',
    role: 'Patrouille maritime',
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse et droite",
      "Quatre turbopropulseurs",
      "Radôme ventral sous le cockpit"
    ],
    description: "Évolution de l'Il-20 Coot. Le fuselage a été allongé et les ailes déplacées vers l'avant pour compenser le poids des soutes à armement. Il n'a pas de capacité de ravitaillement en vol.",
    specs: { wingspan: '37,4 m', length: '39,6 m', height: '10,2 m', payload: 'Deux soutes internes' }
  },
  {
    id: 'a50-mainstay',
    name: 'Ilyushin/Beriev A-50 Mainstay',
    category: 'Combat Support Aircraft',
    role: 'Avion d\'alerte précoce (AWACS)',
    manufacturer: 'Ilyushin / Beriev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute en flèche",
      "Quatre turboréacteurs",
      "Dôme radar rotatif au-dessus du fuselage"
    ],
    description: "Développé à partir du transport Il-76. La version améliorée possède le radar Vega Shmel-M. On le reconnaît à ses deux larges ailettes ventrales.",
    specs: { wingspan: '50,5 m', length: '46,6 m', height: '14,8 m', payload: 'Radar Liana ou Shmel' }
  },
  {
    id: 'il76-candid',
    name: 'Ilyushin Il-76 Candid',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique lourd',
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute en flèche",
      "Quatre turboréacteurs",
      "Nez vitré caractéristique"
    ],
    description: "En production à Tachkent, Ouzbékistan depuis 1971. Les variantes incluent l'avion de commandement Il-76SK et le ravitailleur Il-78 Midas.",
    specs: { wingspan: '50,5 m', length: '46,6 m', height: '14,7 m', payload: '52 000 kg' }
  },
  {
    id: 'il86-camber',
    name: 'Ilyushin Il-86 Camber',
    category: 'Combat Support Aircraft',
    role: 'Poste de commandement aéroporté',
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre turboréacteurs",
      "Large carénage (canoë) dorsal"
    ],
    description: "Opère de la même manière que l'E-4B américain. Il est protégé contre les impulsions électromagnétiques nucléaires, d'où l'absence de hublots.",
    specs: { wingspan: '48,1 m', length: '59,5 m', height: '15,8 m', payload: 'Suite de communications' }
  },
  {
    id: 'c1a',
    name: 'Kawasaki C-1A',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique moyen',
    manufacturer: 'Kawasaki',
    country: 'Japon',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Biréacteur",
      "Empennage en T"
    ],
    description: "Conçu pour remplacer les Curtiss C-46 de la force d'autodéfense japonaise. Un exemplaire a été transformé en avion d'entraînement ECM (EC-1) reconnaissable à son radôme de nez bulbeux.",
    specs: { wingspan: '30,6 m', length: '29 m', height: '9,9 m', payload: '11 900 kg' }
  },
  {
    id: 'c5-galaxy',
    name: 'Lockheed Martin C-5 Galaxy',
    category: 'Combat Support Aircraft',
    role: 'Transport stratégique lourd',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute en flèche",
      "Quatre turboréacteurs",
      "Empennage en T"
    ],
    description: "Plus grand avion du monde lors de son premier vol en 1968. Capable de transporter deux chars M1 Abrams ou six hélicoptères AH-64 Apache.",
    specs: { wingspan: '67,8 m', length: '75,5 m', height: '19,8 m', payload: '118 387 kg' }
  },
  {
    id: 'c130h-hercules',
    name: 'Lockheed Martin C-130H Hercules',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique moyen',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute et droite",
      "Quatre turbopropulseurs",
      "Radôme de nez volumineux"
    ],
    description: "Plus de 2 000 exemplaires construits depuis 1954. Ses missions sont extrêmement variées : transport sur skis en Antarctique, ravitailleur, patrouille maritime, etc.",
    specs: { wingspan: '40,4 m', length: '34,3 m', height: '11,6 m', payload: '17 645 kg' }
  },
  {
    id: 'c130j-hercules',
    name: 'Lockheed Martin C-130J Hercules',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique moyen',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute et droite",
      "Hélices composite Dowty à six pales en forme de cimeterre"
    ],
    description: "Dernier développement du C-130 (1996). Il possède une avionique moderne, un cockpit à deux membres d'équipage et des moteurs plus puissants.",
    specs: { wingspan: '40,4 m', length: '34,3 m', height: '11,8 m', payload: '17 264 kg' }
  },
  {
    id: 'c141-starlifter',
    name: 'Lockheed Martin C-141 StarLifter',
    category: 'Combat Support Aircraft',
    role: 'Transport stratégique lourd',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute en flèche",
      "Quatre turboréacteurs",
      "Fuselage étroit"
    ],
    description: "Entré en service en 1964 comme premier transport tout-jet de l'USAF. Son fuselage étroit limitait le transport de certains véhicules blindés de l'armée américaine.",
    specs: { wingspan: '48,7 m', length: '51,3 m', height: '11,9 m', payload: '41 222 kg' }
  },
  {
    id: 'p3-orion',
    name: 'Lockheed Martin P-3 Orion',
    category: 'Combat Support Aircraft',
    role: 'Patrouille maritime',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse et droite",
      "Quatre turbopropulseurs",
      "Perche MAD (Magnetic Anomaly Detector) à l'arrière"
    ],
    description: "Développé à partir de l'avion de ligne Electra. La version EP-3E Aries est dédiée au renseignement électronique.",
    specs: { wingspan: '30,4 m', length: '35,6 m', height: '10,2 m', payload: '9 071 kg' }
  },
  {
    id: 'p3-aewc',
    name: 'Lockheed Martin P-3 AEW&C',
    category: 'Combat Support Aircraft',
    role: 'Avion d\'alerte précoce',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse et droite",
      "Dôme radar rotatif sur le fuselage"
    ],
    description: "Développé spécialement pour les douanes américaines (US Coast Guard) afin de traquer les trafiquants de drogue. Surnommé 'P-3 Dome'.",
    specs: { wingspan: '30,4 m', length: '35,6 m', height: '10,2 m', payload: 'Radar AN/APS-138' }
  },
  {
    id: 'mc130e-combat-talon',
    name: 'Lockheed Martin MC-130E Combat Talon',
    category: 'Combat Support Aircraft',
    role: 'Avion d\'opérations spéciales',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute et droite",
      "Nombreuses antennes sur la dérive",
      "Radar de suivi de terrain dans le nez"
    ],
    description: "Équipé pour infiltrer les forces spéciales. La version EC-130E Rivet Riders sert à la guerre psychologique en diffusant des messages TV/radio.",
    specs: { wingspan: '40,4 m', length: '29,7 m', height: '11,6 m', payload: '40 soldats ou équipement spécial' }
  },
  {
    id: 's3-viking',
    name: 'Lockheed Martin S-3 Viking',
    category: 'Combat Support Aircraft',
    role: 'Lutte anti-sous-marine embarquée',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Biréacteur sous les ailes",
      "Queue et ailes repliables pour porte-avions"
    ],
    description: "Premier vol en 1972. Conçu pour embarquer tout l'équipement des grands patrouilleurs maritimes dans une cellule compacte embarquée.",
    specs: { wingspan: '20,9 m', length: '16,3 m', height: '6,9 m', payload: 'Soute à bombes interne' }
  },
  {
    id: 'u2-tr1a',
    name: 'Lockheed Martin U-2/TR-1A',
    category: 'Combat Support Aircraft',
    role: 'Reconnaissance haute altitude',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile médiane droite de type planeur",
      "Monoréacteur",
      "Configuration monoplace"
    ],
    description: "Seul avion de reconnaissance photo piloté de l'USAF après le retrait du SR-71. Certains modèles TR-1 portent un grand carénage dorsal pour des équipements supplémentaires.",
    specs: { wingspan: '31,4 m', length: '19,2 m', height: '4,8 m', payload: 'Équipement optique et SIGINT' }
  },
  {
    id: 'm55-mystic',
    name: 'Myasischev M-55 Mystic',
    category: 'Combat Support Aircraft',
    role: 'Recherche haute altitude',
    manufacturer: 'Myasischev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute en flèche",
      "Double poutre de queue",
      "Biréacteur"
    ],
    description: "A établi de nombreux records d'altitude. Utilisé pour la recherche environnementale et la surveillance avec une endurance de 6 heures et demie.",
    specs: { wingspan: '37,4 m', length: '22,8 m', height: '4,7 m', payload: 'Imagerie électronique et infrarouge' }
  },
  {
    id: 'vmt-atlant',
    name: 'Myasischev VM-T Atlant',
    category: 'Combat Support Aircraft',
    role: 'Transport de fret hors gabarit',
    manufacturer: 'Myasischev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile médiane en flèche",
      "Moteurs intégrés à l'emplanture des ailes",
      "Double dérive"
    ],
    description: "Développé à partir du bombardier Bison-C. Les deux Atlant ont servi à transporter des sections de fusées Energia et la navette Bourane sur leur dos.",
    specs: { wingspan: '53,6 m', length: '51,2 m', height: '10,6 m', payload: '50 000 kg sur le dos' }
  },
  {
    id: 'e2c-hawkeye',
    name: 'Northrop Grumman E-2C Hawkeye',
    category: 'Combat Support Aircraft',
    role: 'Alerte précoce embarquée',
    manufacturer: 'Northrop Grumman',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Large radôme circulaire sur le fuselage"
    ],
    description: "Conçu pour les opérations sur porte-avions, il est utilisé par de nombreux clients à l'export depuis des bases terrestres. Le C-2A Greyhound en est la version de transport sans radar.",
    specs: { wingspan: '24,6 m', length: '17,6 m', height: '5,6 m', payload: 'Radar AN/APS-145' }
  },
  {
    id: 'e8-jstars',
    name: 'Northrop Grumman E-8 Joint STARS',
    category: 'Combat Support Aircraft',
    role: 'Surveillance du champ de bataille',
    manufacturer: 'Northrop Grumman',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Basé sur le Boeing 707",
      "Long carénage (canoë) ventral"
    ],
    description: "Le Joint STARS a prouvé sa valeur lors de la guerre du Golfe de 1991, permettant aux commandants de voir les lignes de communication ennemies.",
    specs: { wingspan: '44,4 m', length: '46,6 m', height: '12,9 m', payload: 'Radar AN/APY-3' }
  },
  {
    id: 'ov1-mohawk',
    name: 'Northrop Grumman OV-1 Mohawk',
    category: 'Combat Support Aircraft',
    role: 'Surveillance du champ de bataille',
    manufacturer: 'Grumman',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane droite",
      "Bimoteur turbopropulsé",
      "Triple dérive"
    ],
    description: "Spécialement conçu pour l'US Army. Retiré du service aux USA, certains ont été transférés à l'Argentine et à la Corée du Sud. Possède un cockpit blindé.",
    specs: { wingspan: '14,6 m', length: '12,5 m', height: '3,9 m', payload: 'Radar latéral AN/APS-94D' }
  },
  {
    id: 's2-tracker',
    name: 'Northrop Grumman S-2 Tracker',
    category: 'Combat Support Aircraft',
    role: 'Lutte anti-sous-marine embarquée',
    manufacturer: 'Grumman',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur à pistons",
      "Phare de recherche dans le bord d'attaque de l'aile droite"
    ],
    description: "Le Brésil est le seul pays à maintenir une capacité embarquée avec le S-2. D'autres pays l'utilisent depuis des bases terrestres ou pour la lutte contre les incendies.",
    specs: { wingspan: '22,1 m', length: '13,3 m', height: '5,1 m', payload: '2 182 kg' }
  },
  {
    id: 'pd808',
    name: 'Piaggio PD.808',
    category: 'Combat Support Aircraft',
    role: 'Avion utilitaire / guerre électronique',
    manufacturer: 'Piaggio',
    country: 'Italie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Moteurs montés sur la queue",
      "Réservoirs en bout d'aile"
    ],
    description: "L'armée de l'air italienne utilise le PD.808 pour le transport VIP et la guerre électronique. Les versions ECM possèdent des antennes dorsales et ventrales.",
    specs: { wingspan: '13,2 m', length: '12,8 m', height: '4,8 m', payload: '862 kg' }
  },
  {
    id: 'rc12n-guardrail',
    name: 'Raytheon (Beechcraft) RC-12N Guardrail',
    category: 'Combat Support Aircraft',
    role: 'Avion de renseignement électronique',
    manufacturer: 'Raytheon (Beechcraft)',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Empennage en T"
    ],
    description: "Fournit des données de ciblage en temps réel. Il transmet les positions radar et radio ennemies directement aux groupes d'artillerie.",
    specs: { wingspan: '16,6 m', length: '13,3 m', height: '4,5 m', payload: 'Équipement SIGINT' }
  },
  {
    id: 'saab340-aewc',
    name: 'Saab 340 AEW&C',
    category: 'Combat Support Aircraft',
    role: 'Avion d\'alerte précoce',
    manufacturer: 'Saab',
    country: 'Suède',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Structure radar fixe et allongée au-dessus du fuselage"
    ],
    description: "Développé à partir de l'avion de ligne Saab 340B. Le radar à antenne active permet d'identifier des cibles jusqu'à 350 km.",
    specs: { wingspan: '22,7 m', length: '19,7 m', height: '6,9 m', payload: 'Radar PS-890 Erieye' }
  },
  {
    id: 'us1a',
    name: 'ShinMaywa US-1A',
    category: 'Combat Support Aircraft',
    role: 'Amphibie de sauvetage',
    manufacturer: 'ShinMaywa',
    country: 'Japon',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute et droite",
      "Quatre turbopropulseurs",
      "Empennage en T"
    ],
    description: "Capable de missions de recherche et sauvetage à longue portée. Il emporte un sonar de trempage dans la coque.",
    specs: { wingspan: '33,1 m', length: '33,5 m', height: '9,9 m', payload: '20 passagers ou 12 civières' }
  },
  {
    id: 'c160-transall',
    name: 'Transall C-160',
    category: 'Combat Support Aircraft',
    role: 'Transport tactique moyen',
    manufacturer: 'Transall',
    country: 'France / Allemagne',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Rampe de chargement arrière"
    ],
    description: "Développé conjointement par la France et l'Allemagne. Utilisé également comme ravitailleur en vol et pour les transmissions stratégiques de la force nucléaire française.",
    specs: { wingspan: '40 m', length: '32,4 m', height: '11,6 m', payload: '16 000 kg' }
  },
  {
    id: 'sf260',
    name: 'Aermacchi (SIAI-Marchetti) SF.260',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire / attaque au sol',
    manufacturer: 'Aermacchi (SIAI-Marchetti)',
    country: 'Italie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Cockpit avec sièges côte à côte",
      "Réservoirs en bout d'aile"
    ],
    description: "Construit en trois versions principales. La version SF.260TP (turbopropulseur) se reconnaît à son nez plus long et ses deux échappements sous le capot.",
    specs: { wingspan: '8,3 m', length: '7,1 m', height: '2,4 m', payload: '300 kg' }
  },
  {
    id: 'm290tp-redigo',
    name: 'Aermacchi (Valmet) M-290TP Redigo',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire / liaison',
    manufacturer: 'Aermacchi (Valmet)',
    country: 'Italie / Finlande',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Bord d'attaque de l'aile avec décrochement",
      "Cockpit avec sièges côte à côte"
    ],
    description: "Aermacchi a repris la production du Redigo en 1997. Il peut transporter une civière ou deux passagers à l'arrière du cockpit.",
    specs: { wingspan: '10,6 m', length: '8,5 m', height: '3,2 m', payload: '800 kg' }
  },
  {
    id: 'tch1-chungshing',
    name: 'AIDC T-CH-1 Chung-Shing',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire / attaque au sol',
    manufacturer: 'AIDC',
    country: 'Taïwan',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoturbopropulseur",
      "Cockpits en tandem"
    ],
    description: "Développé à partir du North American T-28 Trojan pour intégrer une gamme d'armes plus large, répondant à l'exigence taïwanaise que chaque avion ait un rôle de guerre.",
    specs: { wingspan: '12,2 m', length: '10,3 m', height: '3,7 m', payload: '4 points d\'emport' }
  },
  {
    id: 'bulldog',
    name: 'BAe (SA) Bulldog',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur élémentaire / attaque au sol',
    manufacturer: 'British Aerospace (SA)',
    country: 'Royaume-Uni',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Cockpit avec sièges côte à côte"
    ],
    description: "La majorité des Bulldog opèrent au sein de la Royal Air Force. Les versions export peuvent être armées pour des missions d'attaque légère.",
    specs: { wingspan: '10,1 m', length: '7,1 m', height: '2,3 m', payload: '290 kg' }
  },
  {
    id: 'ktx1-woongbee',
    name: 'Daewoo KTX-1 Woong-Bee',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'Daewoo',
    country: 'Corée du Sud',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Cockpits en tandem",
      "Verrière sans montant central"
    ],
    description: "Premier vol en 1991. Très similaire au Tucano brésilien, mais s'en distingue par sa verrière qui n'a pas de montant central.",
    specs: { wingspan: '10,6 m', length: '10,3 m', height: '3,7 m', payload: 'Aucun standard' }
  }
,
  {
    id: 'emb312-tucano',
    name: 'EMBRAER EMB-312 Tucano',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'EMBRAER',
    country: 'Brésil',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoturbopropulseur",
      "Verrière monobloc en tandem"
    ],
    description: "Plus de 650 exemplaires construits depuis 1983. Utilisé par 14 armées de l'air, il est également construit sous licence au Royaume-Uni par Shorts sous le nom de S312.",
    specs: { wingspan: '11,1 m', length: '9,9 m', height: '3,4 m', payload: '250 kg' }
  },
  {
    id: 'emb312-super-tucano',
    name: 'EMBRAER EMB-312 Super Tucano',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire / attaque au sol',
    manufacturer: 'EMBRAER',
    country: 'Brésil',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Fuselage allongé par rapport au Tucano standard",
      "Verrière en tandem en trois parties"
    ],
    description: "Version survitaminée du Tucano avec un fuselage étiré pour accueillir un moteur plus puissant. Une version armée appelée ALX a été développée pour la surveillance de l'Amazonie.",
    specs: { wingspan: '11,1 m', length: '11,4 m', height: '3,9 m', payload: '250 kg' }
  },
  {
    id: 't35-pilan',
    name: 'ENAER T-35 Pilan',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'ENAER',
    country: 'Chili',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Cockpit en tandem"
    ],
    description: "Développé à l'origine par la société américaine Piper. ENAER a repris la production complète, incluant des kits pour CASA en Espagne. Une version turbopropulsée a été testée.",
    specs: { wingspan: '8,8 m', length: '8 m', height: '2,6 m', payload: '0 kg' }
  },
  {
    id: 'fuji-t3',
    name: 'Fuji T-3',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'Fuji',
    country: 'Japon',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Cabine fermée (non verrière bulle)"
    ],
    description: "Développé à partir du Beechcraft T-34 Mentor. La ressemblance familiale est visible dans la forme des ailes et de la queue, mais le cockpit est une cabine fermée.",
    specs: { wingspan: '10 m', length: '8 m', height: '3 m', payload: '13,6 kg' }
  },
  {
    id: 'fuji-t5',
    name: 'Fuji T-5',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'Fuji',
    country: 'Japon',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoturbopropulseur",
      "Cockpit avec sièges côte à côte"
    ],
    description: "Évolution du T-3 à pistons, propulsé par un turbomoteur Allison. Le nez a été profilé et la configuration du cockpit modifiée. Peut transporter deux passagers à l'arrière pour des missions de liaison.",
    specs: { wingspan: '10 m', length: '8,4 m', height: '2,9 m', payload: '200 kg' }
  },
  {
    id: 'hpt32-deepak',
    name: 'HAL HPT-32 Deepak',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'HAL',
    country: 'Inde',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Train d'atterrissage fixe"
    ],
    description: "Utilisé comme entraîneur de base par l'armée de l'air et la marine indiennes. Un troisième siège peut être installé derrière les pilotes pour un passager.",
    specs: { wingspan: '9,5 m', length: '7,7 m', height: '2,9 m', payload: '255 kg' }
  },
  {
    id: 'cj6a',
    name: 'NAMC CJ-6A',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'NAMC',
    country: 'Chine',
    engineType: 'Radial',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur radial (en étoile) unique",
      "Cockpit en tandem"
    ],
    description: "Développement du Yak-18. Facilement identifiable par son moteur radial distinctif. Beaucoup d'exemplaires sont aujourd'hui dans des mains privées en Occident.",
    specs: { wingspan: '10,2 m', length: '8,4 m', height: '3,3 m', payload: '0 kg' }
  },
  {
    id: 't25-universal',
    name: 'Neiva N261 T-25 Universal',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'Neiva',
    country: 'Brésil',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Cockpit avec sièges côte à côte"
    ],
    description: "En cours de remplacement au Brésil par le Tucano. Construit en version entraîneur et version armée (AT-25) pour la patrouille frontalière.",
    specs: { wingspan: '11 m', length: '8,8 m', height: '3 m', payload: '2 points d\'emport' }
  },
  {
    id: 'ct4-airtrainer',
    name: 'PAC Airtrainer CT4',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'PAC',
    country: 'Nouvelle-Zélande',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Train d'atterrissage tricycle fixe"
    ],
    description: "Développement militaire de l'avion privé australien Victa Aircruiser. Une version turbopropulsée et une version à train rentrant (CT-4CR) ont été étudiées.",
    specs: { wingspan: '7,9 m', length: '7 m', height: '2,6 m', payload: '0 kg' }
  },
  {
    id: 'mushshak',
    name: 'PAC Mushshak',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire / attaque au sol',
    manufacturer: 'PAC',
    country: 'Pakistan',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute et droite",
      "Moteur à pistons unique",
      "Cockpit avec sièges côte à côte"
    ],
    description: "Version construite sous licence du Saab Safari. Utilisé pour l'entraînement et l'attaque légère. Une version remotorisée appelée Shahbaz a volé en 1987.",
    specs: { wingspan: '8,8 m', length: '7 m', height: '2,6 m', payload: '300 kg' }
  },
  {
    id: 'pc7',
    name: 'Pilatus PC-7',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'Pilatus',
    country: 'Suisse',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoturbopropulseur",
      "Dérive avec un décrochement (cranked tailfin)"
    ],
    description: "Plus de 500 exemplaires produits en 1998. La version Mk II a été développée pour l'Afrique du Sud. Les versions export peuvent emporter de l'armement léger.",
    specs: { wingspan: '10,4 m', length: '9,8 m', height: '3,2 m', payload: '1 000 kg' }
  },
  {
    id: 'pc9',
    name: 'Pilatus PC-9',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'Pilatus',
    country: 'Suisse',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Barre centrale sur la verrière du cockpit",
      "Queue plus longue que celle du PC-7"
    ],
    description: "Développement du PC-7. Construit sous licence aux USA par Raytheon sous le nom de T-6A Texan II pour le programme JPATS.",
    specs: { wingspan: '10,2 m', length: '10,2 m', height: '3,3 m', payload: '1 000 kg' }
  },
  {
    id: 'm26-iskierka',
    name: 'PZL Mielec M-26 Iskierka',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'PZL Mielec',
    country: 'Pologne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Cockpit en tandem"
    ],
    description: "Deux versions développées : une avec moteur polonais et une avec moteur américain Lycoming. Destiné principalement aux marchés d'Amérique du Sud et des USA.",
    specs: { wingspan: '8,6 m', length: '8,3 m', height: '2,9 m', payload: '120 kg' }
  },
  {
    id: 'pzl130-orlik',
    name: 'PZL Warszawa PZL-130TB Turbo Orlik',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'PZL Warszawa',
    country: 'Pologne',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Extrémités d'ailes en flèche (swept wingtips)",
      "Dérive ventrale (ventral fin)"
    ],
    description: "Orlik signifie 'Aiglon'. À l'origine à pistons, le projet s'est concentré sur la version turbopropulsée. Équipé d'un siège éjectable et d'une avionique améliorée.",
    specs: { wingspan: '9 m', length: '9 m', height: '3,5 m', payload: '800 kg' }
  },
  {
    id: 't34-mentor',
    name: 'Raytheon (Beech) T-34 Mentor',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire / attaque au sol',
    manufacturer: 'Raytheon (Beechcraft)',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Monoturbopropulseur",
      "Cockpit en tandem"
    ],
    description: "Beech a remotorisé le T-34 original avec un turbopropulseur PT6 en 1972. La version armée T-34C-1 sert au contrôle aérien avancé.",
    specs: { wingspan: '10,2 m', length: '8,7 m', height: '2,9 m', payload: '544 kg' }
  },
  {
    id: 'rfb-fantrainer',
    name: 'RFB Fantrainer',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'RFB',
    country: 'Allemagne',
    engineType: 'Ducted Fan',
    enginesCount: 1,
    recognitionTips: [
      "Aile droite en position médiane",
      "Soufflante carénée (ducted fan) au milieu du fuselage",
      "Empennage en T"
    ],
    description: "Bien qu'il ressemble à un jet, il est propulsé par une soufflante carénée. Ce design permet de simuler le pilotage d'un jet à moindre coût.",
    specs: { wingspan: '9,7 m', length: '9,2 m', height: '3,2 m', payload: '0 kg' }
  },
  {
    id: 'firefly',
    name: 'Slingsby T67/T-3A Firefly',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur élémentaire',
    manufacturer: 'Slingsby',
    country: 'Royaume-Uni',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Cockpit avec sièges côte à côte"
    ],
    description: "Conçu pour le marché civil, il a été adopté par les militaires pour l'entraînement élémentaire. Le T-3A de l'USAF est construit par Northrop Grumman.",
    specs: { wingspan: '10,6 m', length: '7,3 m', height: '2,4 m', payload: '0 kg' }
  },
  {
    id: 'epsilon',
    name: 'Socata TB 30 Epsilon',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire / attaque au sol',
    manufacturer: 'Socata',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Cockpit en tandem"
    ],
    description: "Conçu pour optimiser les coûts d'entraînement de l'Armée de l'Air française. Le Togo utilise ses Epsilon pour la lutte anti-guérilla.",
    specs: { wingspan: '7,9 m', length: '7,6 m', height: '2,7 m', payload: '300 kg' }
  },
  {
    id: 'utva75',
    name: 'UTVA-75',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur primaire',
    manufacturer: 'UTVA',
    country: 'Yougoslavie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Fin de dérive verticale droite (swept tail fin)"
    ],
    description: "Avion d'entraînement et utilitaire à quatre places. Certains exemplaires ont été utilisés comme bombardiers improvisés pendant les guerres en ex-Yougoslavie.",
    specs: { wingspan: '9,7 m', length: '7,1 m', height: '3,2 m', payload: '200 kg' }
  },
  {
    id: 'a300',
    name: 'Airbus A300',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne moyen-courrier',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse peu en flèche",
      "Deux turboréacteurs sous les ailes",
      "Fuselage large (widebody)"
    ],
    description: "Premier avion construit par le consortium Airbus en 1972. Il a servi de base structurelle pour le SATIC Super Transporter (Beluga).",
    specs: { wingspan: '44,8 m', length: '54,1 m', height: '16,6 m', payload: '39 885 kg' }
  },
  {
    id: 'a310',
    name: 'Airbus A310',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne moyen-courrier',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse peu en flèche",
      "Deux turboréacteurs sous les ailes",
      "Fuselage raccourci par rapport à l'A300"
    ],
    description: "Version raccourcie de l'A300. Ce fut le premier avion de ligne à être piloté par des commandes électriques (Fly-by-Wire) dès son lancement.",
    specs: { wingspan: '43,9 m', length: '46,6 m', height: '15,8 m', payload: '32 860 kg' }
  },
  {
    id: 'a320',
    name: 'Airbus A320',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs sous les ailes",
      "Fuselage étroit (narrow fuselage)"
    ],
    description: "Famille comprenant l'A320 standard, l'A319 (court) et l'A321 (allongé). L'A319 possède le plus long rayon d'action de sa catégorie.",
    specs: { wingspan: '33,9 m', length: '37,6 m', height: '11,8 m', payload: '19 220 kg' }
  },
  {
    id: 'a330',
    name: 'Airbus A330',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne moyen-courrier',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs sous les ailes",
      "Fuselage étroit mais long"
    ],
    description: "Développé en parallèle de l'A340 quadriréacteur, l'A330 est conçu pour transporter plus de passagers sur des distances plus courtes.",
    specs: { wingspan: '60,3 m', length: '63,6 m', height: '16,2 m', payload: '46 715 kg' }
  },
  {
    id: 'a340',
    name: 'Airbus A340',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre turboréacteurs sous les ailes",
      "Fuselage étroit"
    ],
    description: "Premier avion de ligne entièrement conçu par ordinateur. Un revêtement plastique spécial a été testé sur un appareil pour réduire la traînée.",
    specs: { wingspan: '60,3 m', length: '59,4 m', height: '16,7 m', payload: '45 915 kg' }
  },
  {
    id: 'concorde',
    name: 'Aerospatiale/BAe Concorde',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne supersonique',
    manufacturer: 'Aerospatiale / BAe',
    country: 'France / UK',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile delta sans empennage",
      "Quatre turboréacteurs sous les ailes",
      "Fuselage très étroit et profilé"
    ],
    description: "Seul avion supersonique de ligne en opération. Il vole à Mach 2,04, plus haut que la vitesse du son, et devrait rester en service jusqu'en 2014.",
    specs: { wingspan: '25,5 m', length: '62,1 m', height: '11,4 m', payload: '12 700 kg' }
  },
  {
    id: 'bae146',
    name: 'Avro Avroliner (BAe 146)',
    category: 'Civil Jet Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'British Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute en flèche",
      "Quatre turboréacteurs sous les ailes",
      "Empennage en T"
    ],
    description: "Successeur du BAe 146. Il existe en trois variantes : le RJ70 (fuselage court), le RJ85 (moyen) et le RJ100 (long).",
    specs: { wingspan: '26,2 m', length: '26,6 m', height: '8,6 m', payload: '10 070 kg' }
  },
  {
    id: 'one-eleven',
    name: 'BAe (BAC) One-Eleven',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'British Aerospace (BAC)',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse peu en flèche",
      "Deux turboréacteurs à l'arrière du fuselage",
      "Empennage en T"
    ],
    description: "Développement débuté en 1961. Construit sous licence en Roumanie par Romaero. La version One-Eleven-500 possède un fuselage allongé.",
    specs: { wingspan: '28,5 m', length: '28,5 m', height: '7,4 m', payload: '9 647 kg' }
  },
  {
    id: 'b707',
    name: 'Boeing 707',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre turboréacteurs sous les ailes",
      "Fuselage étroit"
    ],
    description: "Premier vol en 1954. Plus de 1 000 exemplaires produits jusqu'en 1982. Beaucoup servent encore dans des rôles militaires de ravitaillement.",
    specs: { wingspan: '44,4 m', length: '46,6 m', height: '12,9 m', payload: '40 324 kg' }
  },
  {
    id: 'b717',
    name: 'Boeing 717',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs à l'arrière du fuselage",
      "Empennage en T"
    ],
    description: "Anciennement McDonnell Douglas MD-95. Boeing l'a renommé 717 après la fusion. Virtuellement identique au MD-95 avec des moteurs plus larges.",
    specs: { wingspan: '28,5 m', length: '34,4 m', height: '8,9 m', payload: '12 220 kg' }
  },
  {
    id: 'b727',
    name: 'Boeing 727',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 3,
    recognitionTips: [
      "Aile basse en flèche",
      "Trois turboréacteurs à l'arrière (un central dans la dérive)",
      "Empennage en T"
    ],
    description: "Lancé en 1962 comme complément court-courrier du 707. Il partage de nombreuses pièces avec ce dernier, notamment le fuselage.",
    specs: { wingspan: '32,9 m', length: '46,7 m', height: '10,4 m', payload: '28 622 kg' }
  },
  {
    id: 'b737-100-200',
    name: 'Boeing 737-100/200',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs longs et fins sous les ailes",
      "Nacelles moteurs étroites"
    ],
    description: "Le modèle original du 737 a volé en 1967. Les premiers modèles se reconnaissent à leurs moteurs longs et fins intégrés sous l'aile.",
    specs: { wingspan: '28,3 m', length: '29,5 m', height: '11,3 m', payload: '15 860 kg' }
  },
  {
    id: 'b737-300-500',
    name: 'Boeing 737-300/400/500',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse droite",
      "Deux grandes nacelles moteurs sous les ailes",
      "Emplanture de dérive avec un décrochement (cranked tailfin)"
    ],
    description: "Première refonte majeure du 737 avec l'adoption des moteurs CFM-56, reconnaissables à leurs nacelles plus larges et 'aplaties' à la base.",
    specs: { wingspan: '28,8 m', length: '33,4 m', height: '11,1 m', payload: '9 072 kg' }
  },
  {
    id: 'b737-600-800',
    name: 'Boeing 737-600/700/800',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse droite",
      "Deux turboréacteurs sous les ailes",
      "Fuselage court ou long selon la version"
    ],
    description: "Dernière série d'améliorations du 737. Davantage de vitesse et de rayon d'action grâce aux demandes de 30 compagnies aériennes majeures.",
    specs: { wingspan: '34,3 m', length: '33,6 m', height: '12,5 m', payload: '9 072 kg' }
  },
  {
    id: 'b747',
    name: 'Boeing 747',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre turboréacteurs sous les ailes",
      "Double pont partiel à l'avant (bosse)"
    ],
    description: "Plus de 1 100 exemplaires produits depuis 1969. La version 747SP est raccourcie pour augmenter le rayon d'action et réduire le poids.",
    specs: { wingspan: '59,6 m', length: '70,7 m', height: '19,3 m', payload: '102 058 kg' }
  },
  {
    id: 'b747-400',
    name: 'Boeing 747-400',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche avec winglets",
      "Pont supérieur allongé jusqu'au milieu du fuselage",
      "Poste de pilotage à deux membres d'équipage"
    ],
    description: "Annoncé en 1985, il offre une capacité d'emport et un rayon d'action accrus. L'équipage passe de trois à deux grâce à une avionique moderne.",
    specs: { wingspan: '64,4 m', length: '70,6 m', height: '19,4 m', payload: '113 000 kg' }
  },
  {
    id: 'b757',
    name: 'Boeing 757',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne moyen-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs sous les ailes",
      "Fuselage étroit"
    ],
    description: "Conçu pour remplacer le 707. Premier Boeing à être proposé avec des moteurs Rolls Royce. Il offre une meilleure fiabilité et un meilleur rapport poids/puissance.",
    specs: { wingspan: '38 m', length: '47,3 m', height: '13,6 m', payload: '32 754 kg' }
  },
  {
    id: 'b767',
    name: 'Boeing 767',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs sous les ailes",
      "Fuselage large (widebody)"
    ],
    description: "Proposé comme remplaçant pour la flotte des C-135 de l'USAF. Il existe en version ravitailleur, reconnaissance et AWACS (utilisée au Japon).",
    specs: { wingspan: '47,6 m', length: '48,5 m', height: '15,8 m', payload: '16 574 kg' }
  },
  {
    id: 'b777',
    name: 'Boeing 777',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs massifs sous les ailes",
      "Fuselage large"
    ],
    description: "Le plus grand avion de ligne biréacteur au monde lors de son lancement en 1994. Les extrémités d'ailes peuvent se replier pour opérer dans de petits aéroports.",
    specs: { wingspan: '60,9 m', length: '63,7 m', height: '18,5 m', payload: '54 660 kg' }
  },
  {
    id: 'dc8',
    name: 'Boeing (McDonnell Douglas) DC-8',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Boeing (McDonnell Douglas)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre turboréacteurs sous les ailes",
      "Entrées d'air auxiliaires sur le nez (chin intakes)"
    ],
    description: "Famille conçue autour d'une aile et d'un fuselage standard. La version Super 61 est plus longue de 9 mètres que l'original.",
    specs: { wingspan: '43,4 m', length: '45,9 m', height: '12,9 m', payload: '15 585 kg' }
  },
  {
    id: 'dc9',
    name: 'Boeing (McDonnell Douglas) DC-9',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Boeing (McDonnell Douglas)',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs à l'arrière du fuselage",
      "Empennage en T"
    ],
    description: "Développement débuté en 1962. Comme son grand frère le DC-8, il a été conçu pour accepter des extensions de fuselage (plugs) pour augmenter sa capacité.",
    specs: { wingspan: '28,5 m', length: '36,4 m', height: '8,4 m', payload: '14 118 kg' }
  }
,
  {
    id: 'dc10',
    name: 'Boeing (McDonnell Douglas) DC-10',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne moyen/long-courrier',
    manufacturer: 'McDonnell Douglas',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 3,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux moteurs sous les ailes, un moteur dans la dérive",
      "Moteur de queue monté au-dessus du fuselage (conduit droit)"
    ],
    description: "Conçu pour offrir une grande capacité sur des distances moyennes. Il partage une ressemblance frappante avec le Lockheed Tristar, mais le moteur de queue du DC-10 est monté de façon isolée au-dessus du fuselage.",
    specs: { wingspan: '50,4 m', length: '55,5 m', height: '17,7 m', payload: '48 330 kg' }
  },
  {
    id: 'md11',
    name: 'Boeing (McDonnell Douglas) MD-11',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'McDonnell Douglas',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 3,
    recognitionTips: [
      "Aile basse en flèche avec winglets",
      "Fuselage allongé par rapport au DC-10",
      "Trois moteurs (deux sous les ailes, un dans la dérive)"
    ],
    description: "Développement du DC-10 dévoilé en 1985. Les principales différences sont l'ajout de winglets, un fuselage plus long et une avionique modernisée permettant de supprimer le poste d'officier mécanicien.",
    specs: { wingspan: '51,7 m', length: '61,2 m', height: '17,6 m', payload: '51 058 kg' }
  },
  {
    id: 'crj',
    name: 'Canadair Regional Jet',
    category: 'Civil Jet Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'Canadair',
    country: 'Canada',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux moteurs à l'arrière du fuselage",
      "Empennage en T"
    ],
    description: "Développé à partir du jet d'affaires Challenger. Conçu pour transporter environ 50 passagers sur de courtes distances, il a révolutionné le marché des jets régionaux.",
    specs: { wingspan: '21,2 m', length: '26,7 m', height: '6,2 m', payload: '3 728 kg' }
  },
  {
    id: 'emb145',
    name: 'EMBRAER EMB-145',
    category: 'Civil Jet Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'EMBRAER',
    country: 'Brésil',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux moteurs à l'arrière du fuselage",
      "Empennage en T"
    ],
    description: "Le premier avion de ligne à réaction du Brésil. Il vise les marchés d'affaires et militaires. Une version équipée du radar suédois Erieye existe pour la surveillance aéroportée.",
    specs: { wingspan: '20 m', length: '29,9 m', height: '6,7 m', payload: '5 515 kg' }
  },
  {
    id: 'f28-fellowship',
    name: 'Fokker F28 Fellowship',
    category: 'Civil Jet Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'Fokker',
    country: 'Pays-Bas',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse peu en flèche",
      "Deux moteurs à l'arrière du fuselage",
      "Empennage en T"
    ],
    description: "Premier avion à réaction de Fokker, construit en collaboration avec MBB et Shorts. Plusieurs variantes ont été produites avec des fuselages de différentes longueurs.",
    specs: { wingspan: '25,1 m', length: '29,6 m', height: '8,5 m', payload: '10 478 kg' }
  },
  {
    id: 'fokker-100-70',
    name: 'Fokker 100/70',
    category: 'Civil Jet Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'Fokker',
    country: 'Pays-Bas',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Nacelles moteurs plus larges que sur le F28",
      "Envergure accrue par rapport au F28"
    ],
    description: "Le Fokker 100 a remplacé le F28 en 1988. C'est une version allongée et améliorée avec des moteurs plus silencieux et une envergure plus grande. Le Fokker 70 est la version courte.",
    specs: { wingspan: '28,1 m', length: '35,5 m', height: '8,5 m', payload: '11 108 kg' }
  },
  {
    id: 'il62-classic',
    name: 'Ilyushin Il-62M Classic',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre moteurs groupés par paires à l'arrière",
      "Empennage en T"
    ],
    description: "Opérationnel depuis 1974 sur les lignes longue distance de l'Aeroflot. La version M a apporté des améliorations pour réduire le bruit et la pollution selon les normes occidentales.",
    specs: { wingspan: '43,2 m', length: '53,2 m', height: '12,3 m', payload: '23 000 kg' }
  },
  {
    id: 'il86',
    name: 'Ilyushin Il-86',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne moyen-courrier',
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche",
      "Quatre moteurs sous les ailes",
      "Fuselage large (widebody)"
    ],
    description: "Premier avion gros-porteur soviétique, ayant volé en 1976. Il sert de base pour l'avion de commandement militaire Il-87.",
    specs: { wingspan: '48,1 m', length: '59,4 m', height: '15,8 m', payload: '42 000 kg' }
  },
  {
    id: 'il96',
    name: 'Ilyushin Il-96',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse en flèche avec winglets",
      "Quatre moteurs sous les ailes",
      "Silhouette similaire à l'Il-86 mais fuselage plus long"
    ],
    description: "Conçu pour corriger les défauts des moteurs de l'Il-86, l'Il-96 utilise des moteurs Aviadvigatel PS-90A beaucoup plus performants.",
    specs: { wingspan: '57,7 m', length: '55,4 m', height: '17,6 m', payload: '40 000 kg' }
  },
  {
    id: 'l1011-tristar',
    name: 'Lockheed Martin L1011 Tristar',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Lockheed',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 3,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux moteurs sous les ailes, un moteur dans la dérive",
      "Moteur de queue intégré avec une entrée d'air en S (S-duct)"
    ],
    description: "Conçu selon les mêmes exigences que le DC-10. Contrairement à son concurrent, son moteur central est enterré dans le fuselage avec une sortie en bout de queue.",
    specs: { wingspan: '47,3 m', length: '54,2 m', height: '16,8 m', payload: '40 345 kg' }
  },
  {
    id: 'tu134-crusty',
    name: 'Tupolev Tu-134 Crusty',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Tupolev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux moteurs à l'arrière du fuselage",
      "Nez vitré caractéristique (pour le navigateur)"
    ],
    description: "Les designers russes ont longtemps conservé le nez vitré sur les avions civils, héritage de leurs bombardiers. Ce nez servait au poste du navigateur.",
    specs: { wingspan: '29 m', length: '35 m', height: '9 m', payload: '7 700 kg' }
  },
  {
    id: 'tu154-careless',
    name: 'Tupolev Tu-154 Careless',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne moyen-courrier',
    manufacturer: 'Tupolev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 3,
    recognitionTips: [
      "Aile basse en flèche",
      "Trois moteurs à l'arrière (un central dans la dérive)",
      "Empennage en T"
    ],
    description: "A volé pour la première fois en 1973. Une version expérimentale (Tu-156) a été testée avec un système de carburant cryogénique utilisant du gaz naturel.",
    specs: { wingspan: '37,5 m', length: '47,9 m', height: '11,4 m', payload: '20 000 kg' }
  },
  {
    id: 'tu204',
    name: 'Tupolev Tu-204',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne moyen-courrier',
    manufacturer: 'Tupolev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche avec winglets",
      "Deux moteurs sous les ailes",
      "Apparence très similaire au Boeing 757"
    ],
    description: "Produit en trois variantes : passagers, combo fret/passagers et une version courte (Tu-224). Tupolev espère des applications militaires pour remplacer l'Il-18.",
    specs: { wingspan: '42 m', length: '46 m', height: '13,9 m', payload: '21 000 kg' }
  },
  {
    id: 'yak40-codling',
    name: 'Yakovlev Yak-40 Codling',
    category: 'Civil Jet Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'Yakovlev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 3,
    recognitionTips: [
      "Aile basse et droite",
      "Trois moteurs à l'arrière",
      "Empennage en T"
    ],
    description: "Conçu pour remplacer le DC-3/Li-2. Il peut opérer depuis des pistes très sommaires ou en herbe. Très répandu dans l'ex-Union Soviétique.",
    specs: { wingspan: '25 m', length: '20,4 m', height: '6,5 m', payload: '1 360 kg' }
  },
  {
    id: 'yak42-clobber',
    name: 'Yakovlev Yak-42 Clobber',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Yakovlev',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 3,
    recognitionTips: [
      "Aile basse en flèche",
      "Trois moteurs à l'arrière",
      "Empennage en T"
    ],
    description: "Entré en service en 1980 pour remplacer le Tu-134. Sa conception robuste lui permet d'opérer depuis des aérodromes semi-permanents.",
    specs: { wingspan: '34,9 m', length: '36,4 m', height: '9,8 m', payload: '13 000 kg' }
  },
  {
    id: 'cn235-civil',
    name: 'Airtech/CASA CN-235',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional moyen-courrier',
    manufacturer: 'CASA / IPTN',
    country: 'Espagne / Indonésie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Empennage horizontal monté haut sur la dérive"
    ],
    description: "Version civile du transport militaire. Moins vendue que la version militaire, elle conserve la rampe de chargement arrière et les capacités de piste courte.",
    specs: { wingspan: '25,8 m', length: '21,4 m', height: '8,2 m', payload: '4 000 kg' }
  },
  {
    id: 'an38',
    name: 'Antonov An-38',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Double dérive",
      "Fuselage allongé par rapport à l'An-28"
    ],
    description: "Développement de l'An-28 avec un fuselage étiré et des moteurs turbopropulseurs Garrett. Utilisé pour le transport de passagers et de fret.",
    specs: { wingspan: '22 m', length: '15,5 m', height: '4,3 m', payload: '3 200 kg' }
  },
  {
    id: 'atr42-72',
    name: 'ATR 42/72',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne moyen-courrier',
    manufacturer: 'ATR',
    country: 'France / Italie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Empennage en T"
    ],
    description: "L'ATR 42 a volé en 1984. Une version allongée, l'ATR 72, mesure 27,2 m de long et peut transporter 74 passagers.",
    specs: { wingspan: '24,6 m', length: '22,7 m', height: '7,6 m', payload: '4 910 kg' }
  },
  {
    id: 'bae748',
    name: 'BAe (HS) 748',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'British Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Nacelles moteurs dépassant nettement de l'aile"
    ],
    description: "Conçu initialement par Avro en 1960. Très populaire auprès des opérateurs militaires, notamment en Inde qui en utilise plus de 50.",
    specs: { wingspan: '31,2 m', length: '20,4 m', height: '7,6 m', payload: '5 136 kg' }
  },
  {
    id: 'bae-atp',
    name: 'BAe ATP',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'British Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Hélices à six pales",
      "Dérive avec un décrochement (cranked tailfin)"
    ],
    description: "Conçu comme remplaçant du BAe 748. L'Advanced TurboProp (ATP) possède une aile améliorée et des hélices à six pales très silencieuses.",
    specs: { wingspan: '30,6 m', length: '26 m', height: '7,6 m', payload: '7 167 kg' }
  },
  {
    id: 'jetstream41',
    name: 'BAe Jetstream 41',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'British Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Hélices à cinq pales contrarotatives",
      "Dérive fixée au milieu du fuselage arrière (mid-mounted tail)"
    ],
    description: "Version allongée du Jetstream 31. Le fuselage a été étiré de 5 mètres et l'envergure augmentée pour accroître la capacité en passagers.",
    specs: { wingspan: '18,3 m', length: '19,2 m', height: '5,7 m', payload: '3 628 kg' }
  },
  {
    id: 'be32-cuff',
    name: 'Beriev Be-32 Cuff',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional court-courrier STOL',
    manufacturer: 'Beriev',
    country: 'Russie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Aile à angle anèdre (pointe légèrement vers le bas)",
      "Bimoteur turbopropulsé"
    ],
    description: "Relancé en 1993 après avoir été annulé en faveur du Let-410 tchèque. La production est prévue pour être réalisée par IAR en Roumanie.",
    specs: { wingspan: '17 m', length: '15,7 m', height: '5,5 m', payload: '1 900 kg' }
  },
  {
    id: 'cv440',
    name: 'Convair CV 440 Metropolitan',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne régional',
    manufacturer: 'Convair',
    country: 'USA',
    engineType: 'Radial',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Deux moteurs radiaux à pistons",
      "Bord d'attaque de l'aile effilé (tapered leading edge)"
    ],
    description: "Développement du CV 340 intégrant une meilleure insonorisation de la cabine. Plusieurs versions ont été converties avec des turbopropulseurs Rolls-Royce Dart.",
    specs: { wingspan: '32,1 m', length: '24,1 m', height: '8,6 m', payload: '7 000 kg' }
  },
  {
    id: 'dash7',
    name: 'de Havilland Canada DHC-7 Dash 7',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne moyen-courrier STOL',
    manufacturer: 'de Havilland Canada',
    country: 'Canada',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile haute et droite",
      "Quatre turbopropulseurs",
      "Empennage en T"
    ],
    description: "Conçu pour les décollages et atterrissages courts (STOL). Un exemplaire est utilisé par le département de l'environnement canadien pour surveiller les glaces.",
    specs: { wingspan: '28,3 m', length: '24,6 m', height: '8 m', payload: '5 130 kg' }
  },
  {
    id: 'dash8',
    name: 'de Havilland Canada DHC-8 Dash 8',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'de Havilland Canada',
    country: 'Canada',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Deux turbopropulseurs",
      "Empennage en T"
    ],
    description: "Conçu pour combler le vide entre le Dash 7 (50 places) et le Twin Otter (20 places). Connu pour son efficacité et son faible niveau sonore.",
    specs: { wingspan: '25,9 m', length: '22,3 m', height: '7,5 m', payload: '4 134 kg' }
  },
  {
    id: 'do228',
    name: 'Dornier Do.228',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'Dornier',
    country: 'Allemagne',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Extrémités d'ailes biseautées"
    ],
    description: "Utilisé mondialement pour le transport régional et les missions utilitaires. Construit également sous licence en Inde.",
    specs: { wingspan: '16,9 m', length: '16,5 m', height: '4,8 m', payload: '2 200 kg' }
  },
  {
    id: 'do328',
    name: 'Dornier Do.328',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'Dornier',
    country: 'Allemagne',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Profil aérodynamique très fluide"
    ],
    description: "Conçu pour offrir des vitesses de croisière proches de celles des jets tout en conservant l'économie des turbopropulseurs.",
    specs: { wingspan: '20,9 m', length: '21,2 m', height: '7 m', payload: '3 450 kg' }
  },
  {
    id: 'dc6',
    name: 'Douglas DC-6',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Douglas',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse et droite",
      "Quatre moteurs à pistons",
      "Fuselage cylindrique long"
    ],
    description: "Successeur du DC-4, le DC-6 a été l'un des piliers du transport aérien transatlantique avant l'ère des jets.",
    specs: { wingspan: '35,8 m', length: '32,2 m', height: '8,7 m', payload: '12 700 kg' }
  },
  {
    id: 'emb110',
    name: 'EMBRAER EMB-110 Bandeirante',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional / utilitaire',
    manufacturer: 'EMBRAER',
    country: 'Brésil',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Nez pointu"
    ],
    description: "L'avion qui a lancé Embraer sur le marché international. Très robuste, utilisé tant par des civils que des militaires.",
    specs: { wingspan: '15,3 m', length: '15,1 m', height: '4,9 m', payload: '1 600 kg' }
  },
  {
    id: 'emb120',
    name: 'EMBRAER EMB-120 Brasilia',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'EMBRAER',
    country: 'Brésil',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Empennage en T"
    ],
    description: "Successeur plus rapide et plus grand du Bandeirante, très populaire auprès des compagnies régionales américaines.",
    specs: { wingspan: '19,8 m', length: '20 m', height: '6,3 m', payload: '3 200 kg' }
  },
  {
    id: 'fairchild-metro',
    name: 'Fairchild Metro',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional / fret',
    manufacturer: 'Fairchild',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Fuselage très étroit et allongé (aspect cigare)",
      "Bimoteur turbopropulsé"
    ],
    description: "Évolution du Merlin d'affaires. Sa cabine étroite mais longue est caractéristique des vols régionaux de faible densité.",
    specs: { wingspan: '17,4 m', length: '18,1 m', height: '5,1 m', payload: '2 100 kg' }
  },
  {
    id: 'fokker-f27',
    name: 'Fokker F27 Friendship',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Fokker',
    country: 'Pays-Bas',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Hublots de forme ovale"
    ],
    description: "L'un des turbopropulseurs les plus réussis de l'histoire. Plus de 700 exemplaires construits, incluant la version Fairchild F-27 aux USA.",
    specs: { wingspan: '29 m', length: '23,5 m', height: '8,5 m', payload: '5 900 kg' }
  },
  {
    id: 'fokker-50',
    name: 'Fokker 50',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne court-courrier',
    manufacturer: 'Fokker',
    country: 'Pays-Bas',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Hélices à six pales",
      "Basé sur le fuselage du F27"
    ],
    description: "Modernisation du F27 avec une nouvelle avionique, des moteurs plus puissants et des hélices à six pales pour un meilleur confort.",
    specs: { wingspan: '29 m', length: '25,2 m', height: '8,3 m', payload: '7 000 kg' }
  },
  {
    id: 'il18',
    name: 'Ilyushin Il-18',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne moyen-courrier',
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse et droite",
      "Quatre turbopropulseurs",
      "Dérive imposante"
    ],
    description: "L'un des avions de transport les plus robustes de l'ère soviétique. A servi de base à de nombreuses versions militaires (Il-20, Il-38).",
    specs: { wingspan: '37,4 m', length: '35,9 m', height: '10,2 m', payload: '13 500 kg' }
  },
  {
    id: 'il114',
    name: 'Ilyushin Il-114',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne régional',
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Design moderne et fluide"
    ],
    description: "Conçu pour remplacer l'An-24 sur les lignes intérieures russes, offrant un confort et une économie de carburant bien supérieurs.",
    specs: { wingspan: '30 m', length: '26,9 m', height: '9,2 m', payload: '6 500 kg' }
  },
  {
    id: 'n250',
    name: 'IPTN N-250',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional moyen-courrier',
    manufacturer: 'IPTN',
    country: 'Indonésie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Empennage en T"
    ],
    description: "Premier avion de ligne moderne conçu en Indonésie. Utilise des commandes de vol électriques (Fly-by-Wire).",
    specs: { wingspan: '28 m', length: '26,3 m', height: '8,4 m', payload: '6 000 kg' }
  },
  {
    id: 'l410',
    name: 'Let L-410 Turbolet',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional court-courrier / utilitaire',
    manufacturer: 'Let',
    country: 'République tchèque',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur turbopropulsé",
      "Réservoirs en bout d'aile sur certaines versions"
    ],
    description: "Petit avion extrêmement robuste capable d'opérer depuis des pistes non préparées dans des climats extrêmes.",
    specs: { wingspan: '19,5 m', length: '14,4 m', height: '5,8 m', payload: '1 600 kg' }
  },
  {
    id: 'l610',
    name: 'Let L-610',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional moyen-courrier',
    manufacturer: 'Let',
    country: 'République tchèque',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Empennage en T",
      "Version agrandie du L-410"
    ],
    description: "Développé pour offrir une plus grande capacité que le L-410, visant principalement le marché de l'ex-URSS.",
    specs: { wingspan: '25,6 m', length: '21,4 m', height: '7,6 m', payload: '5 000 kg' }
  },
  {
    id: 'l188-electra',
    name: 'Lockheed Martin L-188 Electra',
    category: 'Civil Turboprop Airliners',
    role: 'Avion de ligne moyen-courrier',
    manufacturer: 'Lockheed',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Aile basse et droite",
      "Quatre turbopropulseurs",
      "Nacelles moteurs proéminentes"
    ],
    description: "Dernier grand avion de ligne civil de Lockheed. Sa cellule a servi de base au patrouilleur maritime P-3 Orion.",
    specs: { wingspan: '30,2 m', length: '31,8 m', height: '10,3 m', payload: '12 000 kg' }
  },
  {
    id: 'beech1900',
    name: 'Raytheon (Beechcraft) 1900',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional / d\'affaires',
    manufacturer: 'Raytheon (Beechcraft)',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Fuselage étroit",
      "Petites ailettes stabilisatrices sur la queue (taillets)"
    ],
    description: "L'un des avions de transport de 19 passagers les plus populaires au monde. Très utilisé pour les liaisons de courte distance.",
    specs: { wingspan: '17,6 m', length: '17,6 m', height: '4,7 m', payload: '2 000 kg' }
  }
,
  {
    id: 'saab340b',
    name: 'Saab 340B',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional court-courrier',
    manufacturer: 'Saab',
    country: 'Suède',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Dérive avec un décrochement marqué à la base"
    ],
    description: "L'un des turbopropulseurs régionaux les plus populaires. La version B dispose de moteurs plus puissants pour de meilleures performances 'hot and high'.",
    specs: { wingspan: '21,4 m', length: '19,7 m', height: '6,9 m', payload: '3 400 kg' }
  },
  {
    id: 'saab2000',
    name: 'Saab 2000',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional rapide',
    manufacturer: 'Saab',
    country: 'Suède',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage très allongé",
      "Moteurs montés plus loin sur l'aile que le Saab 340",
      "Hélices à six pales"
    ],
    description: "Conçu pour offrir la vitesse d'un jet avec l'économie d'un turbopropulseur. C'est l'un des avions à hélices les plus rapides de l'histoire civile.",
    specs: { wingspan: '24,7 m', length: '27,3 m', height: '7,7 m', payload: '5 900 kg' }
  },
  {
    id: 'shorts330',
    name: 'Shorts 330',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional / fret',
    manufacturer: 'Short Brothers',
    country: 'Royaume-Uni',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage de forme rectangulaire (aspect boîte)",
      "Aile haute et droite haubanée",
      "Double dérive"
    ],
    description: "Développé à partir du Skyvan. Son fuselage carré unique maximise l'espace intérieur pour le fret et les passagers.",
    specs: { wingspan: '22,7 m', length: '17,7 m', height: '4,9 m', payload: '3 400 kg' }
  },
  {
    id: 'shorts360',
    name: 'Shorts 360 Sherpa',
    category: 'Civil Turboprop Airliners',
    role: 'Transport régional / utilitaire',
    manufacturer: 'Short Brothers',
    country: 'Royaume-Uni',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage rectangulaire allongé",
      "Dérive unique (contrairement au Shorts 330)",
      "Aile haute haubanée"
    ],
    description: "Évolution du Shorts 330 avec un fuselage plus long et une dérive conventionnelle unique. La version Sherpa est optimisée pour le fret militaire et civil.",
    specs: { wingspan: '22,8 m', length: '21,5 m', height: '7,2 m', payload: '4 500 kg' }
  },
  {
    id: 't101-grach',
    name: 'AeroProgress T-101 Grach',
    category: 'Civil Utility',
    role: 'Utilitaire léger / agricole',
    manufacturer: 'AeroProgress',
    country: 'Russie',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Train classique (roulette de queue)",
      "Large cabine vitrée"
    ],
    description: "Avion utilitaire russe robuste conçu pour remplacer l'An-2 dans des rôles variés comme le transport de fret, de passagers ou l'épandage agricole.",
    specs: { wingspan: '13 m', length: '9,2 m', height: '3,3 m', payload: '1 400 kg' }
  },
  {
    id: 'dingo',
    name: 'AeroRic Dingo',
    category: 'Civil Utility',
    role: 'Utilitaire léger STOL',
    manufacturer: 'AeroRic',
    country: 'Russie',
    engineType: 'Piston / Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Train d'atterrissage sur coussin d'air (optionnel)",
      "Double poutre de queue",
      "Hélice propulsive"
    ],
    description: "Avion amphibie unique capable d'opérer sur neige, eau ou marais grâce à son système de coussin d'air.",
    specs: { wingspan: '14,2 m', length: '11,7 m', height: '3,5 m', payload: '850 kg' }
  },
  {
    id: 'nomad',
    name: 'ASTA (GAF) Nomad',
    category: 'Civil Utility',
    role: 'Utilitaire STOL',
    manufacturer: 'GAF',
    country: 'Australie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute haubanée",
      "Fuselage étroit",
      "Double dérive sur certaines versions"
    ],
    description: "Conçu pour opérer dans l'Outback australien sur des pistes très courtes. Utilisé pour le transport médical et le fret.",
    specs: { wingspan: '16,5 m', length: '12,6 m', height: '5,5 m', payload: '1 600 kg' }
  },
  {
    id: 'an2-colt',
    name: 'Antonov An-2 Colt',
    category: 'Civil Utility',
    role: 'Utilitaire biplan multirôle',
    manufacturer: 'Antonov',
    country: 'Ukraine / Russie',
    engineType: 'Radial',
    enginesCount: 1,
    recognitionTips: [
      "Configuration biplan",
      "Moteur radial massif",
      "Train fixe"
    ],
    description: "L'un des avions les plus produits au monde. Incroyablement robuste, il peut décoller et atterrir presque n'importe où.",
    specs: { wingspan: '18,2 m', length: '12,4 m', height: '4,1 m', payload: '2 140 kg' }
  },
  {
    id: 'an14-clod',
    name: 'Antonov An-14 Clod',
    category: 'Civil Utility',
    role: 'Utilitaire léger STOL',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Radial',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute haubanée",
      "Double dérive",
      "Deux moteurs radiaux"
    ],
    description: "Petit utilitaire surnommé 'Pchelka' (Petite Abeille). Très performant sur pistes courtes, il a servi de base au futur An-28.",
    specs: { wingspan: '22 m', length: '11,4 m', height: '4,6 m', payload: '720 kg' }
  },
  {
    id: 'an30-clank',
    name: 'Antonov An-30 Clank',
    category: 'Civil Utility',
    role: 'Cartographie aérienne',
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Nez entièrement vitré surélevé",
      "Basé sur l'An-24",
      "Fenêtres de caméras sous le fuselage"
    ],
    description: "Version spécialisée de l'An-24 pour la photographie aérienne et la cartographie. Son nez distinctif permet au navigateur une visibilité totale.",
    specs: { wingspan: '29,2 m', length: '24,3 m', height: '8,3 m', payload: 'Équipement photo' }
  },
  {
    id: 'cl415',
    name: 'Canadair CL-415',
    category: 'Civil Utility',
    role: 'Amphibie bombardier d\'eau',
    manufacturer: 'Canadair',
    country: 'Canada',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage en forme de coque",
      "Aile haute avec winglets",
      "Bimoteur turbopropulsé"
    ],
    description: "Successeur du CL-215. C'est l'un des meilleurs avions de lutte contre les incendies de forêt au monde.",
    specs: { wingspan: '28,6 m', length: '19,8 m', height: '8,9 m', payload: '6 137 kg d\'eau' }
  },
  {
    id: 'c208-caravan',
    name: 'Cessna 208 Caravan 1',
    category: 'Civil Utility',
    role: 'Utilitaire polyvalent',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Train tricycle fixe massif",
      "Un seul turbopropulseur dans le nez"
    ],
    description: "Le 'camion' de l'aviation moderne. Utilisé par FedEx pour le fret et dans les zones reculées du monde entier.",
    specs: { wingspan: '15,9 m', length: '12,7 m', height: '4,5 m', payload: '1 300 kg' }
  },
  {
    id: 'dhc2-beaver',
    name: 'de Havilland Canada DHC-2 Beaver',
    category: 'Civil Utility',
    role: 'Utilitaire de brousse (Bush plane)',
    manufacturer: 'de Havilland Canada',
    country: 'Canada',
    engineType: 'Radial / Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Empennage de forme arrondie",
      "Souvent équipé de flotteurs ou de skis"
    ],
    description: "Légende de l'aviation de brousse canadienne. Conçu pour être indestructible et facile à piloter dans le Grand Nord.",
    specs: { wingspan: '14,6 m', length: '9,2 m', height: '2,7 m', payload: '950 kg' }
  },
  {
    id: 'dhc6-twinotter',
    name: 'de Havilland Canada DHC-6 Twin Otter',
    category: 'Civil Utility',
    role: 'Transport utilitaire STOL',
    manufacturer: 'de Havilland Canada',
    country: 'Canada',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute haubanée",
      "Train fixe",
      "Bimoteur turbopropulsé"
    ],
    description: "La référence absolue pour le transport en zone difficile. Capable d'opérer sur des terrains non préparés ou sur l'eau.",
    specs: { wingspan: '19,8 m', length: '15,8 m', height: '5,9 m', payload: '1 900 kg' }
  },
  {
    id: 'do28d-skyservant',
    name: 'Dornier Do.28D Skyservant',
    category: 'Civil Utility',
    role: 'Utilitaire léger STOL',
    manufacturer: 'Dornier',
    country: 'Allemagne',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs montés sur des moignons d'ailes à l'avant (Sponson)",
      "Aile haute haubanée",
      "Train classique fixe"
    ],
    description: "Configuration moteur unique facilitant l'accès à la cabine et améliorant la sécurité. Très utilisé en Allemagne et en Afrique.",
    specs: { wingspan: '15,6 m', length: '11,4 m', height: '3,9 m', payload: '1 000 kg' }
  },
  {
    id: 'galivan358',
    name: 'Galivan 358',
    category: 'Civil Utility',
    role: 'Transport utilitaire léger',
    manufacturer: 'Galivan',
    country: 'Colombie',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Ressemble au Cessna 337 Skymaster",
      "Moteurs en configuration push-pull",
      "Double poutre de queue"
    ],
    description: "Premier avion indigène de Colombie, conçu pour le transport de passagers et de fret dans les Andes.",
    specs: { wingspan: '11,6 m', length: '9,1 m', height: '2,8 m', payload: '700 kg' }
  },
  {
    id: 'g250-strato',
    name: 'Grob G-250 Strato',
    category: 'Civil Utility',
    role: 'Recherche haute altitude',
    manufacturer: 'Grob',
    country: 'Allemagne',
    engineType: 'Turboprop / Jet',
    enginesCount: 1,
    recognitionTips: [
      "Envergure extrêmement longue (type planeur)",
      "Construction tout composite",
      "Nez allongé"
    ],
    description: "Conçu pour la surveillance atmosphérique et environnementale à très haute altitude.",
    specs: { wingspan: '32,9 m', length: '17,6 m', height: '4,4 m', payload: '1 000 kg' }
  },
  {
    id: 'hamc-y12',
    name: 'HAMC Y-12',
    category: 'Civil Utility',
    role: 'Transport utilitaire léger',
    manufacturer: 'HAMC',
    country: 'Chine',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute haubanée",
      "Bimoteur turbopropulsé",
      "Dérive droite avec grand stabilisateur"
    ],
    description: "Utilitaire polyvalent chinois exporté dans de nombreux pays en développement pour le transport régional.",
    specs: { wingspan: '17,2 m', length: '14,9 m', height: '5,7 m', payload: '1 700 kg' }
  },
  {
    id: 'au24a-stallion',
    name: 'Helio Au-24A Stallion',
    category: 'Civil Utility',
    role: 'Utilitaire STOL léger',
    manufacturer: 'Helio',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Nez très long",
      "Roulette de queue"
    ],
    description: "Version turbopropulsée du Courier. Connu pour ses capacités de décollage et atterrissage sur des distances ridicules.",
    specs: { wingspan: '12,5 m', length: '11,9 m', height: '2,8 m', payload: '900 kg' }
  },
  {
    id: 'super-courier',
    name: 'Helio Super Courier',
    category: 'Civil Utility',
    role: 'Utilitaire STOL léger',
    manufacturer: 'Helio',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Nombreux becs de bord d'attaque",
      "Train classique"
    ],
    description: "Utilisé par les forces spéciales pour sa capacité à opérer depuis des clairières ou des routes de montagne étroites.",
    specs: { wingspan: '11,9 m', length: '9,4 m', height: '2,7 m', payload: '600 kg' }
  },
  {
    id: 'mu2',
    name: 'Mitsubishi Mu-2',
    category: 'Civil Utility',
    role: 'Utilitaire / Transport VIP',
    manufacturer: 'Mitsubishi',
    country: 'Japon',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Réservoirs en bout d'aile massifs",
      "Moteurs intégrés à l'aile (sans nacelles pendantes)"
    ],
    description: "Avion très rapide et performant, utilisé tant pour le transport d'affaires que pour des rôles militaires de liaison.",
    specs: { wingspan: '11,9 m', length: '10,1 m', height: '3,9 m', payload: '1 200 kg' }
  },
  {
    id: 'm101t',
    name: 'Myasishchev M-101T',
    category: 'Civil Utility',
    role: 'Transport léger d\'affaires',
    manufacturer: 'Myasishchev',
    country: 'Russie',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse en flèche",
      "Monoturbopropulseur",
      "Design très profilé"
    ],
    description: "Première tentative russe de créer un avion d'affaires pressurisé aux normes occidentales.",
    specs: { wingspan: '13 m', length: '10,1 m', height: '3,4 m', payload: '540 kg' }
  },
  {
    id: 'p69-victor',
    name: 'Partenavia P.69 Victor',
    category: 'Civil Utility',
    role: 'Utilitaire léger',
    manufacturer: 'Partenavia',
    country: 'Italie',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Bimoteur à pistons",
      "Train tricycle fixe"
    ],
    description: "Petit bimoteur économique très populaire pour l'entraînement et le transport léger.",
    specs: { wingspan: '12 m', length: '9,3 m', height: '3,4 m', payload: '700 kg' }
  },
  {
    id: 'pc6-turboporter',
    name: 'Pilatus PC-6 Turbo Porter',
    category: 'Civil Utility',
    role: 'Utilitaire STOL légendaire',
    manufacturer: 'Pilatus',
    country: 'Suisse',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Nez très long et plat",
      "Aile haute haubanée parfaitement droite",
      "Train classique fixe"
    ],
    description: "Capable d'atterrir sur des glaciers ou des versants de montagnes. C'est l'un des avions STOL les plus célèbres au monde.",
    specs: { wingspan: '15,9 m', length: '11 m', height: '3,2 m', payload: '1 200 kg' }
  },
  {
    id: 'pc12',
    name: 'Pilatus PC-12',
    category: 'Civil Utility',
    role: 'Transport d\'affaires / utilitaire',
    manufacturer: 'Pilatus',
    country: 'Suisse',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse avec winglets",
      "Empennage en T",
      "Une seule turbine puissante dans le nez"
    ],
    description: "Combine la capacité d'un jet avec la flexibilité d'un turbopropulseur. Très prisé par le Royal Flying Doctor Service.",
    specs: { wingspan: '16,2 m', length: '14,4 m', height: '4,2 m', payload: '1 500 kg' }
  },
  {
    id: 'islander',
    name: 'Britten Norman Islander',
    category: 'Civil Utility',
    role: 'Transport léger régional',
    manufacturer: 'Britten Norman',
    country: 'Royaume-Uni',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile haute et droite",
      "Train tricycle fixe",
      "Moteurs montés directement sous l'aile"
    ],
    description: "Utilisé partout où les conditions sont difficiles. Très simple d'entretien, il possède de nombreuses portes pour l'accès cabine.",
    specs: { wingspan: '14,9 m', length: '10,8 m', height: '4,2 m', payload: '900 kg' }
  },
  {
    id: 'trislander',
    name: 'Britten Norman Trislander',
    category: 'Civil Utility',
    role: 'Transport régional court',
    manufacturer: 'Britten Norman',
    country: 'Royaume-Uni',
    engineType: 'Piston',
    enginesCount: 3,
    recognitionTips: [
      "Trois moteurs (deux sous l'aile, un dans la dérive)",
      "Fuselage très allongé",
      "Train tricycle fixe"
    ],
    description: "Version allongée de l'Islander. Le troisième moteur est intégré de façon insolite dans la dérive verticale.",
    specs: { wingspan: '16,1 m', length: '15 m', height: '4,3 m', payload: '1 400 kg' }
  },
  {
    id: 'pzl105-flaming',
    name: 'PZL-Warszawa PZL-105L Flaming',
    category: 'Civil Utility',
    role: 'Utilitaire léger',
    manufacturer: 'PZL',
    country: 'Pologne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Train classique caréné",
      "Verrière large"
    ],
    description: "Conçu pour remplacer le Wilga. Destiné au remorquage de planeurs, au parachutisme et au transport léger.",
    specs: { wingspan: '12,7 m', length: '9,2 m', height: '2,8 m', payload: '600 kg' }
  },
  {
    id: 'f406-caravan2',
    name: 'Reims F406 Caravan II',
    category: 'Civil Utility',
    role: 'Utilitaire / Surveillance maritime',
    manufacturer: 'Reims Aviation',
    country: 'France',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Nez souvent équipé d'un radar pour la surveillance"
    ],
    description: "Développé à partir du Cessna 404, mais construit en France. Très utilisé par les douanes et la surveillance côtière.",
    specs: { wingspan: '15 m', length: '11,9 m', height: '4 m', payload: '1 500 kg' }
  },
  {
    id: 'beluga',
    name: 'SATIC A300-600T Beluga',
    category: 'Civil Utility',
    role: 'Transport de fret super-lourd',
    manufacturer: 'SATIC (Airbus)',
    country: 'Europe',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage supérieur massif et bulbeux",
      "Dérives verticales additionnelles sur l'empennage",
      "Ouverture frontale au-dessus du cockpit"
    ],
    description: "Basé sur l'Airbus A300, il est conçu pour transporter des sections entières d'avions entre les usines d'Airbus.",
    specs: { wingspan: '44,8 m', length: '56,1 m', height: '17,2 m', payload: '47 000 kg' }
  },
  {
    id: 'tbm700',
    name: 'Socata TBM700',
    category: 'Civil Utility',
    role: 'Utilitaire rapide / Affaires',
    manufacturer: 'Socata',
    country: 'France',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Une seule turbine puissante dans le nez",
      "Lignes très fluides"
    ],
    description: "Le premier monoturbopropulseur pressurisé haute performance. Très rapide, il concurrence certains jets d'affaires.",
    specs: { wingspan: '12,6 m', length: '10,6 m', height: '4,3 m', payload: '800 kg' }
  },
  {
    id: 'skyvan',
    name: 'Shorts Skyvan',
    category: 'Civil Utility',
    role: 'Utilitaire léger STOL',
    manufacturer: 'Short Brothers',
    country: 'Royaume-Uni',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage court et parfaitement rectangulaire",
      "Double dérive",
      "Aile haute haubanée"
    ],
    description: "Surnommé 'la boîte à chaussures volante'. Idéal pour le transport de parachutistes et de matériel encombrant.",
    specs: { wingspan: '19,7 m', length: '12,2 m', height: '4,6 m', payload: '2 300 kg' }
  },
  {
    id: 'sm92-finist',
    name: 'Technovia SM-92 Finist',
    category: 'Civil Utility',
    role: 'Utilitaire léger STOL',
    manufacturer: 'Technovia',
    country: 'Russie',
    engineType: 'Radial / Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Fuselage très anguleux",
      "Train classique robuste"
    ],
    description: "Avion russe moderne inspiré par le concept du Pilatus Porter pour opérer dans des conditions austères.",
    specs: { wingspan: '14,6 m', length: '9,1 m', height: '3 m', payload: '900 kg' }
  },
  {
    id: 'utva66',
    name: 'UTVA-66',
    category: 'Civil Utility',
    role: 'Utilitaire léger STOL',
    manufacturer: 'UTVA',
    country: 'Yougoslavie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Train classique",
      "Verrière offrant une visibilité totale vers l'arrière"
    ],
    description: "Utilitaire polyvalent yougoslave capable d'opérer sur flotteurs ou sur skis. Très utilisé par l'armée pour la liaison.",
    specs: { wingspan: '11,4 m', length: '8,4 m', height: '3,2 m', payload: '600 kg' }
  },
  {
    id: 'jetcruzer500',
    name: 'AASI Jetcruzer 500',
    category: 'Private Executive Aircraft',
    role: 'Transport d\'affaires léger',
    manufacturer: 'AASI',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Configuration canard",
      "Hélice propulsive à l'arrière",
      "Winglets sur les plans principaux"
    ],
    description: "Conception innovante visant à offrir une sécurité maximale contre le décrochage et une vitesse élevée.",
    specs: { wingspan: '12,8 m', length: '8,6 m', height: '3,1 m', payload: '600 kg' }
  },
  {
    id: 'corvette',
    name: 'Aerospatiale SN-601 Corvette',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'Aerospatiale',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Moteurs montés à l'arrière du fuselage",
      "Réservoirs en bout d'aile sur certaines versions"
    ],
    description: "Jet d'affaires français polyvalent, également utilisé par l'armée de l'air pour le transport de personnels.",
    specs: { wingspan: '12,8 m', length: '13,8 m', height: '4,2 m', payload: '1 200 kg' }
  },
  {
    id: 'jetstream31',
    name: 'BAe Jetstream 31',
    category: 'Private Executive Aircraft',
    role: 'Transport d\'affaires / régional',
    manufacturer: 'British Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Nez très court",
      "Bimoteur turbopropulsé"
    ],
    description: "Anciennement Handley Page Jetstream. Très populaire pour les vols 'shuttle' d'entreprises.",
    specs: { wingspan: '15,8 m', length: '14,4 m', height: '5,3 m', payload: '1 800 kg' }
  },
  {
    id: 'global-express',
    name: 'Bombardier BD-700 Global Express',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires ultra long-courrier',
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse à forte flèche avec winglets",
      "Empennage en T",
      "Fuselage très long"
    ],
    description: "Conçu pour relier n'importe quel point du globe avec une seule escale. Le sommet du luxe et de la performance en aviation d'affaires.",
    specs: { wingspan: '28,6 m', length: '30,3 m', height: '7,5 m', payload: '2 400 kg' }
  },
  {
    id: 'challenger',
    name: 'Canadair Challenger',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires large cabine',
    manufacturer: 'Canadair',
    country: 'Canada',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage trapu et large",
      "Aile basse en flèche",
      "Moteurs à l'arrière"
    ],
    description: "A révolutionné l'aviation d'affaires en offrant une cabine de la largeur d'un avion de ligne. C'est la base de la famille CRJ.",
    specs: { wingspan: '19,6 m', length: '20,8 m', height: '6,3 m', payload: '1 800 kg' }
  },
  {
    id: 'citationjet',
    name: 'Cessna 525 Citationjet',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse parfaitement droite",
      "Empennage en T",
      "Petit gabarit"
    ],
    description: "Jet très économique et facile à piloter, souvent certifié pour un seul pilote.",
    specs: { wingspan: '14,2 m', length: '12,9 m', height: '4,2 m', payload: '800 kg' }
  }
,
  {
    id: 'citation-ii',
    name: 'Cessna 550 Citation II',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Moteurs montés à l'arrière",
      "Empennage en T"
    ],
    description: "Version allongée du Citation I original, offrant plus de capacité et de meilleures performances. C'est l'un des jets d'affaires les plus vendus de sa génération.",
    specs: { wingspan: '15,8 m', length: '14,4 m', height: '4,5 m', payload: '900 kg' }
  },
  {
    id: 'citation-iii',
    name: 'Cessna 650 Citation III',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires moyen',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Empennage en T",
      "Fuselage plus large que la série Citation II"
    ],
    description: "Premier modèle de Cessna doté d'une aile en flèche haute performance, conçu pour la vitesse et les vols transcontinentaux.",
    specs: { wingspan: '16,2 m', length: '16,9 m', height: '5,1 m', payload: '1 200 kg' }
  },
  {
    id: 'citation-v',
    name: 'Cessna 560 Citation V',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile droite à grande envergure",
      "Moteurs à l'arrière",
      "Sept hublots par côté"
    ],
    description: "Évolution du Citation II avec un fuselage rallongé et des moteurs plus puissants. Très apprécié pour ses performances sur pistes courtes.",
    specs: { wingspan: '15,9 m', length: '14,9 m', height: '4,6 m', payload: '1 000 kg' }
  },
  {
    id: 'citation-x',
    name: 'Cessna 750 Citation X',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires long-courrier rapide',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Ailes à flèche très prononcée (37°)",
      "Nacelles moteurs massives à l'arrière",
      "Empennage en T incliné"
    ],
    description: "Conçu pour être le jet d'affaires civil le plus rapide au monde lors de sa sortie, capable de croiser à Mach 0.92.",
    specs: { wingspan: '19,4 m', length: '22 m', height: '5,8 m', payload: '1 100 kg' }
  },
  {
    id: 'falcon-50',
    name: 'Dassault Falcon 50',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires long-courrier',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 3,
    recognitionTips: [
      "Trois moteurs (deux latéraux, un central dans la dérive)",
      "Aile basse en flèche",
      "Entrée d'air en S pour le moteur central"
    ],
    description: "Premier jet d'affaires de Dassault capable de traverser l'Atlantique. Son architecture triréacteur offre une sécurité accrue pour les vols océaniques.",
    specs: { wingspan: '18,8 m', length: '18,5 m', height: '6,9 m', payload: '1 500 kg' }
  },
  {
    id: 'falcon-100',
    name: 'Dassault Falcon 100',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux moteurs à l'arrière",
      "Quatre hublots de cabine par côté"
    ],
    description: "Version améliorée du Falcon 10 avec une avionique moderne et une masse maximale au décollage augmentée.",
    specs: { wingspan: '13 m', length: '13,8 m', height: '4,6 m', payload: '700 kg' }
  },
  {
    id: 'falcon-200',
    name: 'Dassault Falcon 200',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires moyen',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Plus grand que le Falcon 100",
      "Moteurs plus volumineux (Garrett ATF3)",
      "Dérive avec un large carénage à la base"
    ],
    description: "Successeur du Falcon 20, il dispose de nouveaux moteurs et d'un rayon d'action amélioré.",
    specs: { wingspan: '16,3 m', length: '17,1 m', height: '5,3 m', payload: '1 100 kg' }
  },
  {
    id: 'falcon-900',
    name: 'Dassault Falcon 900',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires large cabine',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Jet',
    enginesCount: 3,
    recognitionTips: [
      "Architecture triréacteur",
      "Fuselage beaucoup plus large que le Falcon 50",
      "Hublots de cabine nombreux"
    ],
    description: "Version agrandie et modernisée du concept du Falcon 50, offrant l'une des cabines les plus spacieuses de sa catégorie.",
    specs: { wingspan: '19,3 m', length: '20,2 m', height: '7,5 m', payload: '1 800 kg' }
  },
  {
    id: 'emb121-xingu',
    name: 'EMBRAER EMB-121 Xingu',
    category: 'Private Executive Aircraft',
    role: 'Transport léger d\'affaires / militaire',
    manufacturer: 'EMBRAER',
    country: 'Brésil',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage en T",
      "Nez très court et arrondi"
    ],
    description: "Développé à partir du Bandeirante, il utilise un fuselage pressurisé. Très utilisé par l'Armée de l'Air française pour la formation des pilotes de transport.",
    specs: { wingspan: '14 m', length: '12,2 m', height: '4,8 m', payload: '800 kg' }
  },
  {
    id: 'gulfstream-1-2',
    name: 'Gulfstream I/II',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires long-courrier',
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Grands hublots de cabine ovales",
      "Moteurs à l'arrière",
      "Dérive haute"
    ],
    description: "Le Gulfstream II a établi la norme pour les jets d'affaires intercontinentaux à large cabine.",
    specs: { wingspan: '20,9 m', length: '24,3 m', height: '7,5 m', payload: '1 600 kg' }
  },
  {
    id: 'gulfstream-4-5',
    name: 'Gulfstream IV/V',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires ultra long-courrier',
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage très long",
      "Grandes winglets sur le Gulfstream V",
      "Six ou sept grands hublots ovales"
    ],
    description: "Le Gulfstream V fut l'un des premiers jets d'affaires capables de voler 12 000 km sans escale.",
    specs: { wingspan: '28,5 m', length: '29,4 m', height: '7,9 m', payload: '2 200 kg' }
  },
  {
    id: 'westwind',
    name: 'IAI 1123 Westwind',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'IAI',
    country: 'Israël',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile médiane droite",
      "Réservoirs en bout d'aile fixes",
      "Moteurs montés très bas à l'arrière"
    ],
    description: "Dérivé du Jet Commander américain, IAI a allongé le fuselage et amélioré les moteurs pour créer le Westwind.",
    specs: { wingspan: '13,6 m', length: '15,9 m', height: '4,8 m', payload: '900 kg' }
  },
  {
    id: 'astra',
    name: 'IAI 1125 Astra',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires moyen',
    manufacturer: 'IAI',
    country: 'Israël',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Fuselage profilé",
      "Pas de réservoirs en bout d'aile contrairement au Westwind"
    ],
    description: "Évolution majeure du Westwind avec une nouvelle aile et des performances de vitesse nettement supérieures.",
    specs: { wingspan: '16 m', length: '16,9 m', height: '5,5 m', payload: '1 100 kg' }
  },
  {
    id: 'learjet-23-29',
    name: 'Learjet 23-29',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger rapide',
    manufacturer: 'Learjet',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage très étroit et pointu",
      "Réservoirs de bout d'aile caractéristiques",
      "Verrière de cockpit bombée"
    ],
    description: "L'avion qui a défini le concept de 'Business Jet'. Extrêmement rapide et nerveux, basé sur un design de chasseur suisse.",
    specs: { wingspan: '10,8 m', length: '13,1 m', height: '3,7 m', payload: '600 kg' }
  },
  {
    id: 'learjet-35-36',
    name: 'Learjet 35/36',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'Learjet',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs plus larges (turbofans) que la série 20",
      "Réservoirs de bout d'aile allongés",
      "Huit hublots de cabine"
    ],
    description: "Version équipée de turboréacteurs à double flux plus silencieux et économes, augmentant considérablement le rayon d'action.",
    specs: { wingspan: '12 m', length: '14,8 m', height: '3,7 m', payload: '800 kg' }
  },
  {
    id: 'learjet-45',
    name: 'Learjet 45',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'Learjet',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Design entièrement nouveau",
      "Winglets de série",
      "Nez très effilé"
    ],
    description: "Premier Learjet conçu entièrement par ordinateur, offrant une cabine plus spacieuse et une technologie moderne.",
    specs: { wingspan: '14,5 m', length: '17,6 m', height: '4,3 m', payload: '900 kg' }
  },
  {
    id: 'learjet-55-60',
    name: 'Learjet 55/60',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires moyen',
    manufacturer: 'Learjet',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage 'Stand-up' (on peut se tenir debout)",
      "Winglets massives",
      "Deux nageoires ventrales sous la queue (Delta fins)"
    ],
    description: "Le plus grand des Learjet classiques, combinant la vitesse de la marque avec un confort de cabine accru.",
    specs: { wingspan: '13,3 m', length: '17,8 m', height: '4,5 m', payload: '1 200 kg' }
  },
  {
    id: 'jetstar-ii',
    name: 'Lockheed Martin Jetstar II',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires moyen-courrier',
    manufacturer: 'Lockheed',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Quatre moteurs à l'arrière (groupés par deux)",
      "Réservoirs massifs traversant l'aile",
      "Empennage en croix"
    ],
    description: "L'un des seuls jets d'affaires doté de quatre moteurs. Très robuste, utilisé par de nombreux chefs d'État.",
    specs: { wingspan: '16,5 m', length: '18,4 m', height: '6,2 m', payload: '1 400 kg' }
  },
  {
    id: 'hansa-jet',
    name: 'MBB HFB 320 Hansa',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'MBB',
    country: 'Allemagne',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Ailes à flèche inversée (pointant vers l'avant)",
      "Réservoirs en bout d'aile",
      "Empennage en T"
    ],
    description: "Seul avion civil de série possédant une voilure à flèche inversée, une configuration choisie pour libérer de l'espace en cabine.",
    specs: { wingspan: '14,4 m', length: '16,6 m', height: '4,9 m', payload: '900 kg' }
  },
  {
    id: 'avanti',
    name: 'Piaggio P.180 Avanti',
    category: 'Private Executive Aircraft',
    role: 'Transport d\'affaires rapide',
    manufacturer: 'Piaggio',
    country: 'Italie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Configuration 'trois surfaces' (ailerons avant, aile, empennage)",
      "Hélices propulsives à l'arrière",
      "Fuselage en forme de fuseau très aérodynamique"
    ],
    description: "Un avion au design révolutionnaire capable de dépasser la vitesse de nombreux jets tout en consommant beaucoup moins de carburant.",
    specs: { wingspan: '14 m', length: '14,4 m', height: '3,9 m', payload: '900 kg' }
  },
  {
    id: 'chieftain',
    name: 'Pilatus PA-31-350 Chieftain',
    category: 'Private Executive Aircraft',
    role: 'Transport léger / taxi aérien',
    manufacturer: 'Piper (distribué par Pilatus)',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur à pistons",
      "Nez allongé"
    ],
    description: "Grand classique du transport léger, robuste et polyvalent pour le transport de passagers ou de petit fret.",
    specs: { wingspan: '12,4 m', length: '10,5 m', height: '3,9 m', payload: '800 kg' }
  },
  {
    id: 'beechjet',
    name: 'Raytheon (Beechcraft) 400A Beechjet',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'Raytheon',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Empennage en T",
      "Moteurs à l'arrière"
    ],
    description: "Conçu par Mitsubishi (MU-300), le design a été racheté et amélioré par Beechcraft.",
    specs: { wingspan: '13,2 m', length: '14,7 m', height: '4,2 m', payload: '900 kg' }
  },
  {
    id: 'king-air',
    name: 'Raytheon (Beechcraft) King Air',
    category: 'Private Executive Aircraft',
    role: 'Turbopropulseur d\'affaires',
    manufacturer: 'Raytheon',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Empennage en T sur les modèles récents (Super King Air)"
    ],
    description: "L'avion d'affaires turbopropulsé le plus populaire de l'histoire, connu pour sa fiabilité légendaire.",
    specs: { wingspan: '16,6 m', length: '13,3 m', height: '4,5 m', payload: '1 200 kg' }
  },
  {
    id: 'starship',
    name: 'Raytheon (Beechcraft) Starship 1',
    category: 'Private Executive Aircraft',
    role: 'Transport d\'affaires futuriste',
    manufacturer: 'Raytheon',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Configuration canard (plans à l'avant)",
      "Hélices propulsives",
      "Pas d'empennage horizontal à l'arrière"
    ],
    description: "Avion tout composite au design avant-gardiste. Bien que technologiquement avancé, il n'a pas connu le succès commercial espéré.",
    specs: { wingspan: '16,6 m', length: '14 m', height: '3,9 m', payload: '1 000 kg' }
  },
  {
    id: 'bae125',
    name: 'Raytheon (BAe) 125',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires moyen',
    manufacturer: 'Raytheon (ex-BAe)',
    country: 'Royaume-Uni',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Fuselage robuste",
      "Empennage conventionnel"
    ],
    description: "L'un des pionniers de l'aviation d'affaires, réputé pour sa solidité et son espace intérieur.",
    specs: { wingspan: '15,6 m', length: '15,6 m', height: '5,3 m', payload: '1 100 kg' }
  },
  {
    id: 'hawker-800-xp',
    name: 'Raytheon (BAe) Hawker 800',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires moyen',
    manufacturer: 'Raytheon',
    country: 'USA / UK',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Évolution du 125",
      "Verrière de cockpit plus profilée",
      "Moteurs turbofans modernes"
    ],
    description: "Version largement améliorée du BAe 125 avec de meilleures performances et une autonomie accrue.",
    specs: { wingspan: '15,6 m', length: '15,6 m', height: '5,5 m', payload: '1 200 kg' }
  },
  {
    id: 'hawker-1000',
    name: 'Raytheon (BAe) Hawker 1000',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires long-courrier',
    manufacturer: 'Raytheon',
    country: 'USA / UK',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage allongé (un hublot supplémentaire)",
      "Moteurs plus larges",
      "Utilisation intensive de matériaux composites"
    ],
    description: "Le plus grand membre de la famille Hawker, conçu pour les vols transatlantiques.",
    specs: { wingspan: '15,6 m', length: '16,4 m', height: '5,5 m', payload: '1 400 kg' }
  },
  {
    id: 'sabreliner',
    name: 'Rockwell Sabreliner',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'Rockwell',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Nez pointu rappelant le chasseur F-86 Sabre",
      "Hublots carrés"
    ],
    description: "Issu d'un programme militaire, cet avion est célèbre pour sa robustesse et ses gènes de chasseur.",
    specs: { wingspan: '13,5 m', length: '13,4 m', height: '4,8 m', payload: '900 kg' }
  },
  
  {
    id: 'sj30',
    name: 'Swearingen SJ30',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger rapide',
    manufacturer: 'Swearingen',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile en flèche très fine",
      "Fuselage étroit",
      "Vitesse de croisière élevée"
    ],
    description: "Conçu par Ed Swearingen pour être le jet léger le plus rapide et le plus performant du marché.",
    specs: { wingspan: '11 m', length: '14,3 m', height: '4,3 m', payload: '700 kg' }
  },
  {
    id: 'vantage',
    name: 'Visionaire VA-10 Vantage',
    category: 'Private Executive Aircraft',
    role: 'Monojet d\'affaires léger',
    manufacturer: 'Visionaire',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Aile à flèche inversée",
      "Un seul moteur jet intégré au fuselage",
      "Design compact"
    ],
    description: "Concept innovant de jet d'affaires à moteur unique et aile inversée pour une sécurité et une visibilité optimales.",
    specs: { wingspan: '11,4 m', length: '10,4 m', height: '3,8 m', payload: '500 kg' }
  },
  {
    id: 'boero-115',
    name: 'Aero Boero 115',
    category: 'Private Light Aircraft',
    role: 'Utilitaire léger / Entraînement',
    manufacturer: 'Aero Boero',
    country: 'Argentine',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Train classique (roulette de queue)",
      "Cabine biplace"
    ],
    description: "Avion argentin très populaire pour l'instruction et les travaux agricoles légers.",
    specs: { wingspan: '10,7 m', length: '7,3 m', height: '2,1 m', payload: '250 kg' }
  },
  {
    id: 'skyrocket',
    name: 'AviaBellanca Skyrocket',
    category: 'Private Light Aircraft',
    role: 'Avion léger haute performance',
    manufacturer: 'Bellanca',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Fuselage massif tout composite",
      "Train tricycle rétractable"
    ],
    description: "Version moderne et rapide des célèbres Bellanca, utilisant des matériaux composites pour plus de légèreté.",
    specs: { wingspan: '10,7 m', length: '8,7 m', height: '2,8 m', payload: '500 kg' }
  },
  {
    id: 'viking',
    name: 'AviaBellanca Viking',
    category: 'Private Light Aircraft',
    role: 'Avion de tourisme rapide',
    manufacturer: 'Bellanca',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse en bois",
      "Train tricycle rétractable",
      "Empennage vertical de forme ovale"
    ],
    description: "Connu pour sa structure d'aile en bois unique offrant une surface extrêmement lisse et des performances élevées.",
    specs: { wingspan: '10,4 m', length: '8 m', height: '2,2 m', payload: '450 kg' }
  },
  {
    id: 'c152-aerobat',
    name: 'Cessna 152 Aerobat',
    category: 'Private Light Aircraft',
    role: 'Entraînement / Voltige',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Train tricycle fixe",
      "Deux places"
    ],
    description: "Version renforcée du Cessna 150/152 pour permettre des manoeuvres acrobatiques de base.",
    specs: { wingspan: '10,1 m', length: '7,3 m', height: '2,6 m', payload: '200 kg' }
  },
  {
    id: 'c172-skyhawk',
    name: 'Cessna 172 Skyhawk',
    category: 'Private Light Aircraft',
    role: 'Tourisme / Entraînement',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Train tricycle fixe",
      "Quatre places"
    ],
    description: "L'avion le plus produit au monde. C'est la référence absolue pour l'apprentissage du pilotage.",
    specs: { wingspan: '11 m', length: '8,2 m', height: '2,7 m', payload: '400 kg' }
  },
  {
    id: 'c180-skywagon',
    name: 'Cessna 180 Skywagon',
    category: 'Private Light Aircraft',
    role: 'Utilitaire de brousse léger',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Train classique (roulette de queue)",
      "Aspect plus robuste que le 172"
    ],
    description: "Préféré par les pilotes de brousse pour sa capacité à opérer sur des pistes non préparées.",
    specs: { wingspan: '10,9 m', length: '7,8 m', height: '2,3 m', payload: '500 kg' }
  },
  {
    id: 'c210-centurion',
    name: 'Cessna 210 Centurion',
    category: 'Private Light Aircraft',
    role: 'Tourisme rapide',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute sans haubans (cantilever)",
      "Train tricycle rétractable",
      "Six places"
    ],
    description: "Le haut de gamme des monomoteurs Cessna, offrant vitesse et confort pour les voyages d'affaires ou familiaux.",
    specs: { wingspan: '11,2 m', length: '8,6 m', height: '2,9 m', payload: '700 kg' }
  },
  {
    id: 'c303-crusader',
    name: 'Cessna T303 Crusader',
    category: 'Private Light Aircraft',
    role: 'Bimoteur léger',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur à pistons",
      "Empennage horizontal monté haut sur la dérive"
    ],
    description: "Bimoteur léger conçu pour être simple à piloter et économique à l'usage.",
    specs: { wingspan: '11,9 m', length: '9,3 m', height: '4 m', payload: '800 kg' }
  },
  {
    id: 'c310',
    name: 'Cessna 310',
    category: 'Private Light Aircraft',
    role: 'Bimoteur de tourisme / affaires',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Réservoirs en bout d'aile (tuna tanks) caractéristiques",
      "Dérive très inclinée vers l'arrière"
    ],
    description: "Bimoteur rapide et élégant, devenu un classique de l'aviation générale grâce à son allure distinctive.",
    specs: { wingspan: '11,2 m', length: '9,7 m', height: '3,2 m', payload: '900 kg' }
  },
  
  {
    id: 'c340a',
    name: 'Cessna 340A',
    category: 'Private Light Aircraft',
    role: 'Bimoteur léger pressurisé',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Réservoirs en bout d'aile (tip tanks)",
      "Six hublots de cabine circulaires"
    ],
    description: "Version pressurisée du Cessna 310, offrant un confort accru pour les voyages d'affaires à haute altitude.",
    specs: { wingspan: '11,6 m', length: '10,5 m', height: '3,8 m', payload: '900 kg' }
  },
  {
    id: 'c402-421',
    name: 'Cessna 401/402/421',
    category: 'Private Light Aircraft',
    role: 'Transport léger / taxi aérien',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Nez allongé sur les modèles 402",
      "Fuselage large pour 6 à 10 passagers"
    ],
    description: "Le Cessna 421 Golden Eagle est le sommet de la gamme des bimoteurs à pistons de Cessna, avec une cabine pressurisée très spacieuse.",
    specs: { wingspan: '12,5 m', length: '11 m', height: '3,5 m', payload: '1 200 kg' }
  },
  {
    id: 'c-cardinal-rg',
    name: 'Cessna Cardinal RGII',
    category: 'Private Light Aircraft',
    role: 'Tourisme rapide',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute sans haubans",
      "Train tricycle rétractable",
      "Pare-brise très incliné"
    ],
    description: "Conçu pour être le successeur moderne du C172, le Cardinal se distingue par son élégance et l'absence de haubans d'aile.",
    specs: { wingspan: '10,9 m', length: '8,3 m', height: '2,6 m', payload: '450 kg' }
  },
  {
    id: 'c-stationair-6',
    name: 'Cessna Stationair 6',
    category: 'Private Light Aircraft',
    role: 'Utilitaire léger / Transport',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Fuselage large à six places",
      "Double porte cargo à l'arrière droit"
    ],
    description: "Le 'SUV' des airs. Capable de transporter de lourdes charges et six personnes vers des pistes courtes.",
    specs: { wingspan: '10,9 m', length: '8,6 m', height: '2,8 m', payload: '600 kg' }
  },
  {
    id: 'c-titan',
    name: 'Cessna Titan',
    category: 'Private Light Aircraft',
    role: 'Transport de fret / passagers',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Fuselage très long et rectangulaire",
      "Queue avec un plan fixe horizontal à dièdre positif"
    ],
    description: "Le plus grand des bimoteurs à pistons de Cessna, optimisé pour le transport de fret léger et les services de navette.",
    specs: { wingspan: '14,2 m', length: '12,1 m', height: '4 m', payload: '1 500 kg' }
  },
  {
    id: 'cirrus-sr20',
    name: 'Cirrus Design SR-20',
    category: 'Private Light Aircraft',
    role: 'Tourisme moderne',
    manufacturer: 'Cirrus Design',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Construction tout composite",
      "Aile basse fluide",
      "Train tricycle fixe caréné"
    ],
    description: "Avion révolutionnaire équipé d'un parachute de secours pour la cellule entière et d'une avionique de type 'glass cockpit'.",
    specs: { wingspan: '10,7 m', length: '7,9 m', height: '2,7 m', payload: '400 kg' }
  },
  {
    id: 'eagle-xts',
    name: 'EAM Eagle X-TS',
    category: 'Private Light Aircraft',
    role: 'Tourisme léger / Entraînement',
    manufacturer: 'Eagle Aircraft',
    country: 'Australie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Configuration canard",
      "Trois surfaces portantes",
      "Winglets sur les ailes principales"
    ],
    description: "Design australien inhabituel offrant une grande sécurité contre le décrochage.",
    specs: { wingspan: '7,1 m', length: '6,5 m', height: '2,3 m', payload: '200 kg' }
  },
  {
    id: 'namcu',
    name: 'ENAER Namcu',
    category: 'Private Light Aircraft',
    role: 'Entraînement / Tourisme',
    manufacturer: 'ENAER',
    country: 'Chili',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Construction composite",
      "Verrière bulle"
    ],
    description: "Petit avion léger chilien destiné à l'entraînement de base et au marché des loisirs.",
    specs: { wingspan: '8,7 m', length: '7,1 m', height: '2,4 m', payload: '250 kg' }
  },
  {
    id: 'extra-300',
    name: 'Extra 300',
    category: 'Private Light Aircraft',
    role: 'Voltige aérienne',
    manufacturer: 'Extra Flugzeugbau',
    country: 'Allemagne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile médiane droite",
      "Train classique fixe",
      "Fuselage très profilé"
    ],
    description: "L'un des avions de voltige de compétition les plus performants au monde, capable de supporter des facteurs de charge extrêmes.",
    specs: { wingspan: '8 m', length: '7,1 m', height: '2,6 m', payload: '200 kg' }
  },
  {
    id: 'rf6-sportsman',
    name: 'Fournier RF6-180 Sportsman',
    category: 'Private Light Aircraft',
    role: 'Tourisme / Voltige',
    manufacturer: 'Fournier / Sportavia',
    country: 'France / Allemagne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Train tricycle fixe",
      "Dérive arrondie"
    ],
    description: "Avion quadriplace robuste, apprécié pour ses qualités de vol et sa capacité à effectuer de la voltige simple.",
    specs: { wingspan: '10,5 m', length: '7,1 m', height: '2,5 m', payload: '400 kg' }
  },
  {
    id: 'aero-subaru',
    name: 'Fuji FA-200 Aero Subaru',
    category: 'Private Light Aircraft',
    role: 'Tourisme / Voltige',
    manufacturer: 'Fuji',
    country: 'Japon',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Verrière coulissante",
      "Dérive droite et haute"
    ],
    description: "Premier avion léger japonais à succès international, connu pour sa robustesse et sa certification voltige.",
    specs: { wingspan: '9,4 m', length: '8,2 m', height: '2,6 m', payload: '350 kg' }
  },
  {
    id: 'as202-bravo',
    name: 'FFA AS202 Bravo',
    category: 'Private Light Aircraft',
    role: 'Entraînement / Voltige',
    manufacturer: 'FFA',
    country: 'Suisse',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Large verrière offrant une visibilité totale",
      "Train tricycle fixe robuste"
    ],
    description: "Utilisé par plusieurs armées de l'air pour la sélection initiale des pilotes.",
    specs: { wingspan: '9,7 m', length: '7,5 m', height: '2,8 m', payload: '300 kg' }
  },
  {
    id: 'optica',
    name: 'FLS Optica',
    category: 'Private Light Aircraft',
    role: 'Observation',
    manufacturer: 'FLS Aerospace',
    country: 'Royaume-Uni',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Cockpit entièrement vitré en forme de bulle à l'avant",
      "Moteur intégré dans une soufflante carénée derrière la cabine",
      "Double poutre de queue"
    ],
    description: "Conçu pour offrir une visibilité comparable à celle d'un hélicoptère pour un coût d'exploitation bien inférieur.",
    specs: { wingspan: '12 m', length: '8,1 m', height: '2,3 m', payload: '250 kg' }
  },
  {
    id: 'pinguino',
    name: 'General Avia Pinguino',
    category: 'Private Light Aircraft',
    role: 'Tourisme / Voltige',
    manufacturer: 'General Avia',
    country: 'Italie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Train tricycle fixe ou escamotable",
      "Lignes italiennes élégantes"
    ],
    description: "Avion biplace rapide et agile, typique du design de Stelio Frati.",
    specs: { wingspan: '9,2 m', length: '7,1 m', height: '2,3 m', payload: '200 kg' }
  },
  {
    id: 'grob-g115',
    name: 'Grob G115',
    category: 'Private Light Aircraft',
    role: 'Entraînement de base',
    manufacturer: 'Grob',
    country: 'Allemagne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Construction tout composite",
      "Aile basse",
      "Nez très court"
    ],
    description: "Très utilisé par les écoles de pilotage et les clubs pour sa facilité de pilotage.",
    specs: { wingspan: '10 m', length: '7,3 m', height: '2,4 m', payload: '250 kg' }
  },
  {
    id: 'grob-acro',
    name: 'Grob G115T Acro',
    category: 'Private Light Aircraft',
    role: 'Entraînement militaire / Voltige',
    manufacturer: 'Grob',
    country: 'Allemagne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Moteur plus puissant (échappement plus large)",
      "Dérive plus grande",
      "Souvent peint en couleurs militaires"
    ],
    description: "Version haute performance du G115 adoptée par la Royal Air Force pour l'entraînement initial.",
    specs: { wingspan: '10 m', length: '7,5 m', height: '2,4 m', payload: '250 kg' }
  },
  {
    id: 'grob-gf200',
    name: 'Grob GF200',
    category: 'Private Light Aircraft',
    role: 'Tourisme d\'affaires rapide',
    manufacturer: 'Grob',
    country: 'Allemagne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Moteur à l'arrière avec hélice propulsive",
      "Entrées d'air sur le dessus du fuselage",
      "Empennage en T"
    ],
    description: "Avion d'affaires composite utilisant une hélice propulsive pour un meilleur aérodynamisme et un silence cabine.",
    specs: { wingspan: '11 m', length: '8,7 m', height: '3,4 m', payload: '500 kg' }
  },
  {
    id: 'aa1c-lynx',
    name: 'Gulfstream AA-1C',
    category: 'Private Light Aircraft',
    role: 'Tourisme léger / Entraînement',
    manufacturer: 'Gulfstream American',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse très courte",
      "Fuselage trapu",
      "Verrière coulissante"
    ],
    description: "Petit biplace nerveux et rapide, connu pour sa construction à base de métaux collés.",
    specs: { wingspan: '7,5 m', length: '5,9 m', height: '2,1 m', payload: '180 kg' }
  },
  {
    id: 'cheetah-tiger',
    name: 'Gulfstream AA-5A Cheetah',
    category: 'Private Light Aircraft',
    role: 'Tourisme',
    manufacturer: 'Gulfstream American',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Dérive carrée",
      "Pas de haubans"
    ],
    description: "Évolution du concept AA-1 en quadriplace. Simple, rapide et économique.",
    specs: { wingspan: '9,6 m', length: '6,7 m', height: '2,4 m', payload: '380 kg' }
  },
  {
    id: 'ga7-cougar',
    name: 'Gulfstream GA-7 Cougar',
    category: 'Private Light Aircraft',
    role: 'Bimoteur léger',
    manufacturer: 'Gulfstream American',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Empennage en T",
      "Moteurs de petite taille"
    ],
    description: "Bimoteur léger conçu pour l'entraînement et le voyage privé économique.",
    specs: { wingspan: '11,2 m', length: '8,7 m', height: '3,1 m', payload: '600 kg' }
  },

  {
    id: 'lake-renegade',
    name: 'Lake La-250 Renegade',
    category: 'Private Light Aircraft',
    role: 'Amphibie léger',
    manufacturer: 'Lake Aircraft',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Moteur monté sur un pylône au-dessus de l'aile",
      "Hélice propulsive",
      "Fuselage en forme de coque"
    ],
    description: "L'un des seuls amphibiens légers de série encore produits, capable d'opérer depuis des lacs ou des pistes terrestres.",
    specs: { wingspan: '11,6 m', length: '8,6 m', height: '3 m', payload: '450 kg' }
  },
  {
    id: 'falco',
    name: 'Laverda Falco F8',
    category: 'Private Light Aircraft',
    role: 'Voltige / Tourisme rapide',
    manufacturer: 'Laverda',
    country: 'Italie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Train tricycle escamotable",
      "Lignes de chasseur en réduction"
    ],
    description: "Considéré comme l'un des plus beaux avions légers jamais conçus. Très rapide et certifié pour la voltige complète.",
    specs: { wingspan: '8 m', length: '6,6 m', height: '2,3 m', payload: '200 kg' }
  },
  {
    id: 'l200-morava',
    name: 'Let L-200 Morava',
    category: 'Private Light Aircraft',
    role: 'Transport léger / Taxi',
    manufacturer: 'Let',
    country: 'République tchèque',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Double dérive",
      "Moteurs très profilés"
    ],
    description: "Bimoteur tchèque élégant et robuste, très utilisé dans les pays de l'Est pour le transport de personnels.",
    specs: { wingspan: '12,3 m', length: '8,6 m', height: '2,2 m', payload: '650 kg' }
  },
  {
    id: 'mooney-ranger',
    name: 'Mooney Ranger',
    category: 'Private Light Aircraft',
    role: 'Tourisme rapide',
    manufacturer: 'Mooney',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Dérive verticale droite avec bord d'attaque incliné vers l'avant",
      "Fuselage très bas"
    ],
    description: "Célèbre pour sa dérive inversée unique et sa grande efficacité aérodynamique.",
    specs: { wingspan: '10,7 m', length: '7,1 m', height: '2,5 m', payload: '400 kg' }
  },
  {
    id: 'cap10b',
    name: 'Mudry CAP 10B',
    category: 'Private Light Aircraft',
    role: 'Voltige aérienne',
    manufacturer: 'Mudry',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse en bois (plan elliptique)",
      "Train classique fixe caréné",
      "Cockpit avec sièges côte à côte"
    ],
    description: "La référence pour l'école de voltige. Utilisé par l'Armée de l'Air et la Marine française pour la formation initiale.",
    specs: { wingspan: '8,1 m', length: '7,2 m', height: '2,5 m', payload: '200 kg' }
  },
  {
    id: 'super-cub',
    name: 'Piper PA-18 Super Cub',
    category: 'Private Light Aircraft',
    role: 'Utilitaire de brousse / Entraînement',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Train classique (roulette de queue)",
      "Configuration biplace en tandem"
    ],
    description: "Légende du vol de brousse. Capable de décoller et d'atterrir sur des distances extrêmement courtes.",
    specs: { wingspan: '10,7 m', length: '6,9 m', height: '2 m', payload: '370 kg' }
  },
  {
    id: 'aztec',
    name: 'Piper PA-23 Aztec',
    category: 'Private Light Aircraft',
    role: 'Bimoteur de transport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Nez très large et arrondi",
      "Dérive imposante"
    ],
    description: "Bimoteur spacieux et très stable, réputé pour sa capacité de chargement et sa robustesse.",
    specs: { wingspan: '11,3 m', length: '9,5 m', height: '3,1 m', payload: '800 kg' }
  },
  {
    id: 'cherokee',
    name: 'Piper PA-28 Cherokee',
    category: 'Private Light Aircraft',
    role: 'Entraînement / Tourisme',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse rectangulaire",
      "Train tricycle fixe",
      "Stabilisateur horizontal monobloc (stabilator)"
    ],
    description: "Concurrent direct du Cessna 172. L'un des avions les plus populaires dans les écoles de pilotage mondiales.",
    specs: { wingspan: '10,7 m', length: '7,1 m', height: '2,2 m', payload: '400 kg' }
  },
  {
    id: 'twin-comanche',
    name: 'Piper PA-30 Twin Comanche',
    category: 'Private Light Aircraft',
    role: 'Bimoteur de tourisme rapide',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Moteurs très fins et profilés",
      "Lignes très élégantes et basses sur pattes"
    ],
    description: "Réputé pour sa grande vitesse et sa faible consommation de carburant pour un bimoteur.",
    specs: { wingspan: '11 m', length: '7,7 m', height: '2,5 m', payload: '550 kg' }
  },
  {
    id: 'navajo',
    name: 'Piper PA-31 Navajo',
    category: 'Private Light Aircraft',
    role: 'Transport léger / Affaires',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Large fuselage à 6-8 places",
      "Hublots de cabine rectangulaires"
    ],
    description: "Pilier du transport régional et du taxi aérien, connu pour sa fiabilité et son espace cabine.",
    specs: { wingspan: '12,4 m', length: '9,9 m', height: '3,9 m', payload: '1 100 kg' }
  },
  {
    id: 'cheyenne-ii',
    name: 'Piper PA-31T Cheyenne II',
    category: 'Private Light Aircraft',
    role: 'Turbopropulseur d\'affaires',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Basé sur le Navajo",
      "Echappements de turbines proéminents",
      "Réservoirs en bout d'aile"
    ],
    description: "Version turbopropulsée et pressurisée du Navajo, offrant des performances de croisière bien supérieures.",
    specs: { wingspan: '13 m', length: '10,6 m', height: '3,9 m', payload: '1 000 kg' }
  },
  {
    id: 'saratoga',
    name: 'Piper PA-32 Saratoga',
    category: 'Private Light Aircraft',
    role: 'Tourisme / Fret léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Fuselage très long (six places)",
      "Nez allongé"
    ],
    description: "Version monomoteur lourde, idéale pour transporter une famille ou du fret sur de longues distances.",
    specs: { wingspan: '11 m', length: '8,5 m', height: '2,6 m', payload: '600 kg' }
  },
  {
    id: 'seneca',
    name: 'Piper PA-34 Seneca',
    category: 'Private Light Aircraft',
    role: 'Bimoteur léger / Entraînement',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Moteurs montés très près du fuselage",
      "Hélices tournant en sens opposé (contrarotatives)"
    ],
    description: "Très populaire pour l'entraînement aux bimoteurs grâce à l'absence de moteur critique (hélices contrarotatives).",
    specs: { wingspan: '11,8 m', length: '8,7 m', height: '3 m', payload: '750 kg' }
  },
  {
    id: 'cheyenne-iii',
    name: 'Piper PA-42 Cheyenne III',
    category: 'Private Light Aircraft',
    role: 'Transport d\'affaires',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage allongé",
      "Empennage en T",
      "Nez très pointu"
    ],
    description: "Le plus grand des turbopropulseurs Piper, conçu pour concurrencer le Beech King Air.",
    specs: { wingspan: '14,5 m', length: '13,2 m', height: '4,5 m', payload: '1 300 kg' }
  },
  {
    id: 'seminole',
    name: 'Piper PA-44 Seminole',
    category: 'Private Light Aircraft',
    role: 'Bimoteur d\'entraînement',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Basé sur le Cherokee (PA-28)",
      "Empennage en T",
      "Bimoteur compact"
    ],
    description: "L'avion de référence pour la formation IFR et multimoteur dans les écoles de pilotage professionnelles.",
    specs: { wingspan: '11,8 m', length: '8,4 m', height: '2,6 m', payload: '500 kg' }
  },
  {
    id: 'malibu',
    name: 'Piper PA-46 Malibu Mirage',
    category: 'Private Light Aircraft',
    role: 'Tourisme haute performance pressurisé',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse très fine et de grande envergure",
      "Fuselage profilé comme un jet",
      "Nez très long"
    ],
    description: "Monomoteur de voyage ultime, capable de voler au-dessus de la météo grâce à sa cabine pressurisée.",
    specs: { wingspan: '13,1 m', length: '8,6 m', height: '3,4 m', payload: '500 kg' }
  },
  {
    id: 'arrow',
    name: 'Piper PA-28 Arrow',
    category: 'Private Light Aircraft',
    role: 'Entraînement avancé / Tourisme',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Version à train rentrant du Cherokee",
      "Hélice à pas variable",
      "Empennage en T (sur certains modèles)"
    ],
    description: "Utilisé pour la formation des pilotes commerciaux (CPL) pour apprendre la gestion du train et de l'hélice.",
    specs: { wingspan: '10,8 m', length: '7,5 m', height: '2,4 m', payload: '420 kg' }
  },
  {
    id: 'wilga',
    name: 'PZL-Warszawa PZL-104 Wilga',
    category: 'Private Light Aircraft',
    role: 'Utilitaire STOL / Remorquage',
    manufacturer: 'PZL',
    country: 'Pologne',
    engineType: 'Radial',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute haubanée",
      "Train classique fixe très haut et articulé",
      "Verrière très large offrant une visibilité vers le bas"
    ],
    description: "Avion polonais iconique, célèbre pour ses capacités STOL incroyables et son moteur radial.",
    specs: { wingspan: '11,1 m', length: '8,1 m', height: '3 m', payload: '500 kg' }
  },
  {
    id: 'baron',
    name: 'Raytheon (Beechcraft) B58 Baron',
    category: 'Private Light Aircraft',
    role: 'Bimoteur de tourisme rapide',
    manufacturer: 'Raytheon (Beechcraft)',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Double dérive dorsale (fin)",
      "Construction très soignée"
    ],
    description: "Le 'Mercedes' des bimoteurs légers. Très rapide, puissant et doté d'une finition haut de gamme.",
    specs: { wingspan: '11,5 m', length: '9,1 m', height: '2,9 m', payload: '700 kg' }
  }
,
  {
    id: 'duchess',
    name: 'Raytheon (Beechcraft) B76 Duchess',
    category: 'Private Light Aircraft',
    role: 'Bimoteur d\'entraînement léger',
    manufacturer: 'Raytheon (Beechcraft)',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse",
      "Empennage en T",
      "Hélices contrarotatives"
    ],
    description: "Conçu spécifiquement pour le marché de l'entraînement multimoteur, offrant une grande stabilité et une visibilité panoramique.",
    specs: { wingspan: '11,6 m', length: '8,8 m', height: '2,9 m', payload: '600 kg' }
  },
  {
    id: 'bonanza-f33',
    name: 'Raytheon (Beechcraft) Model F33A Bonanza',
    category: 'Private Light Aircraft',
    role: 'Tourisme haute performance',
    manufacturer: 'Raytheon (Beechcraft)',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Empennage conventionnel (droit)",
      "Train tricycle escamotable"
    ],
    description: "La version à queue conventionnelle du célèbre Bonanza, réputée pour sa vitesse et sa qualité de fabrication exceptionnelle.",
    specs: { wingspan: '10,2 m', length: '8,2 m', height: '2,3 m', payload: '500 kg' }
  },
  {
    id: 'bonanza-v35',
    name: 'Raytheon (Beechcraft) V35B Bonanza',
    category: 'Private Light Aircraft',
    role: 'Tourisme haute performance',
    manufacturer: 'Raytheon (Beechcraft)',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Empennage papillon (en V) caractéristique",
      "Design élégant et profilé",
      "Train tricycle escamotable"
    ],
    description: "L'avion de tourisme le plus reconnaissable au monde grâce à son empennage en V, symbole de prestige dans l'aviation privée.",
    specs: { wingspan: '10,2 m', length: '8 m', height: '2,3 m', payload: '500 kg' }
  },
  {
    id: 'sierra200',
    name: 'Raytheon (Beechcraft) Sierra 200',
    category: 'Private Light Aircraft',
    role: 'Tourisme / Entraînement',
    manufacturer: 'Raytheon (Beechcraft)',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Train tricycle escamotable",
      "Fuselage plus large que le Bonanza"
    ],
    description: "Membre de la famille 'Aero Center', conçu pour offrir une alternative plus abordable au Bonanza avec un train rentrant.",
    specs: { wingspan: '10 m', length: '7,9 m', height: '2,5 m', payload: '400 kg' }
  },
  {
    id: 'skipper',
    name: 'Raytheon (Beechcraft) Skipper',
    category: 'Private Light Aircraft',
    role: 'Entraînement de base',
    manufacturer: 'Raytheon (Beechcraft)',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Empennage en T",
      "Cockpit biplace avec verrière bombée"
    ],
    description: "Conçu pour concurrencer le Cessna 150/152 dans les écoles de pilotage, il se distingue par son empennage en T.",
    specs: { wingspan: '9,1 m', length: '7,3 m', height: '2,4 m', payload: '200 kg' }
  },
  {
    id: 'robin-atl',
    name: 'Robin ATL Club',
    category: 'Private Light Aircraft',
    role: 'Entraînement léger / Loisirs',
    manufacturer: 'Avions Robin',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Empennage papillon (en V)",
      "Cabine très large et vitrée"
    ],
    description: "Avion de conception française optimisé pour l'économie de carburant et la visibilité des élèves-pilotes.",
    specs: { wingspan: '10,2 m', length: '6,7 m', height: '2 m', payload: '200 kg' }
  },
  {
    id: 'robin-dr400',
    name: 'Robin DR400',
    category: 'Private Light Aircraft',
    role: 'Tourisme / Remorquage',
    manufacturer: 'Avions Robin',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile 'coudée' caractéristique (dièdre prononcé en bout d'aile)",
      "Structure en bois et toile",
      "Verrière coulissante vers l'avant"
    ],
    description: "Le fer de lance de l'aviation légère française. Ses ailes coudées lui offrent une stabilité et une portance exceptionnelles.",
    specs: { wingspan: '8,7 m', length: '7 m', height: '2,2 m', payload: '400 kg' }
  },
  {
    id: 'rockwell-commander',
    name: 'Rockwell Commander 114',
    category: 'Private Light Aircraft',
    role: 'Tourisme de luxe',
    manufacturer: 'Rockwell',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Empennage en croix (mid-tail)",
      "Fuselage large et haut sur pattes",
      "Lignes très robustes"
    ],
    description: "Réputé pour être l'un des monomoteurs les plus spacieux et confortables, souvent comparé à une voiture de luxe.",
    specs: { wingspan: '10,8 m', length: '7,6 m', height: '2,6 m', payload: '500 kg' }
  },
  {
    id: 'tampico',
    name: 'Socata TB9 Tampico',
    category: 'Private Light Aircraft',
    role: 'Entraînement de base',
    manufacturer: 'Socata',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse rectangulaire",
      "Train tricycle fixe",
      "Fuselage aux formes carrées"
    ],
    description: "Membre de la famille 'Caraïbes' de Socata, conçu pour être un avion d'entraînement simple et robuste.",
    specs: { wingspan: '9,8 m', length: '7,7 m', height: '2,8 m', payload: '400 kg' }
  },
  {
    id: 'rallye',
    name: 'Socata Rallye',
    category: 'Private Light Aircraft',
    role: 'STOL / Remorquage',
    manufacturer: 'Socata',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse avec becs de bord d'attaque automatiques",
      "Verrière panoramique",
      "Train tricycle très robuste et amorti"
    ],
    description: "Célèbre pour ses capacités de décollage court et sa sécurité. C'est l'avion de remorquage de planeurs par excellence.",
    specs: { wingspan: '9,7 m', length: '7,2 m', height: '2,8 m', payload: '400 kg' }
  },
  {
    id: 'su26',
    name: 'Sukhoi Su-26',
    category: 'Private Light Aircraft',
    role: 'Voltige de compétition',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Radial',
    enginesCount: 1,
    recognitionTips: [
      "Moteur radial massif",
      "Train classique fixe en titane",
      "Verrière bulle positionnée très en arrière"
    ],
    description: "Conçu pour supporter +12/-10 G, il a dominé les championnats du monde de voltige pendant des années.",
    specs: { wingspan: '7,8 m', length: '6,8 m', height: '2,8 m', payload: '200 kg' }
  },
  {
    id: 'hansa3',
    name: 'TAAL Hansa 3',
    category: 'Private Light Aircraft',
    role: 'Entraînement / Tourisme',
    manufacturer: 'TAAL',
    country: 'Inde',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse tout composite",
      "Cockpit biplace côte à côte",
      "Dérive arrondie"
    ],
    description: "Premier avion civil tout composite conçu et construit en Inde pour les aéroclubs.",
    specs: { wingspan: '10,4 m', length: '7,6 m', height: '2,7 m', payload: '250 kg' }
  },
  {
    id: 'zlin-z50',
    name: 'Zlin Z50L',
    category: 'Private Light Aircraft',
    role: 'Voltige aérienne',
    manufacturer: 'Zlin',
    country: 'République tchèque',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse droite",
      "Train classique fixe caréné",
      "Design très fin et nerveux"
    ],
    description: "Un classique de la voltige mondiale, extrêmement agile et précis dans ses manoeuvres.",
    specs: { wingspan: '8,6 m', length: '6,6 m', height: '2 m', payload: '150 kg' }
  },
  {
    id: 'zlin-z142',
    name: 'Zlin Z142',
    category: 'Private Light Aircraft',
    role: 'Entraînement / Voltige',
    manufacturer: 'Zlin',
    country: 'République tchèque',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse",
      "Verrière coulissante vers l'avant",
      "Moteur à cylindres inversés (nez plat et haut)"
    ],
    description: "Avion d'entraînement robuste capable d'effectuer de la voltige, très commun en Europe de l'Est.",
    specs: { wingspan: '9,1 m', length: '7,3 m', height: '2,7 m', payload: '300 kg' }
  },
  {
    id: 'a109',
    name: 'Agusta A 109',
    category: 'Helicopters',
    role: 'Transport civil / militaire / évacuation',
    manufacturer: 'Agusta',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage très profilé et aérodynamique",
      "Train d'atterrissage tricycle escamotable",
      "Rotor principal à quatre pales"
    ],
    description: "L'un des hélicoptères les plus rapides de sa catégorie. Utilisé mondialement pour le transport VIP et les missions de police.",
    specs: { wingspan: '11 m (rotor)', length: '13 m', height: '3,5 m', payload: '1 200 kg' }
  },
  {
    id: 'a129',
    name: 'Agusta A 129 Mangusta',
    category: 'Helicopters',
    role: 'Hélicoptère d\'attaque',
    manufacturer: 'Agusta',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Sièges en tandem (pilote derrière, tireur devant)",
      "Fuselage étroit",
      "Ailettes latérales pour l'armement"
    ],
    description: "Premier hélicoptère d'attaque conçu intégralement en Europe de l'Ouest, optimisé pour la lutte antichar.",
    specs: { wingspan: '11,9 m (rotor)', length: '12,2 m', height: '3,3 m', payload: 'Charge militaire' }
  },
  {
    id: 'ab212',
    name: 'Agusta-Bell AB 212',
    category: 'Helicopters',
    role: 'Utilitaire moyen',
    manufacturer: 'Agusta-Bell',
    country: 'Italie / USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal bi-pale large",
      "Deux moteurs (Twin Huey)",
      "Nez arrondi"
    ],
    description: "Version bimoteur du célèbre Huey, construite sous licence en Italie par Agusta pour des rôles civils et militaires.",
    specs: { wingspan: '14,6 m (rotor)', length: '17,4 m', height: '4,5 m', payload: '2 200 kg' }
  },
  {
    id: 'a119-koala',
    name: 'Agusta A 119 Koala',
    category: 'Helicopters',
    role: 'Transport utilitaire léger',
    manufacturer: 'Agusta',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Ressemble à un A 109 avec des patins",
      "Monoturbine",
      "Fuselage large pour sa catégorie"
    ],
    description: "Version monoturbine de l'A 109, conçue pour offrir un grand volume intérieur à un coût réduit.",
    specs: { wingspan: '10,8 m (rotor)', length: '11,1 m', height: '3,4 m', payload: '1 000 kg' }
  },
  
  {
    id: 'bell47',
    name: 'Bell Model 47',
    category: 'Helicopters',
    role: 'Utilitaire léger / Entraînement',
    manufacturer: 'Bell',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Cockpit en forme de 'bulle de savon'",
      "Poutre de queue en treillis tubulaire apparent",
      "Rotor bi-pale avec barre stabilisatrice"
    ],
    description: "L'hélicoptère qui a rendu célèbre l'évacuation médicale pendant la guerre de Corée (M.A.S.H).",
    specs: { wingspan: '11,3 m (rotor)', length: '9,6 m', height: '2,8 m', payload: '450 kg' }
  },
  {
    id: 'jet-ranger',
    name: 'Bell Model 206 Jet Ranger',
    category: 'Helicopters',
    role: 'Utilitaire léger',
    manufacturer: 'Bell', country: 'USA',
    engineType: 'Turbine', enginesCount: 1,
    recognitionTips: [
      "Lignes très fluides",
      "Rotor principal bi-pale",
      "Fuselage étroit"
    ],
    description: "L'hélicoptère à turbine le plus populaire au monde, utilisé pour tout : presse, police, transport privé.",
    specs: { wingspan: '10,1 m (rotor)', length: '11,8 m', height: '2,9 m', payload: '700 kg' }
  },
  {
    id: 'long-ranger',
    name: 'Bell Model 206L-4 LongRanger',
    category: 'Helicopters',
    role: 'Transport utilitaire léger',
    manufacturer: 'Bell', country: 'USA',
    engineType: 'Turbine', enginesCount: 1,
    recognitionTips: [
      "Fuselage allongé (une fenêtre de plus par rapport au Jet Ranger)",
      "Rotor principal à quatre pales sur les versions récentes",
      "Patins hauts"
    ],
    description: "Version rallongée du Jet Ranger offrant deux places supplémentaires face à face en cabine.",
    specs: { wingspan: '11,3 m (rotor)', length: '12,9 m', height: '3,1 m', payload: '1 000 kg' }
  },
  {
    id: 'bell430',
    name: 'Bell Model 430',
    category: 'Helicopters',
    role: 'Transport d\'affaires',
    manufacturer: 'Bell', country: 'USA',
    engineType: 'Turbine', enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales sans articulations",
      "Nez allongé et pointu",
      "Disponible avec train escamotable ou patins"
    ],
    description: "Évolution luxueuse du Bell 230, avec une cabine agrandie et des performances accrues.",
    specs: { wingspan: '12,8 m (rotor)', length: '15,3 m', height: '3,7 m', payload: '1 500 kg' }
  },
  {
    id: 'huey',
    name: 'Bell UH-1 Iroquois (Huey)',
    category: 'Helicopters',
    role: 'Utilitaire militaire',
    manufacturer: 'Bell', country: 'USA',
    engineType: 'Turbine', enginesCount: 1,
    recognitionTips: [
      "Rotor bi-pale très large et sonore",
      "Grandes portes coulissantes",
      "Silhouette iconique de la guerre du Vietnam"
    ],
    description: "L'hélicoptère militaire le plus célèbre de l'histoire, symbole incontesté du conflit vietnamien.",
    specs: { wingspan: '14,6 m (rotor)', length: '17,4 m', height: '4,4 m', payload: '1 800 kg' }
  },
  {
    id: 'twin-huey',
    name: 'Bell UH-1N Iroquois (Twin Huey)',
    category: 'Helicopters',
    role: 'Utilitaire militaire',
    manufacturer: 'Bell', country: 'USA',
    engineType: 'Turbine', enginesCount: 2,
    recognitionTips: [
      "Deux moteurs (sorties d'échappement jumelées)",
      "Nez plus long que l'UH-1H",
      "Rotor bi-pale"
    ],
    description: "Version bimoteur offrant une sécurité accrue pour les opérations au-dessus de l'eau ou des zones urbaines.",
    specs: { wingspan: '14,6 m (rotor)', length: '17,5 m', height: '4,5 m', payload: '2 000 kg' }
  },
  {
    id: 'kiowa',
    name: 'Bell OH-58D Kiowa Warrior',
    category: 'Helicopters',
    role: 'Reconnaissance armée',
    manufacturer: 'Bell', country: 'USA',
    engineType: 'Turbine', enginesCount: 1,
    recognitionTips: [
      "Viseur monté au-dessus du rotor (MMS)",
      "Rotor principal à quatre pales",
      "Ailettes pour missiles ou roquettes"
    ],
    description: "Hélicoptère de reconnaissance capable de 'voir' au-dessus des collines en ne dépassant que son viseur.",
    specs: { wingspan: '10,7 m (rotor)', length: '12,9 m', height: '3,9 m', payload: 'Charge militaire' }
  },
  {
    id: 'ah1-cobra',
    name: 'Bell AH-1 Cobra',
    category: 'Helicopters',
    role: 'Attaque',
    manufacturer: 'Bell', country: 'USA',
    engineType: 'Turbine', enginesCount: 1,
    recognitionTips: [
      "Fuselage extrêmement étroit (moins d'un mètre)",
      "Sièges en tandem",
      "Canon rotatif sous le nez"
    ],
    description: "Le premier véritable hélicoptère d'attaque au monde, conçu sur la base mécanique du Huey.",
    specs: { wingspan: '14,6 m (rotor)', length: '16,2 m', height: '4,1 m', payload: 'Missiles TOW/Roquettes' }
  },
  {
    id: 'v22-osprey',
    name: 'Bell/Boeing V-22 Osprey',
    category: 'Helicopters',
    role: 'Transport multi-mission à rotors basculants',
    manufacturer: 'Bell / Boeing', country: 'USA',
    engineType: 'Turbine', enginesCount: 2,
    recognitionTips: [
      "Deux énormes rotors basculants aux extrémités des ailes",
      "Aile haute",
      "Double dérive"
    ],
    description: "Appareil hybride décollant comme un hélicoptère et volant comme un avion grâce à ses nacelles moteurs pivotantes.",
    specs: { wingspan: '14 m (ailes)', length: '17,5 m', height: '6,7 m', payload: '9 000 kg' }
  },
  {
    id: 'apache',
    name: 'Boeing AH-64 Apache',
    category: 'Helicopters',
    role: 'Attaque lourd',
    manufacturer: 'Boeing (McDonnell Douglas)', country: 'USA',
    engineType: 'Turbine', enginesCount: 2,
    recognitionTips: [
      "Fuselage anguleux et massif",
      "Train d'atterrissage fixe avec roulette de queue",
      "Radôme radar optionnel (Longbow) au-dessus du rotor"
    ],
    description: "Le chasseur de chars ultime, capable d'opérer de nuit et par tous les temps.",
    specs: { wingspan: '14,6 m (rotor)', length: '17,7 m', height: '4,6 m', payload: 'Missiles Hellfire' }
  },
  {
    id: 'sea-knight',
    name: 'Boeing CH-46 Sea Knight',
    category: 'Helicopters',
    role: 'Transport moyen / Assaut',
    manufacturer: 'Boeing (Vertol)', country: 'USA',
    engineType: 'Turbine', enginesCount: 2,
    recognitionTips: [
      "Rotors en tandem (un devant, un derrière)",
      "Train d'atterrissage tricycle fixe caréné",
      "Rampe de chargement arrière"
    ],
    description: "Hélicoptère d'assaut standard de l'US Marine Corps, utilisé pour le transport de troupes depuis les navires.",
    specs: { wingspan: '15,2 m (rotor)', length: '13,9 m (fuselage)', height: '5,1 m', payload: '3 000 kg' }
  },
  {
    id: 'chinook',
    name: 'Boeing CH-47 Chinook',
    category: 'Helicopters',
    role: 'Transport lourd',
    manufacturer: 'Boeing (Vertol)', country: 'USA',
    engineType: 'Turbine', enginesCount: 2,
    recognitionTips: [
      "Rotors en tandem massifs",
      "Fuselage en forme de banane",
      "Moteurs montés de chaque côté de la structure de queue"
    ],
    description: "Reconnaissable entre tous, il peut soulever des pièces d'artillerie ou des véhicules à l'élingue.",
    specs: { wingspan: '18,3 m (rotor)', length: '30,2 m', height: '5,7 m', payload: '12 700 kg' }
  },
  {
    id: 'md500-defender',
    name: 'Boeing MD-500 Defender',
    category: 'Helicopters',
    role: 'Attaque léger / Reconnaissance',
    manufacturer: 'Boeing (McDonnell Douglas)', country: 'USA',
    engineType: 'Turbine', enginesCount: 1,
    recognitionTips: [
      "Fuselage en forme d'œuf",
      "Empennage en T",
      "Rotor à cinq pales"
    ],
    description: "Version militaire armée du Hughes 500, extrêmement agile et compact.",
    specs: { wingspan: '8,1 m (rotor)', length: '9,4 m', height: '2,6 m', payload: '700 kg' }
  },
  {
    id: 'md500e',
    name: 'Boeing MD-500E',
    category: 'Helicopters',
    role: 'Utilitaire léger / Liaison',
    manufacturer: 'Boeing', country: 'USA',
    engineType: 'Turbine', enginesCount: 1,
    recognitionTips: [
      "Nez pointu (différent du nez rond du modèle D)",
      "Train à patins fins",
      "Très petite taille"
    ],
    description: "Hélicoptère civil rapide et nerveux, très apprécié par les pilotes pour sa maniabilité.",
    specs: { wingspan: '8,1 m (rotor)', length: '9,4 m', height: '2,7 m', payload: '600 kg' }
  },
  {
    id: 'md520-notar',
    name: 'Boeing MD-520 NOTAR',
    category: 'Helicopters',
    role: 'Utilitaire léger',
    manufacturer: 'Boeing', country: 'USA',
    engineType: 'Turbine', enginesCount: 1,
    recognitionTips: [
      "Pas de rotor de queue (NOTAR)",
      "Poutre de queue épaisse et cylindrique",
      "Double dérive verticale"
    ],
    description: "Utilise le système NOTAR (NO TAil Rotor) soufflant de l'air pour contrer le couple, le rendant beaucoup plus silencieux.",
    specs: { wingspan: '8,3 m (rotor)', length: '9,6 m', height: '2,7 m', payload: '600 kg' }
  },
  {
    id: 'explorer',
    name: 'Boeing Explorer',
    category: 'Helicopters',
    role: 'Transport civil / Secours',
    manufacturer: 'Boeing', country: 'USA',
    engineType: 'Turbine', enginesCount: 2,
    recognitionTips: [
      "Système NOTAR",
      "Fuselage moderne en matériaux composites",
      "Large cabine vitrée"
    ],
    description: "Hélicoptère biturbine de nouvelle génération sans rotor de queue, idéal pour les secours en zone urbaine.",
    specs: { wingspan: '10,3 m (rotor)', length: '11,8 m', height: '3,7 m', payload: '1 100 kg' }
  },
  {
    id: 'comanche',
    name: 'Boeing/Sikorsky RAH-66 Comanche',
    category: 'Helicopters',
    role: 'Reconnaissance armée furtive',
    manufacturer: 'Boeing / Sikorsky', country: 'USA',
    engineType: 'Turbine', enginesCount: 2,
    recognitionTips: [
      "Formes facettées (furtivité radar)",
      "Rotor de queue caréné (Fan-tail)",
      "Train d'atterrissage escamotable"
    ],
    description: "Hélicoptère de haute technologie conçu pour être invisible aux radars. Ses armes sont logées dans des soutes internes.",
    specs: { wingspan: '11,9 m (rotor)', length: '14,3 m', height: '3,4 m', payload: 'Soutes internes' }
  },
  {
    id: 'brantly-b2',
    name: 'Brantly B-2',
    category: 'Helicopters',
    role: 'Loisirs / Entraînement',
    manufacturer: 'Brantly', country: 'USA',
    engineType: 'Piston', enginesCount: 1,
    recognitionTips: [
      "Cabine biplace en forme de bulle",
      "Fuselage arrière s'affinant brusquement",
      "Rotor bi-pale avec articulations déportées"
    ],
    description: "Petit hélicoptère économique au design original, principalement destiné aux pilotes privés.",
    specs: { wingspan: '7,2 m (rotor)', length: '8,5 m', height: '2,1 m', payload: '180 kg' }
  },
  {
    id: 'rooivalk',
    name: 'Denel (Atlas) Rooivalk',
    category: 'Helicopters',
    role: 'Attaque lourd',
    manufacturer: 'Denel', country: 'Afrique du Sud',
    engineType: 'Turbine', enginesCount: 2,
    recognitionTips: [
      "Configuration en tandem haute",
      "Train d'atterrissage fixe massif",
      "Utilise la mécanique du Puma"
    ],
    description: "Hélicoptère d'attaque sophistiqué conçu pour les conditions difficiles du bush sud-africain.",
    specs: { wingspan: '15,6 m (rotor)', length: '18,7 m', height: '5,2 m', payload: 'Canons et missiles' }
  },
  {
    id: 'eh101-merlin',
    name: 'EHI EH-101 Merlin',
    category: 'Helicopters',
    role: 'Transport / Anti-sous-marin',
    manufacturer: 'Agusta / Westland', country: 'Italie / UK',
    engineType: 'Turbine', enginesCount: 3,
    recognitionTips: [
      "Trois turbines (une centrale, deux latérales)",
      "Rotor principal à cinq pales avec extrémités courbées",
      "Large fuselage avec rampe arrière"
    ],
    description: "Hélicoptère de grande capacité conçu pour remplacer le Sea King, offrant une puissance et une sécurité accrues.",
    specs: { wingspan: '18,6 m (rotor)', length: '22,8 m', height: '6,6 m', payload: '5 000 kg' }
  },
  {
    id: 'enstrom-f28',
    name: 'Enstrom F28',
    category: 'Helicopters',
    role: 'Loisirs / Entraînement',
    manufacturer: 'Enstrom', country: 'USA',
    engineType: 'Piston', enginesCount: 1,
    recognitionTips: [
      "Fuselage très lisse et arrondi",
      "Poutre de queue sans haubans",
      "Trois pales au rotor principal"
    ],
    description: "Reconnu pour sa sécurité et son élégance, c'est l'un des rares hélicoptères légers à trois pales.",
    specs: { wingspan: '9,8 m (rotor)', length: '8,9 m', height: '2,8 m', payload: '400 kg' }
  }
,

  {
    id: 'puma',
    name: 'Eurocopter (Aerospatiale) SA 330 Puma',
    category: 'Helicopters',
    role: 'Transport tactique moyen',
    manufacturer: 'Eurocopter',
    country: 'France / UK',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage haut et volumineux",
      "Rotor principal à quatre pales",
      "Train d'atterrissage tricycle escamotable (carénages latéraux)"
    ],
    description: "Hélicoptère de transport standard de l'Armée de Terre française et de la RAF. Connu pour sa robustesse et sa fiabilité dans des conditions difficiles.",
    specs: { wingspan: '15 m (rotor)', length: '18,1 m', height: '5,1 m', payload: '2 500 kg' }
  },
  {
    id: 'super-puma',
    name: 'Eurocopter (Aerospatiale) AS 332 Super Puma',
    category: 'Helicopters',
    role: 'Transport lourd / Multi-mission',
    manufacturer: 'Eurocopter',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez plus long et profilé que le Puma",
      "Rotor principal à quatre pales avec extrémités biseautées",
      "Train d'atterrissage entièrement escamotable"
    ],
    description: "Version agrandie et modernisée du Puma. Très utilisé pour le transport offshore (plateformes pétrolières) et les missions de recherche et sauvetage (SAR).",
    specs: { wingspan: '15,6 m (rotor)', length: '18,7 m', height: '4,9 m', payload: '4 000 kg' }
  },
  {
    id: 'ecureuil',
    name: 'Eurocopter AS 350 Ecureuil',
    category: 'Helicopters',
    role: 'Utilitaire léger polyvalent',
    manufacturer: 'Eurocopter',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Design très compact et fluide",
      "Large verrière offrant une excellente visibilité",
      "Rotor principal à trois pales type 'Starflex'"
    ],
    description: "L'un des hélicoptères les plus vendus au monde. Il détient le record du monde de décollage et d'atterrissage au sommet de l'Everest.",
    specs: { wingspan: '10,7 m (rotor)', length: '10,9 m', height: '3,3 m', payload: '1 000 kg' }
  },
  {
    id: 'dauphin',
    name: 'Eurocopter AS 365 Dauphin 2',
    category: 'Helicopters',
    role: 'Transport rapide / Sauvetage',
    manufacturer: 'Eurocopter',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor de queue caréné (Fenestron) intégré dans la dérive",
      "Fuselage très aérodynamique",
      "Train d'atterrissage tricycle escamotable"
    ],
    description: "Célèbre pour sa vitesse élevée et son silence grâce au Fenestron. Utilisé massivement par les garde-côtes américains (HH-65 Dolphin).",
    specs: { wingspan: '11,9 m (rotor)', length: '13,7 m', height: '4 m', payload: '1 200 kg' }
  },
  {
    id: 'ec135',
    name: 'Eurocopter EC 135',
    category: 'Helicopters',
    role: 'Secours médical / Police',
    manufacturer: 'Eurocopter',
    country: 'France / Allemagne',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor de queue de type Fenestron",
      "Rotor principal à quatre pales sans articulations",
      "Patins hauts et fuselage compact"
    ],
    description: "Référence moderne pour les services de secours SAMU et les forces de police en Europe grâce à son faible niveau sonore.",
    specs: { wingspan: '10,2 m (rotor)', length: '12,1 m', height: '3,5 m', payload: '1 100 kg' }
  },
  {
    id: 'lama',
    name: 'Eurocopter (Aerospatiale) SA 315B Lama',
    category: 'Helicopters',
    role: 'Travail aérien en haute altitude',
    manufacturer: 'Aerospatiale',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Structure en treillis tubulaire apparente (pas de fuselage arrière)",
      "Cabine type 'bulle' du modèle Alouette II",
      "Performance exceptionnelle en montagne"
    ],
    description: "Conçu spécifiquement pour les besoins de l'armée indienne dans l'Himalaya. Il combine la cellule de l'Alouette II avec la turbine de l'Alouette III.",
    specs: { wingspan: '11 m (rotor)', length: '12,9 m', height: '3,1 m', payload: '1 000 kg' }
  },
  {
    id: 'alouette-iii',
    name: 'Eurocopter (Aerospatiale) SA 316/319 Alouette III',
    category: 'Helicopters',
    role: 'Utilitaire léger / Sauvetage',
    manufacturer: 'Aerospatiale',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Large cabine vitrée (7 places)",
      "Train tricycle fixe (souvent avec carénages)",
      "Rotor principal à trois pales"
    ],
    description: "Hélicoptère légendaire du secours en montagne en France. Utilisé par des dizaines d'armées et de services civils à travers le monde.",
    specs: { wingspan: '11 m (rotor)', length: '12,8 m', height: '3 m', payload: '800 kg' }
  },
  {
    id: 'gazelle',
    name: 'Eurocopter (Aerospatiale) SA 341/342 Gazelle',
    category: 'Helicopters',
    role: 'Reconnaissance / Attaque léger',
    manufacturer: 'Aerospatiale / Westland',
    country: 'France / UK',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Premier hélicoptère doté d'un Fenestron",
      "Lignes très fines et cockpit panoramique",
      "Vitesse de pointe élevée pour un monoturbine"
    ],
    description: "Utilisé par l'ALAT française et l'armée britannique. Peut être armé de missiles antichars HOT.",
    specs: { wingspan: '10,5 m (rotor)', length: '11,9 m', height: '3,2 m', payload: '700 kg' }
  },
  {
    id: 'bo105',
    name: 'Eurocopter (MBB) BO-105',
    category: 'Helicopters',
    role: 'Utilitaire / Liaison / Antichar',
    manufacturer: 'MBB',
    country: 'Allemagne',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal rigide (permet des acrobaties)",
      "Fuselage court avec deux portes cargo à l'arrière",
      "Double turbine compacte"
    ],
    description: "Premier hélicoptère léger biturbine. Sa tête de rotor rigide lui confère une agilité exceptionnelle, lui permettant même de faire des loopings.",
    specs: { wingspan: '9,8 m (rotor)', length: '11,9 m', height: '3 m', payload: '900 kg' }
  },
  {
    id: 'tiger',
    name: 'Eurocopter Tiger',
    category: 'Helicopters',
    role: 'Attaque / Appui-protection',
    manufacturer: 'Eurocopter',
    country: 'France / Allemagne',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Sièges en tandem (pilote et tireur)",
      "Fuselage étroit en matériaux composites",
      "Rotor de queue à quatre pales décalées"
    ],
    description: "Hélicoptère d'attaque européen de nouvelle génération. Décliné en versions HAP (Appui-Protection) et UHT (Antichar).",
    specs: { wingspan: '13 m (rotor)', length: '14 m', height: '3,8 m', payload: 'Charge militaire' }
  },
  {
    id: 'lynx',
    name: 'GKN Westland Lynx',
    category: 'Helicopters',
    role: 'Polyvalent naval et terrestre',
    manufacturer: 'Westland',
    country: 'Royaume-Uni',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez très court et cockpit large",
      "Queue avec dérive symétrique haute",
      "Train à patins (terrestre) ou roues (naval)"
    ],
    description: "Détient le record mondial de vitesse pour hélicoptère. Très agile, il est le standard pour les frégates de lutte anti-sous-marine.",
    specs: { wingspan: '12,8 m (rotor)', length: '15,2 m', height: '3,7 m', payload: '1 000 kg' }
  },
  {
    id: 'dhruv',
    name: 'HAL Advanced Light Helicopter (Dhruv)',
    category: 'Helicopters',
    role: 'Utilitaire moyen',
    manufacturer: 'HAL',
    country: 'Inde',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales en matériaux composites",
      "Design moderne rappelant l'EC 145",
      "Patins ou train tricycle selon version"
    ],
    description: "Premier hélicoptère de conception indienne moderne, destiné à opérer dans les conditions extrêmes des hautes altitudes himalayennes.",
    specs: { wingspan: '13,2 m (rotor)', length: '15,9 m', height: '4 m', payload: '1 500 kg' }
  },
  {
    id: 'kmax',
    name: 'Kaman K-Max',
    category: 'Helicopters',
    role: 'Grue volante / Travail aérien',
    manufacturer: 'Kaman',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Deux rotors engrenants (intermeshing)",
      "Fuselage monoplace extrêmement étroit",
      "Pas de rotor de queue"
    ],
    description: "Spécialement conçu pour le levage de charges lourdes (bois, matériel de construction). Son design unique élimine le besoin d'un rotor de queue énergivore.",
    specs: { wingspan: '14,7 m (rotors)', length: '15,8 m', height: '4,1 m', payload: '2 722 kg à l\'élingue' }
  },
  {
    id: 'seasprite',
    name: 'Kaman SH-2F Seasprite',
    category: 'Helicopters',
    role: 'Lutte anti-sous-marine embarquée',
    manufacturer: 'Kaman',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal avec volets de bord de fuite (servo-flaps)",
      "Train d'atterrissage escamotable dans des carénages de nez",
      "Fuselage compact pour petits navires"
    ],
    description: "Utilisé par l'US Navy pour la protection des convois et la traque des sous-marins depuis des destroyers et frégates.",
    specs: { wingspan: '13,4 m (rotor)', length: '15,9 m', height: '4,6 m', payload: '1 800 kg' }
  },
  {
    id: 'ka25',
    name: 'Kamov Ka-25 Hormone',
    category: 'Helicopters',
    role: 'Lutte anti-sous-marine embarquée',
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Deux rotors coaxiaux (un sur l'autre)",
      "Triple dérive verticale",
      "Train tricycle fixe avec flotteurs de secours"
    ],
    description: "Conçu pour opérer depuis les navires soviétiques. Les rotors coaxiaux permettent une grande compacité sur les ponts d'envol.",
    specs: { wingspan: '15,7 m (rotors)', length: '9,7 m', height: '5,4 m', payload: '1 100 kg' }
  },
  {
    id: 'ka27-helix',
    name: 'Kamov Ka-27 Helix',
    category: 'Helicopters',
    role: 'Lutte anti-sous-marine / Transport naval',
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotors coaxiaux",
      "Fuselage plus volumineux et arrondi que le Ka-25",
      "Double dérive verticale"
    ],
    description: "Successeur du Ka-25, plus puissant et doté d'une meilleure électronique. Utilisé également pour le sauvetage et le transport de troupes.",
    specs: { wingspan: '15,9 m (rotors)', length: '11,3 m', height: '5,4 m', payload: '4 000 kg' }
  },
  {
    id: 'ka50-hokum',
    name: 'Kamov Ka-50 Hokum',
    category: 'Helicopters',
    role: 'Attaque lourd',
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotors coaxiaux",
      "Cockpit monoplace (très rare pour un hélicoptère d'attaque)",
      "Siège éjectable pour le pilote"
    ],
    description: "Unique en son genre, c'est le seul hélicoptère d'attaque monoplace doté d'un siège éjectable. Extrêmement agile et lourdement armé.",
    specs: { wingspan: '14,5 m (rotors)', length: '16 m', height: '4,9 m', payload: 'Charges militaires lourdes' }
  },
  {
    id: 'mi2-hoplite',
    name: 'Mil Mi-2 Hoplite',
    category: 'Helicopters',
    role: 'Utilitaire léger',
    manufacturer: 'Mil (construit par PZL)',
    country: 'Russie / Pologne',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage court et arrondi",
      "Deux turbines montées sur le dessus",
      "Train tricycle fixe"
    ],
    description: "Petit hélicoptère de transport largement utilisé dans les pays de l'ancien pacte de Varsovie pour la liaison et l'entraînement.",
    specs: { wingspan: '14,5 m (rotor)', length: '17,4 m', height: '3,7 m', payload: '700 kg' }
  },
  {
    id: 'mi6-hook',
    name: 'Mil Mi-6 Hook',
    category: 'Helicopters',
    role: 'Transport lourd stratégique',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Taille gigantesque",
      "Petites ailes sur le dessus du fuselage (pour la portance en vol)",
      "Cinq pales au rotor principal"
    ],
    description: "Pendant longtemps le plus grand hélicoptère du monde. Capable de transporter plus de 70 passagers ou des véhicules blindés.",
    specs: { wingspan: '35 m (rotor)', length: '33,2 m (fuselage)', height: '9,8 m', payload: '12 000 kg' }
  },
  {
    id: 'mi8-hip',
    name: 'Mil Mi-8/17 Hip',
    category: 'Helicopters',
    role: 'Transport moyen polyvalent',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage en forme de gros tube avec cockpit vitré proéminent",
      "Rotor principal à cinq pales",
      "Réservoirs extérieurs sur les côtés du fuselage"
    ],
    description: "L'hélicoptère le plus produit au monde après le Huey. Incroyablement versatile, utilisé pour le transport, l'attaque ou le sauvetage.",
    specs: { wingspan: '21,3 m (rotor)', length: '18,2 m', height: '5,6 m', payload: '4 000 kg' }
  },
  {
    id: 'mi24-hind',
    name: 'Mil Mi-24 Hind',
    category: 'Helicopters',
    role: 'Assaut et attaque lourd',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Cockpits en tandem avec bulles séparées",
      "Petites ailes avec un fort angle anèdre (pointent vers le bas)",
      "Large soute pouvant transporter 8 soldats"
    ],
    description: "Surnommé 'le char d'assaut volant'. Unique au monde car il combine la puissance de feu d'un hélicoptère d'attaque avec une soute de transport.",
    specs: { wingspan: '17,3 m (rotor)', length: '17,5 m', height: '6,5 m', payload: 'Armement lourd + 8 hommes' }
  },
  {
    id: 'mi26-halo',
    name: 'Mil Mi-26 Halo',
    category: 'Helicopters',
    role: 'Transport super-lourd',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Le plus grand hélicoptère au monde",
      "Rotor principal à huit pales",
      "Rampe de chargement arrière massive"
    ],
    description: "Un géant capable de soulever un avion de ligne ou un char de combat. Sa puissance de levage est inégalée.",
    specs: { wingspan: '32 m (rotor)', length: '40 m', height: '8,1 m', payload: '20 000 kg' }
  },
  {
    id: 'mi28-havoc',
    name: 'Mil Mi-28 Havoc',
    category: 'Helicopters',
    role: 'Attaque pur',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Cockpit tandem lourdement blindé",
      "Canon fixe sous le nez",
      "Train d'atterrissage fixe résistant aux crashes"
    ],
    description: "Réponse russe à l'Apache américain. Conçu exclusivement pour la destruction de blindés de jour comme de nuit.",
    specs: { wingspan: '17,2 m (rotor)', length: '17 m', height: '3,8 m', payload: 'Charges militaires' }
  },
  {
    id: 'nh90',
    name: 'NHI NH-90',
    category: 'Helicopters',
    role: 'Transport tactique / Anti-sous-marin',
    manufacturer: 'NH Industries',
    country: 'Europe',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage en matériaux composites aux formes furtives",
      "Rampe arrière (version transport)",
      "Rotor principal à quatre pales"
    ],
    description: "Programme européen visant à standardiser les flottes d'hélicoptères navals et terrestres de l'OTAN.",
    specs: { wingspan: '16,3 m (rotor)', length: '19,6 m', height: '5,2 m', payload: '4 000 kg' }
  },
  {
    id: 'w3-sokol',
    name: 'PZL Swidnik W-3 Sokol',
    category: 'Helicopters',
    role: 'Utilitaire moyen',
    manufacturer: 'PZL Swidnik',
    country: 'Pologne',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Ressemble à un Mi-8 aminci",
      "Train tricycle fixe",
      "Rotor principal à quatre pales"
    ],
    description: "Premier hélicoptère entièrement conçu et produit en Pologne, très polyvalent pour le transport et le secours.",
    specs: { wingspan: '15,7 m (rotor)', length: '14,2 m', height: '5,1 m', payload: '2 100 kg' }
  },
  {
    id: 'r22',
    name: 'Robinson R22 Beta',
    category: 'Helicopters',
    role: 'Loisirs / Entraînement initial',
    manufacturer: 'Robinson',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Très petite taille",
      "Cockpit biplace minimaliste en forme de goutte d'eau",
      "Moteur à pistons exposé sous le rotor"
    ],
    description: "L'hélicoptère le plus utilisé au monde pour l'apprentissage du pilotage grâce à son faible coût d'exploitation.",
    specs: { wingspan: '7,7 m (rotor)', length: '8,7 m', height: '2,7 m', payload: '180 kg' }
  },
  {
    id: 'r44',
    name: 'Robinson R44 Astro/Raven',
    category: 'Helicopters',
    role: 'Transport léger / Tourisme',
    manufacturer: 'Robinson',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Fuselage allongé (quatre places)",
      "Design très lisse",
      "Rotor bi-pale avec barre de commande en T"
    ],
    description: "Grand frère du R22, offrant quatre places réelles et des performances étonnantes pour un hélicoptère à pistons.",
    specs: { wingspan: '10 m (rotor)', length: '11,7 m', height: '3,3 m', payload: '400 kg' }
  },
  {
    id: 'schweizer300',
    name: 'Schweizer Model 300',
    category: 'Helicopters',
    role: 'Entraînement / Utilitaire léger',
    manufacturer: 'Schweizer (Hughes)',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Cabine trois places très large et vitrée",
      "Poutre de queue très fine",
      "Rotor principal à trois pales"
    ],
    description: "Anciennement Hughes 300. Extrêmement stable et robuste, idéal pour l'école de pilotage et l'épandage agricole.",
    specs: { wingspan: '8,2 m (rotor)', length: '9,4 m', height: '2,7 m', payload: '430 kg' }
  },
  {
    id: 's58-choctaw',
    name: 'Sikorsky S-58',
    category: 'Helicopters',
    role: 'Utilitaire / Transport de troupes',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Nez massif et haut (moteur situé à l'avant)",
      "Poste de pilotage surélevé",
      "Train classique avec roulette de queue"
    ],
    description: "Hélicoptère historique des années 50. Beaucoup ont été remotorisés avec des turbines (S-58T) pour prolonger leur carrière dans le travail aérien.",
    specs: { wingspan: '17,1 m (rotor)', length: '19,3 m', height: '4,8 m', payload: '2 200 kg' }
  },
  {
    id: 's61-sea-king',
    name: 'Sikorsky S-61 (SH-3 Sea King)',
    category: 'Helicopters',
    role: 'Lutte anti-sous-marine / Sauvetage',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Coque de fuselage en forme de bateau (amphibie)",
      "Deux turbines au-dessus du cockpit",
      "Grandes dimensions"
    ],
    description: "Icone des opérations navales, capable d'amerrir en cas d'urgence. Sert également au transport du Président des USA (Marine One).",
    specs: { wingspan: '18,9 m (rotor)', length: '22,2 m', height: '5,1 m', payload: '3 600 kg' }
  },
  {
    id: 's64-skycrane',
    name: 'Sikorsky S-64 Skycrane',
    category: 'Helicopters',
    role: 'Grue volante lourde',
    manufacturer: 'Sikorsky (Erickson)',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Pas de fuselage central (juste une poutre structurelle)",
      "Train d'atterrissage très haut permettant de se poser au-dessus de la charge",
      "Cabine arrière pour un pilote orienté vers l'arrière"
    ],
    description: "Conçu pour transporter des charges énormes suspendues ou dans des conteneurs spéciaux. Très utilisé pour la lutte contre les incendies.",
    specs: { wingspan: '21,9 m (rotor)', length: '27 m', height: '7,7 m', payload: '9 000 kg à l\'élingue' }
  },
  {
    id: 's65-stallion',
    name: 'Sikorsky S-65 (CH-53 Sea Stallion)',
    category: 'Helicopters',
    role: 'Transport lourd d\'assaut',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Dimensions massives",
      "Rotor principal à six pales",
      "Rampe de chargement arrière"
    ],
    description: "Le plus puissant hélicoptère des armées occidentales lors de sa création. Utilisé pour le transport de véhicules et de troupes d'assaut.",
    specs: { wingspan: '22 m (rotor)', length: '26,9 m', height: '7,6 m', payload: '8 000 kg' }
  },
  {
    id: 's70-black-hawk',
    name: 'Sikorsky S-70 (UH-60 Black Hawk)',
    category: 'Helicopters',
    role: 'Transport tactique d\'assaut',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette très basse et profilée",
      "Train tricycle fixe avec roulette de queue",
      "Rotor principal à quatre pales larges"
    ],
    description: "Hélicoptère d'assaut standard de l'US Army. Conçu pour survivre à des tirs directs et transporter une section d'infanterie au cœur du combat.",
    specs: { wingspan: '16,4 m (rotor)', length: '19,7 m', height: '5,1 m', payload: '4 000 kg' }
  },
  {
    id: 's76-spirit',
    name: 'Sikorsky S-76 Spirit',
    category: 'Helicopters',
    role: 'Transport VIP / Offshore',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Lignes très élégantes et aérodynamiques",
      "Train d'atterrissage tricycle escamotable",
      "Rotor principal à quatre pales"
    ],
    description: "La référence pour le transport de dirigeants d'entreprises et de chefs d'État. Très rapide et confortable.",
    specs: { wingspan: '13,4 m (rotor)', length: '16 m', height: '4,4 m', payload: '1 600 kg' }
  },
  {
    id: 's80-super-stallion',
    name: 'Sikorsky S-80 (CH-53E Super Stallion)',
    category: 'Helicopters',
    role: 'Transport lourd stratégique',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 3,
    recognitionTips: [
      "Trois turbines (deux à gauche, une à droite)",
      "Rotor principal à sept pales",
      "Sonde de ravitaillement en vol télescopique"
    ],
    description: "Le plus grand et le plus puissant hélicoptère produit en dehors de la Russie. Capable de soulever presque n'importe quel autre hélicoptère.",
    specs: { wingspan: '24,1 m (rotor)', length: '30,2 m', height: '8,5 m', payload: '14 500 kg' }
  },
  {
    id: 'xingu',
    name: 'EMBRAER EMB-121 Xingu',
    category: 'Private Executive Aircraft',
    role: 'Turbopropulseur d\'affaires court-courrier',
    manufacturer: 'EMBRAER',
    country: 'Brésil',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Empennage en T"
    ],
    description: "Semblable au Brasilia mais plus petit, le Xingu possède un fuselage très large pour sa taille. Il est utilisé par les forces armées brésiliennes et françaises.",
    specs: { wingspan: '14,1 m', length: '12,2 m', height: '4,8 m', payload: '860 kg' }
  },
  {
    id: 'gulfstream-ii-iii',
    name: 'Gulfstream II/III',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires long-courrier',
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs à l'arrière",
      "Empennage en T"
    ],
    description: "Un total de 462 appareils ont été construits. Le SRA-1 est une version de missions spéciales reconnaissable à son long carénage ventral (canoë).",
    specs: { wingspan: '23,7 m', length: '25,3 m', height: '7,4 m', payload: '726 kg' }
  },
  {
    id: 'gulfstream-iv-v',
    name: 'Gulfstream IV/V',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires long-courrier',
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Nacelles moteurs allongées",
      "Six fenêtres de cabine (G-IV) ou plus (G-V)"
    ],
    description: "Le Gulfstream IV a établi 11 records du monde dans sa classe. Le G-V est une version étirée capable de parcourir plus de 12 000 km.",
    specs: { wingspan: '28,5 m', length: '29,4 m', height: '7,9 m', payload: '2 948 kg' }
  },
  {
    id: 'raytheon-125',
    name: 'Raytheon (BAe) 125',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires moyen-courrier',
    manufacturer: 'Raytheon (BAe)',
    country: 'UK',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Deux turboréacteurs à l'arrière",
      "Dérive haute"
    ],
    description: "Initialement nommé Hawker Siddeley, il a volé en 1962. Raytheon a racheté BAe Corporate Jets en 1993.",
    specs: { wingspan: '14,3 m', length: '15,4 m', height: '5,3 m', payload: '907 kg' }
  },
  {
    id: 'hawker-800',
    name: 'Raytheon (BAe) Hawker 800',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires long-courrier',
    manufacturer: 'Raytheon (BAe)',
    country: 'UK/USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse en flèche",
      "Pare-brise courbe",
      "Deux turboréacteurs à l'arrière"
    ],
    description: "Amélioration du modèle 125 avec une aérodynamique affinée, une envergure accrue et de nouveaux moteurs.",
    specs: { wingspan: '15,7 m', length: '15,6 m', height: '5,4 m', payload: '907 kg' }
  },
  
  {
    id: 'c401-402-421',
    name: 'Cessna 401/402/421 Golden Eagle',
    category: 'Private Light Aircraft',
    role: 'Transport léger',
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage bas (low tail)",
      "Fenêtres carrées sur le 402, rondes sur le 401/421"
    ],
    description: "Famille d'appareils conçus pour le marché des lignes d'apport (feederliner), capables de passer rapidement du transport de passagers au fret.",
    specs: { wingspan: '12,1 m', length: '11 m', height: '3,6 m', payload: '606 kg' }
  },
  {
    id: 'sr20',
    name: 'Cirrus Design SR-20',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Cirrus Design',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Moteur à pistons unique",
      "Carénages de roues (wheel spats)"
    ],
    description: "Le SR-20 est le premier avion de sport à être équipé en série d'un parachute de sécurité balistique permettant de récupérer l'avion entier en cas de panne moteur.",
    specs: { wingspan: '10,6 m', length: '7,6 m', height: '2,8 m', payload: '163 kg' }
  },
  {
    id: 'extra300',
    name: 'Extra 300',
    category: 'Private Light Aircraft',
    role: 'Avion de voltige léger',
    manufacturer: 'Extra',
    country: 'Allemagne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile médiane droite (mid-wing)",
      "Verrière bulle (bubble canopy)",
      "Sections transparentes dans le plancher du fuselage"
    ],
    description: "Conçu pour la voltige illimitée, environ 70 appareils ont été vendus depuis 1988. Il possède des fenêtres de plancher pour la visibilité en vol de formation.",
    specs: { wingspan: '8 m', length: '7,1 m', height: '2,6 m', payload: '0 kg' }
  },
  {
    id: 'rf6-180',
    name: 'Fournier/Sportavia RF6-180 Sportsman',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Fournier / Sportavia',
    country: 'France / Allemagne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Verrière bulle",
      "Moteur à pistons unique"
    ],
    description: "Construit en Allemagne sur un design français. Le RF-6B Club est similaire mais possède une verrière plus petite et seulement deux sièges.",
    specs: { wingspan: '10,5 m', length: '7,2 m', height: '2,6 m', payload: 'N/A' }
  },
  {
    id: 'g115',
    name: 'Grob G115',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Grob',
    country: 'Allemagne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Carénages de roues",
      "Moteur à pistons unique"
    ],
    description: "Production relancée à 10 exemplaires par mois après une interruption. Le modèle 'Bavarian' a été développé pour le marché américain.",
    specs: { wingspan: '10 m', length: '7,4 m', height: '2,7 m', payload: '0 kg' }
  },
  {
    id: 'g115t-acro',
    name: 'Grob G115T Acro',
    category: 'Private Light Aircraft',
    role: 'Entraîneur léger',
    manufacturer: 'Grob',
    country: 'Allemagne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Verrière bulle",
      "Moteur à pistons unique"
    ],
    description: "Destiné à la compétition d'entraînement de l'USAF. Grob le propose désormais sur le marché de l'entraînement civil.",
    specs: { wingspan: '10 m', length: '8,8 m', height: '2,6 m', payload: '450 kg' }
  },
  {
    id: 'gf200',
    name: 'Grob GF 200',
    category: 'Private Light Aircraft',
    role: 'Avion de tourisme léger',
    manufacturer: 'Grob',
    country: 'Allemagne',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile droite à profil dégressif (tapered) en position basse",
      "Empennage en T",
      "Moteur propulsif unique à l'arrière"
    ],
    description: "Initialement prévu avec un moteur Porsche. Différentes configurations de moteurs sont disponibles pour l'hélice propulsive unique.",
    specs: { wingspan: '11 m', length: '8,7 m', height: '3,3 m', payload: '580 kg' }
  },
  {
    id: 'aa1c',
    name: 'Gulfstream AA-1C',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Train tricycle fixe",
      "Moteur à pistons unique"
    ],
    description: "Développement de l'entraîneur American Aviation AA-1 Yankee. Les versions T-cat et Lynx sont extérieurement identiques.",
    specs: { wingspan: '7,5 m', length: '5,9 m', height: '2,3 m', payload: '45 kg' }
  },
  {
    id: 'aa5a-cheetah',
    name: 'Gulfstream AA-5A Cheetah',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage horizontal bas (low tail)",
      "Moteur à pistons unique"
    ],
    description: "Originellement un design Grumman. Le Cheetah est une version améliorée de l'AA-1C avec un intérieur revu et une charge utile supérieure.",
    specs: { wingspan: '9,6 m', length: '6,7 m', height: '2,4 m', payload: '54 kg' }
  },
  {
    id: 'la250-renegade',
    name: 'Lake La-250 Renegade',
    category: 'Private Light Aircraft',
    role: 'Amphibie léger',
    manufacturer: 'Lake',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile médiane droite",
      "Moteur à pistons unique monté au-dessus de l'aile (overwing)",
      "Coque d'amphibie"
    ],
    description: "Produit en deux versions, le Turbo 270 détient un record du monde d'altitude pour amphibie à 7 465 m. La version Seafury est équipée pour les eaux salées.",
    specs: { wingspan: '11,7 m', length: '8,6 m', height: '3,1 m', payload: '90 kg' }
  },
  {
    id: 'falco-f8',
    name: 'Laverda Falco F8',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Laverda',
    country: 'Italie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Verrière bulle",
      "Moteur à pistons unique"
    ],
    description: "Quatre versions principales ont été produites depuis 1955. Très populaire comme entraîneur de voltige grâce à ses capacités acrobatiques.",
    specs: { wingspan: '8 m', length: '6,5 m', height: '2,3 m', payload: '40 kg' }
  },
  {
    id: 'pa18-supercub',
    name: 'Piper PA-18 Super Cub',
    category: 'Private Light Aircraft',
    role: 'Avion utilitaire léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile haute droite haubanée",
      "Extrémités d'ailes arrondies",
      "Moteur à pistons unique"
    ],
    description: "Le Super Cub est le dernier de la série des Cub. Plus de 40 000 exemplaires ont été construits. Utilisé pour le traitement agricole et l'entraînement.",
    specs: { wingspan: '10,8 m', length: '6,8 m', height: '2,1 m', payload: '22 kg' }
  },
  {
    id: 'pa23-aztec',
    name: 'Piper PA-23 Aztec',
    category: 'Private Light Aircraft',
    role: 'Transport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage horizontal bas",
      "Bimoteur à pistons"
    ],
    description: "L'Aztec a subi de nombreuses modifications depuis 1959. On note l'allongement du nez pour le compartiment bagages et le passage à six sièges.",
    specs: { wingspan: '11,3 m', length: '9,5 m', height: '3,2 m', payload: '725 kg' }
  },
  {
    id: 'pa28-cherokee',
    name: 'Piper PA-28 Cherokee',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Train d'atterrissage fixe",
      "Moteur à pistons unique"
    ],
    description: "Base de nombreux avions Piper incluant le Saratoga, le Lance et l'Arrow. Le modèle Warrior est apparu en 1973 avec une aile allongée.",
    specs: { wingspan: '10,7 m', length: '7,2 m', height: '2,2 m', payload: '90 kg' }
  },
  {
    id: 'pa30-twin-comanche',
    name: 'Piper PA-30 Twin Comanche',
    category: 'Private Light Aircraft',
    role: 'Transport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur à pistons",
      "Empennage horizontal bas"
    ],
    description: "Développé à partir du Comanche monomoteur. La version Turbo possède des moteurs turbocompressés et des réservoirs de bout d'aile amovibles.",
    specs: { wingspan: '10,9 m', length: '7,7 m', height: '2,5 m', payload: '113 kg' }
  },
  {
    id: 'pa31-navajo',
    name: 'Piper PA-31 Navajo',
    category: 'Private Light Aircraft',
    role: 'Transport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Fenêtres carrées",
      "Bimoteur à pistons"
    ],
    description: "Progressivement modifié depuis 1964. Les variantes principales incluent le PA-31P étiré et la version Turbo Navajo avec moteurs compressés.",
    specs: { wingspan: '12,4 m', length: '9,9 m', height: '3,9 m', payload: '159 kg' }
  },
  {
    id: 'pa31t-cheyenne-ii',
    name: 'Piper PA-31T Cheyenne II',
    category: 'Private Light Aircraft',
    role: 'Transport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur turbopropulsé",
      "Réservoirs en bout d'aile (wingtip pods)"
    ],
    description: "Premier design turbopropulsé de Piper (1969). Le T-1040 Commuter utilise le fuselage avant du Chieftain avec le nez et les ailes du Cheyenne.",
    specs: { wingspan: '13 m', length: '10,6 m', height: '3,9 m', payload: '227 kg' }
  },
  {
    id: 'pa32-saratoga',
    name: 'Piper PA-32 Saratoga',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Fuselage étiré",
      "Moteur à pistons unique"
    ],
    description: "Le plus grand de la famille Cherokee. On le reconnaît à son entrée d'air moteur prononcée. Plus de 800 exemplaires ont été produits.",
    specs: { wingspan: '11 m', length: '8,4 m', height: '2,5 m', payload: '90 kg' }
  },
  {
    id: 'pa34-seneca',
    name: 'Piper PA-34 Seneca',
    category: 'Private Light Aircraft',
    role: 'Transport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Larges fenêtres carrées",
      "Bimoteur à pistons"
    ],
    description: "Apparu en 1971, très similaire au Twin Comanche. Il possède quatre fenêtres de chaque côté. Construit sous licence en Pologne (PZL-112).",
    specs: { wingspan: '11,8 m', length: '8,7 m', height: '3 m', payload: '90 kg' }
  },
  {
    id: 'pa42-cheyenne-iii',
    name: 'Piper PA-42 Cheyenne III',
    category: 'Private Light Aircraft',
    role: 'Transport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Fuselage long et fin",
      "Bimoteur turbopropulsé"
    ],
    description: "Évolution du Cheyenne original avec un empennage en T et un fuselage plus long. Utilisé principalement comme taxi aérien d'affaires.",
    specs: { wingspan: '14,5 m', length: '13,2 m', height: '4,5 m', payload: '1 140 kg' }
  },
  {
    id: 'pa44-seminole',
    name: 'Piper PA-44 Seminole',
    category: 'Private Light Aircraft',
    role: 'Transport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage en T",
      "Moteur à pistons jumelés"
    ],
    description: "Très similaire au Beechcraft Duchess. On le reconnaît à ses nacelles moteurs qui dépassent du bord de fuite de l'aile.",
    specs: { wingspan: '11,7 m', length: '8,4 m', height: '2,6 m', payload: '91 kg' }
  },
  {
    id: 'pa46-malibu',
    name: 'Piper PA-46 Malibu Mirage',
    category: 'Private Light Aircraft',
    role: 'Avion de tourisme léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage horizontal bas",
      "Moteur à pistons unique"
    ],
    description: "Développé à partir du Malibu original (1983). C'est le premier avion léger monomoteur pressurisé sur le marché civil.",
    specs: { wingspan: '13,1 m', length: '8,7 m', height: '3,5 m', payload: '45 kg' }
  },
  {
    id: 'pa28-arrow',
    name: 'Piper PA-28 Arrow',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Piper',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite avec dièdre positif",
      "Moteur à pistons unique",
      "Train d'atterrissage fixe"
    ],
    description: "Développé à partir du Archer, l'Arrow possède un train d'atterrissage fixe. Le modèle Arrow IV a introduit un empennage en T.",
    specs: { wingspan: '10,8 m', length: '7,5 m', height: '2,4 m', payload: '90 kg' }
  },
  {
    id: 'b58-baron',
    name: 'Raytheon (Beechcraft) B58 Baron',
    category: 'Private Light Aircraft',
    role: 'Transport léger',
    manufacturer: 'Raytheon',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur à pistons",
      "Train d'atterrissage rétractable"
    ],
    description: "Développé à partir du Baron 55, le modèle 58 possède un fuselage plus long et une quatrième fenêtre de chaque côté. 2 500 unités livrées.",
    specs: { wingspan: '11,5 m', length: '9,1 m', height: '3 m', payload: '317 kg' }
  },
  
  {
    id: 'b60-duke',
    name: 'Raytheon (Beechcraft) B60 Duke',
    category: 'Private Light Aircraft',
    role: 'Avion de tourisme léger',
    manufacturer: 'Raytheon',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Bimoteur à pistons",
      "Long carénage de dérive (tailfin strake)"
    ],
    description: "Le Duke possède une cabine pressurisée et un moteur turbocompressé lui permettant d'opérer jusqu'à 9 145 m. Près de 600 exemplaires ont été construits.",
    specs: { wingspan: '11,9 m', length: '10,3 m', height: '3,8 m', payload: 'N/A' }
  },
  {
    id: 'b76-duchess',
    name: 'Raytheon (Beechcraft) B76 Duchess',
    category: 'Private Light Aircraft',
    role: 'Avion de tourisme léger',
    manufacturer: 'Raytheon',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage en T",
      "Bimoteur à pistons"
    ],
    description: "Conçu comme avion de transport personnel léger et d'entraînement. Beech a utilisé des sections de fuselage du Sierra pour réduire les coûts de production.",
    specs: { wingspan: '11,6 m', length: '8,9 m', height: '2,9 m', payload: '90 kg' }
  },
  {
    id: 'f33a-bonanza',
    name: 'Raytheon (Beechcraft) F33A Bonanza',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Raytheon',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage horizontal bas",
      "Monomoteur à pistons"
    ],
    description: "Développé à partir du Bonanza F35 original. La différence principale est le passage d'un empennage papillon à une unité conventionnelle sur le F33A.",
    specs: { wingspan: '10,2 m', length: '8,1 m', height: '2,5 m', payload: '123 kg' }
  },
  {
    id: 'v35b-bonanza',
    name: 'Raytheon (Beechcraft) V35B Bonanza',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Raytheon',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Empennage papillon (butterfly tail) caractéristique",
      "Aile basse et droite",
      "Monomoteur à pistons"
    ],
    description: "Le Bonanza original a volé en 1945. 15 000 appareils avaient été construits à l'arrêt de la production en 1985.",
    specs: { wingspan: '10,2 m', length: '8,1 m', height: '2,3 m', payload: '123 kg' }
  },
  {
    id: 'sierra-200',
    name: 'Raytheon (Beechcraft) Sierra 200',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Raytheon',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Train d'atterrissage rétractable",
      "Monomoteur à pistons"
    ],
    description: "Connu initialement sous le nom de Musketeer Super R, il a été renommé Sierra en 1974. Le modèle Sundowner est une version simplifiée à train fixe.",
    specs: { wingspan: '9,9 m', length: '7,8 m', height: '2,5 m', payload: '123 kg' }
  },
  {
    id: 'atl-club',
    name: 'Robin ATL Club',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Robin',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile en flèche inversée (forward swept)",
      "Fuselage à poutre (boom)",
      "Empennage papillon"
    ],
    description: "Design facilement identifiable. Utilisé pour l'entraînement de base au niveau des clubs. Plus de 140 exemplaires ont été produits.",
    specs: { wingspan: '10,2 m', length: '6,7 m', height: '2 m', payload: 'N/A' }
  },
  {
    id: 'hr100',
    name: 'Robin HR100',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Robin',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage horizontal bas",
      "Monomoteur à pistons"
    ],
    description: "Le modèle 100/200TR dispose d'un moteur à injection de 250 ch et d'un train rentrant. La version 100 4+2 offre des sièges supplémentaires.",
    specs: { wingspan: '9,1 m', length: '7,6 m', height: '2,7 m', payload: 'N/A' }
  },
  {
    id: 'hr200',
    name: 'Robin HR200',
    category: 'Private Light Aircraft',
    role: 'Avion d\'entraînement léger',
    manufacturer: 'Robin',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Verrière bulle",
      "Monomoteur à pistons"
    ],
    description: "Sorti de production en 1976, la fabrication a repris en 1992 avec 150 nouveaux appareils construits.",
    specs: { wingspan: '8,3 m', length: '6,6 m', height: '1,9 m', payload: 'N/A' }
  },
  {
    id: 'dr400',
    name: 'Robin DR400',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Robin',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse avec extrémités relevées (dihedral wingtips)",
      "Monomoteur à pistons",
      "Lignes fluides"
    ],
    description: "En développement constant depuis 1972. Les versions de remorquage de planeurs 'Remo' se reconnaissent à leur double silencieux sous le fuselage.",
    specs: { wingspan: '8,7 m', length: '6,9 m', height: '2,2 m', payload: '55 kg' }
  },
  {
    id: 'r3000',
    name: 'Robin R3000',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Robin',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Empennage en T",
      "Monomoteur à pistons"
    ],
    description: "Conçu pour accepter différents moteurs et aménagements intérieurs. Seuls deux modèles sur les sept proposés sont entrés en production.",
    specs: { wingspan: '9,8 m', length: '7,5 m', height: '2,7 m', payload: '40 kg' }
  },
  {
    id: 'tb9-tampico',
    name: 'Socata TB9 Tampico',
    category: 'Private Light Aircraft',
    role: 'Avion de sport léger',
    manufacturer: 'Socata',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Train fixe ou rétractable selon modèle",
      "Lignes modernes et carrées"
    ],
    description: "Sert de base à plusieurs autres appareils comme le Tobago (moteur plus puissant) ou le Trinidad (train rentrant).",
    specs: { wingspan: '9,8 m', length: '7,6 m', height: '3,2 m', payload: '45 kg' }
  },
  {
    id: 'hansa-3',
    name: 'TAAL Hansa 3',
    category: 'Private Light Aircraft',
    role: 'Avion d\'entraînement léger',
    manufacturer: 'TAAL',
    country: 'Inde',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Aile basse et droite",
      "Extrémités d'ailes en flèche (swept wingtips)",
      "Monomoteur à pistons"
    ],
    description: "Conçu comme avion d'entraînement élémentaire. Plusieurs prototypes ont été testés avec différents moteurs avant le choix final de production.",
    specs: { wingspan: '10,4 m', length: '7,2 m', height: '2,6 m', payload: 'N/A' }
  },
  {
    id: 'a129-mangusta',
    name: 'Agusta A 129 Mangusta',
    category: 'Helicopters',
    role: 'Hélicoptère d\'attaque',
    manufacturer: 'Agusta',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Double turbine",
      "Sièges en tandem (pilote et tireur)",
      "Viseur TOW sur le nez"
    ],
    description: "Premier design européen d'hélicoptère d'attaque dédié. En service dans l'armée italienne pour la lutte antichar.",
    specs: { wingspan: '11,9 m (rotor)', length: '12,3 m', height: '3,3 m', payload: '1 200 kg' }
  },
  {
    id: 'as61',
    name: 'Agusta/Sikorsky AS-61',
    category: 'Helicopters',
    role: 'Hélicoptère de lutte anti-sous-marine',
    manufacturer: 'Agusta-Sikorsky',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Double turbine",
      "Flotteurs de stabilisation jumelés",
      "Radar ventral"
    ],
    description: "Agusta a commencé la construction sous licence du Sikorsky S-61 en 1967. Plusieurs versions existent, dont le 'Pelican' pour le sauvetage.",
    specs: { wingspan: '18,9 m (rotor)', length: '16,7 m', height: '4,7 m', payload: '3 630 kg' }
  },
  {
    id: 'cobra',
    name: 'Bell AH-1 Cobra/SuperCobra',
    category: 'Helicopters',
    role: 'Hélicoptère d\'attaque',
    manufacturer: 'Bell',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1, // ou 2 pour SuperCobra
    recognitionTips: [
      "Rotor principal bi-pale",
      "Monoturbine ou double turbine",
      "Patins (skids)",
      "Cockpit en tandem"
    ],
    description: "Développé en 1965 pour un besoin de canonnière plus rapide que le Huey. Le SeaCobra et le SuperCobra utilisent le moteur du Twin Huey.",
    specs: { wingspan: '14,6 m (rotor)', length: '13,9 m', height: '4,1 m', payload: '1 118 kg' }
  },
  {
    id: 'osprey',
    name: 'Bell/Boeing V-22 Osprey',
    category: 'Helicopters', // Type Tilt-rotor
    role: 'Transport à rotors basculants',
    manufacturer: 'Bell / Boeing',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Double rotors basculants (twin tilt rotors)",
      "Double dérive",
      "Aile haute et droite"
    ],
    description: "Seul avion à rotors basculants en production. Il combine la polyvalence de l'hélicoptère avec la vitesse d'un avion à turbopropulseur.",
    specs: { wingspan: '11,6 m (chaque rotor)', length: '17,5 m', height: '5,4 m', payload: '9 072 kg' }
  },
  {
    id: 'defender',
    name: 'Boeing (McDonnell Douglas) MD-500 Defender',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Monoturbine",
      "Poutre de queue (boom tail)",
      "Verrière ronde"
    ],
    description: "Développé à partir de l'hélicoptère d'observation OH-6A Cayuse. Les versions militaires incluent une variante anti-sous-marine pour Taïwan.",
    specs: { wingspan: '8,1 m (rotor)', length: '7 m', height: '2,6 m', payload: 'N/A' }
  },
  {
    id: 'md520',
    name: 'Boeing (McDonnell Douglas) Model 520',
    category: 'Helicopters',
    role: 'Hélicoptère utilitaire',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Monoturbine",
      "Patins (skids)",
      "Queue NOTAR (pas de rotor de queue)"
    ],
    description: "Développement du Model 500 utilisant le système NOTAR (No Tail Rotor) qui réduit le bruit et augmente la sécurité.",
    specs: { wingspan: '8,4 m (rotor)', length: '9,3 m', height: '2,6 m', payload: '1 247 kg' }
  },
  {
    id: 'eh101-utility',
    name: 'EHI EH-101 Merlin Utility',
    category: 'Helicopters',
    role: 'Hélicoptère de transport embarqué',
    manufacturer: 'EHI (Agusta/Westland)',
    country: 'Italie / UK',
    engineType: 'Turbine',
    enginesCount: 3,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Trois turbines",
      "Rampe de chargement arrière"
    ],
    description: "Version de transport développée pour la marine italienne et la RAF (en remplacement du Sea King et du Wessex).",
    specs: { wingspan: '18,6 m (rotor)', length: '22,8 m', height: '6,6 m', payload: '5 443 kg' }
  },
  {
    id: 'sa330-puma',
    name: 'Eurocopter SA 330 Puma',
    category: 'Helicopters',
    role: 'Hélicoptère de transport moyen',
    manufacturer: 'Eurocopter (Aerospatiale)',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Deux turbines",
      "Train tricycle rétractable"
    ],
    description: "Conçu pour répondre aux besoins de l'Armée de Terre française. Ce fut le premier hélicoptère occidental certifié pour le vol tout temps.",
    specs: { wingspan: '15 m (rotor)', length: '14,1 m', height: '5,1 m', payload: '3 200 kg' }
  },
  {
    id: 'as332-super-puma',
    name: 'Eurocopter AS 332 Super Puma',
    category: 'Helicopters',
    role: 'Hélicoptère de transport moyen',
    manufacturer: 'Eurocopter',
    country: 'France / Allemagne',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Fuselage étiré par rapport au Puma",
      "Pods latéraux pour le train d'atterrissage"
    ],
    description: "Dérivé du Puma original, le Super Puma a volé en 1978. Il sert au transport VIP, comme plateforme radar ou navire anti-surface.",
    specs: { wingspan: '15,6 m (rotor)', length: '15,5 m', height: '4,9 m', payload: '4 500 kg' }
  },
  {
    id: 'as550-ecureuil',
    name: 'Eurocopter AS 550/555 Ecureuil',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'Eurocopter',
    country: 'France / Allemagne',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à trois pales",
      "Monoturbine",
      "Poutre de queue longue"
    ],
    description: "Plus de 2 000 exemplaires construits. La version AS 550 Fennec est une version militaire dédiée équipée de missiles TOW ou de roquettes.",
    specs: { wingspan: '10,7 m (rotor)', length: '10,9 m', height: '3,3 m', payload: '1 400 kg' }
  },
  {
    id: 'as365-dauphin-2',
    name: 'Eurocopter AS 365 Dauphin 2',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'Eurocopter',
    country: 'France / Allemagne',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor de queue caréné (Fenestron)",
      "Train tricycle rétractable",
      "Nez allongé"
    ],
    description: "Successeur du Dauphin AS 361. L'US Coast Guard en utilise plus de 100 sous le nom de HH-65 Dolphins.",
    specs: { wingspan: '11,9 m (rotor)', length: '10,9 m', height: '3,5 m', payload: '4 250 kg' }
  },
  {
    id: 'sa315b-lama',
    name: 'Eurocopter (Aerospatiale) SA 315B Lama II',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'Eurocopter',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à trois pales",
      "Verrière bulle",
      "Poutre de queue en treillis (lattice boom)"
    ],
    description: "Développé spécifiquement pour l'armée indienne. Il détient plusieurs records d'altitude pour hélicoptère.",
    specs: { wingspan: '11 m (rotor)', length: '10,3 m', height: '3,1 m', payload: '1 135 kg' }
  },
  {
    id: 'sa316-alouette-iii',
    name: 'Eurocopter (Aerospatiale) SA 316/319 Alouette III',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'Eurocopter',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à trois pales",
      "Train d'atterrissage tricycle",
      "Moteur exposé"
    ],
    description: "Dernier développement de la famille Alouette, avec une cabine plus large et un moteur plus puissant.",
    specs: { wingspan: '11 m (rotor)', length: '10,2 m', height: '2,9 m', payload: '750 kg' }
  },
  {
    id: 'sa341-gazelle',
    name: 'Eurocopter (Aerospatiale) SA 341 Gazelle',
    category: 'Helicopters',
    role: 'Hélicoptère d\'observation léger',
    manufacturer: 'Eurocopter',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor de queue Fenestron",
      "Verrière bulle",
      "Rotor principal à trois pales"
    ],
    description: "Premier hélicoptère à disposer du rotor de queue caréné Fenestron. Utilisé pour la reconnaissance et l'attaque légère antichar.",
    specs: { wingspan: '10,5 m (rotor)', length: '11,9 m', height: '3,2 m', payload: '700 kg' }
  },
  {
    id: 'westland-lynx',
    name: 'GKN Westland Lynx',
    category: 'Helicopters',
    role: 'Hélicoptère multirôle',
    manufacturer: 'Westland',
    country: 'Royaume-Uni',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Section de nez allongée",
      "Train tricycle ou patins"
    ],
    description: "Développé en conjonction avec la France. Les versions navales disposent d'un radar à 360 degrés pour la lutte anti-sous-marine.",
    specs: { wingspan: '12,8 m (rotor)', length: '15,2 m', height: '3,5 m', payload: '907 kg' }
  },
  {
    id: 'westland-sea-king',
    name: 'GKN Westland Sea King',
    category: 'Helicopters',
    role: 'Hélicoptère anti-sous-marin embarqué',
    manufacturer: 'Westland',
    country: 'Royaume-Uni',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Radar dorsal (dorsal radar)",
      "Coque amphibie"
    ],
    description: "Westland a obtenu la licence du Sikorsky SH-61 en 1959. Ils l'ont amélioré avec des moteurs Rolls-Royce Gnome.",
    specs: { wingspan: '18,9 m (rotor)', length: '17,2 m', height: '4,7 m', payload: '3 628 kg' }
  },
  {
    id: 'westland-wasp',
    name: 'GKN Westland Wasp',
    category: 'Helicopters',
    role: 'Hélicoptère anti-sous-marin embarqué',
    manufacturer: 'Westland',
    country: 'Royaume-Uni',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Train d'atterrissage à quatre roues (quad landing gear)",
      "Moteur exposé"
    ],
    description: "Conçu pour opérer depuis des navires de petite taille. Son train à quatre roues avec roulettes facilite les mouvements dans des espaces restreints.",
    specs: { wingspan: '9,8 m (rotor)', length: '9,2 m', height: '3,6 m', payload: '680 kg' }
  },
  {
    id: 'westland-wessex',
    name: 'GKN Westland Wessex',
    category: 'Helicopters',
    role: 'Hélicoptère utilitaire',
    manufacturer: 'Westland',
    country: 'Royaume-Uni',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Cockpit surélevé (high set cockpit)",
      "Moteur monté dans le nez"
    ],
    description: "Version construite sous licence du Sikorsky S-58 mais utilisant des turbomoteurs Rolls-Royce Gnome.",
    specs: { wingspan: '18,9 m (rotor)', length: '14,7 m', height: '5,1 m', payload: '3 628 kg' }
  },
  {
    id: 'hal-alh',
    name: 'HAL Advanced Light Helicopter',
    category: 'Helicopters',
    role: 'Hélicoptère léger multirôle',
    manufacturer: 'HAL',
    country: 'Inde',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Patins (version civile) ou train tricycle (version militaire)",
      "Double turbine"
    ],
    description: "Basé sur la famille d'hélicoptères MBB, le premier appareil indien a volé en 1992. Plusieurs versions incluent l'attaque et le sauvetage.",
    specs: { wingspan: '13,2 m (rotor)', length: '13,4 m', height: '3,9 m', payload: '1 500 kg' }
  },
  {
    id: 'hiller-uh12e',
    name: 'Hiller UH-12E',
    category: 'Helicopters',
    role: 'Hélicoptère utilitaire léger',
    manufacturer: 'Hiller',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal bi-pale",
      "Verrière bulle",
      "Poutre de queue fine inclinée"
    ],
    description: "A volé pour la première fois en 1948. Utilisé par les forces armées US avant d'être redirigé vers le marché civil pour des travaux agricoles.",
    specs: { wingspan: '10,8 m (rotor)', length: '8,7 m', height: '3,1 m', payload: 'N/A' }
  },
  {
    id: 'kaman-kmax',
    name: 'Kaman K-max',
    category: 'Helicopters',
    role: 'Hélicoptère de levage externe',
    manufacturer: 'Kaman',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Deux rotors engrenants (intermeshing)",
      "Cockpit monoplace",
      "Train tricycle"
    ],
    description: "Conçu pour le levage de charges suspendues. Son système de rotor unique dirige toute la puissance vers la portance.",
    specs: { wingspan: '14,7 m (rotor)', length: '15,8 m', height: 'N/A', payload: '2 721 kg' }
  },
  {
    id: 'kaman-sh2',
    name: 'Kaman SH-2 Seasprite',
    category: 'Helicopters',
    role: 'Hélicoptère anti-sous-marin embarqué',
    manufacturer: 'Kaman',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Train d'atterrissage rétractable",
      "Radar ventral"
    ],
    description: "Connu sous le nom de LAMPS I dans la marine US. Remis en production en 1981 avec de nouveaux moteurs et une avionique améliorée.",
    specs: { wingspan: '13,5 m (rotor)', length: '12,2 m', height: '4,6 m', payload: '1 814 kg' }
  },
  {
    id: 'kamov-ka25',
    name: 'Kamov Ka-25 Hormone',
    category: 'Helicopters',
    role: 'Hélicoptère anti-sous-marin embarqué',
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotors coaxiaux (un au-dessus de l'autre)",
      "Train d'atterrissage à quatre roues",
      "Double dérive"
    ],
    description: "Le système de rotor coaxial est une caractéristique de tous les hélicoptères Kamov. Utilisé par la marine russe pour la lutte ASM.",
    specs: { wingspan: '15,7 m (rotor)', length: '9,7 m', height: '5,4 m', payload: '1 300 kg' }
  },
  {
    id: 'kamov-ka27',
    name: 'Kamov Ka-27 Helix A',
    category: 'Helicopters',
    role: 'Hélicoptère anti-sous-marin embarqué',
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotors coaxiaux",
      "Double dérive",
      "Radar ventral plus petit que sur le Ka-25"
    ],
    description: "Développement du Hormone conçu pour opérer dans toutes les conditions météorologiques. Entré en service en 1973.",
    specs: { wingspan: '15,9 m (rotor)', length: '11,3 m', height: '5,4 m', payload: '5 000 kg' }
  },
  {
    id: 'kamov-ka29',
    name: 'Kamov Ka-29 Helix-B',
    category: 'Helicopters',
    role: 'Hélicoptère naval multi-missions',
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotors coaxiaux",
      "Nez de section carrée",
      "Pas de radar ventral"
    ],
    description: "Développé à partir du Ka-27 pour des missions de transport de troupes d'assaut (16 soldats) et d'appui feu.",
    specs: { wingspan: '15,9 m (rotor)', length: '11,3 m', height: '5,4 m', payload: '4 000 kg' }
  },
  {
    id: 'kamov-ka50',
    name: 'Kamov Ka-50 Hokum',
    category: 'Helicopters',
    role: 'Hélicoptère d\'attaque',
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotors coaxiaux",
      "Cockpit monoplace ou côte à côte (Ka-52)",
      "Train d'atterrissage tricycle rétractable"
    ],
    description: "Premier hélicoptère d'attaque monoplace au monde. Il dispose d'un siège éjectable et d'une avionique de vol avancée.",
    specs: { wingspan: '14,5 m (rotor)', length: '16 m', height: '4,9 m', payload: '3 000 kg' }
  },
  {
    id: 'kamov-ka126',
    name: 'Kamov Ka-126 Hoodlum',
    category: 'Helicopters',
    role: 'Hélicoptère utilitaire',
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotors coaxiaux",
      "Verrière bulle",
      "Double poutre de queue"
    ],
    description: "Développement du Ka-26 à pistons. Utilisé principalement pour des rôles agricoles et le transport léger.",
    specs: { wingspan: '13 m (rotor)', length: '7,7 m', height: '4,2 m', payload: '1 000 kg' }
  },
  {
    id: 'kawasaki-xoh1',
    name: 'Kawasaki XOH-1',
    category: 'Helicopters',
    role: 'Hélicoptère d\'attaque et d\'observation',
    manufacturer: 'Kawasaki',
    country: 'Japon',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Cockpit en tandem",
      "Rotor de queue Fenestron"
    ],
    description: "Premier hélicoptère de conception japonaise. Destiné à remplacer l'OH-6 dans les missions d'observation.",
    specs: { wingspan: '11,5 m (rotor)', length: '12 m', height: '3,8 m', payload: 'N/A' }
  },
  {
    id: 'mil-mi2',
    name: 'Mil Mi-2 Hoplite',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'Mil (PZL)',
    country: 'Russie / Pologne',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à trois pales",
      "Train d'atterrissage tricycle",
      "Dérive haute"
    ],
    description: "Bien que conçu en Russie, il a été construit en Pologne à partir de 1965. Plusieurs versions incluent le transport et l'observation armée.",
    specs: { wingspan: '14,5 m (rotor)', length: '11,4 m', height: '3,7 m', payload: '800 kg' }
  },
  {
    id: 'mil-mi6',
    name: 'Mil Mi-6 Hook',
    category: 'Helicopters',
    role: 'Hélicoptère de transport lourd',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Nez vitré",
      "Aile droite montée haut"
    ],
    description: "Lors de son premier vol en 1957, c'était le plus grand hélicoptère du monde. Plus de 860 exemplaires ont été construits.",
    specs: { wingspan: '35 m (rotor)', length: '33,2 m', height: '9,9 m', payload: '12 000 kg' }
  },
  {
    id: 'mil-mi8',
    name: 'Mil Mi-8 Hip',
    category: 'Helicopters',
    role: 'Hélicoptère de transport moyen',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Double turbine",
      "Portes cargo arrière à coquille (clamshell)"
    ],
    description: "Plus de 12 000 Mi-8 et Mi-17 ont été construits. Le Mi-17 est un développement ultérieur reconnaissable à son rotor de queue à gauche.",
    specs: { wingspan: '21,3 m (rotor)', length: '18,4 m', height: '4,7 m', payload: '4 000 kg' }
  },
  {
    id: 'mil-mi14',
    name: 'Mil Mi-14 Haze',
    category: 'Helicopters',
    role: 'Hélicoptère anti-sous-marin terrestre',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Coque amphibie",
      "Radar de nez ventral"
    ],
    description: "Utilise de nombreuses pièces du Mi-8. Il est équipé d'une coque étanche pour les opérations de lutte ASM depuis des bases côtières.",
    specs: { wingspan: '21,3 m (rotor)', length: '18,4 m', height: '6,9 m', payload: 'Soute à bombes interne' }
  },
  {
    id: 'mil-mi17',
    name: 'Mil Mi-17 Hip',
    category: 'Helicopters',
    role: 'Hélicoptère de transport moyen',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Rotor de queue à bâbord (gauche)",
      "Pylônes d'armement sur les flancs"
    ],
    description: "Remplacement du Mi-8 en production. La plupart des versions militaires emportent six pylônes d'armement.",
    specs: { wingspan: '21,3 m (rotor)', length: '18,4 m', height: '4,7 m', payload: '4 000 kg' }
  },
  {
    id: 'mil-mi24',
    name: 'Mil Mi-24 Hind',
    category: 'Helicopters',
    role: 'Hélicoptère d\'assaut',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Cockpits en tandem",
      "Compartiment à troupes central"
    ],
    description: "Apparu en 1974. Il est unique par sa capacité à transporter des troupes tout en étant un hélicoptère d'attaque lourdement armé.",
    specs: { wingspan: '17,3 m (rotor)', length: '17,5 m', height: '3,9 m', payload: '2 400 kg' }
  },
  {
    id: 'mil-mi26',
    name: 'Mil Mi-26 Halo',
    category: 'Helicopters',
    role: 'Hélicoptère de transport lourd',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à huit pales",
      "Rampe de chargement arrière",
      "Train d'atterrissage tricycle"
    ],
    description: "C'est le plus grand hélicoptère en production au monde. Sa soute à cargo est similaire en taille à celle d'un C-130 Hercules.",
    specs: { wingspan: '32 m (rotor)', length: '33,7 m', height: '8,2 m', payload: '20 000 kg' }
  },
  {
    id: 'mil-mi28',
    name: 'Mil Mi-28 Havoc',
    category: 'Helicopters',
    role: 'Hélicoptère d\'attaque',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Cockpits en tandem",
      "Radar de nez en forme de dé à coudre"
    ],
    description: "Conçu comme successeur du Mi-24 Hind. Le développement a été ralenti par la fin de la guerre froide.",
    specs: { wingspan: '17,2 m (rotor)', length: '17 m', height: '4,7 m', payload: '1 814 kg' }
  },
  {
    id: 'mil-mi34',
    name: 'Mil Mi-34 Hermit',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Train à patins (skids)",
      "Verrière bulle"
    ],
    description: "Premier hélicoptère russe capable de réaliser des boucles et des tonneaux complets. Utilisé pour la police et le transport léger.",
    specs: { wingspan: '10 m (rotor)', length: '8,7 m', height: '3 m', payload: '550 kg' }
  },
  {
    id: 'sokol',
    name: 'PZL Swidnik W-3 Sokol',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'PZL Swidnik',
    country: 'Pologne',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Train d'atterrissage tricycle",
      "Porte pour troupes à l'arrière"
    ],
    description: "Le Sokol (Faucon) a volé pour la première fois en 1979. Plusieurs versions armées ont été conçues mais non produites.",
    specs: { wingspan: '15,7 m (rotor)', length: '14,2 m', height: '3,8 m', payload: '2 100 kg' }
  },
  {
    id: 'pzl-sw4',
    name: 'PZL SW-4',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'PZL',
    country: 'Pologne',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à trois pales",
      "Train à patins",
      "Longue dérive de queue"
    ],
    description: "Conçu comme hélicoptère civil léger et d'entraînement. Une version plus puissante avec moteur Pratt & Whitney est proposée.",
    specs: { wingspan: '9 m (rotor)', length: '8,2 m', height: '2,9 m', payload: '750 kg' }
  },
  {
    id: 'r22-beta',
    name: 'Robinson R22 Beta',
    category: 'Helicopters',
    role: 'Hélicoptère ultra-léger',
    manufacturer: 'Robinson',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal bi-pale",
      "Tête de rotor montée haut",
      "Poutre de queue longue et fine"
    ],
    description: "Conçu comme un hélicoptère abordable pour la police et les écoles de vol. Plus de 2 200 exemplaires livrés.",
    specs: { wingspan: '7,7 m (rotor)', length: '6,3 m', height: '2,7 m', payload: '181 kg' }
  },
  {
    id: 'r44-astro',
    name: 'Robinson R44 Astro',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'Robinson',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal bi-pale",
      "Deux fenêtres latérales",
      "Tête de rotor montée haut"
    ],
    description: "Basé sur le R22, il possède une cabine à quatre sièges et répond à des standards de confort et de sécurité plus élevés.",
    specs: { wingspan: '10,1 m (rotor)', length: '11,6 m', height: '3,3 m', payload: 'N/A' }
  },
  {
    id: 'schweizer-300',
    name: 'Schweizer Model 300',
    category: 'Helicopters',
    role: 'Hélicoptère léger',
    manufacturer: 'Schweizer',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à trois pales",
      "Verrière bulle",
      "Poutre de queue fine"
    ],
    description: "À l'origine un design Hughes des années 60. Schweizer a racheté les droits de production en 1983.",
    specs: { wingspan: '8,2 m (rotor)', length: '9,4 m', height: '2,7 m', payload: '45 kg' }
  },
  {
    id: 'sikorsky-s58',
    name: 'Sikorsky S-58',
    category: 'Helicopters',
    role: 'Hélicoptère utilitaire',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Cockpit surélevé",
      "Doubles entrées d'air au nez"
    ],
    description: "Premier vol en 1954. C'est un développement du S-55. Beaucoup ont été remotorisés avec des turbines à partir des années 70.",
    specs: { wingspan: '17,1 m (rotor)', length: '14,4 m', height: '4,8 m', payload: '3 628 kg' }
  },
  {
    id: 'sea-king',
    name: 'Sikorsky S-61 Sea King',
    category: 'Helicopters',
    role: 'Hélicoptère multi-missions embarqué',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Coque amphibie",
      "Radar ventral ou de type 'dé à coudre'"
    ],
    description: "Conçu pour la lutte anti-sous-marine en remplacement du S-58. Il a été construit sous licence en Italie, au Japon et au Royaume-Uni.",
    specs: { wingspan: '18,9 m (rotor)', length: '16,7 m', height: '4,7 m', payload: '3 630 kg' }
  },
  {
    id: 's61n',
    name: 'Sikorsky S-61N',
    category: 'Helicopters',
    role: 'Hélicoptère de transport offshore',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Coque amphibie",
      "Fenêtres carrées"
    ],
    description: "Version civile du S-61 conçue pour le transport de personnels vers les plateformes pétrolières offshore.",
    specs: { wingspan: '18,9 m (rotor)', length: '22,2 m', height: '5,2 m', payload: '3 560 kg' }
  },
  {
    id: 's61r-ch3',
    name: 'Sikorsky S-61R CH-3',
    category: 'Helicopters',
    role: 'Hélicoptère de transport moyen',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à cinq pales",
      "Pods latéraux",
      "Rampe de chargement arrière"
    ],
    description: "Développement du S-61 disposant d'une rampe arrière pour faciliter le chargement des troupes et du fret.",
    specs: { wingspan: '18,9 m (rotor)', length: '17,4 m', height: '5,5 m', payload: '2 270 kg' }
  },
  {
    id: 's62',
    name: 'Sikorsky S-62',
    category: 'Helicopters',
    role: 'Hélicoptère utilitaire',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à trois pales",
      "Flotteurs jumelés",
      "Coque amphibie"
    ],
    description: "Influencé par le design du S-61 mais plus petit. Utilisé principalement par les garde-côtes américains (HH-52A).",
    specs: { wingspan: '16,2 m (rotor)', length: '13,6 m', height: '4,3 m', payload: '1 335 kg' }
  },
  {
    id: 'skycrane',
    name: 'Sikorsky S-64 Skycrane',
    category: 'Helicopters',
    role: 'Hélicoptère de transport lourd',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à six pales",
      "Pod de cockpit",
      "Fuselage en forme de poutre (boom)"
    ],
    description: "Conçu pour transporter une grande variété de pods de fret ou de charges suspendues. Détient plusieurs records mondiaux de levage.",
    specs: { wingspan: '21,9 m (rotor)', length: '21,4 m', height: '7,7 m', payload: '9 072 kg' }
  },
  {
    id: 'sea-stallion',
    name: 'Sikorsky S-65A/CH-53 Sea Stallion',
    category: 'Helicopters',
    role: 'Hélicoptère de transport lourd',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à six pales",
      "Longs pods latéraux",
      "Rampe de chargement arrière"
    ],
    description: "Basé sur les composants éprouvés du S-64 Skycrane. Utilisé pour l'assaut et les missions de sauvetage.",
    specs: { wingspan: '22 m (rotor)', length: '20,5 m', height: '7,6 m', payload: '9 070 kg' }
  },
  {
    id: 'black-hawk',
    name: 'Sikorsky S-70 UH-60 Black Hawk',
    category: 'Helicopters',
    role: 'Hélicoptère utilitaire',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Dérive haute et fine",
      "Fuselage bas et large"
    ],
    description: "Plus de 2 000 exemplaires construits. La cellule standard a été modifiée pour une multitude de missions de combat.",
    specs: { wingspan: '16,4 m (rotor)', length: '15,3 m', height: '5,1 m', payload: '3 629 kg' }
  },
  {
    id: 'pave-hawk',
    name: 'Sikorsky MH-60 Pave Hawk',
    category: 'Helicopters',
    role: 'Hélicoptère d\'opérations spéciales',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Sonde de ravitaillement en vol",
      "Radar de nez de type 'dé à coudre' / FLIR"
    ],
    description: "Version spécialisée du Black Hawk opérée par l'US Army et l'US Air Force pour les opérations spéciales et le sauvetage au combat.",
    specs: { wingspan: '16,4 m (rotor)', length: '15,3 m', height: '5,1 m', payload: 'Charge militaire' }
  },
  {
    id: 'seahawk',
    name: 'Sikorsky S-70A SH-60B Seahawk',
    category: 'Helicopters',
    role: 'Hélicoptère anti-sous-marin embarqué',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Fenêtres de cabine plus petites",
      "Roue de queue droite (straight tail wheel)"
    ],
    description: "Développé à partir du Black Hawk avec des rotors et une queue repliables pour le stockage à bord des navires.",
    specs: { wingspan: '16,4 m (rotor)', length: '15,3 m', height: '5,1 m', payload: '3 551 kg' }
  },
  {
    id: 's76',
    name: 'Sikorsky S-76',
    category: 'Helicopters',
    role: 'Hélicoptère utilitaire',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à quatre pales",
      "Train d'atterrissage rétractable",
      "Doubles portes latérales"
    ],
    description: "Conçu à partir de l'aérodynamique et de la technologie du Black Hawk. Destiné au marché civil de l'offshore et du transport d'affaires.",
    specs: { wingspan: '13,4 m (rotor)', length: '13,4 m', height: '4,4 m', payload: '1 497 kg' }
  },
  {
    id: 'super-sea-stallion',
    name: 'Sikorsky S-80 CH-53E Super Sea Stallion',
    category: 'Helicopters',
    role: 'Hélicoptère de transport lourd',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 3,
    recognitionTips: [
      "Rotor principal à six pales",
      "Triple turbine",
      "Sonde de ravitaillement en vol"
    ],
    description: "Développé à partir du S-65. Il est équipé d'un troisième moteur et d'un rotor principal à sept pales entièrement articulé.",
    specs: { wingspan: '24,1 m (rotor)', length: '22,3 m', height: '8,9 m', payload: '13 607 kg' }
  },
  
  {
    id: 'a380',
    name: 'Airbus A380',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier à double pont',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Jet',
    enginesCount: 4,
    recognitionTips: [
      "Double pont complet sur toute la longueur du fuselage",
      "Dimensions gigantesques",
      "Quatre réacteurs sous les ailes",
      "Winglets en forme de flèche (haut et bas)"
    ],
    description: "Le plus grand avion de ligne de l'histoire. Capable de transporter plus de 800 passagers, il a redéfini le luxe aérien avant la fin de sa production en 2021.",
    specs: { wingspan: '79,75 m', length: '72,72 m', height: '24,09 m', payload: '84 000 kg' }
  },
  {
    id: 'b787-dreamliner',
    name: 'Boeing 787 Dreamliner',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier moyenne capacité',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Bords de fuite des nacelles moteurs dentelés (chevrons)",
      "Ailes très flexibles qui se courbent en vol",
      "Nez très profilé sans fenêtres de cockpit proéminentes",
      "Extrémités d'ailes relevées sans winglets séparés"
    ],
    description: "Premier avion de ligne majeur construit principalement en matériaux composites (carbone), offrant une consommation de carburant réduite de 20%.",
    specs: { wingspan: '60,17 m', length: '56,72 m', height: '16,92 m', payload: '43 300 kg' }
  },
  {
    id: 'a350-xwb',
    name: 'Airbus A350 XWB',
    category: 'Civil Jet Airliners',
    role: 'Avion de ligne long-courrier',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Pare-brise du cockpit entouré de noir (look 'masque de Zorro')",
      "Winglets courbes très élégants et arrondis",
      "Fuselage large et nez effilé"
    ],
    description: "Le concurrent direct du Boeing 787. Utilisant massivement le carbone et le titane, il est optimisé pour les vols ultra long-courriers.",
    specs: { wingspan: '64,75 m', length: '66,80 m', height: '17,05 m', payload: '52 300 kg' }
  },
  {
    id: 'f35-lightning-ii',
    name: 'Lockheed Martin F-35 Lightning II',
    category: 'Combat Aircraft',
    role: 'Chasseur furtif multirôle de 5ème génération',
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Jet',
    enginesCount: 1,
    recognitionTips: [
      "Fuselage anguleux et aspect 'lisse' (furtivité)",
      "Entrées d'air sans plaques de déviation (DSI)",
      "Tuyère de moteur unique dentelée à l'arrière"
    ],
    description: "Héritier du F-16, le F-35 est l'avion de combat le plus avancé de l'OTAN. Il existe en version A (classique), B (STOVL) et C (embarqué).",
    specs: { wingspan: '10,70 m', length: '15,70 m', height: '4,38 m', payload: '8 160 kg' }
  },
  {
    id: 'su57-felon',
    name: 'Sukhoi Su-57 Felon',
    category: 'Combat Aircraft',
    role: 'Chasseur furtif de supériorité aérienne',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Profil très plat et large",
      "Double dérive monobloc inclinée",
      "Moteurs très espacés avec tunnel central"
    ],
    description: "Le premier chasseur furtif russe. Conçu pour succéder à la famille Su-27, il combine super-manœuvrabilité et discrétion radar.",
    specs: { wingspan: '14,10 m', length: '20,10 m', height: '4,74 m', payload: '7 500 kg' }
  },
  {
    id: 'j20-mighty-dragon',
    name: 'Chengdu J-20',
    category: 'Combat Aircraft',
    role: 'Chasseur furtif lourd',
    manufacturer: 'Chengdu',
    country: 'Chine',
    engineType: 'Jet',
    enginesCount: 2,
    recognitionTips: [
      "Configuration canard avec ailes delta",
      "Fuselage extrêmement long pour un chasseur",
      "Double dérive inclinée vers l'extérieur"
    ],
    description: "Le premier avion furtif chinois de 5ème génération, conçu pour les missions de pénétration et de supériorité aérienne.",
    specs: { wingspan: '13,50 m', length: '21,20 m', height: '4,45 m', payload: '11 000 kg' }
  },
  {
    id: 'a400m-atlas',
    name: 'Airbus A400M Atlas',
    category: 'Combat Support Aircraft',
    role: 'Transport militaire lourd et ravitailleur',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Quatre turbopropulseurs massifs à 8 pales",
      "Hélices tournant dans des sens opposés sur chaque aile",
      "Empennage en T imposant"
    ],
    description: "Conçu pour combler le vide entre le C-130 et le C-17. Il peut transporter des charges lourdes sur des pistes courtes et non préparées.",
    specs: { wingspan: '42,40 m', length: '45,10 m', height: '14,70 m', payload: '37 000 kg' }
  },
  {
    id: 'mq9-reaper',
    name: 'General Atomics MQ-9 Reaper',
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: 'Drone de surveillance et d\'attaque',
    manufacturer: 'General Atomics',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Pas de cockpit (nez plein et bulbeux)",
      "Moteur propulsif à l'arrière",
      "Dérives de queue en V inversé (pointant vers le bas)"
    ],
    description: "Le drone armé le plus célèbre au monde. Capable de rester en l'air pendant 24 heures pour des missions de surveillance ou de frappe de précision.",
    specs: { wingspan: '20,10 m', length: '11 m', height: '3,81 m', payload: '1 700 kg' }
  },
  {
    id: 'tb2-bayraktar',
    name: 'Baykar Bayraktar TB2',
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: 'Drone tactique de combat',
    manufacturer: 'Baykar',
    country: 'Turquie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Double poutre de queue rejoignant un empennage en V inversé",
      "Hélice propulsive centrale",
      "Petite taille par rapport aux drones américains"
    ],
    description: "Drone devenu légendaire pour son efficacité lors des conflits récents. Il est économique, précis et difficile à détecter.",
    specs: { wingspan: '12 m', length: '6,50 m', height: '2,20 m', payload: '150 kg' }
  },
  {
    id: 'h160',
    name: 'Airbus Helicopters H160',
    category: 'Helicopters',
    role: 'Transport civil et militaire de nouvelle génération',
    manufacturer: 'Airbus Helicopters',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor de queue Fenestron incliné (canted)",
      "Stabilisateurs horizontaux à double plan (biplane stabilizer)",
      "Design futuriste avec verrière large"
    ],
    description: "Concentré de technologies, il utilise des pales 'Blue Edge' en forme de boomerang pour réduire drastiquement le bruit.",
    specs: { wingspan: '12 m (rotor)', length: '13,96 m', height: '4,91 m', payload: '2 000 kg' }
  },
  {
    id: 'kf21-boramae',
    name: 'KAI KF-21 Boramae',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle furtif',
    manufacturer: 'KAI',
    country: 'Corée du Sud',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette de petit F-22",
      "Double dérive inclinée",
      "Entrées d\'air en losange",
    ],
    description: "Chasseur de génération 4.5 conçu pour remplacer les F-4 et F-5 avec une signature radar réduite.",
    specs: {
      wingspan: '11.2 m',
      length: '16.9 m',
      height: '4.7 m',
      payload: '7 700 kg'
    }
  },
  {
    id: 'jf17-block3',
    name: 'PAC JF-17 Thunder Block III',
    category: 'Combat Aircraft',
    role: 'Chasseur léger multirôle',
    manufacturer: 'PAC/Chengdu',
    country: 'Pakistan/Chine',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Entrées d\'air DSI sans séparateur",
      "Ailes en flèche avec extensions LERX",
      "Une seule tuyère arrière",
    ],
    description: "Version la plus moderne du JF-17 avec un radar AESA et une avionique de pointe.",
    specs: {
      wingspan: '9.4 m',
      length: '14.3 m',
      height: '4.7 m',
      payload: '3 600 kg'
    }
  },
  {
    id: 'j10c-vigorous',
    name: 'Chengdu J-10C',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle',
    manufacturer: 'Chengdu Aircraft',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta avec canards",
      "Entrée d\'air ventrale rectangulaire",
      "Grande dérive verticale unique",
    ],
    description: "Dernière variante du J-10 équipée de capteurs avancés et d\'une entrée d\'air optimisée.",
    specs: {
      wingspan: '9.8 m',
      length: '15.5 m',
      height: '5.4 m',
      payload: '7 000 kg'
    }
  },
  {
    id: 'hal-tejas-mk1',
    name: 'HAL Tejas Mk1',
    category: 'Combat Aircraft',
    role: 'Chasseur léger de défense',
    manufacturer: 'HAL',
    country: 'Inde',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Aile delta sans canards",
      "Taille très compacte",
      "Cockpit en une seule pièce",
    ],
    description: "Le plus petit chasseur multirôle supersonique au monde conçu pour l\'armée indienne.",
    specs: {
      wingspan: '8.2 m',
      length: '13.2 m',
      height: '4.4 m',
      payload: '5 300 kg'
    }
  },
  {
    id: 'f15ex-eagle-ii',
    name: 'Boeing F-15EX Eagle II',
    category: 'Combat Aircraft',
    role: 'Chasseur de supériorité aérienne',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette classique F-15",
      "Nombreux pylônes sous les ailes",
      "Cockpit biplace systématique",
    ],
    description: "Version modernisée du F-15 avec commandes de vol électriques et capacité d\'emport massive.",
    specs: {
      wingspan: '13.1 m',
      length: '19.4 m',
      height: '5.6 m',
      payload: '13 400 kg'
    }
  },
  {
    id: 'j16-flanker-h',
    name: 'Shenyang J-16',
    category: 'Combat Aircraft',
    role: 'Chasseur de frappe',
    manufacturer: 'Shenyang Aircraft',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Biplace en tandem",
      "Pas de tube Pitot sur le nez",
      "Peinture gris foncé mate",
    ],
    description: "Chasseur multirôle chinois dérivé du Su-30 spécialisé dans l\'attaque au sol.",
    specs: {
      wingspan: '14.7 m',
      length: '21.9 m',
      height: '6.4 m',
      payload: '8 000 kg'
    }
  },
  {
    id: 'gripen-e',
    name: 'Saab Gripen E',
    category: 'Combat Aircraft',
    role: 'Chasseur multirôle léger',
    manufacturer: 'Saab',
    country: 'Suède',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Configuration canard-delta",
      "Un seul moteur",
      "Train d\'atterrissage rentrant dans l\'aile",
    ],
    description: "Évolution majeure du Gripen avec une autonomie et une charge utile augmentées.",
    specs: {
      wingspan: '8.6 m',
      length: '15.2 m',
      height: '4.5 m',
      payload: '5 300 kg'
    }
  },
  {
    id: 'su35s-flanker-e',
    name: 'Sukhoi Su-35S',
    category: 'Combat Aircraft',
    role: 'Chasseur de supériorité aérienne',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Pas de canards",
      "Tuyères de moteur orientables",
      "Longue pointe de queue arrière",
    ],
    description: "Chasseur de génération 4++ doté d\'une agilité extrême grâce à la poussée vectorielle.",
    specs: {
      wingspan: '15.3 m',
      length: '21.9 m',
      height: '5.9 m',
      payload: '8 000 kg'
    }
  },
  {
    id: 'p8-poseidon',
    name: 'Boeing P-8A Poseidon',
    category: 'Combat Support Aircraft',
    role: 'Patrouille maritime et ASW',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Cellule de 737",
      "Pas de winglets (bouts d\'ailes biseautés)",
      "Baie d\'armement sous le fuselage",
    ],
    description: "Avion de lutte anti-sous-marine basé sur la cellule du Boeing 737-800.",
    specs: {
      wingspan: '37.6 m',
      length: '39.5 m',
      height: '12.8 m',
      payload: '9 000 kg'
    }
  },
  {
    id: 'kc46-pegasus',
    name: 'Boeing KC-46 Pegasus',
    category: 'Combat Support Aircraft',
    role: 'Avion ravitailleur',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Basé sur le Boeing 767",
      "Perche de ravitaillement rigide sous la queue",
      "Pas de fenêtres passagers",
    ],
    description: "Nouveau ravitailleur stratégique de l\'US Air Force basé sur le Boeing 767.",
    specs: {
      wingspan: '47.9 m',
      length: '50.5 m',
      height: '15.9 m',
      payload: '96 000 kg fuel'
    }
  },
  {
    id: 'a330-mrtt',
    name: 'Airbus A330 MRTT',
    category: 'Combat Support Aircraft',
    role: 'Ravitailleur et transport',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Pods sous les ailes",
      "Perche rigide ou tuyaux souples",
      "Cellule d\'A330-200",
    ],
    description: "Avion multirôle de transport et de ravitaillement basé sur l\'A330-200.",
    specs: {
      wingspan: '60.3 m',
      length: '58.8 m',
      height: '17.4 m',
      payload: '111 000 kg fuel'
    }
  },
  {
    id: 'c390-millennium',
    name: 'Embraer C-390',
    category: 'Combat Support Aircraft',
    role: 'Transport militaire tactique',
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs à réaction sous ailes hautes",
      "Empennage en T",
      "Fuselage large avec rampe arrière",
    ],
    description: "Avion de transport moderne à réaction conçu pour remplacer le C-130.",
    specs: {
      wingspan: '35.1 m',
      length: '35.2 m',
      height: '11.8 m',
      payload: '26 000 kg'
    }
  },
  {
    id: 'kawasaki-c2',
    name: 'Kawasaki C-2',
    category: 'Combat Support Aircraft',
    role: 'Transport militaire lourd',
    manufacturer: 'Kawasaki',
    country: 'Japon',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Taille massive",
      "Deux moteurs imposants",
      "Stabilisateurs horizontaux très hauts",
    ],
    description: "Avion de transport stratégique japonais à haute performance et longue portée.",
    specs: {
      wingspan: '44.4 m',
      length: '43.9 m',
      height: '14.2 m',
      payload: '37 600 kg'
    }
  },
  {
    id: 'mq4c-triton',
    name: 'Northrop Grumman MQ-4C Triton',
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: 'Surveillance maritime HALE',
    manufacturer: 'Northrop Grumman',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Ailes très longues type planeur",
      "Dôme radar sous le ventre",
      "Moteur sur le dessus de la queue",
    ],
    description: "Drone de reconnaissance maritime haute altitude capable de voler 24 heures.",
    specs: {
      wingspan: '39.9 m',
      length: '14.5 m',
      height: '4.7 m',
      payload: '1 450 kg'
    }
  },
  {
    id: 't7-red-hawk',
    name: 'Boeing-Saab T-7A Red Hawk',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur avancé',
    manufacturer: 'Boeing/Saab',
    country: 'USA/Suède',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Double dérive inclinée",
      "Ailes hautes trapézoïdales",
      "Nez pointu type F-18",
    ],
    description: "Nouvel avion d\'entraînement de l\'US Air Force pour la formation des pilotes de chasse.",
    specs: {
      wingspan: '9.3 m',
      length: '14.3 m',
      height: '4.1 m',
      payload: 'N/A'
    }
  },
  {
    id: 'm346-master',
    name: 'Leonardo M-346 Master',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur avancé (LIFT)',
    manufacturer: 'Leonardo',
    country: 'Italie',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Nez court et arrondi",
      "Entrées d\'air sous l\'emplanture",
      "Empennage horizontal bas",
    ],
    description: "Avion d\'entraînement polyvalent simulant les avions de chasse de 5e génération.",
    specs: {
      wingspan: '9.7 m',
      length: '11.5 m',
      height: '4.8 m',
      payload: '3 000 kg'
    }
  },
  {
    id: 'l15-falcon',
    name: 'Hongdu L-15 Falcon',
    category: 'Combat Training Aircraft',
    role: 'Entraîneur et attaque légère',
    manufacturer: 'Hongdu',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Ressemble au M-346 mais plus long",
      "Deux moteurs avec postcombustion",
      "Longs apex (LERX)",
    ],
    description: "Avion d\'entraînement supersonique chinois pour pilotes de J-10 et J-20.",
    specs: {
      wingspan: '9.5 m',
      length: '12.3 m',
      height: '4.8 m',
      payload: '3 000 kg'
    }
  },
  {
    id: 'a321neo-xlr',
    name: 'Airbus A321neo XLR',
    category: 'Civil Jet Airliners',
    role: 'Long-courrier monocouloir',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage d\'A320 allongé",
      "Grands Sharklets",
      "Moteurs massifs LEAP ou PW",
    ],
    description: "Version à très long rayon d\'action capable de traverser l\'Atlantique.",
    specs: {
      wingspan: '35.8 m',
      length: '44.5 m',
      height: '11.8 m',
      payload: '220 passagers'
    }
  },
  {
    id: '737-max-8',
    name: 'Boeing 737 MAX 8',
    category: 'Civil Jet Airliners',
    role: 'Moyen-courrier',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Winglets en V scindé",
      "Bords de moteurs dentelés",
      "Train principal sans trappes",
    ],
    description: "Dernière génération du 737 avec moteurs optimisés et nouvelles ailes.",
    specs: {
      wingspan: '35.9 m',
      length: '39.5 m',
      height: '12.3 m',
      payload: '189 passagers'
    }
  },
  {
    id: '777-9-x',
    name: 'Boeing 777-9',
    category: 'Civil Jet Airliners',
    role: 'Long-courrier gros-porteur',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Bouts d\'ailes pliables au sol",
      "Plus gros moteurs au monde (GE9X)",
      "Envergure immense",
    ],
    description: "Le plus grand bimoteur au monde avec des bouts d\'ailes pliables.",
    specs: {
      wingspan: '71.8 m',
      length: '76.7 m',
      height: '19.7 m',
      payload: '426 passagers'
    }
  },
  {
    id: 'c919-comac',
    name: 'COMAC C919',
    category: 'Civil Jet Airliners',
    role: 'Moyen-courrier',
    manufacturer: 'COMAC',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Pare-brise à 4 vitres",
      "Winglets courbes",
      "Silhouette proche de l\'A320",
    ],
    description: "Premier avion de ligne chinois conçu pour concurrencer l\'A320 et le 737.",
    specs: {
      wingspan: '33.6 m',
      length: '38.9 m',
      height: '12.0 m',
      payload: '168 passagers'
    }
  },
  {
    id: 'ssj100-superjet',
    name: 'Sukhoi Superjet 100',
    category: 'Civil Jet Airliners',
    role: 'Jet régional',
    manufacturer: 'Sukhoi',
    country: 'Russie',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Nez bulbeux",
      "Moteurs bas sous les ailes",
      "Train à roues simples",
    ],
    description: "Avion régional russe conçu avec des partenaires technologiques occidentaux.",
    specs: {
      wingspan: '27.8 m',
      length: '29.9 m',
      height: '10.3 m',
      payload: '87 passagers'
    }
  },
  {
    id: 'e195-e2',
    name: 'Embraer E195-E2',
    category: 'Civil Jet Airliners',
    role: 'Jet régional et moyen-courrier',
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Ailes très fines sans winglets",
      "Moteurs GTF massifs",
      "Fuselage étroit 2+2",
    ],
    description: "L\'avion monocouloir le plus efficace du marché surnommé Profit Hunter.",
    specs: {
      wingspan: '35.1 m',
      length: '41.5 m',
      height: '10.9 m',
      payload: '146 passagers'
    }
  },
  {
    id: 'g700-gulfstream',
    name: 'Gulfstream G700',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires ultra-long courrier',
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "10 grands hublots ovales par côté",
      "Winglets incurvés",
      "Nez très effilé"
    ],
    description: "Le nouveau fleuron de Gulfstream avec la cabine la plus spacieuse du secteur.",
    specs: {
      wingspan: '31.4 m',
      length: '33.5 m',
      height: '7.8 m',
      payload: '19 passagers'
    }
  },
  {
    id: 'falcon-10x',
    name: 'Dassault Falcon 10X',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires ultra-longue portée',
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Pare-brise panoramique 4 vitres",
      "Aile en carbone ultra-mince",
      "Queue en T"
    ],
    description: "Le futur plus grand jet de Dassault capable d\'atteindre Mach 0.925.",
    specs: {
      wingspan: '33.6 m',
      length: '33.4 m',
      height: '8.4 m',
      payload: '19 passagers'
    }
  },
  {
    id: 'hondajet-elite',
    name: 'HondaJet Elite II',
    category: 'Private Executive Aircraft',
    role: 'Jet d\'affaires léger',
    manufacturer: 'Honda Aircraft',
    country: 'Japon/USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs sur pylônes au-dessus de l\'aile",
      "Nez en fuseau",
      "Peinture bicolore"
    ],
    description: "Jet léger innovant avec moteurs montés sur les ailes pour plus d\'espace.",
    specs: {
      wingspan: '12.1 m',
      length: '13.0 m',
      height: '4.5 m',
      payload: '6 passagers'
    }
  },
  {
    id: 'vision-sf50',
    name: 'Cirrus Vision SF50',
    category: 'Private Executive Aircraft',
    role: 'Jet personnel léger',
    manufacturer: 'Cirrus Aircraft',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Moteur unique sur le dos",
      "Queue en V",
      "Grande verrière panoramique"
    ],
    description: "Premier jet civil monoréacteur équipé d\'un parachute de cellule.",
    specs: {
      wingspan: '11.8 m',
      length: '9.4 m',
      height: '3.3 m',
      payload: '7 passagers'
    }
  },
  {
    id: 'sr22-g6',
    name: 'Cirrus SR22T G6',
    category: 'Private Light Aircraft',
    role: 'Avion de tourisme moderne',
    manufacturer: 'Cirrus Aircraft',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Train fixe caréné",
      "Portes papillon",
      "Phares LED en bout d\'aile"
    ],
    description: "L\'avion monomoteur le plus vendu au monde avec parachute intégré.",
    specs: {
      wingspan: '11.7 m',
      length: '7.9 m',
      height: '2.7 m',
      payload: '500 kg'
    }
  },
  {
    id: 'aw139-leonardo',
    name: 'Leonardo AW139',
    category: 'Helicopters',
    role: 'Transport utilitaire et offshore',
    manufacturer: 'Leonardo',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor à 5 pales",
      "Train rentrant",
      "Stabilisateurs horizontaux médians"
    ],
    description: "Hélicoptère moyen polyvalent leader mondial de sa catégorie.",
    specs: {
      wingspan: '13.8 m',
      length: '16.7 m',
      height: '5.0 m',
      payload: '3 000 kg'
    }
  },
  {
    id: 'ka52-alligator',
    name: 'Kamov Ka-52 Alligator',
    category: 'Helicopters',
    role: 'Hélicoptère d\'attaque',
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotors coaxiaux (pas de rotor arrière)",
      "Sièges côte à côte",
      "Nez massif avec optiques"
    ],
    description: "Hélicoptère d\'attaque russe avec rotors coaxiaux et sièges éjectables.",
    specs: {
      wingspan: '14.5 m',
      length: '16.0 m',
      height: '4.9 m',
      payload: '2 000 kg'
    }
  },
  {
    id: 'h145-airbus',
    name: 'Airbus Helicopters H145',
    category: 'Helicopters',
    role: 'Transport et secours',
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor de queue Fenestron",
      "Nez vitré",
      "Rotor à 4 ou 5 pales"
    ],
    description: "Hélicoptère biturbine polyvalent très utilisé pour le secours médical.",
    specs: {
      wingspan: '11.0 m',
      length: '13.0 m',
      height: '3.5 m',
      payload: '1 900 kg'
    }
  },
  {
    id: 'aw101-merlin',
    name: 'Leonardo AW101 Merlin',
    category: 'Helicopters',
    role: 'Transport lourd et ASW',
    manufacturer: 'Leonardo',
    country: 'UK/Italie',
    engineType: 'Turbine',
    enginesCount: 3,
    recognitionTips: [
      "Trois moteurs",
      "Grand fuselage avec rampe",
      "Rotor à 5 pales"
    ],
    description: "Hélicoptère trimoteur massif pour transport de troupes et lutte maritime.",
    specs: {
      wingspan: '18.6 m',
      length: '22.8 m',
      height: '6.6 m',
      payload: '5 000 kg'
    }
  },
  {
    id: 'ch53k-king',
    name: 'Sikorsky CH-53K King Stallion',
    category: 'Helicopters',
    role: 'Transport lourd',
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 3,
    recognitionTips: [
      "Fuselage massif",
      "Rotor principal à 7 pales",
      "Queue très haute"
    ],
    description: "L\'hélicoptère de transport le plus puissant de l\'armée américaine.",
    specs: {
      wingspan: '24.0 m',
      length: '30.2 m',
      height: '8.5 m',
      payload: '15 900 kg'
    }
  },
  {
    id: 'v280-valor',
    name: 'Bell V-280 Valor',
    category: 'Helicopters',
    role: 'Convertible de transport',
    manufacturer: 'Bell',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotors basculants en bout d\'aile",
      "Queue en V",
      "Moteurs fixes (seuls les rotors pivotent)"
    ],
    description: "Aéronef à rotors basculants choisi pour remplacer le Black Hawk.",
    specs: {
      wingspan: '24.9 m',
      length: '15.4 m',
      height: '7.0 m',
      payload: '14 troupes'
    }
  },
  {
    id: 'sb1-defiant',
    name: 'Sikorsky-Boeing SB-1 Defiant',
    category: 'Helicopters',
    role: 'Transport haute vitesse',
    manufacturer: 'Sikorsky/Boeing',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotors coaxiaux rigides",
      "Hélice propulsive arrière",
      "Design aérodynamique"
    ],
    description: "Hélicoptère expérimental avec rotors coaxiaux et hélice propulsive arrière.",
    specs: {
      wingspan: '16.0 m',
      length: 'N/A',
      height: 'N/A',
      payload: '12 troupes'
    }
  },
  {
    id: 'mq25-stingray',
    name: 'Boeing MQ-25 Stingray',
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: 'Drone de ravitaillement',
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Fuselage plat et furtif",
      "Perche de ravitaillement sous aile",
      "Entrée d\'air sur le dessus"
    ],
    description: "Drone embarqué sur porte-avions pour ravitailler les chasseurs en vol.",
    specs: {
      wingspan: '22.9 m',
      length: '15.5 m',
      height: '3.0 m',
      payload: '6 800 kg fuel'
    }
  },
  {
    id: 'rq4-global-hawk',
    name: 'Northrop Grumman RQ-4',
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: 'Surveillance stratégique',
    manufacturer: 'Northrop Grumman',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Nez en tête de baleine",
      "Ailes très longues",
      "Moteur sur la queue"
    ],
    description: "Drone haute altitude capable de surveiller de vastes zones pendant 24h.",
    specs: {
      wingspan: '39.9 m',
      length: '14.5 m',
      height: '4.7 m',
      payload: '1 360 kg'
    }
  },
  {
    id: 'neuron-dassault',
    name: 'Dassault nEUROn',
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: 'Drone de combat furtif',
    manufacturer: 'Dassault',
    country: 'Europe',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Aile volante pure sans dérive",
      "Entrée d\'air sur le dessus",
      "Silhouette triangulaire"
    ],
    description: "Démonstrateur européen pour les futurs systèmes de combat aérien furtifs.",
    specs: {
      wingspan: '12.5 m',
      length: '9.2 m',
      height: 'N/A',
      payload: 'Armes internes'
    }
  },
  {
    id: 'f18-block3',
    name: "Boeing F/A-18E/F Block III",
    category: 'Combat Aircraft',
    role: "Chasseur multirôle embarqué",
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Réservoirs sur le dessus du fuselage",
      "Grand écran tactile unique en cockpit",
      "Signature radar réduite"
    ],
    description: "Version la plus avancée du Super Hornet avec réservoirs conformes et cockpit à écran large.",
    specs: {
      wingspan: '13.6 m',
      length: '18.3 m',
      height: '4.9 m',
      payload: '8 050 kg'
    }
  },
  {
    id: 'j31-gyrfalcon',
    name: "Shenyang FC-31 Gyrfalcon",
    category: 'Combat Aircraft',
    role: "Chasseur furtif multirôle",
    manufacturer: 'Shenyang Aircraft',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette angulaire type F-35",
      "Double dérive inclinée",
      "Deux moteurs à l'arrière"
    ],
    description: "Chasseur furtif de cinquième génération conçu pour l'exportation et les futurs porte-avions chinois.",
    specs: {
      wingspan: '11.5 m',
      length: '17.3 m',
      height: '4.8 m',
      payload: '8 000 kg'
    }
  },
  {
    id: 'kaan-tfx',
    name: "TAI Kaan (TF-X)",
    category: 'Combat Aircraft',
    role: "Chasseur furtif de supériorité",
    manufacturer: 'TAI',
    country: 'Turquie',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette proche du F-22",
      "Nez très long",
      "Entrées d'air latérales en losange"
    ],
    description: "Le projet aéronautique le plus ambitieux de Turquie pour un chasseur de 5ème génération.",
    specs: {
      wingspan: '14.0 m',
      length: '21.0 m',
      height: '6.0 m',
      payload: 'Classifié'
    }
  },
  {
    id: 'y20-kunpeng',
    name: "Xian Y-20 Kunpeng",
    category: 'Combat Support Aircraft',
    role: "Transport militaire lourd",
    manufacturer: 'Xian Aircraft',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 4,
    recognitionTips: [
      "Quatre moteurs à réaction",
      "Queue en T massive",
      "Nez arrondi et fuselage large"
    ],
    description: "Surnommé Chubby Girl en Chine c'est l'équivalent chinois du C-17 américain.",
    specs: {
      wingspan: '45.0 m',
      length: '47.0 m',
      height: '15.0 m',
      payload: '66 000 kg'
    }
  },
  {
    id: 'y9-shaanxi',
    name: "Shaanxi Y-9",
    category: 'Combat Support Aircraft',
    role: "Transport moyen polyvalent",
    manufacturer: 'Shaanxi Aircraft',
    country: 'Chine',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Hélices à 6 pales",
      "Petites dérives sur les stabilisateurs horizontaux",
      "Nez vitré"
    ],
    description: "Version allongée et modernisée du Y-8 (basé sur l'An-12) avec de nouvelles hélices.",
    specs: {
      wingspan: '38.0 m',
      length: '36.0 m',
      height: '11.3 m',
      payload: '20 000 kg'
    }
  },
  {
    id: 'at6-wolverine',
    name: "Beechcraft AT-6 Wolverine",
    category: 'Combat Aircraft',
    role: "Attaque légère et reconnaissance",
    manufacturer: 'Textron Aviation',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Turbopropulseur monomoteur",
      "Pylônes d'armement sous les ailes",
      "Cockpit biplace en tandem"
    ],
    description: "Version armée du célèbre entraîneur T-6 Texan II pour les missions d'appui rapproché.",
    specs: {
      wingspan: '10.4 m',
      length: '10.2 m',
      height: '3.3 m',
      payload: '1 800 kg'
    }
  },
  {
    id: 'wing-loong-ii',
    name: "AVIC Wing Loong II",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat MALE",
    manufacturer: 'AVIC',
    country: 'Chine',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Ressemble au MQ-9 Reaper",
      "Dérives de queue en V pointant vers le haut",
      "Antenne satellite sur le dessus du nez"
    ],
    description: "Drone de combat longue endurance très exporté notamment au Moyen-Orient.",
    specs: {
      wingspan: '20.5 m',
      length: '11.0 m',
      height: '4.1 m',
      payload: '480 kg'
    }
  },
  {
    id: 'ch5-rainbow',
    name: "CASC CH-5 Rainbow",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat longue endurance",
    manufacturer: 'CASC',
    country: 'Chine',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Envergure imposante",
      "Empennage en V",
      "Train d'atterrissage escamotable"
    ],
    description: "Drone capable d'emporter une charge d'armement impressionnante pour sa catégorie.",
    specs: {
      wingspan: '21.0 m',
      length: '11.0 m',
      height: '4.0 m',
      payload: '1 200 kg'
    }
  },
  {
    id: 'mq1c-gray-eagle',
    name: "General Atomics MQ-1C Gray Eagle",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat tactique",
    manufacturer: 'General Atomics',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Moteur diesel à l'arrière",
      "Dérive verticale pointant vers le bas",
      "Silhouette fine"
    ],
    description: "Évolution du Predator pour l'US Army avec une endurance accrue et des missiles Hellfire.",
    specs: {
      wingspan: '17.0 m',
      length: '8.5 m',
      height: '2.1 m',
      payload: '360 kg'
    }
  },
  {
    id: 'heron-tp',
    name: "IAI Heron TP (Eitan)",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de surveillance stratégique",
    manufacturer: 'IAI',
    country: 'Israël',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Taille d'un avion régional",
      "Double poutre de queue",
      "Moteur propulsif arrière"
    ],
    description: "L'un des plus grands drones au monde capable de voler au-dessus du trafic civil.",
    specs: {
      wingspan: '26.0 m',
      length: '14.0 m',
      height: '3.0 m',
      payload: '2 700 kg'
    }
  },
  {
    id: 'hermes-900',
    name: "Elbit Hermes 900",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Surveillance et reconnaissance MALE",
    manufacturer: 'Elbit Systems',
    country: 'Israël',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Nez bulbeux avec tourelle optique dessous",
      "Ailes hautes et fines",
      "Empennage en V"
    ],
    description: "Drone polyvalent utilisé pour des missions de renseignement et de patrouille maritime.",
    specs: {
      wingspan: '15.0 m',
      length: '8.3 m',
      height: 'N/A',
      payload: '350 kg'
    }
  },
  {
    id: 'akinci-tiha',
    name: "Baykar Bayraktar Akıncı",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat stratégique",
    manufacturer: 'Baykar',
    country: 'Turquie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Ailes en forme de mouette",
      "Deux turbopropulseurs",
      "Silhouette massive et élégante"
    ],
    description: "Drone bimoteur capable d'emporter des missiles de croisière et des bombes lourdes.",
    specs: {
      wingspan: '20.0 m',
      length: '12.2 m',
      height: '4.1 m',
      payload: '1 350 kg'
    }
  },
  {
    id: 'kizilelma-mius',
    name: "Baykar Bayraktar Kızılelma",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat furtif",
    manufacturer: 'Baykar',
    country: 'Turquie',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Plans canards à l'avant",
      "Double dérive inclinée",
      "Pas de verrière cockpit"
    ],
    description: "Drone supersonique conçu pour le combat aérien et les opérations sur porte-avions.",
    specs: {
      wingspan: '10.0 m',
      length: '14.7 m',
      height: '3.3 m',
      payload: '1 500 kg'
    }
  },
  {
    id: 'mq28-ghost-bat',
    name: "Boeing MQ-28 Ghost Bat",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone ailier fidèle",
    manufacturer: 'Boeing Australia',
    country: 'Australie',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Nez interchangeable",
      "Entrées d'air furtives",
      "Double dérive arrière"
    ],
    description: "Drone utilisant l'intelligence artificielle pour accompagner les avions de chasse pilotés.",
    specs: {
      wingspan: '7.3 m',
      length: '11.7 m',
      height: 'N/A',
      payload: 'N/A'
    }
  },
  {
    id: 'x47b-ucas',
    name: "Northrop Grumman X-47B",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Démonstrateur de drone embarqué",
    manufacturer: 'Northrop Grumman',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Aile volante pure en forme de losange",
      "Train d'atterrissage massif",
      "Pas de dérive verticale"
    ],
    description: "Premier drone à avoir opéré de manière autonome depuis un porte-avions.",
    specs: {
      wingspan: '18.9 m',
      length: '11.6 m',
      height: '3.1 m',
      payload: '2 000 kg'
    }
  },
  {
    id: 'arj21-700',
    name: "COMAC ARJ21-700",
    category: 'Civil Jet Airliners',
    role: "Jet régional",
    manufacturer: 'COMAC',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs à l'arrière",
      "Queue en T",
      "Nez profilé"
    ],
    description: "Premier jet de ligne régional moderne développé par la Chine.",
    specs: {
      wingspan: '27.3 m',
      length: '33.5 m',
      height: '8.4 m',
      payload: '90 passagers'
    }
  },
  {
    id: 'il114-300',
    name: "Ilyushin Il-114-300",
    category: 'Civil Turboprop Airliners',
    role: "Transport régional",
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Hélices à 6 pales",
      "Ailes basses",
      "Fuselage cylindrique classique"
    ],
    description: "Version modernisée du Il-114 pour les liaisons régionales russes difficiles.",
    specs: {
      wingspan: '30.0 m',
      length: '26.9 m',
      height: '9.2 m',
      payload: '68 passagers'
    }
  },
  {
    id: 'e175-embraer',
    name: "Embraer E175",
    category: 'Civil Jet Airliners',
    role: "Jet régional",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs sous les ailes",
      "Winglets larges",
      "Configuration 2+2 en cabine"
    ],
    description: "Version courte de la famille E-Jet très populaire aux États-Unis.",
    specs: {
      wingspan: '26.0 m',
      length: '31.7 m',
      height: '9.7 m',
      payload: '78 passagers'
    }
  },
  {
    id: 'e190-e2',
    name: "Embraer E190-E2",
    category: 'Civil Jet Airliners',
    role: "Moyen-courrier monocouloir",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs de grand diamètre",
      "Train d'atterrissage complexe",
      "Pas de winglets (ailes biseautées)"
    ],
    description: "Version remotorisée et plus efficace de l'E190 original avec de nouvelles ailes.",
    specs: {
      wingspan: '33.7 m',
      length: '36.2 m',
      height: '11.0 m',
      payload: '114 passagers'
    }
  },
  {
    id: 'mrj90-mitsubishi',
    name: "Mitsubishi SpaceJet M90",
    category: 'Civil Jet Airliners',
    role: "Jet régional",
    manufacturer: 'Mitsubishi Aircraft',
    country: 'Japon',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Nez très aérodynamique",
      "Moteurs suspendus bas",
      "Silhouette très élancée"
    ],
    description: "Tentative japonaise de jet régional moderne (programme suspendu en 2023).",
    specs: {
      wingspan: '29.2 m',
      length: '35.8 m',
      height: '10.4 m',
      payload: '88 passagers'
    }
  },
  {
    id: 'citation-latitude',
    name: "Cessna Citation Latitude",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires moyen",
    manufacturer: 'Textron Aviation',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Nez arrondi",
      "Fenêtres cockpit larges",
      "Queue en T"
    ],
    description: "Jet d'affaires connu pour son grand confort et son plancher plat.",
    specs: {
      wingspan: '22.1 m',
      length: '19.0 m',
      height: '6.4 m',
      payload: '9 passagers'
    }
  },
  {
    id: 'citation-longitude',
    name: "Cessna Citation Longitude",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires super-médium",
    manufacturer: 'Textron Aviation',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Grands winglets verticaux",
      "Moteurs à l'arrière",
      "Queue en T"
    ],
    description: "Version allongée de la gamme Citation avec une plus grande autonomie.",
    specs: {
      wingspan: '20.4 m',
      length: '22.3 m',
      height: '5.9 m',
      payload: '12 passagers'
    }
  },
  {
    id: 'challenger-350',
    name: "Bombardier Challenger 350",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires super-médium",
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Winglets inclinés vers l'extérieur",
      "Moteurs imposants",
      "Fenêtres de cabine carrées"
    ],
    description: "Amélioration du Challenger 300 avec de nouveaux winglets et moteurs.",
    specs: {
      wingspan: '21.0 m',
      length: '20.9 m',
      height: '6.1 m',
      payload: '10 passagers'
    }
  },
  {
    id: 'falcon-6x',
    name: "Dassault Falcon 6X",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires large cabine",
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Bimoteur à l'arrière",
      "Nez court",
      "Hublot de toit (SkyLight)"
    ],
    description: "Jet d'affaires avec la cabine la plus haute et la plus large du marché.",
    specs: {
      wingspan: '25.9 m',
      length: '25.7 m',
      height: '7.5 m',
      payload: '16 passagers'
    }
  },
  {
    id: 'phenom-100',
    name: "Embraer Phenom 100",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires très léger (VLJ)",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Petite taille",
      "Pare-brise panoramique",
      "Porte d'entrée avec escalier intégré"
    ],
    description: "L'un des jets privés les plus populaires pour les propriétaires-pilotes.",
    specs: {
      wingspan: '12.3 m',
      length: '12.8 m',
      height: '4.4 m',
      payload: '4-6 passagers'
    }
  },
  {
    id: 'phenom-300',
    name: "Embraer Phenom 300",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires léger",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Ailes en flèche avec winglets élégants",
      "Moteurs à l'arrière",
      "Nez pointu"
    ],
    description: "Le jet léger le plus vendu au monde depuis une décennie.",
    specs: {
      wingspan: '16.2 m',
      length: '15.9 m',
      height: '5.0 m',
      payload: '9 passagers'
    }
  },
  {
    id: 'h175-airbus',
    name: "Airbus Helicopters H175",
    category: 'Helicopters',
    role: "Transport super-médium",
    manufacturer: 'Airbus',
    country: 'France/Chine',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez court et bulbeux",
      "Rotor à 5 pales",
      "Très grandes vitres de cabine"
    ],
    description: "Développé avec la Chine c'est l'hélicoptère de référence pour l'offshore pétrolier.",
    specs: {
      wingspan: '14.8 m',
      length: '15.7 m',
      height: '5.3 m',
      payload: '18 passagers'
    }
  },
  {
    id: 'aw169-leonardo',
    name: "Leonardo AW169",
    category: 'Helicopters',
    role: "Hélicoptère utilitaire léger",
    manufacturer: 'Leonardo',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor à 5 pales",
      "Train rétractable tricycle",
      "Stabilisateurs horizontaux en milieu de queue"
    ],
    description: "Version moderne et compacte de l'AW139 très utilisé pour le secours médical.",
    specs: {
      wingspan: '12.1 m',
      length: '14.7 m',
      height: '4.5 m',
      payload: '10 passagers'
    }
  },
  {
    id: 'aw189-leonardo',
    name: "Leonardo AW189",
    category: 'Helicopters',
    role: "Transport civil lourd",
    manufacturer: 'Leonardo',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette allongée de l'AW139",
      "Fuselage large",
      "Moteurs puissants"
    ],
    description: "Hélicoptère optimisé pour les longues distances en mer et le sauvetage.",
    specs: {
      wingspan: '14.6 m',
      length: '17.6 m',
      height: '5.1 m',
      payload: '19 passagers'
    }
  },
  {
    id: 'bell-525',
    name: "Bell 525 Relentless",
    category: 'Helicopters',
    role: "Transport super-médium",
    manufacturer: 'Bell Textron',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez aérodynamique type dauphin",
      "Rotor à 5 pales",
      "Cockpit très vitré"
    ],
    description: "Premier hélicoptère civil équipé de commandes de vol électriques fly-by-wire.",
    specs: {
      wingspan: '16.6 m',
      length: '16.4 m',
      height: '4.5 m',
      payload: '16-20 passagers'
    }
  },
  {
    id: 'z10-caic',
    name: "CAIC Z-10",
    category: 'Helicopters',
    role: "Hélicoptère d'attaque lourd",
    manufacturer: 'CAIC',
    country: 'Chine',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez très fin et anguleux",
      "Train d'atterrissage fixe",
      "Cockpit en tandem"
    ],
    description: "Le premier hélicoptère d'attaque moderne de l'armée chinoise.",
    specs: {
      wingspan: '12.0 m',
      length: '14.1 m',
      height: '3.9 m',
      payload: '1 500 kg'
    }
  },
  {
    id: 'hal-lch-prachand',
    name: "HAL Prachand",
    category: 'Helicopters',
    role: "Hélicoptère de combat léger",
    manufacturer: 'HAL',
    country: 'Inde',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage très étroit",
      "Train tricycle fixe",
      "Nez équipé d'un canon mobile"
    ],
    description: "Seul hélicoptère d'attaque capable d'opérer à très haute altitude dans l'Himalaya.",
    specs: {
      wingspan: '13.2 m',
      length: '15.8 m',
      height: '4.7 m',
      payload: '700 kg'
    }
  },
  {
    id: 'aw159-wildcat',
    name: "Leonardo AW159 Wildcat",
    category: 'Helicopters',
    role: "Lutte anti-surface maritime",
    manufacturer: 'Leonardo',
    country: 'UK',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez plat avec capteurs radar",
      "Fuselage angulaire",
      "Extrémités de pales courbées"
    ],
    description: "Evolution technologique du célèbre Lynx pour la Royal Navy.",
    specs: {
      wingspan: '12.8 m',
      length: '15.2 m',
      height: '3.7 m',
      payload: 'N/A'
    }
  },
  {
    id: 'h145-m',
    name: "Airbus Helicopters H145M",
    category: 'Helicopters',
    role: "Hélicoptère militaire polyvalent",
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor de queue Fenestron",
      "Nez vitré",
      "Poutre de queue fine"
    ],
    description: "Version militaire du H145 capable d'emporter le système d'armement HForce.",
    specs: {
      wingspan: '11.0 m',
      length: '13.0 m',
      height: '3.5 m',
      payload: '1 900 kg'
    }
  },
  {
    id: 'be200-beriev',
    name: "Beriev Be-200 Altair",
    category: 'Civil Utility',
    role: "Avion amphibie bombardier d'eau",
    manufacturer: 'Beriev',
    country: 'Russie',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs sur le dessus des ailes",
      "Fuselage en forme de coque",
      "Amphibie"
    ],
    description: "Le seul avion à réaction amphibie au monde spécialisé dans les feux de forêt.",
    specs: {
      wingspan: '32.7 m',
      length: '32.0 m',
      height: '8.9 m',
      payload: '12 000 kg eau'
    }
  },
  {
    id: 'ag600-kunlong',
    name: "AVIC AG600 Kunlong",
    category: 'Civil Utility',
    role: "Hydravion géant",
    manufacturer: 'AVIC',
    country: 'Chine',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Taille gigantesque",
      "Quatre moteurs à hélices",
      "Fuselage coque massif"
    ],
    description: "Le plus grand hydravion au monde conçu pour le sauvetage et les incendies.",
    specs: {
      wingspan: '38.8 m',
      length: '36.9 m',
      height: '12.1 m',
      payload: '50 000 kg max'
    }
  },
  {
    id: 'stratolaunch-roc',
    name: "Scaled Composites Stratolaunch",
    category: 'Civil Utility',
    role: "Lancement spatial",
    manufacturer: 'Scaled Composites',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 6,
    recognitionTips: [
      "Double fuselage",
      "Six moteurs",
      "Envergure plus longue qu'un terrain de foot"
    ],
    description: "L'avion à la plus grande envergure au monde avec deux fuselages.",
    specs: {
      wingspan: '117.0 m',
      length: '73.0 m',
      height: '15.0 m',
      payload: '250 000 kg'
    }
  },
  {
    id: 'panthera-pipistrel',
    name: "Pipistrel Panthera",
    category: 'Private Light Aircraft',
    role: "Avion de tourisme rapide",
    manufacturer: 'Pipistrel',
    country: 'Slovénie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Design de voiture de sport",
      "Train rentrant",
      "Empennage en croix"
    ],
    description: "Un avion de voyage ultra-moderne au design fluide et aérodynamique.",
    specs: {
      wingspan: '10.9 m',
      length: '8.1 m',
      height: '2.2 m',
      payload: '500 kg'
    }
  },
  {
    id: 'tb3-bayraktar',
    name: "Baykar Bayraktar TB3",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat naval",
    manufacturer: 'Baykar',
    country: 'Turquie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ailes repliables",
      "Train d'atterrissage renforcé",
      "Empennage en V inversé"
    ],
    description: "Version navale du célèbre TB2 dotée d'ailes repliables pour opérer depuis des porte-aéronefs.",
    specs: {
      wingspan: '14.0 m',
      length: '8.3 m',
      height: '2.6 m',
      payload: '280 kg'
    }
  },
  {
    id: 'aksungur-tai',
    name: "TAI Aksungur",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de patrouille et combat",
    manufacturer: 'TAI',
    country: 'Turquie',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Double poutre de queue",
      "Deux moteurs à hélices",
      "Grande envergure"
    ],
    description: "Drone à haute endurance capable d'emporter des bouées acoustiques pour la lutte anti-sous-marine.",
    specs: {
      wingspan: '24.0 m',
      length: '12.0 m',
      height: '3.1 m',
      payload: '750 kg'
    }
  },
  {
    id: 'mq9b-skyguardian',
    name: "General Atomics MQ-9B SkyGuardian",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Surveillance et frappe MALE",
    manufacturer: 'General Atomics',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Bout d'ailes relevés (winglets)",
      "Nez bulbeux sans cockpit",
      "Moteur propulsif arrière"
    ],
    description: "Version certifiée pour voler dans l'espace aérien civil avec une autonomie de plus de 40 heures.",
    specs: {
      wingspan: '24.0 m',
      length: '11.7 m',
      height: '3.9 m',
      payload: '2 150 kg'
    }
  },
  {
    id: 'mojave-ga',
    name: "General Atomics Mojave",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat STOL",
    manufacturer: 'General Atomics',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Pneus basse pression massifs",
      "Ailes à haute portance",
      "Pylônes d'armement proéminents"
    ],
    description: "Drone capable de décoller et atterrir sur des distances très courtes ou des terrains non préparés.",
    specs: {
      wingspan: '16.0 m',
      length: '9.0 m',
      height: 'N/A',
      payload: '1 600 kg'
    }
  },
  {
    id: 'f15sa-advanced',
    name: "Boeing F-15SA Advanced",
    category: 'Combat Aircraft',
    role: "Chasseur multirôle lourd",
    manufacturer: 'Boeing',
    country: 'USA/Arabie Saoudite',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Deux moteurs massifs",
      "Cockpit biplace",
      "Nombreuses antennes sur le fuselage"
    ],
    description: "Variante sophistiquée du F-15 avec de nouveaux points d'emport d'armes et des commandes électriques.",
    specs: {
      wingspan: '13.1 m',
      length: '19.4 m',
      height: '5.6 m',
      payload: '13 000 kg'
    }
  },
  {
    id: 'mitsubishi-x2',
    name: "Mitsubishi X-2 Shinshin",
    category: 'Combat Aircraft',
    role: "Démonstrateur furtif",
    manufacturer: 'Mitsubishi',
    country: 'Japon',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Petite taille",
      "Tuyères de moteur en 'pétales'",
      "Double dérive inclinée"
    ],
    description: "Appareil expérimental japonais servant à tester les technologies de furtivité et de poussée vectorielle.",
    specs: {
      wingspan: '9.1 m',
      length: '14.2 m',
      height: '4.5 m',
      payload: 'Prototype'
    }
  },
  {
    id: 'su30-mkk',
    name: "Sukhoi Su-30MKK",
    category: 'Combat Aircraft',
    role: "Chasseur de frappe maritime",
    manufacturer: 'Sukhoi',
    country: 'Russie/Chine',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Dérives verticales à sommet plat",
      "Grand cockpit biplace",
      "Absence de plans canards"
    ],
    description: "Version optimisée pour l'armée chinoise avec des capacités anti-navires et une dérive verticale plus haute.",
    specs: {
      wingspan: '14.7 m',
      length: '21.9 m',
      height: '6.4 m',
      payload: '8 000 kg'
    }
  },
  {
    id: 'a330-800-neo',
    name: "Airbus A330-800neo",
    category: 'Civil Jet Airliners',
    role: "Long-courrier gros-porteur",
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Masque noir de cockpit",
      "Grands Sharklets incurvés",
      "Moteurs Trent 7000 imposants"
    ],
    description: "Variante plus courte mais à plus long rayon d'action de la famille A330neo.",
    specs: {
      wingspan: '64.0 m',
      length: '58.8 m',
      height: '17.4 m',
      payload: '250 passagers'
    }
  },
  {
    id: '747-8f-freighter',
    name: "Boeing 747-8F",
    category: 'Civil Utility',
    role: "Transport de fret lourd",
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 4,
    recognitionTips: [
      "Bord de fuite de dérive dentelé",
      "Nez s'ouvrant vers le haut",
      "Quatre moteurs"
    ],
    description: "Version cargo du 747-8 dotée d'un nez relevable pour le chargement de pièces indivisibles.",
    specs: {
      wingspan: '68.4 m',
      length: '76.3 m',
      height: '19.4 m',
      payload: '132 000 kg'
    }
  },
  {
    id: 'crj1000-bombardier',
    name: "Bombardier CRJ-1000",
    category: 'Civil Jet Airliners',
    role: "Jet régional",
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage extrêmement long et fin",
      "Moteurs à l'arrière",
      "Ailes basses"
    ],
    description: "La version la plus longue de la famille CRJ conçue pour les lignes régionales à haute densité.",
    specs: {
      wingspan: '26.2 m',
      length: '39.1 m',
      height: '7.5 m',
      payload: '100 passagers'
    }
  },
  {
    id: 'atr72-600',
    name: "ATR 72-600",
    category: 'Civil Turboprop Airliners',
    role: "Transport régional",
    manufacturer: 'ATR',
    country: 'France/Italie',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Hélices à 6 pales",
      "Ailes hautes",
      "Train d'atterrissage dans des carénages latéraux"
    ],
    description: "Version modernisée avec un cockpit tout écran et des performances améliorées.",
    specs: {
      wingspan: '27.1 m',
      length: '27.2 m',
      height: '7.7 m',
      payload: '78 passagers'
    }
  },
  {
    id: 'skycourier-408',
    name: "Cessna 408 SkyCourier",
    category: 'Civil Turboprop Airliners',
    role: "Utilitaire et fret",
    manufacturer: 'Textron Aviation',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage de section carrée",
      "Ailes hautes et droites",
      "Train tricycle fixe"
    ],
    description: "Avion biturbopropulseur robuste conçu pour le transport de palettes de fret ou de passagers.",
    specs: {
      wingspan: '22.0 m',
      length: '16.7 m',
      height: '6.0 m',
      payload: '2 700 kg'
    }
  },
  {
    id: 'ma700-xian',
    name: "Xian MA700",
    category: 'Civil Turboprop Airliners',
    role: "Transport régional moderne",
    manufacturer: 'Xian Aircraft',
    country: 'Chine',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Hélices à 6 pales",
      "Nez très pointu",
      "Queue en T"
    ],
    description: "Nouvel avion de transport turbopropulseur chinois visant le marché international.",
    specs: {
      wingspan: '27.9 m',
      length: '30.5 m',
      height: '8.2 m',
      payload: '80 passagers'
    }
  },
  {
    id: 'h225m-caracal',
    name: "Airbus H225M Caracal",
    category: 'Helicopters',
    role: "Transport tactique et CSAR",
    manufacturer: 'Airbus Helicopters',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Perche de ravitaillement à l'avant",
      "Rotor à 5 pales",
      "Train d'atterrissage rétractable"
    ],
    description: "Hélicoptère militaire lourd capable de ravitaillement en vol pour des missions spéciales.",
    specs: {
      wingspan: '16.2 m',
      length: '19.5 m',
      height: '4.6 m',
      payload: '5 600 kg'
    }
  },
  {
    id: 'mh139-greywolf',
    name: "Boeing MH-139 Grey Wolf",
    category: 'Helicopters',
    role: "Protection de sites stratégiques",
    manufacturer: 'Boeing/Leonardo',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette lisse",
      "Rotor à 5 pales",
      "Capteurs optroniques sous le nez"
    ],
    description: "Basé sur l'AW139 cet appareil protège les sites de missiles nucléaires américains.",
    specs: {
      wingspan: '13.8 m',
      length: '16.7 m',
      height: '5.0 m',
      payload: '3 000 kg'
    }
  },
  {
    id: 'z19-blackshark',
    name: "Harbin Z-19",
    category: 'Helicopters',
    role: "Reconnaissance et attaque",
    manufacturer: 'Harbin Aircraft',
    country: 'Chine',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor de queue Fenestron",
      "Cockpit en tandem",
      "Train d'atterrissage fixe"
    ],
    description: "Hélicoptère léger d'accompagnement doté d'un rotor de queue caréné type Fenestron.",
    specs: {
      wingspan: '12.0 m',
      length: '12.0 m',
      height: '4.0 m',
      payload: 'N/A'
    }
  },
  {
    id: 'aw109-trekker',
    name: "Leonardo AW109 Trekker",
    category: 'Helicopters',
    role: "Utilitaire léger et médical",
    manufacturer: 'Leonardo',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Patins fixes",
      "Silhouette fuselée",
      "Deux turbines"
    ],
    description: "Variante de l'AW109 équipée de patins fixes au lieu de roues pour des terrains accidentés.",
    specs: {
      wingspan: '10.8 m',
      length: '12.9 m',
      height: '3.4 m',
      payload: '1 500 kg'
    }
  },
  {
    id: 'bell-429-globalranger',
    name: "Bell 429 GlobalRanger",
    category: 'Helicopters',
    role: "Transport et secours",
    manufacturer: 'Bell Textron',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor de queue à 4 pales",
      "Nez arrondi",
      "Portes arrières format 'clamshell'"
    ],
    description: "Hélicoptère léger biturbine moderne doté d'une cabine spacieuse à plancher plat.",
    specs: {
      wingspan: '11.0 m',
      length: '12.7 m',
      height: '4.0 m',
      payload: '1 200 kg'
    }
  },
  {
    id: 'mi28n-havoc',
    name: "Mil Mi-28N Havoc",
    category: 'Helicopters',
    role: "Attaque tout temps",
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez avec capteurs en boule",
      "Train fixe robuste",
      "Rotor de queue en X"
    ],
    description: "Hélicoptère d'attaque lourd spécialisé dans la chasse nocturne aux blindés.",
    specs: {
      wingspan: '17.2 m',
      length: '17.0 m',
      height: '3.8 m',
      payload: '2 300 kg'
    }
  },
  {
    id: 'g600-gulfstream',
    name: "Gulfstream G600",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires long-courrier",
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Hublots ovales larges",
      "Nez court",
      "Winglets verticaux élégants"
    ],
    description: "Jet d'affaires rapide doté d'une aile ultra-critique pour optimiser la consommation.",
    specs: {
      wingspan: '28.7 m',
      length: '29.3 m',
      height: '7.7 m',
      payload: '19 passagers'
    }
  },
  {
    id: 'challenger-3500',
    name: "Bombardier Challenger 3500",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires super-médium",
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Winglets imposants inclinés",
      "Moteurs à l'arrière",
      "Nez arrondi"
    ],
    description: "Evolution du Challenger 350 avec une cabine intelligente et un vol à zéro émission.",
    specs: {
      wingspan: '21.0 m',
      length: '20.9 m',
      height: '6.1 m',
      payload: '10 passagers'
    }
  },
  {
    id: 'global-5500',
    name: "Bombardier Global 5500",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires longue portée",
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Ailes fines et souples",
      "Moteurs à l'arrière",
      "Silhouette allongée"
    ],
    description: "Combinant l'aile du Global 6000 avec de nouveaux moteurs Rolls-Royce Pearl.",
    specs: {
      wingspan: '28.7 m',
      length: '29.5 m',
      height: '7.8 m',
      payload: '16 passagers'
    }
  },
  {
    id: 'sr20-g6-cirrus',
    name: "Cirrus SR20 G6",
    category: 'Private Light Aircraft',
    role: "Tourisme et entraînement",
    manufacturer: 'Cirrus Aircraft',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Train fixe caréné",
      "Portes papillon",
      "Système de parachute CAPS"
    ],
    description: "Version modernisée du SR20 avec le cockpit Perspective+ et des lumières Spectra.",
    specs: {
      wingspan: '11.7 m',
      length: '7.9 m',
      height: '2.7 m',
      payload: '470 kg'
    }
  },
  {
    id: 'v10-vulcanair',
    name: "Vulcanair V1.0",
    category: 'Private Light Aircraft',
    role: "Entraînement et loisir",
    manufacturer: 'Vulcanair',
    country: 'Italie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ailes hautes haubanées",
      "Train tricycle fixe",
      "Trois portes d'accès"
    ],
    description: "Alternative italienne au Cessna 172 avec une structure métallique robuste et 4 places.",
    specs: {
      wingspan: '10.0 m',
      length: '7.2 m',
      height: '2.3 m',
      payload: '400 kg'
    }
  },
  {
    id: 'p2012-traveller',
    name: "Tecnam P2012 Traveller",
    category: 'Civil Utility',
    role: "Transport régional et utilitaire",
    manufacturer: 'Tecnam',
    country: 'Italie',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Ailes hautes",
      "Moteurs à pistons carénés",
      "Train fixe"
    ],
    description: "Bimoteur conçu spécifiquement pour le transport régional de 9 passagers ou du fret médical.",
    specs: {
      wingspan: '14.0 m',
      length: '11.8 m',
      height: '4.4 m',
      payload: '1 400 kg'
    }
  },
  {
    id: 'kodiak-900',
    name: "Daher Kodiak 900",
    category: 'Civil Utility',
    role: "Utilitaire STOL rapide",
    manufacturer: 'Daher',
    country: 'USA/France',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Carénages de train intégrés",
      "Nez allongé",
      "Hélice à 5 pales"
    ],
    description: "Version allongée et plus rapide du Kodiak 100 avec des carénages de train aérodynamiques.",
    specs: {
      wingspan: '13.7 m',
      length: '11.4 m',
      height: '4.8 m',
      payload: '1 600 kg'
    }
  },
  {
    id: 't6c-texan-ii',
    name: "Beechcraft T-6C Texan II",
    category: 'Combat Training Aircraft',
    role: "Entraîneur turbopropulseur",
    manufacturer: 'Textron Aviation',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Cockpit biplace en tandem",
      "Hélice quadripale",
      "Verrière en bulle"
    ],
    description: "Variante du T-6 dotée d'ailes renforcées pour emporter des réservoirs externes ou des armes.",
    specs: {
      wingspan: '10.2 m',
      length: '10.2 m',
      height: '3.3 m',
      payload: 'N/A'
    }
  },
  {
    id: 'dart-550-diamond',
    name: "Diamond DART-550",
    category: 'Combat Training Aircraft',
    role: "Entraîneur acrobatique",
    manufacturer: 'Diamond Aircraft',
    country: 'Autriche',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Structure tout carbone",
      "Cockpit biplace en tandem",
      "Moteur turbopropulseur"
    ],
    description: "Avion d'entraînement entièrement en composite conçu pour la voltige et l'initiation.",
    specs: {
      wingspan: '11.8 m',
      length: '10.7 m',
      height: '3.4 m',
      payload: 'N/A'
    }
  },
  {
    id: 'pc21-pilatus',
    name: "Pilatus PC-21",
    category: 'Combat Training Aircraft',
    role: "Entraîneur avancé",
    manufacturer: 'Pilatus Aircraft',
    country: 'Suisse',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Ailes courtes à haute charge",
      "Hélice à 5 pales",
      "Verrière monobloc"
    ],
    description: "L'avion d'entraînement à hélice le plus performant simulant le comportement d'un jet.",
    specs: {
      wingspan: '9.1 m',
      length: '11.2 m',
      height: '3.7 m',
      payload: 'N/A'
    }
  },
  {
    id: 'm28-skytruck',
    name: "PZL Mielec M28 Skytruck",
    category: 'Civil Utility',
    role: "Transport STOL court",
    manufacturer: 'PZL Mielec',
    country: 'Pologne',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Double dérive verticale",
      "Ailes hautes haubanées",
      "Train tricycle fixe"
    ],
    description: "Avion robuste capable d'opérer sur des pistes de terre très courtes grâce à sa double dérive.",
    specs: {
      wingspan: '22.1 m',
      length: '13.1 m',
      height: '4.9 m',
      payload: '2 300 kg'
    }
  },
  {
    id: 'mc130j-commando',
    name: "Lockheed Martin MC-130J Commando II",
    category: 'Combat Support Aircraft',
    role: "Opérations spéciales et tanker",
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Sonde de ravitaillement",
      "Nombreux capteurs sur le nez",
      "Hélices à 6 pales"
    ],
    description: "Variante du C-130J spécialisée dans l'infiltration et le ravitaillement des hélicoptères.",
    specs: {
      wingspan: '40.4 m',
      length: '29.8 m',
      height: '11.8 m',
      payload: '19 000 kg'
    }
  },
  {
    id: 'aw149-leonardo',
    name: "Leonardo AW149",
    category: 'Helicopters',
    role: "Transport militaire moyen",
    manufacturer: 'Leonardo',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage large et anguleux",
      "Train rétractable robuste",
      "Rotor à 5 pales"
    ],
    description: "Hélicoptère multirôle conçu pour le transport de troupes et l'appui feu.",
    specs: {
      wingspan: '14.6 m',
      length: '17.6 m',
      height: '5.1 m',
      payload: '3 800 kg'
    }
  },
  {
    id: 'ec155-airbus',
    name: "Airbus H155 (ex-EC155)",
    category: 'Helicopters',
    role: "Transport VIP et service public",
    manufacturer: 'Airbus Helicopters',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor de queue Fenestron",
      "Nez pointu",
      "Rotor principal à 5 pales"
    ],
    description: "Evolution de la famille Dauphin avec une cabine agrandie et un rotor à 5 pales.",
    specs: {
      wingspan: '12.6 m',
      length: '14.3 m',
      height: '4.3 m',
      payload: '2 300 kg'
    }
  },
  {
    id: 'f15ia-israel',
    name: "Boeing F-15IA",
    category: 'Combat Aircraft',
    role: "Chasseur de supériorité avancé",
    manufacturer: 'Boeing',
    country: 'USA/Israël',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Dérives verticales",
      "Cockpit biplace",
      "Emports d'armes massifs"
    ],
    description: "Future variante israélienne basée sur le F-15EX avec des systèmes électroniques locaux.",
    specs: {
      wingspan: '13.1 m',
      length: '19.4 m',
      height: '5.6 m',
      payload: '13 300 kg'
    }
  },
  {
    id: 'aksungur-b-tai',
    name: "TAI Aksungur Block B",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat longue portée",
    manufacturer: 'TAI',
    country: 'Turquie',
    engineType: 'Piston',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs diesel jumeaux",
      "Poutres de queue reliées",
      "Tourelle optique centrale"
    ],
    description: "Variante améliorée pour l'attaque au sol avec des missiles guidés laser Teber.",
    specs: {
      wingspan: '24.2 m',
      length: '11.6 m',
      height: '3.1 m',
      payload: '750 kg'
    }
  },
  {
    id: 'scorpion-textron',
    name: "Textron Scorpion",
    category: 'Combat Aircraft',
    role: "Attaque légère et ISR",
    manufacturer: 'Textron AirLand',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Ailes droites",
      "Double dérive inclinée",
      "Entrées d'air latérales simples"
    ],
    description: "Jet de combat à bas coût conçu pour la surveillance et l'attaque légère.",
    specs: {
      wingspan: '14.4 m',
      length: '13.3 m',
      height: '4.3 m',
      payload: '2 800 kg'
    }
  },
  {
    id: 'p1-kawasaki',
    name: "Kawasaki P-1",
    category: 'Combat Support Aircraft',
    role: "Patrouille maritime et ASW",
    manufacturer: 'Kawasaki',
    country: 'Japon',
    engineType: 'Turbofan',
    enginesCount: 4,
    recognitionTips: [
      "Quatre moteurs à réaction",
      "Nez avec radars latéraux",
      "Longue perche MAD arrière"
    ],
    description: "Le seul avion moderne à 4 réacteurs conçu exclusivement pour la patrouille maritime.",
    specs: {
      wingspan: '35.4 m',
      length: '38.0 m',
      height: '12.1 m',
      payload: '9 000 kg'
    }
  },
  {
    id: 'tai-hurjet',
    name: "TAI Hürjet",
    category: 'Combat Training Aircraft',
    role: "Entraîneur supersonique et attaque",
    manufacturer: 'TAI',
    country: 'Turquie',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Nez pointu effilé",
      "Entrées d'air latérales sous les emplantures",
      "Double dérive arrière inclinée"
    ],
    description: "Premier avion de combat supersonique conçu en Turquie pour remplacer les T-38 et NF-5.",
    specs: {
      wingspan: '9.5 m',
      length: '13.6 m',
      height: '5.1 m',
      payload: '2 720 kg'
    }
  },
  {
    id: 'boeing-747-lcf',
    name: "Boeing 747 LCF Dreamlifter",
    category: 'Civil Utility',
    role: "Transport de pièces de fuselage",
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 4,
    recognitionTips: [
      "Fuselage supérieur énormément gonflé",
      "Queue pivotante pour le chargement",
      "Quatre moteurs sous les ailes"
    ],
    description: "Version modifiée du 747-400 utilisée exclusivement pour transporter les pièces du 787.",
    specs: {
      wingspan: '64.4 m',
      length: '71.7 m',
      height: '21.5 m',
      payload: '113 000 kg'
    }
  },
  {
    id: 'casa-c295',
    name: "Airbus C-295",
    category: 'Combat Support Aircraft',
    role: "Transport tactique et patrouille",
    manufacturer: 'Airbus (CASA)',
    country: 'Espagne',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage long et étroit",
      "Train d'atterrissage dans des carénages proéminents",
      "Rampe arrière"
    ],
    description: "Version allongée du CN-235 avec une plus grande capacité de charge et de nouveaux moteurs.",
    specs: {
      wingspan: '25.8 m',
      length: '24.5 m',
      height: '8.6 m',
      payload: '9 250 kg'
    }
  },
  {
    id: 'il76md-90a',
    name: "Ilyushin Il-76MD-90A",
    category: 'Combat Support Aircraft',
    role: "Transport lourd modernisé",
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Turbofan',
    enginesCount: 4,
    recognitionTips: [
      "Quatre moteurs à réaction",
      "Nez vitré pour le navigateur",
      "Train d'atterrissage multiple robuste"
    ],
    description: "Version profondément modernisée du Candid avec de nouveaux moteurs plus puissants et silencieux.",
    specs: {
      wingspan: '50.5 m',
      length: '46.6 m',
      height: '14.8 m',
      payload: '60 000 kg'
    }
  },
  {
    id: 'beechcraft-360',
    name: "Beechcraft King Air 360",
    category: 'Private Executive Aircraft',
    role: "Turbopropulseur utilitaire",
    manufacturer: 'Textron Aviation',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Bimoteur à hélices",
      "Nez pointu",
      "Winglets arrondis"
    ],
    description: "Version modernisée du légendaire King Air avec cabine pressurisée et avionique avancée.",
    specs: {
      wingspan: '17.7 m',
      length: '14.2 m',
      height: '4.5 m',
      payload: '2 300 kg'
    }
  },
  {
    id: 'pc12-ngx',
    name: "Pilatus PC-12 NGX",
    category: 'Civil Utility',
    role: "Turbopropulseur polyvalent",
    manufacturer: 'Pilatus',
    country: 'Suisse',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Hublots rectangulaires larges",
      "Hélice à 5 pales",
      "Queue en T"
    ],
    description: "Version la plus récente du PC-12 avec de nouveaux hublots plus grands et un moteur amélioré.",
    specs: {
      wingspan: '16.3 m',
      length: '14.4 m',
      height: '4.3 m',
      payload: '1 200 kg'
    }
  },
  {
    id: 'tbm-960',
    name: "Socata TBM 960",
    category: 'Private Executive Aircraft',
    role: "Turbopropulseur très rapide",
    manufacturer: 'DAHER',
    country: 'France',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Hélice à 5 pales",
      "Nez allongé",
      "Winglets en bout d'ailes"
    ],
    description: "Dernière évolution du TBM avec contrôle numérique du moteur (FADEC) et radar domestique.",
    specs: {
      wingspan: '12.8 m',
      length: '10.7 m',
      height: '4.4 m',
      payload: '640 kg'
    }
  },
  {
    id: 'bell-407-gxi',
    name: "Bell 407 GXi",
    category: 'Helicopters',
    role: "Hélicoptère utilitaire léger",
    manufacturer: 'Bell Textron',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor principal à 4 pales",
      "Silhouette classique Bell",
      "Train d'atterrissage à patins"
    ],
    description: "Version modernisée du 407 avec cockpit intégré G1000H et moteur plus performant.",
    specs: {
      wingspan: '10.7 m',
      length: '12.7 m',
      height: '3.3 m',
      payload: '1 100 kg'
    }
  },
  {
    id: 'tai-gokbey',
    name: "TAI Gökbey",
    category: 'Helicopters',
    role: "Hélicoptère utilitaire léger",
    manufacturer: 'TAI',
    country: 'Turquie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez arrondi massif",
      "Rotor principal à 5 pales",
      "Train d'atterrissage tricycle"
    ],
    description: "Hélicoptère biturbine de 6 tonnes conçu pour des missions civiles et militaires en Turquie.",
    specs: {
      wingspan: '13.2 m',
      length: '15.9 m',
      height: '5.0 m',
      payload: '2 000 kg'
    }
  },
  {
    id: 'ansat-kazan',
    name: "Kazan Ansat",
    category: 'Helicopters',
    role: "Hélicoptère léger polyvalent",
    manufacturer: 'Kazan Helicopters',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez vitré",
      "Rotor principal à 4 pales",
      "Portes de cabine larges"
    ],
    description: "Hélicoptère biturbine russe polyvalent utilisé pour l'entraînement et le secours.",
    specs: {
      wingspan: '11.5 m',
      length: '13.5 m',
      height: '3.5 m',
      payload: '1 200 kg'
    }
  },
  {
    id: 's97-raider',
    name: "Sikorsky S-97 Raider",
    category: 'Helicopters',
    role: "Hélicoptère d'attaque composé",
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotors coaxiaux rigides superposés",
      "Hélice propulsive à l'arrière",
      "Design futuriste plat"
    ],
    description: "Hélicoptère expérimental à rotors coaxiaux et hélice propulsive pour haute vitesse.",
    specs: {
      wingspan: '10.4 m',
      length: '11.0 m',
      height: 'N/A',
      payload: 'N/A'
    }
  },
  {
    id: 'bell-360-invictus',
    name: "Bell 360 Invictus",
    category: 'Helicopters',
    role: "Hélicoptère de reconnaissance",
    manufacturer: 'Bell Textron',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Fuselage très étroit et plat",
      "Rotor de queue Fenestron",
      "Cockpit en tandem"
    ],
    description: "Prototype furtif conçu pour la reconnaissance armée à grande vitesse pour l'US Army.",
    specs: {
      wingspan: '12.2 m',
      length: '13.4 m',
      height: 'N/A',
      payload: 'N/A'
    }
  },
  {
    id: 'ka226t',
    name: "Kamov Ka-226T",
    category: 'Helicopters',
    role: "Hélicoptère léger modulaire",
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotors coaxiaux superposés",
      "Pas de rotor de queue",
      "Cabine arrière de type 'pod'"
    ],
    description: "Hélicoptère sans rotor de queue doté d'une cabine arrière interchangeable selon la mission.",
    specs: {
      wingspan: '13.0 m',
      length: '8.1 m',
      height: '4.1 m',
      payload: '1 050 kg'
    }
  },
  {
    id: 'rq7-shadow',
    name: "AAI RQ-7 Shadow",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Reconnaissance tactique",
    manufacturer: 'Textron Systems',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Double poutre de queue",
      "Hélice propulsive",
      "Lancé par rampe"
    ],
    description: "Petit drone tactique utilisé par les armées de terre pour la surveillance du champ de bataille.",
    specs: {
      wingspan: '4.3 m',
      length: '3.4 m',
      height: '1.0 m',
      payload: '27 kg'
    }
  },
  {
    id: 'scaneagle-boeing',
    name: "Insitu ScanEagle",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Surveillance légère",
    manufacturer: 'Boeing / Insitu',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ailes en flèche avec winglets",
      "Absence de train d'atterrissage",
      "Caméra sous le nez"
    ],
    description: "Petit drone lancé par catapulte et récupéré par un crochet sur un câble (SkyHook).",
    specs: {
      wingspan: '3.1 m',
      length: '1.6 m',
      height: 'N/A',
      payload: '3.4 kg'
    }
  },
  {
    id: 'patroller-safran',
    name: "Safran Patroller",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone MALE de surveillance",
    manufacturer: 'Safran',
    country: 'France',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ailes très longues",
      "Radar ou boule optique sous le fuselage",
      "Hélice propulsive"
    ],
    description: "Drone de l'armée de terre française basé sur une cellule de motoplaneur pour la surveillance.",
    specs: {
      wingspan: '18.0 m',
      length: '8.5 m',
      height: 'N/A',
      payload: '250 kg'
    }
  },
  {
    id: 'eurodrone-male',
    name: "Airbus Eurodrone",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone MALE stratégique",
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Double moteur turbopropulseur propulsif",
      "Taille massive",
      "Empennage en T"
    ],
    description: "Futur drone européen de grande envergure pour des missions de surveillance et de frappe.",
    specs: {
      wingspan: '30.0 m',
      length: '16.0 m',
      height: '6.0 m',
      payload: '2 300 kg'
    }
  },
  {
    id: 'taranis-bae',
    name: "BAE Systems Taranis",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat furtif",
    manufacturer: 'BAE Systems',
    country: 'UK',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Aile volante pure en forme de triangle",
      "Entrée d'air sur le dessus",
      "Pas de dérive"
    ],
    description: "Démonstrateur technologique britannique de drone de combat furtif autonome.",
    specs: {
      wingspan: '10.0 m',
      length: '12.4 m',
      height: '4.0 m',
      payload: 'Interne'
    }
  },
  {
    id: 'vbat-martin',
    name: "Martin UAV V-BAT",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de surveillance VTOL",
    manufacturer: 'Martin UAV',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Hélice carénée à l'arrière",
      "Décollage vertical sur la queue",
      "Ailes droites"
    ],
    description: "Drone décollant verticalement sur sa queue avant de basculer en vol horizontal.",
    specs: {
      wingspan: '2.7 m',
      length: '2.4 m',
      height: 'N/A',
      payload: '3.6 kg'
    }
  },
  {
    id: 'xb1-boom',
    name: "Boom XB-1 Baby Boom",
    category: 'Civil Jet Airliners',
    role: "Démonstrateur supersonique",
    manufacturer: 'Boom Supersonic',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 3,
    recognitionTips: [
      "Fuselage très long et fin",
      "Ailes en delta",
      "Trois moteurs à l'arrière"
    ],
    description: "Avion d'essai tiers conçu pour tester les technologies du futur transport supersonique Overture.",
    specs: {
      wingspan: '5.2 m',
      length: '21.0 m',
      height: 'N/A',
      payload: 'Prototype'
    }
  },
  {
    id: 'x59-quesst',
    name: "Lockheed Martin X-59",
    category: 'Civil Jet Airliners',
    role: "Avion supersonique silencieux",
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Nez extrêmement long (un tiers de l'avion)",
      "Pas de vitre frontale de cockpit",
      "Aile delta"
    ],
    description: "Conçu par la NASA pour tester la réduction du bang supersonique au-dessus des villes.",
    specs: {
      wingspan: '9.0 m',
      length: '29.0 m',
      height: '4.3 m',
      payload: 'Expérimental'
    }
  },
  {
    id: 'f16v-viper',
    name: "Lockheed Martin F-16V Viper",
    category: 'Combat Aircraft',
    role: "Chasseur multirôle",
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Radar APG-83 dans le nez",
      "Réservoirs conformes optionnels",
      "Affichage central IPDG en cockpit"
    ],
    description: "La version la plus récente du F-16 équipée d'un radar AESA et d'une électronique de 5e génération.",
    specs: {
      wingspan: '9.5 m',
      length: '15.0 m',
      height: '4.9 m',
      payload: '7 700 kg'
    }
  },
  {
    id: 'j11d-flanker',
    name: "Shenyang J-11D",
    category: 'Combat Aircraft',
    role: "Chasseur de supériorité aérienne",
    manufacturer: 'Shenyang Aircraft',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Radar incliné vers le haut",
      "Perche de ravitaillement",
      "Absence de tube Pitot sur le nez"
    ],
    description: "Version chinoise améliorée du Flanker avec des matériaux composites et une signature radar réduite.",
    specs: {
      wingspan: '14.7 m',
      length: '21.9 m',
      height: '5.9 m',
      payload: '6 000 kg'
    }
  },
  {
    id: 'su30-mki-in',
    name: "Sukhoi Su-30MKI",
    category: 'Combat Aircraft',
    role: "Chasseur multirôle lourd",
    manufacturer: 'Sukhoi/HAL',
    country: 'Inde',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Plans canards à l'avant",
      "Tuyères de moteur orientables",
      "Grand cockpit biplace"
    ],
    description: "Version indienne très agile dotée de canards et d'une poussée vectorielle pour une maniabilité extrême.",
    specs: {
      wingspan: '14.7 m',
      length: '21.9 m',
      height: '6.4 m',
      payload: '8 000 kg'
    }
  },
  {
    id: 'a29b-super-tucano',
    name: "Embraer A-29B Super Tucano",
    category: 'Combat Aircraft',
    role: "Appui feu et COIN",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Hélice à 5 pales",
      "Longs échappements latéraux",
      "Cockpit blindé biplace"
    ],
    description: "Avion d'attaque léger robuste conçu pour opérer dans des environnements austères et tropicaux.",
    specs: {
      wingspan: '11.1 m',
      length: '11.3 m',
      height: '4.0 m',
      payload: '1 550 kg'
    }
  },
  {
    id: 'il78m-90a',
    name: "Ilyushin Il-78M-90A",
    category: 'Combat Support Aircraft',
    role: "Avion ravitailleur",
    manufacturer: 'Ilyushin',
    country: 'Russie',
    engineType: 'Turbofan',
    enginesCount: 4,
    recognitionTips: [
      "Quatre réacteurs PS-90A",
      "Pods de ravitaillement sous les ailes",
      "Nez vitré caractéristique"
    ],
    description: "Dernière variante du ravitailleur Il-78 avec de nouveaux moteurs et une structure renforcée.",
    specs: {
      wingspan: '50.5 m',
      length: '46.6 m',
      height: '14.8 m',
      payload: '126 000 kg fuel'
    }
  },
  {
    id: 'dart450-diamond',
    name: "Diamond DART-450",
    category: 'Combat Training Aircraft',
    role: "Entraîneur de voltige",
    manufacturer: 'Diamond Aircraft',
    country: 'Autriche',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Structure fine en carbone",
      "Cockpit tandem",
      "Hélice propulsive haute performance"
    ],
    description: "Avion d'entraînement entièrement en composite carbone pour une agilité maximale.",
    specs: {
      wingspan: '11.8 m',
      length: '10.8 m',
      height: '3.4 m',
      payload: 'N/A'
    }
  },
  {
    id: 'sonaca-200',
    name: "Sonaca 200",
    category: 'Private Light Aircraft',
    role: "Entraînement et loisir",
    manufacturer: 'Sonaca Aircraft',
    country: 'Belgique',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ailes basses",
      "Train tricycle fixe",
      "Verrière panoramique"
    ],
    description: "Avion biplace métallique moderne conçu pour la robustesse et la formation des pilotes.",
    specs: {
      wingspan: '9.2 m',
      length: '7.0 m',
      height: '2.6 m',
      payload: '230 kg'
    }
  },
  {
    id: 'cessna-162',
    name: "Cessna 162 Skycatcher",
    category: 'Private Light Aircraft',
    role: "Entraînement léger (LSA)",
    manufacturer: 'Cessna',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ailes hautes",
      "Portes ouvrant vers le haut",
      "Dérive verticale carrée"
    ],
    description: "Avion léger conçu pour moderniser l'entraînement initial chez Cessna (production arrêtée).",
    specs: {
      wingspan: '9.1 m',
      length: '6.9 m',
      height: '2.5 m',
      payload: '220 kg'
    }
  },
  {
    id: 'transition-terrafugia',
    name: "Terrafugia Transition",
    category: 'Private Light Aircraft',
    role: "Voiture volante",
    manufacturer: 'Terrafugia',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ailes repliables verticalement",
      "Double dérive arrière",
      "Look de voiture avec hélice propulsive"
    ],
    description: "Véhicule hybride capable de rouler sur route et de décoller depuis un aérodrome.",
    specs: {
      wingspan: '8.0 m',
      length: '6.0 m',
      height: '2.0 m',
      payload: '210 kg'
    }
  },
  {
    id: 's100-camcopter',
    name: "Schiebel Camcopter S-100",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone hélicoptère léger",
    manufacturer: 'Schiebel',
    country: 'Autriche',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Forme de goutte d'eau",
      "Rotor à deux pales",
      "Pas de train (posé sur le ventre ou patins)"
    ],
    description: "Petit drone hélicoptère utilisé mondialement pour la surveillance civile et militaire.",
    specs: {
      wingspan: '3.4 m',
      length: '3.1 m',
      height: '1.1 m',
      payload: '50 kg'
    }
  },
  {
    id: 'mq20-avenger',
    name: "General Atomics MQ-20 Avenger",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat furtif",
    manufacturer: 'General Atomics',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Entrée d'air sur le dessus",
      "Queue en V",
      "Pas d'hélice (réaction)"
    ],
    description: "Drone à réaction furtif conçu pour des missions de frappe rapide avec soute interne.",
    specs: {
      wingspan: '20.1 m',
      length: '13.4 m',
      height: 'N/A',
      payload: '2 900 kg'
    }
  },
  {
    id: 'harop-iai',
    name: "IAI Harop",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Munition téléopérée",
    manufacturer: 'IAI',
    country: 'Israël',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Forme canard (petites ailes avant)",
      "Hélice propulsive",
      "Lancé depuis un conteneur"
    ],
    description: "Drone kamikaze capable de rôder au-dessus d'une zone avant de frapper une cible radar.",
    specs: {
      wingspan: '3.0 m',
      length: '2.5 m',
      height: 'N/A',
      payload: '23 kg explosive'
    }
  },
  {
    id: 'falcon-2000lxs',
    name: "Dassault Falcon 2000LXS",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires long-courrier",
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Bimoteur à l'arrière",
      "Grands winglets incurvés",
      "Nez arrondi typique Falcon"
    ],
    description: "Version améliorée du 2000 avec des winglets et des capacités de piste courte exceptionnelles.",
    specs: {
      wingspan: '21.4 m',
      length: '20.2 m',
      height: '7.1 m',
      payload: '10 passagers'
    }
  },
  {
    id: 'g500-2014',
    name: "Gulfstream G500 (GVII)",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires haute performance",
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Sept hublots ovales par côté",
      "Dérive verticale effilée",
      "Moteurs Pratt & Whitney"
    ],
    description: "Remplaçant du G450 doté d'un cockpit à écrans tactiles et d'une vitesse de croisière élevée.",
    specs: {
      wingspan: '26.5 m',
      length: '27.8 m',
      height: '7.8 m',
      payload: '19 passagers'
    }
  },
  {
    id: 'lineage-1000',
    name: "Embraer Lineage 1000",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires ultra-large",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette de jet régional",
      "Hublots rectangulaires",
      "Moteurs sous les ailes"
    ],
    description: "Version exécutive de l'E190 offrant un espace intérieur massif divisé en plusieurs zones.",
    specs: {
      wingspan: '28.7 m',
      length: '36.2 m',
      height: '10.6 m',
      payload: '19 passagers'
    }
  },
  {
    id: 'cj4-citation',
    name: "Cessna Citation CJ4",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires léger",
    manufacturer: 'Textron Aviation',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Ailes en flèche",
      "Nez pointu",
      "Moteurs à l'arrière sans winglets verticaux"
    ],
    description: "Le plus grand et le plus performant des modèles de la gamme CitationJet (CE-525).",
    specs: {
      wingspan: '15.5 m',
      length: '16.3 m',
      height: '4.7 m',
      payload: '10 passagers'
    }
  },
  {
    id: 'e1000-epic',
    name: "Epic E1000",
    category: 'Private Executive Aircraft',
    role: "Turbopropulseur monomoteur",
    manufacturer: 'Epic Aircraft',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Fuselage très fluide en composite",
      "Pare-brise panoramique",
      "Hélice quadripale"
    ],
    description: "Monomoteur ultra-rapide entièrement en carbone conçu pour concurrencer les jets légers.",
    specs: {
      wingspan: '13.1 m',
      length: '10.9 m',
      height: '3.8 m',
      payload: '500 kg'
    }
  },
  {
    id: 'sr22t-cirrus',
    name: "Cirrus SR22T",
    category: 'Private Light Aircraft',
    role: "Monomoteur haute performance",
    manufacturer: 'Cirrus Aircraft',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Hélice tripale noire",
      "Prises d'air moteur proéminentes",
      "Train fixe caréné"
    ],
    description: "Version turbocompressée du SR22 permettant des vols à haute altitude avec parachute de cellule.",
    specs: {
      wingspan: '11.7 m',
      length: '7.9 m',
      height: '2.7 m',
      payload: '500 kg'
    }
  },
  {
    id: 'an158-antonov',
    name: "Antonov An-158",
    category: 'Civil Jet Airliners',
    role: "Jet régional allongé",
    manufacturer: 'Antonov',
    country: 'Ukraine',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs sous ailes hautes",
      "Winglets en bout d'aile",
      "Silhouette trapue"
    ],
    description: "Version allongée de l'An-148 conçue pour le transport régional de passagers.",
    specs: {
      wingspan: '28.9 m',
      length: '34.4 m',
      height: '8.6 m',
      payload: '99 passagers'
    }
  },
  {
    id: '737-900er',
    name: "Boeing 737-900ER",
    category: 'Civil Jet Airliners',
    role: "Moyen-courrier allongé",
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Deux sorties de secours derrière les ailes",
      "Fuselage très long",
      "Winglets classiques"
    ],
    description: "Variante à autonomie étendue du 737-900 capable de transporter plus de passagers.",
    specs: {
      wingspan: '35.8 m',
      length: '42.1 m',
      height: '12.5 m',
      payload: '215 passagers'
    }
  },
  {
    id: 'a321neo-acf',
    name: "Airbus A321neo ACF",
    category: 'Civil Jet Airliners',
    role: "Moyen-courrier flexible",
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Absence de porte devant l'aile",
      "Sorties de secours sur l'aile",
      "Moteurs imposants"
    ],
    description: "Variante de l'A321neo avec une nouvelle configuration de portes pour maximiser l'espace cabine.",
    specs: {
      wingspan: '35.8 m',
      length: '44.5 m',
      height: '11.8 m',
      payload: '240 passagers'
    }
  },
  {
    id: 'mh60r-seahawk',
    name: "Sikorsky MH-60R Seahawk",
    category: 'Helicopters',
    role: "Lutte anti-sous-marine",
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Radôme circulaire sous le nez",
      "Lance-bouées acoustiques latéral",
      "Train d'atterrissage arrière avancé"
    ],
    description: "Version 'Romeo' du Seahawk spécialisée dans la lutte sous-marine et de surface.",
    specs: {
      wingspan: '16.4 m',
      length: '19.8 m',
      height: '5.2 m',
      payload: 'N/A'
    }
  },
  {
    id: 'aw101-mk4',
    name: "Leonardo AW101 Merlin Mk4",
    category: 'Helicopters',
    role: "Transport de troupes amphibie",
    manufacturer: 'Leonardo',
    country: 'UK',
    engineType: 'Turbine',
    enginesCount: 3,
    recognitionTips: [
      "Peinture grise/verte commando",
      "Trois turbines",
      "Queue et rotor repliables"
    ],
    description: "Version optimisée pour les Royal Marines avec pales et queue repliables pour les navires.",
    specs: {
      wingspan: '18.6 m',
      length: '22.8 m',
      height: '6.6 m',
      payload: '5 000 kg'
    }
  },
  {
    id: 'bell-412epi',
    name: "Bell 412EPI",
    category: 'Helicopters',
    role: "Utilitaire moyen moderne",
    manufacturer: 'Bell Textron',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à 4 pales",
      "Nez avec radars météo",
      "Moteurs jumeaux"
    ],
    description: "Version améliorée du 412 avec une puissance accrue et un cockpit numérique intégré.",
    specs: {
      wingspan: '14.0 m',
      length: '17.1 m',
      height: '4.6 m',
      payload: '2 300 kg'
    }
  },
  {
    id: 'z20-harbin',
    name: "Harbin Z-20",
    category: 'Helicopters',
    role: "Transport utilitaire moyen",
    manufacturer: 'Harbin Aircraft',
    country: 'Chine',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor à 5 pales (contre 4 pour le Black Hawk)",
      "Fuselage anguleux",
      "Queue plus haute"
    ],
    description: "Hélicoptère chinois multi-missions ressemblant au Black Hawk mais doté d'un rotor à 5 pales.",
    specs: {
      wingspan: '16.0 m',
      length: '20.0 m',
      height: '5.3 m',
      payload: '5 000 kg'
    }
  },
  {
    id: 'z10me-caic',
    name: "CAIC Z-10ME",
    category: 'Helicopters',
    role: "Attaque lourd (Export)",
    manufacturer: 'CAIC',
    country: 'Chine',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Filtres à sable sur les moteurs",
      "Plaques de blindage additionnelles",
      "Tourelle canon 23mm"
    ],
    description: "Version d'exportation améliorée avec une protection accrue et des filtres à sable pour moteurs.",
    specs: {
      wingspan: '12.0 m',
      length: '14.1 m',
      height: '3.9 m',
      payload: '1 500 kg'
    }
  },
  {
    id: 'global-6500',
    name: "Bombardier Global 6500",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires long-courrier",
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette allongée élégante",
      "Moteurs Pearl massifs",
      "Ailes très souples"
    ],
    description: "Évolution du Global 6000 avec de nouveaux moteurs Rolls-Royce Pearl et une aile optimisée.",
    specs: {
      wingspan: '28.7 m',
      length: '30.3 m',
      height: '7.8 m',
      payload: '17 passagers'
    }
  },
  {
    id: 'falcon-2000s',
    name: "Dassault Falcon 2000S",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires super-médium",
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Bords d'attaque d'ailes mobiles",
      "Winglets incurvés",
      "Bimoteur arrière"
    ],
    description: "Version optimisée pour les pistes courtes et les approches raides (ex: London City).",
    specs: {
      wingspan: '21.4 m',
      length: '20.2 m',
      height: '7.1 m',
      payload: '10 passagers'
    }
  },
  {
    id: 'g400-gulfstream',
    name: "Gulfstream G400",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires large cabine",
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Nez court effilé",
      "Six hublots ovales par côté",
      "Moteurs Pratt & Whitney"
    ],
    description: "Dernier-né de Gulfstream visant le segment des jets à large cabine de moyenne portée.",
    specs: {
      wingspan: '26.3 m',
      length: '26.3 m',
      height: '7.7 m',
      payload: '12 passagers'
    }
  },
  {
    id: 'g800-gulfstream',
    name: "Gulfstream G800",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires très longue portée",
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette de G700 mais plus courte",
      "8 hublots ovales par côté",
      "Winglets massifs intégrés"
    ],
    description: "Le jet de Gulfstream ayant la plus grande autonomie au monde (14 816 km) à haute vitesse.",
    specs: {
      wingspan: '31.4 m',
      length: '30.4 m',
      height: '7.8 m',
      payload: '19 passagers'
    }
  },
  {
    id: 'global-8000',
    name: "Bombardier Global 8000",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires ultra-rapide",
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette du Global 7500",
      "Ailes très souples",
      "Moteurs GE Passport haute performance"
    ],
    description: "Le jet d'affaires le plus rapide au monde (Mach 0.94) doté d'une portée exceptionnelle.",
    specs: {
      wingspan: '31.7 m',
      length: '33.8 m',
      height: '8.2 m',
      payload: '19 passagers'
    }
  },
  {
    id: 'f15-mkm-malaysia',
    name: "Boeing F-15MKM",
    category: 'Combat Aircraft',
    role: "Chasseur multirôle lourd",
    manufacturer: 'Boeing',
    country: 'USA/Malaisie',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Camouflage gris deux tons",
      "Cockpit biplace",
      "Emblème de la RMAF"
    ],
    description: "Variante malaisienne du Su-30MKM mais en version Eagle avec des systèmes d'autoprotection spécifiques.",
    specs: {
      wingspan: '13.1 m',
      length: '19.4 m',
      height: '5.6 m',
      payload: '8 100 kg'
    }
  },
  {
    id: 'j10b-vigorous',
    name: "Chengdu J-10B",
    category: 'Combat Aircraft',
    role: "Chasseur multirôle amélioré",
    manufacturer: 'Chengdu Aircraft',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Entrée d'air ventrale sans montants",
      "Capteur IRST sur le nez",
      "Nez plus plat"
    ],
    description: "Évolution du J-10A avec une entrée d'air DSI et un capteur infrarouge (IRST) devant le cockpit.",
    specs: {
      wingspan: '9.8 m',
      length: '15.5 m',
      height: '5.4 m',
      payload: '7 000 kg'
    }
  },
  {
    id: 'an132d-antonov',
    name: "Antonov An-132D",
    category: 'Combat Support Aircraft',
    role: "Transport tactique léger",
    manufacturer: 'Antonov',
    country: 'Ukraine/Arabie Saoudite',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Hélices à 6 pales Dowty Propellers",
      "Moteurs Pratt & Whitney",
      "Nez arrondi sans vitres"
    ],
    description: "Démonstrateur technologique basé sur l'An-32 mais avec des moteurs et une avionique occidentaux.",
    specs: {
      wingspan: '29.2 m',
      length: '24.5 m',
      height: '8.8 m',
      payload: '9 200 kg'
    }
  },
  {
    id: 'mohajer-6',
    name: "Qods Mohajer-6",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat et ISR",
    manufacturer: 'Qods',
    country: 'Iran',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Double poutre de queue",
      "Hélice propulsive",
      "Train d'atterrissage tricycle fixe"
    ],
    description: "Drone de combat polyvalent capable d'emporter des bombes guidées miniatures sur des cibles fixes ou mobiles.",
    specs: {
      wingspan: '10.0 m',
      length: '5.7 m',
      height: 'N/A',
      payload: '100 kg'
    }
  },
  {
    id: 'h215-airbus',
    name: "Airbus H215 (Super Puma)",
    category: 'Helicopters',
    role: "Transport utilitaire lourd",
    manufacturer: 'Airbus Helicopters',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez arrondi avec radôme",
      "Rotor à 4 pales",
      "Fuselage long avec train fixe ou rétractable"
    ],
    description: "Version modernisée et simplifiée du Super Puma offrant robustesse et coût d'exploitation réduit.",
    specs: {
      wingspan: '16.2 m',
      length: '18.7 m',
      height: '4.9 m',
      payload: '4 500 kg'
    }
  },
  {
    id: 'aw101-sar-611',
    name: "Leonardo AW101-611",
    category: 'Helicopters',
    role: "Recherche et sauvetage (SAR)",
    manufacturer: 'Leonardo',
    country: 'Japon/Italie',
    engineType: 'Turbine',
    enginesCount: 3,
    recognitionTips: [
      "Trois moteurs",
      "Livrée blanche et jaune (parfois)",
      "Radar de recherche sous le nez"
    ],
    description: "Variante japonaise du Merlin utilisée pour le sauvetage à long rayon d'action et la chasse aux mines.",
    specs: {
      wingspan: '18.6 m',
      length: '22.8 m',
      height: '6.6 m',
      payload: 'N/A'
    }
  },
  {
    id: 'f15id-eagle',
    name: "Boeing F-15ID",
    category: 'Combat Aircraft',
    role: "Chasseur lourd avancé",
    manufacturer: 'Boeing',
    country: 'USA/Indonésie',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Dérives verticales",
      "Cockpit biplace",
      "Emports d'armes sous les ailes massifs"
    ],
    description: "Version destinée à l'Indonésie basée sur le standard F-15EX Eagle II.",
    specs: {
      wingspan: '13.1 m',
      length: '19.4 m',
      height: '5.6 m',
      payload: '13 400 kg'
    }
  },
  {
    id: 'f16-block-70',
    name: "Lockheed Martin F-16 Block 70",
    category: 'Combat Aircraft',
    role: "Chasseur multirôle avancé",
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Radar AESA APG-83",
      "Réservoirs conformes (CFT)",
      "Peinture Have Glass"
    ],
    description: "Dernier standard de production du F-16 intégrant le radar AESA du F-35.",
    specs: {
      wingspan: '9.5 m',
      length: '15.0 m',
      height: '4.9 m',
      payload: '7 700 kg'
    }
  },
  {
    id: 'mi171sh-storm',
    name: "Mil Mi-171Sh Storm",
    category: 'Helicopters',
    role: "Transport d'assaut armé",
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Plaques de blindage latérales",
      "Boule optronique sous le nez",
      "Pylônes d'armement proéminents"
    ],
    description: "Version lourdement armée du Mi-171 dotée d'une protection blindée et de systèmes optroniques.",
    specs: {
      wingspan: '21.3 m',
      length: '18.4 m',
      height: '4.8 m',
      payload: '4 000 kg'
    }
  },
  {
    id: 'h135-p3h-airbus',
    name: "Airbus H135 P3H",
    category: 'Helicopters',
    role: "Hélicoptère de police et secours",
    manufacturer: 'Airbus Helicopters',
    country: 'Europe',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Fenestron (rotor de queue caréné)",
      "Dérives verticales latérales",
      "Rotor à 4 pales"
    ],
    description: "Version améliorée du H135 avec des performances accrues en haute altitude et par temps chaud.",
    specs: {
      wingspan: '10.2 m',
      length: '12.2 m',
      height: '3.5 m',
      payload: '1 400 kg'
    }
  },
  {
    id: 'v247-vigilant',
    name: "Bell V-247 Vigilant",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone convertible (Tiltrotor)",
    manufacturer: 'Bell Textron',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Deux gros rotors basculants",
      "Queue en V",
      "Design furtif et anguleux"
    ],
    description: "Concept de drone à rotors basculants pour la surveillance et l'attaque depuis des navires.",
    specs: {
      wingspan: '20.0 m',
      length: '15.0 m',
      height: 'N/A',
      payload: '5 900 kg'
    }
  },
  {
    id: 'heron-mk2',
    name: "IAI Heron MK II",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de surveillance MALE",
    manufacturer: 'IAI',
    country: 'Israël',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Nez plus large",
      "Double poutre de queue",
      "Moteur à l'arrière"
    ],
    description: "Version améliorée du Heron avec une structure renforcée et une maintenance simplifiée.",
    specs: {
      wingspan: '16.6 m',
      length: '8.5 m',
      height: 'N/A',
      payload: '490 kg'
    }
  },
  {
    id: 'scaneagle3',
    name: "Boeing Insitu ScanEagle 3",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de surveillance tactique",
    manufacturer: 'Boeing/Insitu',
    country: 'USA',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ailes en flèche avec winglets",
      "Absence de train",
      "Récupéré par câble"
    ],
    description: "Version agrandie du ScanEagle capable d'emporter des capteurs multiples simultanément.",
    specs: {
      wingspan: '4.0 m',
      length: '2.0 m',
      height: 'N/A',
      payload: '9 kg'
    }
  },
  {
    id: 'g280-gulfstream',
    name: "Gulfstream G280",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires super-médium",
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Ailes sans bords d'attaque mobiles",
      "Moteurs Honeywell à l'arrière",
      "Queue en T"
    ],
    description: "Jet d'affaires performant offrant un accès à des pistes courtes et une grande autonomie.",
    specs: {
      wingspan: '19.2 m',
      length: '20.4 m',
      height: '6.5 m',
      payload: '10 passagers'
    }
  },
  {
    id: 'challenger-650',
    name: "Bombardier Challenger 650",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires large cabine",
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Moteurs imposants à l'arrière",
      "Ailes basses avec winglets",
      "Fuselage large"
    ],
    description: "Évolution du Challenger 605 avec une avionique Vision et une cabine modernisée.",
    specs: {
      wingspan: '19.6 m',
      length: '20.9 m',
      height: '6.3 m',
      payload: '12 passagers'
    }
  },
  {
    id: 'crj550-bombardier',
    name: "Bombardier CRJ-550",
    category: 'Civil Jet Airliners',
    role: "Jet régional de luxe",
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette de CRJ-700",
      "Moteurs à l'arrière",
      "Trois classes en cabine"
    ],
    description: "Basé sur le CRJ-700 mais configuré avec seulement 50 sièges pour le confort premium.",
    specs: {
      wingspan: '23.2 m',
      length: '32.3 m',
      height: '7.3 m',
      payload: '50 passagers'
    }
  },
  {
    id: 'erj145-xr',
    name: "Embraer ERJ-145XR",
    category: 'Civil Jet Airliners',
    role: "Jet régional longue portée",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Winglets larges",
      "Fuselage étroit et long",
      "Moteurs à l'arrière"
    ],
    description: "Version à autonomie étendue du 145 avec de nouveaux winglets et moteurs.",
    specs: {
      wingspan: '20.0 m',
      length: '29.9 m',
      height: '6.8 m',
      payload: '50 passagers'
    }
  },
  {
    id: 'a350f-airbus',
    name: "Airbus A350F",
    category: 'Civil Utility',
    role: "Transport de fret lourd",
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Basé sur l'A350",
      "Grande porte cargo sur le côté",
      "Queue en composite"
    ],
    description: "Version cargo de l'A350 avec une grande porte cargo et une structure renforcée.",
    specs: {
      wingspan: '64.8 m',
      length: '70.8 m',
      height: '17.1 m',
      payload: '109 000 kg'
    }
  },
  {
    id: '777-8f-boeing',
    name: "Boeing 777-8F",
    category: 'Civil Utility',
    role: "Transport de fret long-courrier",
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Bouts d'ailes pliables",
      "Deux moteurs géants GE9X",
      "Ailes en composite"
    ],
    description: "Version cargo de la nouvelle famille 777X dotée des bouts d'ailes pliables.",
    specs: {
      wingspan: '71.8 m',
      length: '70.9 m',
      height: '19.5 m',
      payload: '118 000 kg'
    }
  },
  {
    id: 'ma600-xian',
    name: "Xian MA600",
    category: 'Civil Turboprop Airliners',
    role: "Transport régional",
    manufacturer: 'Xian Aircraft',
    country: 'Chine',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Ailes hautes",
      "Moteurs à hélices",
      "Fuselage court"
    ],
    description: "Évolution du MA60 avec une avionique moderne et un confort cabine amélioré.",
    specs: {
      wingspan: '29.2 m',
      length: '24.7 m',
      height: '8.9 m',
      payload: '60 passagers'
    }
  },
  {
    id: 'yak152',
    name: "Yakovlev Yak-152",
    category: 'Combat Training Aircraft',
    role: "Entraîneur de base",
    manufacturer: 'Yakovlev',
    country: 'Russie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Moteur diesel RED A03",
      "Cockpit tandem",
      "Ailes basses droites"
    ],
    description: "Avion d'entraînement primaire pour les futurs pilotes militaires russes.",
    specs: {
      wingspan: '8.8 m',
      length: '7.7 m',
      height: '2.5 m',
      payload: 'N/A'
    }
  },
  {
    id: 'grob-g120tp',
    name: "Grob G 120TP",
    category: 'Combat Training Aircraft',
    role: "Entraîneur et voltige",
    manufacturer: 'Grob Aircraft',
    country: 'Allemagne',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Turbopropulseur monomoteur",
      "Hélice à 5 pales",
      "Ailes basses"
    ],
    description: "Avion d'entraînement moderne entièrement en composite doté d'un turbopropulseur.",
    specs: {
      wingspan: '10.3 m',
      length: '8.4 m',
      height: '2.7 m',
      payload: 'N/A'
    }
  },
  {
    id: 'h145-d3',
    name: "Airbus H145 (D3)",
    category: 'Helicopters',
    role: "Transport et secours polyvalent",
    manufacturer: 'Airbus Helicopters',
    country: 'Europe',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor principal à 5 pales",
      "Fenestron (rotor de queue caréné)",
      "Nez vitré"
    ],
    description: "Dernière version du H145 équipée du nouveau rotor principal à 5 pales sans roulements.",
    specs: {
      wingspan: '11.0 m',
      length: '13.0 m',
      height: '3.5 m',
      payload: '1 905 kg'
    }
  },
  {
    id: 'aw139m-leonardo',
    name: "Leonardo AW139M",
    category: 'Helicopters',
    role: "Hélicoptère militaire moyen",
    manufacturer: 'Leonardo',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Tourelle FLIR sous le nez",
      "Rotor à 5 pales",
      "Train d'atterrissage rétractable"
    ],
    description: "Version militarisée de l'AW139 équipée de protection blindée et de capteurs thermiques.",
    specs: {
      wingspan: '13.8 m',
      length: '16.7 m',
      height: '5.0 m',
      payload: '3 000 kg'
    }
  },
  {
    id: 'sh60k-seahawk',
    name: "Mitsubishi SH-60K",
    category: 'Helicopters',
    role: "Lutte anti-sous-marine",
    manufacturer: 'Mitsubishi',
    country: 'Japon',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Radôme sous le nez",
      "Rotor à 4 pales",
      "Train arrière avancé"
    ],
    description: "Version japonaise améliorée du Seahawk avec une cabine agrandie et de nouveaux capteurs.",
    specs: {
      wingspan: '16.4 m',
      length: '19.8 m',
      height: '5.2 m',
      payload: 'N/A'
    }
  },
  {
    id: 'z18-changhe',
    name: "Changhe Z-18",
    category: 'Helicopters',
    role: "Transport lourd et ASW",
    manufacturer: 'Changhe Aircraft',
    country: 'Chine',
    engineType: 'Turbine',
    enginesCount: 3,
    recognitionTips: [
      "Trois moteurs",
      "Grand fuselage avec rampe arrière",
      "Rotor à 6 pales"
    ],
    description: "Évolution massive du Z-8 (basé sur le Super Frelon) pour opérer sur les porte-avions chinois.",
    specs: {
      wingspan: '19.0 m',
      length: '23.0 m',
      height: '7.0 m',
      payload: '5 000 kg'
    }
  },
  {
    id: 'j15d-roaring-shark',
    name: "Shenyang J-15D",
    category: 'Combat Aircraft',
    role: "Guerre électronique embarquée",
    manufacturer: 'Shenyang Aircraft',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Pods de guerre électronique aux ailes",
      "Biplace en tandem",
      "Crosse d'appontage"
    ],
    description: "Variante biplace du J-15 équipée de pods de guerre électronique en bout d'ailes.",
    specs: {
      wingspan: '14.7 m',
      length: '21.9 m',
      height: '5.9 m',
      payload: 'N/A'
    }
  },
  {
    id: 'mq9b-stol',
    name: "General Atomics MQ-9B STOL",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat naval",
    manufacturer: 'General Atomics',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Ailes plus courtes et larges",
      "Hélice propulsive",
      "Pas de cockpit"
    ],
    description: "Variante du SkyGuardian capable d'opérer depuis des navires d'assaut à pont court.",
    specs: {
      wingspan: '24.0 m',
      length: '11.7 m',
      height: '3.9 m',
      payload: '2 150 kg'
    }
  },
  {
    id: 't6b-texan-ii',
    name: "Beechcraft T-6B Texan II",
    category: 'Combat Training Aircraft',
    role: "Entraîneur avec cockpit numérique",
    manufacturer: 'Textron Aviation',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 1,
    recognitionTips: [
      "Cockpit tandem",
      "Hélice quadripale",
      "HUD visible dans le cockpit"
    ],
    description: "Standard de l'US Navy doté d'une avionique moderne et d'un affichage tête haute (HUD).",
    specs: {
      wingspan: '10.2 m',
      length: '10.2 m',
      height: '3.3 m',
      payload: 'N/A'
    }
  },
  {
    id: 's92-sikorsky',
    name: "Sikorsky S-92",
    category: 'Helicopters',
    role: "Transport civil et SAR",
    manufacturer: 'Sikorsky',
    country: 'USA',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage massif et haut",
      "Rotor à 4 pales",
      "Train d'atterrissage principal dans des carénages proéminents"
    ],
    description: "Hélicoptère de transport lourd certifié selon les normes de sécurité les plus strictes.",
    specs: {
      wingspan: '17.2 m',
      length: '17.1 m',
      height: '4.7 m',
      payload: '4 500 kg'
    }
  },
  {
    id: 'ec130-airbus',
    name: "Airbus H130 (ex-EC130)",
    category: 'Helicopters',
    role: "Transport de tourisme et médical",
    manufacturer: 'Airbus Helicopters',
    country: 'Europe',
    engineType: 'Turbine',
    enginesCount: 1,
    recognitionTips: [
      "Rotor de queue Fenestron",
      "Cabine large avec 7 à 8 sièges",
      "Nez arrondi"
    ],
    description: "Hélicoptère léger monoturbine doté d'une cabine très large offrant une visibilité panoramique.",
    specs: {
      wingspan: '10.7 m',
      length: '10.7 m',
      height: '3.3 m',
      payload: '1 050 kg'
    }
  },
  {
    id: 'ec145-airbus',
    name: "Airbus H145 (ex-EC145)",
    category: 'Helicopters',
    role: "Transport et service public",
    manufacturer: 'Airbus Helicopters',
    country: 'Europe',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor de queue Fenestron (versions récentes)",
      "Portes arrières battantes",
      "Nez vitré"
    ],
    description: "Hélicoptère biturbine polyvalent issu de la collaboration entre MBB et Kawasaki (BK 117).",
    specs: {
      wingspan: '11.0 m',
      length: '13.0 m',
      height: '3.5 m',
      payload: '1 700 kg'
    }
  },
  {
    id: 't129-atak',
    name: "TAI T129 ATAK",
    category: 'Helicopters',
    role: "Attaque et reconnaissance",
    manufacturer: 'TAI/AgustaWestland',
    country: 'Turquie/Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette très fine",
      "Canon sous le nez",
      "Rotor à 5 pales"
    ],
    description: "Version turque de l'A129 Mangusta optimisée pour les conditions de haute altitude et chaleur.",
    specs: {
      wingspan: '11.9 m',
      length: '14.6 m',
      height: '3.4 m',
      payload: '1 200 kg'
    }
  },
  {
    id: 'mi35m-mil',
    name: "Mil Mi-35M",
    category: 'Helicopters',
    role: "Attaque et transport d'assaut",
    manufacturer: 'Mil',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Train d'atterrissage fixe",
      "Rotor de queue en X",
      "Ailes courtes avec pylônes d'armement"
    ],
    description: "Version modernisée du Mi-24 Hind dotée d'un train d'atterrissage fixe et de pales en composite.",
    specs: {
      wingspan: '17.3 m',
      length: '17.5 m',
      height: '6.5 m',
      payload: '2 400 kg'
    }
  },
  {
    id: 'h6k-xian',
    name: "Xian H-6K",
    category: 'Combat Aircraft',
    role: "Bombardier stratégique",
    manufacturer: 'Xian Aircraft',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Nez plein sans vitrage (radar)",
      "Moteurs de plus grand diamètre",
      "Points d'emport pour missiles sous les ailes"
    ],
    description: "Version profondément modernisée du H-6 capable d'emporter des missiles de croisière longue portée.",
    specs: {
      wingspan: '33.0 m',
      length: '34.8 m',
      height: '10.4 m',
      payload: '12 000 kg'
    }
  },
  {
    id: 'shahed-129',
    name: "Shahed 129",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Surveillance et frappe MALE",
    manufacturer: 'HESA',
    country: 'Iran',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Nez bulbeux",
      "Train d'atterrissage escamotable",
      "Empennage en V"
    ],
    description: "Drone de combat iranien à longue endurance ressemblant au Hermes 450 mais de plus grande taille.",
    specs: {
      wingspan: '16.0 m',
      length: '8.0 m',
      height: 'N/A',
      payload: '400 kg'
    }
  },
  {
    id: 'ch4-rainbow',
    name: "CASC CH-4 Rainbow",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone de combat MALE",
    manufacturer: 'CASC',
    country: 'Chine',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ressemble au MQ-1 Predator",
      "Empennage en V inversé",
      "Dôme radar sous le fuselage"
    ],
    description: "Drone polyvalent très utilisé pour la surveillance des frontières et les frappes de précision.",
    specs: {
      wingspan: '18.0 m',
      length: '8.5 m',
      height: 'N/A',
      payload: '345 kg'
    }
  },
  {
    id: 'mako-kratos',
    name: "Kratos UTAP-22 Mako",
    category: 'Unmanned Aerial Vehicle (UAV)',
    role: "Drone ailier de combat",
    manufacturer: 'Kratos Defense',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Entrée d'air sur le dessus",
      "Ailes en flèche",
      "Double dérive arrière inclinée"
    ],
    description: "Drone à réaction haute performance conçu pour accompagner les avions de chasse pilotés.",
    specs: {
      wingspan: '3.2 m',
      length: '6.1 m',
      height: 'N/A',
      payload: 'N/A'
    }
  },
  {
    id: 'a318-airbus',
    name: "Airbus A318",
    category: 'Civil Jet Airliners',
    role: "Transport court-courrier",
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage très court et trapu",
      "Dérive verticale plus haute que l'A320",
      "Bimoteur sous ailes"
    ],
    description: "Surnommé le Baby Bus c'est le plus petit membre de la famille A320.",
    specs: {
      wingspan: '34.1 m',
      length: '31.4 m',
      height: '12.6 m',
      payload: '107 passagers'
    }
  },
  {
    id: 'e170-embraer',
    name: "Embraer E170",
    category: 'Civil Jet Airliners',
    role: "Jet régional",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette de jet régional",
      "Moteurs sous les ailes",
      "Winglets simples"
    ],
    description: "Plus petite version de la première génération des E-Jets d'Embraer.",
    specs: {
      wingspan: '26.0 m',
      length: '29.9 m',
      height: '9.7 m',
      payload: '72 passagers'
    }
  },
  {
    id: 'learjet75-bombardier',
    name: "Bombardier Learjet 75",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires léger",
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Winglets imposants et inclinés",
      "Moteurs à l'arrière",
      "Nez très pointu effilé"
    ],
    description: "Dernière évolution de la célèbre lignée Learjet dotée d'une avionique Garmin G5000.",
    specs: {
      wingspan: '15.5 m',
      length: '17.7 m',
      height: '4.5 m',
      payload: '9 passagers'
    }
  },
  {
    id: 'g450-gulfstream',
    name: "Gulfstream G450",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires long-courrier",
    manufacturer: 'Gulfstream',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Six grands hublots ovales par côté",
      "Dérive verticale classique",
      "Bimoteur arrière"
    ],
    description: "Amélioration du GIV-SP avec un fuselage allongé et le cockpit PlaneView.",
    specs: {
      wingspan: '23.7 m',
      length: '27.2 m',
      height: '7.7 m',
      payload: '16 passagers'
    }
  },
  {
    id: 'citation-m2',
    name: "Cessna Citation M2",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires très léger",
    manufacturer: 'Textron Aviation',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Winglets arrondis (Swooplets)",
      "Moteurs à l'arrière",
      "Nez arrondi"
    ],
    description: "Jet d'entrée de gamme performant conçu pour les opérations monopilote.",
    specs: {
      wingspan: '14.4 m',
      length: '13.0 m',
      height: '4.3 m',
      payload: '7 passagers'
    }
  },
  {
    id: 'da20-diamond',
    name: "Diamond DA20-C1 Katana",
    category: 'Private Light Aircraft',
    role: "Entraînement initial",
    manufacturer: 'Diamond Aircraft',
    country: 'Autriche/Canada',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Queue en T",
      "Verrière en bulle intégrale",
      "Train tricycle fixe caréné"
    ],
    description: "Avion biplace léger en composite très populaire pour l'écolage primaire.",
    specs: {
      wingspan: '10.9 m',
      length: '7.2 m',
      height: '2.2 m',
      payload: '240 kg'
    }
  },
  {
    id: 'p2008-tecnam',
    name: "Tecnam P2008",
    category: 'Private Light Aircraft',
    role: "Avion de tourisme léger (LSA)",
    manufacturer: 'Tecnam',
    country: 'Italie',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ailes hautes",
      "Fuselage aux lignes fluides",
      "Trois roues carénées"
    ],
    description: "Avion mélangeant un fuselage en carbone et des ailes en métal pour plus de légèreté.",
    specs: {
      wingspan: '9.0 m',
      length: '7.0 m',
      height: '2.7 m',
      payload: '215 kg'
    }
  },
  {
    id: 'sling-tsi',
    name: "Sling TSi",
    category: 'Private Light Aircraft',
    role: "Avion de voyage rapide",
    manufacturer: 'Sling Aircraft',
    country: 'Afrique du Sud',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Ailes basses à bout recourbé",
      "Fuselage métallique moderne",
      "Verrière large"
    ],
    description: "Avion de 4 places performant disponible en kit ou prêt à voler avec moteur Rotax.",
    specs: {
      wingspan: '9.4 m',
      length: '7.1 m',
      height: '2.4 m',
      payload: '430 kg'
    }
  },
  {
    id: 'vl3-evolution',
    name: "JMB VL3 Evolution",
    category: 'Private Light Aircraft',
    role: "ULM haute performance",
    manufacturer: 'JMB Aircraft',
    country: 'République tchèque',
    engineType: 'Piston',
    enginesCount: 1,
    recognitionTips: [
      "Train rentrant",
      "Silhouette de petit chasseur",
      "Hélice tripale"
    ],
    description: "ULM ultra-rapide capable de croiser à 280 km/h avec un train rentrant.",
    specs: {
      wingspan: '8.4 m',
      length: '6.2 m',
      height: '2.0 m',
      payload: '200 kg'
    }
  },
  {
    id: 'mig35-fulcrum',
    name: "Mikoyan MiG-35",
    category: 'Combat Aircraft',
    role: "Chasseur multirôle avancé",
    manufacturer: 'Mikoyan',
    country: 'Russie',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Radar AESA plat dans le nez",
      "Double réacteur à l'arrière",
      "Nombreux points d'emport sous ailes"
    ],
    description: "Version ultime du MiG-29 intégrant un radar AESA et une avionique de pointe.",
    specs: {
      wingspan: '12.0 m',
      length: '17.3 m',
      height: '4.7 m',
      payload: '7 000 kg'
    }
  },
  {
    id: 'a340-500',
    name: "Airbus A340-500",
    category: 'Civil Jet Airliners',
    role: "Très long-courrier",
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbofan',
    enginesCount: 4,
    recognitionTips: [
      "Quatre réacteurs",
      "Fuselage long",
      "Train d'atterrissage central à 4 roues"
    ],
    description: "Version à très long rayon d'action de l'A340 conçue pour les vols ultra-longs.",
    specs: {
      wingspan: '63.5 m',
      length: '67.9 m',
      height: '17.5 m',
      payload: '313 passagers'
    }
  },
  {
    id: 'a340-600',
    name: "Airbus A340-600",
    category: 'Civil Jet Airliners',
    role: "Long-courrier haute capacité",
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbofan',
    enginesCount: 4,
    recognitionTips: [
      "Fuselage extrêmement long",
      "Quatre réacteurs imposants",
      "Train central renforcé"
    ],
    description: "L'un des avions de ligne les plus longs au monde avant l'arrivée du 747-8.",
    specs: {
      wingspan: '63.5 m',
      length: '75.3 m',
      height: '17.9 m',
      payload: '380 passagers'
    }
  },
  {
    id: 'b747-400er',
    name: "Boeing 747-400ER",
    category: 'Civil Jet Airliners',
    role: "Long-courrier à autonomie étendue",
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 4,
    recognitionTips: [
      "Winglets en bout d'aile",
      "Silhouette classique Jumbo Jet",
      "Quatre moteurs"
    ],
    description: "Version à rayon d'action et poids au décollage accrus du 747-400.",
    specs: {
      wingspan: '64.4 m',
      length: '70.6 m',
      height: '19.4 m',
      payload: '416 passagers'
    }
  },
  {
    id: 'crj900-bombardier',
    name: "Bombardier CRJ-900",
    category: 'Civil Jet Airliners',
    role: "Jet régional",
    manufacturer: 'Bombardier',
    country: 'Canada',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage très effilé",
      "Moteurs à l'arrière",
      "Deux sorties de secours sur l'aile"
    ],
    description: "Version allongée du CRJ-700 conçue pour concurrencer les E-Jets d'Embraer.",
    specs: {
      wingspan: '24.9 m',
      length: '36.2 m',
      height: '7.5 m',
      payload: '90 passagers'
    }
  },
  {
    id: 'kj200-shaanxi',
    name: "Shaanxi KJ-200",
    category: 'Combat Support Aircraft',
    role: "Alerte avancée (AEW&C)",
    manufacturer: 'Shaanxi Aircraft',
    country: 'Chine',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Antenne radar rectangulaire sur le dos",
      "Hélices à 6 pales",
      "Nez plein (radar)"
    ],
    description: "Avion radar basé sur le Y-8 avec une antenne radar fixe sur le dessus du fuselage.",
    specs: {
      wingspan: '38.0 m',
      length: '34.0 m',
      height: '11.2 m',
      payload: 'N/A'
    }
  },
  {
    id: 'kj500-shaanxi',
    name: "Shaanxi KJ-500",
    category: 'Combat Support Aircraft',
    role: "AWACS tactique",
    manufacturer: 'Shaanxi Aircraft',
    country: 'Chine',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Dôme radar fixe sur le dos",
      "Basé sur le transport Y-9",
      "Nombreuses antennes dorsales"
    ],
    description: "Avion d'alerte radar doté d'un dôme fixe contenant trois radars AESA actifs.",
    specs: {
      wingspan: '38.0 m',
      length: '34.0 m',
      height: '11.2 m',
      payload: 'N/A'
    }
  },
  {
    id: 'kj2000-xian',
    name: "Xian KJ-2000",
    category: 'Combat Support Aircraft',
    role: "AWACS stratégique lourd",
    manufacturer: 'Xian Aircraft',
    country: 'Chine',
    engineType: 'Turbofan',
    enginesCount: 4,
    recognitionTips: [
      "Grand dôme radar rotatif",
      "Quatre moteurs à réaction",
      "Nez vitré (navigateur)"
    ],
    description: "Le principal AWACS lourd chinois basé sur la cellule de l'Ilyushin Il-76.",
    specs: {
      wingspan: '50.5 m',
      length: '46.6 m',
      height: '14.8 m',
      payload: 'N/A'
    }
  },
  {
    id: 'c130j30-super',
    name: "Lockheed Martin C-130J-30",
    category: 'Combat Support Aircraft',
    role: "Transport tactique allongé",
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 4,
    recognitionTips: [
      "Fuselage plus long que le C-130J",
      "Hélices à 6 pales",
      "Queue classique Hercules"
    ],
    description: "Version à fuselage allongé du Super Hercules offrant plus d'espace de chargement.",
    specs: {
      wingspan: '40.4 m',
      length: '34.4 m',
      height: '11.8 m',
      payload: '20 000 kg'
    }
  },
  {
    id: 'f16-in-block70',
    name: "Lockheed Martin F-16IN",
    category: 'Combat Aircraft',
    role: "Chasseur multirôle avancé",
    manufacturer: 'Lockheed Martin',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 1,
    recognitionTips: [
      "Réservoirs sur le dessus",
      "Radar AESA plat",
      "Capteur IRST devant le cockpit"
    ],
    description: "Version spécifique proposée à l'Inde dotée de réservoirs conformes et radar AESA.",
    specs: {
      wingspan: '9.5 m',
      length: '15.0 m',
      height: '4.9 m',
      payload: '7 700 kg'
    }
  },
  {
    id: 'hawker-4000',
    name: "Hawker 4000",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires super-médium",
    manufacturer: 'Hawker Beechcraft',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Nez pointu",
      "Moteurs à l'arrière",
      "Queue en T"
    ],
    description: "Jet d'affaires haute performance avec un fuselage entièrement en composite carbone.",
    specs: {
      wingspan: '18.8 m',
      length: '21.1 m',
      height: '6.0 m',
      payload: '12 passagers'
    }
  },
  {
    id: 'legacy-650',
    name: "Embraer Legacy 650",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires large cabine",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette de jet régional",
      "Winglets hauts",
      "Moteurs à l'arrière"
    ],
    description: "Version améliorée du Legacy 600 offrant une autonomie transatlantique.",
    specs: {
      wingspan: '21.2 m',
      length: '26.3 m',
      height: '6.8 m',
      payload: '13 passagers'
    }
  },
  {
    id: 'kc390-millennium',
    name: "Embraer KC-390",
    category: 'Combat Support Aircraft',
    role: "Ravitailleur et transport",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Pods de ravitaillement sous les ailes",
      "Moteurs à réaction",
      "Queue en T"
    ],
    description: "Version ravitailleur du C-390 capable de délivrer du carburant à des jets et hélicoptères.",
    specs: {
      wingspan: '35.1 m',
      length: '35.2 m',
      height: '11.8 m',
      payload: '26 000 kg'
    }
  },
  {
    id: 'p8i-neptune',
    name: "Boeing P-8I Neptune",
    category: 'Combat Support Aircraft',
    role: "Patrouille maritime et ASW",
    manufacturer: 'Boeing',
    country: 'USA/Inde',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Détecteur MAD à l'arrière",
      "Cellule de 737",
      "Points d'emport sous ailes"
    ],
    description: "Variante indienne du P-8A dotée de capteurs de queue spécifiques pour la détection magnétique.",
    specs: {
      wingspan: '37.6 m',
      length: '39.5 m',
      height: '12.8 m',
      payload: '9 000 kg'
    }
  },
  {
    id: 'kj600-xian',
    name: "Xian KJ-600",
    category: 'Combat Support Aircraft',
    role: "AWACS embarqué",
    manufacturer: 'Xian Aircraft',
    country: 'Chine',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Ressemble au E-2 Hawkeye",
      "Double moteur à hélices",
      "Grand dôme radar rotatif"
    ],
    description: "Nouvel avion radar chinois conçu pour opérer depuis les porte-avions à catapulte.",
    specs: {
      wingspan: '24.0 m',
      length: '18.0 m',
      height: 'N/A',
      payload: 'N/A'
    }
  },
  {
    id: 'a350-1000-airbus',
    name: "Airbus A350-1000",
    category: 'Civil Jet Airliners',
    role: "Long-courrier très grande capacité",
    manufacturer: 'Airbus',
    country: 'Europe',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Train d'atterrissage principal à 6 roues",
      "Fuselage très long",
      "Masque noir de cockpit"
    ],
    description: "La plus grande version de l'A350 dotée d'un fuselage allongé et d'un train principal à six roues.",
    specs: {
      wingspan: '64.8 m',
      length: '73.8 m',
      height: '17.1 m',
      payload: '440 passagers'
    }
  },
  {
    id: '777-200lr-boeing',
    name: "Boeing 777-200LR",
    category: 'Civil Jet Airliners',
    role: "Long-courrier ultra-long rayon",
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Bimoteur géant",
      "Extrémités d'ailes biseautées",
      "Fuselage large"
    ],
    description: "Surnommé Worldliner c'est l'un des avions ayant la plus grande autonomie au monde.",
    specs: {
      wingspan: '64.8 m',
      length: '63.7 m',
      height: '18.6 m',
      payload: '317 passagers'
    }
  },
  {
    id: 'dash8-q400-dhc',
    name: "Bombardier Dash 8-Q400",
    category: 'Civil Turboprop Airliners',
    role: "Transport régional rapide",
    manufacturer: 'De Havilland Canada',
    country: 'Canada',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Fuselage très long et fin",
      "Moteurs à hélices à 6 pales",
      "Train d'atterrissage long"
    ],
    description: "Turbopropulseur moderne réputé pour sa vitesse proche de celle d'un jet et son système de réduction de bruit.",
    specs: {
      wingspan: '28.4 m',
      length: '32.8 m',
      height: '8.3 m',
      payload: '90 passagers'
    }
  },
  {
    id: 'falcon-7x-dassault',
    name: "Dassault Falcon 7X",
    category: 'Private Executive Aircraft',
    role: "Jet d'affaires long-courrier",
    manufacturer: 'Dassault',
    country: 'France',
    engineType: 'Turbofan',
    enginesCount: 3,
    recognitionTips: [
      "Trois moteurs à l'arrière",
      "Winglets intégrés",
      "Silhouette élégante tri-réacteur"
    ],
    description: "Premier jet d'affaires au monde équipé de commandes de vol numériques fly-by-wire.",
    specs: {
      wingspan: '26.2 m',
      length: '23.2 m',
      height: '7.8 m',
      payload: '16 passagers'
    }
  },
  {
    id: 'g550-eitam-iai',
    name: "IAI G550 Eitam",
    category: 'Combat Support Aircraft',
    role: "Alerte avancée (AEW&C)",
    manufacturer: 'IAI/Gulfstream',
    country: 'Israël',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Radars larges sur les flancs",
      "Nez et queue bulbeux",
      "Basé sur le Gulfstream G550"
    ],
    description: "Jet d'affaires modifié avec des radars conformes latéraux pour la surveillance aérienne et maritime.",
    specs: {
      wingspan: '28.5 m',
      length: '29.4 m',
      height: '7.9 m',
      payload: 'N/A'
    }
  },
  {
    id: 'm346-fa-leonardo',
    name: "Leonardo M-346FA",
    category: 'Combat Aircraft',
    role: "Attaque légère et chasse",
    manufacturer: 'Leonardo',
    country: 'Italie',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Nez avec radar",
      "Points d'emport en bout d'aile",
      "Silhouette compacte bimoteur"
    ],
    description: "Variante de combat de l'entraîneur M-346 équipée d'un radar Grifo et de points d'emport renforcés.",
    specs: {
      wingspan: '9.7 m',
      length: '11.5 m',
      height: '4.8 m',
      payload: '3 000 kg'
    }
  },
  {
    id: 'aw249-fenice',
    name: "Leonardo AW249 Fenice",
    category: 'Helicopters',
    role: "Hélicoptère d'attaque",
    manufacturer: 'Leonardo',
    country: 'Italie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Silhouette angulaire moderne",
      "Cockpit en tandem",
      "Canon sous le nez"
    ],
    description: "Nouvel hélicoptère d'attaque italien conçu pour remplacer l'A129 Mangusta.",
    specs: {
      wingspan: '14.6 m',
      length: '17.6 m',
      height: 'N/A',
      payload: '2 800 kg'
    }
  },
  {
    id: 'ka62-kamov',
    name: "Kamov Ka-62",
    category: 'Helicopters',
    role: "Transport utilitaire moyen",
    manufacturer: 'Kamov',
    country: 'Russie',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Rotor de queue Fenestron",
      "Nez pointu",
      "Rotor principal à 5 pales"
    ],
    description: "Version civile du Ka-60 dotée d'un rotor de queue caréné et d'une conception moderne.",
    specs: {
      wingspan: '13.5 m',
      length: '15.7 m',
      height: '4.5 m',
      payload: '2 500 kg'
    }
  },
  {
    id: 'e145-h-aewc',
    name: "Embraer E-99 / R-99",
    category: 'Combat Support Aircraft',
    role: "Surveillance et renseignement",
    manufacturer: 'Embraer',
    country: 'Brésil',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Antenne rectangulaire sur le dos",
      "Silhouette de jet régional",
      "Moteurs à l'arrière"
    ],
    description: "Avion radar basé sur l'ERJ-145 utilisé par plusieurs forces aériennes pour la surveillance.",
    specs: {
      wingspan: '20.0 m',
      length: '28.4 m',
      height: '6.8 m',
      payload: 'N/A'
    }
  },
  {
    id: 'x2-shinshin',
    name: "Mitsubishi X-2 Shinshin",
    category: 'Combat Aircraft',
    role: "Démonstrateur technologique",
    manufacturer: 'Mitsubishi',
    country: 'Japon',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Tuyères à pétales",
      "Petite taille",
      "Double dérive inclinée"
    ],
    description: "Appareil expérimental pour tester la furtivité et la super-maniabilité japonaise.",
    specs: {
      wingspan: '9.1 m',
      length: '14.2 m',
      height: '4.5 m',
      payload: 'Prototype'
    }
  },
  {
    id: 'tedbf-hal',
    name: "HAL TEDBF",
    category: 'Combat Aircraft',
    role: "Chasseur embarqué (Prototype)",
    manufacturer: 'HAL',
    country: 'Inde',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Plans canards",
      "Aile delta",
      "Double moteur"
    ],
    description: "Futur chasseur bimoteur destiné aux porte-avions de la marine indienne.",
    specs: {
      wingspan: '11.2 m',
      length: '16.3 m',
      height: 'N/A',
      payload: 'Classifié'
    }
  },
  {
    id: 'h175m-airbus',
    name: "Airbus H175M",
    category: 'Helicopters',
    role: "Transport militaire moyen",
    manufacturer: 'Airbus Helicopters',
    country: 'France',
    engineType: 'Turbine',
    enginesCount: 2,
    recognitionTips: [
      "Nez court",
      "Grandes vitres latérales",
      "Livrée militaire mate"
    ],
    description: "Version militaire du H175 destinée au transport de troupes et aux forces spéciales.",
    specs: {
      wingspan: '14.8 m',
      length: '15.7 m',
      height: '5.3 m',
      payload: '18 troupes'
    }
  },
  {
    id: '737-max-9-boeing',
    name: "Boeing 737 MAX 9",
    category: 'Civil Jet Airliners',
    role: "Moyen-courrier monocouloir",
    manufacturer: 'Boeing',
    country: 'USA',
    engineType: 'Turbofan',
    enginesCount: 2,
    recognitionTips: [
      "Winglets en V scindé",
      "Fuselage long",
      "Moteurs à chevrons"
    ],
    description: "Variante allongée du MAX 8 offrant une plus grande capacité de transport.",
    specs: {
      wingspan: '35.9 m',
      length: '42.1 m',
      height: '12.3 m',
      payload: '220 passagers'
    }
  },
  {
    id: 'e2d-hawkeye-ng',
    name: "Northrop Grumman E-2D",
    category: 'Combat Support Aircraft',
    role: "Alerte avancée embarquée",
    manufacturer: 'Northrop Grumman',
    country: 'USA',
    engineType: 'Turboprop',
    enginesCount: 2,
    recognitionTips: [
      "Grand dôme radar rotatif",
      "Hélices à 8 pales",
      "Quatre dérives verticales"
    ],
    description: "Version 'Advanced Hawkeye' dotée d'un nouveau radar AESA et d'un cockpit numérique.",
    specs: {
      wingspan: '24.6 m',
      length: '17.6 m',
      height: '5.6 m',
      payload: 'N/A'
    }
  },
];

const AIRCRAFT_DATA_DEDUPED: Omit<Aircraft, 'image'>[] = (() => {
  const seenNames = new Set<string>();
  return AIRCRAFT_DATA_RAW.filter(aircraft => {
    const normalizedName = aircraft.name.trim().toLowerCase().replace(/\s+/g, ' ');
    if (seenNames.has(normalizedName)) return false;
    seenNames.add(normalizedName);
    return true;
  });
})();

export const AIRCRAFT_DATA: Aircraft[] = AIRCRAFT_DATA_DEDUPED.map(aircraft => ({
  ...aircraft,
  image: `/images/aircraft/${aircraft.id}.jpg`
}));