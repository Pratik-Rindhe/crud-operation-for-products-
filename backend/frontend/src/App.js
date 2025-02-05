import React from 'react';
import './App.css';
import ProductForm from './components/ProductForm'; // Add this line to import ProductForm
import ProductList from './components/ProductList'; // Add this line to import ProductList

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
