# Pale Blue Dot: Data Visualization

## Description
Code for NASA's Pale Blue Dot data visualization challenge- focusing on climate change in the Arctic slope of Alaska. All data for this project was obtained from source: https://disc.gsfc.nasa.gov/datasets/M2TMNXOCN_5.12.4/summary 

## Visualization Summary
[Our data visualization](https://caseymunk.github.io/blue-dot/) presents a striking depiction of declining sea ice extent and rising ocean temperatures in Alaska's Arctic slope, underscoring impacts of climate change on Inuit communities. Data from 1981 to 2023 were plotted with respect to each decade, using the 25th and 75th percentile as bounds for the ranges of sea ice extent and ocean temperatures. We isolated the data from 2023 and plotted the averages to highlight the most recent observations within the natural environment of the Arctic slope. The data narrative shows variations in ocean temperature and sea ice properties together, demonstrating their interconnectivity. This region is experiencing extreme changes in the Summer and Winter seasons, ultimately causing disturbances in the environment. We utilized MERRA-2 Ocean Surface Diagnostics dataset from NASA's Goddard Earth Sciences Data and Information Services Center (GES DISC) and Interactive Online Visualization ANd aNalysis Infrastructure (GIOVANNI) for the analysis. This topic corresponds to the Sustainable Development Goal 13, Climate Action, aiming to drive policy changes for preservation of Arctic ecosystems and indigenous communities. The tools used for the visualization include Python for data analysis and processing, Jupyter Notebook as an interactive coding environment, and Plotly for creating visual representations of the data. An interactive data visualization was created with HTML, JavaScript, and CSS. The webpage was structured with HTML alongside styling components through CSS, and implementing dynamic interactivity with JavaScript. Users can trigger actions, revealing or hiding elements, providing a versatile and engaging visual experience.

### Features
- **Interactive Elements**: This repository is hosted on Github pages via: https://caseymunk.github.io/blue-dot/. Users can interact with the visual by clicking "1" and "2" on the keyboard to view relevant data legends on the home page. Users can then click "3" on the keyboard to view a relevant slide about the community our data visualization targets. Please see the Acknowledgments section.
- **Data Sources**: All data for this project was obtained from source: https://disc.gsfc.nasa.gov/datasets/M2TMNXOCN_5.12.4/summary. We utilized MERRA-2 Ocean Surface Diagnostics dataset from NASA's Goddard Earth Sciences Data and Information Services Center (GES DISC) and Interactive Online Visualization ANd aNalysis Infrastructure (GIOVANNI) for the analysis.
- **Visualization Types**: All final visuals were created using Plotly and can be found in /reports/figures.

## Getting Started

### Dependencies
This project requires Plotly and Xarray Python packages as main dependencies. For best results, follow the installation instructions below. 


### Installing
Create a new virtual environment 

```bash
# For Unix or MacOS
python3 -m venv venv

# For Windows
python -m venv venv
```
Activate the virtual environment
```bash
# For Unix or MacOS
source venv/bin/activate

# For Windows
venv\Scripts\activate
```
Install the requirements
```bash
pip install -r requirements.txt
```
Then, clone the repository.
```bash
git clone https://github.com/caseymunk/blue-dot
cd blue-dot
```
If you have not already, download the data from the source: https://disc.gsfc.nasa.gov/datasets/M2TMNXOCN_5.12.4/summary. Follow the instructions from the source for a successful download.

Now you are ready to explore the various plotting functions used to create the final visualization!

## Usage
After cloning the respository, you can explore the data visualization process from initial idea to full implementation. The objective of this repository is to show the thought process behind and production of the final visualization. It is recommended that you use the code in this repository as a starting point for your own visualization ideas!

## Authors
Casey Munk is responsible for writing all Python code and generating data figures found in /reports/figures.

Lucy Somervill is responsible for website deployment code found in /docs. 

Despite this repository being hosted by Casey Munk's Github, Lucy Somervill made significant contributes and should also be referenced for this work.

## Acknowledgments
We extend our deepest gratitude to the Alaskan Native and Inuit communities for their generous collaboration and invaluable insights. Their willingness to share their lived experiences has been pivotal in shaping our data visualization project. Their stories and perspectives have not only enriched our understanding but have also enabled us to depict a more accurate and meaningful narrative. We are immensely thankful for their openness and trust in helping us bring attention to crucial issues through data-driven storytelling. Our hope is that this project serves as a catalyst for meaningful change and supports the well-being of the Alaskan Native and Inuit communities. Their voices and experiences remind us all of the broader responsibilities we share as stewards of our planet and as members of a global community. We are honored to have had the opportunity to work with these communities, and we are committed to ensuring that their stories are told with respect and integrity.

## License
This project is licensed under the MIT license- see the LICENSE.md file for details.