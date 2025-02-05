import React from 'react';
import './App.css';
import ProductForm from './components/ProductForm'; // Import correctly
import ProductList from './components/ProductList'; // Import correctly

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Management</h1>
        <ProductForm />
        <ProductList />
      </header>
    </div>
  );
}

export default App;
