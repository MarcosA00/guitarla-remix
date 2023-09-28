export async function getPosts() {
  const answer = await fetch(`${process.env.API_URL}/posts?populate=img`);
  const result = await answer.json();

  return result;
}

export async function getPost(url) {
  const answer = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=img`);
  const result = await answer.json();

  return result;
}