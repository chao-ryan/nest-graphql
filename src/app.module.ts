import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: join(process.cwd(), 'schema/schema.graphql')
    }),
    RecipesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
