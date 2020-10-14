
export interface Attraction {
	business_status: string,
	geometry: any
	icon: string
	name: string
	opening_hours: any //{open_now : true},
	photos: [
		{
			height: number,
			html_attributions: any, // [\u003ca href=\https://maps.google.com/maps/contrib/117085246649492316097\\u003eמלון סנטרל-Central Hotel\u003c/a\u003e],
			photo_reference: string,
			width: number
		}
	],
	place_id: string,			// ChIJKzWR2X1MHRURLuhHLITQ73s,
	plus_code: any
	rating: number,
	reference: string		// ChIJKzWR2X1MHRURLuhHLITQ73s,
	scope: any,
	types: string[] // [lodging, point_of_interest, establishment],
	user_ratings_total: number,
	vicinity: string //address --> Ben Yehuda Street 38, Tel Aviv - Yafo

	imgURL?:string //is generated during the getAttractions() service 
}