---
slug: 'sound-synthesis'
date: '2020-11-22'
title: 'Sound Synthesis'
---

Additive synthesis builds sounds by combining several waveforms, usually sine
waves, into a composite sound. Additive synthesis was used as early as on
Teleharmonium in 1900s and Hammond organ in 1930s. Subtractive synthesis is
still utilized on various synths, including virtual analog synth.

Subtractive synthesis uses oscillators to generate waveforms, then shapes them
with filters to remove or boost specific frequencies. FM synthesis was hugely
successful in the earliest digital synthesizers.

Frequency modulation (FM) synthesis creates sounds by modulating one waveform
with the frequency of another; the resulting complex waveform can, in turn, be
used to modulate another, and this another, and so on. FM synthesis can imitate
acoustic sounds such as piano, strings and organs.

Phase distortion synthesis is a method implemented on Casio CZ synthesizers. It
replaces the traditional analog waveform with a choice of several digital
waveforms which are more complex than the standard square, sine, and sawtooth
waves. This waveform is routed to a digital filter and digital amplifier, each
modulated by an eight-stage envelope. The sound can then be further modified
with ring modulation or noise modulation. Physical modelling synthesis is often
implemented as software synthesizers.

Physical modelling synthesis is the synthesis of sound by using a set of
equations and algorithms to simulate each sonic characteristic of an instrument,
starting with the harmonics that make up the tone itself, then adding the sound
of the resonator, the instrument body, etc., until the sound realistically
approximates the desired instrument. When an initial set of parameters is run
through the physical simulation, the simulated sound is generated. Although
physical modeling was not a new concept in acoustics and synthesis, it was not
until the development of the Karplus-Strong algorithm and the increase in DSP
power in the late 1980s that commercial implementations became feasible. The
quality and speed of physical modeling on computers improves with higher
processing power.[citation needed] Analysis/resynthesis is typically used on the
vocoder.

Linear arithmetic synthesis is a form of synthesis developed by Roland that
utilizes PCM samples for the attack of a waveform, and subtractive synthesis for
the rest of the envelope. This type of synthesis bridges the gap between the
older subtractive synthesis and the newer sample-based synthesis at a time where
PCM samples would take up a substantial amount of the memory allotted. The first
synthesizer to debut with this form of synthesis was the Roland D-50 in 1987.

Sample-based synthesis involves digitally recording a short snippet of sound
from a real instrument or other source and then playing it back at different
speeds to produce different pitches. A sample can be played as a one shot, used
often for percussion or short duration sounds, or it can be looped, which allows
the tone to sustain or repeat as long as the note is held. Samplers usually
include a filter, envelope generators, and other controls for further
manipulation of the sound. Virtual samplers that store the samples on a hard
drive make it possible for the sounds of an entire orchestra, including multiple
articulations of each instrument, to be accessed from a sample library. See also
Wavetable synthesis, Vector synthesis.[citation needed]

Analysis/resynthesis is a form of synthesis that uses a series of bandpass
filters or Fourier transforms to analyze the harmonic content of a sound. The
results are then used to resynthesize the sound using a band of oscillators. The
vocoder, linear predictive coding, and some forms of speech synthesis are based
on analysis/resynthesis.[citation needed]
