import { Question } from '../Question.js';

export class QuestStudentCat_1 {

    constructor() {
        this.questStudentCat_1_1();
    }

    questStudentCat_1_1() {
        new Question(
            'Какой город является столицей Франции?',
            'Париж',
            'Лондон',
            'Берлин'
        );
        this.questStudentCat_1_2();
    }

    questStudentCat_1_2() {
        new Question(
            'Какой город является столицей Франции?',
            'Париж',
            'Лондон',
            'Берлин'
        );
        this.questStudentCat_1_3();
    }

    questStudentCat_1_3() {
        new Question(
            'Какой город является столицей Франции?',
            'Париж',
            'Лондон',
            'Берлин'
        );
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

function questionChicheroneCat_1_2() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_1')),
        progressChicheroneQuest_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
        progressChicheroneQuest_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3')),
        progressChicheroneQuest_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_4')),
        progressChicheroneQuest_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_1_2') === null) {
        localStorage.setItem('progressChicheroneQuest_1_2', JSON.stringify(progressChicheroneQuest_1_2));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самарская лука', 'Девять самых больших рек Самарской области', 'Волга, Уса, Сызрань, Большой Черемшан, Сок, Самара, Чапаевка, Чагра, Большой Иргиз', 'Волга, Сызрань, Большой Черемшан, Сок, Самара, Чапаевка, Чагра, Большой Иргиз, Татьянка', 'Волга, Уса, Большой Черемшан, Кинель, Сок, Самара, Чапаевка, Чагра, Большой Иргиз');

    let answerVar_1_2_1 = document.getElementById('answerVar_1'),
        answerVar_1_2_2 = document.getElementById('answerVar_2'),
        answerVar_1_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_2 = [answerVar_1_2_1, answerVar_1_2_2, answerVar_1_2_3],
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

    function starsView_2() {
        if (progressChicheroneQuest_1_1 === 1) {
            questionStar_1_1.className += 'fill';
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
    starsView_2();

    for (let i = 0; i < answerVarRight_1_2.length; i++) {
        if (answerVarRight_1_2[i] === answerVarRight_1_2[answerWrightNum]) {
            answerVarRight_1_2[i].addEventListener('click', () => {
                let progressChicheroneQuest_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1'));
                let progressChicheroneQuestSum_1_2 = progressChicheroneQuest_1_2 + 1;
                let progressChicheroneQuestSum_1 = progressChicheroneQuestSum_1_2 + progressChicheroneQuest_1;

                localStorage.setItem('progressChicheroneQuest_1_2', JSON.stringify(progressChicheroneQuestSum_1_2));
                localStorage.setItem('progressChicheroneQuest_1', JSON.stringify(progressChicheroneQuestSum_1));
                if (progressChicheroneQuestSum_1_2 === 1) {
                    questionStar_1_2.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_5'))
    ;

    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                wrapper.removeChild(questionStars);
                wrapper.removeChild(arrowBackClick);
                wrapper.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_3 === 1 &&
                    questValue_1_4 === 1 &&
                    questValue_1_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    chicheroneCategoryDev();
                    lockSubQuestChicherone();
                } else if (questValue_1_3 === 0) {
                    questionChicheroneCat_1_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_1_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_1_5();
                }
            }
        });
        // if (progressChicheroneQuest_1_2 === 0 &&
        //     progressChicheroneQuest_1_3 === 1 &&
        //     progressChicheroneQuest_1_4 === 1 &&
        //     progressChicheroneQuest_1_5 === 1) {
        //     gsap.to(questionStars, {
        //         autoAlpha: 0,
        //         delay: '-0.3',
        //         onComplete: () => {
        //             wrapper.removeChild(questionStars);
        //         }
        //     });
        // }
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

function questionChicheroneCat_1_3() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_1')),
        progressChicheroneQuest_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
        progressChicheroneQuest_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3')),
        progressChicheroneQuest_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_4')),
        progressChicheroneQuest_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_1_3') === null) {
        localStorage.setItem('progressChicheroneQuest_1_3', JSON.stringify(progressChicheroneQuest_1_3));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самарская лука','Самая высокая точка Самарской области?', 'Верблюд', 'Стрельная', 'Типтяв');

    let answerVar_1_3_1 = document.getElementById('answerVar_1'),
        answerVar_1_3_2 = document.getElementById('answerVar_2'),
        answerVar_1_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_3 = [answerVar_1_3_1, answerVar_1_3_2, answerVar_1_3_3],
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

    function starsView_3() {
        if (progressChicheroneQuest_1_1 === 1) {
            questionStar_1_1.className += 'fill';
        }
        if (progressChicheroneQuest_1_2 === 1) {
            questionStar_1_2.className += 'fill';
        }
        if (progressChicheroneQuest_1_4 === 1) {
            questionStar_1_4.className += 'fill';
        }
        if (progressChicheroneQuest_1_5 === 1) {
            questionStar_1_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_1_3.length; i++) {
        if (answerVarRight_1_3[i] === answerVarRight_1_3[answerWrightNum]) {
            answerVarRight_1_3[i].addEventListener('click', () => {
                let progressChicheroneQuest_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1'));
                let progressChicheroneQuestSum_1_3 = progressChicheroneQuest_1_3 + 1;
                let progressChicheroneQuestSum_1 = progressChicheroneQuestSum_1_3 + progressChicheroneQuest_1;

                localStorage.setItem('progressChicheroneQuest_1_3', JSON.stringify(progressChicheroneQuestSum_1_3));
                localStorage.setItem('progressChicheroneQuest_1', JSON.stringify(progressChicheroneQuestSum_1));
                if (progressChicheroneQuestSum_1_3 === 1) {
                    questionStar_1_3.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Гора Стрельная имеет высоту 351 м и это вторая по высоте точка Жигулевского заповедника и один из самых популярных туристических маршрутов в Самарской области. Отсюда открывается отличный вид на Волгу и острова, а также другие горные вершины.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_5'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                wrapper.removeChild(questionStars);
                wrapper.removeChild(arrowBackClick);
                wrapper.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_4 === 1 &&
                    questValue_1_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    chicheroneCategoryDev();
                    lockSubQuestChicherone();
                } else if (questValue_1_4 === 0) {
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

function questionChicheroneCat_1_4() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_1')),
        progressChicheroneQuest_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
        progressChicheroneQuest_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3')),
        progressChicheroneQuest_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_4')),
        progressChicheroneQuest_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_1_4') === null) {
        localStorage.setItem('progressChicheroneQuest_1_4', JSON.stringify(progressChicheroneQuest_1_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самарская лука','Гордость Самарской области природной национальный парк «Самарская Лука». Когда он был основан?', '1990 год', '1984 год', '1970 год');

    let answerVar_1_4_1 = document.getElementById('answerVar_1'),
        answerVar_1_4_2 = document.getElementById('answerVar_2'),
        answerVar_1_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_4 = [answerVar_1_4_1, answerVar_1_4_2, answerVar_1_4_3],
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

    function starsView_4() {
        if (progressChicheroneQuest_1_1 === 1) {
            questionStar_1_1.className += 'fill';
        }
        if (progressChicheroneQuest_1_2 === 1) {
            questionStar_1_2.className += 'fill';
        }
        if (progressChicheroneQuest_1_3 === 1) {
            questionStar_1_3.className += 'fill';
        }
        if (progressChicheroneQuest_1_5 === 1) {
            questionStar_1_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_1_4.length; i++) {
        if (answerVarRight_1_4[i] === answerVarRight_1_4[answerWrightNum]) {
            answerVarRight_1_4[i].addEventListener('click', () => {
                let progressChicheroneQuest_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1'));
                let progressChicheroneQuestSum_1_4 = progressChicheroneQuest_1_4 + 1;
                let progressChicheroneQuestSum_1 = progressChicheroneQuestSum_1_4 + progressChicheroneQuest_1;

                localStorage.setItem('progressChicheroneQuest_1_4', JSON.stringify(progressChicheroneQuestSum_1_4));
                localStorage.setItem('progressChicheroneQuest_1', JSON.stringify(progressChicheroneQuestSum_1));
                if (progressChicheroneQuestSum_1_4 === 1) {
                    questionStar_1_4.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_5'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                wrapper.removeChild(questionStars);
                wrapper.removeChild(arrowBackClick);
                wrapper.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    chicheroneCategoryDev();
                    lockSubQuestChicherone();
                } else if (questValue_1_5 === 0) {
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

function questionChicheroneCat_1_5() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_1')),
        progressChicheroneQuest_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
        progressChicheroneQuest_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3')),
        progressChicheroneQuest_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_4')),
        progressChicheroneQuest_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_1_4') === null) {
        localStorage.setItem('progressChicheroneQuest_1_4', JSON.stringify(progressChicheroneQuest_1_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самарская лука','Эта река полностью начинается и кончается в пределах области', 'Уса', 'Черемшан', 'Кинель');

    let answerVar_1_5_1 = document.getElementById('answerVar_1'),
        answerVar_1_5_2 = document.getElementById('answerVar_2'),
        answerVar_1_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_5 = [answerVar_1_5_1, answerVar_1_5_2, answerVar_1_5_3],
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

    function starsView_5() {
        if (progressChicheroneQuest_1_1 === 1) {
            questionStar_1_1.className += 'fill';
        }
        if (progressChicheroneQuest_1_2 === 1) {
            questionStar_1_2.className += 'fill';
        }
        if (progressChicheroneQuest_1_3 === 1) {
            questionStar_1_3.className += 'fill';
        }
        if (progressChicheroneQuest_1_4 === 1) {
            questionStar_1_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_1_5.length; i++) {
        if (answerVarRight_1_5[i] === answerVarRight_1_5[answerWrightNum]) {
            answerVarRight_1_5[i].addEventListener('click', () => {
                let progressChicheroneQuest_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1'));
                let progressChicheroneQuestSum_1_5 = progressChicheroneQuest_1_5 + 1;
                let progressChicheroneQuestSum_1 = progressChicheroneQuestSum_1_5 + progressChicheroneQuest_1;

                localStorage.setItem('progressChicheroneQuest_1_5', JSON.stringify(progressChicheroneQuestSum_1_5));
                localStorage.setItem('progressChicheroneQuest_1', JSON.stringify(progressChicheroneQuestSum_1));
                if (progressChicheroneQuestSum_1_5 === 1) {
                    questionStar_1_5.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Ну конечно же!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext');
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                wrapper.removeChild(questionStars);
                wrapper.removeChild(arrowBackClick);
                wrapper.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTopTitle);
                chicheroneCategoryDev();
                lockSubQuestChicherone();
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