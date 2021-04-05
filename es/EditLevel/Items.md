# Elementos de nivel

** Elementos **: contenido principal y parte de muchos niveles. Hay material de construcción, paisajes, elementos, personajes, etc.

<u>**Avalilable item types:**</u>
* [Blocks](#blocks)
* [Background objects](#bgo)
* [Non-playable characters](#npc)
* [Warp/Door points](#warps)
* [Physical environments (Known in SMBX as Water/Quicksand)](#physical-environments)
* [Player's start points](#player-points)

## Bloques

** Bloques **: son objetos sólidos que son mosaicos con forma y tamaño. Los bloques son el principal material de construcción del que consta el nivel. La mayoría de los bloques interactúan con los jugadores sobre los que puede pararse y el jugador puede golpear, lo que puede ser un muro limitante. Hay bloques cuyo toque lastima al personaje del juego, y algunos son capaces de matar instantáneamente no solo a él sino también a destruir otros objetos que los hayan tocado. Hay bloques especiales con su algoritmo de interacción con el jugador. Por ejemplo, cambiar, cambiar de pared, cambiar su estado de bloqueo a desbloqueo y viceversa; cambia entre personajes de jugador y bloques de límite de caracteres, lo que permite recorrerlos solo para uno de los personajes, para otros personajes estos bloques funcionan normalmente, etc. Ya que hay un tipo especial de bloques que pueden tener cualquier tamaño. Este es un bloque considerable.

_Colocación de bloques_

<ImageZoom
alt="place_blocks"
url="screenshots/LevelEditing/Items/place_blocks.png"
width="200px"
:border="true"
/>


_Menú contextual de bloque_

<ImageZoom
alt="BlockContext"
url="screenshots/LevelEditing/Items/BlockContext.png"
width="200px"
:border="true"
/>


### Block Properties

**Each block have flags:**

* **Invisible**: haz que el bloque sea invisible. Aparecerá una vez que reciba un golpe desde la parte inferior. Esta bandera es útil para un lugar en el mapa, bonificaciones secretas o para construir barreras para un ascenso.
* **Resbaladizo**: la superficie superior del bloque estará resbaladiza.
* **Cambiar NPC contenido** - Abrir cuadro de diálogo de selección de NPC para cambiar el contenido del bloque.

* **Capa** - aquí se definió la capa que es propietaria de este bloque.
   Todos los elementos al principio son miembros de la capa "Predeterminada".

**Cada bloque tiene los espacios para eventos:**

* **Destruido**: esta ranura se activa si un bloque se ha roto, aplastado, destruido, etc.
* **Hit**: esta ranura se activa si los bloques están siendo golpeados, pateados, golpeados desde el costado o desde abajo.
* **La capa está vacía** - (En SMBX, esta ranura se llamaba "<u>No más objetos en la capa</u>") esta ranura se activa cuando se activa la ranura "destruida" y cuando la capa cuyo propietario de este bloque es no tiene otros objetos.

_Caja de herramientas de propiedades de bloque_

<ImageZoom
alt="Props_Block"
url="screenshots/LevelEditing/Items/Props_Block.png"
width="200px"
:border="true"
/>

### Bloques considerables

Es un tipo especial de bloque que puede tener cualquier tamaño. A diferencia de las cerraduras estándar, este bloque se coloca por dibujo de rectángulo, y su tamaño se define por el tamaño del rectángulo cuando suelta la tecla del mouse:

_Dibujo de bloques considerables_

<ImageZoom
alt="DrawSizableBlock"
url="screenshots/LevelEditing/Items/DrawSizableBlock.png"
width="200px"
:border="true"
/>


Estos bloques se pueden cambiar de tamaño. A diferencia de los bloques estándar, estos bloques se muestran en la capa de fondo baja y se muestran siempre en BGO (pero algunos BGO en la excepción se pueden mostrar en bloques de tamaño considerable).

Para comenzar a cambiar el tamaño, debe abrir el elemento del menú contextual "Resize" y verá un rectángulo azul con un "sizer". Mueva los puntos o los lados de las esquinas para definir el nuevo tamaño del bloque. Cuando haya terminado de cambiar el tamaño, presione la tecla ENTER para aceptar el nuevo tamaño, y luego el bloque tendrá un nuevo tamaño. Si presiona la tecla ESC, cancelará el cambio de tamaño y el bloque mantendrá su tamaño actual.

<Note type="tip">
Nota: Si desea obtener más funciones del cuadro de cambio de tamaño (red verde que definió el nuevo tamaño de la sección), haga clic dentro de ellos con el botón derecho del mouse.
</Note>

El menú contextual tiene acciones:

* **Cortar la parte superior aquí**: mueve el límite superior del cuadro a la posición actual del mouse
* **Cortar a la izquierda aquí**: mueve el límite izquierdo del cuadro a la posición actual del mouse
* **Cortar aquí**: mueve el límite derecho del cuadro a la posición actual del mouse
* **Cortar la parte inferior aquí**: mueve el límite inferior del cuadro a la posición actual del mouse
* **No ajustar a la cuadrícula**: deshabilita el ajuste de la cuadrícula al mover los límites del cuadro
* **Deshabilitar el límite de tamaño mínimo**: brinda la posibilidad de establecer un tamaño menor que el tamaño mínimo disponible

_Cambio de tamaño de bloques considerables_

<ImageZoom
alt="ResizeBlock2"
url="screenshots/LevelEditing/Items/ResizeBlock2.png"
width="200px"
:border="true"
/>

## BGO

** Objetos de fondo ** - es un escenario. Pero algunos BGO pueden tener características especiales: las rutas de movimiento de la plataforma definirán las rutas de movimiento para las "plataformas" en movimiento, bloqueo inverso, que revertirá la velocidad de la plataforma. Algunos BGO permiten subirse a ellos. BGO puede ser de fondo y de primer plano. Colocación de BGO en primer plano sobre todos los demás elementos de nivel.

_Colocación de BGO_

<ImageZoom
alt="PlacingBGO"
url="screenshots/LevelEditing/Items/PlacingBGO.png"
width="200px"
:border="true"
/>


_BGO Menu contextual_

<ImageZoom
alt="BGO_Context"
url="screenshots/LevelEditing/Items/BGO_Context.png"
width="200px"
:border="true"
/>

### Propiedades BGO

Cada BGO ahora tiene solo dos opciones:

* **Layer** - aquí se define la capa, cuál es el dueño de este BGO. Todos los elementos al principio son miembros de la capa "Predeterminada".

* **Z-Layer** - definir la prioridad de visualización: por encima o por debajo de otros elementos. (Disponible solo para formato LVLX)
* **Z-Offset** - Este es un valor útil que permite ordenar los BGO que se muestran uno encima / debajo del otro. (Disponible solo para formato LVLX)

* **Sorting priority** - La opción especial que se usa solo para el proceso de guardado del formato de archivo SMBX64-LVL como solución alternativa, pero no se guarda en ellos.

Esta opción solo se puede usar como un truco de SMBX para forzar la visualización de fondo BGO como primer plano. Esta opción no define el Z-value, que es el valor real de prioridad de procesamiento. Esta opción define la secuencia de elementos de la matriz para BGO en el archivo.

_Caja de herramientas BGO Properties_

<ImageZoom
alt="BGO_Context"
url="screenshots/LevelEditing/Items/Props_BGO.png"
:border="true"
/>

### Hack: Z-Order en SMBX

El motor SMBX heredado no admite la personalización del orden Z de forma nativa. Sin embargo, es posible con una solución alternativa. Esto funciona SOLO si guarda en formato de archivo SMBX. Y no salvará en ellos. Después de volver a abrir el mismo archivo, debe definir este valor nuevamente.


**1)** Todos los datos, incluidos los BGO, en archivos escritos en una secuencia definida:

![Pseudo-foregroundBGO-1](screenshots/LevelEditing/Items/bgo_hack/Pseudo-foregroundBGO-1.png)

**2)** Cuando usamos el valor de prioridad de clasificación, le diremos el lugar de BGO, al principio, en el medio o al final de la matriz:

![Pseudo-foregroundBGO-2](screenshots/LevelEditing/Items/bgo_hack/Pseudo-foregroundBGO-2.png)

El algoritmo de renderizado SMBX que muestra BGO por grupos especiales: capas y el orden de BGO es muy importante para este caso. Entonces, si vamos a hacer un cambio de orden, dejaremos un primer BGO, que está marcado como "Primer plano", para hacer que todos los siguientes BGO también estén en primer plano, incluso si no hay una bandera de "primer plano". Sabiendo esto, es posible forzar la visualización de cualquier BGO de fondo como primer plano.

**3)** Para permitir que esta característica funcione, debe colocar en el mapa cualquier BGO de "primer plano" verdadero en cualquier posición (si su nivel no tiene esos BGO, coloque uno de ellos fuera de la sección para obtenerlo en el espacio de nivel). Este truco requiere uno de BGO en primer plano debajo de nuestro BGO, que también queremos poner en primer plano.

<ImageZoom
alt="001_bgo_hack"
url="screenshots/LevelEditing/Items/bgo_hack/_001_bgo_hack.png"
width="200px"
:border="true"
/>


<Note type="warning">
No olvide que si guarda el archivo en formato SMBX1 ... 64 LVL, en
A continuación, abra este archivo, debe redefinir el valor de prioridad de clasificación.
de nuevo, porque no se guarda en el archivo de nivel SMBX. Copia de seguridad guardada en
Se sugiere el formato de archivo LVLX.
</Note>


**Resultado del truco de BGO en acción**
__(arbusto a la derecha dibujado sobre personajes jugables)__

<ImageZoom
alt="Foreground_BGO"
url="screenshots/LevelEditing/Items/bgo_hack/Pseudo-Foreground_BGO.png"
width="200px"
:border="true"
/>

## NPC
**Personajes no jugables**: es la unidad principal del juego que construye el proceso del juego: hay enemigos, amigos, elementos, potenciadores, escenarios, etc. Cada NPC tiene su algoritmo y se puede programar.

_Colocación de NPC_

<ImageZoom
alt="PlacingNPC"
url="screenshots/LevelEditing/Items/PlacingNPC.png"
width="200px"
:border="true"
/>


_Menú contextual de NPC_

<ImageZoom
alt="NPC_Direction"
url="screenshots/LevelEditing/Items/NPC_Direction.png"
width="200px"
:border="true"
/>

### Propiedades de NPC

Cada NPC tiene interruptores y banderas:

* Dirección predeterminada: el NPC comenzará su movimiento en una dirección definida. La opción de dirección puede tener otros nombres y valores, por ejemplo, el nombre "Estado de activación" y los valores "Activado" / "Desactivado", etc. Depende del algoritmo y la configuración global.
* Amigable: los NPC no se comunicarán con los personajes jugables ni con otros NPC. Los NPC amistosos no se pueden matar, no pueden lastimar al jugador, no se pueden tomar ni agarrar. Los personajes jugables y otros NPC no pueden estar al tanto de los NPC amistosos.
* No movible: NPC estará inactivo independientemente de su algoritmo.
* Establecer como jefe - (dentro de SMBX esta opción se llama "Jefe heredado") Esta es una bandera especial que habilita automáticamente eventos especiales para algunos jefes que los apoyan. Por ejemplo: si el NPC tiene activada la bandera de "Jefe", se cambiará la música de fondo al tema del jefe y cuando el jefe sea derrotado, se generará un elemento de bonificación especial o se completará el juego.
* Mensaje de conversación: el mensaje que se mostrará cuando un jugador intente hablar con este NPC. Después de mostrar este mensaje, se activará la ranura de eventos.
* Generador - Haciendo generador de NPC. A partir de un punto, se generarán nuevos NPC en cada retraso de tiempo definido.
  * Tipo de generador - Warp - NPC se deformará suavemente. Proyectil: aparecerá un NPC disparando bruscamente.
  * Dirección del generador: define la dirección de la generación de NPC

_Edición de cuadro de mensaje_

<ImageZoom
alt="MessageBox"
url="screenshots/LevelEditing/MessageBox.png"
width="200px"
:border="true"
/>

<Note type="tip">
Nota: No olvide: todos los caracteres de nueva línea no funcionarán correctamente.
con SMBX Engine (pero funcionará en Moondust Engine de forma nativa).
Como solución alternativa para SMBX Engine, utilice los espacios adicionales para provocar un ajuste de palabras.
</Note>


Algunos NPC pueden tener un valor especial:

* **Contenido**: esta opción tiene un ID de otro NPC incluido en este NPC. Disponible para NPC que se marcan como "contenedores".
* **Spinbox con valor numérico**: algunos NPC pueden tener el valor especial numérico, por ejemplo, la posición del segmento de la barra de fuego.
* **Cuadro combinado especial**: algunos NPC pueden tener algoritmos intercambiables que pueden establecer algoritmos de NPC individuales de la lista.

* **Capa**: aquí se define la capa que es propietaria de este NPC. Todos los elementos al principio son miembros de la capa "Predeterminada".
* **Adjuntar capa**: esta es una opción especial: todos los elementos estáticos son miembros de una capa adjunta, se moverán junto con este NPC.


Cada NPC tiene los espacios para eventos:

* **Activar** - Esta ranura que se activa luego NPC aparecerá en la zona visible del jugador.
* **Muerte**: esta ranura que se activa luego de NPC será derrotada, destruida, pateada o tomada (monedas, power-ups, etc.).
* **Hablar** - Se habló con este NPC sobre esta ranura que activa al jugador.
* **La capa está vacía** - (En SMBX esta opción se llama "No más objetos en la capa") esta ranura se activa cuando se activa la ranura "Muerte" y cuando está en la misma capa que es propietario si este NPC ya no tiene miembros.


_Caja de herramientas de propiedades de PNJ: Generador, Contenedor de PNJ, Contenedor de PNJ con valor especial de cuadro de giro_

<ImageZoom
alt="Props_NPC_generator"
url="screenshots/LevelEditing/Items/Props_NPC_generator.png"
width="100px"
:border="true"
/><ImageZoom
alt="Props_NPC_Container"
url="screenshots/LevelEditing/Items/Props_NPC_Container.png"
width="100px"
:border="true"
/><ImageZoom
alt="Props_NPC_Container_Second"
url="screenshots/LevelEditing/Items/Props_NPC_Container_Second.png"
width="100px"
:border="true"
/>



### Contenedores NPC

Todos los que trabajaron con Legacy SMBX Engine conocen las banderas "Egg", "Buried", "Bubble" y "Lakuti". Estas banderas empaquetan artículos seleccionados en el NPC especial que llama como contenedor. El contenedor puede haber incluido en ellos NPC que se pueden extraer cuando el contenedor será destruido o será generado por el contenedor antes de que sea destruido.

En el SMBX, estamos presionando "Burbuja = Sí" o "Enterrado = Sí" para colocar el NPC "Empacado en la hierba" o "Paquete en la burbuja".

En PGE-Editor puede editar contenedores. Y por lo tanto, por ejemplo, Herb será más útil en el grupo SMB2, porque "¡Los Lakutus están lanzando Lakitus!" en SMBX: es una pestaña secreta que necesita muchas acciones para abrirse. Incluso en el PGE-Editor, la misma "pestaña" es un "grupo" no secreto. Para colocar elementos "rebajados", debemos seleccionar el elemento "hierba" y establecer su contenido antes de que los coloquemos o puede establecer el contenido de los elementos ya colocados editando sus propiedades. En el PGE los secretos están ausentes: ¡todos son gratuitos y de código abierto!

Si recogemos algún NPC de la categoría "Contenedores" y se colocarán en el mapa con contenido vacío:

<ImageZoom
alt="001_placed_containers"
url="screenshots/LevelEditing/Items/NPC-Container/001_placed_containers.png"
width="200px"
:border="true"
/>

Pero, ¿cómo colocarlos con contenido?

Para contenedores ya colocados podemos seleccionar solo o un grupo de NPC-Containers
y abra el elemento "Propiedades" del menú contextual:

<ImageZoom
alt="002_Open_props"
url="screenshots/LevelEditing/Items/NPC-Container/002_Open_props.png"
width="200px"
:border="true"
/>

Ahora deberíamos hacer clic en el **\[empty\]** botón para seleccionar el NPC objetivo como "contenido"
de este contenedor(s):

<ImageZoom
alt="003_choice_included"
url="screenshots/LevelEditing/Items/NPC-Container/003_choice_included.png"
width="200px"
:border="true"
/>

Aquí puede seleccionar el NPC necesario que se incluirá en nuestro(s) contenedor(s):

<ImageZoom
alt="004_select_contain"
url="screenshots/LevelEditing/Items/NPC-Container/004_select_contain.png"
width="200px"
:border="true"
/>

Listo, ahora la burbuja tiene la llave dorada como contenido:

<ImageZoom
alt="005_NPC_included"
url="screenshots/LevelEditing/Items/NPC-Container/005_NPC_included.png"
width="200px"
:border="true"
/>

Las mismas operaciones para configurar las balas de Butterfly:

<ImageZoom
alt="008_lakitu_with_contains"
url="screenshots/LevelEditing/Items/NPC-Container/008_lakitu_with_contains.png"
width="200px"
:border="true"
/>

Y lo mismo para configurar el contenido de huevo:

<ImageZoom
alt="009_egg"
url="screenshots/LevelEditing/Items/NPC-Container/009_egg.png"
width="200px"
:border="true"
/>

Pero, ¿cómo colocar el contenedor con contenido ya incluido?

**1)** Toma el NPC necesario de la caja de herramientas del artículo:<br/>
<ImageZoom
alt="006_placing_container"
url="screenshots/LevelEditing/Items/NPC-Container/006_placing_container.png"
width="200px"
:border="true"
/>

**2)** Establecer en el contenido de la ventana Propiedades abierta de NPC y luego colocarlos
al mapa:
<ImageZoom
alt="007_herb_with_contains"
url="screenshots/LevelEditing/Items/NPC-Container/007_herb_with_contains.png"
width="200px"
:border="true"
/>

### Generadores

La bandera del generador en el cuadro de diálogo Propiedades hará que el generador (o la reaparición
punto) del NPC seleccionado

<ImageZoom
alt="Props_NPC_generator"
url="screenshots/LevelEditing/Items/Props_NPC_generator.png"
width="200px"
:border="true"
/>

* **NPC** aparecerá cada retraso de tiempo por dos métodos: warp y proyectil.
* **Warp**: el NPC se verá suave y comenzará su movimiento regular al aparecer.
* **Proyectil** - NPC será disparado bruscamente desde el generador.


En SMBX Editor, los generadores no tienen marcadores. En PGE Editor, cada generador tiene
su marcador como flecha de dirección del generador:


_Tipos de generadores_

<ImageZoom
alt="Generator_types"
url="screenshots/LevelEditing/Items/NPC-Generator/Generator_types.png"
width="200px"
:border="true"
/>

_Generadores en acción_

<ImageZoom
alt="Generators_in_action"
url="screenshots/LevelEditing/Items/NPC-Generator/Generators_in_action.png"
width="200px"
:border="true"
/>


## Deformaciones

** Warps **: son unidades especiales que le dan al jugador la capacidad de teletransportarse
desde el primer punto de deformación (Entrada) hasta el segundo (Salida). El jugador puede teletransportarse entre diferentes lugares de una sola sección, pero también el jugador puede teletransportarse entre diferentes secciones. Esta es una forma de ingresar a otra sección, pero la exclusión es algunos NPC que pueden generar una deformación a otra sección.

_Caja de herramientas para puertas y ventanas_

<ImageZoom
alt="001_warpList"
url="screenshots/LevelEditing/Warps/001_warpList.png"
width="200px"
:border="true"
/>

Todas las entradas de warp se muestran en la lista especial:

En SMBX, todas las entradas de warps están ocultas y no puede verlas. En el
PGE-Editor es posible obtener una lista completa de warps:

<ImageZoom
alt="LevelGlobalWarpList"
url="screenshots/LevelEditing/Warps/LevelGlobalWarpList.png"
width="200px"
:border="true"
/>

_Menú contextual del punto de deformación_

<ImageZoom
alt="WarpContextMenu"
url="screenshots/LevelEditing/Warps/WarpContextMenu.png"
width="200px"
:border="true"
/>

### Propiedades

**Warps tienen siguientes banderas:**

* **Sin vehículos** - (En SMBX esta opción se llamaba "No Yoshi") Cuando un personaje jugable entra en esta urdimbre, saldrá sin un vehículo (el vehículo se devolverá cuando un jugador salga de este nivel).
* **Permitir elementos** - (En SMBX esta opción se llamaba "Permitir NPC") Con esta bandera, el personaje jugable puede obtener el elemento transportado a través de esta urdimbre. Sin esta bandera, los elementos estarán fermentados alrededor de la entrada de esta urdimbre.
* **Bloqueado**: esta bandera cerrará la puerta con un candado. Para abrir este reproductor warp conviene coger una llave. Cuando se aplicó la clave, la urdimbre se abrirá para ingresar.
* **Necesita una bomba**: esta bandera cerrará la puerta con una cerradura. Para abrir esta urdimbre es necesario hacer explotar la cerradura con cualquier proyectil explosivo, bomba, etc. Cuando ocurra una explosión, se abrirá una urdimbre para entrar.
* **Solo estado especial**: esta bandera no permitirá la entrada de jugadores en cualquier estado excepto en uno especial (que se define en la configuración)
* **Warp bidireccional**: permite a los jugadores entrar en este warp desde ambos lados.

**Banderas especiales**

* **Nivel de entrada** - esta opción permite utilizar un solo punto. Con esta bandera imposible de ingresar en esta urdimbre, esta urdimbre se puede usar solo para ingresar a este nivel, por ejemplo, desde un mapa del mundo u otro nivel con la definición de ID de deformación objetivo.
* **Salida de nivel** - esta opción permite utilizar un solo punto. Cuando el personaje jugable entra en esta deformación, se producirá una salida de nivel.

** Valores y opciones **

Bloqueo de estrellas. Estrellas: son unidades convencionales coleccionables que identifican permisos de entrada a urdimbres / habitaciones / secciones / niveles específicos. Se pueden usar para hacer que los juegos estén más interesados ​​en una búsqueda para encontrar esas unidades. En varios juegos, las estrellas tienen un nombre diferente. Por ejemplo, en el juego A2XT,
hay puerros.

* **Se necesitan estrellas**: este es un límite de número de estrellas. El jugador puede entrar en esta urdimbre cuando recolecta un número definido de estrellas.
* **Necesita un mensaje de estrellas**: muestre este mensaje en un intento de entrar en esta urdimbre sin un número necesario de estrellas.
* **No mostrar el número de estrellas**: si esta deformación sigue a otro nivel, no se mostrarán varias estrellas en el nivel objetivo.
* **X** e **Y**: esta es una salida al mapa mundial con las coordenadas del objetivo. Si se definen las coordenadas, esta deformación será una salida al mapa mundial con teletransportación al punto objetivo por coordenadas.
* **Tipo de deformación**: definición del tipo de deformación: Instantáneo, Tubería, Puerta o Portal.
* **Direcciones de la tubería**: esta es una dirección de la urdimbre, que se puede utilizar solo para el tipo de urdimbre "tubería".
* **Tipo de deformación**: definición del tipo de deformación: Instantánea, Tubería o Puerta.
* **Direcciones de la tubería**: esta es una dirección de la urdimbre, que se puede utilizar solo para el tipo de urdimbre "tubería".
* **Nombre de archivo de nivel**: esta es una definición de la entrada a otro archivo de nivel para hacer una deformación en ellos.
* **Door #** - (En SMBX, esta opción fue nombrada como "Warp to"). Si el valor es 0 (entrada normal), el jugador comenzará el nivel objetivo desde su punto de inicio predeterminado, de lo contrario, el jugador entrará en el nivel por punto de deformación objetivo por ID.
<Note type="tip">
Nota: Si se eliminó alguna entrada de warp (entradas), para volver a contar las ID de warp, debe volver a cargar el nivel (presione la tecla F8).
</Note> 


### Tipos de deformación

Los warps tienen tres tipos: Instantáneo, Pipe, Door y Portal **(que no está disponible en SMBX 1.3)**.

<ImageZoom
alt="006_WarpTypes"
url="screenshots/LevelEditing/Warps/006_WarpTypes.png"
width="200px"
:border="true"
/>

**Instantáneo o Portal**: el jugador se teletransportará inmediatamente una vez que toque el punto de entrada warp. La diferencia entre los tipos "Instantáneo" y "Portal":
* La deformación "Instantánea" restablece la velocidad X después del teletransporte.
* La deformación "Portal" mantiene el mismo movimiento / velocidad de vuelo después del teletransporte.

<ImageZoom
alt="008_Instants"
url="screenshots/LevelEditing/Warps/008_Instants.png"
width="200px"
:border="true"
/>

**Puerta**: el jugador puede entrar en esta urdimbre solo cuando se contacta con el punto de entrada y cuando un jugador presione la tecla ARRIBA.

<ImageZoom
alt="007_Doors"
url="screenshots/LevelEditing/Warps/007_Doors.png"
width="200px"
:border="true"
/>


**Tubería**: esta es una urdimbre direccional. Para ingresar a este warp, el jugador necesita contactar el punto de warp de entrada y presionar la tecla igual a la dirección definida. El jugador saldrá del punto de salida con una dirección de salida definida.

<ImageZoom
alt="009_Pipes1"
url="screenshots/LevelEditing/Warps/009_Pipes1.png"
width="200px"
:border="true"
/><ImageZoom
alt="011_Pipes3"
url="screenshots/LevelEditing/Warps/011_Pipes3.png"
width="200px"
:border="true"
/><ImageZoom
alt="010_Pipes2"
url="screenshots/LevelEditing/Warps/010_Pipes2.png"
width="200px"
:border="true"
/>

### Crea la entrada warp

Cada urdimbre tiene su entrada. Al principio, debe agregar una nueva entrada de deformación a la lista:

![002_addWarp](screenshots/LevelEditing/Warps/002_addWarp.png)

Y ahora, puede colocar puntos (o puede definir opciones de deformación antes).

Para colocar un punto de entrada o salida, debe presionar "Establecer entrada" para colocar o saltar, si ya está colocado, el punto de entrada.

<ImageZoom
alt="003_setEntrance"
url="screenshots/LevelEditing/Warps/003_setEntrance.png"
width="200px"
:border="true"
/>

y "Establecer salida" para colocar o saltar al punto de salida, si ya lo ha hecho.

<ImageZoom
alt="004_setExit"
url="screenshots/LevelEditing/Warps/004_setExit.png"
width="200px"
:border="true"
/>

<Note type="tip">
Si la casilla de verificación gris en el lado izquierdo del botón está configurada, eso significa que el punto de entrada / salida ya se ha colocado. Al presionar el botón, la cámara saltará a la ubicación del punto colocado.
</Note>

_Colocación del punto de deformación de salida en el mapa_

<ImageZoom
alt="005_setExit"
url="screenshots/LevelEditing/Warps/005_setExit.png"
width="200px"
:border="true"
/>


<Note type="warning">
¡No olvide configurar los ajustes de deformación!
</Note>

<Note type="tip">
Nota: la entrada warp debe tener ambos puntos colocados o la entrada warp
se marcará como roto y no se guardará en el archivo.
Exclusión: puede tener entradas de deformación de un solo punto cuando se tienen
una de esas banderas: "Nivel de salida" o "Nivel de entrada".
</Note>


### bidireccional warp

Para hacer deformaciones bidireccionales simplemente use la casilla de verificación "Deformación de dos lados", y el jugador podrá ingresar a esta deformación desde ambos lados.

<Note type="warning">
Legacy SMBX Engine y 38A anteriores a 1.4.3 no lo admiten. Si apunta sus niveles a los motores heredados, debe realizar una segunda entrada warp con ubicaciones de puntos opuestos:
</Note>

<ImageZoom
alt="012_two-way_doors"
url="screenshots/LevelEditing/Warps/012_two-way_doors.png"
width="200px"
:border="true"
/>


### Bloqueado warp

bloqueado warp - es una urdimbre con una entrada cerrada que se puede abrir con una llave:

![018_locked_door](screenshots/LevelEditing/Warps/018_locked_door.png)

Para hacer una puerta cerrada, debe configurar la bandera "Bloqueado" en el estado "marcado":

<ImageZoom
alt="019_Locked_door"
url="screenshots/LevelEditing/Warps/019_Locked_door.png"
width="200px"
:border="true"
/>

### limitada en estrella warp

¡Para entrar en esta urdimbre debes tener un número específico de estrellas!

_Puerta cerrada_

<ImageZoom
alt="020_Stared_door"
url="screenshots/LevelEditing/Warps/020_Stared_door.png"
width="200px"
:border="true"
/>


Para bloquear la entrada de la urdimbre con estrellas, debe establecer el valor de recuento de estrellas, necesario para poder entrar en esta urdimbre:

<ImageZoom
alt="021_Stared_door"
url="screenshots/LevelEditing/Warps/021_Stared_door.png"
width="200px"
:border="true"
/>


### Nivel de entrada y salida

Hay banderas especiales que permiten colocar un solo punto de deformación.

**Nivel de entrada** - permite colocar solo el punto de salida. Establezca esta bandera si desea utilizar esta urdimbre como una entrada a este nivel. Con esta bandera, la urdimbre no tendrá punto de entrada.

<ImageZoom
alt="014_entrance_to_level"
url="screenshots/LevelEditing/Warps/014_entrance_to_level.png"
width="200px"
:border="true"
/>

**Nivel de salida** - permite colocar un solo punto de entrada. Se saldrá del nivel
cuando un jugador entrará en esta urdimbre.

<ImageZoom
alt="013_Exit_from_level"
url="screenshots/LevelEditing/Warps/013_Exit_from_level.png"
width="200px"
:border="true"
/>


### Deformar a otro nivel


El jugador entrará en otro nivel si él (ella) entra en esta urdimbre.

Simplemente debe definir el nombre del archivo de nivel en el campo Archivo de nivel. También puede examinar el archivo de nivel y seleccionar el archivo necesario de la lista.

![016_target_warp_ID](screenshots/LevelEditing/Warps/016_target_warp_ID.png)

El número de la puerta mostrará: donde se debe ingresar el jugador. Si el valor es cero, el jugador comenzará el nivel desde su punto de inicio predeterminado.

_Lista de archivos de nivel de la misma carpeta que contiene el archivo de nivel de edición_

<ImageZoom
alt="015_warp_to_another_level"
url="screenshots/LevelEditing/Warps/015_warp_to_another_level.png"
width="200px"
:border="true"
/>


### Deformar al mapa del mundo

También puede crear la salida a coordenadas específicas del mapa mundial. Simplemente debe definir las coordenadas del mapa mundial para convertir el punto de salida en el mapa mundial:

¡También puede presionar el botón "Establecer" y seleccionar un punto de destino en el mapa mundial en modo interactivo!

![017_World_map_coordinates](screenshots/LevelEditing/Warps/017_World_map_coordinates.png)

_Cuadro de diálogo de selección de puntos del mapa mundial_

<ImageZoom
alt="GotoWorldMap"
url="screenshots/WorldEditing/GotoWorldMap.png"
width="200px"
:border="true"
/>


## Entornos físicos
**Entornos físicos** (agua, arenas movedizas, etc.): hay un especial
Unidades que definen el entorno físico dentro de su área rectangular.

**Tipos de entornos disponibles:**
* **Agua**: un entorno líquido apto para nadar.
* **Quicksand** - es un entorno de sustancias sueltas. Todo se atascó en su interior con poca capacidad para saltar. Para escapar de él, es necesario aplicar cualquier esfuerzo para saltar.
* **Campo gravitacional** - **\[WIP\]** entorno neutral (que mantiene el entorno global o el entorno de otros rectángulos de entorno) que ralentiza o redirige un coeficiente de gravitación.
* **Toque evento (Una vez)** - **\[WIP\]** entorno neutral que una vez desencadena un evento específico cuando el personaje jugable toca este entorno.
* **Toque el evento (cada cuadro)** - **\[WIP\]** entorno neutral que activa el evento en cada bucle del juego mientras el personaje jugable se mantiene en contacto con este entorno.
* **Evento NPC Touch (Una vez)** - **\[WIP\]** entorno neutral que una vez desencadena un evento específico cuando cualquier NPC toca este entorno.
* **Evento NPC Touch (Cada cuadro)** - **\[WIP\]** entorno neutral que activa el evento en cada bucle del juego mientras cualquier NPC se mantiene en contacto con estos entornos.
* **Evento de clic del mouse** - **\[WIP\]** entorno neutral que desencadena un evento cuando un jugador hace clic en él con el puntero del mouse.
* **Secuencia de comandos de colisión** - **\[WIP\]**
* **Secuencia de comandos de clic del mouse** - **\[WIP\]** entorno neutral que ejecuta una función de secuencia de comandos cuando un jugador hace clic en ella con el puntero del mouse.
* **Evento de colisión** - **\[WIP\]**
* **Cámara de aire**: entorno de aire que anula otros entornos físicos con un entorno de aire.

<Note type="warning">
Importante: Legacy SMBX Engine y SMBX2 solo admiten dos tipos de entornos físicos: agua y arenas movedizas. SMBX 1.3 y SMBX2 no son compatibles con otros tipos de entornos físicos. Solo motor PGE y SMBX-38A.
</Note>

Debido a que la zona del entorno físico es un elemento considerable, el proceso de colocación se realiza mediante un dibujo rectangular. Para colocarlos, debe seleccionar en la barra de herramientas uno de los dos íconos:

![DW](screenshots/LevelEditing/Physics/draw_water.png) ![DQ](screenshots/LevelEditing/Physics/draw_sand.png)

<span style="color: blue;">Blue</span> - dibujar zona de agua,
<span style="color: #fde910;">Yellow</span> - dibujar la zona de arenas movedizas.

Rectángulos del entorno físico colocados: verde - agua, amarillo - arenas movedizas

<ImageZoom
alt="05_paced_areas"
url="screenshots/LevelEditing/Physics/05_paced_areas.png"
width="200px"
:border="true"
/>

Puede cambiar el tipo de entorno del rectángulo colocado mediante un menú contextual:

<ImageZoom
alt="06_change_type"
url="screenshots/LevelEditing/Physics/06_change_type.png"
width="200px"
:border="true"
/>


Además, puede cambiar fácilmente el tamaño de un rectángulo de entorno:

Para comenzar a cambiar el tamaño, debe abrir el elemento del menú contextual "Cambiar tamaño" y verá un rectángulo amarillo que es un "medidor". Mueva los puntos o los lados de las esquinas para definir el nuevo tamaño del bloque. Cuando haya terminado de cambiar el tamaño, presione la tecla ENTER para aceptar el nuevo tamaño, y luego el bloque tendrá un nuevo tamaño. Si presiona la tecla ESC, cancelará el cambio de tamaño y el bloque mantendrá su tamaño actual.

<Note type="tip">
Nota: Si desea obtener más funciones del cuadro de cambio de tamaño (red verde que definió
nuevo tamaño de la sección), haga clic dentro de ellos con el botón derecho del mouse.
</Note> 

**El menú contextual tiene acciones**
* **Cortar la parte superior aquí**: mueve el límite superior del cuadro a la posición actual del mouse
* **Cortar a la izquierda aquí**: mueve el límite izquierdo del cuadro a la posición actual del mouse
* **Cortar aquí**: mueve el límite derecho del cuadro a la posición actual del mouse
* **Cortar la parte inferior aquí**: mueve el límite inferior del cuadro a la posición actual del mouse
* **No ajustar a la cuadrícula**: deshabilita el ajuste de la cuadrícula al mover los límites del cuadro
* **Deshabilitar el límite de tamaño mínimo**: brinda la posibilidad de establecer un tamaño menor que el tamaño mínimo disponible

<ImageZoom
alt="PhysEnvResizing"
url="screenshots/LevelEditing/Physics/PhysEnvResizing.png"
width="200px"
:border="true"
/>

## Puntos de jugador

Este es un punto que define la posición inicial de un personaje jugable en el nivel. Cada vez que comienzas un nivel, el personaje jugable aparecerá en este punto.

Para colocar un punto de jugador, debe hacer clic en uno de los botones de la barra de herramientas (![P1](screenshots/LevelEditing/players/player1_start.png) o ![P2](screenshots/LevelEditing/players/player2_start.png)): ¿Dónde está el rojo? Es para el 1er jugador y el verde para el 2º.

En el editor, los puntos de inicio se mostrarán como banderas (pueden verse diferentes dependiendo de un tema de interfaz de usuario utilizado actualmente):

![PlayerPoints](screenshots/LevelEditing/Items/Player_startPoints_2.png)

Si no se definen los puntos, el nivel terminará automáticamente, porque no hay personajes jugables disponibles en el nivel. Además, puedes usar puertas como puntos de inicio del jugador, pero necesitas definir el índice de matriz de esta puerta en el mapa mundial o en otro nivel.
