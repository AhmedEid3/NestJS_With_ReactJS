import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    const contact = this.contactRepository.create(createContactDto);
    return this.contactRepository.save(contact);
  }

  async findAll() {
    return this.contactRepository.find({ order: { createdAt: 'ASC' } });
  }

  async findOne(id: number) {
    const contact = await this.contactRepository.findOneBy({ id });
    if (!contact) throw new BadRequestException(`Contact #${id} not found`);
    return contact;
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const contact = await this.contactRepository.preload({
      id,
      ...updateContactDto,
    });
    if (!contact) throw new BadRequestException(`Contact #${id} not found`);
    return this.contactRepository.save(contact);
  }

  async remove(id: number) {
    const contact = await this.findOne(id);
    return this.contactRepository.remove(contact);
  }
}
