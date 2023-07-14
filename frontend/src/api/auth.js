export const googleOAuthURL = async () => {
  const response = await fetch("http://localhost:8000/api/v1/auth/google/url");
  return await response.json();
};
export const jwtLoginAuth = async (user) => {
  const response = await fetch("http://localhost:8000/api/v1/auth/jwt/login", {
    method: "POST",
    body: user,
  });
  return await response.json();
};
