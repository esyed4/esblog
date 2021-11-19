---
layout: post
title:  "An introduction to Docker Containers."
date:   2021-11-18 21:17:00 -0500
categories: jekyll update
summary: "How does standardized units of software packaging help us develop and deploy our code?"
---

Docker is a wonderful product that allows code to be developed in something called a "container". A container packages a
standard unit of software that is able to accumulate all of the involved code and dependencies such that if run on any
machine, all you would need is the docker container image. An Docker image is an executable package of a docker container.

![Docker Container Image]({{ site.baseurl }}/images/docker_container_image.png "Docker Containers Visualized")

Docker images are a compilation of files that include all required dependencies, installations, and code to fully configure
and run an operational container environment. These images are created by constructing a Dockerfile that contains the designated
information needed to create a docker image. You can also create an image from a running container on an existing Docker image,
and changing the container environment and saving it as the subsequent new Docker image.

These basics and more are covered in depth on [Docker's website](https://www.docker.com/resources/what-container) (with helpful images!).

Docker images and containers in short might help you deploy a software you are working on larger scales with more ease.
There are definitely complications to hosting the docker image compared to some more traditional routes, but the end goal
leaves you with a product that can be compartmentalized into a container, and then can be run easily on many other
environements.


