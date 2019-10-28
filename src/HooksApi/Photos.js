import React from "react";
import { useFetch } from "./HooksApi";
function Photos() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );
  return (
    <>
      <h1>Photos</h1>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.map(({ id, title, url }) => (
            <li key={`photo-${id}`}>
              <img alt={title} src={url} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
          }
          export default Photos;