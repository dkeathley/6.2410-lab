---
jupytext:
  formats: ipynb,markdown//md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.13.8
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"id": "glYBmb6VwOSN", "tags": ["remove-cell"]}

# Latex Headers

 - Ensure proper support for certain latex notation
 - Code below

$$\newcommand{\ket}[1]{\left|{#1}\right\rangle}$$
$$\newcommand{\bra}[1]{\left\langle{#1}\right|}$$
$$\newcommand{\braket}[2]{\left\langle{#1}\middle|{#2}\right\rangle}$$
$$\newcommand{\adagger}[0]{\hat{a}^{\dagger}}$$
$$\newcommand{\ahat}[0]{\hat{a}}$$
$$\newcommand{\bdagger}[0]{\hat{b}^{\dagger}}$$
$$\newcommand{\bhat}[0]{\hat{b}}$$
$$\newcommand{\cdagger}[0]{\hat{c}^{\dagger}}$$
$$\newcommand{\chat}[0]{\hat{c}}$$
$$\newcommand{\ddagger}[0]{\hat{d}^{\dagger}}$$
$$\newcommand{\dhat}[0]{\hat{d}}$$
$$\newcommand{\edagger}[0]{\hat{e}^{\dagger}}$$
$$\newcommand{\ehat}[0]{\hat{e}}$$
$$\newcommand{\fdagger}[0]{\hat{f}^{\dagger}}$$
$$\newcommand{\fhat}[0]{\hat{f}}$$

+++ {"id": "bcdff4e6-8251-4c63-9061-40ac42497a11"}

# LAB -- Interference, Entanglement and Quantum-Enhanced Metrology

+++

This lab will: (1) explore the fundamental properties of quantum particles using quantum optics; (2) explore the interactions of quantum particles through interference; and (3) demonstrate how these interactions can be exploited to engineer devices for quantum-enhanced sensing. 

Specific aims are:

 0. Introduction to the quantenkoffer
 1. Understand SPDC generation of entangled photon pairs
 2. Demonstrate polarization entanglement between two photons
 3. Explore interference of a photon with itself
 4. Use the properties of coincidence detection to measure the speed of light
 5. Explore the interference of two single photons: the Hong-Ou-Mandel effect
 6. Develop a NOON state interferometer demonstrating supersensitivty to path length changes

+++

## Aim 0: Introduction to the Quantenkoffer (PRELAB)

In this lab you will be using the [Quantenkoffer](https://qutools.com/quantenkoffer_science-kit/).  This instrument will allow us to explore the properties of single- and entangled photons. 

Before the lab, please familiarize yourself with the online materials.  We will also introduce specific materials throughout each of the aims below, but it is best if you familiarize yourself with the equipment ahead of time.

+++

## Aim 1: Understand SPDC generation of entangled photon pairs

In this exercise we will explore the spontaneous parametric down-conversion (SPDC) source of the Quantenkoffer.

+++

### Pre-Lab

The source is shown in {numref}`fig-t3e1-lab-spdc-source`.   A useful animation of the source and detailed description is provided on the [QuTools website](https://qutools.com/spdc-animated-source/).  

:::{figure-md} fig-t3e1-lab-spdc-source
<img src="FIGURES/T3E1-LAB-entanglement-interference/qk-spdc-source.png" alt="QK SPDC Source" class="bg-primary mb-1" width="800px">

A schematic view of the Quantenkoffer's SPDC source.
:::

Before the lab, please first watch this video demonstration of the source.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VNoJ-0_c6c8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

+++ {"tags": []}

### Lab Exercise

In the followign steps you will learn about the Quantenkoffer SPDC source through the detection of coincidence events.

 1. After turning the quantenkoffer on, place a periscope on each source port at the left side.  Thes bring up the underlying sources to the surface.
 2. Turn the red HeNe alignment source to full power.  You should now see a red light coming from each arm. This will be used for pre-alignment as it is following almost the same path as the single photon sources which are too weak for your eyes to detect.
 3. Now place a periscope on the two detector ports.  These send the light down to the single-photon detectors housed under the board. 
 4. Tap a source perisocope on the left to activate the source view on the control pad.  Adjust the mirrors A1, A2, and B1 and B2 to optimize the count rates on both detectors.
 5. Now, focusing on coincidence events (A and B), adjust the same mirrors to optimize coincidence counts.  You may note that this results in slightly less  than optimum total counts.  Tha is OK.  What we are doing is ensurin that we optimize for selection of entangled photon pairs for later experiments.
 
Once you have completed these steps, your setup should look like that in {numref}`fig-t3e1-lab-spdc-coincidence-setup`.  Typical values might be $3\times10^5$ total counts in A and B, with $1.5\times10^4$ coincidence counts.  You should not proceed until you get at least $1\times10^4$ coincidence counts.  
 
:::{figure-md} fig-t3e1-lab-spdc-coincidence-setup
<img src="FIGURES/T3E1-LAB-entanglement-interference/aim1-spdc-coincidence-setup.jpg" alt="QK SPDC Coincidences" class="bg-primary mb-1" width="800px">

What your setup should look like for coincidence detection of the SPDC photons.  Note that here there are between 250K to 300K single electron events in each arm with 14K coincidence events.  In the histogram view, you should see a strong peak near 0 seconds.
:::

What we have been doing is ensuring that we have selected the correct locations of the output cone angles from the SPDC crystal that correspond to photon pair locations.  There are many options for optimizing the counts in either detector A or B from either cone of the SPDC output, but only two relative locations will give truly entangled photon pairs.

+++

## Aim 2: Demonstration of Polarization Entanglement

+++

### Prelab

Before the lab, watch the following video related to the concepts we will explore in this part.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/126FD05vltU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

+++

## Aim 3: Single-Photon Interference

+++

In this ecxercise we will build an interferometer to explore single-photon interference.  We will explore the coherence time of the single photons as well as the concept of interaction free measurement made possible through the wave-particle duality.

+++

### Prelab

Before the lab, watch the following video related to the concepts we will explore in this part.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/4d6d8BB7_n0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

+++

### Lab Exercise

+++

#### Part 1: Single-Photon Interference

1. Construct a [Michelson interferometer](https://en.wikipedia.org/wiki/Michelson_interferometer) on the quantenkoffer.  There's technically not a fixed way to do this, but an example configuration is shown in {numref}`fig-t3e1-lab-michelson-setup`.  The important thing is that we need a motorized wedge in each arm for delay control of each arm. For alignment purposes, use the following procedure.
 
     - Turn the red reference laser on to full power
     - Direct the beam from one port to a beamsplitter using a 90 degree mirror
     - Place a wedge just after the transmitted and reflected arm
     - Using the alignment target, make sure the transmitted beam is aligned to the target with the 90 degree mirror
     - Now do the same on the reflected path using the beamsplitter
     - Place a flat mirror on each arm
     - Looking at the output of the beamsplitter, you should see two beams.  Make sure both ar aligned to the target just after the beamsplitter
     - Now let the beam travel to a flat surface further away (e.g. the wall or a board) -- you should see two dots
     - Overlap the two dots using a slight adjustment of the beamsplitter -- you will notice interference flickering when they overlap
     - Now direct the beam toward a detector periscope, making sure it is aligned to the target as you go
     - Optimize the coupling to the detector for the alignment laser
     - Turn the alignment laser off and repeat this step for the single-photon source
     - Check that both arms are well aligned, tweaking the end mirror of each arm if necessary, by blocking one at a time and looking at the detector response
 
:::{figure-md} fig-t3e1-lab-michelson-setup
<img src="FIGURES/T3E1-LAB-entanglement-interference/aim-3-michelson-setup.jpg" alt="QK Michelson Setup" class="bg-primary mb-1" width="800px">

The configuration for a Michelson interferometer that we will use to explore single-photon interference in this lab. 
:::

 2. Look for single-photon interference
 
    - Scan throuh the wedge postions on both arms looking for interference at the detector
    - when found, note the position near the interference on the wedges
    - Choose a wedge to oscillate, and move it around the interference region
    - When found, your output should look like that shown in {numref}`fig-t3e1-lab-interference-output`
    - From this measurement, can you comment on the coherence time of the photons?  How does the interference relate to coherence time?  Explain how you determined a rough estimate of the coherence time.  
    
    
:::{figure-md} fig-t3e1-lab-interference-output
<img src="FIGURES/T3E1-LAB-entanglement-interference/aim-3-single-photon-interference-scan.jpg" alt="QK Michelson Setup" class="bg-primary mb-1" width="800px">

Scanning through delay position with a wedge to see single-photon interference at an output port.  
:::

+++

#### Part 2: Interaction-Free Measurement

Now we will use the interferometer to demonstrate the concept of [interaction-free measurement](https://en.wikipedia.org/wiki/Interaction-free_measurement).  For the case of single photons, it is possible to detect the presence of an object in one of the interferometer arms without actually interacting with it.  If the interferometer is aligned on a null, an object placed into one of the arms will casue the signal at the output to increase.  These photons sensed the presence of the object, without being absorbed!

 1. Use the spinning control knob to jog the wedge to a position such that the interferometer is on a null.
 2. Now take an opaque object and slide it in and out of one path of the interferometer.
 
If done properly, you should see the signal increase each time the object is placed within the beam as shown in {numref}`fig-t3e1-lab-michelson-IFM`. 

:::{figure-md} fig-t3e1-lab-michelson-IFM
<img src="FIGURES/T3E1-LAB-entanglement-interference/aim-3-single-photon-interference-IFM.jpg" alt="QK Michelson Setup" class="bg-primary mb-1" width="800px">

Each time the object is placed in the beam, the signal in channel B increases.  This is an "interaction-free" measurement.
:::
