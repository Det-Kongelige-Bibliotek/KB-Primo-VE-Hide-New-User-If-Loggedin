// Hide new user if logged in
import { PrmMainMenuAfterConfig } from './hide-new-user-if-loggedin/prmMainMenuAfter.component';

angular.module('viewCustom')
// hide new user if logged in
    .component(PrmMainMenuAfterConfig.name, PrmMainMenuAfterConfig.config)