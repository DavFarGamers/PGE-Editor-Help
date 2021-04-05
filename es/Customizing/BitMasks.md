# Máscaras de bits de transparencia
Al apuntar a gráficos para el motor vanilla SMBX, debe usar el par especial de gráficos que contiene el frente
y enmascarar imágenes listas para su uso con el algoritmo Bit Blit. La [PNG2GIFs](/Tools/Console/PNG2GIFs) la utilidad se puede utilizar para simplificar la
conversión de imágenes.


## Máscaras de bits genéricas
En informática, una máscara o máscara de bits son datos que se utilizan para operaciones bit a bit, particularmente en un campo de bits.
Con una máscara, se pueden activar, desactivar o invertir varios bits en un byte, nibble, palabra, etc.
(o viceversa) en una sola operación bit a bit.

## Máscaras de imagen
En los gráficos por computadora, cuando se pretende colocar una imagen determinada sobre un fondo, las áreas transparentes se pueden
especificado a través de una máscara binaria. De esta forma, para cada imagen deseada hay en realidad dos mapas de bits: el
imagen, en la que las áreas no utilizadas reciben un valor de píxel con todos los bits establecidos en 0, y una máscara adicional, en la que
las áreas de imagen correspondientes reciben un valor de píxel de todos los bits establecidos en 0 y las áreas circundantes un valor de todos
bits establecidos en 1s. En la muestra de la derecha, los píxeles negros tienen todos los bits cero y los píxeles blancos tienen todos los bits uno.

En tiempo de ejecución, para poner la imagen en la pantalla sobre el fondo, el programa primero enmascara los bits del píxel de la pantalla con
la máscara de imagen en las coordenadas deseadas utilizando la operación AND bit a bit. Esto conserva los píxeles de fondo de la
áreas transparentes mientras restablece con ceros los bits de los píxeles que serán oscurecidos por la imagen superpuesta.

Luego, el programa renderiza los bits del píxel de la imagen combinándolos con los bits del píxel de fondo usando el
operación OR bit a bit. De esta manera, los píxeles de la imagen se colocan de manera adecuada mientras se mantiene el fondo alrededor
píxeles conservados. El resultado es una combinación perfecta de la imagen sobre el fondo.

![src](screenshots/Tools/console/GIFs2PNG/example_src1.gif) ![srcm](screenshots/Tools/console/GIFs2PNG/example_src1m.gif)

Esta técnica se utiliza para pintar los cursores del dispositivo señalador, en los típicos videojuegos 2-D para personajes, viñetas y
así sucesivamente (los sprites), para los íconos GUI, y para títulos de video y otras aplicaciones de mezcla de imágenes.

Aunque relacionados (debido a que se utilizan para los mismos fines), los colores transparentes y los canales alfa son técnicas
que no implican la mezcla de píxeles de la imagen mediante enmascaramiento binario. 

## Lazily-made mascaras

Lazily-made / Noob-made / noob drawing / result of lazy effort - Estos son pares de una imagen y una máscara, creados
mediante copias simples de la imagen original, con un color blanco.

![lazyFront](screenshots/Tools/console/LazyFix/example_src1.gif) ![lazyBack](screenshots/Tools/console/LazyFix/example_src1m.gif)

Este es un mal método que no se recomienda para la creación de sprites. En su lugar, utilice el [PNG2GIFs](/Tools/Console/PNG2GIFs) 
utilidad para convertir la imagen PNG en el par de máscara y frontal listo para máscara de bits válida. Si tienes una docena de perezosos
gráficos, puede arreglar el usando el especial [LazyFix Tool](/Tools/Console/LazyFixTool) utilidad.


## Links 
* [Artículo de Wikipedia sobre máscaras de bits](https://en.wikipedia.org/wiki/Mask_(computing)#Image_masks)
* [Explicación de Bit Blit](https://en.wikipedia.org/wiki/Bit_blit)
