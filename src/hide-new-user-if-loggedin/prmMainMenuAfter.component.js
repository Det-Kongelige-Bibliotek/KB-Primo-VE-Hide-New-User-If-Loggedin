class PrmMainMenuAfterController {
    constructor($element) {
        this.$element = $element;
    };

    $postLink() {
        // Hide new user button if logged in
        angular.element(document).ready(function () {
            let loggedinMenu = angular.element(document.querySelector('.user-button.user-menu-button.button-with-menu-arrow'));
            if (loggedinMenu && loggedinMenu.length !== 0) {
                let newUser = angular.element(document.querySelector('div[data-main-menu-item="new_user"]'));
                if (newUser && newUser.length !== 0) {
                    newUser.css('display', 'none');
                }
            }
        });

    };
}

PrmMainMenuAfterController.$inject = ['$element'];

export let PrmMainMenuAfterConfig = {
    name: 'prmMainMenuAfter',
    config: {
        bindings: {parentCtrl: '<'},
        controller: PrmMainMenuAfterController,
    },
}
