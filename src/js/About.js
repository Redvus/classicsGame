import { gsap } from "gsap";
import { ButtonBack } from "./Buttons/ButtonBack.js";
import { Intro } from "./Intro.js";

export class About {

    constructor(
        libraryLeftText = 'МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» была создана в декабре 1986 года. На сегодняшний день в ее составе&nbsp;– Центральная городская библиотека имени Н.К. Крупской и 35 библиотек-филиалов, нашими читателями являются жители всех 9 районов города. Библиотеки системы&nbsp;– это информационные, образовательные центры, место культурного отдыха и общения. СМИБС находится в центре мировых событий, активно участвует в общероссийских акциях и в жизни города. В библиотеках системы можно получить информацию и литературу по любой теме, доступ к электронным базам данных, воспользоваться услугами Интернет-залов, Центрами общественного доступа, побывать на презентациях выставок и творческих встречах, а также воспользоваться дополнительными сервисными услугами:<br><br>ксерокопированием, сканированием документов, ламинированием документов, распечаткой информации на принтере, записью на электронные носители.',
        libraryRightText = ''
    ) {
        this.libraryLeftText = libraryLeftText;
        this.libraryRightText = libraryRightText;
        this.initLayout();
        new ButtonBack();
        this.initAboutAnim();
        this.initAboutBack();

        this.initDev();
    }

    initLayout() {
        this.container = document.querySelector('.container');
        this.wrapperTopTitle = document.createElement('div');
        this.containerAbout = document.createElement('div');
        this.containerAboutLeft = document.createElement('div');
        this.containerAboutRight = document.createElement('div');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');

        // if (document.body.clientWidth < 570 || screen.width < 570) {
        //     container.style.width = 'calc(100% - 2rem)';
        //     container.style.padding = '0 1rem';
        // } else {
        //     container.style.width = '60rem';
        // }

        this.containerAbout.className = 'container__about_block container__about_block--about';
        this.containerAboutLeft.className = 'container__about_inside container__inside_left';
        this.containerAboutRight.className = 'container__about_inside container__inside_right';
        this.wrapperTopTitle.className = 'wrapper__top_title';

        this.wrapperTopTitle.innerHTML = `
            <h1>Библиотека</h1>
        `;

        this.containerAbout.innerHTML = `
            <div class="container__about_text">
                <p>${this.libraryLeftText}</p>
            </div>
        `;

        // this.containerAboutRight.innerHTML = `
        //     <div class="container__about_text container__about_text--right">
        //         <p>${this.libraryRightText}</p>
        //     </div>
        // `;

        this.wrapperTop.appendChild(this.wrapperTopTitle);
        this.container.appendChild(this.containerAbout);
        // this.containerAbout.appendChild(this.containerAboutLeft);
        // this.containerAbout.appendChild(this.containerAboutRight);
    }

    initAboutBack() {
        this.buttonBackClick = document.getElementById('buttonBack');

        this.buttonBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(this.buttonBackClick);
                    this.container.removeChild(this.containerAbout);
                    this.wrapperTop.removeChild(this.wrapperTopTitle);
                    // this.container.style.width = '45rem';
                    // if (document.body.clientWidth < 570 || screen.width < 570) {
                    //     this.container.style.width = '';
                    //     this.container.style.padding = '';
                    // }
                    new Intro();
                }
            });
            tl
                .to(this.wrapperTopTitle, {
                    autoAlpha: 0,
                    delay: '-0.1',
                    y: '-10%'
                })
                .to([
                    this.containerAbout,
                    this.buttonBackClick
                ], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
                .to(this.wrapperBackAbout, {
                    autoAlpha: 1,
                    duration: '0.6',
                    delay: '-0.3'
                })
            ;
        });
    }

    initAboutAnim() {
        let tl = new gsap.timeline();

        tl
            .from(this.containerAbout, {
                autoAlpha: 0,
                duration: 0.4,
                scale: 0.97
            })
            .from(this.wrapperTopTitle, {
                duration: '0.3',
                delay: '-0.1',
                autoAlpha: 0,
                y: '-10%'
            })
            .from(this.buttonBackClick, {
                duration: '0.3',
                delay: '-0.1',
                autoAlpha: 0,
                y: '10%'
            })
        ;
    }

    initDev() {
        const introBack = document.querySelector('.wrapper__back--intro');
        introBack.style.opacity = '0';
        introBack.style.visibility = 'none';
    }
}