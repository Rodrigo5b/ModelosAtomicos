// BASE DE DATOS COMPLETA DE LOS MODELOS ATÓMICOS
const atomicModels = [
    {
        id: 'democrito',
        year: 'c. 400 a.C.',
        title: 'Materia Discontinua',
        scientist: 'Demócrito y Leucipo',
        lifespan: '460 a.C. - 370 a.C.',
        badge: 'Filosofía Griega',
        image: 'images/democritoyleucipo.png',
        bio: 'Filósofos griegos fundadores de la escuela atomista. Propusieron la existencia de partículas indivisibles basadas en el razonamiento filosófico.',
        overview: 'Demócrito y Leucipo razonaron que la materia no podía dividirse infinitamente. Postularon que al dividir la materia repetidamente se llegaría a una partícula indivisible e indestructible a la que llamaron **átomo** (del griego *a-tomo*: sin división).',
        quote: 'Nada existe excepto átomos y espacio vacío; todo lo demás es opinión.',
        postulates: [
            'La materia está formada por partículas infinitamente pequeñas llamadas átomos.',
            'Los átomos son indivisibles, indestructibles e invisibles al ojo humano.',
            'Los átomos varían en forma, tamaño y peso, lo que explica las distintas propiedades de la materia.',
            'Entre los átomos existe únicamente espacio vacío.'
        ],
        experimentTitle: 'Razonamiento Filosófico y Analogía de la Piedra',
        experiment: 'No realizaron experimentos científicos en el sentido moderno. Su deducción provino de experimentos mentales: si rompes una piedra a la mitad, sigue siendo piedra; si la divides de manera continua, debe existir un límite indivisible para evitar que la materia desaparezca en la nada.',
        pros: [
            'Introdujo el concepto fundamental de "átomo".',
            'Primer intento de explicar la diversidad del mundo físico mediante constituyentes simples.'
        ],
        cons: [
            'Falta de método y prueba experimental empírica.',
            'Rechazado en su época por Aristóteles y Platón, lo que retrasó el concepto por más de 2000 años.'
        ],
        interactiveType: 'democrito'
    },
    {
        id: 'dalton',
        year: '1803',
        title: 'Modelo de la Esfera Sólida',
        scientist: 'John Dalton',
        lifespan: '1766 - 1844',
        badge: 'Química Moderna',
        image: 'images/John_Dalton_by_Charles_Turner.jpg',
        bio: 'Químico, físico y meteorólogo británico. Formuló la primera base científica de la teoría atómica respaldada por datos cuantitativos de laboratorio.',
        overview: 'Dalton resucitó la idea atómica basándose en las leyes ponderales de la química (conservación de la masa y proporciones definidas). Imaginó los átomos como **esferas sólidas, compactas e indivisibles** (semejantes a bolas de billar).',
        quote: 'Podemos intentar crear o destruir un planeta tanto como crear o destruir un átomo de hidrógeno.',
        postulates: [
            'Los elementos están formados por átomos indivisibles e indestructibles.',
            'Todos los átomos de un mismo elemento son exactamente iguales en masa y propiedades.',
            'Los átomos de diferentes elementos tienen masas y propiedades distintas.',
            'Los compuestos químicos se forman por la combinación de átomos de distintos elementos en proporciones fijas e íntegras.'
        ],
        experimentTitle: 'Estudio de Leyes de los Gases y Reacciones Químicas',
        experiment: 'Dalton midió meticulosamente las masas de los reactivos y productos en diversas reacciones químicas, descubriendo la "Ley de las proporciones múltiples". Demostró que los elementos se combinan siempre en relaciones de números enteros sencillos.',
        pros: [
            'Primera teoría atómica con base experimental científica.',
            'Explicó con éxito las leyes fundamentales de la química cuantitativa.'
        ],
        cons: [
            'Consideraba al átomo indivisible (no conocía las partículas subatómicas).',
            'Afirmaba que los átomos de un mismo elemento eran siempre idénticos (desconocía los isótopos).'
        ],
        interactiveType: 'dalton'
    },
    {
        id: 'thomson',
        year: '1897',
        title: 'Modelo del Budín de Pasas',
        scientist: 'Joseph John Thomson',
        lifespan: '1856 - 1940',
        badge: 'Física de Partículas',
        image: 'images/thomson_joseph_john_1.jpg',
        bio: 'Físico británico, galardonado con el Premio Nobel de Física en 1906 por el descubrimiento del electrón y sus estudios sobre la conducción eléctrica en gases.',
        overview: 'Thomson demostró que el átomo no era indivisible. Al descubrir el **electrón**, propuso un modelo donde el átomo era una esfera con carga eléctrica positiva uniforme, en la cual se hallaban incrustados los electrones negativos, como **pasas en un budín**.',
        quote: 'Dado que los electrones están cargados negativamente y el átomo es neutro, debe existir una carga positiva.',
        postulates: [
            'El átomo es divisible y está formado por subpartículas.',
            'El átomo consiste en una esfera continua de masa con carga eléctrica positiva.',
            'Los electrones (carga negativa) están incrustados uniformemente en la masa positiva.',
            'La cantidad de carga positiva neutraliza la carga negativa de los electrones.'
        ],
        experimentTitle: 'Experimento con el Tubo de Rayos Catódicos',
        experiment: 'Thomson aplicó campos eléctricos y magnéticos a los rayos catódicos. Al notar que el haz se desviaba hacia la placa positiva, concluyó que los rayos estaban compuestos por partículas con carga negativa mucho más livianas que el átomo de hidrógeno: el electrón.',
        pros: [
            'Descubrimiento revolucionario de la primera partícula subatómica: el electrón.',
            'Explicó fenómenos de electrificación y formación de iones.'
        ],
        cons: [
            'No explicaba la existencia de un núcleo atómico concentrado.',
            'Incapaz de explicar la estabilidad del átomo y los espectros de emisión.'
        ],
        interactiveType: 'thomson'
    },
    {
        id: 'rutherford',
        year: '1911',
        title: 'Modelo Planetario / Núcleo',
        scientist: 'Ernest Rutherford',
        lifespan: '1871 - 1937',
        badge: 'Física Nuclear',
        image: 'images/Ernest_Rutherford2.jpg',
        bio: 'Físico neozelandés, considerado el padre de la física nuclear. Premio Nobel de Química en 1908 por sus investigaciones sobre la desintegración de los elementos.',
        overview: 'Tras su famoso experimento, Rutherford demostró que el átomo está prácticamente vacío. Propuso el **modelo planetario**: un **núcleo central extremadamente denso y positivo** concentrando casi toda la masa, con los electrones girando a gran distancia a su alrededor.',
        quote: 'Fue el evento más increíble de mi vida... Tan increíble como si le dispararas un proyectil de 15 pulgadas a un papel de seda y este rebotara y te golpeara.',
        postulates: [
            'El átomo posee un núcleo central con carga positiva muy pequeñísimo pero sumamente denso.',
            'La mayor parte del volumen del átomo es espacio vacío.',
            'Los electrones giran a gran velocidad en órbitas circulares alrededor del núcleo, como los planetas al sol.',
            'La fuerza de atracción electrostática entre el núcleo (+) y electrones (-) mantiene la estabilidad.'
        ],
        experimentTitle: 'Experimento de la Lámina de Oro',
        experiment: 'Bombardeó una finísima lámina de oro con partículas alfa (α, positivas). La mayoría atravesó la lámina sin desviarse, pero algunas pocas sufrieron desviaciones drásticas o rebotaron. Esto demostró que la masa positiva no estaba distribuida (como decía Thomson), sino hiperconcentrada en el centro.',
        pros: [
            'Descubrimiento del núcleo atómico concentrado.',
            'Estableció que el átomo es mayoritariamente espacio vacío.'
        ],
        cons: [
            'Según la electrodinámica clásica, los electrones acelerados al girar deberían perder energía radiante y colapsar contra el núcleo en una fracción de segundo.',
            'No explicaba los espectros de líneas discretas de los átomos.'
        ],
        interactiveType: 'rutherford'
    },
    {
        id: 'bohr',
        year: '1913',
        title: 'Modelo de Niveles Cuantizados',
        scientist: 'Niels Bohr',
        lifespan: '1885 - 1962',
        badge: 'Mecánica Cuántica',
        image: 'images/niels_bohr.jpg',
        bio: 'Físico danés que realizó contribuciones fundamentales para la comprensión de la estructura del átomo y la mecánica cuántica. Premio Nobel de Física en 1922.',
        overview: 'Para solucionar el problema de Rutherford, Bohr aplicó los conceptos cuánticos de Planck. Postuló que los electrones solo orbitan en **niveles de energía fijos y cuantizados**. Al cambiar de nivel, absorben o emiten un **fotón de luz** de energía definida.',
        quote: 'Cualquiera que no quede impresionado por la teoría cuántica no la ha entendido.',
        postulates: [
            'Los electrones giran en órbitas circulares cuantizadas sin emitir radiación (estados estacionarios).',
            'Solo están permitidas ciertas órbitas donde el momento angular del electrón es múltiplo entero de h/2π.',
            'Un electrón emite energía (en forma de fotón de luz) únicamente cuando salta de una órbita superior a una inferior.',
            'La energía absorbida o emitida equivale exactamente a la diferencia de energía entre los dos niveles.'
        ],
        experimentTitle: 'Análisis de Espectros de Emisión del Hidrógeno',
        experiment: 'Bohr estudió la luz emitida por el gas de hidrógeno al ser excitado eléctricamente. Observó que al descomponerla con un prisma no producía un arcoíris continuo, sino líneas de color discretas y exactas, coincidiendo perfectamente con sus ecuaciones de saltos cuánticos.',
        pros: [
            'Explicó con absoluta precisión matemática el espectro del átomo de hidrógeno y la estabilidad atómica.',
            'Unió la estructura atómica con la teoría de fotones cuánticos.'
        ],
        cons: [
            'Fallaba al intentar predecir espectros de átomos con más de un electrón (átomos polielectrónicos).',
            'Mezclaba conceptos clásicos con cuánticos de manera arbitraria.'
        ],
        interactiveType: 'bohr'
    },
    {
        id: 'sommerfeld',
        year: '1916',
        title: 'Órbitas Elípticas y Relatividad',
        scientist: 'Arnold Sommerfeld',
        lifespan: '1868 - 1951',
        badge: 'Física Teórica',
        image: 'images/Arnold_Sommerfeld.jpg',
        bio: 'Físico teórico alemán que perfeccionó el modelo de Bohr y fue pionero en la física atómica y cuántica, nominando a numerosos premios Nobel.',
        overview: 'Sommerfeld generalizó el modelo de Bohr introduciendo **órbitas elípticas** además de circulares y aplicando la teoría de la relatividad especial de Einstein para los electrones que se mueven a velocidades cercanas a la luz.',
        quote: 'Debemos añadir subniveles de energía para explicar la fina estructura espectral.',
        postulates: [
            'Dentro de un mismo nivel energético existen **subniveles de energía**.',
            'Las órbitas de los electrones pueden ser circulares o elípticas.',
            'El electrón alcanza velocidades relativistas en sus acercamientos al núcleo, modificando ligeramente su masa y energía.',
            'Se introduce el segundo número cuántico azimutal (l).'
        ],
        experimentTitle: 'Espectroscopía de Alta Resolución (Efecto Fino)',
        experiment: 'Utilizando espectroscopios de mayor resolución, observó que las líneas del espectro del hidrógeno no eran simples, sino que se descomponían en varias líneas casi juntas (estructura fina). Esto requirió modificar el modelo de Bohr.',
        pros: [
            'Explicó la estructura fina de las líneas espectrales.',
            'Introdujo la idea de los subniveles de energía (s, p, d, f).'
        ],
        cons: [
            'Sigue siendo un modelo semi-clásico con trayectorias definidas para el electrón.',
            'Tampoco resolvía por completo los átomos complejos.'
        ],
        interactiveType: 'sommerfeld'
    },
    {
        id: 'schrodinger',
        year: '1926',
        title: 'Modelo Cuántico-Ondulatorio',
        scientist: 'Erwin Schrödinger',
        lifespan: '1887 - 1961',
        badge: 'Mecánica Cuántica Ondulatoria',
        image: 'images/Erwin_Schrödinger.jpg',
        bio: 'Físico austríaco galardonado con el Premio Nobel de Física en 1933. Desarrolló la ecuación fundamental de la mecánica cuántica ondulatoria.',
        overview: 'Schrödinger abandonó la idea de órbitas fijas. Basándose en la dualidad onda-partícula de de Broglie y el principio de incertidumbre de Heisenberg, trató al electrón como una **onda de materia**. Definió los **orbitales** como regiones tridimensionales de alta probabilidad para encontrar al electrón.',
        quote: 'La tarea no consiste en ver lo que nadie ha visto todavía, sino en pensar lo que nadie ha pensado aún sobre lo que todo el mundo ve.',
        postulates: [
            'Los electrones no siguen trayectorias fijas, sino que se comportan como ondas electromagnéticas estacionarias.',
            'No se puede determinar la posición exacta de un electrón, sino la **probabilidad** de su ubicación.',
            'La zona tridimensional donde es más probable encontrar un electrón se denomina **orbital atómico**.',
            'El estado del electrón queda definido por 4 números cuánticos (n, l, m, s).'
        ],
        experimentTitle: 'Ecuación de Onda Diferencial (Ψ)',
        experiment: 'Desarrolló la famosa Ecuación de Schrödinger (ĤΨ = EΨ). Al resolver esta compleja ecuación matemática, se obtienen las funciones de onda que describen geométricamente las nubes de probabilidad electrónica (orbitales s, p, d, f).',
        pros: [
            'Modelo actual y más riguroso para la comprensión química y física moderna.',
            'Explica perfectamente la tabla periódica, los enlaces químicos y los átomos complejos.'
        ],
        cons: [
            'Alta complejidad matemática abstracta.',
            'No describe efectos cuánticos relativistas extremos (resueltos más tarde por Paul Dirac).'
        ],
        interactiveType: 'schrodinger'
    },
    {
        id: 'chadwick',
        year: '1932',
        title: 'Descubrimiento del Neutrón',
        scientist: 'James Chadwick',
        lifespan: '1891 - 1974',
        badge: 'Física Núcleo-Subatómica',
        image: 'images/james-chadwick-CPJADP.jpg',
        bio: 'Físico inglés galardonado con el Premio Nobel de Física en 1935 por descubrir la existencia del neutrón, completando la estructura básica del núcleo.',
        overview: 'Aunque el modelo de Schrödinger explicaba la nube de electrones, la masa del núcleo no coincidia solo con el número de protones. Chadwick demostró experimentalmente la existencia del **neutrón**: una partícula sin carga eléctrica en el núcleo con masa similar a la del protón.',
        quote: 'El neutrón demostró ser la herramienta clave para la fisión del átomo.',
        postulates: [
            'El núcleo atómico está constituido por **protones** (positivos) y **neutrones** (neutros).',
            'Los neutrones evitan la repulsión electrostática destructiva entre protones positivos mediante la fuerza nuclear fuerte.',
            'La masa atómica aproximada es la suma de la cantidad de protones y neutrones.',
            'Completó la visión moderna del núcleo atómico e hizo posible el estudio de isótopos y física nuclear.'
        ],
        experimentTitle: 'Bombardeo de Berilio con Partículas Alfa',
        experiment: 'Chadwick bombardeó láminas de Berilio con partículas alfa. Observó que el berilio emitía una radiación penetrante sin carga eléctrica. Al impactar esta radiación contra parafina, expulsaba protones con gran energía, demostrando que la radiación estaba compuesta por partículas de masa neutra: los neutrones.',
        pros: [
            'Resolvió el misterio de la masa no contabilizada en el núcleo.',
            'Permitió la comprensión de los isótopos y la energía nuclear.'
        ],
        cons: [
            'Posteriormente se descubrió que protones y neutrones no son indivisibles, sino formados por quarks.'
        ],
        interactiveType: 'chadwick'
    }
];

// PREGUNTAS PARA EL QUIZ INTERACTIVO
const quizData = [
    {
        q: "¿Qué científico propuso por primera vez la existencia del núcleo atómico mediante el experimento de la lámina de oro?",
        options: ["John Dalton", "J.J. Thomson", "Ernest Rutherford", "Niels Bohr"],
        answer: 2
    },
    {
        q: "El modelo del 'Budín de pasas' donde los electrones están incrustados en masa positiva fue ideado por:",
        options: ["J.J. Thomson", "Demócrito", "Erwin Schrödinger", "James Chadwick"],
        answer: 0
    },
    {
        q: "¿Qué novedad introdujo Niels Bohr para solucionar la pérdida de energía del electrón?",
        options: ["Órbitas elípticas", "Niveles de energía cuantizados y saltos de fotones", "Nube de probabilidad", "Subpartículas sin carga"],
        answer: 1
    },
    {
        q: "¿Qué partícula subatómica descubrió James Chadwick en 1932 completando la masa nuclear?",
        options: ["El electrón", "El protón", "El neutrón", "El fotón"],
        answer: 2
    },
    {
        q: "En el modelo de Schrödinger, la región con mayor probabilidad de hallar un electrón se llama:",
        options: ["Órbita rígida", "Orbital atómico", "Núcleo denso", "Lámina de masa"],
        answer: 1
    }
];

// ESTADO GLOBAL DE LA APLICACIÓN
let currentIndex = 0;
let animationFrameId = null;
let canvas, ctx;
let simState = {
    clickTriggered: false,
    particles: [],
    angle: 0,
    orbitRadius: 80,
    electronLevel: 1,
    photonEmission: []
};

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('atomCanvas');
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    renderTimeline();
    loadModel(0);
    setupEventListeners();
    initQuiz();
});

function resizeCanvas() {
    if (!canvas) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

// RENDERIZAR LÍNEA DE TIEMPO
function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    container.innerHTML = '<div class="timeline-line"></div>';

    atomicModels.forEach((model, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${index === 0 ? 'active' : ''}`;
        item.onclick = () => loadModel(index);
        item.innerHTML = `
            <div class="timeline-node font-orbitron">${index + 1}</div>
            <div class="fw-bold text-info fs-7 font-orbitron">${model.year}</div>
            <div class="fs-8 text-light opacity-75 text-truncate" style="max-width: 140px;">${model.scientist}</div>
        `;
        container.appendChild(item);
    });
}

// CARGAR MODELO SELECCIONADO
function loadModel(index) {
    if (index < 0 || index >= atomicModels.length) return;
    currentIndex = index;

    const model = atomicModels[index];

    // Actualizar Línea de tiempo activa
    document.querySelectorAll('.timeline-item').forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });

    // Scroll suave timeline
    const activeNode = document.querySelectorAll('.timeline-item')[index];
    if (activeNode) {
        activeNode.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Actualizar Textos e Información UI
    document.getElementById('modelYear').textContent = model.year;
    document.getElementById('modelTitle').textContent = model.title;
    document.getElementById('scientistName').textContent = model.scientist;
    document.getElementById('modelConceptBadge').textContent = model.badge;
    document.getElementById('modelOverview').innerHTML = model.overview;
    document.getElementById('modelQuote').textContent = `"${model.quote}"`;

    // Postulados
    const postUl = document.getElementById('modelPostulates');
    postUl.innerHTML = '';
    model.postulates.forEach(post => {
        const li = document.createElement('li');
        li.className = 'list-group-item bg-transparent text-light border-0 ps-0 d-flex gap-2 align-items-start';
        li.innerHTML = `<i class="fa-solid fa-atom text-info mt-1 fs-8"></i> <span>${post}</span>`;
        postUl.appendChild(li);
    });

    // Experimento
    document.getElementById('experimentTitle').textContent = model.experimentTitle;
    document.getElementById('modelExperiment').textContent = model.experiment;

    // Pros y Cons
    const prosUl = document.getElementById('modelPros');
    prosUl.innerHTML = model.pros.map(p => `<li class="mb-1">${p}</li>`).join('');
    const consUl = document.getElementById('modelCons');
    consUl.innerHTML = model.cons.map(c => `<li class="mb-1">${c}</li>`).join('');

    // Datos del Científico
    document.getElementById('scientistImage').src = model.image;
    document.getElementById('scientistFullName').textContent = model.scientist;
    document.getElementById('scientistLifespan').textContent = model.lifespan;
    document.getElementById('scientistBio').textContent = model.bio;

    // Barra de progreso presentación
    const pct = ((index + 1) / atomicModels.length) * 100;
    document.getElementById('presentationProgress').style.width = `${pct}%`;
    document.getElementById('progressText').textContent = `Modelo ${index + 1} de ${atomicModels.length}`;

    // Reset a primera pestaña
    const firstTab = new bootstrap.Tab(document.getElementById('tab-overview'));
    firstTab.show();

    // Iniciar simulación canvas correspondiente
    setupCanvasSimulation(model.interactiveType);
}

// EVENT LISTENERS & CONTROLES
function setupEventListeners() {
    document.getElementById('btnPrev').onclick = () => loadModel(currentIndex - 1);
    document.getElementById('btnNext').onclick = () => loadModel(currentIndex + 1);

    // Teclas de dirección para modo presentación
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') loadModel(currentIndex + 1);
        if (e.key === 'ArrowLeft') loadModel(currentIndex - 1);
    });

    // Buscador en tiempo real
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) return;

        const foundIdx = atomicModels.findIndex(m => 
            m.title.toLowerCase().includes(query) ||
            m.scientist.toLowerCase().includes(query) ||
            m.year.toLowerCase().includes(query) ||
            m.overview.toLowerCase().includes(query)
        );

        if (foundIdx !== -1 && foundIdx !== currentIndex) {
            loadModel(foundIdx);
        }
    });

    // Acción interactiva en Canvas
    document.getElementById('btnInteractiveAction').onclick = () => {
        simState.clickTriggered = true;
    };

    document.getElementById('btnResetCanvas').onclick = () => {
        setupCanvasSimulation(atomicModels[currentIndex].interactiveType);
    };

    // Canvas Click
    canvas.addEventListener('click', () => {
        simState.clickTriggered = true;
    });
}

// SIMULACIONES EN CANVAS PARA CADA MODELO
function setupCanvasSimulation(type) {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    simState = { clickTriggered: false, particles: [], angle: 0, orbitRadius: 60, electronLevel: 1, photonEmission: [] };

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // Inicializar partículas para modelos que lo requieran
    if (type === 'democrito') {
        for (let i = 0; i < 25; i++) {
            simState.particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: 6 + Math.random() * 8
            });
        }
    } else if (type === 'rutherford') {
        createAlphaParticles();
    }

    function createAlphaParticles() {
        simState.particles = [];
        for (let i = 0; i < 15; i++) {
            simState.particles.push({
                x: -20 - Math.random() * 200,
                y: centerY - 100 + Math.random() * 200,
                vx: 3.5,
                vy: 0,
                deflected: false
            });
        }
    }

    // LOOP DE ANIMACIÓN
    function animate() {
        ctx.clearRect(0, 0, width, height);

        switch (type) {
            case 'democrito':
                drawDemocrito(centerX, centerY);
                break;
            case 'dalton':
                drawDalton(centerX, centerY);
                break;
            case 'thomson':
                drawThomson(centerX, centerY);
                break;
            case 'rutherford':
                drawRutherford(centerX, centerY);
                break;
            case 'bohr':
                drawBohr(centerX, centerY);
                break;
            case 'sommerfeld':
                drawSommerfeld(centerX, centerY);
                break;
            case 'schrodinger':
                drawSchrodinger(centerX, centerY);
                break;
            case 'chadwick':
                drawChadwick(centerX, centerY);
                break;
        }

        simState.angle += 0.03;
        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}

// DIBUJO DE CADA MODELO EN CANVAS

function drawDemocrito(cx, cy) {
    ctx.fillStyle = '#00f2fe';
    document.getElementById('simStatus').textContent = 'Esferas Indivisibles en Movimiento';

    simState.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    });

    if (simState.clickTriggered) {
        simState.particles.forEach(p => {
            p.vx = (Math.random() - 0.5) * 6;
            p.vy = (Math.random() - 0.5) * 6;
        });
        simState.clickTriggered = false;
    }
}

function drawDalton(cx, cy) {
    document.getElementById('simStatus').textContent = 'Átomo Esférico Rígido y Compacto';
    
    const r = 70 + (simState.clickTriggered ? Math.sin(simState.angle * 5) * 10 : 0);

    // Esfera sólida tipo bola de billar
    let grad = ctx.createRadialGradient(cx - 20, cy - 20, 10, cx, cy, r);
    grad.addColorStop(0, '#4facfe');
    grad.addColorStop(0.8, '#002661');
    grad.addColorStop(1, '#000511');

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Orbitron';
    ctx.textAlign = 'center';
    ctx.fillText('Masa Indivisible', cx, cy + r + 25);
}

// --- FUNCIONES MEJORADAS (THOMSON HASTA SCHRÖDINGER) ---

function drawThomson(cx, cy) {
    document.getElementById('simStatus').textContent = 'Masa Positiva con Electrones Incrustados';

    const radius = Math.min(canvas.width, canvas.height) * 0.28;

    // Inicialización de electrones en posiciones distribuidas si es la primera iteración
    if (!simState.thomsonElectrons) {
        simState.thomsonElectrons = [];
        const count = 10;
        for (let i = 0; i < count; i++) {
            const r = (Math.random() * 0.65 + 0.15) * radius;
            const a = Math.random() * Math.PI * 2;
            simState.thomsonElectrons.push({
                x: Math.cos(a) * r,
                y: Math.sin(a) * r,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8
            });
        }
    }

    // Efecto de excitación/explotación al hacer clic
    if (simState.clickTriggered) {
        simState.thomsonElectrons.forEach(e => {
            e.vx = (Math.random() - 0.5) * 6;
            e.vy = (Math.random() - 0.5) * 6;
        });
        simState.clickTriggered = false;
    }

    // Esfera fluida de masa positiva (+1)
    let grad = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius);
    grad.addColorStop(0, 'rgba(255, 60, 100, 0.7)');
    grad.addColorStop(0.7, 'rgba(255, 8, 68, 0.35)');
    grad.addColorStop(1, 'rgba(255, 8, 68, 0.05)');

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 8, 68, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Símbolos '+' flotantes de la masa positiva
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.font = 'bold 16px Orbitron';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const plusPositions = [
        {x: -0.4, y: -0.3}, {x: 0.3, y: -0.5},
        {x: -0.2, y: 0.4}, {x: 0.5, y: 0.2},
        {x: 0.0, y: -0.1}, {x: -0.5, y: 0.1}
    ];
    plusPositions.forEach(p => {
        ctx.fillText('+', cx + p.x * radius, cy + p.y * radius);
    });

    // Movimiento oscilatorio suave de electrones incrustados
    simState.thomsonElectrons.forEach(e => {
        e.x += e.vx;
        e.y += e.vy;

        // Amortiguación hacia velocidad normal
        e.vx *= 0.98;
        e.vy *= 0.98;

        // Mantener dentro de la esfera positiva (rebote)
        const dist = Math.sqrt(e.x * e.x + e.y * e.y);
        if (dist > radius - 15) {
            const angle = Math.atan2(e.y, e.x);
            e.x = Math.cos(angle) * (radius - 15);
            e.y = Math.sin(angle) * (radius - 15);
            e.vx *= -0.8;
            e.vy *= -0.8;
        }

        const ex = cx + e.x;
        const ey = cy + e.y;

        // Dibujar electrón con resplandor neón
        ctx.beginPath();
        ctx.arc(ex, ey, 9, 0, Math.PI * 2);
        ctx.fillStyle = '#00f2fe';
        ctx.shadowColor = '#00f2fe';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#000000';
        ctx.font = 'bold 12px Orbitron';
        ctx.fillText('-', ex, ey);
    });
}

function drawRutherford(cx, cy) {
    document.getElementById('simStatus').textContent = 'Experimento Lámina de Oro (Haz clic para ráfaga de α)';

    const nucleusRadius = 14;

    // Mantenimiento de flujo continuo de partículas alfa
    if (!simState.rutherfordParticles || simState.rutherfordParticles.length === 0) {
        simState.rutherfordParticles = [];
        for (let i = 0; i < 18; i++) {
            simState.rutherfordParticles.push({
                x: -30 - Math.random() * 300,
                y: cy - 120 + Math.random() * 240,
                vx: 4 + Math.random() * 1.5,
                vy: 0,
                deflected: false,
                trail: []
            });
        }
    }

    // Acción interactiva: Ráfaga de partículas alfa adicionales
    if (simState.clickTriggered) {
        for (let i = 0; i < 10; i++) {
            simState.rutherfordParticles.push({
                x: -10 - i * 15,
                y: cy - 40 + Math.random() * 80,
                vx: 6,
                vy: 0,
                deflected: false,
                trail: []
            });
        }
        simState.clickTriggered = false;
    }

    // Dibujar Órbita del electrón lejano de Rutherford
    const orbitR = Math.min(canvas.width, canvas.height) * 0.35;
    ctx.beginPath();
    ctx.arc(cx, cy, orbitR, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.15)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Electrón orbitando
    const ex = cx + Math.cos(simState.angle * 1.5) * orbitR;
    const ey = cy + Math.sin(simState.angle * 1.5) * orbitR;
    ctx.beginPath();
    ctx.arc(ex, ey, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#00f2fe';
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Núcleo central hiperdenso positivo
    let grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, nucleusRadius);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.4, '#ff0844');
    grad.addColorStop(1, '#800020');

    ctx.beginPath();
    ctx.arc(cx, cy, nucleusRadius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.shadowColor = '#ff0844';
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px Orbitron';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('+', cx, cy);

    // Actualizar y proyectar partículas alfa (α)
    for (let i = simState.rutherfordParticles.length - 1; i >= 0; i--) {
        let p = simState.rutherfordParticles[i];

        // Guardar historial para estela
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 8) p.trail.shift();

        p.x += p.vx;
        p.y += p.vy;

        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Desviación por Repulsión de Coulomb al acercarse al núcleo positivo
        if (dist < 80 && !p.deflected) {
            const force = (80 - dist) / 80;
            const angle = Math.atan2(dy, dx);

            p.vx += Math.cos(angle) * force * 1.2;
            p.vy += Math.sin(angle) * force * 1.2;

            if (dist < nucleusRadius + 10) {
                p.deflected = true; // Rebote frontal drástico
            }
        }

        // Dibujar estela
        ctx.beginPath();
        if (p.trail.length > 0) {
            ctx.moveTo(p.trail[0].x, p.trail[0].y);
            for (let t = 1; t < p.trail.length; t++) {
                ctx.lineTo(p.trail[t].x, p.trail[t].y);
            }
        }
        ctx.strokeStyle = p.deflected ? 'rgba(255, 8, 68, 0.4)' : 'rgba(57, 255, 20, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.deflected ? '#ff0844' : '#39ff14';
        ctx.fill();

        // Reiniciar cuando sale del canvas
        if (p.x > canvas.width + 50 || p.x < -100 || p.y < -50 || p.y > canvas.height + 50) {
            p.x = -20 - Math.random() * 100;
            p.y = cy - 120 + Math.random() * 240;
            p.vx = 4 + Math.random() * 1.5;
            p.vy = 0;
            p.deflected = false;
            p.trail = [];
        }
    }
}

function drawBohr(cx, cy) {
    document.getElementById('simStatus').textContent = 'Niveles Cuantizados (Haz clic para Salto Cuántico)';

    const baseR = Math.min(canvas.width, canvas.height) * 0.16;
    const orbits = [baseR, baseR * 1.75, baseR * 2.5];

    if (!simState.bohrLevel) simState.bohrLevel = 0; // Nivel actual 0, 1 o 2

    // Dibujar órbitas cuantizadas estacionarias
    orbits.forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = idx === simState.bohrLevel ? 'rgba(0, 242, 254, 0.8)' : 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = idx === simState.bohrLevel ? 2 : 1;
        if (idx !== simState.bohrLevel) ctx.setLineDash([6, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Etiqueta de nivel n=1, n=2, n=3
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = '10px Orbitron';
        ctx.fillText(`n=${idx + 1}`, cx + r + 5, cy - 5);
    });

    // Núcleo
    ctx.beginPath();
    ctx.arc(cx, cy, 12, 0, Math.PI * 2);
    ctx.fillStyle = '#ff0844';
    ctx.shadowColor = '#ff0844';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Manejo de Salto Cuántico interactivo
    if (simState.clickTriggered) {
        const oldLevel = simState.bohrLevel;
        simState.bohrLevel = (simState.bohrLevel + 1) % orbits.length;
        simState.clickTriggered = false;

        // Si cae de nivel -> Emite fotón. Si sube -> Absorbe energía
        const currentR = orbits[simState.bohrLevel];
        const angle = simState.angle * 2;
        const ex = cx + Math.cos(angle) * currentR;
        const ey = cy + Math.sin(angle) * currentR;

        if (simState.bohrLevel < oldLevel) {
            // Emisión de fotón radiante
            simState.photonEmission.push({
                x: ex,
                y: ey,
                vx: Math.cos(angle) * 4,
                vy: Math.sin(angle) * 4,
                wavePhase: 0,
                opacity: 1.0,
                color: simState.bohrLevel === 0 ? '#39ff14' : '#00f2fe'
            });
        }
    }

    // Posición del electrón en la órbita permitida actual
    const currentR = orbits[simState.bohrLevel];
    const eAngle = simState.angle * (2 / (simState.bohrLevel + 1)); // Mayor velocidad en órbitas internas
    const ex = cx + Math.cos(eAngle) * currentR;
    const ey = cy + Math.sin(eAngle) * currentR;

    // Renderizar electrón
    ctx.beginPath();
    ctx.arc(ex, ey, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#00f2fe';
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Renderizar y animar emisión de fotones (onda sinoidal proyectada)
    for (let i = simState.photonEmission.length - 1; i >= 0; i--) {
        let ph = simState.photonEmission[i];
        ph.x += ph.vx;
        ph.y += ph.vy;
        ph.wavePhase += 0.4;
        ph.opacity -= 0.015;

        ctx.save();
        ctx.translate(ph.x, ph.y);
        ctx.rotate(Math.atan2(ph.vy, ph.vx));

        ctx.beginPath();
        ctx.moveTo(-15, 0);
        for (let w = -15; w <= 15; w += 2) {
            ctx.lineTo(w, Math.sin(ph.wavePhase + w * 0.3) * 6);
        }
        ctx.strokeStyle = ph.color;
        ctx.globalAlpha = Math.max(0, ph.opacity);
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = ph.color;
        ctx.font = '9px Orbitron';
        ctx.fillText('hν', 5, -10);
        ctx.restore();

        if (ph.opacity <= 0) simState.photonEmission.splice(i, 1);
    }
}

function drawSommerfeld(cx, cy) {
    document.getElementById('simStatus').textContent = 'Órbitas Elípticas y Subniveles Energéticos';

    const maxR = Math.min(canvas.width, canvas.height) * 0.32;

    // Configuración de Subniveles (s, p, d) con distintas elipticidades
    const sublevels = [
        { a: maxR * 0.9, b: maxR * 0.9, angleOffset: 0, speed: 1.2, color: '#00f2fe', label: 'Subnivel s (Circular)' },
        { a: maxR * 0.95, b: maxR * 0.45, angleOffset: Math.PI / 3, speed: 1.5, color: '#7f00ff', label: 'Subnivel p (Elíptica)' },
        { a: maxR * 1.0, b: maxR * 0.25, angleOffset: -Math.PI / 3, speed: 1.8, color: '#ff007f', label: 'Subnivel d (Elíptica extrema)' }
    ];

    // Núcleo en uno de los focos de las elipses
    ctx.beginPath();
    ctx.arc(cx, cy, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#ff0844';
    ctx.shadowColor = '#ff0844';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    sublevels.forEach(sub => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(sub.angleOffset);

        // Órbita elíptica
        ctx.beginPath();
        ctx.ellipse(0, 0, sub.a, sub.b, 0, 0, Math.PI * 2);
        ctx.strokeStyle = sub.color;
        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // Posición del electrón con velocidad relativista (más rápido al pasar cerca del centro)
        const t = simState.angle * sub.speed;
        const ex = Math.cos(t) * sub.a;
        const ey = Math.sin(t) * sub.b;

        // Dibujar electrón con resplandor
        ctx.beginPath();
        ctx.arc(ex, ey, 6, 0, Math.PI * 2);
        ctx.fillStyle = sub.color;
        ctx.shadowColor = sub.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.restore();
    });

    // Cambiar inclinaciones si se hace clic
    if (simState.clickTriggered) {
        simState.angle += 1.5;
        simState.clickTriggered = false;
    }
}

function drawSchrodinger(cx, cy) {
    document.getElementById('simStatus').textContent = 'Nube de Probabilidad Cuántica (Haz clic para alternar Orbital s / p)';

    if (simState.schrodingerMode === undefined) simState.schrodingerMode = 0; // 0: Orbital s, 1: Orbital p

    if (simState.clickTriggered) {
        simState.schrodingerMode = (simState.schrodingerMode + 1) % 2;
        simState.clickTriggered = false;
    }

    const scale = Math.min(canvas.width, canvas.height) * 0.28;

    // Generar nube de densidad de probabilidad electrónica en tiempo real
    const pointsCount = 450;
    ctx.fillStyle = '#00f2fe';

    for (let i = 0; i < pointsCount; i++) {
        let px, py, alpha;

        if (simState.schrodingerMode === 0) {
            // Orbital s (Simetría esférica - Distribución Gaussiana)
            const u1 = Math.random();
            const u2 = Math.random();
            const r = Math.sqrt(-2 * Math.log(u1)) * scale * 0.4;
            const theta = u2 * Math.PI * 2;

            px = cx + Math.cos(theta) * r;
            py = cy + Math.sin(theta) * r;
            alpha = Math.max(0.1, 1 - r / (scale * 1.2));
        } else {
            // Orbital p (Dos lóbulos direccionales en forma de 8)
            const u1 = Math.random();
            const r = Math.sqrt(-2 * Math.log(u1)) * scale * 0.45;
            const sign = Math.random() < 0.5 ? 1 : -1;

            const angleVar = (Math.random() - 0.5) * 0.8;
            const theta = (sign > 0 ? 0 : Math.PI) + angleVar;

            // Rotación suave del orbital p
            const rotAngle = simState.angle * 0.2;
            const rx = Math.cos(theta) * r;
            const ry = Math.sin(theta) * r;

            px = cx + rx * Math.cos(rotAngle) - ry * Math.sin(rotAngle);
            py = cy + rx * Math.sin(rotAngle) + ry * Math.cos(rotAngle);
            alpha = Math.max(0.15, 1 - r / (scale * 1.1));
        }

        ctx.globalAlpha = alpha * 0.6;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.globalAlpha = 1.0;

    // Núcleo cuántico
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '11px Orbitron';
    ctx.textAlign = 'center';
    ctx.fillText(simState.schrodingerMode === 0 ? 'Orbital 1s (Esférico)' : 'Orbital 2p (Lóbulos)', cx, cy + scale + 25);
}

function drawChadwick(cx, cy) {
    document.getElementById('simStatus').textContent = 'Exp. Berilio y Descubrimiento del Neutrón (Haz clic para disparar α)';

    // Inicializar estado especial de Chadwick si es la primera vez que entra
    if (!simState.chadwickParticles) {
        simState.chadwickParticles = [];
        simState.electrons = [
            { r: 75, angle: 0, speed: 0.04, tilt: 0.3 },
            { r: 110, angle: Math.PI / 2, speed: -0.025, tilt: -0.5 },
            { r: 140, angle: Math.PI, speed: 0.018, tilt: 0.8 }
        ];
        simState.projectiles = []; // Partículas alfa / Neutrones disparados
        simState.flashEffects = [];
    }

    // --- 1. DIBUJAR NÚCLEO ANIMADO (Protones y Neutrones) ---
    const time = simState.angle;
    const nucleusRadius = 11;

    // Definición 3D relativa de nucleones en el núcleo
    const nucleons = [
        { x: 0, y: 0, z: 12, type: 'p' },
        { x: -14, y: -10, z: 5, type: 'n' },
        { x: 14, y: -8, z: -5, type: 'p' },
        { x: -10, y: 12, z: -10, type: 'p' },
        { x: 12, y: 10, z: 8, type: 'n' },
        { x: 0, y: -16, z: 2, type: 'n' },
        { x: -18, y: 0, z: -12, type: 'p' },
        { x: 16, y: 0, z: 10, type: 'n' },
        { x: 0, y: 16, z: -2, type: 'n' }
    ];

    // Ordenar por coordenada Z simulada para dar profundidad 3D
    const rotatedNucleons = nucleons.map(n => {
        // Rotación tridimensional continua + vibración térmica
        const vibX = Math.sin(time * 8 + n.x) * 1.5;
        const vibY = Math.cos(time * 8 + n.y) * 1.5;

        const cosA = Math.cos(time * 0.8);
        const sinA = Math.sin(time * 0.8);

        const rx = n.x * cosA - n.z * sinA + vibX;
        const rz = n.x * sinA + n.z * cosA;
        const ry = n.y + vibY;

        return { ...n, rx, ry, rz };
    }).sort((a, b) => a.rz - b.rz);

    // Dibujar órbitas lejanas y electrones en movimiento
    simState.electrons.forEach(e => {
        e.angle += e.speed;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(e.tilt);

        // Órbita
        ctx.beginPath();
        ctx.ellipse(0, 0, e.r, e.r * 0.4, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.15)';
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Posición electrón
        const ex = Math.cos(e.angle) * e.r;
        const ey = Math.sin(e.angle) * e.r * 0.4;

        // Estela / Trail
        ctx.beginPath();
        ctx.arc(ex, ey, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#00f2fe';
        ctx.shadowColor = '#00f2fe';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.restore();
    });

    // Dibujar nucleones del núcleo central
    rotatedNucleons.forEach(n => {
        const scale = 1 + n.rz / 100;
        const nx = cx + n.rx * scale;
        const ny = cy + n.ry * scale;
        const r = nucleusRadius * scale;

        let grad = ctx.createRadialGradient(nx - r * 0.3, ny - r * 0.3, r * 0.1, nx, ny, r);
        if (n.type === 'p') {
            // Protón (+) Rojo
            grad.addColorStop(0, '#ff6b81');
            grad.addColorStop(0.7, '#ff0844');
            grad.addColorStop(1, '#800020');
        } else {
            // Neutrón (N) Azul/Gris metálico
            grad.addColorStop(0, '#e2e8f0');
            grad.addColorStop(0.7, '#64748b');
            grad.addColorStop(1, '#1e293b');
        }

        ctx.beginPath();
        ctx.arc(nx, ny, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Etiqueta + o N
        ctx.fillStyle = '#ffffff';
        ctx.font = `${Math.max(9, Math.floor(10 * scale))}px Orbitron`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(n.type === 'p' ? '+' : 'N', nx, ny);
    });

    // Leyenda del núcleo
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '11px Roboto';
    ctx.textAlign = 'center';
    ctx.fillText('Protones (+) y Neutrones (N)', cx, cy + 120);

    // --- 2. INTERACTIVIDAD: DISPARO DE PARTÍCULA ALFA Y REACCIÓN CON BERILIO ---
    if (simState.clickTriggered) {
        // Crear nueva partícula Alfa emitida desde la izquierda
        simState.projectiles.push({
            type: 'alpha',
            x: -30,
            y: cy - 30 + Math.random() * 60,
            vx: 5,
            vy: (Math.random() - 0.5) * 0.5,
            stage: 'approaching' // approaching, struck_be, ejected_neutron
        });
        simState.clickTriggered = false;
    }

    // Dibujar Lámina de Berilio de prueba a la izquierda
    const beX = cx - 110;
    ctx.fillStyle = 'rgba(255, 215, 0, 0.25)';
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 1.5;
    ctx.fillRect(beX - 6, cy - 60, 12, 120);
    ctx.strokeRect(beX - 6, cy - 60, 12, 120);
    ctx.fillStyle = '#ffd700';
    ctx.font = '10px Orbitron';
    ctx.fillText('Berilio (Be)', beX, cy - 68);

    // Dibujar Parafina (Detector de Protones) a la derecha
    const parX = cx + 110;
    ctx.fillStyle = 'rgba(57, 255, 20, 0.2)';
    ctx.strokeStyle = '#39ff14';
    ctx.fillRect(parX - 6, cy - 60, 12, 120);
    ctx.strokeRect(parX - 6, cy - 60, 12, 120);
    ctx.fillStyle = '#39ff14';
    ctx.font = '10px Orbitron';
    ctx.fillText('Parafina', parX, cy - 68);

    // Actualizar y renderizar proyectiles
    for (let i = simState.projectiles.length - 1; i >= 0; i--) {
        let p = simState.projectiles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Impacto en Berilio -> Se libera un NEUTRÓN
        if (p.type === 'alpha' && p.x >= beX && p.stage === 'approaching') {
            p.stage = 'ejected_neutron';
            p.type = 'neutron';
            p.vx = 6.5; // Alta velocidad
            p.vy = (Math.random() - 0.5) * 1.5;

            // Destello de reacción nuclear
            simState.flashEffects.push({ x: beX, y: p.y, r: 5, opacity: 1, color: '#00f2fe' });
        }

        // Impacto de Neutrón en Parafina -> Expulsa Protón
        if (p.type === 'neutron' && p.x >= parX && p.stage === 'ejected_neutron') {
            p.stage = 'expelled_proton';
            p.type = 'proton';
            p.vx = 7;

            simState.flashEffects.push({ x: parX, y: p.y, r: 5, opacity: 1, color: '#ff0844' });
        }

        // Renderizar Partícula según su tipo
        ctx.beginPath();
        if (p.type === 'alpha') {
            // Partícula Alfa (Helio-4)
            ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
            ctx.fillStyle = '#ff8c00';
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.font = '9px Orbitron';
            ctx.fillText('α', p.x - 3, p.y + 3);
        } else if (p.type === 'neutron') {
            // Neutrón Libre (Sin carga - Azul brillante)
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#00f2fe';
            ctx.shadowColor = '#00f2fe';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#000';
            ctx.font = '8px Orbitron';
            ctx.fillText('N', p.x - 3, p.y + 3);
        } else if (p.type === 'proton') {
            // Protón Eyectado (Rojo)
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#ff0844';
            ctx.shadowColor = '#ff0844';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#fff';
            ctx.font = '8px Orbitron';
            ctx.fillText('p+', p.x - 5, p.y + 3);
        }

        // Eliminar proyectiles fuera de pantalla
        if (p.x > canvas.width + 50) {
            simState.projectiles.splice(i, 1);
        }
    }

    // Dibujar destellos/ondas de choque
    for (let i = simState.flashEffects.length - 1; i >= 0; i--) {
        let f = simState.flashEffects[i];
        f.r += 2.5;
        f.opacity -= 0.05;

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.strokeStyle = f.color;
        ctx.globalAlpha = Math.max(0, f.opacity);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        if (f.opacity <= 0) simState.flashEffects.splice(i, 1);
    }
}

// LÓGICA DEL QUIZ
let currentQuizIdx = 0;
let score = 0;

function initQuiz() {
    currentQuizIdx = 0;
    score = 0;
    document.getElementById('quizResults').classList.add('d-none');
    document.getElementById('quizContainer').classList.remove('d-none');
    showQuizQuestion();
}

function showQuizQuestion() {
    const qData = quizData[currentQuizIdx];
    document.getElementById('quizQuestionNum').textContent = `Pregunta ${currentQuizIdx + 1} de ${quizData.length}`;
    document.getElementById('quizScore').textContent = `Puntaje: ${score}`;
    document.getElementById('quizQuestion').textContent = qData.q;

    const optsDiv = document.getElementById('quizOptions');
    optsDiv.innerHTML = '';

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.onclick = () => selectQuizOption(idx, qData.answer, btn);
        optsDiv.appendChild(btn);
    });
}

function selectQuizOption(selectedIdx, correctIdx, element) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.style.pointerEvents = 'none');

    if (selectedIdx === correctIdx) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('wrong');
        options[correctIdx].classList.add('correct');
    }

    setTimeout(() => {
        currentQuizIdx++;
        if (currentQuizIdx < quizData.length) {
            showQuizQuestion();
        } else {
            showQuizResults();
        }
    }, 1400);
}

function showQuizResults() {
    document.getElementById('quizContainer').classList.add('d-none');
    document.getElementById('quizResults').classList.remove('d-none');
    document.getElementById('finalScoreText').textContent = `Obtuviste ${score} de ${quizData.length} respuestas correctas.`;
}

function resetQuiz() {
    initQuiz();
}
