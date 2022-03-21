import { useState } from "react";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
const demo = () => {
  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);

  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type="text"
        className="my-5"
        placeholder="ejfbejf"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {doctors
          ?.filter((items) => {
            if (search === "") {
              return items;
            } else if (
              items.firstName.toLowerCase().includes(search.toLowerCase())
            ) {
              return items;
            } else if (
              items.lastName.toLowerCase().includes(search.toLowerCase())
            ) {
              return items;
            }
          })
          .map((items, index) => (
            <li>
              {items?.firstName} {items?.lastName}
            </li>
          ))}
      </ul>
    </>
  );
};

export default demo;
