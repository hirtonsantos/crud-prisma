import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPostDto: Prisma.PostCreateInput) {
    return this.prisma.post.create({
      data: createPostDto,
      include: {
        author: true,
      },
    });
  }

  findAll() {
    return this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
  }
}
