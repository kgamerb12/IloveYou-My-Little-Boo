// =============================================
// PERSONALIZA LA PÁGINA AQUÍ
// =============================================
const CONFIG = {

  // Nombres
  miNombre:       "Kevin Zaid Barrón Pando",          // Tu nombre (aparece en la firma de la carta)
  nombrePareja:   "Alondra Berenice Arroyo Lozano",       // Nombre de tu pareja (aparece en el saludo de la carta)

  // Fecha y hora de inicio de la relación (ISO: "YYYY-MM-DDTHH:MM:SS")
  fechaInicio:    "2026-08-14T19:54:00",

  // Texto de la fecha para mostrarla de forma bonita
  fechaBonita:    "14 de agosto de 2026",
  horaBonita:     "7:54 P.M.",

  // Textos del HERO
  heroEyebrow:    "Para la persona que hace mis días más bonitos ❤️",
  heroTitulo:     "Tú y yo, nuestra historia",
  heroBtnTexto:   "Comenzar nuestra historia ✨",

  // Textos de la sección FECHA
  fechaCaption:   "Ese instante en que todo cambió.",
  counterCaption: "contigo, y son pocos comparados con los que nos faltan. 💙",

  // Encabezado de la sección PLAYLIST
  cancionHeading: "Una canción que me hace pensar en ti 🎵",

  // =============================================
  // PLAYLIST — agrega tantas canciones como quieras
  // =============================================
  // Cada canción necesita: titulo, artista, src (el nombre del archivo de
  // audio puesto en la misma carpeta que index.html, o una URL completa),
  // y opcionalmente "nota" (un mensajito corto) y "letra" (para el karaoke).
  //
  // LETRA: escribe un arreglo de líneas. Tienes 3 opciones:
  //  a) Dejarlo vacío [] si no quieres agregar letra todavía.
  //  b) Escribir solo el texto: las líneas se repartirán solas y de forma
  //     pareja a lo largo de la canción.
  //       letra: ["Primera línea", "Segunda línea", "Tercera línea"]
  //  c) Escribir el tiempo exacto en el que empieza cada línea, así:
  //       letra: ["[00:05] Primera línea", "[00:12] Segunda línea"]
  //     (minutos:segundos, con dos dígitos para los segundos)
  //
  // Nota sobre derechos de autor: no podemos escribir aquí la letra de
  // canciones reales por ti. Cópiala tú mismo de una fuente con la que
  // cuentes (el álbum, un cancionero, un sitio con licencia, etc.) y
  // pégala en el arreglo "letra" de la canción correspondiente.
  playlist: [
    {
      titulo: "Contigo",
      artista: "Los Panchos",
      src: "sound/contigo.mp3",
      nota: "Me recuerda al amor que te tengo.",
      //letra: [
        // "[00:05] Pega aquí la primera línea de la letra",
        // "[00:12] Y aquí la siguiente línea",
        // "[00:20] Y así sucesivamente...",
      //],
    },
    {
      titulo: "Amor de Siempre",
      artista: "Cuco",
      src: "sound/amorsiempre.mp3",
      nota: "Te dedico esta porque simplemente me recuerda a ti, a mi amor de siempre.",
    },
    {
      titulo: "Glue Song",
      artista: "Beabadoobee",
      src: "sound/gluesong.mp3",
      nota: "Te dedico esta porque me recuerda a lo mucho que te quiero, y a lo bonito que es tenerte conmigo.",
    },
    {
      titulo: "Stranger In You",
      artista: "Ebril",
      src: "sound/stranger.mp3",
      nota: "No sé exactamente qué tienes, pero hay algo en ti que me hace querer quedarme.",
    },
    {
      titulo: "Catorce",
      artista: "Sebastian Romero",
      src: "sound/catorce.mp3",
      nota: "No sabía cómo decirte lo que siento, así que dejé que esta canción lo hiciera por mí.",
    },
    {
      titulo: "Love Story",
      artista: "Indila",
      src: "sound/lovestory.mp3",
      nota: "Quizá no sea una historia de película, pero me gustaría que la nuestra tuviera su propia canción.",
    },
    {
      titulo: "Into the Sun",
      artista: "BTS",
      src: "sound/intothesun.mp3",
      nota: "Si algún día me pierdo, espero encontrar siempre el camino de regreso hacia ti.",
    },
    {
      titulo: "Doma",
      artista: "Josean Log",
      src: "sound/doma.mp3",
      nota: "No quiero cambiar nada de ti; solo quiero ser alguien con quien puedas sentirte tú.",
    },
    {
      titulo: "Love Songs",
      artista: "Kaash Paige",
      src: "sound/lovesongs.mp3",
      nota: "No sé si eres mi canción favorita, pero definitivamente eres mi parte favorita de cualquier día.",
    },
    {
      titulo: "Te Quiero Tanto",
      artista: "Kevin Kaarl",
      src: "sound/tequierotanto.mp3",
      nota: "No sé cómo explicarlo sin que suene poco, pero te quiero muchísimo más de lo que a veces sé decirte.",
    },
    {
      titulo: "Brillas",
      artista: "León Larregui",
      src: "sound/brillas.mp3",
      nota: "De todas las cosas bonitas que me ha dado la vida, coincidir contigo es de mis favoritas.",
    },
    {
      titulo: "Sunny",
      artista: "Luis Miguel",
      src: "sound/sunny.mp3",
      nota: "Porque contigo hasta los días grises encuentran un poquito de sol.",
    },
    {
      titulo: "Si hay algo",
      artista: "Josean Log",
      src: "sound/sihayalgo.mp3",
      nota: "No sé qué tendría que hacer para enamorarte, pero sí sé que me gustaría ser yo quien lo descubriera.",
    },
    {
      titulo: "Sunny",
      artista: "Rocco",
      src: "sound/rocco.mp3",
      nota: "Contigo, hasta un día cualquiera se siente especial.",
    },
    {
      titulo: "You and Only You",
      artista: "The Softies",
      src: "sound/you.mp3",
      nota: "Entre todas las personas, siempre hay alguien que simplemente se siente diferente. Para mí, eres tú.",
    },
    // Agrega más canciones aquí con la misma estructura, o usa el botón
    // "+ Agregar canción" directamente en la página (queda guardada en
    // el navegador para la próxima visita si usas un enlace o un nombre
    // de archivo; si subes un archivo desde el dispositivo, solo se
    // reproduce en esa sesión).
    //
    // {
    //   titulo: "Otra canción",
    //   artista: "Otro artista",
    //   src: "otra-cancion.mp3",
    //   nota: "",
    //   letra: [],
    // },
  ],

  // Textos de la playlist
  playlistHeading: "Tu playlist para mí 🎶",
  addSongBtnText:  "+ Agregar canción",

  // Encabezado de PEQUEÑOS DETALLES
  detallesHeading: "Pequeños detalles que amo de ti 💗",

  // ---- CARTA ----
  cartaHeading:   "Una carta para ti 💌",
  cartaSaludo:    "Para ti, boo",
  cartaBody: `Desde que llegaste

Desde que llegaste a mi vida,
hay algo diferente en mis días,
como si el mundo tuviera otros colores,
como si las horas fueran más bonitas
y hasta los momentos más sencillos
tuvieran un significado especial.

No sé exactamente en qué momento
empecé a pensar tanto en ti,
ni cuándo tu nombre comenzó
a aparecer entre mis pensamientos
sin siquiera llamarlo.
Solo sé que, poco a poco,
te convertiste en una de esas personas
que uno no quiere perder jamás.

Me gusta pensar en nosotros,
en todo lo que hemos vivido
y en todo aquello que todavía nos falta vivir.
Porque nuestra historia apenas comienza,
y aun así ya existen recuerdos
que guardo con muchísimo cariño.

Hay algo en ti que no sé explicar.
Tal vez sea tu forma de hablar,
tu manera de hacerme sonreír,
los pequeños detalles que quizá para ti
no significan demasiado,
pero que para mí pueden cambiar completamente un día.

Me gusta saber que existes,
que en algún lugar del mundo
hay una persona que puede hacerme sonreír
con un simple mensaje,
con una palabra,
con una pequeña muestra de cariño.

Y si algún día me preguntaran
qué es lo que más me gusta de ti,
probablemente no sabría responder.
Porque no es solamente una cosa.
Son tus pequeños detalles,
tus palabras, tus ocurrencias,
los momentos contigo
y esa sensación tan bonita
de saber que compartimos algo nuestro.

Quiero seguir escribiendo nuestra historia
sin apresurar sus páginas,
disfrutando cada capítulo,
cada conversación,
cada risa,
cada recuerdo que vayamos construyendo.

Y si pudiera guardar un momento para siempre,
guardaría esos instantes en los que estamos juntos
y el resto del mundo parece desaparecer,
porque por unos minutos
solamente existen nuestras palabras,
nuestras risas
y nosotros.

Desde aquel 14 de agosto de 2026,
comenzó algo que para mí tiene un valor enorme.
Una fecha que quizá parezca solamente
un día y una hora en el calendario,
pero que para mí representa
el comienzo de una historia que quiero recordar.

No sé qué nos espera mañana,
ni cuántas páginas tendrá nuestra historia,
pero sí sé algo:

quiero seguir llenándolas contigo.

Quiero que algún día podamos mirar atrás
y recordar todas las cosas que vivimos,
todas las veces que nos hicimos sonreír,
los momentos difíciles que superamos
y todos esos pequeños instantes
que hicieron que valiera la pena.

Porque no necesito una historia perfecta.
Solo quiero una historia sincera,
una historia llena de momentos nuestros,
de cariño, de risas
y de recuerdos que podamos guardar.

Y si alguna vez dudas de lo importante que eres para mí,
recuerda esto:

Entre millones de personas,
entre miles de lugares
y entre incontables momentos,
la vida hizo que nuestros caminos se encontraran.

Y desde entonces,
hay una parte de mi corazón
que lleva tu nombre.

Te quiero hoy,
te quiero en cada recuerdo que construimos,
y espero poder quererte
en cada página que todavía nos queda por escribir.`,
  cartaFirma:     "Con todo mi corazón,",

  // Botón interactivo
  loveBtnTexto:   "¿Sabes cuánto te quiero? ❤️",

  // Mensaje del FINAL
  footerMsg:      "Y esto apenas es el comienzo de nuestra historia. ❤️",
  footerFecha:    "14 • 08 • 2026",

  // Frases que aparecen al presionar el botón interactivo (rotará aleatoriamente)
  frasesAmor: [
    "Más que ayer, menos que mañana. 💙",
    "Tanto como el número de estrellas que no alcanzo a ver. ✨",
    "Más de lo que las palabras pueden explicar. 💗",
    "Hasta donde mi corazón alcanza, y un poco más. ❤️",
    "Infinitamente. Siempre. 🌙",
    "Como el mar al amanecer: sin bordes visibles. 💫",
    "Si pudiera elegir un lugar en el mundo, elegiría cualquier lugar donde estés tú. ❤️",
    "No sé qué hice para encontrarte, pero sé que no quiero dejar de encontrarte cada día. 💗",
    "Eres mi casualidad favorita, mi pensamiento más bonito y mi lugar seguro. 🫶",
    "Te quiero de esa manera en la que uno no busca un final, sino un para siempre. 🌙❤️",
    "Si mis días fueran estrellas, tú serías la que hace que todos tengan sentido. ✨",
    "No necesito que todos los días sean perfectos, solo necesito que en ellos exista un poquito de ti. 💕",
    "Hay millones de personas en el mundo, y aun así mi corazón tuvo la suerte de encontrarte a ti. 🌎💘",
    "Contigo entendí que el amor no siempre hace ruido; a veces simplemente se siente como estar en casa. 🏡❤️",
    "Me gustas en tus días felices, en tus días difíciles y en todos los pequeños momentos que te hacen ser tú. 🌷",
    "Si alguna vez dudas de cuánto te quiero, recuerda que eres mi pensamiento favorito incluso cuando no estoy pensando en nada. 💞",
    "Ojalá pudiera regalarte la forma en que te veo, para que entendieras lo increíble que eres para mí. 🥹❤️",
    "No quiero una historia perfecta, quiero nuestra historia: con risas, abrazos, errores y un montón de amor. 💗",
    "Tu sonrisa tiene esa extraña habilidad de arreglar días que ni siquiera sabías que estaban rotos. 🌸",
    "Te elegiría entre mil vidas, mil caminos y mil comienzos diferentes. Siempre encontraría el camino hacia ti. ♾️❤️",
    "Mi parte favorita del día es cualquier momento en el que apareces tú. 💕",
    "No eres solamente alguien que amo; eres alguien que hace que quiera ser una mejor versión de mí. 🫶",
    "A veces te miro y pienso: qué bonito que entre tantas posibilidades, la vida nos haya puesto en el mismo camino. ✨",
    "Quiero conocer todas tus versiones: la que ríe, la que sueña, la que se enoja, la que tiene miedo y la que vuelve a sonreír. ❤️",
    "Si pudiera guardar momentos en un frasco, llenaría uno entero con cada instante que he vivido contigo. 🫙💗",
    "No prometo que nunca habrá días difíciles, pero sí quiero estar contigo para hacerlos un poquito más fáciles. 🫂",
    "Me enamora tu forma de ser, pero todavía más me enamora la persona que soy cuando estoy contigo. 💘",
    "Entre todos mis pensamientos, tú eres el único al que siempre quiero volver. 🌙",
    "No sé cómo explicarlo, pero cuando estoy contigo siento que el mundo está exactamente donde debería estar. ❤️",
    "Te quiero en los momentos grandes, pero sobre todo en esos pequeños que nadie más nota. 🌷",
    "Si el amor tuviera una definición, probablemente tendría tu sonrisa escrita en ella. 💕",
    "Qué bonito es saber que, en algún lugar de este mundo, existe alguien que hace latir mi corazón de esta manera. 🥹❤️",
    "No quiero contar los días que llevo queriéndote; quiero contar todos los días que todavía nos quedan. ♾️💗",
    "Tú eres esa parte bonita de mi vida que nunca quiero convertir en recuerdo. ❤️",
    "Quizá no pueda darte el mundo entero, pero puedo darte mi cariño, mis palabras y mi corazón todos los días. 💞",
    "Si tuviera que elegir nuevamente, sin saber nada de nuestra historia, volvería a elegirte. Una y otra vez. ❤️",
    "Te quiero sin prisa, sin medida y sin fecha de caducidad. 🌙💗",
    "Hay abrazos que duran segundos, pero se quedan viviendo en el corazón para siempre. El tuyo es uno de ellos. 🫂❤️",
    "Mi lugar favorito no es un sitio; es ese momento en el que estoy contigo y todo lo demás deja de importar. 💕",
    "Eres mi pequeño pedacito de felicidad en medio de un mundo demasiado grande. 🌎💗",
    "Si algún día se me olvida decirlo, quiero que esta frase lo recuerde por mí: te quiero muchísimo. ❤️",
    "Si pudiera escribirte en el cielo, usaría todas las estrellas para que nunca olvidaras cuánto te quiero. ✨❤️",
    "Te quiero como la luna quiere a la noche: sin hacer ruido, pero haciendo que todo se vea más bonito. 🌙",
    "Hay personas que llegan y pasan; tú llegaste y dejaste una parte de ti en cada rincón de mi corazón. 💗",
    "Si mi corazón pudiera hablar, seguramente repetiría tu nombre entre cada latido. ❤️",
    "Quiero que seas ese recuerdo que nunca se convierte en pasado, porque siempre encuentre una forma de quedarse conmigo. 🌷",
    "De todas las historias que podría vivir, mi favorita siempre será la que tenga tu nombre junto al mío. 📖❤️",
    "Tal vez el universo sea enorme, pero qué pequeño se siente cuando tengo tus manos entre las mías. 🌌🫶",
    "Si pudiera detener el tiempo, elegiría uno de esos momentos en los que me miras y siento que no necesito nada más. ⏳💞",
    "Te encontré entre millones de caminos y, desde entonces, ninguno me parece tan bonito como el que camino contigo. 🌙❤️",
    "Mi corazón no necesita brújula; cada vez que piensa en hogar, apunta hacia ti. 🧭❤️",
  ],

  // =============================
  // POEMAS — Agrega o edita aquí
  // =============================
  poemas: [
    {
      titulo: "En tu nombre",
      texto: `En tu nombre hay silencio y también luz,
la clase de luz que no ciega
sino que guía.

Pronunciarte es ya
un pequeño hogar.`
    },
    {
      titulo: "Pequeño mapa",
      texto: `Aprendí tu risa de memoria,
los bordes de tu voz,
la forma exacta en que el tiempo
se detiene cuando estás cerca.

Eres el lugar al que siempre
encuentro el camino de regreso.`
    },
    {
      titulo: "Lo ordinario",
      texto: `No necesito que el día sea especial.
Basta con que estés tú
en él.

Con eso,
lo ordinario se vuelve
el mejor recuerdo.`
    },
    {
        titulo: "Donde quiero estar",
        texto: `Si algún día me preguntas dónde quiero estar,
        no necesitaré pensarlo:
        quiero estar contigo,
        en tus días buenos,
        en tus días difíciles,
        y en todos esos pequeños momentos
        que terminan convirtiéndose en recuerdos. ❤️`
    },

    {
        titulo: "Tú",
        texto: `Tú no llegaste a mi vida haciendo ruido,
        llegaste poquito a poquito,
        hasta convertirte en una de mis partes favoritas.
        Y ahora no sé cómo explicarlo,
        pero cuando pienso en felicidad,
        de alguna manera apareces tú. 💗`
    },

    {
        titulo: "Mi casualidad favorita",
        texto: `De todas las personas que existen,
        de todos los caminos que pudieron cruzarse,
        tuvo que ser el tuyo con el mío.
        Y si eso fue una casualidad,
        entonces es la casualidad más bonita
        que me pudo pasar. ✨`
    },

    {
        titulo: "Si pudiera",
        texto: `Si pudiera guardar algo para siempre,
        guardaría tu risa.
        Si pudiera repetir un momento,
        elegiría cualquiera contigo.
        Y si pudiera pedir un deseo,
        pediría que nunca nos falten
        razones para seguir eligiéndonos. 🌙❤️`
    },

    {
        titulo: "Mi lugar favorito",
        texto: `He descubierto que mi lugar favorito
        no tiene una dirección,
        ni paredes,
        ni una ventana.
        Mi lugar favorito eres tú,
        porque contigo hasta los días normales
        se sienten especiales. 🫶`
    },

    {
        titulo: "Contigo",
        texto: `Contigo aprendí que el amor
        también puede sentirse como paz.
        Como una sonrisa después de un día difícil,
        como un abrazo que dice "aquí estoy",
        sin necesidad de decir una sola palabra. 💕`
    },

    {
        titulo: "Te elegiría",
        texto: `Si pudiera volver al principio,
        volvería a elegirte.
        Si pudiera conocer mil caminos,
        buscaría nuevamente el que lleva hacia ti.
        Y si la vida me diera otra oportunidad,
        volvería a encontrarte. ❤️`
    },

    {
        titulo: "Pequeñas cosas",
        texto: `No son solamente los grandes momentos.
        Son tus mensajes,
        tus palabras,
        tu forma de mirarme,
        tus pequeños detalles
        y esa manera tan tuya
        de hacerme sonreír sin intentarlo. 🌷`
    },

    {
        titulo: "Mi siempre",
        texto: `No sé qué nos espera mañana,
        ni cuántas vueltas dará la vida.
        Pero sé algo:
        mientras pueda,
        quiero caminar contigo.
        Porque entre tantos "quizás",
        tú eres mi "sí". 💘`
    },

    {
        titulo: "Cuando pienso en ti",
        texto: `Cuando pienso en ti,
        el mundo parece ir un poquito más lento.
        Las preocupaciones pesan menos
        y aparece una sonrisa que ni siquiera intento esconder.
        Supongo que eso haces tú:
        haces bonito hasta mi pensamiento más simple. 🌸`
    },

    {
        titulo: "Sin darme cuenta",
        texto: `Sin darme cuenta,
        comenzaste a aparecer en mis pensamientos,
        en mis canciones,
        en mis sonrisas
        y en mis planes.
        Y ahora, cuando imagino el futuro,
        inevitablemente quiero imaginarte en él. 💗`
    },

    {
        titulo: "Mi persona",
        texto: `Entre millones de personas,
        encontré a alguien que hace especial
        hasta el momento más sencillo.
        Alguien con quien puedo reír,
        hablar de cualquier cosa
        y simplemente ser yo.
        Esa persona eres tú. 🥹❤️`
    },

    {
        titulo: "No necesito mucho",
        texto: `No necesito una vida perfecta,
        ni días sin problemas.
        Solo quiero tener a alguien
        con quien compartir las risas,
        superar los días malos
        y celebrar los buenos.
        Y si eres tú,
        entonces ya tengo suficiente. 🫂❤️`
    },

    {
        titulo: "Tu sonrisa",
        texto: `Tu sonrisa tiene algo extraño:
        aparece y, por un momento,
        todo parece estar bien.
        Quizá por eso me gusta tanto verla,
        porque sin saberlo,
        siempre consigue iluminarme un poquito. ✨💗`
    },

    {
        titulo: "Te quiero aquí",
        texto: `Te quiero en mis días tranquilos,
        en mis días caóticos,
        en mis planes improvisados
        y en mis sueños más grandes.
        No porque necesite que estés en cada instante,
        sino porque cada instante contigo
        se vuelve más bonito. ❤️`
    },

    {
        titulo: "Nuestro pequeño mundo",
        texto: `Quizá para el mundo
        seamos solamente dos personas.
        Pero cuando estoy contigo,
        siento que existe un pequeño mundo
        donde solamente importan nuestras risas,
        nuestros abrazos
        y todo lo que sentimos. 🌎💞`
    },

    {
        titulo: "Hasta en silencio",
        texto: `Me gusta hablar contigo,
        pero también me gusta el silencio
        cuando estamos juntos.
        Porque contigo entendí
        que no siempre hacen falta palabras
        cuando estar cerca ya lo dice todo. 🌙🫶`
    },

    {
        titulo: "Mi pensamiento bonito",
        texto: `Entre todos los pensamientos
        que pasan por mi cabeza durante el día,
        siempre hay uno que me gusta más:
        tú.
        Porque pensarte
        siempre termina regalándome una sonrisa. 💕`
    },

    {
        titulo: "Si el tiempo se detuviera",
        texto: `Si alguna vez el tiempo pudiera detenerse,
        elegiría un momento contigo.
        No necesitaría nada más:
        ni lugares increíbles,
        ni grandes planes.
        Solo tú,
        yo,
        y ese instante que quisiera guardar para siempre. ⏳❤️`
    },
    {
        titulo: "Mi elección",
        texto: `No te quiero solamente
        por los momentos bonitos.
        Te quiero por quien eres,
        por lo que me haces sentir
        y porque, incluso después de conocerte,
        sigo encontrando nuevas razones
        para quererte un poquito más. 💖`
    },
    {
    titulo: "Error 404",
    texto: `Error 404:
    No se encontró una razón
    para dejar de quererte.
    
    Se intentó buscar una solución...
    pero solamente apareció tu nombre. ❤️`
    },

    {
    titulo: "Sistema iniciado",
    texto: `Sistema iniciado...
    Corazón: funcionando.
    Sonrisa: activada.
    Pensamientos: ocupados por ti.
    Estado actual:
    completamente enamorado. 💗`
    },

    {
    titulo: "Mi código favorito",
    texto: `Si mi corazón fuera código,
    tú serías la única línea
    que jamás quisiera borrar.
    
    Porque entre tantas funciones,
    tú eres la que hace que todo tenga sentido. 💻❤️`
    },

    {
    titulo: "Guardar para siempre",
    texto: `Si pudiera presionar Ctrl + S
    en nuestros mejores momentos,
    guardaría cada risa,
    cada abrazo,
    cada conversación
    y cada instante contigo.
    
    Y después...
    los guardaría para siempre. 💾💕`
    },

    {
    titulo: "Actualización",
    texto: `Nueva actualización disponible:
    
    +100 razones para sonreír
    +1000 recuerdos contigo
    +∞ cariño por ti
    
    Versión actual:
    enamorado de ti.
    
    Próxima actualización:
    quererte todavía más. ❤️`
    }
    // Agrega más poemas con la misma estructura:
    // { titulo: "...", texto: "..." },
  ],

  // ==============================================
  // PEQUEÑOS DETALLES — Agrega o edita aquí
  // ==============================================
  detalles: [
    { icon: "😊", texto: "Tu sonrisa cuando estás de buen humor" },
    { icon: "💬", texto: "La forma en que escribes cuando me extrañas" },
    { icon: "🌙", texto: "Nuestras conversaciones de noche" },
    { icon: "💙", texto: "Cómo me haces sentir en calma" },
    { icon: "✨", texto: "Tus pequeñas ocurrencias" },
    { icon: "🎵", texto: "Que compartamos una canción favorita" },
    { icon: "🌸", texto: "Tu manera única de ver el mundo" },
    { icon: "🫂", texto: "Saber que estás ahí" },
    // Agrega más: { icon: "...", texto: "..." },
  ],

  // =====================================================
  // NUESTRA HISTORIA — Agrega momentos importantes aquí
  // =====================================================
  momentos: [
    {
      fecha: "2023",
      titulo: "El Comienzo de nuestra Historia",
      descripcion: "El año en que comenzamos nuestra historia. Un año que no olvidare ya que fue cuando te conoci por primera vez en secundaria."
    },
    {
      fecha: "13 de Agosto del 2026",
      titulo: "La confesión",
      descripcion: "El 13 de agosto, me contasste que yo te gustó, y la sorpresa esque fue mutuó el sentimiento."
    },
    {
      fecha: "14 de Agosto del 2026",
      titulo: "Empezo la magia",
      descripcion: "Finalmente el dia 14 de agosto, comenzamos a salir como novios."
    },
    {
      fecha: "26 de Agosto del 2026",
      titulo: "La primera visita",
      descripcion: "Nos vimos por primera vez como pareja en el cumpleaños de tu sobrino."
    }, 
    {
      fecha: "29 de Agosto del 2026",
      titulo: "La primer cita",
      descripcion: "La primera cita, pase por ti y salimos a la plaza las misiones."
    },
    {
      fecha: "29 de Agosto del 2026",
      titulo: "El primer ´Te amo´",
      descripcion: "Te dije el primer ´Te amo´ cuando tuvimos nuestra primera cita. Aun recuerdo como te chiveaste y evitaste la mirada, te mirabas radiante como el sol."
    },
    {
      fecha: "3 de Septiembre del 2026",
      titulo: "El primer daño",
      descripcion: "Segundo plan de salida que tuvimos, fuimos a Mi Plaza Libramiento, donde solo caminamos al rededor de ella, donde me rasguñaste mientras jugabamos."
    },
    // Agrega más momentos con la misma estructura:
    // { fecha: "...", titulo: "...", descripcion: "..." },
  ],

  // ==============================================
  // FOTOS — Cambia las rutas de las imágenes aquí
  // ==============================================
  // Si tienes fotos, pon la ruta relativa: "fotos/foto1.jpg"
  // Si la dejas vacía (""), se mostrará un placeholder
  fotos: [
    { src: "img/1er.jpeg", alt: "Nuestra primera foto juntos 📸" },
    { src: "img/2da.jpeg", alt: "Un momento especial 💙" },
    { src: "img/3ra.jpeg", alt: "Recuerdo favorito ✨" },
    { src: "img/4ta.jpeg", alt: "Agrega aquí tu foto 📸" },
    { src: "img/5ta.jpeg", alt: "Otro momento nuestro 💗" },
    { src: "img/6ta.jpeg", alt: "Para siempre en mi memoria ❤️" },
    // Agrega más: { src: "ruta/foto.jpg", alt: "Descripción" },
  ],
};
// =============================================
// FIN DE LA CONFIGURACIÓN PERSONALIZABLE
// =============================================


// =============================================
// INICIALIZACIÓN
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  rellenarTextos();
  renderPoemas();
  renderDetalles();
  renderTimeline();
  renderGaleria();
  initCounter();
  initPlaylist();  // ← playlist + reproductor + letra estilo karaoke
  initBgMusic();   // ← música de fondo
  initHero();
  initInteractiva();
  initReveal();
  initHearts();
  initStars();
  initNavToggle();
});


// ---- Rellena los textos desde CONFIG ----
function rellenarTextos() {
  setText("heroEyebrow",    CONFIG.heroEyebrow);
  setText("heroTitle",      CONFIG.heroTitulo);
  setText("heroDate",       `Desde el ${CONFIG.fechaBonita}, ${CONFIG.horaBonita}`);
  setText("heroBtn",        CONFIG.heroBtnTexto);
  setText("fechaBig",       CONFIG.fechaBonita);
  setText("fechaHora",      CONFIG.horaBonita);
  setText("fechaCaption",   CONFIG.fechaCaption);
  setText("counterCaption", CONFIG.counterCaption);
  setText("cancionHeading", CONFIG.cancionHeading);
  setText("playlistHeading", CONFIG.playlistHeading);
  setText("btnAddSong",     CONFIG.addSongBtnText);
  setText("detallesHeading", CONFIG.detallesHeading);
  setText("cartaHeading",   CONFIG.cartaHeading);
  setText("letterSaludo",   CONFIG.cartaSaludo + " " + CONFIG.nombrePareja + ",");
  setText("letterBody",     CONFIG.cartaBody);
  setText("letterFirma",    CONFIG.cartaFirma + "\n" + CONFIG.miNombre + " ❤️");
  setText("btnLove",        CONFIG.loveBtnTexto);
  setText("footerMsg",      CONFIG.footerMsg);
  setText("footerDate",     CONFIG.footerFecha);
}
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}


// ---- Hero: scroll suave al clic del botón ----
function initHero() {
  document.getElementById("heroBtn")?.addEventListener("click", () => {
    scrollTo("#fecha");
  });
  // Agregar shimmer al título
  const title = document.getElementById("heroTitle");
  if (title) title.classList.add("shimmer-text");
}


// ---- Contador en tiempo real ----
function initCounter() {
  const start = new Date(CONFIG.fechaInicio).getTime();

  function update() {
    const diff = Date.now() - start;
    if (diff < 0) {
      ["cnt-days","cnt-hours","cnt-mins","cnt-secs"].forEach(id => setText(id, "0"));
      return;
    }
    const d  = Math.floor(diff / 86400000);
    const h  = Math.floor((diff % 86400000) / 3600000);
    const m  = Math.floor((diff % 3600000)  / 60000);
    const s  = Math.floor((diff % 60000)    / 1000);
    setText("cnt-days",  d);
    setText("cnt-hours", h);
    setText("cnt-mins",  m);
    setText("cnt-secs",  s);
  }
  update();
  setInterval(update, 1000);
}


// =============================================
// PLAYLIST + REPRODUCTOR + LETRA ESTILO KARAOKE
// =============================================
const PLAYLIST_STORAGE_KEY = "cartaAmor_playlistExtra_v1";

const playerState = {
  songs: [],          // CONFIG.playlist + canciones agregadas y guardadas
  currentIndex: 0,
  isPlaying: false,
  cues: [],           // letra ya calculada en segundos para la canción activa
  activeCueIdx: -1,
};
let currentSourceMode = "file";

// ---- Cargar / guardar canciones agregadas por el usuario ----
function loadExtraSongs() {
  try {
    const raw = localStorage.getItem(PLAYLIST_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
function saveExtraSongs(list) {
  try {
    localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    console.warn("No se pudo guardar la playlist:", err);
  }
}
function persistRemovableSongs() {
  const removable = playerState.songs.filter(s => s._removable && !s._temp);
  saveExtraSongs(removable.map(({ titulo, artista, src, nota, letra }) => (
    { titulo, artista, src, nota, letra }
  )));
}

// ---- Inicializar playlist, reproductor y modal ----
function initPlaylist() {
  const base  = CONFIG.playlist.map(s => ({ ...s, _persist: true, _removable: false }));
  const extra = loadExtraSongs().map(s => ({ ...s, _persist: true, _removable: true }));
  playerState.songs = [...base, ...extra];

  renderPlaylist();
  wireAudioEvents();
  wirePlaylistControls();
  wireAddSongModal();

  if (playerState.songs.length) {
    loadSong(0, { autoplay: false });
  }
}

// ---- Renderizar la lista de la playlist ----
function renderPlaylist() {
  const list = document.getElementById("playlistList");
  if (!list) return;

  if (!playerState.songs.length) {
    list.innerHTML = `<li class="playlist-empty-hint">Aún no hay canciones. Agrega la primera con el botón de arriba. 🎵</li>`;
    return;
  }

  list.innerHTML = playerState.songs.map((song, idx) => {
    const isActive  = idx === playerState.currentIndex;
    const playIcon  = isActive && playerState.isPlaying ? "⏸" : "▶";
    return `
    <li class="playlist-item ${isActive ? "is-active" : ""}">
      <button class="playlist-play-btn" data-play-idx="${idx}" aria-label="Reproducir ${escapeHtml(song.titulo || "")}">${playIcon}</button>
      <div class="playlist-meta" data-play-idx="${idx}">
        <span class="playlist-title">${escapeHtml(song.titulo || "Sin título")}</span>
        <span class="playlist-artist">${escapeHtml(song.artista || "")}</span>
      </div>
      ${song._temp ? `<span class="playlist-tag">temporal</span>` : ""}
      ${song._removable ? `<button class="playlist-remove-btn" data-remove-idx="${idx}" aria-label="Quitar canción" title="Quitar de la playlist">✕</button>` : ""}
    </li>`;
  }).join("");
}

// ---- Delegación de clics dentro de la playlist ----
function wirePlaylistControls() {
  const list = document.getElementById("playlistList");
  if (list) {
    list.addEventListener("click", (e) => {
      const removeBtn = e.target.closest("[data-remove-idx]");
      if (removeBtn) {
        removeSong(parseInt(removeBtn.dataset.removeIdx, 10));
        return;
      }
      const playTarget = e.target.closest("[data-play-idx]");
      if (playTarget) {
        const idx = parseInt(playTarget.dataset.playIdx, 10);
        if (idx === playerState.currentIndex) {
          togglePlayPause();
        } else {
          loadSong(idx, { autoplay: true });
        }
      }
    });
  }
  document.getElementById("btnAddSong")?.addEventListener("click", openAddSongModal);
}

// ---- Cargar una canción de la playlist en el reproductor ----
function loadSong(idx, { autoplay } = { autoplay: false }) {
  const song  = playerState.songs[idx];
  const audio = document.getElementById("audioEl");
  if (!song || !audio) return;

  playerState.currentIndex = idx;
  playerState.cues = [];
  playerState.activeCueIdx = -1;

  setText("playerSong",   song.titulo || "Sin título");
  setText("playerArtist", song.artista || "");
  setText("playerNote",   song.nota || "");

  audio.pause();
  audio.src = song.src || "";
  audio.load();

  resetPlayerUi();
  renderPlaylist();
  renderLyrics([]);

  audio.addEventListener("loadedmetadata", function onMeta() {
    audio.removeEventListener("loadedmetadata", onMeta);
    playerState.cues = buildCues(song.letra || [], audio.duration);
    renderLyrics(playerState.cues);
  }, { once: true });

  if (autoplay) playAudio();
}

function resetPlayerUi() {
  const fill    = document.getElementById("progressFill");
  const btnPlay = document.getElementById("btnPlay");
  const vinyl   = document.getElementById("vinyl");
  if (fill) fill.style.width = "0%";
  setText("timeElapsed", "0:00");
  setText("timeDuration", "0:00");
  if (btnPlay) btnPlay.textContent = "▶";
  vinyl?.classList.remove("spinning");
  playerState.isPlaying = false;
}

function playAudio() {
  const audio = document.getElementById("audioEl");
  // Pausa la música de fondo mientras suena una canción de la playlist
  const bg = document.getElementById("bgMusic");
  if (bg && !bg.paused) {
    bg.pause();
    document.getElementById("bgMusicBtn")?.classList.remove("playing");
    const ico = document.getElementById("bgMusicIcon");
    if (ico) ico.textContent = "🔇";
  }
  audio?.play().catch(err => {
    console.warn("No se pudo reproducir la canción:", err);
  });
}
function pauseAudio() {
  document.getElementById("audioEl")?.pause();
}
function togglePlayPause() {
  if (playerState.isPlaying) pauseAudio(); else playAudio();
}

// ---- Eventos del elemento <audio> (se registran una sola vez) ----
function wireAudioEvents() {
  const audio        = document.getElementById("audioEl");
  const btnPlay      = document.getElementById("btnPlay");
  const fill         = document.getElementById("progressFill");
  const progressWrap = document.getElementById("progressWrap");
  const vinyl        = document.getElementById("vinyl");
  if (!audio || !btnPlay) return;

  function fmt(sec) {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  audio.addEventListener("play", () => {
    playerState.isPlaying = true;
    btnPlay.textContent = "⏸";
    vinyl?.classList.add("spinning");
    renderPlaylist();
  });

  audio.addEventListener("pause", () => {
    playerState.isPlaying = false;
    btnPlay.textContent = "▶";
    vinyl?.classList.remove("spinning");
    renderPlaylist();
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      if (fill) fill.style.width = pct + "%";
      setText("timeElapsed", fmt(audio.currentTime));
      setText("timeDuration", fmt(audio.duration));
    }
    updateActiveLyricLine(audio.currentTime);
  });

  audio.addEventListener("ended", () => {
    resetPlayerUi();
    renderPlaylist();
    const nextIdx = playerState.currentIndex + 1;
    if (nextIdx < playerState.songs.length) {
      loadSong(nextIdx, { autoplay: true }); // avanza sola a la siguiente canción
    }
  });

  btnPlay.addEventListener("click", togglePlayPause);

  progressWrap?.addEventListener("click", (e) => {
    if (!audio.duration) return;
    const rect  = progressWrap.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  });
}

// ---- Quitar una canción de la playlist ----
function removeSong(idx) {
  const song = playerState.songs[idx];
  if (!song) return;
  const ok = confirm(`¿Quitar "${song.titulo}" de la playlist?`);
  if (!ok) return;

  const wasPlaying = idx === playerState.currentIndex;
  playerState.songs.splice(idx, 1);
  persistRemovableSongs();

  if (!playerState.songs.length) {
    pauseAudio();
    resetPlayerUi();
    setText("playerSong", "");
    setText("playerArtist", "");
    setText("playerNote", "");
    renderLyrics([]);
    renderPlaylist();
    return;
  }

  let nextIdx = playerState.currentIndex;
  if (idx < playerState.currentIndex) nextIdx -= 1;

  if (wasPlaying) {
    loadSong(Math.max(Math.min(nextIdx, playerState.songs.length - 1), 0), { autoplay: false });
  } else {
    playerState.currentIndex = Math.max(nextIdx, 0);
    renderPlaylist();
  }
}

// =============================================
// LETRA ESTILO KARAOKE
// =============================================

// Convierte el arreglo "letra" de una canción en cues {time, text} en segundos.
function buildCues(letra, duration) {
  if (!letra || !letra.length || !duration || !isFinite(duration)) return [];

  const timedPattern = /^\[(\d{1,2}):(\d{2})\]\s*(.*)$/;
  const looksTimed = typeof letra[0] === "string" && timedPattern.test(letra[0]);

  if (looksTimed) {
    let lastTime = 0;
    const cues = letra.map((line) => {
      const m = String(line).match(timedPattern);
      if (m) {
        lastTime = parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
        return { time: lastTime, text: m[3] };
      }
      lastTime += 1; // línea sin tiempo válido: la colocamos justo después de la anterior
      return { time: lastTime, text: String(line) };
    });
    return cues.sort((a, b) => a.time - b.time);
  }

  // Sin tiempos: repartir las líneas de forma pareja a lo largo de la canción
  const n = letra.length;
  const margin = Math.min(duration * 0.05, 3);
  const usable = Math.max(duration - margin, 1);
  return letra.map((line, i) => ({
    time: margin + (usable * i) / n,
    text: String(line),
  }));
}

function renderLyrics(cues) {
  const empty  = document.getElementById("lyricsEmpty");
  const scroll = document.getElementById("lyricsScroll");
  if (!empty || !scroll) return;

  playerState.activeCueIdx = -1;

  if (!cues || !cues.length) {
    empty.hidden = false;
    scroll.hidden = true;
    scroll.innerHTML = "";
    return;
  }

  empty.hidden = true;
  scroll.hidden = false;
  scroll.innerHTML = cues.map((c, i) =>
    `<p class="lyrics-line" data-cue-idx="${i}">${escapeHtml(c.text || "♪")}</p>`
  ).join("");
}

function updateActiveLyricLine(currentTime) {
  const cues = playerState.cues;
  if (!cues || !cues.length) return;

  let idx = -1;
  for (let i = 0; i < cues.length; i++) {
    if (currentTime >= cues[i].time) idx = i; else break;
  }
  if (idx === playerState.activeCueIdx) return;
  playerState.activeCueIdx = idx;

  const scroll = document.getElementById("lyricsScroll");
  if (!scroll) return;
  const lines = scroll.querySelectorAll(".lyrics-line");
  lines.forEach((el, i) => {
    el.classList.remove("is-active", "is-past");
    if (i === idx) el.classList.add("is-active");
    else if (i < idx) el.classList.add("is-past");
  });

  const activeEl = scroll.querySelector(".lyrics-line.is-active");
  activeEl?.scrollIntoView({ block: "center", behavior: "smooth" });
}

// =============================================
// MODAL: AGREGAR CANCIÓN
// =============================================
function openAddSongModal() {
  const modal = document.getElementById("addSongModal");
  if (!modal) return;
  document.getElementById("songTitleInput").value = "";
  document.getElementById("songArtistInput").value = "";
  document.getElementById("songUrlInput").value = "";
  document.getElementById("songLyricsInput").value = "";
  document.getElementById("songFileInput").value = "";
  document.getElementById("addSongError").textContent = "";
  setSourceMode("file");
  modal.hidden = false;
}
function closeAddSongModal() {
  const modal = document.getElementById("addSongModal");
  if (modal) modal.hidden = true;
}
function setSourceMode(mode) {
  currentSourceMode = mode;
  document.getElementById("sourceModeFile")?.classList.toggle("is-active", mode === "file");
  document.getElementById("sourceModeUrl")?.classList.toggle("is-active", mode === "url");
  const fileWrap = document.getElementById("sourceFileWrap");
  const urlWrap  = document.getElementById("sourceUrlWrap");
  if (fileWrap) fileWrap.hidden = mode !== "file";
  if (urlWrap)  urlWrap.hidden  = mode !== "url";
}

function wireAddSongModal() {
  document.getElementById("cancelAddSong")?.addEventListener("click", closeAddSongModal);
  document.getElementById("addSongModal")?.addEventListener("click", (e) => {
    if (e.target.id === "addSongModal") closeAddSongModal();
  });
  document.getElementById("sourceModeFile")?.addEventListener("click", () => setSourceMode("file"));
  document.getElementById("sourceModeUrl")?.addEventListener("click", () => setSourceMode("url"));
  document.getElementById("confirmAddSong")?.addEventListener("click", handleAddSong);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAddSongModal();
  });
}

function handleAddSong() {
  const errorEl  = document.getElementById("addSongError");
  const titulo   = document.getElementById("songTitleInput").value.trim();
  const artista  = document.getElementById("songArtistInput").value.trim();
  const letraRaw = document.getElementById("songLyricsInput").value;
  const letra    = letraRaw.split("\n").map(l => l.trim()).filter(Boolean);

  errorEl.textContent = "";

  if (!titulo) {
    errorEl.textContent = "Ponle un título a la canción. 💗";
    return;
  }

  if (currentSourceMode === "file") {
    const fileInput = document.getElementById("songFileInput");
    const file = fileInput.files && fileInput.files[0];
    if (!file) {
      errorEl.textContent = "Elige un archivo de audio de tu dispositivo.";
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    playerState.songs.push({
      titulo, artista, src: objectUrl, nota: "", letra,
      _persist: false, _removable: true, _temp: true,
    });
  } else {
    const url = document.getElementById("songUrlInput").value.trim();
    if (!url) {
      errorEl.textContent = "Escribe un enlace o el nombre del archivo.";
      return;
    }
    playerState.songs.push({
      titulo, artista, src: url, nota: "", letra,
      _persist: true, _removable: true,
    });
    persistRemovableSongs();
  }

  renderPlaylist();
  closeAddSongModal();
}


// ---- Música de fondo (sunny.mp3) ----
// Los navegadores modernos bloquean el autoplay hasta que el usuario
// interactúa con la página. Por eso arrancamos en el primer clic/toque.
function initBgMusic() {
  const bg  = document.getElementById("bgMusic");
  const btn = document.getElementById("bgMusicBtn");
  const ico = document.getElementById("bgMusicIcon");

  if (!bg || !btn) return;

  bg.volume = 0.35; // Volumen suave para que no tape la canción especial

  let started  = false;   // ¿Ya arrancó alguna vez?
  let bgActive = false;   // Estado actual

  // Intenta arrancar la música de fondo con el primer gesto del usuario
  function tryAutoplay() {
    if (started) return;
    started = true;
    bg.play()
      .then(() => {
        bgActive = true;
        btn.classList.add("playing");
        ico.textContent = "🎵";
      })
      .catch(() => {
        // El navegador lo bloqueó — el usuario deberá presionar el botón
        ico.textContent = "🔇";
      });
    document.removeEventListener("click",     tryAutoplay);
    document.removeEventListener("touchstart", tryAutoplay);
  }

  document.addEventListener("click",      tryAutoplay, { once: true });
  document.addEventListener("touchstart", tryAutoplay, { once: true });

  // Botón flotante: alternar música de fondo
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // No disparar tryAutoplay de nuevo

    if (!started) {
      // Primera vez desde el botón
      started = true;
      bg.play()
        .then(() => {
          bgActive = true;
          btn.classList.add("playing");
          ico.textContent = "🎵";
        })
        .catch(() => { ico.textContent = "🔇"; });
      return;
    }

    if (bgActive) {
      bg.pause();
      bgActive = false;
      btn.classList.remove("playing");
      ico.textContent = "🔇";
    } else {
      bg.play().catch(() => {});
      bgActive = true;
      btn.classList.add("playing");
      ico.textContent = "🎵";
    }
  });
}


// ---- Renderizar Poemas ----
function renderPoemas() {
  const grid = document.getElementById("poemsGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.poemas.map(p => `
    <div class="poem-card reveal">
      <p class="poem-title">${escapeHtml(p.titulo)}</p>
      <p class="poem-text">${escapeHtml(p.texto)}</p>
    </div>
  `).join("");
}


// ---- Renderizar Pequeños Detalles ----
function renderDetalles() {
  const grid = document.getElementById("detailsGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.detalles.map(d => `
    <div class="detail-card">
      <span class="detail-icon">${d.icon}</span>
      <p class="detail-text">${escapeHtml(d.texto)}</p>
    </div>
  `).join("");
}


// ---- Renderizar Timeline ----
function renderTimeline() {
  const wrap = document.getElementById("timelineWrap");
  if (!wrap) return;
  wrap.innerHTML = CONFIG.momentos.map(m => `
    <div class="timeline-item reveal">
      <p class="timeline-date">${escapeHtml(m.fecha)}</p>
      <p class="timeline-title">${escapeHtml(m.titulo)}</p>
      <p class="timeline-desc">${escapeHtml(m.descripcion)}</p>
    </div>
  `).join("");
}


// ---- Renderizar Galería ----
function renderGaleria() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.fotos.map(f => `
    <div class="gallery-item">
      ${f.src
        ? `<img src="${escapeHtml(f.src)}" alt="${escapeHtml(f.alt)}" loading="lazy" />`
        : `<div class="gallery-placeholder"><span>📸</span>${escapeHtml(f.alt)}</div>`
      }
    </div>
  `).join("");
}


// ---- Sección interactiva ----
function initInteractiva() {
  const btn  = document.getElementById("btnLove");
  const resp = document.getElementById("loveResponse");
  if (!btn || !resp) return;

  let lastIdx = -1;
  btn.addEventListener("click", () => {
    let idx;
    do { idx = Math.floor(Math.random() * CONFIG.frasesAmor.length); }
    while (idx === lastIdx && CONFIG.frasesAmor.length > 1);
    lastIdx = idx;

    resp.style.opacity = "0";
    setTimeout(() => {
      resp.textContent = CONFIG.frasesAmor[idx];
      resp.style.opacity = "1";
    }, 300);

    // Lanzar algunos corazones extra
    for (let i = 0; i < 8; i++) {
      setTimeout(() => spawnHeart(), i * 80);
    }
  });
}


// ---- Reveal al scroll ----
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}


// ---- Corazones flotantes ----
const HEART_EMOJIS = ["❤️", "💙", "💗", "💕", "🩷", "💜"];

function spawnHeart() {
  const container = document.getElementById("hearts-container");
  if (!container) return;
  const el = document.createElement("div");
  el.className = "floating-heart";
  el.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
  el.style.left = Math.random() * 98 + "vw";
  const dur = 6 + Math.random() * 7;
  el.style.animationDuration = dur + "s";
  el.style.animationDelay    = "0s";
  container.appendChild(el);
  setTimeout(() => el.remove(), dur * 1000 + 200);
}

function initHearts() {
  // Un corazón cada 4-8 segundos
  function scheduleNext() {
    const delay = 4000 + Math.random() * 4000;
    setTimeout(() => {
      spawnHeart();
      scheduleNext();
    }, delay);
  }
  scheduleNext();
}


// ---- Canvas de estrellas ----
function initStars() {
  const canvas = document.getElementById("starsCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, stars = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", () => { resize(); buildStars(); });

  function buildStars() {
    const n = Math.floor((W * H) / 5000);
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.002,
    }));
  }
  buildStars();

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha)) * 0.6;
      ctx.fillStyle = "#e8e8f4";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }
  draw();
}


// ---- Menú móvil ----
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links  = document.getElementById("navLinks");
  toggle?.addEventListener("click", () => links?.classList.toggle("open"));
}
function closeNav() {
  document.getElementById("navLinks")?.classList.remove("open");
}


// ---- Scroll suave ----
function scrollTo(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}


// ---- Utilidad: escapar HTML ----
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


// =============================================
// GUÍA DE PERSONALIZACIÓN RÁPIDA
// =============================================
/*
  Todo lo que necesitas cambiar está en el objeto CONFIG al principio de este archivo.

  1. NOMBRES Y FECHA
     ─────────────────
     CONFIG.miNombre       → Tu nombre (firma de la carta)
     CONFIG.nombrePareja   → Nombre de tu pareja (saludo de la carta)
     CONFIG.fechaInicio    → Fecha exacta en formato "YYYY-MM-DDTHH:MM:SS"
     CONFIG.fechaBonita    → Cómo se muestra la fecha (ej: "14 de agosto de 2026")
     CONFIG.horaBonita     → Cómo se muestra la hora

  2. PLAYLIST Y LETRA ESTILO KARAOKE
     ─────────────────────────────────
     CONFIG.playlist es un arreglo de canciones. Cada una necesita:
       { titulo, artista, src, nota, letra }
     - src: el nombre del archivo de audio en la misma carpeta que index.html
            (ej: "cancion2.mp3"), o una URL completa.
     - letra: arreglo de líneas de texto. Puedes dejarlo vacío [], escribir
              solo el texto (se reparte solo a lo largo de la canción), o
              agregar el tiempo exacto: "[00:05] Primera línea".
       (No incluimos letras reales de canciones por derechos de autor:
       cópialas tú mismo de una fuente con la que cuentes.)

     También puedes agregar canciones directamente desde la página con el
     botón "+ Agregar canción" en la sección de la playlist:
       - Un archivo de tu dispositivo se reproduce solo durante esa visita.
       - Un enlace o el nombre de un archivo que subas a la carpeta se
         guarda en el navegador para la próxima vez que abras la página.

  3. POEMAS
     ────────
     En CONFIG.poemas agrega objetos con la forma:
       { titulo: "Título", texto: "Aquí el poema..." }
     El texto puede tener saltos de línea con \n o escribiendo saltos reales
     dentro del template literal.

  4. PEQUEÑOS DETALLES
     ──────────────────
     En CONFIG.detalles agrega objetos con la forma:
       { icon: "emoji", texto: "Descripción del detalle" }

  5. LÍNEA DEL TIEMPO / RECUERDOS
     ──────────────────────────────
     En CONFIG.momentos agrega objetos con la forma:
       { fecha: "...", titulo: "...", descripcion: "..." }

  6. FOTOS
     ──────
     En CONFIG.fotos agrega objetos con la forma:
       { src: "ruta/imagen.jpg", alt: "Descripción" }
     Si src está vacío (""), se mostrará un placeholder.
     Coloca tus imágenes en la misma carpeta que index.html
     y pon el nombre del archivo como src (ej: "foto1.jpg").

  7. CARTA
     ──────
     CONFIG.cartaBody → Escribe tu carta. Puedes usar saltos de línea normales.
     CONFIG.cartaSaludo / CONFIG.cartaFirma → Ajusta el inicio y final.

  8. FRASES INTERACTIVAS
     ─────────────────────
     En CONFIG.frasesAmor agrega más strings al arreglo.
     Al presionar el botón, se mostrará una al azar.

  9. NUEVA SECCIÓN
     ──────────────
     a) Agrega en index.html una nueva <section> con la clase "section reveal".
     b) Dale un id único (ej: id="nueva").
     c) Agrega un ítem al <ul class="nav-links"> en la navbar.
     d) Aquí en script.js, agrega la lógica o contenido que necesites.
     e) En style.css agrega los estilos específicos de esa sección.

  10. COLORES
      ────────
      Edita las variables al principio de style.css dentro de :root {}.
      Los nombres son descriptivos: --royal-blue, --indigo, --cherry, etc.
*/
