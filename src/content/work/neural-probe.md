---
title: Hybrid silicon-polymer neural probe
org: Biomedical Microsystems Laboratory, USC
orgUrl: https://biomems.usc.edu/
role: Undergraduate researcher (design, fabrication and characterization)
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
  - label: Project description (PDF)
    url: /files/neural-probe-project-description.pdf
publications:
  - title: Implantable Flexible GHz Waveguide for High Data Throughput Neural Recording Interfaces
    authors: Barrera, N.D., Nguyen, T.D., Ramirez, E., Leach, C.R., Abbasi, N., Molisch, A., Sideris, C., & Meng, E.
    venue: Neural Interfaces 2025, Arlington, VA
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
    caption: Symposium poster. The full PDF is linked above.
  - src: ../../assets/work/neural-probe/pcb-render.png
    alt: 3D render of a green printed circuit board with a secondary coil and pin headers.
    caption: PCB with a secondary coil for testing the inductive coupling efficiency of the primary coil.
  - src: ../../assets/work/neural-probe/pcb-layout.png
    alt: Close-up of a green PCB layout showing labeled capacitors, resistors and an integrated circuit.
    caption: Layout of the coupling test PCB.
  - src: ../../assets/work/neural-probe/zif-adapter.jpeg
    alt: Small purple PCB with a ZIF connector and a cartoon seal printed on the silkscreen.
    caption: ZIF-to-Molex adapter board, made 10x cooler with a seal saying hi.
---

Since July 2024, I've been helping to design, fabricate and characterize a hybrid silicon-polymer neural recording probe.

## The idea

This neural probe aims to combine the flexibility of polymer-based neural interfaces with the high electrode density of silicon-based ones. The hybrid approach enables high spatial resolution neural recordings while keeping the flexible mechanical properties and biocompatibility that neural implants require.

The probe is a flexible shank carrying one to three application-specific integrated circuits (ASICs). Digitized neural recordings are transmitted through inductive coupling between the ASIC coils and the probe coil. My part has been developing and testing the fabrication procedure for the flexible shank.

## Why it takes so many attempts

There are standard processes for making neural probes: photolithography, deposition, etching and liftoff. Our project needs a new approach because it uses a much thicker layer of conductive material.

I joined the lab after a month of training in semiconductor fabrication in the cleanroom, and I was able to carry that knowledge into the lab's work on neural interfaces. I truly enjoy the process of creating this device. It's a ton of trial and error: brainstorming fabrication methods and figuring out what works and what doesn't. We've tried at least six fabrication approaches, each with many variations: tweaking the mold CAD file, the coil material, the method of transferring the coil to the substrate, or the coil-forming strategy.

## Skills I built along the way

### Femtosecond laser ablation
Precisely patterned coils from a titanium sheet for one version of the probe.

### Fusion 360 CAD
Created the mold that forms wire into the shape of the primary coil, and developed several mold variations to improve both the coil's geometry and the efficiency of the wire-forming process.

### KLayout
Designed 2D coil patterns for fabrication on silicon wafers.

### Device packaging
Soldered and molded coils to build the primary coil and the probe shank, and attached SMA connectors for testing and measurement.

### S-parameter data analysis
Converted S-parameters to impedance (S to Z) to analyze the primary coil and derive its inductance.

### COMSOL simulations
Learned COMSOL Multiphysics to simulate the probe's magnetic field, inductance, Q-factor and resonant frequency, and used the results to improve coil performance.

### Parylene deposition and etching
Deposited parylene in the cleanroom for several versions of the probe. Parylene acts as both the insulator and the substrate.

### Analog-to-digital converters
Researched and selected ADC evaluation boards to digitize probe data, focusing on sampling rate and bit resolution.

### PCB design
Designed two custom PCBs. The main one is a test tool for measuring the inductive coupling efficiency of the probe's primary coil: I configured dual RF amplifiers to measure voltage differences across the ports and calculated trace widths for impedance matching. The second board adapts a ZIF connector to Molex pins, and I made it 10x cooler with a cute seal saying hi.
