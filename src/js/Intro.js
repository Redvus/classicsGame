import { gsap } from "gsap";
import { Sounds } from "./Sounds.js";
import { About } from "./About.js";
import { Authors } from "./Authors.js";
import { Category } from './Category.js'
// import { ChoiceCategory } from './ChoiceCategory.js'

export class Intro {

    constructor(titleIntro = 'Классики') {
        this.titleIntro = titleIntro;
        this.sounds = new Sounds();
        this.initLayout();
        this.introAnim();
        this.initGame();
    }

    initLayout() {
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperBackIntro = document.querySelector('.wrapper__back_intro');
        // this.backgroundMusicID = document.getElementById('backgroundMusicID');

        this.wrapperTopTitle = document.createElement('div');

        this.wrapperTop.className += ' wrapper__top_intro';
        this.wrapperTopTitle.className = 'wrapper__top_title wrapper__top_title--intro';

        this.wrapperTopTitle.innerHTML = `
            <h1>${this.titleIntro}</h1>
        `;

        // Кнопки
        this.introBlockButtons = document.createElement('ul');
        this.introBlockButtons.className = 'wrapper__bottom_menu';
        this.introBlockButtons.innerHTML = `
            <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>
            <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>
            <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>
        `;

        this.wrapperTop.appendChild(this.wrapperTopTitle);
        this.wrapperBottom.appendChild(this.introBlockButtons);
    }

    introAnim() {
        let tl = gsap.timeline();
        tl
            .from(this.wrapperTopTitle, {
                duration: 0.5,
                delay: 0.1,
                autoAlpha: 0,
                y: '-10%'
            })
            .from(this.introBlockButtons, {
                duration: 0.3,
                delay: '-0.2',
                autoAlpha: 0
            })
        ;
    }

    initGame() {
        this.clickLoadGame = document.getElementById('clickLoadGame');
        this.clickAuthors = document.getElementById('clickAboutAuthors');
        this.clickAbout = document.getElementById('clickAboutLibrary');
        this.wrapperBottomMenu = document.querySelector('.wrapper__bottom_menu');

        this.clickLoadGame.addEventListener('click', () => {

            // Music Background
            // if (backgroundMusicID === null) {
            //     soundsLoad.backgroundMusicLoad('assets/games/oldApartment/sounds/oa_ambient.ogg');
            //     localStorage.setItem('backgroundMusic', JSON.stringify(1));
            // } else if (backgroundMusicID.paused || localStorage.getItem('backgroundMusic') === '0') {
            //     backgroundMusicID.pause();
            //     localStorage.setItem('backgroundMusic', JSON.stringify(0));
            // }

            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperTop.innerHTML = '';
                    this.wrapperTop.className = 'wrapper__top';
                    this.wrapperBottom.removeChild(this.wrapperBottomMenu);
                    // gsap.to(this.wrapperBackIntro, {
                    //     duration: '0.5',
                    //     // delay: '0.2',
                    //     autoAlpha: 0,
                    //     zIndex: '-1'
                    // });
                    // gsap.to(this.wrapperCategoryBack, {
                    //     // duration: '0.5',
                    //     delay: '0.2',
                    //     autoAlpha: 1,
                    //     zIndex: 1
                    // });
                    new Category('Ученик', 'Знаток', 'Хранитель');
                }
            });
            tl
                .to(this.wrapperTopTitle, {
                    autoAlpha: 0,
                    duration: 0.3,
                    y: '-10%'
                })
                .to(this.wrapperBottomMenu, {
                    duration: 0.3,
                    // delay: '-0.4',
                    autoAlpha: 0
                })
                .to(this.wrapperBackIntro, {
                    duration: '0.5',
                    // delay: '0.2',
                    autoAlpha: 0
                });
            ;
        });

        this.clickAuthors.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperTop.innerHTML = '';
                    this.wrapperTop.className = 'wrapper__top';
                    this.wrapperBottom.removeChild(this.wrapperBottomMenu);
                    new Authors();
                }
            });
            tl
                .to(this.wrapperTopTitle, {
                    autoAlpha: 0,
                    duration: 0.3,
                    y: '-10%'
                })
                .to(this.wrapperBottomMenu, {
                    duration: 0.3,
                    // delay: '-0.4',
                    autoAlpha: 0
                })
                .to(this.wrapperBackIntro, {
                    duration: '0.5',
                    // delay: '0.2',
                    autoAlpha: 0
                });
            ;
        });

        this.clickAbout.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperTop.innerHTML = '';
                    this.wrapperTop.className = 'wrapper__top';
                    this.wrapperBottom.removeChild(this.wrapperBottomMenu);
                    new About();
                }
            });
            tl
                .to(this.wrapperTopTitle, {
                    autoAlpha: 0,
                    duration: 0.3,
                    y: '-10%'
                })
                .to(this.wrapperBottomMenu, {
                    duration: 0.3,
                    // delay: '-0.4',
                    autoAlpha: 0
                })
                .to(this.wrapperBackIntro, {
                    duration: '0.5',
                    // delay: '0.2',
                    autoAlpha: 0
                });
            ;
        });
    }
}