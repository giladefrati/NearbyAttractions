import { NextApiRequest, NextApiResponse } from 'next'
import ReactDOMServer from 'react-dom/server';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const welcomeMsg =
    <h1 style={{ textAlign: 'center' }}>
      Welcome to our API! Please try '/lisbon' or '/london' routes!
    </h1>
  const HTMLString: string = ReactDOMServer.renderToString(welcomeMsg);
  res.status(200).send(HTMLString)
}

export default handler