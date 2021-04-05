# Configuración mundial
## Visión de conjunto
Es la caja de herramientas principal que le permite configurar el mapa mundial y la configuración del episodio.

* **Título mundial**: - el nombre del episodio se mostrará en la lista de episodios del menú del juego.
* **Mapa del mundo con estilo de centro**: - esta opción desactiva el uso del mapa del mundo, pero debe establecer el nivel de introducción que se utilizará como centro principal.
* **Reinicia el último nivel después de fallar**: - si un jugador falla en algún nivel, se reiniciará sin ingresar al mapa mundial o al nivel central.

* **Nivel de introducción**: - el nivel que comenzará antes de que se muestre el mapa del mundo.
* **Estrellas totales**: - este valor define el número total de estrellas que se mostrarán en el menú del juego en un menú de selección de espacios para guardar juegos.

* ** Créditos **: el campo especial que permite agregar una lista de créditos se mostrará en la pantalla de créditos después del final del juego.
  <Note type="danger">
 Si guarda un mapa del mundo en SMBX64-WLD y versiones anteriores, se perderán todas las líneas posteriores a la quinta.
  </Note>
* **Deshabilitar personaje**: - estas banderas deshabilitan las posibilidades de seleccionar el personaje en el menú del juego.

_Caja de herramientas de configuración del mapa mundial_

<ImageZoom
alt="wset"
url="screenshots/WorldEditing/WorldSettings.png"
:border="true"
/>

## Contador de estrellas
Esta función le ayudará a contar todas las estrellas que existen en los niveles definidos en este mapa. Después de contar, el valor se almacenará en el campo de número de estrellas. El contador cuenta todos los NPC estrella que existen en el mapa como objetos libres, que contienen dentro de los contenedores NPV, incluidos en bloques. Los NPC estrella amistosos no cuentan porque no son coleccionables, mientras que hay una bandera amiga.