import { gsap } from "gsap";
import { ButtonBack } from "./Buttons/ButtonBack.js";
import { Intro } from "./Intro.js";
import { ChoiceCategory } from "./ChoiceCategory.js";

export class Category {

    constructor(
        categoryStarsCount,
        category_1,
        category_1ID,
        category_2,
        category_2ID,
        category_3,
        category_3ID) {

        this.categoryStarsCount = categoryStarsCount;
        this.category_1 = category_1;
        this.category_2 = category_2;
        this.category_3 = category_3;
        this.category_1ID = category_1ID;
        this.category_2ID = category_2ID;
        this.category_3ID = category_3ID;

        this.initLayout();
        new ButtonBack();
        this.initAppend();
        this.initCategoryBack();
        this.initCategoryAnim();
        this.initCategoryChoice();

        // this.categoryProgress(`progress${this.category_1ID}Value`, `progress${this.category_1ID}`);
        // this.categoryProgress(`progress${this.category_2ID}Value`, `progress${this.category_2ID}`);
        // this.categoryProgress(`progress${this.category_3ID}Value`, `progress${this.category_3ID}`);
    }

    initLayout() {
        this.wrapper = document.querySelector('.wrapper');
        this.container = document.querySelector('.container');
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperBackCategory = document.getElementById('backCategory');
        this.wrapperBackAbout = document.getElementById('backAbout');
        this.wrapperBackAuthors = document.getElementById('backAuthors');

        this.wrapperBackIntro = document.getElementById('backIntro');
        this.wrapperBackAbout = document.getElementById('backAbout');
        this.wrapperBackAuthors = document.getElementById('backAuthors');
        this.wrapperBackCategory = document.getElementById('backCategory');

        this.categoryBlock = document.createElement('div');
        this.wrapperTopTitle = document.createElement('div');

        this.introBlockBack = document.createElement('div');
        this.introBlockBack.className = 'wrapper__service';

        this.categoryBlock.className = 'container__category';
        this.categoryBlock.id = 'containerCategory';
        this.wrapperTopTitle.className = 'wrapper__top';

        this.wrapperTopTitle.innerHTML = `
            <h2 id="categoryChoiceTitle" class="wrapper__top_title">Выберите уровень</h2>
        `;

        for (let i = 0; i < 3; i++) {
            this.categoryBlockIns = document.createElement('div');
            this.categoryBlockIns.className = 'container__category_category';
            this.categoryBlockIns.id = `category${this[`category_${i + 1}ID`]}`;
            this.categoryBlockIns.innerHTML = `
                <div class="container__category_inside">
                    <div class="container__category_title">
                        <h3>${this[`category_${i + 1}`]}</h3>
                    </div>
                    <div class="container__category_stars">
                        <?xml version="1.0" encoding="utf-8"?>
                        <!-- Generator: Adobe Illustrator 28.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                        <svg version="1.1" id="Layer_2_00000034071295812620418580000010800723389410754238_"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                            style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <polygon class="st0" points="256,12.5 335.1,172.8 512,198.5 384,323.3 414.2,499.5 256,416.3 97.8,499.5 128,323.3 0,198.5
                            176.9,172.8 "/>
                        </svg>
                        <div class="container__category_value">
                            <span id="progress${i + 1}Value">0</span>&nbsp;/&nbsp;${this.categoryStarsCount}
                        </div>
                    </div>
                </div>
            `;
            this.categoryBlock.appendChild(this.categoryBlockIns);
        }

        this.container.className += ' container--category';

        // this.categoryBlock.innerHTML = `
        //     <div class="container__category_category" id="category${this.category_1ID}">
        //         <div class="category__main">
        //             <div class="category__main_title">
        //                 <h3>${this.category_1}</h3>
        //             </div>
        //             <div class="category__main_stars">
        //                 <picture>
        //                     <img src="assets/games/classics/images/cp_stars_fill.png" alt="Количество набранных очков">
        //                 </picture>
        //                 <div class="category__main_value">
        //                     <span id="progress${this.category_1ID}Value"></span>&nbsp;/&nbsp;${this.categoryStarsCount}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div class="container__category_category" id="category${this.category_2ID}">
        //         <div class="category__main">
        //             <div class="category__main_title">
        //                 <h3>${this.category_2}</h3>
        //             </div>
        //             <div class="category__main_stars">
        //                 <picture>
        //                     <img src="assets/games/classics/images/cp_stars_fill.png" alt="Количество набранных очков">
        //                 </picture>
        //                 <div class="category__main_value">
        //                     <span id="progress${this.category_2ID}Value"></span>&nbsp;/&nbsp;${this.categoryStarsCount}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div class="container__category_category" id="category${this.category_3ID}">
        //         <div class="category__main">
        //             <div class="category__main_title">
        //                 <h3>${this.category_3}</h3>
        //             </div>
        //             <div class="category__main_stars">
        //                 <picture>
        //                     <img src="assets/games/classics/images/cp_stars_fill.png" alt="Количество набранных очков">
        //                 </picture>
        //                 <div class="category__main_value">
        //                     <span id="progress${this.category_3ID}Value"></span>&nbsp;/&nbsp;${this.categoryStarsCount}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // `;
    }

    initAppend() {
        this.container.appendChild(this.categoryBlock);
        this.wrapper.appendChild(this.introBlockBack);
        this.wrapperTop.appendChild(this.wrapperTopTitle);
    }

    initCategoryAnim() {
        this.categoryStudent = document.getElementById('categoryStudent')
        this.categoryConnoisseur = document.getElementById('categoryConnoisseur');
        this.categoryKeeper = document.getElementById('categoryKeeper');
        this.wrapperService = document.querySelector('.wrapper__service');

        let tl = gsap.timeline();
        tl
            // .from(this.wrapperService, {
            //     autoAlpha: 0,
            //     duration: 0.6
            // })
            .from(this.wrapperTopTitle, {
                duration: '0.3',
                // delay: '-0.1',
                autoAlpha: 0,
                y: '-10%'
            })
            .from([
                this.categoryStudent,
                this.categoryConnoisseur,
                this.categoryKeeper], {
                autoAlpha: 0,
                duration: 0.6,
                delay: '-0.1',
                x: "1rem",
                stagger: 0.2
            })
        ;
    }

    initCategoryChoice() {

        for (let i = 0; i < 3; i++) {
            this.categoryElem = document.getElementById(`category${this[`category_${i + 1}ID`]}`);

            this.categoryElem.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        this.container.removeChild(this.categoryBlock);
                        this.container.classList.remove('container--category');
                        this.wrapperTop.removeChild(this.wrapperTopTitle);
                        new ChoiceCategory(
                            `${this[`category_${i + 1}`]}`,
                            15,
                            '',
                            `${this[`category_${i + 1}ID`]}`);
                    }
                });

                tl
                    .to(this.wrapperTopTitle, {
                        duration: '0.3',
                        autoAlpha: 0,
                        y: '-10%'
                    })
                    .to(this.categoryBlock, {
                        autoAlpha: 0,
                        duration: 0.3,
                        delay: '-0.1'
                    })
                    .to(this.wrapperBackCategory, {
                        duration: '0.5',
                        autoAlpha: 0
                    })
                ;
            });
        }
    }

    categoryProgress(progressID, progressNameValue) {
        let progressValue = document.getElementById(progressID),
            progressBasic = 0
        ;

        if (localStorage.getItem(progressNameValue) === null) {
            localStorage.setItem(progressNameValue, JSON.stringify(progressBasic));
            progressValue.textContent = JSON.parse(localStorage.getItem(progressNameValue));
        } else {
            progressValue.textContent = JSON.parse(localStorage.getItem(progressNameValue));
        }
    }

    initCategoryBack() {
        this.buttonBackClick = document.getElementById('buttonBack');
        // this.containerCategory = document.querySelector('.container__category');

        this.buttonBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.container.removeChild(this.categoryBlock);
                    this.wrapperTop.removeChild(this.wrapperTopTitle);
                    this.wrapperBottom.removeChild(this.buttonBackClick);

                    // this.container.style.width = '45rem';
                    // if (document.body.clientWidth < 570 || screen.width < 570) {
                    //     this.container.style.width = '';
                    //     this.container.style.padding = '';
                    // }
                    new Intro();
                    gsap.to([this.wrapperBackCategory, this.wrapperBackAbout, this.wrapperBackAuthors], {
                        autoAlpha: 1,
                        duration: '0.3',
                        delay: '0.5'
                    });
                }
            });
            tl
                .to(this.wrapperTopTitle, {
                    autoAlpha: 0,
                    delay: '-0.1',
                    y: '-10%'
                })
                .to([
                    this.categoryBlock,
                    this.buttonBackClick
                ], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
            ;
        });
    }
}