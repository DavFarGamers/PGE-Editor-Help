# Configuraciones de la aplicación
## Visión de conjunto
Aquí puede cambiar la configuración de la aplicación Editor.

## Principal
* **Música de reproducción automática**: - siempre inicie la reproducción de música al abrir cualquier archivo.
* **Animación**: - habilita la reproducción de animaciones de elementos.
* **Límite de elementos de animación**: - cuántos elementos de la escena permiten que funcionen las animaciones.
Esta función debería ayudarlo a evitar el retraso del Editor en computadoras más lentas.
* **Detección de colisiones**: - si está marcado, se permite la superposición de objetos al mover elementos existentes.
* **Diseño de ventana**: - el tipo de diseño del espacio de trabajo: como subventanas (como el editor SMBX clásico) o como pestañas
como en el navegador.
* **Asociar extensiones de archivo**: - registre tipos de archivos admitidos y asígnelos con el Editor: puede abrirlos
archivos en el Editor directamente desde un administrador de archivos.

<ImageZoom
  alt="AppSettingsMain"
  url="screenshots/AppSettings/AppSettings_main.png"
  :border="true"
/>

## Editor
Aquí puede habilitar o deshabilitar las funciones del proceso de edición.

* Acciones del botón central del mouse (una rueda presionada como botón):
  * **Duplicar elementos seleccionados en la posición del mouse** - esto significa: si presiona el botón central del mouse mientras
  grupo de elementos seleccionados, todos los elementos seleccionados se duplicarán en la posición actual del mouse en la esquina superior izquierda.
  * **Cambiar el modo de colocación del elemento seleccionado** - esto significa: si tiene un elemento seleccionado, la presión de un medio
  El botón del ratón recogerá el elemento seleccionado y podrá colocar más, casi lo mismo que con el editor SMBX clásico.
  * **Cambiar para arrastrar desplazamiento**: - si presiona el botón central del mouse sin ningún elemento seleccionado, el botón de arrastrar y desplazar
  se cambiará el modo.

* **No mostrar el cuadro de propiedades al llevar el elemento a su lugar** - El cuadro de herramientas de propiedades del elemento no aparecerá cuando tome elementos
para la colocación. Luego, si desea abrir la caja de herramientas de propiedades, use el botón "Propiedades" en la barra de herramientas.
* **Zoom predeterminado**: - elija el estado del valor de zoom inicial.
* **Límite máximo de entradas del historial** - Define la profundidad del historial de las acciones: cuántas acciones puede recordar el historial.
* **Tamaño predeterminado de captura de pantalla**: - define el tamaño inicial del cuadro amarillo para la captura del área de la escena para exportar
en el archivo de imagen.

<ImageZoom
  alt="AppSettingsEditor"
  url="screenshots/AppSettings/AppSettings_editor.png"
  :border="true"
/>

## Valores predeterminados
Aquí puede redefinir el estado inicial de los cuadros de propiedades cuando coloca nuevos elementos, crea eventos o configura deformaciones.

* **Configuración de NPC**: - propiedades predeterminadas para nuevos NPC.
* **Deformaciones y puertas**: - propiedades predeterminadas para nuevas entradas de deformación.
* **Pestañas de eventos clásicos para expandir automáticamente**: - elija qué bloques de acciones de eventos deben mantenerse siempre expandidos con
no importa si coinciden con sus estados predeterminados o no.

<ImageZoom
  alt="AppSettingsDefaults"
  url="screenshots/AppSettings/AppSettings_defaults.png"
  :border="true"
/>

## Vista
Aquí puede configurar algunos ajustes de vista. Por ejemplo, la dirección de tabulación de las cajas de herramientas.
Además, aquí puede cambiar el tamaño de fuente y el tema de la interfaz desde el directorio `themes /`.

* **Caja de herramientas de elementos de nivel**: - la orientación de las pestañas de tipo para el navegador de búsqueda de elementos de nivel.
* **Caja de herramientas de elementos de World Mao**: - la orientación de las pestañas de tipo para el navegador de búsqueda de elementos del mapa mundial.
* **Caja de herramientas de elementos de Tileset**: - la orientación de las pestañas de tipo para la Caja de herramientas de elementos de Tilesets.
* **Fuente **: configuración de fuente de la interfaz de usuario.
   * **Usar predeterminado**: - prefiere la configuración de fuente predeterminada del sistema.
   * **Tamaño de fuente**: - cambia el tamaño de fuente de la interfaz de usuario.
* **Tema**: - cambia el aspecto de la interfaz de usuario del editor.
   * **Tema**: - seleccione el tema de los iconos y cursores de la lista.
   * **Paleta**: - seleccione la paleta de colores de la interfaz de usuario.
  
<Note type="warning">
El cambio de paleta se aplicará correctamente después de reiniciar la aplicación Editor.
</Note>

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/AppSettings/AppSettings_view.png"
  :border="true"
/>


## Inicio sesión
Aquí puede configurar el archivo de registro, donde el editor escribirá los registros de su proceso de trabajo.

**Nivel de registro**: - un filtro que le permite escribir tipos de mensajes específicos en el archivo de registro.
* **Depuración**: - el registro más detallado, se escribirán todos los mensajes.
* **Advertencia**: - solo se escribirán advertencias, errores y errores fatales.
* **Crítico**: - solo se escribirán los errores y los errores fatales.
* **Fatal**: - solo se escribirán los errores fatales.
* **Mensajes del sistema**: - se escribirán algunos mensajes del sistema.
* **Deshabilitar el registro**: - no escriba ningún mensaje en los archivos de registro.

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/AppSettings/AppSettings_logging.png"
  :border="true"
/>

## Extra
Aquí puede encontrar algunos escenarios especiales e inusuales.

* **Habilita el escalado automático en monitores de alto DPI**: - habilita el escalado de la interfaz de usuario junto con el factor de escala del monitor de todo el sistema.

<Note type="warning">
Para aplicar el cambio para esta opción, debe reiniciar la aplicación Editor.
</Note>

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/AppSettings/AppSettings_extra.png"
  :border="true"
/>
