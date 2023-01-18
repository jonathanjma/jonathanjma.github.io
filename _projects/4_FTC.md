---
layout: page
title: FIRST Tech Challenge
description: Every year, I helped to program a robot that could complete various tasks both autonomously 
    and under human control
img: assets/img/ff_robit.jpg
importance: 4
category: work
---

<div class="row my-3">
    <div class="col-sm">
        {% include figure.html path="assets/img/ff_robit.jpg" title="ftc robot" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm">
        {% include figure.html path="assets/img/ug_robit.jpg" title="ftc robot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: 2021-22 Season Robot, Right: 2020-2021 Season Robot    
</div>

From 2019-2022, I was a programmer on FIRST Tech Challenge (FTC) Team 7303. During my 3 years of FTC experience, I have learned
various technical skills and helped my team earn multiple awards in competitions, such as winning the prestigious Maryland
Tech Invitational in 2021 (out of the top 32 teams in the world), [Control Award](#control-award-and-world-record-videos) 
2nd Place at the 2022 Northern California Regionals for the most innovative software, and placing within 
the top 1% of the 6000 teams around the world.

Every year, the main objective of FTC was to work with my team to build and program a robot to complete in the year's challenge, 
which is made up of various tasks the robot needs to be able to preform both autonomously and under human control. Over the 
course of ~3-6 months, a robot needed to be designed, built and assembled, programmed, documented, tested, and rapidly iterated upon
as my team competed in tournaments.

Through FTC, I have gained valuable experience with OpenCV, finite state machines, PIDF control loops, path following, 
localization, Java, and JavaFX. I have also learned valuable experiences, such as valuing of simplicity instead of
overcomplicated mechanisms, the dangers of over-automation, and the importance of testing and collaboration.

### OpenCV
As FTC involves the robot to make decisions autonomously, using OpenCV for object-detection was crucial in order to 
determine the position and type of game element on the competition field. Examples of problems I solved using OpenCV include
determining the position of a patterned block surrounded by yellow blocks, the height of a stack of rings, 
and the positions of rings on the field so that they can be autonomously collected. Through solving these problems, 
I have learned about different color spaces (ex. HSV, YCrCb), color filtering, noise removal, contours, and regression.

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/ug_rings.png" title="opencv ring detection" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Finite State Machines
As robots built by my team are often very complicated, automation is required in order to prevent 
controlling the robot from becoming too cumbersome. Therefore, finite state machines can be used to automate robot
mechanisms by using data from the robot's sensors, encoder and velocity readings, and its position on the field to
perform complex routines. For example, I used this to automate the collection of a ring from the field, the aiming of a turret,
and the launching of the ring to accurately to hit a target 12+ feet away (even while the robot is moving). 

<div class="row">
    <div class="col-sm my-3 text-center">
        <video width="560" height="315" controls>
             <source src="{{ "/assets/img/move_shoot.mp4" | relative_url }}" type="video/mp4">
        </video>
    </div>
</div>

### PIDF Control Loops
Crucial to robot automation are control loops, a tuned PIDF control loop allows mechanisms like a turret,
arm, linear slides, and flywheel to reach their intended position/velocity. Additionally, I have also used this
to with drivetrain motors in order to perform path following. 

### Localization
In order to keep track of the robot's position as it moves on the field, I have experimented with deadwheel odometry 
wheels and the T265 VSLAM camera.

### Java + JavaFX
I used the JavaFX UI framework to create a custom robot simulator which allows my team to plan out robot paths
virtually without the robot and replay robot movements and actions from a log file to troubleshoot issues and improve strategy.

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/ftcsim.png" title="javafx simulator" width="50%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Using Java has allowed me gain experience in object-oriented programming, code organization practices, and documentation.

### Control Award and World Record Videos
<div class="row">
    <div class="col-sm my-3 text-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xHTFfvVyhNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QfE0kpx0uvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dfh_dphHmTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div>