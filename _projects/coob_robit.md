---
layout: page
title: Rubik's Cube Solving Robot
description: Arduino powered robot optimized to solve a Rubik’s Cube faster than a human!
img: assets/img/coob_robit.png
importance: 2
category: work
github: https://github.com/anshgandhi4/rubiks-cube-solver-robot
---

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/coob_robit.png" title="coob robit project" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

As a final project for one of my classes, me and my friends built a Rubik's cube solver robot that can solve a cube in just
over 3 seconds.

In order for the robot to solve the cube, it relies on 4 key components:
1. A Python program which runs an OpenCV program to detect the cube's state and generates a solution
2. An Arduino program which converts the solution into motor movements and moves the motors
3. The breadboard + stepper motor drivers which form the circuit needed to control the motors
4. A 3D printed motor housing that hold all 5 motors and motor adapters that allow each stepper motor to turn a face of the cube
Additionally, we also made a Python script that could convert any image into a mosaic that could be recreated with 9 Rubik's cubes.

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/cube_vision.png" title="cube opencv" width="75%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

One of my main responsibilities was on the software side of the robot, where I worked on the OpenCV pipelines that scanned
the cube and converted images into cube mosaics. This was achieved by dividing the input image by 9 squares and performing 
color thresholding on each (shown above). 

I also helped to research optimization strategies in order to improve the robot's solve time, which included: using a more 
optimized solving algorithm, using parallel moves to turn opposite sides of the cube at the same time, and tuning the 
various delays we used to control turning the cube's faces. After some testing, we found out that using the optimized 
algorithm reduced the average solving time from 9-12 seconds to 3-4 seconds! The GIF below shows a 3 second solve
performed after the optimizations.

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/cube_solve.gif" title="cube solve" width="75%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

On the electronics side, I helped to build the Arduino circuit and breadboard which powered and controlled the stepper motors.

The video below gives an in-depth explanation of all 4 components of the robot's solving process along with the troubleshooting 
we had to do along the way. Make sure to watch to the very end to see the image mosaic we made using the robot!

<div class="row">
    <div class="col-sm my-3 text-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KUTON_LL8Ps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div>