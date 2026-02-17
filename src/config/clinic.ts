export const clinic = {
  name: "Instalaciones Iván Ramos",
  logo: "/images/logo.png",
  tagline: "Electricista y fontanero en Albacete - Servicio rápido",
  description: "Instalaciones Iván Ramos es tu electricista y fontanero de confianza en Albacete. Con 5 estrellas y 63 reseñas en Google, ofrecemos servicio inmediato en instalaciones eléctricas, fontanería, reformas integrales, climatización y cerrajería. Profesionales serios, rápidos y con precios razonables que se desplazan a tu domicilio para solucionar cualquier avería o realizar tu proyecto.",
  colors: {
    primary: "#fb0e03",
    secondary: "#4b0401",
    accent: "#c90a00",
    neutral: "#ffeceb"
  },
  phone: "608 99 89 57",
  whatsapp: "+34608998957",
  whatsappMessage: "Hola, me gustaría solicitar presupuesto para un trabajo en mi domicilio.",
  email: "",
  address: {
    street: "Calle Dr. Collado Piña, 95, 02003 Albacete, España",
    city: "Albacete",
    province: "Toledo",
    postalCode: "02003",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=2936317496059370610&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Instalaciones%20Iv%C3%A1n%20Ramos%20%4038.9875%2C-1.86315&z=16&output=embed",
  coordinates: {
    lat: 38.9875,
    lng: -1.86315
  },
  schedule: [
    {
      days: "lunes - miércoles",
      hours: "8:00–21:00"
    },
    {
      days: "jueves",
      hours: "8:00–20:00"
    },
    {
      days: "viernes",
      hours: "8:00–14:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 63,
    url: "https://maps.google.com/?cid=2936317496059370610&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Raúl Plá",
        rating: 5,
        text: "Contactamos con Ivan debido a sus buenas reseñas en internet y fue todo un acierto. Un magnífico profesional, buena comunicación en todo momento y muy agradable.",
        date: "Hace 6 meses"
      },
      {
        author: "Alberto Grande",
        rating: 5,
        text: "Electricista de los que ya van quedando pocos... Iván es serio, rápido, sus precios son razonables y encima, es buena gente. Lo recomiendo 100%.",
        date: "Hace 4 meses"
      },
      {
        author: "Ricardo Moreno",
        rating: 5,
        text: "100% recomendable. Nosotros quedamos encantados con él. Demostró ser muy profesional, eficaz y rápido.",
        date: "Hace 5 meses"
      },
      {
        author: "Agrado Podio",
        rating: 5,
        text: "Iván fontanero super rápido muy forman muy contento lo recomiendo una maquina",
        date: "Hace 3 semanas"
      },
      {
        author: "Jesus Valero",
        rating: 5,
        text: "100% recomendable.\nUn gran profesional , rápido y eficaz.",
        date: "Hace 3 meses"
      }
    ]
  },
  services: [
    {
      id: "electricidad",
      name: "Instalaciones Eléctricas",
      description: "Realizamos todo tipo de instalaciones eléctricas nuevas y reparación de averías en tu hogar o negocio. Montaje y reparación de cuadros eléctricos, cambio de mecanismos, iluminación LED y emisión de boletines eléctricos. Trabajo profesional con materiales homologados y cumplimiento normativo.",
      benefits: [
        "Reparación de averías eléctricas urgentes",
        "Instalación de cuadros eléctricos y automatismos",
        "Boletines eléctricos certificados"
      ],
      icon: "Zap"
    },
    {
      id: "fontaneria",
      name: "Fontanería Urgente",
      description: "Servicio rápido de fontanería para reparación de fugas, instalación de grifería, calentadores y calderas. Desatascos de tuberías, cambio de sanitarios y solución de cualquier problema de fontanería. Atendemos emergencias con desplazamiento inmediato.",
      benefits: [
        "Reparación urgente de fugas y goteos",
        "Instalación de calentadores y calderas",
        "Desatascos y limpieza de tuberías"
      ],
      icon: "Droplet"
    },
    {
      id: "reformas",
      name: "Reformas Integrales",
      description: "Reformas completas de cocinas, baños y viviendas llave en mano. Nos encargamos de todo el proyecto desde el diseño hasta los acabados finales, con coordinación de todos los gremios. Presupuesto cerrado sin sorpresas y plazos de entrega garantizados.",
      benefits: [
        "Reforma completa sin preocupaciones",
        "Presupuesto cerrado desde el inicio",
        "Coordinación de todos los trabajos"
      ],
      icon: "Hammer"
    },
    {
      id: "climatizacion",
      name: "Climatización",
      description: "Instalación y reparación de sistemas de aire acondicionado y calefacción. Montaje de splits, equipos de conductos, calderas de gas y sistemas de aerotermia. Mantenimiento preventivo y reparación de averías para que tu sistema funcione siempre de forma eficiente.",
      benefits: [
        "Instalación de aire acondicionado y calefacción",
        "Reparación rápida de averías",
        "Mantenimiento y puesta a punto"
      ],
      icon: "Wind"
    },
    {
      id: "pintura",
      name: "Pintura y Decoración",
      description: "Servicio profesional de pintura interior y exterior para tu hogar o negocio. Alisado de paredes, empapelados, efectos decorativos y tratamiento de humedades. Trabajamos con pinturas de máxima calidad y dejamos tu espacio impecable con protección de muebles y limpieza final.",
      benefits: [
        "Pintura interior y exterior de calidad",
        "Tratamiento de humedades y alisados",
        "Limpieza total al finalizar"
      ],
      icon: "Paintbrush"
    },
    {
      id: "cerrajeria",
      name: "Cerrajería 24h",
      description: "Servicio de cerrajería urgente para apertura de puertas, cambio de cerraduras y bombines de seguridad. Instalación de sistemas de control de acceso, puertas blindadas y acorazadas. Disponibilidad inmediata para emergencias y bloqueos.",
      benefits: [
        "Apertura de puertas sin daños",
        "Cambio de cerraduras y bombines",
        "Servicio urgente 24 horas"
      ],
      icon: "Key"
    },
    {
      id: "averias",
      name: "Reparación de Averías",
      description: "Atendemos todo tipo de averías domésticas urgentes: eléctricas, de fontanería, electrodomésticos y más. Diagnóstico rápido del problema y solución inmediata con desplazamiento a tu domicilio. Servicio profesional para que vuelvas a la normalidad cuanto antes.",
      benefits: [
        "Diagnóstico rápido y preciso",
        "Solución inmediata de averías",
        "Desplazamiento a domicilio"
      ],
      icon: "Zap"
    },
    {
      id: "mantenimiento",
      name: "Mantenimiento del Hogar",
      description: "Servicio integral de mantenimiento para tu vivienda o comunidad de vecinos. Revisiones periódicas de instalaciones eléctricas, fontanería, climatización y elementos comunes. Prevención de averías y mayor durabilidad de tus instalaciones.",
      benefits: [
        "Revisiones preventivas periódicas",
        "Ahorro en reparaciones futuras",
        "Mayor vida útil de instalaciones"
      ],
      icon: "Hammer"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta por teléfono",
      description: "Llámanos al 608 99 89 57 o escríbenos por WhatsApp. Cuéntanos qué necesitas: avería urgente, instalación nueva o reforma. Te atendemos personalmente y con buena comunicación desde el primer momento."
    },
    {
      step: 2,
      title: "Visita y presupuesto cerrado",
      description: "Nos desplazamos a tu domicilio en Albacete para valorar el trabajo personalmente. Te damos un presupuesto detallado y cerrado sin sorpresas, con precios razonables y explicación clara de todo lo que incluye."
    },
    {
      step: 3,
      title: "Ejecución rápida y profesional",
      description: "Realizamos el trabajo de forma eficaz y rápida, con materiales de calidad y acabados profesionales. Protegemos tu hogar, trabajamos con limpieza y te mantenemos informado en todo momento del avance."
    },
    {
      step: 4,
      title: "Garantía y factura",
      description: "Entregamos el trabajo terminado, limpio y funcionando perfectamente. Te damos factura detallada y garantía de todos nuestros trabajos. Seguimiento posterior para asegurar tu total satisfacción."
    }
  ],
  whyUs: [
    {
      title: "5 estrellas en Google con 63 reseñas",
      description: "Nuestros clientes nos avalan con una valoración perfecta de 5 estrellas. Destacan nuestra rapidez, profesionalidad, precios razonables y trato agradable. Somos electricistas y fontaneros de los que ya van quedando pocos: serios, eficaces y de confianza total.",
      icon: "Star"
    },
    {
      title: "Servicio rápido y eficaz",
      description: "La rapidez es una de nuestras señas de identidad según nuestros clientes. Atendemos urgencias con desplazamiento inmediato, diagnosticamos el problema rápidamente y lo solucionamos de forma eficaz. No te hacemos esperar ni damos largas innecesarias.",
      icon: "Clock"
    },
    {
      title: "Profesional serio y de confianza",
      description: "Iván es un profesional serio que mantiene buena comunicación en todo momento. Cumplimos los plazos acordados, trabajamos con limpieza y respeto por tu hogar, y nos responsabilizamos totalmente de cada trabajo. Puedes confiar en nosotros sin preocupaciones.",
      icon: "Award"
    },
    {
      title: "Precios razonables y transparentes",
      description: "Ofrecemos precios justos y razonables sin renunciar a la calidad del servicio. Presupuestos cerrados sin sorpresas, explicación clara de cada partida y factura detallada. Buena relación calidad-precio que nuestros clientes valoran y recomiendan.",
      icon: "CheckCircle"
    }
  ],
  team: [
    {
      name: "Iván Ramos",
      role: "Electricista y Fontanero",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales del hogar comprometidos con la calidad. En Instalaciones Iván Ramos resolvemos cualquier problema de tu casa con rapidez, garantía y precios justos."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Instalaciones Iván Ramos - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Instalaciones Iván Ramos - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Instalaciones Iván Ramos - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Instalaciones Iván Ramos - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Instalaciones Iván Ramos - Imagen 5"
    },
    {
      src: "/images/hero.webp",
      alt: "Instalaciones Iván Ramos - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Instalaciones Iván Ramos - Imagen 7"
    }
  ],
  faq: [
    {
      question: "¿Cuánto tarda Instalaciones Iván Ramos en atender una urgencia?",
      answer: "Atendemos urgencias con la máxima rapidez posible. Nuestros clientes destacan que somos muy rápidos y eficaces en sus reseñas. Cuando nos llamas al 608 99 89 57, evaluamos tu caso y nos desplazamos inmediatamente si es una avería urgente. En la mayoría de casos podemos estar en tu domicilio en Albacete el mismo día."
    },
    {
      question: "¿Qué zona de Albacete cubre el servicio?",
      answer: "Instalaciones Iván Ramos ofrece servicio a domicilio en toda la ciudad de Albacete y alrededores. Nos desplazamos sin problema a cualquier punto para realizar tanto trabajos urgentes como proyectos planificados. Llámanos y confirmamos disponibilidad en tu zona específica."
    },
    {
      question: "¿Cómo son los precios de Instalaciones Iván Ramos?",
      answer: "Nuestros precios son razonables y competitivos, como destacan nuestros clientes en las 63 reseñas de 5 estrellas en Google. Siempre damos presupuesto cerrado antes de empezar cualquier trabajo, sin sorpresas ni costes ocultos. Te explicamos claramente qué incluye cada partida y trabajamos con total transparencia."
    },
    {
      question: "¿Qué servicios ofrece además de electricidad y fontanería?",
      answer: "Aunque somos especialistas en electricidad y fontanería, en Instalaciones Iván Ramos ofrecemos un servicio integral para tu hogar: reformas completas, climatización, pintura, cerrajería y mantenimiento general. Esto nos permite resolver cualquier necesidad de tu vivienda con un único profesional de confianza, coordinando todos los trabajos necesarios."
    },
    {
      question: "¿Emiten boletines eléctricos y certificados?",
      answer: "Sí, emitimos todos los boletines eléctricos y certificados necesarios para legalizar tus instalaciones. Realizamos el trabajo cumpliendo toda la normativa vigente y tramitamos la documentación oficial. Es fundamental para la seguridad de tu hogar y para cumplir con las exigencias legales."
    },
    {
      question: "¿Por qué tiene tan buenas reseñas en Google?",
      answer: "Instalaciones Iván Ramos tiene 5 estrellas con 63 reseñas en Google porque trabajamos con seriedad, rapidez y profesionalidad. Nuestros clientes destacan la buena comunicación, los precios razonables, la eficacia y el trato agradable. Nos importa que cada cliente quede 100% satisfecho y lo recomendamos con orgullo a sus conocidos."
    },
    {
      question: "¿Dan garantía de los trabajos realizados?",
      answer: "Sí, todos nuestros trabajos incluyen garantía por escrito. Utilizamos materiales de calidad homologados y realizamos las instalaciones siguiendo las mejores prácticas profesionales. Si surge cualquier problema relacionado con nuestro trabajo, lo solucionamos sin coste adicional. Además emitimos factura detallada de todos los servicios."
    },
    {
      question: "¿Puedo pedir presupuesto sin compromiso?",
      answer: "Por supuesto, puedes solicitar presupuesto sin ningún compromiso. Llama al 608 99 89 57 y nos desplazamos a tu domicilio en Albacete para valorar el trabajo personalmente. Te damos un presupuesto detallado y cerrado, y tú decides si quieres que lo realicemos. No hay presión ni compromisos, solo profesionalidad y transparencia."
    }
  ],
  seo: {
    titleTemplate: "%s | Instalaciones Iván Ramos",
    defaultTitle: "Electricista y Fontanero en Albacete | Iván Ramos",
    defaultDescription: "Electricista y fontanero profesional en Albacete. Servicio urgente a domicilio, reformas, climatización y cerrajería. 5★ en Google. Llama al 608 99 89 57",
    keywords: [
      "electricista Albacete",
      "fontanero Albacete",
      "Instalaciones Iván Ramos",
      "electricista urgente Albacete",
      "fontanero urgente Albacete",
      "reformas Albacete",
      "instalaciones eléctricas Albacete",
      "reparación fontanería Albacete",
      "climatización Albacete",
      "cerrajero Albacete",
      "electricista a domicilio Albacete",
      "fontanero 24 horas Albacete"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Instalaciones Iván Ramos",
    cif: "",
    registeredAddress: "Calle Dr. Collado Piña, 95, 02003 Albacete, España, Albacete, Toledo"
  },
  heroHeadline: [
    "Tu Profesional del",
    "Hogar",
    "en Albacete"
  ],
  heroDescription: "Electricista y fontanero profesional en Albacete con servicio a domicilio inmediato. Especialistas en reparaciones urgentes, instalaciones eléctricas, fontanería y reformas completas. Atención personalizada, presupuestos cerrados y trabajo garantizado.",
  specialty: "Electricidad y Fontanería",
  ctaLabel: "Tu Hogar",
  ctaHeadline: "¿Necesitas un electricista o fontanero ahora?",
  ctaDescription: "Llámanos al 608 99 89 57 y solucionamos tu problema hoy mismo. Servicio rápido, profesional y con garantía en Albacete.",
  statsLabel: "Trabajos",
  schemaType: "HomeAndConstructionBusiness",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Lo que hacemos por ti",
    servicesDescription: "Soluciones profesionales para tu vehículo y hogar con garantía y precios transparentes.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu presupuesto en 4 pasos",
    processDescription: "Un proceso claro y transparente para tu tranquilidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Confianza y profesionalidad",
    whyUsDescription: "Profesionales certificados, precios sin sorpresas y garantía en todos nuestros trabajos.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros clientes",
    galleryLabel: "Trabajos",
    galleryTitle: "Nuestros trabajos realizados",
    galleryDescription: "Ejemplos de trabajos que hemos realizado para nuestros clientes",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros clientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales cualificados",
    teamDescription: "Experiencia y compromiso al servicio de nuestros clientes"
  }
}

export type Clinic = typeof clinic
