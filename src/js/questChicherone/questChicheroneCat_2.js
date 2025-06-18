
if (localStorage.getItem('progressChicheroneQuest_2') === null) {
    localStorage.setItem('progressChicheroneQuest_2', JSON.stringify(0));
}

// Chicherone. Quest 2
function questionChicheroneCat_2_1() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChicheroneQuest_2_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_1')),
        progressChicheroneQuest_2_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
        progressChicheroneQuest_2_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3')),
        progressChicheroneQuest_2_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_4')),
        progressChicheroneQuest_2_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_2_1') === null) {
        localStorage.setItem('progressChicheroneQuest_2_1', JSON.stringify(progressChicheroneQuest_2_1));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самарская лука', 'Сторожевая крепость «Самарский городок» основана по указу', 'Петра I', 'Екатерины II', 'Федора I');

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
        if (progressChicheroneQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressChicheroneQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressChicheroneQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
        if (progressChicheroneQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_2_1.length; i++) {
        if (answerVarRight_2_1[i] === answerVarRight_2_1[answerWrightNum]) {
            answerVarRight_2_1[i].addEventListener('click', () => {
                let progressChicheroneQuest_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2'));
                let progressChicheroneQuestSum_2_1 = progressChicheroneQuest_2_1 + 1;
                let progressChicheroneQuestSum_2 = progressChicheroneQuestSum_2_1 + progressChicheroneQuest_2;

                localStorage.setItem('progressChicheroneQuest_2_1', JSON.stringify(progressChicheroneQuestSum_2_1));
                localStorage.setItem('progressChicheroneQuest_2', JSON.stringify(progressChicheroneQuestSum_2));
                if (progressChicheroneQuestSum_2_1 === 1) {
                    questionStar_2_1.className += 'fill';
                }
            });
            console.log(answerVarRight_2_1[answerWrightNum]);
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_5'))
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
                    questionChicheroneCat_2_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChicheroneCat_2_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_2_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_2_5();
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

function questionChicheroneCat_2_2() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_2_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_1')),
        progressChicheroneQuest_2_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
        progressChicheroneQuest_2_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3')),
        progressChicheroneQuest_2_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_4')),
        progressChicheroneQuest_2_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_2_2') === null) {
        localStorage.setItem('progressChicheroneQuest_2_2', JSON.stringify(progressChicheroneQuest_2_2));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самарская лука', 'В 1668 году Самара получила...', 'Благословение царя', 'Статус города', 'Епархию');

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
        if (progressChicheroneQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressChicheroneQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressChicheroneQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
        if (progressChicheroneQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_2_2.length; i++) {
        if (answerVarRight_2_2[i] === answerVarRight_2_2[answerWrightNum]) {
            answerVarRight_2_2[i].addEventListener('click', () => {
                let progressChicheroneQuest_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2'));
                let progressChicheroneQuestSum_2_2 = progressChicheroneQuest_2_2 + 1;
                let progressChicheroneQuestSum_2 = progressChicheroneQuestSum_2_2 + progressChicheroneQuest_2;

                localStorage.setItem('progressChicheroneQuest_2_2', JSON.stringify(progressChicheroneQuestSum_2_2));
                localStorage.setItem('progressChicheroneQuest_2', JSON.stringify(progressChicheroneQuestSum_2));
                if (progressChicheroneQuestSum_2_2 === 1) {
                    questionStar_2_2.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_5'))
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
                    questionChicheroneCat_2_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_2_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_2_5();
                }
            }
        });
        // if (progressChicheroneQuest_2_2 === 0 &&
        //     progressChicheroneQuest_2_3 === 1 &&
        //     progressChicheroneQuest_2_4 === 1 &&
        //     progressChicheroneQuest_2_5 === 1) {
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

function questionChicheroneCat_2_3() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChicheroneQuest_2_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_1')),
        progressChicheroneQuest_2_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
        progressChicheroneQuest_2_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3')),
        progressChicheroneQuest_2_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_4')),
        progressChicheroneQuest_2_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_2_3') === null) {
        localStorage.setItem('progressChicheroneQuest_2_3', JSON.stringify(progressChicheroneQuest_2_3));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самарская лука','Герб города Самары был утвержден по указу царя...', 'Ивана Грозного', 'Александра I', 'Николая I');

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
        if (progressChicheroneQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressChicheroneQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressChicheroneQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
        if (progressChicheroneQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_2_3.length; i++) {
        if (answerVarRight_2_3[i] === answerVarRight_2_3[answerWrightNum]) {
            answerVarRight_2_3[i].addEventListener('click', () => {
                let progressChicheroneQuest_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2'));
                let progressChicheroneQuestSum_2_3 = progressChicheroneQuest_2_3 + 1;
                let progressChicheroneQuestSum_2 = progressChicheroneQuestSum_2_3 + progressChicheroneQuest_2;

                localStorage.setItem('progressChicheroneQuest_2_3', JSON.stringify(progressChicheroneQuestSum_2_3));
                localStorage.setItem('progressChicheroneQuest_2', JSON.stringify(progressChicheroneQuestSum_2));
                if (progressChicheroneQuestSum_2_3 === 1) {
                    questionStar_2_3.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_5'))
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
                    questionChicheroneCat_2_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_2_5();
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

function questionChicheroneCat_2_4() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_2_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_1')),
        progressChicheroneQuest_2_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
        progressChicheroneQuest_2_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3')),
        progressChicheroneQuest_2_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_4')),
        progressChicheroneQuest_2_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_2_4') === null) {
        localStorage.setItem('progressChicheroneQuest_2_4', JSON.stringify(progressChicheroneQuest_2_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самарская лука','Этот город переехал на новое место', 'Тольятти', 'Новокуйбышевск', 'Сызрань');

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
        if (progressChicheroneQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressChicheroneQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressChicheroneQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressChicheroneQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_2_4.length; i++) {
        if (answerVarRight_2_4[i] === answerVarRight_2_4[answerWrightNum]) {
            answerVarRight_2_4[i].addEventListener('click', () => {
                let progressChicheroneQuest_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2'));
                let progressChicheroneQuestSum_2_4 = progressChicheroneQuest_2_4 + 1;
                let progressChicheroneQuestSum_2 = progressChicheroneQuestSum_2_4 + progressChicheroneQuest_2;

                localStorage.setItem('progressChicheroneQuest_2_4', JSON.stringify(progressChicheroneQuestSum_2_4));
                localStorage.setItem('progressChicheroneQuest_2', JSON.stringify(progressChicheroneQuestSum_2));
                if (progressChicheroneQuestSum_2_4 === 1) {
                    questionStar_2_4.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'В 1953—1955 годах перенесён на более высокое место, так как при создании Куйбышевского водохранилища прежний город был затоплен');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_5'))
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
                    questionChicheroneCat_2_5();
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

function questionChicheroneCat_2_5() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_2_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_1')),
        progressChicheroneQuest_2_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
        progressChicheroneQuest_2_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3')),
        progressChicheroneQuest_2_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_4')),
        progressChicheroneQuest_2_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_2_4') === null) {
        localStorage.setItem('progressChicheroneQuest_2_4', JSON.stringify(progressChicheroneQuest_2_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самарская лука','Постников овраг (Овраг Подпольщиков) имеет историческое значение', 'Найдено поселение древнее поселение', 'Была удобная пристань', 'Скрывались подпольщики');

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
        if (progressChicheroneQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressChicheroneQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressChicheroneQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressChicheroneQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_2_5.length; i++) {
        if (answerVarRight_2_5[i] === answerVarRight_2_5[answerWrightNum]) {
            answerVarRight_2_5[i].addEventListener('click', () => {
                let progressChicheroneQuest_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2'));
                let progressChicheroneQuestSum_2_5 = progressChicheroneQuest_2_5 + 1;
                let progressChicheroneQuestSum_2 = progressChicheroneQuestSum_2_5 + progressChicheroneQuest_2;

                localStorage.setItem('progressChicheroneQuest_2_5', JSON.stringify(progressChicheroneQuestSum_2_5));
                localStorage.setItem('progressChicheroneQuest_2', JSON.stringify(progressChicheroneQuestSum_2));
                if (progressChicheroneQuestSum_2_5 === 1) {
                    questionStar_2_5.className += 'fill';
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