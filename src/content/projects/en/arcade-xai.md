---
title: Explainable AI for surgical feedback
role: Undergraduate Research Assistant
org: ARCADE Lab, Johns Hopkins University
place: Baltimore, MD
period: Oct 2025 – Jun 2026
order: 1
summary: Computer vision pipelines that assess surgical skill and tell trainees exactly when and where their movement drifted from an expert's.
tags: [Computer vision, Dynamic Time Warping, Python, PyTorch, OpenCV]
---

Surgeons-in-training usually get feedback as a single score at the end of a session. This project asked a different question: *which moment* went wrong, and why?

## What I built

- **Vision pipelines for skill assessment**, from raw video through preprocessing to 2D pose, then extended to 3D so movement could be analysed in space rather than on screen.
- **Dynamic Time Warping (DTW)** to align a trainee's trajectory against expert benchmarks. Because two people never move at the same speed, DTW lets the comparison happen moment-to-moment, which is what makes the feedback time-specific.

## Why it matters

Explainability is the point. A model that says "62/100" is less useful to a learner than one that says "your wrist rotation lagged the expert by 0.8 s here."
