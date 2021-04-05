# Herramienta LazyFix
![CatGlasses](screenshots/Tools/console/cat_glasses_128.png)

La **Herramienta LazyFix** es una herramienta que corrige las máscaras consideradas inválidas o inadecuadas (como cuando la máscara es la
igual que la imagen frontal).

## Cómo funciona
Este es un ejemplo de máscara inválida (que se hizo con un esfuerzo perezoso mediante una simple copia de la imagen):

![lazyFront](screenshots/Tools/console/LazyFix/example_src1.gif) ![lazyBack](screenshots/Tools/console/LazyFix/example_src1m.gif)

Después del procesamiento, obtendrá el siguiente resultado:

![lazyFront](screenshots/Tools/console/LazyFix/example_src1.gif) ![lazyBack](screenshots/Tools/console/LazyFix/example_dst1m.gif)

Para el sprite basado en máscara de bits adecuado, la máscara define el nivel de transparencia de píxeles y nunca debe contener la
copia del sprite original.

## Uso
Esta es una utilidad de consola. Para usarlo, debe ejecutar la Terminal en el directorio donde se encuentra el ejecutable LazyFixTool
situado. Alternativamente, puede usar esta utilidad desde sus scripts y utilidades y ejecutar esta utilidad externamente.
 
```
USAGE: 

   ./LazyFixTool  [-O </path/to/output/directory/>] [-w] [-d] [-n] [--]
                  [--version] [-h] <Input file path(s)> ...


Where: 

   -O </path/to/output/directory/>,  --output </path/to/output/directory/>
     path to a directory where the fixed images will be saved

   -w,  --dig-recursive-old
     Look for images in subdirectories [deprecated]

   -d,  --dig-recursive
     Look for images in subdirectories

   -n,  --no-backup
     Don't create backup

   --,  --ignore_rest
     Ignores the rest of the labeled arguments following this flag.

   --version
     Displays version information and exits.

   -h,  --help
     Displays usage information and exits.

   <Input file path(s)>  (accepted multiple times)
     (required)  Input GIF file(s)

```
