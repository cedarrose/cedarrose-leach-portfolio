---
order: 2
title: Neural Probe
org: Biomedical Microsystems Laboratory, USC
orgUrl: https://biomems.usc.edu/
role: Design, Fabrication, & Characterization
category: research
start: 2024-07
end: 2025-05
summary: Helped design, fabricate and characterize a flexible neural recording probe that pairs polymer flexibility with silicon electrode density, including two custom PCBs and COMSOL coil simulations.
tags: [Neural interfaces, Microfabrication, COMSOL, PCB design, Fusion 360, KLayout, Parylene]
supervisor: Professor Ellis Meng
funding:
  - name: CURVE Fellowship
    url: https://viterbiundergrad.usc.edu/research/curve/
  - name: USC Provost's Undergraduate Research Fellowship
    url: https://academicprograms.usc.edu/services/undergraduate-research-and-experiential-learning/usc-provosts-undergraduate-research-fellowships/
links:
  - label: Symposium poster (PDF)
    url: /files/neural-probe-poster.pdf
photosFirst: true
publications:
  - title: Implantable Flexible GHz Waveguide for High Data Throughput Neural Recording Interfaces
    authors: Barrera, N.D., Nguyen, T.D., Ramirez, E., Leach, C.R., Abbasi, N., Molisch, A., Sideris, C., & Meng, E.
    venue: Neural Interfaces 2025 Conference
    date: June 2025
    kind: Conference abstract
  - title: Development and Characterization of a High-Density Flexible Neural Recording Probe
    authors: Leach, C.R., Barrera, N., Ramirez, E., & Meng, E.
    venue: Research symposium poster, University of Southern California
    date: "2025"
    url: /files/neural-probe-poster.pdf
    kind: Poster
gallery:
  - src: ../../assets/work/neural-probe/poster.png
    alt: Research poster titled Development and Characterization of a High-Density Flexible Neural Recording Probe, with sections on introduction, development and characterization.
    caption: Symposium poster
  - src: ../../assets/work/neural-probe/pcb-render.png
    alt: 3D render of a green printed circuit board with a secondary coil and pin headers.
    caption: PCB with secondary coil for testing inductive coupling efficiency of primary coil
  - src: ../../assets/work/neural-probe/zif-adapter.jpeg
    alt: Small purple PCB with a ZIF connector and a cartoon seal printed on the silkscreen.
    caption: ZIF connector
skills:
  - name: Femtosecond Laser Ablation
    detail: To precisely pattern coils from a titanium sheet for one rendition of the neural probe.
  - name: Fusion 360 CAD
    detail: Created the mold for forming a wire into the desired shape of the primary coil. Developed multiple mold variations to optimize both the coil's geometry and the efficiency of the wire-forming process.
  - name: K-Layout
    detail: Designed 2D coil patterns for fabrication on silicon wafers.
  - name: Device Packaging
    detail: Soldering and coil molding to create the primary coil and neural probe shank. Attached SMA connectors for testing and measurements.
  - name: S-param Data Analytics
    detail: S to Z conversion to analyze impedance of primary coil and derivation of inductance.
  - name: COMSOL Simulations
    detail: Learned COMSOL, simulating magnetic field and inductance properties of the probe to optimize coil performance.
  - name: Parylene Deposition & Etching
    detail: Worked in the cleanroom depositing parylene for various renditions of the probe. Parylene serves as an insulator and a substrate for the probe.
  - name: Analog-to-Digital Converter (ADC)
    detail: Researched and selected ADC eval boards as to digitize probe data. Focused on specifications such as sampling rate & bit resolution.
  - name: PCB Design
    detail: Designed two custom PCBs. The first was a testing tool for evaluating inductive coupling efficiency of the neural probe's primary coil. I configured dual RF amplifiers to measure voltage differentials across the ports and calculated trace widths for impedance matching. The second board just adapted a ZIF connector to Molex pins, but I made it 10x cooler with cute seal saying hi.
---

From July 2024 to May 2025, I helped design, fabricate, and characterize a hybrid silicon-polymer neural recording probe: a device meant to bend like the tissue around it while recording from many neurons at once.

This neural probe aimed to combine the flexibility of polymer-based neural interfaces and the high electrode density of silicon-based neural interfaces. This hybrid approach was designed to enable high spatial resolution neural recordings while maintaining the flexible mechanical properties and biocompatibility required for neural implants. To create this novel neural probe, I assisted in developing and testing the fabrication procedure for the flexible shank.

I joined this lab in summer 2024 after a month of training in semiconductor fabrication processes in the cleanroom. I was able to translate this knowledge of nanofabrication to the lab's development of neural interfaces. I truly enjoyed the process of creating this device. It was a ton of trial and error, brainstorming different fabrication methods and figuring out what worked and what didn't. We undertook at least six different fabrication approaches, and each approach had many different variations - tweaking the mold CAD file, or the material of the coil, or the method of transferring the coil to the substrate, or the coil-forming strategies.

There are standard fabrication processes for creating neural probes (e.g. photolithography, deposition, etching, liftoff). However, our project required a new fabrication approach since we were dealing with a much thicker layer of conductive material.

Throughout the process of brainstorming, designing, fabricating, and characterizing the neural probe, I gained valuable knowledge and honed a variety of skills, including:
