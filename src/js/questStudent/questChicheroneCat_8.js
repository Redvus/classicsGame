
if (localStorage.getItem('progressChicheroneQuest_8') === null) {
    localStorage.setItem('progressChicheroneQuest_8', JSON.stringify(0));
}

// Chicherone. Quest 8
function questionChicheroneCat_8_1() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_8_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_1')),
        progressChicheroneQuest_8_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
        progressChicheroneQuest_8_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3')),
        progressChicheroneQuest_8_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_4')),
        progressChicheroneQuest_8_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_8_1') === null) {
        localStorage.setItem('progressChicheroneQuest_8_1', JSON.stringify(progressChicheroneQuest_8_1));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Под мягким светом лампы и шелестом страниц', 'Центральная городская библиотека имени Надежды Константиновны Крупской основана...', 'В 1917 году', 'В 1922 году', 'В 1933 году');

    let answerVar_8_1_1 = document.getElementById('answerVar_1'),
        answerVar_8_1_2 = document.getElementById('answerVar_2'),
        answerVar_8_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_1 = [answerVar_8_1_1, answerVar_8_1_2, answerVar_8_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_8_1"></li>
        <li id="questionStar_8_2"></li>
        <li id="questionStar_8_3"></li>
        <li id="questionStar_8_4"></li>
        <li id="questionStar_8_5"></li>
    `;

    const questionStar_8_1 = document.getElementById('questionStar_8_1'),
        questionStar_8_2 = document.getElementById('questionStar_8_2'),
        questionStar_8_3 = document.getElementById('questionStar_8_3'),
        questionStar_8_4 = document.getElementById('questionStar_8_4'),
        questionStar_8_5 = document.getElementById('questionStar_8_5')
    ;

    function starsView_1() {
        if (progressChicheroneQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressChicheroneQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressChicheroneQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
        if (progressChicheroneQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_8_1.length; i++) {
        if (answerVarRight_8_1[i] === answerVarRight_8_1[answerWrightNum]) {
            answerVarRight_8_1[i].addEventListener('click', () => {
                let progressChicheroneQuest_8 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8'));
                let progressChicheroneQuestSum_8_1 = progressChicheroneQuest_8_1 + 1;
                let progressChicheroneQuestSum_8 = progressChicheroneQuestSum_8_1 + progressChicheroneQuest_8;

                localStorage.setItem('progressChicheroneQuest_8_1', JSON.stringify(progressChicheroneQuestSum_8_1));
                localStorage.setItem('progressChicheroneQuest_8', JSON.stringify(progressChicheroneQuestSum_8));
                if (progressChicheroneQuestSum_8_1 === 1) {
                    questionStar_8_1.className += 'fill';
                }
            });
            console.log(answerVarRight_8_1[answerWrightNum]);
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_5'))
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
                    questionChicheroneCat_8_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChicheroneCat_8_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_8_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_8_5();
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

function questionChicheroneCat_8_2() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_8_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_1')),
        progressChicheroneQuest_8_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
        progressChicheroneQuest_8_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3')),
        progressChicheroneQuest_8_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_4')),
        progressChicheroneQuest_8_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_8_2') === null) {
        localStorage.setItem('progressChicheroneQuest_8_2', JSON.stringify(progressChicheroneQuest_8_2));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Под мягким светом лампы и шелестом страниц', 'В Октябрьском районе эта библиотека славится литературно – музыкальной гостиной', 'Библиотека №8', 'Библиотека №1', 'Библиотека №2');

    let answerVar_8_2_1 = document.getElementById('answerVar_1'),
        answerVar_8_2_2 = document.getElementById('answerVar_2'),
        answerVar_8_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_2 = [answerVar_8_2_1, answerVar_8_2_2, answerVar_8_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_8_1"></li>
        <li id="questionStar_8_2"></li>
        <li id="questionStar_8_3"></li>
        <li id="questionStar_8_4"></li>
        <li id="questionStar_8_5"></li>
    `;

    const questionStar_8_1 = document.getElementById('questionStar_8_1'),
        questionStar_8_2 = document.getElementById('questionStar_8_2'),
        questionStar_8_3 = document.getElementById('questionStar_8_3'),
        questionStar_8_4 = document.getElementById('questionStar_8_4'),
        questionStar_8_5 = document.getElementById('questionStar_8_5')
    ;

    function starsView_2() {
        if (progressChicheroneQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressChicheroneQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressChicheroneQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
        if (progressChicheroneQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_8_2.length; i++) {
        if (answerVarRight_8_2[i] === answerVarRight_8_2[answerWrightNum]) {
            answerVarRight_8_2[i].addEventListener('click', () => {
                let progressChicheroneQuest_8 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8'));
                let progressChicheroneQuestSum_8_2 = progressChicheroneQuest_8_2 + 1;
                let progressChicheroneQuestSum_8 = progressChicheroneQuestSum_8_2 + progressChicheroneQuest_8;

                localStorage.setItem('progressChicheroneQuest_8_2', JSON.stringify(progressChicheroneQuestSum_8_2));
                localStorage.setItem('progressChicheroneQuest_8', JSON.stringify(progressChicheroneQuestSum_8));
                if (progressChicheroneQuestSum_8_2 === 1) {
                    questionStar_8_2.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_5'))
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
                    questionChicheroneCat_8_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_8_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_8_5();
                }
            }
        });
        // if (progressChicheroneQuest_8_2 === 0 &&
        //     progressChicheroneQuest_8_3 === 1 &&
        //     progressChicheroneQuest_8_4 === 1 &&
        //     progressChicheroneQuest_8_5 === 1) {
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

function questionChicheroneCat_8_3() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_8_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_1')),
        progressChicheroneQuest_8_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
        progressChicheroneQuest_8_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3')),
        progressChicheroneQuest_8_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_4')),
        progressChicheroneQuest_8_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_8_3') === null) {
        localStorage.setItem('progressChicheroneQuest_8_3', JSON.stringify(progressChicheroneQuest_8_3));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Под мягким светом лампы и шелестом страниц','Современный дизайн, молодежный формат, интересные проекты предлагает...', 'Библиотека №8', 'Библиотека №33', 'Центральная городская библиотека');

    let answerVar_8_3_1 = document.getElementById('answerVar_1'),
        answerVar_8_3_2 = document.getElementById('answerVar_2'),
        answerVar_8_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_3 = [answerVar_8_3_1, answerVar_8_3_2, answerVar_8_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_8_1"></li>
        <li id="questionStar_8_2"></li>
        <li id="questionStar_8_3"></li>
        <li id="questionStar_8_4"></li>
        <li id="questionStar_8_5"></li>
    `;

    const questionStar_8_1 = document.getElementById('questionStar_8_1'),
        questionStar_8_2 = document.getElementById('questionStar_8_2'),
        questionStar_8_3 = document.getElementById('questionStar_8_3'),
        questionStar_8_4 = document.getElementById('questionStar_8_4'),
        questionStar_8_5 = document.getElementById('questionStar_8_5')
    ;

    function starsView_3() {
        if (progressChicheroneQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressChicheroneQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressChicheroneQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
        if (progressChicheroneQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_8_3.length; i++) {
        if (answerVarRight_8_3[i] === answerVarRight_8_3[answerWrightNum]) {
            answerVarRight_8_3[i].addEventListener('click', () => {
                let progressChicheroneQuest_8 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8'));
                let progressChicheroneQuestSum_8_3 = progressChicheroneQuest_8_3 + 1;
                let progressChicheroneQuestSum_8 = progressChicheroneQuestSum_8_3 + progressChicheroneQuest_8;

                localStorage.setItem('progressChicheroneQuest_8_3', JSON.stringify(progressChicheroneQuestSum_8_3));
                localStorage.setItem('progressChicheroneQuest_8', JSON.stringify(progressChicheroneQuestSum_8));
                if (progressChicheroneQuestSum_8_3 === 1) {
                    questionStar_8_3.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'В 2019 году стала победителем Национального проекта «Культура», «Библиотека нового поколения»');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_5'))
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
                    questionChicheroneCat_8_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_8_5();
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

function questionChicheroneCat_8_4() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_8_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_1')),
        progressChicheroneQuest_8_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
        progressChicheroneQuest_8_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3')),
        progressChicheroneQuest_8_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_4')),
        progressChicheroneQuest_8_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_8_4') === null) {
        localStorage.setItem('progressChicheroneQuest_8_4', JSON.stringify(progressChicheroneQuest_8_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Под мягким светом лампы и шелестом страниц','Гроссмейстеры шахматных досок встречаются здесь...', 'Библиотека №15', 'Библиотека №5', 'Библиотека №8');

    let answerVar_8_4_1 = document.getElementById('answerVar_1'),
        answerVar_8_4_2 = document.getElementById('answerVar_2'),
        answerVar_8_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_4 = [answerVar_8_4_1, answerVar_8_4_2, answerVar_8_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_8_1"></li>
        <li id="questionStar_8_2"></li>
        <li id="questionStar_8_3"></li>
        <li id="questionStar_8_4"></li>
        <li id="questionStar_8_5"></li>
    `;

    const questionStar_8_1 = document.getElementById('questionStar_8_1'),
        questionStar_8_2 = document.getElementById('questionStar_8_2'),
        questionStar_8_3 = document.getElementById('questionStar_8_3'),
        questionStar_8_4 = document.getElementById('questionStar_8_4'),
        questionStar_8_5 = document.getElementById('questionStar_8_5')
    ;

    function starsView_4() {
        if (progressChicheroneQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressChicheroneQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressChicheroneQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressChicheroneQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_8_4.length; i++) {
        if (answerVarRight_8_4[i] === answerVarRight_8_4[answerWrightNum]) {
            answerVarRight_8_4[i].addEventListener('click', () => {
                let progressChicheroneQuest_8 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8'));
                let progressChicheroneQuestSum_8_4 = progressChicheroneQuest_8_4 + 1;
                let progressChicheroneQuestSum_8 = progressChicheroneQuestSum_8_4 + progressChicheroneQuest_8;

                localStorage.setItem('progressChicheroneQuest_8_4', JSON.stringify(progressChicheroneQuestSum_8_4));
                localStorage.setItem('progressChicheroneQuest_8', JSON.stringify(progressChicheroneQuestSum_8));
                if (progressChicheroneQuestSum_8_4 === 1) {
                    questionStar_8_4.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Библиотека 5 – проект шахматный клуб «Лотос»');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_5'))
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
                    questionChicheroneCat_8_5();
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

function questionChicheroneCat_8_5() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChicheroneQuest_8_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_1')),
        progressChicheroneQuest_8_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
        progressChicheroneQuest_8_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3')),
        progressChicheroneQuest_8_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_4')),
        progressChicheroneQuest_8_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_8_4') === null) {
        localStorage.setItem('progressChicheroneQuest_8_4', JSON.stringify(progressChicheroneQuest_8_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Под мягким светом лампы и шелестом страниц','«Зеленая» библиотека нашего города', 'Библиотека №9', 'Библиотека №13', 'Библиотека №33');

    let answerVar_8_5_1 = document.getElementById('answerVar_1'),
        answerVar_8_5_2 = document.getElementById('answerVar_2'),
        answerVar_8_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_5 = [answerVar_8_5_1, answerVar_8_5_2, answerVar_8_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_8_1"></li>
        <li id="questionStar_8_2"></li>
        <li id="questionStar_8_3"></li>
        <li id="questionStar_8_4"></li>
        <li id="questionStar_8_5"></li>
    `;

    const questionStar_8_1 = document.getElementById('questionStar_8_1'),
        questionStar_8_2 = document.getElementById('questionStar_8_2'),
        questionStar_8_3 = document.getElementById('questionStar_8_3'),
        questionStar_8_4 = document.getElementById('questionStar_8_4'),
        questionStar_8_5 = document.getElementById('questionStar_8_5')
    ;

    function starsView_5() {
        if (progressChicheroneQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressChicheroneQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressChicheroneQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressChicheroneQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_8_5.length; i++) {
        if (answerVarRight_8_5[i] === answerVarRight_8_5[answerWrightNum]) {
            answerVarRight_8_5[i].addEventListener('click', () => {
                let progressChicheroneQuest_8 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8'));
                let progressChicheroneQuestSum_8_5 = progressChicheroneQuest_8_5 + 1;
                let progressChicheroneQuestSum_8 = progressChicheroneQuestSum_8_5 + progressChicheroneQuest_8;

                localStorage.setItem('progressChicheroneQuest_8_5', JSON.stringify(progressChicheroneQuestSum_8_5));
                localStorage.setItem('progressChicheroneQuest_8', JSON.stringify(progressChicheroneQuestSum_8));
                if (progressChicheroneQuestSum_8_5 === 1) {
                    questionStar_8_5.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Библиотека 33 – библиотека экологической формации');

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