import { gsap } from "gsap";
import { Sounds } from "./Sounds.js";
import { Menu } from "./Buttons/Menu.js";
import { About } from "./About.js";
import { Authors } from "./Authors.js";
import { Category } from './Category.js'
// import { ChoiceCategory } from './ChoiceCategory.js'

export class Intro {

    constructor(titleIntro = 'Классики') {
        this.titleIntro = titleIntro;
        this.sounds = new Sounds();
        new Menu();
        this.initLayout();
        this.introAnim();
        this.initGame();
    }

    initLayout() {
        this.wrapper = document.querySelector('.wrapper');
        this.container = document.querySelector('.container');
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperBackIntro = document.getElementById('backIntro');
        this.wrapperBackAbout = document.getElementById('backAbout');
        this.wrapperBackAuthors = document.getElementById('backAuthors');
        // this.backgroundMusicID = document.getElementById('backgroundMusicID');

        this.wrapperTopTitle = document.createElement('div');

        this.wrapperTop.className += ' wrapper__top_intro';
        this.wrapperTopTitle.className = 'wrapper__top_title wrapper__top_title--intro';

        this.wrapperTopTitle.innerHTML = `
            <h1>${this.titleIntro}</h1>
        `;

        this.wrapperTop.appendChild(this.wrapperTopTitle);
    }

    introAnim() {
        let tl = gsap.timeline();
        tl
            .to(this.wrapperBackIntro, {
                duration: '0.3',
                // delay: '0.2',
                autoAlpha: 1
            })
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
        this.mainMenu = document.getElementById('menuMain');

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
                    this.container.removeChild(this.mainMenu);
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
                    new Category(
                        45,
                        'Ученик',
                        'Student',
                        'Знаток',
                        'Connoisseur',
                        'Хранитель',
                        'Keeper');
                }
            });
            tl
                .to(this.wrapperTopTitle, {
                    autoAlpha: 0,
                    duration: 0.3,
                    y: '-10%'
                })
                .to(this.mainMenu, {
                    duration: 0.3,
                    // delay: '-0.4',
                    autoAlpha: 0
                })
                .to([this.wrapperBackIntro, this.wrapperBackAbout, this.wrapperBackAuthors], {
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
                    this.container.removeChild(this.mainMenu);
                    new Authors();
                }
            });
            tl
                .to(this.wrapperTopTitle, {
                    autoAlpha: 0,
                    duration: 0.3,
                    y: '-10%'
                })
                .to(this.mainMenu, {
                    duration: 0.3,
                    // delay: '-0.4',
                    autoAlpha: 0
                })
                .to([this.wrapperBackIntro, this.wrapperBackAbout], {
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
                    this.container.removeChild(this.mainMenu);
                    new About();
                }
            });
            tl
                .to(this.wrapperTopTitle, {
                    autoAlpha: 0,
                    duration: 0.3,
                    y: '-10%'
                })
                .to(this.mainMenu, {
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