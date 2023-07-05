$(function () {
  $(document).ready(function () {
    // console.log("Готов!");
    //! переход на 1 секцию при перезагрузке (плавный скролл)
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      2000
    );
  });
});
//

//! Menu --------------------
//? Добавление фона header при скролле
window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  // Получаем положение скролла
  if (scrolled !== 0) {
    // Если прокрутка есть, то делаем header__inner непрозрачным
    document.querySelector(".header").style.backgroundColor = "#fff";
  } else {
    // Если нет, то делаем его прозрачным
    document.querySelector(".header").style.backgroundColor = "transparent";
  }
};

//? Выделение активного пункта меню при скролле по секциям лендинга
// находим ссылку и убираем из нее #, чтобы сравнивать потом с id секции
const getId = (href) => href.getAttribute("href").replace("#", "");
//  если секция при скролле появляется в зоне видимости, то выделяем соответствующую ссылку в меню
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".menu__list-link").forEach((link) => {
          link.classList.toggle("active", getId(link) === entry.target.id);
        });
      }
    });
  },
  { threshold: 0.7 }
);

document
  .querySelectorAll(".section")
  .forEach((section) => observer.observe(section));

//? Выделение пункта меню по клик и отскроливание зоны просмотра до активной секции

let menuLinks = document.querySelectorAll(".menu__list-link");
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].onclick = function () {
    this.classList.add("active");
  };
}

//! name-section
let nameSectionWidth = document.querySelector(".name-section").clientWidth;
let arrow1 = document.querySelectorAll(".name-section__subtitle");
let arrow2 = document.querySelectorAll(".name-section__line");
let arrow3 = document.querySelectorAll(".name-section__title");

for (i = 0; i < arrow2.length; i++) {
  arrow2[i].style.width =
    ((nameSectionWidth - (arrow1[i].clientWidth + arrow3[i].clientWidth)) /
      nameSectionWidth) *
      100 +
    "%";
}
