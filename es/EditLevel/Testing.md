# Prueba
## Visión de conjunto
Mientras trabaja en sus niveles, querrá ejecutar su archivo de nivel en acción para verificar el comportamiento.

![testMenu](screenshots/menus/005_test.png)

El editor tiene el apoyo de pruebas de nivel a través de diferentes motores de tiempo de ejecución. Puede utilizar cualquiera de los motores compatibles y, opcionalmente, cambiar su configuración mediante un submenú especial.

<Note type="warning">
Según el paquete de configuración utilizado, se puede utilizar un motor diferente como tiempo de ejecución predeterminado. Además, puede evitar la elección de cualquier otro motor de tiempo de ejecución que no sea el predeterminado para las pruebas de nivel.
</Note>

Para iniciar una prueba de nivel, abra el menú **Prueba**, seleccione el elemento de menú **Nivel de prueba** o presione la tecla **F5** en su teclado. Alternativamente, puede usar un menú de cada motor compatible para ejecutar una prueba de nivel en un motor de tiempo de ejecución diferente en lugar del predeterminado.

En algunos casos, es posible que desee **Probar un archivo guardado**: ejecutará la prueba de un archivo de nivel desde el estado de un disco. Esta opción no admite la integración de un editor.

Es posible que desee **Iniciar juego** si desea cambiar la configuración de control del juego o ejecutar un episodio de reproducción.

Si es necesario, puede ajustar sus **Opciones de prueba** para seleccionar personajes jugables, contar jugadores, habilitar algunas funciones de trampa o depuración, establecer un estado específico de personajes jugables, etc.

Para los motores solo para Windows, Editor tiene soporte para un puente IPC que puede funcionar en Wine. Cuando Editor funciona en un sistema operativo que no es Windows, encontrará un elemento de menú adicional en los menús de LunaTester y SMBX-38A, que le permite configurar el uso de Wine e incluso elegir una instalación de Wine diferente (consulte [Wine Settings](#wine-settings)).

## Configuración de prueba
<ImageZoom
  alt="eventsList"
  url="screenshots/Testing/test_settings.png"
  width="200px"
  :border="true"
/>

Es un diálogo de configuraciones genéricas que te permite configurar algunas características: elegir juego de 1 o 2 jugadores, seleccionar personajes jugables y sus estados, agregar vehículos / monturas, etc.

**Hay algunas configuraciones adicionales:**
- **Modo Dios** - Hace que tu personaje jugable sea invencible ante peligrosos PNJ y superficies.
- **Vuelo ilimitado** - Otorga una habilidad para que tu personaje jugable vuele usando la tecla "Alt-Jump" (solo motor PGE).
- **Modo Bulldozer**: permite a tu personaje jugable destruir cualquier objeto más cercano con la tecla Alt-Run (solo motor PGE).
- **Camina en cualquier lugar**: permite que tu personaje jugable camine en un mapa del mundo fuera de los caminos (solo motor PGE).
- **Información de depuración**: permite la impresión de varios datos de depuración en la pantalla (solo motor PGE).
- **Mostrar velocidad de fotogramas**: permite imprimir el recuento de FPS en la esquina superior izquierda (solo SMBX-38A y TheXTech).
- **Depuración de física**: permite dibujar los hitboxes de todos los objetos, incluidos los invisibles (solo motor PGE).

## Motor PGE
<Note type="warning">
Tenga cuidado: la pieza del motor está en construcción. Tiene muchas características que aún no se implementaron.
</Note>

![testMenu](screenshots/menus/005_test_pge_engine.png)

Es un motor de tiempo de ejecución propio del Proyecto PGE. Este motor tiene una integración completa con el editor y es compatible con todas las funciones principales. Puede ejecutar pruebas de archivos nuevos o no guardados sobre la marcha. Mientras funciona la prueba, puede seleccionar cualquiera de los elementos en el cuadro de conjunto de mosaicos del Editor o en el navegador de búsqueda de elementos y colocarlos directamente en la ventana del juego en ejecución.

Recomendamos leer el manual escrito en el [Engine.Readme.txt](https://raw.githubusercontent.com/Wohlhabend-Networks/PGE-Project/master/Content/readmes/Engine.Readme.txt) archivo incluido con PGE Engine.

**Opciones del menú:**
- **Prueba de nivel/mundo**: inicia la prueba directa de los datos de nivel cargados actualmente, incluso si el archivo no está guardado.
- **Prueba de nivel guardado/mundo**: inicia la prueba del nivel abierto actual abriéndolo desde un disco.
- **Iniciar juego**: inicia un juego utilizando un paquete de configuración cargado actualmente.

## TheXTech
![testMenu](screenshots/menus/005_test_thextech.png)

It's the full C++ port of SMBX Engine 1.3, created from the source code published on February 2, 2020. It's the accurate replica of the vanilla SMBX engine with the full Editor integration support and some other PGE standard extras. You can run testing of new-made or unsaved files on the fly. While the test is running, you can select any of the elements on the Editor's tile set box or item search browser and place them into the running game window directly. You can pick-up elements by mouse click on elements inside of the running game. Use a middle mouse button to turn on the eraser to remove elements around.Es el puerto C ++ completo de SMBX Engine 1.3, creado a partir del código fuente publicado el 2 de febrero de 2020. Es la réplica precisa del motor vanilla SMBX con el soporte completo de integración del Editor y algunos otros extras estándar de PGE. Puede ejecutar pruebas de archivos nuevos o no guardados sobre la marcha. Mientras se ejecuta la prueba, puede seleccionar cualquiera de los elementos en el cuadro de conjunto de mosaicos del Editor o el navegador de búsqueda de elementos y colocarlos directamente en la ventana del juego en ejecución. Puede recoger elementos haciendo clic con el mouse en elementos dentro del juego de carrera. Use un botón central del mouse para encender el borrador y eliminar elementos alrededor.

**Opciones del menú:**
- **Nivel de prueba**: - inicia una prueba directa de los datos del nivel cargados actualmente, incluso si el archivo no está guardado.
- **Nivel de prueba en el modo batalla**: - comienza una prueba de nivel en el modo batalla.
- **Prueba de nivel guardado**: - inicia una prueba del nivel abierto actualmente abriéndolo desde un disco.
- **Tipo de gráficos**: - seleccione un subsistema gráfico para su uso.
  - **Predeterminado**: - el subsistema gráfico se detectará automáticamente.
  - **Renderizado por software**: - utilice un renderizado por software sin aceleración. Use esto si la aceleración de hardware no funciona, o si funciona incorrectamente y tiene fallas. Puede funcionar lento en algunos sistemas.
  - **Acelerado**: - utiliza un subsistema de renderizado acelerado por hardware. Usado por defecto.
  - **Acelerado con V-Sync** - Utilice un subsistema de renderizado acelerado por hardware con el uso de
  sincronización vertical para hacer un renderizado más suave. Puede ralentizar el proceso del juego, se sugiere cambiar la frecuencia de actualización del monitor a 75 hz si es posible.
- **Habilitar mano mágica**: - permite usar un mouse para recoger elementos de un juego en funcionamiento directamente. Además de colocar nuevos elementos tomados en conjuntos de mosaicos y navegadores de elementos.
- **Activabme max FPS**: - desactiva el límite en el recuento de FPS y activa el renderizado gratuito. En algunos casos, puede parecer el avance rápido de un videocasete.
- **Habilitar agarrar todo**: - permite al personaje jugable agarrar a cualquier NPC sin excepciones.
- **Cambiar la ruta a TheXTech** - Le permite seleccionar la ruta ejecutable para que las pruebas funcionen. Puede elegir un ensamblaje diferente de TheXTech para usar por algún momento.
- **Iniciar juego**: - inicia un juego normal usando un paquete de configuración cargado actualmente.

## LunaTester
![testMenu](screenshots/menus/005_test_luna.png)

Es un proxy puente que le permite usar SMBX vanilla equipado con LunaLua para ejecutar pruebas de nivel en él.

**Pre requisitos:**
* Se requiere LunaLua 0.7.3.1 o más reciente. Si tiene que utilizar paquetes SMBX2, debe tener un SMBX 2.0 Beta 3 o superior.
* Windows 7 o superior, o Wine (se recomienda 3.0 y superior) con DirectX 9 u 11, tiempo de ejecución MSVC2015, quartz, dsound y VB6RUN instalados.
* Controladores de video instalados en su sistema; de lo contrario, el juego no funcionará o al menos se retrasará.

Puede ejecutar pruebas de archivos nuevos o no guardados sobre la marcha.

**Opciones del menú:**
- **Nivel de prueba**: - Inicia una prueba directa de los datos del nivel cargados actualmente, incluso si el archivo no está guardado.
- **Prueba de nivel/mundo guardado**: - Inicia una prueba del nivel o mapa mundial actualmente abierto abriéndolo desde un disco.
- **Restablecer puntos de control **: - Restablece el estado de los puntos de control en una condición en la que se está ejecutando la instancia en segundo plano.
- **Desactivar OpenGL**: - Hacer cumplir el uso del procesamiento de software.
- **Sigue ejecutándose en segundo plano** - El juego seguirá ejecutándose en segundo plano incluso si cierras la ventana para permitir la ejecución rápida de un juego.
- **Terminar proceso en ejecución** - Elimina el proceso de trabajo en segundo plano. Úselo en una condición en la que el juego no responda durante mucho tiempo.
- **Cambiar la ruta a LunaTester** - Le permite seleccionar la ruta al directorio de datos LunaLua-SMBX o SMBX2 para que LunaTester funcione. Puede elegir un ensamblaje diferente de LunaLua-SMBX para usar por algún momento.
- **[Ajustes de Wine ...] (# ajustes de Wine)** - (solo sistemas operativos que no sean Windows) Le permite configurar los ajustes de Wine o elegir una instalación de Wine diferente (por ejemplo, importar desde un PlayOnLinux / PlayOnMac cadena de herramientas).
- **Iniciar partida**: - Inicia una partida normal de LunaLua-SMBX o SMBX2.


## SMBX-38A
![testMenu](screenshots/menus/005_test_38a.png)

Es un proxy de puente que le permite usar el motor SMBX-38A para ejecutar pruebas de nivel en él.

**Pre requisitos:**
* Windows XP o superior, o Wine (se recomienda 3.0 y superior) con DirectX 9, quartz, dsound y VB6RUN instalados.
* Controladores de video instalados en su sistema; de lo contrario, el juego no funcionará.
* SMBX-38A v1.4.3 y superior.


**Opciones del menú:**
- **Nivel de prueba**: - Inicia una prueba directa de los datos del nivel cargados actualmente, incluso si el archivo no está guardado.
- **Nivel de prueba en el modo batalla**: - Comienza una prueba de nivel en el modo batalla.
- **Prueba de nivel/mundo guardado**: - Inicia una prueba del nivel o mapa mundial actualmente abierto abriéndolo desde un disco.
- **Restablecer puntos de control** - Restablece el estado de los puntos de control que quedaron después de la última prueba de reproducción.
- **Habilitar mano mágica**: - Permite usar un mouse para recoger elementos de un juego en funcionamiento directamente. Así como también
colocar nuevos elementos tomados en conjuntos de mosaicos y navegadores de elementos.
- **No suspender automáticamente el juego**: - Hace que el juego nunca se suspenda cuando la ventana del juego está desenfocada.
- **Cambiar la ruta a SMBX-38A ** - Le permite seleccionar la ruta al ejecutable SMBX-38A para que la prueba funcione.
Puede elegir un ensamblaje diferente de SMBX-38A para usar por algún momento.
- **[Wine settings ...] (# Wine-settings)** - (solo sistemas operativos que no sean Windows) Le permite configurar los ajustes de Wine o elegir
una instalación de Wine diferente (por ejemplo, importar desde una cadena de herramientas PlayOnLinux / PlayOnMac).
- **Start Game** - Inicia un juego normal de SMBX-38A

## Configuración de vino
<ImageZoom
  alt="eventsList"
  url="screenshots/Testing/wine_settings.png"
  width="200px"
  :border="true"
/>

Este cuadro de diálogo le permite configurar un trabajo de Wine en un sistema operativo que no sea Windows para que los motores LunaTester y SMBX-38A funcionen correctamente.

**Ubicación del vino**

Aquí debe elegir qué instalación de Wine usar: instalada en su sistema operativo, o seleccionar una diferente (por ejemplo, una de las compilaciones instaladas en su cadena de herramientas PlayOnLinux / PlayOnMac).

**Habilite la impresión de depuración de Wine en la consola "WineDebug"**: le permite obtener todos los mensajes de salida de depuración de Wine en la consola de desarrollo del Editor, que puede abrir en el menú **Ayuda** -> **Mostrar consola de desarrollo**.

**Especifique un entorno personalizado (PlayOnLinux/Mac)**: le permite configurar algunas ubicaciones predeterminadas utilizadas por Wine (por ejemplo, un prefijo de inicio donde se almacenan sus datos de registro y c_drive).

**Importar configuración de PlayOnLinux/PlayOnMac** - una herramienta de ayuda que le permite seleccionar un perfil existente de PlayOnLinux / Mac e importar rutas y configuraciones de Wine para usar en el Editor para ejecutar pruebas de nivel y reproducción de episodios.

**Prueba**: una utilidad útil que le permite verificar el trabajo de la cadena de herramientas Wine seleccionada.
