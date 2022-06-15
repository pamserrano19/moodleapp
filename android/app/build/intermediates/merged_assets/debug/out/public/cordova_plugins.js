
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-camera.Camera",
          "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "Camera"
        ]
        },
      {
          "id": "cordova-plugin-camera.CameraPopoverHandle",
          "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "CameraPopoverHandle"
        ]
        },
      {
          "id": "cordova-plugin-camera.CameraPopoverOptions",
          "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "CameraPopoverOptions"
        ]
        },
      {
          "id": "cordova-plugin-media-capture.CaptureAudioOptions",
          "file": "plugins/cordova-plugin-media-capture/www/CaptureAudioOptions.js",
          "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
          "CaptureAudioOptions"
        ]
        },
      {
          "id": "cordova-plugin-media-capture.CaptureError",
          "file": "plugins/cordova-plugin-media-capture/www/CaptureError.js",
          "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
          "CaptureError"
        ]
        },
      {
          "id": "cordova-plugin-media-capture.CaptureImageOptions",
          "file": "plugins/cordova-plugin-media-capture/www/CaptureImageOptions.js",
          "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
          "CaptureImageOptions"
        ]
        },
      {
          "id": "cordova-plugin-media-capture.CaptureVideoOptions",
          "file": "plugins/cordova-plugin-media-capture/www/CaptureVideoOptions.js",
          "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
          "CaptureVideoOptions"
        ]
        },
      {
          "id": "cordova-plugin-chooser.Chooser",
          "file": "plugins/cordova-plugin-chooser/www/chooser.js",
          "pluginId": "cordova-plugin-chooser",
        "clobbers": [
          "chooser"
        ]
        },
      {
          "id": "cordova-plugin-network-information.Connection",
          "file": "plugins/cordova-plugin-network-information/www/Connection.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "Connection"
        ]
        },
      {
          "id": "@moodlehq/cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/@moodlehq/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "@moodlehq/cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open"
        ]
        },
      {
          "id": "cordova-plugin-advanced-http.http",
          "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
          "pluginId": "cordova-plugin-advanced-http",
        "clobbers": [
          "cordova.plugin.http"
        ]
        },
      {
          "id": "cordova-clipboard.Clipboard",
          "file": "plugins/cordova-clipboard/www/clipboard.js",
          "pluginId": "cordova-clipboard",
        "clobbers": [
          "cordova.plugins.clipboard"
        ]
        },
      {
          "id": "cordova-plugin-file-opener2.FileOpener2",
          "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
          "pluginId": "cordova-plugin-file-opener2",
        "clobbers": [
          "cordova.plugins.fileOpener2"
        ]
        },
      {
          "id": "cordova-plugin-badge.Badge",
          "file": "plugins/cordova-plugin-badge/www/badge.js",
          "pluginId": "cordova-plugin-badge",
        "clobbers": [
          "cordova.plugins.notification.badge"
        ]
        },
      {
          "id": "@moodlehq/cordova-plugin-local-notification.LocalNotification",
          "file": "plugins/@moodlehq/cordova-plugin-local-notification/www/local-notification.js",
          "pluginId": "@moodlehq/cordova-plugin-local-notification",
        "clobbers": [
          "cordova.plugins.notification.local"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "com-darryncampbell-cordova-plugin-intent.IntentShim",
          "file": "plugins/com-darryncampbell-cordova-plugin-intent/www/IntentShim.js",
          "pluginId": "com-darryncampbell-cordova-plugin-intent",
        "clobbers": [
          "intentShim"
        ]
        },
      {
          "id": "@moodlehq/cordova-plugin-ionic-webview.IonicWebView",
          "file": "plugins/@moodlehq/cordova-plugin-ionic-webview/src/www/util.js",
          "pluginId": "@moodlehq/cordova-plugin-ionic-webview",
        "clobbers": [
          "Ionic.WebView"
        ]
        },
      {
          "id": "cordova-plugin-media-capture.MediaFile",
          "file": "plugins/cordova-plugin-media-capture/www/MediaFile.js",
          "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
          "MediaFile"
        ]
        },
      {
          "id": "cordova-plugin-media-capture.MediaFileData",
          "file": "plugins/cordova-plugin-media-capture/www/MediaFileData.js",
          "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
          "MediaFileData"
        ]
        },
      {
          "id": "cordova-plugin-camera.camera",
          "file": "plugins/cordova-plugin-camera/www/Camera.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "navigator.camera"
        ]
        },
      {
          "id": "cordova-plugin-network-information.network",
          "file": "plugins/cordova-plugin-network-information/www/network.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "navigator.connection"
        ]
        },
      {
          "id": "cordova-plugin-media-capture.capture",
          "file": "plugins/cordova-plugin-media-capture/www/capture.js",
          "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
          "navigator.device.capture"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.geolocation",
          "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "navigator.geolocation"
        ]
        },
      {
          "id": "@moodlehq/phonegap-plugin-push.PushNotification",
          "file": "plugins/@moodlehq/phonegap-plugin-push/www/push.js",
          "pluginId": "@moodlehq/phonegap-plugin-push",
        "clobbers": [
          "PushNotification"
        ]
        },
      {
          "id": "@moodlehq/cordova-plugin-qrscanner.QRScanner",
          "file": "plugins/@moodlehq/cordova-plugin-qrscanner/www/www.min.js",
          "pluginId": "@moodlehq/cordova-plugin-qrscanner",
        "clobbers": [
          "QRScanner"
        ]
        },
      {
          "id": "cordova-sqlite-storage.SQLitePlugin",
          "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
          "pluginId": "cordova-sqlite-storage",
        "clobbers": [
          "SQLitePlugin"
        ]
        },
      {
          "id": "cordova-plugin-file.DirectoryEntry",
          "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.DirectoryEntry"
        ]
        },
      {
          "id": "cordova-plugin-file.DirectoryReader",
          "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.DirectoryReader"
        ]
        },
      {
          "id": "cordova-plugin-file.Entry",
          "file": "plugins/cordova-plugin-file/www/Entry.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.Entry"
        ]
        },
      {
          "id": "cordova-plugin-file.File",
          "file": "plugins/cordova-plugin-file/www/File.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.File"
        ]
        },
      {
          "id": "cordova-plugin-file.FileEntry",
          "file": "plugins/cordova-plugin-file/www/FileEntry.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileEntry"
        ]
        },
      {
          "id": "cordova-plugin-file.FileError",
          "file": "plugins/cordova-plugin-file/www/FileError.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileError"
        ]
        },
      {
          "id": "cordova-plugin-file.FileReader",
          "file": "plugins/cordova-plugin-file/www/FileReader.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileReader"
        ]
        },
      {
          "id": "cordova-plugin-file.FileSystem",
          "file": "plugins/cordova-plugin-file/www/FileSystem.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileSystem"
        ]
        },
      {
          "id": "@moodlehq/cordova-plugin-file-transfer.FileTransfer",
          "file": "plugins/@moodlehq/cordova-plugin-file-transfer/www/FileTransfer.js",
          "pluginId": "@moodlehq/cordova-plugin-file-transfer",
        "clobbers": [
          "window.FileTransfer"
        ]
        },
      {
          "id": "@moodlehq/cordova-plugin-file-transfer.FileTransferError",
          "file": "plugins/@moodlehq/cordova-plugin-file-transfer/www/FileTransferError.js",
          "pluginId": "@moodlehq/cordova-plugin-file-transfer",
        "clobbers": [
          "window.FileTransferError"
        ]
        },
      {
          "id": "cordova-plugin-file.FileUploadOptions",
          "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileUploadOptions"
        ]
        },
      {
          "id": "cordova-plugin-file.FileUploadResult",
          "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileUploadResult"
        ]
        },
      {
          "id": "cordova-plugin-file.FileWriter",
          "file": "plugins/cordova-plugin-file/www/FileWriter.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileWriter"
        ]
        },
      {
          "id": "cordova-plugin-file.Flags",
          "file": "plugins/cordova-plugin-file/www/Flags.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.Flags"
        ]
        },
      {
          "id": "cordova-plugin-file.LocalFileSystem",
          "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.LocalFileSystem"
        ],
        "merges": [
          "window"
        ]
        },
      {
          "id": "cordova-plugin-media.Media",
          "file": "plugins/cordova-plugin-media/www/Media.js",
          "pluginId": "cordova-plugin-media",
        "clobbers": [
          "window.Media"
        ]
        },
      {
          "id": "cordova-plugin-media.MediaError",
          "file": "plugins/cordova-plugin-media/www/MediaError.js",
          "pluginId": "cordova-plugin-media",
        "clobbers": [
          "window.MediaError"
        ]
        },
      {
          "id": "cordova-plugin-file.Metadata",
          "file": "plugins/cordova-plugin-file/www/Metadata.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.Metadata"
        ]
        },
      {
          "id": "cordova-plugin-customurlscheme.LaunchMyApp",
          "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
          "pluginId": "cordova-plugin-customurlscheme",
        "clobbers": [
          "window.plugins.launchmyapp"
        ]
        },
      {
          "id": "cordova-plugin-file.ProgressEvent",
          "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.ProgressEvent"
        ]
        },
      {
          "id": "cordova-plugin-file.requestFileSystem",
          "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.requestFileSystem"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "@moodlehq/cordova-plugin-zip.Zip",
          "file": "plugins/@moodlehq/cordova-plugin-zip/zip.js",
          "pluginId": "@moodlehq/cordova-plugin-zip",
        "clobbers": [
          "zip"
        ]
        },
      {
          "id": "cordova-plugin-advanced-http.cookie-handler",
          "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.dependency-validator",
          "file": "plugins/cordova-plugin-advanced-http/www/dependency-validator.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.error-codes",
          "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.global-configs",
          "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.helpers",
          "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.js-util",
          "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.local-storage-store",
          "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.lodash",
          "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.messages",
          "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.ponyfills",
          "file": "plugins/cordova-plugin-advanced-http/www/ponyfills.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.public-interface",
          "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.tough-cookie",
          "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-advanced-http.url-util",
          "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
          "pluginId": "cordova-plugin-advanced-http"
        },
      {
          "id": "cordova-plugin-file.fileSystems",
          "file": "plugins/cordova-plugin-file/www/fileSystems.js",
          "pluginId": "cordova-plugin-file"
        },
      {
          "id": "cordova-plugin-file.isChrome",
          "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
          "pluginId": "cordova-plugin-file",
        "runs": true
        },
      {
          "id": "cordova-plugin-file.fileSystems-roots",
          "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
          "pluginId": "cordova-plugin-file",
        "runs": true
        },
      {
          "id": "cordova-plugin-geolocation.PositionError",
          "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
          "pluginId": "cordova-plugin-geolocation",
        "runs": true
        },
      {
          "id": "cordova-plugin-media-capture.helpers",
          "file": "plugins/cordova-plugin-media-capture/www/helpers.js",
          "pluginId": "cordova-plugin-media-capture",
        "runs": true
        },
      {
          "id": "cordova-plugin-media-capture.init",
          "file": "plugins/cordova-plugin-media-capture/www/android/init.js",
          "pluginId": "cordova-plugin-media-capture",
        "runs": true
        },
      {
          "id": "es6-promise-plugin.Promise",
          "file": "plugins/es6-promise-plugin/www/promise.js",
          "pluginId": "es6-promise-plugin",
        "runs": true
        },
      {
          "id": "cordova-plugin-file.fileSystemPaths",
          "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
          "pluginId": "cordova-plugin-file",
        "merges": [
          "cordova"
        ],
        "runs": true
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.bluetooth.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.bluetooth"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.calendar.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.calendar"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.camera.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.camera"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.contacts.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.contacts"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_External_Storage",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.external_storage.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.external_storage"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Location",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.location.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.location"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.microphone.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.microphone"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_NFC",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.nfc.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.nfc"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.notifications.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.notifications"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.wifi.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.wifi"
        ]
        },
      {
          "id": "cordova-plugin-file.androidFileSystem",
          "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
          "pluginId": "cordova-plugin-file",
        "merges": [
          "FileSystem"
        ]
        },
      {
          "id": "cordova-plugin-file.resolveLocalFileSystemURI",
          "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
          "pluginId": "cordova-plugin-file",
        "merges": [
          "window"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "@moodlehq/cordova-plugin-file-transfer": "1.7.1-moodle.5",
      "@moodlehq/cordova-plugin-inappbrowser": "5.0.0-moodle.3",
      "@moodlehq/cordova-plugin-ionic-webview": "5.0.0-moodle.1",
      "@moodlehq/cordova-plugin-local-notification": "0.9.0-moodle.3",
      "@moodlehq/cordova-plugin-qrscanner": "3.0.1-moodle.2",
      "@moodlehq/cordova-plugin-zip": "3.1.0-moodle.1",
      "@moodlehq/phonegap-plugin-push": "2.0.0-moodle.3",
      "com-darryncampbell-cordova-plugin-intent": "2.2.0",
      "cordova-clipboard": "1.3.0",
      "cordova-plugin-advanced-http": "3.2.2",
      "cordova-plugin-badge": "0.8.8",
      "cordova-plugin-camera": "6.0.0",
      "cordova-plugin-chooser": "1.3.1",
      "cordova-plugin-customurlscheme": "5.0.2",
      "cordova-plugin-device": "2.0.3",
      "cordova-plugin-file": "6.0.2",
      "cordova-plugin-file-opener2": "3.0.5",
      "cordova-plugin-geolocation": "4.1.0",
      "cordova-plugin-media": "5.0.4",
      "cordova-plugin-media-capture": "3.0.3",
      "cordova-plugin-network-information": "3.0.0",
      "cordova-plugin-prevent-override": "1.0.1",
      "cordova-plugin-statusbar": "3.0.0",
      "cordova-sqlite-storage": "6.0.0",
      "cordova.plugins.diagnostic": "6.1.1",
      "es6-promise-plugin": "4.2.2",
      "cordova-plugin-androidx-adapter": "1.1.3"
    };
    // BOTTOM OF METADATA
    });
    