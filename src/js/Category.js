class Category {

    categoryMain() {
        const categoryBlock = document.createElement('div'),
            wrapperTopTitle = document.createElement('div'),
            categoryStarsCount = '50'
        ;
        categoryBlock.className = 'container__category';
        container.className = 'container container--wide';
        wrapperTopTitle.className = 'wrapper__top';
        wrapperTopTitle.innerHTML = `
            <picture id="authorsTitle" class="wrapper__top_title">
                <img src="assets/games/kraevedia/images/kraevedia_catChoiceTitle.png" alt="Краеведия. Выбор уровня">
            </picture>
        `;
        categoryBlock.innerHTML = `
            <div class="category__main" id="categoryCitizen">
                <div class="category__main_image">
                    <div class="category__main_title">
                        <h3>I<br />Житель</h3>
                    </div>
                    <div class="category__main_stars">
                        <picture>
                            <img src="assets/games/kraevedia/images/kraevedia_starFill.png" alt="Количество набранных очков">
                        </picture>
                        <div class="category__main_value">
                            <span id="progressCitizenValue"></span>&nbsp;/&nbsp;${categoryStarsCount}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="category__main" id="categoryChicherone">
                <div class="category__main_image">
                    <div class="category__main_title">
                        <h3>II<br />Чичероне</h3>
                        <p><i><sup>*</sup>&nbsp;Переводчик, показывающий иностранцам местные достопримечательности</i></p>
                    </div>
                    <div class="category__main_stars">
                        <picture>
                            <img src="assets/games/kraevedia/images/kraevedia_starFill.png" alt="Количество набранных очков">
                        </picture>
                        <div class="category__main_value">
                            <span id="progressChicheroneValue"></span>&nbsp;/&nbsp;${categoryStarsCount}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="category__main" id="categoryKraeved">
                <div class="category__main_image">
                    <div class="category__main_title">
                        <h3>III<br />Краевед</h3>
                    </div>
                    <div class="category__main_stars">
                        <picture>
                            <img src="assets/games/kraevedia/images/kraevedia_starFill.png" alt="Количество набранных очков">
                        </picture>
                        <div class="category__main_value">
                            <span id="progressKraevedValue"></span>&nbsp;/&nbsp;${categoryStarsCount}
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(categoryBlock);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__service';
        wrapper.appendChild(introBlockBack);
        wrapper.appendChild(wrapperTopTitle);

        function categoryAnimation() {
            let tl = gsap.timeline();
            const categoryCitizen = document.getElementById('categoryCitizen'),
                categoryChicherone = document.getElementById('categoryChicherone'),
                categoryKraeved = document.getElementById('categoryKraeved'),
                wrapperService = document.querySelector('.wrapper__service')
            ;
            tl
                .from(wrapperService, {
                    autoAlpha: 0,
                    duration: 0.6
                })
                .to(wrapperTopTitle, {
                    autoAlpha: 1,
                    duration: 0.4,
                    delay: '-0.2'
                })
                .from([categoryCitizen, categoryChicherone, categoryKraeved], {
                    autoAlpha: 0,
                    duration: 0.6,
                    delay: '-0.3',
                    y: "-0.5rem",
                    stagger: 0.2
                })
            ;
        }

        categoryAnimation();
    }

    categoryProgress(progressID, progressNameValue) {
        let progressValue = document.getElementById(progressID),
            progressBasic = 0
        ;

        if (localStorage.getItem(progressNameValue) === null) {
            localStorage.setItem(progressNameValue, JSON.stringify(progressBasic));
            progressValue.textContent = JSON.parse(localStorage.getItem(progressNameValue));
        } else {
            progressValue.textContent = JSON.parse(localStorage.getItem(progressNameValue));
        }
    }
}