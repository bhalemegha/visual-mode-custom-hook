import useAxios from "hooks/useAxios";

const KanyeQuote = function() {
  const { body, error, pending } = useAxios("https://api.kanye.rest");

  return (
    <li>
      {body && body.quote}
      {error && error}
      {pending && "Please wait ..."}
    </li>
  );
};

export default KanyeQuote;