
if (localStorage.getItem('progressKraevedQuest_7') === null) {
    localStorage.setItem('progressKraevedQuest_7', JSON.stringify(0));
}

// Kraeved. Quest 7
function questionKraevedCat_7_1() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_7_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_1')),
        progressKraevedQuest_7_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
        progressKraevedQuest_7_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3')),
        progressKraevedQuest_7_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_4')),
        progressKraevedQuest_7_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_7_1') === null) {
        localStorage.setItem('progressKraevedQuest_7_1', JSON.stringify(progressKraevedQuest_7_1));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Культурная столица', 'Фотоматериалы необычных экспонатов этого музея удостоились почетной высшей награды на фотовыставке в Дрездене, где они выставлялись с 1907 года по 7 октября 1909 года', 'Музей археологии', 'Музей полиции', 'Музей ПУРво');

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
        if (progressKraevedQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressKraevedQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressKraevedQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
        if (progressKraevedQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_7_1.length; i++) {
        if (answerVarRight_7_1[i] === answerVarRight_7_1[answerWrightNum]) {
            answerVarRight_7_1[i].addEventListener('click', () => {
                let progressKraevedQuest_7 = JSON.parse(localStorage.getItem('progressKraevedQuest_7'));
                let progressKraevedQuestSum_7_1 = progressKraevedQuest_7_1 + 1;
                let progressKraevedQuestSum_7 = progressKraevedQuestSum_7_1 + progressKraevedQuest_7;

                localStorage.setItem('progressKraevedQuest_7_1', JSON.stringify(progressKraevedQuestSum_7_1));
                localStorage.setItem('progressKraevedQuest_7', JSON.stringify(progressKraevedQuestSum_7));
                if (progressKraevedQuestSum_7_1 === 1) {
                    questionStar_7_1.className += 'fill';
                }
            });
            console.log(answerVarRight_7_1[answerWrightNum]);
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Точно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_5'))
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
                    questionKraevedCat_7_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionKraevedCat_7_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_7_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_7_5();
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

function questionKraevedCat_7_2() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_7_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_1')),
        progressKraevedQuest_7_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
        progressKraevedQuest_7_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3')),
        progressKraevedQuest_7_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_4')),
        progressKraevedQuest_7_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_7_2') === null) {
        localStorage.setItem('progressKraevedQuest_7_2', JSON.stringify(progressKraevedQuest_7_2));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Культурная столица', 'В этом музее в 1921 году экспонировали диаграммы, фотограммы, образцы суррогатов хлеба', 'Музей достижений сельского хозяйства', 'Музей голода', 'Музей хлебзавода');

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
        if (progressKraevedQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressKraevedQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressKraevedQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
        if (progressKraevedQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_7_2.length; i++) {
        if (answerVarRight_7_2[i] === answerVarRight_7_2[answerWrightNum]) {
            answerVarRight_7_2[i].addEventListener('click', () => {
                let progressKraevedQuest_7 = JSON.parse(localStorage.getItem('progressKraevedQuest_7'));
                let progressKraevedQuestSum_7_2 = progressKraevedQuest_7_2 + 1;
                let progressKraevedQuestSum_7 = progressKraevedQuestSum_7_2 + progressKraevedQuest_7;

                localStorage.setItem('progressKraevedQuest_7_2', JSON.stringify(progressKraevedQuestSum_7_2));
                localStorage.setItem('progressKraevedQuest_7', JSON.stringify(progressKraevedQuestSum_7));
                if (progressKraevedQuestSum_7_2 === 1) {
                    questionStar_7_2.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_5'))
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
                    questionKraevedCat_7_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_7_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_7_5();
                }
            }
        });
        // if (progressKraevedQuest_7_2 === 0 &&
        //     progressKraevedQuest_7_3 === 1 &&
        //     progressKraevedQuest_7_4 === 1 &&
        //     progressKraevedQuest_7_5 === 1) {
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

function questionKraevedCat_7_3() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressKraevedQuest_7_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_1')),
        progressKraevedQuest_7_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
        progressKraevedQuest_7_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3')),
        progressKraevedQuest_7_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_4')),
        progressKraevedQuest_7_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_7_3') === null) {
        localStorage.setItem('progressKraevedQuest_7_3', JSON.stringify(progressKraevedQuest_7_3));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Культурная столица','Съемки этого фильма-катастрофы происходили в Самаре', '«Экипаж»', '«34–й скорый»', '«Метро»');

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
        if (progressKraevedQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressKraevedQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressKraevedQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
        if (progressKraevedQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_7_3.length; i++) {
        if (answerVarRight_7_3[i] === answerVarRight_7_3[answerWrightNum]) {
            answerVarRight_7_3[i].addEventListener('click', () => {
                let progressKraevedQuest_7 = JSON.parse(localStorage.getItem('progressKraevedQuest_7'));
                let progressKraevedQuestSum_7_3 = progressKraevedQuest_7_3 + 1;
                let progressKraevedQuestSum_7 = progressKraevedQuestSum_7_3 + progressKraevedQuest_7;

                localStorage.setItem('progressKraevedQuest_7_3', JSON.stringify(progressKraevedQuestSum_7_3));
                localStorage.setItem('progressKraevedQuest_7', JSON.stringify(progressKraevedQuestSum_7));
                if (progressKraevedQuestSum_7_3 === 1) {
                    questionStar_7_3.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_5'))
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
                    questionKraevedCat_7_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_7_5();
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

function questionKraevedCat_7_4() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_7_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_1')),
        progressKraevedQuest_7_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
        progressKraevedQuest_7_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3')),
        progressKraevedQuest_7_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_4')),
        progressKraevedQuest_7_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_7_4') === null) {
        localStorage.setItem('progressKraevedQuest_7_4', JSON.stringify(progressKraevedQuest_7_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Культурная столица','В 2012 году в нашем городе проходили съемки фильма Сергея Урсуляка', '«Ликвидация»', '«Жизнь и судьба»', '«Исаев»');

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
        if (progressKraevedQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressKraevedQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressKraevedQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressKraevedQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_7_4.length; i++) {
        if (answerVarRight_7_4[i] === answerVarRight_7_4[answerWrightNum]) {
            answerVarRight_7_4[i].addEventListener('click', () => {
                let progressKraevedQuest_7 = JSON.parse(localStorage.getItem('progressKraevedQuest_7'));
                let progressKraevedQuestSum_7_4 = progressKraevedQuest_7_4 + 1;
                let progressKraevedQuestSum_7 = progressKraevedQuestSum_7_4 + progressKraevedQuest_7;

                localStorage.setItem('progressKraevedQuest_7_4', JSON.stringify(progressKraevedQuestSum_7_4));
                localStorage.setItem('progressKraevedQuest_7', JSON.stringify(progressKraevedQuestSum_7));
                if (progressKraevedQuestSum_7_4 === 1) {
                    questionStar_7_4.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_5'))
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
                    questionKraevedCat_7_5();
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

function questionKraevedCat_7_5() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressKraevedQuest_7_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_1')),
        progressKraevedQuest_7_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
        progressKraevedQuest_7_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3')),
        progressKraevedQuest_7_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_4')),
        progressKraevedQuest_7_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_7_4') === null) {
        localStorage.setItem('progressKraevedQuest_7_4', JSON.stringify(progressKraevedQuest_7_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Культурная столица','Самара становилась съемочной площадкой...', '5 раз', '10 раз', '8 раз');

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
        if (progressKraevedQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressKraevedQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressKraevedQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressKraevedQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_7_5.length; i++) {
        if (answerVarRight_7_5[i] === answerVarRight_7_5[answerWrightNum]) {
            answerVarRight_7_5[i].addEventListener('click', () => {
                let progressKraevedQuest_7 = JSON.parse(localStorage.getItem('progressKraevedQuest_7'));
                let progressKraevedQuestSum_7_5 = progressKraevedQuest_7_5 + 1;
                let progressKraevedQuestSum_7 = progressKraevedQuestSum_7_5 + progressKraevedQuest_7;

                localStorage.setItem('progressKraevedQuest_7_5', JSON.stringify(progressKraevedQuestSum_7_5));
                localStorage.setItem('progressKraevedQuest_7', JSON.stringify(progressKraevedQuestSum_7));
                if (progressKraevedQuestSum_7_5 === 1) {
                    questionStar_7_5.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, '«Тимур и его команда» (1940), «Хождение по мукам» (1957), «Тревожные ночи в Самаре (1969), «Жизнь и судьба (2012), «Кожа», «Метро» (2013), «Елки 3» (2013), «Вокзал для своих» (съемки — 2014 год)');

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