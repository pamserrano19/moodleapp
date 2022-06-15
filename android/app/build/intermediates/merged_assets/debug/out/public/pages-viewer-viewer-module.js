(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-viewer-viewer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/comments/pages/viewer/viewer.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/comments/pages/viewer/viewer.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" [contextLevel]=\"contextLevel\" [contextInstanceId]=\"instanceId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button *ngIf=\"canDeleteComments\" slot=\"end\" fill=\"clear\" (click)=\"toggleDelete()\"\r\n                [attr.aria-label]=\"'core.toggledelete' | translate\">\r\n                <ion-icon name=\"fas-pen\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <core-context-menu>\r\n                <core-context-menu-item [hidden]=\"!(commentsLoaded && !hasOffline)\" [priority]=\"100\" [content]=\"'core.refresh' | translate\"\r\n                    (action)=\"refreshComments(false)\" [iconAction]=\"refreshIcon\" [closeOnClick]=\"true\">\r\n                </core-context-menu-item>\r\n                <core-context-menu-item [hidden]=\"!(commentsLoaded && hasOffline && isOnline)\" [priority]=\"100\"\r\n                    [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"refreshComments(true)\" [iconAction]=\"syncIcon\"\r\n                    [closeOnClick]=\"false\">\r\n                </core-context-menu-item>\r\n            </core-context-menu>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!commentsLoaded\" (ionRefresh)=\"refreshComments(false, $event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"commentsLoaded\">\r\n        <core-empty-box *ngIf=\"!comments?.length && !offlineComment\" icon=\"fas-comments\" [message]=\"'core.comments.nocomments' | translate\">\r\n        </core-empty-box>\r\n\r\n        <!-- Load previous messages. -->\r\n        <core-infinite-loading [enabled]=\"canLoadMore\" position=\"top\" (action)=\"loadPrevious($event)\" [error]=\"loadMoreError\">\r\n        </core-infinite-loading>\r\n\r\n        <ion-list class=\"addon-messages-discussion-container\">\r\n            <ng-container *ngFor=\"let comment of comments; index as index; last as last\">\r\n\r\n                <p class=\"ion-text-center addon-messages-date\" *ngIf=\"comment.showDate\">\r\n                    {{ comment.timecreated * 1000 | coreFormatDate: \"strftimedayshort\" }}\r\n                </p>\r\n\r\n                <ion-item class=\"ion-text-wrap addon-message\" [class.addon-message-mine]=\"comment.userid == currentUserId\"\r\n                    [class.addon-message-not-mine]=\"comment.userid != currentUserId\" [class.addon-message-no-user]=\"!comment.showUserData\"\r\n                    [@coreSlideInOut]=\"comment.userid == currentUserId ? '' : 'fromLeft'\">\r\n                    <ion-label>\r\n                        <!-- User data. -->\r\n                        <h2 class=\"addon-message-user\" *ngIf=\"comment.showUserData\">\r\n                            <core-user-avatar slot=\"start\" [user]=\"comment\" [linkProfile]=\"false\">\r\n                            </core-user-avatar>\r\n                            <div>{{ comment.fullname }}</div>\r\n                        </h2>\r\n\r\n                        <div class=\"addon-message-text\">\r\n                            <core-format-text [text]=\"comment.content\" [contextLevel]=\"contextLevel\" [contextInstanceId]=\"instanceId\"\r\n                                [courseId]=\"courseId\">\r\n                            </core-format-text>\r\n                        </div>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <ng-container *ngIf=\"!comment.deleted\">\r\n                            {{ comment.timecreated * 1000 | coreFormatDate: 'strftimetime' }}\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"comment.deleted\">\r\n                            <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon> <span class=\"ion-text-wrap\">\r\n                                {{ 'core.deletedoffline' | translate }}\r\n                            </span>\r\n                        </ng-container>\r\n                    </ion-note>\r\n                    <div class=\"tail\" *ngIf=\"comment.showTail\"></div>\r\n                    <ion-button *ngIf=\"showDelete && !comment.deleted && comment.delete\" slot=\"end\" fill=\"clear\"\r\n                        [@coreSlideInOut]=\"'fromRight'\" color=\"danger\" (click)=\"deleteComment($event, comment)\"\r\n                        [attr.aria-label]=\"'core.delete' | translate\" class=\"addon-messages-delete-button\">\r\n                        <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button *ngIf=\"showDelete && comment.deleted\" slot=\"end\" fill=\"clear\" color=\"danger\"\r\n                        (click)=\"undoDeleteComment($event, comment)\" [attr.aria-label]=\"'core.restore' | translate\"\r\n                        class=\"addon-messages-delete-button\">\r\n                        <ion-icon name=\"fas-undo-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <ion-item *ngIf=\"offlineComment\" class=\"ion-text-wrap addon-message addon-message-mine\">\r\n                <ion-label>\r\n                    <!-- User data. -->\r\n                    <p class=\"ion-text-center\">\r\n                        <ion-icon name=\"fas-exclamation-triangle\" aria-hidden=\"true\"></ion-icon>\r\n                        {{ 'core.thereisdatatosync' | translate:{$a: 'core.comments.comments' | translate | lowercase } }}\r\n                    </p>\r\n\r\n                    <div class=\"addon-message-text\">\r\n                        <core-format-text [text]=\"offlineComment.content\" [contextLevel]=\"contextLevel\" [contextInstanceId]=\"instanceId\"\r\n                            [courseId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </div>\r\n                </ion-label>\r\n                <ion-note>\r\n                    <ion-icon name=\"fas-clock\" aria-hidden=\"true\"></ion-icon> {{ 'core.notsent' | translate }}\r\n                </ion-note>\r\n                <div class=\"tail\"></div>\r\n                <ion-button *ngIf=\"showDelete\" slot=\"end\" fill=\"clear\" [@coreSlideInOut]=\"'fromRight'\" color=\"danger\"\r\n                    (click)=\"deleteComment($event, offlineComment)\" [attr.aria-label]=\"'core.delete' | translate\"\r\n                    class=\"addon-messages-delete-button\">\r\n                    <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n    </core-loading>\r\n</ion-content>\r\n<ion-footer class=\"footer-adjustable\" *ngIf=\"commentsLoaded && canAddComments\">\r\n    <ion-toolbar color=\"contrast\">\r\n        <core-send-message-form [sendDisabled]=\"sending\" [message]=\"newComment\" (onSubmit)=\"addComment($event)\"\r\n            [placeholder]=\"'core.comments.addcomment' | translate\">\r\n        </core-send-message-form>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/core/features/comments/pages/viewer/viewer.module.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/comments/pages/viewer/viewer.module.ts ***!
  \******************************************************************/
/*! exports provided: CoreCommentsViewerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommentsViewerPageModule", function() { return CoreCommentsViewerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _viewer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer.page */ "./src/core/features/comments/pages/viewer/viewer.page.ts");
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
        path: '',
        component: _viewer_page__WEBPACK_IMPORTED_MODULE_4__["CoreCommentsViewerPage"],
    },
];
let CoreCommentsViewerPageModule = class CoreCommentsViewerPageModule {
};
CoreCommentsViewerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _viewer_page__WEBPACK_IMPORTED_MODULE_4__["CoreCommentsViewerPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCommentsViewerPageModule);



/***/ }),

/***/ "./src/core/features/comments/pages/viewer/viewer.page.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/comments/pages/viewer/viewer.page.ts ***!
  \****************************************************************/
/*! exports provided: CoreCommentsViewerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommentsViewerPage", function() { return CoreCommentsViewerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/comments/services/comments */ "./src/core/features/comments/services/comments.ts");
/* harmony import */ var _features_comments_services_comments_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/comments/services/comments-sync */ "./src/core/features/comments/services/comments-sync.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @features/comments/services/comments-offline */ "./src/core/features/comments/services/comments-offline.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_20__);
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
 * Page that displays comments.
 */
let CoreCommentsViewerPage = class CoreCommentsViewerPage {
    constructor(route) {
        this.route = route;
        this.comments = [];
        this.commentsLoaded = false;
        this.itemId = 0;
        this.area = '';
        this.page = 0;
        this.title = '';
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.canAddComments = false;
        this.canDeleteComments = false;
        this.showDelete = false;
        this.hasOffline = false;
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
        this.sending = false;
        this.newComment = '';
        this.addDeleteCommentsAvailable = false;
        this.viewDestroyed = false;
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
        // Refresh data if comments are synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_features_comments_services_comments_sync__WEBPACK_IMPORTED_MODULE_7__["CoreCommentsSyncProvider"].AUTO_SYNCED, (data) => {
            if (data.contextLevel == this.contextLevel && data.instanceId == this.instanceId &&
                data.componentName == this.componentName && data.itemId == this.itemId && data.area == this.area) {
                // Show the sync warnings.
                this.showSyncWarnings(data.warnings);
                // Refresh the data.
                this.commentsLoaded = false;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
                this.page = 0;
                this.comments = [];
                this.fetchComments(false);
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId());
        this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_19__["CoreApp"].isOnline();
        this.onlineObserver = _singletons__WEBPACK_IMPORTED_MODULE_11__["Network"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_11__["NgZone"].run(() => {
                this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_19__["CoreApp"].isOnline();
            });
        });
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.contextLevel = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRequiredRouteParam('contextLevel');
                this.instanceId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRequiredRouteNumberParam('instanceId');
                this.componentName = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRequiredRouteParam('componentName');
                this.itemId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRequiredRouteNumberParam('itemId');
                this.area = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('area') || '';
                this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('title') ||
                    _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.comments.comments');
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('courseId');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].back();
                return;
            }
            // Is implicit the user can delete if he can add.
            this.addDeleteCommentsAvailable = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].isAddCommentsAvailable();
            this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
            this.commentsLoaded = false;
            yield this.fetchComments(true);
        });
    }
    /**
     * Fetches the comments.
     *
     * @param sync When to resync comments.
     * @param showErrors When to display errors or not.
     * @return Resolved when done.
     */
    fetchComments(sync, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (sync) {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__["CoreUtils"].ignoreErrors(this.syncComments(showErrors));
            }
            try {
                // Get comments data.
                const commentsResponse = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].getComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area, this.page);
                this.canAddComments = this.addDeleteCommentsAvailable && !!commentsResponse.canpost;
                let comments = commentsResponse.comments.sort((a, b) => a.timecreated - b.timecreated);
                if (commentsResponse.count !== undefined) {
                    this.canLoadMore = (this.comments.length + comments.length) < commentsResponse.count;
                }
                else {
                    // Old style.
                    this.canLoadMore = commentsResponse.comments.length > 0 &&
                        commentsResponse.comments.length >= _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreCommentsProvider"].pageSize;
                }
                comments = yield Promise.all(comments.map((comment) => this.loadCommentProfile(comment)));
                this.comments = comments.concat(this.comments);
                this.comments.forEach((comment, index) => {
                    comment.showDate = this.showDate(comment, this.comments[index - 1]);
                    comment.showUserData = this.showUserData(comment, this.comments[index - 1]);
                    comment.showTail = this.showTail(comment, this.comments[index + 1]);
                });
                this.canDeleteComments = this.addDeleteCommentsAvailable &&
                    (this.hasOffline || this.comments.some((comment) => !!comment.delete));
                yield this.loadOfflineData();
            }
            catch (error) {
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                if (error && this.componentName == 'assignsubmission_comments') {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showAlertTranslated('core.notice', 'core.comments.commentsnotworking');
                }
                else {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.error') + ': get_comments');
                }
            }
            finally {
                this.commentsLoaded = true;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_REFRESH;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_SYNC;
                if (this.page == 0) {
                    this.scrollToBottom();
                }
            }
        });
    }
    /**
     * Function to load more commemts.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadPrevious(infiniteComplete) {
        this.page++;
        this.canLoadMore = false;
        return this.fetchComments(true).finally(() => {
            infiniteComplete && infiniteComplete();
        });
    }
    /**
     * Refresh the comments.
     *
     * @param showErrors Whether to display errors or not.
     * @param refresher Refresher.
     * @return Resolved when done.
     */
    refreshComments(showErrors, refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.commentsLoaded = false;
            this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
            try {
                yield this.invalidateComments();
            }
            finally {
                this.page = 0;
                this.comments = [];
                try {
                    yield this.fetchComments(true, showErrors);
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            }
        });
    }
    /**
     * Show sync warnings if any.
     *
     * @param warnings the warnings
     */
    showSyncWarnings(warnings) {
        const message = _services_utils_text__WEBPACK_IMPORTED_MODULE_15__["CoreTextUtils"].buildMessage(warnings);
        if (message) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModal(message);
        }
    }
    /**
     * Tries to synchronize comments.
     *
     * @param showErrors Whether to display errors or not.
     * @return Promise resolved if sync is successful, rejected otherwise.
     */
    syncComments(showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _features_comments_services_comments_sync__WEBPACK_IMPORTED_MODULE_7__["CoreCommentsSync"].syncComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
                this.showSyncWarnings((result === null || result === void 0 ? void 0 : result.warnings) || []);
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_16__["CoreError"](error);
            }
        });
    }
    /**
     * Send the comment or store it offline.
     *
     * @param text Comment text to add.
     */
    addComment(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_app__WEBPACK_IMPORTED_MODULE_19__["CoreApp"].closeKeyboard();
            const loadingModal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showModalLoading('core.sending', true);
            // Freeze the add comment button.
            this.sending = true;
            try {
                const commentsResponse = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].addComment(text, this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showToast(commentsResponse ? 'core.comments.eventcommentcreated' : 'core.datastoredoffline', true, 3000);
                if (commentsResponse) {
                    this.invalidateComments();
                    const addedComments = yield this.loadCommentProfile(commentsResponse);
                    addedComments.showDate = this.showDate(addedComments, this.comments[this.comments.length - 1]);
                    addedComments.showUserData = this.showUserData(addedComments, this.comments[this.comments.length - 1]);
                    addedComments.showTail = this.showTail(addedComments, this.comments[this.comments.length + 1]);
                    // Add the comment to the top.
                    this.comments = this.comments.concat([addedComments]);
                    this.canDeleteComments = this.addDeleteCommentsAvailable;
                    _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].trigger(_features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreCommentsProvider"].COMMENTS_COUNT_CHANGED_EVENT, {
                        contextLevel: this.contextLevel,
                        instanceId: this.instanceId,
                        component: this.componentName,
                        itemId: this.itemId,
                        area: this.area,
                        countChange: 1,
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId());
                }
                else if (commentsResponse === false) {
                    // Comments added in offline mode.
                    yield this.loadOfflineData();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                loadingModal.dismiss();
                this.sending = false;
                // New comments.
                this.scrollToBottom();
            }
        });
    }
    /**
     * Delete a comment.
     *
     * @param e Click event.
     * @param comment Comment to delete.
     */
    deleteComment(e, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            const modified = 'lastmodified' in comment
                ? comment.lastmodified
                : comment.timecreated;
            const time = _services_utils_time__WEBPACK_IMPORTED_MODULE_18__["CoreTimeUtils"].userDate(modified * 1000, 'core.strftimerecentfull');
            const deleteComment = {
                contextlevel: this.contextLevel,
                instanceid: this.instanceId,
                component: this.componentName,
                itemid: this.itemId,
                area: this.area,
                content: comment.content,
                id: 'id' in comment ? comment.id : undefined,
            };
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showDeleteConfirm('core.comments.deletecommentbyon', {
                    $a: { user: comment.fullname || '', time: time },
                });
            }
            catch (_a) {
                // User cancelled, nothing to do.
                return;
            }
            try {
                const deletedOnline = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].deleteComment(deleteComment);
                this.showDelete = false;
                if (deletedOnline && 'id' in comment) {
                    const index = this.comments.findIndex((commentinList) => commentinList.id == comment.id);
                    if (index >= 0) {
                        this.comments.splice(index, 1);
                        _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].trigger(_features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreCommentsProvider"].COMMENTS_COUNT_CHANGED_EVENT, {
                            contextLevel: this.contextLevel,
                            instanceId: this.instanceId,
                            component: this.componentName,
                            itemId: this.itemId,
                            area: this.area,
                            countChange: -1,
                        }, _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId());
                    }
                }
                else {
                    this.loadOfflineData();
                }
                this.invalidateComments();
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showToast('core.comments.eventcommentdeleted', true, 3000);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, 'Delete comment failed.');
            }
        });
    }
    /**
     * Invalidate comments.
     *
     * @return Resolved when done.
     */
    invalidateComments() {
        return _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].invalidateCommentsData(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
    }
    /**
     * Loads the profile info onto the comment object.
     *
     * @param comment Comment object.
     * @return Promise resolved with modified comment when done.
     */
    loadCommentProfile(comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the user profile image.
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_14__["CoreUser"].getProfile(comment.userid, undefined, true);
                comment.profileimageurl = user.profileimageurl;
                comment.fullname = user.fullname;
            }
            catch (_a) {
                // Ignore errors.
            }
            return comment;
        });
    }
    /**
     * Check if the user info should be displayed for the current message.
     * User data is only displayed if the previous message was from another user.
     *
     * @param comment Comment object.
     * @param prevComment Previous comment object.
     * @return Whether user data should be shown.
     */
    showUserData(comment, prevComment) {
        return comment.userid != this.currentUserId && (!prevComment || prevComment.userid != comment.userid || !!comment.showDate);
    }
    /**
     * Check if a css tail should be shown.
     *
     * @param comment Comment object.
     * @param nextComment Previous comment object.
     * @return Whether user data should be shown.
     */
    showTail(comment, nextComment) {
        return !nextComment || nextComment.userid != comment.userid || !!nextComment.showDate;
    }
    /**
     * Check if the date should be displayed between messages (when the day changes at midnight for example).
     *
     * @param comment Comment object.
     * @param prevComment Previous comment object.
     * @return True if messages are from diferent days, false othetwise.
     */
    showDate(comment, prevComment) {
        if (!prevComment) {
            return true;
        }
        // Check if day has changed.
        return !moment__WEBPACK_IMPORTED_MODULE_20___default()(comment.timecreated * 1000).isSame(prevComment.timecreated * 1000, 'day');
    }
    /**
     * Load offline comments.
     *
     * @return Promise resolved when done.
     */
    loadOfflineData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            let hasDeletedComments = false;
            // Load the only offline comment allowed if any.
            promises.push(_features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__["CoreCommentsOffline"].getComment(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then((offlineComment) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.offlineComment = offlineComment;
                if (!offlineComment) {
                    return;
                }
                if (this.newComment == '') {
                    this.newComment = this.offlineComment.content;
                }
                this.offlineComment.userid = this.currentUserId;
                return;
            })));
            // Load deleted comments offline.
            promises.push(_features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__["CoreCommentsOffline"].getDeletedComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then((deletedComments) => {
                hasDeletedComments = deletedComments && deletedComments.length > 0;
                if (hasDeletedComments) {
                    deletedComments.forEach((deletedComment) => {
                        const comment = this.comments.find((comment) => comment.id == deletedComment.commentid);
                        if (comment) {
                            comment.deleted = !!deletedComment.deleted;
                        }
                    });
                }
                return;
            }));
            yield Promise.all(promises);
            this.hasOffline = !!this.offlineComment || hasDeletedComments;
        });
    }
    /**
     * Restore a comment.
     *
     * @param e Click event.
     * @param comment Comment to delete.
     */
    undoDeleteComment(e, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            yield _features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__["CoreCommentsOffline"].undoDeleteComment(comment.id);
            comment.deleted = false;
            this.showDelete = false;
        });
    }
    /**
     * Scroll bottom when render has finished.
     */
    scrollToBottom() {
        // Need a timeout to leave time to the view to be rendered.
        setTimeout(() => {
            var _a;
            if (!this.viewDestroyed) {
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToBottom();
            }
        }, 100);
    }
    /**
     * Toggle delete.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
        this.onlineObserver.unsubscribe();
        this.viewDestroyed = true;
    }
};
CoreCommentsViewerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CoreCommentsViewerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"],] }]
};
CoreCommentsViewerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-comments-viewer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./viewer.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/comments/pages/viewer/viewer.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_3__["CoreAnimations"].SLIDE_IN_OUT],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./viewer.scss */ "./src/core/features/comments/pages/viewer/viewer.scss")).default]
    })
], CoreCommentsViewerPage);



/***/ }),

/***/ "./src/core/features/comments/pages/viewer/viewer.scss":
/*!*************************************************************!*\
  !*** ./src/core/features/comments/pages/viewer/viewer.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\nion-content {\n  --content-background: var(--background-alternative);\n  --background: var(--content-background);\n}\nion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n.addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px !important;\n  background: var(--content-background);\n}\n.addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\nion-item.addon-message {\n  --message-background: var(--addon-messages-message-bg);\n  --message-activated-background: var(--addon-messages-message-activated-bg);\n  --message-alignment: flex-start;\n  border: 0;\n  border-radius: var(--medium-radius);\n  padding: 0 8px 0 8px;\n  margin: 8px;\n  --background: var(--message-background);\n  background: var(--message-background);\n  align-self: var(--message-alignment);\n  width: 90%;\n  max-width: var(--list-item-max-width);\n  --min-height: var(--a11y-min-target-size);\n  position: relative;\n  transition: width 500ms ease-in-out;\n  overflow: visible;\n}\nion-item.addon-message::part(native) {\n  --inner-border-width: 0px;\n  --inner-padding-end: 0px;\n  padding: 0;\n  margin: 0;\n}\nion-item.addon-message:hover {\n  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));\n}\nion-item.addon-message core-format-text > p:only-child {\n  display: inline;\n}\nion-item.addon-message .addon-message-user {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: var(--ion-text-color);\n}\nion-item.addon-message .addon-message-user core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--addon-messages-avatar-size);\n  margin: 0;\n}\nion-item.addon-message .addon-message-user div {\n  font-weight: 500;\n  flex-grow: 1;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\nion-item.addon-message ion-note {\n  color: var(--addon-messages-message-note-text);\n  font-size: var(--addon-messages-message-note-font-size);\n  margin: 0;\n  padding: 8px 0;\n  align-self: flex-start;\n}\nion-item.addon-message[tappable]:active {\n  --message-background: var(--message-activated-background);\n}\nion-item.addon-message ion-label {\n  margin: 0;\n  padding: 8px 0;\n}\nion-item.addon-message .addon-message-text {\n  display: inline-flex;\n}\nion-item.addon-message .addon-message-text * {\n  color: var(--ion-text-color);\n}\nion-item.addon-message .tail {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 0.5rem solid transparent;\n  position: absolute;\n  touch-action: none;\n  bottom: 0;\n  border-bottom-color: var(--message-background);\n}\nion-item.addon-message.addon-message-mine {\n  --message-background: var(--addon-messages-message-mine-bg);\n  --message-activated-background: var(--addon-messages-message-mine-activated-bg);\n  --message-alignment: flex-end;\n}\nion-item.addon-message.addon-message-mine .spinner {\n  float: right;\n  margin-left: 5px;\n  margin-right: -3px;\n  margin-top: 2px;\n  margin-bottom: -2px;\n}\n[dir=rtl] ion-item.addon-message.addon-message-mine .spinner, :host-context([dir=rtl]) ion-item.addon-message.addon-message-mine .spinner {\n  float: left;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-item.addon-message.addon-message-mine .spinner {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 5px;\n    margin-inline-start: 5px;\n    -webkit-margin-end: -3px;\n    margin-inline-end: -3px;\n  }\n}\nion-item.addon-message.addon-message-mine .spinner svg {\n  width: 16px;\n  height: 16px;\n}\nion-item.addon-message.addon-message-mine .tail {\n  right: -8px;\n  margin-right: -0.5rem;\n}\n[dir=rtl] ion-item.addon-message.addon-message-mine .tail, :host-context([dir=rtl]) ion-item.addon-message.addon-message-mine .tail {\n  left: unset;\n  right: unset;\n  left: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-item.addon-message.addon-message-mine .tail {\n    margin-right: unset;\n    -webkit-margin-end: -0.5rem;\n    margin-inline-end: -0.5rem;\n  }\n}\nion-item.addon-message.addon-message-not-mine .tail {\n  left: -8px;\n  margin-left: -0.5rem;\n}\n[dir=rtl] ion-item.addon-message.addon-message-not-mine .tail, :host-context([dir=rtl]) ion-item.addon-message.addon-message-not-mine .tail {\n  left: unset;\n  right: unset;\n  right: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-item.addon-message.addon-message-not-mine .tail {\n    margin-left: unset;\n    -webkit-margin-start: -0.5rem;\n    margin-inline-start: -0.5rem;\n  }\n}\nion-item.addon-message .addon-messages-delete-button {\n  min-height: initial;\n  line-height: initial;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  height: var(--a11y-min-target-size) !important;\n  align-self: flex-end;\n}\nion-item.addon-message .addon-messages-delete-button ion-icon {\n  font-size: 1.4em;\n  line-height: initial;\n  color: var(--danger);\n}\nion-item.addon-message.addon-message-no-user {\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3MiLCJzcmMvY29yZS9mZWF0dXJlcy9jb21tZW50cy9wYWdlcy92aWV3ZXIvdmlld2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7Ozs7RUFBQTtBQ0VBOzs7O0VBQUE7QUFrR0E7O0VBQUE7QUNwR0E7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUErREE7Ozs7RUFBQTtBQzVESTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ21EUjtBRC9DQTtFQUNJLG1EQUFBO0VBQ0EsdUNBQUE7QUNrREo7QURoREk7RUFDSSw0QkFBQTtBQ2tEUjtBRDlDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7QUNpREo7QUQ5Q0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDaURKO0FEN0NBO0VBQ0ksc0RBQUE7RUFDQSwwRUFBQTtFQUNBLCtCQUFBO0VBRUEsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFSG1EQSxtQ0FKZ0I7RUc1Q2hCLGlCQUFBO0FDK0NKO0FEN0NJO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDK0NSO0FENUNJO0VBRUksbURBQUE7QUM4Q1I7QUQzQ0k7RUFDSSxlQUFBO0FDNkNSO0FEMUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDNENSO0FEMUNRO0VBQ0ksY0FBQTtFQUNBLHFEQUFBO0VBQ0EsU0FBQTtBQzRDWjtBRHpDUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMyQ1o7QUR2Q0k7RUFDSSw4Q0FBQTtFQUNBLHVEQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ3lDUjtBRHRDSTtFQUNJLHlEQUFBO0FDd0NSO0FEckNJO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUN1Q1I7QURwQ0k7RUFDSSxvQkFBQTtBQ3NDUjtBRHJDUTtFQUNJLDRCQUFBO0FDdUNaO0FEbkNJO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDhDQUFBO0FDcUNSO0FEakNJO0VBQ0ksMkRBQUE7RUFDQSwrRUFBQTtFQUNBLDZCQUFBO0FDbUNSO0FEakNRO0VMeVNGLFlBQUE7RUFwTEYsZ0JLbkh5QztFTG9IekMsa0JLcEg2QjtFTG9KL0IsZUtwSjBCO0VMcUoxQixtQktySnFDO0FDc0N2QztBTjZCVztFQXVPTCxXQUFBO0FNalFOO0FOOEVNO0VBQ0U7SUFFSSxrQkFBQTtJQUdBLG1CQUFBO0lBR0YseUJLaEltQztJTGlJbkMsd0JLakltQztJTGtJbkMsd0JLbEl1QjtJTG1JdkIsdUJLbkl1QjtFQ21EL0I7QUFDRjtBRGxEWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDb0RoQjtBRGhEUTtFTGlNRixXS2hNOEI7RUwyR2hDLHFCSzFHeUM7QUNrRDdDO0FOT1c7RUF5SUwsV0FBQTtFQUNBLFlBQUE7RUFFQSxVS3RNOEI7QUN3RHBDO0FOc0RNO0VBQ0U7SUFLSSxtQkFBQTtJQUtGLDJCS3hIbUM7SUx5SG5DLDBCS3pIbUM7RUM4RDNDO0FBQ0Y7QUQzREk7RUwwTEUsVUt6THNDO0VMb0d4QyxvQktuRytCO0FDNkRuQztBTlZXO0VBeUlMLFdBQUE7RUFDQSxZQUFBO0VBR0EsV0tqTXNDO0FDbUU1QztBTnFDTTtFQUNFO0lBRUksa0JBQUE7SUFNRiw2QktoSHlCO0lMaUh6Qiw0QktqSHlCO0VDeUVqQztBQUNGO0FEdkVJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0Esb0JBQUE7QUN5RVI7QUR2RVE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUN5RVo7QURyRUk7RUFDSSxlQUFBO0FDdUVSIiwiZmlsZSI6InNyYy9jb3JlL2ZlYXR1cmVzL2NvbW1lbnRzL3BhZ2VzL3ZpZXdlci92aWV3ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XHJcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcclxuXHJcbkBpbXBvcnQgXCIuL2hlbHBlcnMvaGVscGVycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy52YXJpYWJsZXMuc2Nzc1wiO1xyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXHJcbiAqL1xyXG5cclxuXHJcbi8vIFN0cmluZyBVdGlsaXR5IEZ1bmN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gU3RyaW5nIFJlcGxhY2UgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItcmVwbGFjZSgkc3RyaW5nLCAkc2VhcmNoLCAkcmVwbGFjZTogXCJcIikge1xyXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xyXG5cclxuICBAaWYgJGluZGV4IHtcclxuICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJHN0cmluZztcclxufVxyXG5cclxuLy8gU3RyaW5nIFNwbGl0IEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XHJcbiAgLy8gZW1wdHkgYXJyYXkvbGlzdFxyXG4gICRzcGxpdC1hcnI6ICgpO1xyXG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcclxuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICAvLyBsb29wIHRocm91Z2ggc3RyaW5nXHJcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcclxuICAgIC8vIGdldCB0aGUgc3Vic3RyaW5nIGZyb20gdGhlIGZpcnN0IGNoYXJhY3RlciB0byB0aGUgc2VwYXJhdG9yXHJcbiAgICAkaXRlbTogc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpO1xyXG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XHJcbiAgICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJGl0ZW0pO1xyXG4gICAgLy8gcmVtb3ZlIGl0ZW0gYW5kIHNlcGFyYXRvciBmcm9tIHN0cmluZ1xyXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xyXG4gICAgLy8gZmluZCBuZXcgaW5kZXggb2Ygc2VwYXJhdG9yXHJcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICB9XHJcbiAgLy8gYWRkIHRoZSByZW1haW5pbmcgc3RyaW5nIHRvIGxpc3QgKHRoZSBsYXN0IGl0ZW0pXHJcbiAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRzdHJpbmcpO1xyXG5cclxuICBAcmV0dXJuICRzcGxpdC1hcnI7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgRXh0cmFjdCBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1leHRyYWN0KCRzdHJpbmcsICRzdGFydCwgJGVuZCkge1xyXG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XHJcblxyXG4gIEBpZiAkc3RhcnQtaW5kZXgge1xyXG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xyXG4gICAgJGVuZC1pbmRleDogc3RyLWluZGV4KCRwb3N0LCAkZW5kKTtcclxuXHJcbiAgICBAaWYgJGVuZC1pbmRleCB7XHJcbiAgICAgIEByZXR1cm4gc3RyLXNsaWNlKCRwb3N0LCAxLCAkZW5kLWluZGV4IC0gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xyXG4gIEBpZiAodHlwZS1vZigkc3RyaW5nKSA9PSBzdHJpbmcpIHtcclxuICAgIEByZXR1cm4gc3RyLWluZGV4KCRzdHJpbmcsICRuZWVkbGUpICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xyXG4gICRzcGFjZXM6IHN0ci1yZXBsYWNlKCR2YWwsIFwiIFwiLCBcIiUyMFwiKTtcclxuICAkZW5jb2RlZDogc3RyLXJlcGxhY2UoJHNwYWNlcywgXCIjXCIsIFwiJTIzXCIpO1xyXG4gIEByZXR1cm4gJGVuY29kZWQ7XHJcbn1cclxuXHJcblxyXG4vLyBBZGQgUm9vdCBTZWxlY3RvclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxyXG4vL1xyXG4vLyBFeGFtcGxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0XCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCguZml4ZWQpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZml4ZWQpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2UpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCIuc2hhZG93XCIpXHJcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5zaGFkb3dcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBhZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgJGFkZEhvc3RTZWxlY3Rvcikge1xyXG4gICRzZWxlY3RvcnM6IHN0ci1zcGxpdCgkcm9vdCwgXCIsXCIpO1xyXG5cclxuICAkbGlzdDogKCk7XHJcblxyXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCggaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGEgY2xhc3Mgb24gdGhlIGhvc3RcclxuICAgIC8vIGVsZW1lbnQgc28gd2UgbmVlZCB0byBjaGFuZ2UgaG93IHdlIHRhcmdldCBpdFxyXG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KTpob3N0KFwiKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XHJcblxyXG4gICAgICAkbmV3LWVsZW1lbnQ6ICgpO1xyXG4gICAgICAkZWxlbWVudHM6IHN0ci1zcGxpdCgkc2VsZWN0b3IsIFwiIFwiKTtcclxuXHJcbiAgICAgIEBlYWNoICRlbGVtZW50IGluICRlbGVtZW50cyB7XHJcbiAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCI6aG9zdChcIikge1xyXG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcclxuXHJcbiAgICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIikpXCIpIHtcclxuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xyXG4gICAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIilcIiwgXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG5cclxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRlbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcganVzdCB0aGUgaG9zdFxyXG4gICAgLy8gZWxlbWVudCBzbyB3ZSBjYW4gY2hhbmdlIGl0IHRvIGxvb2sgZm9yIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIsIGNvbW1hKTtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBkb2VzIG5vdCBjb250YWluIGhvc3QgYXQgYWxsIGl0IGlzIGVpdGhlciBhIHNoYWRvd1xyXG4gICAgLy8gb3Igbm9ybWFsIGVsZW1lbnQgc28gYXBwZW5kIGJvdGggdGhlIGRpciBjaGVjayBhbmQgaG9zdC1jb250ZXh0XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCIjeyRhZGRIb3N0U2VsZWN0b3J9ICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkbGlzdDtcclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgY29sb3IgZnVuY3Rpb25zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2Nzc1xyXG4gKi9cclxuXHJcbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcclxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xyXG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XHJcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gR2V0cyB0aGUgc3BlY2lmaWMgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSB0aGUgbmFtZSBhbmQgdmFyaWF0aW9uLiBBbHBoYS9yZ2IgYXJlIG9wdGlvbmFsLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpXHJcbi8vIGlvbi1jb2xvcihzZWNvbmRhcnksIGNvbnRyYXN0KSA9PiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KVxyXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSwgMC41KSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSwgMC41KVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gaW9uLWNvbG9yKCRuYW1lLCAkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwsICRyZ2I6IG51bGwpIHtcclxuICAkdmFsdWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRuYW1lKTtcclxuICAkdmFsdWU6IG1hcC1nZXQoJHZhbHVlcywgJHZhcmlhdGlvbik7XHJcbiAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfS0jeyR2YXJpYXRpb259O1xyXG5cclxuICBAaWYgKCR2YXJpYXRpb24gPT0gYmFzZSkge1xyXG4gICAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfTtcclxuICB9XHJcblxyXG4gIEBpZiAoJGFscGhhKSB7XHJcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XHJcbiAgICBAcmV0dXJuIHJnYmEodmFyKCN7JHZhcmlhYmxlfS1yZ2IsICR2YWx1ZSksICRhbHBoYSk7XHJcbiAgfVxyXG4gIEBpZiAoJHJnYikge1xyXG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xyXG4gICAgJHZhcmlhYmxlOiAjeyR2YXJpYWJsZX0tcmdiO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiB2YXIoI3skdmFyaWFibGV9LCAkdmFsdWUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZSgkY29sb3IpIHtcclxuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsIDEyJSk7XHJcbn1cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludCgkY29sb3IpIHtcclxuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsIDEwJSk7XHJcbn1cclxuXHJcbi8vIENvbnZlcnRzIGEgY29sb3IgdG8gYSBjb21tYSBzZXBhcmF0ZWQgcmdiLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gY29sb3ItdG8tcmdiLWxpc3QoJGNvbG9yKSB7XHJcbiAgQHJldHVybiAje3JlZCgkY29sb3IpfSwje2dyZWVuKCRjb2xvcil9LCN7Ymx1ZSgkY29sb3IpfTtcclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xyXG4gKi9cclxuXHJcbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcclxuICBAaW5jbHVkZSBtYXJnaW4oMCk7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcclxuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgY29udGVudDogXCJcIjtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLy8gRm9udCBzbW9vdGhpbmdcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxyXG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xyXG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcclxuXHJcbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XHJcbn1cclxuXHJcblxyXG4vLyBCcmVha3BvaW50IE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXHJcbi8vXHJcbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcclxuLy9cclxuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxyXG4vL1xyXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgNTc2cHhcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG5cclxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxyXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiLXNtXCJcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cclxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG4gIEBpZiAkbWluIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBtZFxyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxyXG4vLyAgICBtZFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XHJcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XHJcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cclxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXHJcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cclxuLy9cclxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxyXG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHJcbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgNzY3Ljk4cHhcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICBAaWYgJG1heCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXHJcbi8vXHJcbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcclxuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbXVsdGktZGlyKCkge1xyXG4gIEBjb250ZW50O1xyXG5cclxuICAvLyAkcm9vdDogI3smfTtcclxuICAvLyBAYXQtcm9vdCBbZGlyXSB7XHJcbiAgLy8gICAjeyRyb290fSB7XHJcbiAgLy8gICAgIEBjb250ZW50O1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG5cclxuQG1peGluIHJ0bCgpIHtcclxuICAkcm9vdDogI3smfTtcclxuXHJcbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGx0cigpIHtcclxuICBAY29udGVudDtcclxufVxyXG5cclxuXHJcbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcclxuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xyXG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XHJcblxyXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xyXG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XHJcblxyXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcclxuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcclxuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xyXG5cclxuICB9IEBlbHNlIHtcclxuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcclxuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xyXG5cclxuICAgIEBhdC1yb290IHtcclxuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcclxuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcclxuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xyXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XHJcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcclxuICAjeyRwcm9wfS10b3A6ICR0b3A7XHJcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xyXG59XHJcblxyXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcclxuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBsZWZ0OiAkc3RhcnQ7XHJcbiAgICAgIHJpZ2h0OiAkZW5kO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBsZWZ0OiAkc3RhcnQ7XHJcbiAgICAgIHJpZ2h0OiAkZW5kO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgcmlnaHQ6IHVuc2V0O1xyXG5cclxuICAgICAgbGVmdDogJGVuZDtcclxuICAgICAgcmlnaHQ6ICRzdGFydDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XHJcbiAgdG9wOiAkdG9wO1xyXG4gIGJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcclxuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxyXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcclxuICAkb3RoZXItZGlyOiBudWxsO1xyXG5cclxuICBAaWYgJGRpciA9PSBsdHIge1xyXG4gICAgJG90aGVyLWRpcjogcnRsO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgJG90aGVyLWRpcjogbHRyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgZGlyZWN0aW9uOiAkZGlyO1xyXG4gIH1cclxuICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcclxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XHJcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcclxuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcclxuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcclxuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcclxuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XHJcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcclxuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xyXG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XHJcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcclxuICAkZXh0cmE6IG51bGw7XHJcblxyXG4gICR4OiBudWxsO1xyXG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xyXG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xyXG5cclxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcclxuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xyXG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XHJcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XHJcblxyXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xyXG5cclxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xyXG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XHJcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcclxuXHJcbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcclxuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcclxuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XHJcbiAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQubWl4aW5zLnNjc3NcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvaXRlbS9pdGVtLm1peGlucy5zY3NzXHJcbiAqL1xyXG5cclxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyBDcmVhdGVzIGEgZml4ZWQgd2lkdGggZm9yIHRoZSBncmlkIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICR3aWR0aCBpbiAkd2lkdGhzIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG1ha2UtYnJlYWtwb2ludC1wYWRkaW5nKCRwYWRkaW5ncykge1xyXG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRwYWRkaW5ncykge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xyXG4gICAgICAkcGFkZGluZzogbWFwLWdldCgkcGFkZGluZ3MsICRicmVha3BvaW50KTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIEl0ZW0gTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gaXRlbS1wdXNoLXN2Zy11cmwoJGZpbGwpIHtcclxuICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcclxuXHJcbiAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCB0cnVlKTtcclxufVxyXG4iLCJAdXNlIFwic2FzczptYXRoXCIgYXMgbWF0aDtcclxuXHJcbi8qKlxyXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXHJcbiAqL1xyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIDYuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA0OCUpIHtcclxuICAgIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgJHBlcmNlbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cclxuICAvLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCAtMTAuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBAZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA4MCUpIHtcclxuICAgIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgJHBlcmNlbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gSW9uaWMgQ29sb3JzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcclxuICAvLyBjb2xvcnMgbWFwXHJcblxyXG4gIEBtaXhpbiBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9ycykge1xyXG4gICAgICAkYmFzZTogbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XHJcbiAgICAgICRsaWdodDogbWFwLWdldCgkYmFzZSwgJ2xpZ2h0Jyk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGxpZ2h0KTtcclxuXHJcbiAgICAgIGJvZHkuZGFyayB7XHJcbiAgICAgICAgICAkZGFyazogbWFwLWdldCgkYmFzZSwgJ2RhcmsnKTtcclxuICAgICAgICAgICRkYXJrOiBtaXgoJGxpZ2h0LCB3aGl0ZSwgODAlKSAhZGVmYXVsdDtcclxuICAgICAgICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkZGFyayk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIEBtaXhpbiBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGJhc2UpIHtcclxuICAgICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xyXG4gICAgICAkc2hhZGU6IGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRiYXNlKTtcclxuICAgICAgJHRpbnQ6IGdldC1jb2xvci10aW50LXBlcmNlbnQoJGJhc2UpO1xyXG5cclxuICAgICAgLS0jeyRjb2xvci1uYW1lfTogI3skYmFzZX07XHJcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcclxuICAgICAgLS0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcclxuICAgICAgLS0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xyXG5cclxuICAgICAgLy8gSW50ZXJuYWwgaW9uaWMgdXNlIG9ubHkuXHJcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9OiB2YXIoLS0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xyXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xyXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX07XHJcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xyXG5cclxuICAgICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgICAtLWlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlKTtcclxuICAgICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XHJcbiAgICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0KTtcclxuICAgICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYik7XHJcbiAgICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcclxuICAgICAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50KTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gQG1peGluIGNvcmUtZm9jdXMoKSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBAaW5jbHVkZSBjb3JlLWZvY3VzLXN0eWxlKCk7XHJcbiAgICB9XHJcbiB9XHJcblxyXG4gQG1peGluIGNvcmUtZm9jdXMtc3R5bGUoKSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgMXB4IHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xyXG4gICAgLy8gVGhpY2tlciBvcHRpb246XHJcbiAgICAvLyBib3JkZXI6IHZhcigtLWExMXktZm9jdXMtd2lkdGgpIHNvbGlkIHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gY29yZS10cmFuc2l0aW9uKCRwcm9wZXJ0aWVzOiBhbGwsICRkdXJhdGlvbjogNTAwbXMsICR0aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0KSB7XHJcbiAgICAkdHJhbnNpdGlvbnM6ICgpO1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgJHRyYW5zaXRpb25zOiBhcHBlbmQoJHRyYW5zaXRpb25zLCAkcHJvcGVydHkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24sIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcclxufVxyXG5cclxuLyoqXHJcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxyXG4gKi9cclxuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGZpbGw6IDYyNjI2MiwgJGZsaXAtcnRsOiBmYWxzZSkge1xyXG4gICAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XHJcblxyXG4gICAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCAkZmxpcC1ydGwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsICRweCAkdHlwZSAkY29sb3IsIG51bGwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCBudWxsLCAkcHggJHR5cGUgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRweH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xyXG5cclxuICAgIEBpZiAoJGVuZCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcbiAgICB9XHJcbiAgICBAaWYgKCRzdGFydCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1zdGFydCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgIH1cclxuICAgIEBpZiAoJHN0YXJ0KSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oJHRvcCwgJHNhZmUtYXJlYS1lbmQsICRib3R0b20sICRzYWZlLWFyZWEtc3RhcnQpO1xyXG59XHJcblxyXG5AbWl4aW4gY29yZS1oZWFkaW5ncygpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRhcmttb2RlKCkge1xyXG4gICAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gICAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJib2R5LmRhcmtcIil9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XHJcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xyXG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcclxuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pKTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcclxuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQ29sb3IgbWl4aW5zLlxyXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XHJcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcclxufVxyXG5cclxuLy8gR2V0IHRoZSBiZXR0ZXIgY29sb3IgY29udHJhc3QgdXNpbmcgV0NBRyBhbGdvcnl0aG0uXHJcbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XHJcbiAgICAkbHVtaWFuY2U6IGx1bWluYW5jZSgkY29sb3IpO1xyXG5cclxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDEuXHJcbiAgICAkd2hpdGVDb250cmFzdDogKCRsdW1pYW5jZSArIDAuMDUpIC8gKDEgKyAwLjA1KTtcclxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDAuXHJcbiAgICAkYmxhY2tDb250cmFzdDogKDAuMDUpIC8gKCRsdW1pYW5jZSArIDAuMDUpO1xyXG5cclxuICAgIEByZXR1cm4gaWYoJHdoaXRlQ29udHJhc3QgPCAkYmxhY2tDb250cmFzdCwgd2hpdGUsIGJsYWNrKTtcclxufVxyXG5cclxuLy8gQ29sb3IgY29udHJhc3QgdXNpbmcgeWlxIGFwcm94aW1hdGlvbiB3aXRoIDE1MCB0aHJlc2hvbGQuXHJcbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3JfeWlxKCRjb2xvciwgJGRhcms6IGJsYWNrLCAkbGlnaHQ6IHdoaXRlKSB7XHJcbiAgICAkcjogcmVkKCRjb2xvcik7XHJcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcclxuICAgICRiOiBibHVlKCRjb2xvcik7XHJcblxyXG4gICAgJHlpcTogKCgkciAqIDI5OSkgKyAoJGcgKiA1ODcpICsgKCRiICogMTE0KSkgLyAxMDAwO1xyXG5cclxuICAgIEByZXR1cm4gaWYoJHlpcSA+PSAxMjgsICRkYXJrLCAkbGlnaHQpO1xyXG59XHJcblxyXG4vLyBXQ0FHIGNvbnRyYXN0IGFsZ29yeXRobVxyXG5AZnVuY3Rpb24gY2hlY2stY29udHJhc3QoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XHJcbiAgICAkZm9yZWdyb3VuZEx1bWlhbmNlOiBsdW1pbmFuY2UoJGZvcmVncm91bmQpO1xyXG4gICAgJGJhY2tncm91bmRMdW1pbmFuY2U6IGx1bWluYW5jZSgkYmFja2dyb3VuZCk7XHJcblxyXG4gICAgQGlmICgkYmFja2dyb3VuZEx1bWluYW5jZSA8ICRmb3JlZ3JvdW5kTHVtaWFuY2UpIHtcclxuICAgICAgICBAcmV0dXJuICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpIC8gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEByZXR1cm4gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KSAvICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gbHVtaW5hbmNlKCRjb2xvcikge1xyXG4gICAgJHI6IHJlZCgkY29sb3IpO1xyXG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XHJcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xyXG5cclxuICAgICRyOiBjb21wb25lbnQtbHVtaW5hbmNlKCRyKTtcclxuICAgICRnOiBjb21wb25lbnQtbHVtaW5hbmNlKCRnKTtcclxuICAgICRiOiBjb21wb25lbnQtbHVtaW5hbmNlKCRiKTtcclxuXHJcbiAgICBAcmV0dXJuICRyICogMC4yMTI2ICsgJGcgKiAwLjcxNTIgKyAkYiAqIDAuMDcyMjtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGNvbXBvbmVudC1sdW1pbmFuY2UoJHZhbHVlKSB7XHJcbiAgICAkdmFsdWU6ICR2YWx1ZSAvIDI1NTtcclxuXHJcbiAgICBAaWYgKCR2YWx1ZSA8PSAwLjAzOTI4KSB7XHJcbiAgICAgICAgQHJldHVybiAkdmFsdWUgLyAxMi45MjtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEByZXR1cm4gbWF0aC5wb3coKCR2YWx1ZSArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXHJcbiAqL1xyXG4iLCIvKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kd2hpdGU6ICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogICAgI2Y4ZjlmYSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAgICAjZTllY2VmICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICAgICNkZWUyZTYgIWRlZmF1bHQ7IC8vIFN0cm9rZVxyXG4kZ3JheS00MDA6ICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogICAgIzhmOTU5ZSAhZGVmYXVsdDsgLy8gU3Ryb2tlIG9uIGlucHV0c1xyXG4kZ3JheS02MDA6ICAgICM2YTczN2IgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogICAgIzQ5NTA1NyAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAgICAjMzQzYTQwICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICAgICMxZDIxMjUgIWRlZmF1bHQ7IC8vIENvcHkgdGV4dFxyXG4kYmxhY2s6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7IC8vIEF2b2lkIHVzYWdlXHJcblxyXG4kYmx1ZTogICAgICAgICMwZjZjYmYgIWRlZmF1bHQ7XHJcbiRjeWFuOiAgICAgICAgIzAwODE5NiAhZGVmYXVsdDsgLy8gTm90IHVzZWQuXHJcbiRncmVlbjogICAgICAgIzM1N2EzMiAhZGVmYXVsdDtcclxuJHJlZDogICAgICAgICAjY2EzMTIwICFkZWZhdWx0O1xyXG4keWVsbG93OiAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmQtY29sb3I6ICNmZjc1MTggIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvcikgIWRlZmF1bHQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7IC8vICMxYTFhMWFcclxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJGlvbi1pdGVtLWJhY2tncm91bmQ6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcms6ICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJHByaW1hcnk6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogICRncmF5LTMwMCAhZGVmYXVsdDtcclxuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAkeWVsbG93ICFkZWZhdWx0O1xyXG4kc3VjY2VzczogICAgJGdyZWVuICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XHJcbiRsaWdodDogICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRtZWRpdW06ICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbiRkYXJrOiAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcblxyXG4kY29sb3JzOiAgKFxyXG4gICAgcHJpbWFyeTogKGxpZ2h0OiAkcHJpbWFyeSwgZGFyazogJHByaW1hcnkpLFxyXG4gICAgc2Vjb25kYXJ5OiAobGlnaHQ6ICRzZWNvbmRhcnksIGRhcms6ICRncmF5LTcwMCksXHJcbiAgICBzdWNjZXNzOiAobGlnaHQ6ICRzdWNjZXNzKSxcclxuICAgIHdhcm5pbmc6IChsaWdodDogJHdhcm5pbmcpLFxyXG4gICAgZGFuZ2VyOiAgKGxpZ2h0OiAkZGFuZ2VyKSxcclxuICAgIGluZm86IChsaWdodDogJGluZm8pLFxyXG4gICAgbGlnaHQ6IChsaWdodDogJGxpZ2h0LCBkYXJrOiAkZGFyayksXHJcbiAgICBtZWRpdW06IChsaWdodDogJG1lZGl1bSwgZGFyazogJGdyYXktMjAwKSxcclxuICAgIGRhcms6IChsaWdodDogJGRhcmssIGRhcms6ICRsaWdodCksXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vKipcclxuICogTGF5b3V0IEJyZWFrcG9pbnRzXHJcbiAqXHJcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xyXG4gKi9cclxuXHJcbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogMCxcclxuICAgIHNtOiA1NzZweCxcclxuICAgIG1kOiA3NjhweCxcclxuICAgIGxnOiA5OTJweCxcclxuICAgIHRhYmxldDogOTkycHgsXHJcbiAgICB4bDogMTIwMHB4XHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1jb3Vyc2UtaW1hZ2UtYmFja2dyb3VuZDogIzgxZWNlYywgIzc0YjlmZiwgI2EyOWJmZSwgI2RmZTZlOSwgIzAwYjg5NCwgIzA5ODRlMywgI2IyYmVjMywgI2ZkY2I2ZSwgI2ZkNzlhOCwgIzZjNWNlNyAhZGVmYXVsdDtcclxuJGNvcmUtZGQtcXVlc3Rpb24tY29sb3JzOiAjRkZGRkZGLCAjQjBDNERFLCAjRENEQ0RDLCAjRDhCRkQ4LCAjODdDRUZBLCAjREFBNTIwLCAjRkZENzAwLCAjRjBFNjhDICFkZWZhdWx0O1xyXG4kY29yZS10ZXh0LWhpZ2h0bGlnaHQtYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWZpeGVkLXVybDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWRhc2hib2FyZC1sb2dvOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtYWx3YXlzLXNob3ctbWFpbi1tZW51OiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtZm9ybWF0LXRleHQtbmV2ZXItc2hvcnRlbjogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1oaWRlLWNvdXJzZWltYWdlLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1zZWN0aW9uLXNlbGVjdG9yOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWNvdXJzZS1oaWRlLXRodW1iLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtY291cnNlLXRodW1iLW9uLWNhcmRzLWJhY2tncm91bmQ6IG51bGwgIWRlZmF1bHQ7XHJcbiRjb3JlLWNvdXJzZS1oaWRlLXByb2dyZXNzLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbG9naW4gcGFnZS5cclxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZS1kYXJrOiAkY29yZS1sb2dpbi1idXR0b24tb3V0bGluZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvcjogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3ItZGFyazogJHRleHQtY29sb3ItZGFyayAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1mb3Jnb3QtcGFzc3dvcmQ6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLW5lZWQtaGVscDogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS4gKGRlcHJlY2F0ZWQgb24gNC4wKVxyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZXVybDogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHVzZXIgcGFnZS5cclxuJGNvcmUtdXNlci1oaWRlLXNpdGVpbmZvOiAkY29yZS1tb3JlLWhpZGUtc2l0ZWluZm8gIWRlZmF1bHQ7XHJcbiRjb3JlLXVzZXItaGlkZS1zaXRlbmFtZTogJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lICFkZWZhdWx0O1xyXG4kY29yZS11c2VyLWhpZGUtc2l0ZXVybDogJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmwgIWRlZmF1bHQ7XHJcblxyXG4vLyBBY3Rpdml0eSBpY29uIGJhY2tncm91bmQgY29sb3JzLlxyXG4kYWN0aXZpdHktaWNvbi1jb2xvcnM6IChcclxuICAgIGFkbWluaXN0cmF0aW9uOiAjNWQ2M2Y2LFxyXG4gICAgYXNzZXNzbWVudDogI2ViNjZhMixcclxuICAgIGNvbGxhYm9yYXRpb246ICNmNzYzNGQsXHJcbiAgICBjb21tdW5pY2F0aW9uOiAjMTFhNjc2LFxyXG4gICAgY29udGVudDogIzM5OWJlMixcclxuICAgIGludGVyZmFjZTogI2EzNzhmZlxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gQ2FsZW5kYXIgZXZlbnQgY2F0ZWdvcnkgYmFja2dyb3VuZCBjb2xvcnMuXHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jb2xvcnM6IChcclxuICAgIGNhdGVnb3J5OiAjOGUyNGFhLFxyXG4gICAgY291cnNlOiAkcmVkLFxyXG4gICAgZ3JvdXA6ICR5ZWxsb3csXHJcbiAgICB1c2VyOiAkYmx1ZSxcclxuICAgIHNpdGU6ICRncmVlblxyXG4pICFkZWZhdWx0O1xyXG4iLCJAaW1wb3J0IFwifnRoZW1lL2dsb2JhbHMuc2Nzc1wiO1xyXG5cclxuOmhvc3QtY29udGV4dCguaW9zKSB7XHJcbiAgICBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1jb250ZW50LWJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYWx0ZXJuYXRpdmUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xyXG5cclxuICAgICY6OnBhcnQoc2Nyb2xsKSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5hZGRvbi1tZXNzYWdlcy1kYXRlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLy8gTWVzc2FnZSBpdGVtLlxyXG5pb24taXRlbS5hZGRvbi1tZXNzYWdlIHtcclxuICAgIC0tbWVzc2FnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLWJnKTtcclxuICAgIC0tbWVzc2FnZS1hY3RpdmF0ZWQtYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xyXG4gICAgLS1tZXNzYWdlLWFsaWdubWVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tZWRpdW0tcmFkaXVzKTtcclxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLW1lc3NhZ2UtYmFja2dyb3VuZCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZXNzYWdlLWJhY2tncm91bmQpO1xyXG4gICAgYWxpZ24tc2VsZjogdmFyKC0tbWVzc2FnZS1hbGlnbm1lbnQpO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogdmFyKC0tbGlzdC1pdGVtLW1heC13aWR0aCk7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IHZhcigtLWExMXktbWluLXRhcmdldC1zaXplKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIEBpbmNsdWRlIGNvcmUtdHJhbnNpdGlvbih3aWR0aCk7XHJcbiAgICAvLyBUaGlzIGlzIG5lZWRlZCB0byBkaXNwbGF5IGJ1YmJsZSB0YWlscy5cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgICY6OnBhcnQobmF0aXZlKSB7XHJcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMnB4IHJnYmEoMCwwLDAsLjMpKTtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMnB4IHJnYmEoMCwwLDAsLjMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3JlLWZvcm1hdC10ZXh0ID4gcDpvbmx5LWNoaWxkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZG9uLW1lc3NhZ2UtdXNlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcclxuXHJcbiAgICAgICAgY29yZS11c2VyLWF2YXRhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAtLWNvcmUtYXZhdGFyLXNpemU6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWF2YXRhci1zaXplKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1ub3RlLXRleHQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1ub3RlLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJlt0YXBwYWJsZV06YWN0aXZlIHtcclxuICAgICAgICAtLW1lc3NhZ2UtYmFja2dyb3VuZDogdmFyKC0tbWVzc2FnZS1hY3RpdmF0ZWQtYmFja2dyb3VuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZG9uLW1lc3NhZ2UtdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWlsIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tbWVzc2FnZS1iYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWZpbmVzIHdoZW4gYW4gaXRlbS1tZXNzYWdlIGlzIHRoZSB1c2VyJ3MuXHJcbiAgICAmLmFkZG9uLW1lc3NhZ2UtbWluZSB7XHJcbiAgICAgICAgLS1tZXNzYWdlLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1iZyk7XHJcbiAgICAgICAgLS1tZXNzYWdlLWFjdGl2YXRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYWN0aXZhdGVkLWJnKTtcclxuICAgICAgICAtLW1lc3NhZ2UtYWxpZ25tZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgLnNwaW5uZXIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbG9hdChlbmQpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4oMnB4LCAtM3B4LCAtMnB4LCA1cHgpO1xyXG5cclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFpbCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKG51bGwsIC04cHgsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbChudWxsLCAtMC41cmVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIC50YWlsIHtcclxuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihudWxsLCBudWxsLCBudWxsLCAtOHB4KTtcclxuICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgtMC41cmVtLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkb24tbWVzc2FnZXMtZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmFkZG9uLW1lc3NhZ2Utbm8tdXNlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG4vKipcbiAqIEltcG9ydGVkIGlvbmljIHN0cmluZyBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmcuc2Nzc1xuICovXG4vKipcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcbiAqL1xuLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cbi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQubWl4aW5zLnNjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xuICovXG4vKipcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICovXG4vKipcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxuICovXG4vKlxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxuICovXG4vKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuLyoqXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcbiAqXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcbiAqL1xuOmhvc3QtY29udGV4dCguaW9zKSBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tY29udGVudC1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xufVxuaW9uLWNvbnRlbnQ6OnBhcnQoc2Nyb2xsKSB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XG59XG5cbi5hZGRvbi1tZXNzYWdlcy1kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbmlvbi1pdGVtLmFkZG9uLW1lc3NhZ2Uge1xuICAtLW1lc3NhZ2UtYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1iZyk7XG4gIC0tbWVzc2FnZS1hY3RpdmF0ZWQtYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xuICAtLW1lc3NhZ2UtYWxpZ25tZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZGl1bS1yYWRpdXMpO1xuICBwYWRkaW5nOiAwIDhweCAwIDhweDtcbiAgbWFyZ2luOiA4cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbWVzc2FnZS1iYWNrZ3JvdW5kKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWVzc2FnZS1iYWNrZ3JvdW5kKTtcbiAgYWxpZ24tc2VsZjogdmFyKC0tbWVzc2FnZS1hbGlnbm1lbnQpO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IHZhcigtLWxpc3QtaXRlbS1tYXgtd2lkdGgpO1xuICAtLW1pbi1oZWlnaHQ6IHZhcigtLWExMXktbWluLXRhcmdldC1zaXplKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5pb24taXRlbS5hZGRvbi1tZXNzYWdlOjpwYXJ0KG5hdGl2ZSkge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1pdGVtLmFkZG9uLW1lc3NhZ2U6aG92ZXIge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xufVxuaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSBjb3JlLWZvcm1hdC10ZXh0ID4gcDpvbmx5LWNoaWxkIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZS11c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5pb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlLXVzZXIgY29yZS11c2VyLWF2YXRhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWNvcmUtYXZhdGFyLXNpemU6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWF2YXRhci1zaXplKTtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZS11c2VyIGRpdiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5pb24taXRlbS5hZGRvbi1tZXNzYWdlIGlvbi1ub3RlIHtcbiAgY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2Utbm90ZS10ZXh0KTtcbiAgZm9udC1zaXplOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW5vdGUtZm9udC1zaXplKTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbmlvbi1pdGVtLmFkZG9uLW1lc3NhZ2VbdGFwcGFibGVdOmFjdGl2ZSB7XG4gIC0tbWVzc2FnZS1iYWNrZ3JvdW5kOiB2YXIoLS1tZXNzYWdlLWFjdGl2YXRlZC1iYWNrZ3JvdW5kKTtcbn1cbmlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbmlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgLmFkZG9uLW1lc3NhZ2UtdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZS10ZXh0ICoge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAudGFpbCB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMC41cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1tZXNzYWdlLWJhY2tncm91bmQpO1xufVxuaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUge1xuICAtLW1lc3NhZ2UtYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWJnKTtcbiAgLS1tZXNzYWdlLWFjdGl2YXRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYWN0aXZhdGVkLWJnKTtcbiAgLS1tZXNzYWdlLWFsaWdubWVudDogZmxleC1lbmQ7XG59XG5pb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAuc3Bpbm5lciB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtM3B4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG59XG5bZGlyPXJ0bF0gaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgLnNwaW5uZXIsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAuc3Bpbm5lciB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAuc3Bpbm5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDVweDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cHg7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiAtM3B4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAtM3B4O1xuICB9XG59XG5pb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAuc3Bpbm5lciBzdmcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgLnRhaWwge1xuICByaWdodDogLThweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xufVxuW2Rpcj1ydGxdIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lIC50YWlsLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgLnRhaWwge1xuICBsZWZ0OiB1bnNldDtcbiAgcmlnaHQ6IHVuc2V0O1xuICBsZWZ0OiAtOHB4O1xufVxuXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAudGFpbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC0wLjVyZW07XG4gIH1cbn1cbmlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1ub3QtbWluZSAudGFpbCB7XG4gIGxlZnQ6IC04cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xufVxuW2Rpcj1ydGxdIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1ub3QtbWluZSAudGFpbCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1ub3QtbWluZSAudGFpbCB7XG4gIGxlZnQ6IHVuc2V0O1xuICByaWdodDogdW5zZXQ7XG4gIHJpZ2h0OiAtOHB4O1xufVxuXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgLnRhaWwge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogLTAuNXJlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAtMC41cmVtO1xuICB9XG59XG5pb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlcy1kZWxldGUtYnV0dG9uIHtcbiAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IHZhcigtLWExMXktbWluLXRhcmdldC1zaXplKSAhaW1wb3J0YW50O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbmlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgLmFkZG9uLW1lc3NhZ2VzLWRlbGV0ZS1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgY29sb3I6IHZhcigtLWRhbmdlcik7XG59XG5pb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-viewer-viewer-module.js.map