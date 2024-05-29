---
layout: page
title: Happiness App
description: A mood tracking and social journaling app which allows you to keep track of 
  how you are feeling every day and stay connected with your friends.
img: assets/img/happiness/entries.png
img_contain: true
importance: 1
category: work
github: https://github.com/jonathanjma/HappinessApp
website: https://happinessapp.me
---

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/happiness/entries.png" title="happiness app entry creation" class="img-fluid rounded z-depth-1" width="80%" %}
    </div>
</div>
<div class="caption mt-0">
    Happiness App entry creation
</div>

Happiness App is a mood tracking and social journaling web app created with the goal of encouraging self reflection, 
fostering stronger connections, and allowing friends to more easily keep in touch. This is done by having users rate how
well they feel everyday on a scale of 0 to 10 (in 0.5 increments) as well as leaving a comment summarizing the major events that happened
during their day. Each user's happiness data can then be presented in different forms, such as in graphs, statistics, 
or a monthly calendar, allowing them to draw insights and reflect on how they have been feeling. Users can also 
create groups with other users, allowing them aggregate all their happiness data into a shared table + graphs and easily 
see how everybody is doing. We have found that this was a great way for friends to keep in touch, especially if you don't
see them too often or are on school break.

Other features include:
- Bidirectional infinite scroll interface for quickly viewing and editing happiness entries
- Sidebar easy creation of new happiness entries
- Ability to comment on other user's happiness entries
- Weekly and monthly graphs for both the user and groups
- Global search over all your happiness entries with filters
- Reads system to see new entries that were created since you last used the app
- Private **end-to-end encrypted** entries for entering information that you want to keep private
- Reminder emails in case you forget to submit your daily entry

Currently, Happiness App is available as a web app: [https://happinessapp.me](https://happinessapp.me). More app screenshots can be seen below.

In terms of the tech stack, Happiness App is built using React and TypeScript for the [frontend](https://github.com/jonathanjma/happiness-app-frontend), 
Flask for the [backend](https://github.com/jonathanjma/HappinessApp), and SQLAlchemy + PostgreSQL for the database. 
Additionally, throughout the development lifecycle, we used GitHub best practices, creating branches and pull requests for each feature 
as well as performing thorough code reviews in order to ensure code quality and catch potential bugs. Additionally, I created 
a CI action on GitHub which automatically runs the API's test suite on every push to ensure that we never experience any regression based bugs.

Documentation for the RESTful API, which contains for information about the API endpoints, authentication requirements, 
and request/response schemas, can be found in our API playground, which can be accessed [here](https://happiness-app-backend.herokuapp.com/docs).

### Dev Reflection

Happiness App has come a long way from our inspiration, a shared Google Sheets my friends used to share how we were doing every day.
Over roughly one year, we went from a core group of 3 devs which created the MVP (v1) to a group of 4 devs and 3 designers
where we completely redesigned the app from ground up (v2). 

A crucial aspect of this project, and something I love about it, was its collaborative aspect. Working with others on a larger-scale project like this 
has helped me to realize the importance of writing good documentation for the API, code reviews, and collaborating with the design team to balance user preferences with features we wanted to add.
There was also the constant theme was balancing the usability and practicality of a feature. For example, when I was implementing end-to-end encrypted journals, I had to balance usability with security
(ex. how often users should be required to log in). I also had to consider edge cases, such as data loss/recovery concerns if users forget their password. 
Thinking about questions like this is what I love about working on fun side projects like this!

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/happiness/design.png" title="Happiness App design evolution" width="80%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Design Evolution (v1 on the top, v2 on the bottom)
</div>

### More Screenshots
<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/happiness/statistics.png" title="Happiness App statistics page" width="80%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    User Statistics Page (monthly view)
</div>

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/happiness/profile.png" title="Happiness App profile page" width="80%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    User Profile Page
</div>

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/happiness/groups_feed.png" title="Happiness App group feed" width="80%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Groups Feed View
</div>

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/happiness/groups_table.png" title="Happiness App group table" width="80%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Groups Table View (monthly)
</div>