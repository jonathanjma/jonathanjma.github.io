---
layout: page
title: Alpha CubeSat
description: A 1U cubesat deploying from the ISS which aims to release an ultralight light sail
    as part of NASA's CubeSat Launch Initiative
img: assets/img/alpha_cubesat.png
importance: 1
category: work
github: https://github.com/Alpha-CubeSat/Alpha-Cubesat-Ground-Python
website: https://alphacubesat.cornell.edu
---

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/alpha_cubesat.png" title="alpha cubesat" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

In fall 2022, I joined the Space Systems Design Studio (SSDS) at Cornell, where I am working on the Alpha CubeSat project.
As part of NASA's CubeSat Launch Initiative, the Alpha CubeSat mission aims to launch a 1U cubesat from the 
International Space Station and verify the performance of an ultralight light sail.

As someone who had close to no knowledge about CubeSats prior to SSDS, I was drawn by the opportunity to try working in a field 
that I had never tried before. Not to mention that working with space related things is just awesome!

During my time at SSDS, I mainly worked on 2 projects: rewriting the CubeSat ground station software from the Clojure functional 
programming language to the Python Flask framework + React and a ground station to process and display data from the ChipSat 
computers attached to the light sail using Elasticsearch and Kibana.

In addition to software projects, I also worked in the cleanroom to help assemble the [flight version](#cubesat-pictures) of the cubesat!

### CubeSat Ground Station

After joining the Alpha project, I learned that the CubeSat ground station had been implemented in the Clojure functional programming
over the last few semesters. As a niche language, Clojure did have some minor benefits. However, it had major downsides — a high
learning curve and being difficult to easily read and understand — severely reducing its maintainability. Therefore, the team lead and I 
decided that it would be best to rewrite the ground station in Python.

After a few weeks learning the ropes of Clojure, I started translating the ground station's backend (which is responsible for processing 
CubeSat telemetry and sending commands) one file at a time. Immediately, the benefits became clear as the Python translation was much more 
concise and readable. An example is shown below, with Python on the left and Clojure on the right. By the end of the translation, running
a lines of code analysis showed between both versions showed that the new codebase was roughly 30% smaller!

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/python_clojure.png" title="python vs. clojure code comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Following the completion of the backend code translation, I used the Flask framework to develop the RESTful API that would allow the
control dashboard to communicate with the backend. After that, I used React to create a simple and intuitive control dashboard for
building and sending commands as well as seeing downlinked images and previously sent commands.

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/cubesat_dashboard.png" title="cubesat dashboard" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### ChipSat Ground Station

The 2nd project I am working on is the ChipSat ground station. Previously, it was decided that the ChipSats would use LoRa radio 
frequencies to downlink their data through [TinyGS](https://tinygs.com/), a worldwide network of 1000+ LoRa ground stations. Therefore, the ChipSat ground
station would receive the data packets from the TinyGS API, store them in an Elastisearch database, and display them in a Kibana 
data dashboard like the one shown below (which was created using data from a test satellite). The reason I chose Elasticsearch and 
Kibana was because to their close integration with each other as part of the Elastic Stack.

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/chipsat_dashboard.png" title="chipsat ground" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### CubeSat Pictures
<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/cubesat_portrait.jpg" title="cubesat portrait" width="40%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Portrait of me holding the completed CubeSat body at the end of my cleanroom shift (November 2022)
</div>

<div class="row">
    <div class="col-sm my-3 text-center">
        {% include figure.html path="assets/img/cubesat_complete.jpg" title="cubesat testing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Completed CubeSat body undergoing solar panel testing
</div>