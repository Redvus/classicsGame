import { gsap } from "gsap";
import { Question } from '../Question.js';
import { ChoiceCategory } from "../ChoiceCategory.js";

export class QuestCat_1 {

    constructor(
        questCatName,
        questCatID
    ) {
        this.questCatName = questCatName;
        this.questCatID = questCatID;

        this.initLayout();

        if (this.questCatName === 'Ученик') {
            this.questStudentCat_1_1();
        } else if (this.questCatName === 'Знаток') {
            this.questConnoisseurCat_1_1();
        } else if (this.questCatName === 'Хранитель') {
            this.questKeeperCat_1_1();
        }
    }

    initLayout() {
        this.wrapper = document.querySelector('.wrapper');
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperIntro = document.querySelector('.wrapper__back_intro');
        this.container = document.querySelector('.container');
        this.containerWrapper = document.querySelector('.container__category');
        this.bookEmpty = document.querySelector('.wrapper__back--book');
        this.wrapperTopTitle = document.querySelector('.wrapper__top_title');
        this.buttonBackClick = document.getElementById('buttonBack');
    }

    // Ученик. Quest 1
    questStudentCat_1_1() {
        new Question(
            'Какой город является столицей Франции?',
            'Париж',
            'Лондон',
            'Берлин',
            0,
            '',
            this.questStudentCat_1_2.bind(this)
        );
    }

    questStudentCat_1_2() {
        new Question(
            'Какой город Фран?',
            'Пиж',
            'Лодон',
            'Блин',
            0,
            '',
            this.questStudentCat_1_3.bind(this)
        );
    }

    questStudentCat_1_3() {
        new Question(
            'город Ф?',
            'Пи',
            'одон',
            'ин',
            0,
            '',
            this.initQuestBack.bind(this)
        );
    }

    // Знаток. Quest 1
    questConnoisseurCat_1_1() {
        new Question(
            'Какой город я?',
            'иж',
            'дон',
            'рлин',
            1,
            'asdasdasdas asdasdasdas asdasdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd'
        );
    }

    // Хранитель. Quest 1
    questKeeperCat_1_1() {
        new Question(
            'Какой город является столицей?',
            'Пар',
            'Лонд',
            'Берл',
            2,
            ''
        );
        // this.questStudentCat_1_3();
    }

    initQuestBack() {
        let tl = gsap.timeline({
            onComplete: () => {
                this.wrapperBottom.removeChild(this.buttonBackClick);
                if (this.containerWrapper && this.container.contains(this.containerWrapper)) {
                    this.container.removeChild(this.containerWrapper);
                }
                if (this.bookEmpty && this.wrapperBack.contains(this.bookEmpty)) {
                    this.wrapperBack.removeChild(this.bookEmpty);
                }
                if (this.wrapperTopTitle && this.wrapperTop.contains(this.wrapperTopTitle)) {
                    this.wrapperTop.removeChild(this.wrapperTopTitle);
                }
                if (this.questCatName === 'Ученик') {
                    new ChoiceCategory(
                    'Ученик',
                    '',
                    '',
                    'Ученик');
                }

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
                this.bookEmpty
            ], {
                autoAlpha: 0,
                delay: '-0.1',
                stagger: 0.03
            })
        ;
    }
}



if (localStorage.getItem('progressChicheroneQuest_1') === null) {
    localStorage.setItem('progressChicheroneQuest_1', JSON.stringify(0));
}

// Chicherone. Quest 1
function questionChicheroneCat_1_1() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChicheroneQuest_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_1')),
        progressChicheroneQuest_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
        progressChicheroneQuest_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3')),
        progressChicheroneQuest_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_4')),
        progressChicheroneQuest_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_1_1') === null) {
        localStorage.setItem('progressChicheroneQuest_1_1', JSON.stringify(progressChicheroneQuest_1_1));
    }

    questChicheroneCatLoad.questionBlock(
        'Чичероне',
        'Самарская лука',
        'Самарская область граничит с этими регионами России',
        'Ульяновская, Оренбургской, Татарстан, Мордовия',
        'Саратовская, Ульяновская, Челябинская, республика Татарстан',
        'Саратовская, Ульяновская, Оренбургская, республика Татарстан');

    let answerVar_1_1_1 = document.getElementById('answerVar_1'),
        answerVar_1_1_2 = document.getElementById('answerVar_2'),
        answerVar_1_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_1 = [answerVar_1_1_1, answerVar_1_1_2, answerVar_1_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_1_1"></li>
        <li id="questionStar_1_2"></li>
        <li id="questionStar_1_3"></li>
        <li id="questionStar_1_4"></li>
        <li id="questionStar_1_5"></li>
    `;

    const questionStar_1_1 = document.getElementById('questionStar_1_1'),
        questionStar_1_2 = document.getElementById('questionStar_1_2'),
        questionStar_1_3 = document.getElementById('questionStar_1_3'),
        questionStar_1_4 = document.getElementById('questionStar_1_4'),
        questionStar_1_5 = document.getElementById('questionStar_1_5')
    ;

    function starsView_1() {
        if (progressChicheroneQuest_1_2 === 1) {
            questionStar_1_2.className += 'fill';
        }
        if (progressChicheroneQuest_1_3 === 1) {
            questionStar_1_3.className += 'fill';
        }
        if (progressChicheroneQuest_1_4 === 1) {
            questionStar_1_4.className += 'fill';
        }
        if (progressChicheroneQuest_1_5 === 1) {
            questionStar_1_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_1_1.length; i++) {
        if (answerVarRight_1_1[i] === answerVarRight_1_1[answerWrightNum]) {
            answerVarRight_1_1[i].addEventListener('click', () => {
                let progressChicheroneQuest_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1'));
                let progressChicheroneQuestSum_1_1 = progressChicheroneQuest_1_1 + 1;
                let progressChicheroneQuestSum_1 = progressChicheroneQuestSum_1_1 + progressChicheroneQuest_1;

                localStorage.setItem('progressChicheroneQuest_1_1', JSON.stringify(progressChicheroneQuestSum_1_1));
                localStorage.setItem('progressChicheroneQuest_1', JSON.stringify(progressChicheroneQuestSum_1));
                if (progressChicheroneQuestSum_1_1 === 1) {
                    questionStar_1_1.className += 'fill';
                }
            });
            console.log(answerVarRight_1_1[answerWrightNum]);
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_5'))
    ;

    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                // starsRemove();
                wrapper.removeChild(questionStars);
                wrapper.removeChild(arrowBackClick);
                wrapper.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_2 === 1 &&
                    questValue_1_3 === 1 &&
                    questValue_1_4 === 1 &&
                    questValue_1_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    chicheroneCategoryDev();
                    lockSubQuestChicherone();
                } else if (questValue_1_2 === 0) {
                    questionChicheroneCat_1_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChicheroneCat_1_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_1_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_1_5();
                }
            }
        });
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category'),
        wrapperTopTitle = document.querySelector('.wrapper__top');
    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline( {
            autoAlpha: 0,
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                wrapper.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTopTitle);
                chicheroneCategoryDev();
                lockSubQuestChicherone();
            }
        });
        tl
            .to([containerWrapperCategory, wrapperTopTitle], {
                duration: 0.4,
                autoAlpha: 0
            })
            .to(questionStars, {
                autoAlpha: 0,
                delay: '-0.3',
                onComplete: () => {
                    wrapper.removeChild(questionStars);
                }
            })
        ;
    });
}