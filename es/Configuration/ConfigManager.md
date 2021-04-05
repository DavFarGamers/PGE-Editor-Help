# Administrador de configuración
Configuration Manager te permite controlar y seleccionar las configuraciones globales del juego.

## Estado de configuración
Este cuadro de diálogo te permite comprobar los estados de la configuración actual del juego y encontrar errores, si existen.

![007_configStatus](screenshots/Tools/007_configStatus.png)

<ImageZoom
  alt="008_ConfigStatusBox"
  url="screenshots/Tools/008_ConfigStatusBox.png" 
  :border="true"
/>

## Recargar configuración global
Esta función permite volver a cargar los ajustes de configuración global sin reiniciar la aplicación.
Esto es útil para aplicar configuraciones editadas en el proyecto abierto.

![ReloadConfig](screenshots/Tools/ReloadConfig_menu.png)

## Ejecuta una herramienta de configuración
Algunos paquetes de configuración pueden contener la herramienta de configuración especial que proporciona un conjunto de
acciones adicionales que puede realizar.
[Puede leer información detallada sobre la herramienta de configuración aquí] (https://wohlsoft.ru/pgewiki/Configure.js_ (Config_pack)).

![RunConfigTool](screenshots/Tools/RunConfigTool.png)

## Cambiar configuración
Puede trabajar con otras configuraciones de juegos. Para cambiar el paquete de configuración, necesita
para abrir el elemento del menú:`Tools -> Global Configuration -> Change configuration...` Después
el interruptor de configuración, debe reiniciar el editor para comenzar a trabajar con el nuevo
paquete de configuración.

![ConfigChange](screenshots/Tools/ConfigChange.png)
