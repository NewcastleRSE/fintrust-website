---
layout: page
title: Chatbot Framework
date: 2020-06-12
link: https://github.com/NewcastleRSE/fintrust-chatbot-framework
icon: fa-keyboard
category: Project
excerpt_separator: <!--more-->
banner: /assets/images/wordclouds/chatbots.webp
nav: true
---

How can we engineer trust into conversational user interfaces? Within this project, we explored peoples' attitudes to managing their financial assets using a chatbot. Given the results of this work, we prototyped a conversational interface using the [Google DialogFlow](https://cloud.google.com/dialogflow/) conversational analysis AI.

<!--more-->

A chatbot is an artificial intelligence application that can imitate a real conversation with a human in their natural language. Chatbots enable communication via text or audio on websites, messaging applications, mobile apps, or telephone, leading to potential for the inclusion of groups of people who would otherwise be excluded by existing online financial technologies.

While many of us are familiar with chatbot technologies, research into these virtual agents indicates that how they are presented strongly influences what kinds of information end users are trust them with. Our project publication by Ng et al. (2020) shows how important the psychology of trust is for designing human versus machine-like chatbot interfaces.

One approach to increasing trust of computer systems lies in designing human-like chat interfaces which display social and emotional intelligence: for example, by simulating politeness; demonstrating active listening skills; generating empathetic responses; and personalising to the individual by using their preferred name. However, it wasn't clear whether it would be possible to apply this to the finance and FinTech context.

We compared two hypothetical chatbots: "Emma" described with human-like emotive features, and "XRO23", a system described in more mechanical and impersonal terms. Both chatbots were described as secure and reliable in vignettes outlining their use as an automated financial adviser. Our study found that people were more willing to disclose sensitive financial information such as an account number and sort code to the impersonal "XRO23" system, without humanistic traits. This suggests that socio-emotional features in chatbots designed exclusively for automated financial support have little advantage in FinTech.


## Chatbot Prototype

Following this research, the decision was made to create a prototype chatbot using Google DialogFlow. In order to recognise user commands in typed natural language phrases, a language model is required to 'understand' what the end user wants. This is called natural language processing, or 'NLP'. We can leverage existing commercial technologies for this purpose, and our [technology review document](/assets/pdf/Chatbot%20Technology%20Review.pdf) covers existing technologies and emerging trends in conversational interfaces, as well as social and ethical considerations for their use.

We selected Google [Dialogflow](https://cloud.google.com/dialogflow/) for our chatbot prototype, following an analysis of privacy considerations under UK data protection law. A [Laravel](https://laravel.com/)-based server application was developed to connect to this API.

By prototyping this application we hope to gain understandings of the implementation issues surrounding  financial chatbot systems in-the-wild. The application is currently in a developmental state and therefore remains closed-source. For access, please [contact us](/contact.html).


## Publications

* Aitken, M., Ng, M., Horsfall, D., Coopamootoo, K.P., van Moorsel, A, and Elliott, K., 2021, August. [In pursuit of socially-minded data-intensive innovation in banking: A focus group study of public expectations of digital innovation in banking](/publication/2021/07/02/In-pursuit-of-socially-minded-data-intensive-innovation-in-banking.html). In *Technology in Society vol. 66* (pp. 101666). Elsevier. 
* Ng, M., Coopamootoo, K.P., Toreini, E., Aitken, M., Elliot, K. and van Moorsel, A., 2020, September. [Simulating the effects of social presence on trust, privacy concerns & usage intentions in automated bots for finance](/publication/2020/06/27/Simulating-the-Effects-of-Social-Presence-on-Trust.html). In *2020 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)* (pp. 190-199). IEEE.