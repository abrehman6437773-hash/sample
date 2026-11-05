const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'assets', 'images');
const musicDir = path.join(__dirname, 'assets', 'music');

if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(musicDir)) fs.mkdirSync(musicDir, { recursive: true });

const images = [
  {
    name: 'memory-1.svg',
    title: 'Starry Starlight',
    subtitle: 'A night full of dreams & sparkling wonder',
    symbol: 'stars',
    color1: '#150A2A',
    color2: '#4A1273',
    accent: '#C8B6FF'
  },
  {
    name: 'memory-2.svg',
    title: 'Sweet Radiance',
    subtitle: 'A smile that lights up every room',
    symbol: 'heart',
    color1: '#26083B',
    color2: '#7B2CBF',
    accent: '#FFB6D9'
  },
  {
    name: 'memory-3.svg',
    title: 'Crescent Whispers',
    subtitle: 'Graceful wishes sent to the silver night',
    symbol: 'moon',
    color1: '#0E0728',
    color2: '#3C096C',
    accent: '#E0AAFF'
  },
  {
    name: 'memory-4.svg',
    title: 'Midnight Sparkles',
    subtitle: 'Cherished laughter and endless joy',
    symbol: 'sparkles',
    color1: '#1E0E3D',
    color2: '#9D4EDD',
    accent: '#FDE2E4'
  },
  {
    name: 'memory-5.svg',
    title: 'Lavender Blossom',
    subtitle: 'Elegance, charm and gentle warmth',
    symbol: 'flower',
    color1: '#240046',
    color2: '#5A189A',
    accent: '#D8B4E2'
  },
  {
    name: 'memory-6.svg',
    title: 'Celebration of You',
    subtitle: 'Another wonderful chapter of brilliance',
    symbol: 'cake',
    color1: '#130924',
    color2: '#7209B7',
    accent: '#FFCCD5'
  },
  {
    name: 'memory-7.svg',
    title: 'Golden Aura',
    subtitle: 'Luminous spirit and graceful heart',
    symbol: 'sparkles',
    color1: '#22083A',
    color2: '#6A0572',
    accent: '#FFDFBA'
  },
  {
    name: 'memory-8.svg',
    title: 'Constellation of Dreams',
    subtitle: 'Every star aligned in your honor',
    symbol: 'stars',
    color1: '#11052C',
    color2: '#3D087B',
    accent: '#B8C0FF'
  },
  {
    name: 'memory-9.svg',
    title: 'Forever Cherished',
    subtitle: 'Special moments kept close to the heart',
    symbol: 'heart',
    color1: '#200A38',
    color2: '#8338EC',
    accent: '#FFC6FF'
  }
];

function getSymbolSvg(symbol, accent) {
  switch (symbol) {
    case 'stars':
      return `
        <polygon points="300,140 314,200 375,215 314,230 300,290 286,230 225,215 286,200" fill="#FFFFFF" filter="url(#glow)" />
        <circle cx="210" cy="150" r="4" fill="#FFB6D9" />
        <circle cx="390" cy="160" r="5" fill="#C8B6FF" />
        <circle cx="200" cy="270" r="4" fill="#E2E8F0" />
        <circle cx="390" cy="270" r="5" fill="#FFD166" />
      `;
    case 'heart':
      return `
        <path d="M300,270 C230,200 180,140 240,110 C275,90 300,130 300,140 C300,130 325,90 360,110 C420,140 370,200 300,270 Z" fill="#FFB6D9" filter="url(#glow)" />
        <circle cx="280" cy="135" r="8" fill="#FFFFFF" opacity="0.6" />
      `;
    case 'moon':
      return `
        <path d="M340,130 C270,140 220,190 230,260 C240,310 290,340 340,330 C280,330 240,290 240,225 C240,165 285,135 340,130 Z" fill="#F8FAFC" filter="url(#glow)" />
        <polygon points="360,180 365,195 380,200 365,205 360,220 355,205 340,200 355,195" fill="#FFD166" filter="url(#glow)" />
      `;
    case 'sparkles':
      return `
        <polygon points="300,120 312,190 380,200 312,210 300,280 288,210 220,200 288,190" fill="#FDE2E4" filter="url(#glow)" />
        <polygon points="390,240 396,260 415,265 396,270 390,290 384,270 365,265 384,260" fill="#FFB6D9" filter="url(#glow)" />
        <polygon points="210,140 215,155 230,160 215,165 210,180 205,165 190,160 205,155" fill="#C8B6FF" filter="url(#glow)" />
      `;
    case 'flower':
      return `
        <g filter="url(#glow)">
          <ellipse cx="300" cy="165" rx="26" ry="42" fill="#C8B6FF" opacity="0.9" />
          <ellipse cx="300" cy="255" rx="26" ry="42" fill="#C8B6FF" opacity="0.9" />
          <ellipse cx="255" cy="210" rx="42" ry="26" fill="#C8B6FF" opacity="0.9" />
          <ellipse cx="345" cy="210" rx="42" ry="26" fill="#C8B6FF" opacity="0.9" />
          <circle cx="300" cy="210" r="22" fill="#FFD166" />
        </g>
      `;
    case 'cake':
    default:
      return `
        <rect x="230" y="215" width="140" height="65" rx="12" fill="#C8B6FF" filter="url(#glow)" />
        <rect x="250" y="165" width="100" height="50" rx="8" fill="#FFB6D9" />
        <path d="M250,175 Q262,190 275,175 Q287,190 300,175 Q312,190 325,175 Q337,190 350,175" stroke="#FFFFFF" stroke-width="4" fill="none" stroke-linecap="round" />
        <rect x="296" y="130" width="8" height="35" rx="4" fill="#FFFFFF" />
        <path d="M300,110 C290,125 292,130 300,135 C308,130 310,125 300,110 Z" fill="#FFB703" filter="url(#glow)" />
      `;
  }
}

images.forEach(img => {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad_${img.name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${img.color1}" />
      <stop offset="50%" stop-color="${img.color2}" />
      <stop offset="100%" stop-color="#080314" />
    </linearGradient>
    <radialGradient id="halo_${img.name}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${img.accent}" stop-opacity="0.5" />
      <stop offset="100%" stop-color="${img.color2}" stop-opacity="0" />
    </radialGradient>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="450" rx="24" fill="url(#bgGrad_${img.name})" />
  
  <!-- Subtle Constellation Lines -->
  <circle cx="300" cy="215" r="160" fill="none" stroke="${img.accent}" stroke-width="1.2" stroke-dasharray="4,8" opacity="0.25" />
  <circle cx="300" cy="215" r="110" fill="none" stroke="#FFB6D9" stroke-width="1" stroke-dasharray="2,6" opacity="0.3" />
  
  <!-- Central Soft Halo -->
  <circle cx="300" cy="215" r="115" fill="url(#halo_${img.name})" />

  <!-- Symbol Graphic -->
  ${getSymbolSvg(img.symbol, img.accent)}

  <!-- Label Badge -->
  <rect x="80" y="360" width="440" height="60" rx="18" fill="#0D061A" fill-opacity="0.75" stroke="${img.accent}" stroke-width="1" stroke-opacity="0.35" />
  <text x="300" y="386" text-anchor="middle" font-family="'Cinzel', 'Playfair Display', serif" font-weight="700" font-size="16" fill="#FFFFFF" letter-spacing="3">${img.title.toUpperCase()}</text>
  <text x="300" y="406" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="300" font-size="12" fill="#D8B4E2" letter-spacing="0.8">${img.subtitle}</text>
</svg>
`;

  fs.writeFileSync(path.join(imgDir, img.name), content.trim());
});

console.log('Generated all 9 gallery images successfully.');
