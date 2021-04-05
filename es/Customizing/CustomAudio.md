# Soporte de formatos de música y sonido

El PGE admite los siguientes formatos de audio:

| Formato (común) | Descripción |
|---------|-------------|
| WAV | Microsoft PCM, audio sin comprimir (codificado), tiene soporte de bucle (by SMPL chunk). |
| VOC | Archivo de audio de Creative Labs (hardcoded). Compatible solo con SFX. |
| MP3 | MPEG-1/2 Layer 3, Audio comprimido con pérdida de datos.<br>**El uso de MP3 está anulado.** Este formato es inconveniente, daña la calidad, hace la compresión de manera ineficaz, no admite puntos de bucle en absoluto. Se sugiere usar el formato OGG en su lugar. Utilice la utilidad Maintainer para convertir sus archivos MP3 antiguos en OGG Vorbis. |
| OGG | OGG Vorbis, Audio comprimido con pérdida de datos (libOGG, libVorbis), tiene soporte de bucle (by LOOPSTART/LOOPEND/LOOPLENGTH meta tags, ademas LOOP_START y LOOP_END). |
| OPUS | OPUS, Audio comprimido con pérdida de datos (libOpus) (Se agregó soporte desde el 18, de junio de 2018), tiene soporte de bucle (by LOOPSTART/LOOPEND/LOOPLENGTH meta tags, ademas LOOP_START y LOOP_END). |
| FLAC | Códec de audio sin pérdida gratuito, Loss-less comprimido (libFLAC), tiene soporte de bucle(by LOOPSTART/LOOPEND/LOOPLENGTH meta tags, ademas LOOP_START y LOOP_END (Soporte para FLAC loop fue agregado desde el 17, de noviembre de 2019)). |
| MIDI | Interfaz digital de instrumentos musicales, lista de comandos (libADLMIDI, Timidity (hardcoded), Fluidsynth (Por lo general, no se construye con SDL Mixer X, pero es posible usarlo) ), tiene soporte de bucle (por loopStart/loopEnd markers y por CC111 like RPG Maker). |

| Formato (extra) | Descripción |
|---------|-------------|
| XMI | MIDI-like formato utilizado en la biblioteca AIL y ampliamente utilizado en muchos juegos de DOS. Solo se puede reproducir con sintetizadores ADLMIDI y OPNMIDI. Tiene soporte de bucle (por CC116 y CC117). |
| MUS | MIDI-like El formato utilizado en la biblioteca DMX y conocido por las series de juegos Doom y Raptor se utiliza en la biblioteca de sonido DMX. Se puede reproducir solo con sintetizadores ADLMIDI y OPNMIDI. |
| IMF | Archivo de música de Id-Software (solo funcionará si se activa el dispositivo MIDI ADLMIDI). Archivos IMF compatibles que tienen una longitud inicial y utilizan 700Hz de la tasa de ticks. (Sugerencia: si sus archivos IMF se reproducen con un tiempo incorrecto o se rechazan como archivos no válidos, debe usar esta utilidad para convertir la frecuencia y agregar automáticamente un fragmento de longitud al comienzo del archivo) . |
| CMF | Creative Music Format, Un archivo MIDI mezclado con instrumentos OPL2 FM, ampliamente utilizado en muchos juegos de DOS. Se puede reproducir solo con el sintetizador ADLMIDI. |

| Formato (Módulos de formatos de música) | Descripción |
|---------|-------------|
| 669 | Composer 669, Unis 669 |
| AMF | DSMI Advanced Module Format |
| AMF | ASYLUM Music Format V1.0 |
| APUN | APlayer |
| DSM | DSIK internal format |
| FAR | Farandole Composer |
| GDM | General DigiMusic |
| IT | Impulse Tracker |
| IMF | Imago Orpheus |
| MOD | 15 and 31 instruments |
| MED | OctaMED |
| MTM | MultiTracker Module editor |
| OKT | Amiga Oktalyzer |
| S3M | Scream Tracker 3 |
| STM | Scream Tracker |
| STX | Scream Tracker Music Interface Kit |
| ULT | UltraTracker |
| UNI | MikMod |
| XM | FastTracker 2 |

| Format (Game Music Emulators formats) | Description |
|---------|-------------|
| AY | ZX Spectrum/Amstrad CPC |
| GBS | Nintendo Game Boy |
| GYM | Sega Genesis / Mega Drive |
| HES | NEC TurboGraphx-16 / PC Engine |
| KSS | MSX Home Computer / Other Z80 systems (not supported FM Sound) |
| NSF | Nintendo NES/Famicom (with VRC 6, Namco 106) |
| NSFE | Nintendo NES/Famicom (with FME-7) |
| SAP | Atari systems using POKEY sound chip |
| SPC | Super Nintendo / Super Famicom |
| VGM | Sega Master System / MarkIII / Sega Genesis / Mega Drive / BBC Micro. |
| VGZ | Sega Master System / MarkIII / Sega Genesis / Mega Drive / BBC Micro. (Pre-compressed with GnuZIP) |
| IMF | Id-Software Music File, raw AdLib commands sequence. Required ADLMIDI be toggled! |
