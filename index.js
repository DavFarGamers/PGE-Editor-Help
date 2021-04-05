let docuteSourceRoot = './';

new Docute({
    target: '#docute',
    title: 'Moondust Editor - Documentation',
    sourcePath: docuteSourceRoot,
    darkThemeToggler: true,
    fetchOptions: {
        mode: 'no-cors',
    },
    detectSystemDarkTheme: true,
    highlight: ['typescript', 'bash'],
    editLinkBase: 'https://github.com/WohlSoft/PGE-Editor-Help/edit/master/',
    editLinkText: 'Edit this page on GitHub',
    componentMixins: [
        {
            data() {
                return {
                    builtinLanguages: {
                        "javascript": "clike",
                        "actionscript": "javascript",
                        "arduino": "cpp",
                        "aspnet": [
                            "markup",
                            "csharp"
                        ],
                        "bison": "c",
                        "c": "clike",
                        "csharp": "clike",
                        "cpp": "c",
                        "coffeescript": "javascript",
                        "crystal": "ruby",
                        "css-extras": "css",
                        "d": "clike",
                        "dart": "clike",
                        "django": "markup",
                        "erb": [
                            "ruby",
                            "markup-templating"
                        ],
                        "fsharp": "clike",
                        "flow": "javascript",
                        "glsl": "clike",
                        "go": "clike",
                        "groovy": "clike",
                        "haml": "ruby",
                        "handlebars": "markup-templating",
                        "haxe": "clike",
                        "java": "clike",
                        "jolie": "clike",
                        "kotlin": "clike",
                        "less": "css",
                        "markdown": "markup",
                        "markup-templating": "markup",
                        "n4js": "javascript",
                        "nginx": "clike",
                        "objectivec": "c",
                        "opencl": "cpp",
                        "parser": "markup",
                        "php": [
                            "clike",
                            "markup-templating"
                        ],
                        "php-extras": "php",
                        "plsql": "sql",
                        "processing": "clike",
                        "protobuf": "clike",
                        "pug": "javascript",
                        "qore": "clike",
                        "jsx": [
                            "markup",
                            "javascript"
                        ],
                        "tsx": [
                            "jsx",
                            "typescript"
                        ],
                        "reason": "clike",
                        "ruby": "clike",
                        "sass": "css",
                        "scss": "css",
                        "scala": "java",
                        "smarty": "markup-templating",
                        "soy": "markup-templating",
                        "swift": "clike",
                        "tap": "yaml",
                        "textile": "markup",
                        "tt2": [
                            "clike",
                            "markup-templating"
                        ],
                        "twig": "markup",
                        "typescript": "javascript",
                        "vbnet": "basic",
                        "velocity": "markup",
                        "wiki": "markup",
                        "xeora": "markup",
                        "xquery": "markup",
                        "builtin": [
                            "markup",
                            "xml",
                            "html",
                            "mathml",
                            "svg",
                            "css",
                            "clike",
                            "javascript",
                            "js"
                        ]
                    }
                }
            }
        }
    ],
    nav: [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'FAQ',
            link: 'https://wohlsoft.ru/pgewiki/Frequently_Asked_Questions'
        },
        {
            title: 'GitHub repository',
            link: 'https://github.com/WohlSoft/PGE-Project'
        },
        {
            title: 'Moondust',
            link: 'https://wohlsoft.ru/PGE'
        }
    ],
    sidebar: [
        {
            title: 'Main',
            children: [
                {
                    title: 'Intro',
                    link: '/'
                }
            ]
        },
        {
            title: 'Getting started',
            children: [
                {
                    title: 'Quick Start',
                    link: '/Intro/QuickStart',
                },
                {
                    title: 'About',
                    link: '/Intro/About'
                }
            ]
        },
        {
            title: "Quick start",
            children: [
                {
                    title: 'What is Moondust Editor?',
                    link: '/Intro/QuickStart/WhatIsEditor'
                },
                {
                    title: 'How to make levels',
                    link: '/Intro/QuickStart/HowToMakeLevels'
                },
                {
                    title: 'How to make world maps',
                    link: '/Intro/QuickStart/HowToMakeWorlds'
                }
            ]
        },
        {
            collapsable: true,
            title: "Editing",
            children: [
                {
                    title: 'Items placing',
                    link: '/Editing/Placing'
                },
                {
                    title: 'Items removing',
                    link: '/Editing/RemoveItems'
                },
                {
                    title: 'Context menu',
                    link: '/Editing/ContextMenu'
                },
                {
                    title: 'Item Properties',
                    link: '/Editing/ItemProperties'
                },
                {
                    title: 'Search',
                    link: '/Editing/Search'
                }
            ]
        },
        {
            collapsable: true,
            title: 'Editor GUI',
            children: [
                {
                    title: 'Toolboxes, Toolbars, panels',
                    link: '/EditorUI/Tools'
                },
                {
                    title: 'Switch application language',
                    link: '/EditorUI/Language'
                },
                {
                    title: 'History (Undo/Redo)',
                    link: '/EditorUI/HistoryManager'
                },
                {
                    title: 'Clipboard',
                    link: '/EditorUI/Clipboard'
                },
                {
                    title: 'Document view',
                    link: '/EditorUI/SubWindow'
                },
                {
                    title: 'Menu bar',
                    link: '/EditorUI/Menubar'
                },
                {
                    title: 'Hot keys',
                    link: '/EditorUI/HotKeys'
                }
            ]
        },
        {
            collapsable: true,
            title: 'Level editing',
            children: [
                {
                    title: 'About',
                    link: '/EditLevel/About'
                },
                {
                    title: 'Set level title',
                    link: '/EditLevel/SetTitle'
                },
                {
                    title: 'Sections',
                    link: '/EditLevel/Sections'
                },
                {
                    title: 'Item browser',
                    link: '/EditLevel/ItemBrowser'
                },
                {
                    title: 'Level Items',
                    link: '/EditLevel/Items'
                },
                {
                    title: 'Layers',
                    link: '/EditLevel/Layers'
                },
                {
                    title: 'Events',
                    link: '/EditLevel/Events'
                },
                {
                    title: 'Items placing',
                    link: '/Editing/Placing'
                },
                {
                    title: 'Items removing',
                    link: '/Editing/RemoveItems'
                },
                {
                    title: 'Context menu',
                    link: '/EditLevel/ContextMenu'
                },
                {
                    title: 'Properties box',
                    link: '/EditLevel/PropertiesBox'
                },
                {
                    title: 'Item search',
                    link: '/Editing/Search'
                },
                {
                    title: 'Testing',
                    link: '/EditLevel/Testing.md'
                }
            ]
        },
        {
            title: 'World map editing',
            children: [
                {
                    title: 'About',
                    link: '/EditWorld/About'
                },
                {
                    title: 'World Settings',
                    link: '/EditWorld/WorldSettings'
                },
                {
                    title: 'Item Toolbox',
                    link: '/EditWorld/ItemToolbox'
                },
                {
                    title: 'Items',
                    link: '/EditWorld/Items'
                },
                {
                    title: 'Context Menu',
                    link: '/EditWorld/ContextMenu'
                },
                {
                    title: 'Placing tools',
                    link: '/Editing/Placing'
                },
                {
                    title: 'Remove items',
                    link: '/Editing/RemoveItems'
                },
            ]
        },
        {
            title: 'Custom NPC configuration editing',
            children: [
                {
                    title: 'What is NPC.txt?',
                    link: '/EditNPCConfiguration/About'
                },
                {
                    title: 'NPC.txt Editor features',
                    link: '/EditNPCConfiguration/EditorFeature'
                }
            ]
        },
        {
            title: 'Customizing',
            children: [
                {
                    title: 'How to use custom graphics',
                    link: '/Customizing/CustomGraphics'
                },
                {
                    title: 'Music and SFX formats',
                    link: '/Customizing/CustomAudio'
                },
                {
                    title: 'Bit masks (for Vanilla SMBX)',
                    link: '/Customizing/BitMasks'
                },
                {
                    title: 'Editor Themes',
                    link: '/Customizing/EditorThemes'
                }
            ]
        },
        {
            title: 'Configurations',
            children: [
                {
                    title: 'Configuration manager',
                    link: '/Configuration/ConfigManager'
                }
            ]
        },
        {
            title: 'Tools',
            children: [
                {
                    title: 'Application settings',
                    link: '/Tools/ApplicationSettings'
                },
                {
                    title: 'Development console',
                    link: '/Tools/DevConsole'
                },
                {
                    title: 'Debugger',
                    link: '/Tools/Debugger'
                },
                {
                    title: 'Tileset item box',
                    link: '/Tools/TilesetBox'
                },
                {
                    title: 'Custom data helper tools',
                    link: '/Tools/CustomData'
                }
            ]
        },
        {
            title: 'Console tools',
            children: [
                {
                    title: 'GIFs2PNG',
                    link: '/Tools/Console/GIFs2PNG'
                },
                {
                    title: 'PNG2GIFs',
                    link: '/Tools/Console/PNG2GIFs'
                },
                {
                    title: 'PaletteFilter',
                    link: '/Tools/Console/PaletteFilter'
                },
                {
                    title: 'LazyFixTool',
                    link: '/Tools/Console/LazyFixTool'
                }
            ]
        },
        {
            title: 'FAQ',
            link: 'https://wohlsoft.ru/pgewiki/Frequently_Asked_Questions'
        },
        {
            title: 'License',
            link: '/GPLv3'
        },
        {
            title: 'Our friends',
            children: [
                {
                    title: 'Hedgewars',
                    link: 'http://hedgewars.org/'
                },
                {
                    title: 'Talkhaus',
                    link: 'http://talkhaus.raocow.com/'
                }
            ]
        }
    ],
    overrides: {
        '/': {
            language: 'English'
        },
        '/es/' : {
            language: 'Español',
            editLinkText: 'Edita esta página en GitHub ',
            sidebar: [
                {
                    title: 'Principal',
                    children: [
                        {
                            title: 'Intro',
                            link: '/es/'
                        }
                    ]
                },
                {
                    title: 'Empezando',
                    children: [
                        {
                            title: 'Inicio rápido',
                            link: '/es/Intro/QuickStart',
                        },
                        {
                            title: 'Acerca de',
                            link: '/es/Intro/About'
                        }
                    ]
                },
                {
                    title: "Inicio rápido",
                    children: [
                        {
                            title: '¿Qué es Moondust Editor?',
                            link: '/es/Intro/QuickStart/WhatIsEditor'
                        },
                        {
                            title: 'Cómo hacer niveles',
                            link: '/es/Intro/QuickStart/HowToMakeLevels'
                        },
                        {
                            title: 'Cómo hacer mapas del mundo',
                            link: '/es/Intro/QuickStart/HowToMakeWorlds'
                        }
                    ]
                },
                {
                    collapsable: true,
                    title: "Edición",
                    children: [
                        {
                            title: 'Colocación de artículos',
                            link: '/es/Editing/Placing'
                        },
                        {
                            title: 'Eliminacion de elementos',
                            link: '/es/Editing/RemoveItems'
                        },
                        {
                            title: 'Menú de contexto',
                            link: '/es/Editing/ContextMenu'
                        },
                        {
                            title: 'Propiedades del artículo',
                            link: '/es/Editing/ItemProperties'
                        },
                        {
                            title: 'Búsqueda',
                            link: '/es/Editing/Search'
                        }
                    ]
                },
                {
                    collapsable: true,
                    title: 'Editor GUI',
                    children: [
                        {
                            title: 'Cajas de herramientas, barras de herramientas, paneles',
                            link: '/es/EditorUI/Tools'
                        },
                        {
                            title: 'Cambiar el idioma de la aplicación',
                            link: '/es/EditorUI/Language'
                        },
                        {
                            title: 'Historial (deshacer/rehacer)',
                            link: '/es/EditorUI/HistoryManager'
                        },
                        {
                            title: 'Portapapeles',
                            link: '/es/EditorUI/Clipboard'
                        },
                        {
                            title: 'Vista de documento',
                            link: '/es/EditorUI/SubWindow'
                        },
                        {
                            title: 'Barra de menús',
                            link: '/es/EditorUI/Menubar'
                        },
                        {
                            title: 'Teclas de acceso rápido',
                            link: '/es/EditorUI/HotKeys'
                        }
                    ]
                },
                {
                    collapsable: true,
                    title: 'Edición de nivel',
                    children: [
                        {
                            title: 'Acerca de',
                            link: '/es/EditLevel/About'
                        },
                        {
                            title: 'Establecer título de nivel',
                            link: '/es/EditLevel/SetTitle'
                        },
                        {
                            title: 'Secciones',
                            link: '/es/EditLevel/Sections'
                        },
                        {
                            title: 'Explorador de artículos',
                            link: '/es/EditLevel/ItemBrowser'
                        },
                        {
                            title: 'Elementos de nivel',
                            link: '/es/EditLevel/Items'
                        },
                        {
                            title: 'Capas',
                            link: '/es/EditLevel/Layers'
                        },
                        {
                            title: 'Eventos',
                            link: '/es/EditLevel/Events'
                        },
                        {
                            title: 'Colocación de artículos',
                            link: '/es/Editing/Placing'
                        },
                        {
                            title: 'Eliminacion de elementos',
                            link: '/es/Editing/RemoveItems'
                        },
                        {
                            title: 'Menú de contexto',
                            link: '/es/EditLevel/ContextMenu'
                        },
                        {
                            title: 'Cuadro de propiedades',
                            link: '/es/EditLevel/PropertiesBox'
                        },
                        {
                            title: 'Búsqueda de artículos',
                            link: '/es/Editing/Search'
                        },
                        {
                            title: 'Pruebas',
                            link: '/es/EditLevel/Testing.md'
                        }
                    ]
                },
                {
                    title: 'Edición de mapas del mundo',
                    children: [
                        {
                            title: 'Acerca de',
                            link: '/es/EditWorld/About'
                        },
                        {
                            title: 'Configuración mundo',
                            link: '/es/EditWorld/WorldSettings'
                        },
                        {
                            title: 'Caja de herramientas de artículos',
                            link: '/es/EditWorld/ItemToolbox'
                        },
                        {
                            title: 'Artículos',
                            link: '/es/EditWorld/Items'
                        },
                        {
                            title: 'Menú de contexto',
                            link: '/es/EditWorld/ContextMenu'
                        },
                        {
                            title: 'Colocación de herramientas',
                            link: '/es/Editing/Placing'
                        },
                        {
                            title: 'Eliminar elementos',
                            link: '/es/Editing/RemoveItems'
                        },
                    ]
                },
                {
                    title: 'Edición de configuración personalizada de NPC',
                    children: [
                        {
                            title: '¿Qué es NPC.txt?',
                            link: '/es/EditNPCConfiguration/About'
                        },
                        {
                            title: 'Funciones del editor de texto NPC',
                            link: '/es/EditNPCConfiguration/EditorFeature'
                        }
                    ]
                },
                {
                    title: 'Personalización',
                    children: [
                        {
                            title: 'Cómo utilizar gráficos personalizados',
                            link: '/es/Customizing/CustomGraphics'
                        },
                        {
                            title: 'Formatos de música y SFX',
                            link: '/es/Customizing/CustomAudio'
                        },
                        {
                            title: 'Máscaras de bits (para Vanilla SMBX)',
                            link: '/es/Customizing/BitMasks'
                        },
                        {
                            title: 'Temas del editor',
                            link: '/es/Customizing/EditorThemes'
                        }
                    ]
                },
                {
                    title: 'Configuraciones',
                    children: [
                        {
                            title: 'Gerente de configuración',
                            link: '/es/Configuration/ConfigManager'
                        }
                    ]
                },
                {
                    title: 'Herramientas',
                    children: [
                        {
                            title: 'Configuraciones de la aplicación',
                            link: '/es/Tools/ApplicationSettings'
                        },
                        {
                            title: 'Consola de desarrollo',
                            link: '/es/Tools/DevConsole'
                        },
                        {
                            title: 'Depurador',
                            link: '/es/Tools/Debugger'
                        },
                        {
                            title: 'Caja de elementos de mosaico',
                            link: '/es/Tools/TilesetBox'
                        },
                        {
                            title: 'Herramientas de ayuda de datos personalizadas',
                            link: '/es/Tools/CustomData'
                        }
                    ]
                },
                {
                    title: 'Herramientas de consola',
                    children: [
                        {
                            title: 'GIFs2PNG',
                            link: '/es/Tools/Console/GIFs2PNG'
                        },
                        {
                            title: 'PNG2GIFs',
                            link: '/es/Tools/Console/PNG2GIFs'
                        },
                        {
                            title: 'PaletteFilter',
                            link: '/es/Tools/Console/PaletteFilter'
                        },
                        {
                            title: 'LazyFixTool',
                            link: '/es/Tools/Console/LazyFixTool'
                        }
                    ]
                },
                {
                    title: 'Preguntas más frecuentes',
                    link: 'https://wohlsoft.ru/pgewiki/Frequently_Asked_Questions'
                },
                {
                    title: 'Licencia',
                    link: '/GPLv3'
                },
                {
                    title: 'Nuestros amigos',
                    children: [
                        {
                            title: 'Hedgewars',
                            link: 'http://hedgewars.org/'
                        },
                        {
                            title: 'Talkhaus',
                            link: 'http://talkhaus.raocow.com/'
                        }
                    ]
                }
            ]
        }
    }
});

Vue.component('ReverseText', {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    template: `
    <div class="reverse-text">
      {{ reversedText }}
      <v-style>
      .reverse-text {
        border: 1px solid var(--border-color);
        padding: 20px;
        font-weight: bold;
        border-radius: 4px;
      }
      </v-style>
    </div>
  `,
    computed: {
        reversedText() {
            return this.text
                .split('')
                .reverse()
                .join('')
        }
    }
});
