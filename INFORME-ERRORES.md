# Informe de revisión — todas las ramas

**Fecha:** 25/09/2026 · **Rama de trabajo:** `arena/01a0d9d1-react-native`

Se revisaron las 10 ramas del repositorio (`main` + 9 semanas). En `main` solo existía un
submódulo roto, por lo que se fusionó el contenido de las 9 ramas semanales en esta rama
para poder revisarlo y corregirlo todo junto.

---

## ❌ Errores encontrados y ✅ corregidos

### 1. La app no se podía abrir en el navegador (todas las ramas)
**Error:** Ningún proyecto tenía soporte web de Expo: faltaban las dependencias
`react-dom`, `react-native-web` y `@expo/metro-runtime`, y ningún `package.json`
tenía el script `web`. Solo se podía correr en celular (Expo Go / emulador).
**Corrección:** Se agregaron las 3 dependencias (versiones recomendadas por Expo SDK 57:
`react-dom@19.2.3`, `react-native-web@~0.21.0`, `@expo/metro-runtime@~57.0.3`) y el script
`"web": "expo start --web"` en los **27 starters** (9 proyectos + 18 ejercicios).
Verificado: los 9 proyectos compilan correctamente con `expo export --platform web`.

### 2. Week 09 — `app.json` declaraba un plugin no instalado (app inservible)
**Error:** `"plugins": ["expo-router"]` sin tener `expo-router` instalado. Cualquier comando
de Expo (`expo start`, `expo config`, `expo export`) crasheaba con:
`PluginError: Failed to resolve plugin for module "expo-router"`. La app no arrancaba para nada.
**Corrección:** Se eliminó la declaración del plugin (la app usa React Navigation, no Expo Router).

### 3. Weeks 04 y 05 — `main` apuntaba a `expo-router/entry` sin tener expo-router
**Error:** `"main": "expo-router/entry"` en `package.json` sin `expo-router` en dependencias.
La app fallaba al arrancar con:
`ConfigError: Cannot resolve entry file: The 'main' field ... points to an unresolvable or non-existent path`.
**Corrección:** Se creó `index.js` con `registerRootComponent` (el mismo patrón que ya usaban
weeks 06 y 07) y se cambió `"main"` a `"index.js"`.

### 4. Submódulo roto `bc-reactnative` (todas las ramas, incluida `main`)
**Error:** `bc-reactnative` era un gitlink (submódulo) sin `.gitmodules` que apunta al commit
`501491c` de un repositorio que **no existe** (GitHub responde 404). Al clonar, la carpeta
queda vacía y no se puede inicializar.
**Corrección:** Se eliminó la referencia al submódulo.

### 5. Iconos/splash declarados pero inexistentes (weeks 04, 06, 08, 09)
**Error:** Los `app.json` referenciaban imágenes que no estaban en el proyecto:
- week-04: `assets/icon.png`, `assets/splash-icon.png`, `assets/adaptive-icon.png`
- week-06: `assets/adaptive-icon.png`
- week-08: `assets/icon.png`
- week-09: `assets/icon.png`, `assets/adaptive-icon.png`

Generan warnings y builds nativos fallidos.
**Corrección:** Se generaron los PNG que faltaban (1024px, con la paleta de cada semana).

### 6. Errores de TypeScript que abortaban `tsc` en 6 proyectos
**Error:** Los `tsconfig.json` de weeks 01, 03, 04, 05, 08 y 09 usaban `baseUrl` (deprecado en
TypeScript 6, error `TS5101`) o `paths` sin `baseUrl` (error `TS5090` en week-01). Con
`typescript@6.0.3` el chequeo se abortaba sin llegar a analizar el código.
**Corrección:** Se quitó `baseUrl` y se usaron rutas relativas (`"@/*": ["./src/*"]`).
`npx tsc --noEmit` pasa limpio en los 9 proyectos.

### 7. Week 02 — prop inexistente en `StatusBar` de `expo-status-bar`
**Error:** `App.tsx` pasaba `backgroundColor` a `StatusBar` de `expo-status-bar`
(error `TS2322`: esa prop no existe en ese componente; es del `StatusBar` de react-native).
**Corrección:** Se eliminó la prop (el fondo ya lo pinta el `SafeAreaView`, sin cambio visual).

### 8. Week 03 — tipo inexistente `NativeStackRouteProp`
**Error:** `DetailScreen.tsx` importaba `NativeStackRouteProp` de `@react-navigation/native-stack`,
tipo que no existe (error `TS2724`).
**Corrección:** Se usa `RouteProp` de `@react-navigation/native` (exportado por la misma librería).

### 9. Week 05 — color inexistente `COLORS.text`
**Error:** `CreateScreen.tsx` usaba `COLORS.text`, pero el theme exporta `textPrimary`
(error `TS2339`). El texto del botón quedaba `undefined`.
**Corrección:** Cambiado a `COLORS.textPrimary`.

### 10. Weeks 03 y 04 — script `lint` sin ESLint instalado
**Error:** `"lint": "eslint . --ext .ts,.tsx"` sin `eslint` en `devDependencies` → el script fallaba.
**Corrección:** Se agregaron `eslint@^9` + `eslint-config-expo@~57.0.2`, se creó `eslint.config.js`
(config plana oficial de Expo) y el script ahora es `"lint": "expo lint"`. Verificado: pasa sin errores.

### 11. Week 09 — `Animated.Value` creado dentro del render (`HomeScreen`)
**Error:** Al pulsar “+ Añadir fundación” el arreglo `anims` no crecía, así que cada render
creaba un `new Animated.Value(1)` nuevo por ítem sin animación (fuga de valores y sin
animación de entrada). Al eliminar, los índices de `anims` quedaban desincronizados.
**Corrección:** `add()` ahora crea el `Animated.Value`, lo agrega al arreglo y lo anima;
`remove()` elimina el valor correspondiente para mantener ambos arreglos sincronizados.

### 12. Peer dependency desalineada en React Navigation
**Error:** Todos los proyectos con navegación fijaban `@react-navigation/native@7.3.8`,
pero sus companion packages piden `^7.4.1` (warnings de peer en cada instalación).
**Corrección:** Bump a `@react-navigation/native@7.4.1` en los 9 starters afectados.

### 13. Sin `.gitignore` y lockfiles desactualizados
**Error:** El repo no tenía `.gitignore` (riesgo de commitear `node_modules/`, `.expo/`, `dist/`)
y los `pnpm-lock.yaml` quedaron obsoletos tras los cambios.
**Corrección:** Se agregó `.gitignore` raíz y se regeneraron los 9 `pnpm-lock.yaml` con pnpm 10.

---

## ▶️ Cómo abrir cada proyecto en el navegador

```bash
cd week-09-animaciones_basicas/3-proyecto/starter   # (o la semana que quieras)
pnpm install        # o npm install
npm run web         # abre http://localhost:8081 en el navegador
```

- Tecla `w` dentro de `npm start` también abre la versión web.
- En el celular sigue funcionando igual: `npm run android` / `npm run ios` o escaneando el QR con Expo Go.
- Los ejercicios (`week-0X/2-practicas/*/starter`) tienen exactamente el mismo script `web`.

## ✅ Verificación realizada

| Verificación | Resultado |
|---|---|
| `expo export --platform web` en los 9 proyectos | ✔ 9/9 compilan |
| `expo export --platform android` en los 9 proyectos | ✔ 9/9 compilan (04, 05 y 09 antes fallaban) |
| `expo export --platform web` en ejercicios (muestra weeks 01, 03, 09) | ✔ compilan |
| `tsc --noEmit` en los 9 proyectos | ✔ sin errores |
| `expo lint` en weeks 03 y 04 | ✔ sin errores |
| Servidor dev web (`npm run web`) de week-09 | ✔ sirve el bundle correctamente |
