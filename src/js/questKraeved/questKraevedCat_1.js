
if (localStorage.getItem('progressKraevedQuest_1') === null) {
    localStorage.setItem('progressKraevedQuest_1', JSON.stringify(0));
}

// Kraeved. Quest 1
function questionKraevedCat_1_1() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_1')),
        progressKraevedQuest_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
        progressKraevedQuest_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3')),
        progressKraevedQuest_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_4')),
        progressKraevedQuest_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_1_1') === null) {
        localStorage.setItem('progressKraevedQuest_1_1', JSON.stringify(progressKraevedQuest_1_1));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самарская лука', 'Самое узкое место на Самарской Луке?', 'Село Ширяево', 'Село Переволоки', 'Село Усолье');

    let answerVar_1_1_1 = document.getElementById('answerVar_1'),
        answerVar_1_1_2 = document.getElementById('answerVar_2'),
        answerVar_1_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_1 = [answerVar_1_1_1, answerVar_1_1_2, answerVar_1_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_1_1"></li>
        <li id="questionStar_1_2"></li>
        <li id="questionStar_1_3"></li>
        <li id="questionStar_1_4"></li>
        <li id="questionStar_1_5"></li>
    `;

    const questionStar_1_1 = document.getElementById('questionStar_1_1'),
        questionStar_1_2 = document.getElementById('questionStar_1_2'),
        questionStar_1_3 = document.getElementById('questionStar_1_3'),
        questionStar_1_4 = document.getElementById('questionStar_1_4'),
        questionStar_1_5 = document.getElementById('questionStar_1_5')
    ;

    function starsView_1() {
        if (progressKraevedQuest_1_2 === 1) {
            questionStar_1_2.className += 'fill';
        }
        if (progressKraevedQuest_1_3 === 1) {
            questionStar_1_3.className += 'fill';
        }
        if (progressKraevedQuest_1_4 === 1) {
            questionStar_1_4.className += 'fill';
        }
        if (progressKraevedQuest_1_5 === 1) {
            questionStar_1_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_1_1.length; i++) {
        if (answerVarRight_1_1[i] === answerVarRight_1_1[answerWrightNum]) {
            answerVarRight_1_1[i].addEventListener('click', () => {
                let progressKraevedQuest_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1'));
                let progressKraevedQuestSum_1_1 = progressKraevedQuest_1_1 + 1;
                let progressKraevedQuestSum_1 = progressKraevedQuestSum_1_1 + progressKraevedQuest_1;

                localStorage.setItem('progressKraevedQuest_1_1', JSON.stringify(progressKraevedQuestSum_1_1));
                localStorage.setItem('progressKraevedQuest_1', JSON.stringify(progressKraevedQuestSum_1));
                if (progressKraevedQuestSum_1_1 === 1) {
                    questionStar_1_1.className += 'fill';
                }
            });
            console.log(answerVarRight_1_1[answerWrightNum]);
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_5'))
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
                if (questValue_1_2 === 1 &&
                    questValue_1_3 === 1 &&
                    questValue_1_4 === 1 &&
                    questValue_1_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    kraevedCategoryDev();
                    lockSubQuestKraeved();
                } else if (questValue_1_2 === 0) {
                    questionKraevedCat_1_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionKraevedCat_1_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_1_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_1_5();
                }
            }
        });
        // if (progressKraevedQuest_1_1 === 0 &&
        //     progressKraevedQuest_1_2 === 1 &&
        //     progressKraevedQuest_1_3 === 1 &&
        //     progressKraevedQuest_1_4 === 1 &&
        //     progressKraevedQuest_1_5 === 1) {
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
                kraevedCategoryDev();
                lockSubQuestKraeved();
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

function questionKraevedCat_1_2() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_1')),
        progressKraevedQuest_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
        progressKraevedQuest_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3')),
        progressKraevedQuest_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_4')),
        progressKraevedQuest_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_1_2') === null) {
        localStorage.setItem('progressKraevedQuest_1_2', JSON.stringify(progressKraevedQuest_1_2));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самарская лука', 'Караульный бугор или...', 'Гора Лепешка', 'Гора Светелка', 'Гора Верблюжья');

    let answerVar_1_2_1 = document.getElementById('answerVar_1'),
        answerVar_1_2_2 = document.getElementById('answerVar_2'),
        answerVar_1_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_2 = [answerVar_1_2_1, answerVar_1_2_2, answerVar_1_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_1_1"></li>
        <li id="questionStar_1_2"></li>
        <li id="questionStar_1_3"></li>
        <li id="questionStar_1_4"></li>
        <li id="questionStar_1_5"></li>
    `;

    const questionStar_1_1 = document.getElementById('questionStar_1_1'),
        questionStar_1_2 = document.getElementById('questionStar_1_2'),
        questionStar_1_3 = document.getElementById('questionStar_1_3'),
        questionStar_1_4 = document.getElementById('questionStar_1_4'),
        questionStar_1_5 = document.getElementById('questionStar_1_5')
    ;

    function starsView_2() {
        if (progressKraevedQuest_1_1 === 1) {
            questionStar_1_1.className += 'fill';
        }
        if (progressKraevedQuest_1_3 === 1) {
            questionStar_1_3.className += 'fill';
        }
        if (progressKraevedQuest_1_4 === 1) {
            questionStar_1_4.className += 'fill';
        }
        if (progressKraevedQuest_1_5 === 1) {
            questionStar_1_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_1_2.length; i++) {
        if (answerVarRight_1_2[i] === answerVarRight_1_2[answerWrightNum]) {
            answerVarRight_1_2[i].addEventListener('click', () => {
                let progressKraevedQuest_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1'));
                let progressKraevedQuestSum_1_2 = progressKraevedQuest_1_2 + 1;
                let progressKraevedQuestSum_1 = progressKraevedQuestSum_1_2 + progressKraevedQuest_1;

                localStorage.setItem('progressKraevedQuest_1_2', JSON.stringify(progressKraevedQuestSum_1_2));
                localStorage.setItem('progressKraevedQuest_1', JSON.stringify(progressKraevedQuestSum_1));
                if (progressKraevedQuestSum_1_2 === 1) {
                    questionStar_1_2.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_5'))
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
                    kraevedCategoryDev();
                    lockSubQuestKraeved();
                } else if (questValue_1_3 === 0) {
                    questionKraevedCat_1_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_1_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_1_5();
                }
            }
        });
        // if (progressKraevedQuest_1_2 === 0 &&
        //     progressKraevedQuest_1_3 === 1 &&
        //     progressKraevedQuest_1_4 === 1 &&
        //     progressKraevedQuest_1_5 === 1) {
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
                kraevedCategoryDev();
                lockSubQuestKraeved();
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

function questionKraevedCat_1_3() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_1')),
        progressKraevedQuest_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
        progressKraevedQuest_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3')),
        progressKraevedQuest_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_4')),
        progressKraevedQuest_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_1_3') === null) {
        localStorage.setItem('progressKraevedQuest_1_3', JSON.stringify(progressKraevedQuest_1_3));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самарская лука','Этот вид летучих мышей зимует в Ширяевских штольнях', 'Вечерница', 'Северный кожанок', 'Вампир обыкновенный');

    let answerVar_1_3_1 = document.getElementById('answerVar_1'),
        answerVar_1_3_2 = document.getElementById('answerVar_2'),
        answerVar_1_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_3 = [answerVar_1_3_1, answerVar_1_3_2, answerVar_1_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_1_1"></li>
        <li id="questionStar_1_2"></li>
        <li id="questionStar_1_3"></li>
        <li id="questionStar_1_4"></li>
        <li id="questionStar_1_5"></li>
    `;

    const questionStar_1_1 = document.getElementById('questionStar_1_1'),
        questionStar_1_2 = document.getElementById('questionStar_1_2'),
        questionStar_1_3 = document.getElementById('questionStar_1_3'),
        questionStar_1_4 = document.getElementById('questionStar_1_4'),
        questionStar_1_5 = document.getElementById('questionStar_1_5')
    ;

    function starsView_3() {
        if (progressKraevedQuest_1_1 === 1) {
            questionStar_1_1.className += 'fill';
        }
        if (progressKraevedQuest_1_2 === 1) {
            questionStar_1_2.className += 'fill';
        }
        if (progressKraevedQuest_1_4 === 1) {
            questionStar_1_4.className += 'fill';
        }
        if (progressKraevedQuest_1_5 === 1) {
            questionStar_1_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_1_3.length; i++) {
        if (answerVarRight_1_3[i] === answerVarRight_1_3[answerWrightNum]) {
            answerVarRight_1_3[i].addEventListener('click', () => {
                let progressKraevedQuest_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1'));
                let progressKraevedQuestSum_1_3 = progressKraevedQuest_1_3 + 1;
                let progressKraevedQuestSum_1 = progressKraevedQuestSum_1_3 + progressKraevedQuest_1;

                localStorage.setItem('progressKraevedQuest_1_3', JSON.stringify(progressKraevedQuestSum_1_3));
                localStorage.setItem('progressKraevedQuest_1', JSON.stringify(progressKraevedQuestSum_1));
                if (progressKraevedQuestSum_1_3 === 1) {
                    questionStar_1_3.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Да, точно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_5'))
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
                    kraevedCategoryDev();
                    lockSubQuestKraeved();
                } else if (questValue_1_4 === 0) {
                    questionKraevedCat_1_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_1_5();
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
                kraevedCategoryDev();
                lockSubQuestKraeved();
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

function questionKraevedCat_1_4() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_1')),
        progressKraevedQuest_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
        progressKraevedQuest_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3')),
        progressKraevedQuest_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_4')),
        progressKraevedQuest_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_1_4') === null) {
        localStorage.setItem('progressKraevedQuest_1_4', JSON.stringify(progressKraevedQuest_1_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самарская лука','Это водное животное является индикатором чистоты воды в нашем крае', 'Рак речной', 'Рыба плотва', 'Водяной уж');

    let answerVar_1_4_1 = document.getElementById('answerVar_1'),
        answerVar_1_4_2 = document.getElementById('answerVar_2'),
        answerVar_1_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_4 = [answerVar_1_4_1, answerVar_1_4_2, answerVar_1_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_1_1"></li>
        <li id="questionStar_1_2"></li>
        <li id="questionStar_1_3"></li>
        <li id="questionStar_1_4"></li>
        <li id="questionStar_1_5"></li>
    `;

    const questionStar_1_1 = document.getElementById('questionStar_1_1'),
        questionStar_1_2 = document.getElementById('questionStar_1_2'),
        questionStar_1_3 = document.getElementById('questionStar_1_3'),
        questionStar_1_4 = document.getElementById('questionStar_1_4'),
        questionStar_1_5 = document.getElementById('questionStar_1_5')
    ;

    function starsView_4() {
        if (progressKraevedQuest_1_1 === 1) {
            questionStar_1_1.className += 'fill';
        }
        if (progressKraevedQuest_1_2 === 1) {
            questionStar_1_2.className += 'fill';
        }
        if (progressKraevedQuest_1_3 === 1) {
            questionStar_1_3.className += 'fill';
        }
        if (progressKraevedQuest_1_5 === 1) {
            questionStar_1_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_1_4.length; i++) {
        if (answerVarRight_1_4[i] === answerVarRight_1_4[answerWrightNum]) {
            answerVarRight_1_4[i].addEventListener('click', () => {
                let progressKraevedQuest_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1'));
                let progressKraevedQuestSum_1_4 = progressKraevedQuest_1_4 + 1;
                let progressKraevedQuestSum_1 = progressKraevedQuestSum_1_4 + progressKraevedQuest_1;

                localStorage.setItem('progressKraevedQuest_1_4', JSON.stringify(progressKraevedQuestSum_1_4));
                localStorage.setItem('progressKraevedQuest_1', JSON.stringify(progressKraevedQuestSum_1));
                if (progressKraevedQuestSum_1_4 === 1) {
                    questionStar_1_4.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_5'))
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
                    kraevedCategoryDev();
                    lockSubQuestKraeved();
                } else if (questValue_1_5 === 0) {
                    questionKraevedCat_1_5();
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
                kraevedCategoryDev();
                lockSubQuestKraeved();
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

function questionKraevedCat_1_5() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_1')),
        progressKraevedQuest_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
        progressKraevedQuest_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3')),
        progressKraevedQuest_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_4')),
        progressKraevedQuest_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_1_4') === null) {
        localStorage.setItem('progressKraevedQuest_1_4', JSON.stringify(progressKraevedQuest_1_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самарская лука','Памятник природы регионального значения в Сергиевском районе, недалеко от села Старое Якушкино. Озеро, которое никогда не замерзает, сохраняя постоянную температуру в +7', 'Мертвое озеро', 'Голубое озеро', 'Боровое озеро');

    let answerVar_1_5_1 = document.getElementById('answerVar_1'),
        answerVar_1_5_2 = document.getElementById('answerVar_2'),
        answerVar_1_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_5 = [answerVar_1_5_1, answerVar_1_5_2, answerVar_1_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_1_1"></li>
        <li id="questionStar_1_2"></li>
        <li id="questionStar_1_3"></li>
        <li id="questionStar_1_4"></li>
        <li id="questionStar_1_5"></li>
    `;

    const questionStar_1_1 = document.getElementById('questionStar_1_1'),
        questionStar_1_2 = document.getElementById('questionStar_1_2'),
        questionStar_1_3 = document.getElementById('questionStar_1_3'),
        questionStar_1_4 = document.getElementById('questionStar_1_4'),
        questionStar_1_5 = document.getElementById('questionStar_1_5')
    ;

    function starsView_5() {
        if (progressKraevedQuest_1_1 === 1) {
            questionStar_1_1.className += 'fill';
        }
        if (progressKraevedQuest_1_2 === 1) {
            questionStar_1_2.className += 'fill';
        }
        if (progressKraevedQuest_1_3 === 1) {
            questionStar_1_3.className += 'fill';
        }
        if (progressKraevedQuest_1_4 === 1) {
            questionStar_1_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_1_5.length; i++) {
        if (answerVarRight_1_5[i] === answerVarRight_1_5[answerWrightNum]) {
            answerVarRight_1_5[i].addEventListener('click', () => {
                let progressKraevedQuest_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1'));
                let progressKraevedQuestSum_1_5 = progressKraevedQuest_1_5 + 1;
                let progressKraevedQuestSum_1 = progressKraevedQuestSum_1_5 + progressKraevedQuest_1;

                localStorage.setItem('progressKraevedQuest_1_5', JSON.stringify(progressKraevedQuestSum_1_5));
                localStorage.setItem('progressKraevedQuest_1', JSON.stringify(progressKraevedQuestSum_1));
                if (progressKraevedQuestSum_1_5 === 1) {
                    questionStar_1_5.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Ну конечно же!');

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
                kraevedCategoryDev();
                lockSubQuestKraeved();
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
                kraevedCategoryDev();
                lockSubQuestKraeved();
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