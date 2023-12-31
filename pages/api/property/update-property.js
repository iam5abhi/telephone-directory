// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getXataClient } from "../../../src/xata";
const xata = getXataClient();

const handler = async (req, res) => {

  const { id, title, phoneNumber, ask_price, type, link ,requirement } = req.body;
  const results = await xata.db.property.createOrUpdate(id,{
    title, 
    phoneNumber, 
    ask_price, 
    type, 
    link,
    requirement,
  });
  res.send(results);
};

export default handler;
