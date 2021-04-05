# Colocación de artículos

La colocación de nuevos elementos en el mapa de nivel o mundial se puede realizar de varias formas.

** Formas de colocación disponibles **
- **Brush placing** - la herramienta de colocación estándar. Los elementos individuales se colocan haciendo clic con el mouse o "dibujando" curvas mientras se mueve el cursor del mouse con un botón de retención.

- **[Rectangle](#rectangle)** - la herramienta que coloca elementos llenando zonas rectangulares. Esta herramienta es útil para dibujar paredes grandes o rellenar muchos huecos.

- **[Circle](#circle)** - la herramienta que coloca los artículos llenando zonas circulares. Funciona como una colocación rectangular.

- **[Line](#line)** - la herramienta que permite dibujar una línea de elementos. Esta herramienta es útil para dibujar pendientes, columnas y plataformas largas..

- **[Flood fill](#flood-fill)** - esta herramienta le brinda la capacidad de llenar un rango cerrado de formas aleatorias. Esta herramienta es útil si necesita rellenar con elementos en la zona de forma aleatoria.

- **[Overwrite mode](#overwrite-mode)** - Esta función ofrece la posibilidad de reemplazar elementos ya colocados en el mapa..


![PI](screenshots/LevelEditing/Items/PlacingTools.png)


## Rectángulo

Es una herramienta que permite colocar rápidamente grupos de elementos en el mapa.

Esta función está disponible para BGO y Blocks. Y en el editor de mapas del mundo disponible para cualquier elemento.
Para utilizar esta función, debe presionar el icono "Rectángulo" y, para colocar grupos de elementos, debe dibujar el rectángulo en el mapa. Una vez que suelte el botón del mouse, el área seleccionada se llenará con un grupo de elementos.

_Colocación de elementos mediante la herramienta de rectángulo_

<ImageZoom
  alt="demo-place-rect"
  url="demos/demo-place-rect.gif"
  :border="true"
/>


## Circulo

Es una herramienta que permite colocar rápidamente grupos de elementos en el mapa.

Esta función está disponible para BGO y Blocks. Y en el editor de mapas del mundo disponible para cualquier elemento.

Para utilizar esta función, debe presionar el icono "Círculo" y, para colocar grupos de elementos, debe dibujar el círculo en el mapa. Una vez que suelte el botón del mouse, el área seleccionada se llenará con un grupo de elementos.

_Colocar bloques con la herramienta círculo_

<ImageZoom
  alt="demo-place-circle"
  url="demos/demo-place-circle.gif"
  :border="true"
/>


## Línea

Es una herramienta que permite colocar rápidamente grupos de elementos en el mapa.

Esta función está disponible para BGO, Bloques y NPC. Y en el editor de mapas del mundo disponible para cualquier elemento.

Para utilizar esta función, debe presionar el icono "Línea" y, para colocar grupos de elementos, debe dibujar el círculo en el mapa. Una vez que suelte el botón del mouse, el área lineal se llenará con un grupo de elementos.

_Colocación de elementos con la herramienta de línea_

<ImageZoom
  alt="demo-place-line"
  url="demos/demo-place-line.gif"
  :border="true"
/>

## Relleno de inundación

Es una herramienta que permite el llenado de áreas cerradas construidas por elementos.

Esta función está disponible para BGO y Blocks. Y en el editor de mapas del mundo disponible para cualquier elemento.

Para usar esta función, debe presionar el ícono "Rellenar" y, para colocar grupos de elementos, debe hacer clic en el área vacía que desea llenar.

** Notas: **
- Por razones de seguridad, el proceso de llenado por inundación se detendrá después de 3 segundos. Si llenó accidentalmente todo el mapa, puede deshacerlos.
- Puede limitar el relleno por inundación con límites de sección si habilita la bandera en el`Edit -> Don't fill out of section` menu.

_Llenar con bloques_

<ImageZoom
  alt="demo-place-flood"
  url="demos/demo-place-flood.gif"
  :border="true"
/>


## Modo de sobrescritura

Esta función le permite reemplazar elementos colocados en el mapa. Para usarlos, cambie el icono "Modo de sobrescritura" en la barra de herramientas. Todos los elementos nuevos colocados provocarán la eliminación de todos los elementos colisionados que se colocaron en el lugar de posición anterior.

_Dibujar con modo de sobrescritura_

<ImageZoom
  alt="demo-override-mode"
  url="demos/demo-override-mode.gif"
  :border="true"
/>
