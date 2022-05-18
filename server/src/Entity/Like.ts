import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './User';
import { Drink } from './Drink';
/**
 * @swagger
 *  components:
 *   schemas:
 *    Like:
 *     type: object
 *     properties:
 *        id:
 *          type: number
 *        userId:
 *          type: string
 *        drinkId:
 *          type: string
 */
@Entity()
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  userId: number;

  @Column({ type: 'varchar' })
  drinkId: number;

  @ManyToOne((type) => User, (user) => user.likes)
  user: User;

  @ManyToOne((type) => Drink, (drink) => drink.likes)
  drink: Drink;
}
