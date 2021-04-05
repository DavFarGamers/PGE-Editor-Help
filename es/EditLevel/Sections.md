# Secciones

## Acerca de las secciones

**Sección**: es la subárea separada de un nivel. Tiene sus configuraciones tales como música de fondo, imágenes de fondo, física, etc. Un jugador puede moverse entre secciones por puntos especiales llamados warps. Todas las secciones están en el espacio unido y puede ver muchas secciones al mismo tiempo; sin embargo, puede cambiar la configuración de una sola sección a la vez.

_Cuadro seccionador. aquí puede cambiar rápidamente a otra sección_

<ImageZoom
alt="Section_Switch"
url="screenshots/LevelEditing/Section_Switch.png"
:border="true"
/>

Si enumera en un gran espacio de nivel, puede volver inmediatamente a la esquina inferior izquierda, superior izquierda, superior derecha o inferior derecha de la sección actual. Mientras cambia entre diferentes secciones, se mantendrá su última posición. Una vez que cambie la sección anterior hacia atrás, la última posición se restaurará en las mismas coordenadas.

## Cambiar ajustes

<u>Cada sección tiene la siguiente configuración individual</u>:

- **Música**: elija música de fondo para esta sección.
- **Archivo de música personalizado**: elija un archivo de música externo para usarlo como música de fondo.
- **Fondo**: es una imagen que aparecerá al final de esta sección.
- **Conecte los lados izquierdo-derecho (deformación de nivel)** - Todos los objetos que salieron de los límites de la sección horizontalmente volverán desde el lado opuesto de esta sección.
- **Salida fuera de la pantalla** - Le da al jugador la habilidad de salir del nivel caminando fuera de los límites.
- **Desplazamiento unidireccional (sin retroceso)**: permite mover al jugador solo en la dirección correcta. La cámara no se desplazará hacia la izquierda.
- **Submarino**: establece que el entorno físico predeterminado de la sección sea agua. Cuando esta opción no está marcada, el entorno físico predeterminado de la sección es el aire.

Para abrir la caja de herramientas de configuración de la sección, haga clic en el icono en la caja de herramientas o `View -> Section settings` opción del menú.

Aquí puede cambiar todas las configuraciones de la sección y cambiar el tamaño de la sección.

_Caja de herramientas de configuración de sección_

<ImageZoom
alt="0toolbox_section"
url="screenshots/LevelEditing/Section/0toolbox_section.png"
:border="true"
/>

Puede configurar la música de fondo de la lista o puede utilizar sus archivos de música personalizados. Debe colocar estos archivos en la misma carpeta con el archivo de nivel de cualquier subdirectorio dentro del directorio con su archivo de nivel.

_Ventana de lista de música (mostrando todos los archivos de música, incluso dentro de los subdirectorios)_

<ImageZoom
alt="0toolbox_section_musiclist"
url="screenshots/LevelEditing/Section/0toolbox_section_musiclist.png"
:border="true"
/>


La casilla de verificación **Personalizado** se habilitará automáticamente cuando seleccione el elemento "Personalizado" en la lista de música. Luego, cuando habilites la casilla de verificación "personalizada", aparecerá automáticamente la entrada "Personalizada" en la lista de música.

El campo **Música personalizada** debe contener el nombre de archivo de la música personalizada. Puede utilizar rutas relativas, pero se recomienda utilizar el separador "/" en lugar de "\\".

_Campo de música personalizado_

![0toolbox_section_musicPath](screenshots/LevelEditing/Section/0toolbox_section_musicPath.png)

## Cambio de tamaño

Las secciones pueden tener cualquier tamaño. Puede cambiar el tamaño de la sección desde la caja de herramientas de propiedades de la sección haciendo clic en el botón "Cambiar tamaño". Después de esto, aparecerá el gran rectángulo verde. Arrástrelo y muévalo por sus esquinas para establecer el tamaño necesario. Una vez que haya completado el cambio de tamaño, presione la tecla ENTER para aceptar el cambio de tamaño o la tecla ESC para cancelar el cambio de tamaño (los mismos botones en la caja de herramientas de configuración de la sección).

El <u>tamaño mínimo de sección predeterminado</u> es 800x600. Este valor puede depender de los valores del paquete de configuración.

<Note type="tip">
Nota: Si desea obtener más funciones del cuadro de cambio de tamaño (red verde que definió el nuevo tamaño de la sección), haga clic en él con el botón derecho del mouse.
</Note>

El menú contextual tiene las siguientes acciones:
* **Cortar la parte superior aquí**: mueve el límite superior del cuadro a la posición actual del mouse.
* **Cortar a la izquierda aquí**: mueve el límite izquierdo del cuadro a la posición actual del mouse.
* **Cortar aquí**: mueve el límite derecho del cuadro a la posición actual del mouse.
* **Cortar la parte inferior aquí**: mueve el límite inferior del cuadro a la posición actual del mouse.
* **No ajustar a la cuadrícula**: deshabilita el ajuste de la cuadrícula al mover los límites del cuadro.
* **Deshabilitar el límite de tamaño mínimo**: brinda la posibilidad de establecer un tamaño menor que el tamaño mínimo disponible.

_Proceso de cambio de tamaño de sección_

<ImageZoom
alt="0toolbox_section_resize"
url="screenshots/LevelEditing/Section/0toolbox_section_resize.png"
:border="true"
/>
