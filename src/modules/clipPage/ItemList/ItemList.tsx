import { MutableRefObject, useEffect, useState } from "react";
import Item from "../Item/Item";
import { ClipInterface, SelectedClipsInterface } from "../types";

interface Props {
  itemsRef?: MutableRefObject<SelectedClipsInterface[]>;
  items: ClipInterface[];
  className: string;
}

const ItemList = (props: Props) => {
  const [selectedItems, setSelectedItems] = useState<SelectedClipsInterface[]>(
    []
  );

  useEffect(() => {
    if (!props.itemsRef) {
    console.log("returned:w|");
      return;
    }

    props.itemsRef.current = selectedItems;
  }, [selectedItems]);

  console.log(props.items);
  return (
    <div className={props.className}>
      {props.items.map((item: ClipInterface) => {
        return (
          <Item
            setSelectedItems={setSelectedItems}
            id={item.id}
            isActive={true}
            url={item.url}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
