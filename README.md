# FinTrust Website

This repository generates what goes on the <https://fintrustresearch.com> website. The website is hosted on [Github Pages](https://pages.github.com/) and is generated using [Jekyll](https://jekyllrb.com/).

## .well-known/did-configuration.json

The `did-configuration.json` file is an independant static file that exists outside the Jekyll framework to link the fintrustresearch.com domain to the FinTrust [Decentralized Identifier (DID)](https://docs.microsoft.com/en-us/azure/active-directory/verifiable-credentials/how-to-dnsbind) on the ION network. It is mapped into the Jekyll static site from within the `_config.yaml` file.

