# Bootcamp React Native — Semanas 01–09

Curso de React Native con Expo (SDK 57). Cada rama `week-0X-*` contiene el material de una
semana; **esta rama integra las 9 semanas** con todos los errores de configuración corregidos
(ver [INFORME-ERRORES.md](./INFORME-ERRORES.md)).

## Estructura de cada semana

```
week-0X-…/
├── 1-teoria/        # Material teórico (Markdown)
├── 2-practicas/     # Ejercicios guiados (starter + README)
├── 3-proyecto/      # Proyecto de la semana (starter + README)
├── 4-recursos/      # Recursos extra
└── 5-glosario/
```

## Ejecutar cualquier starter

Los ejercicios y proyectos funcionan en **navegador** y en **celular**:

```bash
cd week-0X-…/3-proyecto/starter     # o 2-practicas/<ejercicio>/starter
pnpm install                        # o npm install

npm run web       # 🌐 navegador → http://localhost:8081
npm start         # 📱 QR con Expo Go (Android/iOS)
npm run android   # 📱 emulador/dispositivo Android
npm run ios       # 📱 simulador/dispositivo iOS
```

## Requisitos

- Node 20+
- pnpm 10 (recomendado) o npm
- Expo Go en el celular para probar sin emulador
