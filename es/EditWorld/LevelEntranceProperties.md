# Caja de herramientas Propiedades de entradas de nivel

Esta caja de herramientas le permite editar las propiedades de un elemento o grupo de elementos.

![levelItemProps](../screenshots/WorldEditing/LevelItemProps.png)

**Posición**: - muestra la coordinación actual del elemento seleccionado.

**ID de nivel**: - ID del elemento de nivel que se definió en la configuración global.

**ID de matriz**: - las indes de conexión del elemento seleccionado.

**Ruta de fondo**: - la imagen del punto bajo el nivel se mostrará como la imagen de la ruta

**Ruta de fondo grande**: - la imagen del punto bajo el nivel se mostrará con la misma imagen de ruta, pero con un tamaño más grande

**Siempre visible**: - con esta opción, el punto de nivel se mostrará siempre. Si esta bandera está desactivada, el punto de nivel se mostrará solo cuando el jugador abra el camino hacia ellos.

**Punto de inicio del juego**: - la opción importante que se necesita para definir la posición inicial del jugador en el inicio del juego. Este punto debe existir en el mapa mundial si crea el episodio basado en el mapa mundial (si crea un episodio basado en el centro, este punto no es necesario).

**Archivo de nivel**: - definición del archivo de nivel de destino.

**Título de nivel**: - este es un título de nivel que se mostrará en el proceso del juego cuando el jugador se pare sobre este elemento de nivel.

**Ingrese a la puerta #** - definiendo el ID de matriz de warp, donde se ingresará al jugador después del nivel de inicio. Si el valor es 0, el nivel de inicio del jugador desde su punto de inicio predeterminado.

**Rutas abiertas por salidas**: - define la condición <span class="ref_result"> para ruta abierta por cada lado del punto de nivel. </span>

**Ir a coorditanes**: - si se establecen estos valores, este punto teletransportará al personaje jugable a la ubicación definida. También puede seleccionar el punto de destino en el modo interactivo cuando presiona el botón "Set".