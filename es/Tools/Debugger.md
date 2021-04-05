# Depurador
## Visión de conjunto

Debugger, es una pequeña caja de herramientas informativa que muestra información de depuración, por ejemplo, coordinada con el mouse.
Además, con la herramienta de depuración puede saltar a una posición X:Y específica (relativa al centro de la vista).

También en el depurador verá contadores de elementos colocados en el nivel o en el mapa mundial.

Para mostrar el cuadro del depurador, abra el `View -> Debugger` opción del menú.

<ImageZoom
  alt="DebugBox"
  url="screenshots/Tools/DebuggerBox.png"
  :border="true"
/>


## Contadores personalizados

Esta es una característica especial que permite contar todos los elementos del grupo de identificaciones de destino.

Puede agregar y eliminar cualquier contador en esta lista según lo desee. **Para editar o eliminar el contador use el menú contextual**.

<Note type="tip">
Nota: debido a razones de rendimiento, los contadores personalizados no se actualizan automáticamente. Deberías actualizar los contadores personalizados
manualmente con un botón "actualizar"!
</Note>


_Cuadro de diálogo del editor de contador personalizado_

<ImageZoom
  alt="DebugCCEdit"
  url="screenshots/Tools/DebuggerBoxCustomCounterEditor.png"
  :border="true"
/>
