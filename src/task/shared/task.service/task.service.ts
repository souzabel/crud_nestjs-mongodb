import { Injectable } from '@nestjs/common';
import { Task } from './task';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class TaskService {

    constructor(@Injectable('Task') private readonly taskModel: Model<task>) { }

    async getAll() {
       return await this.taskModel.find().exec();
    }

    async getById(id: string) {
        return await this.taskModel.findById().exec();
    }

    async create(task: Task) {
        const createdTask = new this.taskModel(task);
        return await createdTask.save();
    }

    async update(id: string, task: Task) {
        await this.taskModel.updateOne({ _id: id }, task).exec()
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.taskModel.deleteOne({ _id: id }, task).exec()
    }

}
