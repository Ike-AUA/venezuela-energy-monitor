# Venezuela Energy Monitor

**Real-time energy intelligence dashboard** — AI-powered monitoring of Venezuela's energy sector including oil production, refineries, electrical grid, sanctions impact, PDVSA operations, and geopolitical implications.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[**Live Demo**](#) · [**Full Documentation**](docs/DOCUMENTATION.md)

---

## Why Venezuela Energy Monitor?

| Problem | Solution |
|---------|----------|
| Energy news scattered across sources in multiple languages | **Unified dashboard** with Spanish, English, Portuguese, and other language sources |
| No centralized PDVSA operations tracking | **Real-time monitoring** of production, refineries, exports |
| Sanctions impact unclear | **Sanctions timeline** with effects on production and revenue |
| Electrical grid blackouts unpredictable | **Grid health indicators** with outage tracking and forecasting |
| Oil market dynamics complex | **Price tracking** with Venezuela differential and export routes |

---

## Key Features

### Interactive Energy Map

* **Oil & Gas Infrastructure** — refineries, oil fields, pipelines, storage facilities, export terminals
* **Electrical Grid** — power plants (hydroelectric, thermal), transmission lines, substations
* **Production Zones** — Orinoco Belt, Lake Maracaibo, Eastern Venezuela Basin
* **Export Routes** — tanker tracking to China, India, Cuba, and other destinations
* **Sanctions Impact Zones** — facilities affected by U.S., EU, and international sanctions
* **Environmental Monitoring** — oil spills, gas flaring, deforestation from illegal mining

### AI-Powered Intelligence

* **Energy Brief** — Daily AI-synthesized summary of Venezuela energy developments
* **Production Forecast** — ML-based oil production predictions using historical data
* **Sanctions Impact Analysis** — Automated assessment of policy changes on energy sector
* **Grid Stability Index** — Real-time electrical system health score (0-100)
* **PDVSA Financial Health** — Revenue tracking, debt analysis, investment flows
* **Geopolitical Risk Score** — Impact of Venezuela tensions on global energy markets

### Real-Time Data Layers

**Oil & Gas**
* PDVSA production data (official and estimated)
* Refinery utilization rates (Amuay, Cardón, El Palito, Puerto La Cruz)
* Export volumes by destination country
* Crude quality and pricing (Merey 16, BCF-17, Zuata Sweet)
* Joint venture operations (Chevron, CNPC, Rosneft)
* Illegal extraction and contraband tracking

**Electrical System**
* Guri Dam (Simón Bolívar Hydroelectric Plant) operations
* Thermal power plant status across Venezuela
* Transmission network health and outages
* Regional blackout history and patterns
* Generation capacity vs. demand analytics

**Economic & Trade**
* Venezuela crude price differentials
* Export routes and volumes (AIS vessel tracking)
* Cryptocurrency mining operations (energy drain analysis)
* Gold-for-oil barter arrangements
* Chinese and Russian investment flows

**Multilingual News Sources**
* **Spanish**: TalCual, Efecto Cocuyo, El Nacional, Runrun.es, La Patilla
* **English**: Reuters, Bloomberg Energy, Argus Media, S&P Global Platts
* **Portuguese**: Folha de S.Paulo, O Globo (regional coverage)
* **Government Sources**: PDVSA official releases, Venezuelan Ministry of Energy
* **International**: OPEC reports, IEA Venezuela analysis, EIA country briefs

### Signal Aggregation & Anomaly Detection

* **Production Anomaly Detection** — Flags unusual drops/spikes in oil output
* **Blackout Prediction** — Pattern recognition for grid failures
* **Tanker Movement Anomalies** — Identifies dark ships, sanctions evasion
* **Price Deviation Alerts** — Venezuela discount to Brent/WTI tracking
* **Social Unrest Correlation** — Energy sector protests and strikes

### Key Metrics Dashboard

| Metric | Source | Update Frequency |
|--------|--------|------------------|
| Daily Oil Production | PDVSA / OPEC Secondary Sources | Daily |
| Refinery Utilization | Industry Reports | Weekly |
| Export Volumes | AIS Tanker Tracking | Real-time |
| Grid Uptime % | Outage Tracking Network | Real-time |
| Venezuela Crude Discount | Market Data | Daily |
| Guri Dam Reservoir Level | Satellite Imagery + Reports | Weekly |
| Power Generation Capacity | Government + Estimates | Monthly |

---

## How It Works

### Oil Production Tracking

The system aggregates multiple production estimates:

1. **Official PDVSA data** (when available, often delayed/unreliable)
2. **OPEC secondary sources** (tanker tracking, facility monitoring)
3. **Satellite imagery analysis** (oil storage levels, flaring intensity)
4. **Export data** (AIS vessel tracking from terminals)
5. **Joint venture partner disclosures** (Chevron, CNPC)

A confidence-weighted average provides the most reliable production estimate, with historical trends and ML forecasting.

### Grid Stability Index

Real-time score (0-100) combining:

| Component | Weight | Details |
|-----------|--------|---------|
| **Guri Dam Level** | 40% | Reservoir capacity (critical for 70% of national power) |
| **Thermal Plant Status** | 25% | Number of operational thermal plants |
| **Recent Outages** | 20% | Frequency and severity of blackouts (7-day window) |
| **Maintenance Backlog** | 15% | Equipment age and known failures |

Scores below 30 trigger critical alerts (blackout imminent). Historical patterns predict regional outage probability.

### Sanctions Impact Analysis

Every sanctions announcement is parsed and mapped to affected entities:

* **Entity-level tracking**: PDVSA, Rosneft Trading, CNPC subsidiaries, tanker companies
* **Facility impact**: Which refineries, terminals, or fields are affected
* **Secondary effects**: Reduced exports, lost revenue, equipment shortages
* **Evasion tactics**: Dark tankers, ship-to-ship transfers, front companies

The system maintains a sanctions timeline with quantified production/revenue impact for each measure.

### Multilingual NLP Pipeline

News articles are processed through:

1. **Language detection** (Spanish, English, Portuguese, others)
2. **Entity extraction** (PDVSA, Guri Dam, specific oil fields, politicians)
3. **Translation layer** (optional - displays in user's preferred language)
4. **Sentiment analysis** (crisis severity, policy tone)
5. **Cross-language deduplication** (same story across languages)

### Tanker Tracking & Export Routes

AIS data from Venezuelan export terminals (José, Puerto La Cruz) is analyzed for:

* **Volume estimation** (tanker size × trips)
* **Destination tracking** (China receives ~60% of exports)
* **Dark ship detection** (AIS transponder shutoffs, sanctions evasion)
* **Ship-to-ship transfers** (offshore crude blending to hide origin)
* **Transit time analysis** (route efficiency, delays)

### Environmental Monitoring

* **NASA FIRMS satellite fire detection** — Gas flaring hotspots, oil spill burns
* **Sentinel-2 imagery** — Oil slicks in Lake Maracaibo, coastal spills
* **Deforestation tracking** — Illegal gold mining in southern Venezuela (diesel fuel diversion)
* **Air quality data** — Refinery emissions, flaring impact

---

## Venezuela Energy Context

### Current Situation (2026)

* **Oil Production**: ~700,000-800,000 bpd (down from 3.5M peak in 1998)
* **Refining Capacity**: ~1.3M bpd nameplate (only ~10-15% operational)
* **Electrical Grid**: Chronic instability, frequent nationwide blackouts
* **Sanctions Status**: Partial U.S. relief (Chevron license), EU restrictions remain
* **Key Challenges**: Underinvestment, brain drain, equipment failures, corruption

### Critical Dependencies

* **Guri Dam**: Provides 70% of national electricity (vulnerable to drought)
* **Chinese Financing**: Loans-for-oil agreements, major creditor
* **Chevron**: Only remaining major Western operator (limited license)
* **CNPC**: Orinoco Belt joint ventures, significant production share
* **Cuban Oil Supply**: Venezuela historically subsidized Cuban energy needs

### Strategic Importance

* **Global Oil Markets**: Venezuela holds world's largest proven reserves (~303B barrels)
* **Geopolitical Leverage**: Russia, China, Iran use energy sector for influence
* **Migration Crisis**: Energy collapse contributes to humanitarian exodus
* **Caribbean Stability**: Reduced Petrocaribe program affects regional politics
* **Climate**: Methane flaring, oil spills create environmental disasters

---

## Data Sources

### Primary Energy Data
* **OPEC Monthly Oil Market Report** (Venezuela secondary sources)
* **U.S. EIA International Energy Statistics**
* **S&P Global Platts** (crude pricing, refinery status)
* **Argus Media** (Latin American crude markets)
* **TankerTrackers.com** (export monitoring via satellite/AIS)

### Venezuelan News (Multilingual)
* **Spanish**: Efecto Cocuyo, TalCual Digital, Runrun.es, La Patilla, El Nacional
* **Spanish (Government)**: PDVSA.com, MinPetroleo official
* **English**: Reuters Venezuela, Bloomberg Venezuela Energy
* **Portuguese**: Folha Brasil, O Globo América Latina
* **International**: Associated Press, Agence France-Presse

### Technical Monitoring
* **NASA FIRMS** (fire/flaring detection)
* **Copernicus Sentinel** (satellite imagery of infrastructure)
* **OpenSky Network** (helicopter traffic to offshore platforms)
* **MarineTraffic** (tanker AIS tracking)
* **Cloudflare Radar** (internet outages during blackouts)

### Economic & Sanctions
* **U.S. Treasury OFAC** (sanctions list)
* **EU Sanctions Database**
* **Bloomberg Terminal** (crude pricing, differentials)
* **World Bank Venezuela Data**
* **IMF Venezuela Reports**

---

## Quick Start

```bash
# Clone and run
git clone https://github.com/yourusername/venezuela-energy-monitor.git
cd venezuela-energy-monitor
npm install
npm run dev
```

Open http://localhost:5173

### Environment Variables

Create `.env.local`:

```bash
# AI Analysis (Groq)
GROQ_API_KEY=gsk_xxx

# Caching (Upstash Redis)
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxx

# Tanker Tracking
MARINETRAFFIC_API_KEY=xxx

# Satellite Imagery
NASA_FIRMS_API_KEY=xxx
SENTINEL_HUB_CLIENT_ID=xxx
SENTINEL_HUB_CLIENT_SECRET=xxx

# Energy Data
EIA_API_KEY=xxx
PLATTS_API_KEY=xxx

# News APIs
NEWSAPI_KEY=xxx
```

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | TypeScript, Vite, React, deck.gl (WebGL), MapLibre GL |
| **AI/ML** | Groq (Llama 3.1), TensorFlow.js (time series forecasting) |
| **Caching** | Redis (Upstash) |
| **APIs** | EIA, OPEC, MarineTraffic, NASA FIRMS, Sentinel Hub, NewsAPI |
| **Deployment** | Vercel Edge Functions |
| **Data Processing** | Multilingual NLP (spaCy), sentiment analysis, AIS parsing |

---

## Architecture Principles

| Principle | Implementation |
|-----------|----------------|
| **Multilingual First** | Spanish, English, Portuguese sources treated equally |
| **Skeptical of Official Data** | PDVSA figures cross-checked with OPEC, satellite, export data |
| **Sanctions Compliance** | All data sources comply with international sanctions |
| **Environmental Focus** | Track ecological damage from energy operations |
| **Humanitarian Context** | Connect energy failures to migration, health impacts |

---

## Contributing

Contributions welcome! Areas of interest:

* Additional Spanish-language energy news sources
* Improved oil production estimation models
* Grid outage prediction algorithms
* Sanctions database updates
* Translation improvements

---

## Roadmap

- [ ] Historical production database (1920-present)
- [ ] Guri Dam reservoir satellite monitoring integration
- [ ] Real-time refinery utilization tracker
- [ ] PDVSA debt restructuring timeline
- [ ] Venezuelan electrical grid map with transmission lines
- [ ] Cryptocurrency mining energy drain calculator
- [ ] Mobile app for blackout alerts
- [ ] API for researchers and journalists

---

## License

MIT License — see LICENSE for details.

---

## Disclaimer

This project is for informational and research purposes only. All data is sourced from publicly available information. The creators are not affiliated with PDVSA, the Venezuelan government, or any sanctioned entities.

---

## Contact

**Issues**: [GitHub Issues](https://github.com/yourusername/venezuela-energy-monitor/issues)
**Documentation**: [Full Docs](docs/DOCUMENTATION.md)

---

*Stay informed about Venezuela's energy sector with real-time, multilingual intelligence.*
