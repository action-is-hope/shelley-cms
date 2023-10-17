import React, { forwardRef } from "react";
import type { ComponentBase } from "@actionishope/shelley/typings/shared-types";
import { useId } from "react-aria";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  ResponderProvided,
  Responders,
} from "react-beautiful-dnd";
import { Button } from "@actionishope/shelley/Button";
import { H2, P } from "@actionishope/shelley/Text";
import CloseSmall from "../icons/CloseSmall";
import { st, classes } from "./reorderItems.st.css";
import DragIndicator from "../icons/DragIndicator";
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

export interface ReorderItemsProps extends Partial<Responders>, ComponentBase {
  /** Optional id, one is auto-generated for the Draggable */
  id?: string;
  /** Add a class style hook */
  className?: string;
  /** Title for the main  */
  title?: string;
  /** Items to render */
  items: ReorderItem[];
  /** Remove item callback */
  onRemoveSelect: (index?: number) => void;
  /** Highlights entry item - check existing functionality... */
  hightlightItemIndex?: (index?: number) => number | void;
  /** Move callback, responds with fromIndex, toIndex and result */
  moveItem?: ({ fromIndex, toIndex, result }: moveItemParams) => void;
  /** Remove item string */
  removeItemString?: string;
}

function ReorderItems(
  props: ReorderItemsProps,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    id: idProp,
    items,
    className: classNameProp,
    title,
    onRemoveSelect,
    removeItemString = "Remove list item",
    moveItem,
    hightlightItemIndex,
    onDragEnd: onDragEndProp,
    "data-id": dataId,
    ...rest
  } = props;

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
      ref={ref}
      data-id={dataId}
    >
      <React.Fragment>
        {title && (
          <header className={classes.header}>
            <H2
              vol={2}
              className={classes.title}
              uppercase
              data-id={dataId ? `${dataId}--title` : undefined}
            >
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
                            aria-label={removeItemString}
                            onPress={() => onRemoveSelect(index)}
                            icon={<CloseSmall />}
                            data-id={
                              dataId ? `${dataId}--deleteButton` : undefined
                            }
                          />
                          {item?.label && (
                            <P
                              vol={false}
                              uppercase
                              className={classes.contentLabel}
                              data-id={
                                dataId ? `${dataId}--itemLabel` : undefined
                              }
                            >
                              {item.label}
                            </P>
                          )}
                          {item?.description && (
                            <P
                              vol={2}
                              className={classes.contentDescription}
                              data-id={
                                dataId
                                  ? `${dataId}--itemDescription`
                                  : undefined
                              }
                            >
                              {item.description}
                            </P>
                          )}
                          {item?.content}
                        </div>
                        <DragIndicator className={classes.dragIcon} />
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
}

/**
 * ReorderItems can be used to reorder lists of things like content blocks.
 */
const _ReorderItems = forwardRef(ReorderItems);
export { _ReorderItems as ReorderItems };

export default ReorderItems;
