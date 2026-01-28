import './App.css'

function App() {

  const sample = {
    image: '/vite.svg',
    name: 'Sample Product',
    price: '$29.99'
  }

  function handleAdd() {
    alert('Added to cart')
  }

  return (
    <>
  <div>
  <Bai1 product={sample} onAdd={handleAdd} />

  </div>
    </>
  )
}

export default App
