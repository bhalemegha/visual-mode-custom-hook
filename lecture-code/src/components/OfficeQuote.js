import useAxios from "hooks/useAxios";

const OfficeQuote = function() {
  const url = "https://www.officeapi.dev/api/quotes/random";
  const { body, error, pending } = useAxios(url);

  return (
    <li>
      {body && 
        <div>
          {body.data.content}
          <span>{body.data.character.firstname}</span>
        </div>
      }
      {error && error}
      {pending && "Please wait ..."}
    </li>
  );
};

export default OfficeQuote;