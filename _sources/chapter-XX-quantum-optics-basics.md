---
jupytext:
  formats: ipynb,md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.5
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"tags": ["remove-cell"]}

# Latex Headers

```{raw-cell}
:tags: []

$$\newcommand{\ket}[1]{\left|{#1}\right\rangle}$$
$$\newcommand{\bra}[1]{\left\langle{#1}\right|}$$
$$\newcommand{\braket}[2]{\left\langle{#1}\middle|{#2}\right\rangle}$$
$$\newcommand{\adagger}[0]{\hat{a}^{\dagger}}$$
$$\newcommand{\ahat}[0]{\hat{a}}$$
```

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

# The Basics of Quantum Optics

This course is about how we can leverage quantum systems as engineers.  As such it is not intended to be a course focused purely on the physics of quantum systems.  

In this course we will focus our attention on how to engineer quantum systems to securely transmit information, perform sensitive measurements, and compute among other things.  This will require us to develop a proficiency in understanding how quantum signals are generated, transmitted, and received.  It will also require us to understand the limitations of measurements, and how to account for noise.

While we will introduce several quantum engineering platforms in this course, a large number of concepts will be taught through the lens of quantum optics.  This chapter overviews basic concepts in quantum optics that will be drawn on throughout the course.  It should be used as both review and reference material.  For those interested in going deeper than the surface level overview we present here, references are provided at various points.

+++

## Optical Modes

Often we deal with optical signals whose fields oscillate at a single angular frequency $\omega$.  At any given frequency, an optical signal can be written as a summation of modes.  These modes are distinguished by a variety of properties, such as their wave-vector $\mathbf{k}$ or polarization (e.g. linear horizontal, linear vertical, right-hand circular, etc.).  

In most cases, each input or output signal populates a single mode.  

+++

## The Vacuum State $\ket{0}$

The vacuum state represents the condition that no photon populates any mode.  This can be expanded as:

$\ket{0} = \ket{0}_a\ket{0}_b\ldots\ket{0}_m\ket{0}_n\ldots$,

where, for example, $\ket{0}_n$ represents zero photons for mode $n$.  

+++

## Photon Number States: $\ket{N}$

Number states are those that represent a mode populated with a precise number of photons.  Such states are ubiquitous in quantum engineering applications.     

For instance, a single photon in mode $m$ can be written as:

$\ket{1}_m = \ket{0}_a\ket{0}_b\ldots\ket{0}_l\ket{1}_m\ket{0}_n\ldots$.

Likewise, for N-photons in mode $m$:

$\ket{N}_m = \ket{0}_a\ket{0}_b\ldots\ket{0}_l\ket{N}_m\ket{0}_n\ldots$.

+++

## The Creation Operator: $\adagger$

The creation operator acts to increase the photon number in a particular mode by 1. For instance:

$\adagger_m \ket{0}_m = \ket{1}_m$

More generally:

$\adagger_m \ket{N}_m = \sqrt{N + 1}\ket{N + 1}$

+++

## The Annihilation Operator: $\ahat$

The annihilation operator acts to decrease the photon number in a particular mode by 1.  For instance:

$\ahat_m \ket{1}_m = \ket{0}_m$.

More generally:

$\ahat_m \ket{N}_m = \sqrt{N}\ket{N - 1}$.

Note that:

$\ahat_m \ket{0}_m = 0$

+++

## The Number Operator: $\hat{N} = \adagger\ahat$

As the name implies, the number operator relates to the number of photons contained within a mode.  It is related to the annihilation and creation operators:

$\hat{N}_m = \adagger_m\ahat_m$.  

Often times we are interested in the time-averaged number of photons in a state.  For instance, consider the state $\ket{\psi_m}.  The time averaged number of photons in this state would then be:

$\bra{\psi}_m\hat{N}_m\ket{\psi}_m$.  

Using the properties of $\ahat$ and $\adagger$, you can easily show that:

$\bra{N}_m \hat{N}_m \ket{N}_m = N$.  

+++

## The Field Operators

The annihilation and creation operators are also intrinsically related to the electric field of a state.  In fact, they arise as a result of quantizing the electric field.  

```{note}
The quantization of the electromagnetic field is discussed in many textbooks.  For instance, see the treatment in REf. {cite:p}`townsendModernApproachQuantum2000`.  
```

+++

# References

```{bibliography}
:style: unsrt
```
