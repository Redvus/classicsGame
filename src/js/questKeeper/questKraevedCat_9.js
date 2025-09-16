
if (localStorage.getItem('progressKraevedQuest_9') === null) {
    localStorage.setItem('progressKraevedQuest_9', JSON.stringify(0));
}

// Kraeved. Quest 9
function questionKraevedCat_9_1() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_9_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_1')),
        progressKraevedQuest_9_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
        progressKraevedQuest_9_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3')),
        progressKraevedQuest_9_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_4')),
        progressKraevedQuest_9_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_9_1') === null) {
        localStorage.setItem('progressKraevedQuest_9_1', JSON.stringify(progressKraevedQuest_9_1));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Литературная Самара', '«Самарская Анна Каренина» - представительница старинного самарского рода, писательница, мать известного советского писателя', 'Александра Леонтьевна Толстая (Бостром)', 'Валерия Анатольевна Герасимова', 'Екатерина Павловна Пешкова');

    let answerVar_9_1_1 = document.getElementById('answerVar_1'),
        answerVar_9_1_2 = document.getElementById('answerVar_2'),
        answerVar_9_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_9_1 = [answerVar_9_1_1, answerVar_9_1_2, answerVar_9_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_9_1"></li>
        <li id="questionStar_9_2"></li>
        <li id="questionStar_9_3"></li>
        <li id="questionStar_9_4"></li>
        <li id="questionStar_9_5"></li>
    `;

    const questionStar_9_1 = document.getElementById('questionStar_9_1'),
        questionStar_9_2 = document.getElementById('questionStar_9_2'),
        questionStar_9_3 = document.getElementById('questionStar_9_3'),
        questionStar_9_4 = document.getElementById('questionStar_9_4'),
        questionStar_9_5 = document.getElementById('questionStar_9_5')
    ;

    function starsView_1() {
        if (progressKraevedQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressKraevedQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressKraevedQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
        if (progressKraevedQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_9_1.length; i++) {
        if (answerVarRight_9_1[i] === answerVarRight_9_1[answerWrightNum]) {
            answerVarRight_9_1[i].addEventListener('click', () => {
                let progressKraevedQuest_9 = JSON.parse(localStorage.getItem('progressKraevedQuest_9'));
                let progressKraevedQuestSum_9_1 = progressKraevedQuest_9_1 + 1;
                let progressKraevedQuestSum_9 = progressKraevedQuestSum_9_1 + progressKraevedQuest_9;

                localStorage.setItem('progressKraevedQuest_9_1', JSON.stringify(progressKraevedQuestSum_9_1));
                localStorage.setItem('progressKraevedQuest_9', JSON.stringify(progressKraevedQuestSum_9));
                if (progressKraevedQuestSum_9_1 === 1) {
                    questionStar_9_1.className += 'fill';
                }
            });
            console.log(answerVarRight_9_1[answerWrightNum]);
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_5'))
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
                    questionKraevedCat_9_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionKraevedCat_9_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_9_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_9_5();
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

function questionKraevedCat_9_2() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_9_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_1')),
        progressKraevedQuest_9_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
        progressKraevedQuest_9_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3')),
        progressKraevedQuest_9_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_4')),
        progressKraevedQuest_9_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_9_2') === null) {
        localStorage.setItem('progressKraevedQuest_9_2', JSON.stringify(progressKraevedQuest_9_2));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Литературная Самара', 'Именно этому самарскому писателю поверил свои сокровенные мысли и первому читал главы поэмы «Мёртвые души» Гоголь', 'Николаю Григорьевичу Гарин-Михайловскому', 'Сергею Тимофеевичу Аксакову', 'Глебу Ивановичу Успенскому');

    let answerVar_9_2_1 = document.getElementById('answerVar_1'),
        answerVar_9_2_2 = document.getElementById('answerVar_2'),
        answerVar_9_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_9_2 = [answerVar_9_2_1, answerVar_9_2_2, answerVar_9_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_9_1"></li>
        <li id="questionStar_9_2"></li>
        <li id="questionStar_9_3"></li>
        <li id="questionStar_9_4"></li>
        <li id="questionStar_9_5"></li>
    `;

    const questionStar_9_1 = document.getElementById('questionStar_9_1'),
        questionStar_9_2 = document.getElementById('questionStar_9_2'),
        questionStar_9_3 = document.getElementById('questionStar_9_3'),
        questionStar_9_4 = document.getElementById('questionStar_9_4'),
        questionStar_9_5 = document.getElementById('questionStar_9_5')
    ;

    function starsView_2() {
        if (progressKraevedQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressKraevedQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressKraevedQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
        if (progressKraevedQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_9_2.length; i++) {
        if (answerVarRight_9_2[i] === answerVarRight_9_2[answerWrightNum]) {
            answerVarRight_9_2[i].addEventListener('click', () => {
                let progressKraevedQuest_9 = JSON.parse(localStorage.getItem('progressKraevedQuest_9'));
                let progressKraevedQuestSum_9_2 = progressKraevedQuest_9_2 + 1;
                let progressKraevedQuestSum_9 = progressKraevedQuestSum_9_2 + progressKraevedQuest_9;

                localStorage.setItem('progressKraevedQuest_9_2', JSON.stringify(progressKraevedQuestSum_9_2));
                localStorage.setItem('progressKraevedQuest_9', JSON.stringify(progressKraevedQuestSum_9));
                if (progressKraevedQuestSum_9_2 === 1) {
                    questionStar_9_2.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_5'))
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
                    questionKraevedCat_9_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_9_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_9_5();
                }
            }
        });
        // if (progressKraevedQuest_9_2 === 0 &&
        //     progressKraevedQuest_9_3 === 1 &&
        //     progressKraevedQuest_9_4 === 1 &&
        //     progressKraevedQuest_9_5 === 1) {
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

function questionKraevedCat_9_3() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_9_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_1')),
        progressKraevedQuest_9_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
        progressKraevedQuest_9_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3')),
        progressKraevedQuest_9_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_4')),
        progressKraevedQuest_9_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_9_3') === null) {
        localStorage.setItem('progressKraevedQuest_9_3', JSON.stringify(progressKraevedQuest_9_3));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Литературная Самара','Известный советский писатель, написавший более 400 произведений в различных жанрах долгое время живший в Самаре. Известен под псевдонимом...', 'Александр Неверов', 'Максим Горький', 'Артем Веселый');

    let answerVar_9_3_1 = document.getElementById('answerVar_1'),
        answerVar_9_3_2 = document.getElementById('answerVar_2'),
        answerVar_9_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_9_3 = [answerVar_9_3_1, answerVar_9_3_2, answerVar_9_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_9_1"></li>
        <li id="questionStar_9_2"></li>
        <li id="questionStar_9_3"></li>
        <li id="questionStar_9_4"></li>
        <li id="questionStar_9_5"></li>
    `;

    const questionStar_9_1 = document.getElementById('questionStar_9_1'),
        questionStar_9_2 = document.getElementById('questionStar_9_2'),
        questionStar_9_3 = document.getElementById('questionStar_9_3'),
        questionStar_9_4 = document.getElementById('questionStar_9_4'),
        questionStar_9_5 = document.getElementById('questionStar_9_5')
    ;

    function starsView_3() {
        if (progressKraevedQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressKraevedQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressKraevedQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
        if (progressKraevedQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_9_3.length; i++) {
        if (answerVarRight_9_3[i] === answerVarRight_9_3[answerWrightNum]) {
            answerVarRight_9_3[i].addEventListener('click', () => {
                let progressKraevedQuest_9 = JSON.parse(localStorage.getItem('progressKraevedQuest_9'));
                let progressKraevedQuestSum_9_3 = progressKraevedQuest_9_3 + 1;
                let progressKraevedQuestSum_9 = progressKraevedQuestSum_9_3 + progressKraevedQuest_9;

                localStorage.setItem('progressKraevedQuest_9_3', JSON.stringify(progressKraevedQuestSum_9_3));
                localStorage.setItem('progressKraevedQuest_9', JSON.stringify(progressKraevedQuestSum_9));
                if (progressKraevedQuestSum_9_3 === 1) {
                    questionStar_9_3.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_5'))
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
                    questionKraevedCat_9_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_9_5();
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

function questionKraevedCat_9_4() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_9_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_1')),
        progressKraevedQuest_9_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
        progressKraevedQuest_9_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3')),
        progressKraevedQuest_9_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_4')),
        progressKraevedQuest_9_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_9_4') === null) {
        localStorage.setItem('progressKraevedQuest_9_4', JSON.stringify(progressKraevedQuest_9_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Литературная Самара','Депутат Екатерининской Уложенной комиссии Данила Рукавкин прославился на литературном поприще, тем, что...', 'организовал литературный клуб', 'стал первым самарским писателем', 'издал литературный журнал');

    let answerVar_9_4_1 = document.getElementById('answerVar_1'),
        answerVar_9_4_2 = document.getElementById('answerVar_2'),
        answerVar_9_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_9_4 = [answerVar_9_4_1, answerVar_9_4_2, answerVar_9_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_9_1"></li>
        <li id="questionStar_9_2"></li>
        <li id="questionStar_9_3"></li>
        <li id="questionStar_9_4"></li>
        <li id="questionStar_9_5"></li>
    `;

    const questionStar_9_1 = document.getElementById('questionStar_9_1'),
        questionStar_9_2 = document.getElementById('questionStar_9_2'),
        questionStar_9_3 = document.getElementById('questionStar_9_3'),
        questionStar_9_4 = document.getElementById('questionStar_9_4'),
        questionStar_9_5 = document.getElementById('questionStar_9_5')
    ;

    function starsView_4() {
        if (progressKraevedQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressKraevedQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressKraevedQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressKraevedQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_9_4.length; i++) {
        if (answerVarRight_9_4[i] === answerVarRight_9_4[answerWrightNum]) {
            answerVarRight_9_4[i].addEventListener('click', () => {
                let progressKraevedQuest_9 = JSON.parse(localStorage.getItem('progressKraevedQuest_9'));
                let progressKraevedQuestSum_9_4 = progressKraevedQuest_9_4 + 1;
                let progressKraevedQuestSum_9 = progressKraevedQuestSum_9_4 + progressKraevedQuest_9;

                localStorage.setItem('progressKraevedQuest_9_4', JSON.stringify(progressKraevedQuestSum_9_4));
                localStorage.setItem('progressKraevedQuest_9', JSON.stringify(progressKraevedQuestSum_9));
                if (progressKraevedQuestSum_9_4 === 1) {
                    questionStar_9_4.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_5'))
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
                    questionKraevedCat_9_5();
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

function questionKraevedCat_9_5() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_9_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_1')),
        progressKraevedQuest_9_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
        progressKraevedQuest_9_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3')),
        progressKraevedQuest_9_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_4')),
        progressKraevedQuest_9_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_9_4') === null) {
        localStorage.setItem('progressKraevedQuest_9_4', JSON.stringify(progressKraevedQuest_9_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Литературная Самара','Самарские комсомольцы обратились к Маяковскому с робкой просьбой, которую он с радостью удовлетворил...', 'позволить прочесть свои стихи', 'позволить занять дорогие места в зале', 'посвятить Самаре стихотворение');

    let answerVar_9_5_1 = document.getElementById('answerVar_1'),
        answerVar_9_5_2 = document.getElementById('answerVar_2'),
        answerVar_9_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_9_5 = [answerVar_9_5_1, answerVar_9_5_2, answerVar_9_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_9_1"></li>
        <li id="questionStar_9_2"></li>
        <li id="questionStar_9_3"></li>
        <li id="questionStar_9_4"></li>
        <li id="questionStar_9_5"></li>
    `;

    const questionStar_9_1 = document.getElementById('questionStar_9_1'),
        questionStar_9_2 = document.getElementById('questionStar_9_2'),
        questionStar_9_3 = document.getElementById('questionStar_9_3'),
        questionStar_9_4 = document.getElementById('questionStar_9_4'),
        questionStar_9_5 = document.getElementById('questionStar_9_5')
    ;

    function starsView_5() {
        if (progressKraevedQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressKraevedQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressKraevedQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressKraevedQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_9_5.length; i++) {
        if (answerVarRight_9_5[i] === answerVarRight_9_5[answerWrightNum]) {
            answerVarRight_9_5[i].addEventListener('click', () => {
                let progressKraevedQuest_9 = JSON.parse(localStorage.getItem('progressKraevedQuest_9'));
                let progressKraevedQuestSum_9_5 = progressKraevedQuest_9_5 + 1;
                let progressKraevedQuestSum_9 = progressKraevedQuestSum_9_5 + progressKraevedQuest_9;

                localStorage.setItem('progressKraevedQuest_9_5', JSON.stringify(progressKraevedQuestSum_9_5));
                localStorage.setItem('progressKraevedQuest_9', JSON.stringify(progressKraevedQuestSum_9));
                if (progressKraevedQuestSum_9_5 === 1) {
                    questionStar_9_5.className += 'fill';
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