import useAxios from "hooks/useAxios";

const RonQuote = function() {
  const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
  const { body, error, pending } = useAxios(url);

  return (
    <li>
      {body && body[0]}
      {error && error}
      {pending && "Please wait ..."}
    </li>
  );
};

export default RonQuote;