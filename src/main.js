// Hide new user if logged in
import { PrmTopNavBarLinksAfterConfig } from './hide-new-user-if-loggedin/prmTopNavBarLinksAfter.component';

angular.module('viewCustom')
// hide new user if logged in
    .component(PrmTopNavBarLinksAfterConfig.name, PrmTopNavBarLinksAfterConfig.config)