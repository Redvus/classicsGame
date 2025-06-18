
if (localStorage.getItem('progressKraevedQuest_5') === null) {
    localStorage.setItem('progressKraevedQuest_5', JSON.stringify(0));
}

// Kraeved. Quest 5
function questionKraevedCat_5_1() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_5_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_1')),
        progressKraevedQuest_5_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
        progressKraevedQuest_5_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3')),
        progressKraevedQuest_5_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_4')),
        progressKraevedQuest_5_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_5_1') === null) {
        localStorage.setItem('progressKraevedQuest_5_1', JSON.stringify(progressKraevedQuest_5_1));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самара в лицах', 'Георгий Львович Ратнер, профессор, председатель самарского областного общества хирургов, передавал свой опыт и в зарубежных клиниках. Специалистом в какой области он был?', 'Нейрохирургия', 'Сосудистая хирургия', 'Офтальмология');

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
        if (progressKraevedQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressKraevedQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressKraevedQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
        if (progressKraevedQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_5_1.length; i++) {
        if (answerVarRight_5_1[i] === answerVarRight_5_1[answerWrightNum]) {
            answerVarRight_5_1[i].addEventListener('click', () => {
                let progressKraevedQuest_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5'));
                let progressKraevedQuestSum_5_1 = progressKraevedQuest_5_1 + 1;
                let progressKraevedQuestSum_5 = progressKraevedQuestSum_5_1 + progressKraevedQuest_5;

                localStorage.setItem('progressKraevedQuest_5_1', JSON.stringify(progressKraevedQuestSum_5_1));
                localStorage.setItem('progressKraevedQuest_5', JSON.stringify(progressKraevedQuestSum_5));
                if (progressKraevedQuestSum_5_1 === 1) {
                    questionStar_5_1.className += 'fill';
                }
            });
            console.log(answerVarRight_5_1[answerWrightNum]);
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_5'))
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
                    questionKraevedCat_5_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionKraevedCat_5_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_5_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_5_5();
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

function questionKraevedCat_5_2() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_5_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_1')),
        progressKraevedQuest_5_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
        progressKraevedQuest_5_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3')),
        progressKraevedQuest_5_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_4')),
        progressKraevedQuest_5_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_5_2') === null) {
        localStorage.setItem('progressKraevedQuest_5_2', JSON.stringify(progressKraevedQuest_5_2));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самара в лицах', 'Первый книготорговец в Самаре?', 'Грау Петр – Август', 'Петр Алабин', 'Дмитрий Щелоков');

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
        if (progressKraevedQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressKraevedQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressKraevedQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
        if (progressKraevedQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_5_2.length; i++) {
        if (answerVarRight_5_2[i] === answerVarRight_5_2[answerWrightNum]) {
            answerVarRight_5_2[i].addEventListener('click', () => {
                let progressKraevedQuest_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5'));
                let progressKraevedQuestSum_5_2 = progressKraevedQuest_5_2 + 1;
                let progressKraevedQuestSum_5 = progressKraevedQuestSum_5_2 + progressKraevedQuest_5;

                localStorage.setItem('progressKraevedQuest_5_2', JSON.stringify(progressKraevedQuestSum_5_2));
                localStorage.setItem('progressKraevedQuest_5', JSON.stringify(progressKraevedQuestSum_5));
                if (progressKraevedQuestSum_5_2 === 1) {
                    questionStar_5_2.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_5'))
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
                    questionKraevedCat_5_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_5_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_5_5();
                }
            }
        });
        // if (progressKraevedQuest_5_2 === 0 &&
        //     progressKraevedQuest_5_3 === 1 &&
        //     progressKraevedQuest_5_4 === 1 &&
        //     progressKraevedQuest_5_5 === 1) {
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

function questionKraevedCat_5_3() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_5_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_1')),
        progressKraevedQuest_5_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
        progressKraevedQuest_5_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3')),
        progressKraevedQuest_5_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_4')),
        progressKraevedQuest_5_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_5_3') === null) {
        localStorage.setItem('progressKraevedQuest_5_3', JSON.stringify(progressKraevedQuest_5_3));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самара в лицах','Самарская звезда Елена Колотовкина...', 'Режиссёр', 'Художественный руководитель', 'Актриса');

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
        if (progressKraevedQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressKraevedQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressKraevedQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
        if (progressKraevedQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_5_3.length; i++) {
        if (answerVarRight_5_3[i] === answerVarRight_5_3[answerWrightNum]) {
            answerVarRight_5_3[i].addEventListener('click', () => {
                let progressKraevedQuest_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5'));
                let progressKraevedQuestSum_5_3 = progressKraevedQuest_5_3 + 1;
                let progressKraevedQuestSum_5 = progressKraevedQuestSum_5_3 + progressKraevedQuest_5;

                localStorage.setItem('progressKraevedQuest_5_3', JSON.stringify(progressKraevedQuestSum_5_3));
                localStorage.setItem('progressKraevedQuest_5', JSON.stringify(progressKraevedQuestSum_5));
                if (progressKraevedQuestSum_5_3 === 1) {
                    questionStar_5_3.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Именно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_5'))
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
                    questionKraevedCat_5_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_5_5();
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

function questionKraevedCat_5_4() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_5_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_1')),
        progressKraevedQuest_5_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
        progressKraevedQuest_5_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3')),
        progressKraevedQuest_5_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_4')),
        progressKraevedQuest_5_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_5_4') === null) {
        localStorage.setItem('progressKraevedQuest_5_4', JSON.stringify(progressKraevedQuest_5_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самара в лицах','Николай Николаевич Семенов, выпускник Самарского реального училища, Нобелевский лауреат 1956 года', 'По химии', 'По медицине', 'По литературе');

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
        if (progressKraevedQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressKraevedQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressKraevedQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressKraevedQuest_5_5 === 1) {
            questionStar_5_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_5_4.length; i++) {
        if (answerVarRight_5_4[i] === answerVarRight_5_4[answerWrightNum]) {
            answerVarRight_5_4[i].addEventListener('click', () => {
                let progressKraevedQuest_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5'));
                let progressKraevedQuestSum_5_4 = progressKraevedQuest_5_4 + 1;
                let progressKraevedQuestSum_5 = progressKraevedQuestSum_5_4 + progressKraevedQuest_5;

                localStorage.setItem('progressKraevedQuest_5_4', JSON.stringify(progressKraevedQuestSum_5_4));
                localStorage.setItem('progressKraevedQuest_5', JSON.stringify(progressKraevedQuestSum_5));
                if (progressKraevedQuestSum_5_4 === 1) {
                    questionStar_5_4.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_5'))
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
                    questionKraevedCat_5_5();
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

function questionKraevedCat_5_5() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_5_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_1')),
        progressKraevedQuest_5_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
        progressKraevedQuest_5_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3')),
        progressKraevedQuest_5_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_4')),
        progressKraevedQuest_5_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_5_4') === null) {
        localStorage.setItem('progressKraevedQuest_5_4', JSON.stringify(progressKraevedQuest_5_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самара в лицах','В известном сериале советского времени «Вечный зов» снялся самарский актер', 'Владимир Борисов (роль Семен Савельев)', 'Иван Лапиков (роль Панкрат Григорьевич Назаров)', 'Николай Еременко (роль Иван Субботин)');

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
        if (progressKraevedQuest_5_1 === 1) {
            questionStar_5_1.className += 'fill';
        }
        if (progressKraevedQuest_5_2 === 1) {
            questionStar_5_2.className += 'fill';
        }
        if (progressKraevedQuest_5_3 === 1) {
            questionStar_5_3.className += 'fill';
        }
        if (progressKraevedQuest_5_4 === 1) {
            questionStar_5_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_5_5.length; i++) {
        if (answerVarRight_5_5[i] === answerVarRight_5_5[answerWrightNum]) {
            answerVarRight_5_5[i].addEventListener('click', () => {
                let progressKraevedQuest_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5'));
                let progressKraevedQuestSum_5_5 = progressKraevedQuest_5_5 + 1;
                let progressKraevedQuestSum_5 = progressKraevedQuestSum_5_5 + progressKraevedQuest_5;

                localStorage.setItem('progressKraevedQuest_5_5', JSON.stringify(progressKraevedQuestSum_5_5));
                localStorage.setItem('progressKraevedQuest_5', JSON.stringify(progressKraevedQuestSum_5));
                if (progressKraevedQuestSum_5_5 === 1) {
                    questionStar_5_5.className += 'fill';
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