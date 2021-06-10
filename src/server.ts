import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { VideoResolver } from './video/VideoResolver';
import { createConnection } from 'typeorm';

async function bootstrap() {
    await createConnection();

    const schema = await buildSchema({
        resolvers: [VideoResolver]
    });

    const server = new ApolloServer({
        schema
    });

    server.listen({ port: 4100 }, console.log('Server is Running!'));
}

bootstrap();