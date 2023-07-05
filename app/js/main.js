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

    //! slick
    $(".testimony__slider").slick({
      dots: true,
      arrows: true,
      // fade: true,
      autoplay: false,
      infinite: false,
      prevArrow:
        '<button type="button" class="slick-btn slick-prev"><svg width="96" height="19" viewBox="0 0 96 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 8.64644C0.451183 8.84171 0.451183 9.15829 0.646446 9.35355L3.82843 12.5355C4.02369 12.7308 4.34027 12.7308 4.53553 12.5355C4.7308 12.3403 4.7308 12.0237 4.53553 11.8284L1.70711 9L4.53553 6.17157C4.7308 5.97631 4.7308 5.65973 4.53553 5.46446C4.34027 5.2692 4.02369 5.2692 3.82843 5.46446L0.646446 8.64644ZM33 8.5L1 8.5L1 9.5L33 9.5L33 8.5Z" fill="#000"/><path d="M42.876 14.098C42.6427 14.098 42.4607 14.0327 42.33 13.902C42.2087 13.7713 42.148 13.5893 42.148 13.356V4.872C42.148 4.62933 42.2133 4.44733 42.344 4.326C42.4747 4.19533 42.6567 4.13 42.89 4.13H46.236C47.3 4.13 48.1213 4.396 48.7 4.928C49.2787 5.45067 49.568 6.188 49.568 7.14C49.568 8.10133 49.2787 8.848 48.7 9.38C48.1213 9.90267 47.3 10.164 46.236 10.164H43.604V13.356C43.604 13.5893 43.5433 13.7713 43.422 13.902C43.3007 14.0327 43.1187 14.098 42.876 14.098ZM43.604 9.002H46.026C46.726 9.002 47.2533 8.848 47.608 8.54C47.972 8.22267 48.154 7.756 48.154 7.14C48.154 6.53333 47.972 6.076 47.608 5.768C47.2533 5.45067 46.726 5.292 46.026 5.292H43.604V9.002ZM51.5537 14.098C51.3204 14.098 51.143 14.0373 51.0217 13.916C50.9004 13.7853 50.8397 13.608 50.8397 13.384V7.784C50.8397 7.55067 50.9004 7.37333 51.0217 7.252C51.143 7.13067 51.311 7.07 51.5257 7.07C51.7497 7.07 51.9177 7.13067 52.0297 7.252C52.151 7.37333 52.2117 7.55067 52.2117 7.784V8.806H52.0717C52.221 8.246 52.4964 7.82133 52.8977 7.532C53.299 7.24267 53.8124 7.07467 54.4377 7.028C54.6057 7.01867 54.7364 7.06067 54.8297 7.154C54.9324 7.24733 54.9884 7.392 54.9977 7.588C55.0164 7.784 54.9744 7.94267 54.8717 8.064C54.769 8.176 54.6104 8.24133 54.3957 8.26L54.1297 8.288C53.523 8.344 53.061 8.53533 52.7437 8.862C52.4264 9.18867 52.2677 9.63667 52.2677 10.206V13.384C52.2677 13.608 52.207 13.7853 52.0857 13.916C51.9737 14.0373 51.7964 14.098 51.5537 14.098ZM59.1727 14.126C58.426 14.126 57.782 13.986 57.2407 13.706C56.7087 13.4167 56.2933 13.0107 55.9947 12.488C55.7053 11.956 55.5607 11.326 55.5607 10.598C55.5607 9.88867 55.7053 9.268 55.9947 8.736C56.284 8.204 56.6807 7.78867 57.1847 7.49C57.6887 7.19133 58.2627 7.042 58.9067 7.042C59.3827 7.042 59.8073 7.12133 60.1807 7.28C60.554 7.42933 60.8713 7.65333 61.1327 7.952C61.4033 8.24133 61.604 8.596 61.7347 9.016C61.8747 9.436 61.9447 9.90733 61.9447 10.43C61.9447 10.5887 61.898 10.71 61.8047 10.794C61.7113 10.8687 61.5713 10.906 61.3847 10.906H56.6807V10.038H60.9927L60.7547 10.234C60.7547 9.76733 60.6847 9.37067 60.5447 9.044C60.414 8.71733 60.2133 8.47 59.9427 8.302C59.6813 8.12467 59.3547 8.036 58.9627 8.036C58.524 8.036 58.1507 8.13867 57.8427 8.344C57.544 8.54933 57.3153 8.834 57.1567 9.198C56.998 9.562 56.9187 9.98667 56.9187 10.472V10.556C56.9187 11.3773 57.11 11.998 57.4927 12.418C57.8847 12.8287 58.4493 13.034 59.1867 13.034C59.4667 13.034 59.7607 12.9967 60.0687 12.922C60.386 12.8473 60.6847 12.7213 60.9647 12.544C61.1233 12.4507 61.2633 12.4087 61.3847 12.418C61.5153 12.4273 61.618 12.4693 61.6927 12.544C61.7767 12.6187 61.828 12.712 61.8467 12.824C61.8653 12.936 61.8467 13.0527 61.7907 13.174C61.7347 13.286 61.6367 13.3887 61.4967 13.482C61.1793 13.6967 60.8107 13.86 60.3907 13.972C59.9707 14.0747 59.5647 14.126 59.1727 14.126ZM66.0365 14.098C65.8405 14.098 65.6678 14.0467 65.5185 13.944C65.3785 13.8413 65.2618 13.6827 65.1685 13.468L62.8305 8.036C62.7558 7.868 62.7278 7.70933 62.7465 7.56C62.7652 7.41067 62.8352 7.294 62.9565 7.21C63.0778 7.11667 63.2412 7.07 63.4465 7.07C63.6238 7.07 63.7638 7.112 63.8665 7.196C63.9692 7.28 64.0625 7.42467 64.1465 7.63L66.2605 12.838H65.8685L68.0245 7.63C68.1085 7.42467 68.2018 7.28 68.3045 7.196C68.4165 7.112 68.5705 7.07 68.7665 7.07C68.9345 7.07 69.0652 7.11667 69.1585 7.21C69.2612 7.294 69.3218 7.41067 69.3405 7.56C69.3685 7.7 69.3452 7.854 69.2705 8.022L66.9045 13.468C66.8205 13.6827 66.7038 13.8413 66.5545 13.944C66.4052 14.0467 66.2325 14.098 66.0365 14.098ZM71.3639 14.084C71.1399 14.084 70.9673 14.0187 70.8459 13.888C70.7246 13.748 70.6639 13.5567 70.6639 13.314V7.854C70.6639 7.61133 70.7246 7.42467 70.8459 7.294C70.9673 7.16333 71.1399 7.098 71.3639 7.098C71.5879 7.098 71.7606 7.16333 71.8819 7.294C72.0126 7.42467 72.0779 7.61133 72.0779 7.854V13.314C72.0779 13.5567 72.0173 13.748 71.8959 13.888C71.7746 14.0187 71.5973 14.084 71.3639 14.084ZM71.3639 5.642C71.0839 5.642 70.8646 5.572 70.7059 5.432C70.5566 5.292 70.4819 5.096 70.4819 4.844C70.4819 4.58267 70.5566 4.38667 70.7059 4.256C70.8646 4.116 71.0839 4.046 71.3639 4.046C71.6439 4.046 71.8586 4.116 72.0079 4.256C72.1666 4.38667 72.2459 4.58267 72.2459 4.844C72.2459 5.096 72.1666 5.292 72.0079 5.432C71.8586 5.572 71.6439 5.642 71.3639 5.642ZM77.0362 14.126C76.3456 14.126 75.7482 13.9813 75.2442 13.692C74.7496 13.4027 74.3622 12.992 74.0822 12.46C73.8022 11.928 73.6622 11.3027 73.6622 10.584C73.6622 10.0333 73.7416 9.54333 73.9002 9.114C74.0589 8.68467 74.2829 8.316 74.5722 8.008C74.8709 7.69067 75.2256 7.45267 75.6362 7.294C76.0562 7.126 76.5229 7.042 77.0362 7.042C77.7176 7.042 78.3056 7.18667 78.8002 7.476C79.3042 7.76533 79.6962 8.176 79.9762 8.708C80.2562 9.23067 80.3962 9.856 80.3962 10.584C80.3962 11.1253 80.3169 11.6153 80.1582 12.054C79.9996 12.4927 79.7709 12.866 79.4722 13.174C79.1829 13.482 78.8282 13.72 78.4082 13.888C77.9976 14.0467 77.5402 14.126 77.0362 14.126ZM77.0362 13.034C77.4189 13.034 77.7549 12.9407 78.0442 12.754C78.3336 12.5673 78.5576 12.292 78.7162 11.928C78.8842 11.564 78.9682 11.116 78.9682 10.584C78.9682 9.78133 78.7909 9.17467 78.4362 8.764C78.0816 8.35333 77.6149 8.148 77.0362 8.148C76.6442 8.148 76.3036 8.24133 76.0142 8.428C75.7249 8.60533 75.4962 8.876 75.3282 9.24C75.1696 9.604 75.0902 10.052 75.0902 10.584C75.0902 11.3773 75.2676 11.984 75.6222 12.404C75.9769 12.824 76.4482 13.034 77.0362 13.034ZM84.4202 14.126C83.8696 14.126 83.4076 14.0233 83.0342 13.818C82.6702 13.6127 82.3949 13.3093 82.2082 12.908C82.0309 12.4973 81.9422 11.984 81.9422 11.368V7.784C81.9422 7.54133 82.0029 7.364 82.1242 7.252C82.2456 7.13067 82.4182 7.07 82.6422 7.07C82.8662 7.07 83.0389 7.13067 83.1602 7.252C83.2909 7.364 83.3562 7.54133 83.3562 7.784V11.382C83.3562 11.9327 83.4682 12.3387 83.6922 12.6C83.9162 12.8613 84.2709 12.992 84.7562 12.992C85.2882 12.992 85.7176 12.8147 86.0442 12.46C86.3802 12.096 86.5482 11.62 86.5482 11.032V7.784C86.5482 7.54133 86.6089 7.364 86.7302 7.252C86.8516 7.13067 87.0289 7.07 87.2622 7.07C87.4862 7.07 87.6589 7.13067 87.7802 7.252C87.9016 7.364 87.9622 7.54133 87.9622 7.784V13.384C87.9622 13.86 87.7336 14.098 87.2762 14.098C87.0616 14.098 86.8936 14.0373 86.7722 13.916C86.6509 13.7853 86.5902 13.608 86.5902 13.384V12.194L86.7722 12.502C86.5856 13.0247 86.2869 13.426 85.8762 13.706C85.4656 13.986 84.9802 14.126 84.4202 14.126ZM92.3489 14.126C91.9383 14.126 91.5136 14.0793 91.0749 13.986C90.6456 13.8927 90.2489 13.734 89.8849 13.51C89.7636 13.426 89.6796 13.3327 89.6329 13.23C89.5863 13.1273 89.5676 13.0247 89.5769 12.922C89.5956 12.81 89.6376 12.7167 89.7029 12.642C89.7776 12.558 89.8663 12.5067 89.9689 12.488C90.0809 12.4693 90.1976 12.4927 90.3189 12.558C90.6829 12.7633 91.0329 12.908 91.3689 12.992C91.7049 13.0667 92.0363 13.104 92.3629 13.104C92.8576 13.104 93.2309 13.0153 93.4829 12.838C93.7349 12.6607 93.8609 12.4227 93.8609 12.124C93.8609 11.8813 93.7769 11.6947 93.6089 11.564C93.4409 11.424 93.1889 11.3167 92.8529 11.242L91.5229 10.976C90.9443 10.8547 90.5056 10.64 90.2069 10.332C89.9083 10.024 89.7589 9.632 89.7589 9.156C89.7589 8.72667 89.8756 8.35333 90.1089 8.036C90.3423 7.71867 90.6689 7.476 91.0889 7.308C91.5089 7.13067 91.9943 7.042 92.5449 7.042C92.9556 7.042 93.3429 7.09333 93.7069 7.196C94.0709 7.29867 94.4069 7.45267 94.7149 7.658C94.8363 7.72333 94.9156 7.812 94.9529 7.924C94.9903 8.02667 94.9949 8.12933 94.9669 8.232C94.9483 8.33467 94.9016 8.428 94.8269 8.512C94.7523 8.58667 94.6589 8.63333 94.5469 8.652C94.4443 8.66133 94.3276 8.63333 94.1969 8.568C93.9169 8.39067 93.6369 8.26467 93.3569 8.19C93.0863 8.11533 92.8156 8.078 92.5449 8.078C92.0503 8.078 91.6769 8.17133 91.4249 8.358C91.1823 8.53533 91.0609 8.778 91.0609 9.086C91.0609 9.31933 91.1356 9.51067 91.2849 9.66C91.4343 9.80933 91.6676 9.91667 91.9849 9.982L93.3149 10.248C93.9216 10.3693 94.3789 10.5747 94.6869 10.864C95.0043 11.1533 95.1629 11.5453 95.1629 12.04C95.1629 12.684 94.9063 13.1927 94.3929 13.566C93.8796 13.9393 93.1983 14.126 92.3489 14.126Z" fill="#000"/></svg></button>',
      nextArrow:
        '<button type="button" class="slick-btn slick-next"><svg width="72" height="19" viewBox="0 0 72 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M71.3536 10.3536C71.5488 10.1583 71.5488 9.84171 71.3536 9.64645L68.1716 6.46447C67.9763 6.2692 67.6597 6.2692 67.4645 6.46447C67.2692 6.65973 67.2692 6.97631 67.4645 7.17157L70.2929 10L67.4645 12.8284C67.2692 13.0237 67.2692 13.3403 67.4645 13.5355C67.6597 13.7308 67.9763 13.7308 68.1716 13.5355L71.3536 10.3536ZM39 10.5H71V9.5H39V10.5Z" fill="black"/><path d="M8.568 4.06C8.77333 4.06 8.93667 4.13 9.058 4.27C9.18867 4.40067 9.254 4.57333 9.254 4.788V13.342C9.254 13.5567 9.18867 13.734 9.058 13.874C8.92733 14.0047 8.75933 14.07 8.554 14.07C8.31133 14.07 8.12467 13.9767 7.994 13.79L2.506 6.552V13.342C2.506 13.5567 2.44067 13.734 2.31 13.874C2.18867 14.0047 2.02533 14.07 1.82 14.07C1.61467 14.07 1.45133 14.0047 1.33 13.874C1.20867 13.7433 1.148 13.566 1.148 13.342V4.788C1.148 4.57333 1.21333 4.40067 1.344 4.27C1.47467 4.13 1.64267 4.06 1.848 4.06C2.09067 4.06 2.27733 4.15333 2.408 4.34L7.896 11.592V4.788C7.896 4.57333 7.95667 4.40067 8.078 4.27C8.19933 4.13 8.36267 4.06 8.568 4.06ZM16.7323 12.278C16.863 12.278 16.9703 12.3293 17.0543 12.432C17.1383 12.5347 17.1803 12.6653 17.1803 12.824C17.1803 13.0947 17.0123 13.3233 16.6763 13.51C16.3496 13.6967 15.9903 13.8413 15.5983 13.944C15.2156 14.0467 14.847 14.098 14.4923 14.098C13.4096 14.098 12.5556 13.7853 11.9303 13.16C11.305 12.5253 10.9923 11.662 10.9923 10.57C10.9923 9.87 11.1276 9.24933 11.3983 8.708C11.6783 8.16667 12.0656 7.74667 12.5603 7.448C13.0643 7.14933 13.6336 7 14.2683 7C15.183 7 15.9063 7.294 16.4383 7.882C16.9703 8.47 17.2363 9.26333 17.2363 10.262C17.2363 10.6353 17.0683 10.822 16.7323 10.822H12.4063C12.4996 12.2687 13.195 12.992 14.4923 12.992C14.8376 12.992 15.1363 12.9453 15.3883 12.852C15.6403 12.7587 15.9063 12.6373 16.1863 12.488C16.2143 12.4693 16.289 12.432 16.4103 12.376C16.541 12.3107 16.6483 12.278 16.7323 12.278ZM14.2963 8.036C13.755 8.036 13.321 8.20867 12.9943 8.554C12.6676 8.89933 12.4716 9.38467 12.4063 10.01H16.0183C15.9903 9.37533 15.827 8.89 15.5283 8.554C15.239 8.20867 14.8283 8.036 14.2963 8.036ZM24.4801 12.936C24.6201 13.076 24.6901 13.2393 24.6901 13.426C24.6901 13.6033 24.6248 13.7573 24.4941 13.888C24.3728 14.0093 24.2234 14.07 24.0461 14.07C23.8688 14.07 23.7054 13.9907 23.5561 13.832L21.4141 11.424L19.2861 13.832C19.1368 13.9907 18.9734 14.07 18.7961 14.07C18.6188 14.07 18.4648 14.0047 18.3341 13.874C18.2128 13.7433 18.1521 13.5893 18.1521 13.412C18.1521 13.2347 18.2174 13.076 18.3481 12.936L20.5601 10.5L18.4601 8.162C18.3201 8.00333 18.2501 7.84467 18.2501 7.686C18.2501 7.50867 18.3154 7.35933 18.4461 7.238C18.5768 7.10733 18.7261 7.042 18.8941 7.042C19.0714 7.042 19.2348 7.12133 19.3841 7.28L21.4141 9.576L23.4441 7.28C23.5934 7.12133 23.7614 7.042 23.9481 7.042C24.1161 7.042 24.2654 7.10733 24.3961 7.238C24.5268 7.35933 24.5921 7.50867 24.5921 7.686C24.5921 7.86333 24.5221 8.022 24.3821 8.162L22.2821 10.5L24.4801 12.936ZM29.4276 12.992C29.6329 13.0107 29.7776 13.0667 29.8616 13.16C29.9549 13.244 30.0016 13.3653 30.0016 13.524C30.0016 13.7107 29.9269 13.8553 29.7776 13.958C29.6376 14.0513 29.4276 14.0887 29.1476 14.07L28.7696 14.042C28.0136 13.986 27.4489 13.7573 27.0756 13.356C26.7022 12.9453 26.5156 12.3433 26.5156 11.55V8.26H25.6756C25.2649 8.26 25.0596 8.078 25.0596 7.714C25.0596 7.546 25.1109 7.41533 25.2136 7.322C25.3256 7.21933 25.4796 7.168 25.6756 7.168H26.5156V5.726C26.5156 5.51133 26.5762 5.34333 26.6976 5.222C26.8282 5.10067 27.0009 5.04 27.2156 5.04C27.4302 5.04 27.6029 5.10067 27.7336 5.222C27.8642 5.34333 27.9296 5.51133 27.9296 5.726V7.168H29.3156C29.5116 7.168 29.6609 7.21933 29.7636 7.322C29.8756 7.41533 29.9316 7.546 29.9316 7.714C29.9316 7.89133 29.8756 8.02667 29.7636 8.12C29.6609 8.21333 29.5116 8.26 29.3156 8.26H27.9296V11.648C27.9296 12.0867 28.0182 12.4087 28.1956 12.614C28.3822 12.8193 28.6622 12.936 29.0356 12.964L29.4276 12.992Z" fill="#3E3F43"/></svg></button>',
    });
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
