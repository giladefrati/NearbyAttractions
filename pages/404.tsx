import { NextApiRequest, NextApiResponse } from 'next'

//Custom 404 Message
const Custom404 = (req: NextApiRequest, res: NextApiResponse) => {
  return <h1 style={{ textAlign: 'center' }}>
    Oops, It seems you entered a wrong ENDPOINT..
     <br />
     Please try '/lisbon' or '/london' routes!
  </h1>
}

export default Custom404