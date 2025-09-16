
if (localStorage.getItem('progressCitizenQuest_7') === null) {
    localStorage.setItem('progressCitizenQuest_7', JSON.stringify(0));
}

// Citizen. Quest 7. Культурная столица
function questionCitizenCat_7_1() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
        progressCitizenQuest_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        progressCitizenQuest_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        progressCitizenQuest_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        progressCitizenQuest_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_7_1') === null) {
        localStorage.setItem('progressCitizenQuest_7_1', JSON.stringify(progressCitizenQuest_7_1));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Культурная столица', 'Самый сладкий музей в Самаре?', 'Мармелада', 'Шоколада', 'Зефира');

    let answerVar_7_1_1 = document.getElementById('answerVar_1'),
        answerVar_7_1_2 = document.getElementById('answerVar_2'),
        answerVar_7_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_1 = [answerVar_7_1_1, answerVar_7_1_2, answerVar_7_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_7_1"></li>
        <li id="questionStar_7_2"></li>
        <li id="questionStar_7_3"></li>
        <li id="questionStar_7_4"></li>
        <li id="questionStar_7_5"></li>
    `;

    const questionStar_7_1 = document.getElementById('questionStar_7_1'),
        questionStar_7_2 = document.getElementById('questionStar_7_2'),
        questionStar_7_3 = document.getElementById('questionStar_7_3'),
        questionStar_7_4 = document.getElementById('questionStar_7_4'),
        questionStar_7_5 = document.getElementById('questionStar_7_5')
    ;

    function starsView_1() {
        if (progressCitizenQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressCitizenQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressCitizenQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
        if (progressCitizenQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_7_1.length; i++) {
        if (answerVarRight_7_1[i] === answerVarRight_7_1[answerWrightNum]) {
            answerVarRight_7_1[i].addEventListener('click', () => {
                let progressCitizenQuest_7 = JSON.parse(localStorage.getItem('progressCitizenQuest_7'));
                let progressCitizenQuestSum_7_1 = progressCitizenQuest_7_1 + 1;
                let progressCitizenQuestSum_7 = progressCitizenQuestSum_7_1 + progressCitizenQuest_7;

                localStorage.setItem('progressCitizenQuest_7_1', JSON.stringify(progressCitizenQuestSum_7_1));
                localStorage.setItem('progressCitizenQuest_7', JSON.stringify(progressCitizenQuestSum_7));
                if (progressCitizenQuestSum_7_1 === 1) {
                    questionStar_7_1.className += 'fill';
                }
            });
            console.log(answerVarRight_7_1[answerWrightNum]);
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Верно! Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        questValue_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        questValue_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        questValue_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5'))
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
                if (questValue_7_2 === 1 &&
                    questValue_7_3 === 1 &&
                    questValue_7_4 === 1 &&
                    questValue_7_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_7_2 === 0) {
                    questionCitizenCat_7_2();
                } else if (questValue_7_2 === 1 && questValue_7_3 === 0) {
                    questionCitizenCat_7_3();
                } else if (questValue_7_3 === 1 && questValue_7_4 === 0) {
                    questionCitizenCat_7_4();
                } else if (questValue_7_4 === 1 && questValue_7_5 === 0) {
                    questionCitizenCat_7_5();
                }
            }
        });
        // if (progressCitizenQuest_7_1 === 0 &&
        //     progressCitizenQuest_7_2 === 1 &&
        //     progressCitizenQuest_7_3 === 1 &&
        //     progressCitizenQuest_7_4 === 1 &&
        //     progressCitizenQuest_7_5 === 1) {
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

function questionCitizenCat_7_2() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
        progressCitizenQuest_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        progressCitizenQuest_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        progressCitizenQuest_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        progressCitizenQuest_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_7_2') === null) {
        localStorage.setItem('progressCitizenQuest_7_2', JSON.stringify(progressCitizenQuest_7_2));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Культурная столица', 'Неофициальный гимн Самары', '«Песня о Самаре»', '«Ах, Самара, городок…»*', '«Тебе, Самара»');

    let answerVar_7_2_1 = document.getElementById('answerVar_1'),
        answerVar_7_2_2 = document.getElementById('answerVar_2'),
        answerVar_7_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_2 = [answerVar_7_2_1, answerVar_7_2_2, answerVar_7_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_7_1"></li>
        <li id="questionStar_7_2"></li>
        <li id="questionStar_7_3"></li>
        <li id="questionStar_7_4"></li>
        <li id="questionStar_7_5"></li>
    `;

    const questionStar_7_1 = document.getElementById('questionStar_7_1'),
        questionStar_7_2 = document.getElementById('questionStar_7_2'),
        questionStar_7_3 = document.getElementById('questionStar_7_3'),
        questionStar_7_4 = document.getElementById('questionStar_7_4'),
        questionStar_7_5 = document.getElementById('questionStar_7_5')
    ;

    function starsView_2() {
        if (progressCitizenQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressCitizenQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressCitizenQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
        if (progressCitizenQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_7_2.length; i++) {
        if (answerVarRight_7_2[i] === answerVarRight_7_2[answerWrightNum]) {
            answerVarRight_7_2[i].addEventListener('click', () => {
                let progressCitizenQuest_7 = JSON.parse(localStorage.getItem('progressCitizenQuest_7'));
                let progressCitizenQuestSum_7_2 = progressCitizenQuest_7_2 + 1;
                let progressCitizenQuestSum_7 = progressCitizenQuestSum_7_2 + progressCitizenQuest_7;

                localStorage.setItem('progressCitizenQuest_7_2', JSON.stringify(progressCitizenQuestSum_7_2));
                localStorage.setItem('progressCitizenQuest_7', JSON.stringify(progressCitizenQuestSum_7));
                if (progressCitizenQuestSum_7_2 === 1) {
                    questionStar_7_2.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно! Песня «Ах, Самара, городок...» звучала у стен поверженного рейхстага в Берлине 9 мая 1945 г. в исполнении Веры Зинкевич – артистки фронтовой бригады облгастольбюро');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
        questValue_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        questValue_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        questValue_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        questValue_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5'))
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
                if (questValue_7_3 === 1 &&
                    questValue_7_4 === 1 &&
                    questValue_7_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_7_3 === 0) {
                    questionCitizenCat_7_3();
                } else if (questValue_7_3 === 1 && questValue_7_4 === 0) {
                    questionCitizenCat_7_4();
                } else if (questValue_7_4 === 1 && questValue_7_5 === 0) {
                    questionCitizenCat_7_5();
                }
            }
        });
        // if (progressCitizenQuest_7_2 === 0 &&
        //     progressCitizenQuest_7_3 === 1 &&
        //     progressCitizenQuest_7_4 === 1 &&
        //     progressCitizenQuest_7_5 === 1) {
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

function questionCitizenCat_7_3() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressCitizenQuest_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
        progressCitizenQuest_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        progressCitizenQuest_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        progressCitizenQuest_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        progressCitizenQuest_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_7_3') === null) {
        localStorage.setItem('progressCitizenQuest_7_3', JSON.stringify(progressCitizenQuest_7_3));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Культурная столица','В Самаре установлен памятник известному кинорежиссёру, родившемуся в этих местах', 'Юрию Яковлеву', 'Леониду Гайдаю', 'Эльдару Рязанову');

    let answerVar_7_3_1 = document.getElementById('answerVar_1'),
        answerVar_7_3_2 = document.getElementById('answerVar_2'),
        answerVar_7_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_3 = [answerVar_7_3_1, answerVar_7_3_2, answerVar_7_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_7_1"></li>
        <li id="questionStar_7_2"></li>
        <li id="questionStar_7_3"></li>
        <li id="questionStar_7_4"></li>
        <li id="questionStar_7_5"></li>
    `;

    const questionStar_7_1 = document.getElementById('questionStar_7_1'),
        questionStar_7_2 = document.getElementById('questionStar_7_2'),
        questionStar_7_3 = document.getElementById('questionStar_7_3'),
        questionStar_7_4 = document.getElementById('questionStar_7_4'),
        questionStar_7_5 = document.getElementById('questionStar_7_5')
    ;

    function starsView_3() {
        if (progressCitizenQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressCitizenQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressCitizenQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
        if (progressCitizenQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_7_3.length; i++) {
        if (answerVarRight_7_3[i] === answerVarRight_7_3[answerWrightNum]) {
            answerVarRight_7_3[i].addEventListener('click', () => {
                let progressCitizenQuest_7 = JSON.parse(localStorage.getItem('progressCitizenQuest_7'));
                let progressCitizenQuestSum_7_3 = progressCitizenQuest_7_3 + 1;
                let progressCitizenQuestSum_7 = progressCitizenQuestSum_7_3 + progressCitizenQuest_7;

                localStorage.setItem('progressCitizenQuest_7_3', JSON.stringify(progressCitizenQuestSum_7_3));
                localStorage.setItem('progressCitizenQuest_7', JSON.stringify(progressCitizenQuestSum_7));
                if (progressCitizenQuestSum_7_3 === 1) {
                    questionStar_7_3.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Именно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
        questValue_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        questValue_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        questValue_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        questValue_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5'))
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
                if (questValue_7_4 === 1 &&
                    questValue_7_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_7_4 === 0) {
                    questionCitizenCat_7_4();
                } else if (questValue_7_4 === 1 && questValue_7_5 === 0) {
                    questionCitizenCat_7_5();
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

function questionCitizenCat_7_4() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
        progressCitizenQuest_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        progressCitizenQuest_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        progressCitizenQuest_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        progressCitizenQuest_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_7_4') === null) {
        localStorage.setItem('progressCitizenQuest_7_4', JSON.stringify(progressCitizenQuest_7_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Культурная столица','В 1886 в Самаре открылся первый музей', 'Художественный', 'Краеведческий', 'Воинской славы');

    let answerVar_7_4_1 = document.getElementById('answerVar_1'),
        answerVar_7_4_2 = document.getElementById('answerVar_2'),
        answerVar_7_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_4 = [answerVar_7_4_1, answerVar_7_4_2, answerVar_7_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_7_1"></li>
        <li id="questionStar_7_2"></li>
        <li id="questionStar_7_3"></li>
        <li id="questionStar_7_4"></li>
        <li id="questionStar_7_5"></li>
    `;

    const questionStar_7_1 = document.getElementById('questionStar_7_1'),
        questionStar_7_2 = document.getElementById('questionStar_7_2'),
        questionStar_7_3 = document.getElementById('questionStar_7_3'),
        questionStar_7_4 = document.getElementById('questionStar_7_4'),
        questionStar_7_5 = document.getElementById('questionStar_7_5')
    ;

    function starsView_4() {
        if (progressCitizenQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressCitizenQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressCitizenQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressCitizenQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_7_4.length; i++) {
        if (answerVarRight_7_4[i] === answerVarRight_7_4[answerWrightNum]) {
            answerVarRight_7_4[i].addEventListener('click', () => {
                let progressCitizenQuest_7 = JSON.parse(localStorage.getItem('progressCitizenQuest_7'));
                let progressCitizenQuestSum_7_4 = progressCitizenQuest_7_4 + 1;
                let progressCitizenQuestSum_7 = progressCitizenQuestSum_7_4 + progressCitizenQuest_7;

                localStorage.setItem('progressCitizenQuest_7_4', JSON.stringify(progressCitizenQuestSum_7_4));
                localStorage.setItem('progressCitizenQuest_7', JSON.stringify(progressCitizenQuestSum_7));
                if (progressCitizenQuestSum_7_4 === 1) {
                    questionStar_7_4.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
        questValue_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        questValue_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        questValue_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        questValue_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5'))
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
                if (questValue_7_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_7_5 === 0) {
                    questionCitizenCat_7_5();
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

function questionCitizenCat_7_5() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
        progressCitizenQuest_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        progressCitizenQuest_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        progressCitizenQuest_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        progressCitizenQuest_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_7_4') === null) {
        localStorage.setItem('progressCitizenQuest_7_4', JSON.stringify(progressCitizenQuest_7_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Культурная столица','Какой Фестиваль проводится с 1968 года в Самарской области?', '«Рок над Волгой»', '«Грушинский»', '«Жигулевская вишня»');

    let answerVar_7_5_1 = document.getElementById('answerVar_1'),
        answerVar_7_5_2 = document.getElementById('answerVar_2'),
        answerVar_7_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_5 = [answerVar_7_5_1, answerVar_7_5_2, answerVar_7_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_7_1"></li>
        <li id="questionStar_7_2"></li>
        <li id="questionStar_7_3"></li>
        <li id="questionStar_7_4"></li>
        <li id="questionStar_7_5"></li>
    `;

    const questionStar_7_1 = document.getElementById('questionStar_7_1'),
        questionStar_7_2 = document.getElementById('questionStar_7_2'),
        questionStar_7_3 = document.getElementById('questionStar_7_3'),
        questionStar_7_4 = document.getElementById('questionStar_7_4'),
        questionStar_7_5 = document.getElementById('questionStar_7_5')
    ;

    function starsView_5() {
        if (progressCitizenQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressCitizenQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressCitizenQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressCitizenQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_7_5.length; i++) {
        if (answerVarRight_7_5[i] === answerVarRight_7_5[answerWrightNum]) {
            answerVarRight_7_5[i].addEventListener('click', () => {
                let progressCitizenQuest_7 = JSON.parse(localStorage.getItem('progressCitizenQuest_7'));
                let progressCitizenQuestSum_7_5 = progressCitizenQuest_7_5 + 1;
                let progressCitizenQuestSum_7 = progressCitizenQuestSum_7_5 + progressCitizenQuest_7;

                localStorage.setItem('progressCitizenQuest_7_5', JSON.stringify(progressCitizenQuestSum_7_5));
                localStorage.setItem('progressCitizenQuest_7', JSON.stringify(progressCitizenQuestSum_7));
                if (progressCitizenQuestSum_7_5 === 1) {
                    questionStar_7_5.className += 'fill';
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