
if (localStorage.getItem('progressCitizenQuest_10') === null) {
    localStorage.setItem('progressCitizenQuest_10', JSON.stringify(0));
}

// Citizen. Quest 10. Очарованные странники
function questionCitizenCat_10_1() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
        progressCitizenQuest_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        progressCitizenQuest_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        progressCitizenQuest_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        progressCitizenQuest_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_10_1') === null) {
        localStorage.setItem('progressCitizenQuest_10_1', JSON.stringify(progressCitizenQuest_10_1));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Очарованные странники', 'В 1378 году «На сим месте будет и город Самара, в котором просияет благочестие и оный город никогда и никем разорен не будет»:', 'Князь Григорий Засекин', 'Митрополит Алексий ', 'Царь Федор Иоаннович');

    let answerVar_10_1_1 = document.getElementById('answerVar_1'),
        answerVar_10_1_2 = document.getElementById('answerVar_2'),
        answerVar_10_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_10_1 = [answerVar_10_1_1, answerVar_10_1_2, answerVar_10_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_10_1"></li>
        <li id="questionStar_10_2"></li>
        <li id="questionStar_10_3"></li>
        <li id="questionStar_10_4"></li>
        <li id="questionStar_10_5"></li>
    `;

    const questionStar_10_1 = document.getElementById('questionStar_10_1'),
        questionStar_10_2 = document.getElementById('questionStar_10_2'),
        questionStar_10_3 = document.getElementById('questionStar_10_3'),
        questionStar_10_4 = document.getElementById('questionStar_10_4'),
        questionStar_10_5 = document.getElementById('questionStar_10_5')
    ;

    function starsView_1() {
        if (progressCitizenQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressCitizenQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressCitizenQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
        if (progressCitizenQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_10_1.length; i++) {
        if (answerVarRight_10_1[i] === answerVarRight_10_1[answerWrightNum]) {
            answerVarRight_10_1[i].addEventListener('click', () => {
                let progressCitizenQuest_10 = JSON.parse(localStorage.getItem('progressCitizenQuest_10'));
                let progressCitizenQuestSum_10_1 = progressCitizenQuest_10_1 + 1;
                let progressCitizenQuestSum_10 = progressCitizenQuestSum_10_1 + progressCitizenQuest_10;

                localStorage.setItem('progressCitizenQuest_10_1', JSON.stringify(progressCitizenQuestSum_10_1));
                localStorage.setItem('progressCitizenQuest_10', JSON.stringify(progressCitizenQuestSum_10));
                if (progressCitizenQuestSum_10_1 === 1) {
                    questionStar_10_1.className += 'fill';
                }
            });
            console.log(answerVarRight_10_1[answerWrightNum]);
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Верно! Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        questValue_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        questValue_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        questValue_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5'))
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
                if (questValue_10_2 === 1 &&
                    questValue_10_3 === 1 &&
                    questValue_10_4 === 1 &&
                    questValue_10_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_10_2 === 0) {
                    questionCitizenCat_10_2();
                } else if (questValue_10_2 === 1 && questValue_10_3 === 0) {
                    questionCitizenCat_10_3();
                } else if (questValue_10_3 === 1 && questValue_10_4 === 0) {
                    questionCitizenCat_10_4();
                } else if (questValue_10_4 === 1 && questValue_10_5 === 0) {
                    questionCitizenCat_10_5();
                }
            }
        });
        // if (progressCitizenQuest_10_1 === 0 &&
        //     progressCitizenQuest_10_2 === 1 &&
        //     progressCitizenQuest_10_3 === 1 &&
        //     progressCitizenQuest_10_4 === 1 &&
        //     progressCitizenQuest_10_5 === 1) {
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

function questionCitizenCat_10_2() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressCitizenQuest_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
        progressCitizenQuest_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        progressCitizenQuest_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        progressCitizenQuest_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        progressCitizenQuest_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_10_2') === null) {
        localStorage.setItem('progressCitizenQuest_10_2', JSON.stringify(progressCitizenQuest_10_2));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Очарованные странники', '«Самара лучший, греховнейший, элегантнейший и благоустроеннейший кусок Москвы, выхваченный и пересаженный на берега Волги»', 'Алексей Толстой', 'Максим Горький', 'Борис Пастернак');

    let answerVar_10_2_1 = document.getElementById('answerVar_1'),
        answerVar_10_2_2 = document.getElementById('answerVar_2'),
        answerVar_10_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_10_2 = [answerVar_10_2_1, answerVar_10_2_2, answerVar_10_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_10_1"></li>
        <li id="questionStar_10_2"></li>
        <li id="questionStar_10_3"></li>
        <li id="questionStar_10_4"></li>
        <li id="questionStar_10_5"></li>
    `;

    const questionStar_10_1 = document.getElementById('questionStar_10_1'),
        questionStar_10_2 = document.getElementById('questionStar_10_2'),
        questionStar_10_3 = document.getElementById('questionStar_10_3'),
        questionStar_10_4 = document.getElementById('questionStar_10_4'),
        questionStar_10_5 = document.getElementById('questionStar_10_5')
    ;

    function starsView_2() {
        if (progressCitizenQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressCitizenQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressCitizenQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
        if (progressCitizenQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_10_2.length; i++) {
        if (answerVarRight_10_2[i] === answerVarRight_10_2[answerWrightNum]) {
            answerVarRight_10_2[i].addEventListener('click', () => {
                let progressCitizenQuest_10 = JSON.parse(localStorage.getItem('progressCitizenQuest_10'));
                let progressCitizenQuestSum_10_2 = progressCitizenQuest_10_2 + 1;
                let progressCitizenQuestSum_10 = progressCitizenQuestSum_10_2 + progressCitizenQuest_10;

                localStorage.setItem('progressCitizenQuest_10_2', JSON.stringify(progressCitizenQuestSum_10_2));
                localStorage.setItem('progressCitizenQuest_10', JSON.stringify(progressCitizenQuestSum_10));
                if (progressCitizenQuestSum_10_2 === 1) {
                    questionStar_10_2.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
        questValue_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        questValue_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        questValue_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        questValue_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5'))
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
                if (questValue_10_3 === 1 &&
                    questValue_10_4 === 1 &&
                    questValue_10_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_10_3 === 0) {
                    questionCitizenCat_10_3();
                } else if (questValue_10_3 === 1 && questValue_10_4 === 0) {
                    questionCitizenCat_10_4();
                } else if (questValue_10_4 === 1 && questValue_10_5 === 0) {
                    questionCitizenCat_10_5();
                }
            }
        });
        // if (progressCitizenQuest_10_2 === 0 &&
        //     progressCitizenQuest_10_3 === 1 &&
        //     progressCitizenQuest_10_4 === 1 &&
        //     progressCitizenQuest_10_5 === 1) {
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

function questionCitizenCat_10_3() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
        progressCitizenQuest_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        progressCitizenQuest_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        progressCitizenQuest_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        progressCitizenQuest_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_10_3') === null) {
        localStorage.setItem('progressCitizenQuest_10_3', JSON.stringify(progressCitizenQuest_10_3));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Очарованные странники','«Самара – город хоть куда!»', 'Петр Чайковский', 'Сергей Есенин', 'Владимир Маяковский');

    let answerVar_10_3_1 = document.getElementById('answerVar_1'),
        answerVar_10_3_2 = document.getElementById('answerVar_2'),
        answerVar_10_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_10_3 = [answerVar_10_3_1, answerVar_10_3_2, answerVar_10_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_10_1"></li>
        <li id="questionStar_10_2"></li>
        <li id="questionStar_10_3"></li>
        <li id="questionStar_10_4"></li>
        <li id="questionStar_10_5"></li>
    `;

    const questionStar_10_1 = document.getElementById('questionStar_10_1'),
        questionStar_10_2 = document.getElementById('questionStar_10_2'),
        questionStar_10_3 = document.getElementById('questionStar_10_3'),
        questionStar_10_4 = document.getElementById('questionStar_10_4'),
        questionStar_10_5 = document.getElementById('questionStar_10_5')
    ;

    function starsView_3() {
        if (progressCitizenQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressCitizenQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressCitizenQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
        if (progressCitizenQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_10_3.length; i++) {
        if (answerVarRight_10_3[i] === answerVarRight_10_3[answerWrightNum]) {
            answerVarRight_10_3[i].addEventListener('click', () => {
                let progressCitizenQuest_10 = JSON.parse(localStorage.getItem('progressCitizenQuest_10'));
                let progressCitizenQuestSum_10_3 = progressCitizenQuest_10_3 + 1;
                let progressCitizenQuestSum_10 = progressCitizenQuestSum_10_3 + progressCitizenQuest_10;

                localStorage.setItem('progressCitizenQuest_10_3', JSON.stringify(progressCitizenQuestSum_10_3));
                localStorage.setItem('progressCitizenQuest_10', JSON.stringify(progressCitizenQuestSum_10));
                if (progressCitizenQuestSum_10_3 === 1) {
                    questionStar_10_3.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Именно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
        questValue_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        questValue_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        questValue_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        questValue_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5'))
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
                if (questValue_10_4 === 1 &&
                    questValue_10_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_10_4 === 0) {
                    questionCitizenCat_10_4();
                } else if (questValue_10_4 === 1 && questValue_10_5 === 0) {
                    questionCitizenCat_10_5();
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

function questionCitizenCat_10_4() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
        progressCitizenQuest_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        progressCitizenQuest_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        progressCitizenQuest_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        progressCitizenQuest_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_10_4') === null) {
        localStorage.setItem('progressCitizenQuest_10_4', JSON.stringify(progressCitizenQuest_10_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Очарованные странники','«Город большой, купеческий, жизнь благочестивая, семейная, без удовольствия, нравы жестокие»', 'Александр Островский', 'Лев Толстой', 'Василий Немирович–Данченко');

    let answerVar_10_4_1 = document.getElementById('answerVar_1'),
        answerVar_10_4_2 = document.getElementById('answerVar_2'),
        answerVar_10_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_10_4 = [answerVar_10_4_1, answerVar_10_4_2, answerVar_10_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_10_1"></li>
        <li id="questionStar_10_2"></li>
        <li id="questionStar_10_3"></li>
        <li id="questionStar_10_4"></li>
        <li id="questionStar_10_5"></li>
    `;

    const questionStar_10_1 = document.getElementById('questionStar_10_1'),
        questionStar_10_2 = document.getElementById('questionStar_10_2'),
        questionStar_10_3 = document.getElementById('questionStar_10_3'),
        questionStar_10_4 = document.getElementById('questionStar_10_4'),
        questionStar_10_5 = document.getElementById('questionStar_10_5')
    ;

    function starsView_4() {
        if (progressCitizenQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressCitizenQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressCitizenQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressCitizenQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_10_4.length; i++) {
        if (answerVarRight_10_4[i] === answerVarRight_10_4[answerWrightNum]) {
            answerVarRight_10_4[i].addEventListener('click', () => {
                let progressCitizenQuest_10 = JSON.parse(localStorage.getItem('progressCitizenQuest_10'));
                let progressCitizenQuestSum_10_4 = progressCitizenQuest_10_4 + 1;
                let progressCitizenQuestSum_10 = progressCitizenQuestSum_10_4 + progressCitizenQuest_10;

                localStorage.setItem('progressCitizenQuest_10_4', JSON.stringify(progressCitizenQuestSum_10_4));
                localStorage.setItem('progressCitizenQuest_10', JSON.stringify(progressCitizenQuestSum_10));
                if (progressCitizenQuestSum_10_4 === 1) {
                    questionStar_10_4.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
        questValue_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        questValue_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        questValue_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        questValue_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5'))
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
                if (questValue_10_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_10_5 === 0) {
                    questionCitizenCat_10_5();
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

function questionCitizenCat_10_5() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
        progressCitizenQuest_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        progressCitizenQuest_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        progressCitizenQuest_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        progressCitizenQuest_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_10_4') === null) {
        localStorage.setItem('progressCitizenQuest_10_4', JSON.stringify(progressCitizenQuest_10_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Очарованные странники','«Самара – город будущего!»', 'Василий Немирович–Данченко', 'Владимир Высоцкий', 'Михаил Челышев');

    let answerVar_10_5_1 = document.getElementById('answerVar_1'),
        answerVar_10_5_2 = document.getElementById('answerVar_2'),
        answerVar_10_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_10_5 = [answerVar_10_5_1, answerVar_10_5_2, answerVar_10_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_10_1"></li>
        <li id="questionStar_10_2"></li>
        <li id="questionStar_10_3"></li>
        <li id="questionStar_10_4"></li>
        <li id="questionStar_10_5"></li>
    `;

    const questionStar_10_1 = document.getElementById('questionStar_10_1'),
        questionStar_10_2 = document.getElementById('questionStar_10_2'),
        questionStar_10_3 = document.getElementById('questionStar_10_3'),
        questionStar_10_4 = document.getElementById('questionStar_10_4'),
        questionStar_10_5 = document.getElementById('questionStar_10_5')
    ;

    function starsView_5() {
        if (progressCitizenQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressCitizenQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressCitizenQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
        if (progressCitizenQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_10_5.length; i++) {
        if (answerVarRight_10_5[i] === answerVarRight_10_5[answerWrightNum]) {
            answerVarRight_10_5[i].addEventListener('click', () => {
                let progressCitizenQuest_10 = JSON.parse(localStorage.getItem('progressCitizenQuest_10'));
                let progressCitizenQuestSum_10_5 = progressCitizenQuest_10_5 + 1;
                let progressCitizenQuestSum_10 = progressCitizenQuestSum_10_5 + progressCitizenQuest_10;

                localStorage.setItem('progressCitizenQuest_10_5', JSON.stringify(progressCitizenQuestSum_10_5));
                localStorage.setItem('progressCitizenQuest_10', JSON.stringify(progressCitizenQuestSum_10));
                if (progressCitizenQuestSum_10_5 === 1) {
                    questionStar_10_5.className += 'fill';
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