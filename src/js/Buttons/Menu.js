import { gsap } from "gsap";
import { Sounds } from "../Sounds.js";

export class Menu {

    constructor() {
        // this.sounds = new Sounds();
        this.initLayout();
        this.introAnim();
    }

    initLayout() {
        this.wrapper = document.querySelector('.wrapper');
        this.container = document.querySelector('.container');

        // Кнопки
        this.introBlockButtons = document.createElement('ul');
        this.introBlockButtons.className = 'container__menu';
		this.introBlockButtons.id = 'menuMain';

		const buttons = [
			{ id: "clickLoadGame", text: "Начать игру" },
			{ id: "clickAboutLibrary", text: "О библиотеке" },
			{ id: "clickAboutAuthors", text: "Авторы" }
		];

		this.introBlockButtons.innerHTML = "";
		for (const btn of buttons) {
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.href = "javascript:void(0);";
			a.id = btn.id;
			a.textContent = btn.text;
			li.appendChild(a);
			this.introBlockButtons.appendChild(li);
		}

        this.container.appendChild(this.introBlockButtons);
    }

    introAnim() {
        let tl = gsap.timeline();
        tl
            .from(this.introBlockButtons, {
                duration: 0.3,
                delay: '-0.2',
                autoAlpha: 0
            })
        ;
    }
}