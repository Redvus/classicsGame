/* Запускаем вопросы в квтегории Краевед */

function kraevedCategoryDev() {
    const kraevedCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    kraevedCatLoad.choiceCategory('Краевед', 'kraeved', 'Kraeved', 'Самарская Лука', 'Самара в зеркале истории', 'Районы, кварталы...', 'Вот дом, который построил...', 'Самара в лицах', 'Создано в Самаре', 'Культурная столица', 'Под мягким светом лампы и шелестом страниц', 'Литературная Самара', 'Очарованные странники');

    const containerWrapper = document.querySelector('.container__wrapper'),
        introAboutBack = document.querySelector('.wrapper__kraeved'),
        wrapperTopTitle = document.querySelector('.wrapper__top'),
        categorySubKraeved_1 = document.getElementById('categorySubKraeved_1'),
        categorySubKraeved_2 = document.getElementById('categorySubKraeved_2'),
        categorySubKraeved_3 = document.getElementById('categorySubKraeved_3'),
        categorySubKraeved_4 = document.getElementById('categorySubKraeved_4'),
        categorySubKraeved_5 = document.getElementById('categorySubKraeved_5'),
        categorySubKraeved_6 = document.getElementById('categorySubKraeved_6'),
        categorySubKraeved_7 = document.getElementById('categorySubKraeved_7'),
        categorySubKraeved_8 = document.getElementById('categorySubKraeved_8'),
        categorySubKraeved_9 = document.getElementById('categorySubKraeved_9'),
        categorySubKraeved_10 = document.getElementById('categorySubKraeved_10'),
        categorySubKraevedAll = [categorySubKraeved_1, categorySubKraeved_2, categorySubKraeved_3, categorySubKraeved_4, categorySubKraeved_5, categorySubKraeved_6, categorySubKraeved_7, categorySubKraeved_8, categorySubKraeved_9, categorySubKraeved_10]
    ;

    //Local Storage. Progress
    let progressKraevedQuest1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1'));
    let progressKraevedQuest2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2'));
    let progressKraevedQuest3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3'));
    let progressKraevedQuest4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4'));
    let progressKraevedQuest5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5'));
    let progressKraevedQuest6 = JSON.parse(localStorage.getItem('progressKraevedQuest_6'));
    let progressKraevedQuest7 = JSON.parse(localStorage.getItem('progressKraevedQuest_7'));
    let progressKraevedQuest8 = JSON.parse(localStorage.getItem('progressKraevedQuest_8'));
    let progressKraevedQuest9 = JSON.parse(localStorage.getItem('progressKraevedQuest_9'));
    let progressKraevedQuest10 = JSON.parse(localStorage.getItem('progressKraevedQuest_10'));
    let progressKraevedQuestAll = progressKraevedQuest1 + progressKraevedQuest2 + progressKraevedQuest3 + progressKraevedQuest4 + progressKraevedQuest5 + progressKraevedQuest6 + progressKraevedQuest7 + progressKraevedQuest8 + progressKraevedQuest9 + progressKraevedQuest10;
    localStorage.setItem('progressKraevedAll', JSON.stringify(progressKraevedQuestAll));

    function kraevedQuest_1() {
        if (localStorage.getItem('progressKraevedQuest_1_1') === null ||
            localStorage.getItem('progressKraevedQuest_1_2') === null ||
            localStorage.getItem('progressKraevedQuest_1_3') === null ||
            localStorage.getItem('progressKraevedQuest_1_4') === null ||
            localStorage.getItem('progressKraevedQuest_1_5') === null) {
            localStorage.setItem('progressKraevedQuest_1_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_1_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_1_3', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_1_4', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_1_5', JSON.stringify(0));
        }

        let progressKraevedQuest1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_1')),
            progressKraevedQuest1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
            progressKraevedQuest1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3')),
            progressKraevedQuest1_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_4')),
            progressKraevedQuest1_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_5'))
        ;

        const categoryElementStars_1 = document.getElementById('categoryElementStars_1'),
            categorySubQuest_2 = document.getElementById('categorySubKraeved_2')
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

        if (progressKraevedQuest1_1 === 1) {
            categoryElementStars_1_1.className += 'fill';
        }

        if (progressKraevedQuest1_2 === 1) {
            categoryElementStars_1_2.className += 'fill';
        }

        if (progressKraevedQuest1_3 === 1) {
            categoryElementStars_1_3.className += 'fill';
        }

        if (progressKraevedQuest1_4 === 1) {
            categoryElementStars_1_4.className += 'fill';
        }

        if (progressKraevedQuest1_5 === 1) {
            categoryElementStars_1_5.className += 'fill';
        }

        if (progressKraevedQuest1 >= 1) {
            categorySubQuest_2.className = 'category__element category__element_2';
        }
    }
    kraevedQuest_1();

    function kraevedQuest_2() {
        if (localStorage.getItem('progressKraevedQuest_2_1') === null ||
            localStorage.getItem('progressKraevedQuest_2_2') === null ||
            localStorage.getItem('progressKraevedQuest_2_3') === null ||
            localStorage.getItem('progressKraevedQuest_2_4') === null ||
            localStorage.getItem('progressKraevedQuest_2_5') === null) {
            localStorage.setItem('progressKraevedQuest_2_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_2_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_2_3', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_2_4', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_2_5', JSON.stringify(0));
        }

        let progressKraevedQuest2_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_1')),
            progressKraevedQuest2_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
            progressKraevedQuest2_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3')),
            progressKraevedQuest2_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_4')),
            progressKraevedQuest2_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_5'))
        ;

        const categoryElementStars_2 = document.getElementById('categoryElementStars_2'),
            categorySubQuest_3 = document.getElementById('categorySubKraeved_3')
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

        if (progressKraevedQuest2_1 === 1) {
            categoryElementStars_2_1.className += 'fill';
        }

        if (progressKraevedQuest2_2 === 1) {
            categoryElementStars_2_2.className += 'fill';
        }

        if (progressKraevedQuest2_3 === 1) {
            categoryElementStars_2_3.className += 'fill';
        }

        if (progressKraevedQuest2_4 === 1) {
            categoryElementStars_2_4.className += 'fill';
        }

        if (progressKraevedQuest2_5 === 1) {
            categoryElementStars_2_5.className += 'fill';
        }

        if (progressKraevedQuest2 >= 1) {
            categorySubQuest_3.className = 'category__element category__element_3';
        }
    }
    kraevedQuest_2();

    function kraevedQuest_3() {
        if (localStorage.getItem('progressKraevedQuest_3_1') === null ||
            localStorage.getItem('progressKraevedQuest_3_2') === null ||
            localStorage.getItem('progressKraevedQuest_3_3') === null ||
            localStorage.getItem('progressKraevedQuest_3_4') === null ||
            localStorage.getItem('progressKraevedQuest_3_5') === null) {
            localStorage.setItem('progressKraevedQuest_3_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_3_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_3_3', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_3_4', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_3_5', JSON.stringify(0));
        }

        let progressKraevedQuest3_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_1')),
            progressKraevedQuest3_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
            progressKraevedQuest3_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3')),
            progressKraevedQuest3_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_4')),
            progressKraevedQuest3_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_5'))
        ;

        const categoryElementStars_3 = document.getElementById('categoryElementStars_3'),
            categorySubQuest_4 = document.getElementById('categorySubKraeved_4')
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

        if (progressKraevedQuest3_1 === 1) {
            categoryElementStars_3_1.className += 'fill';
        }

        if (progressKraevedQuest3_2 === 1) {
            categoryElementStars_3_2.className += 'fill';
        }

        if (progressKraevedQuest3_3 === 1) {
            categoryElementStars_3_3.className += 'fill';
        }

        if (progressKraevedQuest3_4 === 1) {
            categoryElementStars_3_4.className += 'fill';
        }

        if (progressKraevedQuest3_5 === 1) {
            categoryElementStars_3_5.className += 'fill';
        }

        if (progressKraevedQuest3 >= 1) {
            categorySubQuest_4.className = 'category__element category__element_4';
        }
    }
    kraevedQuest_3();

    function kraevedQuest_4() {
        if (localStorage.getItem('progressKraevedQuest_4_1') === null ||
            localStorage.getItem('progressKraevedQuest_4_2') === null ||
            localStorage.getItem('progressKraevedQuest_4_3') === null ||
            localStorage.getItem('progressKraevedQuest_4_4') === null ||
            localStorage.getItem('progressKraevedQuest_4_5') === null) {
            localStorage.setItem('progressKraevedQuest_4_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_4_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_4_3', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_4_4', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_4_5', JSON.stringify(0));
        }

        let progressKraevedQuest4_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_1')),
            progressKraevedQuest4_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
            progressKraevedQuest4_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3')),
            progressKraevedQuest4_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_4')),
            progressKraevedQuest4_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_5'))
        ;

        const categoryElementStars_4 = document.getElementById('categoryElementStars_4'),
            categorySubQuest_5 = document.getElementById('categorySubKraeved_5')
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

        if (progressKraevedQuest4_1 === 1) {
            categoryElementStars_4_1.className += 'fill';
        }

        if (progressKraevedQuest4_2 === 1) {
            categoryElementStars_4_2.className += 'fill';
        }

        if (progressKraevedQuest4_3 === 1) {
            categoryElementStars_4_3.className += 'fill';
        }

        if (progressKraevedQuest4_4 === 1) {
            categoryElementStars_4_4.className += 'fill';
        }

        if (progressKraevedQuest4_5 === 1) {
            categoryElementStars_4_5.className += 'fill';
        }

        if (progressKraevedQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    kraevedQuest_4();

    function kraevedQuest_5() {
        if (localStorage.getItem('progressKraevedQuest_5_1') === null ||
            localStorage.getItem('progressKraevedQuest_5_2') === null ||
            localStorage.getItem('progressKraevedQuest_5_3') === null ||
            localStorage.getItem('progressKraevedQuest_5_4') === null ||
            localStorage.getItem('progressKraevedQuest_5_5') === null) {
            localStorage.setItem('progressKraevedQuest_5_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_5_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_5_3', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_5_4', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_5_5', JSON.stringify(0));
        }

        let progressKraevedQuest5_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_1')),
            progressKraevedQuest5_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
            progressKraevedQuest5_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3')),
            progressKraevedQuest5_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_4')),
            progressKraevedQuest5_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_5'))
        ;

        const categoryElementStars_5 = document.getElementById('categoryElementStars_5'),
            categorySubQuest_6 = document.getElementById('categorySubKraeved_6')
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

        if (progressKraevedQuest5_1 === 1) {
            categoryElementStars_5_1.className += 'fill';
        }

        if (progressKraevedQuest5_2 === 1) {
            categoryElementStars_5_2.className += 'fill';
        }

        if (progressKraevedQuest5_3 === 1) {
            categoryElementStars_5_3.className += 'fill';
        }

        if (progressKraevedQuest5_4 === 1) {
            categoryElementStars_5_4.className += 'fill';
        }

        if (progressKraevedQuest5_5 === 1) {
            categoryElementStars_5_5.className += 'fill';
        }

        if (progressKraevedQuest5 >= 1) {
            categorySubQuest_6.className = 'category__element category__element_6';
        }
    }
    kraevedQuest_5();

    function kraevedQuest_6() {
        if (localStorage.getItem('progressKraevedQuest_6_1') === null ||
            localStorage.getItem('progressKraevedQuest_6_2') === null ||
            localStorage.getItem('progressKraevedQuest_6_3') === null ||
            localStorage.getItem('progressKraevedQuest_6_4') === null ||
            localStorage.getItem('progressKraevedQuest_6_5') === null) {
            localStorage.setItem('progressKraevedQuest_6_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_6_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_6_3', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_6_4', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_6_5', JSON.stringify(0));
        }

        let progressKraevedQuest6_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_1')),
            progressKraevedQuest6_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
            progressKraevedQuest6_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3')),
            progressKraevedQuest6_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_4')),
            progressKraevedQuest6_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_5'))
        ;

        const categoryElementStars_6 = document.getElementById('categoryElementStars_6'),
            categorySubQuest_7 = document.getElementById('categorySubKraeved_7')
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

        if (progressKraevedQuest6_1 === 1) {
            categoryElementStars_6_1.className += 'fill';
        }

        if (progressKraevedQuest6_2 === 1) {
            categoryElementStars_6_2.className += 'fill';
        }

        if (progressKraevedQuest6_3 === 1) {
            categoryElementStars_6_3.className += 'fill';
        }

        if (progressKraevedQuest6_4 === 1) {
            categoryElementStars_6_4.className += 'fill';
        }

        if (progressKraevedQuest6_5 === 1) {
            categoryElementStars_6_5.className += 'fill';
        }

        if (progressKraevedQuest6 >= 1) {
            categorySubQuest_7.className = 'category__element category__element_7';
        }
    }
    kraevedQuest_6();

    function kraevedQuest_7() {
        if (localStorage.getItem('progressKraevedQuest_7_1') === null ||
            localStorage.getItem('progressKraevedQuest_7_2') === null ||
            localStorage.getItem('progressKraevedQuest_7_3') === null ||
            localStorage.getItem('progressKraevedQuest_7_4') === null ||
            localStorage.getItem('progressKraevedQuest_7_5') === null) {
            localStorage.setItem('progressKraevedQuest_7_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_7_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_7_3', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_7_4', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_7_5', JSON.stringify(0));
        }

        let progressKraevedQuest7_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_1')),
            progressKraevedQuest7_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
            progressKraevedQuest7_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3')),
            progressKraevedQuest7_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_4')),
            progressKraevedQuest7_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_5'))
        ;

        const categoryElementStars_7 = document.getElementById('categoryElementStars_7'),
            categorySubQuest_8 = document.getElementById('categorySubKraeved_8')
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

        if (progressKraevedQuest7_1 === 1) {
            categoryElementStars_7_1.className += 'fill';
        }

        if (progressKraevedQuest7_2 === 1) {
            categoryElementStars_7_2.className += 'fill';
        }

        if (progressKraevedQuest7_3 === 1) {
            categoryElementStars_7_3.className += 'fill';
        }

        if (progressKraevedQuest7_4 === 1) {
            categoryElementStars_7_4.className += 'fill';
        }

        if (progressKraevedQuest7_5 === 1) {
            categoryElementStars_7_5.className += 'fill';
        }

        if (progressKraevedQuest7 >= 1) {
            categorySubQuest_8.className = 'category__element category__element_8';
        }
    }
    kraevedQuest_7();

    function kraevedQuest_8() {
        if (localStorage.getItem('progressKraevedQuest_8_1') === null ||
            localStorage.getItem('progressKraevedQuest_8_2') === null ||
            localStorage.getItem('progressKraevedQuest_8_3') === null ||
            localStorage.getItem('progressKraevedQuest_8_4') === null ||
            localStorage.getItem('progressKraevedQuest_8_5') === null) {
            localStorage.setItem('progressKraevedQuest_8_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_8_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_8_3', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_8_4', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_8_5', JSON.stringify(0));
        }

        let progressKraevedQuest8_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_1')),
            progressKraevedQuest8_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
            progressKraevedQuest8_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3')),
            progressKraevedQuest8_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_4')),
            progressKraevedQuest8_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_5'))
        ;

        const categoryElementStars_8 = document.getElementById('categoryElementStars_8'),
            categorySubQuest_9 = document.getElementById('categorySubKraeved_9')
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

        if (progressKraevedQuest8_1 === 1) {
            categoryElementStars_8_1.className += 'fill';
        }

        if (progressKraevedQuest8_2 === 1) {
            categoryElementStars_8_2.className += 'fill';
        }

        if (progressKraevedQuest8_3 === 1) {
            categoryElementStars_8_3.className += 'fill';
        }

        if (progressKraevedQuest8_4 === 1) {
            categoryElementStars_8_4.className += 'fill';
        }

        if (progressKraevedQuest8_5 === 1) {
            categoryElementStars_8_5.className += 'fill';
        }

        if (progressKraevedQuest8 >= 1) {
            categorySubQuest_9.className = 'category__element category__element_9';
        }
    }
    kraevedQuest_8();

    function kraevedQuest_9() {
        if (localStorage.getItem('progressKraevedQuest_9_1') === null ||
            localStorage.getItem('progressKraevedQuest_9_2') === null ||
            localStorage.getItem('progressKraevedQuest_9_3') === null ||
            localStorage.getItem('progressKraevedQuest_9_4') === null ||
            localStorage.getItem('progressKraevedQuest_9_5') === null) {
            localStorage.setItem('progressKraevedQuest_9_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_9_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_9_3', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_9_4', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_9_5', JSON.stringify(0));
        }

        let progressKraevedQuest9_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_1')),
            progressKraevedQuest9_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
            progressKraevedQuest9_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3')),
            progressKraevedQuest9_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_4')),
            progressKraevedQuest9_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_5'))
        ;

        const categoryElementStars_9 = document.getElementById('categoryElementStars_9'),
            categorySubQuest_10 = document.getElementById('categorySubKraeved_10')
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

        if (progressKraevedQuest9_1 === 1) {
            categoryElementStars_9_1.className += 'fill';
        }

        if (progressKraevedQuest9_2 === 1) {
            categoryElementStars_9_2.className += 'fill';
        }

        if (progressKraevedQuest9_3 === 1) {
            categoryElementStars_9_3.className += 'fill';
        }

        if (progressKraevedQuest9_4 === 1) {
            categoryElementStars_9_4.className += 'fill';
        }

        if (progressKraevedQuest9_5 === 1) {
            categoryElementStars_9_5.className += 'fill';
        }

        if (progressKraevedQuest9 >= 1) {
            categorySubQuest_10.className = 'category__element category__element_10';
        }
    }
    kraevedQuest_9();

    function kraevedQuest_10() {
        if (localStorage.getItem('progressKraevedQuest_10_1') === null ||
            localStorage.getItem('progressKraevedQuest_10_2') === null ||
            localStorage.getItem('progressKraevedQuest_10_3') === null ||
            localStorage.getItem('progressKraevedQuest_10_4') === null ||
            localStorage.getItem('progressKraevedQuest_10_5') === null) {
            localStorage.setItem('progressKraevedQuest_10_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_10_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_10_3', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_10_4', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_10_5', JSON.stringify(0));
        }

        let progressKraevedQuest10_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_1')),
            progressKraevedQuest10_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
            progressKraevedQuest10_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3')),
            progressKraevedQuest10_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_4')),
            progressKraevedQuest10_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_5'))
        ;

        const categoryElementStars_10 = document.getElementById('categoryElementStars_10'),
            categorySubQuest_10 = document.getElementById('categorySubKraeved_10')
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

        if (progressKraevedQuest10_1 === 1) {
            categoryElementStars_10_1.className += 'fill';
        }

        if (progressKraevedQuest10_2 === 1) {
            categoryElementStars_10_2.className += 'fill';
        }

        if (progressKraevedQuest10_3 === 1) {
            categoryElementStars_10_3.className += 'fill';
        }

        if (progressKraevedQuest10_4 === 1) {
            categoryElementStars_10_4.className += 'fill';
        }

        if (progressKraevedQuest10_5 === 1) {
            categoryElementStars_10_5.className += 'fill';
        }
    }
    kraevedQuest_10();

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

    for (let i = 0; i < categorySubKraevedAll.length; i++) {
        if (categorySubKraevedAll[i].className !== 'category__element--hidden') {
            categorySubKraevedAll[i].addEventListener('click', () => {
                if (categorySubKraevedAll[i].className !== 'category__element--hidden') {
                    soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_subCategoryQuest.ogg');
                }
            });
        }
    }

    categorySubKraeved_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadKraevedReady_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_2.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadKraevedReady_2();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_3.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadKraevedReady_3();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_4.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadKraevedReady_4();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_5.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadKraevedReady_5();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_6.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadKraevedReady_6();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_7.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadKraevedReady_7();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_8.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadKraevedReady_8();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_9.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadKraevedReady_9();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_10.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadKraevedReady_10();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    let progressKraevedQuestSum = JSON.parse(localStorage.getItem('progressKraevedAll'));
    if (progressKraevedQuestSum === 50) {
        soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryAllRight.ogg');
    }
}