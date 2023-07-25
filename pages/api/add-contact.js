// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getXataClient } from "../../src/xata";
const xata = getXataClient();

const handler = async (req, res) => {

  const { specialization, category, Name, alternatePhoneNumber, phoneNumber, email } = req.body;
  await xata.db.contacts.create({
    specialization,
    category,
    Name,
    alternatePhoneNumber,
    phoneNumber,
    email,
  });
  res.end();
};

export default handler;
