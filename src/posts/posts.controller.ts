import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: Prisma.PostCreateInput) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }
}
