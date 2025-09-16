
if (localStorage.getItem('progressCitizenQuest_4') === null) {
    localStorage.setItem('progressCitizenQuest_4', JSON.stringify(0));
}

// Citizen. Quest 4. Вот дом, который построил...
function questionCitizenCat_4_1() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressCitizenQuest_4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
        progressCitizenQuest_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        progressCitizenQuest_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        progressCitizenQuest_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        progressCitizenQuest_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_4_1') === null) {
        localStorage.setItem('progressCitizenQuest_4_1', JSON.stringify(progressCitizenQuest_4_1));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Вот дом, который построил', 'Чем примечательно здание Самарского Цирка?', 'Месторасположением', 'Архитектурной формой', 'Крышей');

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
        if (progressCitizenQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressCitizenQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressCitizenQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
        if (progressCitizenQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_4_1.length; i++) {
        if (answerVarRight_4_1[i] === answerVarRight_4_1[answerWrightNum]) {
            answerVarRight_4_1[i].addEventListener('click', () => {
                let progressCitizenQuest_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4'));
                let progressCitizenQuestSum_4_1 = progressCitizenQuest_4_1 + 1;
                let progressCitizenQuestSum_4 = progressCitizenQuestSum_4_1 + progressCitizenQuest_4;

                localStorage.setItem('progressCitizenQuest_4_1', JSON.stringify(progressCitizenQuestSum_4_1));
                localStorage.setItem('progressCitizenQuest_4', JSON.stringify(progressCitizenQuestSum_4));
                if (progressCitizenQuestSum_4_1 === 1) {
                    questionStar_4_1.className += 'fill';
                }
            });
            console.log(answerVarRight_4_1[answerWrightNum]);
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Верно! Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        questValue_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        questValue_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        questValue_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5'))
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
                if (questValue_4_2 === 1 &&
                    questValue_4_3 === 1 &&
                    questValue_4_4 === 1 &&
                    questValue_4_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_4_2 === 0) {
                    questionCitizenCat_4_2();
                } else if (questValue_4_2 === 1 && questValue_4_3 === 0) {
                    questionCitizenCat_4_3();
                } else if (questValue_4_3 === 1 && questValue_4_4 === 0) {
                    questionCitizenCat_4_4();
                } else if (questValue_4_4 === 1 && questValue_4_5 === 0) {
                    questionCitizenCat_4_5();
                }
            }
        });
        // if (progressCitizenQuest_4_1 === 0 &&
        //     progressCitizenQuest_4_2 === 1 &&
        //     progressCitizenQuest_4_3 === 1 &&
        //     progressCitizenQuest_4_4 === 1 &&
        //     progressCitizenQuest_4_5 === 1) {
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
                citizenCategoryDev();
                lockSubQuestCitizen();
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

function questionCitizenCat_4_2() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressCitizenQuest_4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
        progressCitizenQuest_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        progressCitizenQuest_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        progressCitizenQuest_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        progressCitizenQuest_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_4_2') === null) {
        localStorage.setItem('progressCitizenQuest_4_2', JSON.stringify(progressCitizenQuest_4_2));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Вот дом, который построил', 'Где расположен Пряничный домик в Самаре?', 'На Хлебной площади', 'На площади Революции', 'На площади Чапаева');

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
        if (progressCitizenQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressCitizenQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressCitizenQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
        if (progressCitizenQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_4_2.length; i++) {
        if (answerVarRight_4_2[i] === answerVarRight_4_2[answerWrightNum]) {
            answerVarRight_4_2[i].addEventListener('click', () => {
                let progressCitizenQuest_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4'));
                let progressCitizenQuestSum_4_2 = progressCitizenQuest_4_2 + 1;
                let progressCitizenQuestSum_4 = progressCitizenQuestSum_4_2 + progressCitizenQuest_4;

                localStorage.setItem('progressCitizenQuest_4_2', JSON.stringify(progressCitizenQuestSum_4_2));
                localStorage.setItem('progressCitizenQuest_4', JSON.stringify(progressCitizenQuestSum_4));
                if (progressCitizenQuestSum_4_2 === 1) {
                    questionStar_4_2.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
        questValue_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        questValue_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        questValue_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        questValue_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5'))
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
                if (questValue_4_3 === 1 &&
                    questValue_4_4 === 1 &&
                    questValue_4_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_4_3 === 0) {
                    questionCitizenCat_4_3();
                } else if (questValue_4_3 === 1 && questValue_4_4 === 0) {
                    questionCitizenCat_4_4();
                } else if (questValue_4_4 === 1 && questValue_4_5 === 0) {
                    questionCitizenCat_4_5();
                }
            }
        });
        // if (progressCitizenQuest_4_2 === 0 &&
        //     progressCitizenQuest_4_3 === 1 &&
        //     progressCitizenQuest_4_4 === 1 &&
        //     progressCitizenQuest_4_5 === 1) {
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
                citizenCategoryDev();
                lockSubQuestCitizen();
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

function questionCitizenCat_4_3() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
        progressCitizenQuest_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        progressCitizenQuest_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        progressCitizenQuest_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        progressCitizenQuest_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_4_3') === null) {
        localStorage.setItem('progressCitizenQuest_4_3', JSON.stringify(progressCitizenQuest_4_3));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Вот дом, который построил','Что придает уют памятнику отопительной батарее?', 'Носки', 'Кошка', 'Тапочки');

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
        if (progressCitizenQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressCitizenQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressCitizenQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
        if (progressCitizenQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_4_3.length; i++) {
        if (answerVarRight_4_3[i] === answerVarRight_4_3[answerWrightNum]) {
            answerVarRight_4_3[i].addEventListener('click', () => {
                let progressCitizenQuest_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4'));
                let progressCitizenQuestSum_4_3 = progressCitizenQuest_4_3 + 1;
                let progressCitizenQuestSum_4 = progressCitizenQuestSum_4_3 + progressCitizenQuest_4;

                localStorage.setItem('progressCitizenQuest_4_3', JSON.stringify(progressCitizenQuestSum_4_3));
                localStorage.setItem('progressCitizenQuest_4', JSON.stringify(progressCitizenQuestSum_4));
                if (progressCitizenQuestSum_4_3 === 1) {
                    questionStar_4_3.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Именно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
        questValue_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        questValue_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        questValue_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        questValue_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5'))
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
                if (questValue_4_4 === 1 &&
                    questValue_4_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_4_4 === 0) {
                    questionCitizenCat_4_4();
                } else if (questValue_4_4 === 1 && questValue_4_5 === 0) {
                    questionCitizenCat_4_5();
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
                citizenCategoryDev();
                lockSubQuestCitizen();
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

function questionCitizenCat_4_4() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
        progressCitizenQuest_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        progressCitizenQuest_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        progressCitizenQuest_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        progressCitizenQuest_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_4_4') === null) {
        localStorage.setItem('progressCitizenQuest_4_4', JSON.stringify(progressCitizenQuest_4_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Вот дом, который построил','Какой образ украшает фасад над парадным входом в доме Александры Павловны Курлиной?', 'Козы', 'Хозяйки', 'Ангела');

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
        if (progressCitizenQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressCitizenQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressCitizenQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressCitizenQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_4_4.length; i++) {
        if (answerVarRight_4_4[i] === answerVarRight_4_4[answerWrightNum]) {
            answerVarRight_4_4[i].addEventListener('click', () => {
                let progressCitizenQuest_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4'));
                let progressCitizenQuestSum_4_4 = progressCitizenQuest_4_4 + 1;
                let progressCitizenQuestSum_4 = progressCitizenQuestSum_4_4 + progressCitizenQuest_4;

                localStorage.setItem('progressCitizenQuest_4_4', JSON.stringify(progressCitizenQuestSum_4_4));
                localStorage.setItem('progressCitizenQuest_4', JSON.stringify(progressCitizenQuestSum_4));
                if (progressCitizenQuestSum_4_4 === 1) {
                    questionStar_4_4.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
        questValue_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        questValue_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        questValue_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        questValue_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5'))
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
                if (questValue_4_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_4_5 === 0) {
                    questionCitizenCat_4_5();
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
                citizenCategoryDev();
                lockSubQuestCitizen();
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

function questionCitizenCat_4_5() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
        progressCitizenQuest_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        progressCitizenQuest_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        progressCitizenQuest_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        progressCitizenQuest_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_4_4') === null) {
        localStorage.setItem('progressCitizenQuest_4_4', JSON.stringify(progressCitizenQuest_4_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Вот дом, который построил','До революции в здании Самарского технического университета на улице Куйбышева, 153 располагался?', 'Банк', 'Музей', 'Университет');

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
        if (progressCitizenQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressCitizenQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressCitizenQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressCitizenQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_4_5.length; i++) {
        if (answerVarRight_4_5[i] === answerVarRight_4_5[answerWrightNum]) {
            answerVarRight_4_5[i].addEventListener('click', () => {
                let progressCitizenQuest_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4'));
                let progressCitizenQuestSum_4_5 = progressCitizenQuest_4_5 + 1;
                let progressCitizenQuestSum_4 = progressCitizenQuestSum_4_5 + progressCitizenQuest_4;

                localStorage.setItem('progressCitizenQuest_4_5', JSON.stringify(progressCitizenQuestSum_4_5));
                localStorage.setItem('progressCitizenQuest_4', JSON.stringify(progressCitizenQuestSum_4));
                if (progressCitizenQuestSum_4_5 === 1) {
                    questionStar_4_5.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Ну конечно же!');

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
                citizenCategoryDev();
                lockSubQuestCitizen();
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
                citizenCategoryDev();
                lockSubQuestCitizen();
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