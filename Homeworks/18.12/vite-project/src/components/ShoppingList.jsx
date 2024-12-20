function ShoppingList() {
    const shopping = ['Souce', 'Bread', 'Milk']
   
    if (shopping.length === 0) {
        return <p>Список пуст</p>
    }

    const myList = shopping.map((item) => <li key={item}>{item}</li>)

    return (

        <ul>
            {
                myList
            }

        </ul>

    )
}
export default ShoppingList