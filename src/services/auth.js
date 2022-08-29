export function signin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "çjfljsdfsdfjidfisfisdioofmk",
        user: {
          name: "Diego",
          email: "diegorockeatseat.com.br",
        },
      });
    }, 2000);
  });
}
