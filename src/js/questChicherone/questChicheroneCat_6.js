
if (localStorage.getItem('progressChicheroneQuest_6') === null) {
    localStorage.setItem('progressChicheroneQuest_6', JSON.stringify(0));
}

// Chicherone. Quest 6
function questionChicheroneCat_6_1() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_6_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_1')),
        progressChicheroneQuest_6_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
        progressChicheroneQuest_6_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3')),
        progressChicheroneQuest_6_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_4')),
        progressChicheroneQuest_6_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_6_1') === null) {
        localStorage.setItem('progressChicheroneQuest_6_1', JSON.stringify(progressChicheroneQuest_6_1));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Создано в Самаре', 'Самарская метеорологическая служба официально начала свою работу...', 'В 1886 году', 'В 1900 году', 'В 1882 году');

    let answerVar_6_1_1 = document.getElementById('answerVar_1'),
        answerVar_6_1_2 = document.getElementById('answerVar_2'),
        answerVar_6_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_1 = [answerVar_6_1_1, answerVar_6_1_2, answerVar_6_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_6_1"></li>
        <li id="questionStar_6_2"></li>
        <li id="questionStar_6_3"></li>
        <li id="questionStar_6_4"></li>
        <li id="questionStar_6_5"></li>
    `;

    const questionStar_6_1 = document.getElementById('questionStar_6_1'),
        questionStar_6_2 = document.getElementById('questionStar_6_2'),
        questionStar_6_3 = document.getElementById('questionStar_6_3'),
        questionStar_6_4 = document.getElementById('questionStar_6_4'),
        questionStar_6_5 = document.getElementById('questionStar_6_5')
    ;

    function starsView_1() {
        if (progressChicheroneQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressChicheroneQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressChicheroneQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
        if (progressChicheroneQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_6_1.length; i++) {
        if (answerVarRight_6_1[i] === answerVarRight_6_1[answerWrightNum]) {
            answerVarRight_6_1[i].addEventListener('click', () => {
                let progressChicheroneQuest_6 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6'));
                let progressChicheroneQuestSum_6_1 = progressChicheroneQuest_6_1 + 1;
                let progressChicheroneQuestSum_6 = progressChicheroneQuestSum_6_1 + progressChicheroneQuest_6;

                localStorage.setItem('progressChicheroneQuest_6_1', JSON.stringify(progressChicheroneQuestSum_6_1));
                localStorage.setItem('progressChicheroneQuest_6', JSON.stringify(progressChicheroneQuestSum_6));
                if (progressChicheroneQuestSum_6_1 === 1) {
                    questionStar_6_1.className += 'fill';
                }
            });
            console.log(answerVarRight_6_1[answerWrightNum]);
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_5'))
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
                    questionChicheroneCat_6_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChicheroneCat_6_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_6_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_6_5();
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

function questionChicheroneCat_6_2() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_6_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_1')),
        progressChicheroneQuest_6_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
        progressChicheroneQuest_6_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3')),
        progressChicheroneQuest_6_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_4')),
        progressChicheroneQuest_6_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_6_2') === null) {
        localStorage.setItem('progressChicheroneQuest_6_2', JSON.stringify(progressChicheroneQuest_6_2));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Создано в Самаре', 'Телефонный автоответчик гидрометеослужбы передавал...', 'Пение птиц', 'Прогноз погоды', 'Телефоны диспетчеров');

    let answerVar_6_2_1 = document.getElementById('answerVar_1'),
        answerVar_6_2_2 = document.getElementById('answerVar_2'),
        answerVar_6_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_2 = [answerVar_6_2_1, answerVar_6_2_2, answerVar_6_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_6_1"></li>
        <li id="questionStar_6_2"></li>
        <li id="questionStar_6_3"></li>
        <li id="questionStar_6_4"></li>
        <li id="questionStar_6_5"></li>
    `;

    const questionStar_6_1 = document.getElementById('questionStar_6_1'),
        questionStar_6_2 = document.getElementById('questionStar_6_2'),
        questionStar_6_3 = document.getElementById('questionStar_6_3'),
        questionStar_6_4 = document.getElementById('questionStar_6_4'),
        questionStar_6_5 = document.getElementById('questionStar_6_5')
    ;

    function starsView_2() {
        if (progressChicheroneQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressChicheroneQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressChicheroneQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
        if (progressChicheroneQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_6_2.length; i++) {
        if (answerVarRight_6_2[i] === answerVarRight_6_2[answerWrightNum]) {
            answerVarRight_6_2[i].addEventListener('click', () => {
                let progressChicheroneQuest_6 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6'));
                let progressChicheroneQuestSum_6_2 = progressChicheroneQuest_6_2 + 1;
                let progressChicheroneQuestSum_6 = progressChicheroneQuestSum_6_2 + progressChicheroneQuest_6;

                localStorage.setItem('progressChicheroneQuest_6_2', JSON.stringify(progressChicheroneQuestSum_6_2));
                localStorage.setItem('progressChicheroneQuest_6', JSON.stringify(progressChicheroneQuestSum_6));
                if (progressChicheroneQuestSum_6_2 === 1) {
                    questionStar_6_2.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_5'))
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
                    questionChicheroneCat_6_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_6_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_6_5();
                }
            }
        });
        // if (progressChicheroneQuest_6_2 === 0 &&
        //     progressChicheroneQuest_6_3 === 1 &&
        //     progressChicheroneQuest_6_4 === 1 &&
        //     progressChicheroneQuest_6_5 === 1) {
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

function questionChicheroneCat_6_3() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_6_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_1')),
        progressChicheroneQuest_6_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
        progressChicheroneQuest_6_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3')),
        progressChicheroneQuest_6_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_4')),
        progressChicheroneQuest_6_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_6_3') === null) {
        localStorage.setItem('progressChicheroneQuest_6_3', JSON.stringify(progressChicheroneQuest_6_3));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Создано в Самаре','Куйбышевский завод киноаппаратуры', 'КИНАП', 'ЭКРАН', 'КАТЭК');

    let answerVar_6_3_1 = document.getElementById('answerVar_1'),
        answerVar_6_3_2 = document.getElementById('answerVar_2'),
        answerVar_6_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_3 = [answerVar_6_3_1, answerVar_6_3_2, answerVar_6_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_6_1"></li>
        <li id="questionStar_6_2"></li>
        <li id="questionStar_6_3"></li>
        <li id="questionStar_6_4"></li>
        <li id="questionStar_6_5"></li>
    `;

    const questionStar_6_1 = document.getElementById('questionStar_6_1'),
        questionStar_6_2 = document.getElementById('questionStar_6_2'),
        questionStar_6_3 = document.getElementById('questionStar_6_3'),
        questionStar_6_4 = document.getElementById('questionStar_6_4'),
        questionStar_6_5 = document.getElementById('questionStar_6_5')
    ;

    function starsView_3() {
        if (progressChicheroneQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressChicheroneQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressChicheroneQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
        if (progressChicheroneQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_6_3.length; i++) {
        if (answerVarRight_6_3[i] === answerVarRight_6_3[answerWrightNum]) {
            answerVarRight_6_3[i].addEventListener('click', () => {
                let progressChicheroneQuest_6 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6'));
                let progressChicheroneQuestSum_6_3 = progressChicheroneQuest_6_3 + 1;
                let progressChicheroneQuestSum_6 = progressChicheroneQuestSum_6_3 + progressChicheroneQuest_6;

                localStorage.setItem('progressChicheroneQuest_6_3', JSON.stringify(progressChicheroneQuestSum_6_3));
                localStorage.setItem('progressChicheroneQuest_6', JSON.stringify(progressChicheroneQuestSum_6));
                if (progressChicheroneQuestSum_6_3 === 1) {
                    questionStar_6_3.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Вы молодец!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_5'))
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
                    questionChicheroneCat_6_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_6_5();
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

function questionChicheroneCat_6_4() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChicheroneQuest_6_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_1')),
        progressChicheroneQuest_6_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
        progressChicheroneQuest_6_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3')),
        progressChicheroneQuest_6_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_4')),
        progressChicheroneQuest_6_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_6_4') === null) {
        localStorage.setItem('progressChicheroneQuest_6_4', JSON.stringify(progressChicheroneQuest_6_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Создано в Самаре','Эти самолеты выпускали в Куйбышеве в годы ВОВ', 'МИГ', 'ЯК', 'ИЛ');

    let answerVar_6_4_1 = document.getElementById('answerVar_1'),
        answerVar_6_4_2 = document.getElementById('answerVar_2'),
        answerVar_6_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_4 = [answerVar_6_4_1, answerVar_6_4_2, answerVar_6_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_6_1"></li>
        <li id="questionStar_6_2"></li>
        <li id="questionStar_6_3"></li>
        <li id="questionStar_6_4"></li>
        <li id="questionStar_6_5"></li>
    `;

    const questionStar_6_1 = document.getElementById('questionStar_6_1'),
        questionStar_6_2 = document.getElementById('questionStar_6_2'),
        questionStar_6_3 = document.getElementById('questionStar_6_3'),
        questionStar_6_4 = document.getElementById('questionStar_6_4'),
        questionStar_6_5 = document.getElementById('questionStar_6_5')
    ;

    function starsView_4() {
        if (progressChicheroneQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressChicheroneQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressChicheroneQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressChicheroneQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_6_4.length; i++) {
        if (answerVarRight_6_4[i] === answerVarRight_6_4[answerWrightNum]) {
            answerVarRight_6_4[i].addEventListener('click', () => {
                let progressChicheroneQuest_6 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6'));
                let progressChicheroneQuestSum_6_4 = progressChicheroneQuest_6_4 + 1;
                let progressChicheroneQuestSum_6 = progressChicheroneQuestSum_6_4 + progressChicheroneQuest_6;

                localStorage.setItem('progressChicheroneQuest_6_4', JSON.stringify(progressChicheroneQuestSum_6_4));
                localStorage.setItem('progressChicheroneQuest_6', JSON.stringify(progressChicheroneQuestSum_6));
                if (progressChicheroneQuestSum_6_4 === 1) {
                    questionStar_6_4.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_5'))
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
                    questionChicheroneCat_6_5();
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

function questionChicheroneCat_6_5() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_6_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_1')),
        progressChicheroneQuest_6_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
        progressChicheroneQuest_6_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3')),
        progressChicheroneQuest_6_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_4')),
        progressChicheroneQuest_6_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_6_4') === null) {
        localStorage.setItem('progressChicheroneQuest_6_4', JSON.stringify(progressChicheroneQuest_6_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Создано в Самаре','Куйбышевская область получила название «Второе Баку» из–за...', 'Нефтяных месторождений', 'Теплого климата', 'Природного ландшафта');

    let answerVar_6_5_1 = document.getElementById('answerVar_1'),
        answerVar_6_5_2 = document.getElementById('answerVar_2'),
        answerVar_6_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_5 = [answerVar_6_5_1, answerVar_6_5_2, answerVar_6_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_6_1"></li>
        <li id="questionStar_6_2"></li>
        <li id="questionStar_6_3"></li>
        <li id="questionStar_6_4"></li>
        <li id="questionStar_6_5"></li>
    `;

    const questionStar_6_1 = document.getElementById('questionStar_6_1'),
        questionStar_6_2 = document.getElementById('questionStar_6_2'),
        questionStar_6_3 = document.getElementById('questionStar_6_3'),
        questionStar_6_4 = document.getElementById('questionStar_6_4'),
        questionStar_6_5 = document.getElementById('questionStar_6_5')
    ;

    function starsView_5() {
        if (progressChicheroneQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressChicheroneQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressChicheroneQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressChicheroneQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_6_5.length; i++) {
        if (answerVarRight_6_5[i] === answerVarRight_6_5[answerWrightNum]) {
            answerVarRight_6_5[i].addEventListener('click', () => {
                let progressChicheroneQuest_6 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6'));
                let progressChicheroneQuestSum_6_5 = progressChicheroneQuest_6_5 + 1;
                let progressChicheroneQuestSum_6 = progressChicheroneQuestSum_6_5 + progressChicheroneQuest_6;

                localStorage.setItem('progressChicheroneQuest_6_5', JSON.stringify(progressChicheroneQuestSum_6_5));
                localStorage.setItem('progressChicheroneQuest_6', JSON.stringify(progressChicheroneQuestSum_6));
                if (progressChicheroneQuestSum_6_5 === 1) {
                    questionStar_6_5.className += 'fill';
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