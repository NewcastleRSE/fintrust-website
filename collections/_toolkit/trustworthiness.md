---
layout: page
title: "Trust and Trustworthiness"
date: 2020-06-12
link: https://github.com/NewcastleRSE/fintrust-faas
icon: fa-concierge-bell
category: Project
excerpt_separator: <!--more-->
banner: /assets/images/wordclouds/faas.webp
nav: true
---

How we talk about trust is subject to assumptions on what 'trust' means: how we understand it at a social level is not the same as trustworthiness at the systems level.

Things to consider:
 * How does your company understand human versus technical trust?
 * How do your customers or service users perceive trust?
 * How does your organisation measure trust and build trustworthy technologies?

We found that:
 * People's trust perceptions and beliefs surrounds that an organisation or system is honest, reliable, or safe.
 * Each of us will imagine what it means to trust in slightly different ways. 
 * For engineers and designers, "trustworthiness" is concerned with the "FEAS" properties of machine learning systems: Fairness, Explainability, Auditability and Safety.

<!--more-->

## Understanding the difference between "Trust" and "Trustworthiness"

How we talk about trust is subject to assumptions on what "trust" means: how we understand it at a social level is not the same as trustworthiness at the systems level. To us, "trust" means peoples' perception or belief that an organisation or system is honest, reliable, or safe, but it is nebulous in that each of us will imagine what it means to trust in slightly different ways. When we say "trustworthiness", we are talking about the property of machine learning systems. This is what our research examines, and there is a need to pin down exactly what "trustworthiness" means in the context of AI and ML systems. In other words, when talking about trust, we have to ensure that the language in use is understood as the same thing by all parties.


## FEAS: Fairness, Explainability, Auditability and Safety

Machine learning pipelines can be broken down into stages: the data-centric stages (data collection, data preparation, feature extraction), and the model-centric stages (training, testing, and inference). To enable trust in the whole system, trustworthiness must be considered in every part of the pipeline. In our research, we call this the "Chain of Trust". Further, we have defined a set of properties which must be observed to achieve trustworthiness. Machine learning system developers must understand these four properties: Fairness, Explainability, Auditability and Safety (FEAS).

<img src="/assets/images/chainoftrust.webp" style="max-width: 512px; margin: 0 auto; display:block;"/>

### Fairness

Fairness is the property of non-discrimination. Machine learning algorithms are not deliberately built with planned bias: they are not inherently fair or unfair. However, if unfairness and discrimination from the real world is reflected in training datasets, this can result in the replication of bias against minority groups and an unfair outcome for people. Designing discrimination-free models is therefore a challenging problem.

### Explainability

Explainability means the ability to understand why a result is the way it is. It is often used interchangeably with "transparency". For simple types of predictive model, explainability can be achieved through model-specific explanations. More complex models such as neural networks operate in a non-linear fashion, which means they are effectively a "black box". Various frameworks have been proposed to explain how a deep learning model reaches a result, but it is widely agreed that there is still no single consensus on how to do it.

### Auditiability

Auditability is about making a machine learning process transparent to stakeholders. For third-parties to verify the operation of a model, we must establish an audit trail. In the event that bias appears in model outcomes, this can help to infer whether the bias was present in the training data, and whether data preparation activities affected this. This becomes key in the implementation of regulations such as the European GDPR legislation.

### Safety

Safety means the robust operation of systems in real-life situations, without loss of data, privacy leaks, or compromising cyber-security. This covers a wide variety of concerns: from driverless cars which do not crash, to safeguarding of data against privacy attacks. For example, a machine learning system might leak confidential information if such is used within its training dataset, and an attacker might exploit design weaknesses or implementation bugs within a system to expose this.



## AI Policy frameworks

Governments and organisations are already implementing AI policy frameworks which cover these trustworthy technology properties: some cover all topics comprehensively, others focus on a subset. These often use different terminology: ethics, justice, fairness, accountability, transparency, which do not map to the technical literature directly. In our paper [2], we collected 32 such frameworks and outline how they cover the FEAS properties laid out above. While interest from regulators is strong, the question remains to what extent the implementation of FEAS technologies, which aim to enhance trustworthiness, actually also enhance service users' trust.

## Future work: Fairness as a Service

Our project has identified a challenge in creating a service to verify the fairness of machine learning algorithms. Our project has prototyped some solutions, and we expect publications on this in the future. This is an exciting space which we are still actively uncovering.


<!--

Ethics frameworks of how people do things.

People just don't care! You click 'ok'. We only pay when service interruptions happen– e.g. data leaks, service interruptions

Further research required– could argue the large survey will

If you are a banker or a service designer in a financial institution– what should you know about trust from this paper?

Atom keeps saying– it's all about ease of use. But we have no evidence that this is the case. We've never bridged the gap from teh understandings about trust and trustworthy systems– the disconnect– and what does a company NEED in termsof trustworthy systems that leads to trust from the customer and trustworthy sales.

Large scale survey– to address this. Connect to why people should trust this.

Ethical understandings of the rules of the game– link between commercial success and perceptions trust and systems trustworthiness.

Demonstrating and computing the fairness of algorithms is one of the most urgent 
and active research problems in AI. 

We performed research to identify the ways in which machine learning technologies might enhance or negatively impact trust.


Trustworthy systems– drill down into ML and how to improve trustworthiness in ML systems. Special-purpose version of trustworthy systems. Tried to explain conceptual ML-specific stuff.


How do we define trust? It is a concept which in everyday conversation is routinely and intuitively used and yet re- mains challenging to define and study. AI and machine learning approaches are _trustworthy_ if they have properties that one is _justified_ to place trust in them (Avizienis et al., 2004).

maintaining trust in AI may be critical for ensuring acceptance and successful adoption of AI-driven services and products 

Fairness, Explainability, Auditability and Safety (FEAS)

You may not be able to have individual and group fairness at the same time.



We conducted a literature review (Toreini et al., 2020) into existing 

Policy frameworks: EU AI law. These use different terminology: ethics, justice, fairness, accountability, transparency. Does not map to ML technical literature directly.

Trustworthy machine learning. Systems whose properties justify that people place trust in them

What do we mean by fairness? Accountability, transparency, privacy, human rights.

four categories of system properties are instrumental in achieving the policy objectives, namely fairness, explainability, auditability and safety & security (FEAS)

All stages of the machine learning life cycle, from data collection through run-time model inference

-->

# Publications

  1) Toreini, E., Aitken, M., Coopamootoo, K., Elliott, K., Zelaya,
C.G. and Van Moorsel, A., 2020, January. [The relationship
between trust in AI and trustworthy machine learning
technologies](/publication/2020/01/27/The-relationship-between-trust-in-AI-and-trustworthy.html). In Proceedings of the 2020 conference on
fairness, accountability, and transparency (pp. 272-283)  
  2) Toreini, E., Aitken, M., Coopamootoo, K.P., Elliott, K.,
Zelaya, V.G., Missier, P., Ng, M. and van Moorsel, A., 2020.
[Technologies for Trustworthy Machine Learning: A
Survey in a Socio-Technical Context](/publication/2021/06/07/Technologies-for-Trustworthy-Machine-Learning.html). arXiv preprint arXiv:2007.08911.


