export const test = () => {
  return 42;
};

export const test2 = () => {
  console.log(
    'This function also gets build, even though it is not imported by api'
  );
};
