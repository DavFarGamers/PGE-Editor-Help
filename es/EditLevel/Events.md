# Eventos
## Visión de conjunto
** Eventos **: existen acciones automáticas que le permiten controlar dinámicamente el proceso del juego y realizar cambios dinámicos de nivel, juego o configuración de objetos. Pueden iniciarse automáticamente mediante acciones especiales llamadas desencadenantes.

Para agregar un nuevo evento a la lista, simplemente presione el botón "+". Para eliminar - "-". Puede duplicar la capa actual haciendo clic en el botón "Crear una copia del evento".

El evento comenzará automáticamente en el inicio del nivel si marca la casilla de verificación "** Inicio automático **".

Hay algunos eventos integrados que no puede eliminar:
- "**Level - start**" - se inicia automáticamente en el nivel de puesta en marcha. Puede usarlo para establecer una inicial visible de capas, mostrar un mensaje de saludo, comenzar a mover la pared de púas, etc.
- "**P Switch - Start**" - comienza si va a activar el elemento especial llamado "P-Switch". Puedes hacer, por ejemplo, una muestra de capas con una sorpresa para tu personaje jugable.
- "**P Switch - stop**" - Este evento comienza si el temporizador de P-Switch era el final. Este evento se puede utilizar, por ejemplo, para ocultar la misma capa con una sorpresa.

<Note type="tip">
Puede arrastrar elementos de eventos en una lista para cambiar su orden
</Note>

<Note type="tip">
Puede cambiar el nombre de un evento haciendo doble clic en el nombre de la capa. El nuevo nombre del evento se aplicará a todos los elementos que los utilicen sin pérdida de conexiones.
</Note>

_Events caja de herramientas_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/001Events_list.png"
width="200px"
:border="true"
/>

* [Layer visibility](#layer-visibility)
* [Layer motion](#layer-motion)
* [Auto-scroll sections](#auto-scroll-sections)
* [Change section settings](#change-section-settings)
* [Common event actions](#common-actions)
* [Force player controls](#force-player-controls)
* [Trigger another event](#trigger-another-event)

## Visibilidad de la capa
Esta lista de opciones permite cambiar la visibilidad de las capas. Es decir. visiblemente de todos los elementos que son miembros de la capa de destino.

Para agregar una capa a la lista, selecciónela en la lista y presione "+" para agregar esta capa a su lista.

Para eliminar una capa de la lista, seleccione la capa en una de las tres listas y presione "-".

<Note type="warning">
Nota: Si tiene un formato de archivo SMBX64 LVL, obtendrá un límite de capas para cada lista en 20 entradas. Las capas de 20 elementos por lista no se guardarán en formato SMBX. Con SMBX 1.3 Editor es posible agregar 21 capas en cada lista, sin embargo, aquí hay un error que no permite eliminar capas de una lista. En cambio, copia la última entrada de capa en lugar de la capa eliminada.
</Note>

_Layer visibly tab_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/002_layer_visibly.png"
width="200px"
:border="true"
/>

## Movimiento de capa
Aquí puede configurar el movimiento para elementos sólidos y estáticos que son miembros de una capa de destino.

La capa seleccionada en una lista se moverá con una velocidad especificada en las siguientes direcciones:

**Horizontal speed**:
- If <0 - mover a la izquierda.
- If >0 - mover a la derecha
- If =0 - detener

**Vertical speed**:
- If <0 - mover hacia arriba
- If >0 - mover hacia abajo
- If =0 - detener

_Lista de movimientos de capa_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/003_moveLayer.png"
width="200px"
:border="true"
/>


## Secciones de desplazamiento automático
Aquí puede definir el desplazamiento automático de la sección de destino.

<Note type="warning">
<strong>Notes!</strong><br/>
<ul>
    <li>No olvide definir el tamaño de la sección de destino en las propiedades de la sección.
    del mismo evento. Si no redefinió la sección. 
    El desplazamiento automático no funcionará.</li>
    <li><span style="color: #af0000;">If you want to use auto-scrolling in the SMBX, 
    <span style="color: red;">be careful</span>, 
    porque el motor SMBX tiene un error:
    El desplazamiento automático funcionará solo para una sección y solo si esta sección contiene un
    punto de inicio del personaje jugable y cuando el evento contiene una definición de desplazamiento automático
    se activará mediante un evento especial "Nivel - Inicio". Si intenta el desplazamiento automático
    otra sección, no funcionará!</span></li>
</ul>
</Note>

**Horizontal speed**:
- If <0 - mover a la izquierda.
- If >0 - mover a la derecha
- If =0 - detener

**Vertical speed**:
- If <0 - mover hacia arriba
- If >0 - mover hacia abajo
- If =0 - detener

_Lista de movimientos de capa_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/004_autoscroll.png"
width="200px"
:border="true"
/>

### Cómo hacer el autodesplazamiento de la sección
1) En el primer paso, debe definir el tamaño de sección predeterminado que se desplazará automáticamente.

2) Abra en el mismo evento la pestaña "configuración de sección" y luego marque "definir nuevo" y establezca un tamaño de parte de la pantalla autodesplazable. Puede hacer clic en el botón "Capturar" para definir el tamaño de la parte desplazable de la sección en el modo interactivo:
   <br/><ImageZoom
   alt="eventsList"
   url="screenshots/LevelEditing/Events/006_capture_size.png"
   width="200px"
   :border="true"
   />
   <br/>Hay ejemplos de áreas de desplazamiento automático:
   <br/><ImageZoom
   alt="eventsList"
   url="screenshots/LevelEditing/Events/Autoscroll_examples.png"
   width="200px"
   :border="true"
   />

3) Establezca el número de una sección que se desplazará automáticamente y los valores de velocidad X y velocidad Y.

<Note type="warning">
¡No olvide marcar este evento para que se inicie automáticamente! (requerido por SMBX, si va a jugar el mismo nivel en el motor PGE, el desplazamiento automático se puede alternar a través de activadores de eventos secundarios (bloques o NPC))
</Note>

Si hizo todo correctamente, la pantalla comenzará a desplazarse cuando se inicie este nivel, cuando ingrese a una sección con desplazamiento automático definido y cuando cambie el desplazamiento automático a través de activadores de eventos secundarios.

## Cambiar la configuración de la sección
Aquí puede configurar opciones para cada sección de este nivel. Puede definir: música, fondo y tamaño / posición de la sección seleccionada.

Dentro de un evento, puede definir opciones para secciones pequeñas de un evento. Además, puede restaurar la configuración predeterminada de la sección de destino, definida por la configuración de la sección.

**Establecer configuración para la sección ... **: seleccione la ranura de configuración para cada sección. Puede definir en un evento cambios para múltiples secciones, en SMBX están disponibles por el motor, pero son demasiado difíciles para hacerlos con el editor SMBX. Aquí esto está completamente disponible.

**Establecer tamaño y posición **: esta opción puede redefinir dinámicamente el tamaño de la sección y restablecer el tamaño predeterminado.

**Cambiar música **: esta opción puede cambiar la música de la sección seleccionada o cambiar a la sección predeterminada.

**Cambiar fondo **: esta opción puede cambiar el fondo de la sección seleccionada.

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/005_section_settings.png"
width="200px"
:border="true"
/>

_Captura de nuevo tamaño lo que será definido por evento_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/006_capture_size.png"
width="200px"
:border="true"
/>

## Acciones comunes
Aquí puedes:
- Mostrar cuadro de mensaje
- Reproducir sonido de la lista
- Iniciar el algoritmo del final de un juego: jugar fanfarrias de final de juego -> mostrar pantalla de créditos -> guardar juego, volver al menú principal

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/007_common.png"
width="200px"
:border="true"
/>

_Edición de cuadro de mensaje_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/MessageBox.png"
width="200px"
:border="true"
/>

<Note type="warning">
Tenga en cuenta que todos los caracteres de nueva línea se eliminarán si los guarda en formato SMBX64 LVL. Utilice espacios adicionales como solución.
</Note>


## Forzar controles de jugador
Aquí puedes controlar un personaje jugable para automatizar sus acciones.

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/008_player_control.png"
width="200px"
:border="true"
/>

## Activa otro evento
Esta característica permite la ejecución de otro evento después de ejecutar este. También puede especificar un retraso antes de ejecutar el evento de destino.

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/009_trigger.png"
width="200px"
:border="true"
/>
