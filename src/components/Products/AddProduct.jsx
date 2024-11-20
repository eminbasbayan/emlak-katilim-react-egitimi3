import './AddProduct.css';
import Button from '../UI/Button';

function AddProduct() {
  return (
    <form className="add-product-form">
      <label>
        Title:
        <input type="text" name="title" required />
      </label>
      <label>
        Description:
        <input type="text" name="title" required />
      </label>
      <label>
        Price:
        <input type="number" name="price" required />
      </label>
      <label>
        Image URL:
        <input type="text" name="imageUrl" required />
      </label>
      <Button color={'success'}>Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddProduct;
