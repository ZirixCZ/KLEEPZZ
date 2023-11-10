import Item from "../Item/Item";
import { ClipInterface } from "../types";

interface Props {
  items: ClipInterface[];
  className: string;
}

const ItemList = (props: Props) => {
  return (
    <div className={props.className}>
      {props.items.map((item: ClipInterface) => {
        return <Item id={item.id} isActive={true} />;
      })}
    </div>
  );
};

export default ItemList;
