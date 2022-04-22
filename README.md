# PROJECT-TWO: WINE & DINE 

## PROJECT OVERVIEW: 

Project Description:
Whether you are heading out to enjoy dinner at a restaurant or enjoying a meal at home with friends, your choice of wine to complement your meal lis always an important consideration. So here's an app that takes the guesswork out of matching up what wine goes with what meals, so you can enjoy a perfect pairing and a pleasant evening.

The app is deployed on Surge.  
You can find it here:  https://tb-project-2.surge.sh/


## Wireframes:


D P2 WF - MVP .pdf](https://github.com/Boscobrand/PROJECT-TWO/files/8537095/UPDATED.P2.WF.-.MVP.pdf)

## User Stories:
I want to be able to quickly choose a recipe that pairs well with a style of wine I am in the mood for.
I want a short list of appealing recipes
I'd like to scan a quick wine list that recommends compatible wine for me to consider
I want a simple to use interface

## MVP Goals:
MVP priority focus will be on recipe API, secondary on wine API
Establish 1 - 2 page delivery, with one touch selectors
Stretch goals: Enhanced Styling

## Component Development:

Component development followed fairly closely to the original layout with just a few exceptions.

[UPDATE[UPDATED P2 CT - MVP.pdf](https://github.com/Boscobrand/PROJECT-TWO/files/8537096/UPDATED.P2.CT.-.MVP.pdf)

1) It became clear it was more advantageous to run the two calls (Red and White) on the App.js main page to allow access to the resulting state to be readily accessible to any component that needed to call it, instead of at the end of the component chain lifting back up.
2) Final components included:

- Home: Landing Page
- Header: Render the Header on all pages, including the two buttons that initiate the API Calls
- Footer: includes links to Home and About Pages
- About: General Information about Wine and Dine (Mission Statement)
- Summary Page: Intended to reshape a selected recipe in a larger display format
- RecipeList: Code here serves to access the data obtained by hooks (useState) and transfer them to props for manipulation
- App: Handles the Inital API call and establishes the Routes to other components through React-Router
- Index: Contains the logic for rendering App component, including React and React Router.
- CSS for styling

## Project Management:

Initial Timeline was developed for the project remained fairly acccurate throughout the course of the 5 day period.

[TIMELINE P2 WINE+DINE.pdf](https://github.com/Boscobrand/PROJECT-TWO/files/8537098/TIMELINE.P2.WINE%2BDINE.pdf)

Preparing several components took longer than expected due to welcome revisions in wireframe development, issues with Wine API procurement, and the structure of the data being received on the recipe API.


| **_Component_**         | **_Priority_** | **_Estimated Time_** | **_Actual Time_** |
|-------------------------|:--------------:|:--------------------:|:-----------------:|
| Proposal and Wireframes |        H       |        3 hours       |     4.5 hours     |
| Working with API (R&D)  |        H       |        2 hours       |      4 hours      |
| App (Router)            |        H       |        3 hours       |      4 hours      |
| Header                  |        L       |        1 hour        |       1 hour      |
| Footer                  |        L       |        1 hour        |       1 hour      |
| Summary                 |        L       |        2 hours       |      2 hours      |
| About                   |        L       |        1 hour        |       1 hour      |
| RecipeList (Props/Map)  |        H       |        4 hours       |      6 hours      |
| Home                    |        H       |        1 hour        |       1 hour      |
| Index (Router)          |        H       |        2 hours       |      2 hours      |
|-------------------------|:--------------:|:--------------------:|:-----------------:|
| TOTAL                   |                |       20 hours       |    26.5 hours     |

## Additional Libraries

1) AXIOS was utilized for the API call
2) React-Router was an important part of the app

## Code Snippet

`function ResultList(props) {
     return(
         <div className="recipeBox">
            {props.recipes.map(recipe => {
                return(
                    <div className = "recipeCard">
                        <div className="name">{recipe.recipe.label}</div>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} className="pic"/>
                        <div><a href={recipe.recipe.url} target="_blank" className="B-url" rel="noopener noreferrer">URL</a></div>
                        <div><button className="i-button">Ingredients</button><div>
                    </div>  `  
                   
Mapping data to props can be challenging at times.  This project was no exception.  There was a layer of hierarchy that wasn't initially apparent to me but was necessary to include to allow the function.  

## Issues and Resolutions

Issue 1: router.js:5 Uncaught Error: useRoutes() may be used only in the context of a <Router> component.
  
  Solution:
    - Wrappoing the App in <Router> in the index file instead of <React.StrictMode>
    - For example: root.render(<Router><App /></Router>);`
  
Issue 2: uncaught TypeError: Cannot read properties of undefined (reading 'filter')
  
  Solution: 
    - only call the filter method on arrays and initialize the variable to an empty array if it's undefined.  
  

  
