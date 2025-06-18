import { gsap } from "gsap";
import { ArrowsAll } from "./ArrowsAll.js";
import { Intro } from "./Intro.js";

export class About {

    constructor(
        libraryLeftText,
        libraryRightText
    ) {
        this.libraryLeftText = libraryLeftText;
        this.libraryRightText = libraryRightText;
        this.arrowBackLoad = new ArrowsAll();
        this.initLayout();
        this.initAboutAnim();
        this.initAboutBack();

        // this.initDev();
    }

    initLayout() {
        this.container = document.querySelector('.container');
        this.wrapperTopTitle = document.createElement('div');
        this.containerAbout = document.createElement('div');
        this.containerAboutLeft = document.createElement('div');
        this.containerAboutRight = document.createElement('div');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperIntro = document.querySelector('.wrapper__back_intro');

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

        this.containerAboutLeft.innerHTML = `
            <div class="container__about_text container__about_text--left">
                <p>${this.libraryLeftText}</p>
            </div>
        `;

        this.containerAboutRight.innerHTML = `
            <div class="container__about_text container__about_text--right">
                <p>${this.libraryRightText}</p>
            </div>
        `;

        this.wrapperTop.appendChild(this.wrapperTopTitle);
        this.container.appendChild(this.containerAbout);
        this.containerAbout.appendChild(this.containerAboutLeft);
        this.containerAbout.appendChild(this.containerAboutRight);

        this.arrowBackLoad.arrowBack();
        this.arrowBackClick = document.getElementById('arrowBack');
        this.wrapperBottom.appendChild(this.arrowBackClick);
    }

    initAboutBack() {
        this.arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(this.arrowBackClick);
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
                    this.arrowBackClick
                ], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
                .to(this.wrapperIntro, {
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
            .from(this.arrowBackClick, {
                duration: '0.3',
                delay: '-0.1',
                autoAlpha: 0,
                y: '10%'
            })
        ;
    }

    initDev() {
        const introBack = document.querySelector('.wrapper__back_intro');
        introBack.style.opacity = '0';
        introBack.style.visibility = 'none';
    }
}