export type SignInRequest = {
    user_login: string,
    user_password_hash: string,
};

export type SignUpRequest = SignInRequest & {
    user_name: string,
};
