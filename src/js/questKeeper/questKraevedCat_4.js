
if (localStorage.getItem('progressKraevedQuest_4') === null) {
    localStorage.setItem('progressKraevedQuest_4', JSON.stringify(0));
}

// Kraeved. Quest 4
function questionKraevedCat_4_1() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_4_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_1')),
        progressKraevedQuest_4_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
        progressKraevedQuest_4_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3')),
        progressKraevedQuest_4_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_4')),
        progressKraevedQuest_4_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_4_1') === null) {
        localStorage.setItem('progressKraevedQuest_4_1', JSON.stringify(progressKraevedQuest_4_1));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Вот дом, который построил', 'Этот дом был самым первым оснащен лифтом', 'Дом Елизаветы Ивановны Субботиной', 'Дом Александра Александровича Щербачева', 'Дом Константина Карловича Головкина');

    let answerVar_4_1_1 = document.getElementById('answerVar_1'),
        answerVar_4_1_2 = document.getElementById('answerVar_2'),
        answerVar_4_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_1 = [answerVar_4_1_1, answerVar_4_1_2, answerVar_4_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_4_1"></li>
        <li id="questionStar_4_2"></li>
        <li id="questionStar_4_3"></li>
        <li id="questionStar_4_4"></li>
        <li id="questionStar_4_5"></li>
    `;

    const questionStar_4_1 = document.getElementById('questionStar_4_1'),
        questionStar_4_2 = document.getElementById('questionStar_4_2'),
        questionStar_4_3 = document.getElementById('questionStar_4_3'),
        questionStar_4_4 = document.getElementById('questionStar_4_4'),
        questionStar_4_5 = document.getElementById('questionStar_4_5')
    ;

    function starsView_1() {
        if (progressKraevedQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressKraevedQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressKraevedQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
        if (progressKraevedQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_4_1.length; i++) {
        if (answerVarRight_4_1[i] === answerVarRight_4_1[answerWrightNum]) {
            answerVarRight_4_1[i].addEventListener('click', () => {
                let progressKraevedQuest_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4'));
                let progressKraevedQuestSum_4_1 = progressKraevedQuest_4_1 + 1;
                let progressKraevedQuestSum_4 = progressKraevedQuestSum_4_1 + progressKraevedQuest_4;

                localStorage.setItem('progressKraevedQuest_4_1', JSON.stringify(progressKraevedQuestSum_4_1));
                localStorage.setItem('progressKraevedQuest_4', JSON.stringify(progressKraevedQuestSum_4));
                if (progressKraevedQuestSum_4_1 === 1) {
                    questionStar_4_1.className += 'fill';
                }
            });
            console.log(answerVarRight_4_1[answerWrightNum]);
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'С 1 января 1897 в доме Субботиной вновь открылась гостиница братьев Ивановых. Это самая престижная гостиница в Самаре. В ней имеется лифт, ванные с горячей водой');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_5'))
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
                    questionKraevedCat_4_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionKraevedCat_4_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_4_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_4_5();
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

function questionKraevedCat_4_2() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_4_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_1')),
        progressKraevedQuest_4_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
        progressKraevedQuest_4_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3')),
        progressKraevedQuest_4_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_4')),
        progressKraevedQuest_4_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_4_2') === null) {
        localStorage.setItem('progressKraevedQuest_4_2', JSON.stringify(progressKraevedQuest_4_2));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Вот дом, который построил', 'Торжественное «рождение» губернии состоялось в доме...', 'Ивана Ивановича Маке', 'Петра Владимировича Алабина', 'Варвары Акимовны Курлиной');

    let answerVar_4_2_1 = document.getElementById('answerVar_1'),
        answerVar_4_2_2 = document.getElementById('answerVar_2'),
        answerVar_4_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_2 = [answerVar_4_2_1, answerVar_4_2_2, answerVar_4_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_4_1"></li>
        <li id="questionStar_4_2"></li>
        <li id="questionStar_4_3"></li>
        <li id="questionStar_4_4"></li>
        <li id="questionStar_4_5"></li>
    `;

    const questionStar_4_1 = document.getElementById('questionStar_4_1'),
        questionStar_4_2 = document.getElementById('questionStar_4_2'),
        questionStar_4_3 = document.getElementById('questionStar_4_3'),
        questionStar_4_4 = document.getElementById('questionStar_4_4'),
        questionStar_4_5 = document.getElementById('questionStar_4_5')
    ;

    function starsView_2() {
        if (progressKraevedQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressKraevedQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressKraevedQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
        if (progressKraevedQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_4_2.length; i++) {
        if (answerVarRight_4_2[i] === answerVarRight_4_2[answerWrightNum]) {
            answerVarRight_4_2[i].addEventListener('click', () => {
                let progressKraevedQuest_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4'));
                let progressKraevedQuestSum_4_2 = progressKraevedQuest_4_2 + 1;
                let progressKraevedQuestSum_4 = progressKraevedQuestSum_4_2 + progressKraevedQuest_4;

                localStorage.setItem('progressKraevedQuest_4_2', JSON.stringify(progressKraevedQuestSum_4_2));
                localStorage.setItem('progressKraevedQuest_4', JSON.stringify(progressKraevedQuestSum_4));
                if (progressKraevedQuestSum_4_2 === 1) {
                    questionStar_4_2.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Торжественное открытие Самарской губернии состоялось в арендованном под губернское правление доме симбирского купца Ивана Ивановича Маке на Казанской улице (совр. Алексея Толстого)');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_5'))
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
                    questionKraevedCat_4_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_4_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_4_5();
                }
            }
        });
        // if (progressKraevedQuest_4_2 === 0 &&
        //     progressKraevedQuest_4_3 === 1 &&
        //     progressKraevedQuest_4_4 === 1 &&
        //     progressKraevedQuest_4_5 === 1) {
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

function questionKraevedCat_4_3() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_4_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_1')),
        progressKraevedQuest_4_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
        progressKraevedQuest_4_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3')),
        progressKraevedQuest_4_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_4')),
        progressKraevedQuest_4_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_4_3') === null) {
        localStorage.setItem('progressKraevedQuest_4_3', JSON.stringify(progressKraevedQuest_4_3));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Вот дом, который построил','Чем примечательна история домов № 20 и 22 по улице Ленинградской?', 'Они вновь отреставрированные', 'Размещались административные учреждения', 'Размещались почетные гости Самары');

    let answerVar_4_3_1 = document.getElementById('answerVar_1'),
        answerVar_4_3_2 = document.getElementById('answerVar_2'),
        answerVar_4_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_3 = [answerVar_4_3_1, answerVar_4_3_2, answerVar_4_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_4_1"></li>
        <li id="questionStar_4_2"></li>
        <li id="questionStar_4_3"></li>
        <li id="questionStar_4_4"></li>
        <li id="questionStar_4_5"></li>
    `;

    const questionStar_4_1 = document.getElementById('questionStar_4_1'),
        questionStar_4_2 = document.getElementById('questionStar_4_2'),
        questionStar_4_3 = document.getElementById('questionStar_4_3'),
        questionStar_4_4 = document.getElementById('questionStar_4_4'),
        questionStar_4_5 = document.getElementById('questionStar_4_5')
    ;

    function starsView_3() {
        if (progressKraevedQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressKraevedQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressKraevedQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
        if (progressKraevedQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_4_3.length; i++) {
        if (answerVarRight_4_3[i] === answerVarRight_4_3[answerWrightNum]) {
            answerVarRight_4_3[i].addEventListener('click', () => {
                let progressKraevedQuest_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4'));
                let progressKraevedQuestSum_4_3 = progressKraevedQuest_4_3 + 1;
                let progressKraevedQuestSum_4 = progressKraevedQuestSum_4_3 + progressKraevedQuest_4;

                localStorage.setItem('progressKraevedQuest_4_3', JSON.stringify(progressKraevedQuestSum_4_3));
                localStorage.setItem('progressKraevedQuest_4', JSON.stringify(progressKraevedQuestSum_4));
                if (progressKraevedQuestSum_4_3 === 1) {
                    questionStar_4_3.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Дом 20 сгорел, но его вновь отстроили владельцы – мещане Казаченковы, дом 22 дважды горел и дважды отстраивался');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_5'))
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
                    questionKraevedCat_4_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_4_5();
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

function questionKraevedCat_4_4() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressKraevedQuest_4_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_1')),
        progressKraevedQuest_4_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
        progressKraevedQuest_4_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3')),
        progressKraevedQuest_4_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_4')),
        progressKraevedQuest_4_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_4_4') === null) {
        localStorage.setItem('progressKraevedQuest_4_4', JSON.stringify(progressKraevedQuest_4_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Вот дом, который построил','Живые цветочные композиции украшавшие подоконники жилых домов обозначают...', 'знатное положение жильца', 'эстетический вкус жильца', 'что здесь проживают коренные самарцы');

    let answerVar_4_4_1 = document.getElementById('answerVar_1'),
        answerVar_4_4_2 = document.getElementById('answerVar_2'),
        answerVar_4_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_4 = [answerVar_4_4_1, answerVar_4_4_2, answerVar_4_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_4_1"></li>
        <li id="questionStar_4_2"></li>
        <li id="questionStar_4_3"></li>
        <li id="questionStar_4_4"></li>
        <li id="questionStar_4_5"></li>
    `;

    const questionStar_4_1 = document.getElementById('questionStar_4_1'),
        questionStar_4_2 = document.getElementById('questionStar_4_2'),
        questionStar_4_3 = document.getElementById('questionStar_4_3'),
        questionStar_4_4 = document.getElementById('questionStar_4_4'),
        questionStar_4_5 = document.getElementById('questionStar_4_5')
    ;

    function starsView_4() {
        if (progressKraevedQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressKraevedQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressKraevedQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressKraevedQuest_4_5 === 1) {
            questionStar_4_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_4_4.length; i++) {
        if (answerVarRight_4_4[i] === answerVarRight_4_4[answerWrightNum]) {
            answerVarRight_4_4[i].addEventListener('click', () => {
                let progressKraevedQuest_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4'));
                let progressKraevedQuestSum_4_4 = progressKraevedQuest_4_4 + 1;
                let progressKraevedQuestSum_4 = progressKraevedQuestSum_4_4 + progressKraevedQuest_4;

                localStorage.setItem('progressKraevedQuest_4_4', JSON.stringify(progressKraevedQuestSum_4_4));
                localStorage.setItem('progressKraevedQuest_4', JSON.stringify(progressKraevedQuestSum_4));
                if (progressKraevedQuestSum_4_4 === 1) {
                    questionStar_4_4.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_5'))
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
                    questionKraevedCat_4_5();
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

function questionKraevedCat_4_5() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_4_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_1')),
        progressKraevedQuest_4_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
        progressKraevedQuest_4_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3')),
        progressKraevedQuest_4_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_4')),
        progressKraevedQuest_4_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_4_4') === null) {
        localStorage.setItem('progressKraevedQuest_4_4', JSON.stringify(progressKraevedQuest_4_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Вот дом, который построил','Первым учителем Константина Павловича Головкина по художественному искусству был...', 'Николай Андреевич Храмцов', 'Федор Емельянович Буров', 'Илья Ефимович Репин');

    let answerVar_4_5_1 = document.getElementById('answerVar_1'),
        answerVar_4_5_2 = document.getElementById('answerVar_2'),
        answerVar_4_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_5 = [answerVar_4_5_1, answerVar_4_5_2, answerVar_4_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_4_1"></li>
        <li id="questionStar_4_2"></li>
        <li id="questionStar_4_3"></li>
        <li id="questionStar_4_4"></li>
        <li id="questionStar_4_5"></li>
    `;

    const questionStar_4_1 = document.getElementById('questionStar_4_1'),
        questionStar_4_2 = document.getElementById('questionStar_4_2'),
        questionStar_4_3 = document.getElementById('questionStar_4_3'),
        questionStar_4_4 = document.getElementById('questionStar_4_4'),
        questionStar_4_5 = document.getElementById('questionStar_4_5')
    ;

    function starsView_5() {
        if (progressKraevedQuest_4_1 === 1) {
            questionStar_4_1.className += 'fill';
        }
        if (progressKraevedQuest_4_2 === 1) {
            questionStar_4_2.className += 'fill';
        }
        if (progressKraevedQuest_4_3 === 1) {
            questionStar_4_3.className += 'fill';
        }
        if (progressKraevedQuest_4_4 === 1) {
            questionStar_4_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_4_5.length; i++) {
        if (answerVarRight_4_5[i] === answerVarRight_4_5[answerWrightNum]) {
            answerVarRight_4_5[i].addEventListener('click', () => {
                let progressKraevedQuest_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4'));
                let progressKraevedQuestSum_4_5 = progressKraevedQuest_4_5 + 1;
                let progressKraevedQuestSum_4 = progressKraevedQuestSum_4_5 + progressKraevedQuest_4;

                localStorage.setItem('progressKraevedQuest_4_5', JSON.stringify(progressKraevedQuestSum_4_5));
                localStorage.setItem('progressKraevedQuest_4', JSON.stringify(progressKraevedQuestSum_4));
                if (progressKraevedQuestSum_4_5 === 1) {
                    questionStar_4_5.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

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