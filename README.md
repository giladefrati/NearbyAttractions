# NearbyAttractions
NearbyAttractions is a small Next.js app that renders a list of attractions nearby a specific area.
The app is developed with the technologies: Next.js, TypeScript (JavaScript ES6), React.js, HTML, CSS, Etc.


# Folders & Files Structure
### /pages/index:  (HOMEPAGE)
The App's client-side Homepage includes a list of attractions with their rating, # of reviews, keywords tags, and a main picture of the place.
The data is rendered after fetching updated details from Google Maps

### /pages/API:
Using Next.js convenient API Routes, which makes files: 'london.tsx' and 'lisbon.tsx' as endpoints, 
that sends back a response of an HTML string of the website, including the nearby attractions of the city.

## /Services
includes a 'webapi.ts' file which handles the data fetching from Google Maps API, and adding other necessary fields to the attractions. 
This service is imported to the Home and to the API pages.

## /interfaces
Using TypeScript advantages, 'interfaces' contains an index file which includes an 'Attraction' type interface, which is imported and used in other few places in the app.

## /Components
Using React.js advantages, 'Components' contains an 'AttractionCard' component, which is used in the Home page
