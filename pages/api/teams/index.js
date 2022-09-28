export default async function handler(req, res) {  
  const data = await fetch("https://api.collegefootballdata.com/teams/fbs",{
      headers: {
        Accept: "application/json",
        Authorization: `${process.env.SECRET_KEY}`
      }
  });

  const json = await data.json();
  
  res.send(json);
}