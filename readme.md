# Reflex website

## Overview

This project is a web application built with Python and Next.js under the hood. 
It serves as a personal website.

## Project Structure

The websites python code can be found in the `pysite/` directory. This directory is the only file that needs to be edited in order to update the website.

The actual frontend that is compiled to Next.js can be found in the `.web` directory. This directory is not meant to be edited directly.


## Running the Project

To run the frontend locally, use the following commands:

```sh
python3 -m venv venv
source venv/bin/activate
pip install -r pysite/requirements.txt
reflex run --env dev --frontend-port 7443 --backend-port 7444
```

The website will be then available at `http://localhost:7443`.