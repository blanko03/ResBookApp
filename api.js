// api.js
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3000' // for Android emulator. Use your IP or localhost for physical device/iOS
});
