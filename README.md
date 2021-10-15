# Posts & Comments
Mobile App implemented on stack: React Native + TypeScript + Redux + Styled Components

[Here](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40blackray/postscomments-7a87b9af3eaa47058ac691e2c1641d1c-signed.apk) you can download `.apk` file to install mobile application for Android.

# Start the build
Run `expo build:android` or `expo build:ios`. If you don't already have a development server running for this project, `expo` will start one for you.

## If you choose to build for Android
When building for android you can choose to build APK (`expo build:android -t apk`) or Android App Bundle (`expo build:android -t app-bundle`).

The first time you build the project you will be asked whether you'd like to upload a keystore or have us handle it for you. If you don't know what a keystore is, you can have us generate one for you. Otherwise, feel free to upload your own.

## If you choose to build for iOS
You can build standalone apps for iOS with two different types, an archive (`expo build:ios -t archive`) or simulator (`expo build:ios -t simulator`) build. With the simulator build, you can test your standalone app on a simulator. If you want to publish your app to the store or distribute it with tools like TestFlight, you have to use the archive.

When building for iOS, you are given a choice of letting Expo create the necessary credentials for you, while still having a chance to provide your own overrides. Your Apple ID and password are used locally and are never saved on Expo's servers.
