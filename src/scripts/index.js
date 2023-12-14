window.onload = function () {
  document.querySelector('.preloader').style.display = 'none';
}

/* Particles JS - анімований фон
==================================== */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#15eddb"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

/* Multilingual pages - багатомовність
==================================== */
var arrLang = {
  'en': {
    'home__link': 'HOME',
    'projects': 'PROJECTS',
    'residential__link': 'RESIDENTIAL BUILDINGS',
    'public__link': 'PUBLIC BUILDINGS',
    'design__link': 'INTERIOR DESIGN',
    'land__link': 'LAND IMPROVEMENT',
    'video': 'VIDEO',
    'about': 'ABOUT US',
    'about__text001': 'DREAM ARCHI is a team of practitioners, architects, engineers and innovators.',
    'about__text002': 'Over 10 years of experience in architecture and construction. We design practical solutions that meet the goals of our clients, develop the urban environment and increase the value of the project.',
    'about__text003': 'Our team takes care of everything from developing ideas to implementing them.',
    'about__text004': 'Architects and designers of a workshop, constantly study and master experience of domestic and foreign architectural bureaus and workshops, increase the professional level and the last achievements in the projects developed by the company implement.',
    'about__text005': 'Studying our objects it is possible to pay attention that the field of activity of the company includes design of housing, office, trade, hotel, administrative constructions, cottages not only in Kiev, but also in other cities of Ukraine and world.',
    'about__text006': 'The main concept in the projects of DREAM ARCHI is the balance between human needs, the profitability of the project and the requirements of the urban environment.',
    'contact__link': 'CONTACT',
    'contact__text': 'UKRAINE, KYIV',
    'project001_1': 'Residential Building',
    'project001_2': 'Obukhiv, Ukraine',
    'project001_3': '143m2',
    'project002_1': "Residential Building 'MISTER'S RESIDANCE'",
    'project002_2': 'Lebedivka, Ukraine',
    'project002_3': '1 009m2',
    'project003_1': 'Residential Building',
    'project003_2': 'Plyuta, Ukraine',
    'project003_3': '258m2',
    'project004_1': 'Residential Building',
    'project004_2': 'Roslavychi, Ukraine',
    'project004_3': '221m2',
    'project005_1': 'Residential Building',
    'project005_2': 'Petrushky, Ukraine',
    'project005_3': '257m2',
    'project006_1': 'Residential Building',
    'project006_2': 'Kyiv, Ukraine',
    'project006_3': '125m2',
    'project007_1': 'Residential Building',
    'project007_2': 'Osykovo, Ukraine',
    'project007_3': '164m2',
    'project008_1': 'Residential Building',
    'project008_2': 'Plyuta, Ukraine',
    'project008_3': '246m2',
    'project009_1': 'Residential Building',
    'project009_2': 'The project was developed for the DOMRIY company, 163m2',
    'project010_1': 'Residential Building',
    'project010_2': 'The project was developed for the DOMRIY company, 160m2',
    'project011_1': 'Residential Building',
    'project011_2': 'The project was developed for the DOMRIY company, 159m2',
    'project012_1': 'Guest Residential Building',
    'project012_2': 'Lebedivka, Ukraine',
    'project012_3': '254m2',
    'project013_1': 'Residential Building',
    'project013_2': 'Osykovo, Ukraine',
    'project013_3': '234m2',
    'project014_1': 'Residential Building',
    'project014_2': 'The project was developed for the DOMRIY company',
    'project014_3': '200m2',
    'project015_1': 'Residential Building',
    'project015_2': 'Gostomel, Ukraine',
    'project015_3': '238m2',
    'project016_1': 'Public Building',
    'project016_2': 'Office, Kyiv, Ukraine',
    'project016_3': '499m2',
    'project017_1': 'Bath complex, Pidhirtsi',
    'project017_2': 'Work on the complex in the LOFT BURO team, 940m2',
    'project018_1': 'Public Building',
    'project018_2': 'Office, Obukhiv, Ukraine',
    'project018_3': '945m2',
    'project019_1': 'Public Building',
    'project019_2': 'Service center, Putrivka, Ukraine',
    'project019_3': '1 578m2',
    'project020_1': 'Public Building',
    'project020_2': 'Hangar, Putrivka, Ukraine',
    'project020_3': '1 770m2',
    'project021_1': 'Residential Complex',
    'project021_2': 'Comfort Town, Kyiv',
    'project021_3': 'Work on the complex in the ARCHIMATIKA team, 700 370m2',
    'project022_1': 'Public Building',
    'project022_2': 'Trade pavilions, Kyiv, Ukraine',
    'project022_3': '252m2',
    'project023_1': 'Residential Complex',
    'project023_2': 'Vyshenʹky, Ukraine',
    'project023_3': '50 510m2',
    'project024_1': 'Public Building',
    'project024_2': 'Helipad, Kyiv, Ukraine',
    'project024_3': '3 014m2',
    'project025_1': 'Interior Design',
    'project025_2': 'Putrivka, Ukraine',
    'project025_3': '457m2',
    'project026_1': 'Interior Design',
    'project026_2': 'Putrivka, Ukraine',
    'project026_3': '457m2',
    'project027_1': 'Interior Design',
    'project027_2': 'Private gym with sauna, Bobrica, Ukraine',
    'project027_3': '94m2',
    'project028_1': 'Interior Design',
    'project028_2': 'Private gym with sauna, Bobrica, Ukraine',
    'project028_3': '94m2',
    'project029_1': 'Interior Design',
    'project029_2': 'Plyuta, Ukraine',
    'project029_3': '67m2',
    'project030_1': 'Interior Design',
    'project030_2': 'Office, Novi Petrivtsi, Ukraine',
    'project030_3': '711m2',
    'project031_1': 'Interior Design',
    'project031_2': 'Office, Novi Petrivtsi, Ukraine',
    'project031_3': '711m2',
    'project032_1': 'Interior Design',
    'project032_2': 'Office, Novi Petrivtsi, Ukraine',
    'project032_3': '711m2',
    'project033_1': 'Interior Design',
    'project033_2': 'Office, Novi Petrivtsi, Ukraine',
    'project033_3': '711m2',
    'project034_1': 'Land Improvement',
    'project034_2': 'Lebedivka, Ukraine',
    'project034_3': '50 000m2',
    'project035_1': 'Land Improvement',
    'project035_2': 'Lebedivka, Ukraine',
    'project035_3': '50 000m2',
    'project036_1': 'Land Improvement',
    'project036_2': 'Canopy, Pidhirtsi, Ukraine',
    'project036_3': '234m2',
    'project037_1': 'Land Improvement',
    'project037_2': 'Kyiv, Ukraine',
    'project037_3': '854m2',
    'project038_1': 'Land Improvement',
    'project038_2': 'Cottage town, Kozin, Ukraine',
    'project038_3': '60 550m2',
    'project039_1': 'Land Improvement',
    'project039_2': 'Kyiv, Ukraine',
    'project039_3': '720m2'
  },
  'ua': {
    'home__link': 'ГОЛОВНА',
    'projects': 'ПРОЕКТИ',
    'residential__link': 'ПРИВАТНІ БУДИНКИ',
    'public__link': 'ГРОМАДСЬКІ БУДИНКИ',
    'design__link': "ДИЗАЙН ІНТЕР'ЄРУ",
    'land__link': 'БЛАГОУСТРІЙ',
    'video': 'ВІДЕО',
    'about': 'ПРО НАС',
    'about__text001': 'DREAM ARCHI - це команда практиків, архітекторів, інженерів та інноваторів.',
    'about__text002': 'Понад 10 років досвіду в архітектурі та будівництві. Ми розробляємо практичні рішення, які відповідають цілям наших клієнтів, розвивають міське середовище та підвищують цінність проекту.',
    'about__text003': 'Наша команда бере на себе все, від розробки ідей до їх реалізації.',
    'about__text004': 'Архітектори та дизайнери майстерні, постійно вивчають та освоюють досвід вітчизняних та зарубіжних архітектурних бюро та майстерень, підвищують професійний рівень та реалізовують останні досягнення в проектах, розроблених компанією.',
    'about__text005': "Вивчаючи наші об'єкти можна звернути увагу, що сфера діяльності компанія включає проектування житла, офісів, торгівлі, готелів, адміністративних споруд, котеджів не тільки в Києві, але й в інших містах України та світу.",
    'about__text006': 'Основна концепція в проектах DREAM ARCHI - це баланс між потребами людини, рентабельність проекту та вимоги міського середовища.',
    'contact__link': 'КОНТАКТИ',
    'contact__text': 'УКРАЇНА, КИЇВ',
    'project001_1': 'Приватний будинок',
    'project001_2': 'Обухів, Україна',
    'project001_3': '143м2',
    'project002_1': "Приватний будинок 'MISTER'S RESIDANCE'",
    'project002_2': 'Лебедівка, Україна',
    'project002_3': '1 009м2',
    'project003_1': 'Приватний будинок',
    'project003_2': 'Плюти, Україна',
    'project003_3': '258м2',
    'project004_1': 'Приватний будинок',
    'project004_2': 'Рославичі, Україна',
    'project004_3': '221м2',
    'project005_1': 'Приватний будинок',
    'project005_2': 'Петрушки, Україна',
    'project005_3': '257м2',
    'project006_1': 'Приватний будинок',
    'project006_2': 'Київ, Україна',
    'project006_3': '125м2',
    'project007_1': 'Приватний будинок',
    'project007_2': 'Осиково, Україна',
    'project007_3': '164м2',
    'project008_1': 'Приватний будинок',
    'project008_2': 'Плюти, Україна',
    'project008_3': '246м2',
    'project009_1': 'Приватний будинок',
    'project009_2': 'Проект був розроблений для компанії DOMRIY, 163м2',
    'project010_1': 'Приватний будинок',
    'project010_2': 'Проект був розроблений для компанії DOMRIY, 160м2',
    'project011_1': 'Приватний будинок',
    'project011_2': 'Проект був розроблений для компанії DOMRIY, 159м2',
    'project012_1': 'Гостьовий Приватний будинок',
    'project012_2': 'Лебедівка, Україна',
    'project012_3': '254м2',
    'project013_1': 'Приватний будинок',
    'project013_2': 'Осиково, Україна',
    'project013_3': '234м2',
    'project014_1': 'Приватний будинок',
    'project014_2': 'Проект був розроблений для компанії DOMRIY',
    'project014_3': '200м2',
    'project015_1': 'Приватний будинок',
    'project015_2': 'Гостомель, Україна',
    'project015_3': '238м2',
    'project016_1': 'Громадська будівля',
    'project016_2': 'Офіс, Київ, Україна',
    'project016_3': '499м2',
    'project017_1': 'Банний комплекс, Підгірці',
    'project017_2': 'Робота над комплексом у команді LOFT BURO, 940м2',
    'project018_1': 'Громадська будівля',
    'project018_2': 'Офіс, Обухів, Україна',
    'project018_3': '945м2',
    'project019_1': 'Громадська будівля',
    'project019_2': 'Сервісний центр, Путрівка, Україна',
    'project019_3': '1 578м2',
    'project020_1': 'Громадська будівля',
    'project020_2': 'Ангар, Путрівка, Україна',
    'project020_3': '1 770м2',
    'project021_1': 'Житловий комплекс',
    'project021_2': "'Comfort Town', Київ",
    'project021_3': 'Робота над комплексом у команді ARCHIMATIKA, 700 370м2',
    'project022_1': 'Громадська будівля',
    'project022_2': 'Торгові павільйони, Київ, Україна',
    'project022_3': '252м2',
    'project023_1': 'Житловий комплекс',
    'project023_2': 'Вишеньки, Україна',
    'project023_3': '50 510м2',
    'project024_1': 'Громадська будівля',
    'project024_2': 'Вертолітна площадка, Київ, Україна',
    'project024_3': '3 014м2',
    'project025_1': "Дизайн інтер'єру",
    'project025_2': 'Путрівка, Україна',
    'project025_3': '457м2',
    'project026_1': "Дизайн інтер'єру",
    'project026_2': 'Путрівка, Україна',
    'project026_3': '457м2',
    'project027_1': "Дизайн інтер'єру",
    'project027_2': 'Приватний тренажерний зал з сауною, Бобриця, Україна',
    'project027_3': '94м2',
    'project028_1': "Дизайн інтер'єру",
    'project028_2': 'Приватний тренажерний зал з сауною, Бобриця, Україна',
    'project028_3': '94м2',
    'project029_1': "Дизайн інтер'єру",
    'project029_2': 'Плюти, Україна',
    'project029_3': '67м2',
    'project030_1': "Дизайн інтер'єру",
    'project030_2': 'Офіс, Нові Петрівці, Україна',
    'project030_3': '711м2',
    'project031_1': "Дизайн інтер'єру",
    'project031_2': 'Офіс, Нові Петрівці, Україна',
    'project031_3': '711м2',
    'project032_1': "Дизайн інтер'єру",
    'project032_2': 'Офіс, Нові Петрівці, Україна',
    'project032_3': '711м2',
    'project033_1': "Дизайн інтер'єру",
    'project033_2': 'Офіс, Нові Петрівці, Україна',
    'project033_3': '711м2',
    'project034_1': 'Благоустрій',
    'project034_2': 'Лебедівка, Україна',
    'project034_3': '50 000м2',
    'project035_1': 'Благоустрій',
    'project035_2': 'Лебедівка, Україна',
    'project035_3': '50 000м2',
    'project036_1': 'Благоустрій',
    'project036_2': 'Навіс, Підгірці, Україна',
    'project036_3': '234m2',
    'project037_1': 'Благоустрій',
    'project037_2': 'Київ, Україна',
    'project037_3': '854m2',
    'project038_1': 'Благоустрій',
    'project038_2': 'Котеджне містечко, Козин, Україна',
    'project038_3': '60 550m2',
    'project039_1': 'Благоустрій',
    'project039_2': 'Київ, Україна',
    'project039_3': '720m2'
  }
};
$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr('id');
    $('.lang').each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});

/*==================================== */

let dots = document.querySelectorAll('.dots__link'); // Возвращает список элементов
let lastClicked = dots[0]; // Первый элемент из списка (счет начинается с нуля)

for (let i = 0; i < dots.length; i++) {
  // Цикл берет и кругами выполняет код. На каждом круге, i является конкретным числом.
  // Добавляется событие 'клик' на dots[0], потом dots[1], dots[2]...
  dots[i].addEventListener('click' || 'scroll', function () {
    lastClicked.classList.remove('dots__active');
    this.classList.add('dots__active');
    // Убрали класс с предыдущего кликнутого элемента, добавили на текущий

    lastClicked = this;
    // Обновили значение переменной - теперь она ссылается на текущий элемент. 
    // Чтобы на следующем клике, убрать класс уже с этого.
  });
}

// let postion = $('#target').offset().top,
//     height = $('#target').height();
// $(document).on('scroll', function (){
//   var scroll = $(document).scrollTop();
//   if(scroll  > postion && scroll < (postion + height) ) {
//      $('body').addClass('dots__active')
//      }else {
//         $('body').removeClass('dots__active')
//      }
// })

// let el = document.querySelector('.dots__link');

// window.addEventListener('scroll', toggleClassOnScroll.bind(el, 150));

// function toggleClassOnScroll(pxAmount) {
//   let scrollTop = document.body.scrollTop;

//   if(scrollTop > pxAmount) {
//     this.classList.add('dots__active');
//   } else {
//     this.classList.remove('dots__active');
//   }
// }

// var postion = $('#target').offset().top,
//     height = $('#target').height();
// $(document).on('scroll', function (){
//   var scroll = $(document).scrollTop();
//   if(scroll  > postion && scroll < (postion + height) ) {
//      $('.dots__link').addClass('dots__active')
//      }else {
//         $('.dots__link').removeClass('dots__active')
//      }
// })