import { getFirestore } from "firebase/firestore";
import {firebase_app} from "../firebase";

export const firestore = getFirestore(firebase_app)