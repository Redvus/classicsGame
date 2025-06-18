
if (localStorage.getItem('progressChicheroneQuest_5') === null) {
    localStorage.setItem('progressChicheroneQuest_5', JSON.stringify(0));
}

// Chicherone. Quest 5
function questionChicheroneCat_5_1() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_5_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_1')),
        progressChicheroneQuest_5_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
        progressChicheroneQuest_5_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3')),
        progressChicheroneQuest_5_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_4')),
        progressChicheroneQuest_5_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_5_1') === null) {
        localStorage.setItem('progressChicheroneQuest_5_1', JSON.stringify(progressChicheroneQuest_5_1));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самара в лицах', 'Дача, волжская коса, затон, ветка ж/д по берегу Волги именовалась по фамилии самарского купца', 'Егор Никитич Аннаева', 'Александр Александрович Щербачева', 'Карл Павлович Головкина');

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
        if (progressChicheroneQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressChicheroneQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressChicheroneQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
        if (progressChicheroneQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_5_1.length; i++) {
        if (answerVarRight_5_1[i] === answerVarRight_5_1[answerWrightNum]) {
            answerVarRight_5_1[i].addEventListener('click', () => {
                let progressChicheroneQuest_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5'));
                let progressChicheroneQuestSum_5_1 = progressChicheroneQuest_5_1 + 1;
                let progressChicheroneQuestSum_5 = progressChicheroneQuestSum_5_1 + progressChicheroneQuest_5;

                localStorage.setItem('progressChicheroneQuest_5_1', JSON.stringify(progressChicheroneQuestSum_5_1));
                localStorage.setItem('progressChicheroneQuest_5', JSON.stringify(progressChicheroneQuestSum_5));
                if (progressChicheroneQuestSum_5_1 === 1) {
                    questionStar_5_1.className += 'fill';
                }
            });
            console.log(answerVarRight_5_1[answerWrightNum]);
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_5'))
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
                    questionChicheroneCat_5_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChicheroneCat_5_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_5_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_5_5();
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

function questionChicheroneCat_5_2() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChicheroneQuest_5_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_1')),
        progressChicheroneQuest_5_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
        progressChicheroneQuest_5_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3')),
        progressChicheroneQuest_5_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_4')),
        progressChicheroneQuest_5_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_5_2') === null) {
        localStorage.setItem('progressChicheroneQuest_5_2', JSON.stringify(progressChicheroneQuest_5_2));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самара в лицах', 'Иван Львович Блок служил в Самаре...', 'Губернатором', 'Советником', 'Архитектором');

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
        if (progressChicheroneQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressChicheroneQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressChicheroneQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
        if (progressChicheroneQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_5_2.length; i++) {
        if (answerVarRight_5_2[i] === answerVarRight_5_2[answerWrightNum]) {
            answerVarRight_5_2[i].addEventListener('click', () => {
                let progressChicheroneQuest_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5'));
                let progressChicheroneQuestSum_5_2 = progressChicheroneQuest_5_2 + 1;
                let progressChicheroneQuestSum_5 = progressChicheroneQuestSum_5_2 + progressChicheroneQuest_5;

                localStorage.setItem('progressChicheroneQuest_5_2', JSON.stringify(progressChicheroneQuestSum_5_2));
                localStorage.setItem('progressChicheroneQuest_5', JSON.stringify(progressChicheroneQuestSum_5));
                if (progressChicheroneQuestSum_5_2 === 1) {
                    questionStar_5_2.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_5'))
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
                    questionChicheroneCat_5_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionChicheroneCat_5_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_5_5();
                }
            }
        });
        // if (progressChicheroneQuest_5_2 === 0 &&
        //     progressChicheroneQuest_5_3 === 1 &&
        //     progressChicheroneQuest_5_4 === 1 &&
        //     progressChicheroneQuest_5_5 === 1) {
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

function questionChicheroneCat_5_3() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_5_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_1')),
        progressChicheroneQuest_5_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
        progressChicheroneQuest_5_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3')),
        progressChicheroneQuest_5_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_4')),
        progressChicheroneQuest_5_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_5_3') === null) {
        localStorage.setItem('progressChicheroneQuest_5_3', JSON.stringify(progressChicheroneQuest_5_3));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самара в лицах','Первым автолюбителем в Самаре был...', 'Кирилл Меерович Белоцерковский', 'Карл Павлович Головкин', 'Петр Алексеевич Алабин ');

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
        if (progressChicheroneQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressChicheroneQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressChicheroneQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
        if (progressChicheroneQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_5_3.length; i++) {
        if (answerVarRight_5_3[i] === answerVarRight_5_3[answerWrightNum]) {
            answerVarRight_5_3[i].addEventListener('click', () => {
                let progressChicheroneQuest_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5'));
                let progressChicheroneQuestSum_5_3 = progressChicheroneQuest_5_3 + 1;
                let progressChicheroneQuestSum_5 = progressChicheroneQuestSum_5_3 + progressChicheroneQuest_5;

                localStorage.setItem('progressChicheroneQuest_5_3', JSON.stringify(progressChicheroneQuestSum_5_3));
                localStorage.setItem('progressChicheroneQuest_5', JSON.stringify(progressChicheroneQuestSum_5));
                if (progressChicheroneQuestSum_5_3 === 1) {
                    questionStar_5_3.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'В июле 1904 года в Самаре первым собственным автомобилем обзавелся купец 2 гильдии, художник, фотограф и краевед Константин Павлович Головкин');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_5'))
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
                    questionChicheroneCat_5_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionChicheroneCat_5_5();
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

function questionChicheroneCat_5_4() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_5_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_1')),
        progressChicheroneQuest_5_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
        progressChicheroneQuest_5_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3')),
        progressChicheroneQuest_5_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_4')),
        progressChicheroneQuest_5_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_5_4') === null) {
        localStorage.setItem('progressChicheroneQuest_5_4', JSON.stringify(progressChicheroneQuest_5_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самара в лицах','Кем Алабину приходился куйбышевский архитектор П. А. Щербачев?', 'Зять', 'Племянник', 'Внук');

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
        if (progressChicheroneQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressChicheroneQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressChicheroneQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressChicheroneQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_5_4.length; i++) {
        if (answerVarRight_5_4[i] === answerVarRight_5_4[answerWrightNum]) {
            answerVarRight_5_4[i].addEventListener('click', () => {
                let progressChicheroneQuest_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5'));
                let progressChicheroneQuestSum_5_4 = progressChicheroneQuest_5_4 + 1;
                let progressChicheroneQuestSum_5 = progressChicheroneQuestSum_5_4 + progressChicheroneQuest_5;

                localStorage.setItem('progressChicheroneQuest_5_4', JSON.stringify(progressChicheroneQuestSum_5_4));
                localStorage.setItem('progressChicheroneQuest_5', JSON.stringify(progressChicheroneQuestSum_5));
                if (progressChicheroneQuestSum_5_4 === 1) {
                    questionStar_5_4.className += 'fill';
                }
            });
        }
    }

    questChicheroneCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_5'))
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
                    questionChicheroneCat_5_5();
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

function questionChicheroneCat_5_5() {
    let questChicheroneCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChicheroneQuest_5_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_1')),
        progressChicheroneQuest_5_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
        progressChicheroneQuest_5_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3')),
        progressChicheroneQuest_5_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_4')),
        progressChicheroneQuest_5_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_5'))
    ;

    if (localStorage.getItem('progressChicheroneQuest_5_4') === null) {
        localStorage.setItem('progressChicheroneQuest_5_4', JSON.stringify(progressChicheroneQuest_5_4));
    }

    questChicheroneCatLoad.questionBlock('Чичероне', 'Самара в лицах','Поэт, этнограф, фольклорист, Дмитрий Николаевич Садовников написал песню...', '«Ах, Самара городок!»', '«Из-за острова на стрежень»', '«Из-за острова на стрежень»');

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
        if (progressChicheroneQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressChicheroneQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressChicheroneQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressChicheroneQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_5_5.length; i++) {
        if (answerVarRight_5_5[i] === answerVarRight_5_5[answerWrightNum]) {
            answerVarRight_5_5[i].addEventListener('click', () => {
                let progressChicheroneQuest_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5'));
                let progressChicheroneQuestSum_5_5 = progressChicheroneQuest_5_5 + 1;
                let progressChicheroneQuestSum_5 = progressChicheroneQuestSum_5_5 + progressChicheroneQuest_5;

                localStorage.setItem('progressChicheroneQuest_5_5', JSON.stringify(progressChicheroneQuestSum_5_5));
                localStorage.setItem('progressChicheroneQuest_5', JSON.stringify(progressChicheroneQuestSum_5));
                if (progressChicheroneQuestSum_5_5 === 1) {
                    questionStar_5_5.className += 'fill';
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