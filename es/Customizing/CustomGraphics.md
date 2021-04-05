# Cómo utilizar gráficos personalizados
Por lo general, llega un momento en el que encuentra la necesidad de reemplazar las imágenes predeterminadas con sus propios gráficos personalizados. Esta
es posible sin sobrescribir ninguna de las imágenes predeterminadas. Los gráficos personalizados son una excelente manera de hacer tu episodio de juego
único y colorido.

El proceso es bastante simple, pero para aquellos de ustedes que no saben cómo, aquí hay una mirada en profundidad al uso de
gráficos con el editor.

## Carpetas de niveles y episodios
Al usar gráficos personalizados, no es necesario reemplazar ningún dato global, simplemente tiene que poner sus gráficos
en la carpeta por nivel o por episodio de tu juego. Todos los archivos de nivel de un episodio se colocan juntos en este
una carpeta.

Carpetas personalizadas de nivel: son carpetas que tienen el mismo nombre que el archivo de nivel. Por ejemplo, el
nombre de carpeta para el nivel `MyLevel.lvlx` sería `"MyLevel"`.

![Tree](screenshots/Customizing/tree.png)

Colocar archivos gráficos personalizados con un montón de archivos de nivel juntos significa que se personalizarán para todos los demás
niveles en el episodio, pero cuando pones los gráficos en la carpeta personalizada del nivel, los gráficos se personalizarán
solo para ese nivel.

También es posible reemplazar gráficos en mapas del mundo. En consecuencia, lo mismo ocurre con la creación de una carpeta personalizada mundial,
la carpeta que tiene el mismo nombre que el archivo del mapa mundial.

<Note type="tip">
Si va a reproducir su episodio con el motor de juego SMBX, no debe crear una carpeta personalizada mundial,
ya que vanilla SMBX no admite carpetas personalizadas para mapas del mundo. En su lugar, tendrá que colocar los gráficos en
la carpeta de episodios junto con los archivos del mapa mundial.
</Note>

## Personalización de gráficos de nivel

### Bloques
Para reemplazar los bloques, deberá crear archivos gráficos con nombres como `block-*.ext`. El `*` de pie por
el ID del bloque que está reemplazando y "ext" es una extensión de archivo de imagen. SMBX usa el formato GIF
sin transparencia. Si desea utilizar transparencia, deberá crear una máscara de transparencia.
por tu imagen. La imagen de la máscara debe tener un nombre como "bloque- * m.ext". Un ejemplo sería  "block-23.gif" por
la imagen de origen y "block-23m.gif" para la imagen de máscara, que define los píxeles de transparencia. El nombre de archivo de
el archivo de imagen de destino que está personalizando, se puede encontrar en el directorio de imagen global de su paquete de configuración.
<Note type="tip">
Tenga en cuenta que para SMBX debe utilizar el formato GIF para las imágenes de máscara. Los bloques tienen tres tipos de gráficos:
Estático, animado y de tamaño considerable.
</Note>

Los bloques estáticos tienen un marco estático. Puede usar imágenes con cualquier tamaño, pero debe usar
el mismo formato que usa la configuración de tu juego para niveles y episodios.

![Brick](screenshots/Customizing/brick.png)

Los bloques animados tienen una imagen de conjunto de marcos vertical. Cada marco debe tener la misma altura y su imagen debe tener la misma
número de cuadro como el bloque original.

![BrickAnimated](screenshots/Customizing/brick_animated.png)

Los bloques redimensionables son una imagen dividida en 9 piezas que se denominan "Esquinas", "Lados" y "Centro".
Los bloques redimensionables también pueden tener cualquier tamaño además de ser redimensionados. Los bloques de tamaño variable se muestran debajo de la mayoría de los BGO.

![BlockSizable](screenshots/Customizing/block_sizable.png)

<Note type="warning">
Si está personalizando un bloque de tamaño mejorado para SMBX, la imagen debe tener un tamaño de imagen de 96x96 píxeles.
</Note>

Los objetos de fondo son el escenario simple de niveles. Los escenarios tienen solo dos tipos que son, estáticos y animados. Las imágenes BGO son similares a los bloques, pero tienen una diferencia: Si vas a usar tu episodio con SMBX, las imágenes deben tener exactamente el mismo tamaño que el sprite original. Los nombres de archivo de imagen de BGO suelen ser algo así como "background-*.ext".
Tenga cuidado al utilizar BGO: los BGO son compartidos por Z-position: background-2 Z-level, cual es el lowest Z-level, estos BGO se muestran debajo de bloques considerables. Background-1 Z-level se muestra sobre bloques considerables, pero debajo de personajes jugables, NPC y bloques. El nivel de primer plano es una visualización sobre cualquier cosa, pero debajo de bloques y BGO que el "foreground-2" Z-level. Nota relacionada con SMBX: En SMBX, los BGO definen su Z-position por una posición de datos de matriz. Es decir. cada BGO tiene su propia prioridad de clasificación que define el BGO Z-position.																												

<ImageZoom 
  alt="level_items_layers"
  url="screenshots/Customizing/level_items_layers.png" 
  :border="true" 
/>

### Personajes no reproducibles
Los personajes no reproducibles tienen sus propios estándares gráficos. Tendría que usar gráficos personalizados con el mismo tamaño y cuadros de animación que el sprite original para reemplazarlos. Si desea utilizar números de fotogramas personalizados, tamaños personalizados, puede definir todos esos (configuraciones gráficas) en el archivo de configuración especial llamado NPC.txt (leer más). Los nombres de archivo de imagen de los NPC suelen ser un "npc-*.ext".

Los NPC tienen varios tipos de gráficos:
* **Static** - puede utilizar una imagen con un marco para un elemento.

![NpcStatic](screenshots/Customizing/npc_static.png)

* **Animated simple** - estos tienen cuadros animados como bloques o BGO.

![NpcAnimated](screenshots/Customizing/npc_animated.png)

* **Animated with left-right defined direction** - permite definir imágenes para la dirección izquierda y derecha del NPC.

![NpcAniStyle1](screenshots/Customizing/npc_animated_style1.png)

* **Animated with left-right-upper directions defined** - permite definir imágenes para direcciones NPC izquierda y derecha, junto con direcciones izquierda y derecha para el estado superior.

![NpcAniStyle2](screenshots/Customizing/npc_animated_style2.png)

* **Animated with rotation** - Le permite definir los marcos del NPC con rotación redonda (el NPC debería poder adherirse al techo y las paredes).

![NpcAniStyle3](screenshots/Customizing/npc_animated_style3.png)

* **Animated with the special animation algorithm** - el NPC tiene una secuencia de cuadros predefinida algorítmica, esto no es posible redefinir si va a usar el NPC en SMBX.

![NpcAniStyleAlg](screenshots/Customizing/npc_animated_style_alg.png)

### Personajes jugables

Personajes jugables. Estos son un sprite de matriz de 10x10 que tiene un tamaño de 1000x1000 píxeles y aproximadamente 100
fotogramas en total. Cada fotograma del personaje reproducible puede tener un tamaño máximo de 100x100 píxeles.
Cuando personalices un personaje jugable, asegúrate de que los fotogramas estén calibrados al MISMO
configuración física como el conjunto de marcos original del personaje jugable. 

<Note type="tip">
Para editar casillas de respuesta para el
personajes jugables, usa la herramienta de calibración de personajes jugables que te ayudará a hacer el especial
Archivos INI llamados calibraciones.
</Note>

<Note type="warning">
La edición de hit-box de personajes reproducibles no es posible para vanilla SMBX.
</Note>

### Backgrounds
Backgrounds - Son las imágenes que se muestran debajo de todos los elementos de un nivel. Fondos usualmente
tener nombres de archivo de imagen como `background2-*.ext`.

Backgrounds tiene principalmente dos tipos de imágenes: estáticas y animadas como BGO. Aunque backgrounds
también tienen sus propios modos de visualización, que son de una sola fila, de dos filas y en mosaico.
* Los fondos de una sola fila tienen una fila que se repite horizontalmente, pero que no se repite verticalmente.
* Los fondos de una sola fila se mueven verticalmente en proporción a la altura de la sección.
* La altura de la imagen debe ser superior a 600 píxeles (que es la altura de sección predeterminada).

<ImageZoom 
  alt="Background_singleRow_h"
  url="screenshots/Customizing/Background_singleRow_h.gif" 
  :border="false" 
/>
<ImageZoom 
  alt="Background_singleRow_vertic"
  url="screenshots/Customizing/Background_singleRow_vertic.gif" 
  :border="false" 
/>

Los fondos de dos filas son fondos compuestos que utilizan dos imágenes para cada fila.
los fondos no se mueven verticalmente. La altura de resumen de ambas imágenes debe ser superior a 600 píxeles.
(que es la altura de sección predeterminada).

<ImageZoom 
  alt="Background_doubleRow_r"
  url="screenshots/Customizing/Background_doubleRow_r.gif" 
  :border="false" 
/>

<Note type="tip">
Nota relacionada con el editor: los fondos de una y dos filas solo se mostrarán en la parte inferior
o superior (según los tipos de archivos adjuntos que tengan estos fondos) con solo repetición horizontal.
Si desea ver su fondo en forma de mosaico, al exportar la imagen, marque la
Cuadro "Fondo en mosaico". Además, en las configuraciones INI hay un indicador disponible llamado "mosaico en
el editor ", lo que hará que el fondo de una sola fila tenga un aspecto en mosaico, aunque solo en el editor,
como en el juego, su fondo se mostrará en su estado original.
</Note>

<Note type="danger">
Tenga cuidado al reemplazar fondos de una sola fila, ya que se repiten solo horizontalmente, y en el editor solo verá la imagen adjunta. Puedes usar imágenes de fondo en cualquier tamaño, pero cuando personalizas el fondo animado, su sprite debe tener la misma cantidad de fotogramas que el fondo original. Una imagen de fondo también debe tener una altura que sea al menos la mitad de la altura de la pantalla (en SMBX, la altura de la pantalla es de 600 píxeles).
</Note>

Los fondos en mosaico se repiten en ambas direcciones, horizontal y verticalmente. La imagen puede tener cualquier tamaño.																	

<ImageZoom 
  alt="Background_tiled"
  url="screenshots/Customizing/Background_tiled.gif" 
  :border="false" 
/>

<Note type="tip">
Algunos fondos tienen el efecto mágico, que divide la imagen en tiras que se mueven a diferentes velocidades.
</Note>

<ImageZoom 
  alt="Background_singleRow_magic"
  url="screenshots/Customizing/Background_singleRow_magic.gif" 
  :border="false" 
/>

## Personalizando los gráficos del mundo
Los gráficos del mundo generalmente se colocan junto con el archivo del mapa del mundo, pero puede colocar las imágenes en el Directorio personalizado del mundo (esto no es compatible con SMBX).
* **Losas**
* **Rutas**
* **Paisajes**
Estos gráficos son similares a los BGO utilizados en los niveles. Las imágenes tienen dos tipos que son, estáticas y animadas. Estos archivos de imagen también suelen tener nombres como "tile-*.ext", "path-*.ext" y "scene-*.ext".

* ** Niveles **: tienen algunas diferencias menores en comparación con otras imágenes. Siempre se adhieren a la posición central inferior de un elemento, donde se utilizan. Los archivos de imagen de los niveles generalmente se denominan algo así como "level-*.ext".

## Consejos

<Note type="warning">
Al personalizar un elemento animado, asegúrese de que su objeto tenga el mismo número de fotogramas que en la imagen original.

- Recuerde que si el tamaño de un BGO personalizado es mayor que la imagen original que está reemplazando, se recortará en SMBX vainilla. En otras palabras, no use imágenes personalizadas más grandes que la imagen que está reemplazando si tiene la intención de usarlas en niveles creados para SMBX vanilla. Esto también se aplica a Tiles, Sceneries, Paths y Levels en el mapa del mundo.

- Al personalizar un NPC, tendrás que crear el objeto de imagen con el mismo tamaño de imagen y número de fotogramas que el original. Si está creando un tamaño de imagen personalizado, recuerde crear el npc-*.txt configure para definir las propiedades de su NPC personalizado. 

- Recuerde tener cuidado con el nombre de sus archivos en UNIX-like sistemas operativos, un ejemplo sería"thecat" y "TheCat", recuerde que ambos se reconocen como archivos completamente diferentes.

</Note>

## Formatos gráficos compatibles

| Format | Description | Values |
|---------|-------------|--------|
| GIF | CompuServe GIF, sin transparencia (usando las máscaras) | |
| GIF | CompuServe GIF, con su propia transparencia | SMBX llenará la transparencia con negro|
| BMP | Formato de imagen sin comprimir (usando las máscaras) | |
| PNG | Gráfico de red portátil, con transparencia de canal alfa | No es compatible con vanilla SMBX|
| JPEG | Imagen o fotografía comprimida con pérdida | No los uses excepto en fotos. |
