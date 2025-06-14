const app = () => {
  const div = {
    type: "div",
    props: {
      style: "color: red",
      "data-folder": "div"
    },
    children: "Div Tag Appeared"
  };

  return div;
};

export default app;
