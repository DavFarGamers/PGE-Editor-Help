# Cómo hacer niveles

![HowToLevels](Intro/QuickStart/HowToMakeLevels.png)

** Niveles **: - es un espacio total disponible para los jugadores durante el
curso de completar un objetivo discreto.


Para comenzar a hacer niveles, primero debes abrir el
`"File" -> "New" -> "Level"` opción del menú. Cuando lo hiciste, verás el
interfaz de edición principal que contiene espacio de edición donde podrá
necesidad de colocar objetos.


Si desea trabajar con el nivel existente, puede abrir el "Archivo" -> "Abrir"
menú y seleccione el archivo necesario en el explorador. Para abrir el archivo, también puede
arrastre y suelte un archivo en la ventana del Editor directamente. Puedes asociar
todo compatible con archivos PGE Editor con el editor dentro del
`"Tools" -> "Application Settings"` menú para abrirlos desde un administrador de archivos por
haciendo doble clic en ellos.

Para construir un nivel, debe colocar cualquier elemento que pueda encontrar en el
caja de herramientas de artículos especiales. Además, puede establecer la configuración de la sección: tamaño,
elija la imagen de fondo y use cualquier música de fondo. Necesitarás abrir
la caja de herramientas de configuración de la sección donde puede encontrar las propiedades de una corriente
sección.

**Cada nivel debe tener:**

* **Título del nivel**: el nombre del nivel que se muestra en el mapa mundial
o en el modo batalla. Se te pedirá cuando intentes salvar el nivel.
O puede editarlos en el "Level" -> "Properties" menú.
* **Punto de inicio/generación del jugador** donde el jugador aparecerá al comienzo del nivel.
En lugar de puntos de generación, puede poner cualquier deformación, sin embargo, este nivel
se puede iniciar ingresando una deformación específica por su ID (por ejemplo, ingrese
a este nivel desde otro nivel o ingrese desde el mapa del mundo)! Cuando el nivel tiene
no se especifican puntos de inicio ni deformación de entrada, ¡fallará con un error!
* **Salida del nivel**: este es un NPC especial que activa la salida y finaliza
el nivel con un resultado exitoso. Sin salidas, el jugador no podrá
para salir del nivel. Hay posibles tipos de salida de nivel:
* **Salidas estándar**: son nivel de finalización cuando una de ellas fue tomada por
   jugador. In the SMBX64 configurations there are a NPC-11(Card roulette),
  NPC-16 (Dungeon ball), NPC-41 (Crystal sphare), NPC-197 (Goal tape),
  NPC-97 (Star).
  * **Salida secreta**: en las configuraciones SMBX64 es una combinación de
  NPC-31 (llave) y BGO-35 (ojo de cerradura). Para activar este reproductor de salida
   debe contactar con la llave llevada con el orificio de la cerradura.
  * **Salida fuera de pantalla**: este tipo de salida no requiere ningún elemento obligatorio
   metido. En su lugar, deberá establecer la bandera para la sección donde el jugador estará
   capaz de salir del nivel cuando saldrá de la pantalla.
  * **Salida de urdimbre**: esta es una urdimbre con un solo punto de entrada y tiene la
   Indicador de 'salida de nivel' habilitado. El nivel se completará cuando el jugador
   entrar en esta urdimbre. Los warps se pueden usar para hacer una habilidad para ir entre
   diferentes niveles o incluso entrar en posiciones específicas del mapa del mundo a través de
   un nivel. Si no se especificaron las coordenadas del mapa mundial, el jugador regresará
   la misma posición en el mapa del mundo donde se ingresó a este nivel, o saldrá por
   el mismo nivel a través del mismo punto de deformación donde se ingresó (en el centro
   episodios).
  * **Salida de fin de juego**: este tipo de salida activará el final del episodio.
   Puede llamarlo a través del comando de evento especial que se puede configurar a través de
   la caja de herramientas de 'eventos'.
  * **Salida de derrota de jefe**: algunos NPC pueden generar un elemento de salida cuando los derrotas.
   En el estándar SMBX64 hay NPC-15 (boom-boom) que generarán el NPC-16 (Dungeon ball);
   El NPC-39 (Birdo) generará el NPC-41 (Crystal sphare);
   La derrota del NPC-86 (Bowser IIIrd) ejecutará el final del episodio.
   Para habilitar la aparición del elemento de salida, ¡el NPC debe tener habilitada la bandera "Establecer como jefe"!


_Interfaz de edición de nivel_

<ImageZoom 
  alt="EditorInterface"
  url="screenshots/LevelEditing/005_levelEditingSpace.png" 
  :border="true"
/>


## Elementos y unidades de nivel

**La unidad del nivel principal es una sección**. Sección - es una subárea separada de
nivel que tiene su propia configuración: música, fondo, física, etc.
El jugador puede moverse entre secciones a través de puntos especiales llamados **warps**. Todas las secciones
colocados en un espacio unido, por lo tanto, puede ver muchas secciones en un espacio,
sin embargo, puede cambiar la configuración de una sección al mismo tiempo.


### Artículos

**[Elementos](../../EditLevel/Items)** - son el contenido principal de cada nivel. Para hacer el nivel debes
colocar elementos para construir el universo del nivel.

<u>Haga clic en el nombre del tipo de elemento para obtener más información sobre ellos:</u>

**[Bloques](../../EditLevel/Items#blocks)** - son objetos sólidos que son
azulejos con su forma y tamaño. El principal material de construcción de qué nivel
Consiste. La mayoría de los bloques interactúan con los jugadores sobre los que puede colocarse.
sobre el que el jugador puede golpear, lo que puede ser un muro limitante. Hay bloques
que duele al personaje del juego al tocarlo, y algunos pueden matarlo
instantáneamente, y también capaz de destruir otros objetos que los hayan tocado.
Hay bloques especiales con algoritmo propio de interacción con el jugador.
Por ejemplo: interruptor, interruptor de pared, lo que cambia su estado de bloqueo a
desbloquear y volver; cambia entre personajes de jugador y bloques de límite de caracteres,
lo que permite caminar a través de ellos solo para uno de los personajes, para otros personajes
estos bloques funcionan normalmente, etc. Como hay un tipo especial de bloques
que puede tener cualquier tamaño. Este es un bloque de tamaño considerable.

**[Objetos de fondo](../../EditLevel/Items#bgo)** - son escenarios. Sin embargo, algunos
de BGO puede tener características especiales: rieles de movimiento de la plataforma, que guiarán el movimiento
de "plataformas" (objetos basados en NPC), bloque inverso que hará retroceder la plataforma móvil.
Algunos BGO permiten que un jugador se suba a ellos. BGO puede ser de fondo y de primer plano.
Colocación de BGO en primer plano sobre todos los demás elementos de nivel.

**[Personajes no jugables](../../EditLevel/Items#npc)** - son una unidad principal del juego, construyen
el proceso del juego: hay enemigos, amigos, objetos, potenciadores, escenarios, etc.
Cada NPC tiene su propio algoritmo que se puede programar.

**[Warp/Door points](../../EditLevel/Items#warps)** - son unidades especiales que permiten a un jugador
para teletransportarse desde el primer punto de deformación (Entrada) al segundo (Salida).
El jugador puede teletransportarse entre diferentes lugares de la misma sección, y también, el jugador puede ir entre
diferentes secciones. Ésta es la única forma de pasar de una sección a otra. Sin embargo, hay
excepciones: algunos NPC pueden generar el camino entre diferentes secciones.

**[Área del entorno físico](../../EditLevel/Items#Physical-Environments)**(Agua, arenas movedizas, etc.): - este es un
Unidad especial que declara el entorno físico dentro de su área.


### Unidades especiales
**[Capas](../../EditLevel/Layers)**: - son grupos de elementos que se pueden utilizar para acceder rápidamente a
ellos por eventos especiales y para acciones de grupo sobre elementos son miembros de una capa.

**[Eventos](../../EditLevel/Events)**: - son unidades de programación simples del nivel que pueden
afectar las opciones del proceso del juego. Por ejemplo: configuración de sección, ocultar / mostrar objetos en capas de destino,
mover objetos de la capa, hacer el scroll de una sección, etc.
