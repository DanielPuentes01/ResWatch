# ResWatch MR — Supervivencia Biométrica y Realidad Mixta

Juego interactivo en **Merged Reality / Mixed Reality (WebGL 3D + Cámara en Vivo con Tracking Óptico)** diseñado para el reloj inteligente **ResWatch** (`base.stl`).

## Despliegue en GitHub Pages

El repositorio está configurado para funcionar automáticamente en **GitHub Pages** (`https://danielpuentes01.github.io/ResWatch/`) con cualquiera de los modos de configuración en **Settings → Pages**:

1. **GitHub Actions (Recomendado)**:
   - Ve a **Settings → Pages → Build and deployment → Source** y selecciona **GitHub Actions**.
   - El workflow `.github/workflows/deploy.yml` compila el proyecto y despliega `./dist` con el modelo 3D `base.stl` incluido.
2. **Deploy from a branch (`main` → `/ (root)` o `/docs`)**:
   - También incluye el bundle precompilado (`pages-dist/` y `docs/`) y rutas relativas (`./`) para que funcione directamente desde la rama `main` tanto en `/(root)` como en `/docs`.

## Características Principales

1. **Modelo 3D Fiel al Reloj Original (`base.stl` + Pantalla OLED Dinámica 1024×1024)**:
   - Carga la geometría 3D `base.stl` del repositorio con acabado metálico azul pizarra (`#273c52`), doble bisel cian luminoso (`#58beee`) y correa estriada negra.
   - Pantalla interactiva en 3D con los 4 elementos exactos del diseño original:
     - **❤️ `86` (Sensor Cardíaco y ECG en vivo)**: Responde al estrés del entorno y al esfuerzo físico del humano; al activarlo inicia **Sincronización Cardio-Vagal** para estabilizar el pulso hacia 86 BPM.
     - **⚠️ (Escáner de Amenazas / Pulso EMP)**: Se ilumina cuando se acercan anomalías en el entorno 3D; al tocarlo emite una **Onda de Choque EMP 3D** que destruye las amenazas cercanas.
     - **🔋 `73%` (Cosecha Cinética y Energética)**: Muestra el nivel de batería en tiempo real; al activarlo (o al agitar la mano frente a la cámara web) absorbe cristales bio-cinéticos del entorno hacia el bisel del reloj.
     - **🏠 (Baliza de Extracción y Domo Seguro MR)**: Despliega un **Domo Geodésico de Protección** alrededor del reloj y carga el **Portal Dimensional de Retorno a Casa** hasta el 100%.

2. **Fusión de Realidad Mixta (Cámara en Vivo + Entorno 3D)**:
   - **Modo Cámara MR en Vivo**: Superpone el reloj 3D, los hologramas y las anomalías sobre el video en tiempo real del jugador, con detección óptica de movimiento y seguimiento espacial de la mano (`✋ Mano MR Activa`) para desviar amenazas y cargar energía cinética.
   - **Modo Simulador Fisiológico + Entorno 3D**: Incluye controles de respiración vagal, agitación cinética, rotación 360° e interacción directa por clic/toque sobre el reloj y sobre los objetos del entorno.

## Ejecución Local

```bash
npm install
npm run dev
```
