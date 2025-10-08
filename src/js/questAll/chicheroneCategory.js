/* Запускаем вопросы в квтегории Чичероне */

function chicheroneCategoryDev() {
    const chicheroneCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    chicheroneCatLoad.choiceCategory('Чичероне', 'chicherone', 'Chicherone', 'Самарская Лука', 'Самара в зеркале истории', 'Районы, кварталы...', 'Вот дом, который построил...', 'Самара в лицах', 'Создано в Самаре', 'Культурная столица', 'Под мягким светом лампы и шелестом страниц', 'Литературная Самара', 'Очарованная Самара');

    const containerWrapper = document.querySelector('.container__wrapper'),
        introAboutBack = document.querySelector('.wrapper__chicherone'),
        wrapperTopTitle = document.querySelector('.wrapper__top'),
        categorySubChicherone_1 = document.getElementById('categorySubChicherone_1'),
        categorySubChicherone_2 = document.getElementById('categorySubChicherone_2'),
        categorySubChicherone_3 = document.getElementById('categorySubChicherone_3'),
        categorySubChicherone_4 = document.getElementById('categorySubChicherone_4'),
        categorySubChicherone_5 = document.getElementById('categorySubChicherone_5'),
        categorySubChicherone_6 = document.getElementById('categorySubChicherone_6'),
        categorySubChicherone_7 = document.getElementById('categorySubChicherone_7'),
        categorySubChicherone_8 = document.getElementById('categorySubChicherone_8'),
        categorySubChicherone_9 = document.getElementById('categorySubChicherone_9'),
        categorySubChicherone_10 = document.getElementById('categorySubChicherone_10'),
        categorySubChicheroneAll = [categorySubChicherone_1, categorySubChicherone_2, categorySubChicherone_3, categorySubChicherone_4, categorySubChicherone_5, categorySubChicherone_6, categorySubChicherone_7, categorySubChicherone_8, categorySubChicherone_9, categorySubChicherone_10]
    ;

    //Local Storage. Progress
    let progressChicheroneQuest1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1'));
    let progressChicheroneQuest2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2'));
    let progressChicheroneQuest3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3'));
    let progressChicheroneQuest4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4'));
    let progressChicheroneQuest5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5'));
    let progressChicheroneQuest6 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6'));
    let progressChicheroneQuest7 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7'));
    let progressChicheroneQuest8 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8'));
    let progressChicheroneQuest9 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9'));
    let progressChicheroneQuest10 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10'));
    let progressChicheroneQuestAll = progressChicheroneQuest1 + progressChicheroneQuest2 + progressChicheroneQuest3 + progressChicheroneQuest4 + progressChicheroneQuest5 + progressChicheroneQuest6 + progressChicheroneQuest7 + progressChicheroneQuest8 + progressChicheroneQuest9 + progressChicheroneQuest10;
    localStorage.setItem('progressChicheroneAll', JSON.stringify(progressChicheroneQuestAll));

    function chicheroneQuest_1() {
        if (localStorage.getItem('progressChicheroneQuest_1_1') === null ||
            localStorage.getItem('progressChicheroneQuest_1_2') === null ||
            localStorage.getItem('progressChicheroneQuest_1_3') === null ||
            localStorage.getItem('progressChicheroneQuest_1_4') === null ||
            localStorage.getItem('progressChicheroneQuest_1_5') === null) {
            localStorage.setItem('progressChicheroneQuest_1_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_1_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_1_3', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_1_4', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_1_5', JSON.stringify(0));
        }

        let progressChicheroneQuest1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_1')),
            progressChicheroneQuest1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
            progressChicheroneQuest1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3')),
            progressChicheroneQuest1_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_4')),
            progressChicheroneQuest1_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_5'))
        ;

        const categoryElementStars_1 = document.getElementById('categoryElementStars_1'),
            categorySubQuest_2 = document.getElementById('categorySubChicherone_2')
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

        if (progressChicheroneQuest1_1 === 1) {
            categoryElementStars_1_1.className += 'fill';
        }

        if (progressChicheroneQuest1_2 === 1) {
            categoryElementStars_1_2.className += 'fill';
        }

        if (progressChicheroneQuest1_3 === 1) {
            categoryElementStars_1_3.className += 'fill';
        }

        if (progressChicheroneQuest1_4 === 1) {
            categoryElementStars_1_4.className += 'fill';
        }

        if (progressChicheroneQuest1_5 === 1) {
            categoryElementStars_1_5.className += 'fill';
        }

        if (progressChicheroneQuest1 >= 1) {
            categorySubQuest_2.className = 'category__element category__element_2';
        }
    }
    chicheroneQuest_1();

    function chicheroneQuest_2() {
        if (localStorage.getItem('progressChicheroneQuest_2_1') === null ||
            localStorage.getItem('progressChicheroneQuest_2_2') === null ||
            localStorage.getItem('progressChicheroneQuest_2_3') === null ||
            localStorage.getItem('progressChicheroneQuest_2_4') === null ||
            localStorage.getItem('progressChicheroneQuest_2_5') === null) {
            localStorage.setItem('progressChicheroneQuest_2_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_2_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_2_3', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_2_4', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_2_5', JSON.stringify(0));
        }

        let progressChicheroneQuest2_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_1')),
            progressChicheroneQuest2_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
            progressChicheroneQuest2_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3')),
            progressChicheroneQuest2_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_4')),
            progressChicheroneQuest2_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_5'))
        ;

        const categoryElementStars_2 = document.getElementById('categoryElementStars_2'),
            categorySubQuest_3 = document.getElementById('categorySubChicherone_3')
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

        if (progressChicheroneQuest2_1 === 1) {
            categoryElementStars_2_1.className += 'fill';
        }

        if (progressChicheroneQuest2_2 === 1) {
            categoryElementStars_2_2.className += 'fill';
        }

        if (progressChicheroneQuest2_3 === 1) {
            categoryElementStars_2_3.className += 'fill';
        }

        if (progressChicheroneQuest2_4 === 1) {
            categoryElementStars_2_4.className += 'fill';
        }

        if (progressChicheroneQuest2_5 === 1) {
            categoryElementStars_2_5.className += 'fill';
        }

        if (progressChicheroneQuest2 >= 1) {
            categorySubQuest_3.className = 'category__element category__element_3';
        }
    }
    chicheroneQuest_2();

    function chicheroneQuest_3() {
        if (localStorage.getItem('progressChicheroneQuest_3_1') === null ||
            localStorage.getItem('progressChicheroneQuest_3_2') === null ||
            localStorage.getItem('progressChicheroneQuest_3_3') === null ||
            localStorage.getItem('progressChicheroneQuest_3_4') === null ||
            localStorage.getItem('progressChicheroneQuest_3_5') === null) {
            localStorage.setItem('progressChicheroneQuest_3_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_3_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_3_3', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_3_4', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_3_5', JSON.stringify(0));
        }

        let progressChicheroneQuest3_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_1')),
            progressChicheroneQuest3_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
            progressChicheroneQuest3_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3')),
            progressChicheroneQuest3_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_4')),
            progressChicheroneQuest3_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_5'))
        ;

        const categoryElementStars_3 = document.getElementById('categoryElementStars_3'),
            categorySubQuest_4 = document.getElementById('categorySubChicherone_4')
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

        if (progressChicheroneQuest3_1 === 1) {
            categoryElementStars_3_1.className += 'fill';
        }

        if (progressChicheroneQuest3_2 === 1) {
            categoryElementStars_3_2.className += 'fill';
        }

        if (progressChicheroneQuest3_3 === 1) {
            categoryElementStars_3_3.className += 'fill';
        }

        if (progressChicheroneQuest3_4 === 1) {
            categoryElementStars_3_4.className += 'fill';
        }

        if (progressChicheroneQuest3_5 === 1) {
            categoryElementStars_3_5.className += 'fill';
        }

        if (progressChicheroneQuest3 >= 1) {
            categorySubQuest_4.className = 'category__element category__element_4';
        }
    }
    chicheroneQuest_3();

    function chicheroneQuest_4() {
        if (localStorage.getItem('progressChicheroneQuest_4_1') === null ||
            localStorage.getItem('progressChicheroneQuest_4_2') === null ||
            localStorage.getItem('progressChicheroneQuest_4_3') === null ||
            localStorage.getItem('progressChicheroneQuest_4_4') === null ||
            localStorage.getItem('progressChicheroneQuest_4_5') === null) {
            localStorage.setItem('progressChicheroneQuest_4_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_4_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_4_3', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_4_4', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_4_5', JSON.stringify(0));
        }

        let progressChicheroneQuest4_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_1')),
            progressChicheroneQuest4_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
            progressChicheroneQuest4_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3')),
            progressChicheroneQuest4_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_4')),
            progressChicheroneQuest4_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_5'))
        ;

        const categoryElementStars_4 = document.getElementById('categoryElementStars_4'),
            categorySubQuest_5 = document.getElementById('categorySubChicherone_5')
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

        if (progressChicheroneQuest4_1 === 1) {
            categoryElementStars_4_1.className += 'fill';
        }

        if (progressChicheroneQuest4_2 === 1) {
            categoryElementStars_4_2.className += 'fill';
        }

        if (progressChicheroneQuest4_3 === 1) {
            categoryElementStars_4_3.className += 'fill';
        }

        if (progressChicheroneQuest4_4 === 1) {
            categoryElementStars_4_4.className += 'fill';
        }

        if (progressChicheroneQuest4_5 === 1) {
            categoryElementStars_4_5.className += 'fill';
        }

        if (progressChicheroneQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    chicheroneQuest_4();

    function chicheroneQuest_5() {
        if (localStorage.getItem('progressChicheroneQuest_5_1') === null ||
            localStorage.getItem('progressChicheroneQuest_5_2') === null ||
            localStorage.getItem('progressChicheroneQuest_5_3') === null ||
            localStorage.getItem('progressChicheroneQuest_5_4') === null ||
            localStorage.getItem('progressChicheroneQuest_5_5') === null) {
            localStorage.setItem('progressChicheroneQuest_5_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_5_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_5_3', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_5_4', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_5_5', JSON.stringify(0));
        }

        let progressChicheroneQuest5_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_1')),
            progressChicheroneQuest5_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
            progressChicheroneQuest5_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3')),
            progressChicheroneQuest5_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_4')),
            progressChicheroneQuest5_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_5'))
        ;

        const categoryElementStars_5 = document.getElementById('categoryElementStars_5'),
            categorySubQuest_6 = document.getElementById('categorySubChicherone_6')
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

        if (progressChicheroneQuest5_1 === 1) {
            categoryElementStars_5_1.className += 'fill';
        }

        if (progressChicheroneQuest5_2 === 1) {
            categoryElementStars_5_2.className += 'fill';
        }

        if (progressChicheroneQuest5_3 === 1) {
            categoryElementStars_5_3.className += 'fill';
        }

        if (progressChicheroneQuest5_4 === 1) {
            categoryElementStars_5_4.className += 'fill';
        }

        if (progressChicheroneQuest5_5 === 1) {
            categoryElementStars_5_5.className += 'fill';
        }

        if (progressChicheroneQuest5 >= 1) {
            categorySubQuest_6.className = 'category__element category__element_6';
        }
    }
    chicheroneQuest_5();

    function chicheroneQuest_6() {
        if (localStorage.getItem('progressChicheroneQuest_6_1') === null ||
            localStorage.getItem('progressChicheroneQuest_6_2') === null ||
            localStorage.getItem('progressChicheroneQuest_6_3') === null ||
            localStorage.getItem('progressChicheroneQuest_6_4') === null ||
            localStorage.getItem('progressChicheroneQuest_6_5') === null) {
            localStorage.setItem('progressChicheroneQuest_6_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_6_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_6_3', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_6_4', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_6_5', JSON.stringify(0));
        }

        let progressChicheroneQuest6_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_1')),
            progressChicheroneQuest6_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
            progressChicheroneQuest6_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3')),
            progressChicheroneQuest6_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_4')),
            progressChicheroneQuest6_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_5'))
        ;

        const categoryElementStars_6 = document.getElementById('categoryElementStars_6'),
            categorySubQuest_7 = document.getElementById('categorySubChicherone_7')
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

        if (progressChicheroneQuest6_1 === 1) {
            categoryElementStars_6_1.className += 'fill';
        }

        if (progressChicheroneQuest6_2 === 1) {
            categoryElementStars_6_2.className += 'fill';
        }

        if (progressChicheroneQuest6_3 === 1) {
            categoryElementStars_6_3.className += 'fill';
        }

        if (progressChicheroneQuest6_4 === 1) {
            categoryElementStars_6_4.className += 'fill';
        }

        if (progressChicheroneQuest6_5 === 1) {
            categoryElementStars_6_5.className += 'fill';
        }

        if (progressChicheroneQuest6 >= 1) {
            categorySubQuest_7.className = 'category__element category__element_7';
        }
    }
    chicheroneQuest_6();

    function chicheroneQuest_7() {
        if (localStorage.getItem('progressChicheroneQuest_7_1') === null ||
            localStorage.getItem('progressChicheroneQuest_7_2') === null ||
            localStorage.getItem('progressChicheroneQuest_7_3') === null ||
            localStorage.getItem('progressChicheroneQuest_7_4') === null ||
            localStorage.getItem('progressChicheroneQuest_7_5') === null) {
            localStorage.setItem('progressChicheroneQuest_7_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_7_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_7_3', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_7_4', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_7_5', JSON.stringify(0));
        }

        let progressChicheroneQuest7_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_1')),
            progressChicheroneQuest7_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
            progressChicheroneQuest7_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3')),
            progressChicheroneQuest7_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_4')),
            progressChicheroneQuest7_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_5'))
        ;

        const categoryElementStars_7 = document.getElementById('categoryElementStars_7'),
            categorySubQuest_8 = document.getElementById('categorySubChicherone_8')
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

        if (progressChicheroneQuest7_1 === 1) {
            categoryElementStars_7_1.className += 'fill';
        }

        if (progressChicheroneQuest7_2 === 1) {
            categoryElementStars_7_2.className += 'fill';
        }

        if (progressChicheroneQuest7_3 === 1) {
            categoryElementStars_7_3.className += 'fill';
        }

        if (progressChicheroneQuest7_4 === 1) {
            categoryElementStars_7_4.className += 'fill';
        }

        if (progressChicheroneQuest7_5 === 1) {
            categoryElementStars_7_5.className += 'fill';
        }

        if (progressChicheroneQuest7 >= 1) {
            categorySubQuest_8.className = 'category__element category__element_8';
        }
    }
    chicheroneQuest_7();

    function chicheroneQuest_8() {
        if (localStorage.getItem('progressChicheroneQuest_8_1') === null ||
            localStorage.getItem('progressChicheroneQuest_8_2') === null ||
            localStorage.getItem('progressChicheroneQuest_8_3') === null ||
            localStorage.getItem('progressChicheroneQuest_8_4') === null ||
            localStorage.getItem('progressChicheroneQuest_8_5') === null) {
            localStorage.setItem('progressChicheroneQuest_8_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_8_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_8_3', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_8_4', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_8_5', JSON.stringify(0));
        }

        let progressChicheroneQuest8_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_1')),
            progressChicheroneQuest8_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
            progressChicheroneQuest8_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3')),
            progressChicheroneQuest8_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_4')),
            progressChicheroneQuest8_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_5'))
        ;

        const categoryElementStars_8 = document.getElementById('categoryElementStars_8'),
            categorySubQuest_9 = document.getElementById('categorySubChicherone_9')
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

        if (progressChicheroneQuest8_1 === 1) {
            categoryElementStars_8_1.className += 'fill';
        }

        if (progressChicheroneQuest8_2 === 1) {
            categoryElementStars_8_2.className += 'fill';
        }

        if (progressChicheroneQuest8_3 === 1) {
            categoryElementStars_8_3.className += 'fill';
        }

        if (progressChicheroneQuest8_4 === 1) {
            categoryElementStars_8_4.className += 'fill';
        }

        if (progressChicheroneQuest8_5 === 1) {
            categoryElementStars_8_5.className += 'fill';
        }

        if (progressChicheroneQuest8 >= 1) {
            categorySubQuest_9.className = 'category__element category__element_9';
        }
    }
    chicheroneQuest_8();

    function chicheroneQuest_9() {
        if (localStorage.getItem('progressChicheroneQuest_9_1') === null ||
            localStorage.getItem('progressChicheroneQuest_9_2') === null ||
            localStorage.getItem('progressChicheroneQuest_9_3') === null ||
            localStorage.getItem('progressChicheroneQuest_9_4') === null ||
            localStorage.getItem('progressChicheroneQuest_9_5') === null) {
            localStorage.setItem('progressChicheroneQuest_9_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_9_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_9_3', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_9_4', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_9_5', JSON.stringify(0));
        }

        let progressChicheroneQuest9_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_1')),
            progressChicheroneQuest9_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
            progressChicheroneQuest9_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3')),
            progressChicheroneQuest9_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_4')),
            progressChicheroneQuest9_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_5'))
        ;

        const categoryElementStars_9 = document.getElementById('categoryElementStars_9'),
            categorySubQuest_10 = document.getElementById('categorySubChicherone_10')
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

        if (progressChicheroneQuest9_1 === 1) {
            categoryElementStars_9_1.className += 'fill';
        }

        if (progressChicheroneQuest9_2 === 1) {
            categoryElementStars_9_2.className += 'fill';
        }

        if (progressChicheroneQuest9_3 === 1) {
            categoryElementStars_9_3.className += 'fill';
        }

        if (progressChicheroneQuest9_4 === 1) {
            categoryElementStars_9_4.className += 'fill';
        }

        if (progressChicheroneQuest9_5 === 1) {
            categoryElementStars_9_5.className += 'fill';
        }

        if (progressChicheroneQuest9 >= 1) {
            categorySubQuest_10.className = 'category__element category__element_10';
        }
    }
    chicheroneQuest_9();

    function chicheroneQuest_10() {
        if (localStorage.getItem('progressChicheroneQuest_10_1') === null ||
            localStorage.getItem('progressChicheroneQuest_10_2') === null ||
            localStorage.getItem('progressChicheroneQuest_10_3') === null ||
            localStorage.getItem('progressChicheroneQuest_10_4') === null ||
            localStorage.getItem('progressChicheroneQuest_10_5') === null) {
            localStorage.setItem('progressChicheroneQuest_10_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_10_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_10_3', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_10_4', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_10_5', JSON.stringify(0));
        }

        let progressChicheroneQuest10_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_1')),
            progressChicheroneQuest10_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
            progressChicheroneQuest10_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3')),
            progressChicheroneQuest10_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_4')),
            progressChicheroneQuest10_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_5'))
        ;

        const categoryElementStars_10 = document.getElementById('categoryElementStars_10'),
            categorySubQuest_10 = document.getElementById('categorySubChicherone_10')
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

        if (progressChicheroneQuest10_1 === 1) {
            categoryElementStars_10_1.className += 'fill';
        }

        if (progressChicheroneQuest10_2 === 1) {
            categoryElementStars_10_2.className += 'fill';
        }

        if (progressChicheroneQuest10_3 === 1) {
            categoryElementStars_10_3.className += 'fill';
        }

        if (progressChicheroneQuest10_4 === 1) {
            categoryElementStars_10_4.className += 'fill';
        }

        if (progressChicheroneQuest10_5 === 1) {
            categoryElementStars_10_5.className += 'fill';
        }
    }
    chicheroneQuest_10();

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

    for (let i = 0; i < categorySubChicheroneAll.length; i++) {
        if (categorySubChicheroneAll[i].className !== 'category__element--hidden') {
            categorySubChicheroneAll[i].addEventListener('click', () => {
                if (categorySubChicheroneAll[i].className !== 'category__element--hidden') {
                    soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_subCategoryQuest.ogg');
                }
            });
        }
    }

    categorySubChicherone_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadChicheroneReady_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_2.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadChicheroneReady_2();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_3.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadChicheroneReady_3();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_4.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadChicheroneReady_4();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_5.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadChicheroneReady_5();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_6.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadChicheroneReady_6();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_7.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadChicheroneReady_7();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_8.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadChicheroneReady_8();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_9.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadChicheroneReady_9();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_10.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadChicheroneReady_10();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    let progressChicheroneQuestSum = JSON.parse(localStorage.getItem('progressChicheroneAll'));
    if (progressChicheroneQuestSum === 50) {
        soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryAllRight.ogg');
    }
}