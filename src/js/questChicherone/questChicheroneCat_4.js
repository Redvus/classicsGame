
if (localStorage.getItem('progressChicheroneQuest_4') === null) {
    localStorage.setItem('progressChicheroneQuest_4', JSON.stringify(0));
}

// Chicherone. Quest 4
function questionChicheroneCat_4_1() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_4_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_1')),
        progressChicheroneQuest_4_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
        progressChicheroneQuest_4_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3')),
        progressChicheroneQuest_4_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_4')),
        progressChicheroneQuest_4_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_4_1') === null) {
        localStorage.setItem('progressChicheroneQuest_4_1', JSON.stringify(progressChicheroneQuest_4_1));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Вот дом, который построил', 'Нумерация домов в Самаре появилась ...', 'В 1901 году', 'В 1888 году', 'В 1917 году');

    let answerVar_4_1_1 = document.getElementById('answerVar_1'),
        answerVar_4_1_2 = document.getElementById('answerVar_2'),
        answerVar_4_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_1 = [answerVar_4_1_1, answerVar_4_1_2, answerVar_4_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_4_1"></li>
        <li id="questionStar_4_2"></li>
        <li id="questionStar_4_3"></li>
        <li id="questionStar_4_4"></li>
        <li id="questionStar_4_5"></li>
    `;

    const questionStar_4_1 = document.getElementById('questionStar_4_1'),
        questionStar_4_2 = document.getElementById('questionStar_4_2'),
        questionStar_4_3 = document.getElementById('questionStar_4_3'),
        questionStar_4_4 = document.getElementById('questionStar_4_4'),
        questionStar_4_5 = document.getElementById('questionStar_4_5')
    ;

    function starsView_1() {
        if (progressChicheroneQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressChicheroneQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressChicheroneQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
        if (progressChicheroneQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_4_1.length; i++) {
        if (answerVarRight_4_1[i] === answerVarRight_4_1[answerWrightNum]) {
            answerVarRight_4_1[i].addEventListener('click', () => {
                let progressChicheroneQuest_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4'));
                let progressChicheroneQuestSum_4_1 = progressChicheroneQuest_4_1 + 1;
                let progressChicheroneQuestSum_4 = progressChicheroneQuestSum_4_1 + progressChicheroneQuest_4;

                localStorage.setItem('progressChicheroneQuest_4_1', JSON.stringify(progressChicheroneQuestSum_4_1));
                localStorage.setItem('progressChicheroneQuest_4', JSON.stringify(progressChicheroneQuestSum_4));
                if (progressChicheroneQuestSum_4_1 === 1) {
                    questionStar_4_1.className += 'fill';
                }
            });
            console.log(answerVarRight_4_1[answerWrightNum]);
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_5'))
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
                    questionChicheroneCat_4_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChicheroneCat_4_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_4_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_4_5();
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

function questionChicheroneCat_4_2() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_4_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_1')),
        progressChicheroneQuest_4_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
        progressChicheroneQuest_4_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3')),
        progressChicheroneQuest_4_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_4')),
        progressChicheroneQuest_4_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_4_2') === null) {
        localStorage.setItem('progressChicheroneQuest_4_2', JSON.stringify(progressChicheroneQuest_4_2));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Вот дом, который построил', 'Этот архитектор в 1899 году был городским архитектором Самары, по его проекту было спроектировано здание «Дома Журналистов и литераторов»', 'Александр Устинович Зеленко', 'Александр Александрович Щербачев', 'Филарет Петрович Засухин');

    let answerVar_4_2_1 = document.getElementById('answerVar_1'),
        answerVar_4_2_2 = document.getElementById('answerVar_2'),
        answerVar_4_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_2 = [answerVar_4_2_1, answerVar_4_2_2, answerVar_4_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_4_1"></li>
        <li id="questionStar_4_2"></li>
        <li id="questionStar_4_3"></li>
        <li id="questionStar_4_4"></li>
        <li id="questionStar_4_5"></li>
    `;

    const questionStar_4_1 = document.getElementById('questionStar_4_1'),
        questionStar_4_2 = document.getElementById('questionStar_4_2'),
        questionStar_4_3 = document.getElementById('questionStar_4_3'),
        questionStar_4_4 = document.getElementById('questionStar_4_4'),
        questionStar_4_5 = document.getElementById('questionStar_4_5')
    ;

    function starsView_2() {
        if (progressChicheroneQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressChicheroneQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressChicheroneQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
        if (progressChicheroneQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_4_2.length; i++) {
        if (answerVarRight_4_2[i] === answerVarRight_4_2[answerWrightNum]) {
            answerVarRight_4_2[i].addEventListener('click', () => {
                let progressChicheroneQuest_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4'));
                let progressChicheroneQuestSum_4_2 = progressChicheroneQuest_4_2 + 1;
                let progressChicheroneQuestSum_4 = progressChicheroneQuestSum_4_2 + progressChicheroneQuest_4;

                localStorage.setItem('progressChicheroneQuest_4_2', JSON.stringify(progressChicheroneQuestSum_4_2));
                localStorage.setItem('progressChicheroneQuest_4', JSON.stringify(progressChicheroneQuestSum_4));
                if (progressChicheroneQuestSum_4_2 === 1) {
                    questionStar_4_2.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_5'))
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
                    questionChicheroneCat_4_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_4_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_4_5();
                }
            }
        });
        // if (progressChicheroneQuest_4_2 === 0 &&
        //     progressChicheroneQuest_4_3 === 1 &&
        //     progressChicheroneQuest_4_4 === 1 &&
        //     progressChicheroneQuest_4_5 === 1) {
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

function questionChicheroneCat_4_3() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChicheroneQuest_4_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_1')),
        progressChicheroneQuest_4_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
        progressChicheroneQuest_4_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3')),
        progressChicheroneQuest_4_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_4')),
        progressChicheroneQuest_4_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_4_3') === null) {
        localStorage.setItem('progressChicheroneQuest_4_3', JSON.stringify(progressChicheroneQuest_4_3));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Вот дом, который построил','Современное здание самарской Филармонии было возведено по проекту архитектора...', 'Александра Александровича Щербачева', 'Александра Устиновича Зеленко', 'Юрия Васильевича Храмова');

    let answerVar_4_3_1 = document.getElementById('answerVar_1'),
        answerVar_4_3_2 = document.getElementById('answerVar_2'),
        answerVar_4_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_3 = [answerVar_4_3_1, answerVar_4_3_2, answerVar_4_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_4_1"></li>
        <li id="questionStar_4_2"></li>
        <li id="questionStar_4_3"></li>
        <li id="questionStar_4_4"></li>
        <li id="questionStar_4_5"></li>
    `;

    const questionStar_4_1 = document.getElementById('questionStar_4_1'),
        questionStar_4_2 = document.getElementById('questionStar_4_2'),
        questionStar_4_3 = document.getElementById('questionStar_4_3'),
        questionStar_4_4 = document.getElementById('questionStar_4_4'),
        questionStar_4_5 = document.getElementById('questionStar_4_5')
    ;

    function starsView_3() {
        if (progressChicheroneQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressChicheroneQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressChicheroneQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
        if (progressChicheroneQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_4_3.length; i++) {
        if (answerVarRight_4_3[i] === answerVarRight_4_3[answerWrightNum]) {
            answerVarRight_4_3[i].addEventListener('click', () => {
                let progressChicheroneQuest_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4'));
                let progressChicheroneQuestSum_4_3 = progressChicheroneQuest_4_3 + 1;
                let progressChicheroneQuestSum_4 = progressChicheroneQuestSum_4_3 + progressChicheroneQuest_4;

                localStorage.setItem('progressChicheroneQuest_4_3', JSON.stringify(progressChicheroneQuestSum_4_3));
                localStorage.setItem('progressChicheroneQuest_4', JSON.stringify(progressChicheroneQuestSum_4));
                if (progressChicheroneQuestSum_4_3 === 1) {
                    questionStar_4_3.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_5'))
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
                    questionChicheroneCat_4_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_4_5();
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

function questionChicheroneCat_4_4() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_4_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_1')),
        progressChicheroneQuest_4_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
        progressChicheroneQuest_4_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3')),
        progressChicheroneQuest_4_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_4')),
        progressChicheroneQuest_4_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_4_4') === null) {
        localStorage.setItem('progressChicheroneQuest_4_4', JSON.stringify(progressChicheroneQuest_4_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Вот дом, который построил','Скульптор Матвей Манизер, автор памятника...', 'Валерьяну Владимировичу Куйбышеву', 'Василию Ивановичу Чапаеву', 'Владимиру Ильичу Ленину');

    let answerVar_4_4_1 = document.getElementById('answerVar_1'),
        answerVar_4_4_2 = document.getElementById('answerVar_2'),
        answerVar_4_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_4 = [answerVar_4_4_1, answerVar_4_4_2, answerVar_4_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_4_1"></li>
        <li id="questionStar_4_2"></li>
        <li id="questionStar_4_3"></li>
        <li id="questionStar_4_4"></li>
        <li id="questionStar_4_5"></li>
    `;

    const questionStar_4_1 = document.getElementById('questionStar_4_1'),
        questionStar_4_2 = document.getElementById('questionStar_4_2'),
        questionStar_4_3 = document.getElementById('questionStar_4_3'),
        questionStar_4_4 = document.getElementById('questionStar_4_4'),
        questionStar_4_5 = document.getElementById('questionStar_4_5')
    ;

    function starsView_4() {
        if (progressChicheroneQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressChicheroneQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressChicheroneQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressChicheroneQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_4_4.length; i++) {
        if (answerVarRight_4_4[i] === answerVarRight_4_4[answerWrightNum]) {
            answerVarRight_4_4[i].addEventListener('click', () => {
                let progressChicheroneQuest_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4'));
                let progressChicheroneQuestSum_4_4 = progressChicheroneQuest_4_4 + 1;
                let progressChicheroneQuestSum_4 = progressChicheroneQuestSum_4_4 + progressChicheroneQuest_4;

                localStorage.setItem('progressChicheroneQuest_4_4', JSON.stringify(progressChicheroneQuestSum_4_4));
                localStorage.setItem('progressChicheroneQuest_4', JSON.stringify(progressChicheroneQuestSum_4));
                if (progressChicheroneQuestSum_4_4 === 1) {
                    questionStar_4_4.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_5'))
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
                    questionChicheroneCat_4_5();
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

function questionChicheroneCat_4_5() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_4_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_1')),
        progressChicheroneQuest_4_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
        progressChicheroneQuest_4_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3')),
        progressChicheroneQuest_4_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_4')),
        progressChicheroneQuest_4_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_4_4') === null) {
        localStorage.setItem('progressChicheroneQuest_4_4', JSON.stringify(progressChicheroneQuest_4_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Вот дом, который построил','Специальное здание городского ломбарда появилось...', 'В 1908 году', 'В 1914 году', 'В 1920 году');

    let answerVar_4_5_1 = document.getElementById('answerVar_1'),
        answerVar_4_5_2 = document.getElementById('answerVar_2'),
        answerVar_4_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_5 = [answerVar_4_5_1, answerVar_4_5_2, answerVar_4_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_4_1"></li>
        <li id="questionStar_4_2"></li>
        <li id="questionStar_4_3"></li>
        <li id="questionStar_4_4"></li>
        <li id="questionStar_4_5"></li>
    `;

    const questionStar_4_1 = document.getElementById('questionStar_4_1'),
        questionStar_4_2 = document.getElementById('questionStar_4_2'),
        questionStar_4_3 = document.getElementById('questionStar_4_3'),
        questionStar_4_4 = document.getElementById('questionStar_4_4'),
        questionStar_4_5 = document.getElementById('questionStar_4_5')
    ;

    function starsView_5() {
        if (progressChicheroneQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressChicheroneQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressChicheroneQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressChicheroneQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_4_5.length; i++) {
        if (answerVarRight_4_5[i] === answerVarRight_4_5[answerWrightNum]) {
            answerVarRight_4_5[i].addEventListener('click', () => {
                let progressChicheroneQuest_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4'));
                let progressChicheroneQuestSum_4_5 = progressChicheroneQuest_4_5 + 1;
                let progressChicheroneQuestSum_4 = progressChicheroneQuestSum_4_5 + progressChicheroneQuest_4;

                localStorage.setItem('progressChicheroneQuest_4_5', JSON.stringify(progressChicheroneQuestSum_4_5));
                localStorage.setItem('progressChicheroneQuest_4', JSON.stringify(progressChicheroneQuestSum_4));
                if (progressChicheroneQuestSum_4_5 === 1) {
                    questionStar_4_5.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'В 1914 году специальное здание для городского ломбарда построили на Ильинской улице (ныне Арцыбушевской)\n');

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