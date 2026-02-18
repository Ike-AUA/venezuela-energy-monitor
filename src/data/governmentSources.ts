// Venezuela Energy Monitor - Enhanced Data Sources
// Includes: National Assembly, US Government Actions, Legal Proceedings Worldwide

export interface NewsSource {
  id: string;
  name: string;
  url: string;
  language: string;
  tier: 1 | 2 | 3 | 4;
  focus: string[];
  stateAffiliated: boolean;
  propagandaRisk: 'low' | 'medium' | 'high';
  updateFrequency?: string;
}

// ========================================
// VENEZUELA GOVERNMENT & LEGISLATIVE
// ========================================

export const VENEZUELA_OFFICIAL_SOURCES: NewsSource[] = [
  {
    id: 'asamblea-nacional-official',
    name: 'Asamblea Nacional de Venezuela (Official)',
    url: 'https://www.asambleanacional.gob.ve/',
    language: 'es',
    tier: 4,
    focus: ['legislation', 'energy-policy', 'government', 'laws'],
    stateAffiliated: true,
    propagandaRisk: 'high',
    updateFrequency: 'daily'
  },
  {
    id: 'asamblea-nacional-twitter',
    name: 'Asamblea Nacional Twitter (@Asamblea_Ven)',
    url: 'https://twitter.com/Asamblea_Ven',
    language: 'es',
    tier: 4,
    focus: ['legislation', 'announcements', 'government'],
    stateAffiliated: true,
    propagandaRisk: 'high',
    updateFrequency: 'real-time'
  },
  {
    id: 'pdvsa-official',
    name: 'PDVSA (Official)',
    url: 'http://www.pdvsa.com/',
    language: 'es',
    tier: 4,
    focus: ['pdvsa', 'oil', 'production', 'corporate'],
    stateAffiliated: true,
    propagandaRisk: 'high',
    updateFrequency: 'weekly'
  },
  {
    id: 'minpetroleo',
    name: 'Ministerio de Petróleo de Venezuela',
    url: 'http://www.mpetroleo.gob.ve/',
    language: 'es',
    tier: 4,
    focus: ['policy', 'oil', 'gas', 'regulation'],
    stateAffiliated: true,
    propagandaRisk: 'high',
    updateFrequency: 'weekly'
  }
];

// ========================================
// US GOVERNMENT SOURCES - VENEZUELA ACTIONS
// ========================================

export const US_GOVERNMENT_SOURCES: NewsSource[] = [
  // Treasury Department - OFAC
  {
    id: 'ofac-venezuela',
    name: 'US Treasury OFAC - Venezuela Sanctions',
    url: 'https://ofac.treasury.gov/sanctions-programs-and-country-information/venezuela-related-sanctions',
    language: 'en',
    tier: 1,
    focus: ['sanctions', 'legal', 'enforcement', 'treasury'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  {
    id: 'ofac-recent-actions',
    name: 'OFAC Recent Actions',
    url: 'https://ofac.treasury.gov/recent-actions',
    language: 'en',
    tier: 1,
    focus: ['sanctions', 'designations', 'general-licenses'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'daily'
  },
  {
    id: 'treasury-press-releases',
    name: 'US Treasury Press Releases - Venezuela',
    url: 'https://home.treasury.gov/news/press-releases',
    language: 'en',
    tier: 1,
    focus: ['sanctions', 'policy', 'enforcement'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  
  // Department of Energy
  {
    id: 'doe-venezuela',
    name: 'US Department of Energy - Venezuela',
    url: 'https://www.energy.gov/',
    language: 'en',
    tier: 1,
    focus: ['energy-policy', 'oil-deals', 'infrastructure'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  
  // State Department
  {
    id: 'state-dept-venezuela',
    name: 'US State Department - Venezuela',
    url: 'https://www.state.gov/countries-areas/venezuela/',
    language: 'en',
    tier: 1,
    focus: ['foreign-policy', 'sanctions', 'diplomacy'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  {
    id: 'us-embassy-venezuela',
    name: 'US Embassy Venezuela',
    url: 'https://ve.usembassy.gov/',
    language: 'en',
    tier: 1,
    focus: ['diplomatic', 'policy', 'announcements'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  
  // White House
  {
    id: 'whitehouse-venezuela',
    name: 'White House - Presidential Actions (Venezuela)',
    url: 'https://www.whitehouse.gov/presidential-actions/',
    language: 'en',
    tier: 1,
    focus: ['executive-orders', 'policy', 'sanctions'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  
  // Congress
  {
    id: 'congress-venezuela',
    name: 'US Congress - Venezuela Policy',
    url: 'https://www.congress.gov/',
    language: 'en',
    tier: 1,
    focus: ['legislation', 'oversight', 'sanctions'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  
  // Department of Defense
  {
    id: 'dod-venezuela',
    name: 'US Department of Defense',
    url: 'https://www.defense.gov/News/',
    language: 'en',
    tier: 1,
    focus: ['military', 'security', 'operations'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'daily'
  },
  
  // EIA Venezuela-specific
  {
    id: 'eia-venezuela-analysis',
    name: 'US EIA - Venezuela Country Analysis',
    url: 'https://www.eia.gov/international/analysis/country/VEN',
    language: 'en',
    tier: 1,
    focus: ['energy-statistics', 'production', 'analysis'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'monthly'
  }
];

// ========================================
// INTERNATIONAL GOVERNMENT & LEGAL
// ========================================

export const INTERNATIONAL_LEGAL_SOURCES: NewsSource[] = [
  // European Union
  {
    id: 'eu-sanctions-venezuela',
    name: 'EU Sanctions Map - Venezuela',
    url: 'https://www.sanctionsmap.eu/',
    language: 'en',
    tier: 1,
    focus: ['sanctions', 'legal', 'eu-policy'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  
  // United Kingdom
  {
    id: 'uk-sanctions-venezuela',
    name: 'UK OFSI - Venezuela Sanctions',
    url: 'https://www.gov.uk/government/collections/financial-sanctions-regime-specific-consolidated-lists-and-releases',
    language: 'en',
    tier: 1,
    focus: ['sanctions', 'legal', 'uk-policy'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  
  // Canada
  {
    id: 'canada-sanctions-venezuela',
    name: 'Canada - Venezuela Sanctions',
    url: 'https://www.international.gc.ca/world-monde/international_relations-relations_internationales/sanctions/venezuela.aspx',
    language: 'en',
    tier: 1,
    focus: ['sanctions', 'legal', 'canadian-policy'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  
  // International Court of Justice
  {
    id: 'icj-venezuela',
    name: 'International Court of Justice - Venezuela Cases',
    url: 'https://www.icj-cij.org/',
    language: 'en',
    tier: 1,
    focus: ['international-law', 'disputes', 'legal'],
    stateAffiliated: false,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  
  // UN
  {
    id: 'un-venezuela',
    name: 'UN News - Venezuela',
    url: 'https://news.un.org/en/tags/venezuela',
    language: 'en',
    tier: 1,
    focus: ['human-rights', 'international-law', 'humanitarian'],
    stateAffiliated: true,
    propagandaRisk: 'low',
    updateFrequency: 'daily'
  },
  
  // ICC
  {
    id: 'icc-venezuela',
    name: 'International Criminal Court - Venezuela',
    url: 'https://www.icc-cpi.int/',
    language: 'en',
    tier: 1,
    focus: ['crimes', 'investigation', 'legal'],
    stateAffiliated: false,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  }
];

// ========================================
// LEGAL & MONITORING ORGANIZATIONS
// ========================================

export const LEGAL_MONITORING_SOURCES: NewsSource[] = [
  {
    id: 'jurist-venezuela',
    name: 'JURIST - Venezuela Legal News',
    url: 'https://www.jurist.org/',
    language: 'en',
    tier: 2,
    focus: ['legal', 'sanctions', 'international-law'],
    stateAffiliated: false,
    propagandaRisk: 'low',
    updateFrequency: 'daily'
  },
  {
    id: 'opensanctions-venezuela',
    name: 'OpenSanctions - Venezuela',
    url: 'https://www.opensanctions.org/datasets/ve_asamblea_nacional/',
    language: 'en',
    tier: 2,
    focus: ['sanctions', 'entity-tracking', 'database'],
    stateAffiliated: false,
    propagandaRisk: 'low',
    updateFrequency: 'daily'
  },
  {
    id: 'sullivan-cromwell-venezuela',
    name: 'Sullivan & Cromwell - Venezuela Sanctions Analysis',
    url: 'https://www.sullcrom.com/',
    language: 'en',
    tier: 2,
    focus: ['legal-analysis', 'sanctions', 'compliance'],
    stateAffiliated: false,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  {
    id: 'mayer-brown-venezuela',
    name: 'Mayer Brown - Venezuela Legal Updates',
    url: 'https://www.mayerbrown.com/',
    language: 'en',
    tier: 2,
    focus: ['legal-analysis', 'sanctions', 'compliance'],
    stateAffiliated: false,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  {
    id: 'morgan-lewis-venezuela',
    name: 'Morgan Lewis - Venezuela Compliance',
    url: 'https://www.morganlewis.com/',
    language: 'en',
    tier: 2,
    focus: ['legal-analysis', 'sanctions', 'compliance'],
    stateAffiliated: false,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  }
];

// ========================================
// LEGISLATIVE TRACKING
// ========================================

export const LEGISLATIVE_TRACKING: NewsSource[] = [
  {
    id: 'directorio-legislativo-venezuela',
    name: 'Directorio Legislativo - Venezuela',
    url: 'https://directoriolegislativo.org/en/categoria/ingles/venezuela-en/',
    language: 'en',
    tier: 2,
    focus: ['legislation', 'assembly', 'democratic-process'],
    stateAffiliated: false,
    propagandaRisk: 'low',
    updateFrequency: 'as-announced'
  },
  {
    id: 'ipu-venezuela',
    name: 'Inter-Parliamentary Union - Venezuela',
    url: 'https://data.ipu.org/parliament/VE/VE-LC01/',
    language: 'en',
    tier: 2,
    focus: ['parliament', 'legislation', 'democracy'],
    stateAffiliated: false,
    propagandaRisk: 'low',
    updateFrequency: 'monthly'
  }
];

// ========================================
// EXISTING SOURCES (from original config)
// ========================================

export const VENEZUELA_NEWS_SOURCES: NewsSource[] = [
  // Spanish - Independent
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
  
  // English - Major outlets
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
  {
    id: 'aljazeera-venezuela',
    name: 'Al Jazeera - Venezuela',
    url: 'https://www.aljazeera.com/where/venezuela/',
    language: 'en',
    tier: 2,
    focus: ['venezuela', 'international', 'politics'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  
  // Energy Specialized
  {
    id: 'argus-latam',
    name: 'Argus Media - Latin America',
    url: 'https://www.argusmedia.com/en/news-and-insights/latest-market-news',
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
  
  // Portuguese
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
  
  // Think Tanks & Analysis
  {
    id: 'cfr-venezuela',
    name: 'Council on Foreign Relations - Venezuela',
    url: 'https://www.cfr.org/',
    language: 'en',
    tier: 2,
    focus: ['policy', 'analysis', 'geopolitics'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  {
    id: 'cgep-venezuela',
    name: 'Center on Global Energy Policy - Venezuela',
    url: 'https://www.energypolicy.columbia.edu/',
    language: 'en',
    tier: 2,
    focus: ['energy-policy', 'analysis', 'geopolitics'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  }
];

// ========================================
// CONSOLIDATED SOURCE LIST
// ========================================

export const ALL_SOURCES = [
  ...VENEZUELA_OFFICIAL_SOURCES,
  ...US_GOVERNMENT_SOURCES,
  ...INTERNATIONAL_LEGAL_SOURCES,
  ...LEGAL_MONITORING_SOURCES,
  ...LEGISLATIVE_TRACKING,
  ...VENEZUELA_NEWS_SOURCES
];

// ========================================
// SOURCE CATEGORIES FOR FILTERING
// ========================================

export const SOURCE_CATEGORIES = {
  venezuelaGovernment: VENEZUELA_OFFICIAL_SOURCES,
  usGovernment: US_GOVERNMENT_SOURCES,
  internationalLegal: INTERNATIONAL_LEGAL_SOURCES,
  legalMonitoring: LEGAL_MONITORING_SOURCES,
  legislativeTracking: LEGISLATIVE_TRACKING,
  news: VENEZUELA_NEWS_SOURCES
};

// ========================================
// EXECUTIVE ORDERS & LEGAL ACTIONS TRACKER
// ========================================

export const EXECUTIVE_ORDERS = [
  {
    id: 'eo-14373',
    title: 'E.O. 14373 - Safeguarding Venezuelan Oil Revenue',
    date: '2026-01-09',
    issuer: 'US President',
    url: 'https://www.whitehouse.gov/presidential-actions/2026/01/safeguarding-venezuelan-oil-revenue-for-the-good-of-the-american-and-venezuelan-people/',
    summary: 'Declares national emergency to protect Venezuelan oil revenue in US Treasury accounts from judicial attachment',
    impact: 'High'
  },
  {
    id: 'eo-13884',
    title: 'E.O. 13884 - Blocking Property of Government of Venezuela',
    date: '2019-08-05',
    issuer: 'US President',
    url: 'https://ofac.treasury.gov/',
    summary: 'Froze all property and interests in property of the Government of Venezuela',
    impact: 'Critical'
  },
  {
    id: 'eo-13850',
    title: 'E.O. 13850 - Blocking Property of Additional Persons',
    date: '2018-11-01',
    issuer: 'US President',
    url: 'https://ofac.treasury.gov/',
    summary: 'Authorizes sanctions on persons operating in oil, gold, and other sectors of Venezuelan economy',
    impact: 'Critical'
  }
];

// ========================================
// GENERAL LICENSES TRACKER
// ========================================

export const GENERAL_LICENSES = [
  {
    id: 'gl-46',
    title: 'General License 46 - Venezuelan-Origin Oil Activities',
    date: '2026-01-29',
    issuer: 'US Treasury OFAC',
    url: 'https://ofac.treasury.gov/recent-actions/20260129',
    summary: 'Authorizes certain activities involving Venezuelan-origin oil by established US entities',
    impact: 'High',
    status: 'Active'
  },
  {
    id: 'gl-5u',
    title: 'General License 5U - PDVSA 2020 Bond',
    date: '2026-02-02',
    issuer: 'US Treasury OFAC',
    url: 'https://ofac.treasury.gov/',
    summary: 'Authorizes transactions related to PDVSA 2020 8.5% Bond',
    impact: 'Medium',
    status: 'Active'
  },
  {
    id: 'gl-31b',
    title: 'General License 31B - IV National Assembly',
    date: '2023-01-09',
    issuer: 'US Treasury OFAC',
    url: 'https://ofac.treasury.gov/faqs/679',
    summary: 'Authorizes transactions with the IV National Assembly (2015 opposition-led assembly)',
    impact: 'Medium',
    status: 'Active'
  }
];

// ========================================
// API ENDPOINTS FOR GOVERNMENT DATA
// ========================================

export const GOVERNMENT_API_ENDPOINTS = {
  ofac: {
    sanctions: 'https://ofac.treasury.gov/recent-actions',
    sdn: 'https://ofac.treasury.gov/specially-designated-nationals-list-sdn-list',
    faqs: 'https://ofac.treasury.gov/faqs'
  },
  eia: {
    venezuela: 'https://api.eia.gov/v2/international/data',
    params: {
      country: 'VEN',
      product: 'CRUDE_OIL'
    }
  },
  whitehouse: {
    actions: 'https://www.whitehouse.gov/presidential-actions/'
  },
  congress: {
    legislation: 'https://api.congress.gov/v3'
  }
};

export default {
  ALL_SOURCES,
  SOURCE_CATEGORIES,
  EXECUTIVE_ORDERS,
  GENERAL_LICENSES,
  GOVERNMENT_API_ENDPOINTS
};
