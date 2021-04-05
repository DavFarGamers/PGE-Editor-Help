# Barra de menús

La barra de menú del editor proporciona acceso completo a casi todas las funciones compatibles del editor. Este artículo contiene una explicación de los elementos de menú más útiles y algo más.

## Expediente
![fileMenu](screenshots/menus/001_file.png)

* **Nuevo**: crea un archivo nuevo.

* **Abrir**: abre un archivo existente.

* **Guardar**: guarda los datos actuales en un archivo abierto. Si se crea un archivo, se le pedirá un archivo para guardar.

* **Abrir carpeta del archivo actual**: abre una carpeta donde se guarda el archivo.

* **Abrir carpeta de datos personalizados**: abre una carpeta para datos personalizados específicos de un archivo de nivel o mundial (con el mismo nombre que el archivo en sí, excepto el sufijo).

* **Exportar a imagen**: esta opción guardará un fragmento seleccionado de nivel o mapa del mundo en un archivo de imagen (en formato PNG).

* **Exportar sección a imagen**: esta opción guardará toda la sección de nivel en un archivo de imagen (en formato PNG).


## Editar

![editMenu](screenshots/menus/002_edit.png)

* **Historia**
   * **Deshacer**: - Cancela la acción reciente.
   * **Rehacer**: - Repetir la acción cancelada.

* **Portapapeles**
  * **Copiar**: - Copia elementos al portapapeles.
  * **Cortar**: - Copia elementos en el portapapeles y elimínalos de la escena.
  * **Pegar**: - Seleccione la ubicación e inserte elementos almacenados en el portapapeles.
* **Ajustar a la cuadrícula**: - Cambia la alineación automática de los elementos colocados o movidos.
* **Establecer tamaño de alineación de cuadrícula**: - Le brinda la capacidad de anular el tamaño de alineación de cuadrícula predeterminado. Para restaurar un valor predeterminado, elija "Valor predeterminado por elemento".

* **Evitar superposición**: - Evita que elementos similares se superpongan entre sí. El intento de mover objetos sobre otros provocará el rechazo del movimiento: todos los elementos movidos volverán a su posición inicial. Si esta bandera está deshabilitada, podrá mover elementos entre sí sin limitación. Nunca se permitirá que los objetos se superpongan al colocar nuevos elementos a menos que esté duplicando o pegando desde el portapapeles, lo que siempre permitirá la superposición. _Puedes deshabilitar esta opción para mover tus artículos entre sí sin límites ._

* **Alinear seleccionados**: - Alinea cada elemento seleccionado a la cuadrícula.
* **Rotar a la izquierda/derecha**: - Rotar las coordenadas del elemento dentro del rectángulo de selección.
* **Voltear horizontal/vertical**: - Invierte las coordenadas del elemento en relación con el rectángulo de selección.


## Nivel

![levelMenu](screenshots/menus/003_level.png)

* **Cambiar sección actual** - En este menú, puede cambiar la sección actual a otra.

* **Modificaciones de sección**
  * **Clonar sección a ...**: - Copia todos los elementos y propiedades de una sección de origen en otra. Puede copiar toda la sección de nivel entre archivos.
  * **Eliminar sección**: - Elimina todos los elementos de la sección actual y la des-inicializa.
  * **Rotar a la izquierda/derecha**: - Rotará la sección con todos los elementos en ella.
  * **Voltear horizontal/vertical**: - Invertirá las coordenadas de los elementos de la sección.

* ** Opciones de la sección actual**
  * **Conecte los lados izquierdo-derecho (deformación de nivel)** - Los elementos o personajes que se muevan fuera de la pantalla volverán a ingresar desde el lado opuesto de la sección.
  * **Salida fuera de la pantalla**: - Permite al jugador salir del nivel saliendo de la pantalla.
  * **Desplazamiento unidireccional (sin retroceso)** - El personaje solo puede moverse de izquierda a derecha.
  * **Submarino**: - Fuerza la física submarina al área de sección completa.

* **Propiedades**: - Cambia el título del nivel y algunas otras propiedades de todo el nivel.


## Prueba

![testMenu1](screenshots/menus/005_test.png)

* **Ejecutar prueba**: - Ejecutará la prueba del nivel actual con el motor predeterminado del paquete de configuración actual. La integración de interprocesamiento funcionará. Le permite realizar una colocación en caliente de elementos en el nivel de ejecución directamente si el motor admite la integración.

* **Ejecutar la prueba del archivo guardado**: - Iniciará la prueba del archivo guardado. La integración entre procesos no funcionará.

* **PGE Engine** (Moondust Engine): - El submenú de acciones y funciones adicionales relacionadas con Moondust Engine, el motor predeterminado y principal de un proyecto Moondust.

* **TheXTech**: - El submenú de acciones y funciones adicionales relacionadas con el motor X-Tech, el puerto moderno de SMBX Engine.

* **TheXTech**: - El submenú de acciones y funciones adicionales relacionadas con el motor X-Tech, el puerto moderno de SMBX Engine.

* **LunaTester**: - Comenzará a probar en el motor SMBX heredado equipado con la biblioteca de piratería LunaLua, o en el sistema de tiempo de ejecución SMBX2, directamente basado en el proyecto LunaLua.

* **Opciones de prueba**: - Brinda la capacidad de establecer preferencias del proceso de prueba.



## Vista

![viewMenu](screenshots/menus/006_view.png)

* **Mostrar/Ocultar cajas de herramientas**: - Puede mostrar u ocultar las cajas de herramientas existentes.
* **Pantalla completa**: - Habilita la visualización de la ventana principal en modo de pantalla completa. Esta función es útil para tabletas.
* **Ajustar a la cuadrícula**: - Habilita o deshabilita la alineación de elementos por la cuadrícula.
* **Animación activada/desactivada**: - Activa o desactiva las animaciones de los elementos. Esta opción no funcionará si en el mapa de nivel se colocan demasiados elementos.

<Note type="tip">
Puede desactivar la opción de animación si cree que el Editor funciona con retraso.
</Note>



## Configuración

![configMenu](screenshots/menus/Configuration.png)

* **Estado de configuración actual**: - Abre el cuadro de diálogo que muestra la ventana de estado de configuración global. Verá una lista de todos los elementos cargados y podrá ver todos los errores que ocurrieron durante el proceso de carga.
* **Recargar paquete de configuración**: - Esta opción inicia la recarga completa de todos los datos de configuración global sin reiniciar el editor.
* **Ejecutar la herramienta de configuración ...** - Algunos paquetes de configuración tienen su propia herramienta de configuración que puede cambiar las propiedades adicionales del paquete de configuración (por ejemplo, los paquetes de configuración de integración lo están usando para configurar el directorio LunaLua-SMBX).
* **Cambiar paquete de configuración** - Esta opción permite cambiar a otro paquete de configuración.



## Herramientas

![toolsMenu](screenshots/menus/010_tools_configs.png)

* **Actualizar menús**: - Esta opción restablecerá las opciones de la barra de menús.

* **Volver a cargar el archivo actual**: - Vuelve a cargar el archivo y su contenido desde el disco.

* **Herramientas externas**: - Contiene las GUI y enlaces a herramientas adicionales:
  * LazyFix tool
  * GIFs2PNG
  * PNG2GIFs
  * SoX Audio Converter

* **Paletas y mosaicos**
   Crea y edita la configuración de mosaicos globales para la configuración actual del juego.

* **Datos personalizados**
   * **Borrar datos no utilizados**: - elimine todos los archivos personalizados no utilizados de su nivel.
   * **Importar**: - permite aplicar un paquete de datos personalizados directamente en el nivel/mundo.
   * **Corregir máscaras incorrectas**: - arreglará todas las máscaras de bits creadas incorrectamente en su nivel. Úselo cuando tenga problemas con la representación de gráficos.

* **Configuración de la aplicación**: - Esta acción abrirá la ventana de configuración de la aplicación, donde puede cambiar los límites de los elementos de animación, configurar la reproducción automática de música, etc. Aquí puede definir las propiedades de registro, configurar el archivo de registro o deshabilitar el registro.


## Ventana

Aquí se muestran todos los documentos abiertos. Puede:
* Cambiar entre documentos.
* Organizar subventanas.
* Ciérrelos.


## Ayudar

![helpMenu](screenshots/menus/011_help.png)

Este menú contiene enlaces a información útil y enlaces a herramientas especiales.

* **Consola de desarrollo**: - La herramienta que muestra toda la información que aparece durante la ejecución del editor. Además, esta consola permite enviar comandos especiales a la parte del motor mientras se ejecuta la prueba de depuración.

* **GUI heredado**: - Este elemento de menú cambiará la GUI del editor al diseño clásico con el modo de subventanas y el cuadro de elementos del conjunto de mosaicos como paleta de elementos predeterminada.
* **GUI moderna**: - Este elemento de menú cambiará la GUI del editor a un diseño moderno con modo de vista de pestañas y con el cuadro de elementos de búsqueda de filtro predeterminado.
