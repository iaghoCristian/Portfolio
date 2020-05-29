import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Certificate from './Certificate';

@Entity('projects')
class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imagePath: string;

  @Column()
  githubLink: string;

  @Column()
  mediaPath: string;

  @Column()
  gifPath: string;

  @Column()
  iconPath: string;

  @Column()
  link: string;

  @Column()
  certificate_id: string;

  @OneToOne(() => Certificate, { eager: true })
  @JoinColumn({ name: 'certificate_id' })
  certificate: Certificate;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Project;
