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
 *    Recipe:
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
 *       likeCount:
 *         type: number
 *
 *
 */

/**
 * @swagger
 *  components:
 *   schemas:
 *    RecipeReturn:
 *     type: object
 *     properties:
 *      data:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Recipe'
 *      message:
 *       type: string
 */

@Entity()
export class Drink extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  image: string;

  @Column('text', { array: true, nullable: true, default: '{}' })
  tags: string[];

  @Column({ type: 'simple-array', nullable: true })
  Ingredient: string[];

  @Column({ type: 'simple-array', nullable: true })
  measure: string[];

  @Column({ type: 'varchar', nullable: true })
  Instructions: string;

  @Column({ type: 'int', default: 0 }) // 좋아요 순으로 찾을때 사용
  likeCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Like, (like) => like.drink)
  likes: Like[];
}
