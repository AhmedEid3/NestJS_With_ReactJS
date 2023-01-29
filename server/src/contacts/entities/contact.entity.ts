import { BaseTable } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';
import { Social } from './social.entity';

@Entity()
export class Contact extends BaseTable {
  @Column({ default: '', nullable: true })
  email: string;

  @Column({ type: 'simple-array', default: '' })
  phones: string;

  @Column({ default: '', nullable: true })
  address: string;

  @Column({ default: '', nullable: true })
  addressAr: string;

  @Column({ default: '', nullable: true })
  slogan: string;

  @Column({ default: '', nullable: true })
  sloganAr: string;

  @Column({ type: 'jsonb', nullable: true })
  socials: Array<Social>;
}
