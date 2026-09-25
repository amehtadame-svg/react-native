# Entrega Semana 07 — Persistencia local (variante Expo Go)

Dominio: **fundaciones/ONG**.

Esta variante prioriza la ejecución directa con Expo Go. Como MMKV requiere código nativo, se implementa el equivalente funcional usando AsyncStorage para preferencias y caché, y Expo SecureStore para datos sensibles.

## Funcionalidades

- Práctica 01: tema, perfil y caché offline con AsyncStorage.
- Práctica 02: preferencias persistentes con AsyncStorage y token cifrado con SecureStore.
- Proyecto: lista de fundaciones, caché offline, modo compacto, orden A-Z/Z-A, cantidad de elementos por página y datos sensibles con SecureStore.

## Ejecución

```bash
cd 3-proyecto/starter
pnpm install
pnpm start
```

Escanea el QR con Expo Go. Esta variante no requiere Android Studio, EAS ni `expo run:android`.
