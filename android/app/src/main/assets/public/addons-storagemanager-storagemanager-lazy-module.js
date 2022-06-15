(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-storagemanager-storagemanager-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/course-storage/course-storage.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/course-storage/course-storage.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.storagemanager.coursedownloads' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <p>{{ 'addon.storagemanager.courseinfo' | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n\r\n        <ion-card class=\"wholecourse\">\r\n            <ion-card-header>\r\n                <ion-card-title>{{ title }}</ion-card-title>\r\n                <ion-item class=\"size ion-text-wrap ion-no-padding\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading ion-text-wrap\">{{ 'addon.storagemanager.totaldownloads' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-badge color=\"light\" slot=\"end\">\r\n                        <ng-container *ngIf=\"!calculatingSize\">{{ totalSize | coreBytesToSize }}</ng-container>\r\n                        <ng-container *ngIf=\"calculatingSize\">{{ 'core.calculating' | translate }}</ng-container>\r\n                    </ion-badge>\r\n                </ion-item>\r\n                <ion-button *ngIf=\"downloadCourseEnabled\" (click)=\"prefetchCourse()\" expand=\"block\" fill=\"outline\" class=\"ion-no-margin\"\r\n                    [disabled]=\"prefetchCourseData.loading\">\r\n                    <ion-icon *ngIf=\"!prefetchCourseData.loading\" [name]=\"prefetchCourseData.icon\" slot=\"start\"></ion-icon>\r\n                    <ion-spinner *ngIf=\"prefetchCourseData.loading\" slot=\"start\"></ion-spinner>\r\n                    {{ prefetchCourseData.statusTranslatable | translate }}\r\n                </ion-button>\r\n                <ion-button [disabled]=\"calculatingSize || totalSize <= 0\" (click)=\"deleteForCourse()\" expand=\"block\" color=\"danger\"\r\n                    class=\"ion-no-margin ion-margin-top\">\r\n                    <ion-icon name=\"fas-trash\" slot=\"start\" [attr.aria-label]=\"'addon.storagemanager.deletedatafrom' | translate:\r\n                        { name: title }\">\r\n                    </ion-icon>\r\n                    {{ 'addon.storagemanager.deleteall' | translate }}\r\n                </ion-button>\r\n            </ion-card-header>\r\n        </ion-card>\r\n        <ng-container *ngFor=\"let section of sections\">\r\n            <ion-card class=\"section\" *ngIf=\"section.modules.length > 0\">\r\n                <ion-card-header>\r\n                    <ion-item class=\"ion-no-padding\" [lines]=\"section.expanded ? 'full' : 'none'\" button detail=\"false\"\r\n                        (click)=\"toggleExpand($event, section)\" [class.core-course-storage-section-expanded]=\"section.expanded\"\r\n                        [attr.aria-label]=\"(section.expanded ? 'core.collapse' : 'core.expand') | translate\"\r\n                        [attr.aria-expanded]=\"section.expanded\" [attr.aria-controls]=\"'core-course-storage-section-' + section.id\">\r\n                        <ion-icon name=\"fas-chevron-right\" flip-rtl slot=\"start\" class=\"expandable-status-icon\"\r\n                            [class.expandable-status-icon-expanded]=\"section.expanded\">\r\n                        </ion-icon>\r\n                        <ion-label>\r\n                            <p class=\"item-heading ion-text-wrap\">\r\n                                <core-format-text [text]=\"section.name\" contextLevel=\"course\" [contextInstanceId]=\"section.course\"\r\n                                    [adaptImg]=\"false\">\r\n                                </core-format-text>\r\n                            </p>\r\n                            <ion-badge [color]=\"section.downloadStatus == statusDownloaded ? 'success' : 'light'\"\r\n                                *ngIf=\"!section.calculatingSize && section.totalSize > 0\">\r\n                                <ion-icon name=\"fam-cloud-done\" *ngIf=\"section.downloadStatus == statusDownloaded\"\r\n                                    [attr.aria-label]=\"'core.downloaded' | translate\">\r\n                                </ion-icon>{{ section.totalSize | coreBytesToSize }}\r\n                            </ion-badge>\r\n                            <ion-badge color=\"light\" *ngIf=\"section.calculatingSize\">\r\n                                {{ 'core.calculating' | translate }}\r\n                            </ion-badge>\r\n                            <!-- Download progress. -->\r\n                            <p *ngIf=\"downloadEnabled && section.isDownloading\">\r\n                                <core-progress-bar [progress]=\"section.total == 0 ? -1 : section.count / section.total\">\r\n                                </core-progress-bar>\r\n                            </p>\r\n                        </ion-label>\r\n                        <div class=\"storage-buttons\" slot=\"end\"\r\n                            *ngIf=\"(!section.calculatingSize && section.totalSize > 0) || downloadEnabled\">\r\n                            <div *ngIf=\"downloadEnabled\" slot=\"end\" class=\"core-button-spinner\">\r\n                                <core-download-refresh *ngIf=\"!section.isDownloading && section.downloadStatus != statusDownloaded\"\r\n                                    [status]=\"section.downloadStatus\" [enabled]=\"true\" (action)=\"prefecthSection(section)\"\r\n                                    [loading]=\"section.isDownloading || section.isCalculating\" [canTrustDownload]=\"true\">\r\n                                </core-download-refresh>\r\n\r\n                                <ion-badge class=\"core-course-download-section-progress\"\r\n                                    *ngIf=\"section.isDownloading && section.count < section.total\" role=\"progressbar\"\r\n                                    [attr.aria-valuemax]=\"section.total\" [attr.aria-valuenow]=\"section.count\"\r\n                                    [attr.aria-valuetext]=\"'core.course.downloadsectionprogressdescription' | translate:section\">\r\n                                    {{section.count}} / {{section.total}}\r\n                                </ion-badge>\r\n                            </div>\r\n                            <ion-button (click)=\"deleteForSection(section)\" *ngIf=\"!section.calculatingSize && section.totalSize > 0\"\r\n                                color=\"danger\" fill=\"clear\">\r\n                                <ion-icon name=\"fas-trash\" slot=\"icon-only\"\r\n                                    [attr.aria-label]=\"'addon.storagemanager.deletedatafrom' | translate: { name: section.name }\">\r\n                                </ion-icon>\r\n                            </ion-button>\r\n                        </div>\r\n                    </ion-item>\r\n                </ion-card-header>\r\n                <ion-card-content id=\"core-course-storage-section-{{section.id}}\" [ngClass]=\"{'hidden-content': !section.expanded}\">\r\n                    <ng-container *ngIf=\"section.expanded\">\r\n                        <ng-container *ngFor=\"let module of section.modules\">\r\n                            <ion-item class=\"ion-no-padding core-course-storage-activity\"\r\n                                *ngIf=\"downloadEnabled || (!module.calculatingSize && module.totalSize > 0)\">\r\n                                <core-mod-icon slot=\"start\" *ngIf=\"module.handlerData.icon\" [modicon]=\"module.handlerData.icon\"\r\n                                    [modname]=\"module.modname\" [componentId]=\"module.instance\">\r\n                                </core-mod-icon>\r\n                                <ion-label class=\"ion-text-wrap\">\r\n                                    <h3 class=\"{{module.handlerData!.class}} addon-storagemanager-module-size\">\r\n                                        <core-format-text [text]=\"module.handlerData.title\" [courseId]=\"module.course\" contextLevel=\"module\"\r\n                                            [contextInstanceId]=\"module.id\" [adaptImg]=\"false\">\r\n                                        </core-format-text>\r\n                                    </h3>\r\n                                    <ion-badge [color]=\"module.downloadStatus == statusDownloaded ? 'success' : 'light'\"\r\n                                        *ngIf=\"!module.calculatingSize && module.totalSize > 0\">\r\n                                        <ion-icon name=\"fam-cloud-done\" *ngIf=\"module.downloadStatus == statusDownloaded\"\r\n                                            [attr.aria-label]=\"'core.downloaded' | translate\">\r\n                                        </ion-icon>{{ module.totalSize | coreBytesToSize }}\r\n                                    </ion-badge>\r\n                                    <ion-badge color=\"light\" *ngIf=\"module.calculatingSize\">\r\n                                        {{ 'core.calculating' | translate }}\r\n                                    </ion-badge>\r\n                                </ion-label>\r\n\r\n                                <div class=\"storage-buttons\" slot=\"end\">\r\n                                    <core-download-refresh *ngIf=\"downloadEnabled && module.handlerData?.showDownloadButton &&\r\n                                        module.downloadStatus != statusDownloaded\" [status]=\"module.downloadStatus\" [enabled]=\"true\"\r\n                                        [canTrustDownload]=\"true\" [loading]=\"module.spinner || module.handlerData.spinner\"\r\n                                        (action)=\"prefetchModule(module, section)\">\r\n                                    </core-download-refresh>\r\n                                    <ion-button fill=\"clear\" (click)=\"deleteForModule(module, section)\"\r\n                                        *ngIf=\"!module.calculatingSize && module.totalSize > 0\" color=\"danger\">\r\n                                        <ion-icon name=\"fas-trash\" slot=\"icon-only\"\r\n                                            [attr.aria-label]=\"'addon.storagemanager.deletedatafrom' | translate: { name: module.name }\">\r\n                                        </ion-icon>\r\n                                    </ion-button>\r\n                                </div>\r\n                            </ion-item>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ng-container>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/courses-storage/courses-storage.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/courses-storage/courses-storage.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.storagemanager.managedownloads' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <div class=\"ion-padding-horizontal ion-text-wrap\" *ngIf=\"spaceUsage\">\r\n            <h2>{{ 'addon.storagemanager.alldata' | translate }}</h2>\r\n        </div>\r\n        <ion-card *ngIf=\"spaceUsage\">\r\n            <ion-item class=\"ion-text-wrap total\">\r\n                <ion-label>\r\n                    <p class=\"item-heading ion-text-wrap\">{{ 'addon.storagemanager.totalspaceusage' | translate }}</p>\r\n                    <ion-badge color=\"light\" *ngIf=\"spaceUsage.spaceUsage\">{{ spaceUsage.spaceUsage | coreBytesToSize }}</ion-badge>\r\n                </ion-label>\r\n                <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"deleteSiteStorage($event)\"\r\n                    [hidden]=\"spaceUsage.spaceUsage! + spaceUsage.cacheEntries! <= 0\"\r\n                    [attr.aria-label]=\"'addon.storagemanager.deleteallsitedata' | translate\">\r\n                    <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <div class=\"ion-padding-horizontal ion-text-wrap\">\r\n            <h2>{{ 'addon.storagemanager.downloadedcourses' | translate }}</h2>\r\n        </div>\r\n        <ion-card>\r\n            <ion-item class=\"size courses ion-text-wrap\" lines=\"full\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.storagemanager.totalspaceusage' | translate }}</p>\r\n                    <ion-badge color=\"light\">{{ totalSize | coreBytesToSize }}</ion-badge>\r\n                </ion-label>\r\n                <ion-button slot=\"end\" (click)=\"deleteCompletelyDownloadedCourses($event)\"\r\n                    [disabled]=\"completelyDownloadedCourses.length === 0\" color=\"danger\" fill=\"clear\">\r\n                    <ion-icon name=\"fas-trash\" slot=\"icon-only\" ariaLabel=\"{{ 'addon.storagemanager.deletecourses' | translate }}\">\r\n                    </ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n            <ion-item *ngFor=\"let course of downloadedCourses\" class=\"course\" (click)=\"openCourse(course.id, course.title)\" button>\r\n                <ion-label class=\"ion-text-wrap\">\r\n                    <p class=\"item-heading\">{{ course.title }}</p>\r\n                    <p class=\"item-heading item-heading-secondary\" *ngIf=\"course.isDownloading\">\r\n                        {{ 'core.downloading' | translate }}\r\n                    </p>\r\n                    <ion-badge color=\"light\">\r\n                        {{ course.totalSize | coreBytesToSize }}\r\n                    </ion-badge>\r\n                </ion-label>\r\n                <ion-button slot=\"end\" (click)=\"deleteCourse($event, course)\" [disabled]=\"course.isDownloading\" color=\"danger\" fill=\"clear\">\r\n                    <ion-icon name=\"fas-trash\" slot=\"icon-only\" [attr.aria-label]=\"'addon.storagemanager.deletedatafrom' | translate:\r\n                            { name: course.title }\">\r\n                    </ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n        </ion-card>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/storagemanager/pages/course-storage/course-storage.scss":
/*!****************************************************************************!*\
  !*** ./src/addons/storagemanager/pages/course-storage/course-storage.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host {\n  --course-storage-max-activity-height: 120px;\n}\n:host ion-card ion-item {\n  --inner-padding-end: 0px;\n}\n:host ion-card.section ion-card-header {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n:host ion-card.section .item-heading {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n:host ion-card-content.hidden-content {\n  padding: 0;\n}\n:host .core-course-storage-activity ion-label h3 {\n  position: relative;\n  max-height: var(--course-storage-max-activity-height);\n}\n:host .core-course-storage-activity ion-label h3:before {\n  content: \"\";\n  height: 100%;\n  min-height: var(--course-storage-max-activity-height);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: linear-gradient(to bottom, rgba(var(--background-gradient-rgb), 0) calc(100% - 30px), rgba(var(--background-gradient-rgb), 1) calc(100% - 20px));\n  z-index: 6;\n  pointer-events: none;\n}\nion-badge {\n  margin-top: 8px;\n}\nion-badge ion-icon {\n  margin-right: 8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-badge ion-icon {\n    margin-right: unset;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\nion-item core-mod-icon {\n  --size: 18px;\n  padding: 9px;\n  --margin-vertical: 8px;\n  --margin-end: 8px;\n}\n.storage-buttons {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvYWRkb25zL3N0b3JhZ2VtYW5hZ2VyL3BhZ2VzL2NvdXJzZS1zdG9yYWdlL2NvdXJzZS1zdG9yYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7Ozs7RUFBQTtBQ0VBOzs7O0VBQUE7QUFrR0E7O0VBQUE7QUNwR0E7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUErREE7Ozs7RUFBQTtBQzdEQTtFQUNJLDJDQUFBO0FBb0RKO0FBbERJO0VBQ0ksd0JBQUE7QUFvRFI7QUFqREk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBbURSO0FBakRJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQW1EUjtBQWhESTtFQUNJLFVBQUE7QUFrRFI7QUEvQ0k7RUFDSSxrQkFBQTtFQUNBLHFEQUFBO0FBaURSO0FBL0NRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VMNlNOLE9LNVNvQztFTDZTcEMsUUs3UzJCO0VMc1UvQixNS3RVNEI7RUFDbEIsNEpBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFtRFo7QUE5Q0E7RUFDSSxlQUFBO0FBaURKO0FBaERJO0VMbU5BLGlCS2xOcUM7QUFrRHpDO0FMbUtNO0VBQ0U7SUFLSSxtQkFBQTtJQUtGLHVCS2hPK0I7SUxpTy9CLHNCS2pPK0I7RUF3RHZDO0FBQ0Y7QUFyREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUF3REo7QUFyREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUF3REoiLCJmaWxlIjoic3JjL2FkZG9ucy9zdG9yYWdlbWFuYWdlci9wYWdlcy9jb3Vyc2Utc3RvcmFnZS9jb3Vyc2Utc3RvcmFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXHJcbiAqL1xyXG5cclxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcclxuJGFzc2V0cy1wYXRoOiBcIi4uL2Fzc2V0c1wiO1xyXG5cclxuQGltcG9ydCBcIi4vaGVscGVycy9oZWxwZXJzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy5jdXN0b20uc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBzdHJpbmcgZnVuY3Rpb25zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3NcclxuICovXHJcblxyXG5cclxuLy8gU3RyaW5nIFV0aWxpdHkgRnVuY3Rpb25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBTdHJpbmcgUmVwbGFjZSBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiBcIlwiKSB7XHJcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gIEBpZiAkaW5kZXgge1xyXG4gICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyBTdHJpbmcgU3BsaXQgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5AZnVuY3Rpb24gc3RyLXNwbGl0KCRzdHJpbmcsICRzZXBhcmF0b3IpIHtcclxuICAvLyBlbXB0eSBhcnJheS9saXN0XHJcbiAgJHNwbGl0LWFycjogKCk7XHJcbiAgLy8gZmlyc3QgaW5kZXggb2Ygc2VwYXJhdG9yIGluIHN0cmluZ1xyXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xyXG4gIC8vIGxvb3AgdGhyb3VnaCBzdHJpbmdcclxuICBAd2hpbGUgJGluZGV4ICE9IG51bGwge1xyXG4gICAgLy8gZ2V0IHRoZSBzdWJzdHJpbmcgZnJvbSB0aGUgZmlyc3QgY2hhcmFjdGVyIHRvIHRoZSBzZXBhcmF0b3JcclxuICAgICRpdGVtOiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSk7XHJcbiAgICAvLyBwdXNoIGl0ZW0gdG8gYXJyYXlcclxuICAgICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkaXRlbSk7XHJcbiAgICAvLyByZW1vdmUgaXRlbSBhbmQgc2VwYXJhdG9yIGZyb20gc3RyaW5nXHJcbiAgICAkc3RyaW5nOiBzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgMSk7XHJcbiAgICAvLyBmaW5kIG5ldyBpbmRleCBvZiBzZXBhcmF0b3JcclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xyXG4gIH1cclxuICAvLyBhZGQgdGhlIHJlbWFpbmluZyBzdHJpbmcgdG8gbGlzdCAodGhlIGxhc3QgaXRlbSlcclxuICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJHN0cmluZyk7XHJcblxyXG4gIEByZXR1cm4gJHNwbGl0LWFycjtcclxufVxyXG5cclxuXHJcbi8vIFN0cmluZyBFeHRyYWN0IEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gc3RyLWV4dHJhY3QoJHN0cmluZywgJHN0YXJ0LCAkZW5kKSB7XHJcbiAgJHN0YXJ0LWluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHN0YXJ0KTtcclxuXHJcbiAgQGlmICRzdGFydC1pbmRleCB7XHJcbiAgICAkcG9zdDogc3RyLXNsaWNlKCRzdHJpbmcsICRzdGFydC1pbmRleCArIHN0ci1sZW5ndGgoJHN0YXJ0KSk7XHJcbiAgICAkZW5kLWluZGV4OiBzdHItaW5kZXgoJHBvc3QsICRlbmQpO1xyXG5cclxuICAgIEBpZiAkZW5kLWluZGV4IHtcclxuICAgICAgQHJldHVybiBzdHItc2xpY2UoJHBvc3QsIDEsICRlbmQtaW5kZXggLSAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbi8vIFN0cmluZyBDb250YWlucyBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1jb250YWlucygkc3RyaW5nLCAkbmVlZGxlKSB7XHJcbiAgQGlmICh0eXBlLW9mKCRzdHJpbmcpID09IHN0cmluZykge1xyXG4gICAgQHJldHVybiBzdHItaW5kZXgoJHN0cmluZywgJG5lZWRsZSkgIT0gbnVsbDtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vLyBVUkwgRW5jb2RlIEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gdXJsLWVuY29kZSgkdmFsKSB7XHJcbiAgJHNwYWNlczogc3RyLXJlcGxhY2UoJHZhbCwgXCIgXCIsIFwiJTIwXCIpO1xyXG4gICRlbmNvZGVkOiBzdHItcmVwbGFjZSgkc3BhY2VzLCBcIiNcIiwgXCIlMjNcIik7XHJcbiAgQHJldHVybiAkZW5jb2RlZDtcclxufVxyXG5cclxuXHJcbi8vIEFkZCBSb290IFNlbGVjdG9yXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFkZHMgYSByb290IHNlbGVjdG9yIHVzaW5nIGhvc3QtY29udGV4dCBiYXNlZCBvbiB0aGUgc2VsZWN0b3IgcGFzc2VkXHJcbi8vXHJcbi8vIEV4YW1wbGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3RcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKVxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC5maXhlZClcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5maXhlZClcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5maXhlZFxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1iYWRnZSlcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24taGlkZSA6OnNsb3R0ZWQoaW9uLWJhZGdlKVxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIi5zaGFkb3dcIilcclxuLy8gLS0+IFtkaXI9cnRsXSAuc2hhZG93XHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNoYWRvd1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIGFkZC1yb290LXNlbGVjdG9yKCRyb290LCAkYWRkSG9zdFNlbGVjdG9yKSB7XHJcbiAgJHNlbGVjdG9yczogc3RyLXNwbGl0KCRyb290LCBcIixcIik7XHJcblxyXG4gICRsaXN0OiAoKTtcclxuXHJcbiAgQGVhY2ggJHNlbGVjdG9yIGluICRzZWxlY3RvcnMge1xyXG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0KCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcgYSBjbGFzcyBvbiB0aGUgaG9zdFxyXG4gICAgLy8gZWxlbWVudCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBob3cgd2UgdGFyZ2V0IGl0XHJcbiAgICBAaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdChcIikge1xyXG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pOmhvc3QoXCIpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcclxuXHJcbiAgICAgICRuZXctZWxlbWVudDogKCk7XHJcbiAgICAgICRlbGVtZW50czogc3RyLXNwbGl0KCRzZWxlY3RvciwgXCIgXCIpO1xyXG5cclxuICAgICAgQGVhY2ggJGVsZW1lbnQgaW4gJGVsZW1lbnRzIHtcclxuICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIjpob3N0KFwiKSB7XHJcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6ICRlbGVtZW50O1xyXG5cclxuICAgICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiKSlcIikge1xyXG4gICAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCIpKVwiLCBcIilcIik7XHJcbiAgICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKVwiLCBcIlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XHJcblxyXG4gICAgICAgICAgJG5ldy1lbGVtZW50OiBhcHBlbmQoJG5ldy1lbGVtZW50LCAkc2NvcGVkLWVsZW1lbnQsIHNwYWNlKTtcclxuICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJGVsZW1lbnQsIHNwYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRuZXctZWxlbWVudCwgY29tbWEpO1xyXG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0IGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBqdXN0IHRoZSBob3N0XHJcbiAgICAvLyBlbGVtZW50IHNvIHdlIGNhbiBjaGFuZ2UgaXQgdG8gbG9vayBmb3IgaG9zdC1jb250ZXh0XHJcbiAgICB9IEBlbHNlIGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3RcIikge1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIiwgY29tbWEpO1xyXG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XHJcbiAgICAvLyBvciBub3JtYWwgZWxlbWVudCBzbyBhcHBlbmQgYm90aCB0aGUgZGlyIGNoZWNrIGFuZCBob3N0LWNvbnRleHRcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIiN7JGFkZEhvc3RTZWxlY3Rvcn0gI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRsaXN0O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBjb2xvciBmdW5jdGlvbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5jb2xvci5zY3NzXHJcbiAqL1xyXG5cclxuLy8gR2V0cyB0aGUgYWN0aXZlIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gYSB2YXJpYXRpb24uIEFscGhhIGlzIG9wdGlvbmFsLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG4vLyBjdXJyZW50LWNvbG9yKGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1iYXNlKVxyXG4vLyBjdXJyZW50LWNvbG9yKGNvbnRyYXN0LCAwLjEpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksIDAuMSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGN1cnJlbnQtY29sb3IoJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsKSB7XHJcbiAgQGlmICRhbHBoYSA9PSBudWxsIHtcclxuICAgIEByZXR1cm4gdmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0pO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiByZ2JhKHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259LXJnYiksICN7JGFscGhhfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBHZXRzIHRoZSBzcGVjaWZpYyBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIHRoZSBuYW1lIGFuZCB2YXJpYXRpb24uIEFscGhhL3JnYiBhcmUgb3B0aW9uYWwuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEV4YW1wbGUgdXNhZ2U6XHJcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZilcclxuLy8gaW9uLWNvbG9yKHNlY29uZGFyeSwgY29udHJhc3QpID0+IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpXHJcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlLCAwLjUpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpLCAwLjUpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBpb24tY29sb3IoJG5hbWUsICR2YXJpYXRpb24sICRhbHBoYTogbnVsbCwgJHJnYjogbnVsbCkge1xyXG4gICR2YWx1ZXM6IG1hcC1nZXQoJGNvbG9ycywgJG5hbWUpO1xyXG4gICR2YWx1ZTogbWFwLWdldCgkdmFsdWVzLCAkdmFyaWF0aW9uKTtcclxuICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9LSN7JHZhcmlhdGlvbn07XHJcblxyXG4gIEBpZiAoJHZhcmlhdGlvbiA9PSBiYXNlKSB7XHJcbiAgICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9O1xyXG4gIH1cclxuXHJcbiAgQGlmICgkYWxwaGEpIHtcclxuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcclxuICAgIEByZXR1cm4gcmdiYSh2YXIoI3skdmFyaWFibGV9LXJnYiwgJHZhbHVlKSwgJGFscGhhKTtcclxuICB9XHJcbiAgQGlmICgkcmdiKSB7XHJcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XHJcbiAgICAkdmFyaWFibGU6ICN7JHZhcmlhYmxlfS1yZ2I7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIHZhcigjeyR2YXJpYWJsZX0sICR2YWx1ZSk7XHJcbn1cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlKCRjb2xvcikge1xyXG4gIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgMTIlKTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci10aW50KCRjb2xvcikge1xyXG4gIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgMTAlKTtcclxufVxyXG5cclxuLy8gQ29udmVydHMgYSBjb2xvciB0byBhIGNvbW1hIHNlcGFyYXRlZCByZ2IuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBjb2xvci10by1yZ2ItbGlzdCgkY29sb3IpIHtcclxuICBAcmV0dXJuICN7cmVkKCRjb2xvcil9LCN7Z3JlZW4oJGNvbG9yKX0sI3tibHVlKCRjb2xvcil9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXHJcbiAqL1xyXG5cclxuQG1peGluIGlucHV0LWNvdmVyKCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xyXG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG5cclxuICBvcGFjaXR5OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBjb250ZW50OiBcIlwiO1xyXG5cclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4vLyBGb250IHNtb290aGluZ1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XHJcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XHJcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xyXG5cclxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcclxufVxyXG5cclxuXHJcbi8vIEJyZWFrcG9pbnQgTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cclxuLy9cclxuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxyXG4vL1xyXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXHJcbi8vXHJcbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICA1NzZweFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XHJcblxyXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xyXG59XHJcblxyXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXHJcbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcclxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgXCItc21cIlxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XHJcbiAgQGlmICRtaW4ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxyXG4vLyAgICBtZFxyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIG1kXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXHJcbi8vICAgIG1kXHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcclxuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcclxuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcclxufVxyXG5cclxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxyXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2ZcclxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxyXG4vL1xyXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XHJcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cclxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICA3NjcuOThweFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XHJcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXHJcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG4gIEBpZiAkbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcclxuLy9cclxuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xyXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtdWx0aS1kaXIoKSB7XHJcbiAgQGNvbnRlbnQ7XHJcblxyXG4gIC8vICRyb290OiAjeyZ9O1xyXG4gIC8vIEBhdC1yb290IFtkaXJdIHtcclxuICAvLyAgICN7JHJvb3R9IHtcclxuICAvLyAgICAgQGNvbnRlbnQ7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59XHJcblxyXG5AbWl4aW4gcnRsKCkge1xyXG4gICRyb290OiAjeyZ9O1xyXG5cclxuICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcIltkaXI9cnRsXVwiKX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbHRyKCkge1xyXG4gIEBjb250ZW50O1xyXG59XHJcblxyXG5cclxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xyXG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XHJcbiAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcclxuXHJcbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XHJcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XHJcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcclxuXHJcbiAgICBAaW5jbHVkZSBsdHIgKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xyXG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xyXG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XHJcblxyXG4gIH0gQGVsc2Uge1xyXG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xyXG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XHJcblxyXG4gICAgQGF0LXJvb3Qge1xyXG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xyXG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xyXG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xyXG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XHJcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcclxuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xyXG4gICN7JHByb3B9LXRvcDogJHRvcDtcclxuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xyXG4gIEBpZiAkc3RhcnQgPT0gJGVuZCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGxlZnQ6ICRzdGFydDtcclxuICAgICAgcmlnaHQ6ICRlbmQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGxlZnQ6ICRzdGFydDtcclxuICAgICAgcmlnaHQ6ICRlbmQ7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgICByaWdodDogdW5zZXQ7XHJcblxyXG4gICAgICBsZWZ0OiAkZW5kO1xyXG4gICAgICByaWdodDogJHN0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcclxuICB0b3A6ICR0b3A7XHJcbiAgYm90dG9tOiAkYm90dG9tO1xyXG59XHJcblxyXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xyXG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXHJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xyXG4gICRvdGhlci1kaXI6IG51bGw7XHJcblxyXG4gIEBpZiAkZGlyID09IGx0ciB7XHJcbiAgICAkb3RoZXItZGlyOiBydGw7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAkb3RoZXItZGlyOiBsdHI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICBkaXJlY3Rpb246ICRkaXI7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxyXG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcclxuICBAaWYgJHNpZGUgPT0gc3RhcnQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xyXG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xyXG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xyXG4gICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xyXG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcclxuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xyXG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XHJcbiAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcclxuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcclxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xyXG4gICRleHRyYTogbnVsbDtcclxuXHJcbiAgJHg6IG51bGw7XHJcbiAgJGx0ci10cmFuc2xhdGU6IG51bGw7XHJcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XHJcblxyXG4gIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xyXG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XHJcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcclxuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcclxuXHJcbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XHJcblxyXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XHJcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcclxuICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xyXG5cclxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xyXG4gICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xyXG4gICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcclxuICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1MgZnJvbSBkaWZmZXJlbnQgY29tcG9uZW50c1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5taXhpbnMuc2Nzc1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9pdGVtL2l0ZW0ubWl4aW5zLnNjc3NcclxuICovXHJcblxyXG4vLyBSZXNwb25zaXZlIE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGdyaWQgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG1ha2UtZ3JpZC13aWR0aHMoJHdpZHRoczogJGdyaWQtd2lkdGhzLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICBAZWFjaCAkYnJlYWtwb2ludCwgJHdpZHRoIGluICR3aWR0aHMge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XHJcbiAgICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vLyBBZGRzIHBhZGRpbmcgdG8gdGhlIGVsZW1lbnQgYmFzZWQgb24gYnJlYWtwb2ludHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbWFrZS1icmVha3BvaW50LXBhZGRpbmcoJHBhZGRpbmdzKSB7XHJcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHBhZGRpbmdzKSB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XHJcbiAgICAgICRwYWRkaW5nOiBtYXAtZ2V0KCRwYWRkaW5ncywgJGJyZWFrcG9pbnQpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gSXRlbSBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBpdGVtLXB1c2gtc3ZnLXVybCgkZmlsbCkge1xyXG4gICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xyXG5cclxuICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsIHRydWUpO1xyXG59XHJcbiIsIkB1c2UgXCJzYXNzOm1hdGhcIiBhcyBtYXRoO1xyXG5cclxuLyoqXHJcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cclxuICovXHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cclxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgNi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDQ4JSkge1xyXG4gICAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAkcGVyY2VudCk7XHJcbiAgfVxyXG5cclxuICAvLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4gIC8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIC0xMC5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEBmdW5jdGlvbiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDgwJSkge1xyXG4gICAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudCk7XHJcbiAgfVxyXG5cclxuICAvLyBJb25pYyBDb2xvcnNcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxyXG4gIC8vIGNvbG9ycyBtYXBcclxuXHJcbiAgQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzKSB7XHJcbiAgICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICAgICAgJGxpZ2h0OiBtYXAtZ2V0KCRiYXNlLCAnbGlnaHQnKTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkbGlnaHQpO1xyXG5cclxuICAgICAgYm9keS5kYXJrIHtcclxuICAgICAgICAgICRkYXJrOiBtYXAtZ2V0KCRiYXNlLCAnZGFyaycpO1xyXG4gICAgICAgICAgJGRhcms6IG1peCgkbGlnaHQsIHdoaXRlLCA4MCUpICFkZWZhdWx0O1xyXG4gICAgICAgICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRkYXJrKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xyXG4gICAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XHJcbiAgICAgICRzaGFkZTogZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGJhc2UpO1xyXG4gICAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XHJcblxyXG4gICAgICAtLSN7JGNvbG9yLW5hbWV9OiAjeyRiYXNlfTtcclxuICAgICAgLS0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xyXG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xyXG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcblxyXG4gICAgICAvLyBJbnRlcm5hbCBpb25pYyB1c2Ugb25seS5cclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRiYXNlKX07XHJcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XHJcblxyXG4gICAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAgIC0taW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xyXG4gICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xyXG4gICAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcclxuICAgICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QpO1xyXG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcclxuICAgICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xyXG4gICAgICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiBAbWl4aW4gY29yZS1mb2N1cygpIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcclxuICAgIH1cclxuIH1cclxuXHJcbiBAbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcclxuICAgIC8vIGJvcmRlcjogdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgc29saWQgdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLXRyYW5zaXRpb24oJHByb3BlcnRpZXM6IGFsbCwgJGR1cmF0aW9uOiA1MDBtcywgJHRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQpIHtcclxuICAgICR0cmFuc2l0aW9uczogKCk7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAkdHJhbnNpdGlvbnM6IGFwcGVuZCgkdHJhbnNpdGlvbnMsICRwcm9wZXJ0eSAkZHVyYXRpb24gJHRpbWluZy1mdW5jdGlvbiwgY29tbWEpO1xyXG4gICAgfVxyXG5cclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xyXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogU2FtZSBhcyBpdGVtLXB1c2gtc3ZnLXVybCBidXQgYWRtaXRzIGZsaXAtcnRsXHJcbiAqL1xyXG5AbWl4aW4gcHVzaC1hcnJvdy1jb2xvcigkZmlsbDogNjI2MjYyLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcclxuXHJcbiAgICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsICRmbGlwLXJ0bCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgJHB4ICR0eXBlICRjb2xvciwgbnVsbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsIG51bGwsICRweCAkdHlwZSAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpIHtcclxuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skcHh9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgIH1cclxuICAgIEBpZiAoJHN0YXJ0KSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tZW5kKCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcclxuXHJcbiAgICBAaWYgKCRlbmQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgfVxyXG4gICAgQGlmICgkc3RhcnQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1zdGFydCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbigkdG9wLCAkc2FmZS1hcmVhLWVuZCwgJGJvdHRvbSwgJHNhZmUtYXJlYS1zdGFydCk7XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIH1cclxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGFya21vZGUoKSB7XHJcbiAgICAkcm9vdDogI3smfTtcclxuXHJcbiAgICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcImJvZHkuZGFya1wiKX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcclxuICAgIGZsZXg6IDAgMCAkd2lkdGg7XHJcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDb2xvciBtaXhpbnMuXHJcbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcclxuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGJldHRlciBjb2xvciBjb250cmFzdCB1c2luZyBXQ0FHIGFsZ29yeXRobS5cclxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcclxuICAgICRsdW1pYW5jZTogbHVtaW5hbmNlKCRjb2xvcik7XHJcblxyXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMS5cclxuICAgICR3aGl0ZUNvbnRyYXN0OiAoJGx1bWlhbmNlICsgMC4wNSkgLyAoMSArIDAuMDUpO1xyXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMC5cclxuICAgICRibGFja0NvbnRyYXN0OiAoMC4wNSkgLyAoJGx1bWlhbmNlICsgMC4wNSk7XHJcblxyXG4gICAgQHJldHVybiBpZigkd2hpdGVDb250cmFzdCA8ICRibGFja0NvbnRyYXN0LCB3aGl0ZSwgYmxhY2spO1xyXG59XHJcblxyXG4vLyBDb2xvciBjb250cmFzdCB1c2luZyB5aXEgYXByb3hpbWF0aW9uIHdpdGggMTUwIHRocmVzaG9sZC5cclxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcl95aXEoJGNvbG9yLCAkZGFyazogYmxhY2ssICRsaWdodDogd2hpdGUpIHtcclxuICAgICRyOiByZWQoJGNvbG9yKTtcclxuICAgICRnOiBncmVlbigkY29sb3IpO1xyXG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcclxuXHJcbiAgICAkeWlxOiAoKCRyICogMjk5KSArICgkZyAqIDU4NykgKyAoJGIgKiAxMTQpKSAvIDEwMDA7XHJcblxyXG4gICAgQHJldHVybiBpZigkeWlxID49IDEyOCwgJGRhcmssICRsaWdodCk7XHJcbn1cclxuXHJcbi8vIFdDQUcgY29udHJhc3QgYWxnb3J5dGhtXHJcbkBmdW5jdGlvbiBjaGVjay1jb250cmFzdCgkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcclxuICAgICRmb3JlZ3JvdW5kTHVtaWFuY2U6IGx1bWluYW5jZSgkZm9yZWdyb3VuZCk7XHJcbiAgICAkYmFja2dyb3VuZEx1bWluYW5jZTogbHVtaW5hbmNlKCRiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICBAaWYgKCRiYWNrZ3JvdW5kTHVtaW5hbmNlIDwgJGZvcmVncm91bmRMdW1pYW5jZSkge1xyXG4gICAgICAgIEByZXR1cm4gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSkgLyAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQHJldHVybiAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpIC8gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBsdW1pbmFuY2UoJGNvbG9yKSB7XHJcbiAgICAkcjogcmVkKCRjb2xvcik7XHJcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcclxuICAgICRiOiBibHVlKCRjb2xvcik7XHJcblxyXG4gICAgJHI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJHIpO1xyXG4gICAgJGc6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGcpO1xyXG4gICAgJGI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGIpO1xyXG5cclxuICAgIEByZXR1cm4gJHIgKiAwLjIxMjYgKyAkZyAqIDAuNzE1MiArICRiICogMC4wNzIyO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gY29tcG9uZW50LWx1bWluYW5jZSgkdmFsdWUpIHtcclxuICAgICR2YWx1ZTogJHZhbHVlIC8gMjU1O1xyXG5cclxuICAgIEBpZiAoJHZhbHVlIDw9IDAuMDM5MjgpIHtcclxuICAgICAgICBAcmV0dXJuICR2YWx1ZSAvIDEyLjkyO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQHJldHVybiBtYXRoLnBvdygoJHZhbHVlICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cclxuICovXHJcbiIsIi8qXHJcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiR3aGl0ZTogICAgICAgI2ZmZmZmZiAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAgICAjZjhmOWZhICFkZWZhdWx0O1xyXG4kZ3JheS0yMDA6ICAgICNlOWVjZWYgIWRlZmF1bHQ7XHJcbiRncmF5LTMwMDogICAgI2RlZTJlNiAhZGVmYXVsdDsgLy8gU3Ryb2tlXHJcbiRncmF5LTQwMDogICAgI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAgICAjOGY5NTllICFkZWZhdWx0OyAvLyBTdHJva2Ugb24gaW5wdXRzXHJcbiRncmF5LTYwMDogICAgIzZhNzM3YiAhZGVmYXVsdDtcclxuJGdyYXktNzAwOiAgICAjNDk1MDU3ICFkZWZhdWx0O1xyXG4kZ3JheS04MDA6ICAgICMzNDNhNDAgIWRlZmF1bHQ7XHJcbiRncmF5LTkwMDogICAgIzFkMjEyNSAhZGVmYXVsdDsgLy8gQ29weSB0ZXh0XHJcbiRibGFjazogICAgICAgIzAwMDAwMCAhZGVmYXVsdDsgLy8gQXZvaWQgdXNhZ2VcclxuXHJcbiRibHVlOiAgICAgICAgIzBmNmNiZiAhZGVmYXVsdDtcclxuJGN5YW46ICAgICAgICAjMDA4MTk2ICFkZWZhdWx0OyAvLyBOb3QgdXNlZC5cclxuJGdyZWVuOiAgICAgICAjMzU3YTMyICFkZWZhdWx0O1xyXG4kcmVkOiAgICAgICAgICNjYTMxMjAgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcclxuXHJcbiRicmFuZC1jb2xvcjogI2ZmNzUxOCAhZGVmYXVsdDtcclxuXHJcbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLWRhcmstcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgICRncmF5LTkwMCAhZGVmYXVsdDsgLy8gIzFhMWExYVxyXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLXJnYjogIGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kKSAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJG1lZGl1bTogICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuXHJcbiRjb2xvcnM6ICAoXHJcbiAgICBwcmltYXJ5OiAobGlnaHQ6ICRwcmltYXJ5LCBkYXJrOiAkcHJpbWFyeSksXHJcbiAgICBzZWNvbmRhcnk6IChsaWdodDogJHNlY29uZGFyeSwgZGFyazogJGdyYXktNzAwKSxcclxuICAgIHN1Y2Nlc3M6IChsaWdodDogJHN1Y2Nlc3MpLFxyXG4gICAgd2FybmluZzogKGxpZ2h0OiAkd2FybmluZyksXHJcbiAgICBkYW5nZXI6ICAobGlnaHQ6ICRkYW5nZXIpLFxyXG4gICAgaW5mbzogKGxpZ2h0OiAkaW5mbyksXHJcbiAgICBsaWdodDogKGxpZ2h0OiAkbGlnaHQsIGRhcms6ICRkYXJrKSxcclxuICAgIG1lZGl1bTogKGxpZ2h0OiAkbWVkaXVtLCBkYXJrOiAkZ3JheS0yMDApLFxyXG4gICAgZGFyazogKGxpZ2h0OiAkZGFyaywgZGFyazogJGxpZ2h0KSxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcclxuICpcclxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXHJcbiAqL1xyXG5cclxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcclxuICAgIHhzOiAwLFxyXG4gICAgc206IDU3NnB4LFxyXG4gICAgbWQ6IDc2OHB4LFxyXG4gICAgbGc6IDk5MnB4LFxyXG4gICAgdGFibGV0OiA5OTJweCxcclxuICAgIHhsOiAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xyXG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XHJcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWhpZGUtY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcclxuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxyXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbW9yZSBwYWdlLiAoZGVwcmVjYXRlZCBvbiA0LjApXHJcbiRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbzogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLW1vcmUtaGlkZS1zaXRldXJsOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdXNlciBwYWdlLlxyXG4kY29yZS11c2VyLWhpZGUtc2l0ZWluZm86ICRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbyAhZGVmYXVsdDtcclxuJGNvcmUtdXNlci1oaWRlLXNpdGVuYW1lOiAkY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWUgIWRlZmF1bHQ7XHJcbiRjb3JlLXVzZXItaGlkZS1zaXRldXJsOiAkY29yZS1tb3JlLWhpZGUtc2l0ZXVybCAhZGVmYXVsdDtcclxuXHJcbi8vIEFjdGl2aXR5IGljb24gYmFja2dyb3VuZCBjb2xvcnMuXHJcbiRhY3Rpdml0eS1pY29uLWNvbG9yczogKFxyXG4gICAgYWRtaW5pc3RyYXRpb246ICM1ZDYzZjYsXHJcbiAgICBhc3Nlc3NtZW50OiAjZWI2NmEyLFxyXG4gICAgY29sbGFib3JhdGlvbjogI2Y3NjM0ZCxcclxuICAgIGNvbW11bmljYXRpb246ICMxMWE2NzYsXHJcbiAgICBjb250ZW50OiAjMzk5YmUyLFxyXG4gICAgaW50ZXJmYWNlOiAjYTM3OGZmXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBDYWxlbmRhciBldmVudCBjYXRlZ29yeSBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvbG9yczogKFxyXG4gICAgY2F0ZWdvcnk6ICM4ZTI0YWEsXHJcbiAgICBjb3Vyc2U6ICRyZWQsXHJcbiAgICBncm91cDogJHllbGxvdyxcclxuICAgIHVzZXI6ICRibHVlLFxyXG4gICAgc2l0ZTogJGdyZWVuXHJcbikgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFsc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgLS1jb3Vyc2Utc3RvcmFnZS1tYXgtYWN0aXZpdHktaGVpZ2h0OiAxMjBweDtcclxuXHJcbiAgICBpb24tY2FyZCBpb24taXRlbSB7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLnNlY3Rpb24gaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC5zZWN0aW9uIC5pdGVtLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQuaGlkZGVuLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcmUtY291cnNlLXN0b3JhZ2UtYWN0aXZpdHkgaW9uLWxhYmVsIGgzIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogdmFyKC0tY291cnNlLXN0b3JhZ2UtbWF4LWFjdGl2aXR5LWhlaWdodCk7XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogdmFyKC0tY291cnNlLXN0b3JhZ2UtbWF4LWFjdGl2aXR5LWhlaWdodCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgbnVsbCwgMCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEodmFyKC0tYmFja2dyb3VuZC1ncmFkaWVudC1yZ2IpLCAwKSBjYWxjKDEwMCUgLSAzMHB4KSwgcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWdyYWRpZW50LXJnYiksIDEpIGNhbGMoMTAwJSAtIDIwcHgpKTtcclxuICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tYmFkZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsIDhweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtIGNvcmUtbW9kLWljb24ge1xyXG4gICAgLS1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgLS1tYXJnaW4tdmVydGljYWw6IDhweDtcclxuICAgIC0tbWFyZ2luLWVuZDogOHB4O1xyXG59XHJcblxyXG4uc3RvcmFnZS1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/addons/storagemanager/pages/course-storage/course-storage.ts":
/*!**************************************************************************!*\
  !*** ./src/addons/storagemanager/pages/course-storage/course-storage.ts ***!
  \**************************************************************************/
/*! exports provided: AddonStorageManagerCourseStoragePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonStorageManagerCourseStoragePage", function() { return AddonStorageManagerCourseStoragePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/services/module-prefetch-delegate */ "./src/core/features/course/services/module-prefetch-delegate.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.














/**
 * Page that displays the amount of file storage used by each activity on the course, and allows
 * the user to prefecth and delete this data.
 */
let AddonStorageManagerCourseStoragePage = class AddonStorageManagerCourseStoragePage {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.title = '';
        this.loaded = false;
        this.sections = [];
        this.totalSize = 0;
        this.calculatingSize = true;
        this.downloadEnabled = false;
        this.downloadCourseEnabled = false;
        this.prefetchCourseData = {
            icon: _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING,
            statusTranslatable: 'core.course.downloadcourse',
            status: '',
            loading: true,
        };
        this.statusDownloaded = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].DOWNLOADED;
        this.isDestroyed = false;
        this.isGuest = false;
        // Refresh the enabled flags if site is updated.
        this.siteUpdatedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].SITE_UPDATED, () => {
            this.downloadCourseEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isDownloadCourseDisabledInSite();
            this.downloadEnabled = !_services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getRequiredCurrentSite().isOfflineDisabled();
            this.initCoursePrefetch();
            this.initModulePrefetch();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteId());
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRequiredRouteParam('courseId');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].back();
                return;
            }
            this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('title') || '';
            if (!this.title && this.courseId == _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteHomeId()) {
                this.title = _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.sitehome.sitehome');
            }
            this.isGuest = !!_services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteBooleanParam('isGuest');
            this.initialSectionId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('sectionId');
            this.downloadCourseEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isDownloadCourseDisabledInSite();
            this.downloadEnabled = !_services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getRequiredCurrentSite().isOfflineDisabled();
            const sections = (yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getSections(this.courseId, false, true))
                .filter((section) => !_features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].isSectionStealth(section));
            this.sections = (yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].addHandlerDataForModules(sections, this.courseId)).sections
                .map(section => (Object.assign(Object.assign({}, section), { totalSize: 0, calculatingSize: true, expanded: section.id === this.initialSectionId, modules: section.modules.map(module => (Object.assign(Object.assign({}, module), { calculatingSize: true }))) })));
            this.loaded = true;
            _singletons_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDom"].scrollToElement(this.elementRef.nativeElement, '.core-course-storage-section-expanded', { addYAxis: -10 });
            yield Promise.all([
                this.initSizes(),
                this.initCoursePrefetch(),
                this.initModulePrefetch(),
            ]);
        });
    }
    /**
     * Init course prefetch information.
     *
     * @return Promise resolved when done.
     */
    initCoursePrefetch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.downloadCourseEnabled || this.courseStatusObserver) {
                return;
            }
            // Listen for changes in course status.
            this.courseStatusObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].COURSE_STATUS_CHANGED, (data) => {
                if (data.courseId == this.courseId || data.courseId == _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourseProvider"].ALL_COURSES_CLEARED) {
                    this.updateCourseStatus(data.status);
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteId());
            // Determine the course prefetch status.
            yield this.determineCoursePrefetchIcon();
            if (this.prefetchCourseData.icon != _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING) {
                return;
            }
            // Course is being downloaded. Get the download promise.
            const promise = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].getCourseDownloadPromise(this.courseId);
            if (promise) {
                // There is a download promise. Show an error if it fails.
                promise.catch((error) => {
                    if (!this.isDestroyed) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
                    }
                });
            }
            else {
                // No download, this probably means that the app was closed while downloading. Set previous status.
                const status = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].setCoursePreviousStatus(this.courseId);
                this.updateCourseStatus(status);
            }
        });
    }
    /**
     * Init module prefetch information.
     *
     * @return Promise resolved when done.
     */
    initModulePrefetch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.downloadEnabled || this.sectionStatusObserver) {
                return;
            }
            // Listen for section status changes.
            this.sectionStatusObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].SECTION_STATUS_CHANGED, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.downloadEnabled || !this.sections.length || !data.sectionId || data.courseId != this.courseId) {
                    return;
                }
                // Check if the affected section is being downloaded.
                // If so, we don't update section status because it'll already be updated when the download finishes.
                const downloadId = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].getSectionDownloadId({ id: data.sectionId });
                if (_features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].isBeingDownloaded(downloadId)) {
                    return;
                }
                // Get the affected section.
                const section = this.sections.find(section => section.id == data.sectionId);
                if (!section) {
                    return;
                }
                // Recalculate the status.
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].calculateSectionStatus(section, this.courseId, false);
                if (section.isDownloading && !_features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].isBeingDownloaded(downloadId)) {
                    // All the modules are now downloading, set a download all promise.
                    this.prefecthSection(section);
                }
            }), _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteId());
            // The download status of a section might have been changed from within a module page.
            _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].calculateSectionsStatus(this.sections, this.courseId, false, false);
            this.sections.forEach((section) => {
                section.modules.forEach((module) => {
                    var _a;
                    if ((_a = module.handlerData) === null || _a === void 0 ? void 0 : _a.showDownloadButton) {
                        module.spinner = true;
                        // Listen for changes on this module status, even if download isn't enabled.
                        module.prefetchHandler = _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getPrefetchHandlerFor(module.modname);
                        this.calculateModuleStatus(module);
                    }
                });
            });
            this.moduleStatusObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].PACKAGE_STATUS_CHANGED, (data) => {
                let module;
                this.sections.some((section) => {
                    module = section.modules.find((module) => { var _a; return module.id == data.componentId && module.prefetchHandler && data.component == ((_a = module.prefetchHandler) === null || _a === void 0 ? void 0 : _a.component); });
                    return !!module;
                });
                if (!module) {
                    return;
                }
                // Call determineModuleStatus to get the right status to display.
                const status = _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].determineModuleStatus(module, data.status);
                // Update the status.
                this.updateModuleStatus(module, status);
            }, _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteId());
        });
    }
    /**
     * Init section, course and modules sizes.
     */
    initSizes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Promise.all(this.sections.map((section) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield Promise.all(section.modules.map((module) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // Note: This function only gets the size for modules which are downloadable.
                    // For other modules it always returns 0, even if they have downloaded some files.
                    // However there is no 100% reliable way to actually track the files in this case.
                    // You can maybe guess it based on the component and componentid.
                    // But these aren't necessarily consistent, for example mod_frog vs mmaModFrog.
                    // There is nothing enforcing correct values.
                    // Most modules which have large files are downloadable, so I think this is sufficient.
                    const size = yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getModuleStoredSize(module, this.courseId);
                    // There are some cases where the return from this is not a valid number.
                    if (!isNaN(size)) {
                        module.totalSize = Number(size);
                        section.totalSize += size;
                        this.totalSize += size;
                    }
                    module.calculatingSize = false;
                })));
                section.calculatingSize = false;
            })));
            this.calculatingSize = false;
            // Mark course as not downloaded if course size is 0.
            if (this.totalSize == 0) {
                this.markCourseAsNotDownloaded();
            }
        });
    }
    /**
     * Update the sizes of some modules.
     *
     * @param modules Modules.
     * @param section Section the modules belong to.
     * @return Promise resolved when done.
     */
    updateModulesSizes(modules, section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.calculatingSize = true;
            yield Promise.all(modules.map((module) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                if (module.calculatingSize) {
                    return;
                }
                module.calculatingSize = true;
                if (!section) {
                    section = this.sections.find((section) => section.modules.some((mod) => mod.id === module.id));
                    if (section) {
                        section.calculatingSize = true;
                    }
                }
                try {
                    const size = yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getModuleStoredSize(module, this.courseId);
                    const diff = (isNaN(size) ? 0 : size) - ((_a = module.totalSize) !== null && _a !== void 0 ? _a : 0);
                    module.totalSize = Number(size);
                    this.totalSize += diff;
                    if (section) {
                        section.totalSize += diff;
                    }
                }
                catch (_b) {
                    // Ignore errors, it shouldn't happen.
                }
                finally {
                    module.calculatingSize = false;
                }
            })));
            this.calculatingSize = false;
            if (section) {
                section.calculatingSize = false;
            }
        });
    }
    /**
     * The user has requested a delete for the whole course data.
     *
     * (This works by deleting data for each module on the course that has data.)
     */
    deleteForCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm('addon.storagemanager.confirmdeletedatafrom', { name: this.title });
            }
            catch (error) {
                if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].isCanceledError(error)) {
                    throw error;
                }
                return;
            }
            const modules = [];
            this.sections.forEach((section) => {
                section.modules.forEach((module) => {
                    if (module.totalSize && module.totalSize > 0) {
                        modules.push(module);
                    }
                });
            });
            this.deleteModules(modules);
        });
    }
    /**
     * The user has requested a delete for a section's data.
     *
     * (This works by deleting data for each module in the section that has data.)
     *
     * @param section Section object with information about section and modules
     */
    deleteForSection(section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm('addon.storagemanager.confirmdeletedatafrom', { name: section.name });
            }
            catch (error) {
                if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].isCanceledError(error)) {
                    throw error;
                }
                return;
            }
            const modules = [];
            section.modules.forEach((module) => {
                if (module.totalSize && module.totalSize > 0) {
                    modules.push(module);
                }
            });
            this.deleteModules(modules, section);
        });
    }
    /**
     * The user has requested a delete for a module's data
     *
     * @param module Module details
     * @param section Section the module belongs to.
     */
    deleteForModule(module, section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (module.totalSize === 0) {
                return;
            }
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm('addon.storagemanager.confirmdeletedatafrom', { name: module.name });
            }
            catch (error) {
                if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].isCanceledError(error)) {
                    throw error;
                }
                return;
            }
            this.deleteModules([module], section);
        });
    }
    /**
     * Deletes the specified modules, showing the loading overlay while it happens.
     *
     * @param modules Modules to delete
     * @param section Section the modules belong to.
     * @return Promise<void> Once deleting has finished
     */
    deleteModules(modules, section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.deleting', true);
            const promises = [];
            modules.forEach((module) => {
                // Remove the files.
                const promise = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].removeModuleStoredData(module, this.courseId).then(() => {
                    const moduleSize = module.totalSize || 0;
                    // When the files and cache are removed, update the size.
                    if (section) {
                        section.totalSize -= moduleSize;
                    }
                    this.totalSize -= moduleSize;
                    module.totalSize = 0;
                    return;
                });
                promises.push(promise);
            });
            try {
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.errordeletefile'));
            }
            finally {
                modal.dismiss();
                yield this.updateModulesSizes(modules, section);
                _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].calculateSectionsStatus(this.sections, this.courseId, false, false);
            }
        });
    }
    /**
     * Mark course as not downloaded.
     */
    markCourseAsNotDownloaded() {
        // @TODO This is a workaround that should be more specific solving MOBILE-3305.
        // Also should take into account all modules are not downloaded.
        // Check after MOBILE-3188 is integrated.
        _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].setCourseStatus(this.courseId, _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].NOT_DOWNLOADED);
    }
    /**
     * Calculate the status of sections.
     *
     * @param refresh If refresh or not.
     */
    calculateSectionsStatus(refresh) {
        if (!this.sections) {
            return;
        }
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(_features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].calculateSectionsStatus(this.sections, this.courseId, refresh));
    }
    /**
     * Confirm and prefetch a section. If the section is "all sections", prefetch all the sections.
     *
     * @param section Section to download.
     * @param refresh Refresh clicked (not used).
     */
    prefecthSection(section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            section.isCalculating = true;
            try {
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].confirmDownloadSizeSection(this.courseId, section, this.sections);
                try {
                    yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].prefetchSection(section, this.courseId, this.sections);
                }
                catch (error) {
                    if (!this.isDestroyed) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errordownloadingsection', true);
                    }
                }
                finally {
                    yield this.updateModulesSizes(section.modules, section);
                }
            }
            catch (error) {
                // User cancelled or there was an error calculating the size.
                if (!this.isDestroyed && error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
                    return;
                }
            }
            finally {
                section.isCalculating = false;
            }
        });
    }
    /**
     * Download the module.
     *
     * @param module Module to prefetch.
     * @param refresh Whether it's refreshing.
     * @return Promise resolved when done.
     */
    prefetchModule(module, refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!module.prefetchHandler) {
                return;
            }
            // Show spinner since this operation might take a while.
            module.spinner = true;
            try {
                // Get download size to ask for confirm if it's high.
                const size = yield module.prefetchHandler.getDownloadSize(module, module.course, true);
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].prefetchModule(module.prefetchHandler, module, size, module.course, refresh);
                _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].calculateSectionsStatus(this.sections, this.courseId, false, false);
            }
            catch (error) {
                if (!this.isDestroyed) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.errordownloading', true);
                }
            }
            finally {
                module.spinner = false;
                yield this.updateModulesSizes([module]);
            }
        });
    }
    /**
     * Show download buttons according to module status.
     *
     * @param module Module to update.
     * @param status Module status.
     */
    updateModuleStatus(module, status) {
        var _a, _b;
        if (!status) {
            return;
        }
        module.spinner = false;
        module.downloadStatus = status;
        (_b = (_a = module.handlerData) === null || _a === void 0 ? void 0 : _a.updateStatus) === null || _b === void 0 ? void 0 : _b.call(_a, status);
    }
    /**
     * Calculate and show module status.
     *
     * @param module Module to update.
     * @return Promise resolved when done.
     */
    calculateModuleStatus(module) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!module) {
                return;
            }
            const status = yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getModuleStatus(module, this.courseId);
            this.updateModuleStatus(module, status);
        });
    }
    /**
     * Determines the prefetch icon of the course.
     *
     * @return Promise resolved when done.
     */
    determineCoursePrefetchIcon() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.prefetchCourseData = yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].getCourseStatusIconAndTitle(this.courseId);
        });
    }
    /**
     * Update the course status icon and title.
     *
     * @param status Status to show.
     */
    updateCourseStatus(status) {
        const statusData = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].getCoursePrefetchStatusInfo(status);
        this.prefetchCourseData.status = statusData.status;
        this.prefetchCourseData.icon = statusData.icon;
        this.prefetchCourseData.statusTranslatable = statusData.statusTranslatable;
        this.prefetchCourseData.loading = statusData.loading;
    }
    /**
     * Prefetch the whole course.
     */
    prefetchCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const courses = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].getUserCourses(true);
            let course = courses.find((course) => course.id == this.courseId);
            if (!course) {
                course = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].getCourse(this.courseId);
            }
            if (!course) {
                return;
            }
            try {
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].confirmAndPrefetchCourse(this.prefetchCourseData, course, {
                    sections: this.sections,
                    isGuest: this.isGuest,
                });
            }
            catch (error) {
                if (this.isDestroyed) {
                    return;
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
            }
        });
    }
    /**
     * Toggle expand status.
     *
     * @param event Event object.
     * @param section Section to expand / collapse.
     */
    toggleExpand(event, section) {
        section.expanded = !section.expanded;
        event.stopPropagation();
        event.preventDefault();
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b, _c, _d;
        (_a = this.courseStatusObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.sectionStatusObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.moduleStatusObserver) === null || _c === void 0 ? void 0 : _c.off();
        (_d = this.siteUpdatedObserver) === null || _d === void 0 ? void 0 : _d.off();
        this.sections.forEach((section) => {
            section.modules.forEach((module) => {
                var _a, _b;
                (_b = (_a = module.handlerData) === null || _a === void 0 ? void 0 : _a.onDestroy) === null || _b === void 0 ? void 0 : _b.call(_a);
            });
        });
        this.isDestroyed = true;
    }
};
AddonStorageManagerCourseStoragePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
AddonStorageManagerCourseStoragePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-storagemanager-course-storage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./course-storage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/course-storage/course-storage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./course-storage.scss */ "./src/addons/storagemanager/pages/course-storage/course-storage.scss")).default]
    })
], AddonStorageManagerCourseStoragePage);



/***/ }),

/***/ "./src/addons/storagemanager/pages/courses-storage/courses-storage.scss":
/*!******************************************************************************!*\
  !*** ./src/addons/storagemanager/pages/courses-storage/courses-storage.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item.courses .item-heading,\nion-item.total .item-heading {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvc3RvcmFnZW1hbmFnZXIvcGFnZXMvY291cnNlcy1zdG9yYWdlL2NvdXJzZXMtc3RvcmFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOztFQUNJLGlCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FkZG9ucy9zdG9yYWdlbWFuYWdlci9wYWdlcy9jb3Vyc2VzLXN0b3JhZ2UvY291cnNlcy1zdG9yYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS5jb3Vyc2VzLFxyXG5pb24taXRlbS50b3RhbCB7XHJcbiAgICAuaXRlbS1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/addons/storagemanager/pages/courses-storage/courses-storage.ts":
/*!****************************************************************************!*\
  !*** ./src/addons/storagemanager/pages/courses-storage/courses-storage.ts ***!
  \****************************************************************************/
/*! exports provided: AddonStorageManagerCoursesStoragePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonStorageManagerCoursesStoragePage", function() { return AddonStorageManagerCoursesStoragePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/services/module-prefetch-delegate */ "./src/core/features/course/services/module-prefetch-delegate.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/settings/services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _features_sitehome_services_sitehome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/sitehome/services/sitehome */ "./src/core/features/sitehome/services/sitehome.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_array__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/array */ "./src/core/singletons/array.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.















/**
 * Page that displays downloaded courses and allows the user to delete them.
 */
let AddonStorageManagerCoursesStoragePage = class AddonStorageManagerCoursesStoragePage {
    constructor() {
        this.userCourses = [];
        this.downloadedCourses = [];
        this.completelyDownloadedCourses = [];
        this.totalSize = 0;
        this.loaded = false;
        this.spaceUsage = {
            cacheEntries: 0,
            spaceUsage: 0,
        };
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId();
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userCourses = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].getUserCourses();
            this.courseStatusObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].COURSE_STATUS_CHANGED, ({ courseId, status }) => this.onCourseUpdated(courseId, status));
            const downloadedCourseIds = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getDownloadedCourseIds();
            const downloadedCourses = yield Promise.all(this.userCourses
                .filter((course) => downloadedCourseIds.indexOf(course.id) !== -1)
                .map((course) => this.getDownloadedCourse(course)));
            const siteHomeEnabled = yield _features_sitehome_services_sitehome__WEBPACK_IMPORTED_MODULE_8__["CoreSiteHome"].isAvailable(this.siteId);
            if (siteHomeEnabled) {
                const siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteHomeId();
                const size = yield this.calculateDownloadedCourseSize(siteHomeId);
                if (size > 0) {
                    const status = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getCourseStatus(siteHomeId);
                    downloadedCourses.push({
                        id: siteHomeId,
                        title: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.sitehome.sitehome'),
                        totalSize: size,
                        isDownloading: status === _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].DOWNLOADING,
                    });
                }
            }
            this.spaceUsage = yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__["CoreSettingsHelper"].getSiteSpaceUsage(this.siteId);
            this.setDownloadedCourses(downloadedCourses);
            this.loaded = true;
        });
    }
    /**
     * Component destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.courseStatusObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
    /**
     * Delete all courses that have been downloaded.
     *
     * @param event: Event Object.
     */
    deleteCompletelyDownloadedCourses(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showDeleteConfirm('addon.storagemanager.confirmdeletecourses');
            }
            catch (error) {
                if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].isCanceledError(error)) {
                    throw error;
                }
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showModalLoading('core.deleting', true);
            const deletedCourseIds = this.completelyDownloadedCourses.map((course) => course.id);
            try {
                yield Promise.all(deletedCourseIds.map((courseId) => _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].deleteCourseFiles(courseId)));
                this.setDownloadedCourses(this.downloadedCourses.filter((course) => !_singletons_array__WEBPACK_IMPORTED_MODULE_13__["CoreArray"].contains(deletedCourseIds, course.id)));
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showErrorModalDefault(error, _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.errordeletefile'));
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Delete course.
     *
     * @param event: Event Object.
     * @param course Course to delete.
     */
    deleteCourse(event, course) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showDeleteConfirm('addon.storagemanager.confirmdeletedatafrom', { name: course.title });
            }
            catch (error) {
                if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].isCanceledError(error)) {
                    throw error;
                }
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showModalLoading('core.deleting', true);
            try {
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].deleteCourseFiles(course.id);
                this.setDownloadedCourses(_singletons_array__WEBPACK_IMPORTED_MODULE_13__["CoreArray"].withoutItem(this.downloadedCourses, course));
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showErrorModalDefault(error, _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.errordeletefile'));
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Handle course updated event.
     *
     * @param courseId Updated course id.
     */
    onCourseUpdated(courseId, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (courseId == _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourseProvider"].ALL_COURSES_CLEARED) {
                this.setDownloadedCourses([]);
                return;
            }
            const course = this.downloadedCourses.find((course) => course.id === courseId);
            if (!course) {
                return;
            }
            course.isDownloading = status === _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].DOWNLOADING;
            course.totalSize = yield this.calculateDownloadedCourseSize(course.id);
            this.setDownloadedCourses(this.downloadedCourses);
        });
    }
    /**
     * Set downloaded courses data.
     *
     * @param courses Courses info.
     */
    setDownloadedCourses(courses) {
        this.downloadedCourses = courses.sort((a, b) => b.totalSize - a.totalSize);
        this.completelyDownloadedCourses = courses.filter((course) => !course.isDownloading);
        this.totalSize = this.downloadedCourses.reduce((totalSize, course) => totalSize + course.totalSize, 0);
    }
    /**
     * Get downloaded course data.
     *
     * @param course Course.
     * @return Course info.
     */
    getDownloadedCourse(course) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const totalSize = yield this.calculateDownloadedCourseSize(course.id);
            const status = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getCourseStatus(course.id);
            return {
                id: course.id,
                title: course.displayname || course.fullname,
                totalSize,
                isDownloading: status === _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].DOWNLOADING,
            };
        });
    }
    /**
     * Calculate the size of a downloaded course.
     *
     * @param courseId Downloaded course id.
     * @return Promise to be resolved with the course size.
     */
    calculateDownloadedCourseSize(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sections = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getSections(courseId);
            const modules = _singletons_array__WEBPACK_IMPORTED_MODULE_13__["CoreArray"].flatten(sections.map((section) => section.modules));
            const promisedModuleSizes = modules.map((module) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const size = yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getModuleStoredSize(module, courseId);
                return isNaN(size) ? 0 : size;
            }));
            const moduleSizes = yield Promise.all(promisedModuleSizes);
            return moduleSizes.reduce((totalSize, moduleSize) => totalSize + moduleSize, 0);
        });
    }
    /**
     * Open course storage.
     *
     * @param courseId Course Id.
     */
    openCourse(courseId, title) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].navigateToSitePath('/storage/' + courseId, { params: { title } });
    }
    /**
     * Deletes files of a site and the tables that can be cleared.
     *
     * @param event: Event Object.
     */
    deleteSiteStorage(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            try {
                const siteName = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getRequiredCurrentSite().getSiteName();
                this.spaceUsage = yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__["CoreSettingsHelper"].deleteSiteStorage(siteName, this.siteId);
            }
            catch (_a) {
                // Ignore cancelled confirmation modal.
            }
        });
    }
};
AddonStorageManagerCoursesStoragePage.ctorParameters = () => [];
AddonStorageManagerCoursesStoragePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-storagemanager-courses-storage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./courses-storage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/courses-storage/courses-storage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./courses-storage.scss */ "./src/addons/storagemanager/pages/courses-storage/courses-storage.scss")).default]
    })
], AddonStorageManagerCoursesStoragePage);



/***/ }),

/***/ "./src/addons/storagemanager/storagemanager-lazy.module.ts":
/*!*****************************************************************!*\
  !*** ./src/addons/storagemanager/storagemanager-lazy.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddonStorageManagerLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonStorageManagerLazyModule", function() { return AddonStorageManagerLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _pages_courses_storage_courses_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/courses-storage/courses-storage */ "./src/addons/storagemanager/pages/courses-storage/courses-storage.ts");
/* harmony import */ var _pages_course_storage_course_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/course-storage/course-storage */ "./src/addons/storagemanager/pages/course-storage/course-storage.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.






const routes = [
    {
        path: 'storage',
        component: _pages_courses_storage_courses_storage__WEBPACK_IMPORTED_MODULE_4__["AddonStorageManagerCoursesStoragePage"],
    },
    {
        path: 'storage/:courseId',
        component: _pages_course_storage_course_storage__WEBPACK_IMPORTED_MODULE_5__["AddonStorageManagerCourseStoragePage"],
    },
];
let AddonStorageManagerLazyModule = class AddonStorageManagerLazyModule {
};
AddonStorageManagerLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [
            _pages_courses_storage_courses_storage__WEBPACK_IMPORTED_MODULE_4__["AddonStorageManagerCoursesStoragePage"],
            _pages_course_storage_course_storage__WEBPACK_IMPORTED_MODULE_5__["AddonStorageManagerCourseStoragePage"],
        ],
    })
], AddonStorageManagerLazyModule);



/***/ })

}]);
//# sourceMappingURL=addons-storagemanager-storagemanager-lazy-module.js.map