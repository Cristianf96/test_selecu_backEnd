import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    serie: number;

    @Column()
    title: string;

    @Column()
    publisher: string;

    @Column()
    author: string;

    @Column()
    gender: string;

    @Column({ type: 'longtext' })
    synopsis: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
