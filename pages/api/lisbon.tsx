import { NextApiRequest, NextApiResponse } from 'next'
import ReactDOMServer from 'react-dom/server';

import Home from '..'
import React from 'react'
import { Attraction } from '../../interfaces';
import { getAttractions } from '../../services/webapi';

const params = {
  location: '38.7198852,-9.1402976',
  radius: '3000',
  keyword: 'bars',
}

const lisbon = async (req: NextApiRequest, res: NextApiResponse) => {
  const attractions: Attraction[] = await getAttractions(params)
  const HTMLString: string = ReactDOMServer.renderToString(<Home attractions={attractions} hotel={'lisbon'} />);
  // res.status(200).send(JSON.stringify (HTMLString))
  res.status(200).send(HTMLString)
}

export default lisbon