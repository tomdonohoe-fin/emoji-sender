import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    messgae: string;

    @Column({
        nullable: true,
    })
    from: string;
}
