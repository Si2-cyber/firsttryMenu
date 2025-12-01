import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.redflame.bistro',
  appName: 'RedFlame Bistro',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;