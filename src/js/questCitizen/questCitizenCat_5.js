
if (localStorage.getItem('progressCitizenQuest_5') === null) {
    localStorage.setItem('progressCitizenQuest_5', JSON.stringify(0));
}

// Citizen. Quest 5. Самара в лицах
function questionCitizenCat_5_1() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
        progressCitizenQuest_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        progressCitizenQuest_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        progressCitizenQuest_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        progressCitizenQuest_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_5_1') === null) {
        localStorage.setItem('progressCitizenQuest_5_1', JSON.stringify(progressCitizenQuest_5_1));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Самара в лицах', 'Он основал в Самаре одно из крупнейших промышленных в России пивоваренных заводов', 'Михаил Дмитриевич Челышев', 'Альфред фон Вакано', 'Мориц Морицович Фабер');

    let answerVar_5_1_1 = document.getElementById('answerVar_1'),
        answerVar_5_1_2 = document.getElementById('answerVar_2'),
        answerVar_5_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_1 = [answerVar_5_1_1, answerVar_5_1_2, answerVar_5_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_5_1"></li>
        <li id="questionStar_5_2"></li>
        <li id="questionStar_5_3"></li>
        <li id="questionStar_5_4"></li>
        <li id="questionStar_5_5"></li>
    `;

    const questionStar_5_1 = document.getElementById('questionStar_5_1'),
        questionStar_5_2 = document.getElementById('questionStar_5_2'),
        questionStar_5_3 = document.getElementById('questionStar_5_3'),
        questionStar_5_4 = document.getElementById('questionStar_5_4'),
        questionStar_5_5 = document.getElementById('questionStar_5_5')
    ;

    function starsView_1() {
        if (progressCitizenQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressCitizenQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressCitizenQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
        if (progressCitizenQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_5_1.length; i++) {
        if (answerVarRight_5_1[i] === answerVarRight_5_1[answerWrightNum]) {
            answerVarRight_5_1[i].addEventListener('click', () => {
                let progressCitizenQuest_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5'));
                let progressCitizenQuestSum_5_1 = progressCitizenQuest_5_1 + 1;
                let progressCitizenQuestSum_5 = progressCitizenQuestSum_5_1 + progressCitizenQuest_5;

                localStorage.setItem('progressCitizenQuest_5_1', JSON.stringify(progressCitizenQuestSum_5_1));
                localStorage.setItem('progressCitizenQuest_5', JSON.stringify(progressCitizenQuestSum_5));
                if (progressCitizenQuestSum_5_1 === 1) {
                    questionStar_5_1.className += 'fill';
                }
            });
            console.log(answerVarRight_5_1[answerWrightNum]);
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Верно! Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        questValue_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        questValue_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        questValue_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5'))
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
                if (questValue_5_2 === 1 &&
                    questValue_5_3 === 1 &&
                    questValue_5_4 === 1 &&
                    questValue_5_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_5_2 === 0) {
                    questionCitizenCat_5_2();
                } else if (questValue_5_2 === 1 && questValue_5_3 === 0) {
                    questionCitizenCat_5_3();
                } else if (questValue_5_3 === 1 && questValue_5_4 === 0) {
                    questionCitizenCat_5_4();
                } else if (questValue_5_4 === 1 && questValue_5_5 === 0) {
                    questionCitizenCat_5_5();
                }
            }
        });
        // if (progressCitizenQuest_5_1 === 0 &&
        //     progressCitizenQuest_5_2 === 1 &&
        //     progressCitizenQuest_5_3 === 1 &&
        //     progressCitizenQuest_5_4 === 1 &&
        //     progressCitizenQuest_5_5 === 1) {
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

function questionCitizenCat_5_2() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
        progressCitizenQuest_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        progressCitizenQuest_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        progressCitizenQuest_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        progressCitizenQuest_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_5_2') === null) {
        localStorage.setItem('progressCitizenQuest_5_2', JSON.stringify(progressCitizenQuest_5_2));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Самара в лицах', 'Писательница Людмила Петрушевская жила некоторое время в Самаре', 'В годы Великой Отечественной войны', 'В 90-е годы', 'В 80-е годы');

    let answerVar_5_2_1 = document.getElementById('answerVar_1'),
        answerVar_5_2_2 = document.getElementById('answerVar_2'),
        answerVar_5_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_2 = [answerVar_5_2_1, answerVar_5_2_2, answerVar_5_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_5_1"></li>
        <li id="questionStar_5_2"></li>
        <li id="questionStar_5_3"></li>
        <li id="questionStar_5_4"></li>
        <li id="questionStar_5_5"></li>
    `;

    const questionStar_5_1 = document.getElementById('questionStar_5_1'),
        questionStar_5_2 = document.getElementById('questionStar_5_2'),
        questionStar_5_3 = document.getElementById('questionStar_5_3'),
        questionStar_5_4 = document.getElementById('questionStar_5_4'),
        questionStar_5_5 = document.getElementById('questionStar_5_5')
    ;

    function starsView_2() {
        if (progressCitizenQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressCitizenQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressCitizenQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
        if (progressCitizenQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_5_2.length; i++) {
        if (answerVarRight_5_2[i] === answerVarRight_5_2[answerWrightNum]) {
            answerVarRight_5_2[i].addEventListener('click', () => {
                let progressCitizenQuest_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5'));
                let progressCitizenQuestSum_5_2 = progressCitizenQuest_5_2 + 1;
                let progressCitizenQuestSum_5 = progressCitizenQuestSum_5_2 + progressCitizenQuest_5;

                localStorage.setItem('progressCitizenQuest_5_2', JSON.stringify(progressCitizenQuestSum_5_2));
                localStorage.setItem('progressCitizenQuest_5', JSON.stringify(progressCitizenQuestSum_5));
                if (progressCitizenQuestSum_5_2 === 1) {
                    questionStar_5_2.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
        questValue_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        questValue_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        questValue_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        questValue_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5'))
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
                if (questValue_5_3 === 1 &&
                    questValue_5_4 === 1 &&
                    questValue_5_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_5_3 === 0) {
                    questionCitizenCat_5_3();
                } else if (questValue_5_3 === 1 && questValue_5_4 === 0) {
                    questionCitizenCat_5_4();
                } else if (questValue_5_4 === 1 && questValue_5_5 === 0) {
                    questionCitizenCat_5_5();
                }
            }
        });
        // if (progressCitizenQuest_5_2 === 0 &&
        //     progressCitizenQuest_5_3 === 1 &&
        //     progressCitizenQuest_5_4 === 1 &&
        //     progressCitizenQuest_5_5 === 1) {
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

function questionCitizenCat_5_3() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
        progressCitizenQuest_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        progressCitizenQuest_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        progressCitizenQuest_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        progressCitizenQuest_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_5_3') === null) {
        localStorage.setItem('progressCitizenQuest_5_3', JSON.stringify(progressCitizenQuest_5_3));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Самара в лицах','Об этом человеке написаны десятки книг и тысячи газетных статей. Во время войны жил в Куйбышеве, где по заданию руководства вел секретные радиоигры против спецслужб фашистской Германии', 'Рихард Зорге', 'Рудольф Абель', 'Гарри Сент-Джон');

    let answerVar_5_3_1 = document.getElementById('answerVar_1'),
        answerVar_5_3_2 = document.getElementById('answerVar_2'),
        answerVar_5_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_3 = [answerVar_5_3_1, answerVar_5_3_2, answerVar_5_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_5_1"></li>
        <li id="questionStar_5_2"></li>
        <li id="questionStar_5_3"></li>
        <li id="questionStar_5_4"></li>
        <li id="questionStar_5_5"></li>
    `;

    const questionStar_5_1 = document.getElementById('questionStar_5_1'),
        questionStar_5_2 = document.getElementById('questionStar_5_2'),
        questionStar_5_3 = document.getElementById('questionStar_5_3'),
        questionStar_5_4 = document.getElementById('questionStar_5_4'),
        questionStar_5_5 = document.getElementById('questionStar_5_5')
    ;

    function starsView_3() {
        if (progressCitizenQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressCitizenQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressCitizenQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
        if (progressCitizenQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_5_3.length; i++) {
        if (answerVarRight_5_3[i] === answerVarRight_5_3[answerWrightNum]) {
            answerVarRight_5_3[i].addEventListener('click', () => {
                let progressCitizenQuest_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5'));
                let progressCitizenQuestSum_5_3 = progressCitizenQuest_5_3 + 1;
                let progressCitizenQuestSum_5 = progressCitizenQuestSum_5_3 + progressCitizenQuest_5;

                localStorage.setItem('progressCitizenQuest_5_3', JSON.stringify(progressCitizenQuestSum_5_3));
                localStorage.setItem('progressCitizenQuest_5', JSON.stringify(progressCitizenQuestSum_5));
                if (progressCitizenQuestSum_5_3 === 1) {
                    questionStar_5_3.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Именно так! Дом, стены которого помнят его семью, стоит в Самаре до сих пор – это дом №8 по улице Молодогвардейской.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
        questValue_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        questValue_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        questValue_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        questValue_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5'))
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
                if (questValue_5_4 === 1 &&
                    questValue_5_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_5_4 === 0) {
                    questionCitizenCat_5_4();
                } else if (questValue_5_4 === 1 && questValue_5_5 === 0) {
                    questionCitizenCat_5_5();
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

function questionCitizenCat_5_4() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
        progressCitizenQuest_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        progressCitizenQuest_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        progressCitizenQuest_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        progressCitizenQuest_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_5_4') === null) {
        localStorage.setItem('progressCitizenQuest_5_4', JSON.stringify(progressCitizenQuest_5_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Самара в лицах','Кудесник причесок и париков', 'Гарус Владимир Михайлович', 'Александр Тодчук', 'Александр Тодчук');

    let answerVar_5_4_1 = document.getElementById('answerVar_1'),
        answerVar_5_4_2 = document.getElementById('answerVar_2'),
        answerVar_5_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_4 = [answerVar_5_4_1, answerVar_5_4_2, answerVar_5_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_5_1"></li>
        <li id="questionStar_5_2"></li>
        <li id="questionStar_5_3"></li>
        <li id="questionStar_5_4"></li>
        <li id="questionStar_5_5"></li>
    `;

    const questionStar_5_1 = document.getElementById('questionStar_5_1'),
        questionStar_5_2 = document.getElementById('questionStar_5_2'),
        questionStar_5_3 = document.getElementById('questionStar_5_3'),
        questionStar_5_4 = document.getElementById('questionStar_5_4'),
        questionStar_5_5 = document.getElementById('questionStar_5_5')
    ;

    function starsView_4() {
        if (progressCitizenQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressCitizenQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressCitizenQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressCitizenQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_5_4.length; i++) {
        if (answerVarRight_5_4[i] === answerVarRight_5_4[answerWrightNum]) {
            answerVarRight_5_4[i].addEventListener('click', () => {
                let progressCitizenQuest_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5'));
                let progressCitizenQuestSum_5_4 = progressCitizenQuest_5_4 + 1;
                let progressCitizenQuestSum_5 = progressCitizenQuestSum_5_4 + progressCitizenQuest_5;

                localStorage.setItem('progressCitizenQuest_5_4', JSON.stringify(progressCitizenQuestSum_5_4));
                localStorage.setItem('progressCitizenQuest_5', JSON.stringify(progressCitizenQuestSum_5));
                if (progressCitizenQuestSum_5_4 === 1) {
                    questionStar_5_4.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
        questValue_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        questValue_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        questValue_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        questValue_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5'))
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
                if (questValue_5_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_5_5 === 0) {
                    questionCitizenCat_5_5();
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

function questionCitizenCat_5_5() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
        progressCitizenQuest_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        progressCitizenQuest_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        progressCitizenQuest_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        progressCitizenQuest_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_5_4') === null) {
        localStorage.setItem('progressCitizenQuest_5_4', JSON.stringify(progressCitizenQuest_5_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Самара в лицах','Он стоял у истоков создания ракетно – космической отрасли в Самаре', 'Сергей Павлович Королев', 'Дмитрий Ильич Козлов', 'Равиль Нургалиевич Ахметов');

    let answerVar_5_5_1 = document.getElementById('answerVar_1'),
        answerVar_5_5_2 = document.getElementById('answerVar_2'),
        answerVar_5_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_5 = [answerVar_5_5_1, answerVar_5_5_2, answerVar_5_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_5_1"></li>
        <li id="questionStar_5_2"></li>
        <li id="questionStar_5_3"></li>
        <li id="questionStar_5_4"></li>
        <li id="questionStar_5_5"></li>
    `;

    const questionStar_5_1 = document.getElementById('questionStar_5_1'),
        questionStar_5_2 = document.getElementById('questionStar_5_2'),
        questionStar_5_3 = document.getElementById('questionStar_5_3'),
        questionStar_5_4 = document.getElementById('questionStar_5_4'),
        questionStar_5_5 = document.getElementById('questionStar_5_5')
    ;

    function starsView_5() {
        if (progressCitizenQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressCitizenQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressCitizenQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressCitizenQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_5_5.length; i++) {
        if (answerVarRight_5_5[i] === answerVarRight_5_5[answerWrightNum]) {
            answerVarRight_5_5[i].addEventListener('click', () => {
                let progressCitizenQuest_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5'));
                let progressCitizenQuestSum_5_5 = progressCitizenQuest_5_5 + 1;
                let progressCitizenQuestSum_5 = progressCitizenQuestSum_5_5 + progressCitizenQuest_5;

                localStorage.setItem('progressCitizenQuest_5_5', JSON.stringify(progressCitizenQuestSum_5_5));
                localStorage.setItem('progressCitizenQuest_5', JSON.stringify(progressCitizenQuestSum_5));
                if (progressCitizenQuestSum_5_5 === 1) {
                    questionStar_5_5.className += 'fill';
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