# Portafolio personal

Portafolio profesional de una sola pagina, listo para publicar con **GitHub Pages**.

## Vista previa

Abre `index.html` en tu navegador para ver el sitio.

## 1. Como modificar la informacion personal

Abre `index.html` y reemplaza todos los marcadores entre corchetes:

| Marcador | Significado | Donde aparece |
|---|---|---|
| `[NOMBRE COMPLETO]` | Tu nombre y apellido | Hero, footer, `<title>`, logo |
| `[NOMBRE]` | Version corta de tu nombre | Logo de la barra de navegacion |
| `[TITULO PROFESIONAL O ACADEMICO]` | Tu cargo o carrera | Debajo del nombre en el hero |
| `[USUARIO-DE-GITHUB]` | Tu usuario de GitHub | Enlaces de GitHub en hero, proyectos, contacto y footer |
| `[CORREO]` | Tu direccion de correo | Seccion de contacto y boton `mailto` |
| `[LINKEDIN]` | Tu usuario de LinkedIn | Enlace en contacto y footer (opcional: eliminalo si no tienes) |
| `[DESCRIPCION PERSONAL]` | Parrafo principal | Primera seccion de "Sobre mi" |

**Para cambiar la foto de perfil:**

1. Coloca tu foto en `assets/images/`.
2. En `index.html`, reemplaza:

```html
<div class="avatar-placeholder" ...>
  <svg>...</svg>
</div>
```

por:

```html
<img class="avatar-img" src="assets/images/mi-foto.jpg" alt="Fotografia de [TU NOMBRE]" />
```

Los estilos para `.avatar-img` ya estan incluidos en `styles.css`.

## 2. Como agregar un proyecto

1. Abre `index.html` y busca `id="proyectos"`.
2. Dentro de `<div class="projects-grid">`, copia uno de los bloques `<article class="project-card">` y pegalo donde corresponda.
3. Edita los siguientes elementos:

   - **Imagen**: cambia `src="assets/images/proyecto-X.jpg"` por la ruta de tu imagen.
   - **Nombre**: cambia el texto dentro de `<h3 class="project-name">`.
   - **Descripcion**: cambia el texto dentro de `<p class="project-description">`.
   - **Tecnologias**: agrega o quita etiquetas `<span class="tech-tag">`.
   - **Enlaces**: modifica los `href` de "Ver repositorio" y "Ver demostracion".

4. Si no tienes demostracion en vivo, elimina o comenta el boton "Ver demostracion".

5. Coloca la imagen del proyecto en `assets/images/`.

## 3. Como cambiar imagenes

Todas las imagenes del proyecto deben ir en `assets/images/`.

**Imagen de perfil:**
- Coloca tu foto (ej. `foto.jpg`) en `assets/images/`.
- Sigue las instrucciones de la seccion 1.

**Imagenes de proyectos:**
- Coloca las capturas en `assets/images/`.
- Actualiza los `src` en las tarjetas de proyecto con el nombre correcto.
- Si la imagen no existe, el portafolio muestra un icono de respaldo automaticamente.

## 4. Como probar localmente

### Opcion 1 — Abrir directamente

Haz doble clic en `index.html`. No requiere servidor.

### Opcion 2 — Servidor local con Python

```bash
python -m http.server 8000
```

Abre `http://localhost:8000` en el navegador.

### Opcion 3 — Live Server (VS Code)

Instala la extension **Live Server**, haz clic derecho en `index.html` y selecciona "Open with Live Server".

## 5. Como activar GitHub Pages

1. Crea un repositorio con el nombre exacto:

   ```
   <tu-usuario>.github.io
   ```

   Reemplaza `<tu-usuario>` por tu nombre de usuario real de GitHub.

2. Sube los archivos a la rama `main`:

   ```bash
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-usuario>.github.io.git
   git push -u origin main
   ```

3. Ve a **Settings > Pages** en tu repositorio de GitHub.

4. En "Source", selecciona **Deploy from a branch**.

5. En "Branch", elige `main` y carpeta `/ (root)`.

6. Haz clic en **Save**.

7. Espera entre 1 y 3 minutos. Tu pagina estara disponible en:

   ```
   https://<tu-usuario>.github.io
   ```

## 6. Como actualizar la pagina mediante Git

Cada vez que modifiques los archivos localmente:

```bash
git add .
git commit -m "Descripcion breve del cambio"
git push
```

GitHub Pages reconstruira y publicara el sitio automaticamente en 1-2 minutos.

## Estructura del proyecto

```
/
├── index.html      # Estructura y contenido
├── styles.css      # Diseno y responsive
├── script.js       # Interactividad (menu, animaciones)
├── README.md       # Este archivo
└── assets/
    └── images/     # Imagenes de perfil y proyectos
```

## Tecnologias

- HTML5
- CSS3 (variables personalizadas, grid, flexbox, animaciones)
- JavaScript vanilla (sin frameworks)

## Licencia

Uso personal. Modificalo libremente.
