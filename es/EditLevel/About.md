# Acerca de los niveles

** Niveles **: es el espacio total disponible para los jugadores durante la realización de un objetivo discreto.

Aquí puedes crear niveles para tu juego.

La unidad de nivel principal es una ** sección **. Sección: es una subárea separada de un nivel que tiene su configuración: música, fondo, física, etc. Un jugador puede moverse entre diferentes secciones a través de puntos especiales llamados warps (puertas, tuberías o teletransportes instantáneos). Todas las secciones de nivel están en un solo espacio y puede ver muchas secciones en un momento, sin embargo, puede establecer la configuración solo para la sección actual.

** Bloques **: son objetos sólidos que son mosaicos con forma y tamaño. Los bloques son el principal material de construcción del que consta el nivel. La mayoría de los bloques interactúan con los jugadores sobre los que puede pararse y el jugador puede golpear, lo que puede ser un muro limitante. Hay bloques cuyo toque lastima al personaje del juego, y algunos son capaces de matar instantáneamente no solo a él sino también a destruir otros objetos que los hayan tocado. Hay bloques especiales con su algoritmo de interacción con el jugador. Por ejemplo, cambiar, cambiar de pared, cambiar su estado de bloqueo a desbloqueo y viceversa; cambia entre personajes de jugador y bloques de límite de caracteres, lo que permite recorrerlos solo para uno de los personajes, para otros personajes estos bloques funcionan normalmente, etc. Ya que hay un tipo especial de bloques que pueden tener cualquier tamaño. Este es un bloque considerable.

** Objetos de fondo **: son escenarios. Pero algunos BGO pueden tener características especiales: las rutas de movimiento de la plataforma (rieles) definirán las rutas de movimiento para las "plataformas" en movimiento, un bloque inverso que revertirá la velocidad de la plataforma. Algunos BGO permiten subirse a ellos. BGO puede ser de fondo y de primer plano. Colocación de BGO en primer plano sobre todos los demás elementos de nivel.

** Personajes no jugables **: son la unidad principal del juego, lo que construye el proceso del juego: hay enemigos, amigos, elementos, potenciadores, escenarios, etc. Cada NPC tiene un algoritmo y se puede programar.

** Warps **: son unidades especiales que permiten a un jugador teletransportarse desde el primer punto warp (Entrada) al segundo (Salida). El jugador puede teletransportarse entre diferentes lugares de una sección, y también el jugador puede teletransportarse entre secciones. Esta es una forma de ingresar a otra sección, pero la exclusión es de algunos NPC que pueden generar deformaciones a otra sección.

** Área de entorno físico ** (agua, arenas movedizas, etc.): esta es una unidad especial que define el entorno físico dentro de su rectángulo.

** Capas **: son grupos de elementos que se pueden usar para acceder rápidamente a ellos en eventos especiales.

** Eventos **: son datos especiales de nivel que pueden definir y cambiar dinámicamente las opciones del proceso del juego. Por ejemplo, la configuración de la sección, ocultar / mostrar objetos en las capas de destino, mover objetos en una capa, hacer el desplazamiento de la sección, etc.


_Interfaz de edición de nivel_

<ImageZoom
alt="005_levelEditingSpace"
url="screenshots/LevelEditing/005_levelEditingSpace.png"
:border="true"
/>

<u>**Cada nivel debe tener**</u>:

* ** Título del nivel **: el nombre del nivel que se muestra en el mapa mundial o en el modo de batalla. Se te pedirá cuando intentes guardar el nivel. O puede editarlos en el menú `Nivel -> Propiedades`.
* ** Punto de inicio / generación del jugador ** donde el jugador puede comenzar su caminata. Además, puedes poner en su lugar cualquier deformación, pero podrás comenzar este nivel
  cuando los haya ingresado con la definición de ID de deformación de entrada. Si no pones puntos de inicio, ¡no podrás comenzar el nivel!
* ** Salida del nivel **: este es un NPC especial que activa la salida y finaliza el nivel con un resultado exitoso. Sin salidas, el jugador no podrá salir de su nivel.
  * ** Salidas estándar **: finaliza el nivel cuando el jugador toma una de ellas. En las configuraciones SMBX64 son NPC-11 (Ruleta de cartas), NPC-16 (Dungeon ball), NPC-41 (Esfera de cristal), NPC-197 (Cinta de meta), NPC-97 (Estrella).
  * ** Salida secreta **: en las configuraciones SMBX64 hay una combinación de NPC-31 (clave) y BGO-35 (imbécil). Para activar esta salida, el jugador debe contactar por llevar una llave con ojo de cerradura.
  * ** Salida fuera de la pantalla **: esta salida no requiere ningún elemento especial, debe habilitar una bandera en la sección donde el jugador saldrá del nivel cuando saldrá de la pantalla.
  * ** Warp exit **: se trata de un warp que tiene un solo punto de entrada. El nivel terminará cuando un jugador entre en ellos. Además, las deformaciones se pueden utilizar para hacer deformaciones entre diferentes niveles o incluso deformar a coordenadas específicas del mapa del mundo. Si no se definirán las coordenadas, el jugador saldrá del nivel a la misma posición en la que el jugador ingresó al nivel o saldrá del nivel a través del mismo punto de deformación donde ingresó a través del nivel del concentrador.
  * ** Fin de salida del juego **: esta salida activará el final del episodio. Puede llamarlo mediante un comando de evento especial.
  * ** Salida de la pelea de jefes **: Algunos NPC pueden generar un elemento de salida después de derrotarlos. En el estándar SMBX64, hay NPC-15 (boom-boom) que generará NPC-16 (Bola de mazmorra), NPC-39 (Birdo) generará NPC-41 (Esfera de cristal), NPC-86 (Bowser IIIrd) se activará final del episodio. ¡Para habilitar el desove de la salida, debe habilitar la bandera "Establecer como jefe" para este NPC!