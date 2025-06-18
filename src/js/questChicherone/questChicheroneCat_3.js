
if (localStorage.getItem('progressChicheroneQuest_3') === null) {
    localStorage.setItem('progressChicheroneQuest_3', JSON.stringify(0));
}

// Chicherone. Quest 3
function questionChicheroneCat_3_1() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_3_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_1')),
        progressChicheroneQuest_3_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
        progressChicheroneQuest_3_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3')),
        progressChicheroneQuest_3_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_4')),
        progressChicheroneQuest_3_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_3_1') === null) {
        localStorage.setItem('progressChicheroneQuest_3_1', JSON.stringify(progressChicheroneQuest_3_1));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Районы, кварталы', 'Дача Головкина «дом со слонами» находится...', 'В Самарском', 'В Промышленном', 'В Куйбышевском');

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
        if (progressChicheroneQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressChicheroneQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressChicheroneQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
        if (progressChicheroneQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_3_1.length; i++) {
        if (answerVarRight_3_1[i] === answerVarRight_3_1[answerWrightNum]) {
            answerVarRight_3_1[i].addEventListener('click', () => {
                let progressChicheroneQuest_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3'));
                let progressChicheroneQuestSum_3_1 = progressChicheroneQuest_3_1 + 1;
                let progressChicheroneQuestSum_3 = progressChicheroneQuestSum_3_1 + progressChicheroneQuest_3;

                localStorage.setItem('progressChicheroneQuest_3_1', JSON.stringify(progressChicheroneQuestSum_3_1));
                localStorage.setItem('progressChicheroneQuest_3', JSON.stringify(progressChicheroneQuestSum_3));
                if (progressChicheroneQuestSum_3_1 === 1) {
                    questionStar_3_1.className += 'fill';
                }
            });
            console.log(answerVarRight_3_1[answerWrightNum]);
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_5'))
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
                    questionChicheroneCat_3_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChicheroneCat_3_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_3_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_3_5();
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

function questionChicheroneCat_3_2() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_3_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_1')),
        progressChicheroneQuest_3_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
        progressChicheroneQuest_3_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3')),
        progressChicheroneQuest_3_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_4')),
        progressChicheroneQuest_3_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_3_2') === null) {
        localStorage.setItem('progressChicheroneQuest_3_2', JSON.stringify(progressChicheroneQuest_3_2));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Районы, кварталы', 'Этот район знаменит был знаменит артиллерийским городком...', 'Октябрьский', 'Промышленный', 'Железнодорожный');

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
        if (progressChicheroneQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressChicheroneQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressChicheroneQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
        if (progressChicheroneQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_3_2.length; i++) {
        if (answerVarRight_3_2[i] === answerVarRight_3_2[answerWrightNum]) {
            answerVarRight_3_2[i].addEventListener('click', () => {
                let progressChicheroneQuest_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3'));
                let progressChicheroneQuestSum_3_2 = progressChicheroneQuest_3_2 + 1;
                let progressChicheroneQuestSum_3 = progressChicheroneQuestSum_3_2 + progressChicheroneQuest_3;

                localStorage.setItem('progressChicheroneQuest_3_2', JSON.stringify(progressChicheroneQuestSum_3_2));
                localStorage.setItem('progressChicheroneQuest_3', JSON.stringify(progressChicheroneQuestSum_3));
                if (progressChicheroneQuestSum_3_2 === 1) {
                    questionStar_3_2.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_5'))
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
                    questionChicheroneCat_3_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_3_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_3_5();
                }
            }
        });
        // if (progressChicheroneQuest_3_2 === 0 &&
        //     progressChicheroneQuest_3_3 === 1 &&
        //     progressChicheroneQuest_3_4 === 1 &&
        //     progressChicheroneQuest_3_5 === 1) {
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

function questionChicheroneCat_3_3() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_3_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_1')),
        progressChicheroneQuest_3_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
        progressChicheroneQuest_3_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3')),
        progressChicheroneQuest_3_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_4')),
        progressChicheroneQuest_3_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_3_3') === null) {
        localStorage.setItem('progressChicheroneQuest_3_3', JSON.stringify(progressChicheroneQuest_3_3));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Районы, кварталы','Этот район – пазл, собран из трех других', 'Промышленный', 'Кировский', 'Ленинский');

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
        if (progressChicheroneQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressChicheroneQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressChicheroneQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
        if (progressChicheroneQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_3_3.length; i++) {
        if (answerVarRight_3_3[i] === answerVarRight_3_3[answerWrightNum]) {
            answerVarRight_3_3[i].addEventListener('click', () => {
                let progressChicheroneQuest_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3'));
                let progressChicheroneQuestSum_3_3 = progressChicheroneQuest_3_3 + 1;
                let progressChicheroneQuestSum_3 = progressChicheroneQuestSum_3_3 + progressChicheroneQuest_3;

                localStorage.setItem('progressChicheroneQuest_3_3', JSON.stringify(progressChicheroneQuestSum_3_3));
                localStorage.setItem('progressChicheroneQuest_3', JSON.stringify(progressChicheroneQuestSum_3));
                if (progressChicheroneQuestSum_3_3 === 1) {
                    questionStar_3_3.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_5'))
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
                    questionChicheroneCat_3_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_3_5();
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

function questionChicheroneCat_3_4() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_3_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_1')),
        progressChicheroneQuest_3_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
        progressChicheroneQuest_3_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3')),
        progressChicheroneQuest_3_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_4')),
        progressChicheroneQuest_3_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_3_4') === null) {
        localStorage.setItem('progressChicheroneQuest_3_4', JSON.stringify(progressChicheroneQuest_3_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Районы, кварталы','Эти районы остались без площадей...', 'В Красноглинском и Советском районах', 'В Октябрьском и Промышленном районах', 'В Кировском и Советском районах');

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
        if (progressChicheroneQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressChicheroneQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressChicheroneQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressChicheroneQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_3_4.length; i++) {
        if (answerVarRight_3_4[i] === answerVarRight_3_4[answerWrightNum]) {
            answerVarRight_3_4[i].addEventListener('click', () => {
                let progressChicheroneQuest_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3'));
                let progressChicheroneQuestSum_3_4 = progressChicheroneQuest_3_4 + 1;
                let progressChicheroneQuestSum_3 = progressChicheroneQuestSum_3_4 + progressChicheroneQuest_3;

                localStorage.setItem('progressChicheroneQuest_3_4', JSON.stringify(progressChicheroneQuestSum_3_4));
                localStorage.setItem('progressChicheroneQuest_3', JSON.stringify(progressChicheroneQuestSum_3));
                if (progressChicheroneQuestSum_3_4 === 1) {
                    questionStar_3_4.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_5'))
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
                    questionChicheroneCat_3_5();
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

function questionChicheroneCat_3_5() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChicheroneQuest_3_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_1')),
        progressChicheroneQuest_3_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
        progressChicheroneQuest_3_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3')),
        progressChicheroneQuest_3_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_4')),
        progressChicheroneQuest_3_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_3_4') === null) {
        localStorage.setItem('progressChicheroneQuest_3_4', JSON.stringify(progressChicheroneQuest_3_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Районы, кварталы','В 1737 году по инициативе Татищева в Самаре появился первый...', 'Переулок', 'Тупик', 'Проспект');

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
        if (progressChicheroneQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressChicheroneQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressChicheroneQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressChicheroneQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_3_5.length; i++) {
        if (answerVarRight_3_5[i] === answerVarRight_3_5[answerWrightNum]) {
            answerVarRight_3_5[i].addEventListener('click', () => {
                let progressChicheroneQuest_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3'));
                let progressChicheroneQuestSum_3_5 = progressChicheroneQuest_3_5 + 1;
                let progressChicheroneQuestSum_3 = progressChicheroneQuestSum_3_5 + progressChicheroneQuest_3;

                localStorage.setItem('progressChicheroneQuest_3_5', JSON.stringify(progressChicheroneQuestSum_3_5));
                localStorage.setItem('progressChicheroneQuest_3', JSON.stringify(progressChicheroneQuestSum_3));
                if (progressChicheroneQuestSum_3_5 === 1) {
                    questionStar_3_5.className += 'fill';
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