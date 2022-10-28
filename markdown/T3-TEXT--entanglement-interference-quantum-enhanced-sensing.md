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

# Chapter XX -- Interference, Entanglement and Quantum-Enhanced Metrology

Many quantum engineering applications leverage the unique properties of quantum light and its interactions with basic optical elements.  For example, many applications will have multiple stages for splitting, propagating, and recombining/interfering photons before final detection.  For instance, a simplified optical implementation of quantum key distribution is shown in the figure below.

**FIXME: Figure for QKD implementation**

Before we can build to larger systems for more functional applications, it is important to understand how how to treat basic building blocks of quantum optical systems, and how to combine multiple of these building blocks together to engineer solutions that go beyond what is possible using classical systems.    

In this chapter we examine entangled pairs of photon states, entangled photon pair interference by way of the Hong-Ou-Mandel effect, and entangled multi-photon Fock state interference for enhanced quantum phase sensing.  Along the way we will discuss many basic principles important to a variety of areas in quantum photonics, such as: the interaction of photons with beamsplitters; the interference of photon states; signal detection and processing methods such as coincidence detection; and how to analyze statistical fluctuations of photon detection events for determining sensitivity and signal to noise ratio in measurements.

+++ {"id": "4b595179-c2b9-4d45-819a-5c18c297dfe0"}

## Single Photon Interference: The Hong-Ou-Mandel Effect

Imagine the scenario depicted in Fig. {numref}`HOM-setup`.  A nonlinear crystal is used to generate precisely two photons of energy $\hbar\omega$ when excited by a pulse with a photon energy of $2\hbar\omega$.  This process is called spontaneous parametric down-conversion and is a common technique for generating entangled photon pairs. 

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

The first number represents the numer of photons, the second the delay.  Finally, the subscript represents the mode.  Given a two-photon input to the system from the crystal with delay along path $a$ of $\tau$, the total input state can be written as

$$\ket{\psi_\text{in}} = \ket{1; \tau}_a\ket{1; 0}_b = \adagger_{\tau}\bdagger_0 \ket{0}$$

```{note} 
We have taken a little liberty here to assign creation and annihilation operators for each mode with their mode label.  It's just a bit of shorthand that is very common to make things easier to read if there are only a handful of modes to deal with.
```

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

Remember that probabilities of outcomes are related to $\bra{\psi_\mathrm{out}}\ket{\psi_\mathrm{out}}$, thus we can make the following map of outcomes at each detector.

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

In this case **there would be no coincidence events** (that is, events that would trigger an output on both detectors).  Either both photons go to $c$ or both to $d$ with equal probability.  This is in comparison to the case when the modes were fully separate in time when the coincidence rate is 50%.  

```{important}
We want to emphasize here that we have taken a few liberties with the notation above.  The approach  used here works in estimating probabilities for the two cases discussed, assuming (1) that each photon pulse is long relative to the central frequency; (2) that the envelope shape and central frequency of each pulse is the same; and (3) that for the delayed case the photons are so far separated in time that there is no overlap between each photon pulse at the input of the beamsplitter. For these cases the states are either perfectly indistinguishible or distinguishable.  A more complete model would actually have to expand each input into the frequency domain and model the interference between each spectral component individually.  However this approach is much more involved.  In the end, both approaches result in the same predictions as discussed above.  
```

+++ {"id": "pWkSqRv049WB"}

## Quantum Enhanced Sensing with NOON States

Notice that when $\tau = 0$ the state takes on an interesting superposition of $N=2$ Fock states.  Such states are called NOON states, so here we would have an $N=2$ NOON state.  It turns out that if we send such states through a subsequent interferometer, we can obtain a quantum advantage in sensitivity to phase shifts.  In this section, we will explore why this is important and how it works.  In the practice problems and exercises, we will also explore limitations to the generalized implementation of this approach and touch on other approaches that are used for similar purposes.  

Before we talk about sensing phase shifts, you might be wondering why someone would want to measure optical phase in the first place?  Typically, it is not the phase shift itself that we are after, but rather the physical change that has caused the phase shift.  A famous example of this is the measurement of gravitational waves using LIGO.  In LIGO, extremely small changes in the path length between two arms of an interferometer are caused by a passing gravitational wave.  This change in path length manifests as a shift in phase of the light that travels down one arm relative to light that travels down the other.  It is just this phase shift that is detected and related to a change in distance.  Similar techniques are used on much smaller scales to stabilize fine movements in stages with nanometer precision.  

A limitation to the measurement of interferometric phase shifts is caused by noise in the system and at the optical readout.  Given we can make a stable enough interferometer, and obtain low enough noise in the detector readout, the measurement noise will eventually be limited by fundamental fluctuations in the photon signal.  In a classical interferometer, this fundamental photon noise results in a variance in the phase estimation of

$$\delta \varphi^2_\mathrm{classical} = \frac{1}{N_\mathrm{ph}} \mathrm{.}$$

where $\varphi$ is the phase to be measured, and $N_\mathrm{ph}$ is the total number of photons passing through the interferometer. Here we will present a method for leveraging quantum properties to achieve phase noise performance beyond this standard quantum limit (SQL).  We will also build and study such a quantum-enhanced interferometer in the lab.  

+++ {"id": "caf35967-6267-459a-a1a9-dd34fbbb1f0f"}

### Analysis of Phase Estimation in an $N=2$ NOON State Interferometer

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

Note that there are terms multiplied by $e^{j2\varphi} \pm 1 = e^{j\varphi}(e^{j\varphi} \pm e^{-j\varphi})$. The reason this is important is because they can be expressed as multiples of $\sin$ and $\cos$ since $e^{j\varphi} + e^{-j\varphi} = 2\cos{\varphi}$ and $e^{j\varphi} - e^{-j\varphi} = 2j\sin{\varphi}$.  Using this property and rearranging the terms in $\ket{\psi}_\mathrm{out}$ above we find that

$$\ket{\psi_\mathrm{out}} = \frac{e^{j\varphi}}{2} \bigg \lbrace \cos({\varphi})(\edagger\edagger + \fdagger\fdagger) + j\sin({\varphi})\edagger\fdagger \bigg \rbrace \ket{0}\mathrm{.}$$

After applying all of the creation operators, we finally arrive at the output state

$$\ket{\psi_\mathrm{out}} = \frac{e^{i\varphi}}{\sqrt{2}}\cos({\varphi})(\ket{2}_e
 + \ket{2}_f) + ie^{i\varphi}\sin({\varphi})\ket{1}_e\ket{1}_f \mathrm{.}$$
 
Let's take a moment to evaluate this.  Similar to the output of our HOM experiment, we have various possibilities of coincidence detection or the separate detection of either a $\ket{2}_e$ or $\ket{2}_f$ state.  However, there is now the added consideration that these outcomes depend on $\varphi$.  This is good as that is precisely what we want to detect.  If we restrict ourselves to only looking at coincidence outputs in $e$ and $f$, we then find that they occur with probability

$$P_\mathrm{co}(\varphi) = \sin^2{\varphi}$$

meaning that we can adjust the probability of coincidence detection from 0 to 100\% by simply adjusting $\varphi$ from $0$ to $\pi/2$.  It is convenient to get rid of the $\sin^2$ term using a trigonetric identity

$$P_\mathrm{co}(\varphi) = \frac{1}{2} - \frac{1}{2}\cos(2\varphi)\mathrm{.}$$

It is at this point that you realize that the output oscillates as $\cos(2\varphi)$.  You can show that a classical interferometer oscillates as $\cos(\varphi)$.  This doubling of the oscillation rate for our NOON state interferometer is due to the reduced deBroglie wavelength of the higher order Fock state inputs!  This faster variation with respect to $\varphi$ provides **superresolution** compared to a classical interferometer.  However, this isn't the entire story.  While **superresolution** is provided by the higher rate of oscillation with $\varphi$, it is not guaranteed that the interferometer provides **supersensitivity**, meaning that it has reduced the smallest possible value of $\varphi$ that can be measured.  To demonstrate that **supersensitivity** is possible requires condiseration of the fundamental fluctuations in the measurement of $\varphi$.  To do this, we must consider the statistical variations of a measurement on $\varphi$.

+++ {"id": "2b34879f-7b24-4ac2-ad25-2ff7749c39ff"}

### Demonstrating Supersensitivity

At the point of detection we restrict ourselves to only counting coincidence events.  With a perfect detector and measurement setup, we then can consider that at the output we either have a true coincidence, or not.  Our measurment then follows the statistics of a [binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution#Expected_value_and_variance).    

If we perform $k$ measurements, we find that the number of coincidence events detected $C_k$ would be

$$C_k = k P_\mathrm{co}(\varphi)\mathrm{.}$$

The variance in the number of detected coincidences can be found to be

$$\Delta C_k^2 = k P_\mathrm{co}(\varphi) (1 - P_\mathrm{co}(\varphi))\mathrm{.}$$

So far so good.  These are just directly from the properties of a binomial distribution.  However, we don't want the variation of the number of coincidences, we want the variation in the value of $\varphi$ being measured.  To do this, we need to convert the variance in coincidence number to a variance in $\varphi$.  This can be estimated by dividing the square of the rate of change of the coincidence number with respect to $\varphi$ evaluated at the mean position of $\varphi_0$.  

If the interferometer is setup such that the mean value of $\varphi$ is $\varphi_0$, we can then estimate the variance in a measurement of $\varphi$ to be 

$$\delta \varphi^2 = \Delta C_k^2/(\mathrm{d}C_k/\mathrm{d}\varphi|_{\varphi_0})^2 $$

Going back to our expression for $C_k$, we have that

$$\frac{\mathrm{d}C_k}{\mathrm{d}\varphi} = k \sin(2\varphi)$$

Putting it all together we have

$$\delta \varphi^2 = (1 + \cos^2(2\varphi))/(4k\sin^2(2\varphi))\mathrm{.}$$

Let's explore this by plotting it.  In the plot, we set $k = 1$ as we are simply looking for the behavior of the function with respect to $\varphi$.  

```{code-cell} ipython3
---
colab:
  base_uri: https://localhost:8080/
  height: 513
id: 2c213cbb-39d2-4c14-a48b-a4e83b72246a
outputId: 2560f16d-e7b7-4a76-fc1d-2f10399e6051
tags: [hide-cell]
---
import numpy as np
import matplotlib.pyplot as plt

phi = np.linspace(0, 2*np.pi, 1000)

var_phi = (1 + np.cos(2*phi)**2)/4/np.sin(2*phi)**2

fig = plt.figure()
fig.set_size_inches(10, 7)

plt.plot(phi/np.pi, var_phi, linewidth = 2)
plt.xlabel(r'$\varphi/\pi$', fontsize=15)
plt.ylabel(r'$\delta \varphi^2$', fontsize=15)
plt.gca().tick_params(labelsize=14)
plt.ylim(0, 1)
```

```{code-cell} ipython3
:id: 244f29bc-77de-449a-bad3-927510c5a4f0
:outputId: 9c825584-870a-4df2-c76d-b56efbaa481f
:tags: [remove-cell]

from myst_nb import glue
glue("var_phi_plot", fig, display=True)
```

+++ {"id": "e3e102af-b5ec-4e81-b942-d4b0a45f5428"}

```{glue:figure} var_phi_plot
:figwidth: 600px
:name: "fig-var-phi-plot"

Plot of $\delta \varphi^2$ as a function of $\varphi$.  We want to operate near the minima, which correspond to regions of highest slope of $C_k$ with respect to $\varphi$.    
```

+++ {"id": "6b4e0700-e561-455d-b20f-fadac2b0c8b7"}

From this we find that the minimum variance occurs when $\varphi = \pi/4$, giving

$$\delta \varphi^2_{N00N} = \frac{1}{4 k}$$

We can rewrite this with respect to the number of input photons, $N_\mathrm{ph} = 2k$, which becomes

$$\delta \varphi^2_{N00N} = \frac{1}{2 N_\mathrm{ph}}\mathrm{.}$$

A classical interferometer follows the same statistical pattern, but oscillates as $\cos(\varphi)$ rather than $\cos(2\varphi)$.  If we were to go back through this same derivation, we would find that for a classical interferometer

$$\delta \varphi^2_\mathrm{classical} = \frac{1}{N_\mathrm{ph}} \mathrm{.}$$

This means that our $N=2$ NOON state interferometer has improved the fundamental variance of phase measurement by a factor of $2$ compared to a classical interferometer, enabling superresolution.  

In general, larger reductions in variance could be achieved if we could keep increasing the order of the input NOON state.  In the problem set questions below, you will explore extensions to $N = 3$ and $N = 4$ and why this is so technically challenging to accomplish in the real world. However, we emphasize, **these challenges aren't fundamental -- only technological.  Yet another example of why we need quantum engineers.**

+++ {"id": "WEqkDzKhWJM-"}

## Questions

  1. In practice, we find that imperfections in allignment photon detection prevent the achievement of improved sensitivity beyond what is possible with a classical interferometer.  To account for such imperfections, we can write the propability of coincidences more generally as $P(\varphi) = 
  \eta \big ( 1 - V \cos(N\varphi) \big )/2$ for an $N$ photon number NOON state.  Express the variance of the estimated phase for general $\eta$ and $V$.    

  2. What are the constraints on $\eta$ and $V$ needed to ensure phase sensitivity beyond that of a classical interferometer? 

  3. Derive the output state fo $N = 3$ and $N = 4$.  For performing phase-measurmeents with high visibility for $N = 3$ and $N = 4$, what are the requirements on post-selection?    

  4. Discuss the engineering challenges involved for generating high order NOON states and performing the kinds of post selection needed for true quantum-enhanced phase measurements with this approach.
