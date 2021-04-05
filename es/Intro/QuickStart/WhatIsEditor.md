# Descripción general del editor

![PgeEditor](Intro/QuickStart/WhatIsPGEEditor.png)

**Moondust Editor**: - es un editor flexible y universal para niveles,
mapas del mundo y configuraciones NPC. Con ellos, puedes construir tus niveles,
mapas del mundo, episodios e incluso juegos completos.

El Editor tiene varias herramientas que te ayudarán a crear tus niveles.
¡y mundos convenientes, rápidos, progresivos y cualitativos!

**Editor**: - es parte del kit de desarrollo del Proyecto Moondust.
Moondust se centró en la creación de juegos de plataformas de desplazamiento lateral en 2D.

## Cómo usar el Editor

El editor a veces puede ser una interfaz de usuario complicada de navegar. Sin embargo, si sabe dónde buscar,
podrá encontrar lo que necesita con bastante rapidez. El editor utiliza una selección múltiple
modelo que le permite administrar rápidamente elementos en la escena de Nivel o Mapa Mundial.
Puede encontrar fácilmente el resto de las funciones importantes en las barras de herramientas y
en la barra de menú de la ventana. Para administrar elementos, necesitará utilizar un menú contextual.
**[Lea más sobre el menú contextual aquí](../../Editing/ContextMenu)**.

## Botones y opciones importantes

Las siguientes opciones del editor se encuentran entre las más utilizadas.
Puede obtener información sobre las funciones de los botones que no están en la lista colocando el cursor sobre
ellos por un segundo.

<Note type="tip">
El aspecto de los iconos puede depender del tema actual. Todas las capturas de pantalla representadas en este manual
utilice el tema de iconos internos del Editor. Puedes cambiar el tema a través de
<a href="#/Tools/ApplicationSettings#view">Application Settings</a>.
</Note>


-----

![tilesetbox](images/icons/tileset_box.png)<br/>
El botón con este icono abre **Tileset Itembox**,
uno de los dos métodos principales para agregar objetos a un nivel. Su funcionalidad
se explica con más detalle en un segmento posterior.

-----

![browserLevel](images/icons/item_browser_level.png) ![browserLevel](images/icons/item_browser_world.png)<br/>
El botón con este icono abre el **Navegador de artículos / Navegador de búsqueda**,
el método principal de agregar objetos a un nivel. Su funcionalidad es
explicado con más detalle en un segmento posterior.

-----

![p1](images/icons/player1_start.png)![p2](images/icons/player2_start.png)<br />
Antes de poder probar su nivel, debe colocar un
punto de partida para el primer jugador. El punto de partida de Green Mario es
Opcional.

-----

![water](images/icons/draw_water.png)![sand](images/icons/draw_sand.png)<br />
Estos botones se utilizan para dibujar zonas de agua y
arenas movedizas respectivamente. Estas zonas se pueden mover y cambiar de tamaño después
colocación también.

-----

![warps](images/icons/doors.png)<br />
Abre la ventana "Deformaciones y puertas", en la que las deformaciones pueden
ser configurado. Hay varias funciones no admitidas en esta ventana,
todos los cuales se detallan con más detalle en el segmento "Funciones no admitidas"
debajo.

-----

![section](images/icons/section.png)<br />
Abre la ventana "Configuración de sección", en la que varios
se pueden configurar propiedades específicas de la sección. Funciones no admitidas de
esta ventana se enumeran en el segmento "Funciones no admitidas".

-----

![layers](images/icons/layers.png)![events](images/icons/events.png)<br />
Abra las ventanas "Capas" y "Eventos" respectivamente.
Juntos, estos se pueden utilizar para crear capas móviles y alternar capa
visibilidad. Los eventos se pueden utilizar para reproducir efectos de sonido, bloquear
entrada del jugador, manipular la sección e incluso ejecutar código lua (usando
Evento onEvent de LunaLua).

-----

![sectionBar](images/icons/sections_bar.png)<br />
Los botones de sección lo transportan a la
sección al instante.

<Note type="warning">
Aunque hay un botón a la derecha para agregar secciones más allá de la Sección 20,
estas secciones extendidas no son compatibles actualmente con vanilla SMBX, SMBX-38A y SMBX2.
Agregar secciones más allá de la Sección 20 solo es compatible con <strong>Motor PGE</strong> y
por <strong>TheXTech</strong> motores.
</Note>

-----

![lock](images/icons/item_lockers.png)<br />
Habilitar un bloqueo evitará que cualquiera de los mosaicos de ese
tipo con el que se interactuará. De izquierda a derecha, las cerraduras son: Bloques,
Objetos de fondo, PNJ, deformaciones, líquidos.

![wld](images/icons/item_lockers_wld.png)<br />
Lo mismo para la edición de mapas del mundo. De izquierda a derecha, las cerraduras son: baldosas de terreno,
Escenografía, celdas de ruta, puntos de entrada de nivel, cajas de cambio de música.

-----

![snaptogrid](screenshots/focus/menu-snap-to-grid.png)<br />
"Ajustar a la cuadrícula" y la manipulación del tamaño de la cuadrícula se pueden
utilizado para una colocación más granular de elementos como bloques y
objetos de fondo. "Predeterminado por elemento" describe la cuadrícula predeterminada
opción de alineación.

-----

![animation](images/icons/animation.png)<br />
Si empieza a notar que el editor está
retrasado, la desactivación de la animación con un clic de este botón debería
ayuda\!

-----

![lang](screenshots/focus/menu-language.png)<br />
Cambia el idioma del editor. Es posible que las traducciones no siempre sean perfectamente precisas,
pero si el inglés no funciona por ti, con suerte podrás
encontrar su camino más fácilmente con un idioma diferente \!

## Uso de conjuntos de elementos

Los conjuntos de elementos son el método principal para agregar objetos a un nivel o mapa del mundo.
El editor tiene dos conjuntos de elementos diferentes que se pueden usar para agregar objetos:

*![Tilesetbox](images/icons/tileset_box.png)**[Tilesets item box](../../Tools/TilesetBox)** - El grupo organizado de conjuntos de elementos que da un
mirada organizada y ordenada a los elementos disponibles. También puede hacer sus mosaicos de
los elementos más utilizados para organizar su trabajo. Sugerimos usar esta caja de herramientas por
novatos que no están familiarizados con el conjunto de elementos disponibles. Además, esta caja de herramientas
ser útil para los usuarios que desean mantener su trabajo organizado.

<ImageZoom
    alt="TilesetBox"
    url="screenshots/Tools/TilesetBox2.png"
    width="200px"
    :border="true"
/><ImageZoom
    alt="TilesetBox"
    url="screenshots/Tools/TilesetBox.png"
    width="200px"
    :border="true"
/>

* ![browserLevel](images/icons/item_browser_level.png)![browserLevel](images/icons/item_browser_world.png) 
**[Explorador de búsqueda/Explorador de elementos](../../ EditLevel/ItemBrowser)** - La base de datos completa de elementos disponibles
para la colocación. Tiene el filtrado por grupos y una categoría, y el flexible
búsqueda de cualquier artículo específico en toda la base de datos. Sugerimos usar esta caja de herramientas
por usuarios experimentados que quieren pasar por alto todos los elementos disponibles.

<ImageZoom
    alt="SearchBrowser"
    url="screenshots/Tools/SearchBrowser.png"
    width="50px"
    :border="true"
/>


## Comparar con el editor SMBX 1.3

Compare con el editor incorporado del juego SMBX 1.3.

A diferencia del antiguo editor de SMBX, Moondust Editor utiliza la selección múltiple
modelo que permite trabajar con varios elementos al mismo tiempo.
En lugar de arrastrar cada elemento para cambiar sus propiedades, puede utilizar un
Menú de contexto. También puede establecer las mismas propiedades para varios elementos
en un momento! Puedes copiar, puedes pegar tus cosas en otro nivel / mundo,
puede deshacer cualquier cambio accidental (y rehacerlo también si es necesario). Juntos con
un modo de colocación clásico, tiene herramientas especiales como un dibujo lineal, rectangular
ubicación, elipse y una herramienta de relleno de inundación que hace que la ubicación del elemento del grupo
fácil y rápido. El "modo de sobrescritura" le permite reemplazar elementos existentes en
un mapa más rápido!


### Errores de SMBX Editor ausentes en Moondust Editor:</u>

- Tiene total libertad para usar valores decimales en los archivos npc.txt
(el accidente no sucederá)
- tiene total libertad para usar escenarios personalizados en el rango 32-65 en el mundo
mapa con un guardado correcto del archivo (SMBX Editor se bloqueará cuando intente guardar
un mapa del mundo con esos elementos).

- No se inundará de enredaderas o paisajes cuando lo intente
para ponerlos en el mapa.

- El llenado por inundación es seguro: si realizó un llenado por inundación accidental del espacio exterior,
el proceso de llenado por inundación se detiene después de 3 seg. Puede deshacer esto y arreglar su
error sin la recarga del Editor.

- Nunca obtendrá el mensaje "desbordamiento" porque Moondust Editor tiene más
espacio para guardar todos tus artículos. Si intentas guardar el nivel o el mapa del mundo en
el formato heredado, obtendrá el mensaje de advertencia que le informa sobre
límites emocionantes. Debería ayudarlo a asegurarse de que su archivo sea compatible
con un juego de legado.
