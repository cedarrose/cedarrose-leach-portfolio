---
title: Analog front end for an electrochemical sensing system
org: Khan Lab, USC
orgUrl: https://khan.usc.edu/
role: Undergraduate researcher
category: research
start: 2024-01
end: 2024-05
summary: Built firmware, test setups and a PCB layout for the analog front end of an extended-gate transistor sensor used for potassium ion sensing.
tags: [Analog front end, Firmware, Arduino, PCB design, Electrochemical sensing]
supervisor: Professor Yasser Khan
funding:
  - name: CURVE Fellowship
    url: https://viterbiundergrad.usc.edu/research/curve/
links:
  - label: Research poster (PDF)
    url: /files/analog-front-end-poster.pdf
publications:
  - title: Firmware Development, Testing and PCB Design for the Analog Front End of Extended Gate Transistor Based Electrochemical Sensing System
    authors: Leach, C.R., Coulon, E., Ferdoushi, M., & Khan, Y.
    venue: CURVE research poster, University of Southern California
    date: "2024"
    url: /files/analog-front-end-poster.pdf
    kind: Poster
gallery:
  - src: ../../assets/work/analog-front-end/poster.png
    alt: Research poster titled Firmware Development, Testing and PCB Design for the Analog Front End of Extended Gate Transistor Based Electrochemical Sensing System.
    caption: CURVE research poster. The full PDF is linked above.
  - src: ../../assets/work/analog-front-end/breadboard.jpeg
    alt: Arduino boards and a breadboard wired together on a lab bench.
    caption: Testing our extended-gate transistor setup.
  - src: ../../assets/work/analog-front-end/transistor.jpeg
    alt: Diagram of single-ended and differential sensor setups next to a green PCB layout.
    caption: Extended-gate transistor setups and the PCB layout of the analog front end.
---

The Khan Lab at USC focuses on wearable sensors for precision health and psychiatry. As a freshman researcher there, I worked on an electrochemical sensing system for potassium ion sensing. My teammate and I developed the firmware and hardware for the analog front end (AFE) of an extended-gate transistor sensor with differential sensing.

## How the sensor works

In an extended-gate transistor sensing system, a change in the chemical activity of the target species shows up as a shift in the silicon transistor's I-V characteristics. With the transistor gate connected to a suitable electrochemical sensor, the analyte in contact with the sensor shifts the transistor's threshold voltage.

To collect this data, we needed analog-to-digital conversion and a bias supply for the NMOS transistors, both provided by the analog front end. We used Analog Devices' AD5933 and interfaced it with an Arduino to control the transistors and read the drain-source current.

## What we built

- Two setups, one with single-ended and one with differential printed sensors, with the transistor gate connected to the gold working electrode of each.
- Firmware that interfaces the Arduino with the digital-to-analog converter (DAC) that biases the NMOS transistors.
- A working AFE built from a breadboard, an Arduino UNO and the DAC, plus a PCB layout of the AFE that I designed for future use.
