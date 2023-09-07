import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    gender: string;

    @Column({ type: 'longtext' })
    synopsis: string;

    @Column()
    cover: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
