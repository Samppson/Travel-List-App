export default function Stats({ items }) {
  // Could also be written (!items.length) -- Means if there are no items.
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list! 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((items) => items.packed).length;
  const percentPackedItems = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPackedItems === 100
          ? "You got everything! Ready to go ✈"
          : `You have ${numItems} items on your list, and you already packed
          ${numPackedItems} items. (${percentPackedItems}%). 👜`}
      </em>
    </footer>
  );
}
