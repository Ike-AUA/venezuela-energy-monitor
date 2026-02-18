// Venezuela Energy Monitor - Data Source Configuration
// Multilingual news sources focused on Venezuela energy sector

export interface NewsSource {
  id: string;
  name: string;
  url: string;
  language: string;
  tier: 1 | 2 | 3 | 4; // Source credibility tier
  focus: string[];
  stateAffiliated: boolean;
  propagandaRisk: 'low' | 'medium' | 'high';
}

export const VENEZUELA_NEWS_SOURCES: NewsSource[] = [
  // === SPANISH LANGUAGE SOURCES ===
  
  // Independent Venezuelan Media
  {
    id: 'efecto-cocuyo',
    name: 'Efecto Cocuyo',
    url: 'https://efectococuyo.com/feed/',
    language: 'es',
    tier: 2,
    focus: ['venezuela', 'politics', 'energy', 'economy'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'talcual',
    name: 'TalCual Digital',
    url: 'https://talcualdigital.com/feed/',
    language: 'es',
    tier: 2,
    focus: ['venezuela', 'oil', 'pdvsa', 'economy'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'runrunes',
    name: 'Runrun.es',
    url: 'https://runrun.es/feed/',
    language: 'es',
    tier: 2,
    focus: ['venezuela', 'politics', 'corruption', 'oil'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'la-patilla',
    name: 'La Patilla',
    url: 'https://www.lapatilla.com/feed/',
    language: 'es',
    tier: 3,
    focus: ['venezuela', 'politics', 'economy', 'energy'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'el-nacional',
    name: 'El Nacional',
    url: 'https://www.elnacional.com/feed/',
    language: 'es',
    tier: 2,
    focus: ['venezuela', 'politics', 'economy', 'oil'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'ntn24-venezuela',
    name: 'NTN24 Venezuela',
    url: 'https://www.ntn24.com/america-latina/venezuela/feed',
    language: 'es',
    tier: 2,
    focus: ['venezuela', 'latam', 'energy'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  
  // Venezuelan Government Sources
  {
    id: 'pdvsa-official',
    name: 'PDVSA (Official)',
    url: 'http://www.pdvsa.com/index.php?option=com_content&view=category&layout=blog&id=10&Itemid=589&lang=es',
    language: 'es',
    tier: 4,
    focus: ['pdvsa', 'oil', 'production'],
    stateAffiliated: true,
    propagandaRisk: 'high'
  },
  {
    id: 'minpetroleo',
    name: 'Ministerio de Petróleo',
    url: 'http://www.mpetroleo.gob.ve/',
    language: 'es',
    tier: 4,
    focus: ['policy', 'oil', 'gas'],
    stateAffiliated: true,
    propagandaRisk: 'high'
  },
  
  // Regional Spanish Sources
  {
    id: 'efe-venezuela',
    name: 'EFE - Venezuela',
    url: 'https://www.efe.com/efe/america/venezuela/rss',
    language: 'es',
    tier: 1,
    focus: ['venezuela', 'latam', 'energy'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'el-pais-venezuela',
    name: 'El País - Venezuela',
    url: 'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada',
    language: 'es',
    tier: 2,
    focus: ['venezuela', 'international'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  
  // === ENGLISH LANGUAGE SOURCES ===
  
  // Wire Services & Major Outlets
  {
    id: 'reuters-venezuela',
    name: 'Reuters - Venezuela',
    url: 'https://www.reuters.com/places/venezuela',
    language: 'en',
    tier: 1,
    focus: ['venezuela', 'oil', 'politics', 'economy'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'bloomberg-venezuela',
    name: 'Bloomberg - Venezuela Energy',
    url: 'https://www.bloomberg.com/venezuela',
    language: 'en',
    tier: 1,
    focus: ['venezuela', 'oil', 'markets', 'finance'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'ap-venezuela',
    name: 'Associated Press - Venezuela',
    url: 'https://apnews.com/hub/venezuela',
    language: 'en',
    tier: 1,
    focus: ['venezuela', 'general'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  
  // Energy Specialized
  {
    id: 'argus-latam',
    name: 'Argus Media - Latin America',
    url: 'https://www.argusmedia.com/en/news-and-insights/latest-market-news?category=latin-america',
    language: 'en',
    tier: 2,
    focus: ['oil', 'markets', 'latam'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'platts-venezuela',
    name: 'S&P Global Platts',
    url: 'https://www.spglobal.com/commodityinsights/en',
    language: 'en',
    tier: 2,
    focus: ['oil', 'energy', 'commodities'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'oilprice-venezuela',
    name: 'OilPrice.com - Venezuela',
    url: 'https://oilprice.com/rss/main',
    language: 'en',
    tier: 3,
    focus: ['oil', 'gas', 'energy'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'energy-intelligence',
    name: 'Energy Intelligence',
    url: 'https://www.energyintel.com/',
    language: 'en',
    tier: 2,
    focus: ['oil', 'gas', 'geopolitics'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  
  // === PORTUGUESE LANGUAGE SOURCES ===
  
  {
    id: 'folha-venezuela',
    name: 'Folha de S.Paulo - Venezuela',
    url: 'https://www1.folha.uol.com.br/rss/mundo.xml',
    language: 'pt',
    tier: 2,
    focus: ['latam', 'venezuela', 'international'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'oglobo-venezuela',
    name: 'O Globo - América Latina',
    url: 'https://oglobo.globo.com/rss.xml',
    language: 'pt',
    tier: 2,
    focus: ['latam', 'venezuela'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  
  // === INTERNATIONAL ORGANIZATIONS ===
  
  {
    id: 'opec-momr',
    name: 'OPEC Monthly Oil Market Report',
    url: 'https://www.opec.org/opec_web/en/publications/338.htm',
    language: 'en',
    tier: 1,
    focus: ['oil', 'production', 'markets'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'iea-venezuela',
    name: 'IEA - Venezuela Analysis',
    url: 'https://www.iea.org/',
    language: 'en',
    tier: 1,
    focus: ['energy', 'oil', 'analysis'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'eia-venezuela',
    name: 'U.S. EIA - Venezuela',
    url: 'https://www.eia.gov/international/analysis/country/VEN',
    language: 'en',
    tier: 1,
    focus: ['energy', 'statistics', 'analysis'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  }
];

// Venezuela-specific infrastructure data
export const VENEZUELA_INFRASTRUCTURE = {
  // Major oil fields
  oilFields: [
    { name: 'Orinoco Belt', lat: 8.5, lng: -64.0, production: 400000, type: 'heavy-crude' },
    { name: 'Lake Maracaibo', lat: 10.5, lng: -71.5, production: 200000, type: 'conventional' },
    { name: 'Eastern Venezuela Basin', lat: 9.0, lng: -62.5, production: 100000, type: 'conventional' }
  ],
  
  // Refineries
  refineries: [
    { name: 'Paraguaná Refinery Complex (Amuay + Cardón)', lat: 11.74, lng: -70.21, capacity: 955000, utilization: 0.10 },
    { name: 'El Palito Refinery', lat: 10.47, lng: -68.03, capacity: 130000, utilization: 0.15 },
    { name: 'Puerto La Cruz Refinery', lat: 10.21, lng: -64.63, capacity: 200000, utilization: 0.12 }
  ],
  
  // Export terminals
  exportTerminals: [
    { name: 'José Terminal', lat: 10.21, lng: -64.68, type: 'crude-export' },
    { name: 'Bajo Grande Terminal', lat: 10.64, lng: -71.74, type: 'crude-export' },
    { name: 'Puerto La Cruz Terminal', lat: 10.21, lng: -64.63, type: 'refined-products' }
  ],
  
  // Power plants
  powerPlants: [
    { name: 'Guri Dam (Simón Bolívar)', lat: 7.77, lng: -62.99, capacity: 10235, type: 'hydroelectric', operational: true },
    { name: 'Caruachi', lat: 7.65, lng: -62.97, capacity: 2160, type: 'hydroelectric', operational: true },
    { name: 'Macagua', lat: 8.22, lng: -62.73, capacity: 3140, type: 'hydroelectric', operational: true },
    { name: 'Planta Centro (Tacoa)', lat: 10.60, lng: -66.93, capacity: 2040, type: 'thermal', operational: false }
  ]
};

// Energy-specific keywords for threat classification
export const ENERGY_KEYWORDS = {
  critical: [
    'blackout', 'apagón', 'power outage', 'grid failure', 'refinery fire', 'oil spill',
    'production halt', 'sanctions', 'embargo', 'asset seizure', 'nationalization',
    'explosion', 'explosión', 'sabotage', 'sabotaje'
  ],
  high: [
    'PDVSA', 'Guri', 'Orinoco', 'Maracaibo', 'crude export', 'production cut',
    'debt default', 'impago', 'investment freeze', 'strike', 'huelga',
    'maintenance failure', 'equipment shortage'
  ],
  medium: [
    'oil price', 'precio del petróleo', 'export volume', 'refinery utilization',
    'power generation', 'generación eléctrica', 'transmission line', 'joint venture',
    'Chevron', 'CNPC', 'Rosneft'
  ],
  low: [
    'energy policy', 'política energética', 'production target', 'investment plan',
    'meeting', 'conference', 'statement', 'declaración'
  ]
};

// Sanctions-affected entities
export const SANCTIONED_ENTITIES = [
  { name: 'PDVSA', type: 'company', sanctionedBy: ['US', 'EU', 'UK', 'Canada'] },
  { name: 'PDVSA Petróleo S.A.', type: 'subsidiary', sanctionedBy: ['US'] },
  { name: 'Rosneft Trading S.A.', type: 'company', sanctionedBy: ['US'] },
  { name: 'Conviasa', type: 'airline', sanctionedBy: ['US'] },
  { name: 'CVG Electrificación del Caroní (EDELCA)', type: 'utility', sanctionedBy: ['US'] }
];

// Key monitoring thresholds
export const MONITORING_THRESHOLDS = {
  production: {
    critical: 500000, // bpd - below this is severe crisis
    warning: 700000,  // bpd - current baseline
    target: 1000000   // bpd - stated government goal
  },
  gridStability: {
    critical: 30,  // score below 30 = blackout imminent
    warning: 50,   // score below 50 = high risk
    normal: 70     // score above 70 = stable
  },
  guriReservoir: {
    critical: 240,  // meters - minimum operational level
    warning: 245,   // meters - risk of reduced generation
    normal: 270     // meters - full operational capacity
  },
  refiningUtilization: {
    critical: 5,    // % - essentially non-functional
    warning: 15,    // % - current degraded state
    target: 70      // % - necessary for domestic needs
  }
};

export default {
  VENEZUELA_NEWS_SOURCES,
  VENEZUELA_INFRASTRUCTURE,
  ENERGY_KEYWORDS,
  SANCTIONED_ENTITIES,
  MONITORING_THRESHOLDS
};
