# FinTrust Website

This repository generates what goes on the <https://fintrustresearch.com> website. The website is hosted on [Github Pages](https://pages.github.com/) and is generated using [Jekyll](https://jekyllrb.com/).

# Development & Deployment

Commits to this repo will be automatically published within a few minutes to the <https://fintrustresearch.com> website. For development, you can clone this repo locally, and then [run the Jekyll development website](https://jekyllrb.com/docs/) on your machine.

## .well-known/did-configuration.json

The `did-configuration.json` file is an independent static file that exists outside the Jekyll framework to link the fintrustresearch.com domain to the FinTrust [Decentralized Identifier (DID)](https://docs.microsoft.com/en-us/azure/active-directory/verifiable-credentials/how-to-dnsbind) on the ION network. It is mapped into the Jekyll static site from within the `_config.yaml` file.

