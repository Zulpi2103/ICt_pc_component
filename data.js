const cpus = [
  { name: "Ryzen 5 3600", score: 100 },
  { name: "Ryzen 5 5600", score: 130 },
  { name: "Ryzen 7 5800X3D", score: 190, hasx3d: true },
  { name: "Ryzen 5 7600", score: 200 },
  { name: "Ryzen 7 7800X3D", score: 280, hasx3d: true },
  { name: "Ryzen 7 9800X3D", score: 300, hasx3d: true }
];

const gpus = [
  { name: "GTX 1060 6GB", score: 100, vram: 6, brand: "NVIDIA" },
  { name: "RX 580", score: 105, vram: 8, brand: "AMD" },
  { name: "GTX 1660 Super", score: 130, vram: 8, brand: "NVIDIA" },
  { name: "RTX 3060", score: 180, vram: 12, brand: "NVIDIA", hasRayTracing: true },
  { name: "RX 6700 XT", score: 230, vram: 12, brand: "AMD" },
  { name: "RTX 4070", score: 230, vram: 12, brand: "NVIDIA", hasRayTracing: true },
  { name: "RX 7800 XT", score: 300, vram: 16, brand: "AMD" },
  { name: "RX 9070 XT", score: 350, vram: 16, brand: "AMD" },
  { name: "RTX 5070 Ti", score: 380, vram: 16, brand: "NVIDIA", hasRayTracing: true },
  { name: "RTX 5080", score: 410, vram: 16, brand: "NVIDIA", hasRayTracing: true }
];

const ramOptions = [4, 8, 16, 32, 64];

const games = [
  {
    name: "Baldur's Gate 3",
    minCpuScore: 190,
    minGpuScore: 160,
    minRam: 16,
    minVram: 6,
    storage: 150
  },
  {
    name: "Hearts of Iron IV",
    minCpuScore: 170,
    minGpuScore: 80,
    minRam: 16,
    minVram: 2,
    storage: 5,
    requiresX3D: true
  },
  {
    name: "Cyberpunk 2077",
    minCpuScore: 160,
    minGpuScore: 220,
    minRam: 16,
    minVram: 8,
    storage: 100,
    requiresRayTracing: true
  },
  {
    name: "Clair Obscur: Expedition 33",
    minCpuScore: 130,
    minGpuScore: 230,
    minRam: 32,
    minVram: 8,
    storage: 55,
    requiresX3D: true
  },
  {
    name: "Metro Exodus: Enhanced Edition",
    minCpuScore: 130,
    minGpuScore: 230,
    minRam: 32,
    minVram: 8,
    storage: 60,
    requiresRayTracing: true
  },
  {
    name: "Stellaris",
    minCpuScore: 130,
    minGpuScore: 100,
    minRam: 16,
    minVram: 6,
    storage: 10
  },
  {
    name: "Counter Strike 2",
    minCpuScore: 130,
    minGpuScore: 130,
    minRam: 16,
    minVram: 6,
    storage: 85
  },
  {
    name: "Valorant",
    minCpuScore: 100,
    minGpuScore: 100,
    minRam: 16,
    minVram: 4,
    storage: 30
  },
  {
    name: "Fortnite",
    minCpuScore: 130,
    minGpuScore: 105,
    minRam: 16,
    minVram: 4,
    storage: 80
  },
  {
    name: "Phasmophobia",
    minCpuScore: 100,
    minGpuScore: 210,
    minRam: 16,
    minVram: 6,
    storage: 21
  },
  {
    name: "Path of Exile 2",
    minCpuScore: 130,
    minGpuScore: 250,
    minRam: 16,
    minVram: 8,
    storage: 100,
    requiresX3D: true
  },
  {
    name: "Mount & Blade II: Bannerlord",
    minCpuScore: 180,
    minGpuScore: 130,
    minRam: 32,
    minVram: 6,
    storage: 60,
    requiresX3D: true
  },
  {
    name: "Uncharted: Legacy of Thieves Collection",
    minCpuScore: 130,
    minGpuScore: 180,
    minRam: 16,
    minVram: 8,
    storage: 126
  },
  {
    name: "The Last of Us Part II",
    minCpuScore: 130,
    minGpuScore: 250,
    minRam: 16,
    minVram: 12,
    storage: 150
  },
  {
    name: "Anno 117: Pax Romana",
    minCpuScore: 130,
    minGpuScore: 230,
    minRam: 32,
    minVram: 8,
    storage: 117
  },
  {
    name: "House Flipper",
    minCpuScore: 100,
    minGpuScore: 100,
    minRam: 16,
    minVram: 4,
    storage: 6
  },
  {
    name: "PC Building Simulator 2",
    minCpuScore: 100,
    minGpuScore: 130,
    minRam: 16,
    minVram: 6,
    storage: 30
  },
  {
    name: "League of Legends",
    minCpuScore: 100,
    minGpuScore: 100,
    minRam: 16,
    minVram: 2,
    storage: 16
  },
  {
    name: "Rocket League",
    minCpuScore: 100,
    minGpuScore: 100,
    minRam: 16,
    minVram: 4,
    storage: 20
  },
  {
    name: "Minecraft",
    minCpuScore: 130,
    minGpuScore: 210,
    minRam: 32,
    minVram: 8,
    storage: 10
  },
  {
    name: "Grand Theft Auto Online",
    minCpuScore: 130,
    minGpuScore: 230,
    minRam: 16,
    minVram: 8,
    storage: 105
  },
  {
    name: "Indiana Jones and the Great Circle (Full RT)",
    minCpuScore: 130,
    minGpuScore: 400,
    minRam: 32,
    minVram: 16,
    storage: 105,
    requiresRayTracing: true,
  },
  {
    name: "Microsoft Flight Simulator 2024",
    minCpuScore: 300,
    minGpuScore: 230,
    minRam: 32,
    minVram: 8,
    storage: 220,
    requiresX3D: true
  }
];

