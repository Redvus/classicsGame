import { gsap } from "gsap";

export class ChoiceCategory {

    constructor(
        choiceCategoryName,
        choiceCategoryCount ,
        choiceCategoryBack,
        choiceCategorySubID
        ) {
        this.choiceCategoryCount = choiceCategoryCount;
        this.choiceCategoryName = choiceCategoryName;
        this.choiceCategoryBack = choiceCategoryBack;
        this.choiceCategorySubID = choiceCategorySubID;
        this.choiceCategoryTitle = this.choiceCategoryTitle;
        this.initLayout();
        this.choiceCategory();
        this.initAppend();
        // this.choiceCategoryAnimation();
    }

    initLayout() {
        this.wrapper = document.querySelector('.wrapper');
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperIntro = document.querySelector('.wrapper__back_intro');
        this.container = document.querySelector('.container');
        // this.backgroundMusicID = document.getElementById('backgroundMusicID');

        this.wrapperTopTitle = document.createElement('div');

        // this.wrapperTop.className += ' wrapper__top_intro';
        this.wrapperTopTitle.className = 'wrapper__top_title wrapper__top_title--intro';

        this.wrapperTopTitle.innerHTML = `
            <h2>${this.choiceCategoryName}</h2>
        `;
    }

    choiceCategory() {
        this.containerWrapper = document.createElement('div');
        this.choiceCategoryTitle = document.createElement('div');
        this.containerWrapperSubCat = document.createElement('ul');
        this.wrapperCategoryBack = document.createElement('div');

        // container.className = 'container container--wide';
        this.containerWrapper.className = 'container__wrapper';
        this.containerWrapperSubCat.className = 'container__wrapper_subcategory';
        this.choiceCategoryTitle.className = 'container__title';
        this.wrapperCategoryBack.className = `wrapper__${this.choiceCategoryBack}`;

        for (let i = 0; i < this.choiceCategoryCount; i++) {
            this.subCatElem = document.createElement('li');
            this.subCatElem.id = `cat${this.choiceCategorySubID}_${i + 1}`;
            this.subCatElem.innerHTML = `
                <a href="javascript:void(0);" class="category__element category__element_${i + 1} category__element--hidden" id="categorySub${this.choiceCategorySubID}_${i + 1}">
                    <ul class="category__element_stars" id="categoryElementStars_${i + 1}"></ul>
                    <picture class="category__element_image">
                        <img src="assets/games/classics/images/book.png" alt="Категория ${this.choiceCategoryName}. Вопрос ${i + 1}">
                    </picture>
                    <h3 class="category__element_title">${i + 1}</h3>
                </a>
            `;
            this.containerWrapperSubCat.appendChild(this.subCatElem);
        }
    }

    initAppend() {
        this.wrapperTop.appendChild(this.wrapperTopTitle);
        this.container.appendChild(this.containerWrapper);
        this.containerWrapper.appendChild(this.containerWrapperSubCat);
    }

    // choiceCategoryAnimation() {
    //     let tl = gsap.timeline();

    //     categorySub_1 = document.querySelector('.category__element_1'),
    //     categorySub_2 = document.querySelector('.category__element_2'),
    //     categorySub_3 = document.querySelector('.category__element_3'),
    //     categorySub_4 = document.querySelector('.category__element_4'),
    //     categorySub_5 = document.querySelector('.category__element_5'),
    //     categorySub_6 = document.querySelector('.category__element_6'),
    //     categorySub_7 = document.querySelector('.category__element_7'),
    //     categorySub_8 = document.querySelector('.category__element_8'),
    //     categorySub_9 = document.querySelector('.category__element_9'),
    //     categorySub_10 = document.querySelector('.category__element_10'),
    //     this.containerWrapper = document.querySelector('.container__wrapper'),
    //     categorySubAll = [categorySub_1, categorySub_2, categorySub_3, categorySub_4, categorySub_5, categorySub_6, categorySub_7, categorySub_8, categorySub_9, categorySub_10];

    //     tl
    //         .from(this.containerWrapper, {
    //             autoAlpha: 0,
    //             duration: "0.6",
    //         })
    //         // .from(this.wrapperCategoryBack, {
    //         //     autoAlpha: 0,
    //         //     duration: 0.4,
    //         //     delay: '-0.2'
    //         //     // scale: '0.98'
    //         // })
    //     .to(this.wrapperTopTitle, {
    //             autoAlpha: 1,
    //             duration: 0.4,
    //             delay: '-0.2'
    //         })
    //         .from(categorySubAll, {
    //             autoAlpha: 0,
    //             duration: "0.3",
    //             delay: "-0.6",
    //             stagger: 0.1
    //         })
    //     ;
    // }
}