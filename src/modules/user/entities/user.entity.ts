import { Entity, Column, OneToMany, BeforeInsert } from 'typeorm';
import BaseEntity from 'src/utils/base.entity';
import Task from 'src/modules/task/entities/task.entity';

export enum AuthProvider {
  LOCAL = 'local',
  GOOGLE = 'google',
}

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: true })
  fullName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  password: string;

  @OneToMany(() => Task, (tasks) => tasks.user)
  tasks: Task[];

  @Column({
    type: 'enum',
    enum: AuthProvider,
    default: AuthProvider.LOCAL,
    nullable: false,
  })
  provider: AuthProvider;
}
