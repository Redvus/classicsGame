
if (localStorage.getItem('progressKraevedQuest_10') === null) {
    localStorage.setItem('progressKraevedQuest_10', JSON.stringify(0));
}

// Kraeved. Quest 10
function questionKraevedCat_10_1() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_10_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_1')),
        progressKraevedQuest_10_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
        progressKraevedQuest_10_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3')),
        progressKraevedQuest_10_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_4')),
        progressKraevedQuest_10_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_10_1') === null) {
        localStorage.setItem('progressKraevedQuest_10_1', JSON.stringify(progressKraevedQuest_10_1));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Очарованные странники', '«Самаре не быть!»', 'Нагайский хан Урус', 'Иегудиил Хламида', 'Степан Разин');

    let answerVar_10_1_1 = document.getElementById('answerVar_1'),
        answerVar_10_1_2 = document.getElementById('answerVar_2'),
        answerVar_10_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_10_1 = [answerVar_10_1_1, answerVar_10_1_2, answerVar_10_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_10_1"></li>
        <li id="questionStar_10_2"></li>
        <li id="questionStar_10_3"></li>
        <li id="questionStar_10_4"></li>
        <li id="questionStar_10_5"></li>
    `;

    const questionStar_10_1 = document.getElementById('questionStar_10_1'),
        questionStar_10_2 = document.getElementById('questionStar_10_2'),
        questionStar_10_3 = document.getElementById('questionStar_10_3'),
        questionStar_10_4 = document.getElementById('questionStar_10_4'),
        questionStar_10_5 = document.getElementById('questionStar_10_5')
    ;

    function starsView_1() {
        if (progressKraevedQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressKraevedQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressKraevedQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
        if (progressKraevedQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_10_1.length; i++) {
        if (answerVarRight_10_1[i] === answerVarRight_10_1[answerWrightNum]) {
            answerVarRight_10_1[i].addEventListener('click', () => {
                let progressKraevedQuest_10 = JSON.parse(localStorage.getItem('progressKraevedQuest_10'));
                let progressKraevedQuestSum_10_1 = progressKraevedQuest_10_1 + 1;
                let progressKraevedQuestSum_10 = progressKraevedQuestSum_10_1 + progressKraevedQuest_10;

                localStorage.setItem('progressKraevedQuest_10_1', JSON.stringify(progressKraevedQuestSum_10_1));
                localStorage.setItem('progressKraevedQuest_10', JSON.stringify(progressKraevedQuestSum_10));
                if (progressKraevedQuestSum_10_1 === 1) {
                    questionStar_10_1.className += 'fill';
                }
            });
            console.log(answerVarRight_10_1[answerWrightNum]);
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_5'))
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
                    questionKraevedCat_10_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionKraevedCat_10_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_10_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_10_5();
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

function questionKraevedCat_10_2() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_10_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_1')),
        progressKraevedQuest_10_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
        progressKraevedQuest_10_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3')),
        progressKraevedQuest_10_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_4')),
        progressKraevedQuest_10_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_10_2') === null) {
        localStorage.setItem('progressKraevedQuest_10_2', JSON.stringify(progressKraevedQuest_10_2));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Очарованные странники', '«Мы достаточно долго останавливались в разных попутных городах, чтобы составить себе о них понятие. Больше всего мне понравилась Самара»', 'Федор Шаляпин', 'Петр Чайковский', 'Эдуард Хиль');

    let answerVar_10_2_1 = document.getElementById('answerVar_1'),
        answerVar_10_2_2 = document.getElementById('answerVar_2'),
        answerVar_10_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_10_2 = [answerVar_10_2_1, answerVar_10_2_2, answerVar_10_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_10_1"></li>
        <li id="questionStar_10_2"></li>
        <li id="questionStar_10_3"></li>
        <li id="questionStar_10_4"></li>
        <li id="questionStar_10_5"></li>
    `;

    const questionStar_10_1 = document.getElementById('questionStar_10_1'),
        questionStar_10_2 = document.getElementById('questionStar_10_2'),
        questionStar_10_3 = document.getElementById('questionStar_10_3'),
        questionStar_10_4 = document.getElementById('questionStar_10_4'),
        questionStar_10_5 = document.getElementById('questionStar_10_5')
    ;

    function starsView_2() {
        if (progressKraevedQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressKraevedQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressKraevedQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
        if (progressKraevedQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_10_2.length; i++) {
        if (answerVarRight_10_2[i] === answerVarRight_10_2[answerWrightNum]) {
            answerVarRight_10_2[i].addEventListener('click', () => {
                let progressKraevedQuest_10 = JSON.parse(localStorage.getItem('progressKraevedQuest_10'));
                let progressKraevedQuestSum_10_2 = progressKraevedQuest_10_2 + 1;
                let progressKraevedQuestSum_10 = progressKraevedQuestSum_10_2 + progressKraevedQuest_10;

                localStorage.setItem('progressKraevedQuest_10_2', JSON.stringify(progressKraevedQuestSum_10_2));
                localStorage.setItem('progressKraevedQuest_10', JSON.stringify(progressKraevedQuestSum_10));
                if (progressKraevedQuestSum_10_2 === 1) {
                    questionStar_10_2.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_5'))
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
                    questionKraevedCat_10_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_10_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_10_5();
                }
            }
        });
        // if (progressKraevedQuest_10_2 === 0 &&
        //     progressKraevedQuest_10_3 === 1 &&
        //     progressKraevedQuest_10_4 === 1 &&
        //     progressKraevedQuest_10_5 === 1) {
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

function questionKraevedCat_10_3() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_10_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_1')),
        progressKraevedQuest_10_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
        progressKraevedQuest_10_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3')),
        progressKraevedQuest_10_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_4')),
        progressKraevedQuest_10_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_10_3') === null) {
        localStorage.setItem('progressKraevedQuest_10_3', JSON.stringify(progressKraevedQuest_10_3));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Очарованные странники','«Самара дышит новизной, молодостью, предприимчивостью, – вся в будущем, а не в прошедшем. Это своего рода Волжская Одесса, точно так, как Нижний Новгород – Волжская Москва»', 'Евгений Марков', 'Михаил Дмитриев', 'Иван Борский');

    let answerVar_10_3_1 = document.getElementById('answerVar_1'),
        answerVar_10_3_2 = document.getElementById('answerVar_2'),
        answerVar_10_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_10_3 = [answerVar_10_3_1, answerVar_10_3_2, answerVar_10_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_10_1"></li>
        <li id="questionStar_10_2"></li>
        <li id="questionStar_10_3"></li>
        <li id="questionStar_10_4"></li>
        <li id="questionStar_10_5"></li>
    `;

    const questionStar_10_1 = document.getElementById('questionStar_10_1'),
        questionStar_10_2 = document.getElementById('questionStar_10_2'),
        questionStar_10_3 = document.getElementById('questionStar_10_3'),
        questionStar_10_4 = document.getElementById('questionStar_10_4'),
        questionStar_10_5 = document.getElementById('questionStar_10_5')
    ;

    function starsView_3() {
        if (progressKraevedQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressKraevedQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressKraevedQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
        if (progressKraevedQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_10_3.length; i++) {
        if (answerVarRight_10_3[i] === answerVarRight_10_3[answerWrightNum]) {
            answerVarRight_10_3[i].addEventListener('click', () => {
                let progressKraevedQuest_10 = JSON.parse(localStorage.getItem('progressKraevedQuest_10'));
                let progressKraevedQuestSum_10_3 = progressKraevedQuest_10_3 + 1;
                let progressKraevedQuestSum_10 = progressKraevedQuestSum_10_3 + progressKraevedQuest_10;

                localStorage.setItem('progressKraevedQuest_10_3', JSON.stringify(progressKraevedQuestSum_10_3));
                localStorage.setItem('progressKraevedQuest_10', JSON.stringify(progressKraevedQuestSum_10));
                if (progressKraevedQuestSum_10_3 === 1) {
                    questionStar_10_3.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_5'))
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
                    questionKraevedCat_10_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_10_5();
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

function questionKraevedCat_10_4() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressKraevedQuest_10_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_1')),
        progressKraevedQuest_10_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
        progressKraevedQuest_10_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3')),
        progressKraevedQuest_10_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_4')),
        progressKraevedQuest_10_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_10_4') === null) {
        localStorage.setItem('progressKraevedQuest_10_4', JSON.stringify(progressKraevedQuest_10_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Очарованные странники','«В Самаре по внешнему виду и говору случайно встретившегося человека нередко долго е можете признать, с кем вы имеете дело»', 'Валерий Ерофеев', 'Владимир Лебедев', 'Александр Завальный');

    let answerVar_10_4_1 = document.getElementById('answerVar_1'),
        answerVar_10_4_2 = document.getElementById('answerVar_2'),
        answerVar_10_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_10_4 = [answerVar_10_4_1, answerVar_10_4_2, answerVar_10_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_10_1"></li>
        <li id="questionStar_10_2"></li>
        <li id="questionStar_10_3"></li>
        <li id="questionStar_10_4"></li>
        <li id="questionStar_10_5"></li>
    `;

    const questionStar_10_1 = document.getElementById('questionStar_10_1'),
        questionStar_10_2 = document.getElementById('questionStar_10_2'),
        questionStar_10_3 = document.getElementById('questionStar_10_3'),
        questionStar_10_4 = document.getElementById('questionStar_10_4'),
        questionStar_10_5 = document.getElementById('questionStar_10_5')
    ;

    function starsView_4() {
        if (progressKraevedQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressKraevedQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressKraevedQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressKraevedQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_10_4.length; i++) {
        if (answerVarRight_10_4[i] === answerVarRight_10_4[answerWrightNum]) {
            answerVarRight_10_4[i].addEventListener('click', () => {
                let progressKraevedQuest_10 = JSON.parse(localStorage.getItem('progressKraevedQuest_10'));
                let progressKraevedQuestSum_10_4 = progressKraevedQuest_10_4 + 1;
                let progressKraevedQuestSum_10 = progressKraevedQuestSum_10_4 + progressKraevedQuest_10;

                localStorage.setItem('progressKraevedQuest_10_4', JSON.stringify(progressKraevedQuestSum_10_4));
                localStorage.setItem('progressKraevedQuest_10', JSON.stringify(progressKraevedQuestSum_10));
                if (progressKraevedQuestSum_10_4 === 1) {
                    questionStar_10_4.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_5'))
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
                    questionKraevedCat_10_5();
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

function questionKraevedCat_10_5() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_10_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_1')),
        progressKraevedQuest_10_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
        progressKraevedQuest_10_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3')),
        progressKraevedQuest_10_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_4')),
        progressKraevedQuest_10_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_10_4') === null) {
        localStorage.setItem('progressKraevedQuest_10_4', JSON.stringify(progressKraevedQuest_10_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Очарованные странники','«Однажды над городом пронесся целый ураган, в продолжении которого были минуты, когда из окон гостиницы нельзя было рассмотреть дома на противоположной стороне улицы…»', 'Ярослав Гашек', 'Дональд Уоллес', 'Пьер Ришар');

    let answerVar_10_5_1 = document.getElementById('answerVar_1'),
        answerVar_10_5_2 = document.getElementById('answerVar_2'),
        answerVar_10_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_10_5 = [answerVar_10_5_1, answerVar_10_5_2, answerVar_10_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_10_1"></li>
        <li id="questionStar_10_2"></li>
        <li id="questionStar_10_3"></li>
        <li id="questionStar_10_4"></li>
        <li id="questionStar_10_5"></li>
    `;

    const questionStar_10_1 = document.getElementById('questionStar_10_1'),
        questionStar_10_2 = document.getElementById('questionStar_10_2'),
        questionStar_10_3 = document.getElementById('questionStar_10_3'),
        questionStar_10_4 = document.getElementById('questionStar_10_4'),
        questionStar_10_5 = document.getElementById('questionStar_10_5')
    ;

    function starsView_5() {
        if (progressKraevedQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressKraevedQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressKraevedQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressKraevedQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_10_5.length; i++) {
        if (answerVarRight_10_5[i] === answerVarRight_10_5[answerWrightNum]) {
            answerVarRight_10_5[i].addEventListener('click', () => {
                let progressKraevedQuest_10 = JSON.parse(localStorage.getItem('progressKraevedQuest_10'));
                let progressKraevedQuestSum_10_5 = progressKraevedQuest_10_5 + 1;
                let progressKraevedQuestSum_10 = progressKraevedQuestSum_10_5 + progressKraevedQuest_10;

                localStorage.setItem('progressKraevedQuest_10_5', JSON.stringify(progressKraevedQuestSum_10_5));
                localStorage.setItem('progressKraevedQuest_10', JSON.stringify(progressKraevedQuestSum_10));
                if (progressKraevedQuestSum_10_5 === 1) {
                    questionStar_10_5.className += 'fill';
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