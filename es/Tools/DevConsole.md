# Consola de desarrollo
Es una consola de desarrollo. Aquí se imprimirán todos los eventos de registro durante el flujo de trabajo del Editor.
Además, puede escribir algunos comandos para controlar la configuración del editor. La consola se puede utilizar
para hacer trampas en la parte del motor mientras se prueba el nivel.

Para abrir una consola, abra el `Help -> Show Development Console` opción del menú.

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/Tools/devconsole.png"
  :border="true"
/>

### Comandos de consola disponibles:
Aquí hay una lista de comandos disponibles que puede usar para varias pruebas y trabajos.

| Comando | Descripción |
|---------|-------------|
| ?, help | Imprime la ayuda del comando | 
| test | display the `-> All good!` mensaje |
| version | mostrar información de la versión de la aplicación del editor |
| md5 | **Args:** `{SomeString}` Calcular el hash MD5 de la cadena |
| strarr | **Args:** `{String array}` validando la matriz de cadenas PGE-X |
| savesettings | Escriba la configuración de la aplicación en el archivo de configuración ahora (de lo contrario, la configuración se guardará al salir de la aplicación) |
| playmusic | **Args** `{Music type (lvl wld spc), Music ID}` Reproducir música predeterminada por ID específico |
| pgex | **Arg:** `{Path to file}` comprueba si el archivo contiene el formato de datos PGE-X válido |
| strarr | **Arg:** `{String array}` valida la matriz de cadenas PGE-X |
| quit | cerrar la aplicación del editor |
| paths | ¡Muestra varios caminos importantes! |
