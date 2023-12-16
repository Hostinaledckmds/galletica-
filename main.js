document.addEventListener('DOMContentLoaded', function () {
    const verGalletaBtn = document.getElementById('verGalletaBtn');
    const verHistorialBtn = document.getElementById('verHistorialBtn');
    const limpiarHistorialBtn = document.getElementById('limpiarHistorialBtn');
    const galletaImagen = document.getElementById('galletaImagen');
    const galletaMensaje = document.getElementById('galletaMensaje');
    const mensaje = document.getElementById('mensaje');
    const otraGalletaBtn = document.getElementById('otraGalletaBtn');
    const diasJuntosContainer = document.getElementById('diasJuntos');
    const historialContainer = document.getElementById('historialContainer');

    // Obtenemos la fecha actual
    const fechaActual = new Date();

    // Fecha de inicio de la relación
    const fechaInicio = new Date('2023-08-017'); // Reemplázala con la fecha real

    // Historial de mensajes obtenido del almacenamiento local
    const historialMensajes = JSON.parse(localStorage.getItem('historial')) || [];

    // Función para obtener el número de días juntos
    function calcularDiasJuntos() {
        const hoy = new Date();
        const diferencia = hoy - fechaInicio;
        const diasJuntos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        return diasJuntos;
    }

    // Función para obtener un mensaje bonito (puedes personalizar)
    function obtenerMensajeBonito() {
        const mensajesBonitos = [
           "Tus ojos son como dos estrellas que brillan en la oscuridad.",
            "Te amo con locura, mi vida. La forma en que me miras me hace sentir que todo es perfecto. #EresMiT.",
            "Tus sonrisas me llenan de energía y me hacen sentir que todo es posible. Gracias por ser mi motor y mi inspiración. #SonrisasDeAmor.",
            "Y PO CHI MI AMOR :D  .",
            "Mi corazón está lleno de alegría al pensar en ti. Te amo con todo mi ser y siempre te acompañaré en este camino. #TuEspírituMeHaceVivir.",
            "Cada segundo que paso a tu lado es como un regalo de DIOS. Gracias por hacerme la vida más dulce y maravillosa. #LaFortunaNosAcompaña.",
            "Cada mañana, cuando abro los ojos, te veo en ellos y me siento iluminado por tu amor. Te amo, mi vida. #DespertarContigo.",
            "Tu presencia me llena de calor y de alegría.",
            "Tu amor es una flor que florece en mi corazón.",
            "Tu amor es una llama que me calienta y me da vida.",
            "Tu esencia es un perfume que me llega hasta los pulmones.",
            "Tu amor es una brisa de aire fresco que me eleva.",
            "🌹 Te amo con todo mi corazón, mi vida gira en torno a ti.",
"💫 Eres mi sol, mi luna y todas las estrellas del cielo.",
"🌈 Eres el arcoíris que ilumina mi día, con tus colores hermosos.",
"🌳 Eres mi árbol, que crece junto a mí, enraizado en mi amor.",
"🌈 Eres el viento que me envuelve, en tus brazos encuentro paz.",
"🌈 Eres el fuego que me calienta, en tus besos encuentro pasión.",
"¿Necesitas un respiro? Porque me parece que estás respirando de manera irregular desde que me viste ;).",
"¿Quieres que te enseñe a hacer una broma? Porque me parece que estás muy seria y necesitas relajarte MI AMOR.",
"¿Sabes? Me has estado en la cabeza todo el día. No puedo dejar de pensar en ti y en cómo te haría sentir feliz. ¿Qué tal si nos encontramos más tarde y te muestro lo que tengo en mente?",
"Hoy he estado trabajando y me has venido a la mente. Me gustaría darte una recompensa por tu día. ¿Qué tal si te preparo una sorpresa que te hará olvidar tus preocupaciones?",
"Ey, ¿sabes qué? Me has estado volviendo loco últimamente. No puedo dejar de pensar en cómo te haría sentir especial. ¿Qué tal si nos encontramos pronto y te muestro lo que tengo :D?",
"sabes que te quiero mucho y quiero estar contigo y amarte,tal vez seas mi novia pronto o si ya lo eres quiero que sepas que eres una mujer muy hermosa fisicamente y emocional, te amo guapa",

        ];

        return mensajesBonitos[Math.floor(Math.random() * mensajesBonitos.length)];
    }

    // Función para actualizar el mensaje y el contador de "Días juntos"
    function actualizarMensajeYDiasJuntos() {
        const mensajeActual = obtenerMensajeBonito();
        mensaje.textContent = mensajeActual;
        actualizarDiasJuntos();

        // Agregamos el mensaje actual al historial solo si es un nuevo día
        if (esNuevoDia()) {
            historialMensajes.push({ fecha: fechaActual, mensaje: mensajeActual });

            // Actualizamos el historial en el almacenamiento local
            localStorage.setItem('historial', JSON.stringify(historialMensajes));

            // Actualizamos el historial en la página
            mostrarHistorial();
        }
    }

    // Función para verificar si es un nuevo día
    function esNuevoDia() {
        const fechaActual = new Date();
        return fechaActual.getDate() !== fechaInicio.getDate();
    }

    // Función para mostrar el historial con animación
    function mostrarHistorialConAnimacion() {
        historialContainer.innerHTML = '';
        historialContainer.style.opacity = '0';

        historialMensajes.forEach((historia, index) => {
            const historiaElemento = document.createElement('div');
            historiaElemento.classList.add('historia');
            historiaElemento.innerHTML = `<span>${index + 1}. ${historia.fecha.toLocaleDateString()}: </span>${historia.mensaje}`;
            historialContainer.appendChild(historiaElemento);
        });

        // Animación para mostrar el historial con un desvanecimiento
        setTimeout(() => {
            historialContainer.style.opacity = '1';
        }, 100);
    }

    // Evento al hacer clic en la galleta
    galletaImagen.addEventListener('click', function () {
        // Verificamos si es un nuevo día
        if (esNuevoDia()) {
            // Ocultamos la galleta con una animación de desvanecimiento
            galletaImagen.style.opacity = '0';

            // Actualizamos la fecha de inicio
            fechaInicio.setDate(fechaActual.getDate());

            // Lógica para mostrar el mensaje en forma de papelito con animación
            setTimeout(() => {
                // Lógica para mostrar el mensaje del día
                galletaMensaje.classList.add('mostrado');
                // Actualizamos el mensaje y el contador de días juntos
                actualizarMensajeYDiasJuntos();
            }, 500); // Tiempo del efecto de desvanecimiento antes de mostrar el mensaje
        }
    });

    // Evento al hacer clic en "Cerrar"
    otraGalletaBtn.addEventListener('click', function () {
        // Mostramos la galleta nuevamente con una animación de aparición
        galletaImagen.style.opacity = '1';

        // Lógica para ocultar el mensaje en forma de papelito con animación
        galletaMensaje.classList.remove('mostrado');
        
        // Actualizamos el mensaje y el contador de días juntos si es un nuevo día
        if (esNuevoDia()) {
            // Animación para mostrar la galleta con un ligero retraso
            setTimeout(() => {
                galletaImagen.style.display = 'block';
                actualizarMensajeYDiasJuntos();
            }, 300);
        }
    });

    // Evento al hacer clic en "Ver Historial"
    verHistorialBtn.addEventListener('click', function () {
        // Mostramos el historial con animación
        mostrarHistorialConAnimacion();
    });

    // Evento al hacer clic en "Limpiar Historial"
    limpiarHistorialBtn.addEventListener('click', function () {
        // Limpiamos el historial tanto en la memoria como en el almacenamiento local
        historialMensajes.length = 0;
        localStorage.removeItem('historial');

        // Mostramos el historial vacío con animación
        mostrarHistorialConAnimacion();
    });

    // Inicializamos el contador de "Días juntos"
    actualizarDiasJuntos();

    // Inicializamos el mensaje si es un nuevo día
    if (esNuevoDia()) {
        actualizarMensajeYDiasJuntos();
    }

    // Inicializamos el historial
    mostrarHistorial();

    // Funcionalidad adicional según tus sugerencias
    // ...
});
