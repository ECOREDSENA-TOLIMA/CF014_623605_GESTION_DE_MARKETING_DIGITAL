export default {
  global: {
    componenteFormativo: 'Estrategias en <em>marketing online</em>',
    descripcionCurso:
      'El <em>Marketing</em> Digital es fundamental en el desarrollo y crecimiento de las organizaciones, toda vez que permite la consolidación de la información por medio de su tratamiento y el establecimiento de una hoja de ruta que permita aprovechar las herramientas tecnológicas, para el logro de los objetivos trazados y genere más clientes, ventas y utilidades.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La campaña de <em>marketing online</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Valor de vida de un cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'La tasa de conversión',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de <em>marketing online</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Análisis del entorno',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Definición de objetivos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diseño de estrategias y tácticas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Control y seguimiento',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Presupuesto',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Inbound</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. La campaña de <em>marketing online</em>',
      referencia:
        'Aprendamos Marketing. (2019). Cómo Calcular el Costo de Adquisición al Cliente | Calcular el CAC y LTV. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/y0vBAo0AA1k',
    },
    {
      tema: '2. Plan de <em>marketing online</em>',
      referencia:
        'Convierte más con Vilma Núñez (2021). ¿Cómo hacer un plan de <em>marketing</em>? [Video] YouTube. Youtube',
      tipo: 'Video',
      link: 'https://youtu.be/4bJh41Rerp8',
    },
    {
      tema: '3. <em>Inbound</em>',
      referencia:
        'InboundCycle - <em>Marketing</em> y ventas <em>inbound</em> (2018). <em>Inbound marketing:</em> etapas y metodología. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/hQb5_ZCx08U',
    },
  ],
  glosario: [
    {
      termino: 'Análisis CAME',
      significado:
        'herramienta (Corregir, Afrontar, Mantener y Explotar) que complementa al análisis DAFO para poder establecer las guías de acción a partir de la información encontrada en la matriz FODA.',
    },
    {
      termino: 'Análisis DAFO',
      significado:
        'se utiliza para identificar y observar los factores internos y externos de un producto, servicio, lugar o persona (análisis de debilidades, amenazas, fortalezas y oportunidades).',
    },
    {
      termino: 'Análisis de las 5 fuerzas de Porter',
      significado:
        'modelo que establece un marco de análisis para el nivel de competencia y rivalidad en las empresas, y desarrolla estrategias de negocio para la competencia.',
    },
    {
      termino: 'Análisis PESTEL',
      significado:
        'herramienta de planeación estratégica que le permite a una empresa analizar los factores macroeconómicos del ambiente en el cual opera.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'es el proceso de definición y construcción de una marca mediante la gestión planificada de todos los procesos gráficos, comunicacionales y de posicionamiento que se llevan a cabo.',
    },
    {
      termino: 'Estrategias en <em>Marketing Online</em>',
      significado:
        'consecución de actos con las que un determinado departamento espera lograr sus objetivos de <strong><em>marketing</em></strong> a través de seleccionar un público objetivo al que quiere llegar.',
    },
    {
      termino: '<em>Marketing Online</em>',
      significado:
        'sistema para innovación, desarrollo y promoción continua de productos y servicios a un público seleccionado que utiliza Internet y los servicios comerciales en línea.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, D. (2020). Cómo las ventas por internet están salvando empresas en Colombia',
      link:
        'https://www.triario.co/blog/evolucion-ventas-por-internet-en-colombia',
    },
    {
      referencia:
        'Ancin, J. M. (2016). El Plan de <em>Marketing</em> en la Pyme. ESIC',
      link: '',
    },
    {
      referencia:
        'Arrieta, G. V. (2017). <em>Marketing</em> digital y su poder en la comunicación. Repositorio Institucional Universidad Santo Tomás.',
      link: '',
    },
    {
      referencia:
        'Deiss, R.; Henneberry, R. (2020). <em>Digital marketing for dummies.</em> John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Estrade, N. J. (2013). <em>Marketing</em> digital. <em>Marketing</em> digital: <em>marketing</em> móvil, SEO y analítica <em>web.</em> Difusora Larousse - Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Martínez, D. (2012). La elaboración del plan estratégico y su implementación. Análisis de entorno. Diaz Santos. Ortega, M. (2020). Herramientas del <em>marketing</em> digital que permiten desarrollar presencia online, analizar la <em>web,</em> conocer a la audiencia y mejorar los resultados de búsqueda. Revista Perspectivas, (45), 33-6',
      link: '',
    },
    {
      referencia:
        'Sainz, J. (2018). El plan de <em>marketing</em> digital en la práctica. Esic editorial.',
      link: '',
    },
    {
      referencia:
        'Sanmiguel, P. (2020). Influencer <em>Marketing:</em> Conecta tu marca con tu público. LID Editorial.',
      link: '',
    },
    {
      referencia:
        'Torres, E. (2020). Digitalízate ¿Por dónde empezar?: Cómo transformar tu empresa para la era digital. Penguin Random House Grupo Editorial Perú.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrea Carolina Vargas Serrato',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro de Industria y la Información',
        },
        {
          nombre: 'Adriana López',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
