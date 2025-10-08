// Задний фон - книга

import { gsap } from "gsap";
import { ButtonBack } from "./Buttons/ButtonBack.js";
import { ChoiceCategory } from "./ChoiceCategory.js";

export class QuestionBase {

    constructor(
        questCatName,
        questCatID
    ) {
        this.questCatName = questCatName;
        this.questCatID = questCatID;

        new ButtonBack();
        this.initLayout();

        this.initQuestionStars();
        this.initAppend();
        this.initQuestionBack();
        this.initQuestAnim();

        this.initQuestionBlock();
    }

    initLayout() {
        this.wrapper = document.querySelector('.wrapper');
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperIntro = document.querySelector('.wrapper__back_intro');
        this.container = document.querySelector('.container');

        this.containerWrapper = document.createElement('div');
        this.containerWrapper.className = 'container__category container__question';

        this.wrapperTopTitle = document.createElement('div');

        // this.wrapperTop.className += ' wrapper__top_intro';
        this.wrapperTopTitle.className = 'wrapper__top_title wrapper__top_title--intro';

        this.wrapperTopTitle.innerHTML = `
            <h2>${this.questCatName}</h2>
        `;

        // Sounds
        // this.backgroundMusicID = document.getElementById('backgroundMusicID');

        this.buttonBackClick = document.getElementById('buttonBack');

        this.bookEmpty = document.createElement('picture');
        this.bookEmpty.className = 'wrapper__back--book';
        this.bookEmpty.innerHTML = `
            <img src="assets/games/classics/images/bookPagesEmpty.png" alt="Пустая книга">
        `;

        // Блоки для воросов и ответов
        this.wrapper.className += ' wrapper__game';

        this.questionBlockLeft = document.createElement('div');
        this.questionBlockLeft.className = 'container__question_block container__question_block_left';
        this.questionBlockRight = document.createElement('div');
        this.questionBlockRight.className = 'container__question_block container__question_block_right';

        // Block Left
        this.questionBlockLeftStars = document.createElement('ul');
        this.questionBlockLeftStars.className = 'container__question_stars';
        this.questionBlockLeftImage = document.createElement('div');
        this.questionBlockLeftImage.className = 'container__question_image';

        // Block Right
        this.questionBlockRightQuest = document.createElement('div');
        this.questionBlockRightQuest.className = 'container__question_quest';
        this.questionBlockRightText = document.createElement('div');
        this.questionBlockRightText.className = 'container__question_text';

        this.questionBlockRightQuest.innerHTML = `
            <h3></h3>
        `;

        this.questionBlockRightText.innerHTML = `
            <ul class="container__question_list">
                <li id="answerVar_1"><a href="javascript:void(0);"></a></li>
                <li id="answerVar_2"><a href="javascript:void(0);"></a></li>
                <li id="answerVar_3"><a href="javascript:void(0);"></a></li>
            </ul>
        `;
    }

    initQuestionBlock() {
        // Development

        // this.questionBlockRight.innerHTML = `
        //     <div class="container__question_block container__question_block_imageblock">
        //         <div class="container__question_imageblock">

        //     <div class="container__question_block container__question_block_text">
        //         <div class="container__question_top">
        //             <p>${this.questionQuest}</p>
        //         </div>
        //         <ul class="container__question_bottom">
        //             <li id="answerVar_1"><a href="javascript:void(0);">${this.questionVariant1}</a></li>
        //             <li id="answerVar_2"><a href="javascript:void(0);">${this.questionVariant2}</a></li>
        //             <li id="answerVar_3"><a href="javascript:void(0);">${this.questionVariant3}</a></li>
        //         </ul>
        //     </div>
        // `;

        // const questButtonLi_1 = document.getElementById('answerVar_1'),
        //     questButtonLi_2 = document.getElementById('answerVar_2'),
        //     questButtonLi_3 = document.getElementById('answerVar_3'),
        //     questButtonList = [questButtonLi_1, questButtonLi_2, questButtonLi_3],
        //     questButtonLiPosition = ['0', '33%', '66%'],
        //     questButtonLi = document.querySelectorAll('.question__block_list li'),
        //     positionLiTop = questButtonLiPosition.sort(() => Math.floor(Math.random() * questButtonLiPosition.length)),
        //     questBlockImage = document.querySelector('.question__block_imageblock')
        // ;

        // questButtonList.forEach((el, idx) => {
        //     el.style.top = positionLiTop[idx];
        // });
    }

    initQuestionStars() {
        this.questionCategoryStars = document.createElement('ul');
        this.questionCategoryStars.className = 'wrapper__stars';

        this.questionStar = document.createElement('li');
        this.questStars = [];

        for (let j = 0; j < 3; j++) {
            const li = document.createElement('li');
            li.className = 'container__category_star';
            // li.id = `cat${this.choiceCategorySubID}Sub_${i + 1}_${j + 1}`;
            li.innerHTML = `
                <svg version="1.1" id="Layer_2_00000034071295812620418580000010800723389410754238_"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <polygon class="st0" points="256,12.5 335.1,172.8 512,198.5 384,323.3 414.2,499.5 256,416.3 97.8,499.5 128,323.3 0,198.5
                    176.9,172.8 "/>
                </svg>
            `;

            this.questionBlockLeftStars.appendChild(li);
            this.questStars.push[j];
        }
    }

    initAppend() {
        this.wrapperTop.appendChild(this.wrapperTopTitle);
        this.container.appendChild(this.containerWrapper);
        this.wrapperBack.appendChild(this.bookEmpty);

        // Append Left
        this.containerWrapper.appendChild(this.questionBlockLeft);
        this.questionBlockLeft.appendChild(this.questionBlockLeftStars);
        this.questionBlockLeft.appendChild(this.questionBlockLeftImage);

        // Append Right
        this.containerWrapper.appendChild(this.questionBlockRight);
        this.questionBlockRight.appendChild(this.questionBlockRightQuest);
        this.questionBlockRight.appendChild(this.questionBlockRightText);
    }

    initQuestAnim() {
        let tl = gsap.timeline({});
        tl
            .from(this.wrapperTopTitle, {
                autoAlpha: 0,
                // delay: '-0.1',
                y: '-10%'
            })
            .from([
                this.bookEmpty,
                this.containerWrapper,
                // this.buttonBackClick
            ], {
                autoAlpha: 0,
                // delay: '-0.1',
                stagger: 0.3
            })
        ;
    }

    initQuestionBack() {
        this.buttonBackClick.addEventListener('click', () => {
            this.wrapperBottom.removeChild(this.buttonBackClick);
            let tl = gsap.timeline({
                onComplete: () => {
                    this.container.removeChild(this.containerWrapper);
                    this.wrapperBack.removeChild(this.bookEmpty);
                    this.wrapperTop.removeChild(this.wrapperTopTitle);
                    // if (this.questCatName === this.questCatName) {
                        new ChoiceCategory(
                        `${this.questCatName}`,
                        '',
                        '',
                        `${this.questCatID}`);
                    // }

                    // gsap.to(this.wrapperBackCategory, {
                    //     autoAlpha: 1,
                    //     duration: '0.3',
                    //     // delay: '0.1'
                    // });
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
                    this.bookEmpty,
                    // this.buttonBackClick
                ], {
                    autoAlpha: 0,
                    delay: '-0.1',
                    stagger: 0.03
                })
            ;
        });
    }
}