
if (localStorage.getItem('progressKraevedQuest_3') === null) {
    localStorage.setItem('progressKraevedQuest_3', JSON.stringify(0));
}

// Kraeved. Quest 3
function questionKraevedCat_3_1() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_3_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_1')),
        progressKraevedQuest_3_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
        progressKraevedQuest_3_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3')),
        progressKraevedQuest_3_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_4')),
        progressKraevedQuest_3_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_3_1') === null) {
        localStorage.setItem('progressKraevedQuest_3_1', JSON.stringify(progressKraevedQuest_3_1));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Районы, кварталы', 'Этот остров уютно расположился в Самарском районе', 'Зеленький', 'Поджабный', 'Элекрон');

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
        if (progressKraevedQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressKraevedQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressKraevedQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
        if (progressKraevedQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_3_1.length; i++) {
        if (answerVarRight_3_1[i] === answerVarRight_3_1[answerWrightNum]) {
            answerVarRight_3_1[i].addEventListener('click', () => {
                let progressKraevedQuest_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3'));
                let progressKraevedQuestSum_3_1 = progressKraevedQuest_3_1 + 1;
                let progressKraevedQuestSum_3 = progressKraevedQuestSum_3_1 + progressKraevedQuest_3;

                localStorage.setItem('progressKraevedQuest_3_1', JSON.stringify(progressKraevedQuestSum_3_1));
                localStorage.setItem('progressKraevedQuest_3', JSON.stringify(progressKraevedQuestSum_3));
                if (progressKraevedQuestSum_3_1 === 1) {
                    questionStar_3_1.className += 'fill';
                }
            });
            console.log(answerVarRight_3_1[answerWrightNum]);
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_5'))
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
                    questionKraevedCat_3_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionKraevedCat_3_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_3_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_3_5();
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

function questionKraevedCat_3_2() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_3_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_1')),
        progressKraevedQuest_3_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
        progressKraevedQuest_3_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3')),
        progressKraevedQuest_3_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_4')),
        progressKraevedQuest_3_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_3_2') === null) {
        localStorage.setItem('progressKraevedQuest_3_2', JSON.stringify(progressKraevedQuest_3_2));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Районы, кварталы', 'Самарская фабрика музыкальных инструментов находится...', 'Куйбышевский', 'Самарский', 'Октябрьский');

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
        if (progressKraevedQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressKraevedQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressKraevedQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
        if (progressKraevedQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_3_2.length; i++) {
        if (answerVarRight_3_2[i] === answerVarRight_3_2[answerWrightNum]) {
            answerVarRight_3_2[i].addEventListener('click', () => {
                let progressKraevedQuest_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3'));
                let progressKraevedQuestSum_3_2 = progressKraevedQuest_3_2 + 1;
                let progressKraevedQuestSum_3 = progressKraevedQuestSum_3_2 + progressKraevedQuest_3;

                localStorage.setItem('progressKraevedQuest_3_2', JSON.stringify(progressKraevedQuestSum_3_2));
                localStorage.setItem('progressKraevedQuest_3', JSON.stringify(progressKraevedQuestSum_3));
                if (progressKraevedQuestSum_3_2 === 1) {
                    questionStar_3_2.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_5'))
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
                    questionKraevedCat_3_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_3_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_3_5();
                }
            }
        });
        // if (progressKraevedQuest_3_2 === 0 &&
        //     progressKraevedQuest_3_3 === 1 &&
        //     progressKraevedQuest_3_4 === 1 &&
        //     progressKraevedQuest_3_5 === 1) {
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

function questionKraevedCat_3_3() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_3_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_1')),
        progressKraevedQuest_3_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
        progressKraevedQuest_3_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3')),
        progressKraevedQuest_3_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_4')),
        progressKraevedQuest_3_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_3_3') === null) {
        localStorage.setItem('progressKraevedQuest_3_3', JSON.stringify(progressKraevedQuest_3_3));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Районы, кварталы','Эту улицу называли улицей 8 банков', 'Улица Ленинградская', 'Улица Куйбышева', 'Улица Фрунзе');

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
        if (progressKraevedQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressKraevedQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressKraevedQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
        if (progressKraevedQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_3_3.length; i++) {
        if (answerVarRight_3_3[i] === answerVarRight_3_3[answerWrightNum]) {
            answerVarRight_3_3[i].addEventListener('click', () => {
                let progressKraevedQuest_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3'));
                let progressKraevedQuestSum_3_3 = progressKraevedQuest_3_3 + 1;
                let progressKraevedQuestSum_3 = progressKraevedQuestSum_3_3 + progressKraevedQuest_3;

                localStorage.setItem('progressKraevedQuest_3_3', JSON.stringify(progressKraevedQuestSum_3_3));
                localStorage.setItem('progressKraevedQuest_3', JSON.stringify(progressKraevedQuestSum_3));
                if (progressKraevedQuestSum_3_3 === 1) {
                    questionStar_3_3.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'На Дворянской (ныне улица Куйбышева) располагалось 8 банков из 11 действовавших в Самаре');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_5'))
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
                    questionKraevedCat_3_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_3_5();
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

function questionKraevedCat_3_4() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_3_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_1')),
        progressKraevedQuest_3_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
        progressKraevedQuest_3_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3')),
        progressKraevedQuest_3_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_4')),
        progressKraevedQuest_3_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_3_4') === null) {
        localStorage.setItem('progressKraevedQuest_3_4', JSON.stringify(progressKraevedQuest_3_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Районы, кварталы','Первый фирменный магазин был открыт на этой площади', 'Алексеевская площадь (сегодня площадь Революции)', 'Хлебная площадь', 'Самарская площадь');

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
        if (progressKraevedQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressKraevedQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressKraevedQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressKraevedQuest_3_5 === 1) {
            questionStar_3_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_3_4.length; i++) {
        if (answerVarRight_3_4[i] === answerVarRight_3_4[answerWrightNum]) {
            answerVarRight_3_4[i].addEventListener('click', () => {
                let progressKraevedQuest_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3'));
                let progressKraevedQuestSum_3_4 = progressKraevedQuest_3_4 + 1;
                let progressKraevedQuestSum_3 = progressKraevedQuestSum_3_4 + progressKraevedQuest_3;

                localStorage.setItem('progressKraevedQuest_3_4', JSON.stringify(progressKraevedQuestSum_3_4));
                localStorage.setItem('progressKraevedQuest_3', JSON.stringify(progressKraevedQuestSum_3));
                if (progressKraevedQuestSum_3_4 === 1) {
                    questionStar_3_4.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_5'))
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
                    questionKraevedCat_3_5();
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

function questionKraevedCat_3_5() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_3_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_1')),
        progressKraevedQuest_3_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
        progressKraevedQuest_3_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3')),
        progressKraevedQuest_3_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_4')),
        progressKraevedQuest_3_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_3_4') === null) {
        localStorage.setItem('progressKraevedQuest_3_4', JSON.stringify(progressKraevedQuest_3_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Районы, кварталы','Первые трамвайные пути проходили по улицам...', 'Полевая – площадь Революции', 'Полевая – Хлебная площадь', 'Полевая – Самарская площадь');

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
        if (progressKraevedQuest_3_1 === 1) {
            questionStar_3_1.className += 'fill';
        }
        if (progressKraevedQuest_3_2 === 1) {
            questionStar_3_2.className += 'fill';
        }
        if (progressKraevedQuest_3_3 === 1) {
            questionStar_3_3.className += 'fill';
        }
        if (progressKraevedQuest_3_4 === 1) {
            questionStar_3_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_3_5.length; i++) {
        if (answerVarRight_3_5[i] === answerVarRight_3_5[answerWrightNum]) {
            answerVarRight_3_5[i].addEventListener('click', () => {
                let progressKraevedQuest_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3'));
                let progressKraevedQuestSum_3_5 = progressKraevedQuest_3_5 + 1;
                let progressKraevedQuestSum_3 = progressKraevedQuestSum_3_5 + progressKraevedQuest_3;

                localStorage.setItem('progressKraevedQuest_3_5', JSON.stringify(progressKraevedQuestSum_3_5));
                localStorage.setItem('progressKraevedQuest_3', JSON.stringify(progressKraevedQuestSum_3));
                if (progressKraevedQuestSum_3_5 === 1) {
                    questionStar_3_5.className += 'fill';
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