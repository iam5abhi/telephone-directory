// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getXataClient } from "../../../src/xata";
const xata = getXataClient();

const handler = async (req, res) => {

  const { title, phoneNumber, ask_price, type, link, requirement } = req.body;
  await xata.db.property.create({
    title, 
    phoneNumber, 
    ask_price, 
    type, 
    link,
    requirement,
  });
  res.end();
};

export default handler;
