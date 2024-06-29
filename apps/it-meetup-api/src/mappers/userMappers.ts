export const userToDto = (user) => {
  return {
    name: user.name,
    user: user.email,
    phone: user.phone,
  };
};
