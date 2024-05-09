export async function fetchPosts() {
  const response = await fetch('https://houses-data.vercel.app/houses');
  return response.json();
}

export async function fetchPost(id) {
  const response = await fetch(`https://houses-data.vercel.app/houses/${id}`);
  return response.json();
}

export async function createPost(newPost) {
  const response = await fetch(`https://houses-data.vercel.app/houses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
}

export async function updatePost(updatedPost) {
  const response = await fetch(
    `https://houses-data.vercel.app/houses/${updatedPost.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    }
  );
  return response.json();
}

export async function deletePost(id) {
  const response = await fetch(`https://houses-data.vercel.app/houses/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}
