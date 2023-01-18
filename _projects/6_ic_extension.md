---
layout: page
title: Infinite Campus Grades++
description: Chrome extension that revamps high school grades website with a more intuitive UI, 
    grade simulation, and other missing features
img: assets/img/ic_extension.png
img_contain: true
importance: 6
category: work
github: https://github.com/jonathanjma/Infinite-Campus
website: https://chrome.google.com/webstore/detail/infinite-campus-grades%20%20/kfanojpgbklafmhammpnbajkkdpehign
---

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/ic_extension.png" title="ic logo" height="150vw" %}
    </div>
</div>

For my senior year, my school district started using the Infinite Campus student information system to replace
the Schoolloop platform which had been used for many years. However, my friends and students at my school
quickly began complaining about the new system. They expressed frustration at the cumbersome UI which required 
many more clicks to access assignment and overall grades. Another common source of annoyance was the lack of
any existing Chrome extensions or apps which could allow students to simulate the effect of new assignments/tests
on their grade.

With loads of free time on my hands during winter break and having developed a Chrome extension recently during the
summer, I decided to give fixing this problem a try. Using Javascript, HTML, and a CSS theme library, I was able
to create Infinite Campus Grades++. My extension offered a clean and simple UI with easy to access grade information,
detailed grade simulation (adding/editing/deleting assignments, creating new categories/changing weights), 
and even a few extra features like the ability to calculate the lowest score you needed to keep an A, 
a grade history graph, and dark mode.

While I knew how useful my extension would be, I was extremely surprised by how popular it ended up getting. As of this writing,
which is approximately 1 year after the extension was released, it has over 1k installs, making it my first widely used
coding project!

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/ic_stats.png" title="chrome store stats" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Chrome Web Store graph showing # of weekly users since the extension was published
</div>

If you are a student in the FUSD school district and would like to download the extension, click
[here](https://chrome.google.com/webstore/detail/infinite-campus-grades%20%20/kfanojpgbklafmhammpnbajkkdpehign).

### Extension Screenshots
<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/ic_class.png" title="class page" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Class Page showing the grade breakdown, lowest score tool, and an expanded grading category
</div>

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/ic_graph.png" title="grade graph" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Grade History Graph  
</div>