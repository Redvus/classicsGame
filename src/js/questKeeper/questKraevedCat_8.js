
if (localStorage.getItem('progressKraevedQuest_8') === null) {
    localStorage.setItem('progressKraevedQuest_8', JSON.stringify(0));
}

// Kraeved. Quest 8
function questionKraevedCat_8_1() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_8_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_1')),
        progressKraevedQuest_8_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
        progressKraevedQuest_8_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3')),
        progressKraevedQuest_8_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_4')),
        progressKraevedQuest_8_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_8_1') === null) {
        localStorage.setItem('progressKraevedQuest_8_1', JSON.stringify(progressKraevedQuest_8_1));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Под мягким светом лампы и шелестом страниц', 'Новые имена, новые произведения, новых героев открывает проект «Голоса пьес»', 'В Центральной городской библиотеке имени Н. К. Крупской', 'В библиотеке №8', 'В библиотеке №13');

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
        if (progressKraevedQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressKraevedQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressKraevedQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
        if (progressKraevedQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_8_1.length; i++) {
        if (answerVarRight_8_1[i] === answerVarRight_8_1[answerWrightNum]) {
            answerVarRight_8_1[i].addEventListener('click', () => {
                let progressKraevedQuest_8 = JSON.parse(localStorage.getItem('progressKraevedQuest_8'));
                let progressKraevedQuestSum_8_1 = progressKraevedQuest_8_1 + 1;
                let progressKraevedQuestSum_8 = progressKraevedQuestSum_8_1 + progressKraevedQuest_8;

                localStorage.setItem('progressKraevedQuest_8_1', JSON.stringify(progressKraevedQuestSum_8_1));
                localStorage.setItem('progressKraevedQuest_8', JSON.stringify(progressKraevedQuestSum_8));
                if (progressKraevedQuestSum_8_1 === 1) {
                    questionStar_8_1.className += 'fill';
                }
            });
            console.log(answerVarRight_8_1[answerWrightNum]);
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Библиотека №8 реализует проект «Голоса пьес»');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_5'))
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
                    questionKraevedCat_8_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionKraevedCat_8_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_8_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_8_5();
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

function questionKraevedCat_8_2() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressKraevedQuest_8_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_1')),
        progressKraevedQuest_8_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
        progressKraevedQuest_8_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3')),
        progressKraevedQuest_8_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_4')),
        progressKraevedQuest_8_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_8_2') === null) {
        localStorage.setItem('progressKraevedQuest_8_2', JSON.stringify(progressKraevedQuest_8_2));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Под мягким светом лампы и шелестом страниц', '«Талант высокой простоты. Василий Шукшин» открывается сердцам здесь', 'В библиотеке №34', 'В библиотеке №9', 'В библиотеке №23');

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
        if (progressKraevedQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressKraevedQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressKraevedQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
        if (progressKraevedQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_8_2.length; i++) {
        if (answerVarRight_8_2[i] === answerVarRight_8_2[answerWrightNum]) {
            answerVarRight_8_2[i].addEventListener('click', () => {
                let progressKraevedQuest_8 = JSON.parse(localStorage.getItem('progressKraevedQuest_8'));
                let progressKraevedQuestSum_8_2 = progressKraevedQuest_8_2 + 1;
                let progressKraevedQuestSum_8 = progressKraevedQuestSum_8_2 + progressKraevedQuest_8;

                localStorage.setItem('progressKraevedQuest_8_2', JSON.stringify(progressKraevedQuestSum_8_2));
                localStorage.setItem('progressKraevedQuest_8', JSON.stringify(progressKraevedQuestSum_8));
                if (progressKraevedQuestSum_8_2 === 1) {
                    questionStar_8_2.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_5'))
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
                    questionKraevedCat_8_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_8_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_8_5();
                }
            }
        });
        // if (progressKraevedQuest_8_2 === 0 &&
        //     progressKraevedQuest_8_3 === 1 &&
        //     progressKraevedQuest_8_4 === 1 &&
        //     progressKraevedQuest_8_5 === 1) {
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

function questionKraevedCat_8_3() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_8_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_1')),
        progressKraevedQuest_8_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
        progressKraevedQuest_8_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3')),
        progressKraevedQuest_8_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_4')),
        progressKraevedQuest_8_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_8_3') === null) {
        localStorage.setItem('progressKraevedQuest_8_3', JSON.stringify(progressKraevedQuest_8_3));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Под мягким светом лампы и шелестом страниц','Под магию серебряного века попадают гости «Мастерской Валерия Бондаренко» в библиотеке', 'В Центральной городской библиотеки имени Н. К. Крупской', 'В Библиотеке №1', 'В Библиотеке №27');

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
        if (progressKraevedQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressKraevedQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressKraevedQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
        if (progressKraevedQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_8_3.length; i++) {
        if (answerVarRight_8_3[i] === answerVarRight_8_3[answerWrightNum]) {
            answerVarRight_8_3[i].addEventListener('click', () => {
                let progressKraevedQuest_8 = JSON.parse(localStorage.getItem('progressKraevedQuest_8'));
                let progressKraevedQuestSum_8_3 = progressKraevedQuest_8_3 + 1;
                let progressKraevedQuestSum_8 = progressKraevedQuestSum_8_3 + progressKraevedQuest_8;

                localStorage.setItem('progressKraevedQuest_8_3', JSON.stringify(progressKraevedQuestSum_8_3));
                localStorage.setItem('progressKraevedQuest_8', JSON.stringify(progressKraevedQuestSum_8));
                if (progressKraevedQuestSum_8_3 === 1) {
                    questionStar_8_3.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_5'))
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
                    questionKraevedCat_8_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_8_5();
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

function questionKraevedCat_8_4() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressKraevedQuest_8_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_1')),
        progressKraevedQuest_8_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
        progressKraevedQuest_8_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3')),
        progressKraevedQuest_8_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_4')),
        progressKraevedQuest_8_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_8_4') === null) {
        localStorage.setItem('progressKraevedQuest_8_4', JSON.stringify(progressKraevedQuest_8_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Под мягким светом лампы и шелестом страниц','В атмосферу «Итальянских вечеров» погружает библиотека...', 'Библиотека №14', 'Библиотека №10', 'Библиотека №5');

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
        if (progressKraevedQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressKraevedQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressKraevedQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressKraevedQuest_8_5 === 1) {
            questionStar_8_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_8_4.length; i++) {
        if (answerVarRight_8_4[i] === answerVarRight_8_4[answerWrightNum]) {
            answerVarRight_8_4[i].addEventListener('click', () => {
                let progressKraevedQuest_8 = JSON.parse(localStorage.getItem('progressKraevedQuest_8'));
                let progressKraevedQuestSum_8_4 = progressKraevedQuest_8_4 + 1;
                let progressKraevedQuestSum_8 = progressKraevedQuestSum_8_4 + progressKraevedQuest_8;

                localStorage.setItem('progressKraevedQuest_8_4', JSON.stringify(progressKraevedQuestSum_8_4));
                localStorage.setItem('progressKraevedQuest_8', JSON.stringify(progressKraevedQuestSum_8));
                if (progressKraevedQuestSum_8_4 === 1) {
                    questionStar_8_4.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_5'))
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
                    questionKraevedCat_8_5();
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

function questionKraevedCat_8_5() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressKraevedQuest_8_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_1')),
        progressKraevedQuest_8_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
        progressKraevedQuest_8_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3')),
        progressKraevedQuest_8_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_4')),
        progressKraevedQuest_8_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_8_4') === null) {
        localStorage.setItem('progressKraevedQuest_8_4', JSON.stringify(progressKraevedQuest_8_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Под мягким светом лампы и шелестом страниц','«Путь в день немерцающий» укажет Евгений Водолазкин в библиотеке...', 'В библиотеке №2', 'В библиотеке №13', 'В Центральной городской библиотеке Н. К. Крупской');

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
        if (progressKraevedQuest_8_1 === 1) {
            questionStar_8_1.className += 'fill';
        }
        if (progressKraevedQuest_8_2 === 1) {
            questionStar_8_2.className += 'fill';
        }
        if (progressKraevedQuest_8_3 === 1) {
            questionStar_8_3.className += 'fill';
        }
        if (progressKraevedQuest_8_4 === 1) {
            questionStar_8_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_8_5.length; i++) {
        if (answerVarRight_8_5[i] === answerVarRight_8_5[answerWrightNum]) {
            answerVarRight_8_5[i].addEventListener('click', () => {
                let progressKraevedQuest_8 = JSON.parse(localStorage.getItem('progressKraevedQuest_8'));
                let progressKraevedQuestSum_8_5 = progressKraevedQuest_8_5 + 1;
                let progressKraevedQuestSum_8 = progressKraevedQuestSum_8_5 + progressKraevedQuest_8;

                localStorage.setItem('progressKraevedQuest_8_5', JSON.stringify(progressKraevedQuestSum_8_5));
                localStorage.setItem('progressKraevedQuest_8', JSON.stringify(progressKraevedQuestSum_8));
                if (progressKraevedQuestSum_8_5 === 1) {
                    questionStar_8_5.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Правильно!');

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