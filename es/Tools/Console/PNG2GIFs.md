# PNG2GIFs

![CatPGE2GIFs](screenshots/Tools/console/cat_png2gif_128.png)

**Convertidor de PNG a GIF enmascarado** (conocido como PNG2GIF) es una herramienta de conversión gráfica que convierte una imagen transparente
Imagen PNG en un GIF compatible con SMBX64 con el formato de máscara de transparencia. Esta herramienta te permite ahorrar mucho tiempo
al crear máscaras de transparencia para su uso en el motor de juego SMBX.

## Cómo funciona

Esta es una imagen PNG común con transparencia propia:

![src](screenshots/Tools/console/GIFs2PNG/example_dst1.png)


Después de ejecutar la herramienta, se generarán el frente y su máscara:

![dst](screenshots/Tools/console/GIFs2PNG/example_src1.gif) ![dstm](screenshots/Tools/console/GIFs2PNG/example_src1m.gif)

El resultado se puede utilizar libremente con el juego vanilla SMBX y funcionará correctamente.


## Uso
Esta es una utilidad de consola. Para usarlo, debe ejecutar la Terminal en el directorio donde el ejecutable PNG2GIFs
situado. Alternativamente, puede usar esta utilidad desde sus scripts y utilidades y ejecutar esta utilidad externamente.

```
USAGE: 

   ./PNG2GIFs  [-O </path/to/output/directory/>] [-w] [-d] [-r] [--]
               [--version] [-h] <Input file path(s)> ...


Where: 

   -O </path/to/output/directory/>,  --output </path/to/output/directory/>
     path to a directory where the converted images will be saved

   -w,  --dig-recursive-old
     Look for images in subdirectories [deprecated]

   -d,  --dig-recursive
     Look for images in subdirectories

   -r,  --remove
     Remove source images after successful conversion

   --,  --ignore_rest
     Ignores the rest of the labeled arguments following this flag.

   --version
     Displays version information and exits.

   -h,  --help
     Displays usage information and exits.

   <Input file path(s)>  (accepted multiple times)
     (required)  Input PNG file(s)
```
