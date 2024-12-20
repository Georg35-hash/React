import Greeting from "./Greeting"
import ShoppingList from "./ShoppingList"
import OrderStatus from "./OrderStatus"
function App() {
  const orders = [
    { orderId: 1, status: 'в пути' },
    { orderId: 2, status: 'обработан' },
    { orderId: 3, status: 'в пути' },
    { orderId: 4, status: 'обработан' },
    { orderId: 5, status: 'в пути' },
    { orderId: 6, status: 'доставлен' },
  ]
  return (
    <>
      <Greeting name="Георгій" />
      <ShoppingList />
      <ul>
        {orders.map(({ orderId, status }) => (
          <OrderStatus
            key={orderId}
            orderId={orderId}
            status={status}
          />
        ))}
      </ul>

    </>
  )
}

export default App
