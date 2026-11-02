---
order: 1
title: NPU Power Analysis and Architecture
org: Arm
orgUrl: https://www.arm.com/
role: Power analysis and architecture intern
category: experience
start: 2026-06
end: 2026-08
summary: Modeled gate-level power for Arm's neural processing unit (NPU) interconnect, and built the automation that made those power runs faster to run, check and compare.
tags: [Power analysis, NPU, Computer architecture, PrimePower, HSPICE, Python, Automation]
---

In summer 2026 I joined Arm as a power analysis and architecture intern, working on gate-level power for the interconnect inside neural processing units (NPUs): the mesh fabric that moves data between an accelerator's compute blocks.

## Measuring power from real workloads

I modeled gate-level power for NPU interconnect blocks in Synopsys PrimePower, driven by switching activity replayed from real workloads. I then compared power, bandwidth and traffic across block-level and tile-level designs to see where the power went and why it changed between them.

A lot of the work was making sure a result could be trusted. When a run looked wrong, I traced it back to its cause, whether that was clock gating, test-mode or tie-off settings, mismatched design files, or switching activity that didn't propagate the way it should.

## Automating the flow

I built AI agents and Python and Linux workflows to automate the repetitive parts: launching batches of runs, checking each run's health, inspecting waveforms, extracting power numbers and visualizing traffic. This made it practical to analyze many blocks and workload scenarios side by side.

## Glitch power

I also helped integrate a new HSPICE-based flow for characterizing glitch power: the energy wasted when signals briefly toggle before settling. I validated it against transistor-level simulations and debugged activity-propagation issues, with the goal of making dynamic power estimates more accurate.
