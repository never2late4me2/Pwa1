// TypeScript type definitions for various aspects of the application

// Activity type definition
export type Activity = {
    id: string;
    name: string;
    duration: number;
    caloriesBurned: number;
};

// Posture type definition
export type Posture = {
    id: string;
    type: string;
    duration: number;
};

// Personality type definition
export type Personality = {
    id: string;
    traits: string[];
};

// Nudge type definition
export type Nudge = {
    id: string;
    message: string;
    triggered: boolean;
};

// Sensor data type definition
export type SensorData = {
    id: string;
    type: string;
    value: number;
    timestamp: Date;
};

// Daily stats type definition
export type DailyStats = {
    date: Date;
    steps: number;
    activities: Activity[];
    posture: Posture[];
};

// User settings type definition
export type UserSettings = {
    theme: string;
    notificationsEnabled: boolean;
};

// Application state type definition
export type AppState = {
    userSettings: UserSettings;
    dailyStats: DailyStats;
    sensorData: SensorData[];
    nudges: Nudge[];
};