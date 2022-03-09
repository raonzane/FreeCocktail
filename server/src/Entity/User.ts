import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Like } from './Like';
import { loginType } from '../Interfaces/IUser';
/**
 * @swagger
 *  components:
 *   schemas:
 *    User:
 *     type: object
 *     properties:
 *           id:
 *              type: number
 *           nickname:
 *              type: string
 *           password:
 *              type: string
 *           iamge:
 *              type: string
 *           email:
 *              type: string
 *           type:
 *              type: string
 *              enum: [none,kakao,google,naver]
 */

/**
 * @swagger
 *  components:
 *   schemas:
 *    UserReturn:
 *     type: object
 *     properties:
 *        data:
 *         type: object
 *         properties:
 *           user:
 *            $ref: '#/components/schemas/User'
 *           accessToken:
 *            type: string
 *           message:
 *            type: string
 */
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  nickname: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'enum', enum: loginType, default: loginType.none })
  type: loginType;

  @OneToMany((type) => Like, (like) => like.user)
  likes: Like[];
}
