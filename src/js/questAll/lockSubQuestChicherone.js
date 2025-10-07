/* Блокируем подкатегории при всех ответах */
function lockSubQuestChicherone() {
    let progressChicheroneQuest_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1')),
        categorySubChicherone_1 = document.getElementById('categorySubChicherone_1'),
        progressChicheroneQuest_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2')),
        categorySubChicherone_2 = document.getElementById('categorySubChicherone_2'),
        progressChicheroneQuest_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3')),
        categorySubChicherone_3 = document.getElementById('categorySubChicherone_3'),
        progressChicheroneQuest_4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4')),
        categorySubChicherone_4 = document.getElementById('categorySubChicherone_4'),
        progressChicheroneQuest_5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5')),
        categorySubChicherone_5 = document.getElementById('categorySubChicherone_5'),
        progressChicheroneQuest_6 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6')),
        categorySubChicherone_6 = document.getElementById('categorySubChicherone_6'),
        progressChicheroneQuest_7 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7')),
        categorySubChicherone_7 = document.getElementById('categorySubChicherone_7'),
        progressChicheroneQuest_8 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8')),
        categorySubChicherone_8 = document.getElementById('categorySubChicherone_8'),
        progressChicheroneQuest_9 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9')),
        categorySubChicherone_9 = document.getElementById('categorySubChicherone_9'),
        progressChicheroneQuest_10 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10')),
        categorySubChicherone_10 = document.getElementById('categorySubChicherone_10')
    ;

    if (progressChicheroneQuest_1 === 5) {
        categorySubChicherone_1.className = 'category__element category__element_1 category__element--lock';
    }

    if (progressChicheroneQuest_2 === 5) {
        categorySubChicherone_2.className = 'category__element category__element_2 category__element--lock';
    }

    if (progressChicheroneQuest_3 === 5) {
        categorySubChicherone_3.className = 'category__element category__element_3 category__element--lock';
    }

    if (progressChicheroneQuest_4 === 5) {
        categorySubChicherone_4.className = 'category__element category__element_4 category__element--lock';
    }

    if (progressChicheroneQuest_5 === 5) {
        categorySubChicherone_5.className = 'category__element category__element_5 category__element--lock';
    }

    if (progressChicheroneQuest_6 === 5) {
        categorySubChicherone_6.className = 'category__element category__element_6 category__element--lock';
    }

    if (progressChicheroneQuest_7 === 5) {
        categorySubChicherone_7.className = 'category__element category__element_7 category__element--lock';
    }

    if (progressChicheroneQuest_8 === 5) {
        categorySubChicherone_8.className = 'category__element category__element_8 category__element--lock';
    }

    if (progressChicheroneQuest_9 === 5) {
        categorySubChicherone_9.className = 'category__element category__element_9 category__element--lock';
    }

    if (progressChicheroneQuest_10 === 5) {
        categorySubChicherone_10.className = 'category__element category__element_10 category__element--lock';
    }
}