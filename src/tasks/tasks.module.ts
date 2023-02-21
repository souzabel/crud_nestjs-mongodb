import { Module } from '@nestjs/common';
import { TaskService } from 'src/task/shared/task.service/task.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])
    ],
    controllers: [TasksController],
    providers: [TaskService],
})
export class TasksModule {}
