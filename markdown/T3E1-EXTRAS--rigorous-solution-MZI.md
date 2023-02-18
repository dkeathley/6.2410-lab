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
$$\newcommand{\gdagger}[0]{\hat{g}^{\dagger}}$$
$$\newcommand{\ghat}[0]{\hat{g}}$$
$$\newcommand{\hdagger}[0]{\hat{h}^{\dagger}}$$
$$\newcommand{\hhat}[0]{\hat{h}}$$

+++ {"id": "bcdff4e6-8251-4c63-9061-40ac42497a11"}

# EXTRAS -- Rigorous Solution of Mach-Zender Interferometer

In the course material for the discussion of single-photon interference and the interaction-free measurement, we took a shortcut to calculating the photon number expectation by ignoring the operators of the vacuum state inputs.  This simplifies the problem, but is not a rigorous solution.  A particular shortcoming is that this approach would give incorrect results for calculating the noise properties of the photon number at the detectors as in that case the vacuum state input does matter.

+++

## Complete solution without an object

+++

The problem setup is the same, however now we must include all inputs, which slightly modifies our setup as shown in {numref}`fig-T3E1-single-photon-interferometer-complete`.

+++ {"tags": []}

:::{figure-md} fig-T3E1-single-photon-interferometer-complete
<img src="FIGURES/T3E1-single-photon-interferometer-complete.png" alt="Single Photon Interference" class="bg-primary mb-1" width="600px">

Considering all inputs and outputs for the complete description of the Mach-Zender interferometer.
:::

+++

Now we can proceed to find the annihilation operators as before, but with all inputs included.  

$$\chat = \frac{\ahat + \bhat}{\sqrt{2}}$$

and

$$\dhat = \frac{\ahat - \bhat}{\sqrt{2}}\mathrm{.}$$

We then account for propagation over paths $l_1$ and $l_2$ which lead to a phase shift of $\phi_n = 2 \pi l_n/\lambda$.

$$\ehat = \dhat e^{i\phi_2}$$

and

$$\fhat = \chat e^{i\phi_1}\mathrm{.}$$

From here, we account for the fact that at the second beamsplitter we have

$$\ghat = \frac{\ehat + \fhat}{\sqrt{2}}$$

and

$$\hhat = \frac{\ehat - \fhat}{\sqrt{2}}\mathrm{.}$$

After substituting everything in we get the final expression for $\ghat$:

$$\ghat = e^{i\phi_2} e^{i\Delta\phi/2} \bigg \lbrace \ahat \cos(\Delta\phi/2)  + i \bhat \sin(\Delta\phi/2) \bigg \rbrace $$

where $\Delta \phi = \phi_1 - \phi_2$, the phase difference between the two arms.

Note that the number operator for $g$ is then:

$$\gdagger \ghat = \cos^2(\Delta \phi /2)\adagger\ahat + j\adagger\bhat \cos(\Delta\phi/2)\sin(\Delta\phi/2) - j\bdagger\ahat \cos(\Delta\phi/2)\sin(\Delta\phi/2) + \bdagger\bhat \sin^2(\Delta\phi/2)  \mathrm{.}$$

Given our input state is $\ket{1}_a \ket{0}_b$, the photon number is then found by taking:

$$N_g = \bra{0}_b \bra{1}_a \gdagger \ghat \ket{1}_a \ket{0}_b  = \frac{1}{2} \lbrace 1 + \cos(\Delta\phi ) \rbrace \mathrm{.}$$

Note that only the terms with $\adagger \ahat$ have a non-zero contribution -- this justifies our neglecting the vacuum-state inputs for calculation of the output photon number.

However, it we emphasize that you must use this more complete treatment and account for the vacuum-state inputs to accurately predict the quantum noise in systems. For example, the standard deviation of the photon number depends on $\hat{N}^2$ (see the note in {ref}`basics:mean-and-standard-deviation`), and the vacuum state inputs can contribute to the expectation $\left < \hat{N}^2 \right >$.   As a further example, to see the importance of the vacuum state input in interferometry, please see the use of squeezed vacuum to reduce quantum noise as described in [](./T3E1-EXTRAS-interference-2-homodyne-detection.ipynb).

+++

## Accounting for the partial absorber

For the partial absorber, again our treatment in the text was adequate for accounting for the outgoing photon number.  However, a rigorous solution requires accounting for the vacuum state here again.

The partial absorber can in fact be modeled as a beamsplitter with adjustable transmission/reflection with one input being the vacuum state, the other being the input state, and one output going to a perfect absorber, and the other transmitting out.  See {numref}`fig-T3E1-partial-absorber-model`.

+++ {"tags": []}

:::{figure-md} fig-T3E1-partial-absorber-model
<img src="FIGURES/T3E1-partial-absorber-model.png" alt="Partial Absorber Model" class="bg-primary mb-1" width="600px">

Model of a partial absorber using a beamsplitter to account for the vacuum state.
:::

+++

This model accounts for the vacuum state properly.  Note here the beamsplitter is not a 50:50 beamsplitter to account for the adjustable transmission probability.  The input/output relations are similar, with:

$$\chat = \frac{t\ahat + r\bhat}{\sqrt{2}}$$

and

$$\dhat = \frac{r\ahat - t\bhat}{\sqrt{2}}\mathrm{.}$$

From the derivation in the text, we have that $t = \alpha$, and $r = \sqrt{1 - \alpha^2}$.  You can show that with this element in the Mach-Zender interferometer, the output photon number expectation is equivalent to what we derived, with the number of detected photons being

$$N_d = \frac{1}{4}\lbrace 1 + t^2 + 2t\cos(\Delta \phi)\rbrace \mathrm{.}$$

However, as noted earlier, the impact of this absorbing object is noted when observing the noise in the photon number at the outputs.
