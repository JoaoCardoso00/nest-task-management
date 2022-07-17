import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './data/user.entity';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async signUp(AuthCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = AuthCredentialsDto;

        console.log(username, password);

        const user = this.userRepository.create({
            username,
            password,
        });

        await this.userRepository.save(user);
    }
}
