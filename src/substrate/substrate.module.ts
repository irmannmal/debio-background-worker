import { Module } from '@nestjs/common';
import { LabCommandHandlers } from './labs';
import { ServiceCommandHandlers } from './services';
import { CommonModule } from 'src/common/common.module';
import { BlockCommandHandlers, BlockQueryHandlers } from './blocks';
import { SubstrateController, SubstrateService } from './substrate.handler';
import { OrderCommandHandlers } from './orders';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports:[
    CommonModule,
  ],
  controllers: [SubstrateController],
  providers: [
    SubstrateService,
    ...LabCommandHandlers,
    ...ServiceCommandHandlers,
    ...OrderCommandHandlers,
    ...BlockCommandHandlers,
    ...BlockQueryHandlers
  ],
})
export class SubstrateModule {}
