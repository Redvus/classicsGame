
if (localStorage.getItem('progressCitizenQuest_9') === null) {
    localStorage.setItem('progressCitizenQuest_9', JSON.stringify(0));
}

// Citizen. Quest 9. Литературная Самара
function questionCitizenCat_9_1() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
        progressCitizenQuest_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        progressCitizenQuest_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        progressCitizenQuest_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        progressCitizenQuest_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_9_1') === null) {
        localStorage.setItem('progressCitizenQuest_9_1', JSON.stringify(progressCitizenQuest_9_1));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Литературная Самара', '«Похождения бравого солдата Швейка» принадлежат перу...', 'Юлиусу Фучику', 'Ярославу Гашеку', 'Хведеру Уяру');

    let answerVar_9_1_1 = document.getElementById('answerVar_1'),
        answerVar_9_1_2 = document.getElementById('answerVar_2'),
        answerVar_9_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_9_1 = [answerVar_9_1_1, answerVar_9_1_2, answerVar_9_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_9_1"></li>
        <li id="questionStar_9_2"></li>
        <li id="questionStar_9_3"></li>
        <li id="questionStar_9_4"></li>
        <li id="questionStar_9_5"></li>
    `;

    const questionStar_9_1 = document.getElementById('questionStar_9_1'),
        questionStar_9_2 = document.getElementById('questionStar_9_2'),
        questionStar_9_3 = document.getElementById('questionStar_9_3'),
        questionStar_9_4 = document.getElementById('questionStar_9_4'),
        questionStar_9_5 = document.getElementById('questionStar_9_5')
    ;

    function starsView_1() {
        if (progressCitizenQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressCitizenQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressCitizenQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
        if (progressCitizenQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_9_1.length; i++) {
        if (answerVarRight_9_1[i] === answerVarRight_9_1[answerWrightNum]) {
            answerVarRight_9_1[i].addEventListener('click', () => {
                let progressCitizenQuest_9 = JSON.parse(localStorage.getItem('progressCitizenQuest_9'));
                let progressCitizenQuestSum_9_1 = progressCitizenQuest_9_1 + 1;
                let progressCitizenQuestSum_9 = progressCitizenQuestSum_9_1 + progressCitizenQuest_9;

                localStorage.setItem('progressCitizenQuest_9_1', JSON.stringify(progressCitizenQuestSum_9_1));
                localStorage.setItem('progressCitizenQuest_9', JSON.stringify(progressCitizenQuestSum_9));
                if (progressCitizenQuestSum_9_1 === 1) {
                    questionStar_9_1.className += 'fill';
                }
            });
            console.log(answerVarRight_9_1[answerWrightNum]);
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Верно! Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        questValue_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        questValue_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        questValue_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5'))
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
                if (questValue_9_2 === 1 &&
                    questValue_9_3 === 1 &&
                    questValue_9_4 === 1 &&
                    questValue_9_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_9_2 === 0) {
                    questionCitizenCat_9_2();
                } else if (questValue_9_2 === 1 && questValue_9_3 === 0) {
                    questionCitizenCat_9_3();
                } else if (questValue_9_3 === 1 && questValue_9_4 === 0) {
                    questionCitizenCat_9_4();
                } else if (questValue_9_4 === 1 && questValue_9_5 === 0) {
                    questionCitizenCat_9_5();
                }
            }
        });
        // if (progressCitizenQuest_9_1 === 0 &&
        //     progressCitizenQuest_9_2 === 1 &&
        //     progressCitizenQuest_9_3 === 1 &&
        //     progressCitizenQuest_9_4 === 1 &&
        //     progressCitizenQuest_9_5 === 1) {
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

function questionCitizenCat_9_2() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
        progressCitizenQuest_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        progressCitizenQuest_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        progressCitizenQuest_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        progressCitizenQuest_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_9_2') === null) {
        localStorage.setItem('progressCitizenQuest_9_2', JSON.stringify(progressCitizenQuest_9_2));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Литературная Самара', 'В Самаре Максим Горький любил отдыхать...', 'На набережной', 'В Струковском саду', 'В Загородном парке');

    let answerVar_9_2_1 = document.getElementById('answerVar_1'),
        answerVar_9_2_2 = document.getElementById('answerVar_2'),
        answerVar_9_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_9_2 = [answerVar_9_2_1, answerVar_9_2_2, answerVar_9_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_9_1"></li>
        <li id="questionStar_9_2"></li>
        <li id="questionStar_9_3"></li>
        <li id="questionStar_9_4"></li>
        <li id="questionStar_9_5"></li>
    `;

    const questionStar_9_1 = document.getElementById('questionStar_9_1'),
        questionStar_9_2 = document.getElementById('questionStar_9_2'),
        questionStar_9_3 = document.getElementById('questionStar_9_3'),
        questionStar_9_4 = document.getElementById('questionStar_9_4'),
        questionStar_9_5 = document.getElementById('questionStar_9_5')
    ;

    function starsView_2() {
        if (progressCitizenQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressCitizenQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressCitizenQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
        if (progressCitizenQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_9_2.length; i++) {
        if (answerVarRight_9_2[i] === answerVarRight_9_2[answerWrightNum]) {
            answerVarRight_9_2[i].addEventListener('click', () => {
                let progressCitizenQuest_9 = JSON.parse(localStorage.getItem('progressCitizenQuest_9'));
                let progressCitizenQuestSum_9_2 = progressCitizenQuest_9_2 + 1;
                let progressCitizenQuestSum_9 = progressCitizenQuestSum_9_2 + progressCitizenQuest_9;

                localStorage.setItem('progressCitizenQuest_9_2', JSON.stringify(progressCitizenQuestSum_9_2));
                localStorage.setItem('progressCitizenQuest_9', JSON.stringify(progressCitizenQuestSum_9));
                if (progressCitizenQuestSum_9_2 === 1) {
                    questionStar_9_2.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
        questValue_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        questValue_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        questValue_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        questValue_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5'))
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
                if (questValue_9_3 === 1 &&
                    questValue_9_4 === 1 &&
                    questValue_9_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_9_3 === 0) {
                    questionCitizenCat_9_3();
                } else if (questValue_9_3 === 1 && questValue_9_4 === 0) {
                    questionCitizenCat_9_4();
                } else if (questValue_9_4 === 1 && questValue_9_5 === 0) {
                    questionCitizenCat_9_5();
                }
            }
        });
        // if (progressCitizenQuest_9_2 === 0 &&
        //     progressCitizenQuest_9_3 === 1 &&
        //     progressCitizenQuest_9_4 === 1 &&
        //     progressCitizenQuest_9_5 === 1) {
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

function questionCitizenCat_9_3() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
        progressCitizenQuest_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        progressCitizenQuest_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        progressCitizenQuest_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        progressCitizenQuest_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_9_3') === null) {
        localStorage.setItem('progressCitizenQuest_9_3', JSON.stringify(progressCitizenQuest_9_3));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Литературная Самара','Самарский литературный журнал...', '«Русский мир»', '«Русское эхо»', '«Русское слово»');

    let answerVar_9_3_1 = document.getElementById('answerVar_1'),
        answerVar_9_3_2 = document.getElementById('answerVar_2'),
        answerVar_9_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_9_3 = [answerVar_9_3_1, answerVar_9_3_2, answerVar_9_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_9_1"></li>
        <li id="questionStar_9_2"></li>
        <li id="questionStar_9_3"></li>
        <li id="questionStar_9_4"></li>
        <li id="questionStar_9_5"></li>
    `;

    const questionStar_9_1 = document.getElementById('questionStar_9_1'),
        questionStar_9_2 = document.getElementById('questionStar_9_2'),
        questionStar_9_3 = document.getElementById('questionStar_9_3'),
        questionStar_9_4 = document.getElementById('questionStar_9_4'),
        questionStar_9_5 = document.getElementById('questionStar_9_5')
    ;

    function starsView_3() {
        if (progressCitizenQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressCitizenQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressCitizenQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
        if (progressCitizenQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_9_3.length; i++) {
        if (answerVarRight_9_3[i] === answerVarRight_9_3[answerWrightNum]) {
            answerVarRight_9_3[i].addEventListener('click', () => {
                let progressCitizenQuest_9 = JSON.parse(localStorage.getItem('progressCitizenQuest_9'));
                let progressCitizenQuestSum_9_3 = progressCitizenQuest_9_3 + 1;
                let progressCitizenQuestSum_9 = progressCitizenQuestSum_9_3 + progressCitizenQuest_9;

                localStorage.setItem('progressCitizenQuest_9_3', JSON.stringify(progressCitizenQuestSum_9_3));
                localStorage.setItem('progressCitizenQuest_9', JSON.stringify(progressCitizenQuestSum_9));
                if (progressCitizenQuestSum_9_3 === 1) {
                    questionStar_9_3.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Именно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
        questValue_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        questValue_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        questValue_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        questValue_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5'))
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
                if (questValue_9_4 === 1 &&
                    questValue_9_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_9_4 === 0) {
                    questionCitizenCat_9_4();
                } else if (questValue_9_4 === 1 && questValue_9_5 === 0) {
                    questionCitizenCat_9_5();
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

function questionCitizenCat_9_4() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
        progressCitizenQuest_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        progressCitizenQuest_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        progressCitizenQuest_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        progressCitizenQuest_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_9_4') === null) {
        localStorage.setItem('progressCitizenQuest_9_4', JSON.stringify(progressCitizenQuest_9_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Литературная Самара','Известный русский писатель, наш земляк. Автор трилогии о гражданской войне.', 'Лев Николаевич Толстой', 'Алексей Николаевич Толстой', 'Валентин Григорьевич Распутин');

    let answerVar_9_4_1 = document.getElementById('answerVar_1'),
        answerVar_9_4_2 = document.getElementById('answerVar_2'),
        answerVar_9_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_9_4 = [answerVar_9_4_1, answerVar_9_4_2, answerVar_9_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_9_1"></li>
        <li id="questionStar_9_2"></li>
        <li id="questionStar_9_3"></li>
        <li id="questionStar_9_4"></li>
        <li id="questionStar_9_5"></li>
    `;

    const questionStar_9_1 = document.getElementById('questionStar_9_1'),
        questionStar_9_2 = document.getElementById('questionStar_9_2'),
        questionStar_9_3 = document.getElementById('questionStar_9_3'),
        questionStar_9_4 = document.getElementById('questionStar_9_4'),
        questionStar_9_5 = document.getElementById('questionStar_9_5')
    ;

    function starsView_4() {
        if (progressCitizenQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressCitizenQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressCitizenQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressCitizenQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_9_4.length; i++) {
        if (answerVarRight_9_4[i] === answerVarRight_9_4[answerWrightNum]) {
            answerVarRight_9_4[i].addEventListener('click', () => {
                let progressCitizenQuest_9 = JSON.parse(localStorage.getItem('progressCitizenQuest_9'));
                let progressCitizenQuestSum_9_4 = progressCitizenQuest_9_4 + 1;
                let progressCitizenQuestSum_9 = progressCitizenQuestSum_9_4 + progressCitizenQuest_9;

                localStorage.setItem('progressCitizenQuest_9_4', JSON.stringify(progressCitizenQuestSum_9_4));
                localStorage.setItem('progressCitizenQuest_9', JSON.stringify(progressCitizenQuestSum_9));
                if (progressCitizenQuestSum_9_4 === 1) {
                    questionStar_9_4.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
        questValue_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        questValue_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        questValue_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        questValue_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5'))
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
                if (questValue_9_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_9_5 === 0) {
                    questionCitizenCat_9_5();
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

function questionCitizenCat_9_5() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
        progressCitizenQuest_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        progressCitizenQuest_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        progressCitizenQuest_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        progressCitizenQuest_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_9_4') === null) {
        localStorage.setItem('progressCitizenQuest_9_4', JSON.stringify(progressCitizenQuest_9_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Литературная Самара','От чего Лев Николаевич Толстой спас Самару?', 'От голода', 'От чумы', 'От пожара');

    let answerVar_9_5_1 = document.getElementById('answerVar_1'),
        answerVar_9_5_2 = document.getElementById('answerVar_2'),
        answerVar_9_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_9_5 = [answerVar_9_5_1, answerVar_9_5_2, answerVar_9_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_9_1"></li>
        <li id="questionStar_9_2"></li>
        <li id="questionStar_9_3"></li>
        <li id="questionStar_9_4"></li>
        <li id="questionStar_9_5"></li>
    `;

    const questionStar_9_1 = document.getElementById('questionStar_9_1'),
        questionStar_9_2 = document.getElementById('questionStar_9_2'),
        questionStar_9_3 = document.getElementById('questionStar_9_3'),
        questionStar_9_4 = document.getElementById('questionStar_9_4'),
        questionStar_9_5 = document.getElementById('questionStar_9_5')
    ;

    function starsView_5() {
        if (progressCitizenQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressCitizenQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressCitizenQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
        if (progressCitizenQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_9_5.length; i++) {
        if (answerVarRight_9_5[i] === answerVarRight_9_5[answerWrightNum]) {
            answerVarRight_9_5[i].addEventListener('click', () => {
                let progressCitizenQuest_9 = JSON.parse(localStorage.getItem('progressCitizenQuest_9'));
                let progressCitizenQuestSum_9_5 = progressCitizenQuest_9_5 + 1;
                let progressCitizenQuestSum_9 = progressCitizenQuestSum_9_5 + progressCitizenQuest_9;

                localStorage.setItem('progressCitizenQuest_9_5', JSON.stringify(progressCitizenQuestSum_9_5));
                localStorage.setItem('progressCitizenQuest_9', JSON.stringify(progressCitizenQuestSum_9));
                if (progressCitizenQuestSum_9_5 === 1) {
                    questionStar_9_5.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Да верно!');

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