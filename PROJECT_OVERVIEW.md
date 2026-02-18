# Venezuela Energy Monitor - Project Overview

## 🎯 Project Summary

A comprehensive, real-time energy intelligence dashboard focused on **Venezuela's energy sector**, built using the World Monitor architecture as a foundation. This application provides multilingual monitoring (Spanish, English, Portuguese) of:

- **Oil & Gas Production** (PDVSA, Orinoco Belt, Lake Maracaibo)
- **Electrical Grid Stability** (Guri Dam, power plants, blackout tracking)
- **Sanctions Impact** (U.S./EU measures, OFAC tracking)
- **Geopolitical Developments** (China/Russia involvement, Chevron operations)
- **Environmental Monitoring** (Oil spills, gas flaring, deforestation)

---

## 📁 Project Structure

```
venezuela-energy-monitor/
├── README.md                    # Main project documentation
├── QUICKSTART.md                # 5-minute setup guide
├── package.json                 # Dependencies and scripts
├── index.html                   # Entry point
├── vite.config.ts              # Build configuration
├── tsconfig.json               # TypeScript configuration
├── .env.example                # Environment variables template
│
├── docs/
│   └── DOCUMENTATION.md        # Comprehensive technical docs
│
└── src/
    ├── main.tsx                # Application entry point
    ├── App.tsx                 # Main application component
    ├── App.css                 # Global styles and theme
    │
    ├── components/             # React components
    │   ├── EnergyMap.tsx          # Interactive infrastructure map
    │   ├── ProductionDashboard.tsx # Oil production analytics
    │   ├── GridStabilityIndex.tsx # Electrical grid monitoring
    │   ├── NewsFeed.tsx           # Multilingual news aggregation
    │   ├── SanctionsTracker.tsx   # Sanctions impact timeline
    │   ├── EnergyBrief.tsx        # AI-generated daily summary
    │   └── index.tsx              # Component exports
    │
    └── data/
        └── venezuelaConfig.ts  # Infrastructure data, news sources, thresholds
```

---

## 🌟 Key Features

### 1. Interactive Energy Map
- **Oil Fields**: Orinoco Belt (400k bpd), Lake Maracaibo (200k bpd), Eastern Basin (100k bpd)
- **Refineries**: Paraguaná (955k bpd capacity, 10% utilization), El Palito, Puerto La Cruz
- **Power Plants**: Guri Dam (10,235 MW), thermal plants, operational status
- **Export Terminals**: José, Bajo Grande, Puerto La Cruz with tanker tracking

### 2. Production Analytics
- **Multi-source estimation**: OPEC, EIA, tanker tracking, satellite analysis
- **Regional breakdown**: Production by basin/field
- **AI forecasting**: 7/30/90-day production predictions
- **Historical trends**: Compare current vs. peak production (3.5M bpd in 1998)

### 3. Grid Stability Monitoring
- **Real-time score** (0-100): Blackout probability indicator
- **Guri Dam level**: Critical threshold monitoring (240m minimum)
- **Power plant status**: 12/28 operational plants tracked
- **Regional outages**: Caracas, Maracaibo, Bolívar, Carabobo coverage

### 4. Multilingual News Feed
- **50+ sources** in Spanish, English, Portuguese
- **Independent Venezuelan media**: Efecto Cocuyo, TalCual, Runrun.es
- **International coverage**: Reuters, Bloomberg, Argus Media
- **Auto-classification**: Severity (critical/high/medium/low) and category tagging

### 5. Sanctions Impact Tracker
- **38+ sanctioned entities**: PDVSA, Rosneft Trading, vessels, individuals
- **Timeline visualization**: Key measures from 2019-present
- **Quantified impact**: -2.7M bpd production loss, ~$120B revenue loss
- **Exemption tracking**: Chevron license and other special authorizations

### 6. AI Energy Brief
- **Daily synthesis**: LLM-powered summary of top developments
- **Multi-source**: Groq (Llama 3.1) with Redis caching
- **Multilingual output**: Adapts to user's language preference

---

## 🗂️ Data Sources

### Primary Sources (50+ total)

**Spanish - Independent Venezuelan:**
- Efecto Cocuyo, TalCual Digital, Runrun.es, La Patilla, El Nacional

**Spanish - Government:**
- PDVSA Official, Ministry of Petroleum (marked as state-affiliated)

**English:**
- Reuters, Bloomberg, Associated Press, Argus Media, S&P Global Platts

**Portuguese:**
- Folha de S.Paulo, O Globo

**Technical Data:**
- OPEC Monthly Report, U.S. EIA, NASA FIRMS, MarineTraffic, OpenSky Network

---

## 🔑 Key Differences from World Monitor

| Aspect | World Monitor | Venezuela Energy Monitor |
|--------|--------------|--------------------------|
| **Geographic Focus** | Global (200+ countries) | Venezuela-specific |
| **Domain Focus** | Geopolitics, military, conflicts | Energy sector (oil, gas, electrical grid) |
| **Languages** | Primarily English | Spanish, English, Portuguese (equal weight) |
| **Infrastructure** | Military bases, cables, datacenters | Oil fields, refineries, power plants, pipelines |
| **Key Metrics** | Country Instability Index | Grid Stability Index, Production Estimates |
| **Sanctions** | General tracking | Detailed OFAC/EU analysis with quantified impact |
| **Environmental** | General disasters | Energy-specific (oil spills, gas flaring) |

---

## 🚀 Quick Start

```bash
# Install
npm install

# Configure (optional - works without APIs)
cp .env.example .env.local

# Run
npm run dev

# Open browser
http://localhost:5173
```

**Works immediately** with mock data. Add free API keys for full functionality:
- Groq (AI summaries)
- Upstash Redis (caching)
- NASA FIRMS (satellite data)
- EIA (energy statistics)

---

## 📊 Monitoring Thresholds

### Oil Production
- 🔴 **Critical**: < 500k bpd (severe crisis)
- 🟡 **Warning**: 500-700k bpd (current degraded state)
- 🟢 **Target**: > 1M bpd (government goal)

### Grid Stability Index
- 🔴 **Critical**: < 30 (blackout imminent within 48h)
- 🟠 **High Risk**: 30-50 (localized outages likely)
- 🟡 **Unstable**: 50-70 (service interruptions possible)
- 🟢 **Stable**: > 70 (normal operations)

### Guri Dam Level
- 🔴 **Critical**: < 240m (cannot generate power)
- 🟡 **Warning**: 240-245m (reduced capacity)
- 🟢 **Normal**: > 270m (full operational capacity)

### Refinery Utilization
- 🔴 **Critical**: < 5% (essentially non-functional)
- 🟡 **Warning**: 5-15% (current degraded state)
- 🟢 **Target**: > 70% (meets domestic needs)

---

## 🛠️ Technology Stack

```
Frontend:
├── React 18 + TypeScript
├── Vite (build tool)
├── MapLibre GL (maps)
├── deck.gl (data viz)
└── Recharts (analytics)

Backend/APIs:
├── Vercel Edge Functions
├── Groq (Llama 3.1 AI)
└── Redis (Upstash)

Data:
├── RSS feeds (50+ sources)
├── OPEC, EIA, NASA
└── AIS maritime tracking
```

---

## 🌍 Use Cases

### Journalists & Researchers
- Track Venezuela energy developments in real-time
- Access multilingual sources in one dashboard
- Historical sanctions timeline for analysis
- Export data for investigative reporting

### Energy Analysts
- Monitor production trends and forecasts
- Assess sanctions impact on global oil markets
- Track Chevron operations under special license
- Analyze refinery utilization and export patterns

### NGOs & Humanitarian Organizations
- Correlate blackouts with humanitarian impacts
- Track migration patterns related to energy crisis
- Monitor environmental damage (Lake Maracaibo spills)
- Assess infrastructure degradation

### Policy Researchers
- Evaluate sanctions effectiveness
- Track Chinese/Russian energy involvement
- Assess electricity crisis and social unrest
- Model energy sector collapse impacts

---

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Interactive infrastructure map
- ✅ Multilingual news aggregation
- ✅ Basic production tracking
- ✅ Sanctions timeline

### Phase 2 (Next)
- [ ] Real API integration (replace mock data)
- [ ] Historical production database (1920-present)
- [ ] Advanced ML production forecasting
- [ ] Guri Dam satellite monitoring
- [ ] Mobile-responsive design

### Phase 3 (Future)
- [ ] Public API for researchers
- [ ] Mobile app with blackout alerts
- [ ] Cryptocurrency mining energy analysis
- [ ] Predictive blackout modeling
- [ ] Environmental damage quantification

---

## ⚖️ Legal & Ethical Considerations

### Sanctions Compliance
- **NO INTERACTION** with sanctioned entities
- Data is **publicly available only**
- Users must comply with applicable sanctions laws
- Tool is for **information/research purposes only**

### Data Privacy
- No personal data collection
- Public figures only (no private individuals)
- State-affiliated sources clearly marked
- Propaganda risk ratings provided

### Transparency
- All data sources cited
- Tier system indicates source reliability
- Government vs. independent media clearly labeled
- AI-generated content marked as such

---

## 📝 License

**MIT License** - Free and open source

See LICENSE file for full terms.

---

## 🆘 Support & Contributing

### Get Help
- **GitHub Issues**: Bug reports, feature requests
- **Documentation**: `docs/DOCUMENTATION.md`
- **Quick Start**: `QUICKSTART.md`

### Contribute
Priority areas:
1. Additional Spanish-language sources
2. Improved production estimation models
3. Grid outage prediction algorithms
4. Sanctions database expansion
5. Translation quality improvements

---

## 🙏 Acknowledgments

Built using the **World Monitor** architecture:
- https://github.com/koala73/worldmonitor
- Credit: Elie Habib (@koala73) and contributors

Inspired by the need for transparent, multilingual monitoring of Venezuela's energy crisis and its global implications.

---

## 📧 Contact

- **Repository**: https://github.com/yourusername/venezuela-energy-monitor
- **Issues**: https://github.com/yourusername/venezuela-energy-monitor/issues
- **Documentation**: See `docs/` folder

---

**Track Venezuela's energy sector with real-time, multilingual intelligence.** 🛢️⚡🗺️
