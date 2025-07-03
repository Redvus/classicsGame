import { gsap } from "gsap";

export class Category {

    constructor(
        category_1,
        category_2,
        category_3) {
        this.category_1 = category_1;
        this.category_2 = category_2;
        this.category_3 = category_3;
        this.initLayout();
        this.initAppend();
        // this.categoryAnimation();
        // this.categoryProgress('progressCitizenValue', 'progressCitizen');
        // this.categoryProgress('progressChicheroneValue', 'progressChicherone');
        // this.categoryProgress('progressKraevedValue', 'progressKraeved');
    }

    initLayout() {
        this.wrapper = document.querySelector('.wrapper');
        this.container = document.querySelector('.container');
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperTop = document.querySelector('.wrapper__top');

        this.categoryBlock = document.createElement('div');
        this.wrapperTopTitle = document.createElement('div');
        this.categoryStarsCount = '50';

        this.introBlockBack = document.createElement('div');
        this.introBlockBack.className = 'wrapper__service';

        this.categoryBlock.className = 'container__category';
        this.wrapperTopTitle.className = 'wrapper__top';

        this.wrapperTopTitle.innerHTML = `
            <picture id="authorsTitle" class="wrapper__top_title">
                <img src="assets/games/kraevedia/images/kraevedia_catChoiceTitle.png" alt="Краеведия. Выбор уровня">
            </picture>
        `;

        this.categoryBlock.innerHTML = `
            <div class="container__category_category" id="categoryCitizen">
                <div class="category__main">
                    <div class="category__main_title">
                        <h3>I<br />${this.category_1}</h3>
                    </div>
                    <div class="category__main_stars">
                        <picture>
                            <img src="assets/games/kraevedia/images/kraevedia_starFill.png" alt="Количество набранных очков">
                        </picture>
                        <div class="category__main_value">
                            <span id="progressCitizenValue"></span>&nbsp;/&nbsp;${this.categoryStarsCount}
                        </div>
                    </div>
                </div>
            </div>

            <div class="container__category_category" id="categoryChicherone">
                <div class="category__main">
                    <div class="category__main_title">
                        <h3>II<br />${this.category_2}</h3>
                    </div>
                    <div class="category__main_stars">
                        <picture>
                            <img src="assets/games/kraevedia/images/kraevedia_starFill.png" alt="Количество набранных очков">
                        </picture>
                        <div class="category__main_value">
                            <span id="progressChicheroneValue"></span>&nbsp;/&nbsp;${this.categoryStarsCount}
                        </div>
                    </div>
                </div>
            </div>

            <div class="container__category_category" id="categoryKraeved">
                <div class="category__main">
                    <div class="category__main_title">
                        <h3>III<br />${this.category_3}</h3>
                    </div>
                    <div class="category__main_stars">
                        <picture>
                            <img src="assets/games/kraevedia/images/kraevedia_starFill.png" alt="Количество набранных очков">
                        </picture>
                        <div class="category__main_value">
                            <span id="progressKraevedValue"></span>&nbsp;/&nbsp;${this.categoryStarsCount}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    initAppend() {
        this.container.appendChild(this.categoryBlock);
        this.wrapper.appendChild(this.introBlockBack);
        this.wrapper.appendChild(this.wrapperTopTitle);
    }

    categoryAnimation() {
        this.categoryCitizen = document.getElementById('categoryCitizen')
        this.categoryChicherone = document.getElementById('categoryChicherone');
        this.categoryKraeved = document.getElementById('categoryKraeved');
        this.wrapperService = document.querySelector('.wrapper__service');
        ;

        let tl = gsap.timeline();
        tl
            .from(this.wrapperService, {
                autoAlpha: 0,
                duration: 0.6
            })
            .to(this.wrapperTopTitle, {
                autoAlpha: 1,
                duration: 0.4,
                delay: '-0.2'
            })
            .from([
                this.categoryCitizen,
                this.categoryChicherone,
                this.categoryKraeved], {
                autoAlpha: 0,
                duration: 0.6,
                delay: '-0.3',
                y: "-0.5rem",
                stagger: 0.2
            })
        ;
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