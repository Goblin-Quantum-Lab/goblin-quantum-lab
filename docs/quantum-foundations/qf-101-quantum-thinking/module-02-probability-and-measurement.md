---
sidebar_position: 3
---

# Module 2: Probability and Measurement

## Purpose

This module introduces probability, measurement outcomes, shots, counts, and distributions. These ideas are essential for reading beginner quantum experiment results.

## Probability

Probability describes how likely an outcome is. In beginner quantum experiments, probabilities help us describe what we expect to see after measurement.

For example, a simple experiment might be expected to produce mostly `0`, mostly `1`, or a mix of both. The exact observed counts may vary from run to run.

## Measurement

Measurement is the step where a quantum state produces a classical result. In a one-qubit experiment measured in the computational basis, the result is recorded as `0` or `1`.

One measurement gives one outcome. It does not show the whole probability pattern by itself.

## Shots

A shot is one repeated execution of the same experiment setup. If you run an experiment for:

- 10 shots, you collect 10 outcomes.
- 100 shots, you collect 100 outcomes.
- 1,000 shots, you collect 1,000 outcomes.

Repeated shots help you estimate the distribution of outcomes.

## Counts

Counts are the number of times each outcome appears.

Example format:

| Outcome | Count |
| --- | ---: |
| `0` | 53 |
| `1` | 47 |

This table does not show the order of individual shots. It summarizes how often each outcome appeared.

## Distributions

A distribution describes how outcomes are spread across the possible results. In a one-qubit measurement, the distribution might show all `0`, all `1`, or some mix of `0` and `1`.

When reading distributions, be careful. A small number of shots can look uneven even when the underlying experiment has balanced probabilities.

## Why One Run Is Not Enough

One measurement outcome is only one sample. It can be useful, but it does not reveal the full pattern.

Quantum experiments are often interpreted statistically. That means learners should compare expected probabilities with observed counts across repeated shots, then describe what the result suggests without overstating it.

## Mini Task

Explain why 10 shots and 1,000 shots can produce different-looking result patterns.

Use plain language. Focus on sample size, counts, and probability.

## Vocabulary

- **Probability**: A way to describe how likely an outcome is.
- **Shot**: One repeated execution of an experiment.
- **Count**: The number of times an outcome appears.
- **Distribution**: The pattern of counts across possible outcomes.
