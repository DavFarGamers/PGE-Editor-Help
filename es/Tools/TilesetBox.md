# Cuadro de elementos de mosaico
## Visión de conjunto
Este es el conjunto de elementos universal y personalizable, el contenedor principal para casi todos los elementos.

<ImageZoom
  alt="TilesetBox"
  url="screenshots/Tools/TilesetBox.png"
  :border="true"
/>

Al cambiar entre las diferentes pestañas, puede navegar a los elementos que desea colocar en su nivel.

Las pestañas de la fila superior son **categorías** y las pestañas de la segunda fila son <u>tileset groups</u>.

## Conjuntos de mosaicos personalizados
Aunque el acceso rápido a todas las funciones es bueno, todavía hay muchos clics involucrados en
para acceder a los elementos a los que desea acceder. Aquí es donde la pestaña "**Personalizado**" resulta útil.

<ImageZoom
  alt="CustomTilesetBox"
  url="screenshots/Tools/TilesetBox_custom.png"
  :border="true"
/>

![newTileset](screenshots/Tools/TilesetBox_customNew.png)<br />
Con solo presionar este botón, accederá a un editor de conjuntos de mosaicos,
en el que puede crear sus propios conjuntos de mosaicos de cualquier tipo.

El editor cuenta con una barra de búsqueda, con la que puede buscar por el nombre de un elemento,
así como su ID. También puede filtrar mosaicos para mostrar solo sprites con
activos personalizados o sprites sin. Después de darle un nombre al conjunto de mosaicos y presionar "**Guardar**",
se guardará en la carpeta de nivel y el conjunto de mosaicos se guardará automáticamente
se muestra como parte de la pestaña "**Personalizado**" en Tileset Itembox.

<ImageZoom
  alt="CustomTilesetEditor"
  url="screenshots/Tools/TileSet_EditorCustom.png"
  width=200px
  :border="true"
/><ImageZoom
  alt="GlobalTilesetEditor"
  url="screenshots/Tools/TileSet_Editor.png"
  width=200px
  :border="true"
/>


<Note type="warning">
Nota para los usuarios de SMBX2: Ciertas funciones se han eliminado específicamente del
Tileset Itembox para esta construcción. Esto se debe a que estos NPC, Bloques, BGO, etc.
sin terminar y es probable que se comporte de manera inesperada o cause fallas o errores. Si un NPC
que estás buscando no está en el Tileset Itembox, evita usarlo en tus niveles, ya que
es muy probable que se comporte de manera diferente en futuras versiones.
</Note>


Más sobre las características del Tileset Editor:
 
* Para agregar un elemento, arrástrelo desde la lista `Elementos` y suéltelo en cualquier celda libre de la cuadrícula blanca.
* Para eliminar un elemento de la cuadrícula, haga clic en él con el `botón derecho del mouse`.
* Puede organizar los elementos en la cuadrícula como desee simplemente arrastrándolos.
* Cada juego de fichas te permite colocar elementos del mismo tipo únicamente. No puedes mezclar objetos
de diferentes tipos en el mismo conjunto de mosaicos.
* La casilla de verificación **Mostrar solo personalizado** ocultará todos los elementos que no fueron personalizados por
cualquier forma de configuración local o gráficos personalizados.
* El **Mostrar solo predeterminado** mostrará solo los elementos que no fueron personalizados de ninguna manera
configuración local o gráficos personalizados.
* La casilla de verificación **Nivel actual/Específico mundial** le indicará al Tileset Editor que almacene
tileset en el directorio local level/world. Eso significa que el juego de fichas no será
accesible desde otros niveles y archivos de mapas del mundo.


## Conjuntos de mosaicos globales
Si desea modificar cualquier conjunto de mosaicos globales de paquetes de configuración, puede editarlos a través de
la `Tools -> Tilesets and pallets` menú.

## Grupos globales
Además, puede crear los grupos de mosaicos que siempre se mostrarán en el cuadro de mosaicos.

<Note type="tip">
Nota: Si desea crear una categoría, guarde el grupo de mosaicos con un nuevo nombre de categoría,
escrito manualmente: aparecerá automáticamente.
</Note>

<ImageZoom
  alt="GlobalTilesetGroupEditor"
  url="screenshots/Tools/TileSet_Group_Editor.png"
  :border="true"
/>
