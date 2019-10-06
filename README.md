# DryFi

 DryFi is an application that utilizes IOT technology, to help you be more environmentally conscience and save energy and money by drying your clothes less.

## Description
The United States is a large consumer of energy. We are the 2nd top consumer of energy by country in the world. But of the top 5 consumers, the average person in America utilizes more than 4,500 kWh per year *more* than the closest per capita rate. 

The average dryer uses about 200 kWh of energy per year when run only once a week. To help North Americans make more sustainable decisions, DryFi aims help the average person cut their dryer usage time by helping plan out when to hang their clothes out to dry.. 

## Functionality
This application's functionality includes:
* Utilization of the Adafruit Feather Huzzah to detect the temperature in your home 
* Determines how long it would take to dry clothes in your home 
* Calls the OpenWeather API to determine how long it would take to dry your clothes outside. 

### LandingPage 
![Alt text](readme.screenshots/DryFiLandingPage.png?raw=true "DryFi-LandingPage")

### Dashboard 
![Alt text](readme.screenshots/DryFiDash.png?raw=true "DryFi-Dashboard")

## Technology implemented 

* [React](https://reactjs.org/) - The front End framework used

* [Feather Huzzah Microcontroller](https://www.adafruit.com/product/3213) - The web framework used
* [Breadboard](https://www.adafruit.com/product/64) - The web framework used
* [Power Relay Feather Wing](https://www.adafruit.com/product/3191) - The web framework used
* [Parts Pal](https://www.adafruit.com/product/2975) - The web framework used
* [Humidity Sensor](https://www.adafruit.com/product/385) - The web framework used
* [1x USB Cable](https://www.adafruit.com/product/189) - The web framework used

## Dry Time Model
The model used for dry time is adapted from [Dodd, Peter, et al. “A1_6 Do you want to hang out?.” Physics Special Topics 10.1 (2011).] (https://journals.le.ac.uk/ojs1/index.php/pst/article/viewFile/2010/1912) Solar irradiation potential was calculated from an api call to the SolCast API at the latitude and longitude of Portland, OR (45.5N,122.6W). The current model is limited to an assumption of water evaporation on a single flat plane. Future iterations should take into consideration the type and thickness of a material.

## Authors

A project by Jennifer Batara, Kevin Boyle, Meagan Olsen, Phil Gear, & Jennifer Hsiao

* [Jennifer Batara](https://github.com/jbatara) 
* [Kevin Boyle](https://github.com/lemurriot) 
* [Meagan Olsen](https://github.com/olsenme) 
* [Phil Gear](https://github.com/philgear) 
* [Jennifer Hsiao](https://github.com/hsiaochimai)


See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
