import theme from "./ymaps.theme.json";
export const LOCATION = {
  center: [37.623082, 55.75254], // starting position [lng, lat]
  zoom: 9, // starting zoom
};

export function loadMapScript() {
  if (typeof document === "undefined") {
    return Promise.reject(new Error("Document is not available"));
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/v3/?apikey=9a70cddc-5c9f-4484-84ee-eaea17bf4622&lang=ru_RU";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

let map;

export const createMap = async () => {
  // Проверяем, исполняется ли код на клиенте
  if (typeof window === "undefined") {
    return;
  }

  // Проверяем, загружены ли яндекс карты
  if ("ymaps3" in window) {
    await window.ymaps3.ready;
    // Создаем карту
    const { YMap, YMapDefaultSchemeLayer } = window.ymaps3;
    // Initialize the map
    map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById("footer-map"),

      // Передаём параметры инициализации карты
      {
        location: {
          // Координаты центра карты
          center: [37.588144, 55.733842],

          // Уровень масштабирования
          zoom: 10,
        },
      },
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer({ ...theme }));
  }
};
