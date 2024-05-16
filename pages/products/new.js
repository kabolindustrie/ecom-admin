import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function createProduct() {
    
}

  return (
    <Layout>
      <form onSubmit={createProduct}>
      <h1>New product</h1>
      <label> Product name</label>
      <input
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        type="text"
        placeholder="product name"
      />
      <label> description</label>
      <textarea
      value={description}
      onChange={(ev) => setDescription(ev.target.value)}
      placeholder="description"></textarea>
      <label> price € </label>
      <input
      value={price}
      onChange={(ev) => setPrice(ev.target.value)}
      type="number"
      placeholder="price" />
      <button type="submit"
       className="btn-primary"> Save</button>

      </form>
    </Layout>
  );
}
