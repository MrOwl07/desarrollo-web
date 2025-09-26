# MEMORY CARDS

## Descripción

**Memory Cards** es un juego web de memoria donde el usuario selecciona la dificultad (cantidad de cartas) y debe encontrar todos los pares de cartas volteando dos a la vez. El juego incluye efectos visuales modernos, animaciones y una interfaz amigable.

---

## Estructura del Proyecto

```
src/
  static/
    css/
      style.css         # Estilos principales del juego y la interfaz
    img/
      *.png             # Imágenes de cartas, dorso y números de dificultad
    js/
      game.js           # Lógica del juego de memoria
  templates/
    index.html          # Página principal para seleccionar dificultad
    game.html           # Página del juego de memoria
```

---

## Cómo jugar

1. **Abre `index.html`**  
   Elige la cantidad de cartas con las que quieres jugar (8, 10 o 12).  
   Haz clic en la tarjeta correspondiente.

2. **Se abrirá `game.html`**  
   El tablero se genera automáticamente según la dificultad elegida.  
   Haz clic en las cartas para voltearlas y encontrar los pares.

3. **Reglas**
   - Tienes un máximo de 4 errores permitidos.
   - Si encuentras todos los pares antes de agotar los intentos, ganas.
   - Si te quedas sin intentos, pierdes.
   - Al finalizar, se muestra un mensaje y se regresa automáticamente al inicio.

---

## Requisitos

- Navegador web moderno (Chrome, Firefox, Edge, etc.)
- No requiere instalación ni servidor adicional.

---

## Personalización

- Puedes cambiar las imágenes de las cartas en `src/static/img/`.
- Los estilos se pueden modificar en `src/static/css/style.css`.
- La lógica del juego está en `src/static/js/game.js`.

---

## Créditos

Desarrollado como proyecto educativo para Kodland.

---