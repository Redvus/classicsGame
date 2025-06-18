/* Блокируем подкатегории при всех ответах */
function lockSubQuestCitizen() {
    let progressCitizenQuest_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_1')),
        categorySubCitizen_1 = document.getElementById('categorySubCitizen_1'),
        progressCitizenQuest_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2')),
        categorySubCitizen_2 = document.getElementById('categorySubCitizen_2'),
        progressCitizenQuest_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3')),
        categorySubCitizen_3 = document.getElementById('categorySubCitizen_3'),
        progressCitizenQuest_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4')),
        categorySubCitizen_4 = document.getElementById('categorySubCitizen_4'),
        progressCitizenQuest_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5')),
        categorySubCitizen_5 = document.getElementById('categorySubCitizen_5'),
        progressCitizenQuest_6 = JSON.parse(localStorage.getItem('progressCitizenQuest_6')),
        categorySubCitizen_6 = document.getElementById('categorySubCitizen_6'),
        progressCitizenQuest_7 = JSON.parse(localStorage.getItem('progressCitizenQuest_7')),
        categorySubCitizen_7 = document.getElementById('categorySubCitizen_7'),
        progressCitizenQuest_8 = JSON.parse(localStorage.getItem('progressCitizenQuest_8')),
        categorySubCitizen_8 = document.getElementById('categorySubCitizen_8'),
        progressCitizenQuest_9 = JSON.parse(localStorage.getItem('progressCitizenQuest_9')),
        categorySubCitizen_9 = document.getElementById('categorySubCitizen_9'),
        progressCitizenQuest_10 = JSON.parse(localStorage.getItem('progressCitizenQuest_10')),
        categorySubCitizen_10 = document.getElementById('categorySubCitizen_10')
    ;

    if (progressCitizenQuest_1 === 5) {
        categorySubCitizen_1.className = 'category__element category__element_1 category__element--lock';
    }

    if (progressCitizenQuest_2 === 5) {
        categorySubCitizen_2.className = 'category__element category__element_2 category__element--lock';
    }

    if (progressCitizenQuest_3 === 5) {
        categorySubCitizen_3.className = 'category__element category__element_3 category__element--lock';
    }

    if (progressCitizenQuest_4 === 5) {
        categorySubCitizen_4.className = 'category__element category__element_4 category__element--lock';
    }

    if (progressCitizenQuest_5 === 5) {
        categorySubCitizen_5.className = 'category__element category__element_5 category__element--lock';
    }

    if (progressCitizenQuest_6 === 5) {
        categorySubCitizen_6.className = 'category__element category__element_6 category__element--lock';
    }

    if (progressCitizenQuest_7 === 5) {
        categorySubCitizen_7.className = 'category__element category__element_7 category__element--lock';
    }

    if (progressCitizenQuest_8 === 5) {
        categorySubCitizen_8.className = 'category__element category__element_8 category__element--lock';
    }

    if (progressCitizenQuest_9 === 5) {
        categorySubCitizen_9.className = 'category__element category__element_9 category__element--lock';
    }

    if (progressCitizenQuest_10 === 5) {
        categorySubCitizen_10.className = 'category__element category__element_10 category__element--lock';
    }
}