
if (localStorage.getItem('progressChicheroneQuest_10') === null) {
    localStorage.setItem('progressChicheroneQuest_10', JSON.stringify(0));
}

// Chicherone. Quest 10
function questionChicheroneCat_10_1() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_10_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_1')),
        progressChicheroneQuest_10_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
        progressChicheroneQuest_10_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3')),
        progressChicheroneQuest_10_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_4')),
        progressChicheroneQuest_10_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_10_1') === null) {
        localStorage.setItem('progressChicheroneQuest_10_1', JSON.stringify(progressChicheroneQuest_10_1));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Очарованная Самара', '«Особенно соблазняет простота и честность, и наивность, и ум здешнего народа»', 'Илья Репин', 'Лев Толстой', 'Федор Шаляпин');

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
        if (progressChicheroneQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressChicheroneQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressChicheroneQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
        if (progressChicheroneQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_10_1.length; i++) {
        if (answerVarRight_10_1[i] === answerVarRight_10_1[answerWrightNum]) {
            answerVarRight_10_1[i].addEventListener('click', () => {
                let progressChicheroneQuest_10 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10'));
                let progressChicheroneQuestSum_10_1 = progressChicheroneQuest_10_1 + 1;
                let progressChicheroneQuestSum_10 = progressChicheroneQuestSum_10_1 + progressChicheroneQuest_10;

                localStorage.setItem('progressChicheroneQuest_10_1', JSON.stringify(progressChicheroneQuestSum_10_1));
                localStorage.setItem('progressChicheroneQuest_10', JSON.stringify(progressChicheroneQuestSum_10));
                if (progressChicheroneQuestSum_10_1 === 1) {
                    questionStar_10_1.className += 'fill';
                }
            });
            console.log(answerVarRight_10_1[answerWrightNum]);
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_5'))
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
                    questionChicheroneCat_10_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChicheroneCat_10_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_10_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_10_5();
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

function questionChicheroneCat_10_2() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_10_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_1')),
        progressChicheroneQuest_10_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
        progressChicheroneQuest_10_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3')),
        progressChicheroneQuest_10_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_4')),
        progressChicheroneQuest_10_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_10_2') === null) {
        localStorage.setItem('progressChicheroneQuest_10_2', JSON.stringify(progressChicheroneQuest_10_2));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Очарованная Самара', '«Кто в Самаре не бывал, тот и грязи не видал»', 'Максим Горький', 'Алексей Толстой', 'Александр Ширяевец');

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
        if (progressChicheroneQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressChicheroneQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressChicheroneQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
        if (progressChicheroneQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_10_2.length; i++) {
        if (answerVarRight_10_2[i] === answerVarRight_10_2[answerWrightNum]) {
            answerVarRight_10_2[i].addEventListener('click', () => {
                let progressChicheroneQuest_10 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10'));
                let progressChicheroneQuestSum_10_2 = progressChicheroneQuest_10_2 + 1;
                let progressChicheroneQuestSum_10 = progressChicheroneQuestSum_10_2 + progressChicheroneQuest_10;

                localStorage.setItem('progressChicheroneQuest_10_2', JSON.stringify(progressChicheroneQuestSum_10_2));
                localStorage.setItem('progressChicheroneQuest_10', JSON.stringify(progressChicheroneQuestSum_10));
                if (progressChicheroneQuestSum_10_2 === 1) {
                    questionStar_10_2.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_5'))
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
                    questionChicheroneCat_10_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_10_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_10_5();
                }
            }
        });
        // if (progressChicheroneQuest_10_2 === 0 &&
        //     progressChicheroneQuest_10_3 === 1 &&
        //     progressChicheroneQuest_10_4 === 1 &&
        //     progressChicheroneQuest_10_5 === 1) {
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

function questionChicheroneCat_10_3() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChicheroneQuest_10_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_1')),
        progressChicheroneQuest_10_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
        progressChicheroneQuest_10_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3')),
        progressChicheroneQuest_10_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_4')),
        progressChicheroneQuest_10_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_10_3') === null) {
        localStorage.setItem('progressChicheroneQuest_10_3', JSON.stringify(progressChicheroneQuest_10_3));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Очарованная Самара','«Новый русский Орлеан»', 'Людмила Петрушевская', 'Борис Пастернак', 'Тарас Шевченко');

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
        if (progressChicheroneQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressChicheroneQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressChicheroneQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
        if (progressChicheroneQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_10_3.length; i++) {
        if (answerVarRight_10_3[i] === answerVarRight_10_3[answerWrightNum]) {
            answerVarRight_10_3[i].addEventListener('click', () => {
                let progressChicheroneQuest_10 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10'));
                let progressChicheroneQuestSum_10_3 = progressChicheroneQuest_10_3 + 1;
                let progressChicheroneQuestSum_10 = progressChicheroneQuestSum_10_3 + progressChicheroneQuest_10;

                localStorage.setItem('progressChicheroneQuest_10_3', JSON.stringify(progressChicheroneQuestSum_10_3));
                localStorage.setItem('progressChicheroneQuest_10', JSON.stringify(progressChicheroneQuestSum_10));
                if (progressChicheroneQuestSum_10_3 === 1) {
                    questionStar_10_3.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_5'))
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
                    questionChicheroneCat_10_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_10_5();
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

function questionChicheroneCat_10_4() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChicheroneQuest_10_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_1')),
        progressChicheroneQuest_10_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
        progressChicheroneQuest_10_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3')),
        progressChicheroneQuest_10_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_4')),
        progressChicheroneQuest_10_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_10_4') === null) {
        localStorage.setItem('progressChicheroneQuest_10_4', JSON.stringify(progressChicheroneQuest_10_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Очарованная Самара','«В Самаре два трамвая. На одном надпись «Площадь Революции – Тюрьма», на другом «Площадь Советская – Тюрьма»... Словом все дороги ведут в Рим!»', 'Юрий Олеша', 'Антон Чехов', 'Михаил Зощенко');

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
        if (progressChicheroneQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressChicheroneQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressChicheroneQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressChicheroneQuest_10_5 === 1) {
            questionStar_10_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_10_4.length; i++) {
        if (answerVarRight_10_4[i] === answerVarRight_10_4[answerWrightNum]) {
            answerVarRight_10_4[i].addEventListener('click', () => {
                let progressChicheroneQuest_10 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10'));
                let progressChicheroneQuestSum_10_4 = progressChicheroneQuest_10_4 + 1;
                let progressChicheroneQuestSum_10 = progressChicheroneQuestSum_10_4 + progressChicheroneQuest_10;

                localStorage.setItem('progressChicheroneQuest_10_4', JSON.stringify(progressChicheroneQuestSum_10_4));
                localStorage.setItem('progressChicheroneQuest_10', JSON.stringify(progressChicheroneQuestSum_10));
                if (progressChicheroneQuestSum_10_4 === 1) {
                    questionStar_10_4.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_5'))
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
                    questionChicheroneCat_10_5();
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

function questionChicheroneCat_10_5() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_10_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_1')),
        progressChicheroneQuest_10_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
        progressChicheroneQuest_10_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3')),
        progressChicheroneQuest_10_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_4')),
        progressChicheroneQuest_10_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_10_4') === null) {
        localStorage.setItem('progressChicheroneQuest_10_4', JSON.stringify(progressChicheroneQuest_10_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Очарованная Самара','«Самаре не быть!»', 'Нагайский хан Урус', 'Иегудиил Хламида', 'Степан Разин');

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
        if (progressChicheroneQuest_10_1 === 1) {
            questionStar_10_1.className += 'fill';
        }
        if (progressChicheroneQuest_10_2 === 1) {
            questionStar_10_2.className += 'fill';
        }
        if (progressChicheroneQuest_10_3 === 1) {
            questionStar_10_3.className += 'fill';
        }
        if (progressChicheroneQuest_10_4 === 1) {
            questionStar_10_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_10_5.length; i++) {
        if (answerVarRight_10_5[i] === answerVarRight_10_5[answerWrightNum]) {
            answerVarRight_10_5[i].addEventListener('click', () => {
                let progressChicheroneQuest_10 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10'));
                let progressChicheroneQuestSum_10_5 = progressChicheroneQuest_10_5 + 1;
                let progressChicheroneQuestSum_10 = progressChicheroneQuestSum_10_5 + progressChicheroneQuest_10;

                localStorage.setItem('progressChicheroneQuest_10_5', JSON.stringify(progressChicheroneQuestSum_10_5));
                localStorage.setItem('progressChicheroneQuest_10', JSON.stringify(progressChicheroneQuestSum_10));
                if (progressChicheroneQuestSum_10_5 === 1) {
                    questionStar_10_5.className += 'fill';
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