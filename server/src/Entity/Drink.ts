import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Like } from './Like';

/**
 * @swagger
 *  components:
 *   schemas:
 *    Drink:
 *      type: object
 *      properties:
 *       id:
 *         type: number
 *       name:
 *         type: string
 *       image:
 *         type: string
 *       tags:
 *         type: array
 *         items:
 *          type: string
 *       Ingredient:
 *         type: array
 *         items:
 *          type: string
 *       measure:
 *         type: array
 *         items:
 *          type: string
 *       Instructions:
 *         type: array
 *         items:
 *          type: string
 *
 *
 */

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

  @OneToMany((type) => Like, (like) => like.drink)
  likes: Like[];
}
