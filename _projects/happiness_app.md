---
layout: page
title: Happiness App
description: A mood tracking and social journaling web app where you can rate your happiness everyday
    and view trends for you and your friends.
img: assets/img/happiness_profile.png
img_contain: true
importance: 1
category: work
github: https://github.com/jonathanjma/HappinessApp
website: https://happinessapp.me
---

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/happiness_profile.png" title="happiness app profile page" class="img-fluid rounded z-depth-1" width="65%" %}
    </div>
</div>
<div class="caption mt-0">
    User profile page for Happiness App
</div>

Happiness App is a mood tracking and social journaling web app created with the goal of encouraging self reflection, 
fostering stronger connections, and allowing people to more easily keep in touch. This is done by having users rate how
happy they feel everyday on a scale of 1 to 10 as well as leaving a comment summarizing the major events that happened
during their day. Each user's happiness data is can then be presented in different forms, such as a graph, statistics, 
or a color-coded monthly view, allowing them to draw insights and reflect on how they have been feeling. Users can also 
create groups with other users, allowing them aggregate all their happiness data into a shared table + graphs and easily 
see how everybody is doing. We have found that this was a great way for friends to keep in touch, especially if you don't
see them too often or are on school break.

Currently, Happiness App is available as a [beta web app](https://happinessapp.me) and we are currently working towards a full
release in late August. More app screenshots can be seen below.

In terms of the tech stack, Happiness App is built using React for the frontend, Flask for the backend, and 
SQLAlchemy + PostgreSQL for the database. Documentation for the RESTful API, which contains for information about
the API endpoints, authentication requirements, and request/response schemas, can be found 
[here](https://happiness-app-backend.herokuapp.com/).

### More Screenshots
<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/happiness_group.png" title="happiness app group page" width="65%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Groups Page (monthly table view)
</div>

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/happiness_history.png" title="happiness app history page" width="65%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Happiness History Page (monthly view)
</div>