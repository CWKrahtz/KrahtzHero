
# About The Project
## Description
## Build With

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Features And Functionality
## Home Page/Dashboard
    The home page or the dashboard I created to inform the user more on what the project is about and what datasets will be used.
    
## Comapare Page
    There are a total of 730 heroes but due to the loading time I only used a total of 20 heroes per dropdown. It gives a veriety of heroes to compare and The amount can be increased or decrease on the developer side.

    The user can change the selected hero to update the given data that is being displayed on the chart(s). The user will also be able to change the chart type by clicking on the button of the given chart name. 

    The user can either show on at a time or more then one.

## Timeline Page
    The timeline page shows you in what comic book(s) the selected hero has featured in and in what year it was.

    The slected heo can be updated by using the dropdown but for this page we where required to use another API to fill the timeline page.

# Concept Process
## Ideation
    These links I used for inspiration to create all of this.<br>

* https://pin.it/6ofFcjl<br>
[DV200] (https://pin.it/6ofFcjl)<br>

* https://pin.it/6ofFcjl<br>
[DV200_Branded_Component_-_Pinterest] (https://pin.it/6ofFcjl)<br>

### The APIs I used:
* https://www.superheroapi.com/<br>
[Superhero_API_-_Compare_Page] (https://www.superheroapi.com/)<br>

* https://developer.marvel.com/<br>
[Marvel_Developer] (https://developer.marvel.com/)<br>

## Wireframes
![Dashboard_Wireframe] (./images/Wireframes/Dashboard.png)<br>
![Compare_Wireframe]> (./images/Wireframes/Comparison.png)<br>
![Timeline_Wireframe]> (./images/Wireframes/Timeline.png)<br>

## Custom UI
![Dashboard_Final_Look]> (./images/UI/Dashboard.png)<br>
![Compare_Final_Look]> (./images/UI/Compare.png)<br>
![Timeline_Final_Look]> (./images/UI/Timeline.png)<br>


# Developement Process
## Implementation Process
    The creation of the application I started off with geting all the documents ready to starting with it.

    When react was set up I added bootstartp to style the cards and make thigs stay in place where I would like them to. Due to my API not working from the start I used dummy data for place holders.

    After the APIs twhere fixed I used Chart.js and react with axios to update the user imput data on the chart display area and to have relevant information to be displayed.

### Highlights

* Dropdown being poulated with the use of an API and react. It makes The navigation and creation of code much more easier and less.
* Having the Charts displaying the API data after a struggle was motivating to keep on working.
* Using react to create and group element makes it easier to understand the code and to navigate your way between code sections.
* The data being updated on the chart and the cards after new objec (hero) was selected.

### Chalanges
* The understanding and implementation of react in the satrt was hard but with the help of other people it got easier.
* The fact that the API was not working for most of the time was stressing me out.
* The fix was to ad '.php' in the Superhero api and I needed to figure out how to create the 'hash' in the MArvel api.
* The chart Options does not want to be update

# Future Implementation
* Add chart limits for the Timeline page to see a change on the time.
* DIsplay more heroes in the dropdown to increase to veriety in heros that the user can select from
* Display more general information on the dashboard page. 
* Display more information on the selected charcter on the ompare page and the timeline page. Currently it is only data being displayed on a chart.
* INcrease the size of the Charts on boath pages (compare and timeline).

# Final Outcome
## Mockups
![Mockup1] (./images/Mockups/Mockup1.png)<br>
![Mockup2] (./images/Mockups/Mockup2.png)<br>
![Mockup3] (./images/Mockups/Mockup3.png)<br>

## Video Demonstration
![Demonstration] (./video/KrahtzChristian_221198_DV200_Presentation_Video.mp4)<br>

# Conclution
The use of react, chart.js, bootstrap and normal styling and html code was easier to use together and faster. I would recomend using react to create a website.
