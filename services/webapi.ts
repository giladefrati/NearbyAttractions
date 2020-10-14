import { Attraction } from "../interfaces"

const googleKey = 'AIzaSyBPWFwHrsgzYw36bl-ecghaFEqNuRuGDUg'
const googleURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`

//Create params sending the object to the generator URLSearchParams 
export const getAttractions = async (params) => {
  //adding key property to the request in order not to expose to users
  params['key'] = googleKey
  const parsedParams: string = new URLSearchParams(params).toString()

  // Call an external API endpoint to get attractions and extract the 'results' section.
  const res = await fetch(googleURL + parsedParams)
  let data = await res.json()
  const attractions: Attraction[] = data['results']


  //adding for attraction an new imgURL field
  // with his picture reference or 'not found' photo in case there's no one
  attractions.forEach((attr) => {
    const notFoundPhoto: string = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
    const googlePhotoURL: string = 

    attr['imgURL'] = !attr.photos || !attr.photos[0] ? notFoundPhoto : 
    `https://maps.googleapis.com/maps/api/place/photo?maxheight=400&key=${googleKey}&photoreference=${attr.photos[0].photo_reference}`
  })
  
  return attractions
}
