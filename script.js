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
                <p>Возведённый в 1525–1531 годах, кремль был одной из самых мощных крепостей. Сегодня это живое сердце города.</p>
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
                <p>В меню — блюда, вдохновленные произведениями первого русского исторического романиста Ивана Лажечникова.</p>
                <div class="modal-tip"><strong>Адрес:</strong> ул. Лажечникова, 13</div>`
        },
        { 
            title: 'Соборная площадь и "Блюдечко"', 
            location: "ул. Лазарева",
            desc: "Духовный центр города с панорамным видом на слияние рек.", 
            img: "3.png",
            fullContent: `
                <div class="modal-tags"><span>#православие</span> <span>#панорама</span> <span>#история</span></div>
                <p>Центральное место Кремля, где находятся Успенский собор и старейшая шатровая колокольня.</p>
                <div class="modal-tip"><strong>Адрес:</strong> Соборная площадь (ул. Лазарева)</div>
                <div class="modal-tip"><strong>Источник:</strong> <a class="modal-link" href="https://kolomna-kreml.ru/karta-kremlja/" target="_blank">Карта Кремля</a></div>`
        },
        { 
            title: "Пятницкие ворота", 
            location: "ул. Лазарева, 28",
            desc: "Главный парадный вход в крепость, символ благополучия.", 
            img: "4.png",
            fullContent: `
                <div class="modal-tags"><span>#архитектура</span> <span>#ворота</span></div>
                <p>Главный вход в крепость. Башня имеет форму подковы — на счастье.</p>
                <div class="modal-tip"><strong>Адрес:</strong> ул. Лазарева, 28 (выход к Москве-реке)</div>`
        },
        { 
            title: 'Музей "Калачная"', 
            location: "ул. Зайцева, 14",
            desc: "Живое производство самого известного бренда Коломны.", 
            img: "5.png",
            fullContent: `
                <div class="modal-tags"><span>#ремесло</span> <span>#традиции</span> <span>#еда</span></div>
                <p>Здесь возродили рецепт XIV века. Вы увидите полный цикл выпечки калачей в дровяной печи.</p>
                <div class="modal-tip"><strong>Адрес:</strong> ул. Зайцева, 14</div>
                <div class="modal-tip"><strong>Источник:</strong> <a class="modal-link" href="https://grad-kolomna.ru/" target="_blank">grad-kolomna.ru</a></div>`
        },
        { 
            title: 'Музей "Душистые радости"', 
            location: "ул. Зайцева, 18",
            desc: "Мир дореволюционной парфюмерии и мыловарения.", 
            img: "6.png",
            fullContent: `
                <div class="modal-tags"><span>#мыло</span> <span>#мануфактура</span></div>
                <p>Воссозданная лавка Г.И. Суранова. Секреты красоты и гигиены XIX века.</p>
                <div class="modal-tip"><strong>Адрес:</strong> ул. Зайцева, 18</div>`
        },
        { 
            title: 'Креативный кластер "Патефонка"', 
            location: "ул. Уманская, 3Д",
            desc: "Индустриальное прошлое, ставшее центром современного искусства.", 
            img: "7.png",
            fullContent: `
                <div class="modal-tags"><span>#арт</span> <span>#завод</span> <span>#кластер</span></div>
                <p>Территория бывшего патефонного завода. Сейчас здесь мастерские и арт-пространства.</p>
                <div class="modal-tip"><strong>Адрес:</strong> ул. Уманская, 3Д</div>`
        },
        { 
            title: 'Музей "Коломенская пастила"', 
            location: "ул. Посадская, 13А",
            desc: "Музей «забытого вкуса» в старинном флигеле усадьбы.", 
            img: "8.png",
            fullContent: `
                <div class="modal-tags"><span>#пастила</span> <span>#сладости</span></div>
                <p>Посетители попадают на чайную церемонию, где пробуют пастилу по рецептам 18-19 веков.</p>
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
                <p>Место, где советский коммунальный быт встречается с современным искусством.</p>
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
                <p>Пятиярусная колокольня (67 метров) — одно из самых высоких строений города.</p>
                <div class="modal-tip"><strong>Адрес:</strong> пл. Двух Революций, 1</div>`
        },
        { 
            title: 'Пивное бистро "Рульки Вверх"', 
            location: "ул. Красногвардейская, 3",
            desc: "Финальная точка маршрута: отдых и гастрономия.", 
            img: "11.png",
            fullContent: `
                <div class="modal-tags"><span>#отдых</span> <span>#гастрономия</span></div>
                <p>Идеальное место, чтобы завершить прогулку и попробовать авторскую кухню.</p>
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
                <img src="${place.img}" alt="${place.title}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400';">
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
                if (modalImg) modalImg.src = data.img;
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