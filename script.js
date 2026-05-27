document.addEventListener("DOMContentLoaded", () => {
    // 1. Контент маршрута (11 точек с адресами)
    const routeData = [
        { 
            title: "Коломенский кремль", 
            location: "ул. Лажечникова, 5",
            desc: "Сердце древнего города, свидетель почти 500-летней истории России.", 
            img: "1.png",
            fullContent: `
                <div class="modal-tags"><span>#архитектура</span> <span>#история</span> <span>#кремль</span></div>
                
                <p>Коломна упомянута с 1177 года. В XVI веке построен Кремль (сохранились две стены и семь башен). На ул. Лажечникова — усадьбы XIX–XX веков.
                <i>Интересный факт: Коломенский кремль строили итальянцы одновременно с московским; возможно, он стал его прообразом.</i></p>
                

                <div class="modal-tip"><strong>Адрес:</strong> ул. Лажечникова, 5</div>
                <div class="modal-tip"><strong>Источник:</strong> <a class="modal-link" href="https://kolomna-kreml.ru/" target="_blank">kolomna-kreml.ru</a></div>`
        },
        { 
            title: 'Литературное кафе "Лажечников"', 
            location: "ул. Лажечникова, 13",
            desc: "Гастрономическое путешествие в мир русской литературы XIX века.", 
            img: "2.png",
            fullContent: `
                <div class="modal-tags"><span>#еда</span> <span>#литература</span> <span>#культура</span></div>
                
                <p>Завтрак в «Литературном кафе Лажечников» (названо в честь писателя И. И. Лажечникова). Интерьер и меню стилизованы под эпоху. Рядом — магазин сувениров с местной пастилой, сидром, маслом и чаем.
                <i>Интересный факт: Иван Лажечников — писатель, директор гимназии в Твери, автор романа «Ледяной дом».</i></p>

                <div class="modal-tip"><strong>Адрес:</strong> ул. Лажечникова, 13</div>
                <div class="modal-tip"><strong>Источник:</strong> <a class="modal-link" href="https://cafe-lazhechnikov.clients.site/" target="_blank">cafe-lazhechnikov.clients.site</a></div>`
        },
        { 
            title: 'Соборная площадь и "Блюдечко"', 
            location: "ул. Лазарева, 13",
            desc: "Духовный центр города с панорамным видом на слияние рек.", 
            img: "3.png",
            fullContent: `
                <div class="modal-tags"><span>#православие</span> <span>#панорама</span> <span>#история</span></div>
                
                <p>Соборная площадь Коломны включает Успенский кафедральный собор (основан Дмитрием Донским) и сквер «Блюдечко» на берегу Москвы-реки, который считается местом зарождения города.
                <i>Интересный факт: Нынешний Успенский собор построен в конце XVII века взамен заложенного Дмитрием Донским в память о Куликовской битве.</i>
                </p>
                
                <div class="modal-tip"><strong>Адрес:</strong> Соборная площадь (ул. Лазарева)</div>
                <div class="modal-tip"><strong>Источник:</strong> <a class="modal-link" href="https://kolomna-kreml.ru/karta-kremlja/" target="_blank">Карта Кремля</a></div>`
        },
        { 
            title: "Пятницкие ворота", 
            location: "ул. Зайцева, 14",
            desc: "Главный парадный вход в крепость, символ благополучия.", 
            img: "4.png",
            fullContent: `
                <div class="modal-tags"><span>#архитектура</span> <span>#ворота</span></div>
                
                <p>Через Соборную площадь выходим к Пятницкой башне, отделяющей Кремль от Посада. Рядом находится часовня Параскевы Пятницы и калачная.
                <i>Интересный факт: Пятницкая башня — единственная сохранившаяся проездная башня Коломенского кремля.</i>
                </p>
                
                <div class="modal-tip"><strong>Адрес:</strong> ул. Лазарева, 28 (выход к Москве-реке)</div>
                <div class="modal-tip"><strong>Источник:</strong> <a class="modal-link" href="https://ru.wikipedia.org/wiki/%D0%9F%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D0%BA%D0%B8%D0%B5_%D0%B2%D0%BE%D1%80%D0%BE%D1%82%D0%B0_(%D0%9A%D0%BE%D0%BB%D0%BE%D0%BC%D0%BD%D0%B0)" target="_blank">ru.wikipedia.org</a></div>`
        },
        { 
            title: 'Музей "Калачная"', 
            location: "ул. Зайцева, 14",
            desc: "Живое производство самого известного бренда Коломны.", 
            img: "5.png",
            fullContent: `
                <div class="modal-tags"><span>#ремесло</span> <span>#традиции</span> <span>#еда</span></div>
                
                <p>В музее «Калачная» проходит театрализованная экскурсия с дегустацией выпечки по рецепту XIV века. Рядом работает «закутное окно», где можно купить калач с гусем.
                <i>Интересный факт: Коломенские калачи пекут по рецепту XIV века. Выражение «дойти до ручки» произошло от обычая отдавать бедным ручку калача, за которую его держали.</i>
                </p>
                
                <div class="modal-tip"><strong>Адрес:</strong> ул. Зайцева, 14</div>
                <div class="modal-tip"><strong>Источник:</strong> <a class="modal-link" href="https://kolomnakalach.ru/" target="_blank">kolomnakalach.ru</a></div>`
        },
        { 
            title: 'Музей "Душистые радости"', 
            location: "ул. Зайцева, 18",
            desc: "Мир дореволюционной парфюмерии и мыловарения.", 
            img: "6.png",
            fullContent: `
                <div class="modal-tags"><span>#мыло</span> <span>#мануфактура</span></div>
                
                <p>Музей-мануфактура «Душистыя радости» возрождает традиции коломнского мыловарения. В экспозиции представлены раритеты и история российской парфюмерии рубежа XIX–XX вв. Доступны театрализованные экскурсии по бронированию.
                <i>Интересный факт: В музее собрана уникальная коллекция дореволюционных флаконов и упаковки, включая экспонаты из Франции и Германии.</i>
                </p>
                
                <div class="modal-tip"><strong>Адрес:</strong> ул. Зайцева, 18</div>
                <div class="modal-tip"><strong>Источник:</strong> <a class="modal-link" href="https://d-radosti.ru/" target="_blank">d-radosti.ru</a></div>`
        },
        { 
            title: 'Креативный кластер "Патефонка"', 
            location: "ул. Уманская, 3Д",
            desc: "Индустриальное прошлое, ставшее центром современного искусства.", 
            img: "7.png",
            fullContent: `
                <div class="modal-tags"><span>#арт</span> <span>#завод</span> <span>#кластер</span></div>
                
                <p>«Патефонка» — креативный кластер на территории бывшего завода «Текстильмаш».
                <i>Интересный факт: Бывший завод патефонов стал творческим центром.</i>
                </p>
                
                <div class="modal-tip"><strong>Адрес:</strong> ул. Уманская, 3Д</div>`
        },
        { 
            title: 'Музей "Коломенская пастила"', 
            location: "ул. Посадская, 13А",
            desc: "Музей «забытого вкуса» в старинном флигеле усадьбы.", 
            img: "8.png",
            fullContent: `
                <div class="modal-tags"><span>#пастила</span> <span>#сладости</span></div>
                
                <p>Музей «Коломенская пастила» в усадьбе Сурановых знакомит с культурой и технологией производства сладостей. В программе: экскурсии, дегустации и садовое кафе «1890» (работает с весны).
                <i>Интересный факт: Коломенская пастила — исторический бренд. Технология, утерянная в советский период, была восстановлена в 2000-х годах.</i>
                </p>
                
                <div class="modal-tip"><strong>Адрес:</strong> ул. Посадская, 13А</div>
                <div class="modal-tip"><strong>Источник:</strong> <a class="modal-link" href="https://kolomnapastila.ru/" target="_blank">kolomnapastila.ru</a></div>`
        },
        { 
            title: 'Музей-резиденция "АРТКоммуналка"', 
            location: "ул. Октябрьской Революции, 205",
            desc: "Быт и искусство эпохи хрущевской «оттепели».", 
            img: "9.png",
            fullContent: `
                <div class="modal-tags"><span>#СССР</span> <span>#60-е</span> <span>#галерея</span></div>
                
                <p>Музей-резиденция «Арткоммуналка. Ерофеев и Другие» (Коломна, ул. Октябрьской революции) воссоздает быт коммунальной квартиры 60-х годов. В выставочном зале представлены работы арт-резидентов. Доступны обзорные экскурсии.
                <i>Интересный факт: Работа Венедикта Ерофеева грузчиком в Коломне легла в основу поэмы «Москва — Петушки».</i>
                </p>
                
                <div class="modal-tip"><strong>Адрес:</strong> ул. Октябрьской Революции, 205 (вход со двора)</div>
                <div class="modal-tip"><strong>Источник:</strong> <a class="modal-link" href="https://artkommunalka.com/" target="_blank">artkommunalka.com</a></div>`
        },
        { 
            title: "Колокольня Иоанна Богослова", 
            location: "пл. Двух Революций, 1",
            desc: "Высотная доминанта Старого города в стиле классицизма.", 
            img: "10.png",
            fullContent: `
                <div class="modal-tags"><span>#архитектура</span> <span>#высота</span></div>
                
                <p>Колокольня Церкви Иоанна Богослова (1826–1846) — самая высокая в Коломне (67 м), построена в стиле ампир. Имеет смотровую площадку и барельефную икону «Богоматерь с Младенцем Христом и предстоящим Иоанном Богословом».
                <i>Интересный факт: Барельефную икону на колокольне создали итальянские мастера в 1525–1530 годах.</i>
                </p>
                
                <div class="modal-tip"><strong>Адрес:</strong> пл. Двух Революций, 1</div>`
        },
        { 
            title: 'Бистро "Рульки Вверх"', 
            location: "ул. Красногвардейская, 3",
            desc: "Финальная точка маршрута: отдых и гастрономия.", 
            img: "11.png",
            fullContent: `
                <div class="modal-tags"><span>#отдых</span> <span>#гастрономия</span></div>
                
                <p>Поужинайте в бистро «Рульки вверх»: рекомендуют фирменную рульку по-чешски и пиво. Завершите путешествие по Коломне в этом заведении.
                <i>Интеренсый факт: Популярное место среди местных жителей. Порции очень большие.</i>
                </p>
                
                <div class="modal-tip"><strong>Адрес:</strong> ул. Красногвардейская, 3</div>`
        }
    ];

    const routeContainer = document.getElementById('route-container');
    const modal = document.getElementById('info-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const btnClose = document.getElementById('close-modal');

    // Генерация карточек
    if (routeContainer) {
        routeData.forEach((place, index) => {
            const card = document.createElement('div');
            card.className = 'card animate-on-scroll';
            card.innerHTML = `
                <div class="step-number">${index + 1}</div>
                <img loading="lazy" src="images/locations/${place.img}" alt="${place.title}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400';">
                <div class="card-body">
                    <h3>${place.title}</h3>
                    <p>${place.desc}</p>
                    <button class="btn-more" data-id="${index}">Узнать подробнее</button>
                </div>`;
            routeContainer.appendChild(card);
        });
    }

    // Модальное окно: Открытие
    if (routeContainer && modal) {
        routeContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-more');
            if (btn) {
                const id = btn.getAttribute('data-id');
                const data = routeData[id];
                if (modalImg) modalImg.src = "images/locations/"+data.img;
                if (modalTitle) modalTitle.textContent = data.title;
                if (modalDesc) modalDesc.innerHTML = data.fullContent || `<p>${data.desc}</p>`;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Модальное окно: Закрытие
    const closeModal = () => {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (btnClose) btnClose.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('mousedown', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Intersection Observer для анимаций
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Эффект наклона (Tilt)
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.card.visible');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
                const rotateX = (y - rect.height / 2) / 20;
                const rotateY = (rect.width / 2 - x) / 20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            } else {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
            }
        });
    });

    // Плавный скролл
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

ymaps.ready(init);

function init() {
    // Создание карты
    var myMap = new ymaps.Map("map-canvas", {
        center: [55.105, 38.759], // Центр Коломны
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl']
    });

    const points = [
        { coords: [55.103325, 38.752522], title: "Коломенский кремль" },
        { coords: [55.104697, 38.754705], title: "Литературное кафе" },
        { coords: [55.105567, 38.758220], title: 'Соборная площадь и "Блюдечко"' },
        { coords: [55.105826, 38.763310], title: "Пятницкие ворота" },
        { coords: [55.105833, 38.763641], title: 'Музей "Калачная"' },
        { coords: [55.105557, 38.763616], title: 'Музей "Душистые радости"' },
        { coords: [55.101293, 38.768063], title: 'Креативный кластер "Патефонка"' },
        { coords: [55.104651, 38.769904], title: 'Музей "Коломенская пастила"' },
        { coords: [55.100793, 38.756591], title: 'Музей-резиденция "АРТКоммуналка"' },
        { coords: [55.101906, 38.755378], title: 'Колокольня Иоанна Богослова' },
        { coords: [55.101293, 38.759852], title: 'Пивное бистро "Рульки Вверх"' },
    ];

    points.forEach((point, index) => {
        var placemark = new ymaps.Placemark(point.coords, {
            balloonContent: `<strong>${point.title}</strong>`,
            iconCaption: point.title
        }, {
            // Фирменный стиль метки
            preset: 'islands#goldDotIconWithCaption',
            iconColor: '#C5A059' // золотой цвет
        });

        myMap.geoObjects.add(placemark);
    });

    // Автоматически подбираем масштаб, чтобы все 11 точек были видны
    myMap.setBounds(myMap.geoObjects.getBounds(), { checkZoomRange: true });
}

// === Виджет погоды Коломна ===
async function loadWeather() {
    const widget = document.getElementById('weather-widget');
    if (!widget) return;

    // Таблица кодов WMO → эмодзи + описание
    const weatherCodes = {
        0:  { icon: '☀️',  desc: 'Ясно' },
        1:  { icon: '🌤️', desc: 'Малооблачно' },
        2:  { icon: '⛅',  desc: 'Переменная облачность' },
        3:  { icon: '☁️',  desc: 'Пасмурно' },
        45: { icon: '🌫️', desc: 'Туман' },
        48: { icon: '🌫️', desc: 'Изморозь' },
        51: { icon: '🌦️', desc: 'Лёгкая морось' },
        53: { icon: '🌦️', desc: 'Морось' },
        61: { icon: '🌧️', desc: 'Дождь' },
        63: { icon: '🌧️', desc: 'Умеренный дождь' },
        65: { icon: '🌧️', desc: 'Сильный дождь' },
        71: { icon: '🌨️', desc: 'Снег' },
        73: { icon: '❄️',  desc: 'Умеренный снег' },
        75: { icon: '❄️',  desc: 'Сильный снег' },
        80: { icon: '🌦️', desc: 'Ливень' },
        95: { icon: '⛈️', desc: 'Гроза' },
        99: { icon: '⛈️', desc: 'Гроза с градом' },
    };

    try {
        const url = 'https://api.open-meteo.com/v1/forecast'
            + '?latitude=55.0917&longitude=38.7761'
            + '&current=temperature_2m,weathercode,windspeed_10m'
            + '&wind_speed_unit=ms&timezone=Europe/Moscow';

        const res  = await fetch(url);
        const data = await res.json();

        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weathercode;
        const wind = Math.round(data.current.windspeed_10m);

        const { icon, desc } = weatherCodes[code] ?? { icon: '🌡️', desc: 'Коломна' };

        widget.innerHTML = `
            <span class="weather-icon">${icon}</span>
            <div class="weather-info">
                <span class="weather-temp">${temp > 0 ? '+' : ''}${temp}°C</span>
                <span class="weather-desc">${desc} · ветер ${wind} м/с</span>
            </div>
        `;
    } catch {
        widget.innerHTML = `<span class="weather-loading">Коломна ✧</span>`;
        const mnWeather = document.getElementById('mn-weather');
        if (mnWeather) {
            mnWeather.innerHTML = `
                <span style="font-size:0.85rem; color:var(--text-muted); 
                    text-transform:uppercase; letter-spacing:1px;">
                    Коломна сейчас: 
                    <span style="color:var(--gold);">${icon} ${temp > 0 ? '+' : ''}${temp}°C · ${desc}</span>
                </span>`;
        }
    }
}

loadWeather();

// сессионый дневник путешественника
(function initDiary() {

    // Данные мест 
    const PLACES = [
        "Коломенский кремль",
        "Литературное кафе «Лажечников»",
        "Соборная площадь и «Блюдечко»",
        "Пятницкие ворота",
        "Музей «Калачная»",
        "Музей «Душистые радости»",
        "Кластер «Патефонка»",
        "Музей «Коломенская пастила»",
        "Музей-резиденция «АРТКоммуналка»",
        "Колокольня Иоанна Богослова",
        "Бистро «Рульки Вверх»"
    ];

    // Значки: условие получения + подсказка
    const BADGES = [
        { emoji: "🏰", name: "Хранитель кремля",  tip: "Посетите Кремль",            cond: v => v.has(0) },
        { emoji: "🍵", name: "Гурман",             tip: "Загляните в кафе или бистро", cond: v => v.has(1) || v.has(10) },
        { emoji: "🔔", name: "Звонарь",            tip: "Побывайте на соборной площади или у колокольни", cond: v => v.has(2) || v.has(9) },
        { emoji: "🥐", name: "Калачник",           tip: "Посетите Калачную",           cond: v => v.has(4) },
        { emoji: "🧼", name: "Мыловар",            tip: "Загляните в «Душистые радости»", cond: v => v.has(5) },
        { emoji: "🎨", name: "Арт-бродяга",        tip: "Посетите Патефонку или АРТКоммуналку", cond: v => v.has(6) || v.has(8) },
        { emoji: "🍬", name: "Сладкоежка",         tip: "Попробуйте пастилу",          cond: v => v.has(7) },
        { emoji: "⭐", name: "Первопроходец",      tip: "Посетите первое место",       cond: v => v.size >= 1 },
        { emoji: "🗺️", name: "Исследователь",      tip: "Посетите 5 мест",             cond: v => v.size >= 5 },
        { emoji: "🏅", name: "Знаток Коломны",     tip: "Посетите 8 мест",             cond: v => v.size >= 8 },
        { emoji: "👑", name: "Хозяин города",      tip: "Пройдите весь маршрут!",      cond: v => v.size >= 11 },
    ];

    const SESSION_KEY = "kolomna_diary_v1";

    // Восстановление из сессии
    let visited = new Set(
        JSON.parse(sessionStorage.getItem(SESSION_KEY) || "[]")
    );

    // Элементы
    const placesEl  = document.getElementById('diary-places');
    const badgesEl  = document.getElementById('diary-badges');
    const progFill  = document.getElementById('diary-progress');
    const progLabel = document.getElementById('diary-label');
    const toastEl   = document.getElementById('diary-toast');

    if (!placesEl || !badgesEl) return; // секция не найдена

    // мест
    const placeCards = {};
    PLACES.forEach((name, i) => {
        const el = document.createElement('div');
        el.className = 'diary-place' + (visited.has(i) ? ' visited' : '');
        el.innerHTML = `
            <span class="dp-num">${String(i + 1).padStart(2, '0')}</span>
            <span class="dp-name">${name}</span>
            <span class="dp-check">✓</span>`;
        el.addEventListener('click', () => togglePlace(i));
        placesEl.appendChild(el);
        placeCards[i] = el;
    });

    // Рендер значков
    const badgeEls = [];
    BADGES.forEach(b => {
        const el = document.createElement('div');
        el.className = 'badge-item' + (b.cond(visited) ? ' unlocked' : '');
        el.title = b.tip;
        el.innerHTML = `
            <div class="badge-icon">${b.emoji}</div>
            <span class="badge-name">${b.name}</span>`;
        badgesEl.appendChild(el);
        badgeEls.push({ el, badge: b });
    });

    // Тост 
    let toastTimer;
    function showToast(msg) {
        clearTimeout(toastTimer);
        toastEl.textContent = msg;
        toastEl.classList.add('show');
        toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3000);
    }

    // Обновление интерфейса
    function updateUI() {
        const n = visited.size;
        progFill.style.width = (n / PLACES.length * 100) + '%';
        progLabel.textContent = `${n} из ${PLACES.length} мест`;
        sessionStorage.setItem(SESSION_KEY, JSON.stringify([...visited]));

        badgeEls.forEach(({ el, badge }) => {
            const wasUnlocked = el.classList.contains('unlocked');
            const isUnlocked  = badge.cond(visited);
            if (isUnlocked && !wasUnlocked) {
                el.classList.add('unlocked', 'just-unlocked');
                setTimeout(() => el.classList.remove('just-unlocked'), 600);
                showToast(`${badge.emoji} Значок получен: «${badge.name}»!`);
            } else if (!isUnlocked) {
                el.classList.remove('unlocked');
            }
        });
    }

    //Переключение мест
    function togglePlace(i) {
        if (visited.has(i)) {
            visited.delete(i);
            placeCards[i].classList.remove('visited');
        } else {
            visited.add(i);
            placeCards[i].classList.add('visited');
        }
        updateUI();
    }

    updateUI(); // первичная отрисовка
})();

// бургер меню
(function initBurger() {
    const btn  = document.getElementById('burger-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    const open  = () => { btn.classList.add('open');    menu.classList.add('open');    btn.setAttribute('aria-expanded', 'true');  btn.setAttribute('aria-label', 'Закрыть меню'); };
    const close = () => { btn.classList.remove('open'); menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Открыть меню'); };

    btn.addEventListener('click', () => menu.classList.contains('open') ? close() : open());
    menu.querySelectorAll('a').forEach(l => l.addEventListener('click', close));
    document.addEventListener('click', e => { if (!btn.contains(e.target) && !menu.contains(e.target)) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();