// src/types/firebase.d.ts
declare module 'firebase/app' {
    import * as firebase from 'firebase';
    export = firebase;
  }
  declare module 'firebase/app' {
    import { FirebaseApp } from '@firebase/app-types';
    export function initializeApp(config: object): FirebaseApp;
}
