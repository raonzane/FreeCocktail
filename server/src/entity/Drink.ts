import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Drink extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  image: string;

  @Column({ type: 'simple-array', nullable: true, default: [] })
  tags: string[];

  @Column({ type: 'simple-array', nullable: true })
  Ingredient: string[];

  @Column({ type: 'simple-array', nullable: true })
  measure: string[];

  @Column({ type: 'varchar', nullable: true })
  Instructions: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
