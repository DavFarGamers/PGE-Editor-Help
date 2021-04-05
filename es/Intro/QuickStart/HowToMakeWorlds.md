# Cómo hacer mapas del mundo

![HowToWorlds](Intro/QuickStart/HowToMakeWorlds.png)

**Mapa del mundo**: - es la lista interactiva de niveles disponibles para que juegue un jugador.

Mapa del mundo: - ¡es una unidad principal del juego o un episodio!

Los mapas del mundo también pueden tener un estilo de centro, es decir, el mapa del mundo no será
usado. En cambio, el nivel especial se utilizará como lista de niveles para jugar,
que se llama HUB. En el centro, el jugador puede entrar en niveles a través de warps.

Para comenzar a construir el mapa del mundo, primero debe abrir el
`"File" -> "New" -> "World"` opción del menú. Cuando lo hiciste, lo harás
ver la interfaz de edición principal que contiene espacio de edición
donde deberá colocar los objetos.

Si desea trabajar con un mapa del mundo existente, puede abrir el "Archivo" -> "Abrir"
menú y seleccione el archivo necesario en el explorador. Para abrir el archivo, también puede
arrastre y suelte un archivo en la ventana del Editor directamente. Puedes asociar
todo compatible con archivos PGE Editor con el editor dentro del
`"Tools" -> "Application Settings"` menú para abrirlos desde un administrador de archivos por
haciendo doble clic en ellos.

Para hacer un mapa del mundo, debe colocar cualquier elemento que pueda encontrar
en la caja de herramientas de elementos especiales. El mapa del mundo también la configuración de
tu episodio.

Los elementos importantes son niveles y caminos. Los niveles son entradas
de tus niveles. Caminos que dan la posibilidad de caminar entre niveles o
caminar sobre el mapa del mundo. No olvides que los caminos no se pueden conectar.
imágenes, hay cuadrados simples que permiten caminar entre
ellos cuando se acercan el uno al otro.


** Cada mapa del mundo debe tener **:

* **Título del episodio**: - este es el nombre del mapa del mundo que muestra
en el menú principal. Si no lo definirás y cuando lo intentarás
para reproducirlo en SMBX, verá el título del episodio en blanco.
* **Punto de inicio del juego**: - el elemento de cualquier nivel con la bandera "Inicio del juego".
Si no lo coloca, el jugador comenzará el juego desde 0x0
coordenadas del mapa del mundo. Si pones varios niveles con
Bandera de "Inicio del juego", comenzará el juego desde el más antiguo de ellos.
* **Todos los niveles deben estar conectados con caminos** - si no lo hace
conecte niveles con caminos que no podrá caminar sobre el mapa del mundo.
Elementos de la ruta: solo tipo de elementos que permiten caminar
mapa del mundo. Incluso si construyes una cadena de niveles que colocan
juntos, el siguiente nivel se abrirá solo si logras
completarlo (el nivel es exitoso solo si el jugador los termina obteniendo
del elemento de salida. Si el jugador pierde (asesinado por el enemigo / jefe, cae al pozo,
perder nivel de misión, etc.), la salida ha fallado y deberías volver a jugar el nivel).!

_Interfaz del editor de mapas del mundo_

<ImageZoom 
  alt="WorldMapInterface"
  url="screenshots/WorldEditing/WorldEdit_Workspace.png" 
  :border="true"
/>


## Elementos del mapa mundial

**[mosaicos de terreno](../../EditWorld/Items#terrain-tiles)** - las principales unidades de diseño que se utilizan para la creación
de un diseño del mapa del mundo. Los mosaicos de terreno no se comunican con
otros elementos.

**[Scenery](../../EditWorld/Items#sceneries)** - hay una unidad de diseño secundaria. Los paisajes se esconderán cuando
Se abren las celdas de ruta que se colocaron sobre los paisajes.

**[Celdas de rutas](../../EditWorld/Items#rutas)** - son unidades que permiten al jugador moverse entre diferentes
puntos de nivel y ubicaciones del mapa. Por lo general, las celdas de ruta están ocultas de forma predeterminada y aparecen cuando el jugador pasa
el nivel que colocó cerca de ellos.

**[Entradas de nivel](../../EditWorld/Items#nivel-entradas)** - hay
una unidad especial, que permite al jugador entrar en un nivel específico o
Teletransportar al jugador a otras coordenadas del mapa. Los niveles pueden tener múltiples entradas,
pero puede tener diferentes puntos de deformación dentro de un nivel. Además, el punto de nivel se utiliza como
punto de inicio del juego. Si no se colocó el punto de inicio (el mapa del mundo no tiene
punto de entrada de nivel con la bandera de "Inicio del juego" habilitada), el jugador comenzará el juego
en la posición 0: 0.

**[Music Boxes](../../EditWorld/Items#music-boxes)** - hay unidades especiales que cambian una reproducción
música cuando el personaje jugable está sobre ellos.
