import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY || 'demo-key');

// Token usage tracker
let dailyTokensUsed = 0;
const MAX_DAILY_TOKENS = 50000; // Safety limit

// Cache management
interface CacheEntry {
  data: any;
  timestamp: number;
  tokensUsed: number;
}

const cache = new Map<string, CacheEntry>();
const CACHE_DURATION = 4 * 60 * 60 * 1000; // 4 hours

function getCacheKey(type: string, params?: any): string {
  return `${type}_${JSON.stringify(params || {})}`;
}

function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;
  
  const age = Date.now() - entry.timestamp;
  if (age > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }
  
  console.log(`✅ Cache hit for ${key} (${Math.round(age / 60000)} min old)`);
  return entry.data as T;
}

function setCache(key: string, data: any, tokensUsed: number): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
    tokensUsed
  });
}

function canMakeRequest(): boolean {
  if (dailyTokensUsed >= MAX_DAILY_TOKENS) {
    console.warn('⚠️ Daily token limit reached. Using cached data.');
    return false;
  }
  return true;
}

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

// Reset daily counter at midnight
setInterval(() => {
  const now = new Date();
  if (now.getHours() === 0 && now.getMinutes() === 0) {
    console.log('🔄 Resetting daily token counter');
    dailyTokensUsed = 0;
  }
}, 60000);

export async function getDailyEnergyBrief(language: 'en' | 'es' = 'en'): Promise<string> {
  const cacheKey = getCacheKey('daily_brief', { language, date: new Date().toDateString() });
  
  // Check cache first
  const cached = getCached<string>(cacheKey);
  if (cached) return cached;
  
  // Check API key
  if (!API_KEY || API_KEY === 'demo-key') {
    return language === 'es' 
      ? '⚠️ Clave API de Gemini no configurada. Por favor agrega tu clave VITE_GEMINI_API_KEY en .env.local'
      : '⚠️ Gemini API key not configured. Please add your VITE_GEMINI_API_KEY in .env.local';
  }
  
  if (!canMakeRequest()) {
    return cached || 'Using cached data to preserve API tokens.';
  }
  
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-pro',
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 800,
      }
    });
    
    const prompt = language === 'es' 
      ? `Genera un informe breve del sector energético de Venezuela para hoy ${new Date().toLocaleDateString('es-ES')}.

Incluye SOLO si hay información reciente:
1. Producción petrolera (estimaciones actuales)
2. Estado de la red eléctrica (Represa de Guri, apagones)
3. Acciones gubernamentales (PDVSA, Asamblea Nacional)
4. Actualizaciones de sanciones (OFAC, internacional)

Formato: párrafos cortos, 200-250 palabras.
Sé conciso y factual. Si no hay noticias nuevas, indícalo.`
      : `Generate a brief Venezuela energy sector update for today ${new Date().toLocaleDateString('en-US')}.

Include ONLY if there's recent information:
1. Oil production (current estimates)
2. Electrical grid status (Guri Dam, blackouts)
3. Government actions (PDVSA, National Assembly)
4. Sanctions updates (OFAC, international)

Format: short paragraphs, 200-250 words.
Be concise and factual. If no new developments, state that.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    const tokensUsed = estimateTokens(prompt) + estimateTokens(text);
    dailyTokensUsed += tokensUsed;
    
    console.log(`📊 Tokens used: ${tokensUsed} | Daily total: ${dailyTokensUsed}/${MAX_DAILY_TOKENS}`);
    
    setCache(cacheKey, text, tokensUsed);
    return text;
    
  } catch (error) {
    console.error('Gemini API Error:', error);
    const cached = cache.get(cacheKey);
    if (cached) {
      return `[Cached] ${cached.data}`;
    }
    return 'Unable to generate brief. Please check your API key and try again.';
  }
}

export function getTokenStats(): {
  usedToday: number;
  limit: number;
  percentage: number;
  canMakeRequests: boolean;
} {
  return {
    usedToday: dailyTokensUsed,
    limit: MAX_DAILY_TOKENS,
    percentage: (dailyTokensUsed / MAX_DAILY_TOKENS) * 100,
    canMakeRequests: canMakeRequest()
  };
}

export function shouldUpdateNow(): boolean {
  const now = new Date();
  const hour = now.getHours();
  
  // Update at 6 AM, 12 PM, 6 PM
  const updateHours = [6, 12, 18];
  
  if (!updateHours.includes(hour)) {
    return false;
  }
  
  const lastUpdate = localStorage.getItem('lastBriefUpdate');
  if (lastUpdate) {
    const lastHour = new Date(lastUpdate).getHours();
    if (lastHour === hour) {
      return false;
    }
  }
  
  return true;
}

export function markUpdateComplete(): void {
  localStorage.setItem('lastBriefUpdate', new Date().toISOString());
}
