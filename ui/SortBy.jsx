import { useSearchParams } from "react-router-dom";
import Select from "./Select";
function SortBy({ options, onChange }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <Select
        value={sortBy}
        options={options}
        onChange={handleChange}
        type="white"
      />
    </div>
  );
}

export default SortBy;
