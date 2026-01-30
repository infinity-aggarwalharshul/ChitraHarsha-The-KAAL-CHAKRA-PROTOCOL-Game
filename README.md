# ChitraHarsha: The KAAL-CHAKRA PROTOCOL

![Version](https://img.shields.io/badge/Version-3.1-gold)
![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20Web-cyan)
![Android API](https://img.shields.io/badge/Target%20API-35-orange)
![License](https://img.shields.io/badge/License-MIT-green)

**ChitraHarsha: The KAAL-CHAKRA PROTOCOL** is a high-performance, cinematic HTML5 game wrapped for native Android deployment using Capacitor. Designed for the 2026 mobile landscape, it features advanced rendering, a neural audio engine, and future-ready Android 15 integration.

---

## 🚀 Commercial Features

- **Android App Bundle (.aab) Support**: Fully compliant with Google Play Store's 2026 requirements.
- **Target API 35**: Optimized for Android 15 (Vanilla Ice Cream).
- **Cinematic Rendering**: High-fidelity visuals with star-warp and motion blur effects.
- **Neural Audio Engine**: Procedural rhythmic audio that scales with gameplay speed.
- **PWA Excellence**: Fully functional offline play via Service Worker integration.
- **Capacitor 6.0 Integration**: Modern native bridge for superior performance over legacy WebView wrappers.

## 🛠️ Technical Architecture

The project employs a high-performance "Modular Engine" design:

- **RenderEngine**: Uses a pseudo-3D custom projection method to render high-bandwidth visuals on a 2D canvas with minimal CPU overhead.
- **AudioEngine**: A procedural oscillator-based system that generates real-time audio pulses correlated to the `game.state.speed`.
- **GameCore**: A state-machine driven loop optimized for zero-latency touch responses.

## 📅 Future Roadmap (2026-2027)

### Q1 2026: The Android Launch

- [x] API 35 Optimization
- [x] .aab Signature Workflow
- [ ] Closed Testing Phase (20 Testers)

### Q2 2026: Multi-Dimensional Update

- [ ] Multiplayer Ghost Racing via WebAssembly
- [ ] Neural Link V2: Enhanced procedural soundtracks

### Q3 2026: Global Expansion

- [ ] Localization (Hindi, Japanese, Spanish)
- [ ] iOS Port via Capacitor Cross-Platform

## 🛠️ Build & Development

### Prerequisites

- Node.js (Latest stable)
- Android Studio (Koala or later)
- JDK 17+

### Local Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Sync Capacitor assets:
   ```bash
   npm run prod
   ```
4. Open in Android Studio:
   ```bash
   npx cap open android
   ```

## 📦 Publishing

For detailed instructions on generating the signed `.aab` and meeting the 2026 "20-tester" requirement, refer to the [Walkthrough Guide](./walkthrough.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

© 2026 IAH Games. Developed with Advanced Agentic Coding.
