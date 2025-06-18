
if (localStorage.getItem('progressChicheroneQuest_9') === null) {
    localStorage.setItem('progressChicheroneQuest_9', JSON.stringify(0));
}

// Chicherone. Quest 9
function questionChicheroneCat_9_1() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_9_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_1')),
        progressChicheroneQuest_9_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
        progressChicheroneQuest_9_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3')),
        progressChicheroneQuest_9_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_4')),
        progressChicheroneQuest_9_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_9_1') === null) {
        localStorage.setItem('progressChicheroneQuest_9_1', JSON.stringify(progressChicheroneQuest_9_1));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Литературная Самара', 'Журналист одной из городских газет, вел отдел фельетонов. Самара стала городом, где началась его литературная известность', 'Максим Горький', 'Максимилиан Волошин', 'Александр Неверов');

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
        if (progressChicheroneQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressChicheroneQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressChicheroneQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
        if (progressChicheroneQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_9_1.length; i++) {
        if (answerVarRight_9_1[i] === answerVarRight_9_1[answerWrightNum]) {
            answerVarRight_9_1[i].addEventListener('click', () => {
                let progressChicheroneQuest_9 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9'));
                let progressChicheroneQuestSum_9_1 = progressChicheroneQuest_9_1 + 1;
                let progressChicheroneQuestSum_9 = progressChicheroneQuestSum_9_1 + progressChicheroneQuest_9;

                localStorage.setItem('progressChicheroneQuest_9_1', JSON.stringify(progressChicheroneQuestSum_9_1));
                localStorage.setItem('progressChicheroneQuest_9', JSON.stringify(progressChicheroneQuestSum_9));
                if (progressChicheroneQuestSum_9_1 === 1) {
                    questionStar_9_1.className += 'fill';
                }
            });
            console.log(answerVarRight_9_1[answerWrightNum]);
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_5'))
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
                    questionChicheroneCat_9_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChicheroneCat_9_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_9_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_9_5();
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

function questionChicheroneCat_9_2() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_9_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_1')),
        progressChicheroneQuest_9_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
        progressChicheroneQuest_9_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3')),
        progressChicheroneQuest_9_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_4')),
        progressChicheroneQuest_9_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_9_2') === null) {
        localStorage.setItem('progressChicheroneQuest_9_2', JSON.stringify(progressChicheroneQuest_9_2));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Литературная Самара', 'Алексей Толстой некоторое время учился в Самаре...', 'В гимназии', 'В реальном училище', 'В лицее');

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
        if (progressChicheroneQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressChicheroneQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressChicheroneQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
        if (progressChicheroneQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_9_2.length; i++) {
        if (answerVarRight_9_2[i] === answerVarRight_9_2[answerWrightNum]) {
            answerVarRight_9_2[i].addEventListener('click', () => {
                let progressChicheroneQuest_9 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9'));
                let progressChicheroneQuestSum_9_2 = progressChicheroneQuest_9_2 + 1;
                let progressChicheroneQuestSum_9 = progressChicheroneQuestSum_9_2 + progressChicheroneQuest_9;

                localStorage.setItem('progressChicheroneQuest_9_2', JSON.stringify(progressChicheroneQuestSum_9_2));
                localStorage.setItem('progressChicheroneQuest_9', JSON.stringify(progressChicheroneQuestSum_9));
                if (progressChicheroneQuestSum_9_2 === 1) {
                    questionStar_9_2.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_5'))
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
                    questionChicheroneCat_9_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_9_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_9_5();
                }
            }
        });
        // if (progressChicheroneQuest_9_2 === 0 &&
        //     progressChicheroneQuest_9_3 === 1 &&
        //     progressChicheroneQuest_9_4 === 1 &&
        //     progressChicheroneQuest_9_5 === 1) {
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

function questionChicheroneCat_9_3() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_9_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_1')),
        progressChicheroneQuest_9_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
        progressChicheroneQuest_9_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3')),
        progressChicheroneQuest_9_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_4')),
        progressChicheroneQuest_9_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_9_3') === null) {
        localStorage.setItem('progressChicheroneQuest_9_3', JSON.stringify(progressChicheroneQuest_9_3));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Литературная Самара','Александр Островский подарил Самарской публичной библиотеке...', 'Экземпляр рукописи с дарственной надписью', 'Свой портрет с дарственной надписью', 'Книги из личной библиотеки');

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
        if (progressChicheroneQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressChicheroneQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressChicheroneQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
        if (progressChicheroneQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_9_3.length; i++) {
        if (answerVarRight_9_3[i] === answerVarRight_9_3[answerWrightNum]) {
            answerVarRight_9_3[i].addEventListener('click', () => {
                let progressChicheroneQuest_9 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9'));
                let progressChicheroneQuestSum_9_3 = progressChicheroneQuest_9_3 + 1;
                let progressChicheroneQuestSum_9 = progressChicheroneQuestSum_9_3 + progressChicheroneQuest_9;

                localStorage.setItem('progressChicheroneQuest_9_3', JSON.stringify(progressChicheroneQuestSum_9_3));
                localStorage.setItem('progressChicheroneQuest_9', JSON.stringify(progressChicheroneQuestSum_9));
                if (progressChicheroneQuestSum_9_3 === 1) {
                    questionStar_9_3.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_5'))
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
                    questionChicheroneCat_9_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_9_5();
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

function questionChicheroneCat_9_4() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_9_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_1')),
        progressChicheroneQuest_9_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
        progressChicheroneQuest_9_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3')),
        progressChicheroneQuest_9_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_4')),
        progressChicheroneQuest_9_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_9_4') === null) {
        localStorage.setItem('progressChicheroneQuest_9_4', JSON.stringify(progressChicheroneQuest_9_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Литературная Самара','Литературный герой бравый солдат Чонкин родился...', 'В селе Хворостянка', 'В селе Тростянка', 'В селе Пестравка');

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
        if (progressChicheroneQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressChicheroneQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressChicheroneQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressChicheroneQuest_9_5 === 1) {
            questionStar_9_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_9_4.length; i++) {
        if (answerVarRight_9_4[i] === answerVarRight_9_4[answerWrightNum]) {
            answerVarRight_9_4[i].addEventListener('click', () => {
                let progressChicheroneQuest_9 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9'));
                let progressChicheroneQuestSum_9_4 = progressChicheroneQuest_9_4 + 1;
                let progressChicheroneQuestSum_9 = progressChicheroneQuestSum_9_4 + progressChicheroneQuest_9;

                localStorage.setItem('progressChicheroneQuest_9_4', JSON.stringify(progressChicheroneQuestSum_9_4));
                localStorage.setItem('progressChicheroneQuest_9', JSON.stringify(progressChicheroneQuestSum_9));
                if (progressChicheroneQuestSum_9_4 === 1) {
                    questionStar_9_4.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_5'))
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
                    questionChicheroneCat_9_5();
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

function questionChicheroneCat_9_5() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_9_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_1')),
        progressChicheroneQuest_9_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
        progressChicheroneQuest_9_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3')),
        progressChicheroneQuest_9_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_4')),
        progressChicheroneQuest_9_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_9_4') === null) {
        localStorage.setItem('progressChicheroneQuest_9_4', JSON.stringify(progressChicheroneQuest_9_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Литературная Самара','Роман «Россия кровью умытая» принадлежит...', 'Артему Веселому', 'Аркадию Гайдару', 'Василию Аксенову');

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
        if (progressChicheroneQuest_9_1 === 1) {
            questionStar_9_1.className += 'fill';
        }
        if (progressChicheroneQuest_9_2 === 1) {
            questionStar_9_2.className += 'fill';
        }
        if (progressChicheroneQuest_9_3 === 1) {
            questionStar_9_3.className += 'fill';
        }
        if (progressChicheroneQuest_9_4 === 1) {
            questionStar_9_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_9_5.length; i++) {
        if (answerVarRight_9_5[i] === answerVarRight_9_5[answerWrightNum]) {
            answerVarRight_9_5[i].addEventListener('click', () => {
                let progressChicheroneQuest_9 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9'));
                let progressChicheroneQuestSum_9_5 = progressChicheroneQuest_9_5 + 1;
                let progressChicheroneQuestSum_9 = progressChicheroneQuestSum_9_5 + progressChicheroneQuest_9;

                localStorage.setItem('progressChicheroneQuest_9_5', JSON.stringify(progressChicheroneQuestSum_9_5));
                localStorage.setItem('progressChicheroneQuest_9', JSON.stringify(progressChicheroneQuestSum_9));
                if (progressChicheroneQuestSum_9_5 === 1) {
                    questionStar_9_5.className += 'fill';
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