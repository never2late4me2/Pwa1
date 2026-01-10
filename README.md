# LifeWeave 🌱

A privacy-first, ambient AI life companion Progressive Web App (PWA) that passively observes user activity and provides proactive, gentle, narrative-driven insights and nudges.

## ✨ Features

### Core Functionality

-   **📱 Installable PWA**: Works on Android and iOS devices, installable to home screen
-   **🔒 Privacy-First**: All processing happens client-side in the browser (no cloud backend)
-   **🧠 Ambient AI**: Rule-based narrative generation with customizable personalities
-   **📊 Activity Tracking**: Monitors steps, posture, movement patterns, and environment
-   **💬 Proactive Nudges**: Gentle, personalized insights delivered every 30-90 minutes
-   **🎭 Multiple Personalities**:
    -   Calm Coach: Gentle, supportive guidance
    -   Witty Motivator: Energetic encouragement with humor
    -   Reflective Guide: Thoughtful, contemplative prompts
-   **📖 Daily Weave**: End-of-day narrative summaries
-   **🔔 Push Notifications**: Web Push notifications for nudges
-   **🔊 Voice Output**: Web Speech Synthesis API for spoken nudges
-   **🌐 Offline Support**: Works offline with service worker caching

### Sensor Integration

-   **DeviceMotion API**: Tracks movement and step counting
-   **DeviceOrientation API**: Posture detection and analysis
-   **Geolocation API**: Location change detection (optional)
-   **Battery Status API**: Battery level and charging status
-   **Ambient Light Sensor API**: Environment lighting conditions

### Settings & Customization

-   Adjustable nudge frequency (15-120 minutes)
-   Selectable nudge types (posture, movement, break, hydration, mindfulness)
-   Quiet hours configuration
-   Data retention settings (7-90 days)
-   Voice and notification toggles
-   Sensor permission management

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+ and npm/yarn/pnpm
-   Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1.  **Clone the repository**

```bash
git clone <repository-url>
cd lifeweave
```

2.  **Install dependencies**

```bash
npm install
```

3.  **Start development server**

```bash
npm run dev
```

4.  **Open in browser**

```
http://localhost:5173
```

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Architecture

### Tech Stack

-   **Frontend Framework**: React 18 + TypeScript + Vite
-   **Styling**: Tailwind CSS v4 (with custom theme)
-   **State Management**: Zustand with persistence middleware
-   **Data Persistence**:
    -   IndexedDB for activity history and sensor data
    -   localStorage for user preferences
-   **PWA**: Workbox (via vite-plugin-pwa)
-   **Speech**: Web Speech Synthesis API
-   **Notifications**: Web Push Notifications API

### Project Structure

```
lifeweave/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── icon-*.png             # App icons
├── src/
│   ├── components/
│   │   ├── AppLayout.tsx      # Main layout with navigation
│   │   ├── Dashboard.tsx      # Activity dashboard
│   │   ├── Settings.tsx       # Settings panel
│   │   ├── DailySummary.tsx   # Daily narrative summary
│   │   └── Onboarding.tsx     # Onboarding flow
│   ├── hooks/
│   │   ├── useSensors.ts      # Sensor management
│   │   ├── useActivityTracker.ts # Activity inference
│   │   └── useNudgeScheduler.ts  # Nudge timing
│   ├── lib/
│   │   └── indexedDB.ts       # IndexedDB wrapper
│   ├── stores/
│   │   └── appStore.ts        # Zustand store
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   ├── utils/
│   │   ├── sensorUtils.ts     # Sensor processing
│   │   └── nudgeEngine.ts     # Narrative generation
│   ├── App.tsx                # Root component
│   ├── index.css              # Global styles
│   └── main.tsx               # Entry point
├── index.html                 # HTML template
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

### Data Flow

1.  **Sensor Data Collection**: `useSensors` hook collects data from device sensors
2.  **Activity Inference**: `useActivityTracker` processes sensor data to classify activities
3.  **Nudge Generation**: `useNudgeScheduler` determines when to generate nudges based on settings
4.  **Narrative Creation**: `nudgeEngine` generates personalized messages based on activity and personality
5.  **Data Storage**: IndexedDB stores historical data; localStorage persists preferences
6.  **UI Updates**: React components re-render based on Zustand state changes

## 🎯 Key Features Explained

### Activity Classification

The app classifies user activity into four types:

-   **Resting**: Low movement, no steps detected
-   **Walking**: High step count (>30 steps/minute)
-   **Focused**: Moderate movement with low step count
-   **Unknown**: Insufficient data for classification

### Posture Estimation

Uses device orientation (beta and gamma values) to estimate posture:

-   **Good**: Minimal deviation from ideal alignment (<20°)
-   **Fair**: Moderate deviation (20-45°)
-   **Poor**: Significant deviation (>45°)

### Nudge Generation Engine

The nudge engine uses:

-   **Rule-based templates**: Pre-written messages for each nudge type and personality
-   **Conditional logic**: Nudges only trigger when specific conditions are met
-   **Randomization**: Selects from multiple templates to keep messages fresh
-   **Timing control**: Respects user-defined frequency and quiet hours

### Privacy Architecture

-   **Client-side processing**: All AI logic runs in the browser
-   **No cloud communication**: No data sent to external servers
-   **Local storage only**: Data stored on user's device
-   **User-controlled retention**: Users can set data retention periods
-   **Optional sensors**: Location tracking is opt-in

## 📱 PWA Features

### Installation

1.  Open the app in a supported browser (Chrome, Safari, Edge)
2.  Look for the "Install" or "Add to Home Screen" prompt
3.  Tap to install the app

### Offline Support

-   Service worker caches all app assets
-   Core functionality works offline
-   Sensor data collection continues offline
-   Nudges are queued when offline, delivered when online

### Background Operation

-   Uses Web Workers for passive monitoring
-   Respects browser background limitations
-   Periodic data collection during active use
-   Wake-lock API prevents screen sleep during monitoring

## ⚠️ Limitations

### Browser Support

-   **iOS Safari**: Limited background execution, no true background sync
-   **Android Chrome**: Better background support, but still limited by OS
-   **Desktop**: Limited sensor availability (no motion/orientation APIs)

### Sensor Limitations

-   **DeviceMotion**: Not available on all desktop browsers
-   **DeviceOrientation**: Requires device with gyroscope/accelerometer
-   **Geolocation**: Requires HTTPS and user permission
-   **Ambient Light Sensor**: Limited browser support

### Technical Constraints

-   **No true on-device SLM**: Current implementation uses rule-based templates
-   **Background execution**: Browsers limit background JS execution
-   **Storage limits**: IndexedDB has storage quotas
-   **Battery impact**: Continuous sensor monitoring affects battery life

## 🔮 Future Roadmap

### Phase 2: Enhanced AI

-   [ ]  Integration with WebLLM / transformers.js
-   [ ]  True on-device small language model
-   [ ]  More sophisticated narrative generation
-   [ ]  Context-aware nudge timing
-   [ ]  Learning from user responses

### Phase 3: Advanced Features

-   [ ]  Photo integration for visual journaling
-   [ ]  Social features (optional, with privacy controls)
-   [ ]  Advanced analytics and insights
-   [ ]  Integration with health APIs (Apple Health, Google Fit)
-   [ ]  Custom personality creation

### Phase 4: Platform Expansion

-   [ ]  Native mobile apps (React Native)
-   [ ]  Desktop app (Electron)
-   [ ]  Smartwatch companion
-   [ ]  Browser extensions

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

### Adding New Features

1.  **New Nudge Type**: Add to `Nudge['type']` in `types/index.ts` and templates in `utils/nudgeEngine.ts`
2.  **New Personality**: Add to `PersonalityType` and create templates in `utils/nudgeEngine.ts`
3.  **New Sensor**: Add hook in `hooks/useSensors.ts` and processing in `utils/sensorUtils.ts`
4.  **New UI Screen**: Create component in `components/` and add to `AppLayout.tsx`

### Code Style

-   TypeScript strict mode enabled
-   Functional components with hooks
-   Custom hooks for reusable logic
-   Zustand for state management
-   Tailwind CSS for styling

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🙏 Acknowledgments

-   Built with React, Vite, and TypeScript
-   PWA support via vite-plugin-pwa and Workbox
-   Icons and UI inspired by modern design systems
-   Privacy-first design philosophy inspired by ethical AI principles

* * *

**LifeWeave** - Weaving together the moments of your day into meaningful insights. 🌱
