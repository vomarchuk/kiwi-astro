// src/theme.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    accentColor: string;
    accentColorLight: string;
    // Add other theme properties here
  }
}
