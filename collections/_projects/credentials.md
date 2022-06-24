---
layout: page
title: Verifiable Credentials
date: 2020-04-01
link: https://github.com/NewcastleRSE/fintrust-vc-verifier
icon: fa-id-card
category: Project
excerpt_separator: <!--more-->
banner: /assets/images/wordclouds/vcs.webp
nav: true
---

Can blockchain technologies support vulnerable and financially excluded customers? 

Things to consider:
 * Are you serving customers who meet the FCA's vulnerability drivers?
 * Do you know which of your customers are in a vulnerable situation?
 * Do you check and update the vulnerability status of your customers?

We found that:
 * Over 53% of the UK population sit under the four FCA drivers of vulnerability.
 * Most technology is not built to adapt to vulnerabilities.
 * Other forms of digital identity can meet KYC (Know Your Customer) FCA regulations to drive financial inclusion, and can help meet ESG (Environmental Social Governance) and SDG (Sustainable Development Goals) UN directives.
 
<!--more-->

In this project, we implemented a prototype decentralised identity system using the Microsoft ION platform, to allow customers to retain ownership of their personal details and to share them securely. 

This project was part of the Trustworthy Digital Infrastructure for Identity Systems project, led by the Turing Institute and funded through a grant from the Bill & Melinda Gates Foundation ([INV-001309](https://www.gatesfoundation.org/about/committed-grants/2019/12/INV001309)).

For more information, please read our [final project report](/assets/pdf/D6_Finclusion_final_report.pdf) on our verifiable credentials Finclusion project.


## Using Verifiable Credentials to identify vulnerable customers in finance

Digital identity systems are used worldwide, from "digital passports" to online log-in systems, but this project sought to investigate how "trustworthiness" might be designed-in to such systems. Trust is characterised here through several characteristics, including security, privacy, ethics, resilience, robustness and reliability, yet there remain significant challenges in designing systems which embody these concepts.

Vulnerable customers within the financial sector are particularly important to consider within this framework, and such a trustworthy identity system should not further exclude people from participation in the financial industry. In the United Kingdom, the FCA (Financial Conduct Authority) has issued guidance in this respect, which [strongly encourages fair treatment of vulnerable customers](https://www.fca.org.uk/publications/finalised-guidance/guidance-firms-fair-treatment-vulnerable-customers), but financial institutions often lack a coherent strategy to the identification of client vulnerability. 

The sociotechnical challenges in this space include the (often manual) disclosure and handling of vulnerabilities, integration with support processes, and risks for collusion and fraud. A detailed look at this problem space can be read in our publication, [Spiliotopulous et al, 2021](/publication/2021/06/10/Identifying-and-Supporting-Financially-Vulnerable-Consumers.html). Decentralised Identifiers (DIDs) and Verifiable Credentials (VCs) hold potential for improving the identification and disclosure process for such vulnerable customers, and allowing the provision of tailored financial services and products.

We produced a [design specification](/assets/pdf/%5BSDS%5D%20Trustworthy%20Digital%20Infrastructure%20for%20Identity%20Systems.pdf) for such a system in 2021, which provides an implementation of the [World Wide Web Consortium (W3C) standards for DIDs](https://w3c.github.io/did-core/) v1.06 and Verifiable Credentials Data Model 1.07 in a Microsoft Azure environment. This drove our discussion and evaluation of potential solutions for the use case of vulnerability in finance.

Finally, we produced and deployed a software prototype based on this specification, for evaluation in interviews, workshops and focus groups.


## Code
The prototype project is split into two code repositories: the issuer and the verifier. These can be accessed at:

  - [https://github.com/NewcastleRSE/fintrust-vc-issuer](https://github.com/NewcastleRSE/fintrust-vc-issuer)
  - [https://github.com/NewcastleRSE/fintrust-vc-verifier](https://github.com/NewcastleRSE/fintrust-vc-verifier)

For issues, please use the GitHub issues feature, or feel free to get in touch using our [contact form](/contact.html), or by emailing
<span class="email">
    <span class="email-address">fintrust</span>
    <span class="email-separator">@</span>
    <span class="email-domain">newcastle.ac.uk</span>
</span>

## Publications
* Spiliotopoulos, T., Horsfall, D., Ng, M., Coopamootoo, K., van Moorsel, A. and Elliott, K., 2021. [Identifying and Supporting Financially Vulnerable Consumers in a Privacy-Preserving Manner: A Use Case Using Decentralised Identifiers and Verifiable Credentials](/publication/2021/06/10/Identifying-and-Supporting-Financially-Vulnerable-Consumers.html). *arXiv preprint* arXiv:2106.06053.
