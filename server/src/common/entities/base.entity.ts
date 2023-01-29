import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pages } from '../enums/pages.enum';

export abstract class BaseTable {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 1 })
  ordering: number;

  @Column({ default: '' })
  imgUrl: string;

  @Column({ type: 'simple-array', default: '' })
  links: Array<string>;

  @Column({ type: 'simple-array', default: '' })
  showOnlyPages: Array<Pages>;
}
