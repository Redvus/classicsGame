class ChoiceCategory {

    choiceCategory(choiceCategoryName,
                   choiceCategoryBack,
                   choiceCategorySubID,
                   choiceCategoryTitle_1,
                   choiceCategoryTitle_2,
                   choiceCategoryTitle_3,
                   choiceCategoryTitle_4,
                   choiceCategoryTitle_5,
                   choiceCategoryTitle_6,
                   choiceCategoryTitle_7,
                   choiceCategoryTitle_8,
                   choiceCategoryTitle_9,
                   choiceCategoryTitle_10) {
        const containerWrapper = document.createElement('div'),
            choiceCategoryTitle = document.createElement('div'),
            containerWrapperSubcategory = document.createElement('div'),
            wrapperCategoryBack = document.createElement('div'),
            wrapperTopTitle = document.createElement('div')
        ;
        container.className = 'container container--wide';
        containerWrapper.className = 'container__wrapper';
        containerWrapperSubcategory.className = 'container__wrapper_subcategory';
        choiceCategoryTitle.className = 'container__title';
        wrapperCategoryBack.className = `wrapper__${choiceCategoryBack}`;
        wrapperTopTitle.className = 'wrapper__top';
        wrapperTopTitle.innerHTML = `
            <picture class="wrapper__top_title">
                <img src="assets/games/kraevedia/images/kraevedia_title${choiceCategorySubID}.png" alt="Краеведия. ${choiceCategoryName}">
            </picture>
        `;
        containerWrapperSubcategory.innerHTML = `
            <a href="javascript:void(0);" class="category__element category__element_1" id="categorySub${choiceCategorySubID}_1">
                <ul class="category__element_stars" id="categoryElementStars_1"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/kraevedia/images/kraevedia_catBack.png" alt="Категория ${choiceCategoryName}. Первый вопрос">
                </picture>
                <h3 class="category__element_title">${choiceCategoryTitle_1}</h3>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_2 category__element--hidden" id="categorySub${choiceCategorySubID}_2">
                <ul class="category__element_stars" id="categoryElementStars_2"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/kraevedia/images/kraevedia_catBack.png" alt="Категория ${choiceCategoryName}. Второй вопрос">
                </picture>
                <h3 class="category__element_title">${choiceCategoryTitle_2}</h3>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_3 category__element--hidden" id="categorySub${choiceCategorySubID}_3">
                <ul class="category__element_stars" id="categoryElementStars_3"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/kraevedia/images/kraevedia_catBack.png" alt="Категория ${choiceCategoryName}. Третий вопрос">
                </picture>
                <h3 class="category__element_title">${choiceCategoryTitle_3}</h3>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_4 category__element--hidden" id="categorySub${choiceCategorySubID}_4">
                <ul class="category__element_stars" id="categoryElementStars_4"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/kraevedia/images/kraevedia_catBack.png" alt="Категория ${choiceCategoryName}. Четвертый вопрос">
                </picture>
                <h3 class="category__element_title">${choiceCategoryTitle_4}</h3>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_5 category__element--hidden" id="categorySub${choiceCategorySubID}_5">
                <ul class="category__element_stars" id="categoryElementStars_5"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/kraevedia/images/kraevedia_catBack.png" alt="Категория ${choiceCategoryName}. Пятый вопрос">
                </picture>
                <h3 class="category__element_title">${choiceCategoryTitle_5}</h3>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_6 category__element--hidden" id="categorySub${choiceCategorySubID}_6">
                <ul class="category__element_stars" id="categoryElementStars_6"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/kraevedia/images/kraevedia_catBack.png" alt="Категория ${choiceCategoryName}. Шестой вопрос">
                </picture>
                <h3 class="category__element_title">${choiceCategoryTitle_6}</h3>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_7 category__element--hidden" id="categorySub${choiceCategorySubID}_7">
                <ul class="category__element_stars" id="categoryElementStars_7"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/kraevedia/images/kraevedia_catBack.png" alt="Категория ${choiceCategoryName}. Седьмой вопрос">
                </picture>
                <h3 class="category__element_title">${choiceCategoryTitle_7}</h3>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_8 category__element--hidden" id="categorySub${choiceCategorySubID}_8">
                <ul class="category__element_stars" id="categoryElementStars_8"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/kraevedia/images/kraevedia_catBack.png" alt="Категория ${choiceCategoryName}. Восьмой вопрос">
                </picture>
                <h3 class="category__element_title">${choiceCategoryTitle_8}</h3>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_9 category__element--hidden" id="categorySub${choiceCategorySubID}_9">
                <ul class="category__element_stars" id="categoryElementStars_9"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/kraevedia/images/kraevedia_catBack.png" alt="Категория ${choiceCategoryName}. Девятый вопрос">
                </picture>
                <h3 class="category__element_title">${choiceCategoryTitle_9}</h3>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_10 category__element--hidden" id="categorySub${choiceCategorySubID}_10">
                <ul class="category__element_stars" id="categoryElementStars_10"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/kraevedia/images/kraevedia_catBack.png" alt="Категория ${choiceCategoryName}. Десятый вопрос">
                </picture>
                <h3 class="category__element_title">${choiceCategoryTitle_10}</h3>
            </a>
        `;

        container.appendChild(containerWrapper);

        wrapper.appendChild(wrapperTopTitle);
        containerWrapper.appendChild(containerWrapperSubcategory);
        containerWrapperSubcategory.appendChild(choiceCategoryTitle);

        function choiceCategoryAnimation() {
            let tl = gsap.timeline();

            const categorySub_1 = document.querySelector('.category__element_1'),
                categorySub_2 = document.querySelector('.category__element_2'),
                categorySub_3 = document.querySelector('.category__element_3'),
                categorySub_4 = document.querySelector('.category__element_4'),
                categorySub_5 = document.querySelector('.category__element_5'),
                categorySub_6 = document.querySelector('.category__element_6'),
                categorySub_7 = document.querySelector('.category__element_7'),
                categorySub_8 = document.querySelector('.category__element_8'),
                categorySub_9 = document.querySelector('.category__element_9'),
                categorySub_10 = document.querySelector('.category__element_10'),
                containerWrapper = document.querySelector('.container__wrapper'),
                categorySubAll = [categorySub_1, categorySub_2, categorySub_3, categorySub_4, categorySub_5, categorySub_6, categorySub_7, categorySub_8, categorySub_9, categorySub_10]
            ;

            tl
                .from(containerWrapper, {
                    autoAlpha: 0,
                    duration: "0.6",
                })
                // .from(wrapperCategoryBack, {
                //     autoAlpha: 0,
                //     duration: 0.4,
                //     delay: '-0.2'
                //     // scale: '0.98'
                // })
                .to(wrapperTopTitle, {
                    autoAlpha: 1,
                    duration: 0.4,
                    delay: '-0.2'
                })
                .from(categorySubAll, {
                    autoAlpha: 0,
                    duration: "0.3",
                    delay: "-0.6",
                    stagger: 0.1
                })
            ;
        }

        choiceCategoryAnimation();
    }
}