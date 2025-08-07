import { gsap } from "gsap";
import { ButtonBack } from "./Buttons/ButtonBack.js";
import { Intro } from "./Intro.js";

export class Authors {

	constructor(
		personFirstTitle = 'Сценарист',
		personFirstName = 'Инна Ямщикова',
		personSecondTitle = 'Дизайнер',
		personSecondName = 'Александр Суворов',
		personThirdTitle = 'Программист',
		personThirdName = 'Александр Суворов'
	) {
		this.personFirstTitle = personFirstTitle;
		this.personFirstName = personFirstName;
		this.personSecondTitle = personSecondTitle;
		this.personSecondName = personSecondName;
		this.personThirdTitle = personThirdTitle;
		this.personThirdName = personThirdName;

		new ButtonBack();
		this.initLayout();
		this.initAuthorsAnim();
		this.initAuthorsBack();

		// this.initDev();
	}

	initLayout() {
		this.container = document.querySelector('.container');
		this.wrapperTopTitle = document.createElement('div');
		this.containerAbout = document.createElement('div');
		this.wrapperTop = document.querySelector('.wrapper__top');
		this.wrapperBottom = document.querySelector('.wrapper__bottom');
		this.wrapperBackIntro = document.getElementById('backIntro');
		this.wrapperBackAbout = document.getElementById('backAbout');
		this.wrapperBackAuthors = document.getElementById('backAuthors');

		// if (document.body.clientWidth < 570 || screen.width < 570) {
		//     this.container.style.width = 'calc(100% - 2rem)';
		//     this.container.style.padding = '0 1rem';
		// } else {
		//     this.container.style.width = '45rem';
		// }

		this.containerAbout.className = 'container__about_block container__about_block--authors';
		this.wrapperTopTitle.className = 'wrapper__top_title';

		this.wrapperTopTitle.innerHTML = `
			<h1>Авторы</h1>
		`;

		this.containerAbout.innerHTML = `
			<ul class="container__about_inside container__about_text container__about_text--center">
				<li class="container__about_person">
					<h4>${this.personFirstTitle}</h4>
					<p>${this.personFirstName}</p>
				</li>
				<li class="container__about_person">
					<h4>${this.personSecondTitle}</h4>
					<p class="container__about_person">${this.personSecondName}</p>
				</li>
				<li class="container__about_person">
					<h4>${this.personThirdTitle}</h4>
					<p>${this.personThirdName}</p>
				</li>
			</ul>
		`;

		// Appends
		this.wrapperTop.appendChild(this.wrapperTopTitle);
		this.container.appendChild(this.containerAbout);

		// const containerAboutInside = document.querySelector('.container__about_inside');

		// if (document.body.clientWidth < 570 || screen.width < 570) {
		//     containerAboutInside.style.height = '100%';
		// }
	}

	initAuthorsBack() {
		this.buttonBackClick = document.getElementById('buttonBack');

		this.buttonBackClick.addEventListener('click', () => {
			let tl = gsap.timeline({
				onComplete: () => {
					// setTimeout(() => {
						this.wrapperBottom.removeChild(this.buttonBackClick);
						this.container.removeChild(this.containerAbout);
						this.wrapperTop.removeChild(this.wrapperTopTitle);
					// }, 500);
					new Intro();
					gsap.to(this.wrapperBackAbout, {
						autoAlpha: 1,
						duration: '0.3',
						delay: '0.5'
					})
					// if (document.body.clientWidth < 570 || screen.width < 570) {
					// 	containerAboutInside.style.height = 'initial';
					// 	this.container.style.width = '';
					// 	this.container.style.padding = '';
					// }
					// this.initGame();
				}
			});
			tl
				.to(this.wrapperTopTitle, {
					autoAlpha: 0,
					delay: '-0.1',
					y: '-10%'
				})
				.to([
					this.containerAbout,
					this.buttonBackClick
				], {
					autoAlpha: 0,
					delay: '-0.1'
				})
			;
		});
	}

	initAuthorsAnim() {
		let tl = new gsap.timeline();

		tl
			.to(this.wrapperBackAbout, {
				duration: '0.3',
				// delay: '0.2',
				autoAlpha: 0
			})
			.from(this.containerAbout, {
				autoAlpha: 0,
				duration: 0.4,
				scale: 0.97
			})
			.from(this.wrapperTopTitle, {
				duration: '0.3',
				delay: '-0.1',
				autoAlpha: 0,
				y: '-10%'
			})
			.from(this.buttonBackClick, {
				duration: '0.3',
				delay: '-0.1',
				autoAlpha: 0,
				y: '10%'
			})
		;
	}

	initDev() {
		const introBack = document.querySelector('.wrapper__intro');
		introBack.style.opacity = '0';
		introBack.style.visibility = 'none';
	}
}