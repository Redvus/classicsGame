/* Запускаем вопросы в категории Житель */
function citizenCategoryDev() {
    const choiceCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    choiceCatLoad.choiceCategory('Житель', 'citizen', 'Citizen', 'Самарская Лука', 'Самара в зеркале истории', 'Районы, кварталы...', 'Вот дом, который построил...', 'Самара в лицах', 'Создано в Самаре', 'Культурная столица', 'Под мягким светом лампы и шелестом страниц', 'Литературная Самара', 'Очарованные странники');

    const containerWrapper = document.querySelector('.container__wrapper'),
        introAboutBack = document.querySelector('.wrapper__citizen'),
        wrapperTopTitle = document.querySelector('.wrapper__top'),
        categorySubCitizen_1 = document.getElementById('categorySubCitizen_1'),
        categorySubCitizen_2 = document.getElementById('categorySubCitizen_2'),
        categorySubCitizen_3 = document.getElementById('categorySubCitizen_3'),
        categorySubCitizen_4 = document.getElementById('categorySubCitizen_4'),
        categorySubCitizen_5 = document.getElementById('categorySubCitizen_5'),
        categorySubCitizen_6 = document.getElementById('categorySubCitizen_6'),
        categorySubCitizen_7 = document.getElementById('categorySubCitizen_7'),
        categorySubCitizen_8 = document.getElementById('categorySubCitizen_8'),
        categorySubCitizen_9 = document.getElementById('categorySubCitizen_9'),
        categorySubCitizen_10 = document.getElementById('categorySubCitizen_10'),
        categorySubCitizenAll = [categorySubCitizen_1, categorySubCitizen_2, categorySubCitizen_3, categorySubCitizen_4, categorySubCitizen_5, categorySubCitizen_6, categorySubCitizen_7, categorySubCitizen_8, categorySubCitizen_9, categorySubCitizen_10]
    ;

    //Local Storage. Progress
    let progressCitizenQuest1 = JSON.parse(localStorage.getItem('progressCitizenQuest_1'));
    let progressCitizenQuest2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2'));
    let progressCitizenQuest3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3'));
    let progressCitizenQuest4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4'));
    let progressCitizenQuest5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5'));
    let progressCitizenQuest6 = JSON.parse(localStorage.getItem('progressCitizenQuest_6'));
    let progressCitizenQuest7 = JSON.parse(localStorage.getItem('progressCitizenQuest_7'));
    let progressCitizenQuest8 = JSON.parse(localStorage.getItem('progressCitizenQuest_8'));
    let progressCitizenQuest9 = JSON.parse(localStorage.getItem('progressCitizenQuest_9'));
    let progressCitizenQuest10 = JSON.parse(localStorage.getItem('progressCitizenQuest_10'));
    let progressCitizenQuestAll = progressCitizenQuest1 + progressCitizenQuest2 + progressCitizenQuest3 + progressCitizenQuest4 + progressCitizenQuest5 + progressCitizenQuest6 + progressCitizenQuest7 + progressCitizenQuest8 + progressCitizenQuest9 + progressCitizenQuest10;
    localStorage.setItem('progressCitizenAll', JSON.stringify(progressCitizenQuestAll));

    function citizenQuest_1() {
        if (localStorage.getItem('progressCitizenQuest_1_1') === null ||
            localStorage.getItem('progressCitizenQuest_1_2') === null ||
            localStorage.getItem('progressCitizenQuest_1_3') === null ||
            localStorage.getItem('progressCitizenQuest_1_4') === null ||
            localStorage.getItem('progressCitizenQuest_1_5') === null) {
            localStorage.setItem('progressCitizenQuest_1_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_1_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_1_3', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_1_4', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_1_5', JSON.stringify(0));
        }

        let progressCitizenQuest1_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_1')),
            progressCitizenQuest1_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_2')),
            progressCitizenQuest1_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_3')),
            progressCitizenQuest1_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_4')),
            progressCitizenQuest1_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_5'))
        ;

        const categoryElementStars_1 = document.getElementById('categoryElementStars_1'),
            categorySubQuest_2 = document.getElementById('categorySubCitizen_2')
        ;

        categoryElementStars_1.id = 'categoryElementStars_1';
        categoryElementStars_1.innerHTML = `
            <li id="categoryElementStars_1_1"></li>
            <li id="categoryElementStars_1_2"></li>
            <li id="categoryElementStars_1_3"></li>
            <li id="categoryElementStars_1_4"></li>
            <li id="categoryElementStars_1_5"></li>
        `;

        const categoryElementStars_1_1 = document.getElementById('categoryElementStars_1_1'),
            categoryElementStars_1_2 = document.getElementById('categoryElementStars_1_2'),
            categoryElementStars_1_3 = document.getElementById('categoryElementStars_1_3'),
            categoryElementStars_1_4 = document.getElementById('categoryElementStars_1_4'),
            categoryElementStars_1_5 = document.getElementById('categoryElementStars_1_5')
        ;

        if (progressCitizenQuest1_1 === 1) {
            categoryElementStars_1_1.className += 'fill';
        }

        if (progressCitizenQuest1_2 === 1) {
            categoryElementStars_1_2.className += 'fill';
        }

        if (progressCitizenQuest1_3 === 1) {
            categoryElementStars_1_3.className += 'fill';
        }

        if (progressCitizenQuest1_4 === 1) {
            categoryElementStars_1_4.className += 'fill';
        }

        if (progressCitizenQuest1_5 === 1) {
            categoryElementStars_1_5.className += 'fill';
        }

        if (progressCitizenQuest1 >= 1) {
            categorySubQuest_2.className = 'category__element category__element_2';
        }
    }
    citizenQuest_1();

    function citizenQuest_2() {
        if (localStorage.getItem('progressCitizenQuest_2_1') === null ||
            localStorage.getItem('progressCitizenQuest_2_2') === null ||
            localStorage.getItem('progressCitizenQuest_2_3') === null ||
            localStorage.getItem('progressCitizenQuest_2_4') === null ||
            localStorage.getItem('progressCitizenQuest_2_5') === null) {
            localStorage.setItem('progressCitizenQuest_2_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_2_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_2_3', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_2_4', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_2_5', JSON.stringify(0));
        }

        let progressCitizenQuest2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
            progressCitizenQuest2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
            progressCitizenQuest2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
            progressCitizenQuest2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
            progressCitizenQuest2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5'))
        ;

        const categoryElementStars_2 = document.getElementById('categoryElementStars_2'),
            categorySubQuest_3 = document.getElementById('categorySubCitizen_3')
        ;

        categoryElementStars_2.id = 'categoryElementStars_2';
        categoryElementStars_2.innerHTML = `
            <li id="categoryElementStars_2_1"></li>
            <li id="categoryElementStars_2_2"></li>
            <li id="categoryElementStars_2_3"></li>
            <li id="categoryElementStars_2_4"></li>
            <li id="categoryElementStars_2_5"></li>
        `;

        const categoryElementStars_2_1 = document.getElementById('categoryElementStars_2_1'),
            categoryElementStars_2_2 = document.getElementById('categoryElementStars_2_2'),
            categoryElementStars_2_3 = document.getElementById('categoryElementStars_2_3'),
            categoryElementStars_2_4 = document.getElementById('categoryElementStars_2_4'),
            categoryElementStars_2_5 = document.getElementById('categoryElementStars_2_5')
        ;

        if (progressCitizenQuest2_1 === 1) {
            categoryElementStars_2_1.className += 'fill';
        }

        if (progressCitizenQuest2_2 === 1) {
            categoryElementStars_2_2.className += 'fill';
        }

        if (progressCitizenQuest2_3 === 1) {
            categoryElementStars_2_3.className += 'fill';
        }

        if (progressCitizenQuest2_4 === 1) {
            categoryElementStars_2_4.className += 'fill';
        }

        if (progressCitizenQuest2_5 === 1) {
            categoryElementStars_2_5.className += 'fill';
        }

        if (progressCitizenQuest2 >= 1) {
            categorySubQuest_3.className = 'category__element category__element_3';
        }
    }
    citizenQuest_2();

    function citizenQuest_3() {
        if (localStorage.getItem('progressCitizenQuest_3_1') === null ||
            localStorage.getItem('progressCitizenQuest_3_2') === null ||
            localStorage.getItem('progressCitizenQuest_3_3') === null ||
            localStorage.getItem('progressCitizenQuest_3_4') === null ||
            localStorage.getItem('progressCitizenQuest_3_5') === null) {
            localStorage.setItem('progressCitizenQuest_3_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_3_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_3_3', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_3_4', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_3_5', JSON.stringify(0));
        }

        let progressCitizenQuest3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
            progressCitizenQuest3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
            progressCitizenQuest3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
            progressCitizenQuest3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
            progressCitizenQuest3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5'))
        ;

        const categoryElementStars_3 = document.getElementById('categoryElementStars_3'),
            categorySubQuest_4 = document.getElementById('categorySubCitizen_4')
        ;

        categoryElementStars_3.id = 'categoryElementStars_3';
        categoryElementStars_3.innerHTML = `
            <li id="categoryElementStars_3_1"></li>
            <li id="categoryElementStars_3_2"></li>
            <li id="categoryElementStars_3_3"></li>
            <li id="categoryElementStars_3_4"></li>
            <li id="categoryElementStars_3_5"></li>
        `;

        const categoryElementStars_3_1 = document.getElementById('categoryElementStars_3_1'),
            categoryElementStars_3_2 = document.getElementById('categoryElementStars_3_2'),
            categoryElementStars_3_3 = document.getElementById('categoryElementStars_3_3'),
            categoryElementStars_3_4 = document.getElementById('categoryElementStars_3_4'),
            categoryElementStars_3_5 = document.getElementById('categoryElementStars_3_5')
        ;

        if (progressCitizenQuest3_1 === 1) {
            categoryElementStars_3_1.className += 'fill';
        }

        if (progressCitizenQuest3_2 === 1) {
            categoryElementStars_3_2.className += 'fill';
        }

        if (progressCitizenQuest3_3 === 1) {
            categoryElementStars_3_3.className += 'fill';
        }

        if (progressCitizenQuest3_4 === 1) {
            categoryElementStars_3_4.className += 'fill';
        }

        if (progressCitizenQuest3_5 === 1) {
            categoryElementStars_3_5.className += 'fill';
        }

        if (progressCitizenQuest3 >= 1) {
            categorySubQuest_4.className = 'category__element category__element_4';
        }
    }
    citizenQuest_3();

    function citizenQuest_4() {
        if (localStorage.getItem('progressCitizenQuest_4_1') === null ||
            localStorage.getItem('progressCitizenQuest_4_2') === null ||
            localStorage.getItem('progressCitizenQuest_4_3') === null ||
            localStorage.getItem('progressCitizenQuest_4_4') === null ||
            localStorage.getItem('progressCitizenQuest_4_5') === null) {
            localStorage.setItem('progressCitizenQuest_4_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_4_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_4_3', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_4_4', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_4_5', JSON.stringify(0));
        }

        let progressCitizenQuest4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
            progressCitizenQuest4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
            progressCitizenQuest4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
            progressCitizenQuest4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
            progressCitizenQuest4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5'))
        ;

        const categoryElementStars_4 = document.getElementById('categoryElementStars_4'),
            categorySubQuest_5 = document.getElementById('categorySubCitizen_5')
        ;

        categoryElementStars_4.id = 'categoryElementStars_4';
        categoryElementStars_4.innerHTML = `
            <li id="categoryElementStars_4_1"></li>
            <li id="categoryElementStars_4_2"></li>
            <li id="categoryElementStars_4_3"></li>
            <li id="categoryElementStars_4_4"></li>
            <li id="categoryElementStars_4_5"></li>
        `;

        const categoryElementStars_4_1 = document.getElementById('categoryElementStars_4_1'),
            categoryElementStars_4_2 = document.getElementById('categoryElementStars_4_2'),
            categoryElementStars_4_3 = document.getElementById('categoryElementStars_4_3'),
            categoryElementStars_4_4 = document.getElementById('categoryElementStars_4_4'),
            categoryElementStars_4_5 = document.getElementById('categoryElementStars_4_5')
        ;

        if (progressCitizenQuest4_1 === 1) {
            categoryElementStars_4_1.className += 'fill';
        }

        if (progressCitizenQuest4_2 === 1) {
            categoryElementStars_4_2.className += 'fill';
        }

        if (progressCitizenQuest4_3 === 1) {
            categoryElementStars_4_3.className += 'fill';
        }

        if (progressCitizenQuest4_4 === 1) {
            categoryElementStars_4_4.className += 'fill';
        }

        if (progressCitizenQuest4_5 === 1) {
            categoryElementStars_4_5.className += 'fill';
        }

        if (progressCitizenQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    citizenQuest_4();

    function citizenQuest_5() {
        if (localStorage.getItem('progressCitizenQuest_5_1') === null ||
            localStorage.getItem('progressCitizenQuest_5_2') === null ||
            localStorage.getItem('progressCitizenQuest_5_3') === null ||
            localStorage.getItem('progressCitizenQuest_5_4') === null ||
            localStorage.getItem('progressCitizenQuest_5_5') === null) {
            localStorage.setItem('progressCitizenQuest_5_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_5_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_5_3', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_5_4', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_5_5', JSON.stringify(0));
        }

        let progressCitizenQuest5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
            progressCitizenQuest5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
            progressCitizenQuest5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
            progressCitizenQuest5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
            progressCitizenQuest5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5'))
        ;

        const categoryElementStars_5 = document.getElementById('categoryElementStars_5'),
            categorySubQuest_6 = document.getElementById('categorySubCitizen_6')
        ;

        categoryElementStars_5.id = 'categoryElementStars_5';
        categoryElementStars_5.innerHTML = `
            <li id="categoryElementStars_5_1"></li>
            <li id="categoryElementStars_5_2"></li>
            <li id="categoryElementStars_5_3"></li>
            <li id="categoryElementStars_5_4"></li>
            <li id="categoryElementStars_5_5"></li>
        `;

        const categoryElementStars_5_1 = document.getElementById('categoryElementStars_5_1'),
            categoryElementStars_5_2 = document.getElementById('categoryElementStars_5_2'),
            categoryElementStars_5_3 = document.getElementById('categoryElementStars_5_3'),
            categoryElementStars_5_4 = document.getElementById('categoryElementStars_5_4'),
            categoryElementStars_5_5 = document.getElementById('categoryElementStars_5_5')
        ;

        if (progressCitizenQuest5_1 === 1) {
            categoryElementStars_5_1.className += 'fill';
        }

        if (progressCitizenQuest5_2 === 1) {
            categoryElementStars_5_2.className += 'fill';
        }

        if (progressCitizenQuest5_3 === 1) {
            categoryElementStars_5_3.className += 'fill';
        }

        if (progressCitizenQuest5_4 === 1) {
            categoryElementStars_5_4.className += 'fill';
        }

        if (progressCitizenQuest5_5 === 1) {
            categoryElementStars_5_5.className += 'fill';
        }

        if (progressCitizenQuest5 >= 1) {
            categorySubQuest_6.className = 'category__element category__element_6';
        }
    }
    citizenQuest_5();

    function citizenQuest_6() {
        if (localStorage.getItem('progressCitizenQuest_6_1') === null ||
            localStorage.getItem('progressCitizenQuest_6_2') === null ||
            localStorage.getItem('progressCitizenQuest_6_3') === null ||
            localStorage.getItem('progressCitizenQuest_6_4') === null ||
            localStorage.getItem('progressCitizenQuest_6_5') === null) {
            localStorage.setItem('progressCitizenQuest_6_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_6_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_6_3', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_6_4', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_6_5', JSON.stringify(0));
        }

        let progressCitizenQuest6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
            progressCitizenQuest6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
            progressCitizenQuest6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
            progressCitizenQuest6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
            progressCitizenQuest6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5'))
        ;

        const categoryElementStars_6 = document.getElementById('categoryElementStars_6'),
            categorySubQuest_7 = document.getElementById('categorySubCitizen_7')
        ;

        categoryElementStars_6.id = 'categoryElementStars_6';
        categoryElementStars_6.innerHTML = `
            <li id="categoryElementStars_6_1"></li>
            <li id="categoryElementStars_6_2"></li>
            <li id="categoryElementStars_6_3"></li>
            <li id="categoryElementStars_6_4"></li>
            <li id="categoryElementStars_6_5"></li>
        `;

        const categoryElementStars_6_1 = document.getElementById('categoryElementStars_6_1'),
            categoryElementStars_6_2 = document.getElementById('categoryElementStars_6_2'),
            categoryElementStars_6_3 = document.getElementById('categoryElementStars_6_3'),
            categoryElementStars_6_4 = document.getElementById('categoryElementStars_6_4'),
            categoryElementStars_6_5 = document.getElementById('categoryElementStars_6_5')
        ;

        if (progressCitizenQuest6_1 === 1) {
            categoryElementStars_6_1.className += 'fill';
        }

        if (progressCitizenQuest6_2 === 1) {
            categoryElementStars_6_2.className += 'fill';
        }

        if (progressCitizenQuest6_3 === 1) {
            categoryElementStars_6_3.className += 'fill';
        }

        if (progressCitizenQuest6_4 === 1) {
            categoryElementStars_6_4.className += 'fill';
        }

        if (progressCitizenQuest6_5 === 1) {
            categoryElementStars_6_5.className += 'fill';
        }

        if (progressCitizenQuest6 >= 1) {
            categorySubQuest_7.className = 'category__element category__element_7';
        }
    }
    citizenQuest_6();

    function citizenQuest_7() {
        if (localStorage.getItem('progressCitizenQuest_7_1') === null ||
            localStorage.getItem('progressCitizenQuest_7_2') === null ||
            localStorage.getItem('progressCitizenQuest_7_3') === null ||
            localStorage.getItem('progressCitizenQuest_7_4') === null ||
            localStorage.getItem('progressCitizenQuest_7_5') === null) {
            localStorage.setItem('progressCitizenQuest_7_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_7_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_7_3', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_7_4', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_7_5', JSON.stringify(0));
        }

        let progressCitizenQuest7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
            progressCitizenQuest7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
            progressCitizenQuest7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
            progressCitizenQuest7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
            progressCitizenQuest7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5'))
        ;

        const categoryElementStars_7 = document.getElementById('categoryElementStars_7'),
            categorySubQuest_8 = document.getElementById('categorySubCitizen_8')
        ;

        categoryElementStars_7.id = 'categoryElementStars_7';
        categoryElementStars_7.innerHTML = `
            <li id="categoryElementStars_7_1"></li>
            <li id="categoryElementStars_7_2"></li>
            <li id="categoryElementStars_7_3"></li>
            <li id="categoryElementStars_7_4"></li>
            <li id="categoryElementStars_7_5"></li>
        `;

        const categoryElementStars_7_1 = document.getElementById('categoryElementStars_7_1'),
            categoryElementStars_7_2 = document.getElementById('categoryElementStars_7_2'),
            categoryElementStars_7_3 = document.getElementById('categoryElementStars_7_3'),
            categoryElementStars_7_4 = document.getElementById('categoryElementStars_7_4'),
            categoryElementStars_7_5 = document.getElementById('categoryElementStars_7_5')
        ;

        if (progressCitizenQuest7_1 === 1) {
            categoryElementStars_7_1.className += 'fill';
        }

        if (progressCitizenQuest7_2 === 1) {
            categoryElementStars_7_2.className += 'fill';
        }

        if (progressCitizenQuest7_3 === 1) {
            categoryElementStars_7_3.className += 'fill';
        }

        if (progressCitizenQuest7_4 === 1) {
            categoryElementStars_7_4.className += 'fill';
        }

        if (progressCitizenQuest7_5 === 1) {
            categoryElementStars_7_5.className += 'fill';
        }

        if (progressCitizenQuest7 >= 1) {
            categorySubQuest_8.className = 'category__element category__element_8';
        }
    }
    citizenQuest_7();

    function citizenQuest_8() {
        if (localStorage.getItem('progressCitizenQuest_8_1') === null ||
            localStorage.getItem('progressCitizenQuest_8_2') === null ||
            localStorage.getItem('progressCitizenQuest_8_3') === null ||
            localStorage.getItem('progressCitizenQuest_8_4') === null ||
            localStorage.getItem('progressCitizenQuest_8_5') === null) {
            localStorage.setItem('progressCitizenQuest_8_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_8_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_8_3', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_8_4', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_8_5', JSON.stringify(0));
        }

        let progressCitizenQuest8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
            progressCitizenQuest8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
            progressCitizenQuest8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
            progressCitizenQuest8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
            progressCitizenQuest8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5'))
        ;

        const categoryElementStars_8 = document.getElementById('categoryElementStars_8'),
            categorySubQuest_9 = document.getElementById('categorySubCitizen_9')
        ;

        categoryElementStars_8.id = 'categoryElementStars_8';
        categoryElementStars_8.innerHTML = `
            <li id="categoryElementStars_8_1"></li>
            <li id="categoryElementStars_8_2"></li>
            <li id="categoryElementStars_8_3"></li>
            <li id="categoryElementStars_8_4"></li>
            <li id="categoryElementStars_8_5"></li>
        `;

        const categoryElementStars_8_1 = document.getElementById('categoryElementStars_8_1'),
            categoryElementStars_8_2 = document.getElementById('categoryElementStars_8_2'),
            categoryElementStars_8_3 = document.getElementById('categoryElementStars_8_3'),
            categoryElementStars_8_4 = document.getElementById('categoryElementStars_8_4'),
            categoryElementStars_8_5 = document.getElementById('categoryElementStars_8_5')
        ;

        if (progressCitizenQuest8_1 === 1) {
            categoryElementStars_8_1.className += 'fill';
        }

        if (progressCitizenQuest8_2 === 1) {
            categoryElementStars_8_2.className += 'fill';
        }

        if (progressCitizenQuest8_3 === 1) {
            categoryElementStars_8_3.className += 'fill';
        }

        if (progressCitizenQuest8_4 === 1) {
            categoryElementStars_8_4.className += 'fill';
        }

        if (progressCitizenQuest8_5 === 1) {
            categoryElementStars_8_5.className += 'fill';
        }

        if (progressCitizenQuest8 >= 1) {
            categorySubQuest_9.className = 'category__element category__element_9';
        }
    }
    citizenQuest_8();

    function citizenQuest_9() {
        if (localStorage.getItem('progressCitizenQuest_9_1') === null ||
            localStorage.getItem('progressCitizenQuest_9_2') === null ||
            localStorage.getItem('progressCitizenQuest_9_3') === null ||
            localStorage.getItem('progressCitizenQuest_9_4') === null ||
            localStorage.getItem('progressCitizenQuest_9_5') === null) {
            localStorage.setItem('progressCitizenQuest_9_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_9_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_9_3', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_9_4', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_9_5', JSON.stringify(0));
        }

        let progressCitizenQuest9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
            progressCitizenQuest9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
            progressCitizenQuest9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
            progressCitizenQuest9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
            progressCitizenQuest9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5'))
        ;

        const categoryElementStars_9 = document.getElementById('categoryElementStars_9'),
            categorySubQuest_10 = document.getElementById('categorySubCitizen_10')
        ;

        categoryElementStars_9.id = 'categoryElementStars_9';
        categoryElementStars_9.innerHTML = `
            <li id="categoryElementStars_9_1"></li>
            <li id="categoryElementStars_9_2"></li>
            <li id="categoryElementStars_9_3"></li>
            <li id="categoryElementStars_9_4"></li>
            <li id="categoryElementStars_9_5"></li>
        `;

        const categoryElementStars_9_1 = document.getElementById('categoryElementStars_9_1'),
            categoryElementStars_9_2 = document.getElementById('categoryElementStars_9_2'),
            categoryElementStars_9_3 = document.getElementById('categoryElementStars_9_3'),
            categoryElementStars_9_4 = document.getElementById('categoryElementStars_9_4'),
            categoryElementStars_9_5 = document.getElementById('categoryElementStars_9_5')
        ;

        if (progressCitizenQuest9_1 === 1) {
            categoryElementStars_9_1.className += 'fill';
        }

        if (progressCitizenQuest9_2 === 1) {
            categoryElementStars_9_2.className += 'fill';
        }

        if (progressCitizenQuest9_3 === 1) {
            categoryElementStars_9_3.className += 'fill';
        }

        if (progressCitizenQuest9_4 === 1) {
            categoryElementStars_9_4.className += 'fill';
        }

        if (progressCitizenQuest9_5 === 1) {
            categoryElementStars_9_5.className += 'fill';
        }

        if (progressCitizenQuest9 >= 1) {
            categorySubQuest_10.className = 'category__element category__element_10';
        }
    }
    citizenQuest_9();

    function citizenQuest_10() {
        if (localStorage.getItem('progressCitizenQuest_10_1') === null ||
            localStorage.getItem('progressCitizenQuest_10_2') === null ||
            localStorage.getItem('progressCitizenQuest_10_3') === null ||
            localStorage.getItem('progressCitizenQuest_10_4') === null ||
            localStorage.getItem('progressCitizenQuest_10_5') === null) {
            localStorage.setItem('progressCitizenQuest_10_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_10_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_10_3', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_10_4', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_10_5', JSON.stringify(0));
        }

        let progressCitizenQuest10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
            progressCitizenQuest10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
            progressCitizenQuest10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
            progressCitizenQuest10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
            progressCitizenQuest10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5'))
        ;

        const categoryElementStars_10 = document.getElementById('categoryElementStars_10'),
            categorySubQuest_10 = document.getElementById('categorySubCitizen_10')
        ;

        categoryElementStars_10.id = 'categoryElementStars_10';
        categoryElementStars_10.innerHTML = `
            <li id="categoryElementStars_10_1"></li>
            <li id="categoryElementStars_10_2"></li>
            <li id="categoryElementStars_10_3"></li>
            <li id="categoryElementStars_10_4"></li>
            <li id="categoryElementStars_10_5"></li>
        `;

        const categoryElementStars_10_1 = document.getElementById('categoryElementStars_10_1'),
            categoryElementStars_10_2 = document.getElementById('categoryElementStars_10_2'),
            categoryElementStars_10_3 = document.getElementById('categoryElementStars_10_3'),
            categoryElementStars_10_4 = document.getElementById('categoryElementStars_10_4'),
            categoryElementStars_10_5 = document.getElementById('categoryElementStars_10_5')
        ;

        if (progressCitizenQuest10_1 === 1) {
            categoryElementStars_10_1.className += 'fill';
        }

        if (progressCitizenQuest10_2 === 1) {
            categoryElementStars_10_2.className += 'fill';
        }

        if (progressCitizenQuest10_3 === 1) {
            categoryElementStars_10_3.className += 'fill';
        }

        if (progressCitizenQuest10_4 === 1) {
            categoryElementStars_10_4.className += 'fill';
        }

        if (progressCitizenQuest10_5 === 1) {
            categoryElementStars_10_5.className += 'fill';
        }
    }
    citizenQuest_10();

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline( {
            autoAlpha: 0,
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                wrapper.removeChild(introAboutBack);
                wrapper.removeChild(wrapperTopTitle);
                wrapper.className = 'wrapper';
                categoryDev();
            }
        });
        tl
            .to(wrapperTopTitle, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(containerWrapper, {
                duration: 0.4,
                delay: '-0.2',
                autoAlpha: 0
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                delay: '-0.1',
                scale: 0.98
            })
        ;
    });

    for (let i = 0; i < categorySubCitizenAll.length; i++) {
        if (categorySubCitizenAll[i].className !== 'category__element--hidden') {
            categorySubCitizenAll[i].addEventListener('click', () => {
                if (categorySubCitizenAll[i].className !== 'category__element--hidden') {
                    soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_subCategoryQuest.ogg');
                }
            });
        }
    }

    categorySubCitizen_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadCitizenReady_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubCitizen_2.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadCitizenReady_2();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubCitizen_3.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadCitizenReady_3();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubCitizen_4.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadCitizenReady_4();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubCitizen_5.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadCitizenReady_5();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubCitizen_6.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadCitizenReady_6();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubCitizen_7.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadCitizenReady_7();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubCitizen_8.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadCitizenReady_8();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubCitizen_9.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadCitizenReady_9();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubCitizen_10.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadCitizenReady_10();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    let progressCitizenQuestSum = JSON.parse(localStorage.getItem('progressCitizenAll'));
    if (progressCitizenQuestSum === 50) {
        soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryAllRight.ogg');
    }
}