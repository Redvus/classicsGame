import { gsap } from "gsap";
import { ButtonBack } from "./Buttons/ButtonBack.js";
import { Category } from "./Category.js";
import { QuestionBase } from "./QuestionBase.js";
import { QuestCat_1 } from "./questStudent/QuestCat_1.js";

export class ChoiceCategory {

    constructor(
        choiceCategoryName,
        // choiceCategoryBack,
        choiceCategorySubID,
        choiceCategoryCount
        ) {
        this.choiceCategoryCount = choiceCategoryCount || 15;
        this.choiceCategoryName = choiceCategoryName;
        // this.choiceCategoryBack = choiceCategoryBack;
        this.choiceCategorySubID = choiceCategorySubID;
        this.choiceCategoryTitle = this.choiceCategoryTitle;

        new ButtonBack();
        this.initLayout();
        this.initChoiceCategory();
        this.initAppend();
        this.initChoiceCategoryBack();
        this.initChoiceQuest();
        // this.choiceCategoryAnim();
    }

    initLayout() {
        this.wrapper = document.querySelector('.wrapper');
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperIntro = document.querySelector('.wrapper__back_intro');
        this.container = document.querySelector('.container');
        // this.backgroundMusicID = document.getElementById('backgroundMusicID');

        this.wrapperBackIntro = document.getElementById('backIntro');
        this.wrapperBackAbout = document.getElementById('backAbout');
        this.wrapperBackAuthors = document.getElementById('backAuthors');
        this.wrapperBackCategory = document.getElementById('backCategory');

        this.wrapperTopTitle = document.createElement('div');

        // this.wrapperTop.className += ' wrapper__top_intro';
        this.wrapperTopTitle.className = 'wrapper__top_title wrapper__top_title--intro';

        this.wrapperTopTitle.innerHTML = `
            <h2>${this.choiceCategoryName}</h2>
        `;

        this.buttonBackClick = document.getElementById('buttonBack');
    }

    initChoiceCategory() {
        this.containerWrapper = document.createElement('div');
        this.choiceCategoryTitle = document.createElement('div');
        this.containerWrapperSubCat = document.createElement('ul');
        // this.wrapperCategoryBack = document.createElement('div');

        // container.className = 'container container--wide';
        this.containerWrapper.className = 'container__category';
        this.containerWrapperSubCat.className = 'container__category_subcategory';
        this.choiceCategoryTitle.className = 'container__title';
        // this.wrapperCategoryBack.className = `wrapper__${this.choiceCategoryBack}`;
        this.container.className += ' container--category';

        this.subCatElems = [];

        for (let i = 0; i < this.choiceCategoryCount; i++) {
            const li = document.createElement('li');
            li.className = 'container__category_element';
            li.id = `cat${this.choiceCategorySubID}Sub_${i + 1}`;
            li.innerHTML = `
                <a href="javascript:void(0);" class="category__element category__element_${i + 1} category__element--hidden" id="categorySub${this.choiceCategorySubID}_${i + 1}">
                    <ul class="category__element_stars" id="categoryElementStars_${i + 1}"></ul>
                    <!--<picture class="category__element_image">
                        <img src="assets/games/classics/images/book.png" alt="Категория ${this.choiceCategoryName}. Вопрос ${i + 1}">
                    </picture>-->
                    <h3 class="container__category_element_title"><span>${i + 1}</span></h3>
                </a>
            `;

            this.containerWrapperSubCat.appendChild(li);
            this.subCatElems.push(li);

            // Category Stars
            this.containerCatStars = document.createElement('ul');
            this.containerCatStars.className = 'container__category_stars';
            li.appendChild(this.containerCatStars);
            this.questStars = [];

            for (let j = 0; j < 3; j++) {
                const li = document.createElement('li');
                li.className = 'container__category_star';
                li.id = `cat${this.choiceCategorySubID}Sub_${i + 1}_${j + 1}`;
                li.innerHTML = `
                    <svg version="1.1" id="Layer_2_00000034071295812620418580000010800723389410754238_"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                        style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <polygon class="st0" points="256,12.5 335.1,172.8 512,198.5 384,323.3 414.2,499.5 256,416.3 97.8,499.5 128,323.3 0,198.5
                        176.9,172.8 "/>
                    </svg>
                `;

                this.containerCatStars.appendChild(li);
                this.questStars.push[j];
            }
        }
    }

    initAppend() {
        this.wrapperTop.appendChild(this.wrapperTopTitle);
        this.container.appendChild(this.containerWrapper);
        this.containerWrapper.appendChild(this.containerWrapperSubCat);
    }

    choiceCategoryAnim() {
        gsap.from(this.wrapperTopTitle, {
            duration: '0.3',
            // delay: '-0.1',
            autoAlpha: 0,
            y: '-10%'
        });

        let tl = gsap.timeline();

        for (let i = 0; i < this.choiceCategoryCount; i++) {
            this.subCatElems[i].id = `cat${this.choiceCategorySubID}_${i + 1}`;
            // console.log(this.subCatElems[i].id);

            tl
                .from(this.subCatElems[i], {
                    autoAlpha: 0,
                    duration: 0.2,
                    delay: -0.1,
                    stagger: 0.01
                })
            ;
        }
    }

    initChoiceCategoryBack() {
        this.buttonBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.container.removeChild(this.containerWrapper);
                    this.wrapperTop.removeChild(this.wrapperTopTitle);
                    this.wrapperBottom.removeChild(this.buttonBackClick);

                    // this.container.style.width = '45rem';
                    // if (document.body.clientWidth < 570 || screen.width < 570) {
                    //     this.container.style.width = '';
                    //     this.container.style.padding = '';
                    // }
                    new Category(
                        45,
                        'Ученик',
                        'Student',
                        'Знаток',
                        'Connoisseur',
                        'Хранитель',
                        'Keeper');
                    gsap.to(this.wrapperBackCategory, {
                        autoAlpha: 1,
                        duration: '0.3',
                        // delay: '0.1'
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
                    this.containerWrapper,
                    this.buttonBackClick
                ], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
            ;
        });
    }

    initChoiceQuest() {
        this.categoryCat = document.querySelector('.container__category');
        this.categoryCatSub = document.querySelector('.container__category_subcategory');

        for (let i = 0; i < this.choiceCategoryCount; i++) {
            this.categoryElem = document.getElementById(`categorySub${this.choiceCategorySubID}_${i + 1}`);

            this.categoryElem.addEventListener('click', () => {
                this.wrapperBottom.removeChild(this.buttonBackClick);
                let tl = gsap.timeline({
                    onComplete: () => {
                        this.cleanupDOM();
                        new QuestionBase(`${this.choiceCategoryName}`, `${this.choiceCategorySubID}`);
                        this.handleQuestCreation(i);
                    }
                });

                tl
                    .to(this.wrapperTopTitle, {
                        autoAlpha: 0,
                        delay: '-0.1',
                        y: '-10%'
                    })
                    .to([
                        this.containerWrapper,
                        this.buttonBackClick
                    ], {
                        autoAlpha: 0,
                        delay: '-0.1'
                    })
                ;
            });
        }
    }

    cleanupDOM() {
        this.wrapperTop.removeChild(this.wrapperTopTitle);
        this.categoryCat.removeChild(this.categoryCatSub);
        this.container.removeChild(this.categoryCat);
        this.container.classList.remove('container--category');
    }

    handleQuestCreation(selectedIndex) {
        // Используем switch вместо множества if-else
        switch(selectedIndex + 1) {
            case 1:
                new QuestCat_1(this.choiceCategoryName);
                break;
            case 2:
                // new QuestCat_2();
                break;
            case 3:
                // new QuestCat_3();
                break;
            // ... остальные cases
            default:
                // console.log('Unknown category index:', selectedIndex + 1);
        }

        // console.log('Selected:', selectedIndex + 1);
    }
}