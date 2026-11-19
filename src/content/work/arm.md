---
order: 1
title: NPU Power Analysis and Architecture
org: Arm
orgUrl: https://www.arm.com/
role: Power Analysis and Architecture Engineering Intern
logo:
  src: ../../assets/work/arm/logo.png
  alt: Arm logo
category: experience
start: 2026-06
end: 2026-08
summary: Modeled gate-level power for Arm's neural processing unit (NPU) interconnect, and built the automation that made those power runs faster to run, check and compare.
tags: [Power analysis, NPU, Computer architecture, PrimePower, HSPICE, Python, Automation]
---

In summer 2026 I joined Arm as a power analysis and architecture intern, working on gate-level power for the NPU interconnect: the mesh fabric that moves data between an accelerator's compute blocks.

## Measuring power from real workloads

I modeled gate-level power for NPU interconnect blocks in Synopsys PrimePower, driven by switching activity replay FSDBs. I then compared power, bandwidth, and traffic across block-level and tile-level designs to see where the power went and why it changed between them.

Much effort goes into validation and debugging. When a run looks wrong, I traced it back to its cause, whether that was clock gating, test-mode or tie-off settings, mismatched design files, or switching activity that didn't propagate the way it should.

## Automating the flow

I built linux workflows to automate the methodology: launching batches of runs, checking run health, inspecting waveforms, extracting power numbers and visualizing traffic. This made it practical to analyze many blocks and workload scenarios side by side.

## Glitch power

I also helped integrate a new HSPICE-based glitch power characterization flo. Dynamic power is wasted when outputs have unnecessary, spurious signal transitions before settling. Glitch power is a major component of compute-heavy, deeply combinational blocks, so it's vital to characterize it accurately.
