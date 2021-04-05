# Artículos
## Visión de conjunto
Contenido principal y parte de cualquier mapa del mundo. Hay materiales de construcción, paisajes, entradas a nivel, caminos, etc.
## Baldosas de terreno
Las principales unidades de diseño se utilizan para la creación del diseño del terreno del mapa mundial. Las baldosas de terreno no se comunican con otros elementos, siempre hay estática. (excepto casillas de terreno acuático)

<ImageZoom
alt="wld_tiles"
url="screenshots/WorldEditing/Items/wld_tiles.png"
:border="true"
/>
## Escenografías
La segunda unidad de diseño. Los escenarios se pueden ocultar cuando el jugador tuvo que abrir el camino que los atraviesa.

<ImageZoom
alt="wld_sceneries"
url="screenshots/WorldEditing/Items/wld_sceneries.png"
:border="true"
/>
## Rutas
Permita que un jugador se mueva entre los puntos de nivel y las ubicaciones del mapa. Por lo general, los caminos están ocultos y aparecen cuando los jugadores pasan el nivel que se encuentra cerca de ellos.

<ImageZoom
alt="wld_paths"
url="screenshots/WorldEditing/Items/wld_paths.png"
:border="true"
/>
## Entradas de nivel
Hay unidades especiales que te permiten ingresar a un nivel definido o teletransportar al jugador a otras coordenadas del mapa. Los niveles pueden tener múltiples entradas pero pueden tener diferentes puntos de deformación dentro de un nivel. Además, el uso del punto de nivel como punto de inicio del juego. Si el punto no está definido, el jugador comenzará desde las coordenadas 0x0.

<ImageZoom
alt="wld_levels"
url="screenshots/WorldEditing/Items/wld_levels.png"
:border="true"
/>
### Propiedades de entrada de nivel
<ImageZoom
alt="wld_levels"
url="screenshots/WorldEditing/LevelItemProps.png"
:border="false"
/>

**Posición**: - muestra la coordinación actual con el elemento seleccionado.

**ID de nivel**: - ID de un elemento de nivel definido en la configuración global.

**Array ID**: - los nodos de conexión del elemento seleccionado.

**Ruta de fondo**: - la imagen del punto bajo el nivel se mostrará como la imagen de la ruta

**Ruta de fondo grande**: - la imagen del punto bajo el nivel se mostrará con la misma imagen de ruta, pero con el tamaño más grande

**Siempre visible**: - con esta opción, el punto de nivel se mostrará siempre. Si esta bandera está deshabilitada, el punto de nivel se mostrará solo cuando el jugador abra un camino hacia ellos.

**Punto de inicio del juego**: - comienza la opción importante necesaria para definir la posición inicial del jugador en el juego. Este punto debe existir en el mapa mundial si crea el episodio basado en el mapa mundial (si crea un episodio basado en el centro, este punto no es necesario).

**Archivo de nivel**: - definición del archivo de nivel de destino.

**Título de nivel**: - este es un título de nivel que se mostrará en el proceso del juego cuando el jugador se pare sobre este elemento de nivel.

**Ingrese a la puerta #** - definiendo el ID de matriz de warp, donde se ingresará al jugador después del nivel de inicio. Si el valor es 0, el jugador comienza el nivel desde su punto de inicio predeterminado.

**Rutas abiertas por salidas**: - define la condición <span class="ref_result"> para ruta abierta por cada lado del punto de nivel. </span>

**Ir a coordenadas**: - si se establecen estos valores, este punto teletransportará al personaje jugable a una ubicación definida. Además, puede seleccionar un punto de destino en el modo interactivo cuando presiona el botón "set".

## Cajas de música
Hay unidades especiales que cambian la reproducción de música cuando el personaje del jugador se para sobre ellas.

<ImageZoom
alt="wld_musicboxes"
url="screenshots/WorldEditing/Items/wld_musicboxes.png"
:border="true"
/>
