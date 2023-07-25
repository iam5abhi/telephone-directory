// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getXataClient } from "../../src/xata";
const xata = getXataClient();

const handler = async (req, res) => {

  const { id, specialization, category, Name, alternatePhoneNumber, phoneNumber, email } = req.body;
  const results = await xata.db.contacts.createOrUpdate(id,{
    specialization,
    category,
    Name,
    alternatePhoneNumber,
    phoneNumber,
    email,
  });
  res.send(results);
};

export default handler;
