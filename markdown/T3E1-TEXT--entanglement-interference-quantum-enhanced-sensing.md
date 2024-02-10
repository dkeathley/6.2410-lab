---
jupytext:
  formats: ipynb,markdown//md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.15.2
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

# TEXT -- Interference, Entanglement and Quantum-Enhanced Metrology

In this chapter we examine entangled photon pair generation, single-photon interference, entangled photon pair interference by way of the Hong-Ou-Mandel effect, and entangled multi-photon Fock state interference for quantum-enhanced phase sensing.  Along the way we will discuss basic principles important to a variety of areas in quantum photonics, such as: the interaction of photons with beamsplitters; the interference of photon number states; signal detection and processing methods such as coincidence detection; and how to analyze statistical fluctuations of photon detection events for determining sensitivity and signal to noise ratio in measurements.

The information and techniques discussed here will not only be useful for your lab exercises, but will be critical tools that you can leverage for your final projets.

+++

## Entangled Photon Pair Generation and Measurement

<iframe src="https://drive.google.com/file/d/1OvJFfZyYU3RodsB9eTQpItGA3ZKAdu-0/preview" width="640" height="480" allow="autoplay"></iframe>

You will work with entangled photon pairs that are generated using SPDC.  This process is also described in the T2E1 material in more technical detail, and you can also read the information in the [QuED manual](https://drive.google.com/file/d/1CqRNSabbBTxx3_eC80l3JY_pydcolXQg/view?usp=share_link) which is quite helpful.  Here we will stick to the most important aspects important to understanding the emitted photons and how we can use them.  

:::{figure-md} fig-T3E1-spdc
<img src="FIGURES/T3E1-spdc-cone-angles.png" alt="SPDC Cone Angles" class="bg-primary mb-1" width="800px">

Simplified schematic of the SPDC source that you will use in the lab and possible cone angles of the entangled photon pair outputs from the crystal.  
:::

An SPDC source similar to what you will use is shown in {numref}`fig-T3E1-spdc`.  Note that when excited by the pump that is at a higher energy of $2\hbar\omega$, two photons of energy $\hbar\omega$ are generated in a cone of angles away from the crystal.  In our systems, as shown here, two crystals are stacked together, one generating entangled photons with horizontal polarization, and one with vertical polarization.  This generation process is quantum-coherent, and the state that arises is in a superposition of these photon pairs, and we can write it as

$$ \ket{\psi}  = \frac{1}{\sqrt{2}} \big\lbrace \ket{H}_a\ket{H}_b  + \ket{V}_a\ket{V}_b\big\rbrace$$ 

Where we have taken the top path to be path $a$ and the bottom to be path $b$.  To get a feeling for the entanglement, consider a simple experiment as shown in {numref}`fig-T3E1-entanglement-setup`.  

:::{figure-md} fig-T3E1-entanglement-setup
<img src="FIGURES/T3E1-entangled-photon-meas-setup.png" alt="Entanglement Setup" class="bg-primary mb-1" width="400px">

Schematic of an entanglement experiment.
:::

Each path is sent through a polarizer and then a detector after which we consider only coincident events.  Let's now consider the act of measuring the photons after the polarizers in arms $a$ and $b$.  The polarizer acts to select out only one polarization angle.  Since our incident light has both polarizations, we need to understand how both components are projected onto the polarization axis. 

:::{figure-md} fig-T3E1-polarizer-projection
<img src="FIGURES/T3E1-polarizer-projection.png" alt="Polarizer Projection" class="bg-primary mb-1" width="500px">

The horizontal and vertical polarization states are projected onto the polarizer axis denoted by the red line.
:::

Consider {numref}`fig-T3E1-polarizer-projection`.  This shows the polarizer angle in arm $a$ in relation to the vertical and horizontal polarizations of our input photons.  After the polarizer, the light must be polarized along $\theta_a$, and we can write:

$$\ket{\theta_a} = \cos(\theta_a)\ket{H}_a + \sin(\theta_a)\ket{V}_a$$

The same expression also applies to $\ket{\theta_b}$.  In our measurement, we are considering coincident events that correspond to states $\ket{\theta_a}\ket{\theta_b}$.  To find the probability of detecting such states, we simply project this state onto our input state and take the square magnitude.  The probability of coincidences $P_\text{co}$ is then

$$P_\text{co} = \frac{1}{2} \Big | \bra{\theta_a}\bra{\theta_b} \big\lbrace \ket{H}_a \ket{H}_b + \ket{V}_a \ket{V}_b\big\rbrace \big |^2$$

We leave it as an exercise to show that $P_\text{co} = \frac{1}{2} \cos^2(\theta_a - \theta_b)$.  

Think about what this is saying for a bit.  No matter how far apart your detectors are, by setting the polarization in one arm, you instantly dictate the joint probability which also requires an event at the detector in the other arm and depends on its polarization axis.  While correlations can also exist in classical systems, this specific correlation pattern cannot be explained classically.  It violates Bell's inequality indicating that the input state exhibits quantum entanglement.

In the lab, we will perform this experiment so that you can experience entanglement for yourself.

+++

### Prelab 1 Questions

 1. Fill in the missing steps above to show that $P_\text{co} = \frac{1}{2} \cos^2(\theta_a - \theta_b)$.  
 2. Make a polar plot of $P_\text{co}$ as a function of $\theta_a$ for three fixed settings of $\theta_b$.  Interpret what the plots are saying.
 3. In the lab, our SPDC process generates on the order of 100,000 photon pairs per second.  Is there any chance in our measurements that a neighboring photon might influence our results?  Justify your answer.
 4. Describe, from an engineering perspective, why entanglement is important.  Provide examples.

+++

## Single-Photon Interference and Interaction-Free Measurement

+++

<iframe src="https://drive.google.com/file/d/1MVpfD6w8qPrWElpTsG6HJn-XRTBKQyI-/preview" width="640" height="480" allow="autoplay"></iframe>

Before moving on to multiple-particle interference, let us now consider single-particle interference.  We will also discuss how in this single-particle case one can achieve measurement without interaction.

Consider the single-photon interferometer as shown in {numref}`fig-T3E1-single-photon-interferometer`

:::{figure-md} fig-T3E1-single-photon-interferometer
<img src="FIGURES/T3E1-single-photon-interferometer.png" alt="Single Photon Interference" class="bg-primary mb-1" width="600px">

Interferference of a single photon in a Mach-Zender interferometer.  An optional absorbing object can be placed in one of the paths.
:::

For dealing with interference here and below, we will track the annihilation operators through the system. For a refresher on how these work, see the [BASICS chapter on quantum optics](BASICS-quantum-optics-basics.html). 

Our strategy is to develop a description of the annihilation operator of the output state using the annhihilation operators of the input states of the first beamsplitter.  This description can then be used to determine the number of output photons going to the detector based on the input states.  Note that for this problem we consider that only one input of the beasmplitter is excited by a single photon (denoted as $a$).  While a rigorous solution would have to account for all annihilation operators, including that of the vacuum state input to the first beamsplitter, the operators of the vacuum state inputs do not contribute to the average photon number at the detector (however they can contrubute to noise in the photon detection). **Since we are concerned with the photon number for the purposes of this discussion, we drop the operators associated with the vacuum input as a shorthand to simplify the problem here. It is emphasized that you would need to include all input operators to describe the input and output states completely, or to calculate detection noise properties for a general set of input states.  See the note below for further reading.**

```{note}
For a rigorous solution of the output operators of a Mach-Zender interferometer, see [](./T3E1-EXTRAS--rigorous-solution-MZI.ipynb).

For an interseting discussion of how the vacuum state input contributes to photon fluctuations, and how these fluctuations can be reduced using squeezed light, see the discussion of homodyne detection with squeezed light in [](./T3E1-EXTRAS-interference-2-homodyne-detection.ipynb)
```

Taking each path $b$ and $c$ indificually, we find that for path $b$ the annihilation operator going  into the second beamsplitter, ignoring the annihilation operator of the empty port, can be written as

$$\bhat = \alpha e^{i\phi_b} \ahat/\sqrt{2}$$

Likewise

$$\chat = e^{i\phi_c} \ahat/\sqrt{2}\mathrm{.}$$

The phase is the phase accumulated during propagation in each path and scales as $2\pi l /\lambda$, where l is the path length in either arm.  The term $\alpha$ accounts for loss in interaction with the object.  This could in general be a complex amplitude, but here we simply assume it is real noting the amount of absorption in the object (the phase can be wrapped into the total phase in the path).

We now want to know waht the annihilation operator for $d$ is going to our detector.  The beamsplitter has the relation that

$$\dhat = \frac{1}{\sqrt{2}} ( \bhat + \chat )$$

and likewise 

$$\ehat = \frac{1}{\sqrt{2}} ( \bhat - \chat )$$

Let's focus on path $d$ and find the number of photons going there.  The photon number operator is given by $\ddagger \dhat$.  We can now express this as

$$\ddagger\dhat = \frac{1}{4} ( \adagger\ahat + \alpha e^{-i\Delta\phi} \adagger \ahat + \alpha e^{i\Delta\phi} \adagger\ahat + \alpha^2 \adagger\ahat )$$

where we have that $\Delta\phi$ is the phase difference betwen the paths $b$ and $c$.  We leave this as an exercise to show.

Reducing this we find that

$$\ddagger\dhat = \frac{1}{4} \bigg ( 1 + \alpha^2 + 2 \alpha \cos(\Delta\phi) \bigg ) \adagger\ahat$$

So now, we finish by finding the photon number expectation at the output $N_d$ for a single photon in $a$ at the input.  

$$N_d = \bra{1}_a \frac{1}{4} \bigg ( 1 + \alpha^2 + 2 \alpha \cos(\Delta\phi) \bigg ) \adagger\ahat \ket{1}_a$$

which reduces to

$$N_d =  \frac{1}{4} \bigg ( 1 + \alpha^2 + 2 \alpha \cos(\Delta\phi) \bigg )\mathrm{.}$$

Let's consider two important cases: $\alpha = 1$ (no object), and $\alpha = 0$ (opaque object). For $\alpha = 1$ we have that the probability oscillates sinusoidally with the phase difference $\Delta\phi$.  We can control this with a wedge or the movement of one of the mirrors in the lab.  

```{note}
Here we have considered states containing only a single frequency, meaning that interference would continue indefinitely with increasing delay.  However, in reality our states contain a distrubtion of frequencies and exhibit finite coherence times that limit the range of delays over which one could observe this interference.  In experiment we will find that the interference fringes disappear after several wavelengths of delay.  For our case this is due to the relatively large bandwidth of frquencies generated in the SPDC process. 

The case of a non-zero bandwidth is also treated in [](./T3E1-EXTRAS--rigorous-solution-MZI.ipynb).  
```

It also makes sense that when $\alpha = 0$ all interference goes away, and we are left with only 1/4 of the photons making it to the detector.  The other 1/4 go to arm $e$, and the other half are lost to the object. 

Now for something interesting.  Let's say that we align our interferometer without an object in place such that you have a minum probability of finding the photons in arm $d$.  That would be for $\Delta\phi = \pi$ so that no photons are output.  Then you put the object in place -- the photon expectation suddenly goes to 1/4.  You just detected the object without interaction!  This is in fact often referred to as an interaction-free measurement, and has found renewed interest in the context of electron detection where particle energies are high and damage per particle can be significant.    

In the questions below, you will consider such measurements further.

+++

### Prelab 2 Questions

 1. Fill in the missing steps to get to the expression for $\ddagger\dhat$ above.
 2. Write the corresponding expression for the number of expected photons exiting path $e$.  
 3. Discuss the interaction-free measurement in the context of a translucent object ($0 < \alpha < 1$).
 4. Read about the [Elitzur-Vaidman bomb test](https://en.wikipedia.org/wiki/Elitzur%E2%80%93Vaidman_bomb_tester).  Explain how, when performed photon by photon and with a detector at ports $d$ and $e$ a probability of detection without interaction can approach 33 percent.  Justify your answer.
 5. Read [](./T3E1-EXTRAS--rigorous-solution-MZI.ipynb).  Using the rigorous solution of the operator describing the output port to the detector, calculate the variance in the output for $\alpha = 0$, $\Delta N = \left < \hat{N}^2 \right > - \left < \hat{N} \right >^2$.  Note that at the output you have either a detection event or not -- this is like a coint toss which follows a binomial distribution with variance $P(1-P)$, where $P$ is the probability of detection.  Does your variance calculated using the operators make sense based on this?

+++ {"id": "4b595179-c2b9-4d45-819a-5c18c297dfe0"}

## Interference of Two Single Photons: The Hong-Ou-Mandel Effect

<iframe src="https://drive.google.com/file/d/1EbP7heyjad4oQek8uBg5gI4dMnObpFh_/preview" width="640" height="480" allow="autoplay"></iframe>

We have now examined how a single photon interferes with itself, but how do two single coincident photons interfere with each other at a beamsplitter?  In this section we explore such two-photon interference.  We examine how when the two photons are indistinguishable in every way, the interference can lead to photon bunching and anti-correlation at the output ports.  The outgoing state generated is referred to as a two-photon NOON state of the form $\frac{1}{\sqrt{2}} ( \ket{N}_a\ket{0}_b + \ket{0}_a\ket{N}_b )$.  Pushing beyond this observation, in the text that follows this section we examine how NOON states can generally be used for quantum-enhanced sensing.

Imagine the scenario depicted in {numref}`HOM-setup`.  A nonlinear crystal is used to generate precisely two photons of energy $\hbar\omega$ when excited by a pulse with a photon energy of $2\hbar\omega$.  This process is called spontaneous parametric down-conversion and is a common technique for generating entangled photon pairs. 

The two photons travel away from the crystal along two paths (top and bottom as shown).  They are then brought together and interfere within a beamsplitter.  

:::{figure-md} HOM-setup
<img src="https://drive.google.com/uc?export=view&id=1amZRBEKAn8JTkZXHi7SUlqqTjZfi2tXc" alt="HOM-setup" class="bg-primary mb-1" width="800px">

Experimental setup for studying the HOM effect.  
:::


If we break down all the different possibilities that could happen, one would be that both photons output in $c$, another would be that both photons output in $d$, and a final possibility would be that one photon outputs to $c$ while the other outputs to $d$.   One interesting question to ask is whether the delay has any influence over these possibilities?  

Lets model this system.  Imagine that the input signals are pulsed.  In this case we could for instance represent a single photon input with delay $\tau$ in port $a$ as

$$ \ket{1; \tau}_a, $$

or a single photon input with $0$ delay in port $b$ as

$$ \ket{1; 0}_b.$$

The first number represents the numer of photons, the second the delay.  Finally, the subscript represents the mode.  Given an entangled two-photon input to the system from the crystal with delay along path $a$ of $\tau$, we have that the input state can be written as

$$\ket{\psi_\text{in}} = \ket{1; \tau}_a\ket{1; 0}_b = \adagger_{\tau}\bdagger_0 \ket{0}$$

It is important here that the state be written as a tensor product as it captures that the two photons are jointly created and entangled which is the case for the photons generated with SPDC.  

```{note} 
We have taken a little liberty here to assign creation and annihilation operators for each mode with their mode label.  It's just a bit of shorthand that is very common to make things easier to read if there are only a handful of modes to deal with.
```

Now we need to understand how such an entangled state interacts with a beamsplitter. For this we will keep track of the different creation/annihilation operators through the system. 

A beamsplitter has the following relationship between the input and output modes:

$$\adagger_\tau \rightarrow \frac{\cdagger_\tau + \ddagger_\tau}{\sqrt{2}},$$

and

$$\bhat_0 \rightarrow \frac{\chat_0 - \dhat_0}{\sqrt{2}},$$

thus, the output state becomes

$$ 
\ket{\psi_\text{out}} = \frac{1}{2}
\bigg \lbrace 
\chat_\tau \chat - \chat_\tau \dhat + 
\dhat_\tau \chat - \dhat_\tau \dhat
\bigg \rbrace
$$

Let's start for the case of $\tau \neq 0$.  In this case we  have that

$$
\ket{\psi_\text{out}} = 
\frac{1}{2}
\bigg\lbrace
\ket{1;\tau}_c\ket{1;0}_c - 
\ket{1;\tau}_c\ket{1;0}_d + 
\ket{1;0}_c\ket{1;\tau}_d -
\ket{1;\tau}_d\ket{1;0})_d
\bigg\rbrace.
$$

Remember that probabilities of outcomes are related to $\braket{\psi_\mathrm{out}}{\psi_\mathrm{out}}$, thus we can make the following map of outcomes at each detector.

:::{figure-md} HOM-possibilities-w-tau
<img src="https://drive.google.com/uc?export=view&id=1sRjwvkQuXH4L5q9mrOIiP2TysdWnx54_" alt="HOM-w-tau" class="bg-primary mb-1" width="500px">

Four different possibilities of detection in port c and d given a non-zero delay $\tau$.  
:::

All possibilities we oultined above happen with equal probability. 

However, for $\tau = 0$ we have something very interesting, and a bit unintuitive.  In this case we have

$$
\ket{\psi_\text{out}} = 
\frac{\sqrt{2}}{2}
\bigg\lbrace
\ket{2;0}_c -
\ket{2;0}_d
\bigg\rbrace
$$

leading to the following map of outcomes at each detector.

:::{figure-md} HOM-possibilities-wo-tau
<img src="https://drive.google.com/uc?export=view&id=1flZvEwgcemSbJuNBVVW8DBaGF-AVNtLS" alt="HOM-w-tau" class="bg-primary mb-1" width="500px">

Two different possibilities of detection in port c and d given a zero delay $\tau$ such that the two photons are indistinguishable in every way at the beamsplitter.  Note each pulse now contains two photons, and the probability of each occurance is $1/2$.  
:::

In this case **there would be no coincidence events** (that is, events that would trigger an output on both detectors).  Either both photons go to $c$ or both to $d$ with equal probability.  This is in contrast to the case when the modes were fully separate in time when the coincidence rate is 50%.  

Such two-photon interference was first observed by Hong, Ou, and Mandel in 1987 {cite:p}`hongMeasurementSubpicosecondTime1987`.  In their work, they note that such a measurement allows for the measurement of time intervals between photons with sub-picosecond precision.  In the lab, we will also achieve this precision in detecting time-intervals between arriving photon pairs in the observation of HOM interference.   

```{important}
We want to emphasize here that we have taken a few liberties with the notation above.  The approach  used here works in estimating probabilities for the two cases discussed, assuming (1) that each photon pulse is long relative to the central frequency; (2) that the envelope shape and central frequency of each pulse is the same; and (3) that for the delayed case the photons are so far separated in time that there is no overlap between each photon pulse at the input of the beamsplitter. For these cases the states are either perfectly indistinguishible or distinguishable.  A more complete model would actually have to expand each input into the frequency domain and model the interference between each spectral component individually.  However this approach is much more involved (*e.g.* see the treatment in Ref. {cite:p}`branczykHongOuMandelInterference2017`.  In the end, both approaches result in the same predictions as discussed above.  
```

+++

### Prelab 3 Questions

 1. What happens to the coincidence count rate when the delay is not perfectly zero such that the photon wavepackets are only partially overlapped in time? (Look for experimental measurements of HOM and explain the data over this intermediate delay range in terms of the distinguishability of the states).  
 2. If the delay is fixed to $\tau = 0$, but the input photon states have variable polarization $\ket{\theta_a}\ket{\theta_b}$ what are the output states as a function of the two polarization angles $\theta_a$ and $\theta_b$?
 3. Would you expect the coincidence dip to go all the way to 0 in experiment?  Why or why not?

+++ {"id": "pWkSqRv049WB"}

## Taking Things Further: Quantum Enhanced Sensing with NOON States

<iframe src="https://drive.google.com/file/d/1DDXMLs7zM1zuTzA03w7DcJZp1YPt03Mu/preview" width="640" height="480" allow="autoplay"></iframe>

Notice that when $\tau = 0$ the state takes on an interesting superposition of $N=2$ Fock states.  Such states are called NOON states, so here we would have an $N=2$ NOON state.  It turns out that if we send such states through a subsequent interferometer, we can obtain a quantum advantage in sensitivity to phase shifts.  In this section, we will explore why this is important and how it works.  In the practice problems and exercises, we will also explore limitations to the generalized implementation of this approach and touch on other approaches that are used for similar purposes.  

Before we talk about sensing phase shifts, you might be wondering why someone would want to measure optical phase in the first place?  Typically, it is not the phase shift itself that we are after, but rather the physical change that has caused the phase shift.  A famous example of this is the measurement of gravitational waves using LIGO.  In LIGO, extremely small changes in the path length between two arms of an interferometer are caused by a passing gravitational wave.  This change in path length manifests as a shift in phase of the light that travels down one arm relative to light that travels down the other.  It is just this phase shift that is detected and related to a change in distance.  Similar techniques are used on much smaller scales to stabilize fine movements in stages with nanometer precision.  

A limitation to the measurement of interferometric phase shifts is caused by noise in the system and at the optical readout.  Given we can make a stable enough interferometer, and obtain low enough noise in the detector readout, the measurement noise will eventually be limited by fundamental fluctuations in the photon signal.  In a classical interferometer, this fundamental photon noise results in a variance in the phase estimation of

$$\delta \varphi^2_\mathrm{classical} = \frac{1}{N_\mathrm{ph}} \mathrm{.}$$

where $\varphi$ is the phase to be measured, and $N_\mathrm{ph}$ is the total number of photons passing through the interferometer. Here we will present a method for leveraging quantum properties to achieve phase noise performance beyond this standard quantum limit (SQL).  This will build upon the generation of NOON states as a result of single-photon interference that you will study in the lab.

+++ {"id": "caf35967-6267-459a-a1a9-dd34fbbb1f0f"}

### Analysis of Phase Estimation in an $N=2$ NOON State Interferometer

In this section we explore the use of NOON state interferometers for achieving noise performance beyond the SQL.  For further reading on this topic, please see Refs. {cite:p}`nagataBeatingStandardQuantum2007,okamotoBeatingStandardQuantum2008`.  

Consider a setup that builds on the HOM setup as shown in Fig. {numref}`NOON-state-interferometer`.

:::{figure-md} NOON-state-interferometer
<img src="https://drive.google.com/uc?export=view&id=1D8Js9o1wj5yNmsOUZ_kYn-EG7h_l8T31" alt="NOON-state-interferometer" class="bg-primary mb-1" width="800px">

A $N=2$ NOON state interferometer.
:::

Here we consider only the case for $\tau = 0$, and have simplified our notation for the states to reflect that. 

An important thing to observe here is that for path c, the two-photon state collects twice the amount of phase $\varphi$ when going through the phase plate.  This is a critical aspect that enables superresolution of the instrument for measurements of $\varphi$.  Furthermore, due to the entangled nature of the NOON state, there is also supersensitivity from reduced statistical fluctuations in the measurement of $\varphi$.  We will explore both of these aspects below.

First, lets consider the output state after the second interferometer.  Similar to our analysis above, we find that

$$ \chat \rightarrow (\ehat + \fhat)/\sqrt{2} $$

and

$$ \dhat \rightarrow (\ehat - \fhat)/\sqrt{2} $$

Then we know that

$$\ket{\psi_\mathrm{in}} = \frac{ \big ( \cdagger \cdagger e^{i2\varphi} + \ddagger\ddagger \big ) \ket{0}}{2}$$

After substitution, we find that 

$$\cdagger\cdagger \rightarrow \frac{1}{2}(\edagger + \fdagger)(\edagger + \fdagger)
     = \frac{1}{2}(\edagger\edagger + 2\edagger\fdagger + \fdagger\fdagger)$$
     
Likewise

$$\ddagger\ddagger \rightarrow \frac{1}{2}(\edagger - \fdagger)(\edagger - \fdagger)
     = \frac{1}{2}(\edagger\edagger - 2\edagger\fdagger + \fdagger\fdagger)$$
     
Meaning that 

$$\ket{\psi_\mathrm{out}} = \frac{1}{4} \bigg \lbrace (\edagger\edagger + 2\edagger\fdagger + \fdagger\fdagger)e^{j2\varphi} + (\edagger\edagger - 2\edagger\fdagger + \fdagger\fdagger) \bigg\rbrace \ket{0}$$

```{note}
You may be wondering where the phase accumulation of $2\varphi$ came from.  We can represent a phase shift by evolution of the operator $\ahat \rightarrow \bhat = \ahat e^{i\varphi}$  This means that $\ahat = \bhat e^{-i\varphi}$.  Thus, we have that $\ket{2}_a = \frac{1}{\sqrt{2}}\adagger\adagger \ket{0} = \frac{1}{\sqrt{2}}e^{2i\varphi} \bdagger\bdagger \ket{0} = e^{2i\varphi} \ket{2}_b$.  
```

Note that there are terms multiplied by $e^{j2\varphi} \pm 1 = e^{j\varphi}(e^{j\varphi} \pm e^{-j\varphi})$. The reason this is important is because they can be expressed as multiples of $\sin$ and $\cos$ since $e^{j\varphi} + e^{-j\varphi} = 2\cos{\varphi}$ and $e^{j\varphi} - e^{-j\varphi} = 2j\sin{\varphi}$.  Using this property and rearranging the terms in $\ket{\psi}_\mathrm{out}$ above we find that

$$\ket{\psi_\mathrm{out}} = \frac{e^{j\varphi}}{2} \bigg \lbrace \cos({\varphi})(\edagger\edagger + \fdagger\fdagger) + j\sin({\varphi})\edagger\fdagger \bigg \rbrace \ket{0}\mathrm{.}$$

After applying all of the creation operators, we finally arrive at the output state

$$\ket{\psi_\mathrm{out}} = \frac{e^{i\varphi}}{\sqrt{2}}\cos({\varphi})(\ket{2}_e
 + \ket{2}_f) + ie^{i\varphi}\sin({\varphi})\ket{1}_e\ket{1}_f \mathrm{.}$$
 
Let's take a moment to evaluate this.  Similar to the output of our HOM experiment, we have various possibilities of coincidence detection or the separate detection of either a $\ket{2}_e$ or $\ket{2}_f$ state.  However, there is now the added consideration that these outcomes depend on $\varphi$.  This is good as that is precisely what we want to detect.  If we restrict ourselves to only looking at coincidence outputs in $e$ and $f$, we then find that they occur with probability

$$P_\mathrm{co}(\varphi) = \sin^2{\varphi}$$

meaning that we can adjust the probability of coincidence detection from 0 to 100\% by simply adjusting $\varphi$ from $0$ to $\pi/2$.  It is convenient to get rid of the $\sin^2$ term using a trigonetric identity

$$P_\mathrm{co}(\varphi) = \frac{1}{2} - \frac{1}{2}\cos(2\varphi)\mathrm{.}$$

It is at this point that you realize that the output oscillates as $\cos(2\varphi)$.  You can show that a classical interferometer oscillates as $\cos(\varphi)$.  This doubling of the oscillation rate for our NOON state interferometer is due to the reduced deBroglie wavelength of the higher order Fock state inputs!  This faster variation with respect to $\varphi$ provides **superresolution** compared to a classical interferometer.  However, this isn't the entire story.  While **superresolution** is provided by the higher rate of oscillation with $\varphi$, it is not guaranteed that the interferometer provides **supersensitivity**, meaning that it has reduced the smallest possible value of $\varphi$ that can be measured.  To demonstrate that **supersensitivity** is possible requires condiseration of the sensitivity of our measurements to small changes in $\varphi$.  To do this, we must consider the statistical variations of the photon number and how they impact our estimation of changes in $\varphi$.

+++ {"id": "2b34879f-7b24-4ac2-ad25-2ff7749c39ff"}

### Demonstrating Supersensitivity

In most experimental situations we are trying to measure small changes in $\varphi$.  For convenience, let's rewrite our phase as $\varphi = \varphi_0 + \varphi_1$, where $\varphi_1$ is a small change that we are trying to measure on top of an offset phase $\varphi_0$.  Let's then imagine that we have some output signal $C(\varphi)$.  For a small enough $\varphi_1$ we can use a Taylor expression to write

$$C(\varphi) \approx C(\varphi_0) + \frac{\mathrm{d} C}{\mathrm{d} \varphi}\bigg|_{\varphi_0} \varphi_1 \mathrm{,}$$

and from this we have that 

$$\varphi_1 \approx \frac{C(\varphi) - C(\varphi_0)}{\frac{\mathrm{d} C}{\mathrm{d} \varphi}\big|_{\varphi_0}}$$

For the case of our noon-state interferometer, we might define $C_k(\varphi)$ as the average number of coincidence counts after $k$ incident photon events:  

$$C_k(\varphi) = k P_\mathrm{co}(\varphi)\mathrm{.}$$

While we can use $C_k(\varphi)$ to estimate small changes in phase $\varphi_1$ as discussed above, the next interesting question regards the fundamental limit to the sensitivity of this measurement.  To do that, we must account for the probabilistic nature of the coincident counting process.  Given all technical noise could be removed, the last fundamental source of noise in our estimation of $\varphi_1$ results from fluctuations in $C_k$.    Given that $C_k$ exhibits a variance, the minimum variance in our estimate of $\varphi_1$ from our measurements of $C_k$ would then become

$$\delta \varphi^2 = \Delta C_k^2/(\mathrm{d}C_k/\mathrm{d}\varphi|_{\varphi_0})^2 $$

where $\Delta C_k^2$ is the variance in the number of detected coincidence events after $k$ trials.  What is the variance of $C_k$?  Given that each event has one of two outcomes (we either measure an event or we do not), the measurement is then analagous to that of a series of weighted coin tossess, and the variance follows the statistics of a [binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution#Expected_value_and_variance). 

For a binomial distribution we have that

$$\Delta C_k^2 = k P_\mathrm{co}(\varphi) (1 - P_\mathrm{co}(\varphi))\mathrm{.}$$

Let's now consider our $N=2$ NOON state interferometer specifically.  We have that

$$\bigg | \frac{\mathrm{d}C_k}{\mathrm{d}\varphi} \bigg |^2 = k^2 \sin^2(2\varphi) \mathrm{.}$$

After feeding this into our expression for the variance of our phase estimation, we find that

$$\delta \varphi_{2002}^2 = \frac{1 - \cos^2(2\varphi)}{4k\sin^2(2\varphi_0)} = \frac{\sin^2(2\varphi_0 + 2\varphi_1)}{4k\sin^2(2\varphi_0)}\mathrm{.}$$

Given we are assuming sufficiently small $\varphi_1$, we can do another Taylor expansion, finding that

$$\delta \varphi_{2002}^2 \approx \frac{1}{4k} + \frac{\cos(2\varphi_0)\varphi_1}{k\sin(2\varphi_0)}\mathrm{.}$$

The right hand coefficient on $\varphi_1$ is important as it makes it clear that we want to operate where $\cos(2\varphi_0) = 0$, which is where the probability $P_\text{co} = 1/2$.  This makes sense since this is where we have the maximum slope of $C_k$ and thus the maximum sensitivity to changes in $\varphi$.  An example phase offset point where this happens is $\varphi_0 = \pi/4$ for our $N=2$ NOON-state interferometer, which results in

+++ {"id": "6b4e0700-e561-455d-b20f-fadac2b0c8b7"}

$$\delta \varphi^2_{2002} = \frac{1}{4 k} \mathrm{.}$$

We can rewrite this result with respect to the number of input photons, $N_\mathrm{ph} = 2k$, which becomes

$$\delta \varphi^2_{N00N} = \frac{1}{2 N_\mathrm{ph}}\mathrm{.}$$

A classical interferometer follows the same statistical pattern (also equivalent to an N=1 NOON state at the input), but oscillates as $\cos(\varphi)$ rather than $\cos(2\varphi)$.  If we were to go back through this same derivation, we would find that for a classical interferometer

$$\delta \varphi^2_\mathrm{classical} = \frac{1}{N_\mathrm{ph}} \mathrm{,}$$

with an optimal operating point of $\varphi_0 = \pi/2$.  

This means that our $N=2$ NOON state interferometer has improved the fundamental variance of phase measurement by a factor of $2$ compared to a classical interferometer, enabling superresolution.  

In general, larger reductions in variance could be achieved if we could keep increasing the order of the input NOON state.  One can show that the general result for an $N$-th order NOON state, the minimum variance scales as

$$\delta \varphi^2_\mathrm{NOON} = \frac{1}{N N_\mathrm{ph}} \mathrm{,}$$

with optimal operating points being $\varphi_0 = \pi/(2N)$ (or any other $\varphi_0$ where the probability of detection $P = 1/2$).  

In the post-lab questions below, you will explore extensions to $N = 3$ and $N = 4$ NOON-state interferometers.  In particular you will examine why realization of such interferometers is technically challenging to accomplish in the real world. However, we emphasize that **these challenges aren't fundamental -- only technological.  Yet another example of why we need quantum engineers.**

+++

### Numerical Experiments

In this section we explore a numerical experiment that accounts for the photon detection statistics of a classical interferometer and NOON-state interferometry.  The goal of this is to compare the noise performance of phase detection for each case.  

For such numerical experiments we just need to understand the probability of detection.  In general, the probability of detection goes as 

$$P_\text{NOON} = \sin^2(\varphi N/2)\mathrm{.}$$

Note that if we set $N=1$ this probability is that of a classical interferometer.  Also, it is important to consider that at the input you require $N$ photons.  We need to consider this input photon number so that we make a fair comparison of the output statistics considering the same number of photons.   

At the output, we have statistics that follow a binomial distribution.  We either detect the desired event with probability $P$, or we down with probability $1-P$.  Most scientific programming environments can simulate such binomial statistics.  Using `numpy` we can call `numpy.random.binomial(n, P)` where `n` is the number of trials and `P` is the probability of detecting the desired outcome.  

In the following, we simulate the cases for $N=1$ $N=2$, and $N=4$ considering a fixed input of $N_\mathrm{ph}$ photons.  To see the sensitivity to $\varphi$ we consider that it is modulating in time such that 

$$\varphi = \varphi_0 + \delta\varphi \sin (2\pi f t)\mathrm{.}$$

This is rather arbitrary for visualization, and we look over a period of 1 second with $f=4$ Hz. We consider $\delta\varphi = 0.05$.  The value of $\varphi_0$ is chosen for each case to put the probability at the highest slope where $P=0.5$.

```{code-cell} ipython3
---
colab:
  base_uri: https://localhost:8080/
  height: 513
id: 2c213cbb-39d2-4c14-a48b-a4e83b72246a
outputId: 2560f16d-e7b7-4a76-fc1d-2f10399e6051
tags: [hide-output]
---
import numpy as np
import matplotlib.pyplot as plt
import ipywidgets


fig = plt.figure();
fig.set_size_inches(15, 7);

del_phi_0 = 0.05
N_ph = 1000

t = np.linspace(0, 1, 1000)
f = 4
omega = 2*np.pi*f
del_phi = del_phi_0*np.sin(omega*t)

phi_cl = np.pi/2
phi_2002 = np.pi/4
phi_4004 = np.pi/8

P_cl = np.sin((phi_cl + del_phi)/2)**2
P_2002 = np.sin(phi_2002 + del_phi)**2
P_4004 = np.sin(2*(phi_4004 + del_phi))**2

N_cl = np.random.binomial(N_ph, P_cl)
N_2002 = np.random.binomial(N_ph/2, P_2002)
N_4004 = np.random.binomial(N_ph/4, P_4004)

ax1 = fig.add_subplot(1, 3, 1)
ax2 = fig.add_subplot(1, 3, 2)
ax3 = fig.add_subplot(1, 3, 3)

ax1.clear()
ax1.plot(t, N_cl, 'o');
ax1.set_ylabel('Counts', fontsize=15)
ax1.set_title('1001 (Classical)', fontsize=15)

ax2.clear()
ax2.plot(t, N_2002, 'o');
ax2.set_xlabel('Time (s)', fontsize=15)
ax2.set_title('2002', fontsize=15)

ax3.clear()
ax3.plot(t, N_4004, 'o');
ax3.set_title('4004', fontsize=15);
```

```{code-cell} ipython3
:id: 244f29bc-77de-449a-bad3-927510c5a4f0
:outputId: 9c825584-870a-4df2-c76d-b56efbaa481f
:tags: [remove-cell]

from myst_nb import glue
glue("noon_classical_comparison", fig, display=True)
```

+++ {"id": "e3e102af-b5ec-4e81-b942-d4b0a45f5428"}

```{glue:figure} noon_classical_comparison
:figwidth: 800px
:name: "fig-noon-classical-comparison"

Comparison of classical and NOON state interferomters.  The plot shows the recorded number of counts (photon counts for the classical case, or multiphoton events in the NOON state cases) for a fixed number of 1000 photons input to each interferomter.  The phase is modulated sinusoidally in time with an amplitude of 0.05 radians and frequency of 4 Hz.  Note the improved noise performance of the NOON-state interferometers.  If you reduce the phase modulation amplitude, you will notice that the NOON state interferometers can resolve phase modulations of lower amplitude than the classical interferometer. 
```

+++

Note how the modulation is clearly better resolved defined with higher signal-to-noise ratio as the photon order increases. This is even in-spite of progressively fewer collected events!  

You are encouraged to launch this notebook where you will find an interactive version of this code below.  Play with the number of input photons and the phase modulation amplitude and observe how the statistics change.  Note that if you progressively decrease the amplitude of the phase modulation, you will find a value where the modulation is almost impossible to discern for the classical $N=1$ case, but easily discernable for the $N=4$ case.

```{code-cell} ipython3
---
colab:
  base_uri: https://localhost:8080/
  height: 513
id: 2c213cbb-39d2-4c14-a48b-a4e83b72246a
outputId: 2560f16d-e7b7-4a76-fc1d-2f10399e6051
tags: [remove-cell]
---
import numpy as np
import matplotlib.pyplot as plt
import ipywidgets


fig = plt.figure();
fig.set_size_inches(15, 7);

del_phi_0 = 0.05
N_ph = 1000

# -- Calculations --
def update(del_phi_0, N_ph, fig):
    
    t = np.linspace(0, 1, 1000)
    f = 4
    omega = 2*np.pi*f
    del_phi = del_phi_0*np.sin(omega*t)

    phi_cl = np.pi/2
    phi_2002 = np.pi/4
    phi_4004 = np.pi/8

    P_cl = np.sin((phi_cl + del_phi)/2)**2
    P_2002 = np.sin(phi_2002 + del_phi)**2
    P_4004 = np.sin(2*(phi_4004 + del_phi))**2

    N_cl = np.random.binomial(N_ph, P_cl)
    N_2002 = np.random.binomial(N_ph/2, P_2002)
    N_4004 = np.random.binomial(N_ph/4, P_4004)
    
    ax1 = []
    ax2 = []
    ax3 = []
    axes = fig.get_axes()
    if(len(axes)==0):
        ax1 = fig.add_subplot(1, 3, 1)
        ax2 = fig.add_subplot(1, 3, 2)
        ax3 = fig.add_subplot(1, 3, 3)
    else:
        ax1 = axes[0]
        ax2 = axes[1]
        ax3 = axes[2]
    
    ax1.clear()
    ax1.plot(t, N_cl, 'o');
    ax1.set_ylabel('Counts', fontsize=15)
    ax1.set_title('1001 (Classical)', fontsize=15)

    ax2.clear()
    ax2.plot(t, N_2002, 'o');
    ax2.set_xlabel('Time (s)', fontsize=15)
    ax2.set_title('2002', fontsize=15)

    ax3.clear()
    ax3.plot(t, N_4004, 'o');
    ax3.set_title('4004', fontsize=15)
    
    display(fig);
    
    return del_phi_0, N_ph

system_set = ipywidgets.interactive(update,
                                    del_phi_0=ipywidgets.FloatSlider(value=del_phi_0,
                                                        min=0,
                                                        max=0.1,
                                                        step=0.001,
                                                        description=r'$\delta\varphi$ (rad)',
                                                        disabled=False,
                                                        continuous_update=False,
                                                        orientation='horizontal',
                                                        readout=True,
                                                        readout_format='.3f',),
                                    N_ph = ipywidgets.FloatText(value=N_ph, description=r'$N_\mathrm{ph}$'),
                                    fig=ipywidgets.fixed(fig));

display(system_set);
```

+++ {"id": "WEqkDzKhWJM-"}

### Post-Lab Questions

  1. In practice, we find that imperfections in allignment photon detection prevent the achievement of improved sensitivity beyond what is possible with a classical interferometer.  To account for such imperfections, we can write the propability of coincidences more generally as $P(\varphi) = 
  \eta \big ( 1 - V \cos(N\varphi) \big )/2$ for an $N$ photon number NOON state.  Express the variance of the estimated phase for general $\eta$ and $V$.    

  2. Given $\eta = 1$, what are the constraints on $V$ needed to ensure phase sensitivity beyond that of a classical interferometer? 

  3. Derive the output state for $N = 3$ and $N = 4$ NOON state interference (*i.e.* output states $e$ and $f$ given you have  $N = 3$ and $N = 4$ NOON state inputs to the $c$ and $d$ ports in {numref}`NOON-state-interferometer`).  For performing phase-measurmeents with high visibility for $N = 3$ and $N = 4$, what are the requirements on post-selection?  Is a simple coincidence detector still sufficient?     

  4. Discuss the engineering challenges involved with regard to state generation and post selection needed for true quantum-enhanced phase measurements with this approach. (For this question, it may be helpful to consider the challenges faced in the experiments discussed in Refs. {cite:p}`nagataBeatingStandardQuantum2007,okamotoBeatingStandardQuantum2008`.

+++

## References

```{bibliography}
:filter: docname in docnames
```
