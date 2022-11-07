import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  products = [
    {
      id: uuid(),
      name: 'Crossiant',
      price: 100,
      discountPc: 10,
      cost: 150,
      description: '',
      metric: 'Pcs',
      amount: 450,
      unit: 'grams',
      stock: 10,
    },
    {
      id: uuid(),
      name: 'Water',
      price: 300,
      cost: 500,
      description: '',
      metric: 'Volume',
      amount: 500,
      unit: 'ml',
      stock: 5,
    },
    {
      id: uuid(),
      name: 'Milk',
      price: 250,
      cost: 300,
      description: '',
      metric: 'Volume',
      amount: 1000,
      unit: 'ml',
      stock: 15,
    },
  ];

  create(createProductDto: CreateProductDto) {
    const product = { id: uuid(), ...createProductDto };
    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product = this.products.filter((p) => p.id === id);

    if (product.length) return product[0];
    else return null;
  }

  update(id: string, updateProductDto: any) {
    const index = this.products.findIndex((p) => p.id === id);

    if (index > -1) {
      const updatedProduct = { ...this.products[index], ...updateProductDto };

      this.products.splice(index, 1, updatedProduct);

      return updatedProduct;
    } else {
      return false;
    }
  }

  remove(id: string) {
    const index = this.products.findIndex((p) => p.id === id);

    if (index > -1) {
      this.products.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}
