import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateOrderDto) {
    return this.prisma.order.create({ data });
  }

  async findAll() {
    return this.prisma.order.findMany({
      include: { user: true, product: true },
    });
  }
}