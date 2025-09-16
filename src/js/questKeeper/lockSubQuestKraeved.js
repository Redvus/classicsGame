/* Блокируем подкатегории при всех ответах */
function lockSubQuestKraeved() {
    let progressKraevedQuest_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1')),
        categorySubKraeved_1 = document.getElementById('categorySubKraeved_1'),
        progressKraevedQuest_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2')),
        categorySubKraeved_2 = document.getElementById('categorySubKraeved_2'),
        progressKraevedQuest_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3')),
        categorySubKraeved_3 = document.getElementById('categorySubKraeved_3'),
        progressKraevedQuest_4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4')),
        categorySubKraeved_4 = document.getElementById('categorySubKraeved_4'),
        progressKraevedQuest_5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5')),
        categorySubKraeved_5 = document.getElementById('categorySubKraeved_5'),
        progressKraevedQuest_6 = JSON.parse(localStorage.getItem('progressKraevedQuest_6')),
        categorySubKraeved_6 = document.getElementById('categorySubKraeved_6'),
        progressKraevedQuest_7 = JSON.parse(localStorage.getItem('progressKraevedQuest_7')),
        categorySubKraeved_7 = document.getElementById('categorySubKraeved_7'),
        progressKraevedQuest_8 = JSON.parse(localStorage.getItem('progressKraevedQuest_8')),
        categorySubKraeved_8 = document.getElementById('categorySubKraeved_8'),
        progressKraevedQuest_9 = JSON.parse(localStorage.getItem('progressKraevedQuest_9')),
        categorySubKraeved_9 = document.getElementById('categorySubKraeved_9'),
        progressKraevedQuest_10 = JSON.parse(localStorage.getItem('progressKraevedQuest_10')),
        categorySubKraeved_10 = document.getElementById('categorySubKraeved_10')
    ;

    if (progressKraevedQuest_1 === 5) {
        categorySubKraeved_1.className = 'category__element category__element_1 category__element--lock';
    }

    if (progressKraevedQuest_2 === 5) {
        categorySubKraeved_2.className = 'category__element category__element_2 category__element--lock';
    }

    if (progressKraevedQuest_3 === 5) {
        categorySubKraeved_3.className = 'category__element category__element_3 category__element--lock';
    }

    if (progressKraevedQuest_4 === 5) {
        categorySubKraeved_4.className = 'category__element category__element_4 category__element--lock';
    }

    if (progressKraevedQuest_5 === 5) {
        categorySubKraeved_5.className = 'category__element category__element_5 category__element--lock';
    }

    if (progressKraevedQuest_6 === 5) {
        categorySubKraeved_6.className = 'category__element category__element_6 category__element--lock';
    }

    if (progressKraevedQuest_7 === 5) {
        categorySubKraeved_7.className = 'category__element category__element_7 category__element--lock';
    }

    if (progressKraevedQuest_8 === 5) {
        categorySubKraeved_8.className = 'category__element category__element_8 category__element--lock';
    }

    if (progressKraevedQuest_9 === 5) {
        categorySubKraeved_9.className = 'category__element category__element_9 category__element--lock';
    }

    if (progressKraevedQuest_10 === 5) {
        categorySubKraeved_10.className = 'category__element category__element_10 category__element--lock';
    }
}