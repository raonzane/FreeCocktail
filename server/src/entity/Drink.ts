import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

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
 *          type:string
 *         example: ["str1","str2"]
 *       Ingredient:
 *         type: array
 *         items:
 *          type:string
 *         example: ["str1","str2"]
 *       measure:
 *         type: array
 *         items:
 *          type:string
 *         example: ["str1","str2"]
 *       Instructions:
 *         type: array
 *         items:
 *          type:string
 *         example: ["str1","str2"]
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
}
