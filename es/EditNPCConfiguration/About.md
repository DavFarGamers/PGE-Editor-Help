# ¿Qué es NPC.txt?
## Visión de conjunto
NPC.txt es un archivo de configuración personalizado que tiene un nombre como npc-12.txt, npc-46.txt y contiene algunos parámetros para NPC personalizado. El NPC.txt proviene de SMBX 1.3 y es parte del estándar SMBX64.
## Parámetros
El NPC.txt tiene opciones limitadas de uso, y PGE puede usar más opciones que SMBX. SMBX ignorará las opciones desconocidas.

| Parámetros estándar SMBX64 | Descripción | Valores |
|---------|-------------|--------|
| gfxoffsetx | Mueve el gráfico en la dirección x | [+/- numbers] |
| gfxoffsety | Mueve el gráfico en la dirección y| [+/- numbers] |
| width | Ancho de NPC | [+numbers] | 
| height | Altura del NPC | [+numbers] |
| gfxwidth | Ancho de gráficos de NPC | [+numbers] | 
| gfxheight | Altura de los gráficos del NPC | [+numbers] |
| score | Puntuación que obtienes matando: 0 10 100 200 400 800 1000 2000 4000 8000 1up 2up 3up 5up | [0-13] |
| playerblock | Hace que los NPC actúen como bloques para los jugadores. | [1,0] |
| playerblocktop | Hace que el jugador pueda pararse en el NPC. | [1,0] |
| npcblock | Hace que el NPC actúe como un bloqueo para otros NPC | [1,0] |
| npcblocktop | Hace que los NPC puedan pararse sobre el NPC | [1,0] |
| grabside | Le da al jugador la capacidad de agarrar NPC desde el costado. | [1,0] |
| grabtop | Le da a Mario la habilidad de agarrar NPC como chicos tímidos. | [1,0] |
| jumphurt | Si se establece en 1, el jugador recibe un golpe al aterrizar sobre el enemigo. | [1,0] |
| nohurt | Si se establece en 1, el NPC no te hace daño. |[1,0] |
| noblockcollision | Si se establece en 1, el NPC no interactúa con los bloques. | [1,0] |
| cliffturn | Si se establece en 1, el enemigo gira en un acantilado | [1,0] |
| noyoshi | Si se establece en 1, no se puede comer al NPC | [1,0] |
| foreground | Si se establece en 1, el NPC está delante de todo. | [1,0] |
| speed | Multiplicador de velocidad: qué tan rápido se mueve el NPC (el número es lo que la velocidad se multiplica por: 0 = sin velocidad, 1 = defecto, 2 = El doble de rápido que el predeterminado, 3 = tres veces más rápido, etc. Los valores negativos hacen que se mueva hacia atrás | [+/-numbers] |
| nofireball | Si se establece en 1, las bolas de fuego no pueden matar al NPC. | [1,0] |
| noiceball | Si se establece en 1, el enemigo no se puede congelar cuando una bola de hielo lo toca. | [1,0] |
| nogravity | Si se establece en 1, el NPC camina en el aire. | [1,0] |
| frames | Establece el número de fotogramas que debe tener el NPC | [+number] |
| framespeed | Modificador de velocidad de fotogramas: qué tan rápido se anima el NPC (0-7 Son octavos de la velocidad predeterminada, 8 es la velocidad predeterminada y 9 y más grandes son las velocidades predeterminadas multiplicadas | [+numbers] |
| framestyle | Nombra el estilo que deben cambiar los marcos | [0-2] |

| Framestyle | Descripción |
|---------|-------------|
| framestyle=0 |Actúa como un goomba, es decir, tanto el movimiento hacia la izquierda como hacia la derecha usan el mismo sprite |
| framestyle=1 |El NPC tiene sprites tanto para la izquierda como para la derecha, la primera mitad de la hoja de sprites es para el movimiento a la izquierda, la última mitad es para el movimiento a la derecha |
| framestyle=2 |NPC tiene movimiento tanto a la izquierda como a la derecha, y movimiento al revés para cuando se agarra al NPC (como los enemigos SMB2) |

| Parámetros extendidos (no funciona en smbx) | Descripción | Valores |
|---------|-------------|--------|
| nohammer |Si se establece en 1, el enemigo no puede morir con un martillo. |[1,0] |
| noshell |Si se establece en 1, el enemigo no puede ser asesinado por proyectiles u otros NPC. |[1,0] |
| name |Define el nombre del NPC que se utilizará en el editor. |["string"] |
| health |Define el valor de salud de NPC. Útil para la creación de poderosos enemigos o jefes. |[+numbers] |
| grid |Vuelve a definir el tamaño de la cuadrícula de alineación para este NPC en el editor. |[+numbers] |
| gridoffsetx |Define el desplazamiento horizontal alineado por el valor de coordenadas de la cuadrícula en el editor |[+/-numbers] |
| gridoffsety |Define el desplazamiento vertical alineado por el valor de las coordenadas de la cuadrícula en el editor |[+/-numbers] |
| gridalign |Define el modo de alineación en el editor: 0 - en el centro de la celda global, 1 - en el borde de la celda global |[0,1] |
| image |Define el nombre del archivo de imagen del sprite en el editor. Permite tener un nombre de archivo de imagen personalizado |["string"] |
| script |Secuencia de comandos personalizada del algoritmo NPC-AI en PGE |["string"] |

<Note type="warning">
SMBX original tiene un error: no use valores decimales en códigos NPC si desea usarlos con SMBX.
Causa el bloqueo de SMBX para algunas personas. En Moondust, X-Tech, SMBX2 y SMBX-38A, este error es ausencia,
y tiene total libertad para usar valores decimales. Pero si desea utilizar valores decimales para SMBX de vainilla,
debe tener en la configuración de "Estándares internacionales" el punto "." carácter en lugar de una coma "," carácter
como separador decimal.
</Note>
