import Item from "../Item/Item";
import { ClipInterface } from "../types";

interface Props {
  items: ClipInterface[];
}

const ItemList = (props: Props) => {
  return (
    <>
      {props.items.map((item: ClipInterface) => {
        <Item id={item.id} />;
      })}
      ;
    </>
  );
};

export default ItemList;
