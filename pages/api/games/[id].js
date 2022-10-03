export default async function handler(req, res) {
  const { id } = req.query;

  if(!id && typeOf(id) !== 'number') {
    res.status(400).send("Missing conference parameter");
    return;
  }

  const data = await fetch(`https://api.collegefootballdata.com/games?year=2022&seasonType=regular&id=${id}`,{
      headers: {
        Accept: "application/json",
        Authorization: `${process.env.SECRET_KEY}`
      }
  });

  const json = await data.json();
  
  res.send(json);
}