export async function getGuitars() {
  const answer = await fetch(`${process.env.API_URL}/guitars?populate=img`);
  const result = await answer.json();

  return result;
}

export async function getGuitar(url) {
  const answer = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=img`);
  const result = await answer.json();

  return result;
}