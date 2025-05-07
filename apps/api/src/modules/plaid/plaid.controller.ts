import { Body, Controller, Post } from '@nestjs/common';
import { PlaidService } from './plaid.service';

class CreateLinkTokenDto {
  userId: string;
}

class ExchangeTokenDto {
  public_token: string;
}

@Controller('plaid')
export class PlaidController {
  constructor(private readonly plaidService: PlaidService) {}

  @Post('link-token')
  async createLinkToken(@Body() dto: CreateLinkTokenDto) {
    return this.plaidService.createLinkToken(dto.userId);
  }

  @Post('exchange')
  async exchangePublicToken(@Body() dto: ExchangeTokenDto) {
    return this.plaidService.exchangePublicToken(dto.public_token);
  }
} 