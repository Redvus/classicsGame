
if (localStorage.getItem('progressCitizenQuest_6') === null) {
    localStorage.setItem('progressCitizenQuest_6', JSON.stringify(0));
}

// Citizen. Quest 6. Создано в Самаре
function questionCitizenCat_6_1() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressCitizenQuest_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
        progressCitizenQuest_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        progressCitizenQuest_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        progressCitizenQuest_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        progressCitizenQuest_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_6_1') === null) {
        localStorage.setItem('progressCitizenQuest_6_1', JSON.stringify(progressCitizenQuest_6_1));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Создано в Самаре', 'Тольяттинский автозавод «Автоваз» выпускал автомобили марки', '«Москвич»', '«Волга»', '«Жигули»');

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
        if (progressCitizenQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressCitizenQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressCitizenQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
        if (progressCitizenQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_6_1.length; i++) {
        if (answerVarRight_6_1[i] === answerVarRight_6_1[answerWrightNum]) {
            answerVarRight_6_1[i].addEventListener('click', () => {
                let progressCitizenQuest_6 = JSON.parse(localStorage.getItem('progressCitizenQuest_6'));
                let progressCitizenQuestSum_6_1 = progressCitizenQuest_6_1 + 1;
                let progressCitizenQuestSum_6 = progressCitizenQuestSum_6_1 + progressCitizenQuest_6;

                localStorage.setItem('progressCitizenQuest_6_1', JSON.stringify(progressCitizenQuestSum_6_1));
                localStorage.setItem('progressCitizenQuest_6', JSON.stringify(progressCitizenQuestSum_6));
                if (progressCitizenQuestSum_6_1 === 1) {
                    questionStar_6_1.className += 'fill';
                }
            });
            console.log(answerVarRight_6_1[answerWrightNum]);
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Верно! Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        questValue_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        questValue_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        questValue_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5'))
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
                if (questValue_6_2 === 1 &&
                    questValue_6_3 === 1 &&
                    questValue_6_4 === 1 &&
                    questValue_6_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_6_2 === 0) {
                    questionCitizenCat_6_2();
                } else if (questValue_6_2 === 1 && questValue_6_3 === 0) {
                    questionCitizenCat_6_3();
                } else if (questValue_6_3 === 1 && questValue_6_4 === 0) {
                    questionCitizenCat_6_4();
                } else if (questValue_6_4 === 1 && questValue_6_5 === 0) {
                    questionCitizenCat_6_5();
                }
            }
        });
        // if (progressCitizenQuest_6_1 === 0 &&
        //     progressCitizenQuest_6_2 === 1 &&
        //     progressCitizenQuest_6_3 === 1 &&
        //     progressCitizenQuest_6_4 === 1 &&
        //     progressCitizenQuest_6_5 === 1) {
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

function questionCitizenCat_6_2() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressCitizenQuest_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
        progressCitizenQuest_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        progressCitizenQuest_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        progressCitizenQuest_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        progressCitizenQuest_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_6_2') === null) {
        localStorage.setItem('progressCitizenQuest_6_2', JSON.stringify(progressCitizenQuest_6_2));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Создано в Самаре', 'Эта кондитерская фабрика выпускает знаменитую «Самарскую помадку»', '«Россия»', '«Лиронас»', '«Мир»');

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
        if (progressCitizenQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressCitizenQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressCitizenQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
        if (progressCitizenQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_6_2.length; i++) {
        if (answerVarRight_6_2[i] === answerVarRight_6_2[answerWrightNum]) {
            answerVarRight_6_2[i].addEventListener('click', () => {
                let progressCitizenQuest_6 = JSON.parse(localStorage.getItem('progressCitizenQuest_6'));
                let progressCitizenQuestSum_6_2 = progressCitizenQuest_6_2 + 1;
                let progressCitizenQuestSum_6 = progressCitizenQuestSum_6_2 + progressCitizenQuest_6;

                localStorage.setItem('progressCitizenQuest_6_2', JSON.stringify(progressCitizenQuestSum_6_2));
                localStorage.setItem('progressCitizenQuest_6', JSON.stringify(progressCitizenQuestSum_6));
                if (progressCitizenQuestSum_6_2 === 1) {
                    questionStar_6_2.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
        questValue_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        questValue_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        questValue_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        questValue_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5'))
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
                if (questValue_6_3 === 1 &&
                    questValue_6_4 === 1 &&
                    questValue_6_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_6_3 === 0) {
                    questionCitizenCat_6_3();
                } else if (questValue_6_3 === 1 && questValue_6_4 === 0) {
                    questionCitizenCat_6_4();
                } else if (questValue_6_4 === 1 && questValue_6_5 === 0) {
                    questionCitizenCat_6_5();
                }
            }
        });
        // if (progressCitizenQuest_6_2 === 0 &&
        //     progressCitizenQuest_6_3 === 1 &&
        //     progressCitizenQuest_6_4 === 1 &&
        //     progressCitizenQuest_6_5 === 1) {
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

function questionCitizenCat_6_3() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressCitizenQuest_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
        progressCitizenQuest_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        progressCitizenQuest_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        progressCitizenQuest_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        progressCitizenQuest_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_6_3') === null) {
        localStorage.setItem('progressCitizenQuest_6_3', JSON.stringify(progressCitizenQuest_6_3));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Создано в Самаре','Самарская макаронная фабрика', '«Макфа»', '«Верола»', '«Щебекино»');

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
        if (progressCitizenQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressCitizenQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressCitizenQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
        if (progressCitizenQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_6_3.length; i++) {
        if (answerVarRight_6_3[i] === answerVarRight_6_3[answerWrightNum]) {
            answerVarRight_6_3[i].addEventListener('click', () => {
                let progressCitizenQuest_6 = JSON.parse(localStorage.getItem('progressCitizenQuest_6'));
                let progressCitizenQuestSum_6_3 = progressCitizenQuest_6_3 + 1;
                let progressCitizenQuestSum_6 = progressCitizenQuestSum_6_3 + progressCitizenQuest_6;

                localStorage.setItem('progressCitizenQuest_6_3', JSON.stringify(progressCitizenQuestSum_6_3));
                localStorage.setItem('progressCitizenQuest_6', JSON.stringify(progressCitizenQuestSum_6));
                if (progressCitizenQuestSum_6_3 === 1) {
                    questionStar_6_3.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Именно так! Дом, стены которого помнят его семью, стоит в Самаре до сих пор – это дом №8 по улице Молодогвардейской.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
        questValue_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        questValue_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        questValue_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        questValue_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5'))
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
                if (questValue_6_4 === 1 &&
                    questValue_6_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_6_4 === 0) {
                    questionCitizenCat_6_4();
                } else if (questValue_6_4 === 1 && questValue_6_5 === 0) {
                    questionCitizenCat_6_5();
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

function questionCitizenCat_6_4() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
        progressCitizenQuest_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        progressCitizenQuest_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        progressCitizenQuest_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        progressCitizenQuest_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_6_4') === null) {
        localStorage.setItem('progressCitizenQuest_6_4', JSON.stringify(progressCitizenQuest_6_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Создано в Самаре','Самарец Георгий Адельсон–Вельский разработал компьютерную программу для', 'Игры в шахматы', 'Написания картин', 'Хакерскую программу');

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
        if (progressCitizenQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressCitizenQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressCitizenQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressCitizenQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_6_4.length; i++) {
        if (answerVarRight_6_4[i] === answerVarRight_6_4[answerWrightNum]) {
            answerVarRight_6_4[i].addEventListener('click', () => {
                let progressCitizenQuest_6 = JSON.parse(localStorage.getItem('progressCitizenQuest_6'));
                let progressCitizenQuestSum_6_4 = progressCitizenQuest_6_4 + 1;
                let progressCitizenQuestSum_6 = progressCitizenQuestSum_6_4 + progressCitizenQuest_6;

                localStorage.setItem('progressCitizenQuest_6_4', JSON.stringify(progressCitizenQuestSum_6_4));
                localStorage.setItem('progressCitizenQuest_6', JSON.stringify(progressCitizenQuestSum_6));
                if (progressCitizenQuestSum_6_4 === 1) {
                    questionStar_6_4.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
        questValue_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        questValue_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        questValue_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        questValue_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5'))
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
                if (questValue_6_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_6_5 === 0) {
                    questionCitizenCat_6_5();
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

function questionCitizenCat_6_5() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
        progressCitizenQuest_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        progressCitizenQuest_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        progressCitizenQuest_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        progressCitizenQuest_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_6_4') === null) {
        localStorage.setItem('progressCitizenQuest_6_4', JSON.stringify(progressCitizenQuest_6_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Создано в Самаре','Самарский завод по производству космической техники', 'Прогресс', 'Авиакор', 'Энергия');

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
        if (progressCitizenQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressCitizenQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressCitizenQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressCitizenQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_6_5.length; i++) {
        if (answerVarRight_6_5[i] === answerVarRight_6_5[answerWrightNum]) {
            answerVarRight_6_5[i].addEventListener('click', () => {
                let progressCitizenQuest_6 = JSON.parse(localStorage.getItem('progressCitizenQuest_6'));
                let progressCitizenQuestSum_6_5 = progressCitizenQuest_6_5 + 1;
                let progressCitizenQuestSum_6 = progressCitizenQuestSum_6_5 + progressCitizenQuest_6;

                localStorage.setItem('progressCitizenQuest_6_5', JSON.stringify(progressCitizenQuestSum_6_5));
                localStorage.setItem('progressCitizenQuest_6', JSON.stringify(progressCitizenQuestSum_6));
                if (progressCitizenQuestSum_6_5 === 1) {
                    questionStar_6_5.className += 'fill';
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