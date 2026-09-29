// Versión compatible con Expo Go: las preferencias se guardan con AsyncStorage.
// MMKV requiere un build nativo y se mantiene documentado en la teoría.
import AsyncStorage from '@react-native-async-storage/async-storage';
export const storage = AsyncStorage;
