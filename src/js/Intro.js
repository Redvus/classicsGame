import { gsap } from "gsap";
import { Sounds } from "./Sounds.js";
import { ArrowsAll } from "./ArrowsAll.js";
import { About } from "./About.js";
import { Authors } from "./Authors.js";
import { Category } from './Category.js'
// import { ChoiceCategory } from './ChoiceCategory.js'

export class Intro {

    constructor(titleIntro = 'Классики') {
        this.titleIntro = titleIntro;
        this.sounds = new Sounds();
        this.arrowsAll = new ArrowsAll();
        this.initLayout();
        this.introAnim();
        this.initGame();
    }

    initLayout() {
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperIntro = document.querySelector('.wrapper__back_intro');
        // this.backgroundMusicID = document.getElementById('backgroundMusicID');

        this.wrapperTopTitle = document.createElement('div');

        this.wrapperTop.className += ' wrapper__top_intro';
        this.wrapperTopTitle.className = 'wrapper__top_title wrapper__top_title--intro';

        this.wrapperTopTitle.innerHTML = `
            <h1>${this.titleIntro}</h1>
        `;

        this.wrapperIntro.innerHTML = `
            <img src="assets/games/classics/images/c_introBack_1.jpg" alt="Intro Background">
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
                    // gsap.to(this.wrapperIntro, {
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
                .to(this.wrapperIntro, {
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
                    new Authors(
                        'Сценарист',
                        'Инна Ямщикова',
                        'Художники',
                        'Елена Расторгуева',
                        'Анастасия Полякова',
                        'Программист',
                        'Александр Суворов'
                    );
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
                .to(this.wrapperIntro, {
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
                    new About('МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» была создана в декабре 1986 года. На сегодняшний день в ее составе&nbsp;– Центральная городская библиотека имени Н.К. Крупской и 35 библиотек-филиалов, нашими читателями являются жители всех 9 районов города. Библиотеки системы&nbsp;– это информационные, образовательные центры, место культурного отдыха и общения. СМИБС находится в центре мировых событий, активно участвует в общероссийских акциях и в жизни города.', 'В библиотеках системы можно получить информацию и литературу по любой теме, доступ к электронным базам данных, воспользоваться услугами Интернет-залов, Центрами общественного доступа, побывать на презентациях выставок и творческих встречах, а также воспользоваться дополнительными сервисными услугами:<ul><li>ксерокопированием</li><li>сканированием</li><li>ламинированием</li><li>документов</li><li>распечаткой информации</li><li>на принтере</li><li>записью на электронные</li><li>носители</li></ul>');
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
                .to(this.wrapperIntro, {
                    duration: '0.5',
                    // delay: '0.2',
                    autoAlpha: 0
                });
            ;
        });
    }
}