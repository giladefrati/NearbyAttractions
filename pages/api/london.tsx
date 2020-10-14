import { NextApiRequest, NextApiResponse } from 'next'
import ReactDOMServer from 'react-dom/server';

import Home from '..'
import React from 'react'
import { Attraction } from '../../interfaces';
import { getAttractions } from '../../services/webapi';

const params = {
  location: '51.513031, -0.127856',
  radius: '1500',
  keyword: 'attraction',
}

const london = async (req: NextApiRequest, res: NextApiResponse) => {
  const attractions: Attraction[] = await getAttractions(params)
  const HTMLString: string = ReactDOMServer.renderToString(<Home attractions={attractions} hotel={'london'} />);
  // res.status(200).send(JSON.stringify (HTMLString))
  res.status(200).send(HTMLString)
}

export default london