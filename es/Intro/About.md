# Acerca de

## Polvo lunar
_Un motor de juego de plataformas de Wohlstand_
Este proyecto se distribuye bajo [GNU GNLv3](../license.html)._


**Entonces, ¿qué es esto exactamente?** Es un motor de juego gratuito/de código abierto y
kit de herramientas que brinda la posibilidad de crear juegos del género de plataformas.

La idea básica de este proyecto es hacerlo posible para todos los usuarios
para crear plataformas con sprites existentes o dibujados por ellos mismos. Esta idea se inspiró en el juego de fans de SMBX, pero el principal inconveniente de SMBX son los datos estrictos.
estándar y se adjunta a la franquicia "Super Mario" de Nintendo.

El motor será compatible con SMBX. Sus componentes principales serían un
(Compatible con SMBX) motor de juego y un kit de herramientas para crear juegos.

He estado trabajando en este proyecto al menos desde diciembre de 2013.

## Historia

### Comienzo
En diciembre de 2013 tenía el deseo de crear un [SMBX] (WhatIsSMBX.md) compatible
motor del juego y, al hacerlo, darle una nueva vida. La inspiración para esto fue [Hedgewars] (http://hedgewars.org/), un clon del juego.
"Gusanos" de la empresa Team17. Decidí crear un nuevo motor de juego,
con el código fuente abierto bajo la licencia GPLv3.

Una de las partes más importantes de este proyecto en mi opinión es la
NOMBRE. Debido al NOMBRE que le dio a SMBX, Redigit se enfrentó a
consecuencias por parte de Nintendo, y se vio obligado a eliminar el juego. Por lo tanto,
el motor que publicaré no llevará el nombre de "Mario" ni de ningún otro
Propiedades de Nintendo.
A pesar de esto, será totalmente compatible con SMBX, lo que significa que
ES posible usar archivos SMBX con mi motor.

Para el proyecto, decidí usar [Qt](http://qt.io) y
[Bibliotecas SDL](http://libsdl.org) con C ++. Quiero hacer el motor
multiplataforma: para Windows, GNU / Linux y Mac OS. El proyecto
live si es gratis, libre, de código abierto.

### El nacimiento del editor
Mi presentación no fue bien recibida por la comunidad SMBX, ya que pensaron que yo
era otro estafador que anunciaba un SMBX 1.4 falso. Despues de completar
la investigación inicial, comencé el desarrollo real del Editor
el 24 de marzo de 2014. El proyecto Editor comenzó como parte de mi
SMBX Research Works que comenzó unos meses antes.
El 28 de abril de 2014, Kevsoft se unió al Proyecto PGE y, en breve
posteriormente, se lanzó la versión 0.0.7-Alpha del Editor. La primera
versión con todas las funciones con la capacidad de leer / escribir archivos, un historial
administrador, y el soporte completo de la representación NPC fue 0.0.8-Alpha,
fue lanzado el 13 de julio de 2014. El 20 de octubre de 2014, después de
un largo tiempo de desarrollo, el primer estable y con todas las funciones
La compilación del editor se lanzó con la capacidad de leer / escribir.
archivos de editor de NPC de nivel, mundo e interactivo, etc. Esta versión
tenía un sistema de configuración múltiple que permitía el uso de diferentes
paquetes de contenido sin necesidad de sobrescribir los archivos de contenido existentes.

### Fundando el motor
En octubre de 2014 comencé el primer boceto del motor. Era un simple SDL2
aplicación con el uso de física Box2D y renderizado OpenGL. Después de un tiempo, logré jugar niveles con gráficos simples. El jugable
carácter era solo un rectángulo azul. Poco a poco, implementé el soporte
para el resto de gráficos, sonido, mapas del mundo, menús, pantallas, etc.
Lo hice para que los personajes jugables se renderizaran correctamente. ¡Adiós, rectángulo azul!
Se agregó el sistema de scripting inicial de Lua para comenzar a hacer que los NPC actúen según lo previsto.
Más tarde, descubrí que Box2D no me da lo que necesito.
Por lo tanto, deseaba codificar mi propia física desde cero.
La última versión de Engine con física Box2D fue 0.0.11-pre-alpha. Desde el 0.1-Alpha,
Se utilizó el nuevo motor físico con codificación propia. Entonces, el mapa del mundo se volvió más
funcionalidad e introdujo el abridor de caminos de trabajo. Desde ese momento
el motor de mapas del mundo está completo y funcionando.

### La aparición de SMBX2 y mi procrastinación
Desde que se creó Super Mario Bros.X2 a finales de 2015, me uní al
equipo para apoyar varios de sus componentes por invitación de Horikawa Otane.
Todo estuvo bien. Sin embargo, un año después, obtuve muchas tareas en el Editor.
eso tomó mucho tiempo. No tenía tantas ganas de trabajar en Editor como
Ya anuncié que ya está bien tal como está para el uso actual.
Quería desarrollar Engine porque veo que es una parte más importante del
Proyecto PGE. El equipo quería cada vez más funciones en el Editor. yo era
Trabajé mucho en eso. El equipo de SMBX2 no vio ninguna perspectiva para
PGE Engine y, en cambio, se centraron en el desarrollo de LunaLua.
En 2016, describí la naturaleza de SMBX2 como la "Mayor
solución alternativa en el Universo ". Horikawa Otane estuvo de acuerdo conmigo.
mi desarrollo del motor. Sin embargo, un tiempo después, el equipo de SMBX2
cambió mucho cuando Horikawa Otane dejó el proyecto por motivos personales. Después de 2016, comencé a posponer las cosas
y cambiar a otros proyectos. Mi mayor error fue preocuparme mucho
sobre el desarrollo SMBX2. A finales de 2019,
Finalmente decidí reducir mi atención a SMBX2 y concentrarme en
mi propio proceso de desarrollo.

### Se publicó el código fuente SMBX, fundando TheXTech
Con mucha suerte, el código fuente del original
El juego SMBX finalmente se abrió el 2 de febrero de 2020. Con él viene el enorme potencial de ayudar
el desarrollo del motor. Un mes después, construí un nuevo proyecto llamado
TheXTech transfiriendo el código fuente original a C ++, convirtiendo el
antiguo juego solo para Windows en un proyecto funcional y multiplataforma.

Deseaba mantener dos motores diferentes con dos propósitos:
- TheXTech para reproducir episodios antiguos y proporcionar compatibilidad total
al juego SMBX original, incluidos errores y detalles de su física.
- Nuevo motor PGE para nuevos proyectos centrados en la funcionalidad moderna, sin tener en cuenta los errores del antiguo motor SMBX.

### Epílogo

**El proyecto aún se encuentra actualmente en construcción**, a partir de ahora, el editor
y el kit de desarrollo está disponible actualmente como una aplicación independiente.
El código fuente se publica en el repositorio de GitHub.

Desarrollar un motor de juego es una responsabilidad que requiere dedicación y esfuerzo.
trabajo. Se necesita suficiente tiempo y motivación para esto
objetivo a alcanzar. A partir de 2020, el desarrollo aún es
activo, tengo el objetivo de construir el motor, ¡y seguiré adelante!

## Únete a nosotros
¿Te parece interesante este proyecto? Puedes mostrar tu
soporte y [únase a nosotros](http://wohlsoft.ru/forum/) en el Foro!

También en Discord: https://discord.gg/qPBsvMy
