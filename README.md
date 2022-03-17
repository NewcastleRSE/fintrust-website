# FinTrust Website


## About
This repository generates the <https://fintrustresearch.com> website. The website is hosted on [Github Pages](https://pages.github.com/) and is generated using [Jekyll](https://jekyllrb.com/).

### Project Team
Prof. Aad van Moorsel, Newcastle University  ([aad.vanmoorsel@newcastle.ac.uk](mailto:aad.vanmoorsel@newcastle.ac.uk))

### RSE Contact
Dr Samantha Finnigan   
RSE Team  
Newcastle University  
([samantha.finnigan@newcastle.ac.uk](mailto:samantha.finnigan@newcastle.ac.uk))


## Built With

[Jekyll](https://jekyllrb.com/)


## Getting Started

Commits to this repo will be automatically published within a few minutes to the <https://fintrustresearch.com> website. This means that you can open the markdown (`*.md`) files in the GitHub editor to make changes to the site text. When those changes are committed, they will be published to the live website within a couple of minutes. All articles are stored under the `collections` folder in the root of the repository. Just open the file you want to change in GitHub, and click the pencil icon ("Edit this file") at the top right-hand corner of the preview.

For development and testing, you can clone this repo locally, and then [run the Jekyll development website](https://jekyllrb.com/docs/) on your machine.

### Prerequisites

* Ruby
* Bundler
* Jekyll

### Running locally

Run the site locally using:

```
 bundle exec jekyll serve
```


## .well-known/did-configuration.json

The `did-configuration.json` file is an independent static file that exists outside the Jekyll framework to link the fintrustresearch.com domain to the FinTrust [Decentralized Identifier (DID)](https://docs.microsoft.com/en-us/azure/active-directory/verifiable-credentials/how-to-dnsbind) on the ION network. It is mapped into the Jekyll static site from within the `_config.yaml` file.


## Contributing

### Main Branch
The repository contains only one branch, `main`. Pushing to this branch directly is fine as this is not a multi-developer project, and it is not anticipated to change much. Alternately, fork the repo and make a pull request to merge in your changes.


## License
© 2021 Newcastle University. All rights reserved.


## Acknowledgements
This work was funded by a grant from the UK Research Councils, EPSRC grant ref. [EP/R033595/1, "FinTrust: Trust Engineering for the Financial Industry"](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/R033595/1)

