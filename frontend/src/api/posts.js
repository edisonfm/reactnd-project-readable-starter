import { BASE_URL, HEADERS } from './constants';

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts`, { headers: HEADERS }).then(res =>
    res.json()
  );
};

export const getPostById = postId => {
  return fetch(`${BASE_URL}/posts/${postId}`, { headers: HEADERS }).then(res =>
    res.json()
  );
};

export const getPostsByCategory = category => {
  return fetch(`${BASE_URL}/${category}/posts`, { headers: HEADERS }).then(
    res => res.json()
  );
};

export const createPost = post => {
  const timestamp = Date.now();

  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      ...post,
      id: timestamp.toString(),
      timestamp,
    }),
  }).then(res => res.json());
};

export const editPost = post => {
  const timestamp = Date.now();

  return fetch(`${BASE_URL}/posts/${post.id}`, {
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify({
      ...post,
      timestamp,
    }),
  }).then(res => res.json());
};

export const deletePost = postId => {
  return fetch(`${BASE_URL}/posts/${postId}`, {
    method: 'DELETE',
    headers: HEADERS,
  }).then(res => res.json());
};

export const votePost = (postId, vote) => {
  return fetch(`${BASE_URL}/posts/${postId}`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ option: vote }),
  }).then(res => res.json());
};
