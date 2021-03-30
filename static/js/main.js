var Maxbex = Maxbex || {};
Maxbex.default = Maxbex.default || {};
Maxbex.default.init = function () {
    try {
        // $(document).on("click", '[href="#"]', function (e) {
        //     e.preventDefault();
        // });
        let hrefs = document.querySelectorAll('[href="#"]');
        hrefs.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
            })
        })

        function backToTop() {
            var btn = document.getElementById('backToTop');

            window.addEventListener('scroll', function (e) {
                var scrltop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

                if (scrltop > 400) {
                    btn.classList.add('show');
                } else {
                    btn.classList.remove('show');
                }
            })

            btn.addEventListener('click', function () {
                // window.scrollTo(0, 0);
                document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
            })
        }

        backToTop()

        var _checkOrientation = function () {
            function n() {
                Math.abs(window.orientation) === 90 ?
                    document.querySelector('.yechizi-wrapper').classList.add('hidden') :
                    document.querySelector('.yechizi-wrapper').classList.remove('hidden')
            }
            n();
            window.onorientationchange = n;
        };

        // _checkOrientation();

    } catch (e) {
        console.log(`Error on Maxbex.default.init - ${e}`)
    }
}

Maxbex.sliders = Maxbex.sliders || {};
Maxbex.sliders.init = function () {
    try {
        var introEl = document.querySelector('.intro-carousel');
        var flkty1 = new Flickity(introEl, {
            cellSelector: '.carousel-cell',
            wrapAround: true,
            prevNextButtons: false,
            pageDots: true,
            autoPlay: 5000,
            rightToLeft: true
        });

        var coinsEl = document.querySelector('.coins-carousel');
        var flkty2 = new Flickity(coinsEl, {
            cellSelector: '.carousel-cell',
            wrapAround: true,
            cellAlign: 'right',
            contain: true,
            prevNextButtons: false,
            pageDots: true,
            autoPlay: 5000,
            rightToLeft: true
        });
    } catch (e) {
        console.log(`Error on Maxbex.sliders.init - ${e}`)
    }
}

Maxbex.tabs = Maxbex.tabs || {};
Maxbex.tabs.init = function () {
    try {
        const tabLink = document.querySelectorAll(".tab .tab-menu button");
        const tabContent = document.querySelectorAll(".tab-bar-content");

        tabLink.forEach((el) => {
            el.addEventListener("click", activeTab);
        });

        function activeTab(el) {
            const btnTarget = el.currentTarget;
            const content = btnTarget.dataset.content;

            tabContent.forEach((el) => {
                el.classList.remove("active");
            });

            tabLink.forEach((el) => {
                el.classList.remove("active");
            });

            document.querySelector("#" + content).classList.add("active");
            btnTarget.classList.add("active");
        }

    } catch (e) {
        console.log(`Error on Maxbex.tabs.init - ${e}`)
    }
}

Maxbex.modal = Maxbex.modal || {};
Maxbex.modal.init = function () {
    try {
        function apiModal() {
            const apiModalBtn = document.querySelector('.open-api-modal');
            const closeApiModal = document.querySelector('.api-modal .close-btn')

            if (apiModalBtn) {
                apiModalBtn.addEventListener('click', function () {
                    document.querySelector('.api-modal').classList.add('show');
                })

                closeApiModal.addEventListener('click', function () {
                    document.querySelector('.api-modal').classList.remove('show');
                })
            }
        }

        function loginModal() {
            const openModalBtn = document.querySelectorAll('.open-login-modal');
            const loginModal = document.querySelector('.login-modal');

            openModalBtn.forEach(item => {
                item.addEventListener('click', function () {
                    document.querySelector('body').style.overflow = 'hidden';
                    setTimeout(function () {
                        loginModal.classList.add('show');
                    }, 100);
                })
            })

            document.querySelector('.login-modal .close-modal').addEventListener('click', function () {
                loginModal.classList.remove('show');
                document.querySelector('body').style.overflow = 'auto';
            })
        }

        function registerModal() {
            const openModalBtn = document.querySelectorAll('.open-register-modal');
            const loginModal = document.querySelector('.register-modal');

            openModalBtn.forEach(item => {
                item.addEventListener('click', function () {
                    document.querySelector('body').style.overflow = 'hidden';
                    setTimeout(function () {
                        loginModal.classList.add('show');
                    }, 100);
                })
            })

            document.querySelector('.register-modal .close-modal').addEventListener('click', function () {
                loginModal.classList.remove('show');
                document.querySelector('body').style.overflow = 'auto';
            })
        }

        // loginModal()
        // registerModal()
        // apiModal()

        // از این قسمت به بعد باید بعدا شخصی سازی شود و این کدها پاک میشوند
        // const form = document.querySelector('.login-modal form');
        // const loading = document.querySelector('.login-modal .loading');

        // const afterSubmit = document.getElementById('afterSubmit');
        // const passEl = `<div class="form-group mb-4"><input type="password" class="form-control" placeholder="رمز خود را بنویسید" id="password" required /><div class="valid-feedback">اعتبار سنجی شد!</div><div class="invalid-feedback">رمز عبور درست نیست</div></div>`;
        // afterSubmit.innerHTML = passEl;

        // form.addEventListener('submit', e => {
        //     e.preventDefault();
        //     loading.classList.add('show')

        //     setTimeout(() => {
        //         loading.classList.remove('show')
        //         afterSubmit.style.display = "block";

        //     }, 3000);
        // })

    } catch (e) {
        console.log(`Error on Maxbex.modal.init - ${e}`)
    }
}

Maxbex.menu = Maxbex.menu || {};
Maxbex.menu.init = function () {
    try {
        const menuOveralEl = document.querySelector('.menu-overal');
        const menuFixedEl = document.querySelector('.menu-fixed');
        const openMenuBtn = document.querySelector('#open-menu');

        openMenuBtn.addEventListener('click', function () {
            menuOveralEl.classList.add('show')
            menuFixedEl.classList.add('show')
        })

        function closeMenu(element) {
            element.addEventListener('click', function () {
                menuOveralEl.classList.remove('show')
                menuFixedEl.classList.remove('show')
            })
        }

        closeMenu(menuOveralEl);

    } catch (e) {
        console.log(`Error on Maxbex.menu.init - ${e}`)
    }
}

Maxbex.formValidation = Maxbex.formValidation || {};
Maxbex.formValidation.init = function () {
    try {
        (function () {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        })()

    } catch (e) {
        console.log(`Error on Maxbex.formValid.init - ${e}`)
    }
}

Maxbex.Features = Maxbex.Features || {};
Maxbex.Features.init = function () {
    try {
        // images offset
        const firstImg = document.getElementById('first-image').offsetTop - 100;
        const secondImg = document.getElementById('second-image').offsetTop - 100;
        const thirdImg = document.getElementById('third-image').offsetTop - 100;

        // contents
        const firstTxt = document.getElementById('first-content');
        const secondTxt = document.getElementById('second-content');
        const thirdTxt = document.getElementById('third-content');

        // Scroll Event
        window.addEventListener('scroll', function (e) {
            var scrltop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (screen.width > 769) {
                if (scrltop < firstImg || scrltop < secondImg) {
                    firstTxt.classList.remove('d-none')
                    firstTxt.classList.add('d-block')

                    secondTxt.classList.remove('d-block')
                    secondTxt.classList.add('d-none')

                    thirdTxt.classList.remove('d-block')
                    thirdTxt.classList.add('d-none')
                }

                if (scrltop > secondImg) {
                    firstTxt.classList.remove('d-block')
                    firstTxt.classList.add('d-none')

                    secondTxt.classList.remove('d-none')
                    secondTxt.classList.add('d-block')

                    thirdTxt.classList.remove('d-block')
                    thirdTxt.classList.add('d-none')
                }

                if (scrltop > thirdImg) {
                    firstTxt.classList.remove('d-block')
                    firstTxt.classList.add('d-none')

                    secondTxt.classList.remove('d-block')
                    secondTxt.classList.add('d-none')

                    thirdTxt.classList.remove('d-none')
                    thirdTxt.classList.add('d-block')
                }
            }
        })

    } catch (e) {
        console.log(`Error on Maxbex.Features.init - ${e}`)
    }
}

window.addEventListener('DOMContentLoaded', function () {
    // Maxbex.formValidation.init();
    // Maxbex.default.init();
    // Maxbex.sliders.init();
    // Maxbex.tabs.init();
    // Maxbex.modal.init();
    // Maxbex.menu.init();
    // Maxbex.Features.init();
})