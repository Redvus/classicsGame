
if (localStorage.getItem('progressChicheroneQuest_7') === null) {
    localStorage.setItem('progressChicheroneQuest_7', JSON.stringify(0));
}

// Chicherone. Quest 7
function questionChicheroneCat_7_1() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_7_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_1')),
        progressChicheroneQuest_7_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
        progressChicheroneQuest_7_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3')),
        progressChicheroneQuest_7_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_4')),
        progressChicheroneQuest_7_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_7_1') === null) {
        localStorage.setItem('progressChicheroneQuest_7_1', JSON.stringify(progressChicheroneQuest_7_1));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Культурная столица', 'В Самаре впервые прозвучал знаменитый вальс «На сопках Манчжурии». Это знаменательное событие произошло...', 'В Струковском саду', 'В Театре оперы и балета', 'В Окружном доме офицеров');

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
        if (progressChicheroneQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressChicheroneQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressChicheroneQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
        if (progressChicheroneQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_7_1.length; i++) {
        if (answerVarRight_7_1[i] === answerVarRight_7_1[answerWrightNum]) {
            answerVarRight_7_1[i].addEventListener('click', () => {
                let progressChicheroneQuest_7 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7'));
                let progressChicheroneQuestSum_7_1 = progressChicheroneQuest_7_1 + 1;
                let progressChicheroneQuestSum_7 = progressChicheroneQuestSum_7_1 + progressChicheroneQuest_7;

                localStorage.setItem('progressChicheroneQuest_7_1', JSON.stringify(progressChicheroneQuestSum_7_1));
                localStorage.setItem('progressChicheroneQuest_7', JSON.stringify(progressChicheroneQuestSum_7));
                if (progressChicheroneQuestSum_7_1 === 1) {
                    questionStar_7_1.className += 'fill';
                }
            });
            console.log(answerVarRight_7_1[answerWrightNum]);
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'В Самаре 24 апреля 1908 года состоялось первое исполнение вальса духовым оркестром');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_5'))
    ;

    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                // starsRemove();
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
                    chicheroneCategoryDev();
                    lockSubQuestChicherone();
                } else if (questValue_1_2 === 0) {
                    questionChicheroneCat_7_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChicheroneCat_7_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_7_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_7_5();
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
                chicheroneCategoryDev();
                lockSubQuestChicherone();
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

function questionChicheroneCat_7_2() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_7_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_1')),
        progressChicheroneQuest_7_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
        progressChicheroneQuest_7_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3')),
        progressChicheroneQuest_7_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_4')),
        progressChicheroneQuest_7_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_7_2') === null) {
        localStorage.setItem('progressChicheroneQuest_7_2', JSON.stringify(progressChicheroneQuest_7_2));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Культурная столица', 'В 1906 году в Самаре открылся концертный зал с первым синематографом (кинематограф). Назывался он...', '«Обсерватория»', '«Биоскоп»', '«Калейдоскоп»');

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
        if (progressChicheroneQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressChicheroneQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressChicheroneQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
        if (progressChicheroneQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_7_2.length; i++) {
        if (answerVarRight_7_2[i] === answerVarRight_7_2[answerWrightNum]) {
            answerVarRight_7_2[i].addEventListener('click', () => {
                let progressChicheroneQuest_7 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7'));
                let progressChicheroneQuestSum_7_2 = progressChicheroneQuest_7_2 + 1;
                let progressChicheroneQuestSum_7 = progressChicheroneQuestSum_7_2 + progressChicheroneQuest_7;

                localStorage.setItem('progressChicheroneQuest_7_2', JSON.stringify(progressChicheroneQuestSum_7_2));
                localStorage.setItem('progressChicheroneQuest_7', JSON.stringify(progressChicheroneQuestSum_7));
                if (progressChicheroneQuestSum_7_2 === 1) {
                    questionStar_7_2.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Первое постоянное «каменное с железной крышей» помещение под биоскоп, было построено в Струковском саду неким К. В. Бремером в 1907 году');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_5'))
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
                    chicheroneCategoryDev();
                    lockSubQuestChicherone();
                } else if (questValue_1_3 === 0) {
                    questionChicheroneCat_7_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_7_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_7_5();
                }
            }
        });
        // if (progressChicheroneQuest_7_2 === 0 &&
        //     progressChicheroneQuest_7_3 === 1 &&
        //     progressChicheroneQuest_7_4 === 1 &&
        //     progressChicheroneQuest_7_5 === 1) {
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
                chicheroneCategoryDev();
                lockSubQuestChicherone();
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

function questionChicheroneCat_7_3() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_7_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_1')),
        progressChicheroneQuest_7_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
        progressChicheroneQuest_7_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3')),
        progressChicheroneQuest_7_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_4')),
        progressChicheroneQuest_7_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_7_3') === null) {
        localStorage.setItem('progressChicheroneQuest_7_3', JSON.stringify(progressChicheroneQuest_7_3));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Культурная столица','В 1940 году в Самаре снимали детский фильм', '«Красная шапочка»', '«Тимур и его команда»', '«Конек – Горбунок»');

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
        if (progressChicheroneQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressChicheroneQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressChicheroneQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
        if (progressChicheroneQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_7_3.length; i++) {
        if (answerVarRight_7_3[i] === answerVarRight_7_3[answerWrightNum]) {
            answerVarRight_7_3[i].addEventListener('click', () => {
                let progressChicheroneQuest_7 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7'));
                let progressChicheroneQuestSum_7_3 = progressChicheroneQuest_7_3 + 1;
                let progressChicheroneQuestSum_7 = progressChicheroneQuestSum_7_3 + progressChicheroneQuest_7;

                localStorage.setItem('progressChicheroneQuest_7_3', JSON.stringify(progressChicheroneQuestSum_7_3));
                localStorage.setItem('progressChicheroneQuest_7', JSON.stringify(progressChicheroneQuestSum_7));
                if (progressChicheroneQuestSum_7_3 === 1) {
                    questionStar_7_3.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Почти на половине этой ленты оказался запечатлен тогдашний дачный поселок, расположенный в районе Поляны имени М.В. Фрунзе в Куйбышеве (ныне Барбошина Поляна в Самаре)');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_5'))
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
                    chicheroneCategoryDev();
                    lockSubQuestChicherone();
                } else if (questValue_1_4 === 0) {
                    questionChicheroneCat_7_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_7_5();
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
                chicheroneCategoryDev();
                lockSubQuestChicherone();
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

function questionChicheroneCat_7_4() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_7_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_1')),
        progressChicheroneQuest_7_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
        progressChicheroneQuest_7_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3')),
        progressChicheroneQuest_7_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_4')),
        progressChicheroneQuest_7_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_7_4') === null) {
        localStorage.setItem('progressChicheroneQuest_7_4', JSON.stringify(progressChicheroneQuest_7_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Культурная столица','Премьера Седьмой симфонии Дмитрия Шостаковича состоялась в Самаре 5 марта 1942 года. И звучала еще в нашем городе...', '3 раза', '5 раз', '7 раз');

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
        if (progressChicheroneQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressChicheroneQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressChicheroneQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressChicheroneQuest_7_5 === 1) {
            questionStar_7_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_7_4.length; i++) {
        if (answerVarRight_7_4[i] === answerVarRight_7_4[answerWrightNum]) {
            answerVarRight_7_4[i].addEventListener('click', () => {
                let progressChicheroneQuest_7 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7'));
                let progressChicheroneQuestSum_7_4 = progressChicheroneQuest_7_4 + 1;
                let progressChicheroneQuestSum_7 = progressChicheroneQuestSum_7_4 + progressChicheroneQuest_7;

                localStorage.setItem('progressChicheroneQuest_7_4', JSON.stringify(progressChicheroneQuestSum_7_4));
                localStorage.setItem('progressChicheroneQuest_7', JSON.stringify(progressChicheroneQuestSum_7));
                if (progressChicheroneQuestSum_7_4 === 1) {
                    questionStar_7_4.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, '23 ноября 1942 года, 21 декабря 1942, май 1975, май 1992');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_5'))
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
                    chicheroneCategoryDev();
                    lockSubQuestChicherone();
                } else if (questValue_1_5 === 0) {
                    questionChicheroneCat_7_5();
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
                chicheroneCategoryDev();
                lockSubQuestChicherone();
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

function questionChicheroneCat_7_5() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChicheroneQuest_7_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_1')),
        progressChicheroneQuest_7_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
        progressChicheroneQuest_7_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3')),
        progressChicheroneQuest_7_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_4')),
        progressChicheroneQuest_7_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_7_4') === null) {
        localStorage.setItem('progressChicheroneQuest_7_4', JSON.stringify(progressChicheroneQuest_7_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Культурная столица','Этому виду спорта в Самаре посвящен музей', 'Музей шахмат', 'Музей гребли', 'Музей футбола');

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
        if (progressChicheroneQuest_7_1 === 1) {
            questionStar_7_1.className += 'fill';
        }
        if (progressChicheroneQuest_7_2 === 1) {
            questionStar_7_2.className += 'fill';
        }
        if (progressChicheroneQuest_7_3 === 1) {
            questionStar_7_3.className += 'fill';
        }
        if (progressChicheroneQuest_7_4 === 1) {
            questionStar_7_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_7_5.length; i++) {
        if (answerVarRight_7_5[i] === answerVarRight_7_5[answerWrightNum]) {
            answerVarRight_7_5[i].addEventListener('click', () => {
                let progressChicheroneQuest_7 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7'));
                let progressChicheroneQuestSum_7_5 = progressChicheroneQuest_7_5 + 1;
                let progressChicheroneQuestSum_7 = progressChicheroneQuestSum_7_5 + progressChicheroneQuest_7;

                localStorage.setItem('progressChicheroneQuest_7_5', JSON.stringify(progressChicheroneQuestSum_7_5));
                localStorage.setItem('progressChicheroneQuest_7', JSON.stringify(progressChicheroneQuestSum_7));
                if (progressChicheroneQuestSum_7_5 === 1) {
                    questionStar_7_5.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Ну конечно же!');

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
                chicheroneCategoryDev();
                lockSubQuestChicherone();
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
                chicheroneCategoryDev();
                lockSubQuestChicherone();
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