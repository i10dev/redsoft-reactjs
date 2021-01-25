import { Button } from "../index";
import "./Search.scss";

function Search() {
  return (
    <div className="search flex flex-right flex-end flex-1">
      <input
        className="search__input"
        type="text"
        placeholder="Поиск по названию картины"
      />
      <Button textDefault="Найти" width="121" />
    </div>
  );
}
export default Search;
