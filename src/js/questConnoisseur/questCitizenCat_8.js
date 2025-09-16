
if (localStorage.getItem('progressCitizenQuest_8') === null) {
    localStorage.setItem('progressCitizenQuest_8', JSON.stringify(0));
}

// Citizen. Quest 8. Под мягким светом лампы и шелестом страниц
function questionCitizenCat_8_1() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressCitizenQuest_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
        progressCitizenQuest_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        progressCitizenQuest_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        progressCitizenQuest_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        progressCitizenQuest_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_8_1') === null) {
        localStorage.setItem('progressCitizenQuest_8_1', JSON.stringify(progressCitizenQuest_8_1));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Под мягким светом лампы и шелестом страниц', 'Почетный гражданин города, губернатор Самары (1853 – 1860) основал библиотеку. Его имя присвоено Самарской научной областной библиотеки', 'Степан Григорьевич Волховский', 'Николай Александрович Замятнин', 'Константин Карлович Грот');

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
        if (progressCitizenQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressCitizenQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressCitizenQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
        if (progressCitizenQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_8_1.length; i++) {
        if (answerVarRight_8_1[i] === answerVarRight_8_1[answerWrightNum]) {
            answerVarRight_8_1[i].addEventListener('click', () => {
                let progressCitizenQuest_8 = JSON.parse(localStorage.getItem('progressCitizenQuest_8'));
                let progressCitizenQuestSum_8_1 = progressCitizenQuest_8_1 + 1;
                let progressCitizenQuestSum_8 = progressCitizenQuestSum_8_1 + progressCitizenQuest_8;

                localStorage.setItem('progressCitizenQuest_8_1', JSON.stringify(progressCitizenQuestSum_8_1));
                localStorage.setItem('progressCitizenQuest_8', JSON.stringify(progressCitizenQuestSum_8));
                if (progressCitizenQuestSum_8_1 === 1) {
                    questionStar_8_1.className += 'fill';
                }
            });
            console.log(answerVarRight_8_1[answerWrightNum]);
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Верно! Отъезжая из Самары в Санкт – Петербург, самарский губернатор Константин Карлович Грот подарил библиотеки');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        questValue_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        questValue_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        questValue_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5'))
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
                if (questValue_8_2 === 1 &&
                    questValue_8_3 === 1 &&
                    questValue_8_4 === 1 &&
                    questValue_8_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_8_2 === 0) {
                    questionCitizenCat_8_2();
                } else if (questValue_8_2 === 1 && questValue_8_3 === 0) {
                    questionCitizenCat_8_3();
                } else if (questValue_8_3 === 1 && questValue_8_4 === 0) {
                    questionCitizenCat_8_4();
                } else if (questValue_8_4 === 1 && questValue_8_5 === 0) {
                    questionCitizenCat_8_5();
                }
            }
        });
        // if (progressCitizenQuest_8_1 === 0 &&
        //     progressCitizenQuest_8_2 === 1 &&
        //     progressCitizenQuest_8_3 === 1 &&
        //     progressCitizenQuest_8_4 === 1 &&
        //     progressCitizenQuest_8_5 === 1) {
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

function questionCitizenCat_8_2() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
        progressCitizenQuest_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        progressCitizenQuest_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        progressCitizenQuest_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        progressCitizenQuest_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_8_2') === null) {
        localStorage.setItem('progressCitizenQuest_8_2', JSON.stringify(progressCitizenQuest_8_2));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Под мягким светом лампы и шелестом страниц', '1 января 1860 года в Самаре открылась библиотека на 800 томов', 'Самарская Публичная библиотека', 'Самарская областная универсальная научная библиотека', 'Центральная городская библиотека имени Н. К. Крупской');

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
        if (progressCitizenQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressCitizenQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressCitizenQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
        if (progressCitizenQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_8_2.length; i++) {
        if (answerVarRight_8_2[i] === answerVarRight_8_2[answerWrightNum]) {
            answerVarRight_8_2[i].addEventListener('click', () => {
                let progressCitizenQuest_8 = JSON.parse(localStorage.getItem('progressCitizenQuest_8'));
                let progressCitizenQuestSum_8_2 = progressCitizenQuest_8_2 + 1;
                let progressCitizenQuestSum_8 = progressCitizenQuestSum_8_2 + progressCitizenQuest_8;

                localStorage.setItem('progressCitizenQuest_8_2', JSON.stringify(progressCitizenQuestSum_8_2));
                localStorage.setItem('progressCitizenQuest_8', JSON.stringify(progressCitizenQuestSum_8));
                if (progressCitizenQuestSum_8_2 === 1) {
                    questionStar_8_2.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
        questValue_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        questValue_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        questValue_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        questValue_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5'))
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
                if (questValue_8_3 === 1 &&
                    questValue_8_4 === 1 &&
                    questValue_8_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_8_3 === 0) {
                    questionCitizenCat_8_3();
                } else if (questValue_8_3 === 1 && questValue_8_4 === 0) {
                    questionCitizenCat_8_4();
                } else if (questValue_8_4 === 1 && questValue_8_5 === 0) {
                    questionCitizenCat_8_5();
                }
            }
        });
        // if (progressCitizenQuest_8_2 === 0 &&
        //     progressCitizenQuest_8_3 === 1 &&
        //     progressCitizenQuest_8_4 === 1 &&
        //     progressCitizenQuest_8_5 === 1) {
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

function questionCitizenCat_8_3() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
        progressCitizenQuest_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        progressCitizenQuest_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        progressCitizenQuest_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        progressCitizenQuest_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_8_3') === null) {
        localStorage.setItem('progressCitizenQuest_8_3', JSON.stringify(progressCitizenQuest_8_3));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Под мягким светом лампы и шелестом страниц','Петр Владимирович Алабин застраховал весь фонд библиотеки, оказывал ей существенную материальную помощь, а также он сам занимался', 'Рецензированием каталога', 'Обслуживание читателей', 'Подбором книг для фонда библиотеки');

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
        if (progressCitizenQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressCitizenQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressCitizenQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
        if (progressCitizenQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_8_3.length; i++) {
        if (answerVarRight_8_3[i] === answerVarRight_8_3[answerWrightNum]) {
            answerVarRight_8_3[i].addEventListener('click', () => {
                let progressCitizenQuest_8 = JSON.parse(localStorage.getItem('progressCitizenQuest_8'));
                let progressCitizenQuestSum_8_3 = progressCitizenQuest_8_3 + 1;
                let progressCitizenQuestSum_8 = progressCitizenQuestSum_8_3 + progressCitizenQuest_8;

                localStorage.setItem('progressCitizenQuest_8_3', JSON.stringify(progressCitizenQuestSum_8_3));
                localStorage.setItem('progressCitizenQuest_8', JSON.stringify(progressCitizenQuestSum_8));
                if (progressCitizenQuestSum_8_3 === 1) {
                    questionStar_8_3.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Именно так! Петр Владимирович Алабин он передал в дар библиотеке более 7 тысяч экземпляров книг на разных языках и 21 экспонат для музея, а также коллекцию автографов выдающихся людей эпохи Александра II');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
        questValue_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        questValue_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        questValue_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        questValue_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5'))
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
                if (questValue_8_4 === 1 &&
                    questValue_8_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_8_4 === 0) {
                    questionCitizenCat_8_4();
                } else if (questValue_8_4 === 1 && questValue_8_5 === 0) {
                    questionCitizenCat_8_5();
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

function questionCitizenCat_8_4() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
        progressCitizenQuest_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        progressCitizenQuest_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        progressCitizenQuest_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        progressCitizenQuest_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_8_4') === null) {
        localStorage.setItem('progressCitizenQuest_8_4', JSON.stringify(progressCitizenQuest_8_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Под мягким светом лампы и шелестом страниц','Когда состоялось празднование первого Всероссийского Дня библиотек?', 'В 1996 году', 'В 1860 году', 'В 1993 году');

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
        if (progressCitizenQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressCitizenQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressCitizenQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressCitizenQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_8_4.length; i++) {
        if (answerVarRight_8_4[i] === answerVarRight_8_4[answerWrightNum]) {
            answerVarRight_8_4[i].addEventListener('click', () => {
                let progressCitizenQuest_8 = JSON.parse(localStorage.getItem('progressCitizenQuest_8'));
                let progressCitizenQuestSum_8_4 = progressCitizenQuest_8_4 + 1;
                let progressCitizenQuestSum_8 = progressCitizenQuestSum_8_4 + progressCitizenQuest_8;

                localStorage.setItem('progressCitizenQuest_8_4', JSON.stringify(progressCitizenQuestSum_8_4));
                localStorage.setItem('progressCitizenQuest_8', JSON.stringify(progressCitizenQuestSum_8));
                if (progressCitizenQuestSum_8_4 === 1) {
                    questionStar_8_4.className += 'fill';
                }
            });
        }
    }

    questCitizenCatLoad.answerBlock(answerWrightNum, 'Правильно! Первый Всероссийский День библиотек состоялся в Москве, Самарскую область представлял главный библиограф Александр Никифорович Завальный');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
        questValue_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        questValue_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        questValue_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        questValue_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5'))
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
                if (questValue_8_5 === 1) {
                    wrapper.removeChild(wrapperTopTitle);
                    citizenCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_8_5 === 0) {
                    questionCitizenCat_8_5();
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

function questionCitizenCat_8_5() {
    let questCitizenCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressCitizenQuest_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
        progressCitizenQuest_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        progressCitizenQuest_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        progressCitizenQuest_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        progressCitizenQuest_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5'))
    ;

    if (localStorage.getItem('progressCitizenQuest_8_4') === null) {
        localStorage.setItem('progressCitizenQuest_8_4', JSON.stringify(progressCitizenQuest_8_4));
    }

    questCitizenCatLoad.questionBlock('Житель', 'Под мягким светом лампы и шелестом страниц','Самарская областная универсальная научная библиотека берет свое начало от', 'Самарской публичной библиотеки', 'Российской государственной библиотеки', 'Частных собраний библиотек');

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
        if (progressCitizenQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressCitizenQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressCitizenQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
        if (progressCitizenQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_8_5.length; i++) {
        if (answerVarRight_8_5[i] === answerVarRight_8_5[answerWrightNum]) {
            answerVarRight_8_5[i].addEventListener('click', () => {
                let progressCitizenQuest_8 = JSON.parse(localStorage.getItem('progressCitizenQuest_8'));
                let progressCitizenQuestSum_8_5 = progressCitizenQuest_8_5 + 1;
                let progressCitizenQuestSum_8 = progressCitizenQuestSum_8_5 + progressCitizenQuest_8;

                localStorage.setItem('progressCitizenQuest_8_5', JSON.stringify(progressCitizenQuestSum_8_5));
                localStorage.setItem('progressCitizenQuest_8', JSON.stringify(progressCitizenQuestSum_8));
                if (progressCitizenQuestSum_8_5 === 1) {
                    questionStar_8_5.className += 'fill';
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