// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { s } = req.query;
  const response = await fetch(`http://icd10api.com?s=${s}`);

  const IcdCodes = await response.json();

  res.status(200).json(IcdCodes);
}
