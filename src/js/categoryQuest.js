class CategoryQuest {

    categoryQuest(questName, questNum) {
        if (localStorage.getItem(`progress${questName}Quest_1_1`) === null ||
            localStorage.getItem(`progress${questName}Quest_1_2`) === null ||
            localStorage.getItem(`progress${questName}Quest_1_3`) === null) {
            localStorage.setItem(`progress${questName}Quest_1_1`, JSON.stringify(0));
            localStorage.setItem(`progress${questName}Quest_1_2`, JSON.stringify(0));
            localStorage.setItem(`progress${questName}Quest_1_3`, JSON.stringify(0));
        }

        let progressQuest1_1 = JSON.parse(localStorage.getItem(`progress${questName}Quest_1_1`)),
            progressQuest1_2 = JSON.parse(localStorage.getItem(`progress${questName}Quest_1_2`)),
            progressQuest1_3 = JSON.parse(localStorage.getItem(`progress${questName}Quest_1_3`))
        ;

        const categorySubStars_1 = document.getElementById('categoryElementStars_1'),
            categorySubQuest_2 = document.getElementById('categorySubCitizen_2')
        ;

        categorySubStars_1.id = 'categoryElementStars_1';
        const categoryElementStars_1 = document.getElementById('categoryElementStars_1');

        if (progressQuest1_1 === 1 &&
            progressQuest1_2 === 0 &&
            progressQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
        <li class="fill"></li>
        <li></li>
        <li></li>
    `;
        } else if (progressQuest1_1 === 1 &&
            progressQuest1_2 === 1 &&
            progressQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
        <li class="fill"></li>
        <li class="fill"></li>
        <li></li>
    `;
        } else if (progressQuest1_1 === 1 &&
            progressQuest1_2 === 1 &&
            progressQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
        <li class="fill"></li>
        <li class="fill"></li>
        <li class="fill"></li>
    `;
        } else if (progressQuest1_1 === 0 &&
            progressQuest1_2 === 1 &&
            progressQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
        <li></li>
        <li class="fill"></li>
        <li></li>
    `;
        } else if (progressQuest1_1 === 0 &&
            progressQuest1_2 === 0 &&
            progressQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
        <li></li>
        <li></li>
        <li class="fill"></li>
    `;
        } else if (progressQuest1_1 === 0 &&
            progressQuest1_2 === 1 &&
            progressQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
        <li></li>
        <li class="fill"></li>
        <li class="fill"></li>
    `;
        } else if (progressQuest1_1 === 1 &&
            progressQuest1_2 === 0 &&
            progressQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
        <li class="fill"></li>
        <li></li>
        <li class="fill"></li>
    `;
        }

        if (progressQuest1 >= 1) {
            categorySubQuest_2.className = 'category__element category__element_2';
        }

    }
}