export let races = [
    {
        id: 1,
        name: "Humanos",
        description: `Los Humanos, con sus distintas subrazas y variantes étnicas, son los más abundantes y versátiles de las Razas disponibles, 
                    pero los menos longevos y resistentes, en comparación con otras más antiguas. En cambio, lo compensan con una gran
                    capacidad de adaptación, ingenio y creatividad, además de una fertilidad grande, con 
                    la que pueden recuperarse en pocas generaciones de guerras, conflictos y catástrofes.
                    Ambiciosos, curiosos y soñadores o idealistas, prefieren las comodidades de las villas,
                    recintos amurallados y ciudades portuarias, además de una gran pasión por el comercio, el lujo o las artes y las ciencias 
                    o el enriquecimiento personal. Para ellos, el fin justifica los medios, y a veces, eso implica no respetar los asuntos ajenos.`,
        rasgoRacial: "+10 talento de oficios", 
        SubRace: ["Madíes", "Costeros", "Montañeses", "Ribereños", "Sureños", "Orientales", "SemiElfos"],
        VentajaRacial: ["Urbanita", "Gente Del Campo", "Silvano", "Nómada", "Alma Aventurera", "Gente del Circo", "Alma Guerrera", "Marginado", "Novicio del Templo",
                    "Noble Linaje", "Artistas Callejero", "Monaguillo", "universitario", "Astrólogo", "Mercader", "Artesano"],
        isSpecial: 0
    },
    {
        id: 2,
        name: "Elfos",
        descriptions: `Los Elfos, divididos en tres etnias (Altos Elfos, Silvanos y Grises), son una raza antigua,
                    milenaria y reservada, que tiene una longevidad elevada (suelen vivir del orden de
                    trescientos a seiscientos años o más, según la etnia en cuestión y su linaje), son menos
                    numerosos que los Humanos, y vivieron una época de esplendor ya pasada, en la que
                    brillaron con luz propia y dominaron el mundo conocido, así como lucharon contra las
                    razas oscuras en una guerra de desgaste interminable y sin cuartel. Enseñaron a los
                    Humanos las artes, las ciencias y el uso de los Reinos Mágicos, en los que los Elfos son
                    unos maestros indiscutibles. Actualmente, viven el ocaso de su pueblo, sobreviviendo como pueden en áreas remotas de los reinos de los hombres, o conviviendo con ellos
                    en regiones habitadas, lo que supone conflictos locales, malentendidos e incluso
                    enfrentamientos puntuales o un entendimiento y comercio razonables a veces. Su
                    recuperación es lenta después de cataclismos o catástrofes, y son reservados,
                    anodinos y misteriosos en su mayoría.`,
        rasgoRacial: "+10 Talento Percepción",
        subrace: ["Altos", "Silvanos", "Grises"],        
        isSpecial: 0
    },
    {
        id: 3,
        name: "Enanos",
        descriptions: `Los Enanos, son una raza extraordinaria, resistente y milenaria como los elfos, que
                    lleva soportando los envites del Destino y las invasiones del Inframundo durante siglos
                    y siglos, evitando que el mundo exterior sufra las terribles consecuencias de unas
                    hordas de demonios, no-muertos y vampiros que podrían poner fin al mundo conocido
                    en cuestión de meses. Son longevos, pueden llegar a cumplir los trescientos años o
                    más de edad, pero su capacidad reproductiva realmente baja, lo que compensan con
                    una gran resistencia física, Salvaciones y voluntad o ingenio a prueba de bombas,
                    además de ser terribles guerreros en el cuerpo a cuerpo o ingenieros militares de élite,
                    famosos por sus fortificaciones, recintos amurallados o portones a prueba de señores
                    malignos poderosos, además de los mejores herreros del mundo conocido. De sus
                    manos han salido las armas legendarias más potentes de la historia, y los grandes
                    héroes las han llevado con orgullo. Encontrar en unas ruinas un arma de estas
                    características, es un auténtico regalo de los Dioses.`,
        rasgoRacial: "+10 TS Fortaleza",
        subrace: ["Blancos", "Montañeses", "Torgemíes", "Umli"],
        isSpecial: 0
    },
    {
        id: 4,
        name: "Medianos",
        descriptions: `Los Medianos, son una raza pequeña, tranquila y bastante bucólica, amante de los
                    espacios abiertos, la vida campestre y el comercio, adaptable a cualquier situación y
                    muy sociable, teniendo un contacto fluido y constante con las demás razas, sin que
                    ello represente un problema o un conflicto. Los Hombres toleran bien a estos
                    pequeños habitantes de huertos, aldeas menudas y parloteo incesante, los cuales son
                    muy aptos para tareas artesanales, aprendizaje de lenguas o la picaresca y el engaño,
                    ya que algunos mercaderes medianos cuentan como los más espabilados de todos los
                    reinos, y los más prósperos o enriquecidos. Viven una media cercana a la de los seres
                    humanos, aunque se dice de algunos miembros de esta estirpe que alcanzaron los
                    doscientos años (eso está por demostrar), y son poco numerosos, ya que suelen tener
                    una descendencia de dos o tres hijos en los casos más excepcionales.`,
        rasgoRacial: "+10  Talento Sigilo ó +10 Talento Comunicación ",
        subrace: ["Esteparios", "Montañeses", "Ribereños", "Bosquimanos"],
        isSpecial: 0
    },
    {
        id: 5,
        name: "Silfos",
        descriptions: `Los Silfos, son una raza igualmente antiquísima, milenaria y misteriosa, cuya existencia
                    se remonta incluso a antes de los orígenes del mundo, o de los propios Elfos, que son
                    los herederos de las tradiciones y artes de este extraño pueblo hermafrodita, que vive
                    en sociedades jerárquicas conocidas como colmenas, en las que cada miembro de la
                    etnia tiene unas funciones específicas y relativas a sus talentos y dotes naturales. Cada
                    colmena está dirigida por una o varias “reinas madres”, y son las únicas hembras
                    fértiles de la progenie, la cual puede llegar a varios miles o apenas unos centenares. En
                    la colmena también hay varones, pero la mayoría son estériles y simplemente obreros
                    de la comunidad o artesanos o eruditos brillantes. Viven en simbiosis con los Madi
                    Silfih (los “amigos de los Silfos”), una progenie de seres humanos que se unió a las
                    colmenas en la noche de los tiempos (por lo que es fácil hacerse un Madi Silfih de cara
                    al reglamento, basta con añadirle algunos detalles y pagar los Puntos de Aventura
                    necesarios). Actualmente, los Madíes suponen el 90% de las colmenas, y los Silfos
                    puros están en lento retroceso, por lo que se piensa que el fin de la progenie está
                    cerca. Muy resistentes, rápidos e inteligentes, los Silfos pueden despuntar en cualquier
                    oficio de aventurero, y cuentan con una longevidad elevada, de hasta un milenio
                    completo de edad, en el que llegan a aprender multitud de artes, ciencias y
                    especialidades. Lamentablemente, su escasez ronda lo legendario, y verlos es casi tan
                    milagroso como creer en ellos…`,
        rasgoRacial: "+20 Talento Movimiento",
        subrace: ["Costeros", "Continentales", "Amassioh", "Alados"],
        isSpecial: 0
    },
    {
        id: 6,
        name: "Semi Orcos",
        descriptions: `Los Semi Orcos, son una estirpe de mestizos a la vez desgraciada y privilegiada, pues
                    cuentan con los mejor de las dos etnias de las que proceden (los Orcos y los Hombres),
                    pero están marcados con la maldición de los parias, porque nadie les quiere en
                    ninguna parte del mundo, o los miran como el fruto de una violación o una saqueo de
                    las hordas malignas, a los que los aldeanos temerosos están demasiado
                    acostumbrados. Por esto, los semiorcos llevan una vida de criminalidad y marginalidad
                    en los casos más comunes, rallando el límite de lo legal y siendo forajidos o
                    aventureros esporádicos, espadas de alquiler o guardaespaldas y matones en los
                    barrios bajos, en donde es muy apreciada su furia y su ardor guerrero, además de su
                    lealtad ciega a individuos más poderosos. Si el semi orco se deja llevar por su lado más
                    humano, tenderá a ocultar su naturaleza a los demás, llevar una existencia misteriosa
                    y defender las causas justas allí donde vaya, siempre desde las sombras y no
                    esperando recibir grandes recompensas o felicitaciones a cambio.`,
        rasgoRacial: "+10 Talento Percepción",
        subrace: ["Sangre Oscura", "Semi Trasgos", "Semi Kieri", "Sangre Débil"],
        isSpecial: 0
    },


]