---
jupytext:
  formats: ipynb,md:myst
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

+++ {"tags": ["remove-cell"]}

# Latex Headers

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

+++ {"incorrectly_encoded_metadata": "tags=[\"remove-cell\"] jp-MarkdownHeadingCollapsed=true jp-MarkdownHeadingCollapsed=true tags=[] jp-MarkdownHeadingCollapsed=true", "tags": ["remove-cell"]}

# Cell Width Adjust

 - Execute the code below to adjust the width of the cells when editing.  
 - These cells will not be published to the book and are for editing convenience.

```{code-cell} ipython3
:tags: [remove-cell]

width = 70 #Width as a percentage of the screen

from IPython.display import display, HTML
display(HTML("<style>.jp-CodeCell .jp-Cell-inputWrapper { width: "+str(width)+"% !important;  margin: 0 auto; }</style>"))
display(HTML("<style>.jp-MarkdownCell .jp-Cell-inputWrapper { width: "+str(width)+"% !important;  margin: 0 auto; }</style>"))
display(HTML("<style>.jp-Cell-outputWrapper { width: "+str(width)+"% !important;  margin: 0 auto; }</style>"))
```

# Chapter XX -- Interference: Hong-Ou-Mandel Effect and Homodyne Detection

Many quantum engineering applications leverage the unique properties of quantum light and its interactions with basic optical elements.  For example, many applications will have multiple stages for splitting, propagating, and recombining/interfering photons before final detection.  For instance, a simplified optical implementation of quantum key distribution is shown in the figure below.

**FIXME: Figure for QKD implementation**

Before we can build to larger systems for more functional applications, it is important to understand how how to treat basic building blocks of quantum optical systems.  

In this chapter, we will introduce the concepts of entangled photon pair generation and interference by way of studying the Hong-Ou-Mandel effect.  We will discuss how photons interact with beamsplitters, how to treat their interference, and signal processing methods such as coincidence detection.  

We will also explore the concept of homodyne detection where we leverage the interference between more general quantum states and coherent states to characterize quantum fields.  We will build on this to explore how homodyne detection can be used to performe distance measurements with extremely high sensitivity using squeezed light.  Such techniques were in large part perfected for the detection of gravitational waves, but can be applied more generally at smaller scales.

+++

## Hong-Ou-Mandel Effect

Imagine the scenario depicted in Fig. **FIXME: FIGURE**.  A nonlinear crystal is used to generate precisely two photons of energy $\hbar\omega$ when excited by a pulse with a photon energy of $2\hbar\omega$.  This process is called spontaneous parametric down-conversion and is a common technique for generating entangled photon pairs. 

The two photons travel away from the crystal along two paths (top and bottom as shown).  They are then brought together and interfere within a beamsplitter.  The user can control the path length of the top arm, which impars a delay on the photon taking this path.  It is interesting to then examine the signals one would detect at outputs $c$ and $d$ as a function of this delay.  So lets move on to describing how to process and predict detected events.

**FIXME: HONG-OU-MANDEL EXPERIMENTAL SCHEMATIC**

If we break down the different possibilities, one would be that both photons output in $c$, on would be that both photons output in $d$, and one would be that one photon outputs in $c$ while the other outpus in $d$.  These possibilities can be categorized by coincidence.  In the first two cases, only one detector or the other would click.  In the last case, both detectors would click simultaneously -- a coincidence event.  A useful metric is then to evaluate the coincidence rate as a function of delay.  How do we describe this?

To start with, at the input of the beamsplitter we know we have two states in two different modes, one having a delay.  The first can be described as

$$ \ket{1; \tau}_a, $$

and the second as

$$ \ket{1; 0}_b.$$

The first number represents the numer of photons, the second the delay.  Finally, the subscript represents the mode.  So, the total input state would be

$$\ket{\psi_\text{in}} = \ket{1; \tau}_a\ket{1; 0}_b = \adagger_{\tau}\bdagger_0 \ket{0}$$

```{note} We have taken a little liberty here to assign creation and annihilation operators for each mode with their mode label.  It's just a bit of shorthand that is very common to make things easier to read if there are only a handful of modes to deal with.
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

Remember that probabilities of outcomes are related to $\bra{\psi_out}\ket{\psi_out}$, thus we can make the following map of outcomes at each detector.

:::{figure-md} HOM-possibilities-w-tau
<img src="./FIGURES/HOM-possibilities-w-tau.png" alt="HOM-w-tau" class="bg-primary mb-1" width="500px">

Four different possibilities of detection in port c and d given a non-zero delay $\tau$.  
:::

All possibilities we oultined above happen with equal probability.  This would result in a net coincidence rate of 50%.  

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

**FIXME: Map of outcomes for $\tau = 0$ where we show pulses and probabilities.**

:::{figure-md} HOM-possibilities-wo-tau
<img src="./FIGURES/HOM-possibilities-wo-tau.png" alt="HOM-w-tau" class="bg-primary mb-1" width="500px">

Two different possibilities of detection in port c and d given a zero delay $\tau$ such that the two photons are indistinguishable in every way at the beamsplitter.  Note each pulse now contains two photons, and the probability of each occurance is $1/2$.  
:::



In this case **there would be no coincidence events**.  Either both photons go to $c$ or both to $d$ with equal probability.


+++

## Homodyne Detection

+++

## References

```{bibliography}
:style: unsrt
```
