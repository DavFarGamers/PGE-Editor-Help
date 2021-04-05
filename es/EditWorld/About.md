# Acerca de los mapas del mundo

**Mapa del mundo**: la lista interactiva de niveles disponibles para que los jugadores jueguen. Mapa del mundo: es una unidad clave del juego o episodio.

El mapa del mundo también puede tener un estilo de centro, es decir, no se utilizará el mapa del mundo. En lugar del mapa del mundo, se utilizará un nivel especial. Ese nivel se denomina nivel de concentrador. El nivel del centro le permite al jugador ingresar a niveles como si estuviera yendo entre niveles.


* **Mosaicos de terreno**: - La unidad de diseño principal que se utilizó para crear el diseño común del mapa del mundo. Los mosaicos de terreno no se comunican con otros elementos.
* **Escenografía**: - La unidad de diseño secundaria. El paisaje se puede ocultar cuando se abre un camino que se coloca sobre ellos.
* **Rutas**: - Esto permite al jugador moverse entre los puntos de nivel y las ubicaciones del mapa. Por lo general, los caminos están ocultos de forma predeterminada y aparecen cuando un jugador pasa el nivel ubicado cerca de ellos.
* **Puntos de nivel** - Las unidades especiales, que permiten entrar en un nivel definido o teletransportar al jugador a otras coordenadas del mapa. Los niveles pueden tener múltiples entradas pero pueden tener diferentes puntos de deformación dentro de un nivel. Además, el uso del punto de nivel como punto de inicio del juego. Si no se definió el punto de inicio, un jugador comenzará desde las coordenadas 0x0.
* **Music Boxes**: - Las unidades especiales que cambian la reproducción de música cuando el personaje del jugador se para sobre ellas.

_Interfaz del editor de mapas del mundo_

<ImageZoom
alt="WorldEdit_Workspace"
url="screenshots/WorldEditing/WorldEdit_Workspace.png"
:border="true"
/>

**Cada mapa del mundo debe tener:**

* **Título del episodio**: - Este es el nombre del mapa mundial que se muestra en el menú principal. Si no lo define y cuando intenta reproducirlo en SMBX, ¡verá el título en blanco del episodio!
* **Punto de inicio del juego**: - Cualquier elemento de nivel con una bandera de "Inicio del juego". Si no lo colocas, el jugador comenzará el juego desde las coordenadas 0x0 del mapa mundial. Si coloca varios niveles con la bandera "Inicio del juego", comenzará el juego desde el más antiguo de ellos.
* **Todos los niveles deben estar conectados con caminos** - Si no conecta niveles con caminos, no podrá caminar sobre el mapa del mundo. Elementos de ruta: solo un tipo de elemento que permite caminar sobre el mapa mundial. Incluso si construyes una cadena de niveles que se colocan juntos, el siguiente nivel se abrirá solo si lo completas (el nivel es exitoso solo si el jugador los termina obteniendo el elemento de salida. Si un jugador pierde el nivel (asesinado por enemigo / jefe, cayó en un pozo, perdió una misión de nivel, etc.), la salida dará el resultado de falla, ¡y debe volver a jugar el nivel)!
