
if (localStorage.getItem('progressCitizenQuest_2') === null) {
    localStorage.setItem('progressCitizenQuest_2', JSON.stringify(0));
}

// Citizen. Quest 2. Самара в зеркале истории
function questionCitizenCat_2_1() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
        progressCitizenQuest_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        progressCitizenQuest_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        progressCitizenQuest_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        progressCitizenQuest_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_2_1') === null) {
        localStorage.setItem('progressCitizenQuest_2_1', JSON.stringify(progressCitizenQuest_2_1));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Самара в зеркале истории', 'Покровитель Самары?', 'Митрополит Алексей', 'Митрополит Климент', 'Митрополит Серафим');

    let answerVar_2_1_1 = document.getElementById('answerVar_1'),
        answerVar_2_1_2 = document.getElementById('answerVar_2'),
        answerVar_2_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_1 = [answerVar_2_1_1, answerVar_2_1_2, answerVar_2_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_2_1"></li>
        <li id="questionStar_2_2"></li>
        <li id="questionStar_2_3"></li>
        <li id="questionStar_2_4"></li>
        <li id="questionStar_2_5"></li>
    `;

    const questionStar_2_1 = document.getElementById('questionStar_2_1'),
        questionStar_2_2 = document.getElementById('questionStar_2_2'),
        questionStar_2_3 = document.getElementById('questionStar_2_3'),
        questionStar_2_4 = document.getElementById('questionStar_2_4'),
        questionStar_2_5 = document.getElementById('questionStar_2_5')
    ;

    function starsView_1() {
        if (progressCitizenQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressCitizenQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressCitizenQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
        if (progressCitizenQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_2_1.length; i++) {
        if (answerVarRight_2_1[i] === answerVarRight_2_1[answerWrightNum]) {
            answerVarRight_2_1[i].addEventListener('click', () => {
                let progressCitizenQuest_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2'));
                let progressCitizenQuestSum_2_1 = progressCitizenQuest_2_1 + 1;
                let progressCitizenQuestSum_2 = progressCitizenQuestSum_2_1 + progressCitizenQuest_2;

                localStorage.setItem('progressCitizenQuest_2_1', JSON.stringify(progressCitizenQuestSum_2_1));
                localStorage.setItem('progressCitizenQuest_2', JSON.stringify(progressCitizenQuestSum_2));
                if (progressCitizenQuestSum_2_1 === 1) {
                    questionStar_2_1.className += 'fill';
                }
            });
            console.log(answerVarRight_2_1[answerWrightNum]);
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Верно! Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        questValue_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        questValue_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        questValue_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5'))
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
                if (questValue_2_2 === 1 &&
                    questValue_2_3 === 1 &&
                    questValue_2_4 === 1 &&
                    questValue_2_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_2_2 === 0) {
                    questionCitizenCat_2_2();
                } else if (questValue_2_2 === 1 && questValue_2_3 === 0) {
                    questionCitizenCat_2_3();
                } else if (questValue_2_3 === 1 && questValue_2_4 === 0) {
                    questionCitizenCat_2_4();
                } else if (questValue_2_4 === 1 && questValue_2_5 === 0) {
                    questionCitizenCat_2_5();
                }
            }
        });
        // if (progressCitizenQuest_2_1 === 0 &&
        //     progressCitizenQuest_2_2 === 1 &&
        //     progressCitizenQuest_2_3 === 1 &&
        //     progressCitizenQuest_2_4 === 1 &&
        //     progressCitizenQuest_2_5 === 1) {
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

function questionCitizenCat_2_2() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressCitizenQuest_2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
        progressCitizenQuest_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        progressCitizenQuest_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        progressCitizenQuest_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        progressCitizenQuest_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_2_2') === null) {
        localStorage.setItem('progressCitizenQuest_2_2', JSON.stringify(progressCitizenQuest_2_2));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Самара в зеркале истории', 'На какой площади находилась крепость Samar?', 'Площадь Революции', 'Площадь Куйбышева', 'Площадь Хлебная');

    let answerVar_2_2_1 = document.getElementById('answerVar_1'),
        answerVar_2_2_2 = document.getElementById('answerVar_2'),
        answerVar_2_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_2 = [answerVar_2_2_1, answerVar_2_2_2, answerVar_2_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_2_1"></li>
        <li id="questionStar_2_2"></li>
        <li id="questionStar_2_3"></li>
        <li id="questionStar_2_4"></li>
        <li id="questionStar_2_5"></li>
    `;

    const questionStar_2_1 = document.getElementById('questionStar_2_1'),
        questionStar_2_2 = document.getElementById('questionStar_2_2'),
        questionStar_2_3 = document.getElementById('questionStar_2_3'),
        questionStar_2_4 = document.getElementById('questionStar_2_4'),
        questionStar_2_5 = document.getElementById('questionStar_2_5')
    ;

    function starsView_2() {
        if (progressCitizenQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressCitizenQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressCitizenQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
        if (progressCitizenQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_2_2.length; i++) {
        if (answerVarRight_2_2[i] === answerVarRight_2_2[answerWrightNum]) {
            answerVarRight_2_2[i].addEventListener('click', () => {
                let progressCitizenQuest_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2'));
                let progressCitizenQuestSum_2_2 = progressCitizenQuest_2_2 + 1;
                let progressCitizenQuestSum_2 = progressCitizenQuestSum_2_2 + progressCitizenQuest_2;

                localStorage.setItem('progressCitizenQuest_2_2', JSON.stringify(progressCitizenQuestSum_2_2));
                localStorage.setItem('progressCitizenQuest_2', JSON.stringify(progressCitizenQuestSum_2));
                if (progressCitizenQuestSum_2_2 === 1) {
                    questionStar_2_2.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
        questValue_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        questValue_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        questValue_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        questValue_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5'))
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
                if (questValue_2_3 === 1 &&
                    questValue_2_4 === 1 &&
                    questValue_2_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_2_3 === 0) {
                    questionCitizenCat_2_3();
                } else if (questValue_2_3 === 1 && questValue_2_4 === 0) {
                    questionCitizenCat_2_4();
                } else if (questValue_2_4 === 1 && questValue_2_5 === 0) {
                    questionCitizenCat_2_5();
                }
            }
        });
        // if (progressCitizenQuest_2_2 === 0 &&
        //     progressCitizenQuest_2_3 === 1 &&
        //     progressCitizenQuest_2_4 === 1 &&
        //     progressCitizenQuest_2_5 === 1) {
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

function questionCitizenCat_2_3() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
        progressCitizenQuest_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        progressCitizenQuest_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        progressCitizenQuest_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        progressCitizenQuest_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_2_3') === null) {
        localStorage.setItem('progressCitizenQuest_2_3', JSON.stringify(progressCitizenQuest_2_3));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Самара в зеркале истории','Какое имя носит Самарский краеведческий музей?', 'Михаил Дмитриевич Челышев', 'Петра Алексеевича Алабина', 'Григория Засекина');

    let answerVar_2_3_1 = document.getElementById('answerVar_1'),
        answerVar_2_3_2 = document.getElementById('answerVar_2'),
        answerVar_2_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_3 = [answerVar_2_3_1, answerVar_2_3_2, answerVar_2_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_2_1"></li>
        <li id="questionStar_2_2"></li>
        <li id="questionStar_2_3"></li>
        <li id="questionStar_2_4"></li>
        <li id="questionStar_2_5"></li>
    `;

    const questionStar_2_1 = document.getElementById('questionStar_2_1'),
        questionStar_2_2 = document.getElementById('questionStar_2_2'),
        questionStar_2_3 = document.getElementById('questionStar_2_3'),
        questionStar_2_4 = document.getElementById('questionStar_2_4'),
        questionStar_2_5 = document.getElementById('questionStar_2_5')
    ;

    function starsView_3() {
        if (progressCitizenQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressCitizenQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressCitizenQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
        if (progressCitizenQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_2_3.length; i++) {
        if (answerVarRight_2_3[i] === answerVarRight_2_3[answerWrightNum]) {
            answerVarRight_2_3[i].addEventListener('click', () => {
                let progressCitizenQuest_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2'));
                let progressCitizenQuestSum_2_3 = progressCitizenQuest_2_3 + 1;
                let progressCitizenQuestSum_2 = progressCitizenQuestSum_2_3 + progressCitizenQuest_2;

                localStorage.setItem('progressCitizenQuest_2_3', JSON.stringify(progressCitizenQuestSum_2_3));
                localStorage.setItem('progressCitizenQuest_2', JSON.stringify(progressCitizenQuestSum_2));
                if (progressCitizenQuestSum_2_3 === 1) {
                    questionStar_2_3.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Именно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
        questValue_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        questValue_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        questValue_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        questValue_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5'))
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
                if (questValue_2_4 === 1 &&
                    questValue_2_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_2_4 === 0) {
                    questionCitizenCat_2_4();
                } else if (questValue_2_4 === 1 && questValue_2_5 === 0) {
                    questionCitizenCat_2_5();
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

function questionCitizenCat_2_4() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressCitizenQuest_2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
        progressCitizenQuest_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        progressCitizenQuest_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        progressCitizenQuest_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        progressCitizenQuest_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_2_4') === null) {
        localStorage.setItem('progressCitizenQuest_2_4', JSON.stringify(progressCitizenQuest_2_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Самара в зеркале истории','Кто основатель крепости Самара?', 'Петр Алексеевич Алабин', 'Митрополит Алексий', 'Григорий Засекин');

    let answerVar_2_4_1 = document.getElementById('answerVar_1'),
        answerVar_2_4_2 = document.getElementById('answerVar_2'),
        answerVar_2_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_4 = [answerVar_2_4_1, answerVar_2_4_2, answerVar_2_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_2_1"></li>
        <li id="questionStar_2_2"></li>
        <li id="questionStar_2_3"></li>
        <li id="questionStar_2_4"></li>
        <li id="questionStar_2_5"></li>
    `;

    const questionStar_2_1 = document.getElementById('questionStar_2_1'),
        questionStar_2_2 = document.getElementById('questionStar_2_2'),
        questionStar_2_3 = document.getElementById('questionStar_2_3'),
        questionStar_2_4 = document.getElementById('questionStar_2_4'),
        questionStar_2_5 = document.getElementById('questionStar_2_5')
    ;

    function starsView_4() {
        if (progressCitizenQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressCitizenQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressCitizenQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressCitizenQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_2_4.length; i++) {
        if (answerVarRight_2_4[i] === answerVarRight_2_4[answerWrightNum]) {
            answerVarRight_2_4[i].addEventListener('click', () => {
                let progressCitizenQuest_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2'));
                let progressCitizenQuestSum_2_4 = progressCitizenQuest_2_4 + 1;
                let progressCitizenQuestSum_2 = progressCitizenQuestSum_2_4 + progressCitizenQuest_2;

                localStorage.setItem('progressCitizenQuest_2_4', JSON.stringify(progressCitizenQuestSum_2_4));
                localStorage.setItem('progressCitizenQuest_2', JSON.stringify(progressCitizenQuestSum_2));
                if (progressCitizenQuestSum_2_4 === 1) {
                    questionStar_2_4.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
        questValue_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        questValue_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        questValue_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        questValue_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5'))
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
                if (questValue_2_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_2_5 === 0) {
                    questionCitizenCat_2_5();
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

function questionCitizenCat_2_5() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
        progressCitizenQuest_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        progressCitizenQuest_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        progressCitizenQuest_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        progressCitizenQuest_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_2_4') === null) {
        localStorage.setItem('progressCitizenQuest_2_4', JSON.stringify(progressCitizenQuest_2_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Самара в зеркале истории','В 1850 году это событие почти стерло с лица Земли разрушило большую часть города?', 'Пожар', 'Наводнение', 'Землетрясение');

    let answerVar_2_5_1 = document.getElementById('answerVar_1'),
        answerVar_2_5_2 = document.getElementById('answerVar_2'),
        answerVar_2_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_5 = [answerVar_2_5_1, answerVar_2_5_2, answerVar_2_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_2_1"></li>
        <li id="questionStar_2_2"></li>
        <li id="questionStar_2_3"></li>
        <li id="questionStar_2_4"></li>
        <li id="questionStar_2_5"></li>
    `;

    const questionStar_2_1 = document.getElementById('questionStar_2_1'),
        questionStar_2_2 = document.getElementById('questionStar_2_2'),
        questionStar_2_3 = document.getElementById('questionStar_2_3'),
        questionStar_2_4 = document.getElementById('questionStar_2_4'),
        questionStar_2_5 = document.getElementById('questionStar_2_5')
    ;

    function starsView_5() {
        if (progressCitizenQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressCitizenQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressCitizenQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressCitizenQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_2_5.length; i++) {
        if (answerVarRight_2_5[i] === answerVarRight_2_5[answerWrightNum]) {
            answerVarRight_2_5[i].addEventListener('click', () => {
                let progressCitizenQuest_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2'));
                let progressCitizenQuestSum_2_5 = progressCitizenQuest_2_5 + 1;
                let progressCitizenQuestSum_2 = progressCitizenQuestSum_2_5 + progressCitizenQuest_2;

                localStorage.setItem('progressCitizenQuest_2_5', JSON.stringify(progressCitizenQuestSum_2_5));
                localStorage.setItem('progressCitizenQuest_2', JSON.stringify(progressCitizenQuestSum_2));
                if (progressCitizenQuestSum_2_5 === 1) {
                    questionStar_2_5.className += 'fill';
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