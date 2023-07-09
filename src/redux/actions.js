export const submitForm = (name, email, fruit) => {
  return {
    type: "SUBMIT_FORM",
    payload: {
      name,
      email,
      fruit,
    },
  };
};
