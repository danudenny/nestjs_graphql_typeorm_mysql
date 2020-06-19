import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Users {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    username: string;

    @Column({
        unique: true
    })
    @Field()
    email: string;

    @CreateDateColumn({name: 'created_at'})
    @Field()
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    @Field()
    updatedAt: Date;
}