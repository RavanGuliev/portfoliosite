# 🎨 3D Portfolio Site

Ravan Guliev üçün React, Three.js və Framer Motion ilə yaradılmış 3D animated portfolio saytı.

## ✨ Xüsusiyyətlər

- 🌐 **3D Animations** - Three.js ilə interaktiv 3D səhnələr
- ✨ **Smooth Transitions** - Framer Motion ilə gözəl animasiyalar
- 📱 **Responsive Design** - Tailwind CSS ilə mobil-friendly dizayn
- 🎯 **Modern UI** - Gradient rənglər və hover effektləri
- 🚀 **High Performance** - Optimized React + Vite

## 🛠️ Texnologiyalar

- **React 18** - UI Framework
- **Three.js** - 3D Graphics
- **React Three Fiber** - React binding for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## 📦 Quraşdırma

### 1. Dependencies quraşdırın
```bash
npm install
```

### 2. Dev server-i başladın
```bash
npm run dev
```

Server `http://localhost:3000` ünvanda açılacaq.

### 3. Production build
```bash
npm run build
```

## 📁 Proyekt Strukturu

```
portfoliosite/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Navbar komponent
│   │   ├── Scene.jsx         # 3D scene
│   │   ├── Portfolio.jsx     # Portfolio section
│   ├── App.jsx               # Main component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎮 Komponentlər

### Scene.jsx
3D sahənin dərinliyi:
- **RotatingBox** - Fırlanan kuboid
- **FloatingIcosahedron** - Uçan icosahedron
- **TorusRing** - Dövrə şəklində torus

### Portfolio.jsx
Layihə kartları:
- Rəng gradiyentləri
- Hover animasiyaları
- Texnoloji etiketləri

### Navigation.jsx
Sayt naviqasiyası:
- Smooth scroll
- Active state indicator
- Hover effects

## 🎨 Rəng Sxemi

- **Primary** - Purple (#7c3aed)
- **Secondary** - Pink (#ec4899)
- **Accent** - Cyan (#06b6d4)
- **Background** - Dark gradient

## 📝 Redaktə Etmə

### Layihələri dəyişdir
`src/components/Portfolio.jsx` faylında `projects` massivinə əlavə edin:

```javascript
{
  id: 5,
  title: 'Sizin Layihəniz',
  description: 'Açıqlama',
  tech: ['React', 'Tailwind'],
  color: 'from-purple-400 to-pink-600'
}
```

### 3D Objektləri dəyişdir
`src/components/Scene.jsx` faylında yeni komponentlər əlavə edin.

### Rəngləri dəyişdir
- `index.css` - Global gradient
- `tailwind.config.js` - Tailwind colors
- Component fayllarında inline rənglər

## 🚀 Deploy

### Vercel (Təklif edilən)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# dist/ folderi GitHub Pages olaraq deploy edin
```

### Netlify
```bash
npm run build
# dist/ folderi Netlify-ə upload edin
```

## 📧 Əlaqə

- GitHub: [RavanGuliev](https://github.com/RavanGuliev)
- Email: ravan@example.com

## 📄 Lisenziya

MIT License - Azad istifadə edin

---

**Uğurlar! 🎉**
