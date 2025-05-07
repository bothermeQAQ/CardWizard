import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaidModule } from './modules/plaid/plaid.module';

@Module({
  imports: [PlaidModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
