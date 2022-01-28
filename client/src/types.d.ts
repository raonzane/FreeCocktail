//.src/react-app-env.d.ts

/// <reference types="gapi.people" />
/// <reference types="gapi.plus" />
/// <reference types="react-scripts" />

declare global {
  interface Window {
    naver: any;
    google: any;
    gapi: any;
  }
}

export {};
