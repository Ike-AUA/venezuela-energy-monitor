# Venezuela Energy Monitor - Technical Documentation

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Data Sources](#data-sources)
4. [Key Features](#key-features)
5. [Installation](#installation)
6. [API Integration](#api-integration)
7. [Deployment](#deployment)
8. [Contributing](#contributing)

---

## Overview

Venezuela Energy Monitor is a real-time intelligence dashboard focused on Venezuela's energy sector. It provides comprehensive monitoring of:

- **Oil & Gas**: Production, refineries, exports, PDVSA operations
- **Electrical Grid**: Power generation, Guri Dam, blackout tracking
- **Sanctions**: Impact analysis, entity tracking, timeline
- **Geopolitics**: Chinese/Russian involvement, Chevron operations
- **Environment**: Oil spills, gas flaring, deforestation

### Why This Matters

Venezuela holds the world's largest proven oil reserves (~303 billion barrels) but has experienced a catastrophic production collapse from 3.5M bpd (1998) to ~750k bpd (2026). This has:

- Triggered the largest refugee crisis in Latin American history (7M+ displaced)
- Created chronic electrical blackouts affecting millions
- Reshaped global oil markets and geopolitical alliances
- Caused severe environmental damage (Lake Maracaibo oil spills, uncontrolled flaring)

Tracking Venezuela's energy sector provides critical insights into regional stability, migration patterns, environmental disasters, and global energy security.

---

## Architecture

### Technology Stack

```
Frontend:
- React 18 + TypeScript
- Vite (build tool)
- MapLibre GL (interactive maps)
- deck.gl (WebGL-powered data visualization)
- Recharts (charts and analytics)

Backend/APIs:
- Vercel Edge Functions (lightweight API layer)
- Groq (AI summarization with Llama 3.1)
- Redis (Upstash) for caching

Data Sources:
- OPEC, EIA, Reuters, Bloomberg (energy data)
- Spanish-language Venezuelan media (Efecto Cocuyo, TalCual, Runrun.es)
- AIS maritime data (tanker tracking)
- NASA FIRMS (satellite fire/flaring detection)
- USGS (earthquake data for infrastructure risk)
```

### System Design Principles

Based on the World Monitor architecture, we follow these principles:

1. **Speed over perfection**: Instant keyword-based classification with async AI refinement
2. **Assume failure**: Per-source circuit breakers, graceful degradation
3. **Show what you can't see**: Explicit intelligence gaps when data sources fail
4. **Browser-first compute**: Client-side analysis reduces backend dependencies
5. **Multi-signal correlation**: Require convergence across multiple sources before escalating alerts
6. **Multilingual first**: Spanish, English, Portuguese treated equally

### Component Structure

```
src/
├── components/
│   ├── EnergyMap.tsx           # Interactive Venezuela infrastructure map
│   ├── ProductionDashboard.tsx # Oil production analytics
│   ├── GridStabilityIndex.tsx  # Electrical grid health monitoring
│   ├── NewsFeed.tsx             # Multilingual news aggregation
│   ├── SanctionsTracker.tsx    # Sanctions impact timeline
│   └── EnergyBrief.tsx         # AI-generated daily summary
├── data/
│   └── venezuelaConfig.ts      # Infrastructure data, news sources
├── utils/
│   ├── aiClassifier.ts         # Threat classification pipeline
│   ├── productionEstimator.ts  # ML-based production forecasting
│   └── gridStabilityScore.ts   # Real-time grid health algorithm
└── App.tsx                      # Main application
```

---

## Data Sources

### Primary Energy Data

| Source | Data Type | Update Frequency | Tier |
|--------|-----------|------------------|------|
| OPEC Monthly Report | Production estimates | Monthly | 1 |
| U.S. EIA | Statistical data | Weekly | 1 |
| S&P Global Platts | Pricing, refinery status | Daily | 2 |
| Argus Media | Latin American markets | Daily | 2 |
| TankerTrackers | Export monitoring | Real-time | 2 |

### Venezuelan News Sources (Multilingual)

**Spanish - Independent:**
- Efecto Cocuyo (Tier 2) - Investigative journalism
- TalCual Digital (Tier 2) - Economic/energy focus
- Runrun.es (Tier 2) - Political analysis
- La Patilla (Tier 3) - General news
- El Nacional (Tier 2) - Established outlet

**Spanish - Government:**
- PDVSA Official (Tier 4) - State company releases
- Ministry of Petroleum (Tier 4) - Policy announcements

**English:**
- Reuters Venezuela (Tier 1) - Wire service
- Bloomberg Venezuela Energy (Tier 1) - Financial focus
- Argus Media (Tier 2) - Oil market specialist

**Portuguese:**
- Folha de S.Paulo (Tier 2) - Brazilian coverage
- O Globo (Tier 2) - Regional analysis

### Infrastructure Monitoring

- **NASA FIRMS**: Satellite fire detection (flaring, oil spills)
- **Copernicus Sentinel**: Satellite imagery of facilities
- **OpenSky Network**: Helicopter traffic to platforms
- **MarineTraffic**: AIS tanker tracking from terminals
- **Cloudflare Radar**: Internet outages during blackouts

### Economic & Sanctions

- **U.S. Treasury OFAC**: Sanctions database
- **EU Sanctions Portal**: European measures
- **Bloomberg Terminal**: Crude pricing
- **World Bank**: Economic indicators
- **IMF**: Venezuela country analysis

---

## Key Features

### 1. Production Estimation Algorithm

Since official PDVSA data is often unreliable or delayed, we use a **confidence-weighted multi-source approach**:

```typescript
function estimateProduction(): number {
  const sources = [
    { value: pdvsaOfficial, confidence: 0.3, delay: 30 },    // Official (low trust)
    { value: opecSecondary, confidence: 0.9, delay: 7 },     // OPEC tracking (high trust)
    { value: satelliteAnalysis, confidence: 0.7, delay: 2 }, // Storage levels
    { value: exportData, confidence: 0.85, delay: 0 },       // Tanker tracking (real-time)
    { value: jvPartnerData, confidence: 0.8, delay: 14 }     // Chevron, CNPC disclosures
  ];
  
  // Weight by confidence and recency
  const weighted = sources.map(s => ({
    value: s.value,
    weight: s.confidence * Math.exp(-s.delay / 30) // Decay by 30-day half-life
  }));
  
  return weighted.reduce((sum, s) => sum + s.value * s.weight, 0) /
         weighted.reduce((sum, s) => sum + s.weight, 0);
}
```

### 2. Grid Stability Index (GSI)

Real-time score (0-100) predicting blackout probability:

```
GSI = 0.4 × guriLevel + 0.25 × thermalStatus + 0.2 × outageHistory + 0.15 × maintenanceBacklog

Components:
- guriLevel: (current - 240) / (270 - 240) × 100  [240m = critical, 270m = normal]
- thermalStatus: operationalPlants / totalPlants × 100
- outageHistory: exp(-blackoutsLast7Days / 3) × 100  [exponential penalty]
- maintenanceBacklog: (1 - overdueRepairs / totalEquipment) × 100
```

**Alert Thresholds:**
- GSI < 30: CRITICAL - Blackout imminent within 48h
- GSI 30-50: HIGH RISK - Localized outages likely
- GSI 50-70: UNSTABLE - Service interruptions possible
- GSI > 70: STABLE - Normal operations

### 3. Sanctions Impact Quantification

Each sanctions measure is mapped to:

```typescript
interface SanctionImpact {
  entity: string;              // PDVSA, Rosneft Trading, etc.
  sanctionedBy: string[];      // ['US', 'EU', 'UK']
  effectiveDate: Date;
  affectedFacilities: string[]; // Refineries, terminals, fields
  estimatedProductionLoss: number; // bpd
  estimatedRevenueLoss: number;    // USD/year
  evadedVia: string[];         // Dark tankers, front companies
}
```

**Cumulative Impact Calculation:**
- Total production loss: Sum of all measures since 2019
- Revenue impact: Production loss × crude price × days active
- Evasion correction: Reduce impact by estimated sanctions-busting volumes

### 4. Tanker Tracking & Dark Ships

AIS data from Venezuelan terminals analyzed for:

```typescript
interface TankerMovement {
  vessel: string;
  mmsi: number;               // Maritime Mobile Service Identity
  departure: Location;        // José Terminal, Puerto La Cruz
  destination: string;        // China, India, Cuba
  cargoEstimate: number;      // barrels (vessel size × 0.9)
  aisGaps: AISGap[];          // Transponder shutoffs
  shipToShipTransfers: STS[]; // Offshore crude blending
  frontCompany: boolean;      // Ownership obfuscation
}
```

**Dark Ship Detection:**
- AIS gap > 24h in international waters = potential evasion
- Ship-to-ship transfer in deep water = likely sanctions circumvention
- Multiple flag changes = ownership obfuscation
- Sudden speed drop near known blending zones = illegal transfer

### 5. Environmental Monitoring

**Lake Maracaibo Oil Slicks:**
- Sentinel-2 optical imagery (10m resolution)
- SAR (Synthetic Aperture Radar) for all-weather detection
- ML-based segmentation of oil vs. water
- Historical spill database (2000-present)

**Gas Flaring Hotspots:**
- NASA FIRMS VIIRS thermal anomalies
- Persistent high-temperature pixels = flaring sites
- Volume estimation via radiative transfer modeling
- Methane emission estimates (flaring efficiency ~95%)

---

## Installation

### Prerequisites

- Node.js 18+ and npm
- API keys (see .env.example)

### Local Development

```bash
# Clone repository
git clone https://github.com/yourusername/venezuela-energy-monitor.git
cd venezuela-energy-monitor

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Add your API keys to .env.local
nano .env.local

# Start development server
npm run dev
```

Open http://localhost:5173

### Building for Production

```bash
npm run build
npm run preview  # Test production build locally
```

---

## API Integration

### Required APIs

1. **Groq (AI Summarization)** - FREE
   - Sign up: https://console.groq.com
   - 6,000 requests/day on free tier
   - Used for: Daily energy briefs, threat classification

2. **Upstash Redis (Caching)** - FREE
   - Sign up: https://console.upstash.com
   - 10,000 commands/day on free tier
   - Used for: Deduplication, classification cache

3. **NASA FIRMS** - FREE
   - Sign up: https://firms.modaps.eosdis.nasa.gov/api/
   - Used for: Satellite fire/flaring detection

4. **EIA (Energy Data)** - FREE
   - Register: https://www.eia.gov/opendata/
   - Used for: Official U.S. energy statistics on Venezuela

### Optional Premium APIs

- **S&P Global Platts** (~$2,000/month) - Real-time oil pricing
- **Argus Media** (~$1,500/month) - Latin American markets
- **MarineTraffic** ($50-500/month) - Enhanced AIS tanker tracking
- **Sentinel Hub** ($0.10/km²) - High-res satellite imagery

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Settings → Environment Variables → Add each key from .env.example
```

### Alternative: Docker

```bash
# Build image
docker build -t venezuela-energy-monitor .

# Run container
docker run -p 5173:5173 \
  -e GROQ_API_KEY=your_key \
  -e UPSTASH_REDIS_REST_URL=your_url \
  venezuela-energy-monitor
```

---

## Contributing

### Priority Areas

1. **Additional Spanish News Sources** - Independent Venezuelan outlets
2. **Improved Production Estimation** - ML models trained on historical data
3. **Grid Outage Prediction** - Time-series forecasting for blackouts
4. **Sanctions Database Expansion** - Track vessel sanctions, front companies
5. **Translation Quality** - Better Spanish ↔ English NLP

### Development Workflow

```bash
# Create feature branch
git checkout -b feature/improved-production-model

# Make changes
# Write tests
npm test

# Submit pull request
git push origin feature/improved-production-model
```

### Code Style

- TypeScript strict mode enabled
- ESLint + Prettier for formatting
- Component-level documentation
- Explicit typing (no `any`)

---

## License

MIT License - See LICENSE file

---

## Disclaimer

This project is for **informational and research purposes only**. All data is sourced from publicly available information. The creators are not affiliated with PDVSA, the Venezuelan government, or any sanctioned entities. Users must comply with all applicable sanctions laws in their jurisdiction.

---

## Contact

- **Issues**: [GitHub Issues](https://github.com/yourusername/venezuela-energy-monitor/issues)
- **Documentation**: This file
- **Updates**: Follow repository for new features

---

**Last Updated**: February 2026
