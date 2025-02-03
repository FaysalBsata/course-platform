'use client';
import { actionToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVerticalIcon } from 'lucide-react';
import { ReactNode, useId, useOptimistic, useTransition } from 'react';
export function SortableList<T extends { id: string }>({
  items,
  onOrderCahnge,
  children,
}: {
  items: T[];
  onOrderCahnge: (
    newOrder: string[]
  ) => Promise<{ error: boolean; message: string }>;
  children: (items: T[]) => ReactNode;
}) {
  const dndContextId = useId();
  const [optimisticItems, setOptimisticItems] = useOptimistic(items);
  const [, startTransition] = useTransition();
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    const activeId = active.id.toString();
    const overId = over?.id.toString();
    if (overId == null || activeId === overId) return;
    function getNewArray(array: T[], activeId: string, overId: string) {
      const oldIndex = array.findIndex((item) => item.id === activeId);
      const newIndex = array.findIndex((item) => item.id === overId);
      return arrayMove(array, oldIndex, newIndex);
    }
    startTransition(async () => {
      setOptimisticItems((items) => getNewArray(items, activeId, overId));
      const actionData = await onOrderCahnge(
        getNewArray(optimisticItems, activeId, overId).map((item) => item.id)
      );
      actionToast({ actionData });
    });
  }
  return (
    <DndContext onDragEnd={handleDragEnd} id={dndContextId}>
      <SortableContext
        items={optimisticItems}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col">{children(optimisticItems)}</div>
      </SortableContext>
    </DndContext>
  );
}
export function SortableItem({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const {
    setNodeRef,
    transform,
    transition,
    activeIndex,
    index,
    attributes,
    listeners,
  } = useSortable({
    id,
  });
  const isActive = activeIndex === index;
  return (
    <div
      ref={setNodeRef}
      className={cn(
        'flex gap-1 items-center bg-background rounded-lg p-2',
        isActive && 'z-10 border shadow-md'
      )}
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      <GripVerticalIcon
        className="text-muted-foreground size-6 p-1"
        {...attributes}
        {...listeners}
      />
      <div className={cn('flex-grow', className)}>{children}</div>
    </div>
  );
}
