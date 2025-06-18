
if (localStorage.getItem('progressCitizenQuest_3') === null) {
    localStorage.setItem('progressCitizenQuest_3', JSON.stringify(0));
}

// Citizen. Quest 3. Районы, кварталы.
function questionCitizenCat_3_1() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
        progressCitizenQuest_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        progressCitizenQuest_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        progressCitizenQuest_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        progressCitizenQuest_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_3_1') === null) {
        localStorage.setItem('progressCitizenQuest_3_1', JSON.stringify(progressCitizenQuest_3_1));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Районы, кварталы', 'Крепость Самара занимала территорию этого района', 'Самарского', 'Куйбышевского', 'Красноглинского');

    let answerVar_3_1_1 = document.getElementById('answerVar_1'),
        answerVar_3_1_2 = document.getElementById('answerVar_2'),
        answerVar_3_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_1 = [answerVar_3_1_1, answerVar_3_1_2, answerVar_3_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_3_1"></li>
        <li id="questionStar_3_2"></li>
        <li id="questionStar_3_3"></li>
        <li id="questionStar_3_4"></li>
        <li id="questionStar_3_5"></li>
    `;

    const questionStar_3_1 = document.getElementById('questionStar_3_1'),
        questionStar_3_2 = document.getElementById('questionStar_3_2'),
        questionStar_3_3 = document.getElementById('questionStar_3_3'),
        questionStar_3_4 = document.getElementById('questionStar_3_4'),
        questionStar_3_5 = document.getElementById('questionStar_3_5')
    ;

    function starsView_1() {
        if (progressCitizenQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressCitizenQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressCitizenQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
        if (progressCitizenQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_3_1.length; i++) {
        if (answerVarRight_3_1[i] === answerVarRight_3_1[answerWrightNum]) {
            answerVarRight_3_1[i].addEventListener('click', () => {
                let progressCitizenQuest_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3'));
                let progressCitizenQuestSum_3_1 = progressCitizenQuest_3_1 + 1;
                let progressCitizenQuestSum_3 = progressCitizenQuestSum_3_1 + progressCitizenQuest_3;

                localStorage.setItem('progressCitizenQuest_3_1', JSON.stringify(progressCitizenQuestSum_3_1));
                localStorage.setItem('progressCitizenQuest_3', JSON.stringify(progressCitizenQuestSum_3));
                if (progressCitizenQuestSum_3_1 === 1) {
                    questionStar_3_1.className += 'fill';
                }
            });
            console.log(answerVarRight_3_1[answerWrightNum]);
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Верно! Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        questValue_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        questValue_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        questValue_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5'))
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
                if (questValue_3_2 === 1 &&
                    questValue_3_3 === 1 &&
                    questValue_3_4 === 1 &&
                    questValue_3_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_3_2 === 0) {
                    questionCitizenCat_3_2();
                } else if (questValue_3_2 === 1 && questValue_3_3 === 0) {
                    questionCitizenCat_3_3();
                } else if (questValue_3_3 === 1 && questValue_3_4 === 0) {
                    questionCitizenCat_3_4();
                } else if (questValue_3_4 === 1 && questValue_3_5 === 0) {
                    questionCitizenCat_3_5();
                }
            }
        });
        // if (progressCitizenQuest_3_1 === 0 &&
        //     progressCitizenQuest_3_2 === 1 &&
        //     progressCitizenQuest_3_3 === 1 &&
        //     progressCitizenQuest_3_4 === 1 &&
        //     progressCitizenQuest_3_5 === 1) {
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

function questionCitizenCat_3_2() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
        progressCitizenQuest_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        progressCitizenQuest_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        progressCitizenQuest_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        progressCitizenQuest_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_3_2') === null) {
        localStorage.setItem('progressCitizenQuest_3_2', JSON.stringify(progressCitizenQuest_3_2));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Районы, кварталы', 'Какая в Самаре самая длинная улица?', 'Московское шоссе', 'Стара – Загора', 'Карла – Маркса');

    let answerVar_3_2_1 = document.getElementById('answerVar_1'),
        answerVar_3_2_2 = document.getElementById('answerVar_2'),
        answerVar_3_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_2 = [answerVar_3_2_1, answerVar_3_2_2, answerVar_3_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_3_1"></li>
        <li id="questionStar_3_2"></li>
        <li id="questionStar_3_3"></li>
        <li id="questionStar_3_4"></li>
        <li id="questionStar_3_5"></li>
    `;

    const questionStar_3_1 = document.getElementById('questionStar_3_1'),
        questionStar_3_2 = document.getElementById('questionStar_3_2'),
        questionStar_3_3 = document.getElementById('questionStar_3_3'),
        questionStar_3_4 = document.getElementById('questionStar_3_4'),
        questionStar_3_5 = document.getElementById('questionStar_3_5')
    ;

    function starsView_2() {
        if (progressCitizenQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressCitizenQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressCitizenQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
        if (progressCitizenQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_3_2.length; i++) {
        if (answerVarRight_3_2[i] === answerVarRight_3_2[answerWrightNum]) {
            answerVarRight_3_2[i].addEventListener('click', () => {
                let progressCitizenQuest_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3'));
                let progressCitizenQuestSum_3_2 = progressCitizenQuest_3_2 + 1;
                let progressCitizenQuestSum_3 = progressCitizenQuestSum_3_2 + progressCitizenQuest_3;

                localStorage.setItem('progressCitizenQuest_3_2', JSON.stringify(progressCitizenQuestSum_3_2));
                localStorage.setItem('progressCitizenQuest_3', JSON.stringify(progressCitizenQuestSum_3));
                if (progressCitizenQuestSum_3_2 === 1) {
                    questionStar_3_2.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
        questValue_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        questValue_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        questValue_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        questValue_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5'))
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
                if (questValue_3_3 === 1 &&
                    questValue_3_4 === 1 &&
                    questValue_3_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_3_3 === 0) {
                    questionCitizenCat_3_3();
                } else if (questValue_3_3 === 1 && questValue_3_4 === 0) {
                    questionCitizenCat_3_4();
                } else if (questValue_3_4 === 1 && questValue_3_5 === 0) {
                    questionCitizenCat_3_5();
                }
            }
        });
        // if (progressCitizenQuest_3_2 === 0 &&
        //     progressCitizenQuest_3_3 === 1 &&
        //     progressCitizenQuest_3_4 === 1 &&
        //     progressCitizenQuest_3_5 === 1) {
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

function questionCitizenCat_3_3() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
        progressCitizenQuest_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        progressCitizenQuest_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        progressCitizenQuest_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        progressCitizenQuest_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_3_3') === null) {
        localStorage.setItem('progressCitizenQuest_3_3', JSON.stringify(progressCitizenQuest_3_3));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Районы, кварталы','Ветка метро начинается в этом районе', 'Кировский район', 'Октябрьский район', 'Промышленный район');

    let answerVar_3_3_1 = document.getElementById('answerVar_1'),
        answerVar_3_3_2 = document.getElementById('answerVar_2'),
        answerVar_3_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_3 = [answerVar_3_3_1, answerVar_3_3_2, answerVar_3_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_3_1"></li>
        <li id="questionStar_3_2"></li>
        <li id="questionStar_3_3"></li>
        <li id="questionStar_3_4"></li>
        <li id="questionStar_3_5"></li>
    `;

    const questionStar_3_1 = document.getElementById('questionStar_3_1'),
        questionStar_3_2 = document.getElementById('questionStar_3_2'),
        questionStar_3_3 = document.getElementById('questionStar_3_3'),
        questionStar_3_4 = document.getElementById('questionStar_3_4'),
        questionStar_3_5 = document.getElementById('questionStar_3_5')
    ;

    function starsView_3() {
        if (progressCitizenQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressCitizenQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressCitizenQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
        if (progressCitizenQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_3_3.length; i++) {
        if (answerVarRight_3_3[i] === answerVarRight_3_3[answerWrightNum]) {
            answerVarRight_3_3[i].addEventListener('click', () => {
                let progressCitizenQuest_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3'));
                let progressCitizenQuestSum_3_3 = progressCitizenQuest_3_3 + 1;
                let progressCitizenQuestSum_3 = progressCitizenQuestSum_3_3 + progressCitizenQuest_3;

                localStorage.setItem('progressCitizenQuest_3_3', JSON.stringify(progressCitizenQuestSum_3_3));
                localStorage.setItem('progressCitizenQuest_3', JSON.stringify(progressCitizenQuestSum_3));
                if (progressCitizenQuestSum_3_3 === 1) {
                    questionStar_3_3.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Именно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
        questValue_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        questValue_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        questValue_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        questValue_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5'))
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
                if (questValue_3_4 === 1 &&
                    questValue_3_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_3_4 === 0) {
                    questionCitizenCat_3_4();
                } else if (questValue_3_4 === 1 && questValue_3_5 === 0) {
                    questionCitizenCat_3_5();
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

function questionCitizenCat_3_4() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
        progressCitizenQuest_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        progressCitizenQuest_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        progressCitizenQuest_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        progressCitizenQuest_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_3_4') === null) {
        localStorage.setItem('progressCitizenQuest_3_4', JSON.stringify(progressCitizenQuest_3_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Районы, кварталы','Театральная, Красная, Парижских коммунаров…О какой площади идет речь?', 'Площадь Чапаева', 'Площадь Куйбышева', 'Площадь Мочалова');

    let answerVar_3_4_1 = document.getElementById('answerVar_1'),
        answerVar_3_4_2 = document.getElementById('answerVar_2'),
        answerVar_3_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_4 = [answerVar_3_4_1, answerVar_3_4_2, answerVar_3_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_3_1"></li>
        <li id="questionStar_3_2"></li>
        <li id="questionStar_3_3"></li>
        <li id="questionStar_3_4"></li>
        <li id="questionStar_3_5"></li>
    `;

    const questionStar_3_1 = document.getElementById('questionStar_3_1'),
        questionStar_3_2 = document.getElementById('questionStar_3_2'),
        questionStar_3_3 = document.getElementById('questionStar_3_3'),
        questionStar_3_4 = document.getElementById('questionStar_3_4'),
        questionStar_3_5 = document.getElementById('questionStar_3_5')
    ;

    function starsView_4() {
        if (progressCitizenQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressCitizenQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressCitizenQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressCitizenQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_3_4.length; i++) {
        if (answerVarRight_3_4[i] === answerVarRight_3_4[answerWrightNum]) {
            answerVarRight_3_4[i].addEventListener('click', () => {
                let progressCitizenQuest_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3'));
                let progressCitizenQuestSum_3_4 = progressCitizenQuest_3_4 + 1;
                let progressCitizenQuestSum_3 = progressCitizenQuestSum_3_4 + progressCitizenQuest_3;

                localStorage.setItem('progressCitizenQuest_3_4', JSON.stringify(progressCitizenQuestSum_3_4));
                localStorage.setItem('progressCitizenQuest_3', JSON.stringify(progressCitizenQuestSum_3));
                if (progressCitizenQuestSum_3_4 === 1) {
                    questionStar_3_4.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
        questValue_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        questValue_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        questValue_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        questValue_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5'))
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
                if (questValue_3_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_3_5 === 0) {
                    questionCitizenCat_3_5();
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

function questionCitizenCat_3_5() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
        progressCitizenQuest_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        progressCitizenQuest_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        progressCitizenQuest_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        progressCitizenQuest_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_3_4') === null) {
        localStorage.setItem('progressCitizenQuest_3_4', JSON.stringify(progressCitizenQuest_3_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Районы, кварталы','Дворянская, Оборонная... а как эта улица называется в наше время?', 'улица Л. Толстого', 'улица Куйбышева', 'улица Красноармейская');

    let answerVar_3_5_1 = document.getElementById('answerVar_1'),
        answerVar_3_5_2 = document.getElementById('answerVar_2'),
        answerVar_3_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_5 = [answerVar_3_5_1, answerVar_3_5_2, answerVar_3_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_3_1"></li>
        <li id="questionStar_3_2"></li>
        <li id="questionStar_3_3"></li>
        <li id="questionStar_3_4"></li>
        <li id="questionStar_3_5"></li>
    `;

    const questionStar_3_1 = document.getElementById('questionStar_3_1'),
        questionStar_3_2 = document.getElementById('questionStar_3_2'),
        questionStar_3_3 = document.getElementById('questionStar_3_3'),
        questionStar_3_4 = document.getElementById('questionStar_3_4'),
        questionStar_3_5 = document.getElementById('questionStar_3_5')
    ;

    function starsView_5() {
        if (progressCitizenQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressCitizenQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressCitizenQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressCitizenQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_3_5.length; i++) {
        if (answerVarRight_3_5[i] === answerVarRight_3_5[answerWrightNum]) {
            answerVarRight_3_5[i].addEventListener('click', () => {
                let progressCitizenQuest_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3'));
                let progressCitizenQuestSum_3_5 = progressCitizenQuest_3_5 + 1;
                let progressCitizenQuestSum_3 = progressCitizenQuestSum_3_5 + progressCitizenQuest_3;

                localStorage.setItem('progressCitizenQuest_3_5', JSON.stringify(progressCitizenQuestSum_3_5));
                localStorage.setItem('progressCitizenQuest_3', JSON.stringify(progressCitizenQuestSum_3));
                if (progressCitizenQuestSum_3_5 === 1) {
                    questionStar_3_5.className += 'fill';
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