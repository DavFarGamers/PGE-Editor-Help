# Menú de contexto

Cada elemento tiene su menú contextual. Se puede abrir haciendo clic con el botón derecho del mouse (mouse izquierdo - con el botón izquierdo del mouse) mientras el cursor está sobre un elemento de la escena o sobre un grupo seleccionado.

Mediante un menú contextual, puede cambiar algunas de las configuraciones básicas de un elemento o de todos los elementos seleccionados. Puede cambiar la capa de los elementos actuales. Además, encontrará la capacidad para la creación rápida de una nueva capa para un grupo seleccionado de elementos. El menú contextual de puntos de deformación le permite saltar rápidamente al lado opuesto de una entrada de deformación.
## Características comunes
- **Copiar preferencias**: copia algunos datos internos de elementos como texto sin formato.
- **Capa**: muestra el propietario de la capa actual del elemento seleccionado. Con este submenú puede cambiar la capa de este elemento o crear una nueva para el grupo de elementos seleccionado.
- **Copiar**: copia los elementos seleccionados en el portapapeles interno (**No compatible con puntos de deformación**).
- **Cortar** - Copie los elementos seleccionados en el portapapeles interno y elimínelos (**No compatible con puntos de deformación**).
- **Eliminar**: los elementos seleccionados se eliminarán
- **Eliminar todos los ITEMS-X**: Elimina todos los elementos del mismo tipo y la misma ID del nivel.
- Submenú **Transformar**:
   - **Transformar en**: permite reemplazar el tipo de elemento (por ejemplo, un bloque con otro). Disponible para bloques, BGO y NPC, mosaicos de terreno, paisajes, caminos, puntos de niveles.
   - **Transformar todo el ITEM-X en la sección en** - permite reemplazar el tipo de todos los elementos con el mismo ID en la sección actual. Disponible para bloques, BGO y NPC, terreno, paisaje, caminos, puntos de nivel.
   - **Transforma todos los ITEM-X en**: permite reemplazar el tipo de todos los elementos con el mismo ID en el mapa. Disponible para bloques, BGO y NPC, terreno, paisaje, caminos, puntos de nivel.
- **Editar datos de usuario sin procesar ...** - Abre una ventana de editor de texto que le permite modificar el contenido del campo universal para cualquier usuario de datos personalizados que desee almacenar. Este campo es útil para varios propósitos, como secuencias de comandos y configuraciones adicionales.
- **Propiedades**: abrirá el cuadro de diálogo de propiedades del elemento para el grupo de elementos seleccionado.

### Funciones de bloque
* **Invisible**: haz que el bloque sea invisible. Aparecerá una vez que reciba un golpe desde la parte inferior. Esta bandera es útil para un lugar en el mapa, bonificaciones secretas o para construir barreras para un ascenso.
* **Resbaladizo**: la superficie superior del bloque estará resbaladiza.
* **Cambiar NPC contenido** - Abrir cuadro de diálogo de selección de NPC para cambiar el contenido del bloque.
* **Cambiar tamaño**: disponible solo para bloques de tamaño variable. Cambiará el modo de cambio de tamaño para este bloque.
* **Hacer cuadro de mensaje ...**: inicia un pequeño asistente para crear fácilmente el evento de bloque de mensajes.

<ImageZoom
alt="BlockContext"
url="screenshots/LevelEditing/Items/BlockContext.png"
width="200px"
:border="true"
/>


### Características del objeto de fondo

* **Cambiar Z-Offset**: cambia la prioridad del orden de representación de los objetos de fondo por el valor relativo.
* **Cambiar capa Z**: cambia la capa de visualización base de este objeto de fondo.

<ImageZoom
alt="BGO_Context"
url="screenshots/LevelEditing/Items/BGO_Context.png"
width="200px"
:border="true"
/>

### Características de personajes no jugables
* **Establecer dirección**: en este submenú, puede cambiar la dirección de la cara del NPC.
* **Amistoso**: el NPC no se comunicará con los personajes jugables ni con otros NPC. NPC amistoso no puede ser asesinado, no puede lastimar al jugador, no puede ser tomado ni agarrado. Los personajes jugables y otros NPC no pueden estar al tanto de NPC amistosos.
* **No movible**: NPC estará inactivo independientemente de su algoritmo.
* **Establecer mensaje**: abre el cuadro de diálogo donde puedes cambiar el mensaje de conversación de NPC.
* **Establecer como jefe**: habilita el algoritmo especial de lucha contra jefes disponible para tipos específicos de NPC. (Nota: dentro del juego SMBX, esta opción tiene el nombre "Legacy Boss" para referirse a versiones anteriores del juego que no tenían soporte para capas y eventos).
* **Cambio contenido NPC** (Aparece para algunos NPC) - Cambio contenido NPC de este NPC-Contenedor.

<ImageZoom
alt="NPC_Direction"
url="screenshots/LevelEditing/Items/NPC_Direction.png"
width="200px"
:border="true"
/>

### Características de la zona del entorno físico
* **Tipo de entorno**: cambia el tipo de entorno de este elemento.
* **Cambiar tamaño**: cambia a cambiar el tamaño de este elemento.

<ImageZoom
alt="06_change_type"
url="screenshots/LevelEditing/Physics/06_change_type.png"
width="200px"
:border="true"
/>

### Características de los puntos de deformación
* **Saltar a Entrada / Salida** - Mueva la cámara de escena del editor al lado opuesto de la conexión warp si se coloca un punto.
* **Denegar vehículos** - (Dentro de SMBX esta opción se llama "No Yoshi")
* **Permitir elementos** - (Dentro de SMBX, esta opción se denomina "Permitir NPC")
* **Bloqueado**: cambia el estado de bloqueo de esta deformación.

<ImageZoom
alt="WarpContextMenu"
url="screenshots/LevelEditing/Warps/WarpContextMenu.png"
width="200px"
:border="true"
/>


## Ver también
* [Menú contextual general] (/Editing/ContextMenu)
* [Menú contextual específico del mapa mundial] (/EditWorld/ContextMenu)
