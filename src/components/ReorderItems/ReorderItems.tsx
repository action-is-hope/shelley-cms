import React from "react";
import { useId } from "react-aria";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  ResponderProvided,
  Responders,
} from "react-beautiful-dnd";
import { st, classes } from "./reorderItems.st.css";
import { Button, H2, P } from "@actionishope/shelley";
import CloseSmall from "../icons/CloseSmall";

export interface moveItemParams {
  fromIndex: number;
  toIndex: number;
  result: DropResult;
}

export type ReorderItem = {
  id: string;
  label?: string;
  description?: string;
  content?: React.ReactNode;
};

export interface ReorderItemsProps extends Partial<Responders> {
  "data-id"?: string;
  /** Optional id, one is auto-generated for the Draggable */
  id?: string;
  /** Add a class style hook */
  className?: string;
  /** Title for the main  */
  title?: string;
  /** Items to render */
  items: ReorderItem[];
  /** Remove item callback */
  removeItem: (index?: number) => void;
  /** Highlights entry item - check existing functionality... */
  hightlightItemIndex?: (index?: number) => number | void;
  /** Move callback, responds with fromIndex, toIndex and result */
  moveItem?: ({ fromIndex, toIndex, result }: moveItemParams) => void;
}

const ReorderItems = ({
  id: idProp,
  items,
  className: classNameProp,
  title,
  removeItem,
  moveItem,
  hightlightItemIndex,
  onDragEnd: onDragEndProp,
  "data-id": dataId,
  ...rest
}: ReorderItemsProps) => {
  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) {
      return;
    }

    if (moveItem)
      moveItem({
        fromIndex: result.source.index,
        toIndex: result.destination.index,
        result,
      });

    if (hightlightItemIndex) hightlightItemIndex(-1);
    onDragEndProp && onDragEndProp(result, provided);
  };

  const id = useId(idProp);

  return (
    <section
      id={id}
      className={st(classes.root, classNameProp)}
      data-id={dataId}
    >
      <React.Fragment>
        {title && (
          <header className={classes.header}>
            <H2 vol={2} className={classes.title} uppercase>
              {title}
            </H2>
            {/* @todo add help in for keyboard users. */}
          </header>
        )}
        <DragDropContext {...rest} onDragEnd={onDragEnd}>
          <Droppable droppableId={`${id}-droppable`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={st(classes.dragContainer, {
                  isDragging: snapshot.isDraggingOver,
                })}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot: { isDragging: boolean }) => (
                      <div
                        className={st(classes.item, {
                          isDragging: snapshot.isDragging,
                          highlight:
                            hightlightItemIndex &&
                            hightlightItemIndex() === index,
                        })}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                      >
                        <div className={classes.content}>
                          <Button
                            variant="fab"
                            tone={10}
                            className={classes.deleteButton}
                            aria-label="Remove list item"
                            onPress={() => removeItem(index)}
                            icon={<CloseSmall />}
                          />
                          {item?.label && (
                            <P
                              vol={false}
                              uppercase
                              className={classes.contentLabel}
                            >
                              {item.label}
                            </P>
                          )}
                          {item?.description && (
                            <P vol={2} className={classes.contentDescription}>
                              {item.description}
                            </P>
                          )}
                          {item?.content}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </React.Fragment>
    </section>
  );
};

export default ReorderItems;
