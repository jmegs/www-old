---
title: Designing for Code
date: 2020-05-19
lastmod: 2021-01-06
excerpt: Every member of a product team works together to make working software in the hands of users. But typical design files cause unnecessary friction for the whole team.
---

Each member of a product team is working together to make one thing: working software in the hands of their users. Design mockups are simply a communication tool in service of this shared goal. But the way a typical design file is structured does not set the team up for success. In fact, they result in unnecessary cycles of work for the whole product team.

Why is this? The primary way a new product feature is communicated and understood inside of companies is through high-fidelity design mockups, named and arranged in the sequence a user goes through them. Mocks like this – ones that only show a series of complete screens — put a disproportionate burden on engineering teammates to understand _how_ to build them.

Instead, design files should mirror how the design will be implemented. In other words, the primary content of a design file should a thorough spec for its individual components — covering all their variants and states — following the same naming and organization as the project will in code. With the building blocks implemented like this, full experiences are faster to both communicate _and_ build.

Before getting into the specifics, it's worth emphasizing the importance of open and ongoing dialog between the whole product team. As designers, we can’t assume that a design tool having a featured called “developer handoff” means that developers understand how to use it. Other team members need to learn the things that have been ingrained in designer muscle memory like navigating an infinite canvas, selecting nested layers, and measuring between objects. Taking the time to have this dialog drastically reduces the need to manually annotate measurements and spacing – the dreaded redlines.

## A New(ish) Design Process

As a designer, there are a few shifts that you might make in your process to strengthen team communication and ultimately output. Here is a look at how the design process might go making those shifts.

### Start With the Familiar

The beginning of the design process should stay the same. Speak to users and analyze data. Work together with your team to identify a problem, conceptualize and try on solutions. This part is and should be iterative, messy, and flexible. Once you arrive at a solution your team, your stakeholders, and ideally your real users think works, it’s time to switch gears and invest in documentation to prepare to build.

{% include 'image',  src: "blog/design-code/sketch" , alt: "a wireframe sketch of an app" %}

### Break Everything Apart, Together

With a reasonably clear understanding of how your experience will look, work and flow – get together with engineering teammates and discuss how it breaks down into units of functionality and development work. This is a process that often happens in a developer’s head when handed a mock “over the fence.” Instead, the full team can create a shared understanding of how things will be built and how they’ll be referred to. An ideal outcome would be a list of components with working names, and an understanding of the unknowns and necessary documentation for each.

{% include 'image',  src: "blog/design-code/grooming" , alt: "teammates annotating components on a screen" %}

### Document Like Everybody’s Watching

Note: At Squarespace we use Figma as our primary design tool, so I’ll use their terminology. This concept can easily be translated into any other tool like Sketch or Adobe XD.

Having worked together to identify components to be built ahead of time, now it’s time to document how to build them.

On a dedicated page in your Figma file, create one frame named for each element of the experience that you discussed with your team. The granularity varies from group to group, but a general rule of thumb is that anything that is not a core component of your design system should get a frame here.

On each frame, make thorough specs, covering as many of the variants, states, and behaviors of the component as you can. If the component is composed out of elements from your company design system, make note of which component. Don’t make manual redlines or document measurements for anything that be inspected through Figma directly, like space between elements and sizes.

The avoidance of redlines is an important point that goes beyond specific tools. Making sure everyone is on the same page regarding your company’s underlying design system and its core rules (spacing scale, color names, etc) is an incredibly high-value use of time as a designer vs. documenting measurements. With a shared understanding of the system, teammates will feel empowered to catch and deal with the inevitable inconsistencies in a design. We can start to think of these “bugs” in design mocks the same way we do in code, as correctable errors rather than deliberate decisions that need to be specially implemented.

This is the big mental shift in the process. Think to yourself, if I could only look at this frame, would I have enough information to implement this component? Better yet, grab an engineer teammate and ask them the same question.

{% include 'image',  src: "blog/design-code/component" , alt: "component documentation" %}

### Snap It All Together

On a separate page, document how your experience comes together. The audience for this views page is anyone you need alignment from on how the experience works, looks, and feels – company stakeholders, other teams, as well as your users in testing. You should aim to document your happy path and any other key flows needed to understand how the feature will work, not to document every possible state.

These screens should all be composed out of the components on your components page. If you can’t do this, you’ve probably missed creating a component or state. Go back and add it now, so it doesn’t have to be created on the fly right before launch.

{% include 'image',  src: "blog/design-code/flow" , alt: "prototype flow" %}

### Communicate, Review, Iterate, Appreciate

You should be left with one artifact that serves as both a reference document for how to build the experience and a tool to communicate how the experience will feel once built as a click-through prototype. Review your file with both of these audiences in mind, make note about what could be more clear, and iterate in place.

## Why Should I Try This?

These small changes in process that focus on implementation and communication can make a big difference in the way entire product teams function.

- The team can use shared language to refer to an element of the feature through the whole development cycle.
- Frontend teammates have one stable source of truth to refer to when implementing each component.
- There is a structured environment for identifying and documenting solutions for edge cases and omissions discovered during development.
- With the individual building blocks implemented properly, composed UIs are much faster to build and update for stakeholder review and user testing.

By designing a process that prioritizes mutual understanding, you create new pathways for success in your product team — one where every team member has shared ownership and agency over the full process. They feel empowered to navigate each other’s artifacts and use each other’s tools. They ask better questions, make more informed choices, and ultimately ship better work faster.
