import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialization = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};

export default initialization;
