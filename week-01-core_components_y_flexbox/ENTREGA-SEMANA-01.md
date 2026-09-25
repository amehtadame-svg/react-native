# Entrega Semana 01 — Fundaciones que inspiran

## Resumen

Se completaron los entregables de **Core Components y Flexbox** usando el dominio **fundaciones/ONG**.

## Entregables realizados

- **Práctica 01 — Core Components:** tarjeta de perfil con `View`, `Text`, `Image`, `ScrollView`, `Pressable` y `StyleSheet`.
- **Práctica 02 — Flexbox:** cuatro layouts funcionales: header, tab bar, tarjeta horizontal y división 1/3–2/3.
- **Proyecto:** app móvil de directorio de fundaciones con cuatro tarjetas, imágenes, categoría, ubicación, impacto y acción interactiva.
- **TypeScript:** interfaz `Ong` definida y utilizada en datos, tarjetas y pantalla principal.
- **Flexbox:** uso de `row`, `column`, `space-between`, `space-evenly`, `alignItems` y `flex`.
- **Interacción:** al pulsar una tarjeta se muestra un `Alert` con información de la fundación y feedback visual durante la pulsación.

## Cómo ejecutar

### Proyecto principal

```bash
cd 3-proyecto/starter
pnpm install
pnpm start
```

### Prácticas

```bash
cd 2-practicas/ejercicio-01-core-components/starter
pnpm install
pnpm start

cd ../../ejercicio-02-flexbox-layouts/starter
pnpm install
pnpm start
```

Escanea el QR con Expo Go o ejecuta el emulador con `pnpm android` / `pnpm ios`.

## Estructura principal

```text
3-proyecto/starter/
├── App.tsx
├── app.json
└── src/
    ├── components/ItemCard.tsx
    ├── data/mockData.ts
    ├── screens/HomeScreen.tsx
    └── types/index.ts
```

## Nota de evidencia

Para completar el requisito de evidencia visual, ejecutar la app y agregar una captura de Expo Go o del emulador al repositorio. Las imágenes de las tarjetas usan URLs remotas para mantener el starter liviano.
