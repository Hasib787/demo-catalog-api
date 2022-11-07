import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    try {
      const product = this.productsService.create(createProductDto);

      return {
        success: true,
        errors: null,
        data: product,
      };
    } catch (error) {
      console.log({ error });
      return {
        success: false,
        errors: [error?.status],
        data: null,
      };
    }
  }

  @Get()
  findAll() {
    try {
      const products = this.productsService.findAll();

      if (products.length) {
        return {
          success: true,
          errors: null,
          data: products,
        };
      } else {
        return {
          success: false,
          errors: [404],
          data: null,
        };
      }
    } catch (error) {
      console.log({ error });
      return {
        success: false,
        errors: [error?.status],
        data: null,
      };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      const product = this.productsService.findOne(id);

      if (product) {
        return {
          success: true,
          errors: null,
          data: product,
        };
      } else {
        return {
          success: false,
          errors: [404],
          data: null,
        };
      }
    } catch (error) {
      console.log({ error });
      return {
        success: false,
        errors: [error?.status],
        data: null,
      };
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      const updatedProduct = this.productsService.update(id, updateProductDto);

      if (updatedProduct) {
        return {
          success: true,
          errors: null,
          data: updatedProduct,
        };
      } else {
        return {
          success: false,
          errors: [404],
          data: null,
        };
      }
    } catch (error) {
      console.log({ error });
      return {
        success: false,
        errors: [error?.status],
        data: null,
      };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      const deleted = this.productsService.remove(id);

      if (deleted) {
        return {
          success: true,
          errors: null,
          data: null,
        };
      } else {
        return {
          success: false,
          errors: [404],
          data: null,
        };
      }
    } catch (error) {
      console.log({ error });
      return {
        success: false,
        errors: [error?.status],
        data: null,
      };
    }
  }
}
