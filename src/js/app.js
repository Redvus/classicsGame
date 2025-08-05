import '/scss/app.scss';
import '/fonts/fontawesome-free-7.0.0-web/scss/fontawesome.scss';
import '/fonts/fontawesome-free-7.0.0-web/scss/regular.scss';
import '/fonts/fontawesome-free-7.0.0-web/scss/solid.scss';
import '/fonts/fontawesome-free-7.0.0-web/scss/brands.scss';

import { Intro } from "./Intro.js";
import { Category } from "./Category.js";
import { ChoiceCategory } from "./ChoiceCategory.js";
import { About } from './About.js';
import { Authors } from './Authors.js';

export class Game {
    constructor(parameters) {
        this.initLayout();
        this.initLayoutBack();
        this.initAppend();
        new Intro();
        // if (import.meta.env.DEV
        //     || import.meta.env.PROD
        // ) {
        //     this.initLayoutDev(); // Скрывать для build
        // }

        //Develop
        // new Category(
        //     45,
        //     'Ученик',
        //     'Student',
        //     'Знаток',
        //     'Connoisseur',
        //     'Хранитель',
        //     'Keeper');
        // new ChoiceCategory(
        //     'Ученик',
        //     15,
        //     '',
        //     'Student');

        // new About();
        // new Authors();
    }

    initLayout() {
        document.getElementById('app').innerHTML = `
            <div class="container"></div>
            <div class="wrapper__top"></div>
            <div class="wrapper__back"></div>
            <div class="wrapper__bottom"></div>
        `;

        this.wrapper = document.querySelector('.wrapper');
        this.container = document.querySelector('.container');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperBack = document.querySelector('.wrapper__back');
    }

    initLayoutBack() {
        this.wrapperBackIntro = document.createElement('div');
        this.wrapperCategoryBack = document.createElement('div');
        this.wrapperBackAbout = document.createElement('div');

        this.wrapperBackFirst = document.createElement('div');
        this.wrapperBackSecond = document.createElement('div');
        this.wrapperBackThird = document.createElement('div');

        this.wrapperBackIntro.classList = "wrapper__back wrapper__back--intro";
        this.wrapperCategoryBack.classList = "wrapper__back wrapper__back--category";
        this.wrapperBackAbout.classList = "wrapper__back wrapper__back--about";

        this.wrapperBackFirst.classList = "wrapper__back wrapper__back_category--quest wrapper__back_category--first";
        this.wrapperBackSecond.classList = "wrapper__back wrapper__back_category--quest wrapper__back_category--second";
        this.wrapperBackThird.classList = "wrapper__back wrapper__back_category--quest wrapper__back_category--third";

        this.wrapperBackIntro.innerHTML = `
            <img src="assets/games/classics/images/c_introBack_1.jpg" alt="Intro Background">
        `;

        this.wrapperBackAbout.innerHTML = `
            <img src="assets/games/classics/images/c_introBack_1.jpg" alt="Intro Background">
        `;
    }

    initAppend() {
        this.wrapperBack.appendChild(this.wrapperBackIntro);
        this.wrapperBack.appendChild(this.wrapperBackAbout);
        this.wrapperBack.appendChild(this.wrapperCategoryBack);
        this.wrapperBack.appendChild(this.wrapperBackFirst);
        this.wrapperBack.appendChild(this.wrapperBackSecond);
        this.wrapperBack.appendChild(this.wrapperBackThird);
    }

    initMobile() {
        /* Mobile */
        this.wrapperMobile = document.createElement('div');
        this.wrapperMobile.className = 'wrapper__mobile';
        this.wrapperMobile.innerHTML = `
            <p>Ваше устройство, к сожалению, не поддерживается&nbsp;– ширина экрана по большей стороне должна быть не&nbsp;менее&nbsp;1000&nbsp;пикселей для&nbsp;полного восприятия&nbsp;игры.<br><br>
            Если устройство в&nbsp;вертикальной ориентации и по большей стороне имеет более&nbsp;1000&nbsp;пикселей, тогда переверните его и&nbsp;перезагрузите&nbsp;страницу.</p>
        `;

        /* Game Container */
        this.wrapperContainer = document.createElement('div');
        this.wrapperContainer.className = 'wrapper__mobile';
        this.wrapperContainer.innerHTML = `
            <p>Если ваше устройство находится в&nbsp;горизонтальной ориентации, вероятно, ширина экрана менее допустимых 1000&nbsp;пикселей.<br><br>
            Если вы запускаете игру на&nbsp;компьютере, видимо, ширина браузера менее&nbsp;1000&nbsp;пикселей.<br>
            Увеличьте ширину браузера и&nbsp;перезагрузите&nbsp;страницу.</p>
        `;

        if (document.body.clientWidth < 820 || screen.width < 820) {
            // this.wrapper.removeChild(this.wrapperBack);
            this.wrapper.appendChild(this.wrapperMobile);
        } else if (document.body.clientWidth < 1000 || screen.width < 1000) {
            this.wrapper.appendChild(this.wrapperContainer);
        }

        // if (document.body.clientWidth >= 1200 ||
        //     screen.width >= 1200) {
        //     window.onresize = function () {
        //         location.reload();
        //     }
        // }
    }

    // const container = document.querySelector('.container'),
    //     wrapper = document.querySelector('.wrapper')
    // ;

    // const soundsLoad = new Sounds();

    /* Develop */
    // introDev() {
    //     const introDevLoad = new Intro();
    //     introDevLoad.introStart();

    //     const clickLoadGame = document.getElementById('clickLoadGame'),
    //         clickAuthors = document.getElementById('clickAboutAuthors'),
    //         clickAbout = document.getElementById('clickAboutLibrary'),
    //         wrapperTop = document.querySelector('.wrapper__top'),
    //         wrapperTitle = document.querySelector('.wrapper__title'),
    //         wrapperBottom = document.querySelector('.wrapper__bottom'),
    //         wrapperBack = document.querySelector('.wrapper__intro'),
    //         backgroundMusicID = document.getElementById('backgroundMusicID'),
    //         choiceCatLoad = new ChoiceCategory()
    //     ;

    //     clickLoadGame.addEventListener('click', () => {
    //         soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_progressClear.ogg');

    //         // Music Background
    //         if (backgroundMusicID === null) {
    //             soundsLoad.backgroundMusicLoad('assets/games/kraevedia/sounds/k_paperWings.ogg');
    //             localStorage.setItem('backgroundMusic', JSON.stringify(1));
    //         } else if (backgroundMusicID.paused || localStorage.getItem('backgroundMusic') === '0') {
    //             backgroundMusicID.pause();
    //             localStorage.setItem('backgroundMusic', JSON.stringify(0));
    //         }

    //         let tl = gsap.timeline({
    //             onComplete: () => {
    //                 wrapper.className = 'wrapper';
    //                 wrapper.removeChild(wrapperTop);
    //                 wrapper.removeChild(wrapperBottom);
    //                 wrapper.removeChild(wrapperBack);
    //                 wrapper.appendChild(container);
    //                 categoryDev();
    //             }
    //         });
    //         tl
    //             .to(wrapperTop, {
    //                 duration: 0.4,
    //                 autoAlpha: 0,
    //                 y: '-3%'
    //             })
    //             // .to(wrapperTitle, {
    //             //     duration: 0.7,
    //             //     delay: -0.5,
    //             //     autoAlpha: 0,
    //             //     y: '5%'
    //             // })
    //             .to(wrapperBottom, {
    //                 duration: 0.7,
    //                 delay: -0.5,
    //                 autoAlpha: 0,
    //                 y: '5%'
    //             })
    //             .to(wrapperBack, {
    //                 duration: 0.7,
    //                 delay: -0.5,
    //                 autoAlpha: 0,
    //                 scale: 0.98
    //             })
    //         ;
    //     });

    //     clickAuthors.addEventListener('click', () => {
    //         let tl = gsap.timeline({
    //             onComplete: () => {
    //                 wrapper.className = 'wrapper';
    //                 wrapper.removeChild(wrapperTop);
    //                 // wrapper.removeChild(wrapperTitle);
    //                 wrapper.removeChild(wrapperBottom);
    //                 wrapper.removeChild(wrapperBack);
    //                 wrapper.appendChild(container);
    //                 authorsStart();
    //             }
    //         });
    //         tl
    //             .to(wrapperTop, {
    //                 duration: 0.4,
    //                 autoAlpha: 0,
    //                 y: '-3%'
    //             })
    //             // .to(wrapperTitle, {
    //             //     duration: 0.7,
    //             //     delay: -0.5,
    //             //     autoAlpha: 0,
    //             //     y: '5%'
    //             // })
    //             .to(wrapperBottom, {
    //                 duration: 0.7,
    //                 delay: -0.5,
    //                 autoAlpha: 0,
    //                 y: '5%'
    //             })
    //             .to(wrapperBack, {
    //                 duration: 0.7,
    //                 delay: -0.5,
    //                 autoAlpha: 0,
    //                 scale: 0.98
    //             })
    //         ;
    //     });

    //     clickAbout.addEventListener('click', () => {
    //         let tl = gsap.timeline({
    //             onComplete: () => {
    //                 wrapper.className = 'wrapper';
    //                 wrapper.removeChild(wrapperTop);
    //                 // wrapper.removeChild(wrapperTitle);
    //                 wrapper.removeChild(wrapperBottom);
    //                 wrapper.removeChild(wrapperBack);
    //                 wrapper.appendChild(container);
    //                 aboutStart();
    //             }
    //         });
    //         tl
    //             .to(wrapperTop, {
    //                 duration: 0.4,
    //                 autoAlpha: 0,
    //                 y: '-3%'
    //             })
    //     //         .to(wrapperTitle, {
    //     //             duration: 0.7,
    //     //             delay: -0.5,
    //     //             autoAlpha: 0,
    //     //             y: '5%'
    //     //         })
    //             .to(wrapperBottom, {
    //                 duration: 0.7,
    //                 delay: -0.5,
    //                 autoAlpha: 0,
    //                 y: '5%'
    //             })
    //             .to(wrapperBack, {
    //                 duration: 0.7,
    //                 delay: -0.5,
    //                 autoAlpha: 0,
    //                 scale: 0.98
    //             })
    //         ;
    //     });
    // }

    // /* Запускаем категории */
    // categoryDev() {
    //     const categoryLoad = new Category(),
    //         arrowBackLoad = new ArrowsAll(),
    //         settingsLoad = new Settings()
    //     ;
    //     categoryLoad.categoryMain();
    //     categoryLoad.categoryProgress('progressCitizenValue', 'progressCitizenAll');
    //     categoryLoad.categoryProgress('progressChicheroneValue', 'progressChicheroneAll');
    //     categoryLoad.categoryProgress('progressKraevedValue', 'progressKraevedAll');

    //     const containerCategory = document.querySelector('.container__category'),
    //         introAboutBack = document.querySelector('.wrapper__service'),
    //         wrapperBackCitizen = document.createElement('div'),
    //         wrapperBackChicherone = document.createElement('div'),
    //         wrapperBackKraeved = document.createElement('div'),
    //         categoryCitizen = document.getElementById('categoryCitizen'),
    //         categoryChicherone = document.getElementById('categoryChicherone'),
    //         categoryKraeved = document.getElementById('categoryKraeved')
    //     ;

    //     let progressCitizenQuestSum = JSON.parse(localStorage.getItem('progressCitizenAll')),
    //         progressChicheroneQuestSum = JSON.parse(localStorage.getItem('progressChicheroneAll')),
    //         progressKraevedQuestSum = JSON.parse(localStorage.getItem('progressKraevedAll'))
    //     ;

    //     wrapperBackCitizen.className = 'wrapper__citizen';
    //     wrapperBackChicherone.className = 'wrapper__chicherone';
    //     wrapperBackKraeved.className = 'wrapper__kraeved';

    //     if (localStorage.getItem('progressCitizenAll') === null ||
    //         localStorage.getItem('progressChicheroneAll') === null ||
    //         localStorage.getItem('progressKraevedAll') === null) {
    //         localStorage.setItem('progressCitizenAll', JSON.stringify(0));
    //         localStorage.setItem('progressChicheroneAll', JSON.stringify(0));
    //         localStorage.setItem('progressKraevedAll', JSON.stringify(0));
    //     }

    //     //Settings
    //     arrowBackLoad.clearStorage();
    //     const settingButton = document.getElementById('settingsClick'),
    //         setProgressCitizen = document.getElementById('progressCitizenValue'),
    //         setProgressChicherone = document.getElementById('progressChicheroneValue'),
    //         setProgressKraeved = document.getElementById('progressKraevedValue'),
    //         wrapperTopTitle = document.querySelector('.wrapper__top')
    //     ;
    //     settingButton.addEventListener('click', () => {
    //         settingsLoad.settingsBlock();
    //         const settingsClearButton = document.getElementById('clearProgressButton'),
    //             settingsBack = document.querySelector('.wrapper__lightbox'),
    //             settingsBlock = document.querySelector('.wrapper__lightbox_block'),
    //             settingsClose = document.getElementById('settingsCloseButton'),
    //             settingsText = document.getElementById('settingsText'),
    //             settingsToggleMusic = document.getElementById('turnOfSoundButton'),
    //             settingsToggleMusicID = document.getElementById('backgroundMusicID'),
    //             settingsMusicValue = JSON.parse(localStorage.getItem('backgroundMusic'));

    //         settingsClearButton.addEventListener('click', () => {
    //             localStorage.clear();
    //             localStorage.setItem('progressCitizenAll', JSON.stringify(0));
    //             localStorage.setItem('progressChicheroneAll', JSON.stringify(0));
    //             localStorage.setItem('progressKraevedAll', JSON.stringify(0));
    //             setProgressCitizen.textContent = JSON.parse(localStorage.getItem('progressCitizenAll'));
    //             setProgressChicherone.textContent = JSON.parse(localStorage.getItem('progressChicheroneAll'));
    //             setProgressKraeved.textContent = JSON.parse(localStorage.getItem('progressKraevedAll'));
    //             soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_progressClear.ogg');
    //             categoryCitizen.className = 'category__main';
    //             categoryChicherone.className = 'category__main';
    //             categoryKraeved.className = 'category__main';
    //         });

    //         settingsClearButton.addEventListener('mouseover', () => {
    //             settingsText.textContent = 'Вы уверены?';
    //             settingsClearButton.textContent = 'Да';
    //         });

    //         settingsClearButton.addEventListener('mouseleave', () => {
    //             settingsText.textContent = 'Весь игровой процесс будет сброшен и вы начнете игру с начала';
    //             settingsClearButton.textContent = 'Сбросить прогресс';
    //         });

    //         if (localStorage.getItem('backgroundMusic') === '0') {
    //             settingsToggleMusic.textContent = 'Включить музыку';
    //         }

    //         settingsToggleMusic.addEventListener('click', () => {
    //             if (settingsToggleMusicID.paused || settingsMusicValue === '0') {
    //                 settingsToggleMusicID.play();
    //                 settingsToggleMusic.textContent = 'Выключить музыку';
    //                 localStorage.setItem('backgroundMusic', JSON.stringify(1));
    //             } else if (settingsToggleMusicID.play || settingsMusicValue === '1'){
    //                 settingsToggleMusicID.pause();
    //                 settingsToggleMusic.textContent = 'Включить музыку';
    //                 localStorage.setItem('backgroundMusic', JSON.stringify(0));
    //             }
    //         });

    //         settingsClose.addEventListener('click', () => {
    //             let tl = gsap.timeline({
    //                 onComplete: () => {
    //                     wrapper.removeChild(settingsBack);
    //                 }
    //             });
    //             tl
    //                 .to(settingsBlock, {
    //                     duration: 0.3,
    //                     y: '5%',
    //                     autoAlpha: 0
    //                 })
    //                 .to(settingsBack, {
    //                     duration: 0.3,
    //                     autoAlpha: 0
    //                 })
    //             ;
    //         });
    //     });

    //     arrowBackLoad.arrowBack();
    //     const arrowBackClick = document.getElementById('arrowBack');
    //     arrowBackClick.addEventListener('click', () => {
    //         let tl = gsap.timeline({
    //             onComplete: () => {
    //                 wrapper.removeChild(arrowBackClick);
    //                 wrapper.removeChild(settingButton);
    //                 container.removeChild(containerCategory);
    //                 wrapper.removeChild(introAboutBack);
    //                 wrapper.removeChild(wrapperTopTitle);
    //                 wrapper.className = 'wrapper';
    //                 introDev();
    //             }
    //         });
    //         tl
    //             .to(wrapperTopTitle, {
    //                 duration: 0.4,
    //                 autoAlpha: 0,
    //                 y: '-3%'
    //             })
    //             .to(containerCategory, {
    //                 autoAlpha: 0,
    //                 duration: 0.6
    //             })
    //             .to([settingButton, arrowBackClick], {
    //                 autoAlpha: 0,
    //                 duration: 0.6,
    //                 delay: '-0.6'
    //             })
    //             .to(introAboutBack, {
    //                 autoAlpha: 0,
    //                 delay: '-0.1',
    //                 scale: 0.98
    //             })
    //         ;
    //     });

    //     //Category load
    //     categoryCitizen.addEventListener('click', () => {
    //         soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
    //         let tl = gsap.timeline({
    //             onComplete: () => {
    //                 wrapper.removeChild(arrowBackClick);
    //                 wrapper.removeChild(settingButton);
    //                 container.removeChild(containerCategory);
    //                 wrapper.removeChild(wrapperTopTitle);
    //                 wrapper.removeChild(introAboutBack);
    //                 wrapper.appendChild(wrapperBackCitizen);
    //                 citizenCategoryDev();
    //                 lockSubQuestCitizen();
    //             }
    //         });
    //         tl
    //             .to(wrapperTopTitle, {
    //                 duration: 0.4,
    //                 autoAlpha: 0,
    //                 y: '-3%'
    //             })
    //             .to([categoryCitizen, categoryChicherone, categoryKraeved], {
    //                 autoAlpha: 0,
    //                 duration: "0.6",
    //                 delay: "-0.3",
    //                 y: "0.5rem",
    //                 stagger: 0.2
    //             })
    //             .to(introAboutBack, {
    //                 autoAlpha: 0,
    //                 delay: '-0.1',
    //                 scale: 0.98
    //             })
    //             .to(wrapperBackCitizen, {
    //                 autoAlpha: 1,
    //                 duration: 0.4
    //             })
    //         ;
    //     });

    //     categoryChicherone.addEventListener('click', () => {
    //         soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
    //         let tl = gsap.timeline({
    //             onComplete: () => {
    //                 wrapper.removeChild(arrowBackClick);
    //                 wrapper.removeChild(settingButton);
    //                 container.removeChild(containerCategory);
    //                 wrapper.removeChild(wrapperTopTitle);
    //                 wrapper.removeChild(introAboutBack);
    //                 wrapper.appendChild(wrapperBackChicherone);
    //                 chicheroneCategoryDev();
    //                 lockSubQuestChicherone();
    //             }
    //         });
    //         tl
    //             .to(wrapperTopTitle, {
    //                 duration: 0.4,
    //                 autoAlpha: 0,
    //                 y: '-3%'
    //             })
    //             .to([categoryCitizen, categoryChicherone, categoryKraeved], {
    //                 autoAlpha: 0,
    //                 duration: "0.6",
    //                 delay: "-0.3",
    //                 y: "0.5rem",
    //                 stagger: 0.2
    //             })
    //         ;
    //     });

    //     categoryKraeved.addEventListener('click', () => {
    //         soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
    //         let tl = gsap.timeline({
    //             onComplete: () => {
    //                 wrapper.removeChild(arrowBackClick);
    //                 wrapper.removeChild(settingButton);
    //                 container.removeChild(containerCategory);
    //                 wrapper.removeChild(wrapperTopTitle);
    //                 wrapper.removeChild(introAboutBack);
    //                 wrapper.appendChild(wrapperBackKraeved);
    //                 kraevedCategoryDev();
    //                 lockSubQuestKraeved();
    //             }
    //         });
    //         tl
    //             .to(wrapperTopTitle, {
    //                 duration: 0.4,
    //                 autoAlpha: 0,
    //                 y: '-3%'
    //             })
    //             .to([categoryCitizen, categoryChicherone, categoryKraeved], {
    //                 autoAlpha: 0,
    //                 duration: "0.6",
    //                 delay: "-0.3",
    //                 y: "0.5rem",
    //                 stagger: 0.2
    //             })
    //         ;
    //     });

    //     if (progressCitizenQuestSum === 50) {
    //         categoryCitizen.className += ' category__main--hidden';
    //     }

    //     if (progressChicheroneQuestSum === 50) {
    //         categoryChicherone.className += ' category__main--hidden';
    //     }

    //     if (progressKraevedQuestSum === 50) {
    //         categoryKraeved.className += ' category__main--hidden';
    //     }
    // }
}

