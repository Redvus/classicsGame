import { gsap } from "gsap";

export class ArrowsAll {

    arrowBack() {
        const containerArrowBack = document.createElement('a'),
            wrapper = document.querySelector('.wrapper')
        ;
        containerArrowBack.className = 'wrapper__service_arrow';
        containerArrowBack.id = 'arrowBack';
        containerArrowBack.innerHTML = `
            <?xml version="1.0" encoding="UTF-8"?>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.12 170.08">
              <g id="Layer_1-2" data-name="Layer 1">
                <polygon points="255.12 170.08 0 85.04 255.12 0 208.59 85.04 255.12 170.08" fill="#231f20" stroke-width="0"/>
              </g>
            </svg>
        `;
        wrapper.appendChild(containerArrowBack);

        const arrowBackLoad = document.getElementById('arrowBack');

        function arrowBackAnim() {
            let arrowAnim = gsap.from(arrowBackLoad, {
                duration: 0.3,
                delay: '-0.1',
                autoAlpha: 0
            });
        }
        // arrowBackAnim();
    }

    clearStorage() {
        const
            containerClear = document.createElement('a'),
            wrapper = document.querySelector('.wrapper')
        ;
        containerClear.className = 'wrapper__service_clear';
        containerClear.id = 'settingsClick';
        containerClear.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
        `;
        wrapper.appendChild(containerClear);

        const settingsClickLoad = document.getElementById('settingsClick');

        function settingsClickAnim() {
            let settingsClickGsap = gsap.from(settingsClickLoad, {
                duration: 1,
                delay: '0.4',
                autoAlpha: 0
            });
        }
        // settingsClickAnim();
    }

    arrowNext() {
        const
            containerClear = document.createElement('a'),
            wrapper = document.querySelector('.wrapper')
        ;
        containerClear.className = 'wrapper__service_arrow wrapper__service_arrow--next';
        containerClear.id = 'arrowNext';
        containerClear.innerHTML = `
            <?xml version="1.0" encoding="UTF-8"?>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.12 170.08">
              <g id="Layer_1-2" data-name="Layer 1">
                <polygon points="255.12 170.08 0 85.04 255.12 0 208.59 85.04 255.12 170.08" fill="#231f20" stroke-width="0"/>
              </g>
            </svg>
        `;
        wrapper.appendChild(containerClear);

        const arrowNextLoad = document.getElementById('arrowNext');

        function arrowNextAnim() {
            let arrowAnim = gsap.from(arrowNextLoad, {
                duration: 1,
                delay: '0.4',
                autoAlpha: 0
            });
        }
        arrowNextAnim();
    }

    arrowNextHidden() {
        const
            containerClear = document.createElement('a'),
            wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right')
        ;
        containerClear.className = 'wrapper__service_arrow wrapper__service_arrow--hidden';
        // containerClear.id = 'arrowNextCat';
        containerClear.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_buttonBack.png" alt="Следующий вопрос">
        `;
        wrapperBottomRight.appendChild(containerClear);

        const arrowNextLoad = document.getElementById('arrowNextCat');

        function arrowNextAnim() {
            let arrowAnim = gsap.to(arrowNextLoad, {
                duration: 0.3,
                delay: 0.3,
                autoAlpha: 0
            });
        }
        // arrowNextAnim();
    }

    buttonContinueLoad() {
        const
            containerClear = document.createElement('a'),
            wrapper = document.querySelector('.wrapper')
        ;
        containerClear.className = 'wrapper__service_continue';
        containerClear.id = 'buttonContinue';
        containerClear.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_buttonBack.png" alt="Следующий вопрос">
        `;
        wrapper.appendChild(containerClear);
    }

    arrowBackQuest() {
        const
            containerArrowBack = document.createElement('a'),
            containerQuestBottom = document.querySelector('.container-quest__bottom')
        ;
        containerArrowBack.className = 'wrapper__service_arrow wrapper__service_arrow--quest';
        containerArrowBack.id = 'arrowBack';
        containerArrowBack.innerHTML = `
            <?xml version="1.0" encoding="UTF-8"?>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.12 170.08">
              <g id="Layer_1-2" data-name="Layer 1">
                <polygon points="255.12 170.08 0 85.04 255.12 0 208.59 85.04 255.12 170.08" fill="#231f20" stroke-width="0"/>
              </g>
            </svg>
        `;

        if (containerQuestBottom !== null) {
            containerQuestBottom.appendChild(containerArrowBack);
        }

        const arrowBackLoad = document.getElementById('arrowBack');

        function arrowBackAnim() {
            let arrowAnim = gsap.from(arrowBackLoad, {
                duration: 1,
                delay: '0.4',
                autoAlpha: 0
            });
        }
        // if (containerQuestBottom !== null) {
        //     arrowBackAnim();
        // }

    }

    arrowSetting() {
        const
            containerClear = document.createElement('a'),
            containerQuestBottom = document.querySelector('.container-quest__bottom')
        ;
        containerClear.className = 'wrapper__service_clear wrapper__service_clear--quest';
        containerClear.id = 'settingsClick';
        containerClear.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
        `;
        containerQuestBottom.appendChild(containerClear);

        const settingsClickLoad = document.getElementById('settingsClick');

        function settingsClickAnim() {
            let settingsClickGsap = gsap.from(settingsClickLoad, {
                duration: 1,
                delay: '0.4',
                autoAlpha: 0
            });
        }
        // settingsClickAnim();
    }
}