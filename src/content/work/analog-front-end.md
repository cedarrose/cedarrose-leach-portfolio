---
order: 6
title: Analog Front End of Electrochemical Sensing System
org: Khan Lab, USC
orgUrl: https://khan.usc.edu/
role: Firmware Development, Testing and PCB Design
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
  - label: View Poster
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
    caption: CURVE poster
  - src: ../../assets/work/analog-front-end/breadboard.jpeg
    alt: Arduino boards and a breadboard wired together on a lab bench.
    caption: Testing our extended-gate transistor
  - src: ../../assets/work/analog-front-end/transistor.jpeg
    alt: Diagram of single-ended and differential sensor setups next to a green PCB layout.
    caption: Extended gate transistor setups and PCB layout of analog front end
---

The Khan Lab at USC focuses on wearable sensors for precision health and psychiatry. As a freshman researcher in the Khan Lab I worked on an electrochemical sensing system for potassium ion sensing. My teammate and I developed firmware and hardware for the Analog Front End of an extended gate transistor-based sensor with differential sensing capabilities.

In an extended gate transistor-based electrochemical sensing system, the change in chemical activity of analyte species can be detected in the shift of the silicon transistors' i-v characteristics. With the transistor gate connected to an appropriate electrochemical sensor, the analyte in contact with the sensor will induce a shift in the transistor's threshold voltage. To collect this electrochemical data, we needed analog-to-digital conversion and a supply of bias to NMOS transistors through the Analog Front End (AFE). We used Analog Devices' AD5933 and interfaced it with an Arduino to control the transistors and read the drain-source current.

We created two setups, single-ended and differential printed sensors, and connected the transistor gate to the gold working electrode of the chosen setup. We developed the firmware to interface the Arduino with the digital-to-analog converter (DAC), which provides bias to the NMOS transistors. We created the AFE system from a breadboard, Arduino UNO, and DAC, but I created a PCB layout of the AFE for future use.
