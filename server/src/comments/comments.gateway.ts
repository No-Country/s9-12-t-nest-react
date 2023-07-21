import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody } from '@nestjs/websockets';
import { emit } from 'process';

@WebSocketGateway(8001, {cors: '*'})
export class CommentsGateway {
  @WebSocketServer()
  server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log(message)
    this.server.emit('message', message)
  }
}
