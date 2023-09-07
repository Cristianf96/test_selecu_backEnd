import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) { }

  async create(createBookDto: CreateBookDto) {
    try {
      const book = this.bookRepository.create(createBookDto)
      return await this.bookRepository.save(book);
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    try {
      return await this.bookRepository.find();
    } catch (error) {
      console.log(error)
    }
  }

  async findOne(id: number) {
    try {
      return await this.bookRepository.findOneBy({ id });
    } catch (error) {
      console.log(error)
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      return await this.bookRepository.update(id, updateBookDto);
    } catch (error) {
      console.log(error)
    }
  }

  async remove(id: number) {
    try {
      return await this.bookRepository.delete({ id });
    } catch (error) {
      console.log(error)
    }
  }
}
