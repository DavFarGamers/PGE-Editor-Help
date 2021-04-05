# Filtro de paleta
![PalleteFilter](screenshots/Tools/console/pallete_filter_128.png)

**Filtro de paleta**: una herramienta para la adjudicación de color de imágenes en la paleta de una imagen de referencia.

## Cómo funciona

Esta utilidad se puede utilizar para ajustar la paleta de cualquier imagen que tenga en la imagen de referencia dada que
contiene el conjunto de colores de su paleta.

Este es un ejemplo de la imagen de referencia que define la paleta de destino:

![Ref](screenshots/Tools/console/PalleteFilter/reference_example.png)

Esta es la imagen de origen antes del filtrado:

![Ref](screenshots/Tools/console/PalleteFilter/example_src.png)

Después de ejecutar la utilidad, obtendrá el siguiente resultado:

![Ref](screenshots/Tools/console/PalleteFilter/example_dst.png)


## Uso
Esta es una utilidad de consola. Para usarlo, debe ejecutar la Terminal en el directorio donde el ejecutable PaletteFilter
situado. Alternativamente, puede usar esta utilidad desde sus scripts y utilidades y ejecutar esta utilidad externamente.
```
USAGE: 

   ./PaletteFilter  [-O </path/to/output/directory/>] -P <pallete.png> [-w]
                    [-d] [-n] [--] [--version] [-h] <Input file path(s)>
                    ...


Where: 

   -O </path/to/output/directory/>,  --output </path/to/output/directory/>
     path to a directory where the fixed images will be saved

   -P <pallete.png>,  --pallete <pallete.png>
     (required)  Path to the reference PNG or GIF image file for a role of
     a pallete

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
     (required)  Input PNG file(s) (GIFs are not supported by this tool)
```

