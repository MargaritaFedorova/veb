function ready () {
    
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.929980, 30.362158],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Московский вокзал, Санкт-Петербург, Невский проспект, 85',
                
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../burgers-img/sprite-svg/map-marker.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([59.896152, 30.424465], {
                hintContent: 'Loftschool, Санкт-Петербург, ул. Бабушкина, д. 12/1, 15',
                
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../burgers-img/sprite-svg/map-marker.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
        
        myMap.behaviors.disable('scrollZoom'); 
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });

};

document.addEventListener ("DOMContentLoaded", ready);



