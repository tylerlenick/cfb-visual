export default async function handler(req, res) {
  const { conference } = req.query;
  const data = await fetch(`https://api.collegefootballdata.com/teams?conference=${conference}`,{
      headers: {
        Accept: "application/json",
        Authorization: `${process.env.SECRET_KEY}`
      }
  });

  const json = await data.json();
  
  res.send(json);
}