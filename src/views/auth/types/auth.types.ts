export type RegistrationInputs = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type RefreshResponse = {
  accessToken: string;
  userId: string;
};
