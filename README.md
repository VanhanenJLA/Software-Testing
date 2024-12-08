[![Coverage Status](https://coveralls.io/repos/github/VanhanenJLA/Software-Testing/badge.svg?branch=main)](https://coveralls.io/github/VanhanenJLA/Software-Testing?branch=main)


# Software Testing Assignment

## Getting started

### Clone this repository with submodules 

```
git clone --recurse-submodules git@github.com:VanhanenJLA/Software-Testing.git
```
This clones repository to folder `Software-Testing` and library to be tested should now be in folder `Software-Testing\library`

#### How to update Submodules in an already cloned repo

```
git submodule sync
git submodule update --init --recursive
```

### To run the tests

```
cd Software-Testing
npm install
npm run test
```

### Environment Variables

This project uses environment variables to configure sensitive or environment-specific settings. Follow these steps to set up your environment:

1. Copy the `.env.example` file to a new file named `.env`:
   ```bash
   cp .env.example .env

