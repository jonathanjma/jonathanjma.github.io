---
layout: page
title: Windows-iOS Clipboard
description: Universal clipboard that allows for easier copying and pasting across different operating systems
    (ex. windows-iOS, linux-iOS)
img: assets/img/clipboard.png
img_contain: true
importance: 5
category: work
github: https://github.com/jonathanjma/windows-ios-clipboard
---

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/clipboard.png" title="clipboard icon" height="150vw" %}
    </div>
</div>

As a user of a Windows PC and an iPhone, one issue that has really annoyed me over the years is lack of
a convenient way to copy and paste text between my computer and my phone. And while I did find apps
online that allowed me to do this, they either cost money or seemed sketchy in some way. Therefore, I
decided that I would build my own universal clipboard.

My clipboard would have 3 parts: an API backend hosted on Firebase to store the clipboard data, a iOS Shortcut
to send/receive data on my phone, and a Python script to send/receive data on my computer.

The API backend is hosted using Firebase Hosting and uses Firebase Cloud Functions to perform actions
when an API call is received. Since a clipboard only has 2 main operations (copy and paste), my simple
API only has 2 endpoints (/push for copy and /get for paste). The clipboard data would be saved in Firebase
Realtime Database. Later on, after receiving some interest from my friends, I used Firebase Authentication to
implement a simple username/password user system.

For iOS/iPadOS, I used the Shortcuts app to create 2 shortcuts: 1 for copying and the other for pasting
(a snippet of the copy shortcut is shown below). For convenience, the shortcut can be added to the 
system share sheet and the user's home screen.

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/clipboard_ios.png" title="clipboard shortcut" width="40%" %}
    </div>
</div>

For desktop (Windows, Mac, Linux), I made a Python script that creates a tray icon that can be interacted with
to copy and paste text from the universal clipboard to the system clipboard (shown below). The script also
automatically installs its dependencies and can be made to launch on startup.

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/clipboard_python.png" title="clipboard python script" width="40%" %}
    </div>
</div>

While the clipboard only supports text, I hope to add support for images and other media in the future.

For setup instructions and API docs, check out the project's [GitHub repo](https://github.com/jonathanjma/windows-ios-clipboard).