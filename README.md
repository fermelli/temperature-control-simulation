# Simulación de control de temperatura

![Capturas de la aplicación](simulation-app.gif)

## Sobre el proyecto

Trabajo práctico para la materia de Sistemas de Tiempo Real (COM460) que consiste en realizar una simulación de un sistema de control de temperatura, de acuerdo a las descripciones dadas en clases.

### Estudiante

Univ. Luis Fernando Salgado Miguez

## Tecnologías

-   vue 3.2.25 - [https://v3.vuejs.org/](https://v3.vuejs.org/)
-   vue-router 4.0.12 - [https://next.router.vuejs.org/](https://next.router.vuejs.org/)
-   vuex 4.0.2 - [https://next.vuex.vuejs.org/](https://next.vuex.vuejs.org/)
-   firebase - [https://firebase.google.com/](https://firebase.google.com/)
    -   SDK firebase 9.6.2
    -   Base de datos en tiempo real (Realtime Database)
-   vite 2.7.2 - [https://vitejs.dev/](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
    -   plugin-vue 2.0.0
-   tailwindcss 3.0.12 - [https://tailwindcss.com/](https://tailwindcss.com/)

## Empezando

### Prerrequisitos

-   Instalar [Node.js](https://nodejs.org/es/)
-   [Crear una base de datos](https://console.firebase.google.com/) en Firebase

### Instalación

Clona este repositorio usando

```bash
git clone https://github.com/fermelli/temperature-control-simulation.git
```

Moverse al directorio apropiado

```bash
cd temperature-control-simulation
```

Instala las dependencias con

```bash
npm install
```

Debe proporcionar la [configuración del proyecto de Firebase](https://firebase.google.com/docs/web/learn-more#config-object) de su aplicación de Firebase, la cual debe configurar en un archivo `.env` con el formato siguiente (que se encuentra ejemplificado en el archivo `.env.example` en la carpeta raíz del proyecto)

```bash
MODE='development'
VITE_FIREBASE_API_KEY=AIzaSyAl7A7JrEDaKlRUki1kFoYgWdaYTxhGL7k
VITE_FIREBASE_AUTH_DOMAIN=appfirebase-12d3a.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://appfirebase-12d3a-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=appfirebase-12d3a
VITE_FIREBASE_STORAGE_BUCKET=appfirebase-12d3a.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID='523298933123'
VITE_FIREBASE_APP_ID='1:523298933123:web:123d03591f17f554e67532'

```

En este punto puede ejecutar

```bash
npm run dev
```

para ver la aplicación en <http://localhost:3000> en modo de desarrollo o ejecutar

```bash
npm run build
```

para construir la aplicación para producción

## Licencia

MIT © Fermelli
