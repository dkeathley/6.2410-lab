---
jupytext:
  formats: ipynb,markdown//md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.2
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

This lab will: (1) explore the fundamental properties of quantum particles using quantum optics; (2) explore the interactions of quantum particles through interference; and (3) demonstrate how these interactions can be exploited to engineer devices for quantum-enhanced sensing. In particular we will show how quantum states of light can be engineered to provide improved detection of changes in displacement (for example small physical movements of one object relative to another). 

Specific aims are:

 0. Introduction to the quantenkoffer
 1. Understand SPDC photon pair generation, allignment, and coincidence measurements 
 2. Use the properties of coincidence detection to measure the speed of light
 3. Demonstrate polarization entanglement between two photons
 4. Explore interference of a photon with itself
 5. Explore the interference of two single photons: the Hong-Ou-Mandel effect
 6. **BONUS:** Develop a NOON state interferometer demonstrating supersensitivty to path length changes
 
```{note} 
Throughout the labs you will be expected to keep notes.  This is important for both collecting, analyzing, and gathering your own thoughts about observations and data collected.  You will use these notes to develop your final writeup.  You can work together on their collection and in answering questions.  All questions and action items to be addressed in your writeups are marked with **AI** below.  
```

+++

## Aim 0: Introduction to the Quantenkoffer (Day 1)

In this lab you will be using the [Quantenkoffer](https://qutools.com/quantenkoffer_science-kit/).  This instrument will allow us to explore the properties of single photons and pairs of entangled photons. 

Before the lab, we have already introduced you to the system and guided you through the basics of the interface and entangled photon source.   Take 10-15 minutes to explore the instrument a bit.  Look through the menus, the differnt options, the different bricks available, etc.  Ask your instructor about things you are confused about.  There is also a manual along with the online materials you can use.  

+++

## Aim 1: Understand SPDC generation of entangled photon pairs (Day 1)

In this exercise we will explore the spontaneous parametric down-conversion (SPDC) source of the Quantenkoffer.

+++

### Before Getting Started

The source is shown in {numref}`fig-t3e1-lab-spdc-source`.   A useful animation of the source and detailed description is provided on the [QuTools website](https://qutools.com/spdc-animated-source/).  

:::{figure-md} fig-t3e1-lab-spdc-source
<img src="FIGURES/T3E1-LAB-entanglement-interference/qk-spdc-source.png" alt="QK SPDC Source" class="bg-primary mb-1" width="800px">

A schematic view of the Quantenkoffer's SPDC source.
:::

For more information about the source, you can read about SPDC generation [here](https://en.wikipedia.org/wiki/Spontaneous_parametric_down-conversion), and watch this video demonstration.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VNoJ-0_c6c8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

+++ {"tags": []}

### Lab Exercise

In the followign steps you will learn about the Quantenkoffer SPDC source through the detection of coincidence events.  

 1. After turning the quantenkoffer on, place a periscope on each source port at the left side.  Thes bring up the underlying source photons in each path $A$ and $B$ to the surface.
 2. Now place a periscope on the two detector ports.  These send the photons in $A$ and $B$ down to the single-photon detectors housed under the board. 
 4. Tap the top of either source perisocope on the left to activate the source view on the control pad.  Adjust the mirrors A1, A2, and B1 and B2 to optimize the count rates on both detectors.  (Tip: if the system seems far out of alignment, you can use the adjustement laser at very low power, a few percent, to help get started here).  
 5. Now, focusing on coincidence events (A and B), adjust the same mirrors to optimize coincidence counts.  This might result in slightly less  than optimum total counts.  Tha is OK.  What we are doing is ensuring that we optimize for selection of entangled photon pairs for later experiments.
 
Once you have completed these steps, your setup should look like that in {numref}`fig-t3e1-lab-spdc-coincidence-setup`.  Typical values might be $3\times10^5$ total counts in A and B, with $1.5\times10^4$ coincidence counts.  You should not proceed until you get at least $1\times10^4$ coincidence counts.  
 
:::{figure-md} fig-t3e1-lab-spdc-coincidence-setup
<img src="FIGURES/T3E1-LAB-entanglement-interference/aim1-spdc-coincidence-setup.jpg" alt="QK SPDC Coincidences" class="bg-primary mb-1" width="800px">

What your setup should look like for coincidence detection of the SPDC photons.  Note that there are between 250K to 300K single electron events in each arm with 14K coincidence events in the image.  In the histogram view, you should see a strong peak near 0 seconds.  This value can be tuned with the APD delay settings.
:::

What we have been doing is ensuring that we have selected the correct locations of the output cone angles from the SPDC crystal that correspond to photon pair locations (read more about the SPDC generation [here](https://en.wikipedia.org/wiki/Spontaneous_parametric_down-conversion)).  There are many options for optimizing the counts in detector A or B from either cone of the SPDC output, but only two relative locations will give true pairs of entangled photons. 

**AI** Record your count rates and coincidence counts.  What is the ratio? Think through and discuss why the experimental coincidence count rates are lower than the single counts on either detector alone, and how this ratio might be improved through engineering.

**AI** What is the duration of the coincidence peak in your histogram window?  Do you think this duration is due to the true coincidence timing window of the photons, or to technical limitations (e.g. detector rise/fall time, or other systematic causes)?  

+++

## Aim 2: Understanding Coincidence Detection -- Speed of Light Measurement

Given the short duration of the histogram peak in time, we can use it to measure the speed of light.  We can do this by splitting off some photons in one arm so that they travel a longer distance, meaning that some pairs see a longer delay time than the others.  This leads to two histogram peaks.    

**AI** Based on the histogram peak duration you measured, how much spatial distance between photons would you need in order to discern two peaks?

### Instructions

 1. Activate the adjustment laser to full power so you can see it.
 2. Starting from your aligned source in **Aim 1**, add in a beamsplitter to one of the paths.  
 3. Using the target block with cross-hairs, align the beam to a separate point at the location you will place a first 45 degree mirror as shown in {numref}`fig-t3e1-lab-speed-of-light-setup`.  After alignment, place the mirror.  
 4. Repeat step (2) at the location of the second 45 degree mirror.
 5. Now add in a second beamsplitter for combining the two paths. 
 
:::{figure-md} fig-t3e1-lab-speed-of-light-setup
<img src="FIGURES/T3E1-LAB-entanglement-interference/aim-2-speed-of-light-setup.jpg" alt="QK Speed of Light" class="bg-primary mb-1" width="800px">

An example speed of light test setup.  Path A has been split into two paths.  The lower path takes a longer distance before recombining at the beamsplitter and being directed to the detector.   
:::

We now need to make sure the two paths are perfectly overlapped.  To do this we need to adjust the beams so that they are overlapped at the beamsplitter *and* at some distant point.  

 6. Place a card behind the beamsplitter on the quantenkoffer display panel, or just use the display panel surface.  Use the second 45 deg mirror, align the two red beams so they are overlapped (see {numref}`fig-t3e1-lab-sol-near-alignment`)
 7. Remove the periscope and project the red beams on a distant target (e.g. a white panel or wall).  Now use the second beamsplitter to align the two beams so they overlap (see {numref}`fig-t3e1-lab-sol-far-alignment`). 
 8. Repeat (6) and (7) until no adjustement is needed.
 
:::{figure-md} fig-t3e1-lab-sol-near-alignment
<img src="FIGURES/T3E1-LAB-entanglement-interference/aim-2-speed-of-light-near-alignment.jpg" alt="QK Speed of Light" class="bg-primary mb-1" width="800px">

Near-field alignment.
:::

:::{figure-md} fig-t3e1-lab-sol-far-alignment
<img src="FIGURES/T3E1-LAB-entanglement-interference/aim-2-speed-of-light-far-alignment.jpg" alt="QK Speed of Light" class="bg-primary mb-1" width="800px">

Far-field alignment.
:::

In this final part, we now go back to observing the histogram.

 9. In the coincidence histogram, you should now see two peaks.  If not, or if one is faint, you can fine adjust the mirror and beamsplitter from (6) and (7) to achieve a balanced two-peak structure (however, this is not strictly needed for this measurement).  10. Using the cursors in the histogram view, determine the temporal spacing of the two peaks and record this value along with the histogram trace.
 
**AI** Verify that the delay measurement you made makes sense (you will need to make some distance measurements on the board for this).  

+++

## Aim 3: Demonstration of Polarization Entanglement

+++

In this lab we will use the quantenkoffer to explore the nature of the polarization-entnagled SPDC photon source.  By making quite simple polarization measurements in each arm of the detector using polarizers, you can get a hands-on feeling for the entangled nature of the source.  While these measurements are simple, the offer a lot to think about.

### Instructions

 1. Watch the following video related to the concepts we will explore in this part, and for a description of the general setup.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/126FD05vltU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

 2. Optimize the conicidence count in each arm without any elements on the board as in Aim 0 if needed (e.g. coincidence count lower than 10K counts per second).
 3. Place a polarizer block in each path.
 4. Set up a polar plot dialog on the display panel in one of the quadrants (make sure you leave the three-trace scan for detectors $A$, coincidences, and $B$).  
 5. In the polar plot settings, set it to track the coincidence count rate as a function of the polarizer angle in $B$ (note when you select the polarizer element, you will need to use the up-arrow to select the on-board polarizer in $B$).  
 6. Tap the polarizer in $B$ and activate its rotation.  You should now see the coincidence count rate in $B$.  
 7. **AIs** Describe the shape of the polar plot you see.  Record several polar plots for two or three discrete values of the polarizer in $A$.  Explain why you see what you see and how it indicates polarization entanglement of the source.  What happens to the coincidence trace when you rotate the polarizer in $A$ manually?  If you switch the polar plot to track the photon number in $B$ what is the shape?  Explain why you observe these two patterns and what it means about the source.
 8. Now tap a source periscope to bring up the source controls.
 9. Adjust the initial source half waveplate to be in the (H)orizontal position (see {numref}`fig-t3e1-lab-entanglement-HWP-control` for the half waveplate control selection).  This causes only vertical photon pairs to be generated in the SPDC source: $\ket{V}_a\ket{V}_b$.  
 
:::{figure-md} fig-t3e1-lab-entanglement-HWP-control
<img src="FIGURES/T3E1-LAB-entanglement-interference/aim-3-entanglement-source-dialog.jpg" alt="QK HWP Angle Adjust" class="bg-primary mb-1" width="800px">

The HWP control is circled in the source control dialog.  Use this to set the polarization angle of the source.
:::
 
 10. **AIs** Repeat step 7 for this source configuration.
 11. **AIs** Adjust the source half waveplate to (V)ertical and repeat (10).  What is the state of the output photons now?  
 12. **AI** Explain your results in steps (10) and (11) using the analysis you performed for the prelab and in the context of polarization entanglement.  

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

+++

## Aim 5: Single-Photon Interference and NOON State Generation -- Hong Ou Mandel Effect

+++ {"tags": ["remove-cell"]}

## **BONUS** Aim 6: Quantum-Enhanced Measurement with a NOON State Interferometer

+++

<iframe src="https://drive.google.com/file/d/1DRJjQdnbupAooSxLQuY_es3w9Idbgdeg/preview" width="640" height="480" allow="autoplay"></iframe>
