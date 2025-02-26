function Stats({ items }) {
    if (!items.length) {
      return <p className="footer"><em>Start adding some items to your packing list 🚀</em></p>
    }
    const numOfItems = items.length;
    const numOfPacked = items.filter((item) => item.packed).length;
    const percentage = ((numOfPacked / numOfItems) * 100).toFixed(2);
    return (
  
      <>
        <footer className="stats">
          <em>
            {items.length !== numOfPacked ? `💼 You have ${numOfItems} items on your list, and you aldready packed ${numOfPacked} (${percentage}%)` : "You got everything! Ready to go ✈️"}
          </em>
        </footer>
      </>
    )
  }
  export default Stats