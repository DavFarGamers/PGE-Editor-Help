# GIFs2PNG

![CatGIFs2PNG](screenshots/Tools/console/cat_gif2png_128.png)

**Convertidor de GIF a PNG enmascarado** (conocido como GIFs2PNG) es una herramienta de conversión gráfica que convierte imágenes GIF SMBX64
(imagen de origen con máscara de transparencia) a imágenes PNG con soporte para canal alfa y paleta de colores verdaderos.

## Cómo funciona
Este es el par listo de máscara de bits: la imagen frontal con un fondo negro y la máscara de bits que define la
nivel de transparencia:

![src](screenshots/Tools/console/GIFs2PNG/example_src1.gif) ![srcm](screenshots/Tools/console/GIFs2PNG/example_src1m.gif)

Después de ejecutar la herramienta, el frente y la máscara se fusionarán en una imagen PNG unida que tiene su propia transparencia:

![dst](screenshots/Tools/console/GIFs2PNG/example_dst1.png)

## Uso

Esta es una utilidad de consola. Para usarlo, debe ejecutar la Terminal en el directorio donde se encuentra el ejecutable GIFs2PNG.
situado. Alternativamente, puede usar esta utilidad desde sus scripts y utilidades y ejecutar esta utilidad externamente.
```
USAGE:

   ./GIFs2PNG  [-C </path/to/config/pack>] [-O
               </path/to/output/directory/>] [-w] [-d] [-b] [-r] [--]
               [--version] [-h] <Input file path(s)> ...

Where: 

   -C </path/to/config/pack>,  --config </path/to/config/pack>
     Allow usage of default masks from specific PGE config pack (Useful for
     cases where the GFX designer didn't make a mask image)

   -O </path/to/output/directory/>,  --output </path/to/output/directory/>
     path to a directory where the PNG images will be saved

   -w,  --dig-recursive-old
     Look for images in subdirectories [deprecated]

   -d,  --dig-recursive
     Look for images in subdirectories

   -b,  --ingnore-bg
     Skip all "background2-*.gif" sprites

   -r,  --remove
     Remove source images after a succesful conversion

   --,  --ignore_rest
     Ignores the rest of the labeled arguments following this flag.

   --version
     Displays version information and exits.

   -h,  --help
     Displays usage information and exits.

   <Input file path(s)>  (accepted multiple times)
     (required)  Input GIF file(s)
```
