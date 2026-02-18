# Venezuela Energy Monitor - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies

```bash
cd venezuela-energy-monitor
npm install
```

### Step 2: Basic Configuration (Optional APIs)

Copy the environment template:

```bash
cp .env.example .env.local
```

**Minimum viable setup** (works without any API keys):
- The app will function with mock data
- Map and UI will render properly
- News sources will use RSS feeds (no API needed)

**Recommended setup** (requires free API keys):

```bash
# Open .env.local and add these FREE APIs:

# 1. Groq (for AI summaries) - https://console.groq.com
GROQ_API_KEY=gsk_your_key_here

# 2. Upstash Redis (for caching) - https://console.upstash.com
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here

# 3. NASA FIRMS (satellite data) - https://firms.modaps.eosdis.nasa.gov/api/
NASA_FIRMS_API_KEY=your_key_here

# 4. EIA (energy stats) - https://www.eia.gov/opendata/
EIA_API_KEY=your_key_here
```

All these services have **free tiers** that are sufficient for development and personal use.

### Step 3: Run Development Server

```bash
npm run dev
```

Open your browser to: **http://localhost:5173**

---

## 🎯 What You'll See

### Main Dashboard

- **Header**: Real-time metrics (oil production, grid stability, refining utilization, Guri Dam level)
- **Navigation**: Switch between Map, Production, Grid, News, and Sanctions views
- **AI Brief**: Daily AI-generated summary of Venezuela energy sector developments

### Interactive Map (Default View)

Toggle infrastructure layers:
- 🔴 **Oil Fields** - Orinoco Belt, Lake Maracaibo, Eastern Basin (size = production volume)
- 🟡 **Refineries** - Paraguaná, El Palito, Puerto La Cruz (with utilization %)
- 🟢 **Power Plants** - Guri Dam, thermal plants (green = operational, red = down)
- 🔵 **Export Terminals** - José, Bajo Grande, Puerto La Cruz

Click any marker for detailed information.

---

## 📊 Key Features to Explore

### 1. Production Dashboard
- Current oil production estimate (750k bpd)
- Regional breakdown (Orinoco, Maracaibo, Eastern)
- AI-powered production forecast (7/30/90 days)

### 2. Grid Stability Index
- Real-time stability score (0-100)
- Guri Dam reservoir level (critical threshold: 240m)
- Operational power plants tracking
- Regional grid status (Caracas, Maracaibo, Bolívar, Carabobo)

### 3. Live News Feed (Multilingual)
- 50+ Spanish, English, and Portuguese sources
- Filter by language or view all
- Automatic entity extraction (PDVSA, Guri, politicians)
- Severity classification (critical, high, medium, low)

### 4. Sanctions Tracker
- 38+ sanctioned entities timeline
- Estimated production impact: -2.7M bpd since 2019
- Revenue loss calculation: ~$120B cumulative
- Active exemptions (Chevron license)

---

## 🔧 Customization

### Add Your Own News Sources

Edit `src/data/venezuelaConfig.ts`:

```typescript
export const VENEZUELA_NEWS_SOURCES: NewsSource[] = [
  {
    id: 'your-source',
    name: 'Your News Outlet',
    url: 'https://example.com/feed/',
    language: 'es',
    tier: 2,
    focus: ['venezuela', 'energy'],
    stateAffiliated: false,
    propagandaRisk: 'low'
  },
  // ... existing sources
];
```

### Adjust Monitoring Thresholds

Modify alert levels in `src/data/venezuelaConfig.ts`:

```typescript
export const MONITORING_THRESHOLDS = {
  production: {
    critical: 500000, // Change to your desired threshold (bpd)
    warning: 700000,
    target: 1000000
  },
  gridStability: {
    critical: 30,  // Below 30 = blackout imminent
    warning: 50,
    normal: 70
  }
};
```

---

## 🌐 Multilingual Support

The app automatically detects and handles content in:

- **Spanish** (Español) - Primary language for Venezuelan sources
- **English** - International news and analysis
- **Portuguese** (Português) - Brazilian regional coverage

Use the language selector in the header to filter news by language or view all simultaneously.

---

## 📡 Data Update Frequencies

| Data Type | Update Frequency | Source |
|-----------|------------------|--------|
| Oil Production | Daily | OPEC secondary sources, tanker tracking |
| Grid Stability | Real-time | Outage reports, social media monitoring |
| News Articles | Real-time | RSS feeds (every 5 minutes) |
| Refinery Status | Weekly | Industry reports |
| Guri Dam Level | Weekly | Satellite imagery + official reports |
| Sanctions | As announced | OFAC, EU databases |

---

## 🛠️ Troubleshooting

### Map doesn't load
- Check browser console for errors
- Ensure MapLibre GL is properly installed: `npm install maplibre-gl`
- Verify no ad blocker is blocking map tiles

### News feed is empty
- RSS feeds may be blocked by CORS - this is normal in development
- Deploy to Vercel to enable proper proxy
- Or temporarily disable CORS in browser for testing

### API rate limits
All free-tier APIs should work for development:
- Groq: 6,000 requests/day
- Upstash Redis: 10,000 commands/day
- NASA FIRMS: Unlimited for non-commercial use
- EIA: 1,000 requests/day

---

## 🚢 Production Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts to set up project
# Add environment variables in Vercel dashboard
```

### Environment Variables in Vercel

1. Go to your project in Vercel dashboard
2. Settings → Environment Variables
3. Add each key from `.env.example`
4. Redeploy: `vercel --prod`

---

## 📚 Next Steps

1. **Read Full Documentation**: `docs/DOCUMENTATION.md`
2. **Explore World Monitor**: Check the original project structure at https://github.com/koala73/worldmonitor
3. **Customize Data Sources**: Add your preferred Venezuelan news outlets
4. **Integrate Real APIs**: Replace mock data with live API calls
5. **Deploy**: Share your dashboard with colleagues or the public

---

## 🆘 Getting Help

- **GitHub Issues**: Report bugs or request features
- **Documentation**: Full technical docs in `docs/DOCUMENTATION.md`
- **World Monitor Reference**: Check the original architecture

---

## ⚖️ Important Disclaimers

1. **Sanctions Compliance**: Ensure your use complies with applicable sanctions laws
2. **Data Accuracy**: Production estimates may vary from official figures
3. **Non-Affiliation**: Not affiliated with PDVSA, Venezuelan government, or sanctioned entities
4. **Research Purpose**: This tool is for informational and analytical purposes only

---

**Happy Monitoring! 🛢️⚡**

*Track Venezuela's energy sector with real-time, multilingual intelligence.*
