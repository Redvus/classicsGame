
if (localStorage.getItem('progressKraevedQuest_6') === null) {
    localStorage.setItem('progressKraevedQuest_6', JSON.stringify(0));
}

// Kraeved. Quest 6
function questionKraevedCat_6_1() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressKraevedQuest_6_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_1')),
        progressKraevedQuest_6_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
        progressKraevedQuest_6_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3')),
        progressKraevedQuest_6_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_4')),
        progressKraevedQuest_6_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_6_1') === null) {
        localStorage.setItem('progressKraevedQuest_6_1', JSON.stringify(progressKraevedQuest_6_1));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Создано в Самаре', 'В 2017 году при реставрации памятника Чапаеву был использован 3D – принтер. Что именно было отреставрировано с применением новой технологии?', 'Фигуры воинов', 'Лошади', 'Оружие');

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
        if (progressKraevedQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressKraevedQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressKraevedQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
        if (progressKraevedQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_6_1.length; i++) {
        if (answerVarRight_6_1[i] === answerVarRight_6_1[answerWrightNum]) {
            answerVarRight_6_1[i].addEventListener('click', () => {
                let progressKraevedQuest_6 = JSON.parse(localStorage.getItem('progressKraevedQuest_6'));
                let progressKraevedQuestSum_6_1 = progressKraevedQuest_6_1 + 1;
                let progressKraevedQuestSum_6 = progressKraevedQuestSum_6_1 + progressKraevedQuest_6;

                localStorage.setItem('progressKraevedQuest_6_1', JSON.stringify(progressKraevedQuestSum_6_1));
                localStorage.setItem('progressKraevedQuest_6', JSON.stringify(progressKraevedQuestSum_6));
                if (progressKraevedQuestSum_6_1 === 1) {
                    questionStar_6_1.className += 'fill';
                }
            });
            console.log(answerVarRight_6_1[answerWrightNum]);
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_5'))
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
                    questionKraevedCat_6_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionKraevedCat_6_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_6_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_6_5();
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

function questionKraevedCat_6_2() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_6_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_1')),
        progressKraevedQuest_6_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
        progressKraevedQuest_6_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3')),
        progressKraevedQuest_6_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_4')),
        progressKraevedQuest_6_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_6_2') === null) {
        localStorage.setItem('progressKraevedQuest_6_2', JSON.stringify(progressKraevedQuest_6_2));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Создано в Самаре', 'Космические семена этих растений самарские ученые вырастили на Земле', 'Гвоздики и льна', 'Хлопка и пшеницы', 'Сои и ржи');

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
        if (progressKraevedQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressKraevedQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressKraevedQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
        if (progressKraevedQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_6_2.length; i++) {
        if (answerVarRight_6_2[i] === answerVarRight_6_2[answerWrightNum]) {
            answerVarRight_6_2[i].addEventListener('click', () => {
                let progressKraevedQuest_6 = JSON.parse(localStorage.getItem('progressKraevedQuest_6'));
                let progressKraevedQuestSum_6_2 = progressKraevedQuest_6_2 + 1;
                let progressKraevedQuestSum_6 = progressKraevedQuestSum_6_2 + progressKraevedQuest_6;

                localStorage.setItem('progressKraevedQuest_6_2', JSON.stringify(progressKraevedQuestSum_6_2));
                localStorage.setItem('progressKraevedQuest_6', JSON.stringify(progressKraevedQuestSum_6));
                if (progressKraevedQuestSum_6_2 === 1) {
                    questionStar_6_2.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_5'))
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
                    questionKraevedCat_6_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_6_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_6_5();
                }
            }
        });
        // if (progressKraevedQuest_6_2 === 0 &&
        //     progressKraevedQuest_6_3 === 1 &&
        //     progressKraevedQuest_6_4 === 1 &&
        //     progressKraevedQuest_6_5 === 1) {
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

function questionKraevedCat_6_3() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_6_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_1')),
        progressKraevedQuest_6_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
        progressKraevedQuest_6_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3')),
        progressKraevedQuest_6_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_4')),
        progressKraevedQuest_6_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_6_3') === null) {
        localStorage.setItem('progressKraevedQuest_6_3', JSON.stringify(progressKraevedQuest_6_3));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Создано в Самаре','Новую высокотехнологичную детскую игрушку изобрела магистрантка СамГТУ Александра Зябочкина', '«Живой конструктор»', '«Робот – няня»', '«Домашний питомец»');

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
        if (progressKraevedQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressKraevedQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressKraevedQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
        if (progressKraevedQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_6_3.length; i++) {
        if (answerVarRight_6_3[i] === answerVarRight_6_3[answerWrightNum]) {
            answerVarRight_6_3[i].addEventListener('click', () => {
                let progressKraevedQuest_6 = JSON.parse(localStorage.getItem('progressKraevedQuest_6'));
                let progressKraevedQuestSum_6_3 = progressKraevedQuest_6_3 + 1;
                let progressKraevedQuestSum_6 = progressKraevedQuestSum_6_3 + progressKraevedQuest_6;

                localStorage.setItem('progressKraevedQuest_6_3', JSON.stringify(progressKraevedQuestSum_6_3));
                localStorage.setItem('progressKraevedQuest_6', JSON.stringify(progressKraevedQuestSum_6));
                if (progressKraevedQuestSum_6_3 === 1) {
                    questionStar_6_3.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, '«Живой конструктор» – садовый мини-участок с игрушечным домиком. Одновременно девайс выполняет функции увлажнителя воздуха, ночника, фоторамки и медиапроигрывателя');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_5'))
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
                    questionKraevedCat_6_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_6_5();
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

function questionKraevedCat_6_4() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_6_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_1')),
        progressKraevedQuest_6_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
        progressKraevedQuest_6_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3')),
        progressKraevedQuest_6_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_4')),
        progressKraevedQuest_6_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_6_4') === null) {
        localStorage.setItem('progressKraevedQuest_6_4', JSON.stringify(progressKraevedQuest_6_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Создано в Самаре','Сотрудники Самарского государственного технического университета разработали...', 'съедобную упаковку', 'съедобную посуду', 'съедобные предметы мебели');

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
        if (progressKraevedQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressKraevedQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressKraevedQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressKraevedQuest_6_5 === 1) {
            questionStar_6_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_6_4.length; i++) {
        if (answerVarRight_6_4[i] === answerVarRight_6_4[answerWrightNum]) {
            answerVarRight_6_4[i].addEventListener('click', () => {
                let progressKraevedQuest_6 = JSON.parse(localStorage.getItem('progressKraevedQuest_6'));
                let progressKraevedQuestSum_6_4 = progressKraevedQuest_6_4 + 1;
                let progressKraevedQuestSum_6 = progressKraevedQuestSum_6_4 + progressKraevedQuest_6;

                localStorage.setItem('progressKraevedQuest_6_4', JSON.stringify(progressKraevedQuestSum_6_4));
                localStorage.setItem('progressKraevedQuest_6', JSON.stringify(progressKraevedQuestSum_6));
                if (progressKraevedQuestSum_6_4 === 1) {
                    questionStar_6_4.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Съедобная пленка с различными вкусовыми вариантами: овощное или фруктовое пюре, шалфей, эвкалипт, душица');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_5'))
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
                    questionKraevedCat_6_5();
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

function questionKraevedCat_6_5() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_6_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_1')),
        progressKraevedQuest_6_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
        progressKraevedQuest_6_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3')),
        progressKraevedQuest_6_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_4')),
        progressKraevedQuest_6_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_6_4') === null) {
        localStorage.setItem('progressKraevedQuest_6_4', JSON.stringify(progressKraevedQuest_6_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Создано в Самаре','Этот музыкальный инструмент родом из Самары', 'Гитара', 'Баян', 'Керамическая свистулька');

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
        if (progressKraevedQuest_6_1 === 1) {
            questionStar_6_1.className += 'fill';
        }
        if (progressKraevedQuest_6_2 === 1) {
            questionStar_6_2.className += 'fill';
        }
        if (progressKraevedQuest_6_3 === 1) {
            questionStar_6_3.className += 'fill';
        }
        if (progressKraevedQuest_6_4 === 1) {
            questionStar_6_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_6_5.length; i++) {
        if (answerVarRight_6_5[i] === answerVarRight_6_5[answerWrightNum]) {
            answerVarRight_6_5[i].addEventListener('click', () => {
                let progressKraevedQuest_6 = JSON.parse(localStorage.getItem('progressKraevedQuest_6'));
                let progressKraevedQuestSum_6_5 = progressKraevedQuest_6_5 + 1;
                let progressKraevedQuestSum_6 = progressKraevedQuestSum_6_5 + progressKraevedQuest_6;

                localStorage.setItem('progressKraevedQuest_6_5', JSON.stringify(progressKraevedQuestSum_6_5));
                localStorage.setItem('progressKraevedQuest_6', JSON.stringify(progressKraevedQuestSum_6));
                if (progressKraevedQuestSum_6_5 === 1) {
                    questionStar_6_5.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Первый русский баян, отличающийся от гармони звучанием, смастерил самарский мастер Павел Чулков, усовершенствовав «хромку» в 1897');

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