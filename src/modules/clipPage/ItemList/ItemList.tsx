import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { ClipInterface, SelectedClipsInterface } from "../types";

interface Props {
  items: ClipInterface[];
  className: string;
}

const ItemList = (props: Props) => {
  const [selectedItems, setSelectedItems] = useState<SelectedClipsInterface[]>(
    []
  );

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    <div className={props.className}>
      {props.items.map((item: ClipInterface) => {
        return (
          <Item
            setSelectedItems={setSelectedItems}
            id={item.id}
            isActive={true}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
