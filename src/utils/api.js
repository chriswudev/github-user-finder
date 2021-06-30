const baseUrl = 'https://api.github.com';

const searchUsers = async (key) => {
  const res = await fetch(`${baseUrl}/search/users?q=${key}`, {
    method: 'GET',
  });
  if (res.ok) {
    return res.json();
  }
  return false;
};

export { searchUsers };
