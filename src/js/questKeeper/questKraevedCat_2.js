
if (localStorage.getItem('progressKraevedQuest_2') === null) {
    localStorage.setItem('progressKraevedQuest_2', JSON.stringify(0));
}

// Kraeved. Quest 2
function questionKraevedCat_2_1() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_2_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_1')),
        progressKraevedQuest_2_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
        progressKraevedQuest_2_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3')),
        progressKraevedQuest_2_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_4')),
        progressKraevedQuest_2_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_2_1') === null) {
        localStorage.setItem('progressKraevedQuest_2_1', JSON.stringify(progressKraevedQuest_2_1));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самарская лука', 'Река Кондурча знаменита тем, что на ней...', 'Произошла битва Тамерлана и Тохтамыша', 'Проходила сьемка фильма «Тимур и его команда»', 'Расположен знаменитый детский лагерь Циолковский');

    let answerVar_2_1_1 = document.getElementById('answerVar_1'),
        answerVar_2_1_2 = document.getElementById('answerVar_2'),
        answerVar_2_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_1 = [answerVar_2_1_1, answerVar_2_1_2, answerVar_2_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_2_1"></li>
        <li id="questionStar_2_2"></li>
        <li id="questionStar_2_3"></li>
        <li id="questionStar_2_4"></li>
        <li id="questionStar_2_5"></li>
    `;

    const questionStar_2_1 = document.getElementById('questionStar_2_1'),
        questionStar_2_2 = document.getElementById('questionStar_2_2'),
        questionStar_2_3 = document.getElementById('questionStar_2_3'),
        questionStar_2_4 = document.getElementById('questionStar_2_4'),
        questionStar_2_5 = document.getElementById('questionStar_2_5')
    ;

    function starsView_1() {
        if (progressKraevedQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressKraevedQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressKraevedQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
        if (progressKraevedQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_1();

    for (let i = 0; i < answerVarRight_2_1.length; i++) {
        if (answerVarRight_2_1[i] === answerVarRight_2_1[answerWrightNum]) {
            answerVarRight_2_1[i].addEventListener('click', () => {
                let progressKraevedQuest_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2'));
                let progressKraevedQuestSum_2_1 = progressKraevedQuest_2_1 + 1;
                let progressKraevedQuestSum_2 = progressKraevedQuestSum_2_1 + progressKraevedQuest_2;

                localStorage.setItem('progressKraevedQuest_2_1', JSON.stringify(progressKraevedQuestSum_2_1));
                localStorage.setItem('progressKraevedQuest_2', JSON.stringify(progressKraevedQuestSum_2));
                if (progressKraevedQuestSum_2_1 === 1) {
                    questionStar_2_1.className += 'fill';
                }
            });
            console.log(answerVarRight_2_1[answerWrightNum]);
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Крупное сражение, состоявшееся 18 июня 1391 года между войсками Тимура и золотоордынской армией хана Тохтамыша на берегу реки Кондурча. Сражение завершилось полным разгромом Тохтамыша и его бегством за Волгу, а затем в Литву');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_5'))
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
                    questionKraevedCat_2_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionKraevedCat_2_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_2_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_2_5();
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

function questionKraevedCat_2_2() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_2_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_1')),
        progressKraevedQuest_2_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
        progressKraevedQuest_2_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3')),
        progressKraevedQuest_2_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_4')),
        progressKraevedQuest_2_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_2_2') === null) {
        localStorage.setItem('progressKraevedQuest_2_2', JSON.stringify(progressKraevedQuest_2_2));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самарская лука', 'Этот император посещал Самару', 'Петр I', 'Павел I', 'Михаил II');

    let answerVar_2_2_1 = document.getElementById('answerVar_1'),
        answerVar_2_2_2 = document.getElementById('answerVar_2'),
        answerVar_2_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_2 = [answerVar_2_2_1, answerVar_2_2_2, answerVar_2_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_2_1"></li>
        <li id="questionStar_2_2"></li>
        <li id="questionStar_2_3"></li>
        <li id="questionStar_2_4"></li>
        <li id="questionStar_2_5"></li>
    `;

    const questionStar_2_1 = document.getElementById('questionStar_2_1'),
        questionStar_2_2 = document.getElementById('questionStar_2_2'),
        questionStar_2_3 = document.getElementById('questionStar_2_3'),
        questionStar_2_4 = document.getElementById('questionStar_2_4'),
        questionStar_2_5 = document.getElementById('questionStar_2_5')
    ;

    function starsView_2() {
        if (progressKraevedQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressKraevedQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressKraevedQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
        if (progressKraevedQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_2();

    for (let i = 0; i < answerVarRight_2_2.length; i++) {
        if (answerVarRight_2_2[i] === answerVarRight_2_2[answerWrightNum]) {
            answerVarRight_2_2[i].addEventListener('click', () => {
                let progressKraevedQuest_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2'));
                let progressKraevedQuestSum_2_2 = progressKraevedQuest_2_2 + 1;
                let progressKraevedQuestSum_2 = progressKraevedQuestSum_2_2 + progressKraevedQuest_2;

                localStorage.setItem('progressKraevedQuest_2_2', JSON.stringify(progressKraevedQuestSum_2_2));
                localStorage.setItem('progressKraevedQuest_2', JSON.stringify(progressKraevedQuestSum_2));
                if (progressKraevedQuestSum_2_2 === 1) {
                    questionStar_2_2.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_5'))
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
                    questionKraevedCat_2_3();
                } else if (questValue_1_3 === 1 && questValue_1_4 === 0) {
                    questionKraevedCat_2_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_2_5();
                }
            }
        });
        // if (progressKraevedQuest_2_2 === 0 &&
        //     progressKraevedQuest_2_3 === 1 &&
        //     progressKraevedQuest_2_4 === 1 &&
        //     progressKraevedQuest_2_5 === 1) {
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

function questionKraevedCat_2_3() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_2_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_1')),
        progressKraevedQuest_2_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
        progressKraevedQuest_2_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3')),
        progressKraevedQuest_2_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_4')),
        progressKraevedQuest_2_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_2_3') === null) {
        localStorage.setItem('progressKraevedQuest_2_3', JSON.stringify(progressKraevedQuest_2_3));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самарская лука','Самара – Куйбышев – Самара', '1586 – 1917 - 1980', '1586 – 1935 - 1991', '1586 – 1940 – 2000');

    let answerVar_2_3_1 = document.getElementById('answerVar_1'),
        answerVar_2_3_2 = document.getElementById('answerVar_2'),
        answerVar_2_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_3 = [answerVar_2_3_1, answerVar_2_3_2, answerVar_2_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_2_1"></li>
        <li id="questionStar_2_2"></li>
        <li id="questionStar_2_3"></li>
        <li id="questionStar_2_4"></li>
        <li id="questionStar_2_5"></li>
    `;

    const questionStar_2_1 = document.getElementById('questionStar_2_1'),
        questionStar_2_2 = document.getElementById('questionStar_2_2'),
        questionStar_2_3 = document.getElementById('questionStar_2_3'),
        questionStar_2_4 = document.getElementById('questionStar_2_4'),
        questionStar_2_5 = document.getElementById('questionStar_2_5')
    ;

    function starsView_3() {
        if (progressKraevedQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressKraevedQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressKraevedQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
        if (progressKraevedQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_3();

    for (let i = 0; i < answerVarRight_2_3.length; i++) {
        if (answerVarRight_2_3[i] === answerVarRight_2_3[answerWrightNum]) {
            answerVarRight_2_3[i].addEventListener('click', () => {
                let progressKraevedQuest_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2'));
                let progressKraevedQuestSum_2_3 = progressKraevedQuest_2_3 + 1;
                let progressKraevedQuestSum_2 = progressKraevedQuestSum_2_3 + progressKraevedQuest_2;

                localStorage.setItem('progressKraevedQuest_2_3', JSON.stringify(progressKraevedQuestSum_2_3));
                localStorage.setItem('progressKraevedQuest_2', JSON.stringify(progressKraevedQuestSum_2));
                if (progressKraevedQuestSum_2_3 === 1) {
                    questionStar_2_3.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_5'))
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
                    questionKraevedCat_2_4();
                } else if (questValue_1_4 === 1 && questValue_1_5 === 0) {
                    questionKraevedCat_2_5();
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

function questionKraevedCat_2_4() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressKraevedQuest_2_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_1')),
        progressKraevedQuest_2_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
        progressKraevedQuest_2_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3')),
        progressKraevedQuest_2_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_4')),
        progressKraevedQuest_2_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_2_4') === null) {
        localStorage.setItem('progressKraevedQuest_2_4', JSON.stringify(progressKraevedQuest_2_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самарская лука','Самара два раза становилась временной столицей России, в годы Великой отечественной войны и в ... году.', '1918', '1990', '1668');

    let answerVar_2_4_1 = document.getElementById('answerVar_1'),
        answerVar_2_4_2 = document.getElementById('answerVar_2'),
        answerVar_2_4_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_4 = [answerVar_2_4_1, answerVar_2_4_2, answerVar_2_4_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_2_1"></li>
        <li id="questionStar_2_2"></li>
        <li id="questionStar_2_3"></li>
        <li id="questionStar_2_4"></li>
        <li id="questionStar_2_5"></li>
    `;

    const questionStar_2_1 = document.getElementById('questionStar_2_1'),
        questionStar_2_2 = document.getElementById('questionStar_2_2'),
        questionStar_2_3 = document.getElementById('questionStar_2_3'),
        questionStar_2_4 = document.getElementById('questionStar_2_4'),
        questionStar_2_5 = document.getElementById('questionStar_2_5')
    ;

    function starsView_4() {
        if (progressKraevedQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressKraevedQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressKraevedQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressKraevedQuest_2_5 === 1) {
            questionStar_2_5.className += 'fill';
        }
    }
    starsView_4();

    for (let i = 0; i < answerVarRight_2_4.length; i++) {
        if (answerVarRight_2_4[i] === answerVarRight_2_4[answerWrightNum]) {
            answerVarRight_2_4[i].addEventListener('click', () => {
                let progressKraevedQuest_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2'));
                let progressKraevedQuestSum_2_4 = progressKraevedQuest_2_4 + 1;
                let progressKraevedQuestSum_2 = progressKraevedQuestSum_2_4 + progressKraevedQuest_2;

                localStorage.setItem('progressKraevedQuest_2_4', JSON.stringify(progressKraevedQuestSum_2_4));
                localStorage.setItem('progressKraevedQuest_2', JSON.stringify(progressKraevedQuestSum_2));
                if (progressKraevedQuestSum_2_4 === 1) {
                    questionStar_2_4.className += 'fill';
                }
            });
        }
    }

    questKraevedCatLoad.answerBlock(answerWrightNum, 'В июне 1918 года советская власть в Самаре была свергнута соединенными усилиями городских повстанцев и Чехословацкого корпуса. Образован из Комитет членов Учредительного собрания (КОМУЧ) из нескольких губерний, занятых чехами, и Самара стала ее столицей');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_1')),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3')),
        questValue_1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_4')),
        questValue_1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_5'))
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
                    questionKraevedCat_2_5();
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

function questionKraevedCat_2_5() {
    let questKraevedCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressKraevedQuest_2_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_1')),
        progressKraevedQuest_2_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
        progressKraevedQuest_2_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3')),
        progressKraevedQuest_2_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_4')),
        progressKraevedQuest_2_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_5'))
    ;

    if (localStorage.getItem('progressKraevedQuest_2_4') === null) {
        localStorage.setItem('progressKraevedQuest_2_4', JSON.stringify(progressKraevedQuest_2_4));
    }

    questKraevedCatLoad.questionBlock('Краевед', 'Самарская лука','В марте 1994 года состоялись первые выборы во вновь созданную городскую думу Самары. Всеобщим голосованием был избран первый глава города', 'Дмитрий Игоревич Азаров', 'Олег Николаевич Сысуев', 'Елена Владимировна Лапушкина');

    let answerVar_2_5_1 = document.getElementById('answerVar_1'),
        answerVar_2_5_2 = document.getElementById('answerVar_2'),
        answerVar_2_5_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_5 = [answerVar_2_5_1, answerVar_2_5_2, answerVar_2_5_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);
    questionStars.innerHTML = `
        <li id="questionStar_2_1"></li>
        <li id="questionStar_2_2"></li>
        <li id="questionStar_2_3"></li>
        <li id="questionStar_2_4"></li>
        <li id="questionStar_2_5"></li>
    `;

    const questionStar_2_1 = document.getElementById('questionStar_2_1'),
        questionStar_2_2 = document.getElementById('questionStar_2_2'),
        questionStar_2_3 = document.getElementById('questionStar_2_3'),
        questionStar_2_4 = document.getElementById('questionStar_2_4'),
        questionStar_2_5 = document.getElementById('questionStar_2_5')
    ;

    function starsView_5() {
        if (progressKraevedQuest_2_1 === 1) {
            questionStar_2_1.className += 'fill';
        }
        if (progressKraevedQuest_2_2 === 1) {
            questionStar_2_2.className += 'fill';
        }
        if (progressKraevedQuest_2_3 === 1) {
            questionStar_2_3.className += 'fill';
        }
        if (progressKraevedQuest_2_4 === 1) {
            questionStar_2_4.className += 'fill';
        }
    }
    starsView_5();

    for (let i = 0; i < answerVarRight_2_5.length; i++) {
        if (answerVarRight_2_5[i] === answerVarRight_2_5[answerWrightNum]) {
            answerVarRight_2_5[i].addEventListener('click', () => {
                let progressKraevedQuest_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2'));
                let progressKraevedQuestSum_2_5 = progressKraevedQuest_2_5 + 1;
                let progressKraevedQuestSum_2 = progressKraevedQuestSum_2_5 + progressKraevedQuest_2;

                localStorage.setItem('progressKraevedQuest_2_5', JSON.stringify(progressKraevedQuestSum_2_5));
                localStorage.setItem('progressKraevedQuest_2', JSON.stringify(progressKraevedQuestSum_2));
                if (progressKraevedQuestSum_2_5 === 1) {
                    questionStar_2_5.className += 'fill';
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